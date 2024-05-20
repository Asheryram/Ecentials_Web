import useForgotPasswordForm from "../../hooks/useForgotPasswordForm";
import logo from "../../../../assets/logo.svg";
import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { Modal, Button } from "reactstrap";
import { Toaster } from "react-hot-toast";
import circlecorrect from "../../../../assets/gifs/loader-with-check-no background.gif";

const ForgotPasswordForm = () => {
	const { details, show, handleChange, handleFocus, handleSubmit, handleCode } =
		useForgotPasswordForm();
	return (
		<div
			className="container d-flex align-items-center justify-content-center"
			style={{ height: "90vh" }}>
			<div
				className="shadow-lg p-4 w-100 mt-5 mx-3 mx-md-0 "
				style={{ maxWidth: "400px" }}>
				<div className="d-flex justify-content-center">
					<Link to="/" className="mt-4">
						<img src={logo} alt="logo" width={120} />
					</Link>
				</div>
				<div className="mt-4">
					<h5 className="mb-4 ">Reset your password</h5>
					<form
						className="form-group"
						onSubmit={handleSubmit}
						autoComplete="off">
						<div className="form-floating mb-">
							<input
								type="text"
								className="form-control login-form-control"
								id="email"
								placeholder="example@gmail.com"
								name="email"
								value={details?.email}
								onChange={handleChange}
								autoComplete="off"
								required
							/>
							<label htmlFor="email" className="light-text">
								<HiOutlineMail size={20} />
								<span className="mx-4">example@gmail.com</span>
							</label>
						</div>

						<Button
							type="submit"
							style={{
                backgroundColor: "#4D44B5",
              }}
              className="btn signup-btn w-100 mt-2 bold-font btn-auth"
							onClick={handleSubmit}
							onFocus={handleFocus}>
							Verify
						</Button>
						<Toaster />
					</form>
					<Modal isOpen={show} centered={true}>
						<div className="container">
							<div  style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                minHeight: "calc(100vh - 7rem)",
                width: "100%;"
              }} className="border-0 ">
								<img style={{ width : "150px" , height: "150px"}} src={circlecorrect} alt="correct" />  
								<p className="my-2 fw-bolder">Successful !</p>
								<p className="w-75 text-center fw-bold">
									Enter verification code sent to{" "}
                  <p>
									<Link style={{
                    textDecoration: "none"
                  }} to="">
										{details?.email.substring(0, 6)}***@gmail.com
									</Link>
                  </p>
								</p>
								<div className="form-floating w-75">
									<input
                 style={{
                  backgroundColor: "#f6f6f6",
                  border: "none"
                 }}
										type="text"
										className="form-control login-form-control  fs-6"
										id="code"
										placeholder="Enter verification code"
										name="code"
										value={details?.code}
										onChange={handleChange}
										autoComplete="off"
										required
									/>
									<label  htmlFor="email" className="text-secondary fs-6 ">
										{/* <HiOutlineMail size={20} /> */}
										<span   className="px-4 fs-6">Enter Code</span>
									</label>
								</div>
								<Button
									style={{
										backgroundColor: "#4D44B5",
									}}
									className="btn signup-btn w-75 mt-2 bold-font btn-auth mx-4"
									onClick={handleCode}>
									Verify Code
								</Button>
							</div>
						</div>
					</Modal>
				</div>
			</div>
		</div>
	);
};

export default ForgotPasswordForm;
