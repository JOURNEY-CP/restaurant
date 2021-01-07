const order = dbConnect => {
    const getAllOrders = () =>{
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM order_meta`;
            dbConnect.query(query,(error, results, _fields) => {
                if (error) {
                    console.log(error);
                    reject('Failed');
                    return;
                }
                resolve(results);
            });
        });
    }

    const getOrderMetaDetails = id =>{
        return new Promise((resolve, reject) => {
            const query = `SELECT table_no,customer_name,customer_mobile FROM order_meta WHERE id=${dbConnect.escape(id)}`;
            dbConnect.query(query,(error, results, _fields) => {
                if (error) {
                    console.log(error);
                    reject('Failed');
                    return;
                }
                resolve(results[0]);
            });
        });
    }
    
    
    const getOrderItemDetails = id =>{
        return new Promise((resolve, reject) => {
            const query = `SELECT order_item.item_id,order_item.quantity,item.name,item.price,item.description 
            FROM  order_item 
            INNER JOIN item 
            WHERE order_item.order_id=${dbConnect.escape(id)} AND order_item.item_id=item.id;`
            dbConnect.query(query,(error, results, _fields) => {
                if (error) {
                    console.log(error);
                    reject('Failed');
                    return;
                }
                resolve(results);
            });
        });
    }

    return {
       
        getAllOrders,
        getOrderMetaDetails,
        getOrderItemDetails
        
    };
}

module.exports = order;