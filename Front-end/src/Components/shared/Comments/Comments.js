import addChat from './Icon/addChat.png'
import Chat from './Icon/chat.png'

export default function Comments() {

    return <>
        <div className="chat-Container">
            <div className="chat-Container-items">
                <h1>Comments: </h1>
                <div className="chat-Container-Icon">
                    <img src={addChat} alt="" />
                    <img src={Chat} alt="" />
                    <p>0</p>
                </div>
            </div>
        </div>
    </>
}