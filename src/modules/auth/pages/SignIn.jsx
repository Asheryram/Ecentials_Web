import Footer from "../../core/components/Footer";
import MetaHelmet from "../../core/components/MetaHelmet";
import SignInForm from "../components/SignIn/SignInForm";
const SignIn = () => {
	return (
		<>
			<MetaHelmet title="Sign In" />
			<SignInForm />
			<Footer />
		</>
	);
};

export default SignIn;
