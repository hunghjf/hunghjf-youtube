function run(object) {
    var a = [];
    for (var key in object) {
       a.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
    }
    console.log(typeof(a))
    return a;
}

// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]

var languages = {
    name: 'Gia Hưng', 
    age: 17
};
console.log(Object.keys(languages));
//KO thể gọi Object
for (var value of Object.keys(languages))   {

}
for(var value of myInfo) {
    console.log(value);
}

// do/while 
var i=0;
var isSuccess = false;
do{
    i++;
    console.log(i);

    if(false) {
        isSuccess=true;
    }

}while(!isSuccess && i<=3);

//Lồng Nested loop
var myArray = [
    [1, 2],
    [3, 4],
    [5, 6]
]
for (var i=0 ; i< myArray.length; i++) {
    for (var j=0; j < myArray[i].length; j++) {
        console.log(myArray[i][j]);
    }
}