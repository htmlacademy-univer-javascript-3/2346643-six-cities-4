import { CityString } from '../constant/consts';
import { OfferType } from '../constant/types';
import { cities } from './cities';

export const offers: OfferType[] = [
  {
    id: 34218,
    type: 'apartment',
    name: 'Modern Canal View Apartment in Amsterdam',
    description: 'Stylish, fully furnished apartment with canal view. Prime location. Perfect for urban living',
    price: 100,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 12
    },
    city: cities[CityString.PARIS],
    rating: 4.5,
    isPremium: false,
    preview: 'apartment-01.jpg',
    isFavorite: true,
    photos: ['room.jpg', 'apartment-01.jpg', 'apartment-02.jpg',
      'apartment-03.jpg', 'studio-01.jpg'],
    owner: {
      id: '1',
      name: 'John Doe',
      avatar: 'avatar-max.jpg',
      isPro: true,

    },
    bedrooms: 1,
    maxAdults: 2,
    amenities: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine'],
  },
  {
    id: 45984,
    type: 'hotel',
    name: 'Amsterdam Urban Hub Hotel',
    description: 'Central hotel with vibrant atmosphere, comfy beds, and social spaces. Ideal for budget-conscious travelers',
    price: 25,
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 12
    },
    city: cities[CityString.AMSTERDAM],
    rating: 2.5,
    isPremium: false,
    preview: 'apartment-02.jpg',
    isFavorite: false,
    photos: ['room.jpg', 'apartment-01.jpg', 'apartment-02.jpg',
      'apartment-03.jpg', 'studio-01.jpg'],
    owner: {
      id: '3',
      name: 'David Johnson',
      avatar: 'avatar-max.jpg',
      isPro: true
    },
    bedrooms: 1,
    maxAdults: 2,
    amenities: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine'],
  },
  {
    id: 48738,
    type: 'hotel',
    name: 'Regal Retreat: Luxe Hotel in Central London',
    description: 'Elegant accommodations, impeccable service, and prime location for exploring London\'s iconic landmarks.',
    price: 200,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 12
    },
    city: cities[CityString.AMSTERDAM],
    rating: 4,
    isPremium: true,
    preview: 'apartment-03.jpg',
    isFavorite: false,
    photos: ['room.jpg', 'apartment-01.jpg', 'apartment-02.jpg',
      'apartment-03.jpg', 'studio-01.jpg'],
    owner: {
      id: '2',
      name: 'Jane Smith',
      avatar: 'avatar-angelina.jpg',
      isPro: false
    },
    bedrooms: 1,
    maxAdults: 2,
    amenities: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine'],
  },
  {
    id: 30748,
    type: 'apartment',
    name: 'Charming London Flat: City Living at Its Finest',
    description: 'Cosy apartment in central London. Modern amenities, close to attractions, perfect for urban exploration',
    price: 123,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 12
    },
    city: cities[CityString.AMSTERDAM],
    rating: 3,
    isPremium: false,
    preview: 'studio-01.jpg',
    isFavorite: true,
    photos: ['room.jpg', 'apartment-01.jpg', 'apartment-02.jpg',
      'apartment-03.jpg', 'studio-01.jpg'],
    owner: {
      id: '4',
      name: 'Emily Brown',
      avatar: 'avatar-angelina.jpg',
      isPro: false
    },
    bedrooms: 1,
    maxAdults: 2,
    amenities: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine'],
  },
  {
    id: 34221,
    type: 'apartment',
    name: 'Stylish Loft in Cologne',
    description: 'Modern loft apartment in the heart of Cologne. Perfect for business trips or a weekend getaway.',
    price: 120,
    city: cities[CityString.COLOGNE],
    location: {
      latitude: 50.941357,
      longitude: 6.958307,
      zoom: 12,
    },
    rating: 4.6,
    isPremium: false,
    preview: 'apartment-03.jpg',
    isFavorite: true,
    photos: ['apartment-03.jpg', 'apartment-02.jpg', 'room.jpg'],
    owner: {
      id: '4',
      name: 'Bob Brown',
      avatar: 'avatar-bob.jpg',
      isPro: true,
    },
    bedrooms: 1,
    maxAdults: 2,
    amenities: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge'],
  },
  {
    id: 34222,
    type: 'apartment',
    name: 'Central Apartment in Cologne',
    description: 'Conveniently located apartment close to all major attractions. Perfect for tourists and business travelers.',
    price: 130,
    city: cities[CityString.COLOGNE],
    location: {
      latitude: 50.9333,
      longitude: 6.95,
      zoom: 12,
    },
    rating: 4.5,
    isPremium: true,
    preview: 'apartment-02.jpg',
    isFavorite: false,
    photos: ['apartment-01.jpg', 'apartment-02.jpg', 'apartment-03.jpg'],
    owner: {
      id: '5',
      name: 'Charlie Davis',
      avatar: 'avatar-charlie.jpg',
      isPro: true,
    },
    bedrooms: 2,
    maxAdults: 3,
    amenities: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washer'],
  },
  {
    id: 34223,
    type: 'apartment',
    name: 'Charming Studio in Paris',
    description: 'Beautiful studio apartment located in the heart of Paris. Perfect for solo travelers or couples.',
    price: 110,
    city: cities[CityString.PARIS],
    location: {
      latitude: 48.8566,
      longitude: 2.3522,
      zoom: 12,
    },
    rating: 4.9,
    isPremium: true,
    preview: 'studio-01.jpg',
    isFavorite: true,
    photos: ['studio-01.jpg', 'studio-02.jpg', 'studio-03.jpg'],
    owner: {
      id: '6',
      name: 'Daniel Evans',
      avatar: 'avatar-daniel.jpg',
      isPro: false,
    },
    bedrooms: 1,
    maxAdults: 2,
    amenities: ['Wi-Fi', 'Heating', 'Kitchen'],
  },
  {
    id: 34224,
    type: 'apartment',
    name: 'Elegant Apartment in Paris',
    description: 'Elegant and spacious apartment with a beautiful view. Close to major attractions and public transport.',
    price: 160,
    city: cities[CityString.PARIS],
    location: {
      latitude: 48.864716,
      longitude: 2.349014,
      zoom: 12,
    },
    rating: 4.7,
    isPremium: true,
    preview: 'apartment-03.jpg',
    isFavorite: false,
    photos: ['apartment-01.jpg', 'apartment-02.jpg', 'apartment-03.jpg', 'apartment-04.jpg'],
    owner: {
      id: '7',
      name: 'Eve Foster',
      avatar: 'avatar-eve.jpg',
      isPro: true,
    },
    bedrooms: 2,
    maxAdults: 4,
    amenities: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Balcony'],
  },
  {
    id: 34225,
    type: 'house',
    name: 'Modern Home in Dusseldorf',
    description: 'Modern and spacious home located in a quiet neighborhood. Ideal for families and large groups.',
    price: 170,
    city: cities[CityString.DUSSELDORF],
    location: {
      latitude: 51.233334,
      longitude: 6.783333,
      zoom: 12,
    },
    rating: 4.8,
    isPremium: true,
    preview: 'apartment-03.jpg',
    isFavorite: true,
    photos: ['apartment-01.jpg', 'apartment-02.jpg', 'apartment-03.jpg', 'apartment-04.jpg'],
    owner: {
      id: '8',
      name: 'Frank Green',
      avatar: 'avatar-frank.jpg',
      isPro: true,
    },
    bedrooms: 3,
    maxAdults: 6,
    amenities: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Garden', 'Parking'],
  }
];
