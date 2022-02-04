import './App.css';
import Message from "./Components/Message";
import Form  from "./Components/Form";
import {useState, useEffect} from "react";
import {AUTHORS} from "./UTILS/constants";


function App() {
    const [messageList, setMessageList] = useState([
        {text:'Привет от автора', author: AUTHORS.ME},
        {text:'Привет от робота', author: AUTHORS.BOT},
        {text:'Как дела?', author: AUTHORS.ME}
    ])

    const handleAddMessage = (text) => {
    setMessageList([...messageList, text])
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


