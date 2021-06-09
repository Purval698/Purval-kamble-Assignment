//Q.1

function rectangle(){
    this.width=20;
    this.height=20;
  
  }
  
  var r1=new rectangle();
  console.log(r1.width);
  rectangle.width=50;
  console.log(rectangle.width);

  //Q.2

  function rectangle(){
    this.width=20;
    this.height=20;
  
  }
  
  const r1=new rectangle();
  const r2=new rectangle();
  rectangle.prototype.getArea = function() {
    console.log(this.width*this.height);
  }
  
  r1.getArea();
  r2.getArea();
  
  //Q.3

  function rectangle(width,height){
    this.width=width;
    this.height=height;
  
  }
  
  const r1=new rectangle(4,5);
  rectangle.prototype.getArea = function() {
    console.log(this.width*this.height);
  }
  r1.getArea();
  r1.height=50;
  const r2=new rectangle();
  
  r1.getArea();

  //Q.4

  const person={
    firstname: 'Bruce',
    lastname: 'Wayne'
  }
  
  console.log(person);
  person.lastname='Parker';
  console.log(person.lastname);

  //Q.5

  const person={
    firstname: 'Bruce',
    lastname: 'Wayne'
  }
  console.log(person.middlename);
  person.middlename='Thomas';
  console.log(person.middlename);

//Q.7
var obj = JSON.parse('{ "firstname":"Bruce", "middlename":"Thomas", "lastname":"Wayne"}');
console.log(obj);

