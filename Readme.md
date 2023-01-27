First, you will need to install the react and tailwindcss packages. You can do this by running the following command:

Copy code
npm install react tailwindcss
Next, create a new file called Button.js and add the following code:

Copy code
import React from 'react';

const Button = ({ children, className, ...props }) => (
  <button className={`px-4 py-2 font-bold text-white bg-blue-500 rounded-full ${className}`} {...props}>
    {children}
  </button>
);

export default Button;
This component is a simple button that takes any additional class names passed to it and applies them, in addition to some default styles from Tailwind CSS. The px-4 py-2 class adds padding to the button, the font-bold class makes the font bold, the text-white class sets the text color to white, the bg-blue-500 class sets the background color to a blue shade, and the rounded-full class rounds the corners of the button.

You can then use this button component in your app like this:

Copy code
import Button from './Button';

function App() {
  return (
    <Button onClick={() => alert('Hello!')}>Click me!</Button>
  );
}
This will render a blue button with rounded corners, white text, and padding. When clicked, it will display an alert saying "Hello!".

I hope this helps! Let me know if you have any questions.