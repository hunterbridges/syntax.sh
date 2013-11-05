Constants in Objective-C are declared outside of any execution context.

There are two primary ways to declare a constant. A ```static const```
can only be seen by the file it is declared in. An ```extern const``` can be
used in other files. The naming convention for constants in Objective-C is
a prefixed letter ```k```.

A ```static const``` is declared and assigned in the ```.m``` file.

    static const CGFloat kTopPadding = 30.0;

    @implementation Foo
    // ...
    @end

An ```extern const``` is declared in the ```.h``` with the ```extern``` keyword:

    // Foo.h
    extern const NSInteger kFoosInTheWorld;

    @interface Foo : NSObject
    // ...
    @end

Then declared and assigned in the ```.m``` without ```extern```:

    // Foo.m
    const NSInteger kFoosInTheWorld = 9000;

    @implementation Foo
    // ...
    @end
