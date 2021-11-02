import { useAuth } from '@contextProviders/AuthContext';

const SignInScreen = () => {
  const authCtx = useAuth();

  console.log(authCtx.user?.uid);

  return (
    <div className="max-w-screen-sm flex flex-col items-center justify-center">
      <h1>Todo Login</h1>
      <p>Please sign-in:</p>
      <button onClick={authCtx.login}>test</button>
    </div>
  );
};

export default SignInScreen;
