Variables in Objective-C are strongly typed. Variables can only hold values
of the same type as they are declared.

Variables are **declared** by stating a type followed by a name.

    int foo;
    UILabel *bar;

Variables are **assigned** using the
[assignment operator](#assignment_operators) ```=```

    foo = 1;
    bar = [[UILabel alloc] init];

Variables can be **initialized** by declaring and assigning in the same
statement. Variables that are not initialized hold **garbage values**
which contain unpredictable data. Therefore it is always a good idea to
initialize a variable with some kind of value.

    int foo = 0;
    UILabel *bar = nil;

Attempting to use a variable that has not been declared will simply generate
a compiler error.
