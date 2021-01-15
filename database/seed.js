const mongoose = require('mongoose');
const Seller = require('./database');

const names = `Alima Cousins Bethan Quinn Morwenna Carter Fahmida Montoya
Nafisa Wallace Kirby Howell Rohan Martinez Mohammed Beltran Faiz Foreman
Nikola Oreo Emilis Grey Lynden Terry Allison Booker Gareth Gonzales Uzma
Frey Blade England Samina Vang Maya Duarte Usaamah Gilmour Katlyn Ward`.split(/\n| /);

const nouns = `Noise Verse Snow Lunch Song Day Cactus Plot Collection
Egg Trucks Body Salad County Friction Departure Policy Owl Chest Wrist
Low Courage Scent Farm Cannon Presentation Bird Tiger Snails Bee Sir
Dealer Quartz Data Spot Run Mask Map Video Meaning`.split(/\n| /);

const productAdjectives = `evanescent
glorious
boring
selective
abundant
noxious
glamorous
cowardly
ablaze
homeless
old
jazzy
last
famous
deep
inquisitive
ill-informed
green
bright
parsimonious
wasteful
expensive
ceaseless
ludicrous
imported
careful
lowly
massive
billowy
helpless
hissing
good
flimsy
deserted
future
terrible
obsequious
unarmed
sparkling
redundant
unkempt
elfin
previous
fertile
alike
lovely
excellent
regular
ripe
thoughtless`.split('\n');

const productNames = `cars
dove
tire swing
cowboy hat
pair of dice
plush bear
bottle of honey
photo album
beaded bracelet
pair of earrings
incense holder
car
spool of wire
sharpie
plush dinosaur
pair of water goggles
scallop shell
bell
bottle of soda
clay pot
bed
straw
lamp
purse
fake flowers
candy bar
baseball hat
grocery list
radio
lighter
snowglobe
multitool
nail
dictionary
pair of socks
sidewalk
bookmark
rock
hair tie
ocarina
plush cat
extension cord
seat belt
whale
pants
package of glitter
mp3 player
helmet
couch
can of whipped cream
thermometer
pepper shaker
Christmas ornament
box
drill press
banana
jigsaw puzzle
video games
clothes
dog
bar of soap
egg timer
glass
window
jar of pickles
rolling pin
basketball
pair of handcuffs
stop sign
eye liner
pack of cards
tooth pick
bag of rubber bands
washing machine
flowers
bow
pencil
toy car
turtle
paper
candle
bread
pocketwatch
cell phone
tennis ball
tea pot
magnet
class ring
umbrella
comic book
empty jar
puddle
cellphone
hair ribbon
pen
credit card
box of Q-tips
stick of incense
chapter book
packet of seeds`.split('\n');

const descriptions = `Waiting and watching. It was all she had done for the past weeks. When you’re locked in a room with nothing but food and drink, that’s about all you can do anyway.
She watched as birds flew past the window bolted shut. She couldn’t reach it if she wanted too, with that hole in the floor. She thought she could escape through it but three stories is a bit far down.
Sitting in the sun, away from everyone who had done him harm in the past, he quietly listened to those who roamed by. He felt at peace in the moment, hoping it would last, but knowing the reprieve would soon come to an end.
He closed his eyes, the sun beating down on face and he smiled. He smiled for the first time in as long as he could remember. To her surprise, she found what she least expected to see.
It was a weird concept. Why would I really need to generate a random paragraph? Could I actually learn something from doing so? All these questions were running through her head as she pressed the generate button.
Things aren't going well at all with mom today. She is just a limp noodle and wants to sleep all the time. I sure hope that things get better soon.
Don't be scared. The things out there that are unknown aren't scary in themselves. They are just unknown at the moment. Take the time to know them before you list them as scary. Then the world will be a much less scary place for you.
The trees, therefore, must be such old and primitive techniques that they thought nothing of them, deeming them so inconsequential that even savages like us would know of them and not be suspicious.
At that, they probably didn't have too much time after they detected us orbiting and intending to land. And if that were true, there could be only one place where their civilization was hidden.
The alarm went off and Jake rose awake. Rising early had become a daily ritual, one that he could not fully explain. From the outside, it was a wonder that he was able to get up so early each morning for someone who had absolutely no plans to be productive during the entire day.
There was little doubt that the bridge was unsafe. All one had to do was look at it to know that with certainty. Yet Bob didn't see another option.
He may have been able to work one out if he had a bit of time to think things through, but time was something he didn't have. A choice needed to be made, and it needed to be made quickly.
There are different types of secrets. She had held onto plenty of them during her life, but this one was different. She found herself holding onto the worst type.
It was the type of secret that could gnaw away at your insides if you didn't tell someone about it, but it could end up getting you killed if you did.
Greg understood that this situation would make Michael terribly uncomfortable. Michael simply had no idea what was about to come and even though Greg could prevent it from happening, he opted to let it happen.
It was quite ironic, really. It was something Greg had said he would never wish upon anyone a million times, yet here he was knowingly letting it happen to one of his best friends. He rationalized that it would ultimately make Michael a better person and that no matter how uncomfortable, everyone should experience racism at least once in their lifetime.
It went through such rapid contortions that the little bear was forced to change his hold on it so many times he became confused in the darkness, and could not, for the life of him, tell whether he held the sheep right side up, or upside down.
But that point was decided for him a moment later by the animal itself, who, with a sudden twist, jabbed its horns so hard into his lowest ribs that he gave a grunt of anger and disgust.
Sleeping in his car was never the plan but sometimes things don't work out as planned. This had been his life for the last three months and he was just beginning to get used to it.
He didn't actually enjoy it, but he had accepted it and come to terms with it. Or at least he thought he had. All that changed when he put the key into the ignition, turned it and the engine didn't make a sound.
It was difficult to explain to them how the diagnosis of certain death had actually given him life. While everyone around him was in tears and upset, he actually felt more at ease. The doctor said it would be less than a year.
That gave him a year to live, something he'd failed to do with his daily drudgery of a routine that had passed as life until then.
It was their first date and she had been looking forward to it the entire week. She had her eyes on him for months, and it had taken a convoluted scheme with several friends to make it happen, but he'd finally taken the hint and asked her out.
After all the time and effort she'd invested into it, she never thought that it would be anything but wonderful. It goes without saying that things didn't work out quite as she expected.
`.split('\n');

const bucketUrl = (i) => `https://fec-product-pictures.s3.amazonaws.com/product_${i}.jpg`;

const sellers = [];

const rand = (max) => Math.floor(Math.random() * Math.floor(max));
const randPrice = () => parseFloat(Math.random() * (99 - 1) + 1).toFixed(2);

let i = 1;
while (i < 26) {
  sellers.push({
    name: names[rand(names.length)] + nouns[rand(nouns.length)],
    sales: rand(1000),
    products: [],
  });
  i += 1;
}

i = 1;
while (i < 101) {
  sellers[rand(sellers.length)].products.push({
    id: i,
    name: `${productAdjectives[rand(productAdjectives.length)]} ${productNames[rand(productNames.length)]}`,
    image: bucketUrl(i),
    description: descriptions[rand(descriptions.length)],
    price: randPrice(),
    stock: rand(16),
    sizes: !rand(2),
    rating: rand(6),
  });
  i += 1;
}

const seed = async () => {
  await mongoose.connection.collections.sellers.drop();
  await Seller.create(sellers);
  mongoose.disconnect();
};

seed();
