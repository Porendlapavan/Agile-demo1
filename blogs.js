var blogs = document.querySelector('.blogs').children;

var totalblogs = blogs.length;
var blogsperpage = 6;

var index = 1;

var totalpages = Math.ceil(totalblogs / blogsperpage);

/////////////////////////////////////creating the pagenation//////////////////////////////////////////










////////////////////////////////Functionality of various blogs on different pages////////////////////////////
var numbbutton = document.querySelectorAll(".numb");
console.log(numbbutton);

///////Moving to next and prev pages
var prevbutton = document.querySelector(".prev");
var nextbutton = document.querySelector(".next");
prevbutton.addEventListener("click", function () {
    if (index != 1) {
        index--;
        showitems();
    }
})

///clicking at number
for (let i = 0; i < numbbutton.length; i++) {
    numbbutton[i].addEventListener("click", function () {
        console.log(numbbutton[i].innerText);
        index = numbbutton[i].innerText;
        showitems();
    })
}

//clicking next button
nextbutton.addEventListener("click", function () {
    if (index != blogsperpage - 1) {
        index++;
        showitems();
    }
})

function showitems() {
    for (var i = 0; i < totalblogs; i++) {
        blogs[i].classList.remove("show");
        blogs[i].classList.add("hide");

        //if i between index*blogsperpage - blogsperpage     and    index*blogsperpage
        if (i >= (index * blogsperpage) - blogsperpage && i < (index * blogsperpage)) {
            blogs[i].classList.remove("hide");
            blogs[i].classList.add("show");
        }
    }
}

window.onload = showitems();