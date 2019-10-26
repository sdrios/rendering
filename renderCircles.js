
function renderCircles(circles) {
    // HINT: You probably need to write a for loop!
    //       Or, if you're feeling fancy, use .map() 
    var circleLoop = ""
    circles.forEach(function(element){
        circleLoop +=`
        <div class="text-center mt-5">
        <div class="row" style="background-color:${element.color}; border-radius: 50%; height:
        ${element.radius}px; width:${element.radius}px;"></div>
     </div>
        `
    })
    
    return circleLoop
    }

    function circles() {
    var content = document.getElementById('content');
    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}