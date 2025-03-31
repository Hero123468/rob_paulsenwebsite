let age = document.getElementById('age')
let button = document.getElementById('button')
let codeOutput = document.getElementById("code-output")
function ageChecker(){
    let solution = ''
    let x = age.value
    let xNum = Number(x)
    //console.log(typeof xNum)

    if(xNum < 69){
        solution = 'You are younger than Robert Paulsen'
        console.log('You are much younger than Robert Paulsen')
    }
    else if(xNum > 69){
        solution = 'You are so old dude'
        console.log('Then you are so old dude!')
    }
    else{
        solution = 'You are the same age as Robert Paulsen'
        console.log('Cowabunga! You are the same age as Robert Paulsen!')
    }

    codeOutput.innerHTML = solution

}


/*

this is a function definiton
function name (perams) {
    the action the function does
}
 this is how we do a function call
 we use the function name followed by ()
 name ()
*/