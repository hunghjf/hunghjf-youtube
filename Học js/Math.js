/**
 PI số pi
 round(1.5) làm tròn 
 abs Giá trị tuyệt đối ||
 ceil làm tròn lên bất kể mọi thứ Đk >0
 floor làm tròn dưới   
 random() *10 
 min 
 max 
 */
 function getRandomItem(number) {
    return number[Math.floor(Math.random() * number.length)];
 }
 
 var a =['a', 'b', 'c']
 var x = getRandomItem(a);
 console.log(x);