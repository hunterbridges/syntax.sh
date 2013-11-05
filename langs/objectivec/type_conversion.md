**Primitive types** can be casted to one another:

    NSInteger foo = 1;
    CGFloat floatFoo = (CGFloat)foo;

Primitives can be converted to their object counterparts by using the [boxed
expression operator](http://clang.llvm.org/docs/ObjectiveCLiterals.html) ```@```.

    NSInteger foo = 1;
    NSNumber *fooObj = @(foo);

**Object types** can only be converted if there are methods that implement
that behavior. For example, ```NSNumber``` provides ```integerValue```.

    NSNumber *bar = @6;
    NSInteger primitiveBar = [bar integerValue];

Types can be represented as an ```NSString``` by using the
```stringWithFormat``` class method.

    NSInteger foo = 1;
    NSString *fooStr =
        [NSString stringWithFormat:@"%d", foo];
