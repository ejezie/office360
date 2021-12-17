

// let SlideUpElements = document.querySelectorAll(".slide-up");
// let SlideLeftElements = document.querySelectorAll(".slide-left");
// let SlideLeftElements = document.querySelectorAll(".slide-down");
// const OpacityRevealElements = document.querySelectorAll(".reveal");

// const animateOnScroll = (entries) => {
//     const inObserver = new IntersectionObserver((entries, observer) => {
//         entries.forEach((entry) => {
//             if (entry.isIntersecting){
//                 if (entry.target.classList.contains("reveal")){
//                       entry.target.classList.add("appear");
//                       console.log(entry)
//                       observer.disconnect();
//                 }
//             }
//         })
//     }, options)
//     inObserver.observe(entries);
// }

// OpacityRevealElements.forEach(animateOnScroll);

    // const options = {
    //   rootMargin: "-200px",
    // };

    // let Observer = new IntersectionObserver((entries) => {
    //   entries.forEach((entry) => {
    //     if (entry.intersectionRatio > 0) {
    //       if (entry.target.dataset.delay && window.innerWidth > 960) {
    //         ///// I dont want the delay on mobile
    //         entry.target.style.animationDelay = entry.target.dataset.delay;
    //       }
    //       entry.target.classList.add("appear");
    //     }
    //   });
    // }
// @keyframes reveal {
//   0% {
//     opacity: 0;
//   }
//   100% {
//     opacity: 1;
//   }
// }
//  .reveal {
//   &.appear {
//     transition: all 0.6s ease-out;
//     animation: reveal 0.7s ease forwards;
//   }
// }