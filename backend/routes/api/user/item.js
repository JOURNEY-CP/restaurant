var express = require('express');
var router = express.Router();

var itemDb=require('../../../db/item');
let itemDbConnect;

const itemRouter = DBConnect => {
  itemDbConnect=itemDb(DBConnect);
  return router;
};

router.get('/',(req,res)=>{
    itemDbConnect.
      getAllItems()
      .then(data=>res.status(200).send(data))
      .catch(err=>res.status(500).send(err));
  });
 
 router.get('/:item_id',(req,res)=>{
   const item_id=req.params.item_id;
    itemDbConnect.
      getItemDetails(item_id)
      .then(data=>res.status(200).send(data))
      .catch(err=>res.status(500).send(err));
 });


 router.post('/:item_id/feedback',(req,res)=>{
//     res.status(200).send("Hi");
//    return ;
  const item_id=req.params.item_id;
   itemDbConnect.
     addItemFeedback(item_id,req.body.feedback,req.body.rating)
     .then(data=>res.status(200).send(data))
     .catch(err=>res.status(500).send(err));
});

module.exports = itemRouter;