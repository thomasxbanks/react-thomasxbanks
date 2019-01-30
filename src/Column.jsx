import React, { Fragment } from 'react';

function Column(props) {
  const { children } = props;
  return (
    <Fragment>
      <article className="column card">
        {children}
      </article>
    </Fragment>
  );
}

export default Column;
