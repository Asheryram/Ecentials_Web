import { useState } from "react";
// import axios from "../config/api/axios";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const useForgotPasswordForm = () => {
  const [details, setDetails] = useState({ email: "", code: "" });
  const [show,setShow ] = useState(false);
  const [, setIsLoading] = useState(false);
//   const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails({ ...details, [name]: value });
  };

  const handleFocus = () => {
    setIsLoading(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const remove = toast.loading("Loading...");
    if (details.email === "") {
      toast.dismiss(remove);
      toast.error("Email is required");
    } else {
      sessionStorage.setItem("email", details.email);
    //   axios
    //     .post("/user/forgot-password", { email: details.email })
    //     .then((res) => {
    //       toast.dismiss(remove);
    //       if (res.data.status === 400) {
    //         toast.error("Please provide a valid email");
    //       } else {
    //         axios
    //           .post("/user/recover_password", { email: details.email })
    //           .then((res) => res)
    //           .catch((err) => console.log(err));
    //         setShow(true);
    //       }
    //     })
    //     .catch((err) => {
    //       toast.dismiss(remove);
    //       if (err.message === "Network Error") {
    //         toast.error("Please check internet connection");
    //         setIsLoading(false);
    //       }
    //     });

    toast.dismiss(remove);
    setShow(true);

    }
  };

  const handleCode = (e) => {
    e.preventDefault();
    // axios
    //   .post(
    //     "/user/verify_code",
    //     { code: details.code, email: details.email },
    //     { headers: {} }
    //   )
    //   .then((res) => {
    //     if (res.data.message === "success") {
    //       setTimeout(() => {
    //         navigate("/reset-password");
    //       }, 3000);
    //       toast.success("Verified");
    //     }
    //   })
    //   .catch((err) => console.log(err));
  };

  return {
    details,
    show,
    handleChange,
    handleFocus,
    handleSubmit,
    handleCode,
  };
};

export default useForgotPasswordForm;
