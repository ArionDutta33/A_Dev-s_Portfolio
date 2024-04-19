const countDown = () => {
    let a = 0;
    setInterval(() => {
        a = a + Math.floor(Math.random() * 20);
        if (a <= 100) {
            document.querySelector(".loader h1").textContent = a + "%";
        } else {
            a = 100;
            document.querySelector(".loader h1").textContent = a + "%"
        }


    }, 100)

}
const t1 = gsap.timeline()
t1.to(".loader h1", {
    delay: .5,
    duration: 1,
    onStart: countDown()
})
t1.to(".loader", {
    top: "-100vh"
})



t1.from(".sentence .top", {
    opacity: 0,
    top: "-2vw",
    duration: 1
})
t1.from(".sentence .check", {
    opacity: 0,
    top: "-2vw",
    duration: 1
})
t1.to(".text-vertical", {
    y: 80,
    opacity: 0,

    scrollTrigger: {
        trigger: ".page1",
        scroller: "body",
        markers: true,
        pin: true,
        start: "top 0%",
        end: "top -200%",
        scrub: 4
    }


})
// gsap.to(".description", { duration: 1, scrambleText: "THIS IS NEW TEXT" });//or customize things:


t1.from(".description", {
    duration: 15,
    text: "Hello there, welcome to the world of development and creativity where talent flourishes",
    ease: "none",
});