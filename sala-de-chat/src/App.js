import { AuthenticatedApp } from './components/AuthenticatedApp/index.jsx'
import { UnauthenticatedApp } from './components/UnauthenticatedApp'
import { useAuth } from './hooks/useAuth';
import './App.css'

function App() {
    const { user } = useAuth();

    return (
        <div className='container'>
            <h1>💬 Sala de Chat</h1>
            {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
        </div>
    );
}

export default App;