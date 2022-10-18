import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [Attempts, setAttempts] = useState<number>(4);
    const [Progress, setProgress] = useState<boolean>(false);

    function flipProgress1(): void {
        setProgress(!Progress);
        setAttempts(Attempts - 1);
    }

    function flipProgress(): void {
        setProgress(!Progress);
    }
    return (
        <div>
            Number of Attempts: {Attempts}
            <div>
                <Button
                    onClick={flipProgress1}
                    disabled={Progress === true || Attempts === 0}
                >
                    Start Quiz
                </Button>
            </div>
            <div>
                <Button
                    onClick={() => setAttempts(Attempts + 1)}
                    disabled={Progress === true}
                >
                    Mulligan
                </Button>
            </div>
            <div>
                <Button onClick={flipProgress} disabled={Progress === false}>
                    Stop Quiz
                </Button>
            </div>
        </div>
    );
}
