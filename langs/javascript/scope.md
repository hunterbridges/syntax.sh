A variable’s scope is determined by the innermost [function](#functions) in which it
is declared.

    var outer = 1;
    (function() {
        // Logs 1
        console.log(outer);

        var inner = 2;
    }());

    // Throws an exception
    console.log(inner);

If a variable is not declared within a function it is scoped as a **global**.
Additionally, a variable is also scoped as a global if it is initialized
without the ```var``` keyword.

    (function() {
        // Global
        a = 1;

        // Local
        var b = 2;
    }());

    // Logs 1
    console.log(a);

    // Throws an exception
    console.log(b);

Functions that reference variables from inherited scopes are called
[closures](#closures).
