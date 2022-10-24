import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>(options[0]);

    function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setAnswer(event.target.value);
    }
    function printAnswer(an: string): string {
        if (an === expectedAnswer) return "✔️";
        else {
            return "❌";
        }
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="Answer">
                <Form.Label> Select your answer</Form.Label>
                <Form.Select value={answer} onChange={updateAnswer}>
                    {options.map((ans: string) => (
                        <option key={ans} value={ans}>
                            {ans}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {printAnswer(answer)}
        </div>
    );
}
