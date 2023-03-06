var diffWaysToCompute = function(expression) {
    const result = [];
    
    //loop through the input string
    for(let i = 0; i < expression.length; i++){
        let currentString = expression[i];
        console.log("Current String: ", currentString);
        //if we find an operator we will split the input string into two
        //by recursive calling the right and left side
        if(currentString === '+' || currentString === '-' || currentString === '*'){
            console.log("Got operator!")
            let left = diffWaysToCompute(expression.substring(0,i));
            console.log("left: ", left);
            let right = diffWaysToCompute(expression.substring(i+1));
            console.log("right: ", right);
            
            console.log("Calculation Start")
            left.forEach(leftElement => {
                right.forEach(rightElement => {
                    if(currentString === '+'){
                        console.log("Operator: ", currentString)
                        result.push(leftElement + rightElement);
                        console.log(result)
                    }if(currentString === '-'){
                        console.log("Operator: ", currentString)
                        result.push(leftElement - rightElement);
                        console.log(result)
                    }
                    if(currentString === '*'){
                        console.log("Operator: ", currentString)
                        result.push(leftElement * rightElement);
                        console.log(result)
                    }
                });
                });
                
            }  
    }
    
    //if there are no operators
    //convert the input string to an integer and push into the
    //results array
    if(result.length === 0){
        result.push(parseInt(expression));
    }
    return result;
};

diffWaysToCompute("2-1-1");