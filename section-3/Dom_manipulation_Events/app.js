// NOTE: This is just for you knowledge not nessasarily to use.

let val;

// Gives us the entire html document view in console
val = document;
// Gives us a collection of everything in document
val = document.all;
// Get what you want zero based index
val = document.all[0]; 
// To see how many elements are in the DOM (43 with this html file)
val = document.all.length;
// Access the head
val = document.head;
// Access the body
val = document.body;
// Access the <!DOCTYPE> (First line in the html file) so it would show xhtml if that was what you were using
val = document.doctype;
// Get domain NOTE this will print you local host number port (example 127.0.0.1) when your developing on own computer
val = document.domain;
// Get URL is like Domain but will also give you the https: and page
val = document.URL;
// Get character set NOTE: UTF-8
val = document.characterSet;
// Get content type NOTE: will log 'text/html'
val = document.contentType;








// NOTE: THIS IS TO SHOW THAT YOU CAN SELECT OBJECTS WITH OUT USING JAVASCRIPTS SELECTORS!!! IT'S NOT RECOMMENED!!!!

// Get all forms
val = document.forms;
val = document.forms[0];
// Get id from form
val = document.forms[0].id;
// Get form method get/post
val = document.forms[0].method;
// Get action Example: action="index.php" goes in form
val = document.forms[0].action;

// You can also do this with links
val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
// Get a collection of classes
val = document.links[0].classList;
val = document.links[0].classList[0];








// get images NOTE: there are no images so the console will print [] an empty collection
val = document.images;



// Get scripts NOTE: scripts at the bottom of html page
val = document.scripts;
// get source attribute
val = document.scripts[2].getAttribute('src');




console.log(val);