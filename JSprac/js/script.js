var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
var x;
var greeting;
for (x in names) {
	var firstletter=names[x].charAt(0);
	
  if (firstletter.toLowerCase() == "j" ) {
  	greeting="Good Bye";
  } 
  else {
    greeting="Hello";
  }
  console.log(greeting + " " + names[x]);
}