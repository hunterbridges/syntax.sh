Use the ```typeof``` keyword to return a string representing the type of a
given value. A full table of possible string representations is available
[here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof).

    console.log(typeof 1);
    // Logs "number"

    var foo = "bar";
    console.log(typeof foo);
    // Logs "string"

**Note:** The ```==``` and ```!=``` [comparison operators](#comparison) are not
type-safe in JavaScript and will attempt to coerce values to determine equality.
JavaScript provides the ```===``` and ```!==``` operators to determine type-safe
equality. The “triple equals” operators are often preferred over the
“double equals” operators due to the additional level of type safety they provide.

    if (1 == "1") {
        // true
    }

    if (1 === "1") {
        // false
    }
