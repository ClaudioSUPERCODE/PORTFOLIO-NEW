console.log("xxx")

WhatAnimation("aboutContainer1");
WhatAnimation("aboutContainer2");
WhatAnimation("techICONS");
WhatAnimation("certificate");
WhatAnimation("projectsRow1");
WhatAnimation("projectsRow2");
WhatAnimation("contactSection");

$(window).scroll(function () {
    console.log("test")
    WhatAnimation("aboutContainer1");
    WhatAnimation("aboutContainer2");
    WhatAnimation("techICONS");
    WhatAnimation("certificate");
    WhatAnimation("projectsRow1");
    WhatAnimation("projectsRow2");
    WhatAnimation("contactSection");
});

function WhatAnimation(name) {
    $("." + name).each(function () {
        switch (name) {
            case "aboutContainer1": AddClass(this, "slideRight");
                break;
            case "aboutContainer2": AddClass(this, "slideLeft");
                break;
            case "techICONS": AddClass(this, "fade");
                break;
            case "certificate": AddClass(this, "fade");
                break;
            case "projectsRow1": AddClass(this, "slideLeft");
                break;
            case "projectsRow2": AddClass(this, "slideRight");
                break;
            case "contactSection": AddClass(this, "fade");
                break;
        }
    });
};

function AddClass(object, name) {
    if (IsVisible(object)) {
        $(object).addClass(name);
    } else {
        $(object).removeClass(name);
    }
}

function IsVisible(object) {
    let viewport = $(window).scrollTop() + $(window).height();
    let rand = $(object).offset();
    rand.bottom = rand.top + $(object).outerHeight();
    return (!(viewport < (rand.top) || $(window).scrollTop() > (rand.bottom)));
}