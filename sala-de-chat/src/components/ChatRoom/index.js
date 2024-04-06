import { Link, useParams } from 'react-router-dom';
import { chatRooms } from '../../data/chatRooms';
import './styles.css'
import { MessageInput } from '../MessageInput';
import { MessageList } from '../MessageList';
import erro404 from '../../images/error_404.jpg'

function ChatRoom() {
    const params = useParams();

    const room = chatRooms.find((x) => x.id === params.id);
    if (!room) {
        <img src={erro404} alt='ERRO 404'/>
    }

    return (
        <>
            <h2>{room.title}</h2>
            <div>
                <Link to='/'>⬅️ Voltar para as Salas de Chat</Link>
            </div>
            <div className='messages-container'>
                <MessageInput roomId={room.id} />
                <MessageList roomId={room.id}/>
            </div>
        </>
    )
}

export { ChatRoom };