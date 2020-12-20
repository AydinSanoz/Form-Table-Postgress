const {connection} = require('pg')
const {Sequelize, DataTypes, Model} = require('sequelize')

const {DB_USERNAME, DB_PASSWORD, DB_HOSTNAME, DB_PORT, DB_NAME} = process.env


const sequelize = new Sequelize(
    `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}:${DB_PORT}/${DB_NAME}`
)

sequelize.authenticate()
    .then(()=>console.log("connected successfully"))
    .catch((err)=>console.log("unable to connect database", err))




class PhoneBookModel extends Model {}

PhoneBookModel.init({
    firstName : {
        type : DataTypes.STRING,
    },
    lastName : {
        type: DataTypes.STRING
    },
    phoneNumber : {
        type : DataTypes.NUMBER
    }

},{
    sequelize,

})

module.exports= PhoneBookModel