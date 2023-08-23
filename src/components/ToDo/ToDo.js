import React from 'react'
import ToDoForm from './ToDoForm'
import { useState, useEffect } from 'react';
import Completed from '../Completed/Completed';
import { auth } from '../../config/firebaseConfig';

function ToDo(prop) {

  const useLocalStorage = (storageKey, fallbackState) => {
    const [value, setValue] = useState(
      JSON.parse(localStorage.getItem(storageKey)) ?? fallbackState
    );
    useEffect(() => {
      localStorage.setItem(storageKey, JSON.stringify(value));
    }, [value, storageKey]);
    return [value, setValue];
  };

  const [userKey] = useLocalStorage('tempkey', 0);
  auth.onAuthStateChanged(function(user) {
    if (user) {
      prop.setLog(true);
      localStorage.setItem('tempkey', JSON.stringify(auth.currentUser.email));
    } else {
      prop.setLog(false);
    }
  });

  const userKeyStored = userKey;

  const [array, setArray] = useLocalStorage(userKeyStored+'-list', []);

  const [score, setScore] = useLocalStorage(userKeyStored+'-score', 0);

  return (
    <div>
    <div id='todopanel'>
    <div>
        <ToDoForm array={array} setArray={setArray} userKeyStored={userKeyStored} />
    </div>
    <button id='completed' onClick={function() {
      document.getElementById('todopanel').style.display = 'none';
      document.getElementById('completedpanel').style.display = 'inline-block';
        }}>Completed Quests</button>
    </div>
    <div id='completedpanel'>
      <div>
      <Completed array={array} setArray={setArray} />
      </div>
      <button id='turnin' onClick={function() {
        let x = score;
        for (let i = 0; i < array.length; i ++) {
          if(!array[i][1]) {
            x += array[i][2];
          }
        }
        setScore(x);
        localStorage.setItem(userKeyStored+'-score', JSON.stringify(score));
        setArray(array.filter(function(item) {
          return item[1];
        }))
        localStorage.setItem(userKeyStored+'-list', JSON.stringify(array));
      }}>Turn In Quests</button>
      <button id='goback' onClick={function() {
        document.getElementById('todopanel').style.display = 'inline-block';
        document.getElementById('completedpanel').style.display = 'none';
      }}>Go Back</button>
    </div>
    <h5><em>You are a level {Math.floor(score/100) + 1} adventurer, {
    100- score%100} XP until next level.</em></h5>
    </div>
  )
}

export default ToDo;