import Footer from "../../core/components/Footer";
import MetaHelmet from "../../core/components/MetaHelmet";
import ForgotPasswordForm from "../components/ForgotPassword/ForgotPasswordForm";

const ForgotPassword = () => {
  return (
    <>
        <MetaHelmet title="Reset Password" />
        <ForgotPasswordForm/>
        <Footer/>
    </>
  )
}

export default ForgotPassword