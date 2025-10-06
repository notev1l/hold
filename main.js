console.log('Hello World!');

for (let index = 1; index <= 5; index++) {
    if (index == 3) {
        console.log("Function found 3.");
        index = 5;
    } else {
        console.log(index);
    }
    console.log('test drive');
    console.log('Result:', (3 + -3) / 2);
    x1 = 0;
    y1 = -1;
    x2 = 1;
    y2 = 1;
    console.log(Math.cos((x1 * x2 + y1 * y2) / Math.sqrt(x1 ** 2 + y1 ** 2)) *
    Math.sqrt(x2 ** 2 + y2 ** 2));
    console.log(((x1 * x2 + y1 * y2)));
    console.log(Math.sqrt(x1 ** 2 + y1 ** 2));
    console.log(Math.sqrt(x2 ** 2 + y2 ** 2));
}