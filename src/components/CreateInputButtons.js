import React from "react";

function CreateInputButtons(props) {
  const { handleClick } = props;

  return (
    <>
      <button onClick={handleClick} name="1">
        1
      </button>
      <button onClick={handleClick} name="2">
        2
      </button>
      <button onClick={handleClick} name="3">
        3
      </button>
      <button onClick={handleClick} name="4">
        4
      </button>
      <button onClick={handleClick} name="5">
        5
      </button>
      <button onClick={handleClick} name="6">
        6
      </button>
      <button onClick={handleClick} name="7">
        7
      </button>
      <button onClick={handleClick} name="8">
        8
      </button>
      <button onClick={handleClick} name="9">
        9
      </button>
      <button onClick={handleClick} name="0">
        0
      </button>
      <button onClick={handleClick} name="00">
        00
      </button>
      <button onClick={handleClick} name=".">
        .
      </button>
    </>
  );
}

export default CreateInputButtons;
