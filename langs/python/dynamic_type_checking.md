Use the ```type()``` function to return the ```TypeType``` value representing
the type of a given value.

    if type("hello") == StringType:
        print "hello is a string"

Use the ```__class__``` attribute to access the class of a given instance.
Use the ```isinstance()``` function to check whether an object is a member
of a given class.

    class FooClass:
        def __init__(self):
            self.bar = 1

    foo = FooClass()

    print foo.__class__
    # Prints __main__.FooClass

    if isinstance(foo, FooClass):
        print "foo is a FooClass"
