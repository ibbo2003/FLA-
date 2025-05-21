import React from 'react';

export default function Contact() {
  return (
    <div className=" container " style={{ minHeight: '100%' }}>
      <form className="w-100" >
        <h1 className="mb-4 text-center">Contact Us</h1>

        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input type="text" className="form-control" placeholder="Your name" />
        </div>

        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input type="email" className="form-control" placeholder="Your email" />
        </div>

        <div className="mb-3">
          <label className="form-label">Message:</label>
          <textarea className="form-control" rows={4} placeholder="Your message"></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </div>
  );
}
