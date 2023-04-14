// Opjec trong JS
//     var emailKey ='email';
// var myInfo = {
//     name:'Gia HƯng',
//     age :17,
//     address: 'VN',
//     [emailKey]: 'hungdepgia1232@gmail.com',
//     getName: function() {
//         return this.name;
//     }
// }
// myInfo[bla]='1';
// myInfo.bla = 1;
// delete myInfo.age;

//Opject constructor

function User(firstName , lastName, avatar) {
    this.lastName = lastName;
    this.avatar = avatar;
    this.firstName = firstName;
    
    this.getName = function() {
        return  this.firstName + this.lastName;
    }
    //Gọi biến dược gọi
}

var author = new User('Gia Hưng', 'Nguyễn Huỳnh', 'Avatar');
author.title = "Chia sẻ"; //Thêm

//Object prototype - Basic

//Thêm thuộc tính
User.prototype.className = 'f8';
User.prototype.getClassname = function() {
    return this.className;
}
console.log(author.getClassname());
``