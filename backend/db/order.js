const order = dbConnect => {
    const addOrder= (item_id,feedback,rating) =>{
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO item_feedback(id,item_id,feedback,rating) VALUES
            (${dbConnect.escape(item_id)},
             ${dbConnect.escape(item_id)},
             ${dbConnect.escape(feedback)},
             ${dbConnect.escape(rating)})`;
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
        addOrder,
    };
};

module.exports = order;