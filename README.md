# CSV-Upload

1. For start the csv project , create a CSV-Upload folder
2. In this create a entry point of our project index.js 
3. Open the terminal and write npm init, and fill the details (package.json are created for our project).
4. install the expree nodemon ejs 
5. Create the MVC structure in which models, views, controller, routes, config,assets folder are create.
6. create a server using the express
7. create a file index.js in routes
8. connect the main idex.js file to routes index.js
9. In models craete a schema for how data is store and export the schema
10. In controller create a homeController, in this require the schema and create a home module thats resturn the res.render the "home
11. In Views create a home.ejs, layout.ejs file, it is the html file and link this file to css and js file 
12. In assets folder create css and js folder,create file css/home.css , js/header.css, fileview.css
13. install the express-ejs-layout, it provide the layout and partials for our project
14. create a .gitignore file , in this write "node_modules/", so our node_modules files are not uploaded in the github(beacuse its too large file)
15. for database install the mongoose(this wrapper the mongoDB and provide us to CRUD funtions)
16. In config create a file mongoose.js for connecting the localdb to our project by mongoose.connect()
17. now connect robo3t 
18. we use the csv-parser library for parsing the csv file(this library provide us to conviniant to read and extract the data from csv file).
19. we also install multer for uploading the file (it give us to convinient to upload a file in express)
20. create a file uploads, where the uploaded file are stored
21. 
