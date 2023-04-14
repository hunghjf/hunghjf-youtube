/**
  1. Let, const
  2. Template Literals
  3. Multi-line String
  4. Arrow function
  5. Classes
  6. Default parameter values
  7. Destructuring
  8. Rest parameters
  9. Spread
  10. Enhanced object literals
  11. Tagged template literal
 */

  //2
  var name ='js'
  var name2=`${dsadasd} \#`

  const lines = 'Line1 \n'
  +'line2'

  //4
  const sum = (a,b) => a+b; //return luôn
  const sum2 = (a,b) => {
    return a+b};

  const courses = {
    name: 'js',
    getName: ()=> {
      return  this;
    }
  }
  //5 class
  function courses(name, price) {
    this.name = name;
    this.price = price;
  }
  class Course {
    constructor(name,price) {
      this.name = name;
      this.price = price;
    }
  }

  var php = new courses('php', 1000);

  //Default parameter values
    function loggeR(log) {
      if (typeof log ==='undefined'){
        log='Giá trị mặc định';
      }
      console.log(log);
    }
    function loggeR(log='Giá trị mặc định') {
        
      console.log(log);
    }

    loggeR(undefined);

function logger(log, is) {
  if(is) return alert(log)
  console.log(log)
}

logger('Mes', true)


//Echandced object literals
/**
 1 Định nghĩa key: value cho object
 2 Định nghĩa method cho object
 3 Định nghĩa key cho object dưới dạng  biến
 */
var name1 = 'js';
var price = 1000;

var course = {
  name1,
  price,
  getName()/** : function()*/ {
    return name1;
  }
}
console.log(course);
var fieldName = 'new-name';

const course = {
  [fieldName]:'js' //Lấy từ biến
}

//Destructuring, rest
var array = [
  'JS', 'PHP', 'Ruby'
]
//Destructuring
var [a,b,c] = array
console.log(a,b,c);
//Rest
var [a,...rest] = array
console.log(rest);

var course = {
  name: 'js',
  price: 1000
  ,img : 'image-address'
  , children: {
    name:'ReactJS'
  }
} 
  //Đổi tên 
var {name:name2, price, children:{name:childrenName} } = course; //ko khái báo thì sẽ lỗi
console.log(name, price);
var{description='deafaultDescription'} = course;

//Rest vs functiom
function logger(...params) {
  log(params)
}
console.log(logger(1,2,3,4,5,6,7,8)); //[1,2,3,4,5,6,7,8]
//vd 1
function logger({name, price ,...rest}) {
  console.log(name);
  console.log(price);
  console.log(rest); //description
}
//vd2
function logger([a,b,...rest]) {
    console.log(a);//1
    console.log(b);//2
    console.log(rest);//3 4 5
}
logger([1,2,3,4,5])

logger({
  name3:'js'
  ,price:1000,
  description:'content'
})

//Speard
var array1 = ['js','php','ruby'];
var array2 = ['ReactJS', 'Dart']
var array3 = [...array1, ...array1];

console.log(array3); //arr1 +arr2
//vd object

var obj1 = {
  name:'js'
}
var obj2 = {
  price:1000
}
var obj3 = {
  ...obj1,
  ...obj2
}
console.log(obj3); //name: js price:1000
//vd 2
var arr = ['JS','PHP','Ruby']

function logger(...rest) {
  for (let i = 0; i < rest.length; i++) {
   console.log(rest[i]);
    
  }
}
logger(...arr); //JS PHP Ruby

//Tagged template literals
                    // Học    tại !     js f8
function highlight([fisrt, ...string],...rest) { //Destructuring
  // return rest.reduce(
  //   (acc,cur) => {
  //           //Speard để cộng
  //     return [...acc ,      `<span>${cur}</span>`, string.shift()]
  //   },[fisrt]
  // ).join(); //Học js tại f8 !
  //Cách 2
  return rest.reduce((acc,cur,index)=> {
    acc += `<span>${cur}</span> ${string[index]}` 
    return acc;
  },[fisrt]) 
}
var brand ='f8'
var course = 'js'

var html = highlight`học ${course} tại ${brand}!`
console.log(html)


//Modules: Import / Export nạp vào/ Xuất ra 

//html <script type="module">
import logger from './logger.js';
import logger, {
  type_error,
  type_warn,
  type_log
}from './logger.js'
logger('text', type_error)
//logger , js
export var type_log= 'log';
export var type_warn = 'wanr';
export var type_error = 'error';
function logger(log, type = 'log') {
  console[type](log)
}
export default logger; //Chỉ được 1
            //tên mới
import * as logger from''; //select tất cả
          

//Optional chaining (.?)
const obj = {
  name:'Alice',
  cat: {
    name:'Dinah',
    cat2:{
      name:'Dinah2',
      cat3: {
        name:'Dinah3'
      }
    }
  }
}
// nghi ngờ khi ko chắc chăc key đó có tôn tại hay ko
if(obj?.cat?.cat2?.cat3) {
  console.log(obj.cat.cat2.cat3.name);
}