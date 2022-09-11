$(document).ready(function () {
  let modal = $(".modal");
  let close = $(".close");

  let basket = $(".button__basket");
  basket.on("click", open);
  function open() {
    modal.addClass("is-open");
  }

  close.on("click", closeModal);
  function closeModal() {
    modal.removeClass("is-open");
  }
});
