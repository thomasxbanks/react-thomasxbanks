import React, { Fragment } from 'react';

import './columns.css';

function TwoColumns(props) {
  const { children } = props;
  return (
    <Fragment>
      <section className="column_container">
        {children}
      </section>
    </Fragment>
  );
}

export default TwoColumns;
