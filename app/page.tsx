"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      
      {/* Logo */}
      <Image
        src="/vercel.svg"
        alt="logo"
        width={100}
        height={40}
        style={{ width: "auto", height: "auto" }}
      />

      <h1>Home Page</h1>
      <p>Welcome to IAM Application</p>

      {/* Navigate to Signup */}
      <Link href="/signup">
        <button style={{ marginTop: "20px" }}>
          Go to Signup
        </button>
      </Link>

    </div>
  );
}