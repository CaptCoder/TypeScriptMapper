import {mapPromise, mapPromises} from './index';

interface Test{
    name: string;
    prop2: number;
    prop3: boolean;
}

class Test2 {
    name: string;
    prop2: number;
    prop3: boolean;

    constructor(){
        this.name = void 0;
        this.prop2 = void 0;
        this.prop3 = void 0;
    }
}

let test: Test2 = new Test2();

let promise1 = new Promise((resolve, reject) =>{

    let a = {'name': 4, 'test': 'testing', 'boolean': true};
    setTimeout(() =>{
        resolve(a)
    }, 1500)
});

let promise2 = new Promise((resolve, reject) =>{

    let a = {'name': 5, 'test': 'testing', 'boolean': true};
    setTimeout(() =>{
        resolve(a)
    }, 1500)
});




async function MapResponse(){
    const result: Test2 = await mapPromise<Test2>(test,promise1);
    console.log(result);
}

MapResponse();

let testArray: Test2[] = new Array<Test2>();

let promiseArray:Promise<any>[] = []
promiseArray.push(promise1, promise2);

async function MapResponses(){
    const result: Test2[] = await mapPromises<Test2>(testArray,promiseArray);
    console.log(result);
}
