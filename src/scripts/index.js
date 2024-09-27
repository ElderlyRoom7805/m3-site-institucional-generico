function buttonHeader(){
    const buttonH = document.querySelector(".button__header");
    const modal = document.querySelector(".dialog__container");
    console.log(buttonH)
    console.log(modal)
    
    buttonH.addEventListener("click", () => {
        modal.showModal();
        closeModal()
    })
}
console.log(buttonHeader())
function buttonFaq(){
    const buttonF = document.querySelector(".button__faq");
    const modal = document.querySelector(".dialog__container");

    buttonF.addEventListener("click", () => {
        modal.showModal();
        closeModal()
    })
}
buttonFaq()
function closeModal(){
    const buttonClose = document.querySelector(".button__close");
    const modal = document.querySelector(".dialog__container");

    buttonClose.addEventListener("click", () => {
        modal.close()
    })
}