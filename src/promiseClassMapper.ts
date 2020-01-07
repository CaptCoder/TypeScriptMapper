export async function mapPromise<T>(obj: T, promiseArray: Promise<Object>): Promise<T>{
    try
    {
        let result = await promiseArray;
        const returnObject: T = mapReturnObjectToType<T>(obj, result);
        return returnObject;

    }
    catch (err){

        throw err;
    }
}

class keyObject{
    key: string;
    parent: string[];
}

function mapReturnObjectToType<T>(obj: T, result: Object): T{
    let keysTreeList: keyObject[] = new Array<keyObject>();
    traverseKeys(obj, keysTreeList, new Array<string>());
    console.log(keysTreeList);
    mapKeysToResult(obj, result, keysTreeList);
    return obj;
}

function traverseKeys(obj: Object, keysTreeList: keyObject[], parentKey: string[]){
    for (var key in obj){
        let parentKey1 = parentKey;
        if (obj.hasOwnProperty(key)){
            keysTreeList.push({key: key, parent: parentKey1});
            if (obj[key] != undefined){
                parentKey1 = parentKey1.concat(key);              
            }
            traverseKeys(obj[key], keysTreeList, parentKey1);
        }
    }
}

function mapKeysToResult(obj: Object, result: Object, keysTreeList: keyObject[]){
    console.log(result);
    for (var key in result){
        if (result.hasOwnProperty(key)){           
            console.log(key);
            if (keysTreeList.map(x => x.key).includes(key)){
                let index = keysTreeList.map(x => x.key).indexOf(key);   
                let parentTree: string[] = keysTreeList[index].parent;
                if (parentTree.length > 0){
                    let objPath = obj;
                    parentTree.forEach(parent =>{
                        objPath = objPath[parent];
                    })
                    Object.defineProperty(objPath, key, {value: result[key]});
                }else{
                    Object.defineProperty(obj, key, {value: result[key]});
                }    
            }
            if (typeof result[key] == 'object'){
                mapKeysToResult(obj, result[key], keysTreeList);
            }
        }
    }
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





