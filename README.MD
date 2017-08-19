# BookShop API (Node and Express Rest API)

This is project for enthusiast who wants to learn how to write a complete backend CRUD application in NODE.js and EXPRESS.
It uses Mongo DB for backend and mongoose as ORM(But you can connect any kind of data base for it)

* MongoDB (via Mongoose)
* Node.js
* Express

## About Express

Fast, unopinionated, minimalist web framework for Node.js. xpress is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
 [https://expressjs.com/]

### APIs
With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy.
### Performance
Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love.
## Getting Started [Based on Mac]

### Prerequisites

First you need to install mogodb server from [https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/]
Or follow below steps for brew based installation

Update Homebrew’s package database
```
$ brew update
```

Install MongoDB
```
$ brew install mongodb
```

Create the data directory
```
$ mkdir -p /db/mongodb
``` 

Run MongoDB
```
mongod --dbpath ./db/mongodb

```

Run MongoClient
```
mongo

```

Feed Data on Mongo Client

```
use bookshop

db.createCollection('books')

db.createCollection('genres')

db.genres.insert({name: 'Fiction'})

db.genres.insert({name: 'Suspense'})

db.books.insert({title:'Argo', genre: 'Suspense', description:'Story of American CIA agent rescuing US embassy employes', author: 'Brad Foster', publisher: 'Penguin Publications', pages: 300, image_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Argo2012Poster.jpg/220px-Argo2012Poster.jpg', imdb_url: 'http://www.imdb.com/title/tt1024648/'})

db.books.insert({title:'Harry Potter', genre: 'Fiction', description:'Story of Magicians', author: 'Justin Seeley', publisher: 'Eagle Publications', pages: 350, image_url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UY1200_CR90,0,630,1200_AL_.jpg', imdb_url: 'http://www.imdb.com/title/tt0241527/'})

```
* If mongo db already started pls use  ``` killall mongod ```
* If lock file error comes pls delete all subfiles in /data/mongodb folder


### Installing

Now lets start our Graphql mix project 

```
git clone https://github.com/suwigyarathore/BookShop-Rest-API.git
cd <cloned directory name>
npm install
npm start
```

And go to browser and hit below link to get books and genere

```
http://localhost:3000/api/books

http://localhost:3000/api/books

```

You can run various other request like PUT, POST & delete refer app.js for more
.Best way to hit is to use Advance Rest Client Extension on Chrome [https://chrome.google.com/webstore/detail/advanced-rest-client/hgmloofddffdnphfgcellkdfbfbjeloo]



End with an example of getting some data out of the system or using it for a little demo


## License

This project is licensed under the MIT License 
