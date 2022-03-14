import scrapy

base_path = "https://permanencia.org.br"

class SpiderPermanencia(scrapy.Spider):
    name = "spider_permanencia"

    start_urls = ["https://permanencia.org.br/drupal/node/30"]

    def parse(self, response):
        for authorPage in response.xpath('//div[@id="content"]//ul[@class="menu"]//li/a'):
            linkToPage = authorPage.xpath('@href').extract()[0]
        
            if linkToPage != '/drupal/category/2':
                path = base_path + linkToPage
                yield scrapy.Request(url=path, callback=self.fetchAuthorPage)

    def fetchAuthorPage(self, response):
        authorName = response.xpath('//div[@id="content"]//h1[@class="title"]/text()').extract()[0]

        if authorName:
            authorName = authorName.split('(')[0].strip()
        else:
            return None

        for authorArticle in response.xpath('//div[@id="content"]//h2/a'):
            print('Autor: ' + authorName +
                '\nArtigo: ' + authorArticle.xpath('text()').extract()[0] + 
                '\nLink: ' + authorArticle.xpath('@href').extract()[0] + '\n')
        
        nextPage = response.xpath('//li[@class="pager-next"]')

        if nextPage:
            nextPageHref = nextPage.xpath('a/@href').extract()
            if len(nextPageHref) > 0:
                path = base_path + nextPageHref[0]
                yield scrapy.Request(url=path, callback=self.fetchAuthorPage)
            
