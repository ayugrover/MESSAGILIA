import './App.css';
import React, {useEffect, useState} from 'react';
import Message from './components/Message';
import db from './components/firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import {IconButton, FormControl, InputLabel, Input} from '@material-ui/core';

function App() {
  const[input, setInput] = useState('');
  const[messages, setMessages] = useState([]);
  const[username, setUsername] = useState('');

  useEffect(() =>{
    db.collection('messages')
    .orderBy('timestamp', 'asc')
    .onSnapshot(snapshot =>{ 
    setMessages(snapshot.docs.map(doc => ({id: doc.id, message:  doc.data()})))
    });
  }, [])

  useEffect(() =>{
    setUsername(prompt('Please Enter your name'));
  }, [])

  console.log(username);

  //use time of the platform where server of db os hosted

  const sendMessage = (event) =>{
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username : username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp() 
    })
    setInput('');
  }

  
  return (
    <div className="App">  
       <img className="app-image" src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt="Facebook-messenger-logo" />
      <h1>Webruster</h1>  
      <h2>Welcome {username}</h2>
    <form className="app_form">
      <FormControl>
      <InputLabel >Enter Text....</InputLabel>
      <Input value={input} onChange ={event => setInput(event.target.value)}/>
      </FormControl>  
      <IconButton className="app-iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
            <SendIcon />
      </IconButton>
    </form>

     <FlipMove> 
        {
          messages.map(({id, message}) => (
            <Message key={id } username={username} message={message} />
          ))
         }
      </FlipMove > 
    </div>
  );
}

export default App;
