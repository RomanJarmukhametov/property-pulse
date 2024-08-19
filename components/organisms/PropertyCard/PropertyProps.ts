export interface LocationProps {
  street: string;
  city: string;
  state: string;
  zipcode: string;
}

export interface RatesProps {
  weekly?: number;
  monthly?: number;
  nightly?: number;
}

export interface SellerInfoProps {
  name: string;
  email: string;
  phone: string;
}

export interface PropertyProps {
  _id: string;
  owner: string;
  name: string;
  type: string;
  description: string;
  location: LocationProps;
  beds: number;
  baths: number;
  square_feet: number;
  amenities: string[];
  rates: RatesProps;
  seller_info: SellerInfoProps;
  images: string[];
  is_featured: boolean;
  createdAt: string;
  updatedAt: string;
}
