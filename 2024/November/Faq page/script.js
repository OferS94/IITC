
document.addEventListener("DOMContentLoaded", ()=> {
    const togButt = document.querySelectorAll(".buttTog");
    const toggledText = document.querySelectorAll(".togText")[index];
    togButt.forEach((button, index) => {
        button.addEventListener("click", () => {
            

            if(toggledText.style.display === "none" && toggledText.style.display === ""){
               toggledText.style.display = "block";
            button.style.backgroundImage = "url('assets/images/icon-minus.svg')";
            } else {
                toggledText.style.display = "none";
                button.style.backgroundImage = "url('assets/images/icon-plus.svg')";
            }
        })
    })
})


