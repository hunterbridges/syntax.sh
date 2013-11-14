Type conversion in Python is relatively straightforward. As long as a value can
obviously convert to a type, it can be converted with functions like
```int()```, ```long()```, ```float()```, and ```str()```.

    # OK
    print int("1")

    # OK
    print str(1)

    # OK
    print float(1)

    # Throws an exception
    print str("1a")

The type conversion functions are among the list of Python’s [built-in
functions](http://docs.python.org/3/library/functions.html).
