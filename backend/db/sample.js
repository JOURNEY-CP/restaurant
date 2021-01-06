const sample = dbConnect => {
    const createNewAccount= (id,user_id,pin) => {
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO money_account 
            (id,user_id,balance,pin) VALUES (
                ${dbConnect.escape(id)},
                ${dbConnect.escape(user_id)},
                0,
                ${dbConnect.escape(pin)}
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

    module.exports = sampleRouter;