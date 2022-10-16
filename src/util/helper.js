let printDate = function(){
    return new Date()
}
let printMonth  = function(){
    return 
}

function getBatchInfo(){
    let info = {
        batcName : 'Lithium',
        week : 3,
        day :  4, 
        topic : "nodejs module syster"

    }
    return info
}

module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo