from pymongo import MongoClient
from config import MONGODB_URI,COLLECTION_NAME,DATABASE_NAME
from bson import ObjectId
client = MongoClient(MONGODB_URI)
db=client[DATABASE_NAME]
collection=db[COLLECTION_NAME]

def get_tasks_from_DB():
    tasks=list(collection.find({}))
    new_tasks=[]
    for task in tasks:
        task["_id"]=str(task["_id"])
        new_tasks.append(task)
    return new_tasks
    
def delete_task_from_DB(id):
    documents=get_tasks_from_DB()
    for task in documents:
        if task["_id"]==str(id):
            collection.delete_one({"_id" : ObjectId(str(id))})
            return True
        
def add_task_to_DB(task_from_frontend):
    collection.insert_one(task_from_frontend)
    return get_tasks_from_DB()[-1]
    

