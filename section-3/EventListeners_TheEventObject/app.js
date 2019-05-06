// NOTE: WHEN YOU CLICK THE 'CLICKED' WILL FLASH REAL QUICK IN THE CONSOLE. TO STOP THIS PUT # IN THE HREF LINK. THIS IS BECAUSE SOME HTML ELEMENTS HAVE CERTAIN DEFAULT BEHAVIORS 
// EXAMPLE A FORM WILL SUBMIT TO A PAGE, A LINK WILL TRY TO REDIRECT SO USE # 
// TO STOP ANY DEFAULT BEHAVIOR ADD e (event object) to the function parameter and e.preventDefault()

// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//    console.log('Clicked!');

//    e.preventDefault();
// });




// You can write it as above but below is a better way!
// So e for event object and one of it's properties is target!
document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
    //console.log('Clicked');
    
    let val;
    val = e;

    // Event Target Element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;

    //val = e.target.innerText = 'Hello';


    // Event Type
    val = e.type;

    // Time Stamp
    val = e.timeStamp;


    // Cordinates relative to the window y give you how far down you are from the top vertical. x is horizontal
    val = e.clientY;
    val = e.clientX;

    // Cordinates relative to the element
    val = e.offsetY;
    val = e.offsetX;


    console.log(val);

    //e.preventDefault();
}


