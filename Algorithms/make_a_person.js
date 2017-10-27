
var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    var intake = firstAndLast.split(" ");
    var firstName = intake[0];
    var lastName = intake[1];

  this.getFirstName = function(){
    return firstName;
  };
  this.getLastName = function(){
    return lastName;
  };
    this.getFullName = function() {
      return (firstName +" "+lastName);
    };
    //return firstAndLast;
  this.setFirstName = function(name) {
    firstName = name;
  };
  this.setLastName =function(name){
    lastName = name;
  };
  this.setFullName = function(name){
    newName = name.split(" ");
    firstName = newName[0];
    lastName = newName[1];
  }
};


var bob = new Person('Bob Ross');
//Testing
console.log(bob.getFullName());
console.log(bob.getLastName());
console.log(bob.setLastName("Unwana"));
console.log(bob.setFirstName("Essien"));
console.log(bob.getFirstName());
console.log(bob.getFullName());
console.log(bob.setLastName("Agrigon"));
console.log(bob.getFullName());
console.log(Object.keys(bob).length);
console.log(bob.setFullName("Ryan Reynolds"));
bob.setLastName("Skeleth");
console.log(bob.getFullName());
