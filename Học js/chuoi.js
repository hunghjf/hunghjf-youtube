var myString = 'Làm việc với chuỗi'
//1 Length
    console.log(myString.length);
//2 Find index
    console.log(myString.indexOf('vi'));
    console.log(myString.indexOf('vi', ''));
    console.log(myString.lastIndexOf('vi'));    
    console.log(myString.search('vi'));
//3 Cut string
    console.log(myString.slice(4));
//4 Replace
    console.log(myString.replace('vi' , 'aa'));
//5 Convert to uppercase
    console.log(myString.toUpperCase);
//6 Convert to lower case
    console.log(myString.toLowerCase);
//7 trim khoẳng trắng thừa
    console.log(myString.trim());
//8 split
    var languages = 'JS, PHP, Ruby';

    console.log(myString.split(', '));
//9 get a character by index 
    const myString2 = 'Gia Hung';
    console.log(myString.charAt(0));
    console.log(myString[10 ]);
    