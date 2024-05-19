import { Link } from "react-router-dom";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import useSignInForm from "../../hooks/useSignInForm";
import briefcase from "../../../../assets/icons/svg/briefcase.svg";
import lock from "../../../../assets/icons/svg/lock.svg";
import logo from "../../../../assets/logo.svg";
import { Button } from "reactstrap";
import "./SignInForm.css"; // Ensure to import your CSS file

const SignInForm = () => {
  const {
    error,
    usernameError,
    passwordError,
    show,
    isLoading,
    details,
    handleChange,
    handleFocus,
    handleSubmit,
    handleClick,
  } = useSignInForm();

  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ height: "90vh" ,margin: "20px 500px" }}>
      <div className="shadow-lg p-4 w-100 mt-5 mx-3 mx-md-0 " >
        <div className="d-flex justify-content-center">
          <Link to="/" className="mt-4">
            <img src={logo} alt="logo" width={120} />
          </Link>
        </div>
        <div className="mt-4">
          <h5 className="mb-4 ">Welcome Back</h5>
          <form className="form-group" onSubmit={handleSubmit} autoComplete="off">
            <div className="form-floating mb-4">
              {error ? <div className="error text-danger">Invalid credentials</div> : ""}
              <input
                data-cy="businessId"
                type="text"
                className="form-control login-form-control"
                id="email"
                placeholder="Business ID"
                name="account_id"
                value={details.account_id}
                onChange={handleChange}
                autoComplete="off"
                required
              />
              <label htmlFor="email" className="light-text">
                <img src={briefcase} alt="" className="mb-2" />
                <span className="mx-4">Business ID</span>
              </label>
            </div>
            {usernameError ? (
              <div className="error text-danger" data-cy="username-error">
                Username is empty
              </div>
            ) : (
              ""
            )}
            <div className="relative form-floating input_container mb-4">
              <input
                data-cy="password"
                type={show ? "text" : "password"}
                className="form-control login-form-control"
                id="password"
                placeholder="Password"
                name="password"
                value={details.password}
                onChange={handleChange}
                required
              />
              <label htmlFor="password" className="light-text">
                <img src={lock} alt="" className="mb-2" />
                <span className="mx-4">Password</span>
              </label>
              {details.password && (
                <div onClick={handleClick} className="eye-icon">
                  {show ? <RiEyeLine /> : <RiEyeCloseLine />}
                </div>
              )}
            </div>
            {passwordError ? (
              <div className="error text-danger" data-cy="password-error">
                Password is empty
              </div>
            ) : (
              ""
            )}
            <div className="row justify-content-between align-items-center mt-3 mb-4">
              <div className="col-6">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="rememberme" />
                  <label style = {{ color: "#B9B9B9"}}className="form-check-label light-text" htmlFor="rememberme">
                    Remember Me
                  </label>
                </div>
              </div>
              <div className="col-6 text-end">
                <Link style={{ textDecoration: "none"}} to="/forgot-password" className="text-primary light-text">
                  Forgot Password
                </Link>
              </div>
            </div>
            <Button
              data-cy="login-btn"
              type="submit"
              style={{
                backgroundColor: "#4D44B5"
              }}
              className="btn signup-btn w-100 mt-2 bold-font btn-auth"
              onClick={handleSubmit}
              onFocus={handleFocus}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                "Sign in"
              )}
            </Button>
            <p className="mt-4 text-center small">
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="text-primary text-decoration-none">
                Signup
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
