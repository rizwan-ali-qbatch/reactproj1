import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import UserTable from './UserTable';
import Loading from './Loading';
import { useEffect } from 'react';

export default function User() {
  const params = useParams();
  const [tableUserData, setUserTableData] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
      .then((response) => response.json())
      .then((data) => setUserTableData(data));
  }, []);

  return (
    <>
      <Loading jsonObj={Object.keys(tableUserData)}>
        <UserTable jsonObj={tableUserData} />
      </Loading>
    </>
  );
}
