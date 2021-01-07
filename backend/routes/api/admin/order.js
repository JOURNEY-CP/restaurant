var express = require('express');
var router = express.Router();

var orderDb=require('../../../db/order');
let orderDbConnect;

const adminOrderRouter = DBConnect => {
    orderDbConnect=orderDb(DBConnect);
    return router;
  };
  
    router.get('/',(req,res)=>{
        orderDbConnect.
            getAllOrders()
            .then(data=>res.status(200).send(data))
            .catch(err=>res.status(500).send(err));
    });

    router.get('/:order_id',(req,res)=>{
        const id=req.params.order_id;
        var promises=[
            orderDbConnect.getOrderMetaDetails(id),
            orderDbConnect.getOrderItemDetails(id)
        ];
        Promise.all(promises) 
            .then(data=>{
                var result={};
                result["meta"]=data[0];
                result["items"]=data[1];
                res.status(200).send(result)
            })
            .catch(err=>res.status(500).send(err));
    })

   router.get('/:order_id/invoice',(req,res)=>{
        const id=req.params.order_id;
        orderDbConnect.
            getInvoice(id)
            .then(data=>res.status(200).send(data))
            .catch(err=>res.status(500).send(err));
   })

  module.exports = adminOrderRouter;
