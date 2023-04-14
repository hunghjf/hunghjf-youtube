var coursesApi ='http://localhost:3000/courses'

function start() {
    getCourses(renderCourses); // lấy dữ lệu in ra màn hình 
    handleCreateForm();
}
start();

function getCourses(callback) { // lấy dữu liệU 
    fetch(coursesApi)
        .then(function(reponse) {
            return reponse.json();
        })
        .then(callback)
}

function createCourses(data,callback) {
    var option = {
        method: 'POST',
        headers:{
        'Content-Type':  'application/json'
    },
        body: JSON.stringify(data) //gữi dữ liệu
    }
    fetch(coursesApi, option)
        .then(function(reponse) {
            reponse.json();
        })
        .then(callback)
}
function renderCourses(courses) {
    var lisCoursesBlock =
        document.querySelector('#list-courses'); // select list để hiển thị dữ liệu
    var htmls = courses.map(function(course) {
        return `<li class='course-item-${course.id}'>  
                    <h4>${course.name}</h4>  
                    <p>${course.description}</p>        
                    <button onclick="handleDeleteCourse(${course.id})">Xoá</button>   
        </li>`;
    });
    lisCoursesBlock.innerHTML = htmls    //In r màn hình
}

function handleDeleteCourse(id) {
    var option = {
        method: 'DELETE',
        headers:{
        'Content-Type':  'application/json'
    },
    }
    fetch(coursesApi + '/' +id, option)
        .then(function(reponse) {
            reponse.json();
        })
        .then(function() {
           var courseItem= document.querySelector('.course-item-'+id);
            if(courseItem) {
                courseItem.remove();
            }
        })
}
function handleCreateForm() {
    var createBtn = document.querySelector('#create')    //select vào button

    createBtn.onclick=function() {
        var name = document.querySelector('input[name="name"]').value;  //lấy value từ input
        var description = document.querySelector('input[name="Description"]').value;

        var formData = {
            name: name,
            description: description
        }
        createCourses(formData,function() {
            getCourses(renderCourses);  
        });

    }
}