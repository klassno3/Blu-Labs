# Blu Labs Website

Welcome to the Blu Labs website! This is a React-based website that showcases information about our company, services, portfolio, and allows users to contact us through a contact form. It also includes a newsletter sign-up feature in the footer.

## Dependencies

The following dependencies are used in this project:

- [React](https://reactjs.org): JavaScript library for building user interfaces.
- [react-scroll](https://www.npmjs.com/package/react-scroll): Scroll navigation library for React.
- [Formik](https://formik.org): Form validation library for React.
- [EmailJS](https://www.emailjs.com): Service for sending emails from JavaScript.
- [lottie-react](https://www.npmjs.com/package/lottie-react): React wrapper for Lottie, a library for rendering After Effects animations.

- [react-multi-carousel](https://www.npmjs.com/package/react-multi-carousel): Carousel component for React.
- Framer Motion: Animation library for React.

## Features

### Navigation

The website includes a scroll navigation feature using the `react-scroll` library. It allows users to navigate to different sections of the website, such as Home, About Us, Contact Us, Our Portfolio, and Services, smoothly by scrolling.

### Contact Form

The Contact Us section utilizes the `Formik` library for form validation. Users can submit their messages by filling out the contact form, which includes fields such as name, email, and message. The form is validated before submission to ensure all required fields are filled and the email format is correct.

### Newsletter Sign-up

The footer includes a newsletter sign-up feature where users can enter their email address to subscribe to our newsletter. The newsletter subscription is handled through the form validation using `Formik` similar to the contact form.

### EmailJS Integration

When a user submits the contact form, the message is sent to the company's email address using the `EmailJS` service. This allows us to receive and respond to user inquiries directly through our email without revealing our email address to potential spammers.

### Lottie Animation

The hero section of the website includes an animated SVG using the `lottie-react` library. Lottie allows us to render After Effects animations in our React application, providing an engaging and visually appealing experience for users.

### Testimonial Carousel

The website utilizes the `react-multi-carousel` component to display a testimonial carousel. This component allows us to showcase multiple testimonials in a responsive and interactive carousel format, enhancing the user experience and highlighting positive feedback from our clients.

### Animation and Motion

The website incorporates animations and motion effects using the Framer Motion library. Framer Motion provides a simple and powerful way to animate React components, bringing them to life with stunning transitions, gestures, and visual effects.