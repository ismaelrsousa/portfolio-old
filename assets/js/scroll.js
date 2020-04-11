var arrowPrev = '.technologies .list .arrow.previous'
var arrowNext = '.technologies .list .arrow.next'

var list = $('.technologies .list .scroll-track')
var items = $(list).find(".item")

// var itemsOnSlide = 5
var itemsOnSlide = 5
var itemsOnMobile = 1

var multiplier

var active

$(document).on('click', arrowPrev, function () { active--; setActive() })

$(document).on('click', arrowNext, function () { active++; setActive() })

$(items).on('click', function () {
    var index = $(items).toArray().indexOf(this)
    active = index;
    setActive()
})

$(document).ready(function () {
    window.innerWidth > 992 ? multiplier = itemsOnSlide : multiplier = itemsOnMobile

    active = parseInt(multiplier / 2)

    var width = parseInt($(items[active]).css("width"))
    width += parseInt($(items[active]).css("margin-left"))
    width += parseInt($(items[active]).css("margin-right"))

    width *= multiplier

    $(list).css("max-width", `${width}px`)

    setActive()
})

function setActive() {
    $(".active").removeClass("active")
    $(items[active]).addClass("active")

    verifLimits()

    scrollList()
}

function scrollList() {
    var focus = $(items[active - parseInt(multiplier / 2)])

    if (focus.length < 1)
        focus = $(items[0])

    var target = $(focus).position().left + $(list).scrollLeft()

    $(list).scrollLeft(target)
}

function verifLimits() {
    active == 0 ? $(arrowPrev).hide() : $(arrowPrev).show()

    active == items.length - 1 ? $(arrowNext).hide() : $(arrowNext).show()
}