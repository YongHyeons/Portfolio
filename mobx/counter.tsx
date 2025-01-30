import { makeObservable, makeAutoObservable, observable, action, runInAction, autorun, reaction, when } from "mobx";

// observable(['값']);
class Counter {
    // @observable
    number:number;
    a:number|undefined;
    constructor(){
        this.number = 0;
        // makeObservable(this);
        makeAutoObservable(this);
        when(()=>this.number % 2 == 0, ()=>{
            console.log(this.number);
        });

        // when(()=>this.number % 2 == 0); -> Promise
        // await when();

        // reaction(()=>this.number % 2 == 0, (value:boolean, prev:boolean)=>{
        //     console.log(value, '    |||||    ', prev);
        // });

        // Object.bind('3');
        // (()=>{}).bind('3');
        // autorun(()=>{
        //     console.log(this.number);
        //     this.a = 4;
        // });
    }

    async delayChange(time:number, value:number) {
        const target:number = await new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(value);
            }, time * 1000);
        });
        runInAction(()=>{
            this.number = this.number / target;
        })
    }

    // @action
    increment(value:number){
        this.number += value;
        // console.log(this.number);
    }
    // @action
    decrement(value:number){
        this.number -= value;
        // console.log(this.number);
    }

    get squre(){
        // console.log('test');
        return this.number * this.number;
    }
}

export default Counter;

// function A(func:Function) {
//     console.log(3);
//     func();
// }
// @A
// function B(){}