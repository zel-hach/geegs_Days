import React from 'react';
import './../Style/Exercise.css'

const Exercise = () => {

    const styleHeader = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial",
        };
    return (
        <div>
        <h1 style={styleHeader}>Welcome to My Page</h1>

      <p className='para'>This is a simple paragraph inside the component.</p>

      <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
        Visit Google
      </a>

      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <button type="submit">Submit</button>
      </form>

      <img
        src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
        alt="Example"
        width="150"
      />

      <ul>
        <li>Item One</li>
        <li>Item Two</li>
        <li>Item Three</li>
      </ul>
        </div>
    );
}

export default Exercise;
