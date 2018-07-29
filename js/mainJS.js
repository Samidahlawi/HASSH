const studentRegister = document.getElementById('conHElemntL'); 
var titleSubHElementL = document.getElementById('subHElementL');
var titleSubHElementR = document.getElementById('subHElementR');
const teacherRegister = document.getElementById('conHElemntR');
var bodyStudent = document.getElementsByClassName('studentBody')[0];
var bodyTeacher = document.getElementsByClassName('teacherBody')[0];


//Function for show the body of student, all detail of student will show when clicked the button 
studentRegister.addEventListener('click',function() {
    bodyStudent.style.display = "block";
    bodyStudent.style.border = "3px solid white";
    bodyTeacher.style.display = "none";
    
    studentRegister.style.border =  "3px solid white"; 
    studentRegister.style.backgroundColor = "white";
    
    teacherRegister.style.border =  "none";
    teacherRegister.style.zIndex =  "-1";
    teacherRegister.style.background = "#319c49";
    
    titleSubHElementL.style.color = "#319c49";
    titleSubHElementR.style.color = "white";
});

//Show the body of teacher, all detail of teacher will show when clicked the button 
teacherRegister.addEventListener('click',function() {
    bodyTeacher.style.display = "block";
    bodyTeacher.style.border = "3px solid white";  
    bodyStudent.style.display = "none";
    
    teacherRegister.style.border =  "3px solid white";
    teacherRegister.style.backgroundColor = "white";
    
    studentRegister.style.border =  "none";
    studentRegister.style.zIndex = "-1";
    studentRegister.style.background = "#319c49";
    
    titleSubHElementL.style.color = "white";
    titleSubHElementR.style.color = "#319c49";
});
