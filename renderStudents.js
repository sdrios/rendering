
function renderStudents(students) {
   var attendance = " "
   students.forEach(function(student){
        if (student.isPresent == true){
           attendance+= `
            <div class="text-center mt-5">
               <div class="row present-div">
                    <span>${student.name}</span>
                    <p>Present</p> 
               </div>
            </div>
        `
        }
        else if (student.isPresent==false){
            attendance+=  `
            <div class="text-center mt-5">
               <div class="row absent-div">
                    <span>${student.name}</span>
                    <p>Absent</p> 
               </div>
            </div>
        `
        }
   })
   
    return attendance;
  
}

function students() {
    var content = document.getElementById('content');

    var studentsAbstraction = [
        {
            name: "Kamilah",
            isPresent: true
        },
        {
            name: "Kim",
            isPresent: true
        },
        {
            name: "Stuart",
            isPresent: false
        },
        {
            name: "Ron",
            isPresent: true
        },
        {
            name: "Krissy",
            isPresent: false
        }
    ]

    content.innerHTML = renderStudents(studentsAbstraction);
}