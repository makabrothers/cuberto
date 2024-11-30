Shery.mouseFollower();
// Shery.makeMagnet(".magnet");
Shery.makeMagnet(".magnet", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});


gsap.to(".fleftelm",{
    scrollTrigger:{
        trigger: "#fimages",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub:1
    },
    y:"-300%"
  
  });

  let sections = document.querySelector(".fleftelm");

  Shery.imageEffect(".images", {
    style: 5,
    config: {onMouse:{value:1}},
    slideStyle: (setScroll) => {
      sections.forEach(function (section, index){
        scrollTrigger.create({
            trigger: sections,
            start: "top top",
            scrub : 1,
            onUpdate: function (prog) {
                    setScroll(prog.progress+index)  
            },
        })
      });
    },
  });


