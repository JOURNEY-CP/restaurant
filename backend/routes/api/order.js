var express = require('express');
var router = express.Router();

var orderDb=require('../../db/order');
const {randomId}=require('../../util/random');
let orderDbConnect;



const orderRouter = DBConnect => {
    orderDbConnect=orderDb(DBConnect);
    return router;
  };

router.post('/',(req,res)=>{
    //  res.status(200).send("Hi");
    //  return ;

    const id=randomId(13)
     orderDbConnect.
       addOrder(id,req.body.customer_name,req.body.customer_mobile,req.body.table_no)
       .then(()=>res.status(200).send(id))
       .catch(err=>res.status(500).send(err));
  });

module.exports = orderRouter;