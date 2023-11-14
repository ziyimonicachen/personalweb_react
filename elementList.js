import React from "react";
import ElementCard from "./elementCard";

const ElementList = ({ elements }) => {
    return (
        <div>
            {elements.map(element => (
                <ElementCard id={element.id} elementData={element}/> 

            ))
            
            }
        </div>
    );
}

export default ElementList;