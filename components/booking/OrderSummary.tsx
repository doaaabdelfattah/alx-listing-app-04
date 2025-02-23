import Image from "next/image";

type BookingDetails = {
  propertyName: string;
  startDate: string;
  totalNights: number;
  bookingFee: number;
  price: number;
};

const OrderSummary: React.FC<{ bookingDetails: BookingDetails }> = ({
  bookingDetails,
}) => (
  <div className="bg-white p-6 shadow-sm max-h-fit rounded-lg font-quicksand">
    <h2 className="text-xl font-semibold">Review Order Details</h2>
    <div className="flex flex-col items-start p-3">
      <Image
        src="/assets/images/image 11.png"
        alt="Property"
        className="w-full object-cover rounded-md"
        width={100}
        height={100}
      />
      <div className="mt-3">
        <h3 className="text-lg font-semibold">{bookingDetails.propertyName}</h3>
        <p className="text-sm text-gray-500">4.76 (345 reviews)</p>
        <p className="text-sm text-gray-500">
          {bookingDetails.startDate} • {bookingDetails.totalNights} Nights
        </p>
      </div>
    </div>

    {/* Price Breakdown */}
    <div className="mt-6">
      <div className="flex justify-between">
        <p>Booking Fee</p>
        <p>${bookingDetails.bookingFee}</p>
      </div>
      <div className="flex justify-between mt-2">
        <p>Subtotal</p>
        <p>${bookingDetails.price}</p>
      </div>
      <div className="flex justify-between mt-2 font-semibold">
        <p>Grand Total</p>
        <p>${bookingDetails.bookingFee + bookingDetails.price}</p>
      </div>
    </div>
  </div>
);

export default OrderSummary;
