import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("red");

    return (
        <div>
            <h3>Change Color</h3>
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={(e) => setColor(e.target.value)}
                id="color-red"
                label="red"
                style={{
                    backgroundColor: "red"
                }}
                value="red"
                checked={color === "red"}
            />
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={(e) => setColor(e.target.value)}
                id="color-orange"
                label="orange"
                style={{
                    backgroundColor: "orange"
                }}
                value="orange"
                checked={color === "orange"}
            />
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={(e) => setColor(e.target.value)}
                id="color-yellow"
                label="yellow"
                style={{
                    backgroundColor: "yellow"
                }}
                value="yellow"
                checked={color === "yellow"}
            />
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={(e) => setColor(e.target.value)}
                id="color-green"
                label="green"
                style={{
                    backgroundColor: "green"
                }}
                value="green"
                checked={color === "green"}
            />
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={(e) => setColor(e.target.value)}
                id="color-blue"
                label="blue"
                style={{
                    backgroundColor: "blue"
                }}
                value="blue"
                checked={color === "blue"}
            />
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={(e) => setColor(e.target.value)}
                id="color-purple"
                label="purple"
                style={{
                    backgroundColor: "purple"
                }}
                value="purple"
                checked={color === "purple"}
            />
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={(e) => setColor(e.target.value)}
                id="color-pink"
                label="pink"
                style={{
                    backgroundColor: "pink"
                }}
                value="pink"
                checked={color === "pink"}
            />
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={(e) => setColor(e.target.value)}
                id="color-brown"
                label="brown"
                style={{
                    backgroundColor: "brown"
                }}
                value="brown"
                checked={color === "brown"}
            />
            <div>
                The color is
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color}
                </span>
                .
            </div>
        </div>
    );
}
