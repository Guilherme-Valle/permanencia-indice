import scrapy
from mongo_connection.mongo_connection import MongoConnection

base_path = "https://permanencia.org.br"
mongo_connection = MongoConnection()
class SpiderPermanencia(scrapy.Spider):
    name = "spider_permanencia"

    start_urls = ["https://permanencia.org.br/drupal/node/30"]

    def parse(self, response):
        for author_page in response.xpath('//div[@id="content"]//ul[@class="menu"]//li/a'):
            link_to_page = author_page.xpath('@href').extract()[0]
        
            if link_to_page != '/drupal/category/2':
                path = base_path + link_to_page
                yield scrapy.Request(url=path, callback=self.fetch_author_page)

    def fetch_author_page(self, response):
        author_name = response.xpath('//div[@id="content"]//h1[@class="title"]/text()').extract()[0]
        author_id = None

        if author_name:
            author_name = author_name.split('(')[0].strip()
            author = mongo_connection.get_author(author_name=author_name)
            if author == None:
                author_id = mongo_connection.insert_author({"name": author_name})
            else:
                author_id = author["_id"]
        else:
            return None

        for author_article in response.xpath('//div[@id="content"]//h2/a'):
            mongo_connection.insert_link({
              "authorId": author_id,
              "authorName": author_name,
              "title": author_article.xpath('text()').extract()[0],
              "link": base_path +  author_article.xpath('@href').extract()[0]
            })
        
        next_page = response.xpath('//li[@class="pager-next"]')

        if next_page:
            next_page_href = next_page.xpath('a/@href').extract()
            if len(next_page_href) > 0:
                path = base_path + next_page_href[0]
                yield scrapy.Request(url=path, callback=self.fetch_author_page)
            
