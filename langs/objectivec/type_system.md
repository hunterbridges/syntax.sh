Objective-C is a [statically typed](http://en.wikipedia.org/wiki/Type_system#Static_type-checking)
language with [dynamic typing](http://en.wikipedia.org/wiki/Type_system#Dynamic_type-checking_and_runtime_type_information)
features.
Programs are [type checked](http://en.wikipedia.org/wiki/Type_safety) at
compile time. [Dynamic type checking](#dynamic_type_checking) can be done at
runtime.

There are two main kinds of values in Objective-C.

**Primitive types** (```NSInteger```, ```int```, ```char```, ```BOOL```,
```CGFloat```, etc.) represent a single piece of data.

    int foo = 1;
    BOOL bar = YES;

**Note:** Objective-C convention is to use ```YES``` and ```NO``` for ```BOOL```
values, as opposed to ```true``` and ```false```.

**Object types** always inherit from the base class ```NSObject```
and are represented by [pointers](#reference) to an instance of the
type’s class.

    UIView *view = [[UIView alloc] init];

The ```id``` type is often a source of confusion for newcomers to the language.
An ```id``` simply represents a pointer to an instance of any class.

    // `view` is aware of the class of the value it holds.
    UIView *view = [[UIView alloc] init];

    // `bar` can hold an instance of any class.
    id bar = view;

```id``` is the gateway to Objective-C’s dynamic type features. There is a
tradeoff in that the compiler can not type check values of type ```id```.
[Dynamic type checking](#dynamic_type_checking) can be leveraged for runtime
checking.

It is to the programmer’s benefit to be as specific as possible about object
types.
