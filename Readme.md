Applying as an NodeJS Developer:

Postman request is avaliable in file name postman

Have to give x-api-key in header with token

----packages are used in this api are below----
    
    "bcrypt": "^5.0.1",
    "body-parser": "^1.20.0",
    "express": "^4.18.1",
    "jsonwebtoken": "^8.5.1",
    "moment": "^2.29.4",
    "mongoose": "^6.4.7",
    "nodemon": "^2.0.19"

--- Start using command npm init ---
--- Then install all neccessary package required for this assignment---


1. /*User Registration*/

-------------------------
This api is used to create an user by taking details from user 
------------------------- 
   
url:- localhost:5000/register
Method :- Post

 requested data from user in json

 { 
    "title":"Mr",
    "name":"raju rastogi",
    "email":"raju12789@gmail.com",
    "password":"Raju@123"
}

Then the response in postman:-

{
    "status": true,
    "message": "successful",
    "data": {
        "title": "Mr",
        "name": "raju rastogi",
        "email": "raju12789@gmail.com",
        "password": "$2b$06$LSPPtfsdtslX.bKo0i1l/ueFJGxmaF.4bvEs88GNIA7EYJu/EuGGC",
        "isDeleted": false,
        "_id": "62f20f2ad9534f0f1d5aa1fe",
        "createdAt": "2022-08-09T07:39:22.498Z",
        "updatedAt": "2022-08-09T07:39:22.498Z",
        "__v": 0
    }
}


2. *Login*

---------------------------
This api is used to login user by taking details are email and password if this is correct the we have used jwt token and set in header with the name x-api-key
----------------------------
url:- localhost:5000/login
Method :- Post

Requested data from user in json:-

{
    "email":"raju12789@gmail.com",
    "password":"Raju@123"
}

Then the response in postman:-

{
    "status": true,
    "message": "login Successful",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI2MmYyMGYyYWQ5NTM0ZjBmMWQ1YWExZmUiLCJpYXQiOjE2NjAwMzA3NzZ9.v8n2Cp5YuQ0x0-Zt1RoV8IP4e99uR48nCPHsdibMWo4"
}


3. *Register product*

--------------------
This api help to create product or register product with some data from user
--------------------

url:-localhost:5000/products
Method :- Post

Requested data from user in json:-

 {
    "name":"Seeing Eye Dog",
    "description":"Technically it's only a Seeing Eye Dog if it's trained by Seeing Eye of Morristown New Jersey. Otherwise it's a guide dog. (We're as guilty of this as anyone.)",
    "price":"10999"

}

Then the response in postman:-

{
    "status": true,
    "message": "product created successfully",
    "data": {
        "name": "seeing eye dog",
        "description": "Technically it's only a Seeing Eye Dog if it's trained by Seeing Eye of Morristown New Jersey. Otherwise it's a guide dog. (We're as guilty of this as anyone.)",
        "price": 10999,
        "isDeleted": false,
        "_id": "62f20bbf89c4cb04ae2a3ba3",
        "createdAt": "2022-08-09T07:24:47.293Z",
        "updatedAt": "2022-08-09T07:24:47.293Z",
        "__v": 0
    }
}


4. *Create sales*
 
    -----------------
    If user want to buy a product then this api help to buy a product in any quantity from listed product this api is not public so i have used authentication and authorization with jwt token. data in name of the product because name is unique and no of the quantity
    -----------------
     url:- localhost:5000/user/62f20f2ad9534f0f1d5aa1fe/sales
     Method :- Post

Requested data from user in json:-

{
    "name":"onesies",
    "quantity":"4"
}

Then the response in postman:-

{
    "status": true,
    "message": "successful",
    "data": {
        "userId": "62f20f2ad9534f0f1d5aa1fe",
        "name": "onesies",
        "quantity": 4,
        "amount": 1996,
        "Date": "08/09/2022",
        "_id": "62f22635654ef46142f231e7",
        "createdAt": "2022-08-09T09:17:41.147Z",
        "updatedAt": "2022-08-09T09:17:41.147Z",
        "__v": 0
    }
}


5. *Top 5 Seals product*

  ----------------
  This api help user to find top 5 seals product in current time. This api is public 
  ----------------

  url:- localhost:5000/user/products
  Method :- Get

  Then the response in postman:-

{
    "status": true,
    "message": "successful",
    "data": [
        {
            "_id": "62f20b8c89c4cb04ae2a3ba0",
            "name": "fluffernutter",
            "description": "Fluffernutter is a registered trademark of the makers of Marshmallow Fluff, Durkee-Mower, Inc.",
            "price": 899,
            "isDeleted": false,
            "createdAt": "2022-08-09T07:23:56.878Z",
            "updatedAt": "2022-08-09T07:23:56.878Z",
            "__v": 0
        },
        {
            "_id": "62f20b6789c4cb04ae2a3b9d",
            "name": "crock-pot",
            "description": "The Crock-Pot, a brand name for the slow cooker, was originally developed as a beanery appliance.",
            "price": 5099,
            "isDeleted": false,
            "createdAt": "2022-08-09T07:23:19.714Z",
            "updatedAt": "2022-08-09T07:23:19.714Z",
            "__v": 0
        },
        {
            "_id": "62f20a5f89c4cb04ae2a3b8f",
            "name": "jet ski",
            "description": "You might think you’re riding around on a Jet Ski, but if it’s not made by Kawasaki Heavy Industries, it’s just a personal watercraft.",
            "price": 10000,
            "isDeleted": false,
            "createdAt": "2022-08-09T07:18:55.692Z",
            "updatedAt": "2022-08-09T07:18:55.692Z",
            "__v": 0
        },
        {
            "_id": "62f20ad589c4cb04ae2a3b95",
            "name": "onesies",
            "description": "The term Onesies, referring to infant bodysuits, is owned by Gerber Childrenswear. According to their website, the trademark is aggressively enforced. (Twosies and Funzies also belong to Gerber.)",
            "price": 499,
            "isDeleted": false,
            "createdAt": "2022-08-09T07:20:53.182Z",
            "updatedAt": "2022-08-09T07:20:53.182Z",
            "__v": 0
        },
        {
            "_id": "62f20bbf89c4cb04ae2a3ba3",
            "name": "seeing eye dog",
            "description": "Technically it's only a Seeing Eye Dog if it's trained by Seeing Eye of Morristown New Jersey. Otherwise it's a guide dog. (We're as guilty of this as anyone.)",
            "price": 10999,
            "isDeleted": false,
            "createdAt": "2022-08-09T07:24:47.293Z",
            "updatedAt": "2022-08-09T07:24:47.293Z",
            "__v": 0
        }
    ]
}


6. *Today sales renenew*

 -------------
  this api is private and can be assiable by user but its can be also build like an admin only access by using athorization and authentication and it is used to get today total revenew with number of seals today 
 -------------

  url:- localhost:5000/user/62f20f2ad9534f0f1d5aa1fe/revenew
  Method :- Get

  Then the response in postman:-
  {
    "status": true,
    "message": "successful",
    "Today_Product_Sale": 10,
    "Today_Sales_Revenew": 103578
}