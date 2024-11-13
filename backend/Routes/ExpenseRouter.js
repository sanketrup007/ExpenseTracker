const { fetchExpenses, addExpenses, deleteExpenses } = require('../Controllers/ExpenseController')
const router = require('express').Router();

router.get('/',(req,res)=>res.send('expense get method working'))

router.get('/',fetchExpenses);
router.post('/',addExpenses);
router.post('/',deleteExpenses);
module.exports = router;