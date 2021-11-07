const calPoints = (ops) => {
    let result = null;
    let arr = [];
    for(let i = 0; i < ops.length; i++) {
        const ele = ops[i];
        if(ele === 'D') {
            arr.push(2 * arr.slice(-1)[0] )
        } else if(ele === 'C') {
            arr.pop()
        } else if( ele === '+') {
            arr.push(arr.slice(-1)[0] + arr[arr.length - 2])
            
        } else {
            arr.push(parseFloat(ele))
        }
    }

    result = arr.reduce((x, y) => x + y, 0)

    return result
}

// a(['5', '-2', '4', 'C', 'D', '9', '+', '+'])

// a(['5', '2', 'C', 'D', '+'])

console.log(calPoints(['5', '2', 'C', 'D', '+']))