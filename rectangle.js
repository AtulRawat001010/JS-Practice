let rect = document.querySelector(".rectangle");
let header = document.querySelector("header");
// let rect2 = document.querySelector(".rectangle2");

rect.addEventListener("mousemove", (e)=> {
    console.log(e);  //mouse Events or pointer events Will be printed.

    console.log(rect.getBoundingClientRect()); //to get the location of an element on Dom.
    let rectLocation = rect.getBoundingClientRect();

    console.log(rectLocation.width); //to see the Width of the element.

    let mouseLocationNow = parseInt(e.clientX - rectLocation.left);

    if(mouseLocationNow<(rectLocation.width/2)){
        let rectColor = gsap.utils.mapRange(rectLocation.width/2, 0, 255, 0, mouseLocationNow);

        gsap.to(rect, {
            backgroundColor:`rgb(${rectColor}, 0, 0)`,
            ease:Power4
        })
    }

    else{
        let rectColor = gsap.utils.mapRange(rectLocation.width/2, rectLocation.width, 255, 0, mouseLocationNow);

        gsap.to(rect, {
            backgroundColor:`rgb(0, 0, ${rectColor})`,
            ease:Power4
        })
    }


    if(mouseLocationNow<(rectLocation.width/2)){
        let colorHeader = header.innerText;
        colorHeader = "red";
        header.style.backgroundColor = "red";

        header.innerText = colorHeader;
    }

    else{
        let colorHeader = header.innerText;
        colorHeader = "blue";
        header.style.backgroundColor = "blue";

        header.innerText = colorHeader;
    }
})


rect.addEventListener("mouseleave", ()=> {
    gsap.to(rect, {
        backgroundColor:`transparent`,
        ease:Power4
    })

    let colorHeader = header.innerText;
    colorHeader = "red or blue";
    header.style.backgroundColor = "black";
    header.innerText = colorHeader;
})