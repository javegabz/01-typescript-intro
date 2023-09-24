function classDecorator<T extends {new (... args:any[]):{}}>(
    constructor: any;
) {
    return class extends constuctor {
        newProperty = 'NewProperty';
        hello= 'override';
    }

}

@classDecorator
export class SuperClass {
    public myProperty:string= 'Abc123';

    print(){
        console.log ('HolaMundo');
    }
}

console.log(SuperClass);
const myClass = new SuperClass();
console.log(myClass);