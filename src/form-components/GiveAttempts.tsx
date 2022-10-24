import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requests, setRequests] = useState<string>("0");

    function gainAttempts(): void {
        setAttempts(attempts + (parseInt(requests) || 0));
    }

    function useAttempt(): void {
        setAttempts(attempts - 1);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            Attempts left: {attempts}
            <Form.Group controlId="formAttempts">
                <Form.Label>Request:</Form.Label>
                <Form.Control
                    type="number"
                    value={requests}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequests(event.target.value)
                    }
                />
            </Form.Group>
            <div>
                <Button onClick={useAttempt} disabled={attempts === 0}>
                    use
                </Button>
            </div>
            <div>
                <Button onClick={gainAttempts}> gain </Button>
            </div>
        </div>
    );
}
