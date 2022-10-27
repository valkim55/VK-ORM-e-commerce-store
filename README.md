# Welcome to behind the scenes of the e-commerce retail store!🛍️💻
### _This server-side application is a great way to become familiar with what's happening in the back of online-shopping and how does filtering a specific size or color shows you exactly what you asked for!_ <br>
#### _For easier navigation please refer to the links below._
### Navigation
 
- [**Description**](#description)
- [**Setup instructions**](#instructions)
- [**Sample demonstration**](#demonstration)
- [**Contact Info**](#contacts)
<br/><br/>
> ### **Application Description**📜
This server-side RESTful API application was designed to make managing e-commerce website more efficient and be simple to use. The database connected to the application contains information about the store's inventory and can be accessed through API routes and displayed in development environment (such as Insomnia, Postman etc.). Database contains three table: categories, products and tags and each of them has a designated API route that lets the user perform **CRUD operations** on the data.
<br/><br/>
> ### **Setup Instructions**⌨️
Once the repository is downloaded/cloned to the local machine, _package.json_ file has a list of dependencies necessary for running this application, some of them are listed below. <br>
The application runs in Node.js environment and the following packages will be handy to have installed:<br> 
    + _**npm install express sequelize mysql2**_ <br>
    + _**npm install dotenv --save**_ <br>
    + _**npm install --save-dev sequelize-cli**_ <br>
**dotenv** package is needed to create development environment. Each user can create **.env** file locally to store their credentials and protect them to be exposed publicly.<br> 
Then with having Sequelize initiated, the user can connect to the database through _mysql shell_ by running **source db/schema.sql** and back in Node **node seeds/server.js** will seed the tables into the database.<br>
After that simply hitting **node server** the application is invoked and the commands can be tested with Insomnia/Postman.
<br/><br/>
> ### **Demonstration** 📼
Please follow this link to watch a brief video demonstrating **GET, POST, PUT, DELETE** requests performed on the database. [Click me!](https://drive.google.com/file/d/182u6B-GbFsmJvBVU9e_GXhOCLzz3JJrO/view)
<br/><br/>
> ### **Contacts**📲
If you have any ideas/suggestions to take this application to further improvements, please feel free to reach out [here](https://www.linkedin.com/in/valeriya-kim-763572204/) <br>
**Thank you for visiting!**


