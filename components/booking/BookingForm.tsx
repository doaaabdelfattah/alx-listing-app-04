import CancellationPolicy from "./CancellationPolicy";
import { type } from "../../node_modules/@emnapi/runtime/dist/emnapi.iife.d";

const BookingForm = ({ onSubmitFunc, data, onChangeFunc, loading }) => (
  <div className="bg-white p-6 rounded-lg ">
    <h2 className="text-xl font-semibold">Contact Detail</h2>
    <form onSubmit={onSubmitFunc}>
      {/* Contact Information */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label>First Name</label>
          <input
            name="firstName"
            placeholder="First name"
            type="text"
            className="border rounded-sm p-2 w-full mt-2"
            onChange={onChangeFunc}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            name="lastName"
            placeholder="Last name"
            type="text"
            className="border rounded-sm p-2 w-full mt-2"
            onChange={onChangeFunc}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label>Email</label>
          <input
            name="email"
            placeholder="Email"
            type="email"
            className="border rounded-sm p-2 w-full mt-2"
            onChange={onChangeFunc}
          />
        </div>
        <div>
          <label>Phone Number</label>
          <input
            name="phoneNumber"
            placeholder="Phone number"
            type="text"
            className="border rounded-sm p-2 w-full mt-2"
            onChange={onChangeFunc}
          />
        </div>
      </div>

      {/* Payment Information */}
      <h2 className="text-xl font-semibold mt-6">Pay with</h2>
      <div className="mt-4">
        <label>Card Number</label>
        <input
          name="cardNumber"
          placeholder="Card number"
          type="text"
          className="border p-2 w-full mt-2"
          onChange={onChangeFunc}
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label>Expiration Date</label>
          <input
            name="expirationDate"
            onChange={onChangeFunc}
            placeholder="expiration date"
            type="text"
            className="border p-2 w-full mt-2"
          />
        </div>
        <div>
          <label>CVV</label>
          <input
            name="cvv"
            onChange={onChangeFunc}
            placeholder="cvv"
            type="text"
            className="border p-2 w-full mt-2"
          />
        </div>
      </div>

      {/* Billing Address */}
      <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
      <div className="mt-4">
        <label>Address</label>
        <input
          name="billingAddress"
          placeholder="billing address"
          type="text"
          className="border p-2 w-full mt-2"
          onChange={onChangeFunc}
        />
      </div>
      {/* <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label>City</label>
          <input
          name="billingCity"
            type="text"
            className="border p-2 w-full mt-2"
            onChange={onChangeFunc}
            value={data.billingCity}
          />
        </div>
        <div>
          <label>State</label>
          <input
          name="billingState"
            placeholder="state"
            type="text"
            className="border p-2 w-full mt-2"
            onChange={onChangeFunc}
            value={data.billingState}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label>Zip Code</label>
          <input
          name="billingZip"
            placeholder="Zip code"
            type="text"
            className="border p-2 w-full mt-2"
            onChange={onChangeFunc}
            value={data.billingZip}
          />
        </div>
        <div>
          <label>Country</label>
          <input
          name="billingCountry"
            placeholder="Country"
            type="text"
            className="border p-2 w-full mt-2"
            onChange={onChangeFunc}
            value={data.billingCountry}
          />
        </div>
      </div> */}
      <CancellationPolicy />

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="mt-10 bg-primary-green text-white py-2 px-4 rounded-md w-full"
      >
        {loading ? "Processing ..." : "Confirm & Pay"}
      </button>
    </form>
  </div>
);

export default BookingForm;
