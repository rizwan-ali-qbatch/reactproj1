import React, { useState, useEffect } from 'react';
import Table from './Table';
import Loading from './Loading';

const Main = () => {
  const [tableData, setTableData] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) =>
        setTableData(
          data.concat({ userId: 10, id: 101, body: 'mustafa', title: 'rizwan' })
        )
      );
  }, []);

  const filteredInfo = tableData.filter((x) =>
    ['title', 'body'].some((col) =>
      x[col].toLowerCase().includes(input.toLowerCase())
    )
  );

  console.log(tableData);
  console.log(filteredInfo);

  const handleOnChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <>
      <div className="container my-5">
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="text"
            placeholder="Enter the keyword to search "
            aria-label="Search"
            id="myInput"
            onChange={handleOnChange}
          />
        </form>
      </div>
      <Loading jsonObj={tableData}>
        <Table jsonObj={filteredInfo} />
      </Loading>
    </>
  );
};
export default Main;
