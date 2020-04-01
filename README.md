# Task

The Back-End is made using Node-Express. And the database used is Mongo-Db. secure Application using
user authentication user can do CRUD operation, using nodemailer and node-corn sends scheduled task to user email.


## Dependencies

  1. "bcryptjs": "^2.4.3",
  2. "express": "^4.17.1",
  3. "jsonwebtoken": "^8.5.1",
  4. "lodash": "^4.17.15",
  5. "mongoose": "^5.9.6",
  6. "node-cron": "^2.0.3",
  7. "nodemailer": "^6.4.6",
  8. "validator": "^13.0.0"

## Requirements

For development, you will only need Node.js and a node global package, npm, installed in your environement.mongoDB for database.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g


### Yarn installation
  After installing node, this project will need yarn too, so just run the following command.

     $ npm install -g yarn

## Running the project

    $ nodemon index.js
