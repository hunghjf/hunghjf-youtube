// // function deQuy() {
// //     deQuy();
// // }

// // deQuy();

// function countDown(number) {
//     if (number>0) {
//         console.log(number);
//         return countDown(number -1);
//     }
//     return number;
// }

// countDown(10);

function loop (start, end, cb) {
    if(start< end) {
        cb(start);
    
        return loop(start+1,end, cb);
    }
}

var array = ['Js', 'PHP', 'PHP' , 'Ruby'];

loop(0, array.length, function(i) {
    console.log(array[i]);
})