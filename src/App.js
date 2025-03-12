import React from 'react';
import Game from './components/game';
import './index.css';

export default function App() {
  return (
    <div className="App">
      <h1 className="app-title">Maviya Ali | 24252270</h1>
      <Game />
      <h1 className="intro">Maviya Ali | 24252270</h1>
      <form action="/my-handling-form-page" method="post" id="contactForm">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="user_name" required />
        </div>
        
        <div>
          <label htmlFor="mail">Email:</label>
          <input type="email" id="mail" name="user_email" required />
        </div>
        
        <div>
          <label htmlFor="msg">Message:</label>
          <textarea id="msg" name="user_message" required></textarea>
        </div>
        
        <div>
          <label htmlFor="phone">Phone:</label>
          <input 
            type="tel" 
            id="phone" 
            name="user_phone" 
            pattern="^08[35679][0-9]{7}$" 
            placeholder="Enter a valid Irish phone number" 
            required 
          />
        </div>
        
        <div>
          <label htmlFor="subject">Concern:</label>
          <select id="subject" name="user_subject" required>
            <option value="Account Help">Account Help</option>
            <option value="Refund Request">Refund Request</option>
            <option value="Order Status">Order Status</option>
          </select>
        </div>

        {/* New Checkbox Field */}
        <div class="checkbox-container">
          <input type="checkbox" id="terms"></input>
          <label for="terms">I agree to the terms and conditions</label>
        </div>


        <div className="button">
          <button type="submit">Send your message</button>
        </div>
      </form>
    </div>
  );
}
