import {httpMapperPromise, httpMapper} from './index';

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
let prom = new Promise((resolve, reject) =>{

    let a = {'name': 4, 'test': 'testing', 'boolean': true};
    setTimeout(() =>{
        resolve(a)
    }, 1500)
})

//let temp = httpMapper<Test>(prom);
let temp = httpMapperPromise<Test>(prom).then((result: Test) =>{
    console.log(result);
});

let temp2 = httpMapper<Test2>(test, prom).then((result: Test2) =>{
    console.log(result);
});

