var addButon = document.getElementById('new-blog'),
    addBlogListener = function (evt) {
        var newBlogRequest = new XMLHttpRequest();
        newBlogRequest.open('GET', 'blog.html', true);
        newBlogRequest.responseType = 'text';
        newBlogRequest.onload = function () {
            if (this.status == 200) {
                createBlog(this.response);
            }
        };

        newBlogRequest.send();

    };

addButon.addEventListener('click', addBlogListener);

var createBlog = function(blogDom){
    var blogArea = document.getElementById('newBlog'),
        div = document.createElement('div');
    div.classList.add('blog');
    div.innerHTML = blogDom;
    //blogArea.appendChild(div);
    blogArea.insertBefore(div, blogArea.childNodes[0]);
}

var blogRequest = new XMLHttpRequest();
blogRequest.open('GET', 'data.json', true);
//newBlogRequest.responseType = 'json';
blogRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(blogRequest.responseText);
        myFunction(data);
    }
};

blogRequest.send();
function myFunction(data) {
    var out = "";
    var i;
    for(i = 0; i < data.length; i++){
        out += '<div class="blog"><div class="blog-title" style ="display:table">'+data[i].title+'</div><div class="author"  style ="display:table">'+data[i].authorname+'<br></div><div class="blog-description"  style ="display:table">'+data[i].description+'<br></div></div>';
    }
    document.getElementById('space').innerHTML = out;
}