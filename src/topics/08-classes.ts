export class Person {
    public firstname:string;
    public address:string;
    public lastName:string;

    constructor (name:string, address?:string) {
        this.name = name,

        this.address = address
    }

}
/*
export class Hero extends Person 
{
    constructor (
        public alterEgo:string,
        public age:number,
        public realName:string,
    ){ 
        super(realName, 'New York');
    }
    
}*/

export class Hero
{   
    constructor (
        public alterEgo:string,
        public age:number,
        public realName:string,
        public person : Person,
    ){}
    
}

const tony = new Person ('Tony','Stark', 'new york');
const ironman = new Hero ('ironman',45,'tony', tony);

console.log ({ironman});