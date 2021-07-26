# JSONFirebaseUploader

A program that uploads JSON objects to firebase

# To make it work

- Download firestore serviceAccountKey.json

    <img width="1437" alt="Screenshot 2021-07-26 at 18 32 16" src="https://user-images.githubusercontent.com/33216628/127025911-a62c4e56-6bd6-4c1e-84df-fb922a1967f0.png">

- Clone this project
- Add the serviceAccountKey.json at the root
- Add the JSON data at the root of the system aswell

- Run npm install in the project directory
- Check that your file explorer looks like this

  ![image](https://user-images.githubusercontent.com/33216628/127026266-c4272041-76c8-402b-9f5b-9a05d2a3592d.png)

- Go to the folder holding the project and run npm <folder_name_with_project>

# Tips

- To create my object i use http://www.objgen.com/json
- If you are lucky enough to have a csv file use https://csvjson.com/csv2json to convert it to json

- Please not that http://www.objgen.com/json does not work well with nested objects. So you need to nest your objects one extra time after using objgen. If in doubt check out the data file in this project.

##### This is incorrect

{
"exerciseId": 1,
"categoryId": 1,
"isPremium": false,
"duration": "5",
"frequency": {
"times": 3,
"periodical": "3"
},
}

##### This is correct

{
extraNest {
"exerciseId": 1,
"categoryId": 1,
"isPremium": false,
"duration": "5",
"frequency": {
"times": 3,
"periodical": "3"
},
}
}
