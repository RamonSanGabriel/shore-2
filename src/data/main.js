import facade from '../images/facade.jpg';
import map from '../images/map.jpg';

export const main = {
  id: 1,
  header: 'Unit 1403 Tower 1',
  subHeader: 'Property owner: KTSG',
  title: 'Facade',
  description: 'Main page',
  icon: 'home',
  route: '/',
  content:
    //prettier-ignore
    "Have you ever dreamt of living on your own private island in the middle of the open sea? Well, that dream has become a reality at SMDC Shore 2 Residences at Mall of Asia Complex in Pasay City. Imagine strolling through pathways lined with lush greenery and shrubbery, gazing at the mesmerizing glassy cobalt waters, and enjoying breathtaking views that make you forget you are still in the bustling heart of Metro Manila. And the best part? You still have all the conveniences you desire, all while being conveniently located within the SM Mall of Asia Complex.",
  image: facade,
};

export const features = {
  id: 1,
  title: 'Features',
  description: 'Features of the project',
  propertySize: '25,479 sq.m',
  buildings: '3',
};

export const storeys = [
  {
    id: 1,
    tower: 'Tower 1',
    floors: '18 floors',
  },
  {
    id: 2,
    tower: 'Tower 2',
    floors: '18 floors',
  },
  {
    id: 3,
    tower: 'Tower 3',
    floors: '17 floors',
  },
];

export const vicinityMap = {
  id: 1,
  titleMap: 'Location',
  descriptionMap: 'Map',
  iconMap: 'map',
  routeMap: '/map',
  contentMap: 'Vicinity Map',
  imageMap: map,
  address:
    'Seaside Boulevard and Sunrise Drive, Mall of Asia Complex, Pasay City, Philippines',
};

export const facilities = {
  title: 'Building Facilities & Amenities',
  a: '10 Elevators per tower',
  b: 'Fire exits',
  c: 'Commercial area at the lobby',
  d: 'Mail room',
  e: 'Garbage disposal area on each floor',
  f: 'Automatic fire detection and alarm system',
  g: 'Stand by generator set for common areas',
};

export const services = {
  title: 'Services',
  a: '24/7 Security',
  b: 'CCTV system on selected areas',
  c: 'Front desk area',
  d: 'Property management services',
};

export const amenities = {
  title: 'Amenities',
  a: 'Swimming pool',
  b: 'Fitness center',
  c: "Children's play area",
  d: 'Function room',
  e: 'Lounge',
};
