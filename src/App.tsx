import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1> This is my header </h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Danielle Livornese. Hello World.
            </p>
            <img
                src="https://farm3.staticflickr.com/2439/3658746914_7ed42150e9_z.jpg?zz=1"
                alt="A picture of a sunset"
            />
            <ol>
                <li> list element 1 </li>
                <li> list element 2 </li>
                <li> list element 3 </li>
            </ol>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        First Column.
                        <div
                            style={{
                                width: "10px",
                                height: "14px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        Second column. Adding words.
                        <div
                            style={{
                                width: "10px",
                                height: "14px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
