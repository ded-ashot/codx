let acc_lines = document.querySelectorAll('.faq__lines');
let acc_btns = document.querySelectorAll('.faq__accordion-btn');
let acc_panels = document.querySelectorAll('.faq__accordion-panel');

acc_btns.forEach((item, index) => {
    item.addEventListener("click", function () {
        acc_lines[index].children[0].classList.toggle("faq__line1_active");
        acc_lines[index].children[1].classList.toggle("faq__line2_active");

        if (acc_panels[index].style.maxHeight)
            acc_panels[index].style.maxHeight = null;
        else {
            acc_panels[index].style.maxHeight = acc_panels[index].scrollHeight + "px";

            for (let j = 0; j < acc_panels.length; j++) {
                if (j != index) {
                    acc_panels[j].style.maxHeight = null;
                    acc_lines[j].children[0].classList.remove("faq__line1_active");
                    acc_lines[j].children[1].classList.remove("faq__line2_active");
                }
            }
        }
    });
});

let tabs_btn = document.querySelectorAll('.staff__btn');
let tabs_item = document.querySelectorAll('.staff__item');

tabs_btn.forEach((item, index) => {
     tabs_btn[index].addEventListener("click", function () {
        tabs_btn[index].classList.add('btn_active');
        tabs_item[index].classList.add('staff__item_active');

        for (let j = 0; j < tabs_btn.length; j++) {
            if (j != index) {
                tabs_btn[j].classList.remove('btn_active');
                tabs_item[j].classList.remove('staff__item_active');
            }
        }
    })
});


// let burger_btn = document.querySelector('.header__burger');

// function burger() {
//     burger_btn.classList.toggle('header__burger_active');
// }
// burger_btn.addEventListener("click", burger);

