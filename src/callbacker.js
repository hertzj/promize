const syncCallbacker = (function1, function2) => {
    if (typeof function1 !== 'function' || typeof function2 !== 'function') {
        throw 'not a function!';
    }

    const val = function1()
    return function2(val)
};

const asyncCallbacker = (func1, func2) => {
    if (typeof func1 !== 'function' || typeof func2 !== 'function') {
        throw 'not a function!';
    }

    const data = 100
    const done = (num) => {
        return func2(num, done)
    }
    
    func1(data, done)    
};

module.exports = { syncCallbacker, asyncCallbacker };


// const syncCallbacker = (...args) => {
//     args.forEach(arg => {
//         if (typeof arg !== 'function') {
//             throw 'not a function'
//         }
//     })


    
// };