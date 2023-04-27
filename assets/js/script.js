function openWelcome() {
  //   $("#welcome").addClass("animate__animated animate__fadeOut");
  animateCSS("#welcome", "fadeOut").then((message) => {
    // Do something after the animation
    $("#welcome").remove();
    $("#main-page").removeClass("d-none");
    $("#savedate").removeClass("d-none");
    console.log("do someting");
  });
  audio.play();
  const scrollPage = new ScrollPage("#main-page");
}

var audio = new Audio("./assets/sound/cover.mp3");
audio.loop = true;

const animateCSS = (element, animation, prefix = "animate__") =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      //   node.classList.remove(`${prefix}animated`, animationName);
      resolve("Animation ended");
    }

    node.addEventListener("animationend", handleAnimationEnd, { once: true });
  });
