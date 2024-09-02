import { Types } from 'mongoose';

interface LocationProps {
  street?: string;
  city?: string;
  state?: string;
  zipcode?: string;
}

interface RatesProps {
  weekly?: number;
  monthly?: number;
  nightly?: number;
}

interface SellerInfoProps {
  name?: string;
  email?: string;
  phone?: string;
}

export interface PropertyProps {
  _id: Types.ObjectId;
  owner: Types.ObjectId;
  name: string;
  type: string;
  description?: string;
  location?: LocationProps;
  beds: number;
  baths: number;
  square_feet: number;
  amenities?: string[];
  rates?: RatesProps;
  seller_info?: SellerInfoProps;
  images?: string[];
  is_featured?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
