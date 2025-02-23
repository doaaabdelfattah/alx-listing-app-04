import { PROPERTYLISTINGSAMPLE } from "../../constants";
import { useRouter } from "next/router";
import PropertyDetail from "../../components/property/PropertyDetail";

import BookingSection from "../../components/property/BookingSection";
import ReviewSection from "../../components/property/ReviewSection";
import { useEffect, useState } from "react";
import axios from "axios";
export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) return;
      try {
        const response = await axios.get(`/api/properties/${id}`);
        setProperty(response.data);
      } catch (error) {
        console.log("Error fetching property details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProperty();
  }, [id]);

  // const property = PROPERTYLISTINGSAMPLE.find((item) => item.id === id);
  if (loading) {
    return <p>Loading ... </p>;
  }
  if (!property && !loading) return <p>Property not found</p>;

  return (
    <div className="container mx-auto p-6">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="lg:col-span-2">
          <PropertyDetail property={property} />
          <ReviewSection propertyId={Array.isArray(id) ? id[0] : id} />
        </div>

        {/* Right Section */}
        <div className="lg:col-span-1">
          <BookingSection price={property.price} />
        </div>
      </div>
    </div>
  );
}
