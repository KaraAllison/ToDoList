import React from 'react'
import './Completed.css';

function Completed(prop) {
  return (
    <div>
        <div id='complist'>
        {prop.array.map((item,index) => {
            if(!item[1]){
            return (
                    <p class='comppara' id ={'list'+index}><b>{item[0]}</b><em> - Worth {item[2]} XP</em></p>
                    )
                } else {
                    return null;
                }
                })}
                </div>
                </div>
  )
}

export default Completed