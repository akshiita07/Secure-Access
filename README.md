A web server built with Node.js and Express to demonstrate password-protected content access. Utilizing npm for dependencies, it integrates body-parser for form data parsing, and path and url modules for handling file paths. Users enter a password on the home page; correct entries grant access to a protected projects page, while incorrect ones redirect back. This setup shows basic Node.js server setup, static file serving, and authentication logic.

1. **Initialize the Project with npm init**
   - Run `npm init` in your terminal. This command initializes a new Node.js project and creates a `package.json` file. This file stores metadata about the project, including dependencies, scripts, version, and author information. Follow the prompts to set up your project details.

2. **Install Express Framework**
   - Execute `npm i express` to install Express. Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It simplifies the process of setting up a server and handling HTTP requests.

   ```javascript
   import express from "express";
   ```

3. **Install Body-Parser Middleware**
   - Use `npm i body-parser` to install the body-parser module. Body-parser is a middleware that helps parse incoming request bodies in a middleware before your handlers, making it easier to handle data sent from forms.

   ```javascript
   import bodyParser from "body-parser";
   ```

4. **Install Path Module**
   - Execute `npm i path` to install the path module. The path module provides utilities for working with file and directory paths. It’s a core module in Node.js.

5. **Install URL Module**
   - Use `npm i url` to install the URL module. The URL module provides utilities for URL resolution and parsing.

   ```javascript
   import { dirname } from "path";
   import { fileURLToPath } from "url";
   const __dirname = dirname(fileURLToPath(import.meta.url));
   ```

6. **Set Up Express Application**
   - Initialize the Express application and set the port.

   ```javascript
   const app = express();
   const port = 3000;
   ```

7. **Serve Static Files**
   - Set up a route to serve an HTML file from the public directory.

   ```javascript
   app.get("/", function (req, res) {
       res.sendFile(__dirname + "/public/index.html");
   });
   ```

8. **Use Body-Parser Middleware**
   - Enable the body-parser middleware to parse URL-encoded data.

   ```javascript
   app.use(bodyParser.urlencoded({ extended: true }));
   ```

9. **Implement Password Authentication**
   - Define a secret password and create a POST route to check the entered password. If the password matches, send the user to a secret page; otherwise, redirect back to the homepage.

   ```javascript
   const mySecretPassword = "WeCode@123";

   app.post("/check", function (req, res) {
       if (req.body.pass === mySecretPassword) {
           res.sendFile(__dirname + "/public/secret.html");
       } else {
           res.redirect("/");
       }
   });
   ```

10. **Start the Server**
    - Start the server and listen on the defined port.

    ```javascript
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
    ```

### HTML Pages
- **index.html**: Contains a form for password input.
- **secret.html**: Displays a list of projects, accessible only after correct password entry.

This setup provides a simple Express server with password-protected access to specific content, demonstrating the basics of Node.js and Express integration.
