import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const pageLinks = [
  { id: 1, href: '#home', info: 'home' },
  { id: 2, href: '#about', info: 'about' },
  { id: 3, href: '#services', info: 'services' },
  { id: 4, href: '#tours', info: 'tours' },
];

export const socialLinks = [
  { id: 1, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 1, href: 'https://www.linkedin.com', icon: 'fab fa-linkedin' },
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    info: 'We offer competitive prices and exclusive deals on unique and authentic experiences.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    info: 'Our App offers endless hiking opportunities, taking travelers to remote and breathtaking locations that are not typically accessible through traditional tourism.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    info: 'Our App provides travelers with amazing comfort during their trips by offering personalized itineraries, local guides, and customized experiences tailored to their preferences and needs.',
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: 'august 26th, 2022',
    title: 'Tibet Adventure',
    info: `Tibet's breathtaking landscapes, rich culture, and spiritual heritage make it a destination for adventure-seekers from around the world. Exploring its remote monasteries, trekking through high-altitude passes, and interacting with the warm and friendly locals are just a few of the unforgettable experiences one can have on a Tibet adventure.`,
    location: 'china',
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: 'september 15th, 2022',
    title: 'best of java',
    info: `The island of Java boasts a plethora of breathtaking natural wonders, from the active volcano of Mount Bromo to the turquoise waters of the Kawah Ijen crater lake. Its vibrant cities are also a draw, with Yogyakarta offering a glimpse into traditional Javanese culture and Jakarta serving as a hub of modern commerce and entertainment.`,
    location: 'indonesia',
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: 'october 1th, 2022',
    title: 'explore hong kong',
    info: `A vibrant city that seamlessly blends the modern and the traditional, offers a plethora of experiences ranging from dim sum brunches to breathtaking skyline views from Victoria Peak. A visit to Hong Kong promises to be an unforgettable journey of discovery and excitement.`,
    location: 'hongkong',
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: 'december 5th, 2022',
    title: 'Kenya Highlights',
    info: `Kenya is a land of breathtaking natural beauty and diverse wildlife. From the rolling savannas of the Maasai Mara to the snow-capped peaks of Mount Kenya, there's no shortage of stunning landscapes and unforgettable experiences to be had in this vibrant African country.`,
    location: 'kenya',
    duration: 20,
    cost: 3300,
  },
];
