import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown'
import { STATUS_CODES } from './../../common/status.codes';
import Card from 'react-bootstrap/Card'
import MoreIcon from '../../more.svg'
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

const whichCardClass = (status) => {
    switch (Number(status)) {
        case 2:
            return 'primary';
        case 3:
            return 'success';
        case 4:
            return 'danger';
        default:
            return 'info'
    }
};


export const Item = ({ taskInfo: { name, desc, status, item_id }, onChangeStatus, onDeleteItem }) => {
    const [visible, setVisible] = useState(false);

    const ref = useRef();
    useOnClickOutside(ref, () => setVisible(false));

    return (
        <div>
            <Card border={whichCardClass(status)} className="mb-3" >
                <Card.Header>
                    <div className="d-flex justify-content-between">
                        <b>{name}</b>
                        <div className="dropleft" onClick={() => setVisible({ visible: false })}>
                            <button type="button" className="close more-options"><img src={MoreIcon} width="18px" alt="more" /></button>
                            <div ref={ref}>
                                <Dropdown.Menu show={visible} >
                                    <Dropdown.Header>Mark as:</Dropdown.Header>
                                    {Object.keys(STATUS_CODES).map((key) => (<Dropdown.Item onClick={() => (onChangeStatus(key, item_id))} key={key}><span className={`status-color d-inline-block mr-2 bg-${whichCardClass(key)}`} ></span>{STATUS_CODES[key]}</Dropdown.Item>))}
                                    <Dropdown.Divider />
                                    <Dropdown.Item onClick={() => onDeleteItem(item_id)} eventKey="3">Remove</Dropdown.Item>
                                </Dropdown.Menu>
                            </div>
                        </div>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {desc}
                        <div className="text-muted task-status mt-3">
                            Task Status: {STATUS_CODES[status] || "Created"}
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

Item.propTypes = {
    taskInfo: PropTypes.object,
    onChangeStatus: PropTypes.func,
    onDeleteItem: PropTypes.func
}