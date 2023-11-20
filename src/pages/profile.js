const Profile = () => {
    if (!localStorage.getItem('authenticated')) {
        window.location.href = '/login';
        return null;
    }

    return (
        <>
            <h2>Профіль</h2>
            <h5>Тут має бути текст :-)</h5>
        </>
    );
};

export { Profile }