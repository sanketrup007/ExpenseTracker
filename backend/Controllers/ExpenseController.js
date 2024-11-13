const UserModel = require("../Models/User");

const addExpenses = async(req,res)=>{
    const body = req.body;
    const {_id} = req.user;
    try{
        const userData = await UserModel.findByAndUpdate(
            _id,
            {
                $push:{expense: body}
            },
            {new: true}
        );
        return res.status(200).json({
            message: "Expense Added sucessfully",
            success: true,
            data: userData?.expenses
        })

    }catch(err){
        return req.status(500).json({
            message:"Something went wrong",
            error:err,
            success: false
        })
        
    }
}

const fetchExpenses = (req, res) => {
    res.send('addExpenses');
}

const deleteExpenses = (req, res) => {
    res.send('addExpense');
}

module.exports = {
    addExpenses,
    fetchExpenses,
    deleteExpenses
}