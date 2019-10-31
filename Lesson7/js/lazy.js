const imagestoLoad = document.querySelectorAll("img[data-src]");

const imageOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
    };
/*
function preloadImage(img) {
    const src = img.Attribute("data-src");
    if(!src) {
        return;
    }

    img.src = src;
}
*/
if('IntersectionObserver' in window){
const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
        });
    }, imgOptions);

    /*
            if (!entry.isIntersecting) {
                return;
            } else {
                preloadImage(entry.target);
                imageObserver.unobserve(entry, target);
            }
        })
    }
}, imageOptions);
*/
imagestoLoad.forEach((img) => {
    imgObserver.observe(img);
});
}
else {
    
}
/*, imgOptions);

images.forEach(image => {
    imageObserver.observe(image);
})
*/

/*let lazyload = document.querySelectorAll('img[data-src]');
const load = (image) => {
    image.setAttribute('src') image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    }
}
*/