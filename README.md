# NoSQL Web Application

NoSQL project using MongoDB and the dataset Companies2.json

<p align="center"> 
<img src="https://media.giphy.com/media/knnN0jlDc1zVe/giphy.gif">
</p>

***

##  ⚙️ How to install and use

1. Clone the repository or download the zip file 
1. With Node.js command prompt, navigate where you downloaded the file and go to the Web-App-NoSql folder using :
```
cd Web-App-NoSql
```

***

##  🏁 Install dependencies

When you are in the Web-App-NoSql folder, you need to install the dependencies using:

```
npm install 
```
***
##  🐸 MongoDB

To run the app, you need to have your MongoDB connection established:
```
cd MongoDB
cd Server
cd 3.4
mongod
```
***
## 🔼 Create database and fill it

To do so, take the file **companies2.json** and put it in the MongoDB/Server/3.4/bin folder (where is mongod) then, in this folder, run the command:

```
mongoimport --host localhost:27017 --db COMPANIES --collection companies clients.json
```

***

## ✔️ Launch the app

Then you can launch the app by running:

```
npm run build
```
Then,

```
npm start
```

## 💎 Results:

Now that the app is launched, go to [localhost:3000](http://localhost:3000/), it will take few minutes to load the dataset. Then you should see the differents objects of the dataset and be able to add, edit and delete elements, as you can see on the screenshots below :

<p align="center"> 
<img src="https://github.com/CyrineBzn/Web-App-NoSql/blob/master/index.png">
<h4 align="center">This is the index where you can see all elements</h4>
</p>

<p align="center"> 
<img src="https://github.com/CyrineBzn/Web-App-NoSql/blob/master/add.png">
<h4 align="center">Here we add a new company named Travers in our database</h4>
</p>

<p align="center"> 
<img src="https://github.com/CyrineBzn/Web-App-NoSql/blob/master/view.png">
<h4 align="center">This is the view of one company, you can either edit it or remove it</h4>
</p>


## 🎓 Credits:

* BOUZAYENE Cyrine
* DYANI Imane 
* GHAFARI Paul

