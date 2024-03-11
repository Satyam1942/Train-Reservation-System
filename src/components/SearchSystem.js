import React, { useState } from "react";
import "./SearchSystem.css"
import Home from  "./Home.js"
const places=["Amsterdam","Kal" ,"Kolkata","Dhanbad","Delhi","Mumbai","Chennai","Bangalore"];

places.sort();

function Search(prop){

    const [visibilityDropdown, setVisibilityDropdown]  = useState(true);

    function handleOnClick(name){
            prop.changeState(name);
            setVisibilityDropdown(false);
    }

    return (
        <>
        {
            visibilityDropdown &&  <div className="Search">
                {
                    places.filter(item=>{
                        const searchItem =prop.token.toLowerCase();
                        const itemList=item.toLowerCase()
                        return searchItem && itemList.startsWith(searchItem)
                    }).map((name,index)=>(
                        <ul className="Name" onClick={()=>handleOnClick(name)} >
                            {name}
                        </ul>
                    ))
                }
            </div>
}
        </>
    )
}

export default Search
