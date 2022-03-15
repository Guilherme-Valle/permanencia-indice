from pymongo import MongoClient

class MongoConnection:
    mongo_client = MongoClient()
    db_permanencia = mongo_client.permanencia_indice
    authors_collection = db_permanencia.authors
    links_collection = db_permanencia.links

    def insert_author(self, author):
        result_obj = self.authors_collection.insert_one(author)
        return result_obj.inserted_id

    def get_author(self, author_name):
        author = self.authors_collection.find_one({"name": author_name})
        return author

    def insert_link(self, link):
        result_obj = self.links_collection.insert_one(link)
        return result_obj.acknowledged
