Use ```String()``` to cast non-String values to ```String```.
If it is present, the ```.toString()``` method is called on the passed-in value.

    console.log(String(null) + String(4));
    // Logs "null4"

    var foo = {toString: function() { return "bar"; }};
    console.log(String(foo));
    // Logs "bar"

Use ```Boolean()``` and ```Number()``` to convert non-String values to those
types.

    console.log(Boolean(1));
    // Logs true

    console.log(Number(true));
    // Logs 1

Use ```parseFloat()``` and ```parseInt()``` to convert String values to numbers.

    console.log(parseInt("42", 10));
    // Logs 42

    console.log(parseFloat("1.23"));
    // Logs 1.23

**Note:** ```parseInt()``` takes two parameters, the second being the _radix_
parameter. If the second parameter is omitted, it will be inferred based on the
string format. This can lead to unexpected behavior, for example a number being
parsed as octal if the passed string has a leading zero (Like ```"0123"```).
