import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";


function ModalComponent({show, handleClose, handleSubmit, item}) {

    return (

        <Modal show={show} onHide={handleClose} size={"lg"} centered>
            <Modal.Header closeButton>
                <Modal.Title>책 상세보기</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <div className={'row'}>
                        <div className={'col-md-12 col-lg-4'}>
                            <img src={item.image}
                                 className={'w-100'}/>
                        </div>
                        <div className={'col-md-12 col-lg-8'}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>


                        </div>
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
