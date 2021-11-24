import { Form, Col } from "react-bootstrap";
import { state } from "./state/state";
// import { ExampleActions } from "../localstate/operations";
import { Containers } from "./container";
import { Component } from "react";
import { localState, states } from "./state/state";
import { useApolloClient } from "@apollo/client";
import { Input } from "../../common-strap";

export function Search (props: any) { 
  const client = useApolloClient()
  const state:states = localState();

  const onSearch = (e: any) => {
    console.log(e.target.value, " changed value");
    console.log(state.searchString, " searching value");
    localState({ ...localState(), searchString: e.target.value });
  };

  return (
    <Col xs={12}>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            Search
          </Form.Label>
          <Input
            wide
            value={state.searchString}
            onChange={(val: any) => localState({ ...localState(), searchString: val })}
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
