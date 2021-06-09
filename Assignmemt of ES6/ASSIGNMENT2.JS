
//Q.1.Symbols

class fib {
    next(n: number) {
        let a = n * (1 + Math.sqrt(5)) / 2.0;
        return Math.round(a);
    }

}
let p = new fib();
console.log(p.next(5));


//Q.2 Iterators

let numbers = [8, 9, 15, 300, 370, 371];
class Armstrong {
    getNextArmstrong(numbers) {
        for (let number in numbers) {
            let numberOfDigits = i.toString().length;
            let sum = 0;
            let temp = i;
            while (temp > 0) {
                let remainder = temp % 10;
                sum += remainder ** numberOfDigits;
                temp = temp / 10;
                if (sum == number) {
                    console.log(`Next Armstrong Number is : ${number}`)
                }
            }
        }
    }
}

let a = new Armstrong();
a.getNextArmstrong(numbers);








//Q.3 Generators

class Armstrong {
    getNextArmstrong(lowNumber: number, highNumber: number) {
        for (let i = lowNumber; i <= highNumber; i++) {
            let numberOfDigits = i.toString().length;
            let sum = 0;
            let temp = i;
            while (temp > 0) {
                let remainder = temp % 10;
                sum += remainder ** numberOfDigits;
                temp = parseInt(temp / 10);
                if (i <= 1000) {
                    if (sum == i) {
                        console.log(`Next Armstrong Number is : ${i}`)
                    }
                } else {
                    console.log(`Error: ${i} is beyound 1000.`)
                }
            }
        }
    }
}

let a = new Armstrong();
a.getNextArmstrong(1, 10000);


//Q.4 Collections


let chatroom1 = new Map()
chatroom1.set('amipur', {
    msg1: "Hello, amipur",
    msg2: "I am from India",
    msg3: "I am Developer",
    msg4: " Lets Develop Something. ",
})
chatroom1.set('ajay', {
    msg1: "Hello, I am ajay",
    msg2: "I am from LA",
    msg3: "I am Developer",
    msg4: " Lets Develop. ",
})
chatroom1.set('Jack', {
    msg1: "Hello, I am Jack",
    msg2: "I am from LA",
    msg3: "I am Developer",
    msg4: " Lets Develop. ",
})


let chatroom2 = new Map()
chatroom2.set('Martin', {
    msg1: "Hello, I am Martin",
    msg2: "I am from LA",
    msgj3: "I am Developer",
    msg4: " Lets Develop. ",
})
chatroom2.set('Somi', {
    msg1: "Hello, I am Somi",
    msg2: "I am from LA",
    msg3: "I am Developer",
    msg4: " Lets Develop. ",
})
chatroom2.set('Jessie', {
    msg1: "Hello, I am Jessie",
    msg2: "I am from LA",
    msg3: "I am Developer",
    msg4: " Lets Develop. ",
})



console.log("Total Users in Chatroom1 : " + chatroom1.size)
chatroom1.forEach((value, key, map) => {
    console.log(`${key}`);
    console.log(chatroom1.get(`${key}`));
});

console.log("Total Users in Chatroom2 : " + chatroom2.size)
chatroom2.forEach((value, key, map) => {
    console.log(`${key}`);
    console.log(chatroom2.get(`${key}`));
});


