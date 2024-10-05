
import { useState } from 'react';
import promiseLogo from '../images/promise.png';

export default function Signup() {
  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    district: '',
    address: '',
    area: '',
    contactNumber: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side Logo */}
      <div className="flex-1 flex items-center justify-center bg-gray-100 p-10">
        <img
          src={promiseLogo}
          alt="Promise Delivery Limited Logo"
          width={400}
          height={200}
          className="max-w-full h-auto"
        />
      </div>

      {/* Right Side Form */}
      <div className="flex-1 bg-white flex items-center justify-center p-10">
        <div className="w-full max-w-lg">
          <h2 className="text-3xl font-bold text-center mb-8">Sign Up</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Company Name */}
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                Company Name
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                required
                className="mt-1 w-full border border-gray-300 rounded-md p-2"
                placeholder="Enter your company name"
                value={formData.companyName}
                onChange={handleInputChange}
              />
            </div>

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 w-full border border-gray-300 rounded-md p-2"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            {/* Pickup Address (Dropdown) and District (Dropdown) in One Row */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Select Address
                </label>
                <select
                  id="address"
                  name="address"
                  required
                  className="mt-1 w-full border border-gray-300 rounded-md p-2"
                  value={formData.address}
                  onChange={handleInputChange}
                >
                  <option value="">Select Address</option>
                  <option value="Address 1">Address 1</option>
                  <option value="Address 2">Address 2</option>
                  <option value="Address 3">Address 3</option>
                  {/* Add more addresses as needed */}
                </select>
              </div>

              <div className="flex-1">
                <label htmlFor="district" className="block text-sm font-medium text-gray-700">
                  Select District
                </label>
                <select
                  id="district"
                  name="district"
                  required
                  className="mt-1 w-full border border-gray-300 rounded-md p-2"
                  value={formData.district}
                  onChange={handleInputChange}
                >
                  <option value="">Select District</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Chittagong">Chittagong</option>
                  <option value="Sylhet">Sylhet</option>
                  {/* Add more districts as needed */}
                </select>
              </div>
            </div>

            {/* Select Area */}
            <div>
              <label htmlFor="area" className="block text-sm font-medium text-gray-700">
                Select Area
              </label>
              <input
                id="area"
                name="area"
                type="text"
                required
                className="mt-1 w-full border border-gray-300 rounded-md p-2"
                placeholder="Enter area"
                value={formData.area}
                onChange={handleInputChange}
              />
            </div>

            {/* Contact Number */}
            <div>
              <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
                Contact Number
              </label>
              <input
                id="contactNumber"
                name="contactNumber"
                type="tel"
                required
                className="mt-1 w-full border border-gray-300 rounded-md p-2"
                placeholder="Enter your contact number"
                value={formData.contactNumber}
                onChange={handleInputChange}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full border border-gray-300 rounded-md p-2"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 w-full border border-gray-300 rounded-md p-2"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>

            {/* Submit Button */}
            <div>
           <button
                type="submit"
                className="w-full  bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors"
                >
                Sign Up
            </button>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
