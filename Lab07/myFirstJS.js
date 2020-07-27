
// -- UTILITIES --
function myFunctionTest(expected, f) {
    if (Array.isArray(expected)) {
        let e1 = expected.concat().sort().join(',');
        let e2 = f().sort().join(',');
        return e1 === e2 ? 'TEST SUCCEEDED' : 'TEST FAILED';
    }
    return expected === f() ? 'TEST SUCCEEDED' : 'TEST FAILED';
}

// -- FIND MAX VALUE --
function max(a, b) {
    if (a > b) {
        return a;
    }
    return b;
}
console.log("max(10, 20) | Expected = 20 | Actual = " + max(10, 20) + " | Result: " +
    myFunctionTest(20, function () {
        return max(10, 20)
    })
);

// -- FIND MAX OF THREE --
function maxOfThree(a, b, c) {
    let _m = max(a, b);
    if (_m > c) {
        return _m;
    }
    return c;
}
console.log("maxOfThree(10, 20, 15) | Expected = 20 | Actual = " + maxOfThree(10, 20, 15) + " | Result: " +
    myFunctionTest(20, function () {
        return maxOfThree(10, 20, 15)
    })
);

// -- CHECK CHARACTER IS VOWEL --
function isVowel(c) {
    console.assert(c.length === 1, 'Must be a single character');
    return ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'].indexOf(c) >= 0;
}
console.log("isVowel('e') | Expected: true | Actual = " + isVowel('e') + " | Result: " +
    myFunctionTest(true, function () {
        return isVowel('e');
    })
);
console.log("isVowel('A') | Expected: true | Actual = " + isVowel('A') + " | Result: " +
    myFunctionTest(true, function () {
        return isVowel('A');
    })
);
console.log("isVowel('F') | Expected: false | Actual = " + isVowel('F') + " | Result: " +
    myFunctionTest(false, function () {
        return isVowel('F');
    })
);

// -- SUM ARRAY --
function sum(a) {
    console.assert(Array.isArray(a), 'Must be an array');
    return a.reduce(function (x, y) {
        return x + y;
    }, 0);
}
console.log("sum([1, 2, 3, 4] | Expected: 10 | Actual = " + sum([1, 2, 3, 4]) + " | Result: " +
    myFunctionTest(10, function () {
        return sum([1, 2, 3, 4]);
    })
);

// -- MULTIPLY ARRAY --
function multiply(a) {
    console.assert(Array.isArray(a), 'Must be an array');
    return a.reduce(function (x, y) {
        return x * y;
    }, 1);
}
console.log("multiply([1, 2, 3, 4] | Expected: 10 | Actual = " + multiply([1, 2, 3, 4]) + " | Result: " +
    myFunctionTest(24, function () {
        return multiply([1, 2, 3, 4]);
    })
);

// -- REVERSE STRING --
function reverse(s) {
    return s.split("").reverse().join("");
}
console.log("reverse('jag testar') | Expected: 'ratset gaj' | Actual = '" + reverse('jag testar') + "' | Result: " +
    myFunctionTest('ratset gaj', function () {
        return reverse('jag testar');
    })
);

// -- FIND LENGTH OF LONGEST WORD --
function findLongestWord(a) {
    console.assert(Array.isArray(a), 'Must be an array');
    return Math.max(... (a.map(e => e.length)));
}
console.log("findLongestWord(['cow', 'cat', 'deer', 'snake', 'parrot']) | Expected: 6 | Actual = " + findLongestWord(['cow', 'cat', 'deer', 'snake', 'parrot']) + " | Result: " +
    myFunctionTest(6, function () {
        return findLongestWord(['cow', 'cat', 'deer', 'snake', 'parrot']);
    })
);

// -- FILTER LONG WORDS --
function filterLongWords(words, i) {
    console.assert(Array.isArray(words), 'Must be an array');
    return words.filter(e => e.length > i);
}
console.log("filterLongWords(['cow', 'cat', 'deer', 'snake', 'parrot'], 4) | Expected: snake,parrot | Actual = " + filterLongWords(['cow', 'cat', 'deer', 'snake', 'parrot'], 4) + " | Result: " +
    myFunctionTest(['snake', 'parrot'], function () {
        return filterLongWords(['cow', 'cat', 'deer', 'snake', 'parrot'], 4);
    })
);

// MODIFY Jsfiddle
function jsfiddle() {
    // original input
    const a = [1,3,5,3,3];

    // multiply by 10
    const b = a.map(function(elem, i, array) {
        return elem * 10;
    });
    console.log(b);

    // all elements equal to 3
    const c = a.filter(function(elem, i, array) {
        return elem === 3;
    });
    console.log(c);

    // return product
    const d = a.reduce(function(prevValue, elem, i, array){
        return prevValue * elem;
    });
    console.log(d);
}
jsfiddle();