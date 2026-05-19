"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck​, Key, Database, Shield } from "lucide-react";
import "./home.css";
import Nav from "../navbar/nav"

const productIcons = {
    "SailPoint Identity Security Cloud": ​ShieldCheck,
    "SailPoint Identity IQ": Key,
    "Okta Identity Cloud": Database,
    "Ping Identity Platform": Shield,
};

const products = [
    {
        name: "SailPoint Identity Security Cloud",
        image: "sailpoint_logo.svg",
        desc: "Comprehensive cloud-based identity governance, access management, and automated provisioning solution.",
        status: "Available",
        available: true,
    },
    {
        name: "SailPoint Identity IQ",
        image: "sailpoint_logo.svg",
        desc: "Manage identities and access to cloud applications, on-premises resources, and external partners.",
        status: "Coming Soon",
        available: false,
    },
    {
        name: "Okta Identity Cloud",
        image: "okta_logo.svg",
        desc: "Securely connect people to technology, orchestrate authentication, and authorize access.",
        status: "Coming Soon",
        available: false,
    },
    {
        name: "Ping Identity Platform",
        image: "ping_logo.png",
        desc: "Centralized identity and access management for enterprise users and customers.",
        status: "Unavailable",
        available: false,
    },
];

    export default function Home() {
        const router = useRouter();

    return (
        <>
        <Nav/>
        <div className="container">
            <div className="product-selection-header">
                <h1 className="title">IAM Products</h1>
                <p className="subtitle">
                    Choose an Identity and Access Management (IAM) product to begin managing your organization's digital identities.
                </p>
            </div>
        
        <div className="grid-container">
            {products.map((product, index) => {
                return (
                <div
                key={index}
                className={`card ${
                    product.available ? "card-active" : "card-disabled"
                }`}
            >
            {/* FIXED ICON */}
            <div className="icon">
                <img src={product.image} 
                alt={product.name} className="product-image"
                />
                <h2 className="card-title">{product.name}
                </h2>
            </div>

            <div className="card-content">
                <p className="card-desc">{product.desc}</p>
                <p className="status">  
                    Status:
                    <span
                    className={
                        product.available
                        ? "status-badge-active"
                        : "status-badge-disabled"
                    }
                >
                    {product.status}
                </span>

                </p>
                <button
                onClick={() =>
                    product.available &&
                    router.push("/Authentication")
                }
                disabled={!product.available}
                className={`btn ${
                    product.available ? "btn-active" : "btn-disabled"
                }`}
            >
                {product.available ? "Select Product" : "Not Available"}
            </button>
            </div>
            </div>
            );
        })}
    </div>
    </div>
    </>
    );
}

{/* <div className="grid-container">
            {products.map((product, index) => {
                return (
                <div
                key={index}
                className={`card ${
                    product.available ? "card-active" : "card-disabled"
                }`}
                >
                {/* PRODUCT IMAGE */}
                {/* <div className="icon">
                    <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"/>
                </div>
                <h2 className="card-title">{product.name}</h2>
                <p className="card-desc">{product.desc}</p>
                <p className="status">Status:
                    <span className={product.available
                    ? "status-badge-active"
                    : "status-badge-disabled"
                }
                >
                    {product.status}
                    </span>
                </p>
                <button
                onClick={() =>
                    product.available &&
                    router.push(`/product/${index}`)
                }
                disabled={!product.available}
                className={`btn ${
                    product.available ? "btn-active" : "btn-disabled"
                }`}
                >
                    {product.available ? "Select Product" : "Not Available"}
                </button> */} 