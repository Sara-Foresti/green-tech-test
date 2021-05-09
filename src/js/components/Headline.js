import React from 'react';

function Headline(props) {
  const DymanicHeader = props.type;
  const component = (
    <DymanicHeader className={`headline__h${props.level}`}>
      {props.copy}
    </DymanicHeader>
  );

  return (
    <div className="headline">
      {component}
    </div>
  )
}

export default Headline;
