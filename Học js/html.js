// //HTML DOM

// //1 .Element: ID, class , tag
// // Css selector , html collection



var boxNode = document.querySelector('.box-1');

console.log(boxNode.querySelectorAll('li'))


// // 1. getElementById dữ liệu trả về
// // 2. getElementsByClassName
// // 3. getElementsByTagName
// // 4. querySelector dữ liệu trả về
// // 5. querySelectorAll

// // 6. HTML collection
// // 7. document.wirte

// //2 Attribute ID class

// // Dom attributes

var headingElement = document.querySelector('h1')
//Thêm attributes vào 
headingElement.title='headiing'; //<h1 title="heading">
// thêm attringbutes = phương thức
headingElement.setAttribute('class','smt');
//lấy tất cả
console.log(headingElement.getAttribute('class')) //smt

// //3 Text 
// //IntelText, textContent ko được hiểu là element
var headingElement = 
    document.querySelector('.heading');
    //Ko chịu tác động trừ css chỉ hiển thị trên giao diện
    console.log(headingElement.innerText) // lấy nội dung h1 class heading
    // có chịu tác động các thẻ div span css ko 
    console.log(headingElement.textContent) // tương tự

headingElement.innerText = 'Hello' //hello

// // innerHTML, outerHTMl
var boxelemnt = document.querySelector('.box');
//Thêm element
boxelemnt.innerHTML= '<i>Heading</i>'
// // Ghi đè lên phần từ cha
boxelemnt.outerHTML= '<i>Heading</i>'

console.log(boxelemnt.innerHTML);//trả về dạng chuỗi        

//Dom style
var boxElemnt =
    document.querySelector('.box');

boxElemnt.style.with= '100px';
boxElemnt.style.height= '100px';
boxElemnt.style.backgroundColor= 'red';

Object.assign(boxElemnt.style, {
    with: '200px',
    height:'200px',
    backgroundColor: 'green'
})

console.log(boxElemnt.style.with);

// ClassList property element Node

// add  Thêm class
// contains ktr tồn tại
// remove
// toggle ktr tồn tại nếu có thì xoá ko có thfi thêm

var boxElemnt = 
    document.querySelector('.box')
/**
    .red {
        color:red;
    }
*/

boxElemnt.classList.add('red');
console.log(boxElemnt.classList.contains('red')) //true
setTimeout(() => {
    boxElemnt.classList.remove('red')
}, 3000);

setInterval(() => {
    boxElemnt.classList.toggle('red'); 
}, 1000);
console.log(boxElemnt.classList.value) //trả về attribute


//Dom events
// 1. Atribute events
// 2. Assign event using the element node

{/* <h1 onclick="console.log(Math.random())">Dom envent</h1>  */}
//Khi ấn vào Dom event in ra 1 dãy số ngẫu nhiên
// Con trc cha sau

var h1Element = 
    document.querySelectorAll('h1');

for (let i = 0; i < h1Element.length; ++i) {
    h1Element[i].onclick = function(e) { //e mouse event
        console.log(e.target);
    }
}

// 3 Input / select

<inputType type='text'></inputType>,
<inputType type='chechbox'></inputType>,
<Selection>
    <Option value='1'>a</Option>
    <Option value='2'>b</Option>
    <Option value='3'>c</Option>    
</Selection>

var inputElement = 
    document.querySelector('input[type="text"]')

inputElement.onchange = function(e) { //khi thay đổi giá trị thẻ đc select thì sẽ in ra giá trị đó
    console.log(e.target.value);
}
inputElement.oniput = function(e) {  // lấy từng chữ 
    console.log(e.target.value);
}


var inputElement = 
    document.querySelector('input[type="checkbox"]')
    inputElement.onchange = function(e) { 
        console.log(e.target.checked); // true false
    }

var inputElement = 
    document.querySelector('select')
    inputElement.onchange = function(e) { 
        console.log(e.target.value); // 1 2 3
    }

// 4 Key up / down
var inputElement = 
    document.querySelector('input[type="text"]')
inputElement.onkeyup = function(e) { //ấn xuống nhận giá trị và ngc lại
    console.log(e.which)
    switch (e.which) {
        case 27:
            console.log('Exit');
            break;    
        default:
            break;
    }
}

document.onkeypress = function(e) {
    console.log(e.which);
}

// 5 preventDefault
// <a href =f8 > Học 
// <a href = google> Tìm kiếm
                        //achors thẻ a có name
var aElements = document.links; //tất cả thẻ a

for (let i = 0; i < aElements.length; i++) {
    aElements[i].onclick = function(e) {
        if(!e.target.href.statsWith('https://f8.edu.vn')) {
            e.preventDefault(); //vẫn chạy như bth
        }
    }
    
}
//ảnh 3
var ulElement =document.querySelector('ul')
    ulElement.onmousedown = function(e) { // ngăn chặc blur khi ấn ra ngoài
        e.preventDefault();
    }
ulElement.onclick = 
    function(e) {
        console.log(e.target);
    }

//6 stopPropagantion
//ảnh 4

document.querySelector('div').onclick =
    function (e) {
        e.stopPropagation();
        console.log('click me!')
    }//tránh sư kiện nổi bọt

document.querySelector('button').onclick =
    function (e) {
        e.stopPropagation();
        console.log('click me!')
    }