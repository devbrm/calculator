import React from "react";

function CreateOprators(props) {
  const { handleClick, evaluateTheResult, handleCE, handleBackspace } = props;

  return (
    <>
      <button onClick={handleCE} name="CE">
        CE
      </button>
      <button onClick={handleBackspace} name="clear">
        clear
      </button>
      <button onClick={handleClick} name="**2">
        x<sup>2</sup>
      </button>
      <button onClick={handleClick} name="**0.5">
        x<sup>1/2</sup>
      </button>
      <button onClick={handleClick} name="*">
        x
      </button>
      <button onClick={handleClick} name="/">
        /
      </button>
      <button onClick={handleClick} name="+">
        +
      </button>
      <button onClick={handleClick} name="-">
        -
      </button>
      <button onClick={handleClick} name="%">
        %
      </button>
      <button onClick={evaluateTheResult} name="=">
        =
      </button>
    </>
  );
}

export default CreateOprators;
