var express = require('express');
var router = express.Router();

var orderDb=require('../../../db/order');
const {randomId}=require('../../../util/random');
let orderDbConnect;



const orderRouter = DBConnect => {
    orderDbConnect=orderDb(DBConnect);
    return router;
  };

router.post('/',(req,res)=>{
    //  res.status(200).send("Hi");
    //  return ;
     const {customer_mobile,customer_name,table_no,item_list}=req.body;
     const id=randomId(13);
     var item_list_modified=[];
      item_list.forEach(item=>{
         // item={order_id:id,...item}
         item_list_modified.push({order_id:id,...item})
      })
     
      console.log(item_list_modified);
     orderDbConnect.
       addOrder(id,customer_name,customer_mobile,table_no,item_list_modified)
       .then(()=>res.status(200).send(id))
       .catch(err=>res.status(500).send(err));
  });

module.exports = orderRouter;