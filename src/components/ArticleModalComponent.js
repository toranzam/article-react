import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";


function ArticleModalComponent({show, handleClose, handleChaneArticle, article, handleSubmit}) {

    return (

        <Modal show={show} onHide={handleClose} size={'lg'} centered>
            <Modal.Header closeButton>
                <Modal.Title>글쓰기</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>제목</Form.Label>
                        <Form.Control
                            autoFocus
                            type='text'
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
                <Button variant="primary" onClick={handleSubmit}>
                    등록
                </Button>
            </Modal.Footer>
        </Modal>

    );
}

export default ArticleModalComponent;
