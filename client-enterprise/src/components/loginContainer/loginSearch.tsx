import { Form, Col } from "react-bootstrap";
import { state } from "./state/loginState";
// import { ExampleActions } from "../localstate/operations";
import { Containers } from "./loginContainer";
import { localState, states } from "./state/loginState";
import { useApolloClient } from "@apollo/client";

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
          <Form.Control
            value={state.searchString}
            onChange={(e: { target: { value: any; }; }) => localState({ ...localState(), searchString: e.target.value })}
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
