import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";


function ModalComponent({show, handleClose, handleSubmit, item}) {

    return (

        <Modal show={show} onHide={handleClose} size={"lg"} centered>
            <Modal.Header closeButton>
                <Modal.Title>책 상세보기</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{
                    display: 'flex',
                    gap: '30px'
                }}>
                    <div>
                        <img src={item.image} style={{width: '200px'}}/>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap:'10px'
                    }}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleSubmit}>
                    독후감 쓰기
                </Button>
            </Modal.Footer>
        </Modal>

    );
}

export default ModalComponent;
