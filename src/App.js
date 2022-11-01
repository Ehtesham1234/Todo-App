import { color } from '@mui/system';
import React, { useState } from 'react';
import './style.css';
let nextId = 0;
const App = () => {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const [id, setId] = useState(0);
  const listHandler = () => {
    setValue('');
    if (value.length > 0) {
      setList([
        ...list,
        {
          id: nextId++,
          data: value,
        },
      ]);
    } else {
      alert('data is not found');
    }
  };
  const valueHandler = (e) => {
    setValue(e.target.value);
  };
  const deleteHandler = (id) => {
    let newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const handleClear = () => {
    setId(0);
    setList([]);
  };

  const mystyle = {
    display: 'flex' ,
    marginTop:"8%" ,
    float:"right" ,
   backgroundColor:"blue"
  }

  return (
    <div className="container">
      <div className="todo">
        <h1>Todo App</h1>
        <input
          className="Inpt"
          type="text"
          value={value}
          onChange={valueHandler}
        />
        <button className="btn" onClick={listHandler}>
          +
        </button>
      </div>
      <div className="list">
        {list.map((item) => (
          <div>
            <ul className="list">
              <li key={item.id}>
                {item.data}
                <button
                  onClick={() => deleteHandler(item.id)}
                  className="DeltBtn"
                >
                  X
                </button>
              </li>
            </ul>
          </div>
        ))}
      </div>
      {/* <div>
        <p>you have {} pending tasks</p>
      </div> */}
      <div style={mystyle}>
        <button onClick={handleClear}>Clear list</button>
      </div>
    </div>
  );
};
export default App;