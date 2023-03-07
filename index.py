from flask import Flask,request
from flask_cors import CORS
import os
from db import get_tasks_from_DB,delete_task_from_DB,add_task_to_DB

app=Flask(__name__)
CORS(app) # If flask_cors throws error, run the command "pip install flask-cors --upgrade"

import json
file=open("db.json")
data=json.load(file)


@app.route("/")
def base():
    return {"message":"success"}

@app.route("/tasks",methods=["GET","POST"])
def tasks():
    if request.method=="GET":
        data_from_db=get_tasks_from_DB()
        return {"data":data_from_db}
    
@app.route("/tasks/post",methods=["POST"])
def add_task():
    try:
        if request.method=="POST":
            grab_data=request.get_json()
            # This returns the added task
            task_posted=add_task_to_DB(grab_data["taskFromAdd"])
            return {"message":"successfully saved","data":task_posted}
    except Exception as e:
        return {"error":str(e)}
        

@app.route("/tasks",methods=["DELETE","GET"])
def delete_task():
    try:
        if request.method=="DELETE":
            id=request.args.get("id")
            if delete_task_from_DB(id):
                return {"message":"deleted successfully"}       
            return {"message":"item not found"}
    except Exception as e:
        return {"error":str(e)}


    # works from the browser's point of view and in the frontend if method:"DELETE" is not specified in fetch function, then the below code works.
    """ if request.method=="GET":
            for i in data:
                if i["id"]==id: 
                    data.remove(i)
                    return {"message":"deleted successfully"}       
        return {"message":"item not found"} """
    
if __name__ == '__main__':
    app.run(host= "0.0.0.0",port=int(os.environ.get("PORT", 5002)),debug=True)
    
