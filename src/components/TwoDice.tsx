import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}
const [left, setleft] = useState<number>(1);
const [right, setright] = useState<number>(2);

function rollLeft(): void {
    setleft(d6);
}
function rollRight(): void {
    setright(d6);
}
function winlose(num1: number, num2: number): boolean {
    if (num1 === 1 && num2 === 1) {
        return false;
    } else if (num1 === num2) {
        return true;
    } else {
        return false;
    }
}

export function TwoDice(): JSX.Element {
    return (
        <div>
            <div>
                <Button onClick={rollLeft}>Roll Left</Button>
                <span> left- die: {left} </span>
            </div>
            <div>
                <Button onClick={rollRight}>Roll Right</Button>
                <span> right die: {right} </span>
            </div>
            if({winlose(left, right)}){<span> Win </span>}
            else{<span> Lose </span>}
        </div>
    );
}
