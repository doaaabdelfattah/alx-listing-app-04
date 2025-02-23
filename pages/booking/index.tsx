import BookingForm from "../../components/booking/BookingForm";
import OrderSummary from "../../components/booking/OrderSummary";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import FormData from "../../node_modules/axios/lib/platform/node/classes/FormData";

export default function BookingPage() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("/api/bookings", data);
      alert("Booking confirmed!");
    } catch (error) {
      setError(error.response?.data?.message || "Failed to submit booking.");
    } finally {
      setLoading(false);
    }
  };

  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    price: 7500,
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
  };

  return (
    <>
      <div className="bg-gray-50 h-[70px] ">
        <div className="container mx-auto relative p-6">
          <Link
            href="/"
            className="text-lg container font-semibold text-primary-green after:w-fit underline underline-offset-8"
          >
            &larr; Booking
          </Link>
        </div>
      </div>
      <div className="container mx-auto p-6">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          <BookingForm
            data={data}
            onChangeFunc={handleChange}
            onSubmitFunc={handleSubmit}
            loading={loading}
          />
          <OrderSummary bookingDetails={bookingDetails} />
        </div>
      </div>
    </>
  );
}
