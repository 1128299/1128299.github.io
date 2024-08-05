var posts=["2024/08/05/3/","2024/08/05/聊斋故事：偷鸡不成蚀把米/","2024/08/03/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };