import facade from '../images/facade.jpg';
import map from '../images/map.jpg';

export const main = {
  id: 1,
  title: 'Facade',
  description: 'Main page',
  icon: 'home',
  route: '/',
  content:
    //prettier-ignore
    "Have you ever dreamt of living on your own private island in the middle of the open sea? Well, that dream has become a reality at SMDC Shore 2 Residences at Mall of Asia Complex in Pasay City. Imagine strolling through pathways lined with lush greenery and shrubbery, gazing at the mesmerizing glassy cobalt waters, and enjoying breathtaking views that make you forget you are still in the bustling heart of Metro Manila. And the best part? You still have all the conveniences you desire, all while being conveniently located within the SM Mall of Asia Complex.",
  image: facade,
};

export const vicinityMap = {
  id: 2,
  titleMap: 'Location',
  descriptionMap: 'Map',
  iconMap: 'map',
  routeMap: '/map',
  contentMap: 'Vicinity Map',
  imageMap: map,
};
