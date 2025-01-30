import React, { useState } from 'react';
import { FaGoogle, FaApple, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import welogo from './transwesafa.png';

// Hard-coded credentials for MVP
// Do NOT show them in logs or UI
const TRIPPER_CREDENTIALS = { username: 'tripper', password: 'test' };
const PARTNER_CREDENTIALS = { username: 'partner', password: 'admin' };

function Login({ onClose, isSignUp, setIsSignUp, isTripper, setIsTripper }) {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);

  // State for all fields
  const [formData, setFormData] = useState({
    name: '',
    firstname: '',
    username: '',
    email: '',
    password: '',
    businessName: '',
    businessEmail: '',
    businessPhone: '',
    businessDescription: '',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Toggle Tripper vs. Partner
  const toggleUserType = () => {
    setIsTripper(!isTripper);
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      // ----- SIGN UP MODE -----
      // Do your sign-up logic (MVP: no backend).
      // console.log('Sign Up:', formData); // optional

      // Reset fields (optional)
      setFormData({
        name: '',
        firstname: '',
        username: '',
        email: '',
        password: '',
        businessName: '',
        businessEmail: '',
        businessPhone: '',
        businessDescription: '',
      });
      // Optionally close the modal or navigate, etc.
      onClose?.();
      alert('Sign Up successful (MVP placeholder)');
    } else {
      // ----- LOG IN MODE -----
      // We only check username + password
      if (isTripper) {
        // Tripper
        if (
          formData.username === TRIPPER_CREDENTIALS.username &&
          formData.password === TRIPPER_CREDENTIALS.password
        ) {
          // Navigate if successful
          navigate('/tripper/home');
          onClose?.();
        } else {
          alert('Invalid credentials');
        }
      } else {
        // Business Partner
        if (
          formData.username === PARTNER_CREDENTIALS.username &&
          formData.password === PARTNER_CREDENTIALS.password
        ) {
          // Navigate if successful
          navigate('/partner/explore');
          onClose?.();
        } else {
          alert('Invalid credentials');
        }
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-40 bg-gray bg-opacity-70 overflow-y-auto">
      <div
        className={`relative p-8 rounded-lg shadow-lg w-full max-w-sm ${
          isTripper ? 'bg-tripper-container' : 'bg-business-container'
        } text-white max-h-screen overflow-y-auto`}
      >
        {/* Close button in top-right corner */}
        <button
          className="absolute top-4 right-4 text-red-400 hover:underline"
          onClick={onClose}
        >
          Close
        </button>

        <div className="flex justify-center mb-6">
          <img src={welogo} alt="Wesafa Logo" className="h-18" />
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-center">
          {isSignUp ? 'Sign Up' : 'Log In'}
        </h2>

        {/* Toggle Tripper / Partner */}
        <div className="flex justify-center mb-4">
          <label className="inline-flex items-center">
            <span className="mr-2">
              {isTripper ? 'Tripper' : 'Business Partner'}
            </span>
            <input
              type="checkbox"
              className="toggle-switch"
              checked={isTripper}
              onChange={toggleUserType}
            />
          </label>
        </div>

        <form onSubmit={handleSubmit}>
          {/* =====================
              SIGN UP (Tripper)
             ===================== */}
          {isSignUp && isTripper && (
            <>
              <div className="mb-4">
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="w-full px-3 py-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <input
                  id="firstname"
                  type="text"
                  value={formData.firstname}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  className="w-full px-3 py-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <input
                  id="username"
                  type="text"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Username"
                  className="w-full px-3 py-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="w-full px-3 py-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Password for Tripper sign-up */}
              <div className="mb-4 relative">
                <input
                  id="password"
                  type={passwordVisible ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className="w-full px-3 py-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-300"
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </>
          )}

          {/* =====================
              SIGN UP (Partner)
             ===================== */}
          {isSignUp && !isTripper && (
            <>
              <div className="mb-4">
                <input
                  id="businessName"
                  type="text"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  placeholder="Business Name"
                  className="w-full px-3 py-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <input
                  id="businessEmail"
                  type="email"
                  value={formData.businessEmail}
                  onChange={handleInputChange}
                  placeholder="Business Email"
                  className="w-full px-3 py-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <input
                  id="businessPhone"
                  type="tel"
                  value={formData.businessPhone}
                  onChange={handleInputChange}
                  placeholder="Business Phone"
                  className="w-full px-3 py-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <textarea
                  id="businessDescription"
                  rows={3}
                  value={formData.businessDescription}
                  onChange={handleInputChange}
                  placeholder="Business Description"
                  className="w-full px-3 py-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Password for Partner sign-up */}
              <div className="mb-4 relative">
                <input
                  id="password"
                  type={passwordVisible ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className="w-full px-3 py-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-300"
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </>
          )}

          {/* =====================
              LOGIN MODE
             ===================== */}
          {!isSignUp && (
            <>
              {/* ONLY TWO FIELDS FOR LOGIN: username + password */}
              <div className="mb-4">
                <input
                  id="username"
                  type="text"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Username"
                  className="w-full px-3 py-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4 relative">
                <input
                  id="password"
                  type={passwordVisible ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className="w-full px-3 py-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-300"
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            {isSignUp ? 'Sign Up' : 'Log In'}
          </button>
        </form>

        <div className="my-4 text-center">or</div>
        <div className="flex flex-col space-y-2">
          <button className="w-full bg-white text-black py-2 rounded-full hover:bg-gray-200 flex items-center justify-center transition-transform transform hover:scale-105">
            <FaGoogle className="h-5 w-5" />
          </button>
          <button className="w-full bg-black text-white py-2 rounded-full hover:bg-gray-800 flex items-center justify-center transition-transform transform hover:scale-105">
            <FaApple className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4 text-center">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-blue-400 hover:underline"
          >
            {isSignUp
              ? 'Already have an account? Log In'
              : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>

      {/* Custom toggle-switch styles + container styling */}
      <style jsx>{`
        .toggle-switch {
          appearance: none;
          width: 40px;
          height: 20px;
          background: #4caf50;
          outline: none;
          border-radius: 50px;
          cursor: pointer;
          transition: background-color 0.3s;
          position: relative;
        }
        .toggle-switch:checked {
          background: #ff4081;
        }
        .toggle-switch::before {
          content: '';
          position: absolute;
          top: 2px;
          left: 2px;
          width: 16px;
          height: 16px;
          background: white;
          border-radius: 50%;
          transition: left 0.3s;
        }
        .toggle-switch:checked::before {
          left: 22px;
        }
        .bg-tripper-container {
          background-color: rgba(30, 30, 60, 0.8);
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .bg-business-container {
          background-color: rgba(60, 30, 30, 0.8);
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
}

export default Login;