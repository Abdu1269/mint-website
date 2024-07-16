export interface Organization {
  id: string;
  name: string;
  email: string;
  phone: string;
  tin: string;
  address: {
    country: string;
    city: string;
    subcity: string;
    woreda: string;
    kebele: string;
  };
  note: string;
  logo: null;
  website: string;
}
