import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersFetch } from './Action';
import { postUsersRequest } from './Action';


function App() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.myFirstReducer.users);

  const [postData, setPostData] = useState('')

  const handleGetUsers = () => {
    dispatch(getUsersFetch());  
  };

  const handleChange = (e) => {
    setPostData({
        ...postData,
        [e.target.name]: e.target.value
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(postUsersRequest(postData));
  };

  return (
    <div className="App">
      <div><button onClick={handleGetUsers}>Get Users</button></div>
      <div>
      <input type='text' name='name' onChange={handleChange} />
      <button onClick={handleClick}>Post User</button>
      </div>
      <p>Users : {users.map(user => <div>{user.name}</div>)}</p>
    </div>
  );
}

export default App;
