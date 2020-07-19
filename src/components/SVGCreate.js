import React, { useState } from 'react'
import SVG from './graph'

function Create() {
    const [inputs, setInputs] = useState([])
    const [validationErrorMessage, setValidationError] = useState(null)
    const extractInput = value => setInputs(value.trim().split("\n"));

    return (
        <div>
            <div>
                <textarea style={{ backgroundColor: 'black', color: 'white', width: "600px", height: "100px" }} onChange={e => extractInput(e.target.value)} />
            </div>
            {!!validationErrorMessage && <div style={{ color: "red" }}>{validationErrorMessage}</div>}
            <div>
                <svg width="250px" height="250px">
                    {inputs.map((type, index) => {
                        const polyType = type[0];
                        const props = type.slice(1, type.length);
                        return (<SVG type={polyType} key={index} cords={props} setError={setValidationError} />)
                    }
                    )}
                </svg>
            </div>
        </div>
    )
}

export default Create;