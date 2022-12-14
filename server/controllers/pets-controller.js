const Pet = require("../models/pets");

const petData = [
  {
    PetID: 1,
    Name: "Raven",
    Species: "Dog",
    Breed: "Mixed",
    Sex: "F",
    Age: 0.3,
    Size: "Large",
    Colour: "Black, White",
    Description:
      "Raven is a darling three month old female puppy. She will need to learn house-training and obedience. She is a puppy so is still in the teething and chewing stage. She will likely be in the 50 - 60 lb range when she is fully grown. She is spayed, microchipped, dewormed, and is up-to-date on vaccines to her age limit.",
    Image: "raven.jpg",
  },
  {
    PetID: 2,
    Name: "Winter",
    Species: "Dog",
    Breed: "Chihuahua Mix",
    Sex: "F",
    Age: 0.3,
    Size: "Small",
    Colour: "Brown, White",
    Description:
      "Winter is an 11 week old Chihuahua / Lab mix currently weighing in at 7 lbs. She has the size of a chihuahua and the look of a lab. She is playful and energetic! She can be found playing with her siblings or quietly napping in the bed inside the crate. She is not vocal at all, only whines when she hears the food bowls are being prepared. She uses pee pads very well while indoors and on the grass while outside. With timely pee breaks, she has no problem being in the crate.",
    Image: "winter.jpg",
  },
  {
    PetID: 3,
    Name: "Squints",
    Species: "Dog",
    Breed: "Jack Russell Mix",
    Sex: "M",
    Age: 0.5,
    Size: "Medium",
    Colour: "White, Tan",
    Description:
      "Meet Squints! He's a 6 month old Jack Russel Pit mix tri-pod who enjoys short walks in circles and cuddles even more.\n\nA perfect day for Squints would start by waking up snuggled next to you, followed by immediately going outside to \"go good boys then coming back in to eat, play with his toys for a few minutes followed by another quick nap. He absolutely loves sun bathing! Especially if you're next to him. Again, he's a cuddle muffin!\n\nSquints super powers include doing an insane amount of circles when he's excited or in a new environment. But don't worry, once he's comfortable he relaxes! He is doing well with house training and just needs a little more practice. He's great on a leash and loves being held while going food shopping. He can melt in your arms pretty much anywhere.",
    Image: "squints.jpg",
  },
  {
    PetID: 4,
    Name: "Cabimas",
    Species: "Dog",
    Breed: "Bluetick Coonhound Mix",
    Sex: "M",
    Age: 0.3,
    Size: "Medium",
    Colour: "Tan, White",
    Description:
      "Meet Cabimas! He is a 3 month old Bluetick mix. He is a gorgeous little rascal of a pup that loves to rough house in the yard with his brothers. He's smart, curious, and loves to follow his humans around. Cabimas has been doing a great job when it comes to using the wee wee pads outside his crate. He is neutered and microchipped as well as up to date with shots for his age. This beautiful boy is your typical puppy with puppy energy and chewing needs for those new teeth. Be careful where you leave your favorite shoes! Cabimas is a sweet soul that deserves a great human companion that will return his love and loyalty.",
    Image: "cabimas.jpg",
  },
  {
    PetID: 5,
    Name: "Daisy",
    Species: "Dog",
    Breed: "Labrador Retriever Mix",
    Sex: "F",
    Age: 2,
    Size: "Medium",
    Colour: "Black, White",
    Description:
      'Daisy is a gentle and educated 2 year old Pointer mix lady. Her 40 lbs are pure love and obedience, are you looking for a fun companion with energy but calm and relaxed and the same time? Look no more!\n\nA perfect day for Daisy includes walking with you in the morning just to come back and relax in her big pillow with a treat, running some errands in the afternoon, being outside with you at a bar or a restaurant. She even used to go with her foster dad to the barber\'s! All that you can think of doing Daisy can tag along, she has even been on the subway! And she enjoys being home with you just as much.\n\nDaisy\'s amazing perks are: being house trained, awesome on a leash, crate trained and being obedient, overall Daisy is very well behaved! You can keep teaching her cool stuff and I she will follow...for a treat! Daisy will thrive best in a home where she is the only dog but she is willing to warm up to other doggies and even cats if you help her. Daisy some times forgets she is a big girl with a strong love! So a house without small kids or small dogs will be best.\n\nDaisy responds to commands like "sit, "lay down, "off and "come on and she is always willing to learn new tricks and words for a delicious reward.',
    Image: "daisy.jpg",
  },
  {
    PetID: 6,
    Name: "Indigo",
    Species: "Dog",
    Breed: "Feist Mix",
    Sex: "F",
    Age: 2,
    Size: "Small",
    Colour: "Black, Tan",
    Description:
      "Indigo is a 2 year old Feist mix, weighing approximately 18 lbs. Indigo is dog-friendly and child-friendly and she would prefer a home without cats. Indigo can be a shyster when you first meet her, but opens up quickly and wants nothing but to kiss and make her person happy! Indigo is an absolute delight to have in your home!\n\nIf your family is looking for a medium energy, sweet small dog please apply for Indigo today!",
    Image: "indigo.jpg",
  },
  {
    PetID: 7,
    Name: "Faith",
    Species: "Dog",
    Breed: "Beagle",
    Sex: "F",
    Age: 0.6,
    Size: "Medium",
    Colour: "Black, White",
    Description:
      "Faith is a sweet 7 month old, 17 lb Beagle mix who is equal parts kisses, goofy play, and gentle snuggles.\n\nA perfect day for Faith includes plenty of affection, a good round of fetch or tug after her walks and some epic naps. Faith's superpowers include settling into busy Brooklyn like she was born here, adapting quickly to her crate, and showering you with love.\n\nShe is already making progress with basic commands like sit, drop and come.\n\nSome of Faith's favorite things are curling up for a cuddle, chasing her fuzzy ball and letting that amazing beagle nose hit scent trails outdoors.\n\nIf your family is looking for a medium-high energy dog on the small side to be your loving, playful companion, then Faith might be the perfect match!",
    Image: "faith.jpg",
  },
  {
    PetID: 8,
    Name: "Izzy",
    Species: "Cat",
    Breed: "Tabby",
    Sex: "F",
    Age: 4,
    Size: "Medium",
    Colour: "Brown, Tan",
    Description:
      "Isadora is ready for her forever home!\n\nIzzy was found roaming the streets by JerseyCats adopters and is adapting well to the inside life.\n\nIzzy loves cuddling, nose-nuzzling, second breakfast, playing with her catnip toys, and spending time with her human.\n\nIzzy is about four years old and in good health. She would prefer to be your one and only, so a home without other cats is ideal.",
    Image: "izzy.jpg",
  },
  {
    PetID: 9,
    Name: "Andy",
    Species: "Cat",
    Breed: "Domestic Short hair",
    Sex: "M",
    Age: 0.5,
    Size: "Small",
    Colour: "Black, White",
    Description:
      "Andy is not only dressed to the nines, but he???s a perfect gentleman as well. He is, without a doubt, one of the sweetest, kindest, and most polite cats his foster mom has ever had the pleasure to meet! When you enter his space, he greets you with a sweet meow and comes over for some hello pets. He is ok with being picked up, will sit and cuddle in your lap, loves being kissed on the forehead and will give kisses back in return. Let us reiterate that - he loooooves kisses! Andy is definitely a cuddler!\n\nAndy has been recovering from past trauma for several months, having had two surgeries to allow him to walk normally again (he came to us with two dislocated hips and a broken pelvis). As a result, his back end has been shaved ??? but is growing back ??? earning him the nickname Andy-pants. He has to be careful with how much he jumps about, but he knows his limitations. He walks very well and sits beautifully",
    Image: "andy.jpg",
  },
  {
    PetID: 10,
    Name: "Noir",
    Species: "Cat",
    Breed: "Domestic Short Hair",
    Sex: "M",
    Age: 1,
    Size: "Medium",
    Colour: "Black",
    Description:
      "Hellooo black cat LOVERS!!! We are Pinot and Noir! A dynamic brother and sister duo looking for love and fun times! We are snuggly, friendly, loving, and playful kittens looking for our forever home together. Our foster mom says we get along with everyone and love her other adult cats, so if you are looking to add to your brood, choose us!!!",
    Image: "noir.jpg",
  },
  {
    PetID: 11,
    Name: "Pinot",
    Species: "Cat",
    Breed: "Domestic Short Hair",
    Sex: "F",
    Age: 1,
    Size: "Medium",
    Colour: "Black",
    Description:
      "Hellooo black cat LOVERS!!! We are Pinot and Noir! A dynamic brother and sister duo looking for love and fun times! We are snuggly, friendly, loving, and playful kittens looking for our forever home together. Our foster mom says we get along with everyone and love her other adult cats, so if you are looking to add to your brood, choose us!!!",
    Image: "pinot.jpg",
  },
  {
    PetID: 12,
    Name: "Olivia",
    Species: "Cat",
    Breed: "Domestic Short Hair",
    Sex: "F",
    Age: 0.4,
    Size: "Medium",
    Colour: "Tortoiseshell",
    Description:
      "Hi! I'm Olivia!!!! Some say I have the cutest markings they have ever seen!... or like I got my face painted like a skeleton for Halloween and never washed it off! I am a total maniac with my brother Elliot! We love people and we love each other! We were found in a bus bumper at 1 week old!!!!!! Sadly our mama never came back, but lucky for us we got rescued and bottle fed til we were ready to eat on our own. Because of this we love people! We love to be pet and we love to get crazy with all the fun toys you can find for us! We are a bonded pair, so don't even ask! We are looking for our forever home and would love to be the addition your family has been looking for!",
    Image: "olivia.jpg",
  },
  {
    PetID: 13,
    Name: "Daphne",
    Species: "Cat",
    Breed: "Domestic Short Hair",
    Sex: "F",
    Age: 0.3,
    Size: "Medium",
    Colour: "White, Gray",
    Description:
      "Hey there Daphne here! I'm just a sweet little girl looking for my forever home! My foster family says I am a gentle and well rounded kitten. I am a night time snuggler and day time playmate! I am good with cats and dogs but my bestie is Sasha. We are a purrrfect pair of sissies! I am a really happy kitten with lots of love to give! I was rescued all by myself by some nice people and have been living my best life since! If you are looking for two lovely ladies to add to your life, pick us!!! Sasha and Dapne!",
    Image: "daphne.jpg",
  },
];
const getAllPets = async (_, res) => {
  const pets = await Pet.find();
  return res.json({
    petData: pets.map((pet) => pet.toObject({ getters: true })),
  });
};

exports.getAllPets = getAllPets;
