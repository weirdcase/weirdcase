import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SetStateAction, useState } from 'react';

const Contact = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errorAlert, setErrorAlert] = useState(false);

  const updateSubject = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSubject(e.target.value);
  }
  const updateMessage = (e: { target: { value: SetStateAction<string>; }; }) => {
    setMessage(e.target.value);
  }
  const sendEmail = () => {
    if(subject === '' && message === '') {
      setErrorAlert(true);
      return
    }
    setErrorAlert(false);
    const a = document.createElement('a');
    a.href = `mailto:aweirdcase@gmail.com?subject=${subject}&body=${message}`;
    a.click();
  }
  const clearMessage = () => {
    setSubject('');
    setMessage('');
  }
  const ErrorComponent = () => {
    return (
      <div className="alert alert-danger" role="alert">Please enter Subject or Description or both.</div>
    )
  }
  return (
    <div className='contact-section-wrapper'>
      <div className="container">
        <div className="contact-section container-fluid clearfix">
          <div className="card">
            <div className="card-header primary-heading">
              <FontAwesomeIcon icon={['fas', 'address-book']} /> Contact
            </div>
            <div className="card-body">
              <div className="mb-3">
                <input type='text' className="form-control" id="emailSubject" placeholder='Kindly enter a subject for your message' onChange={updateSubject} value={subject} />
              </div>
              <div className="mb-3">
                <textarea className="form-control" id="emailBody" placeholder='Kindly enter your message and hit send' onChange={updateMessage} value={message}></textarea>
              </div>
              {errorAlert && <ErrorComponent />}
              <button className="btn btn-success" onClick={sendEmail}><FontAwesomeIcon icon={['fas', 'envelope']} /> Send</button>&nbsp;
              <button className="btn btn-danger" onClick={clearMessage}><FontAwesomeIcon icon={['fas', 'xmark']} /> Clear</button>
            </div>
            <div className="card-footer">
              <small className="text-muted"><FontAwesomeIcon icon={['fas', 'heart']} /> Thanks for visiting!</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;