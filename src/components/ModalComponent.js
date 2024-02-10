import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";




function ModalComponent({show, handleClose, handleChaneArticle, article}) {

    return (

        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>제목</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder=''
                            autoFocus
                            value={article.title}
                            name={'title'}
                            onChange={handleChaneArticle}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>내용</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={article.content}
                            name={'content'}
                            onChange={handleChaneArticle}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    등록
                </Button>
            </Modal.Footer>
        </Modal>

    );
}

export default ModalComponent;
