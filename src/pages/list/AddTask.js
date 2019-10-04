import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export const AddTask = ({ onSaveTask }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setTask({
            title: '',
            desc: ''
        })
    }

    const handleShow = () => setShow(true);

    const [task, setTask] = useState({
        title: '',
        desc: ''
    });
    const handleChange = ({ target: { name, value } }) => {
        setTask({
            ...task,
            [name]: value
        });
    }
    return (
        <>
            <Button variant="primary" className="btn-circle btn-xl" onClick={handleShow}>
                +
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Task</Modal.Title>
                </Modal.Header>
                <form>
                    <Modal.Body>
                        <div className="form-group">
                            <input type="text" name="title" value={task.title}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Task Name" />
                        </div>
                        <div className="form-group">
                            <textarea type="text" name="desc" value={task.desc}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Description" />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={() => { onSaveTask(task.title, task.desc); handleClose(); }}>
                            Save Task
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    );
}

AddTask.propTypes = {
    onSaveTask: PropTypes.func
}