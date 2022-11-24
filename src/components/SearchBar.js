import React, { useState } from 'react';

export default function SearchBar() {
  const [text, setText] = useState('');

  function getInputValue() {
    var inputVal = document.getElementById('myInput').value;
    console.log(inputVal);
    // alert(inputVal);
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
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
            value={text}
            onChange={handleOnChange}
          />
          <button
            className="btn btn-outline-primary"
            onClick={getInputValue}
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
}
