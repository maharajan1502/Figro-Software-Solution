import React, { useState } from 'react';

const Reachus = () => {
    const [isOpen, setIsOpen] = useState(true); // Controls the visibility of the popup

    const closePopup = () => {
        setIsOpen(false);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted successfully!");
        closePopup();
    };

    if (!isOpen) return null; // Hide the popup when isOpen is false

    return (
        <div className="popup-overlay" style={{ display: 'flex' }}>
            <div className="popup-form">
                <span className="close-btn" onClick={closePopup}>&times;</span>
                <h2>Contact Form</h2>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required /><br />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required /><br />

                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" required /><br />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Reachus;
