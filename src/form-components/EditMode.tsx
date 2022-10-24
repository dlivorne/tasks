import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [name, setName] = useState<string>("Your Name");

    function updateEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setIsEdit(event.target.checked);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        if (isEdit) {
            setIsStudent(event.target.checked);
        }
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        if (isEdit === true) {
            setName(event.target.value);
        }
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-edit-check"
                label="Edit mode?"
                checked={isEdit}
                onChange={updateEdit}
            />
            <div>
                {isEdit && (
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Student?"
                        checked={isStudent}
                        onChange={updateStudent}
                    />
                )}
            </div>
            <div>
                {isEdit && (
                    <Form.Group controlId="formStudentName">
                        <Form.Label> Name: </Form.Label>
                        <Form.Control value={name} onChange={updateName} />
                    </Form.Group>
                )}
            </div>

            <div>
                {!isEdit && (
                    <p>
                        {name} is {isStudent ? "" : "not"} a student
                    </p>
                )}
            </div>
        </div>
    );
}
