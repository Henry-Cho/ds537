// CCallbacks are one of the patterns used in JavaScript for asynchronous processing!

function print(str) {
    console.log(str)
}

function deliver() {
    setTimeout(function() {
        print("Delivered!");
    }, 1000)
}

function getOrder() {
    setTimeout(function() {
        print("Just got your order!");
    }, 2000)
}

function notifyDeliveryDepart() {
    setTimeout(function() {
        print("Your pizza is on its way!");
    }, 3000)
}

function pizza_delivery() {
    getOrder();
    notifyDeliveryDepart();
    deliver();
}

// traditional callback pattern can easily lead to a problem known as "callback hell," 
// which involves excessive nesting.

//pizza_delivery()

function deliver_promise() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            print("Delivered!");
            resolve();
        }, 1000)
    });
}

function getOrder_promise() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            print("Just got your order!");
            resolve();
        }, 2000)
    });
}

function notifyDeliveryDepart_promise() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            print("Your pizza is on its way!");
            resolve();
        }, 3000)
    });
}

// Promise is an object used to know the result after an asynchronous operation has completed!
// By using Promises, you can return values from asynchronous methods as if they were synchronous methods.
// It is another asynchronous processing pattern introduced in ES6 due to the callback hell caused by the traditional callback pattern.
// It allows you to express the timing of asynchronous processing more clearly!

// Promises allow you to chain subsequent processing methods, 
// enabling you to connect multiple promises together! (This can help you solve callback hell!)

function pizza_delivery_promise() {
    getOrder_promise()
    .then(() => {
        return notifyDeliveryDepart_promise();
    })
    .then(() => {
        return deliver_promise();
    })
}

pizza_delivery_promise()

// modern javascript makes it much easier!
// async & await
// async always returns promise
async function pizza_delivery_async() {
    await getOrder_promise();
    await notifyDeliveryDepart_promise();
    await deliver_promise();
}

// When encountering an 'await', the execution is temporarily paused, and
// then it resumes after the Promise has been processed!
// In other words, using 'await' makes the function wait for its execution.

pizza_delivery_async();