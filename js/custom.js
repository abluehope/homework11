$(function () {
  $(".main_full").fullpage({
    anchors: ["main", "introduct", "product", "hiyorika", "caramel"],
  });

  const MainSlide = new Swiper(".main_slide", {
    loop: true,
    parallax: true,
    speed: 1600,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
});
