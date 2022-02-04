import './App.css';
import Message from "./Components/Message";
import Form  from "./Components/Form";
import {useState, useEffect} from "react";


function App() {
    const [messageList, setMessageList] = useState([
        {text:'Привет от автора', author: 'Резеда'},
        {text:'Привет робота', author: 'Робот'}
    ])

    const handleAddMessage = (newMess) => {
        // setMessageList((prevMessageList) => [...prevMessageList, text]);
    setMessageList([...messageList, newMess])
    };

    const handleMessageClick = () => {
        console.log("Привет еще раз")
    }

    useEffect((messageList) => {
        // if(как вот здесь обратиться с автору со значением 'Резеда'... не знаю как правильно написать.., то что ниже не работает..)
        if (messageList.author.length-1 === 'Резеда'){
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
