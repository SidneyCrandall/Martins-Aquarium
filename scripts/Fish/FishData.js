/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete this
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */

const fishCollection = [
	{
		saltWater: true,
		harvestLocation: "Pacific Ocean",
		diet: "Algae",
		name: "Malcolm",
		species: "Blue Tang",
		inches: 13,
		image: "bluetang.jpeg"
	},
	{
		saltWater: true,
		harvestLocation: "Bali",
		diet: "Really small fish",
		name: "Bob",
		species: "Guppy",
		inches: 3,
		image: "guppy.jpeg"
	},
	{   saltWater: true,
        harvestLocation: "Atlantic Ocean",
        diet: "Squid",
		name: "BigBoss",
        species: "Amber Jack",
        inches: 60,
        image: "amberjack.jpeg"
    },
	{
		saltWater: true,
		harvestLocation: "Pacific Ocean",
		diet: "Shellfish",
		name: "Jerry",
		species: "Swordfish",
		inches: 80,
		image: "swordfish.jpeg"
	},
	{
		saltWater: true,
		harvestLocation: "Gulf of Mexico",
		diet: "Tiny fish",
		name: "Predator",
		species: "Catfish",
		inches: 20,
		image: "catfish.jpg"
	},
	{
		saltWater: true,
		harvestLocation: "Atlantic Ocean",
		diet: "Herring",
		name: "Sabre",
		species: "Swordfish",
		inches: 117.6,
		image: "swordfish.jpeg"
	},
	{
		saltWater: false,
		harvestLocation: "Amazon Basin",
		diet: "Brine Shrimp",
		name: "Myrti",
		image: "angelfish.jpeg",
		inches: 12,
		species: "Angel Fish"
	},
	{
		saltWater: true,
		harvestLocation: "Atlantic Ocean",
		diet: "Plankton",
		name: "Nemo",
		species: "Clownfish",
		inches: 4,
		image: "clownfish.jpeg"
	},
	{
		saltWater: false,
		harvestLocation: "Mississippi River",
		diet: "Everything",
		name: "Vacuum",
		species: "Catfish",
		inches: 24,
		image: "catfish.jpg"
	},
	{
		saltWater: false,
		harvestLocation: "Bobbies Fish Emporium",
		diet: "Minnows",
		name: "Ralph",
		species: "Smallmouth Bass",
		inches: 14,
		image: "smallmouthbass.jpeg"
	},
	{
		saltWater: false,
		harvestLocation: "Cumberland River",
		diet: "Anything",
		name: "Whiskers",
		species: "Ictalurus Furcatus",
		inches: 39,
		image: "bluecatfish.jpeg"
	},
	{   saltWater: true,
        harvestLocation: "South Pacific",
        diet: "Shrimp",
        inches: 64,
        species: "Tuna",
        name: "Bruno",
        image: "tuna.jpeg" },

		{   saltWater: false,
        harvestLocation: "Petsmart",
        diet: "Algae",
        name: "Dorothy",
        species: "Goldfish",
        inches: 3,
        image: "goldfish.jpeg" },
	{
		saltWater: false,
		harvestLocation: "Lake Tahoe",
		diet: "Insects",
		name: "Trent",
		species: "Rainbow Trout",
		inches: 21,
		image: "rainbowtrout.jpeg"
	},
	{
		saltWater: true,
		harvestLocation: "Carribean Sea",
		diet: "Shrimp",
		name: "Stephen",
		species: "Angler",
		inches: 23,
		image: "angler.jpeg"
	},
	{
		saltWater: true,
		harvestLocation: "Barbados",
		diet: "Anchoves",
		name: "Pizza",
		species: "Tuna",
		inches: 40,
		image: "tuna.jpeg"
	},
	{
		saltWater: false,
		harvestLocation: "TN River",
		diet: "Bacon",
		name: "Finn",
		species: "Bass",
		inches: 20,
		image: "bass.jpeg",
	},
	{
		saltWater: true,
		diet: "Mollusks",
		name: "Simba",
		species: "Lionfish",
		harvestLocation: "Red Sea",
		Inches: 10,
		image: "lionfish.jpeg"
	},
	{
		saltWater: true,
		harvestLocation: "New Zealand",
		diet: "Lost Sailors",
		name: "Tiki",
		species: "Parrot Fish",
		inches: 36,
		image: "parrotfish.jpeg"
	},
	{
		saltWater: true,
		harvestLocation: "Red Sea",
		diet: "Algae",
		name: "Bobo",
		species: "Clown Fish",
		inches: 5,
		image: "clownfish.jpeg"
	},
	{
		saltWater: true,
		harvestLocation: "Atlantic Sea",
		name: "Flipper",
		inches: 12,
		image: "garibaldi.jpeg",
		diet: "Worms",
		species: "Garibaldi"
	},
	{
		saltWater: true,
		harvestLocation: "Bikini Bottom",
		diet: "Big Ole Fish",
		name: "Pearl",
		species: "Whale",
		inches: 1000,
		image: "whale.jpeg"
	},
	{
		saltWater: false,
		harvestLocation: "Port Innsmouth",
		diet: "Primeval Shadows",
		name: "Cthulhu",
		species: "Old One",
		inches: 999,
		image: "Cthulhu.jpeg"
	},
	{   saltWater: false,
        harvestLocation: "Amazon River",
        diet: "Smaller Fish",
        name: "Bitey",
        species: "Pirhana",
        inches: 7.5, 
        image: "Pirhana.jpeg"
    },
	{
		saltWater: true,
		harvestLocation: "St.Croix",
		diet: "Squid",
		name: "Crush",
		species: "Blue ting",
		inches: 7,
		image: "bluetang.jpeg"
	},
	{
		saltWater: false,
		harvestLocation: "Minnesota",
		diet: "Cherry Tomatoes",
		name: "Frank",
		species: "Piranha",
		inches: 7,
		image: "Pirhana.jpeg"
	},

	{   saltWater: true,
        harvestLocation: "Atlantic, Pacific, and southern sea",
        diet: "Smaller fish", 
        name: "Bluefin tuna", 
        species: "Thunnus thynnus",
        inches: 84,
        image: "bluefintuna.jpeg" },
	{
		saltWater: true,
		harvestLocation: "Baltic Sea",
		diet: "Smaller fish",
		name: "Fil",
		species: "Goldfish",
		inches: 40,
		image: "goldfish.jpeg"
	},
];

 export const getFish = () => {
        return fishCollection;
 };


 export const getMostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFishArray = []
    for (const fishObj of fishCollection) {
		if ( fishObj.inches % 3 ===0 ) {
				holyFishArray.push(fishObj)
		}

    }

    return holyFishArray
 };

 export const getSoldierFish = () => {
	 // 5, 10, 15, 20, 25, etc... fish
	 const soldiersArray =[]
	 for ( const fishObj of fishCollection){
		 if (fishObj.inches % 5 ===0 && fishObj.inches %3 !==0){
				soldiersArray.push(fishObj)
			}
	 };
	 return soldiersArray
	}
 export const getUnworthyFish = () => {
	 // Any fish not a multiple of 3 or 5
	 const unworthyArray = []
	 for ( const fishObj of fishCollection) {
		 if (fishObj.inches % 3 !== 0 && fishObj.inches %5 !== 0){
			 unworthyArray.push(fishObj)
	 		}
		}
	 return unworthyArray
 };