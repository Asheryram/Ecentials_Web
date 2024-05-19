import useSignupForm from "../../hooks/useSignupForm";
import { Link } from "react-router-dom";
import { Form, FormGroup, Row, Label, Col, Input, Modal } from "reactstrap";
import logo from "../../../../assets/logo.svg";
import ebusiness from "../../../../assets/images/png/ebusiness.svg";
import google from "../../../../assets/icons/svg/googleicon.svg";
import googleplay from "../../../../assets/icons/svg/googledownload.svg";
import iosdownload from "../../../../assets/icons/svg/iosdownload.svg";
import circlecorrect from "../../../../assets/gifs/loader-with-check-no background.gif";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import { Toaster } from "react-hot-toast";

const SignUpForm = () => {
	const {
		details,
		show,
		validEmail,
		validPass,
		phoneValid,
		checked,
		isLoading,
		errMes,
		open,
		handleChange,
		handleShow,
		handleCheck,
		handleSubmit,
	} = useSignupForm;

	const maskEmail = (email) => {
		if (!email || typeof email !== "string") {
			return "";
		}

		const [localPart, domainPart] = email.split("@");
		const visibleCharacters = localPart.substring(
			0,
			Math.min(3, localPart.length)
		);
		const maskedCharacters = "*".repeat(Math.max(localPart.length - 3, 0));
		return `${visibleCharacters}${maskedCharacters}@${domainPart}`;
	};
	let checkClass =
		"text-white btn btn-primary px-5 small py-2 text-nowrap rounded w-100";

	return (
		<>
			<>
				<Toaster />
				<div  className="m-4 shadow-lg">
					<div className="card home-login  border-0">
						<div  className="d-lg-flex flex-row-reverse ">
							<div  className="col-lg-6  bg-white">
								<div className="mx-4">
									<img
										src={logo}
										alt="logo"
										width={120}
										className="mt-4 text-center mx-auto d-block mx-md-0"
									/>
									<small
										className="card-title mt-3 small"
										style={{ fontSize: "12px", marginBottom: "6rem" }}>
										Personal details
									</small>
									{errMes && <div className="error">{errMes}</div>}
									<Form>
										<Row>
											<Col md={6}>
												<FormGroup>
													<Label className="small" htmlFor="full_name">
														Full name
													</Label>
													<Input
														id="full_name"
														name="full_name"
														type="text"
														value={details?.full_name}
														onChange={handleChange}
													/>
												</FormGroup>
											</Col>
											<Col md={6}>
												<FormGroup>
													<Label className="small" htmlFor="email">
														Email
														{/* {validEmail ? "Email" : "Invalid"} */}
													</Label>
													<Input
														id="lastName"
														name="email"
														value={details?.email}
														onChange={handleChange}
														type="email"
														invalid={details?.email && !validEmail}
														// valid={validEmail}
														aria-describedby="#note"
													/>
													<p className="text-danger small" id="note">
														{details?.email && !validEmail
															? "Please enter a valid email"
															: ""}
													</p>
												</FormGroup>
											</Col>
										</Row>
										<Row>
											<Col md={6}>
												<FormGroup>
													<Label className="small" htmlFor="phone_number">
														Phone number
													</Label>
													<Input
														id="email"
														name="phone_number"
														value={details?.phone_number}
														onChange={handleChange}
														type="tel"
														invalid={details?.phone_number && !phoneValid}
														valid={details?.phone_number && phoneValid}
														maxLength={10}
													/>
												</FormGroup>
											</Col>
											<Col md={6}>
												<FormGroup>
													<Label className="small" htmlFor="date">
														Address
													</Label>
													<Input
														id="date"
														name="address"
														value={details?.address}
														onChange={handleChange}
														type="text"
													/>
												</FormGroup>
											</Col>
										</Row>
										<Row>
											<Col md={6}>
												<FormGroup className="input_container">
													<Label className="small" htmlFor="password">
														Password
													</Label>
													<Input
														id="password"
														name="password"
														value={details?.password}
														onChange={handleChange}
														type={show ? "text" : "password"}
														invalid={details?.password && !validPass}
													/>

													{!details?.password ? (
														""
													) : (
														<div>
															{show ? (
																<RiEyeLine
																	className="eyeicon"
																	onClick={handleShow}
																/>
															) : (
																<RiEyeCloseLine
																	className="eyeicon"
																	onClick={handleShow}
																/>
															)}
														</div>
													)}
												</FormGroup>
											</Col>
											<Col md={6}>
												<FormGroup className="input_container">
													<Label className="small" htmlFor="confirmpass">
														Confirm Password
													</Label>
													<Input
														id="confirmpass"
														name="confirm_password"
														type={show ? "text" : "password"}
														value={details?.confirm_password}
														onChange={handleChange}
														invalid={
															details?.confirm_password &&
															details?.password !== details?.confirm_password
														}
														valid={
															details?.confirm_password &&
															details?.password === details?.confirm_password
														}
													/>
													{!details?.confirm_password ? (
														""
													) : (
														<div>
															{show ? (
																<RiEyeLine
																	className="eyeicon"
																	onClick={handleShow}
																/>
															) : (
																<RiEyeCloseLine
																	className="eyeicon"
																	onClick={handleShow}
																/>
															)}
														</div>
													)}
												</FormGroup>
											</Col>
										</Row>
										<p className="small text-danger mt-2">
											{details?.password && !validPass
												? "Password should contain atleast 1 special character 1 uppercase letter and 1 number"
												: ""}
										</p>

										<div className="form-check ">
											<input
												className="form-check-input"
												type="checkbox"
												value=""
												id="rememberme"
												onChange={handleCheck}
											/>
											<label
												className="form-check-label light-text "
												htmlFor="rememberme">
												I agree to all the <Link   style={{textDecoration : "none"}} to="">Terms</Link> and{" "}
												<Link  style={{textDecoration : "none"}} to="">Privacy policy</Link>
											</label>
										</div>
										<Row className="row gy-md-0 gy-3 mt-3 justify-content-center text-center  align-items-center">
											<Col>
												<button
													type="submit"
													// onFocus={handleFocus}
													onClick={handleSubmit}
													className={
														checked &&
														validEmail &&
														validPass &&
														details?.password === details?.confirm_password
															? checkClass.concat(" ")
															: checkClass.concat(" disabled")
													}>
													{isLoading ? (
														<span className="spinner-border" role="status">
															<span className="sr-only">Loading...</span>
														</span>
													) : (
														<span className="text-center">Create account</span>
													)}
												</button>
											</Col>
											<Col>
												<Link
													to=""
													className=" text-white btn btn-dark px-5  small py-2 text-nowrap  rounded d-block">
													<span>
														<img src={google} alt="google" />
													</span>{" "}
													Create account
												</Link>
												<Modal isOpen={open} centered={true}>
													<div className="contain">
														<div className="border-0 id-card">
															<img src={circlecorrect} alt="" width={100} />
															<p className="my-3">Successful !</p>
															<p className="w-75 text-center">
																Your login ID has been sent to your email{" "}
																<Link   style={{textDecoration : "none"}} to="">{maskEmail(details?.email)}</Link>{" "}
																Use it each time you sign in
															</p>
															<Link
                               style={{textDecoration : "none"}}
																to="/login"
																className="btn signup-btn w-75 mt-4">
																Sign in
															</Link>
														</div>
													</div>
												</Modal>
											</Col>
										</Row>
										<p className="mt-4  text-center small">
											Already have an account?{" "}
											<Link
                       style={{textDecoration : "none"}}
												to="/"
												className="text-primary text-decoration-none">
												login
											</Link>
										</p>
										<div className="pb-3 mx-auto text-center">
											<Link to="" className="col">
												<img src={googleplay} alt="" />
											</Link>
											<Link to="" className="col mx-2">
												<img src={iosdownload} alt="" />
											</Link>
										</div>
									</Form>
								</div>
							</div>
							<div  style ={{ backgroundColor: "#007aff0a" } } className="col-lg-6  d-flex justify-content-center align-items-center flex-column">
								<div
									style={{
										backgroundColor: "#007aff0a",
										height: "20rem",
										width: "20rem",
										alignItems: "center",
										borderRadius: "500px",
										display: "flex",
										justifyContent: "center",
									}}
									className="my-5 ">
									<img src={ebusiness} alt="" width={150} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		</>
	);
};

export default SignUpForm;
