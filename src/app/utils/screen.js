const width = () => window.screen.width;

const height = () => window.screen.height;

const screen = { width, height };

export default screen;

export const eventResize = (callback) => (
    window.addEventListener('resize', callback)
)