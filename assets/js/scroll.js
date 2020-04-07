var list = $(".technologies .left .list")
var items = $(".technologies .left .list .item")
var visible = $(".technologies .left .list .item.visible")

const increment = 240
const total = 600
var atual = 0

$(".technologies .left .arrow-previous").on("click", function () {
    if (atual > 0)
        atual -= increment

    $(list).scrollTop(atual)
})

$(".technologies .left .arrow-next").on("click", function () {
    atual += increment

    if (atual >= total)
        atual -= increment

    $(list).scrollTop(atual)
})