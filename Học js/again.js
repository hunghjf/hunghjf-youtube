var users = [
    {
        id:1,
        name:'Gia Hưng' 
    },
    {
        id:2,
        name:'Sơn Đặng'
    },
    {
        id:3,
        name:'gg'
    }
];

var comments = [
    {
        id:1,
        user_id:1,
        content:'Anh sơn chưa ra video'
    },
    {
        id:2,
        user_id:2,
        content:'vừa ra xong em ơi'
    }
]
// 1. Lấy comments
// 2. Từ comments lấy ra user_id
// từ user_id lấy ra user tương ứng

function getComments() {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve(comments)
        }, 1000);
    })
}

function getUserByIds(id) {
    return new Promise((resolve, reject) => {
        var result = users.filter(function(b) {
            return id.includes(b.id);
        }) 
        setTimeout(() => {
            resolve(result)
        }, 1000);
    })

}

getComments()
.then(function(comment) {
    var user_ids = comment.map(function(a) {
        return a.user_id;
    })
    return getUserByIds(user_ids)
    .then(function(users) {
        return {
            userss: users,
            comment:comments
        }
    })
})

.then(function(data) {
    console.log(data);
    var commentBlox = document.getElementById('comment-block')
    var html = '';
    data.comment.forEach(function(a) {
        var result = data.userss.find(function(b) {
            return b.id === a.user_id;
        })
        html += `<li>${result.name}: ${a.content}</li>`
    })
    commentBlox.innerHTML = html
})

