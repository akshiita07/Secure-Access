//1. npm init
//2. npm i express
import express from "express";
//3. npm i body-parser
import bodyParser from "body-parser";
//4. npm i path
//5. npm i url

const app = express();
const port = 3000;

//for __dirname
import { dirname } from "path";                   //for __dirname
import { fileURLToPath } from "url";              //for __dirname
const __dirname = dirname(fileURLToPath(import.meta.url));              //for __dirname


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

//to use body-parser:
app.use(bodyParser.urlencoded({ extended: true }));

//set password
const mySecretPassword = "WeCode@123";


app.post("/check", function (req, res) {
    // console.log(req.body);                         output:{ pass: 'pass' }
    // console.log(req.body.pass);                    output:pass

    //if password entered matches with our set password then post request of secret.html using form action
    if (req.body.pass === mySecretPassword) {
        res.sendFile(__dirname + "/public/secret.html");

    }
    else {
        //if password entered is wrong-> then post request of index.html again
        // res.sendFile(__dirname + "/public/index.html");      use redirect ie better!!
        res.redirect("/");

    }
});

//i can even use a diy middleware to authenticate password

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})