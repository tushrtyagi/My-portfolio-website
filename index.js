burger=document.queryselector('.burger');
navlist=document.queryselector('.nav-list');
navbar=document.queryselector('.navbar');
// rightnav=document.queryselector('.rightnav');


burger.addEventListener("click",()=>{
    navlist.classlist.toggle("v-class-resp");
    // rightnav.classlist.toggle("v-class-resp");
    navbar.classlist.toggle("h-class-resp");
})