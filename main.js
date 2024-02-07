import Swiper from "swiper/bundle";
import "swiper/css/bundle";

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    slidesPerView: window.innerWidth > 787 ? "auto" : 1,
    spaceBetween: 17,
    loop: window.innerWidth > 787 ? false : true,
    navigation: {
      nextEl: ".benefits__arrow--right",
      prevEl: ".benefits__arrow--left",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");
  const openModalBtns = document.querySelectorAll(".open-modal");
  const closeModal = document.querySelector(".modal__cross");
  const form = document.querySelector(".modal__form");
  const name = document.getElementById("input-name");
  const phone = document.getElementById("input-phone");
  const errpName = document.getElementById("error-name");
  const errpPhone = document.getElementById("error-phone");

  function modalAction(action) {
    if (action === "add") {
      modalContent.classList.add("show");
      modal.classList.add("show");
      document.body.style.overflowY = "hidden";
    } else {
      modalContent.classList.remove("show");
      modal.classList.remove("show");
      document.body.style.overflowY = "visible";
    }
  }
  
  openModalBtns.forEach((button) => {
    button.addEventListener("click", () => {
      modalAction("add");
    });
  });

  closeModal.addEventListener("click", () => {
    modalAction("remove");
  });

  window.onclick = function (event) {
    if (event.target == modal) {
      modalAction("remove");
    }
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    errpName.innerHTML = "";
    errpPhone.innerHTML = "";
    name.style.borderColor = "#D5D5D6";
    phone.style.borderColor = "#D5D5D6";

    const regexName = /^[a-zA-Z]{3,20}$/;
    const regexPhone = /^\d{9}$/;

    const testName = regexName.test(name.value.trim());
    const testPhone = regexPhone.test(phone.value.trim());
    const success = testName && testPhone;

    if (!testName) {
      errpName.innerHTML = "Name must be between 3 and 20 characters";
      name.style.borderColor = "#c22121";
    }
    
    if (!testPhone) {
      errpPhone.innerHTML = "Phone number must have only 9 digits from 0 to 9";
      phone.style.borderColor = "#c22121";
    }

    if (success) {
      phone.style.borderColor = "#37de0d";
      name.style.borderColor = "#37de0d";
    }
  });
});
