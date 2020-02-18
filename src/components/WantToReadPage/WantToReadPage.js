import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import gql from 'graphql-tag';

const GET_DATA = gql`
  {
    results @client
  }
`

const WantToReadPage = () => {
  const { data, client } = useQuery(GET_DATA);

  console.log(data);
  return <h1>WantToReadPage</h1>;
};

export default WantToReadPage;
