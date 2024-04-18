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



const t1 = gsap.timeline();
t1.to(".loader h1", {
    delay: .5,
    duration: 1,
    onStart: countDown()
})
t1.to(".loader", {
    top: "-100vh"
})
t1.to(".page1 .sentence", {
    transform: "translateX(-100%)",
    delay: 1,
    duration: 5
})
t1.from(".popup", {

    y: 100,
    opacity: 0
})