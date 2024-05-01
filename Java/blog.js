const blogPostList= document.querySelector('#blog-post')

let blogArray = JSON.parse(localStorage.getItem("blogPosts")) || [];
console.log(blogArray);



// Function to toggle between dark and light mode
function toggleDarkMode() {
    blogPostList.classList.toggle('dark');
    blogPostList.classList.toggle('light');
}

for (let index = 0; index < blogArray.length; index++) {
    
    
    
    const blogPostContainer = document.createElement('div')
    const title = document.createElement('h2');
    title.textContent= 'Title:'  + blogArray[index].title;
    const textArea = document.createElement('p')
    textArea.textContent = blogArray[index].content;
    const userName = document.createElement('h4');
    userName.textContent = 'User Name:' + blogArray[index].user;

    //styling for a divider for the blog layout
    const divider = document.createElement('hr');
    const titleDivider = document.createElement('hr');
    
    textArea.append(divider);
    //divider.style.border = '1px solid white';
    
    
    blogPostContainer.append(title,textArea,userName);
    blogPostList.append(blogPostContainer);

//     blogPostContainer.style.backgroundColor = 'lightblue';
//    blogPostContainer.style.color = 'white';
//    blogPostContainer.style.padding = '10px';
//    blogPostContainer.style.border = '1px solid blue';

//    textArea.style.color = 'white';
   
   }

   const toggleCheckbox = document.getElementById('toggle'); // Get the checkbox element
   
// Add event listener for toggling dark mode on checkbox change
toggleCheckbox.addEventListener('change', function() {
    if (toggleCheckbox.checked) {
        blogPostList.classList.add('dark');
        blogPostList.classList.remove('light');
    } else {
        blogPostList.classList.remove('dark');
        blogPostList.classList.add('light');
    }
});


