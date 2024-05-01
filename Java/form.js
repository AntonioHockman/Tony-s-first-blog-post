const blogNameEl = document.querySelector('#blogName');
const blogTitleEl = document.querySelector('#blogTitle');
const contentAreaEl = document.querySelector('#contentArea');
let myButton = document.querySelector(".Button");

function getBlogPost(event) {
    event.preventDefault();
    let blogNameVal = blogNameEl.value.trim();
    let blogTitleVal = blogTitleEl.value.trim();
    let contentAreaVal = contentAreaEl.value.trim();

    if (blogNameVal === "") {
      
        alert("Please fill in UserName!");
        return false;
    } else if (blogTitleVal === "") {
      
        alert("Please fill in Title!");
        return false;
    } else if (contentAreaVal === "") {
      
        alert("Please fill in Content!");
        return false;
    }

    let blogPostInfo = {
        user: blogNameVal,
        title: blogTitleVal,
        content: contentAreaVal,
    };

    let blogArray = JSON.parse(localStorage.getItem("blogPosts")) || [];



    blogArray.push(blogPostInfo);

    // Clear form inputs
    blogNameEl.value = "";
    blogTitleEl.value = "";
    contentAreaEl.value = "";

    let blogArraySerialized = JSON.stringify(blogArray);
    localStorage.setItem("blogPosts", blogArraySerialized);

    console.log(blogArray);
    console.log(blogArraySerialized);

    window.location.href = "./blog.html";
};

myButton.addEventListener("click",getBlogPost);

// Remove the form submit event listener and handle the form submission directly in getBlogPost function
// document.getElementById("myForm").addEventListener("submit", function(event) {
    //     event.preventDefault();
    //     window.location.href = "./blog.html";
// });
    




