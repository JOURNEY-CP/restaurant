var express = require('express');
var router = express.Router();

var itemDb=require('../../db/item');
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
 
 router.get('/:id',(req,res)=>{
   const item_id=req.params.id;
    itemDbConnect.
      getItemDetails(item_id)
      .then(data=>res.status(200).send(data))
      .catch(err=>res.status(500).send(err));
 });
 router.get('/:id/feedback',(req,res)=>{
  const item_id=req.params.id;
   itemDbConnect.
     getItemDetails(item_id)
     .then(data=>res.status(200).send(data))
     .catch(err=>res.status(500).send(err));
});

module.exports = itemRouter;