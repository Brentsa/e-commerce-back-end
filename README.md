# e-Commerce Back-End

![badge](https://img.shields.io/badge/license-MIT%20License-green)

## Description
A back-end component for an e-commerce website. Work with products, categories, and product tags to operate your online shop. Employs CRUD operations to create, read, update, and delete data in the database. This app also utilizes an Object Relational Mapping (ORM) framework. Sequelize is the ORM used to manipulate the database.

## Table of Contents

* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Questions](#Questions)
* [Credits](#Credits)

## Installation
1. Clone this repo to your local machine
2. Create a ".env" file in the root directory and assign DB_NAME, DB_USER, and DB_PW your database name, username, and password respectively
3. Navigate to the root folder of the application in your command line app and enter “npm install” to download the dependencies
4. From the root directory in the CLI, enter MySQL and execute “source db/schema.sql” to initialize your database then exit MySQL.
5. Type "npm run seed" in your CLI to fill the database tables

## Usage
[Walkthrough Video](https://drive.google.com/file/d/1ohwjxuglJ5CpDwqEsXzjGJC2594sTdpS/view)
<br>
1. Navigate to the root folder of the application in your CLI.
2. Start the server by entering “npm start”
3. Open your API client (eg. Insomnia Core or Postman) to begin interacting with the api routes.
4. Once finished, close the server down by pressing ctrl + c in your CLI

## License
MIT License

## Questions
You may contact the project author via:
* Email: seanbrent5@live.ca
* GitHub: [Brentsa](https://github.com/Brentsa)

## Credits
Sean Brent