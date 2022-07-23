import React, { useRef } from 'react';
import './Converter.css'

const Converter = () => {
    const inputRef = useRef();
    const displayRef = useRef();
    const handleConvert = () => {
        const inputedJSON = inputRef.current.value;

        try{
            if(inputedJSON) {
                const formatedJSON = JSON.stringify(JSON.parse(inputedJSON), null, 3);
                displayRef.current.value = formatedJSON;
            }
            else{
                displayRef.current.value = 'Please write or past JSON example.' 
            }
        }
        catch{
            displayRef.current.value = 'Syntext Error.'
        }
    } 

    const id = [
        {di:1, name: 'Omar Faruk', profetion: 'React Developer'},
        {di:1, name: 'Omar Faruk', profetion: 'React Developer'},
        {di:1, name: 'Omar Faruk', profetion: 'React Developer'},
        {di:1, name: 'Omar Faruk', profetion: 'React Developer'},
        {di:1, name: 'Omar Faruk', profetion: 'React Developer'},
        {di:1, name: 'Omar Faruk', profetion: 'React Developer'},
    ]
    console.log(JSON.stringify(id))

    const handleDelete = () => {
        inputRef.current.value  = null;
        displayRef.current.value  = null;
    }
    return (
        <div>
            <h1 className='heading'>JSON Converter</h1>
            <div className='btn'>
                <button onClick={handleConvert} className='json-btn'>Format JSON</button>
                <button onClick={handleDelete} className='clear-btn'>Clear Data</button>
            </div>
            <h3>Please Input JSON example.</h3>
            <div className='field'>
                <span>
                    <textarea ref={inputRef} className='input-field' type="text" name="" id="" placeholder='Input' />
                </span>
                <span>
                    <textarea readOnly ref={displayRef} className='display-field' type="text" name="" id="" placeholder='Output'/>
                </span>
            </div>
        </div>
    );
};

export default Converter;