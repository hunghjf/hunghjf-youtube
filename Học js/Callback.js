Array.prototype.map2 = function(callback) {
    var out =[],arrayLength = this.length;

    for(var i =0 ; i< arrayLength; i++)
    {
        var result=callback(this[i], i);
        out.push(result);
    }
    
    return out //Xuất htmls phải tạo hàm mơi
}
var courses = [
    'js',
    'PHP',
    'Ruby'
]

var htmls= courses.map2(function(course,index) {
    return `${course}`;
})
console.log(htmls);

//Empty
console.length = 10;
console.log(courses); //3 mảng đc truyền + emty 7

var courses = [
    'Js',
    'PHP',
    'Ruby'
]
//forEach
Array.prototype.forEach2= function(callback) {
    
    for(var index in this) { //Vòng lập duyệt luôn phương thức trong prototype
        if (this.hasOwnProperty(index)) {
        callback(this[index], index, this)
        }

    }
}
courses.forEach2(function(course, index, array) {
    console.log(course, index, array);
})

//Filter

Array.prototype.filter2 = function(cb) {
    var out = []
    for (var index in this ) {  //ko lọc qua mảng trống
        if (this.hasOwnProperty(index)) { 
        var c= cb(this[index], index, this)
            if(c) {
                out.push(this[index]);
            }
        }
    }
    return out;
}
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

var filter = courses.filter2(function(course, index, array) {
    return course.coin >40;
})

//some: true false

Array.prototype.some2 = function(cb) {
    var out = false;
    for ( var i in this) {
        if (this.hasOwnProperty(i)) {
            if(cb(this[i], i, this)) {
                out = true;
                break;
            }
        }
    }
    return out;
}
var courses = [ 
    {
        id: 1,
        name: 'Html',
        coin: 0,
        isFinish: true
    },
    {
        id: 2,
        name: 'Html',
        coin: 100,
        isFinish: false
    },
    {
        id: 3,
        name: 'Html',
        coin: 200,
        isFinish: true
    }
]

var result = courses.some2(function(course, index, array) {
    return course.isFinish;
})

//every
Array.prototype.every2 = function(cb) {
    var out = true;
    for ( var i in this) {
        if (this.hasOwnProperty(i)) {
            var result=cb(this[i], i, this) 
            if(!result){
                out = false;
                break;
            }
        }
    }
    return out;
}
var courses = [ 
    {
        id: 1,
        name: 'Html',
        coin: 0,
        isFinish: true
    },
    {
        id: 2,
        name: 'Html',
        coin: 100,
        isFinish: false
    },
    {
        id: 3,
        name: 'Html',
        coin: 200,
        isFinish: true
    }
]

var result = courses.every2(function(course, index, array) {
    return course.isFinish;
})