# myNodejsTraining
Just for test

# 0. Calculator Node

## Phase 1

   Create a app.js that require another file called `calculator.js` When we call node `app.js` we should show in the console the following:
   `The sum of 3 & 7 is: 10 The multiplication of 3 & 7 is: 21`
   `app.js` should only show in the console the result of calling the functions sum & multiplication
   These methods should be defined (and exported) in `calculator.js`

## Phase 2

   Create a folder called operations and create in every folder a file exporting every operation needed in the main `app.js` file
   `app.js` `operations/ sum.js` `multiplication.js` `substraction.js` `division.js`

## Phase 3

  Install the module moment and use it to show the current time in this way:
  `Today is : Monday, October 31st 2016, 10:08:34 am The sum of 3 & 7 is: 10 The multiplication of 3 & 7 is: 21`


# 1. Connection to the server

Write a node.JS program that execute a connection to server and return success message like `"Success, i'm listening from port: 3000"`

Hint: Yo u need npm module - http
Extra

Set the port of the connection using an environment variable PORT

# 2. Show Content

Write a node program that read a file (passed as parameter) in local machine and shows in the console the content of it.

node `app.js` `test.txt`

Hint: You need npm module - fs

# 3. HTML Code

Write a node.JS program that read and shows in the console the html code of one external page. The link of the external page should be read from a file `link.txt
`
Hint: You need npm module -> https://github.com/request/request 



# 4. File list

Write a node.JS program that list the content of the current directory indicating if is a directory or a file

`$ node ex4.js 
FILE:ex1.js
FILE:ex2.js
FILE:ex3.js
FILE:ex4.js
FILE:getLinksNode.js
FILE:link.txt
DIR :node_modules
FILE:recursiveContentsDir.js
FILE:results.txt
FILE:test.txt`

Hint: You need `fs.readdirSync`, `fs.lstatSync` and `isDirectory()`

