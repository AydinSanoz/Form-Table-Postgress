const PhoneBookModel = require('../model/phonebook')

exports.get_data =  async (req, res, next) => {
	try{
        const data = await PhoneBookModel.findAll({})
        res.json({data})
    }catch(error){
        res.json({message : "An error occured", error})
    }
};


exports.add_to_phoneBook =  async (req,res) => {
    const {firstName, lastName, phoneNumber} = req.body
   
    try{
        await PhoneBookModel.create({
            firstName,
            lastName,
            phoneNumber,
        })
        res.redirect('/')
    }catch(error){
        res.json({message : "error occured", error})
    }
    
}

exports.delete_phoneBook = async (req, res) => {
    console.log("params",req.params)
    try{
        await PhoneBookModel.destroy({
            where:{
                id : req.params.id
            }
        })
        res.redirect('/')
    }catch(error){
        res.json({message : error})
    }

}

exports.show_update_form = async (req, res) =>{
    const id = req.params.id
    try{
        const data = await PhoneBookModel.findAll({
            where:{
                id : req.params.id
            }
        })
        res.json({data})
    }catch(error){
        res.json({message : error})
    }
}

exports.update_phoneBook = async (req, res) =>{
    const {firstName, lastName, phoneNumber} = req.body
    try {
        await PhoneBookModel.update({firstName,lastName,phoneNumber},{
            where:{
                id: req.params.id
            }
        })
        res.json({message : `id : ${req.params.id} updated successfully `})
    } catch (error) {
        res.json({message : error})
    }
}
