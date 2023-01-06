// *Variables*
// Create a variable and console log the value
let dumb = 0

console.log(dumb)
// Create a variable, add 10 to it, and alert the value
let him = 2

him = him + 10

alert(him)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subtractThem(s1,s2,s3,s4){
    let ssum = s1 - s2 - s3 - s4
    alert(ssum)
}

subtractThem(10,1,1,1)


// Create a function that divides one number by another and returns the remainder

function divideThem(d1,d2){
    let pizza = d1 / d2
    
    return(pizza)
}

console.log(divideThem(10,5))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function diffy(a1,a2){
    let apples = a1 + a2

    if(apples > 50){
        alert("JUMANJI")
    }
}

diffy(50,1)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA


function multiplyThem(mt1,mt2,mt3){
    let zebra = (mt1 * mt2 * mt3) % 3

    if(zebra == 0  ){
        alert("ZEBRA")
    }

    else{
        alert("not zebra"
        )
    }
}

multiplyThem(3,3,3)