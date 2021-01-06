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

    return {
        getAllItems
    };
}

module.exports = item;