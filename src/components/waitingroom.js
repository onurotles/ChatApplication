import { useState } from "react";
import { Button, Col, Row, Form } from "react-bootstrap";

const WaitingRoom = ({ joinChatRoom }) => {
    const[userName, setUserName] = useState();
    const[chatRoom, setChatRoom] = useState();

    return <Form onSubmit={ e => {
        e.preventDefault();
        joinChatRoom(userName, chatRoom);
    }}>

        <Row className="px-5 py-5">
            <Col sm={12}>
                <Form.Group>
                    <Form.Control placeholder='Username' onChange={e => setUserName(e.target.value)}/>
                    <Form.Control placeholder='ChatRoom' onChange={e => setChatRoom(e.target.value)}/>
                </Form.Group>
            </Col>
            <Col sm={12}>
                <hr/>
                <Button variant='success' type='submit'>Join</Button>
            </Col>
        </Row>

    </Form>
}

export default WaitingRoom;