/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let arr2: number[];
    arr2 = [];
    if (numbers.length > 0) {
        arr2 = [numbers[0], numbers[numbers.length - 1]];
    }
    return arr2;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((x) => x * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const crr2 = numbers.map((x) => +x || 0);
    return crr2;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const temp = amounts.map((x) =>
        x.substring(0, 1) == "$" ? +x.substring(1) || 0 : +x || 0
    );
    return temp;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const temp_e = messages
        .filter((x) => x.substring(x.length - 1) === "!")
        .map((x) => x.toUpperCase());
    const temp_n = messages.filter(
        (x) =>
            x.substring(x.length - 1) !== "?" &&
            x.substring(x.length - 1) !== "!"
    );
    const temp_f = [...temp_n, ...temp_e];
    return temp_f;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const temp = words.map((x) => (x.length < 4 ? 1 : 0));
    console.log(temp);
    const arrSum3 = (x) => x.reduce((a, b) => a + b, 0);
    return arrSum3(temp);
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const check = ["red", "blue", "green"];
    const flags = colors.map((x) => check.indexOf(x) < 0);
    return !flags.includes(true);
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const arrSum = (addends) => addends.reduce((a, b) => a + b, 0);
    const tot = arrSum(addends);
    const arrstr = addends.map((x) => x.toString());
    let BigString: string;
    BigString = tot.toString() + "=" + arrstr.join("+");
    BigString =
        tot.toString() + "=" + (addends.length > 0 ? arrstr.join("+") : "0");
    return BigString;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const neg1 = values.findIndex((x) => x < 0);
    const arrSum = (x) => x.reduce((a, b) => a + b, 0);
    const tot3 = arrSum(values.filter((x) => values.indexOf(x) < neg1));
    const arrpre = values.filter((x) => values.indexOf(x) <= neg1);
    const arrpost = values.filter((x) => values.indexOf(x) > neg1);
    let arrfinal: number[];
    if (neg1 >= 0) {
        arrfinal = [...arrpre, tot3, ...arrpost];
    } else {
        arrfinal = [...values, arrSum(values)];
    }
    return arrfinal;
}
