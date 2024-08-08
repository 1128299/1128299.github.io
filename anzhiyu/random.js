var posts=["article/3758dd9c.html","article/a081e542.html","article/bd15d44c.html","article/f5d798b8.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };