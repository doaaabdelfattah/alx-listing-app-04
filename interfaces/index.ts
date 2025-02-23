// Interface for CardProps
export interface CardProps {
  id: string;
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: Array<string>;
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount?: string;
}

// Interface for ButtonProps
export interface ButtonProps {
  label: string;
  onClick: () => void; // Click handler is required
  disabled?: boolean; // Optional disabled state
  type?: "button" | "submit" | "reset"; // Optional button type
  className?: string; // Optional custom className
}

// Interface dor structure of property
export interface PropertyProps {
  id: string;
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: Array<string>;
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
  reviews: Array<{
    avatar: string;
    name: string;
    rating: number;
    comment: string;
  }>;
}
