export async function mapPromise<T>(obj: T, promiseArray: Promise<any>): Promise<T>{
    try
    {
        let result = await promiseArray;
        const returnObject: T = mapReturnObjectToType<T>(obj, result);
        return returnObject;
        /*
        return new Promise((resolve, reject) =>{
            resolve(returnObject);
        });*/

    }
    catch (err){

        throw err;
    }
}

function mapReturnObjectToType<T>(obj: T, result: any): T{
    let keys = Object.keys(obj);
    //console.log(keys);
    for (let key in result){
        if (keys.includes(key)){
            Object.defineProperty(obj, key, {value: result[key]});
        }
    }
    return obj;
}

export async function mapPromises<T>(objects: T[], promiseArray: Promise<any>[]): Promise<T[]>{

    try
    {
        if (promiseArray.length > 1){
            let result: any[] = await Promise.all(promiseArray);
            const returnObjects: T[] = mapReturnObjectsToType<T>(objects, result);
            return returnObjects;
            /*
            return new Promise((resolve, reject) =>{
                resolve(returnObjects);
            });*/
        }
    }
    catch (err){

        throw err;
    }
}


function mapReturnObjectsToType<T>(objects: T[], result: any[]): T[]{
    let returnObjects: T[] = [{} as T]
    return returnObjects;
};





