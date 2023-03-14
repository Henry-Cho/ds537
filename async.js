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
    }, 1000)
}

function pizza_delivery() {
    getOrder();
    notifyDeliveryDepart();
    deliver();
}

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
        }, 1000)
    });
}

function pizza_delivery_promise() {
    getOrder_promise()
    .then(() => {
        notifyDeliveryDepart_promise();
    })
    .then(() => {
        deliver_promise();
    })
}

//pizza_delivery_promise()

async function pizza_delivery_async() {
    await getOrder_promise();
    await notifyDeliveryDepart_promise();
    await deliver_promise();
}

pizza_delivery_async();