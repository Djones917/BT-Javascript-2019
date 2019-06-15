// This is going to mimick our server/database
const posts = [
  {title: 'Post One', body: 'This is post One'},
  { title: 'Post Two', body: 'This is post Two' }
];


// Create Posts
function createPosts() {
  
  setTimeout(function(post){
    posts.push(post);
  });
}


// Get Posts
function getPosts() {

}