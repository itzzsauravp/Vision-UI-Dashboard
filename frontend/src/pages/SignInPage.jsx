import SignInForm from "../components/SignInPage/SignInForm";
import AccountAccess from "../components/Reusables/AccountAccess";
const SignInPage = () => {
  return (
    <>
      <AccountAccess Child={SignInForm}/>
    </>
  );
};

export default SignInPage;
