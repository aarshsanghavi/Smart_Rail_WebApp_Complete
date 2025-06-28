import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear local storage (tokens or other info)
    localStorage.removeItem('token');
    
    // Clear cookies if necessary
    document.cookie = "your-cookie-name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // Redirect to "See you again" page for a short period
    window.location.reload();

    const timeout = setTimeout(() => {
      navigate("/");  // Redirect back to home page after 3 seconds
    }, 3000); // 3-second delay

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="logout-container">
      <h2>See You Again!</h2>
      <p>You have been logged out successfully. We hope to see you back soon.</p>
    </div>
  );
}

export default Logout;
