import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    cardNumber,
    expirationDate,
    cvv,
    billingAddress,
  } = req.body;

  // Simple Validation
  if (
    !firstName ||
    !lastName ||
    !email ||
    !phoneNumber ||
    !cardNumber ||
    !expirationDate ||
    !cvv ||
    !billingAddress
  ) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // Simulate saving booking to a database
    const newBooking = {
      id: Date.now(), // Example unique ID
      firstName,
      lastName,
      email,
      phoneNumber,
      cardNumber: `**** **** **** ${cardNumber.slice(-4)}`, // Mask card details
      expirationDate,
      cvv: "***", // Mask CVV for security
      billingAddress,
      createdAt: new Date(),
    };

    // Here, you would normally save to a database instead of just returning it.
    return res
      .status(201)
      .json({ message: "Booking confirmed!", booking: newBooking });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong. Please try again." });
  }
}
