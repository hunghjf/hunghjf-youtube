/**
 1. Event listener gắn được bỏ được Dom thì không
 2. JSON Là định dạng dữ liệu (chuỗi)
    JavaScript Object Notation
    thể hiện kiểu dữ liệu: Number,String , Boolean, Null, Aray, Object
    "" là thể hiện dạng chuỗi    
 3. Fetch
    -CRUD
        -Create: Tạo mới -> POST
        -Read: lấy dữ liệu  ->GET
        -Update: Chỉnh sửa  -> PUT/PATCH
        -Delete: Xoá ->DELETE
 4. Promise
        -Sync đồng bộ
        -Async bất đồng bộ
        Timeout, Interval, fetch, XMLHttpRequest, đọc files
        -Pain
        -concept, chain
 5. Dom location
 6. Local storage
 7. Session storage
 8. Coding convention
 9. Best Practices
 10. Mistakes
 11. Performace
 */

 //1. Xử lý nhiều việC khi 1 event xảy ra
 //2. Lắng nghe / Huỷ bỏ lắng nghe
var btn = document.getElementById('btn');
console.log(btn);//Ảnh 5
var viec1 = function (e) {
    console.log(Math.random());
}
btn.addEventListener('click',viec1 )//Lắng nghe

setTimeout(function() {
    btn.removeEventListener('click',viec1);
},3000)
btn.onclick = function() {
    console.log('Việc 1')
    console.log('Việc 2')
    console.log('Việc 3')

}

//2 chuỗi json
//Stringify: Từ js type => JSON
//Parse: từ JSON => JS type
var json = '["js","PHP"]';
var json ={"name":"Gia Hưng",
            "age":17}; // abc
var a ='1' //json
console.log(JSON.parse(a))//1

console.log(JSON.stringify({
    name:'Gia Hưng',
    age: 17
}));//Thành chuỗi trả về abc

//3
// Async
setTimeout(() => {
    console.log('1')
}, 3000);
console.log('2')

//call back hell
//pyramid of doom
setTimeout(() => {
    console.log(1)
    setTimeout(() => {
        console.log(2)
        setTimeout(() => {
            console.log(3)
        }, 1000);
    }, 1000);
}, 1000);

//concept
//1 pedding ko i nra solve hay ject rò rĩ bộ nhớ
//2 Fulfilled trạng thái solve
//3 reject
new promise = new Promise(
    //Excutor
    function(resolve, reject) {
        //Thành công: resolve
        //Thất bại: reject
        resolve('Thành công'); //fake call api
        reject();
    }
);

promise.then(
    function(c) {
        console.log(c);    
    }
).catch(
    function() {
        console.log('failure');    
    }
).finally(
    function() {
        console.log('Done');    
    }
)


//chain
new promise = new Promise(
    function(resolve, reject) {
        resolve(); // 1 2 3 Done
    }
)

promise.then(function() {
            return new Promise = function(resolve) {
                setTimeout(() => {
                    return resolve([1,2,3]);
                }, 3000);
            }
    }
).then(function(a) {
    console.log(a)
    return 2
})

.catch(function() {

})
.finally(function () {
    console.log('done');
})

function sleep(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve,ms)
    });
}

sleep(1000)
    .then(function() {
        console.log(1);
        return sleep(1000);
    })
    .then(function() {
        console.log(2)
        return sleep(1000)
    })
    .then(function() {
        console.log(3)
        return sleep(1000)
    })

/**
1. Promise.resolve
2. Promise.reject
3. Promise.all
 */

var promise = Promise.resolve('Thành công')
   

promise 
    .then(function(result) {
        console.log('giá trị' ,result)
    })
    .catch(function(err) {
        console.log('err: ',err)
    })

// ảnh 6 
Promise.all([promise1, promise2]) // Nếu 1 trong 2 reject sẽ rơi vào catch của funtion dưới
    .then(function(result) {
        console.log(result); //lấy 1 2 3 trong 5s
    })

//4 fetch
var postApi=
    'https://jsonplaceholder.typicode.com/posts'

fetch(postApi)
    .then(function(reponse) {
        return reponse.json();
    })
    .then(function(posts) {
        var htmls = posts.map(function(post) {
            return `<li>
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                    </li>`
                    
        })
        var html = htmls.join('') 
        document.getElementById('comment-block').innerHTML = html
    })
    .then(function(posts) {
        console.log(posts);
    })

var courseApi = 'http://localhost:3000/courses'
fetch(courseApi)
    .then(function(reponse) {
        return reponse.json()
    })
    .then(function(c) {
        console.log(c)
    }) 