const throttleFunction = (func, delay)=>{
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        // console.log(now-prev, delay);
        if(now-prev > delay){
            prev = now;
            return func(...args)
        }
    }
}


const arr = [
    {img:"https://images.unsplash.com/photo-1696774690902-6e2057307e20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8UzRNS0xBc0JCNzR8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {img:"https://images.unsplash.com/photo-1696774690902-6e2057307e20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8UzRNS0xBc0JCNzR8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {img:"https://images.unsplash.com/photo-1696774690902-6e2057307e20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8UzRNS0xBc0JCNzR8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {img:"https://images.unsplash.com/photo-1695662917617-a1bfc0e2fbed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"}
]

arr.forEach((e) => {
    console.log(e);
});

document.querySelector(".center").addEventListener("mousemove", throttleFunction((e) => {
    console.log(e);
    let div1 = document.createElement("div");
    div1.classList.add("imagediv");
    div1.style.display = "block";
    div1.style.left = e.clientX + "px";
    div1.style.top = e.clientY + "px";

    let img = document.createElement("img");
    img.setAttribute("src", "jiraiyaNnaruto.png");
    div1.appendChild(img);



    document.body.appendChild(div1);


    setTimeout(() => {
        if(img.style.transform = "translateY(100%)"){
            img.style.transform = "translateY(5%)";
        }
    }, 0);

    setTimeout(() => {
        if(img.style.transform = "translateY(5%)"){
            img.style.transform = "translateY(100%)";
            img.style.transitionDuration = ".6s"
        }
    }, 700);

    // gsap.to(img, {
    //     y:"0",
    //     ease: Power1,
    //     duration: .6,
    // });

    // gsap.to(img, {
    //     y:"100%",
    //     delay: .6,
    //     ease:Power2
    // });

    setTimeout(() => {
        div1.remove();
    }, 2000);
}, 1000));


// OR==>
// throttleFunction((e)=>{
//     console.log(e.clientX, e.clientY);
// }, 500))
