A variable’s scope is determined by the innermost [block](#blocks) in
which it is declared.

    int outer = 1;
    if (YES) {
        NSLog(@"%d", outer);

        int inner = 1;
    }

    NSLog(@"%d", inner);
    // Compiler error

An [instance variable](#instance_variables) is the primary way to maintain
a variable across multiple execution contexts. Since the introduction of
[ARC](http://en.wikipedia.org/wiki/Automatic_Reference_Counting), instance
variables are usually declared and accessed via
[properties](#instance_properties). See the
[instance variables](#instance_variables) section for more details.

**Global** variables are uncommon and often considered a bad practice in
Objective-C. They can be declared like [constants](#constants) with the
```const``` keyword omitted. The only accepted common use of globals are
to create **singletons**.

    static Foo *sharedFoo = nil;

    @implementation Foo
        + (Foo *)sharedInstance
        {
            if (sharedFoo) {
                return sharedFoo;
            }

            sharedFoo = [[Foo alloc] init];
            return sharedFoo;
        }
    @end
