const {randomId}=require('../util/random');
const item = dbConnect => {

    const addAllItems= (id,name,price,description) =>{
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO item 
            (id,name,price,description) VALUES (
                ${dbConnect.escape(id)},
                ${dbConnect.escape(name)},
                ${dbConnect.escape(price)},
                ${dbConnect.escape(description)}
            )`;
            dbConnect.query(query,(error, results, _fields) => {
                if (error) {
                    console.log(error);
                    reject('Failed');
                    return;
                }
                resolve();
            });
        });
    }

    const getAllItems= () =>{
        return new Promise((resolve, reject) => {
            const query = `SELECT id,name,price FROM item`;
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


    const getItemDetails= (item_id) =>{
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM item WHERE 
            id=${dbConnect.escape(item_id)}`;
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
   
    const addItemFeedback= (item_id,feedback,rating) =>{
        const id=randomId(12);
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO item_feedback(id,item_id,feedback,rating) VALUES
            (${dbConnect.escape(id)},
             ${dbConnect.escape(item_id)},
             ${dbConnect.escape(feedback)},
             ${dbConnect.escape(rating)})`;
            dbConnect.query(query,(error, results, _fields) => {
                if (error) {
                    console.log(error);
                    reject('Failed');
                    return;
                }
                resolve(id);
            });
        });
    }

    return {
        getAllItems,
        getItemDetails,
        addItemFeedback,
        addAllItems,
    };
};

module.exports = item;