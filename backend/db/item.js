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

    return {
        addAllItems,
        getAllItems
    };
}

module.exports = item;