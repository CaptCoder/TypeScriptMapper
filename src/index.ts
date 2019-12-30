export async function httpMapperPromise<T>(promise: Promise<any>): Promise<T>{
    let returnObject = {} as T;
    //type interfaceKeys = keyof T;
    /*promise.then(result => {
        returnObject = result as T;       
    });*/
    let result = await promise;
    returnObject = result as T;
    return new Promise((resolve, reject) =>{
        resolve(returnObject);
    }) 
}

export async function httpMapper<T>(obj: T, promise: Promise<any>): Promise<T>{
    let returnObject = {} as T;
    //console.log(Object.keys(obj));
    let keys = Object.keys(obj);
    //type interfaceKeys = keyof T;
    /*promise.then(result => {
        returnObject = result as T;       
    });*/
    console.log(keys);
    let result = await promise;
    for (let key in result){
        if (keys.includes(key)){
            //console.log(key);
            console.log(result[key]);
        }
    }
    return new Promise((resolve, reject) =>{
        resolve(returnObject);
    }) 
    
}


function prop<T, K extends keyof T>(obj: T, key: K){
    return obj[key];
}

const propertiesOf = <TObj>(_obj: (TObj | undefined) = undefined) => <T extends keyof TObj>(name: T): T => name;

export function typeMapper<T>(type: T, passedObject: any) : T{
    let returnObject: T = {} as T;
    return returnObject;
}