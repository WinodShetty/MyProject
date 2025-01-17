import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";

const Login = () => {
  const initialState = {
    email: '',
    password: '',
    showPassword: false,
    emailError: '',
    passwordError: '',
  };

  const [formState, setFormState] = useState(initialState);
  const [loading, setLoading] = useState(true);
  const [formWidth, setFormWidth] = useState('60%');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setFormWidth('75%');
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value,
      emailError: name === 'email' && !value ? 'Email is required.' : '',
      passwordError: name === 'password' && !value ? 'Password is required.' : '',
    }));
  };

  const togglePasswordVisibility = () => {
    setFormState(prevState => ({
      ...prevState,
      showPassword: !prevState.showPassword,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (!formState.email) {
      setFormState(prevState => ({
        ...prevState,
        emailError: 'Email is required.',
      }));
      valid = false;
    }

    if (!formState.password) {
      setFormState(prevState => ({
        ...prevState,
        passwordError: 'Password is required.',
      }));
      valid = false;
    }

    if (valid) {
      // Store email and password in local storage
      localStorage.setItem('email', formState.email);
      localStorage.setItem('password', formState.password);

      // Redirect to the dashboard
      window.location.href = '/';
    }
  };

  return (
    <div className="relative flex flex-col h-screen overflow-hidden">
      {/* Hero Image Section */}
      <motion.div
        className={`absolute top-0 left-0 z-0 ${!loading ? 'transition-transform duration-1000' : ''} hidden md:block`}
        initial={{ width: "100%", height: "100%" }}
        animate={{ width: loading ? "100%" : "70%", height: loading ? "100%" : "100%" }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          width: '65vw',
          height: '100vh'
        }}
      >
        <img
          className="w-full h-full object-cover"
          src="src/assets/images/LoginPage/HeroImage.jpg"
          alt="HeroImage"
        />
      </motion.div>

      {/* Form Section */}
      <div
        className={`absolute top-0 right-0 ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000 bg-black md:w-1/3 md:h-full w-full h-screen`}
      >
        <div className="flex items-center justify-center h-full">
          <motion.div
            className="bg-white p-8 rounded-3xl shadow-lg mx-4 sm:mx-0 w-full max-w-md md:max-w-lg lg:max-w-xl flex flex-col"
            style={{ width: formWidth }}
            animate={{ width: formWidth }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="text-center mb-6 p-10">
              <img
                className="mx-auto mb-4 transition-transform duration-300 hover:scale-105"
                src="src/assets/logo/LoginLogo.png"
                alt="Logo"
              />
              <h2 className="text-xl font-bold">Welcome !!</h2>
            </div>
            <form className="space-y-4 flex flex-col" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formState.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black hover:border-black transition-colors duration-300"
                />
                {formState.emailError && (
                  <div className="h-5">
                    <p className="text-red-500 text-sm mt-1">{formState.emailError}</p>
                  </div>
                )}
              </div>
              <div>
                <div className="relative">
                  <input
                    type={formState.showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formState.password}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black pr-12 hover:border-black transition-colors duration-300"
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                  >
                    {formState.showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                {formState.passwordError && (
                  <div className="h-5">
                    <p className="text-red-500 text-sm mt-1">{formState.passwordError}</p>
                  </div>
                )}
              </div>
              <div className="flex items-center justify-center mt-4">
                <button
                  type="submit"
                  className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Log in
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Login;
