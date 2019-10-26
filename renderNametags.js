
function renderNametags(nametags) {
   var names = ""
   nametags.forEach(function(name){
       names+=  `
       <div class="text-center mt-5">
          <div class="row student-intro"><p>Hello, my name is:</p></div>
          <div class="row student-name"><p>${name}</p></div>
       </div>
   `
   }) 
    return names
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}