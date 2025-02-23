import type { NextApiRequest, NextApiResponse } from "next";
import { PROPERTYLISTINGSAMPLE } from "../../../constants";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Return all properties if no ID is provided
  if (req.method === "GET") {
    const { id } = req.query;
    const property = PROPERTYLISTINGSAMPLE.find((item) => item.id === id);

    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    return res.status(200).json(property);
  }
  return res.status(405).json({ message: "Method Not allowed" });
}
