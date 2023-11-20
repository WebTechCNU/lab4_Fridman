import {useState} from "react";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'Admin' && password === '12345') {
            localStorage.setItem('authenticated', true);
            window.location.href = '/profile';
        } else {
            setError('Ім\'я користувача або пароль введені не вірно');
        }
    };

    return (
        <div>
            <h2>Вхід</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Ім'я користувача:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Пароль:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Увійти</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export { Login }