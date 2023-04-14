var user = [
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
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(comments)
        }, 1000);
    })
}
function getUserByIds(userIds) {
    return new Promise(function(resolve) {
        var result = user.filter(function(user) {
            return userIds.includes(user.id) //lọc ra id được gọi ở đây là 1 và 2
        })
        setTimeout(() => {
            resolve(result)
        }, 1000);
    })
}

getComments()
.then(function (comments) {
    var userId = comments.map(function(comment) {
        return comment.user_id;
    })
    return getUserByIds(userId)
    .then(function(user) {
        return {
            user: user,
            comment: comments
        }
    })
})
.then(function(data) {
    // console.log(user)
    var commentBlox = document.getElementById('comment-block')
    var html = '';
    data.comment.forEach(comment => {
        var user = data.user.find(function(user) {
            return user.id === comment.user_id;
        })
        html +=`<li>${user.name}: ${comment.content}</li>`
    });
    commentBlox.innerHTML= html;
})
