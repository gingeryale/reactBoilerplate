function getTempPromise (location) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(95);
            reject('city not found');
        }, 1000);
    });
}

getTempPromise('NYC').then(function (temp) {
    console.log('promise sucess', temp);
}, function (err) {
    console.log('promise error', err);
});

function addMe (a, b) {
    return new Promise(function (resolve, reject) {
        if (typeof a === 'number' && typeof b=== 'number') {
            resolve (a + b);
        } else {
            reject ('both need to be numbers');
        }
    });
}

addMe(2,3).then(function (sum) {
    console.log('success', sum);
}, function(err) {
    console.log('error', err)
});