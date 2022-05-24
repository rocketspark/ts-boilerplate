import { headingStyle, themeClass } from './index.css';

class MyLibrary {
    public constructor() {
        document.querySelector('body').classList.add(themeClass);
        document.querySelector('body').innerHTML = `<h1 class="${ headingStyle }">Hello World!</h1>`;
        console.log('Library constructor loaded');
    }

    public myMethod(): boolean {
        console.log('Library method fired');
        return true;
    }
}

export default MyLibrary;
