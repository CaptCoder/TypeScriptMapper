export {mapPromise, mapPromises} from './promiseClassMapper';

export async function httpMapper<T>(promise: Promise<any>): Promise<T>{
    let returnObject = {} as T;
    let result = await promise;
    returnObject = result as T;
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