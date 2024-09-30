import React from 'react';
import { motion } from 'framer-motion'; // For animations

// Import images
import FourSeasonsImage from './expimg/FourSeason.jpg';
import HyattRegencyImage from './expimg/Hyatt.jpg';
import RicksCafeImage from './expimg/Ricks.jpg';
import LaSqalaImage from './expimg/Sqala.jpg';
import LeCabestanImage from './expimg/Cabestan.jpg';
import JardinMajorelleImage from './expimg/Majorel.jpg';
import KoutoubiaMosqueImage from './expimg/KoutoubiaKesh.jpeg';
import PalaisBahiaImage from './expimg/BahiaPalaceKesh.jpg';
import HassanTowerImage from './expimg/HassanTower.jpg';
import KasbahUdayasImage from './expimg/kasbaUdaya.jpg';
import MausoleumMohammedVImage from './expimg/MausoleumMohammedV.jpg';
import ChellahImage from './expimg/ChellahRabat.jpg';
import CapSpartelImage from './expimg/CapSpartel.jpg';
import HerculesCavesImage from './expimg/HerculesCaves.jpg';
import KasbahMuseumImage from './expimg/KasbahMuseum.jpg';
import WhiteDuneImage from './expimg/WhiteDune.jpeg';
import AgadirOufellaImage from './expimg/AgadirOufella.jpg';
import TaghazoutBeachImage from './expimg/TaghazoutBeach.jpg';
import KenziTowerImage from './expimg/KenziTower.jpg';
import LeCasablancaHotelImage from './expimg/LeCasablancaHotel.jpg';
import LaCornicheImage from './expimg/LaCornicheCasa.jpg';
import CasaJoseImage from './expimg/CasaJoseCasa.jpg';
import RoyalMansourImage from './expimg/RoyalMansourKesh.jpg';
import LaMamouniaImage from './expimg/LaMamouniaKesh.jpg';
import DarMohaImage from './expimg/DarMohaKesh.jpg';
import AlFassiaImage from './expimg/ALFassiaKesh.jpeg';
import NomadImage from './expimg/NomadKesh.jpg';
import SofitelRabatImage from './expimg/SofitelRabat.jpg';
import TheViewHotelImage from './expimg/TheViewRabat.jpg';
import LeDhowImage from './expimg/LeDhowRabat.jpg';
import GoldenFishImage from './expimg/GoldenFishRabat.jpg';
import ElMinzahImage from './expimg/ElMinzah.jpg';
import HiltonTangerImage from './expimg/HiltonTanger.jpg';
import LeSaveurDuPoissonImage from './expimg/LeSaveurDuPoisson.jpg';
import ElMoroccoClubImage from './expimg/ElMoroccoClub.jpg';
import LeMirageImage from './expimg/LeMirage.jpg';
import PK25HotelImage from './expimg/PK25Hotel.jpg';
import DakhlaAttitudeImage from './expimg/DakhlaAttitude.jpg';
import TalhamarImage from './expimg/Talhamar.jpg';
import SofitelAgadirImage from './expimg/SofitelAgadir.jpg';
import HyattTaghazoutImage from './expimg/HyattTaghazout.jpg';
import PurePassionImage from './expimg/PurePassion.jpg';
import LaVillaBlancheImage from './expimg/LaVillaBlanche.jpg';

// City data structure
const placesByCity = {
  Casablanca: [
    { title: 'Four Seasons Hotel Casablanca', description: 'A luxurious hotel with breathtaking ocean views and world-class amenities.', reward: '350 WER', image: FourSeasonsImage },
    { title: 'Hyatt Regency Casablanca', description: 'A luxury hotel in the heart of Casablanca, offering modern comfort and fine dining.', reward: '200 WER', image: HyattRegencyImage },
    { title: "Rick's Café", description: 'A famous restaurant modeled after the café in the movie "Casablanca," serving Moroccan and international dishes.', reward: '770 WER', image: RicksCafeImage },
    { title: 'La Sqala', description: 'A charming restaurant offering traditional Moroccan cuisine in a historical setting.', reward: '550 WER', image: LaSqalaImage },
    { title: 'Le Cabestan', description: 'A seaside restaurant known for its upscale seafood dishes and stunning ocean views.', reward: '200 WER', image: LeCabestanImage },
    { title: 'Hotel Kenzi Tower', description: 'A luxurious hotel located in one of the tallest buildings in Casablanca.', reward: '300 WER', image: KenziTowerImage },
    { title: 'Le Casablanca Hotel', description: 'An elegant hotel offering an oasis of comfort and tranquility in the heart of Casablanca.', reward: '450 WER', image: LeCasablancaHotelImage },
    { title: 'La Corniche', description: 'A vibrant beachside area filled with restaurants and cafes, perfect for a casual evening.', reward: '250 WER', image: LaCornicheImage },
    { title: 'Casa José', description: 'A popular Spanish restaurant offering Mediterranean cuisine and tapas.', reward: '320 WER', image: CasaJoseImage },
  ],
  Marrakech: [
    { title: 'Jardin Majorelle', description: 'A beautiful garden designed by Jacques Majorelle and later restored by Yves Saint Laurent.', reward: '400 WER', image: JardinMajorelleImage },
    { title: 'Koutoubia Mosque', description: 'The largest mosque in Marrakech, known for its stunning minaret.', reward: '250 WER', image: KoutoubiaMosqueImage },
    { title: 'Palais Bahia', description: 'A grand palace showcasing stunning Moroccan architecture.', reward: '500 WER', image: PalaisBahiaImage },
    { title: 'Royal Mansour Marrakech', description: 'A palatial hotel offering luxury beyond measure, with exquisite design and exclusive services.', reward: '600 WER', image: RoyalMansourImage },
    { title: 'La Mamounia', description: 'A historic and luxurious palace hotel with lush gardens and world-class service.', reward: '700 WER', image: LaMamouniaImage },
    { title: 'Dar Moha', description: 'A famous restaurant serving modern Moroccan cuisine in a beautiful traditional riad.', reward: '350 WER', image: DarMohaImage },
    { title: 'Al Fassia', description: 'An upscale restaurant known for its authentic Moroccan cuisine, run by an all-female team.', reward: '300 WER', image: AlFassiaImage },
    { title: 'Nomad', description: 'A modern restaurant offering a fusion of traditional Moroccan and international flavors with stunning rooftop views.', reward: '450 WER', image: NomadImage },
  ],
  Rabat: [
    { title: 'Hassan Tower', description: 'A landmark minaret of an incomplete mosque, standing as a symbol of Rabat\'s rich history.', reward: '200 WER', image: HassanTowerImage },
    { title: 'Kasbah of the Udayas', description: 'A picturesque fortress with gardens, old city walls, and stunning views over the Atlantic.', reward: '400 WER', image: KasbahUdayasImage },
    { title: 'Mausoleum of Mohammed V', description: 'A magnificent mausoleum dedicated to the late king Mohammed V and his sons.', reward: '300 WER', image: MausoleumMohammedVImage },
    { title: 'Chellah', description: 'An ancient Roman and medieval fortified city located on the outskirts of Rabat.', reward: '450 WER', image: ChellahImage },
    { title: 'Sofitel Rabat Jardin des Roses', description: 'A luxurious hotel surrounded by a magnificent garden, offering first-class amenities.', reward: '500 WER', image: SofitelRabatImage },
    { title: 'The View Hotel Rabat', description: 'A contemporary hotel known for its panoramic views and luxury accommodations.', reward: '550 WER', image: TheViewHotelImage },
    { title: 'Le Dhow', description: 'A unique floating restaurant on a traditional boat, offering Moroccan and international cuisine.', reward: '350 WER', image: LeDhowImage },
    { title: 'Golden Fish', description: 'An upscale seafood restaurant located in the Sofitel, known for fresh seafood and Mediterranean dishes.', reward: '400 WER', image: GoldenFishImage },
  ],
  Tanger: [
    { title: 'Cap Spartel', description: 'A scenic spot where the Mediterranean Sea meets the Atlantic Ocean, offering breathtaking views.', reward: '300 WER', image: CapSpartelImage },
    { title: 'Hercules Caves', description: 'A fascinating cave complex with a legendary history, offering a view shaped like the map of Africa.', reward: '250 WER', image: HerculesCavesImage },
    { title: 'Kasbah Museum', description: 'A museum located in the old Kasbah, showcasing artifacts from Tanger\'s diverse cultural history.', reward: '200 WER', image: KasbahMuseumImage },
    { title: 'El Minzah Hotel', description: 'A luxurious hotel with Andalusian style, located in the heart of the city, offering world-class amenities.', reward: '500 WER', image: ElMinzahImage },
    { title: 'Hilton Garden Inn Tanger City Center', description: 'A modern hotel offering comfort and convenience for both leisure and business travelers.', reward: '400 WER', image: HiltonTangerImage },
    { title: 'Le Saveur du Poisson', description: 'A cozy seafood restaurant known for its fresh dishes and intimate atmosphere.', reward: '300 WER', image: LeSaveurDuPoissonImage },
    { title: 'El Morocco Club', description: 'A chic restaurant in the Kasbah offering a fusion of Moroccan and international cuisine.', reward: '350 WER', image: ElMoroccoClubImage },
    { title: 'Le Mirage', description: 'An elegant restaurant with an amazing view over the beach and Atlantic Ocean, specializing in seafood.', reward: '420 WER', image: LeMirageImage },
  ],
  Dakhla: [
    { title: 'White Dune', description: 'A unique natural formation in the desert, offering panoramic views of the Atlantic Ocean.', reward: '300 WER', image: WhiteDuneImage },
    { title: 'PK25 Dakhla Hotel', description: 'A beachfront hotel offering incredible views of the lagoon and access to water sports.', reward: '550 WER', image: PK25HotelImage },
    { title: 'Dakhla Attitude Hotel', description: 'A top destination for kitesurfers, offering accommodation with direct access to the lagoon.', reward: '600 WER', image: DakhlaAttitudeImage },
    { title: 'Talhamar', description: 'A restaurant offering fresh seafood and local dishes with a view of the lagoon.', reward: '300 WER', image: TalhamarImage },
  ],
  Agadir: [
    { title: 'Agadir Oufella Ruins', description: 'The ruins of an ancient hilltop fortress offering panoramic views of Agadir and the coastline.', reward: '250 WER', image: AgadirOufellaImage },
    { title: 'Taghazout Beach', description: 'A popular surf destination with golden sands and perfect waves.', reward: '350 WER', image: TaghazoutBeachImage },
    { title: 'Sofitel Agadir Royal Bay Resort', description: 'A luxury beachfront hotel offering elegant accommodations and a private beach.', reward: '550 WER', image: SofitelAgadirImage },
    { title: 'Hyatt Place Taghazout Bay', description: 'A modern hotel located near Taghazout Beach, offering comfort and spectacular views.', reward: '500 WER', image: HyattTaghazoutImage },
    { title: 'Pure Passion Restaurant', description: 'An upscale restaurant serving international cuisine with a focus on seafood, located by the marina.', reward: '350 WER', image: PurePassionImage },
    { title: 'La Villa Blanche', description: 'A fine dining restaurant offering French and Moroccan fusion cuisine in a romantic setting.', reward: '400 WER', image: LaVillaBlancheImage },
  ],
};

const CitiesQuest = ({ selectedCity, onBack }) => {
  if (!selectedCity) {
    return <p className="text-white text-center">Select a city to view places to visit!</p>;
  }

  const placesToVisit = placesByCity[selectedCity] || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-10 px-4 md:px-20 lg:px-40">
      <button
        className="mb-8 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold rounded-lg hover:scale-105 transform transition-all duration-300"
        onClick={onBack}
      >
        Back
      </button>
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold text-center mb-10">
        Best Places to Visit in {selectedCity}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {placesToVisit.length > 0 ? (
          placesToVisit.map((place, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <img
                src={place.image}
                alt={place.title}
                className="w-full h-48 md:h-56 lg:h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{place.title}</h3>
                <p className="text-gray-300 mb-4">{place.description}</p>
                <p className="text-indigo-400 text-lg font-semibold">Reward: {place.reward}</p>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-white text-center">No places available for {selectedCity}.</p>
        )}
      </div>
    </div>
  );
};

export default CitiesQuest;
