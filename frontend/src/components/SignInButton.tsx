import React from "react";
import axios from "axios";

const SignInButton: React.FC = () => {
  const url = process.env.NEXT_PUBLIC_API_BASE_URL + "/auth/github";
  // const headers = { "Content-Type": "application/json" };

  const handleSignIn = async () => {
    try {
      // CSRFトークンを取得
      const csrfToken = document
        .querySelector('meta[name="csrf-token"]')
        ?.getAttribute("content");
      console.log(csrfToken);

      const headers = {
        "Content-Type": "application/json",
        "X-CSRF-Token": csrfToken || "", // CSRFトークンをヘッダーに追加
      };
      const response = await axios.post(url, {}, { headers });

      if (response.status === 200 && response.data.redirectUrl) {
        window.location.href = response.data.redirectUrl;
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  return (
    <button
      onClick={handleSignIn}
      className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
    >
      Sign in with GitHub
    </button>
  );
};

export default SignInButton;
