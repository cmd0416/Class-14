//Write your pseduo code first! 

//create the converter button
document.querySelector('#convert').addEventListener('click', convert)

function convert(){

    //grab the value
    let temp = document.querySelector('#celsius').value

    //convert
    temp = Number(temp) + 32


//display the new value

    document.querySelector('#tempResult').innerText = temp
}


