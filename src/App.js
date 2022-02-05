import './App.css';
import Form  from "./Components/Form/Form";
import {useState, useEffect, useRef} from "react";
import {AUTHORS} from "./UTILS/constants";
import MessageList from "./Components/MessageList/MessageList";
import Chats from "./Components/Chats/Chats";


function App() {
    const chats = [
        { name: "Чат 1", id: "1" },
        { name: "Чат 2", id: "2" },
    ];

    const [messageList, setMessageList] = useState([
        {text:'Привет! Как дела?', author: AUTHORS.ME, id:1},
        {text:'Это бот', author: AUTHORS.BOT, id: 2},
    ])
    //сделано чтобы при наполнении сообщениями, были видны сообщения которые отправлены только что,
    //короче чтобы моталось вниз messagesEnd
    const messagesEnd = useRef();

    const sendMessage = (text, author) => {
        const newMesg = {
            text,
            author,
            id: `msg-${Date.now()}`,
        };
        setMessageList([...messageList, newMesg])
    };

    const handleAddMessage = (text) => {
        // приходит text, присваиваем себя как автора
        sendMessage(text, AUTHORS.ME)
    };


    useEffect(() => {
        messagesEnd.current?.scrollIntoView();
        if ( messageList[messageList.length-1]?.author === AUTHORS.ME) {
            sendMessage('Робот пишет', AUTHORS.BOT)
        }
    }, [messageList]);


  return (
    <div className="App" >
        <Chats chats={chats}/>
        <div className="messageBlock">
            <MessageList messages={messageList}/>
            <div ref={messagesEnd} />
        </div>
        <Form onSubmit={handleAddMessage}/>
    </div>
  );
}

export default App;

