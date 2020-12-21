const PhoneBookModel = require('../model/phonebook')

exports.get_data =  async (req, res, next) => {
	try{
        const data = await PhoneBookModel.findAll({})
        res.json({data})
        console.log("data" , data)
    }catch(error){
        console.log("An error occured", error)
    }
};

exports.add_to_phoneBook = async (req,res, next) => {
    const {firstName, lastName, phoneNumber} = req.body

    try{
        await PhoneBookModel.create({
            firstName,
            lastName,
            phoneNumber,
        })
        console.log("Recorded successfully")

    }catch(error){
        console.log("error occured",error)
    }
    res.redirect('/')
}
