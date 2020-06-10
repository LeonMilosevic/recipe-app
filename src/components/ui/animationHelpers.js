import { gsap, Power1 } from "gsap";

export const insertPageX = (element) => {
  let tl = new gsap.timeline();
  tl.to(element, {
    xPercent: 100,
    ease: Power1,
    duration: 0.3,
    delay: 1.5,
  });
};

export const insertPageY = (element) => {
  let tl = new gsap.timeline();

  tl.to(element, { yPercent: 100, ease: Power1, duration: 0.3, delay: 1.5 });
};

export const authFruitAnimationPage = (
  fruitsElements,
  fruitCircle,
  registerFormRef,
  backButton
) => {
  let tl = new gsap.timeline();
  tl.to(fruitsElements, { scale: 1, stagger: 0.2, delay: 0.3 })
    .to(fruitCircle, { opacity: 1, duration: 0.5 })
    .to(registerFormRef, { opacity: 1, duration: 0.5 })
    .to(backButton, { opacity: 1, duration: 0.5 });
};

export const dashboardSidenavAnimation = (element, feedCardElement) => {
  let tl = new gsap.timeline();

  tl.to(element, { yPercent: 100, duration: 0.5, delay: 0.5 });
  tl.to(feedCardElement, { yPercent: -50, opacity: 1, stagger: 0.1 });
};
