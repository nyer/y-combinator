function Y(le) {
    return ((function (f) {
        return f(f)
    })(function (f) {
        return le(function (x) {
            return (f(f))(x)
        })
    }))
}

// test
var sum = function (sum) {
    return function(na) {
        if (na.length == 0) 
            return 0
        else {
            return na.shift() + sum(na)
        }
    }
}

((Y(sum)) ([1, 2, 4, 5]))
