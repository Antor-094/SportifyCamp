import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./PaymentPage/CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_key);

const Payment = () => {
  const { user } = useAuth();
  const { id } = useParams();

  const { data: selectedCourses = [] } = useQuery({
    queryKey: ["selectedCourses"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/selectedcourse?email=${user?.email}`);
      return res.json();
    },
  });
console.log(selectedCourses)
  const paymentCourse = selectedCourses.find((item) => item.courseId === id);
  const price = paymentCourse ? paymentCourse.price : 0;

  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm paymentCourse={paymentCourse} price={price} />
      </Elements>
    </div>
  );
};

export default Payment;
