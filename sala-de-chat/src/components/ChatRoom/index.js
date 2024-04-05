import { Link, useParams } from 'react-router-dom';
import { chatRooms } from '../../data/chatRooms';
import './styles.css'

function ChatRoom() {
    const params = useParams();

    const room = chatRooms.find((x) => x.id === params.id);
    if (!room) {
        
    }

    return (
        <>
            <h2>{room.title}</h2>
            <div>
                <Link to='/'>⬅️ Voltar para as Salas de Chat</Link>
            </div>
            <div className='messages-container'>
                {/*TODO*/ }
            </div>
        </>
    )
}

export { ChatRoom };