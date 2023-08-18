import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Usefade from "./UseFade";

const RegisterForm = () => {
    const [isLogin, setIsLogin] = useState(true);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phoneNumber: "",
        workTimings: "",
        companyName: "",
        department: "",
        role: "",
    });

    const workTimingsOptions = [
        "9:00 AM - 5:00 PM",
        "10:00 AM - 6:00 PM",
        "Flexible",
        "Other",
    ];

    const departmentOptions = [
        "Engineering",
        "Marketing",
        "Sales",
        "Finance",
        "HR",
        "Other",
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form data:", formData);
        createUserWithEmailAndPassword(auth, "akhilesh@gmail.com", "123456")
            .then((cred) => {
                console.log(cred);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="lg:overflow-y-hidden mt-12 lg:mt-0 w-full lg:w-2/4 lg:mr-0 lg:ml-auto h-screen ">
            <div className="lg:bg-white w-full min-h-screen px-8 py-12">
                <h1 className="font-semibold text-sm text-center">
                    Enter your Details
                </h1>

                <Usefade isActive={!isLogin}>
                    <form onSubmit={handleSubmit}>
                        {/* ... other fields ... */}
                        <div className="my-6 mt-12">
                            {/* <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            Name
                        </label> */}
                            <input
                                className="shadow appearance-none border rounded-2xl w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Full Name"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="my-6">
                            {/* <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label> */}
                            <input
                                className="shadow appearance-none border rounded-2xl w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email Address"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="my-6">
                            {/* <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label> */}
                            <input
                                className="shadow appearance-none border rounded-2xl w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="my-6">
                            {/* <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="phoneNumber"
                        >
                            Phone Number
                        </label> */}
                            <input
                                className="shadow appearance-none border rounded-2xl w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="tel"
                                name="phoneNumber"
                                id="phoneNumber"
                                placeholder="Phone Number"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="my-6">
                            {/* <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="companyName"
                        >
                            Company Name
                        </label> */}
                            <input
                                className="shadow appearance-none border rounded-2xl w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                name="companyName"
                                id="companyName"
                                placeholder="Company Name"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="my-6">
                            {/* <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="department"
                        >
                            Department
                        </label> */}
                            <select
                                className="shadow appearance-none border rounded-2xl w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="department"
                                id="department"
                                onChange={handleInputChange}
                                value={formData.department}
                            >
                                <option value="">Select Department</option>
                                {departmentOptions.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="my-6">
                            {/* <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="workTimings"
                        >
                            Work Timings
                        </label> */}
                            <select
                                className="shadow appearance-none border rounded-2xl w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="workTimings"
                                id="workTimings"
                                onChange={handleInputChange}
                                value={formData.workTimings}
                            >
                                <option value="">Select Work Timings</option>
                                {workTimingsOptions.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button
                            onClick={handleSubmit}
                            className="mx-auto text-white rounded-2xl px-6 py-4 w-full mt-4 bg-blue-950"
                            type="submit"
                        >
                            Register
                        </button>
                    </form>
                </Usefade>

                <Usefade isActive={isLogin}>
                    <form onSubmit={handleSubmit}>
                        <div className="my-6">
                            {/* <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="email"
                  >
                      Email
                  </label> */}
                            <input
                                className="shadow appearance-none border rounded-2xl w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email Address"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="my-6">
                            {/* <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="password"
                  >
                      Password
                  </label> */}
                            <input
                                className="shadow appearance-none border rounded-2xl w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                onChange={handleInputChange}
                            />
                        </div>
                        <button
                            onClick={handleSubmit}
                            className="mx-auto text-white rounded-2xl px-6 py-4 w-full mt-4 bg-blue-950"
                            type="submit"
                        >
                            Register
                        </button>
                    </form>
                </Usefade>

                <>
                    <Usefade isActive={isLogin}>
                        <div className="flex gap-2 font-semibold mt-8 text-center text-sm w-full justify-center">
                            <p>New user?</p>
                            <button
                                onClick={() => setIsLogin(false)}
                                className="underline text-bluee"
                            >
                                Register
                            </button>
                        </div>
                    </Usefade>
                    <Usefade isActive={!isLogin}>
                        <div className="flex gap-2 font-semibold mt-8 text-center text-sm w-full justify-center">
                            <p>Already a user?</p>
                            <button
                                onClick={() => setIsLogin(true)}
                                className="underline text-bluee"
                            >
                                Login
                            </button>
                        </div>
                    </Usefade>
                </>
            </div>
        </div>
    );
};

export default RegisterForm;
