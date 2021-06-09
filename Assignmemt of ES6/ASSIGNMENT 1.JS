
//Q.1. constant

const x=10;
x=20;



//Q.2.scope

function showScopeDemo(a){
    if(a>3){
        let x=2;
    }
    console.log(x);

}

showScopeDemo(3)



//Q.3.Enchnaced object properties

var Order={
    id: 01,
    title: 'ORD001',
    price: 100,
printOrder: function() {
        console.log(`id ${this.id} Title: ${this.title}`)
    },
    
    getPrice: function() {
        console.log(`price: ${this.price}`)
    }
};

Order.printOrder();
console.log(Order.id);

const Order1=Object.assign(Order);
Order.printOrder();
console.log(Order1.id);




//Q.4.Array function
var arr=["apple","banana","orange"];

const items=arr.map(item => {
    return {name: item, size: item.length};
});

console.log(items);




//Q.5.extended parameter hNDLING(A)

function add(x=5,y=10){
    return x+y;
}

console.log(add(5,5));
console.log(add(10));
console.log(add());



//Q.5.extended parameter hNDLING(B)

var displayFriends=(userName,...friends) =>{
    console.log(`Friends of ${userName}`);
    for(let i in friends){
        console.log(friends[i]);
    }

}

displayFriends('john', 'Pank','ortan','show');




//Q.5.extended parameter hNDLING(C)
var displayFriends=(...names) =>{
    console.log(`Friends List `);
    for(let i in names){
        console.log(names[i].toUpperCase());
    }

}

let names=['john', 'Pank','ortan','show'];
displayFriends(...names)



//Q.6.TEMPLATES LITERALS


let modelNum='14s-fr0016AU';
let deskNum=12345678;
let name="Bob";

console.log(`HP Model: ${modelNum} Desk No.: ${deskNum} Name of ower: ${name}`);



//Q.7.destructuring(A)

const arr=['one','two','three'];

const[x,y,z]=arr;
console.log(z);




//Q.7.destructuring(B)
let person={

        name:'john',
        address:{
            pincode:413006,
            city:'solapur'
        }

};

let {name,address}=person;

console.log(address.pincode);



//Q.8.class and modules

class Account{
    constructor(id,name,balance){
        this.id=id;
        this.name=name;
        this.balance=balance;
        this.interest=0;
    }
}

class SavingAccount extends Account{
    constructor(id,name,balance){
        super(id,name,balance);
        this.interest=8*5;
    }
printBalence(){
        console.log(`Saving Account ${this.interest*this.balance}`);
    }
}

class CurrentAccount extends Account{
    constructor(id,name,balance){
        super(id,name,balance);
        this.interest=8*10;
    }
    printBalence(){
        console.log(`Current Account ${this.interest*this.balance}`);
    }
}

let s=new SavingAccount(01,'aJAY',3000);
s.printBalence();
let c=new CurrentAccount(01,'aJYAY',3000);
c.printBalence();


