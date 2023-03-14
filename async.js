function print(str) {
    console.log(str)
}

function deliver() {
    setTimeout(function() {
        print("Delivered!");
    }, 2000)
}

function getOrder() {
    setTimeout(function() {
        print("Just got your order!");
    }, 1000)
}

function notifyDeliveryDepart() {
    print("Our delivery is on its way!");
}

function pizza_delivery() {
    getOrder();
    notifyDeliveryDepart();
    deliver();
    getOrder();
    notifyDeliveryDepart();
    deliver();
}

//pizza_delivery()

function deliver_promise() {
    return new Promise(function(resolve, reject) {
        resolve(print("Delivered!"));
    });
}

function getOrder_promise() {
    return new Promise(function(resolve, reject) {
        resolve(print("Just got your order!"));
    });
}

function notifyDeliveryDepart_promise() {
    return new Promise(function(resolve, reject) {
        resolve(print("Our delivery is on its way!"));
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
    .then(() => {
        getOrder_promise();
    })
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
    await getOrder_promise();
    await notifyDeliveryDepart_promise();
    await deliver_promise();
}

pizza_delivery_async();