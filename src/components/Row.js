import React from "react";

export default function row(props) {
  return props.jsonObj.map((Value, Index) => {
    return (
      <tr key={`row_no_${Index}__`}>
        <td>{Value.id}</td>
        <td>{Value.type}</td>
        <td>{Value.name}</td>
        <td>{Value.ppu}</td>
      </tr>
    );
  });
}
