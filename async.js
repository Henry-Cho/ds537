// Callbacks are one of the patterns used in JavaScript for asynchronous processing!
// Callback functions are functions that are passed 
// as arguments to other functions and are executed at a later time or upon a specific event.

function print(str) {
    console.log(str)
}

// examples of callback function

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

// Promise

// Promise is an object used to know the result of an asynchronous operation
// By using Promises, you can return values from asynchronous methods as if they were synchronous methods.

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

// It is another asynchronous processing pattern introduced in modern javascript.
// Promises allow you to chain subsequent processing methods, 
// enabling you to connect multiple promises together! 
// This can help you solve callback hell!

function pizza_delivery_promise() {
    getOrder_promise()
    .then(() => {
        return notifyDeliveryDepart_promise();
    })
    .then(() => {
        return deliver_promise();
    })
}

//pizza_delivery_promise()

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