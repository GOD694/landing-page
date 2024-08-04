var tl= gsap.timeline({
    repeat:-1
});
tl.to(".imagecontainer", {
    ease: Expo.easeInOut,
    width:"100%",
    duration: 1
     ,
    stagger:2

},'a')
tl.to(".text h1", {
    ease: Expo.easeInOut,
    width:"100%"
     ,top:"-20%",
    stagger:2

},'a')
tl.to(".text h1", {
    ease: Expo.easeInOut,
    width:"100%",
    duration: 3
     ,delay:1,
    stagger:2,top:"-150%",

},'a')
