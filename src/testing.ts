import {mapPromise, mapPromises} from './index';

class Test{
    name1: string;
    prop4: number;
    prop5: Test3;

    constructor(){
        this.name1 = void 0;
        this.prop4 = void 0;
        this.prop5 = new Test3();
    }
}

class Test3 {
    name3: string;
    prop6: string;
    prop7: string;

    constructor(){
        this.name3 = void 0;
        this.prop6 = void 0;
        this.prop7 = void 0;
    }
}

class Test2 {
    name: string;
    prop2: Test;
    prop3: string;

    constructor(){
        this.name = void 0;
        this.prop2 = new Test();
        this.prop3 = void 0;
    }
}


let test: Test2 = new Test2();

let promise1 = new Promise((resolve, reject) =>{

    let a = {'name': 5, 'test': {'prop6': 'string'}, 'boolean': true};
    setTimeout(() =>{
        resolve(a)
    }, 1500)
});

let promise2 = new Promise((resolve, reject) =>{

    let a = {'name': 5, 'test': {'testing': 2}, 'boolean': true};
    setTimeout(() =>{
        resolve(a)
    }, 1500)
});


async function MapResponse(){
    const result: Test2 = await mapPromise<Test2>(test,promise1);
    console.log(result);
    console.log(typeof result.prop2.prop5.prop6)
}

MapResponse();

let testArray: Test2[] = new Array<Test2>();

let promiseArray:Promise<any>[] = []
promiseArray.push(promise1, promise2);

async function MapResponses(){
    const result: Test2[] = await mapPromises<Test2>(testArray,promiseArray);
    console.log(result);
}
