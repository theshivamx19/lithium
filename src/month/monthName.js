const lodash = require('lodash')
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let chunkArr = lodash.chunk(monthNames, 4)

let oddArr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
let tailedArr = lodash.tail(oddArr)

module.exports.monthNames = chunkArr
module.exports.tailedArr = tailedArr