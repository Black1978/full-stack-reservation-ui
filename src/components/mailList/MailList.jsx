import './mailList.css'

const MailList = () => {
    return (
        <div className='ml'>
            <h2 className='mlTitle'>Save time, save money!</h2>
            <div className='mlInputContainer'>
                <input type='text' placeholder='Your e-mail' />
                <button>Subsribe</button>
            </div>
        </div>
    )
}

export default MailList
