function getTestConfig(): void {
    let baseURL: string = "https://demoqa.com/";
    let timeOut: number = 30000;
    let isHeadLess: boolean = true;

    console.log(`Base URL: ${baseURL}`);
    console.log(`Time Out: ${timeOut}`);  
    console.log(`Is Headless: ${isHeadLess}`);
    console.log(`Running test on ${baseURL} with timeout ${timeOut} ms (Headless: ${isHeadLess})`);
}
//Anonymous function
let myConfig = function(): void {
    let baseURL: string = "https://demoqa.com/";
    let timeOut: number = 30000;
    let isHeadLess: boolean = true;
    console.log(`Running test on ${baseURL} with timeout ${timeOut} ms (Headless: ${isHeadLess})`);
}
//console.log(myConfig());
let myConfigArrow = (): void => {
    let baseURL: string = "https://demoqa.com/";
    let timeOut: number = 30000;
    let isHeadLess: boolean = true;
    console.log(`Running test on ${baseURL} with timeout ${timeOut} ms (Headless: ${isHeadLess})`);
}
//console.log(myConfigArrow());

type Option1 = {
    timeOut: number;
    force: boolean;
};

let elementArrow = (selector: string, options?: Option1): void => {
    if (options == null) {
        options = { timeOut: 30000, force: false };
    }

    console.log(
        `Clicking [${selector}] with timeout [${options.timeOut}]ms and force=[${options.force}].`
    );
};

elementArrow("#submit", { timeOut: 20000, force: true });
elementArrow("#submit");