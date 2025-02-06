import './App.css'
import { useState } from "react";
import * as React from "react";
import {loadState, saveState} from "./localStorageHandler.ts";
function App() {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (e): void => {
        setInputValue(e.currentTarget.value);
        saveState('inputValue', inputValue);
    }

  return (
    <>
        <section>
            <textarea
            onChange={handleChange}
            onBlur={handleChange}
            name='randomInput'
            defaultValue={loadState('inputValue') ?? ''}
            >
            </textarea>
        </section>
    </>
  )
}

export default App
