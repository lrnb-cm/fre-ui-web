// inteligent container to do all the data interation like a controller

import React, { useEffect, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { localState } from "./state/state";
import { useApolloClient, useQuery, useReactiveVar } from "@apollo/client";
import { GET_SCORES, GET_SCORES_PLUS_CLIENT } from "./queries/queries";
import { Item } from "./item";
import { Search } from "./search";

export default function Containers (props: any) { 
  const client = useApolloClient()
  const { data, loading, error } = useQuery(GET_SCORES);
  const state = useReactiveVar(localState);

  useEffect(() => {
    console.log(state, " state changed");

    client.query({ query: GET_SCORES_PLUS_CLIENT })
    .then((data) => {
      console.log(data.data, " got this data suing query");
    });
  }, [state.searchString]);

  if (loading) return <p> loading</p>;
  if (error) return <p> error</p>;
  console.log(data)
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
          {data.getScores.filter((f: { id: string | string[]; }) =>
              f.id.includes(state.searchString.toUpperCase())
            )
            .map((item: { id: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
              return <Item id={item.id} />;
            })}
        </Row>
      </Container>
    </Fragment>
  );
}