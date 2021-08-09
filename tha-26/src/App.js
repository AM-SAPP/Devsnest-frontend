
import './App.css';
import { setData} from './redux/actions/index';
import {useSelector, useDispatch} from 'react-redux';


function App() {
  const inputData = useSelector((state)=> state.inputform);
  const dispatch = useDispatch();
  return (
    <div className="App">
        <div className="form">
            <h2>Input</h2>
            <input type="text" placeholder="Name"
              value = {inputData.username} 
              onChange={(e)=>{
                dispatch(setData({...inputData, username : e.target.value}))
              }}
            />
            <input type="email" placeholder="Email" 
              value = {inputData.email} 
              onChange={(e)=>{
                dispatch(setData({
                    ...inputData,
                    email : e.target.value
                  }
                ))
              }}
            />
        </div>
        <div className="data">
          <h3>DATA</h3>
          <p>Username : {inputData.username}</p>
          <p>Email : {inputData.email}</p>
        </div>
    </div>
  );
}

export default App;
