"use client";

import { useEffect, useState } from "react";

const CookiesAndThankYou = () => {
  const [showCookies, setShowCookies] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    const cookieTimer = setTimeout(() => {
      setShowCookies(true);
    }, 1000); // Show cookies after 1 second

    const thankYouTimer = setTimeout(() => {
      setShowThankYou(true);
    }, 2000); // Show thank you after 2 seconds

    return () => {
      clearTimeout(cookieTimer);
      clearTimeout(thankYouTimer);
    };
  }, []);

  return (
    <>
      {/* Cookies Notification */}
      {showCookies && (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 bg-white text-black p-4 rounded shadow-lg z-50 flex flex-col md:flex-row items-center justify-between gap-4 max-w-[400px] border">
          <p className="text-sm">
            This website uses cookies to ensure you get the best experience.
          </p>
          <button
            onClick={() => setShowCookies(false)}
            className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition min-w-[80px] whitespace-nowrap"
          >
            Got it
          </button>
        </div>
      )}

      {/* Thank You Popup */}
      {showThankYou && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-green-700 text-white p-5 rounded shadow-lg z-50 max-w-[90%] w-[320px] text-center border border-green-800 flex items-center justify-between gap-4">
          <p className="text-sm font-medium">Thank you for visiting!</p>
          <button
            onClick={() => setShowThankYou(false)}
            className="bg-white text-green-800 px-4 py-1.5 rounded hover:bg-gray-100 transition text-sm font-semibold min-w-[80px] whitespace-nowrap"
          >
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default CookiesAndThankYou;
