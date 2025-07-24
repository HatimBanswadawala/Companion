import { makeAutoObservable } from 'mobx'

export default class CounterStore {
    title= 'Count Store';
    count=0;
    events:string[]=[
        `Intial Count is ${this.count}`
    ];

    constructor(){
        makeAutoObservable(this);
    }

    incrementer = (amount=1) => {
        this.count += amount
        this.events.push(`Increment by ${amount} and the new count is ${this.count}`)
    }

    decrementer = (amount=1) => {
        this.count -= amount
        this.events.push(`Decrement by ${amount} and the new count is ${this.count}`)
    }

    get eventCount(){
        return this.events.length;
    }
}