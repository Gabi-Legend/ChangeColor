import React, {useState} from 'react';


function MyComponent() {

    const [color, setColor] = useState("#FFFFFF");


    function changeColor(event) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h1>Color Picker</h1>
            <p>Your Color:</p>
            <div className="color-picker" style={{background: color, width: 300, height: 400}}></div>
            <p>Select a color : </p>
            <input type="color" value={color} onChange={changeColor}/>
        </div>
    );
}

export default MyComponent;