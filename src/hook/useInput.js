import React, { useState } from 'react';

const useInput = (initalValue, validator) => {
  const[value, setValue] = useState(initalValue);
  const onChange = event => {
      const {
        target : {value}
      } = event;
      let willUpdate = true;
      if(typeof validator === "function"){
        willUpdate = validator(value);
      }
      if(willUpdate){
        setValue(value);
      }
  };
  return {value, onChange};
}

const UseInputApp = ()=> {
  const maxLen = value => value.length <= 10;
  const name = useInput("Mr.", maxLen);

  return (
    <div className="App">
      <input placeholder="Name" {...name}></input>
    </div>
  );
}


export default UseInputApp;