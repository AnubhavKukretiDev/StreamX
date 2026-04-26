const items = document.querySelectorAll(".faq__item");

items.forEach(item => {
  const question = item.querySelector(".faq__question");
  const answer = item.querySelector(".faq__answer");
  const icon = item.querySelector(".icon");

  let open = false;

  question.addEventListener("click", () => {

    items.forEach(i => {
      if (i !== item) {
        const a = i.querySelector(".faq__answer");
        const ic = i.querySelector(".icon");

        gsap.to(a, { height: 0, duration: 0.4, ease: "power2.inOut" });
        gsap.to(ic, { rotate: 0, duration: 0.3 });

        i.classList.remove("active");
      }
    });

    if (!open) {
      gsap.to(answer, {
        height: answer.scrollHeight,
        duration: 0.5,
        ease: "power2.out"
      });

      gsap.to(icon, {
        rotate: 45,
        duration: 0.3
      });

      item.classList.add("active");
    } else {
      gsap.to(answer, {
        height: 0,
        duration: 0.4,
        ease: "power2.inOut"
      });

      gsap.to(icon, {
        rotate: 0,
        duration: 0.3
      });

      item.classList.remove("active");
    }

    open = !open;
  });
});