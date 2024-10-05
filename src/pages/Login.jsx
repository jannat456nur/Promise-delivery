
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useState } from 'react';
import promise from '../images/promise.png';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ emailOrPhone, password, keepSignedIn });
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left side logo */}
      <div className="flex-1 flex items-center justify-center p-10">
        <img
          src={promise}
          alt="Promise Delivery Limited Logo"
          width={300}
          height={100}
          className="max-w-full h-auto"
        />
      </div>
      {/* Right side login form */}
      <div className="bg-white flex-1 flex items-center justify-center p-10">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Sign in</h2>
            <p className="mt-2 text-sm text-gray-600">
              Sign in to your account to start using Promise Delivery
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              {/* Email or Phone Number Input */}
              <div>
                <label htmlFor="email-phone" className="block text-sm font-medium text-gray-700">
                  Email Or Phone Number
                </label>
                <div className="mt-1">
                  <div className="border border-gray-300 rounded-md p-2">
                    <input
                      id="email-phone"
                      name="email-phone"
                      type="text"
                      required
                      className="w-full outline-none"
                      placeholder="Email or phone number"
                      value={emailOrPhone}
                      onChange={(e) => setEmailOrPhone(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1 relative">
                  <div className="border border-gray-300 rounded-md p-2">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      className="w-full outline-none pr-10"
                      placeholder="Enter Your Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOffIcon className="h-5 w-5 text-gray-400" />
                      ) : (
                        <EyeIcon className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Keep Me Signed In Checkbox */}
            <div className="flex items-center">
              <div
                onClick={() => setKeepSignedIn(!keepSignedIn)}
                className={`flex items-center justify-center w-5 h-5 border rounded cursor-pointer ${keepSignedIn ? 'bg-indigo-600' : 'bg-white'}`}
              >
                {keepSignedIn && <div className="w-3 h-3 bg-white rounded" />}
              </div>
              <label htmlFor="keep-signed-in" className="ml-2 block text-sm text-gray-900 cursor-pointer">
                Keep Me Signed In
              </label>
            </div>
            {/* Sign In Button */}
            <div className="w-full">
              <button
                type="submit"
                className="w-full text-lg  bg-gray-600 text-white py-2 rounded-md hover:bg-40b7e9-500"
              >
                Sign In
              </button>
            </div>
          </form>
          {/* Sign Up and Forgot Password Links */}
          <div className="text-center text-sm">
            <p className="text-gray-600">
              DO NOT HAVE AN ACCOUNT?{' '}
              <a href="/signup" className="font-medium text-gray-600 hover:text-40b7e9-500">
                SIGN UP
              </a>
            </p>
          </div>
          <div className="text-center">
            <a
              href="/forgot-password"
              className="w-full text-lg font-medium text-40b7e9-600 hover:bg-yellow-500 hover:text-white border border-black-600 rounded-md px-10 py-3 inline-block"
            >
              Forget Password
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
}
