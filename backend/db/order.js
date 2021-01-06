const order = dbConnect => {
    const getAllOrders = () =>{
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM orders`;
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

    const getOrderMetaDetails = (id) =>{
        return new Promise((resolve, reject) => {
            const query = `SELECT table_no,customer_name,customer_mobile FROM order WHERE id=${dbConnect.escape(id)}`;
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
    
    
    const getOrderItemDetails = (id) =>{
        return new Promise((resolve, reject) => {
            const query = `SELECT order_items.item_id,order_items.quantity,item.name,item.price,item.description 
            FROM  order_items 
            INNER JOIN item 
            WHERE order_items.order_id==${dbConnect.escape(id)} AND order_items.item_id==item.id;`
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
        getOrderDetails
    };
}