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
const loader = gsap.timeline()
loader.to(".loader h1", {
    delay: .5,
    duration: 1,
    onStart: countDown()
})
loader.to(".loader", {
    top: "-100vh"
})

const t1 = gsap.timeline();


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