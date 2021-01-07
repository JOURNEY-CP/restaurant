var express = require('express');
var router = express.Router();

var orderDb=require('../../db/order');
const {randomId}=require('../../util/random');
let orderDbConnect;



const orderRouter = DBConnect => {
    orderDbConnect=orderDb(DBConnect);
    return router;
  };

router.post('/place',(req,res)=>{
    //  res.status(200).send("Hi");
    //  return ;
    const id={randomId}
     orderDbConnect.
       addOrder()
       .then(()=>res.status(200).send(id))
       .catch(err=>res.status(500).send(err));
  });

module.exports = orderRouter;