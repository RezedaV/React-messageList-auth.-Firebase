import './App.css';
import Message from "./Components/Message";
import Form  from "./Components/Form";
import {useState, useEffect} from "react";


function App() {
    const [messageList, setMessageList] = useState([
        {text:'Привет от автора', author: 'Резеда'},
        {text:'Привет робота', author: 'Робот'},
        {text:'Как дела', author: 'Резеда'}
    ])

    const handleAddMessage = (newMess) => {
    setMessageList([...messageList, newMess])
    };

    const handleMessageClick = () => {
        console.log("Привет еще раз")
    }

    useEffect(() => {
        if ( messageList[messageList.length-1].author === 'Резеда'){
            const robotMessage = 'Сообщение от робота'
            console.log(robotMessage);
        }
    }, [messageList]);


  return (
    <div className="App">
        {messageList.map( (message) => (
            <Message
                text={message.text}
                author = {message.author}
                onMessageClick={handleMessageClick} />
        ))}
        <Form onSubmit={handleAddMessage}/>
    </div>
  );
}

export default App;
