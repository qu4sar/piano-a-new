export const sliderManagement = () => {
    const fn_cs_slider = document.querySelectorAll(".fn_cs_slider");
    fn_cs_slider.forEach((element) => {
        let sliderTop = element.getElementsByClassName("slider_top")[0],
            sliderBottom = element.getElementsByClassName("slider_content"),
            activeIndex = 2,
            speed = 6000;

        let myInterval = setInterval(function () {
            activeIndex++;
            activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
        }, speed);
        const prev = document.querySelector(".slider_nav .prev"),
            next = document.querySelector(".slider_nav .next"),
            li = element.getElementsByTagName("li");
        prev.addEventListener("click", function (e) {
            e.preventDefault();
            clearInterval(myInterval);
            activeIndex--;
            activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
            myInterval = setInterval(function () {
                activeIndex++;
                activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
            }, speed);
            return false;
        });
        next.addEventListener("click", (e) => {
            e.preventDefault();
            clearInterval(myInterval);
            activeIndex++;
            activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
            myInterval = setInterval(function () {
                activeIndex--;
                activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
            }, speed);
            return false;
        });
        for (let i = 0; i < li.length; i++) {
            const liElement = li[i];
            const getClass = liElement.getAttribute("class");
            if (getClass === "next") {
                activeIndex++;
            } else if (getClass === "prev") {
                activeIndex--;
            } else {
                return false;
            }
            clearInterval(myInterval);
            activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
            myInterval = setInterval(function () {
                activeIndex++;
                activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
            }, speed);
            return false;
        }
    });
}

export const sliderDo = (sliderTop, sliderBottom, activeIndex) => {
    var topLength = sliderTop.getElementsByTagName("li").length;
    if (activeIndex > topLength) {
        activeIndex -= topLength;
    }
    var indexPrev = activeIndex - 1;
    var indexPrev2 = activeIndex - 2;
    var indexNext = activeIndex + 1;
    var indexNext2 = activeIndex + 2;
    if (indexPrev > topLength) {
        indexPrev -= topLength;
    }
    if (indexPrev2 > topLength) {
        indexPrev2 -= topLength;
    }
    if (indexNext > topLength) {
        indexNext -= topLength;
    }
    if (indexNext2 > topLength) {
        indexNext2 -= topLength;
    }
    if (indexPrev < 1) {
        indexPrev += topLength;
    }
    if (indexPrev2 < 1) {
        indexPrev2 += topLength;
    }
    if (activeIndex < 1) {
        activeIndex += topLength;
    }
    if (indexNext < 1) {
        indexNext += topLength;
    }
    if (indexNext2 < 1) {
        indexNext2 += topLength;
    }
    let li = sliderTop.getElementsByTagName("li");
    for (let i = 0; i < li.length; i++) {
        const element = li[i];
        element.classList.remove("prev", "prev2", "active", "next", "next2");
        // element.setAttribute(`data-index${indexNext}`);
    }

    // -------- bottom slider --------
    addSliderClass('li[data-index="' + indexPrev2 + '"]', 'prev2');
    addSliderClass('li[data-index="' + indexPrev + '"]', 'prev');
    addSliderClass('li[data-index="' + activeIndex + '"]', 'active');
    addSliderClass('li[data-index="' + indexNext + '"]', 'next');
    addSliderClass('li[data-index="' + indexNext2 + '"]', 'next2');

    sliderTop
        .querySelector('li[data-index="' + indexPrev2 + '"]')
        .classList.add("prev2");

    // -------- bottom slider --------

    sliderTop
        .querySelector('li[data-index="' + indexPrev + '"]')
        .classList.add("prev");

    // -------- bottom slider --------

    sliderTop
        .querySelector('li[data-index="' + activeIndex + '"]')
        .classList.add("active");

    // -------- bottom slider --------

    sliderTop
        .querySelector('li[data-index="' + indexNext + '"]')
        .classList.add("next");

    // -------- bottom slider --------

    sliderTop
        .querySelector('li[data-index="' + indexNext2 + '"]')
        .classList.add("next2");

    return activeIndex;
};



const addSliderClass = (className, element) => {
    try {
        sliderTop
            .querySelector(className)
            .classList.add(element);
    } catch (error) { }

}
