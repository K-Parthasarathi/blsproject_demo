"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./sign_up.css";

export default function Page() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [showPopup, setShowPopup] = useState(false);

  // Handle input change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

  // Password strength regex
    const strongPassword =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Submit
    const handleSubmit = (e) => {
        e.preventDefault();

    // Check password match
        if (formData.password !== formData.confirmPassword) {
            setError("Incorrect username or password.");
            return;
        }

    // Check strong password
        if (!strongPassword.test(formData.password)) {
            setError(
                "Password must be 8+ chars, include uppercase, lowercase, number & special character"
            );
            return;
        }

        // Success

        // console.log("User Signup Data:", {
        //     email: formData.email,
        //     password: formData.password,
        // });
        setTimeout(() => {
            router.push("/home_page");
        }, 500);
        
        setError("");
        setSuccess("Account Created Successfully!");
    };

    return (
        <div className="main-container">
            <div className="left-panel">
                {/* <h1>Logo</h1> */}
                <Image
                    src="/blswhite_logo.png"
                    alt="BLS360Logo"
                    width={500}
                    height={500}
                />
            </div>
            <div className="right-panel">
                <div className="signup-card">
                <div className="text-center flex flex-col gap-2">
                <h1 className="header">IAM Secure</h1>
                <h2 className="heading">Sign Up to IAM Secure</h2>
                <p className="header_text">Enter your details to create your account</p>
                </div>
                {error && (
                    <div className="error-box">
                        <span className="error-text">{error}</span>
                        
                        <button
                        type="button"
                        onClick={() => setError("")}
                        className="error-close"
                        >
                            ✕
                        </button>
                    </div>
                )}
                {success && (
                    <div className="success-box">
                        <span className="success-text">
                            {success}
                        </span>
                        
                        <button
                        type="button"
                        onClick={() => setSuccess("")}
                        className="success-close"
                        >
                            ✕
                        </button>
                    </div>
                )}
            <form onSubmit={handleSubmit} className="form">
                <div>
                    <label className="email_label">Username or Email</label>
                    <input
                    className="email_input"
                    type="text"
                    name="email"
                    placeholder="your.email@example.com"
                    onChange={handleChange}
                    required
                />
                </div>
                <div>
                    <label className="pwd_label">Password</label>
                    <input
                        className="pwd_input text-lg font-semibold tracking-widest"
                        type="password"
                        name="password"
                        placeholder="........"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="cpwd_label">Confirm Password</label>
                    <input
                        className="cpwd_input text-lg tracking-widest font-semibold"
                        type="password"
                        name="confirmPassword"
                        placeholder="........"
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <button className="signup">Sign Up</button>
                
            </form>

                <div className="footer">
                    Already have an account?
                    <Link href="/login" className="login">Login</Link>
                </div>

        {/* Success popup
                {showPopup && (
                    <p className="text-green-600 mt-2 text-center">Account Created Successfully!!
                    </p>
                )} */}
            </div>
        </div>
    </div>     
    );
}

// "use client";
// import { useState, FormEvent } from "react";

// export default function Page() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();

//     console.log("Email:", email);
//     console.log("Password:", password);

//     alert("Account Created successfully!!");
// };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//             <div className="bg-white p-8 rounded-lg border border-gray-200 w-full max-w-[500px] shadow-md">
//                 {/* Header */}
//                 <div className="text-center flex flex-col gap-3">
//                     <span className="text-3xl font-bold text-blue-600">IAM Secure</span>
//                     <h2 className="text-2xl font-bold text-gray-900">Sign Up to IAM Secure</h2>
//                     <p className="text-gray-500 text-sm">Enter your details to create your account</p>
//                 </div>
//                 {/* Form */}
//                 <div className="w-full flex flex-col items-center gap-5 mt-6">
//                     <div className="w-full">
//                         <label className="block text-sm font-medium text-gray-900 mb-1">Username or Email</label>
//                         <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1     focus:ring-blue-500"
//                         type="text"
//                         name="email"
//                         placeholder="your.email@example.com"
//                         required
//                         />
//                     </div>
//                     <div className="w-full">
//                         <label className="block text-sm font-medium text-gray-900 mb-1">Password</label>
//                         <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1     focus:ring-blue-500"
//                         type="password"
//                         name="password"
//                         placeholder="........"
//                         required
//                         />
//                     </div>
//                     <div className="w-full">
//                         <label className="block text-sm font-medium text-gray-900 mb-1">Confirm Password</label>
//                         <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1     focus:ring-blue-500"
//                         type="password"
//                         name="cnf_password"
//                         placeholder="........"
//                         required
//                         />
//                     </div>
//                 </div>
//                 {/* Button */}
//                 <div className="mt-6">
//                     <button className="w-full bg-[#1d8df7] hover:bg-blue-600 text-white font-semibold py-2.5 rounded-md transition duration-200">Sign Up</button>
//                 </div>
//                 <div className="mt-6 text-center text-sm">
//                     <span className="text-gray-500 font-semibold">Already have an account?</span>
//                     <button className="text-blue-500 font-semibold hover:underline ml-2">Login</button>
//                 </div>
//             </div>
//         </div>
//     );
// }
