import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import useAuth from '../../../../Hooks/useAuth';

const PaymentPage = ({ courses, selectedCourses }) => {
  const stripe = useStripe();
  const elements = useElements();
const{user}=useAuth()
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission or show loading state
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Create a payment method using the card element and handle the payment
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      // Send the paymentMethod.id to your server to complete the payment
      // You can make an API call to your server endpoint and pass the payment method id
      // along with any other relevant information
      
      const selectedCourse = selectedCourses.find(course => course.courseId === courseId);
      const courseId = selectedCourse ? selectedCourse.courseId : null;
      const course = courses.find(course => course._id === courseId);
      const courseName = course ? course.courseName : null;
      const userId = user?.id;
      
      // Make an API call to save the payment details in the database
      await fetch('http://localhost:5000/savePayment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          email: user?.email,
          courseName,
        }),
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ width: '100%' }}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                fontWeight: 'normal',
                fontFamily: 'Arial, sans-serif',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
            },
          }}
        />
      </div>
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default PaymentPage;
