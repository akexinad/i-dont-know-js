

// COERCION

// Converting a value from one type to another is often called "TYPE CASTING", when done explicitly, and "COERCION" when done implicitly.

var a = 42;

var b = a + "";			// implicit coercion

var c = String( a );	// explicit coercion




// JSON STRINGIFICATION

var obj = {
    name: "joe",
    age: 44,
    array: [2, 45, 'yes'],
    logIt: function() {
      console.log(this);
    }
  };


// JSON.strinfify has a replacer option. The arguements can either be passed in array form
// or a function that iterates through the key value pairs.

console.log(JSON.stringify(obj, ["name", "age"]));

console.log(JSON.stringify(obj, function(key, value) {
    if (key !== 'logIt') {
        return value;
    }
}));

// There exists a third option called SPACE. It prettifies the sructure.

console.log(JSON.stringify(obj, null, 3));
console.log(JSON.stringify(obj, null, "-----"));




// TO NUMBER

var str = '42';
var strConvert = Number(str);
console.log(strConvert);




// BOOLEANS

// NOTE: Unlike other languages, the numbers 1 and 0 are numbers and true and false are booleans.