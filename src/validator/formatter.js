let myStr = 'My name is Shivam'
function trim(){
    let str = ' functionUp '
    let trimStr = str.trim()
    console.log('length is ', trimStr.length)
    return 'Trimed String is : ',trimStr
    
}
// trim()

let changetoLowerCase = ()=>{
    let lower = myStr.toLowerCase()
    return 'Lower Case is : ',lower
}   
// changetoLowerCase()

let changeToUpperCase = ()=>{
    let upper = myStr.toUpperCase()
    return 'Upper Case is : ',upper
}   
// changeToUpperCase()

module.exports.trim = trim
module.exports.changeToUpperCase = changeToUpperCase
module.exports.changetoLowerCase = changetoLowerCase