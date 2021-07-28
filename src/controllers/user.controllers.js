const sql = require('../db/connection')
const { QueryTypes } = require('sequelize');


exports.createUser = async (req, res) => {
    try {
        const user = [
            req.body.user,
            req.body.email,
            req.body.pass
        ]
        await sql.query(`insert into movieusers(username, email, password) VALUES('${user[0]}', '${user[1]}', '${user[2]}')`)
        res.status(200).send({message: 'user created'});
    } catch (error) {
        res.status(500).send({
            message: "Create user unsuccessful"
        })
    }
}

exports.getUsers = async (req, res) => {
    try {
        const users = await sql.query(`select * from movieusers`, {type: QueryTypes.SELECT})
        res.send(users);
    } catch (error) {
        res.send(error)
    }
}

exports.getUser = async (req, res) => {
    try {
        const user = await sql.query(`SELECT username, email FROM movieusers WHERE id = ${req.params.id}`, {type: QueryTypes.SELECT})
        res.send(user)
    } catch (error) {
        res.status(error)
    }
}

exports.updateUser = async (req, res) =>{
    try {
        await sql.query(`update movieusers set ${req.body.detail} = "${req.body.new}" where username = ${req.body.user} and pass = ${req.body.pass}`)
        res.send(`${req.body.user} has had its ${req.body.detail} set to ${req.body.new}`)
    } catch (error) {
        res.status(error)
    }
}

//needs read, update, delete