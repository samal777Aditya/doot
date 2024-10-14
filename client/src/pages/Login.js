import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../services/firebase';

const Login = () => {
  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert('Logged in!');
    } catch (error) {
      console.error(error);
    }
  };

  return <button onClick={loginWithGoogle}>Login with Google</button>;
};

export default Login;