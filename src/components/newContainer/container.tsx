// inteligent container to do all the data interation like a controller

import React, { Component, Fragment, ReactChild, ReactFragment, ReactPortal, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { newStates, newLocalstate } from "./state/newState";
import { NewSearch } from "./search";
import { useApolloClient } from "@apollo/client";
import { Item } from "./item";

export default function NewContainer (props: { currency: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) { 
  const client = useApolloClient()
  const state:newStates = newLocalstate(); 
  
  const onSearch = (e: any) => {
    console.log(e.target.value, " changed value");
    newLocalstate ({ ...newLocalstate(), searchString: e.target.value });
  };
  
  return (
    <Fragment>
      <Container>
        <Row>
          <Col xs={12}>
            <NewSearch />
          </Col>
        </Row>
        <Row>
          {state.title}
        </Row>
        {state.description}
      </Container>
    </Fragment>
  );
}