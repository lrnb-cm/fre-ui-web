// inteligent container to do all the data interation like a controller

import React, { useEffect, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { state, localState, states } from "./state/state";
import { useApolloClient, useQuery, useReactiveVar } from "@apollo/client";
import { GET_RATES, GET_RATES_PLUS_CLIENT } from "./queries/queries";
import { Item } from "./item";
import { Search } from "./search";

export function Containers (props: any) { 
  const client = useApolloClient()
  const { data, loading, error } = useQuery(GET_RATES);
  const state:states = localState(); 

  useEffect(() => {
    console.log(state, " state changed");

    client.query({ query: GET_RATES_PLUS_CLIENT })
    .then((data) => {
      console.log(data.data, " got this data suing query");
    });
  }, [state.searchString]);

  if (loading) return <p> loading</p>;
  if (error) return <p> error</p>;

  return (
    <Fragment>
      <Container>
        <Row>
          <Col xs={12}>
            {state.searchString}
            <Search />
          </Col>
        </Row>
        <Row>
          {data.rates
            .filter((f: { currency: string | string[]; }) =>
              f.currency.includes(state.searchString.toUpperCase())
            )
            .map((item: { currency: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
              return <Item currency={item.currency} />;
            })}
        </Row>
      </Container>
    </Fragment>
  );
}