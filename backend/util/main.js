const arrayOfObjectsToSqlObjects= (dbConnect,arrayItems) =>{
    var result           = '';
    var flag=0,mainflag=0;
    arrayItems.forEach( item =>{
        flag=0;
        if(mainflag==0){
            result+='(';
            mainflag=1;
        }
        else{
            result+=',(';
        }
        Object.keys(item).forEach( key=> {
            if(flag==0){
                result+=`${dbConnect.escape(item[key])}`;
                flag=1;
            }
            else{
                result+=`,${dbConnect.escape(item[key])}`;
            }
        });
        result+=')';
    })
    return result;
};


module.exports = {arrayOfObjectsToSqlObjects};