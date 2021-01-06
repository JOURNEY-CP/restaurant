const item = dbConnect => {
    const getAllItems= () =>{
        return new Promise((resolve, reject) => {
            const query = `SELECT id,name,price from item`;
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

    const getItemFeedback= (item_id) =>{
        return new Promise((resolve, reject) => {
            const query = `SELECT feedback,rating FROM item_feedback WHERE 
            item_id=${dbConnect.escape(item_id)}`;
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
        getAllItems,
        getItemDetails,
        getItemFeedback,
    };
};

module.exports = item;