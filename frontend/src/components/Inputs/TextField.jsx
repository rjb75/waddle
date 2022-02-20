
import React from "react";
import "./TextField.scss";

const TextField = (props) => {
    const {type = 'text', fieldValue, placeholder, inputmode = ''} = props;

    const handleChange = (e) => {
        props.setValue(e.target.value);
    };

    return (
        <div className="text-field-container">
            <div className="text-field">
                <input 
                    type={type}
                    value={fieldValue}
                    onChange={handleChange}
                    placeholder={placeholder}
                    inputMode={inputmode}
                />
            </div>
        </div>
    );
};

export default TextField;