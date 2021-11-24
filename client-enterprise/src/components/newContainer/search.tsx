import { useApolloClient } from "@apollo/client";
import { Component, ReactChild, ReactFragment, ReactPortal } from "react";
import { Form, Col } from "react-bootstrap";
import { newStates, newLocalstate } from "./state/newState";

export function NewSearch (props: any) { 
  const client = useApolloClient()
  const state:newStates = newLocalstate();

  const onSearch = (e: any) => {
    console.log(e.target.value, " changed value");
    newLocalstate({ ...newLocalstate(), searchString: e.target.value });
  };

  return (
    <Col xs={12}>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            Search
            {state.searchString}
          </Form.Label>
          <Form.Control  
            value={state.description}
            onChange={e => onSearch(e)}
            size="lg"
            type="email"
            placeholder="Search rates"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
      </Form>
    </Col>
  );
}
