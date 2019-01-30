import React, { Fragment } from 'react';

function Body(props) {
  const { children } = props;
  return (
    <Fragment>
      <section className="body_content card" style={{ textAlign: 'center' }}>
        {children}
      </section>
    </Fragment>
  );
}

export default Body;
