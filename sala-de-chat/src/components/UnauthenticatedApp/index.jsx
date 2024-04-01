import { useAuth } from '../../hooks/useAuth';
import './styles.css';

function UnauthenticatedApp() {
    const { login } = useAuth();

    return (
        <>
            <h2>Faça login para se juntar a sala de chat</h2>
            <div>
                <button onClick={login} className="login">
                    Login com o Google
                </button>
            </div>
        </>
    );
}

export { UnauthenticatedApp };