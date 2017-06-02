# Git_User-Lookup
This repository allows one to search github profiles and view corresponding repositories.

#Setup/Installation Requirements
Node.js, Gulp, and Bower installation required.

Gulp and Bower build can be executed after cloning using the following commands:

* $ npm install
* $ bower install
* $ touch .env

To make more than 60 calls per day to the GitHub API you must aquire a Person Access Token to include in the .env file:

https://github.com/blog/1509-personal-api-tokens

Run program in a command line terminal application from the top level directory using:
* $gulp build
* $gulp serve

