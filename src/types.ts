export interface Temple {
  id: string;
  name: string;
  location: {
    state: string;
    city: string;
  };
  deity: string;
  history: string;
  timings: string;
  rituals: string[];
  festivals: string[];
  dressCode: string;
  nearby: {
    accommodation: string;
    transport: string;
  };
  image: string;
}

export interface SearchFilters {
  query: string;
  state: string;
  city: string;
  deity: string;
}
