const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:test123@localhost:5432/') // postgres database, user: postgres, pass: test123, on localhost port 5432

const connectionTest  = async () =>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established.')
    } catch (err) {
        console.log(err)
    }
};

connectionTest();

module.exports = sequelize;


// start docker and both curse and bless its existence
// docker run -dp 5432:5432 -v postgres-data:/var/lib/postgresql/data -e POSTGRES_PASSWORD=test123 postgres:latest
// docker ps
// docker exec -tiu postgres <container id> psql
// \l    //databases
// \dt  // tables
// use an SQL command to create table users
//CREATE TABLE movieUsers (id serial primary key, username varchar(255) not null, email varchar(255) not null, password varchar(10) not null);
//create table movies (id serial not null primary key, title varchar(255) not null, watched varchar(5) not null default false, userID int not null, foreign key (userID) references movieUsers(id)); 
// \q   // quit