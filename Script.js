// const container = document.querySelector("main");
// let active=null;
// container.addEventListener("click",(event)=>{
// const questionDiv = event.target.closest(".question-div");
// questionDiv.classList.toggle("active");

// if(questionDiv){
// if(active){
//     active.classList.remove("active");
// }
// if(questionDiv===active){
//     active= null;
// }else{
//     active=questionDiv;
// }

// }
// })
const container = document.querySelector("footer");
let active = null;

container.addEventListener("click", (event) => {
    const questionDiv = event.target.closest(".question-div");

    if (questionDiv) {
        questionDiv.classList.toggle("active");

        if (active && active !== questionDiv) {
            active.classList.remove("active");
        }

        if (questionDiv.classList.contains("active")) {
            active = questionDiv;
        } else {
            active = null;
        }
    }
});