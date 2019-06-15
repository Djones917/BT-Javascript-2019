// This is going to mimick our server/database
const posts = [
  {title: 'Post One', body: 'This is post One'},
  { title: 'Post Two', body: 'This is post Two' }
];

// This was created synchronous it takes 2 seconds for server to make create post and 1 second for it to get post but post three will not show up!
// Create Posts
//function createPost() {  
  //setTimeout(function(post) {
    //posts.push(post);
  //}, 2000);
//}


// Get Posts
//function getPosts() {
  //setTimeout(function() {
    //let output = '';
    //posts.forEach(function(post) {
      //output += `<li>${post.title}</li>`;
    //});
    //document.body.innerHTML = output;
  //}, 1000);
//}


// Create Posts
//createPost({title: 'Post Three', body: 'This is post Three'});


//getPosts();






// Now let's do this asynchronous with callbacks!
// Create Posts
function createPost(post, callback) {
  setTimeout(function () {
    posts.push(post);
    callback();
  }, 2000);
}


// Get Posts
function getPosts() {
  setTimeout(function () {
    let output = '';
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}


createPost({ title: 'Post Three', body: 'This is post Three' }, getPosts);