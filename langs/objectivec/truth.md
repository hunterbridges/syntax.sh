In Objective-C, any value equivalent to the primitive value 0 is considered
**NO**. This includes ```0```, ```0.0```, ```NO```, and ```nil```.

All other values are **YES**. This includes an NSNumber instance representing
0 (because an instance is not ```nil```).

**Objects** can either be compared by reference or by value. See
[comparison](#comparison).
