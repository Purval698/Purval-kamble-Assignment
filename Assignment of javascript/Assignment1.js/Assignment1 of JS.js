//Q.1.

function parity(n)
{
    if(n%2 == 0)
    {
           console.log("Enen");
    } 
    else
    {
        console.log("Odd");
    } 
}

//Q.2.

function max(n1,n2,n3)
{
    if(n1>n2)
        {
            if(n1>n3)
                {
                    console.log("result:",n1);
                }
                else{
                    console.log("result:",n3);
                }

    }
    else if(n2>n1) {

            if(n2>n3)
            {
               console.log("result:",n2);
            }
            else{
                console.log("result:",n3);
            }
    }
}

//Q.3.
var head=0;
var tail=0;
function countFlips(num){
   for(i=0;i<num;i++){
        if (Math.random()<0.50){
            head++;
        }
        else{
            tail++
        }
    }
}

countFlips(10);
console.log("Heads count: "+ head + " Tails count: " + tail);

//Q.4.

function countHeadFlipsFraction(num){
    var head=0;
   for(i=0;i<num;i++){
        if (Math.random()<0.50){
            head++;
        }
        
    }
    return (head/num);
}

//Q.5.

var hundredNums = [];
for(i=0;i<100;i++){
    hundredNums[i]=Math.random();
} ;

//Q.6.

var fourNums = [];
for(i=0;i<4;i++){
    fourNums[i]=Math.random();
} ;

//Q.7.

var x;
x=5;

function half(x){
    return(x/2);
}



//Q.8.

function seven(){
    x = 7;
    return(x);
}

//Q.9.

function calculation(a,b,c){
    return((a+b)/c);
}

//Q10.

document.write("Hello World")

//Q.11

var no = prompt('Enter the Name')
var name1=document.getElementById("name")
name1.textContent= "Hello " + "no"

//Q.12.

var name =  prompt("Enter your name: "); 
alert("Hello " + name);

//Q.13.

var name =  prompt("Enter your name: ");
name_1=alice;
name_2=Bob;
  {
    if(name == name_1)
    {
    alert("Hello " + name);
    }
    else if(name == name_2)
    {
    alert("Hello " + name);;
    };
   
};


//Q.14

function sumOfNum(){
    sum=0;
    for(i=1;i<=num;i++){
        sum+=i;
    }
    return sum;
    
}

var num=prompt("Enter Number for sum of numbers");
document.write(sumOfNum());

//Q.15.

var num=prompt("Enter Number");

sum=0;
for(i=1;i<=num;i++){
    if(i%3==0 || i%5==0){
        sum+=i;
    }
}

document.write(sum);

//Q.16.

var choice=1;
switch (choice){

    case 1:
        var num=prompt("Enter num for sum");
        sum=0;
        for(i=1;i<=num;i++){
            sum+=i;
        }
        document.write(sum);
        break;

    case 2:
        var num=prompt("Enter num for multiplcation");
        multi=1;
        for(i=1;i<=num;i++){
            multi*=i;
        }
       document.write(multi);
        break;

    default:
        document.write("Wrong choice");
        break;
}

//Q.17
var n=prompt("enter num ");
{for(i=1;i<=10;i++)
{
   document.write(i*n +"<br>")
}

}

//Q.18.
function primeNum(n){
 for(i=2;i<n;i++){
    if(n%i === 0){
        return `${n} is not prime`
    }
  } 
        return `${n} is prime`
}

//Q.19.
function leapYear(n){
 for(i=2021;i<n;i++){
    if(i%4 === 0){
        return `${i} is Leap Year`
    }
  } 
        return `${i} is not Leap Year`
}

//Q.20.
const num = [55,69,45,63,89,56];
console.log(Math.max(num));

//Q.21

var num=[1,2,3]
var char=["a","b","c"]
var charnum=[];
i=0;
while(i<num.length||i<char.length){
    charnum.push(num[i]);
    charnum.push(char[i]);
    i++;
}

//Q.23
var char=["a","b","c"]
var num=[1,2,3]
i=0;
while(i<4){
num.push(char[i]);
i++;
}
document.write(num)

//Q.24.
var num1=[1,4,6];
var num2=[2,3,5];
var num3= num1.concat(num2);
document.write(num3.sort());

//Q.25

var n1=1;
var n2=1;
var n3=0;
console.log(n1);
console.log(n2);

for(i=2;i<=100;i++){
    n3=n1+n2;
    console.log(n3);
    n1=n2;
    n2=n3;
}

//Q.26
function retArrOfNum(num){
    i=0;
    r=0;
    while(num>0)    {
        r=num%10;
        num=parseInt(num/10);
        arr[i]=r;
        i++;
    }

}
var arr=[];
retArrOfNum(2342);
console.log(arr);
