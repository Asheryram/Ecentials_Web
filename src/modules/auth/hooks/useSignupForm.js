import { useState, useEffect } from "react";
// import { useSignupMutation } from "../../app/features/authSlice/userApiSlice";
import toast from "react-hot-toast";

const useSignupForm = () => {
  const [details, setDetails] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    address: "",
    password: "",
    confirm_password: "",
  });

  const [show, setShow] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPass, setValidPass] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);
  const [checked, setChecked] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [errMes, setErrMes] = useState("");
  const [open, setOpen] = useState(false);
  // const [signup] = useSignupMutation();

  useEffect(() => {
    const emailReg = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    setValidEmail(emailReg.test(details.email));
  }, [details.email]);

  useEffect(() => {
    const passReg = /^(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*[A-Z])(?=.*\d).{8,}$/;
    setValidPass(passReg.test(details.password));
  }, [details.password]);

  useEffect(() => {
    const phoneReg = /^0\d{9}$/;
    setPhoneValid(phoneReg.test(details.phone_number));
  }, [details.phone_number]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleShow = () => {
    setShow(!show);
  };

  const handleCheck = () => {
    setChecked(!checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { full_name, address, phone_number, email, password, confirm_password } = details;
    if (password !== confirm_password) {
      setErrMes("Password do not match");
      return;
    }

    const newUser = {
      full_name: full_name.trim(),
      email: email.trim(),
      phone_number: phone_number.trim(),
      address: address.trim(),
      password: password.trim(),
    };

    setIsLoading(true);

    try {
      const response = [];
      // const response = await signup(newUser).unwrap();
      if (response?.message === "Owner created successfully") {
        setOpen(true);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      if (error?.data?.message === "Owner already exists") {
        toast.error("Owner already exists");
      }
      setIsLoading(false);
    }
  };

  return {
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
  };
};

export default useSignupForm;
