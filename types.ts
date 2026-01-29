
export interface EventDetails {
  name: string;
  fullName: string;
  date: string;
  ceremony: {
    place: string;
    location: string;
    time: string;
    mapLink: string;
  };
  celebration: {
    place: string;
    location: string;
    time: string;
    mapLink: string;
  };
}
