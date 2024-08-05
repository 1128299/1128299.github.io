var posts=["article/6dd28e9b.html","article/4a17b156.html","article/a081e542.html","article/d48cd2f.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };