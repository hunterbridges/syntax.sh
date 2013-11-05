**Primitive values** can not be dynamically type checked.

**Object values** can be type checked using ```isKindOfClass```. This is
helpful for safe use of the ```id``` type.

    id foo = @6;
    if ([foo isKindOfClass:[NSNumber class]]) {
      // YES
    }

    if ([foo isKindOfClass:[NSString class]]) {
      // NO
    }
