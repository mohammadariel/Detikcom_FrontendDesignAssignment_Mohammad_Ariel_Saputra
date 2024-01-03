$(document).ready(function () {

    //gallery event handler
    $("#galleryCarousel").on("slid.bs.carousel", galleryChangeClick)
})

// handle gallery change, sync with thumbnail
const galleryChangeClick = function () {
    const carousel = $('.carousel-inner')
    const carouselItems = carousel.children()

    for (let i = 0; i < carouselItems.length; i++) {
        const item = carouselItems[i]

        if (item.className.includes('active')) {
            gallerySetActiveThumbnail(i);
            break
        }
    }
}

// reset active thumbnail then set the selected one
const gallerySetActiveThumbnail = function (index) {
    $('.gallery-thumbnail-img').removeClass("thumbnail-active")
    $('.gallery-thumbnail-img').eq(index).addClass("thumbnail-active")
}