const lodash = require('lodash')

let arr1 = [2,8, 9, 32, 46,2, 3,6]
let arr2 = [3, 23, 34, 6, 2, 7]
let arr3 = [ 64, 77, 6, 5,34, 63, 98]
let arr4 = [2,8, 9,55, 67, 3, 43, 85]
let arr5 = [9,55, 67, 21, 34, 6, 5,34]

let unionArr = lodash.union(arr1, arr2, arr3, arr4, arr5)

let movie = [['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]
let paired = lodash.fromPairs(movie)

module.exports.paired = paired
module.exports.unionArr = unionArr