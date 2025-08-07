"use client";

import { useEffect, useState } from "react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-lg">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
        </p>
        <div className="flex gap-2">
          <button
            onClick={handleAccept}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded text-sm"
          >
            Accept Cookies
          </button>
          <button
            onClick={handleDecline}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-sm"
          >
            Decline Cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;

