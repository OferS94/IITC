

// document.addEventListener("DOMContentLoaded", ()=> {
//     const togButts = document.querySelectorAll(".buttTog");
//     const toggledText = document.querySelectorAll(".bigText");
    
//     togButts.forEach((button, index) => {
//         button.addEventListener("click", () => {
//             const images = button.querySelectorAll("img")
//             // console.log(images)
//                 images.forEach((img ) => {
//                     img.classList.toggle('disabled')
//                 })
//             // console.log(`button ${index} clicked`)

//             toggledText[index].classList.toggle('disabled');
//             // console.log(toggledText[index]);
//         })
//     })
// })









// document.addEventListener("DOMContentLoaded", ()=> {
//     const togButts = document.querySelectorAll(".buttTog");
//     const toggledText = document.querySelectorAll(".bigText");
    
//     togButts.forEach((button, index) => {
//         button.addEventListener("click", () => {
//             const images = button.querySelectorAll("img")
//             console.log(images)
//                 images.forEach((img ) => {
//                     img.classList.toggle('disabled')
//                 })
//             // console.log(`button ${index} clicked`)

//             toggledText[index].classList.toggle('disabled');
//             console.log(toggledText[index]);
//         })
//     })
// })
//////////////////////////////////////////////





//////////////////////////////////////////////////////
const contents = document.querySelector('.contents');


contents.addEventListener("click", (ev) =>{
    console.log(ev.target.classList)
    if (ev.target.classList.contains("buttTog")){
        console.log(`this is button`);

        const parent = ev.target.parentNode.parentNode
        console.log(parent)
        const bigText = parent.querySelector(".bigText")
        bigText.classList.remove("disabled")
        const semiParent = ev.target.parentNode
        semiParent.style.backgroundImage = "url('assets/images/icon-minus.svg')";


        // if (toggledText[index].style.display === "none"){
        //     toggledText[index].style.display = "block";
        //     button.style.backgroundImage = "url('assets/images/icon-minus.svg')";
        // } else {
        //     toggledText[index].style.display = "none";
        //     button.style.backgroundImage = "url('assets/images/icon-plus.svg')";
        // }
        // if (toggledText[index].style.display === "none"){
        //     toggledText[index].classList.toggle('.disabled')
        //     button.style.backgroundImage = "url('assets/images/icon-minus.svg')";
        // } else {
        //     toggledText[index].classList.toggle('.disabled')
        //     button.style.backgroundImage = "url('assets/images/icon-plus.svg')";
        // }


    }
})




