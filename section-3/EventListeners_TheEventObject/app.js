// NOTE: WHEN YOU CLICK THE 'CLICKED' WILL FLASH REAL QUICK IN THE CONSOLE. TO STOP THIS PUT # IN THE HREF LINK. THIS IS BECAUSE SOME HTML ELEMENTS HAVE CERTAIN DEFAULT BEHAVIORS 
// EXAMPLE A FORM WILL SUBMIT TO A PAGE, A LINK WILL TRY TO REDIRECT SO USE # 
// TO STOP ANY DEFAULT BEHAVIOR ADD e (event object) to the function parameter and e.preventDefault()

document.querySelector('.clear-tasks').addEventListener('click', function(e){
    console.log('Clicked!');

    e.preventDefault();
});