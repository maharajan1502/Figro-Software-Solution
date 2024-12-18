import React from 'react'

const Reachus = () => {
    return (
        <div className="popup-overlay" id="popupOverlay" style={{ display: 'flex' }}>
            <div className="popup-form">
                <span className="close-btn" onClick={closePopup}>&times;</span>
                <h2>Contact Form</h2>
                <form id="contactForm" onSubmit={handleFormSubmit}>
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
