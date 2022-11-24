import React, { useEffect } from 'react';
// import Table from './Table';

export default function loading(props) {
  // console.log('my:', props);
  return (
    <div>
      {props.jsonObj.length ? (
        props.children
      ) : (
        <p className="text-center my-5">
          <strong>Loading ...</strong>
        </p>
      )}
    </div>
  );
}
