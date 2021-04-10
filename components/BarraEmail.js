const BarraEmail = () => {

    const SubmitForm = event => {
        console.log('Entrei no SubmitForm!!!');
        event.preventDefault();        
    }
    
    return (
        <div>
            <form id="formEmail" onSubmit={SubmitForm}>
                <label>Email</label>
                <input type='text' id='txtEmail' />
                <button type='submit' id='btnEnviar'>Enviar</button>
            </form>
        </div>
    )
}

export default BarraEmail;

