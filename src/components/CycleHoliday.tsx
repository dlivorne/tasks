import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function nHoliday1(str1: string) {
    if (str1 === "🎉") {
        return "❤️";
    } else if (str1 === "❤️") {
        return "🐰";
    } else if (str1 === "🐰") {
        return "🎃";
    } else if (str1 === "🎃") {
        return "🎄";
    } else {
        return "🎉";
    }
}
export function nHoliday2(str2: string) {
    if (str2 === "🎄") {
        return "🐰";
    } else if (str2 === "🐰") {
        return "🎃";
    } else if (str2 === "🎃") {
        return "🎉";
    } else if (str2 === "🎉") {
        return "❤️";
    } else {
        return "🎄";
    }
}

export function CycleHoliday(): JSX.Element {
    const [holiday1, setHoliday1] = useState<string>("🎉");

    function sHoliday1(): void {
        setHoliday1(nHoliday1(holiday1));
    }

    function sHoliday2(): void {
        setHoliday1(nHoliday2(holiday1));
    }

    return (
        <div>
            Holiday: {holiday1}
            <div>
                <Button onClick={sHoliday1}>Advance by Year</Button>
            </div>
            <div>
                <Button onClick={sHoliday2}>Advance by Alphabet</Button>
            </div>
        </div>
    );
}
