import React from 'react';
import { useEffect } from 'react';
// import { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useEffect } from 'react';
// import Loading from './Loading';

export default function UserTable({ jsonObj }) {
  return (
    <div className="container my-5 table-responsive">
      <table className="text-center table table-light table-sm table-bordered border-light table-striped table-hover">
        <thead className="table-primary">
          <tr>
            <th scope="col">KEY</th>
            <th scope="col">VALUE</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(jsonObj).map((key, index) => (
            <tr key={`row_id_${index}__`}>
              <td>{key[0].toUpperCase() + key.slice(1)}</td>
              {typeof jsonObj[key] === 'object' ? (
                <td>
                  {Object.values(jsonObj[key])
                    .map((val) =>
                      typeof val === 'object'
                        ? Object.values(val).join(', ')
                        : val
                    )
                    .join(', ')}
                </td>
              ) : (
                <td>{jsonObj[key]}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
