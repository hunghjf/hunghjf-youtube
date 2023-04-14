/**
1. To string 
2. Join giống trim 
3. Pop Xoá cuối mảng
4. Push Thêm cuối mảng
5. Shift Xoá đầu 
6. Unshift Thêm đàu
7. Splicing  Hàm xoá
8. Concat Hàm nối chuỗi 
9. Slicing
 */

var languages = [
    'Js'
    ,'PHP'
    ,'Ruby'
]

languages.splice(1,2 , 'Dark')
console.log(languages) //Dark Ruby
 
/**
 Array methods
    cú pháp (function() , keyvalue)
    forEach() Gọi phần tử
    every() gọi điều kiện 1  sai tất cả sai
    some() gọi điều kiên 1 đÚng tất cả đúng
    find() Hàm tìm
    filter() hàm lọc
    map() Hàm thêm dữ liệu
    reduce()
    Cú pháp (Biến lưu trữ,giá trị muốn truyền, Key index,origrin )
 */

var courses = [ 
    {
        id: 1,
        name: 'Html',
        coin: 0
    },
    {
        id: 2,
        name: 'Html',
        coin: 100
    },
    {
        id: 3,
        name: 'Html',
        coin: 200
    }
]

var newCourses = courses.map(function(a,index, origrin) {
    return {
        id:courses.id , 
        name: `Khoá học ${course.name}`,
        coin : courses.coin,
        coinText: `Giá: ${courses.coin}`,
        index: courses.index
    }
});

//Tổng coin
var totalCoin = courses.reduce(function(a,b) {
    return a+ b.coin;
},0);


//Logic hàm reduce
Array.prototype.reduce = function(callback , result, keyIndex , origrin) {
    i = 0;
    if(arguments.length <2) {
        i=1;
        result=this[0];
    }
    for (;i<numbers.length; i++) {
       result= callback(result, this[i], i , this);
    }
    return results;
}
const numbers = [1,2,3,4,5]

const results = numbers.reduce2((total,number) => 
    {return total +number})


// Expected results:
var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];
function arrToObj(arr) {
   var a= arr.reduce(function(c,b) {
     c [b[0]] = b[1];
        return c;
    } ,{})
    return a;
}
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }

// includes method
var title = 'Responsive web design';

console.log(title.includes('Responsive')) //true

var course = ['js', 'PHP' , 'Dart'];

//course length +  -3
console.log(course.includes('js' , -3)); //true