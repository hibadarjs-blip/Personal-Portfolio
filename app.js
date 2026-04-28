const menuBtn = document.querySelector("#menuBtn");
const openIcon = document.querySelector("#openIcon");
const closeIcon = document.querySelector("#closeIcon");
const mobileNav = document.querySelector("#mobileNav");
const mobileLinks = mobileNav.querySelectorAll("a");
const scrollTopBtn = document.querySelector("#scrollTopBtn");
function toggleMenu(){
    const isExpanded = menuBtn.getAttribute("aria-expanded") === 'true';

    menuBtn.setAttribute("aria-expanded", !isExpanded);

    mobileNav.setAttribute("aria-hidden", isExpanded);

    if (!isExpanded) {
    closeIcon.style.display = "block"; 
    openIcon.style.display = "none";  
    mobileNav.classList.add("open");         
    }else{
    closeIcon.style.display = "none"; 
    openIcon.style.display = "block";  
    mobileNav.classList.remove("open");      
    }
}

menuBtn.addEventListener("click", ()=>{
    toggleMenu();
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
});

mobileLinks.forEach((link) =>{
    link.addEventListener("click", ()=>{
        if (mobileNav.classList.contains("open")) {
            toggleMenu();
        }     
});
})
