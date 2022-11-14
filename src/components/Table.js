import React from "react";
import Row from "./Row";

export default function Table({ jsonObj }) {
  return (
    <div className="container my-5 table-responsive">
      <table className="text-center table table-dark table-sm table-bordered border-light table-striped table-hover">
        <thead className="table-warning">
          <tr>
            <th scope="col">id</th>
            <th scope="col">type</th>
            <th scope="col">name</th>
            <th scope="col">ppu</th>
          </tr>
        </thead>
        <tbody>
          <Row jsonObj={jsonObj} />
        </tbody>
      </table>
    </div>
  );
}
