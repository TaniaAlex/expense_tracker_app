## Expense Tracker App

Build Frontend -> client
Build Backend -> server with mongoDB Atlas

# Security

For security reasons add your server config.env to gitignore

## Structure

1.Create new "client" dir and copy all frontend folders into it

2.Install dependencies: express, mongoose, colors/chalk, morgan, dotenv

3.Install -D dependencies: nodemon and concurrently(runs backend server on a port 5000 and react dev server on port 3000 at the same time)

4.Use Talend API or Postman Chrome Extention to check server response

5.Create DB on <MongoDB.com>:
-create mongoDB user and password in Atlas
-create a cluster

6.Add MONGO_URI variable to config.env and to gitignore

7.Integrate backent to frontend:
-make a request from frontend to backend with axios
