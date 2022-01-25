import { ReactChild, ReactFragment, ReactPortal } from "react";
import { Col, Form, Row } from "react-bootstrap";

export function Item(props: { id: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) {
  return (
    <Col xs={12}>
      <Row>
        <Col>{props.id}</Col>
        <Col></Col>
        <Col>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
        </Col>
      </Row>
    </Col>
  );
}
