//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      // The 'this' keyword is to reference the object that is used as a context of the execution.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      /*
        1) Implicit - when 'this' is refering to the instance of an object created from the function
        or object definition.
        2) Explicit - when an object is used as context for a function execution by using the
        'call', 'apply', or 'bind' keywords.
        3) Instance created by the 'New' keyword - this is when an object instance is created by
        using the 'new' keyword with a function constructor
        4) Default - when 'this' doesn't pertain to any object that is the context of an execution,
        'this' then refers to the default, which is window.
      */

  // 3) What is the difference between call and apply?

      //Answer
      // The main difference is that apply, for its 2nd parameter, in an array to contain the arguments passed as parameters
      // to the function, while call allows passing of parameters (from 2nd parameter on) delimited by commas like a normal
      // function call.

  // 4) What does .bind do?

      //Answer
      // Allows the binding of an object to a function to make that object the context of the function
      // execution. This returns a reference to the function with the object within the function
      // referred to as 'this'.  The function that's returned can then be executed multiple times
      // or passed as callback to other functions.


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
    var user = {
      username: "wvaldez"
      , email: "vinduhl@gmail.com"
      , getUsername: function() {
        return this.username;
      }
    };

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
console.log(user.getUsername());

//Next Problem


// Write the function definitions which will make the following function invocations function properly.

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.move = 0;
  this.moveCar = function() {
    this.move += 10;
    return this.move;
  }
}


  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here
console.log("prius=" + getYear.call(prius));
console.log("mustang=" + getYear.call(mustang));


//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

//var userName = getMyUsername(); //Fix this
var userName = getMyUsername.call(myUser);
console.log(userName);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?
//Note(no tests)
  //Answer Here
  // It will return undefined.

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here
  // The setTimeout function

//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
