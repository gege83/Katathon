import React from 'react';

import Container from './Container';

const Table = (props) => {
  return (
    <Container width={props.width}>
      <h3>{props.title}</h3>
      {props.data.map(item)}
    </Container>
  );
}

export default Table;