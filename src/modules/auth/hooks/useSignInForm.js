import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
// import { useLoginMutation } from "../../app/features/authSlice/userApiSlice";
// import { setCredentials } from "../../app/features/authSlice/authSlice";
// import { useDispatch } from "react-redux";

const useSignIn = () => {
  const [error, setError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [details, setDetails] = useState({ account_id: "", password: "" });
//   const [login, { isLoading: loginLoading }] = useLoginMutation();
  const [erC, setErC] = useState(0);
//   const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails({ ...details, [name]: value });
  };

  const handleFocus = () => {
    setIsLoading(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (details.account_id === "" && details.password === "") {
      setUsernameError(true);
      setPasswordError(true);
      return;
    }
    if (details.account_id === "") {
      setUsernameError(true);
      return;
    }
    if (details.password === "") {
      setPasswordError(true);
      return;
    }
    try {
    //   const res = await login({ ...details }).unwrap();
      const res = [];
    //   dispatch(setCredentials({ ...res?.result }));
      setError(true);

      if (res?.result?.data?.staff_privileges && !res?.result?.data?.staff_terminated) {
        navigate("/pharmacy/dashboard");
        return;
      }
      navigate("/signup");
    } catch (error) {
      console.log(error);
      if (erC === 0) {
        setErC(1);
        toast.error("An error occured, please retry");
      } else if (erC === 1) {
        setErC(2);
        toast.error("An error occured, please check your internet connection and try again");
      } else {
        toast.error("Try refreshing the page again");
      }
    }
  };

  const handleClick = () => {
    setShow(!show);
  };

  return {
    error,
    usernameError,
    passwordError,
    show,
    isLoading,
    // loginLoading,
    details,
    handleChange,
    handleFocus,
    handleSubmit,
    handleClick,
  };
};

export default useSignIn;
