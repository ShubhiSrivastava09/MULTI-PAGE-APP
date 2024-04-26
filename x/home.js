let likes_list = [{"imgUrl":"/resources/amazon_logo.png",
    "title":"Amazon"
    },
    {"imgUrl":"/resources/google_logo.png",
    "title":"Google",
    "link":"www.google.com"}];
let events_list=[{
    
}]
function renderPagesToLike(){
    let pagesToLike = '';
    for(ele of likes_list){
        pagesToLikeHTML +=
        <div>
            <img src "${ele.imgUrl}">
            <a href = "${ele.link">${ele.title}</a>
        </div>
       
    }
    document.getElementById('pageto_like').innerHTML=pagestoLikeHTML;
}



function logouthandler(){
    localStorage.setItem('is_user_logged_in',false);
    location.href = 'index.html';
}
const is_user_logged_in = Boolean(localStorage.getItem('is_user_logged_in'));
console.log('is_user_ogged_in',is_user_logged_in);
if(is_user_logged_in){
    location.href = 'index.html'
}