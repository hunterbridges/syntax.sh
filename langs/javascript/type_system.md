In JavaScript, variables are [dynamically typed](http://en.wikipedia.org/wiki/Type_system#Dynamic_type-checking_and_runtime_type_information)
and objects are [duck typed](http://en.wikipedia.org/wiki/Duck_typing). Since
JavaScript is an interpreted language, a program can not be
[type checked](http://en.wikipedia.org/wiki/Type_safety) before it executes.

JavaScript values can be of the following types:
```String```, ```Boolean```, ```Number```, ```Object```, ```undefined```,
```NaN```, and ```null```.

If an operation expects differently typed values than it is provided,
the interpreter will attempt to [coerce](http://en.wikipedia.org/wiki/Type_conversion)
the values to compatible types. This can cause bugs that are hard to track down.
If the interpreter can not coerce the values, it throws an [exception](#exceptions).
JavaScript does not coerce values left-to-right; it follows a
[set of rules](http://webreflection.blogspot.com/2010/10/javascript-coercion-demystified.html)
to determine how to cast the values to fit the operation.

    var one = "1";
    var two = 2;

    console.log(one + two);
    // Logs 12
    // 2 is coerced into a string and concatenated to "1".

    console.log(two + one);
    // Logs 21
    // 2 is coerced into a string and "1" is concatenated to it.

    console.log(one - two);
    // Logs -1
    // "1" is coerced into a number and 2 is subtracted from it.

    console.log(two - one);
    // Logs 1
    // "1" is coerced into a number and subtracted from 2.

