import { Form, Col } from "react-bootstrap";
import { state } from "./state/state";
// import { ExampleActions } from "../localstate/operations";
import { localState, states } from "./state/state";
import { useApolloClient, useReactiveVar } from "@apollo/client";
import { Input } from "../../common-strap";

export function Search (props: any) { 
  const client = useApolloClient()
  // const state:states = localState();
  const state = useReactiveVar(localState);

  const onSearch = (e: any) => {
    // console.log(e.target.value, " changed value");
    // console.log(state.searchString, " searching value");
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
            // wide
            value={state.searchString}
            onChange={onSearch}
            size="lg"
            type="email"
            placeholder="Search Transactions"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
      </Form>
    </Col>
  );
}
