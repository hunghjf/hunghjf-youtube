// function showDialog() {
//     alert('Hello word');
// }
// showDialog();

function writeLog(){
    var myString ='';
    for (var a of arguments){
        myString += `${a}-`;
    }
    console.log(myString);
}
writeLog('Log1', 'log2', 'log3');