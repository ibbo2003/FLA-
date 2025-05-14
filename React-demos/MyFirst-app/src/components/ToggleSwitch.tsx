import { useState } from "react";
import on from '../assets/on.jpg';
import off from '../assets/off.jpg';


function ToggleSwitch(){
    
    const [isOn, setIsOn] = useState<boolean>(false);
    const switchOnOff = () => {
        setIsOn(!isOn);
    }
    return (
        <div>
            <h2>Status: {isOn ? "ON" : "OFF"}</h2>
            <div>
                <img
                    src={isOn ? on : off}
                    alt="On or Off image"
                    width="200px"
                    height="300px"
                    onClick={switchOnOff}
                />
            </div>
        </div>
    );
};
export default ToggleSwitch;
