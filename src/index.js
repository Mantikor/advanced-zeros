module.exports = function getZerosCount(number, base) {
    // using algo from https://comeoncodeon.wordpress.com/2010/02/17/number-of-zeores-and-digits-in-n-factorial-in-base-b/

    let numOfZero = Number.MAX_VALUE;
    let j = base;
    for (let i=2; i <= base; i++) {
        if (j % i === 0) {
            let p = 0;
            while (j % i === 0) {
                j = j/i;
                p++;
            }
            let c = 0;
            let k = Math.floor(number/i);
            while (k > 0) {
                c += k;
                k = Math.floor(k/i);
            }
            numOfZero = Math.min(numOfZero, Math.floor(c/p));
        }
    }
    return numOfZero;
};