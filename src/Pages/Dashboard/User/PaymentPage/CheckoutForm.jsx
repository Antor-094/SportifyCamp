// import React from 'react';

// import { CardElement } from "@stripe/react-stripe-js";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import './CheckoutForm.css'
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../../../Hooks/useAuth";
// import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
const CheckoutForm = ({paymentCourse,price}) => {
    const stripe = useStripe();
    // const[axiosSecure]=useAxiosSecure()
const elements = useElements();
const {user}= useAuth()
const [clientSecret, setClientSecret] = useState("");
const [processing, setProcessing] = useState(false);
const [transactionId, setTransactionId] = useState("")
const [cardError, setCardError] = useState("");
    // console.log(paymentCourse)
    useEffect(() => {
        if (price > 0) {
          axios
            .post("https://summer-camp-learning-school-server-olive.vercel.app/create-payment-intent", { price })
            .then((res) => {
              // console.log(res.data.clientSecret);
              setClientSecret(res.data.clientSecret);
            });
        }
      }, [price]);

      const handleSubmit = async (event) => {
        event.preventDefault();
        const card = elements.getElement(CardElement);
        if (card === null) {
          return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
          type: "card",
          card,
        });
    
        if (error) {
          console.log("error", error);
          setCardError(error.message);
        } else {
          setCardError("");
          console.log("payment method", paymentMethod);
        }
    
        setProcessing(true);
    
        const { paymentIntent, error: confirmError } =
          await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
              card: card,
              billing_details: {
                email: user?.email || "unknown",
                name: user?.displayName || "anonymous",
              },
            },
          });
    
        if (confirmError) {
          console.log(confirmError);
        }
        // console.log(paymentIntent);
    
        setProcessing(false);
    
        if (paymentIntent.status === "succeeded") {
          setTransactionId(paymentIntent.id);
          const payment = {
            email: user?.email,
            transaction_Id: paymentIntent.id,
            price,
            item: paymentCourse?._id,
            courseName: paymentCourse?.courseName,
            courseId: paymentCourse?.courseId,
            courseImage:paymentCourse?.courseImage,
            instructorName:paymentCourse?.instructorName,
            enrollStudents:paymentCourse?.enrollStudents,
            date: new Date(),
          };
          axios.post("https://summer-camp-learning-school-server-olive.vercel.app/payments",payment)
          .then(res=>{
            if (res.data.insertedId) {
              alert('Payment Successful')
            }
          })
        }
      };
    return (
        <div>
      <form className="w-[500px]" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn .button btn-primary btn-sm mt-4"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
      {transactionId && (
        <p className="text-green-500">
          Transaction complete with transactionId: {transactionId}
        </p>
      )}
    </div>

    );
};

export default CheckoutForm;