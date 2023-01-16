import Book from './src/db/entities/Book';

import connectToDb from './src/db/connectToDb';
import type BookType from './src/db/entities/Book';
import db from './src/db';


const fiction = 'Fiction';
const nonFiction = 'Non—fiction';
const lightFiction = 'Light fiction';
const scienceFiction = 'Science-fiction';
const fantasy = 'Fantasy';
const businessAndFinance = 'Business & Finance';
const politics = 'Politics';
const travelBooks = 'Travel books';
const autobiography = 'Autobiography';
const history = 'History';
const thrillerOrMystery = 'Thriller / Mystery';
const romance = 'Romance';
const satire = 'Satire';
const horror = 'Horror';
const healthOredicine = 'Health / Medicine';
const childrensBooks = 'Children`s books';
const encyclopedia = 'Encyclopedia';

const books: Array<BookType> = [

  {
    bookCover: 'book13',
    title: 'Babysitter',
    author: 'Henry James',
    genre: `${fiction}, ${fantasy}`,
    description: 'The young governess against her will finds herself dragged into a whirlpool of mysterious and mystical events, but she is ready to do anything to protect the orphaned children entrusted to her from infernal horror ... ("The turn of the screw") The young lady, who has not found eternal rest, regularly pays, as befits a respectable English ghost, for rent of the house in which... resides ("A rented haunted house") An eccentric lady checks the truth of the feelings of the applicants for her daughter`s hand with the help of the ability of these gentlemen to communicate with the family ghost — Sir Edmund Orme... ("Sir Edmund Orme") The young ladies who inherited a haunted house are jealous of each other of its restless inhabitant and at the same time are panicked that living under the same roof with a male ghost will cast a shadow on their reputation... ("Third Party") Returning home from Europe to New York after thirty-three years, the hero wanders through an empty house, trying to come to terms with his American "alter ego" ... ("Funny Corner") The book includes Gothic novels and short stories by the great Anglo-American writer Henry James, marked by his inherent combination of deep psychologism, refined style and sarcastic humor.',
    binding: 'paperback || hardcover',
  },

  {
    bookCover: 'book7',
    title: 'Tiamat`s Anger',
    author: 'James Corey',
    genre: `${fiction}, ${fantasy}`,
    description: 'Thirteen hundred gates have opened to solar systems across the galaxy. But as humanity builds its interstellar empire on the ruins of an alien civilization, secrets and threats grow. In the dead systems beyond the gates, where things are more unusual than new planets, Elvi Okoye is desperately trying to understand the nature of the genocide that happened before the appearance of the first man, and to find weapons for war with almost unimaginable forces. But this knowledge may cost more than she is able to pay. In the heart of the Laconian Empire, Teresa Duarte is preparing to share the burden of power with her aspiring father. The palace is full of intrigues and dangers, the sociopathic scientist Paolo Cortazar and the diabolical prisoner James Holden are just two of them. But Theresa has her own head on her shoulders and secrets unknown even to the father-emperor. And throughout the expanses of the human empire, the Rocinante team, divided by circumstances, is conducting rearguard battles against the Duarte regime. The old order is being forgotten, and the future under the eternal rule of Laconia seems increasingly inevitable, and with it a war that humanity can only lose. After all, courage and ambition are not enough to fight against the horror lurking between the worlds…',
    binding: 'paperback || hardcover',
  },

  {
    bookCover: 'book9',
    title: 'The Flaming God',
    author: 'Rebecca Quang',
    genre: `${nonFiction}, ${fantasy}`,
    description: 'After bloody battles with the remnants of the Mukden army and the Hesperian allies who want to appropriate any wealth, Rin is left with nothing again. Betrayed and crippled, she flees Arlong to gather her strength and strike at the enemy. But her new allies in the leadership of the Southern Coalition are crafty and unreliable, Rin quickly realizes that the real power in Nikan is millions of ordinary people who seek revenge and worship her as the goddess of salvation. However, as her power and influence grows, the intoxicating voice of the Phoenix grows stronger, calling on her to burn the whole world. And it`s getting harder to resist him... A spectacular conclusion to the Opium War trilogy, Rebecca Quang`s acclaimed, award-winning epic fantasy that combines the history of China both in the Middle Ages and the recent past with a dangerous world of gods and monsters.',
    binding: 'paperback || hardcover',
  },

  {
    bookCover: 'book1',
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    genre: `${lightFiction}`,
    description: '451° Fahrenheit is the temperature at which the paper ignites and burns. Bradbury`s philosophical dystopia paints a bleak picture of the development of post-industrial society: this is the world of the future, in which all written publications are ruthlessly destroyed by a special squad of firefighters, and the storage of books is prosecuted, interactive television successfully serves to fool everyone, punitive psychiatry resolutely deals with rare dissidents, and an electric dog comes out to hunt for incorrigible dissidents ... A novel that has brought world fame to its creator.',
    binding: 'paperback || hardcover',
  },

  {
    bookCover: 'book17',
    title: '100 great mysteries of ufology',
    author: 'Dmitry Sokolov',
    genre: `${scienceFiction}, ${fantasy}`,
    description: 'Something about UFOs..',
    binding: 'paperback || hardcover',
  },

  {
    bookCover: 'book5',
    title: 'Antifragility. How to benefit from chaos',
    author: 'Taleb Nassim Nicholas',
    genre: `${nonFiction}, ${businessAndFinance}`,
    description: 'Antifragility is a unique book: she talks about the key property of people, systems, about a property that still had no name. In a world where uncertainty reigns, one cannot wish for more than to be antifragile, that is, to be able, when faced with the chaos of life, not just to remain unharmed, but also to become better than before, to evolve,...',
    binding: 'paperback || hardcover',
  },

  {
    bookCover: 'book10',
    title: 'Good to great',
    author: 'Collins Jim',
    genre: `${nonFiction}, ${businessAndFinance}`,
    description: 'No Descriptions..',
    binding: 'paperback || hardcover',
  },

  {
    bookCover: 'book12',
    title: 'The killer is sitting opposite. How the FBI exposes serial killers and maniacs',
    author: 'Douglas John, Olshaker Mark',
    genre: `${nonFiction}, ${politics}`,
    description: 'Four criminal cases and four dangerous maniacs who, without sympathy and remorse, took the lives of other people in cold blood. Who were they before their imprisonment and why did they decide to kill? In a tiny interrogation room, former FBI agent John Douglas talks to each of them and tries to understand how crimes originate. Analyzing case files, biographies and psychological states of murderers, he talks about how they think and what motivates them.',
    binding: 'paperback || hardcover'
  },

  {
    bookCover: 'book15',
    title: 'Theory of State and law',
    author: 'Matuzov Nikolai Ignatievich, Malko Alexander Vasilyevich',
    genre: `${nonFiction}, ${politics}`,
    description: 'The textbook outlines all the topics provided for by the state standard of higher professional education and the program on the theory of state and law, as well as a number of new topics that are important for the formation of a modern lawyer, the latest legislation, legal and political realities are taken into account.',
    binding: 'paperback || hardcover',
  },

  {
    bookCover: 'book18',
    title: 'Walking in Paris',
    author: 'Spout Boris Mikhailovich',
    genre: `${nonFiction}, ${travelBooks}`,
    description: 'This amazing guide to the great ancient city was written by a great connoisseur of France and Paris Boris Mikhailovich Nosik (1931-2015). A subtle novelist, chronicler of Russian emigration in France, author of the biographies of A. Akhmatova, A. Modigliani, V. Nabokov, translator of English and American classics, Boris Mikhailovich lived in Paris for more than a dozen years, fell in love with this city, its incomparable spirit, studied its history. The reader will see Paris of dArtagnan and Commissar Maigret, Ernest Hemingway and Honore de Balzac, Georges Brassance, Franz Liszt, great artists and poets, a city that has become a second homeland for several generations of Russian emigrants, and together with Boris Nosik will trace its history from the time of the Roman legionnaires to the present day. Inspired by the author`s praise of walking, we will start our walk from the island of Cité, Notre Dame Cathedral, the quiet island of Saint-Louis, follow the footsteps of Roman legionnaires, find ourselves in the Latin Quarter, walk along the street of the Fishing Cat, see Paris...',
    binding: 'paperback || hardcover',
  },

  {
    bookCover: 'book3',
    title: 'Turkey from the inside',
    author: 'Shcherbakova Angelika Nikolaevna',
    genre: `${nonFiction}, ${travelBooks}`,
    description: 'Turkey is a multi-faceted country, many great civilizations were born on its territory. It is famous for its architectural monuments, and its lands preserve a centuries-old history. This book will show that Turkey is not only package tours, but also an extraordinary nature, as well as an amazing mix of cultures, traditions and religions. Angelika Shcherbakova has been living in Turkey for more than 10 years. She shows the filming locations of Turkish TV series, maintains a website and a VKontakte group, where all useful information about Turkey is collected, as well as an Instagram blog, in which she talks about life in the country of contrasts. From personal experience, Angelika will share how Turks spend their free time, what their habits are, what cuisine and religion mean to them, and much more.',
    binding: 'paperback || hardcover',
  },

  {
    bookCover: 'book2',
    title: 'Charlie Chaplin: My amazing life',
    author: 'Charlie Chaplin',
    genre: `${nonFiction}, ${autobiography}`,
    description: 'I was born at eight o`clock on the evening of April 16, 1889 in London, in the Walworth district, on the East Line.',
    binding: 'paperback || hardcover',
  },

  {
    bookCover: 'book11',
    title: 'Steve Jobs',
    author: 'Isaacson Walter',
    genre: `${nonFiction}, ${autobiography}`,
    description: 'This biography is based on conversations with Steve Jobs himself, as well as with his relatives, friends, enemies, rivals and colleagues. Jobs had no control over the author. He answered all the questions frankly and expected the same honesty from the others. This is a story about a life full of ups and downs, about a strong man and a talented businessman who was one of the first to understand that to succeed in the XXI century, you need to combine creativity and technology. "I have never come across a more effective tool to help me make choices in important moments of life than the consciousness that I am going to die soon. Because almost everything -the expectations of others, pride, fear of getting into an awkward position or failing - all these things just recede in the face of death, and only what is really important remains." Steve Jobs, the founder and long-term head of Apple, the main generator of ideas that set the direction of all the activities of the corporation, Steve Jobs forever changed the world of digital technology. This book tells about the life of the creator of the Apple world, who became one of the symbols of technological progress and the digital revolution.',
    binding: 'paperback || hardcover',
  },

  {
    bookCover: 'book19',
    title: 'The Great Patriotic War. 1941-1945',
    author: 'Lyubaev Peter, Anastasia Bezgubova',
    genre: `${nonFiction}, ${history}`,
    description: 'An interactive, annotated book of short stories and poems dedicated to the Great Patriotic War.',
    binding: 'paperback || hardcover',
  },

  {
    bookCover: 'book4',
    title: 'Boris Akunin: Bright people of Ancient Russia',
    author: 'Boris Akunin',
    genre: `${nonFiction}, ${history}`,
    description: 'The history of Russia, told through the fate of the brightest figures of the national pantheon. After all, the most interesting thing in history is the people who made it. Boris Akunin, the author of the multi-volume History of the Russian State, focuses on those exceptional personalities who, due to circumstances and human qualities, seem to radiate a radiance that has not faded even in our times. "Illumination of History" is a literary and historical experiment. Each volume will consist of both historical essays and fiction short stories. "Bright People of Ancient Russia" is twelve essays and twelve short stories about twelve people, without whom today`s Russia would have turned out to be somewhat different, and in some cases even completely different.',
    binding: 'paperback || hardcover',
  },

  {
    bookCover: 'book8',
    title: 'Don Cavelli and the dead Cardinal',
    author: 'Conti David',
    genre: `${fiction}, ${thrillerOrMystery}`,
    description: 'Cardinal found dead in the Negev desert" - this news has stirred up all the world`s news channels. What made the venerable seventy-year-old minister of the church, one of the most likely candidates for the papacy, Eduardo Fontana, go alone on foot and without a supply of water to this perilous place? Donato Cavelli has the key to this mystery. Investigating the death of a good friend, he suddenly learns the solution to one of the most notorious crimes of the twentieth century.',
    binding: 'paperback || hardcover',
  },

  {
    bookCover: 'book6',
    title: 'Ergo is typing a message',
    author: 'Dontsenko Tatiana Evgenievna',
    genre: `${fiction}, ${thrillerOrMystery}`,
    description: 'This summer, every student of our school has a new friend. Some nice guy, a recent graduate, or something... it`s a pleasure to correspond with him. It seems like you`ve known each other for ages. And you don`t notice how you tell him everything, even secrets that you wouldn`t entrust to your best friend. Eleventh-grader Sanek is a real programming genius. In the summer, he wrote a chatbot that learned to really understand people based on their social media profiles. The collected data will help you learn more about Alyonka, who likes Sanka. But a harmless virtual character suddenly grows into something bigger and sinister. He managed to ingratiate himself with the whole school and acts not on the Internet, but in the real world, turning people into his tool. The heroes will have to resist the force that monitors every step and from which it is impossible to hide. Tatiana Dotsenko works as an actuary. Perhaps it is her mathematical education that helps her so accurately...',
    binding: 'paperback || hardcover',
  },

  {
    bookCover: 'book7',
    title: 'Burning to the ground',
    author: 'Scott Emma',
    genre: `${fiction}, ${romance}`,
    description: 'It is not an ideal story about how the sense of stability, which we often strive for, does not allow us to open our wings and pave the way to spiritual happiness. However, sooner or later true love comes to the heart, and then you will have to have the courage to open the doors for her...',
    binding: 'paperback || hardcover'
  },

  {
    bookCover: 'book20',
    title: 'Sed sit',
    author: 'Scott Emma',
    genre: `${fiction}, ${romance}`,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper iaculis leo non molestie. Nulla facilisi. Donec vel est massa.',
    binding: 'paperback || hardcover'
  },

  {
    bookCover: 'book21',
    title: 'Nullam malesuada',
    author: 'Scott Emma',
    genre: `${fiction}, ${healthOredicine}`,
    description: 'Ut in nunc et massa lacinia dapibus. Sed aliquet ornare.',
    binding: 'paperback || hardcover'
  },

  {
    bookCover: 'book22',
    title: 'Praesent ac',
    author: 'Scott Emma',
    genre: `${fiction}, ${healthOredicine}`,
    description: 'Pellentesque malesuada lorem a lacus cursus, non efficitur erat facilisis. Nullam sed neque sed nulla.',
    binding: 'paperback || hardcover'
  },

  {
    bookCover: 'book23',
    title: 'Mauris molestie',
    author: 'Scott Emma',
    genre: `${fiction}, ${encyclopedia}`,
    description: 'Quisque tempor posuere odio non finibus. Donec.',
    binding: 'paperback || hardcover'
  },

  {
    bookCover: 'book24',
    title: 'Mauris iaculis',
    author: 'Scott Emma',
    genre: `${fiction}, ${horror}`,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget tempor orci. Nunc.',
    binding: 'paperback || hardcover'
  },

  {
    bookCover: 'book25',
    title: 'Cras sagittis',
    author: 'Scott Emma',
    genre: `${fiction}, ${childrensBooks}`,
    description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque ut hendrerit est. Pellentesque congue hendrerit tincidunt. Vivamus luctus sagittis lorem a pulvinar. Ut molestie orci non ligula.',
    binding: 'paperback || hardcover'
  },

  {
    bookCover: 'book26',
    title: 'Aliquam non',
    author: 'Maecenas a.',
    genre: `${fiction}, ${horror}`,
    description: 'Maecenas vestibulum auctor ipsum consectetur posuere. Maecenas sed augue purus. Praesent porta efficitur sem, commodo tincidunt mi facilisis vehicula. Aenean condimentum dui tellus, ut porttitor est iaculis nec.',
    binding: 'paperback || hardcover'
  },

  {
    bookCover: 'book27',
    title: 'Sed ac',
    author: 'Scott Emma',
    genre: `${fiction}, ${encyclopedia}`,
    description: 'Quisque pellentesque velit ac aliquam tincidunt. Phasellus ex tortor, euismod vitae turpis at, condimentum.',
    binding: 'paperback || hardcover'
  },

  {
    bookCover: 'book28',
    title: 'Aliquam viverra',
    author: 'Maecenas a.',
    genre: `${fiction}, ${childrensBooks}`,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    binding: 'paperback || hardcover'
  },

  {
    bookCover: 'book29',
    title: 'Duis venenatis',
    author: 'Lorem ipsum.',
    genre: `${fiction}, ${satire}`,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt, mauris non.',
    binding: 'paperback || hardcover'
  },

  {
    bookCover: 'book30',
    title: 'Maecenas pharetra',
    author: 'Lorem ipsum.',
    genre: `${fiction}, ${satire}`,
    description: 'Cras ac venenatis ipsum. Nam nec est eleifend, vestibulum nisi.',
    binding: 'paperback || hardcover'
  },
];

(async () => {
  try {
    await connectToDb();

    books.forEach(async (item) => {
      const book = new Book();
      book.bookCover = item.bookCover;
      book.title = item.title
      book.author = item.author;
      book.genre = item.genre;
      book.description = item.description;
      book.binding = item.binding;

      await db.book.save(book);
    })
  } catch (err) {

  }
})();