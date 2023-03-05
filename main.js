let phone = document.getElementById("phone");


phone.addEventListener("click",()=>{
    const phoneNumber = "+971 0559923784";
    document.querySelector(".copied-alert").classList.toggle("appear");

    navigator.clipboard.writeText(phoneNumber);
})