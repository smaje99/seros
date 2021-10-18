const $ = (selector) => document.querySelector(selector);

export const scrollTop = () => $('html').scrollTop;

export const eventScroll = (callback) => {
    window.addEventListener('scroll', callback);
}

export const scrollTo = (yCoord = 0) => (
    window.scroll({
        top: yCoord,
        left: 0,
        behavior: 'smooth'
    })
)