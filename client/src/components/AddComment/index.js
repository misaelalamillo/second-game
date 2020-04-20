import React, { useState, useEffect } from "react"
import { Input, TextArea, FormBtn } from "../Form"
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import API from "../../utils/API";


function AddThread() {
    const [show, setShow] = useState(false);
    const [addComment, setAddComment] = useState([])

    useEffect(() => {
    }, [])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleInputChange(event) {
        const { name, value } = event.target;
        setAddComment({ ...addComment, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        // if (addThread.topicName || addThread.content) {
            API.addNewComment({
                content: addComment.content
            })
                .then(res => console.log(res))
                .catch(err => console.log(err));
        // }
    };

    return (
        <>
            <button href="#" variant="primary" onClick={handleShow}>
                New Comment
        </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Thread</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <TextArea
                        onChange={handleInputChange}
                        name="content"
                        placeholder="Content (required)"
                    />
                    <FormBtn
                        onClick={handleFormSubmit}
                    >Submit</FormBtn>
                </Modal.Body>
                <Modal.Footer>
                    <button variant="secondary" onClick={handleClose}>
                        Close
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddThread;