import { useState } from 'react';
import { signInUser, signUpUser } from './services/FetchUtils';
import './Amanda.css';
import backgroundImg from './background2.jpg';



export default function AuthPage() {
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPass, setSignInPass] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPass, setSignUpPass] = useState('');
  const [curretUser, setCurrentUser] = useState([]);

  function clearForms() {
    setSignInEmail('');
    setSignUpEmail('');
    setSignInPass('');
    setSignUpPass('');
  }

  async function handleSignUp(e) {
    e.preventDefault();
    const user = await signUpUser(signUpEmail, signUpPass);
    setCurrentUser(user);
    clearForms();
    return curretUser;
  }

  async function handleSignIn(e) {
    e.preventDefault();
    const user = await signInUser(signInEmail, signInPass);
    setCurrentUser(user);
    clearForms();
    return curretUser;
  }




  return (
    <div className='AuthPage' style={{ backgroundImage: `url(${backgroundImg})` }}>
      <h1 className='header'>SpongeBob APi Search</h1>
      <img className='SpongeBob' src={'./images/captain.jpg'} height='200'/>
      <form onSubmit={handleSignUp} className='signUp'>
        <label>
                E-mail
          <input value={signUpEmail} onChange={e => setSignUpEmail(e.target.value)}/>
        </label>
        <label>
            password
          <input value={signUpPass} type='password' onChange={e => setSignUpPass(e.target.value)}/>
        </label>
        <button className='button'>SIGN UP!</button>
      </form>
      <form onSubmit={handleSignIn} className='signIn'>
        <label>
                E-mail
          <input value={signInEmail} onChange={e => setSignInEmail(e.target.value)}/>
        </label>
        <label>
            password
          <input value={signInPass} type='password' onChange={e => setSignInPass(e.target.value)}/>
        </label>
        <button className='button'>SIGN IN!</button>
      </form>
    </div>
  );
}
