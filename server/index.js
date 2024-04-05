var Express = require('express');
var MongoClient = require('mongodb').MongoClient;
var cors = require('cors');
let bodyParser = require('body-parser');
const multer = require('multer');

var app = Express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var CONNECTION_STRING = "mongodb://jayanthkanithi2003:3sISWXjg2TLdyVcv@ac-xi2uk3k-shard-00-00.hs6b9wp.mongodb.net:27017,ac-xi2uk3k-shard-00-01.hs6b9wp.mongodb.net:27017,ac-xi2uk3k-shard-00-02.hs6b9wp.mongodb.net:27017/?ssl=true&replicaSet=atlas-msnpb9-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";
var DATABASENAME = "onlinematrimony";

app.listen(5038, () => {
    MongoClient.connect(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
        if (error) {
            console.error("MongoDB connection failed:", error);
            return;
        }
        var database = client.db(DATABASENAME);
        console.log("MongoDB connection Successful");

        // Define registration endpoint here, after successful connection
        app.post("/register", (request, response) => {
            var fname = request.body.fname;
            var lname = request.body.lname;
            var email = request.body.email;
            var username = request.body.username;
            var password = request.body.password;
            
            // Check if the username already exists in the database
            database.collection('onlinematrimonycollection').findOne({ username: username }, (err, user) => {
                if (err) {
                    console.error("Error:", err);
                    return response.status(500).json({ error: "An error occurred while processing your request. Please try again later." });
                }
                if (user) {
                    // Username already exists, send error response
                    return response.status(400).json({ error: "Username already exists. Please choose a different username." });
                }
                // If the username is unique, proceed with registration
                var data = {
                    username: username,
                    password: password,
                    fname: fname,
                    lname: lname,
                    email: email
                };
                database.collection('onlinematrimonycollection').insertOne(data, (err, collection) => {
                    if (err) {
                        console.error("Error:", err);
                        return response.status(500).json({ error: "An error occurred while processing your request. Please try again later." });
                    }
                    console.log("Record Inserted Successfully");
                    return response.json({ Status: "successful" });
                });
            });
        });
    });
});
