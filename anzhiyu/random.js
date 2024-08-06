var posts=["article/4a17b156.html","article/fe63257.html","article/6dd28e9b.html","article/a081e542.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };