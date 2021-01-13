const {randomInt}=require('../util/random');
const {arrayOfObjectsToSqlObjects}=require('../util/main');

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

    const addOrder= (order_id,customer_name,customer_mobile,table_no,item_list) =>{
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO order_meta 
            (id,customer_name,customer_mobile,table_no,order_no) VALUES (
                ${dbConnect.escape(order_id)},
                ${dbConnect.escape(customer_name)},
                ${dbConnect.escape(customer_mobile)},
                ${dbConnect.escape(table_no)},
                ${dbConnect.escape(randomInt(5))}    
            )`;
            dbConnect.query(query,(error, results, _fields) => {
                if (error) {
                    console.log(error);
                    reject('Failed');
                    return;
                }
                const allvalues=arrayOfObjectsToSqlObjects(dbConnect,item_list);
                const query2 =`INSERT INTO order_item
                (order_id,item_id,quantity) VALUES 
                  ${allvalues}
                `;
                console.log(query2);
                dbConnect.query(query2,(error2, results2, _fields) => {
                    if (error2) {
                        console.log(error2);
                        reject('Failed2');
                        return;
                    }
                resolve();
            });
        });
    }
        )}

    return {
        getAllOrders,
        getOrderMetaDetails,
        getOrderItemDetails,
        addOrder,
    };
}

module.exports = order;