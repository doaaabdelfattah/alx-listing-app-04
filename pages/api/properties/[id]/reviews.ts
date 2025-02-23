import { NextApiRequest, NextApiResponse } from "next";
import { PROPERTYLISTINGSAMPLE } from "../../../../constants";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  // Ensure ID is always a string
  const propertyId = Array.isArray(id) ? id[0] : id;

  // Find the property with the given ID
  const property = PROPERTYLISTINGSAMPLE.find((p) => p.id === propertyId);

  if (!property) {
    return res.status(404).json({ message: "Property not found" });
  }

  return res.status(200).json(property.reviews || []);
}
