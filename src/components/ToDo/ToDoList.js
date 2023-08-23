import React from 'react'

function ToDoList(prop) {

  return (
    <div>
        {prop.array.map((item,index) => {
            return (
                <div id='listitem'>
                    <div id='editbtn'>
                    <button id='editbutton' class='listbutton' onClick={function() {
                        document.getElementById('todoinput').value = item[0];
                        prop.setTask(item[0])
                        let temp = prop.array.map(a => a);
                        temp.splice(index,1);
                        prop.setArray(temp);
                        localStorage.setItem(prop.userKeyStored+'-list', JSON.stringify(prop.array));
                    }}>Edit</button>
                    </div>
                    <p class={'listpara'+item[1]}
                    id ={'list'+index}><b>{item[0]}</b><em> - Worth {item[2]} XP</em></p>
                    <div id='listbtns'>
                    <button class='listbutton' onClick={function() {
                        let temp = prop.array.map(a => a);
                        temp[index][1] = !temp[index][1];
                        prop.setArray(temp);
                        localStorage.setItem(prop.userKeyStored+'-list', JSON.stringify(prop.array));
                    }}>{item[1] ? 'Quest Complete' : 'Redo Quest'}</button>
                    <button class='listbutton' onClick={function() {
                        let temp = prop.array.map(a => a);
                        temp.splice(index,1);
                        prop.setArray(temp);
                        localStorage.setItem(prop.userKeyStored+'-list', JSON.stringify(prop.array));
                    }}>Abandon Quest</button>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default ToDoList