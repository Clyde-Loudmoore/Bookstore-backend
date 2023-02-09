import connectToDb from './src/db/connectToDb';
import db from './src/db';
import Book from './src/db/entities/Book';
import Genre from './src/db/entities/Genre';

const books = [
  {
    bookCover: 'book13.png',
    title: 'Babysitter',
    genre: ['Fantasy', 'Fiction'],
    author: 'Henry James',
    description: 'The young governess against her will finds herself dragged into a whirlpool of mysterious and mystical events, but she is ready to do anything to protect the orphaned children entrusted to her from infernal horror ... ("The turn of the screw") The young lady, who has not found eternal rest, regularly pays, as befits a respectable English ghost, for rent of the house in which... resides ("A rented haunted house") An eccentric lady checks the truth of the feelings of the applicants for her daughter`s hand with the help of the ability of these gentlemen to communicate with the family ghost — Sir Edmund Orme... ("Sir Edmund Orme") The young ladies who inherited a haunted house are jealous of each other of its restless inhabitant and at the same time are panicked that living under the same roof with a male ghost will cast a shadow on their reputation... ("Third Party") Returning home from Europe to New York after thirty-three years, the hero wanders through an empty house, trying to come to terms with his American "alter ego" ... ("Funny Corner") The book includes Gothic novels and short stories by the great Anglo-American writer Henry James, marked by his inherent combination of deep psychologism, refined style and sarcastic humor.',
    rating: '5',
    binding: 'paperback || hardcover',
    price: 5.99,
    dateOfIssue: '2000.01.01',
  },

  {
    bookCover: 'book7.png',
    title: 'Tiamat`s Anger',
    genre: ['Fantasy', 'Fiction'],
    author: 'James Corey',
    description: 'Thirteen hundred gates have opened to solar systems across the galaxy. But as humanity builds its interstellar empire on the ruins of an alien civilization, secrets and threats grow. In the dead systems beyond the gates, where things are more unusual than new planets, Elvi Okoye is desperately trying to understand the nature of the genocide that happened before the appearance of the first man, and to find weapons for war with almost unimaginable forces. But this knowledge may cost more than she is able to pay. In the heart of the Laconian Empire, Teresa Duarte is preparing to share the burden of power with her aspiring father. The palace is full of intrigues and dangers, the sociopathic scientist Paolo Cortazar and the diabolical prisoner James Holden are just two of them. But Theresa has her own head on her shoulders and secrets unknown even to the father-emperor. And throughout the expanses of the human empire, the Rocinante team, divided by circumstances, is conducting rearguard battles against the Duarte regime. The old order is being forgotten, and the future under the eternal rule of Laconia seems increasingly inevitable, and with it a war that humanity can only lose. After all, courage and ambition are not enough to fight against the horror lurking between the worlds…',
    rating: '5',
    binding: 'paperback || hardcover',
    price: 7.99,
    dateOfIssue: '2002.01.01',
  },

  {
    bookCover: 'book9.png',
    title: 'The Flaming God',
    genre: ['Light fiction', 'Thriller / Mystery'],
    author: 'Rebecca Quang',
    description: 'After bloody battles with the remnants of the Mukden army and the Hesperian allies who want to appropriate any wealth, Rin is left with nothing again. Betrayed and crippled, she flees Arlong to gather her strength and strike at the enemy. But her new allies in the leadership of the Southern Coalition are crafty and unreliable, Rin quickly realizes that the real power in Nikan is millions of ordinary people who seek revenge and worship her as the goddess of salvation. However, as her power and influence grows, the intoxicating voice of the Phoenix grows stronger, calling on her to burn the whole world. And it`s getting harder to resist him... A spectacular conclusion to the Opium War trilogy, Rebecca Quang`s acclaimed, award-winning epic fantasy that combines the history of China both in the Middle Ages and the recent past with a dangerous world of gods and monsters.',
    rating: '5',
    binding: 'paperback || hardcover',
    price: 9.99,
    dateOfIssue: '2004.01.01',
  },

  {
    bookCover: 'book1.png',
    title: 'Fahrenheit 451',
    genre: ['Light fiction', 'Thriller / Mystery'],
    author: 'Ray Bradbury',
    description: '451° Fahrenheit is the temperature at which the paper ignites and burns. Bradbury`s philosophical dystopia paints a bleak picture of the development of post-industrial society: this is the world of the future, in which all written publications are ruthlessly destroyed by a special squad of firefighters, and the storage of books is prosecuted, interactive television successfully serves to fool everyone, punitive psychiatry resolutely deals with rare dissidents, and an electric dog comes out to hunt for incorrigible dissidents ... A novel that has brought world fame to its creator.',
    rating: '5',
    binding: 'paperback || hardcover',
    price: 11.99,
    dateOfIssue: '2006.01.01',
  },

  {
    bookCover: 'book17.png',
    title: '100 great mysteries',
    genre: ['Fiction', 'Science-fiction'],
    author: 'Dmitry Sokolov',
    description: 'Something about UFOs..',
    rating: '5',
    binding: 'paperback || hardcover',
    price: 13.99,
    dateOfIssue: '2008.01.01',
  },

  {
    bookCover: 'book5.png',
    title: 'Antifragility',
    genre: ['Fiction', 'Science-fiction'],
    author: 'Taleb Nassim',
    description: 'Antifragility is a unique book: she talks about the key property of people, systems, about a property that still had no name. In a world where uncertainty reigns, one cannot wish for more than to be antifragile, that is, to be able, when faced with the chaos of life, not just to remain unharmed, but also to become better than before, to evolve,...',
    rating: '5',
    binding: 'paperback || hardcover',
    price: 15.99,
    dateOfIssue: '2010.01.01',
  },

  {
    bookCover: 'book10.png',
    title: 'Good to great',
    genre: ['Fiction', 'Business & Finance'],
    author: 'Collins Jim',
    description: 'No Descriptions..',
    rating: '5',
    binding: 'paperback || hardcover',
    price: 17.99,
    dateOfIssue: '2012.01.01',
  },

  {
    bookCover: 'book12.png',
    title: 'The killer',
    genre: ['Fiction', 'Business & Finance'],
    author: 'Douglas',
    description: 'Four criminal cases and four dangerous maniacs who, without sympathy and remorse, took the lives of other people in cold blood. Who were they before their imprisonment and why did they decide to kill? In a tiny interrogation room, former FBI agent John Douglas talks to each of them and tries to understand how crimes originate. Analyzing case files, biographies and psychological states of murderers, he talks about how they think and what motivates them.',
    rating: '5',
    binding: 'paperback || hardcover',
    price: 19.99,
    dateOfIssue: '2014.01.01',
  },

  {
    bookCover: 'book15.png',
    title: 'Theory of S&L',
    genre: ['Non—fiction', 'History'],
    author: 'Matuzov, Malko',
    description: 'The textbook outlines all the topics provided for by the state standard of higher professional education and the program on the theory of state and law, as well as a number of new topics that are important for the formation of a modern lawyer, the latest legislation, legal and political realities are taken into account.',
    rating: '5',
    binding: 'paperback || hardcover',
    price: 21.99,
    dateOfIssue: '2016.01.01',
  },

  {
    bookCover: 'book18.png',
    title: 'Walking in Paris',
    genre: ['Non—fiction', 'Travel books'],
    author: 'Spout Boris',
    description: 'This amazing guide to the great ancient city was written by a great connoisseur of France and Paris Boris Mikhailovich Nosik (1931-2015). A subtle novelist, chronicler of Russian emigration in France, author of the biographies of A. Akhmatova, A. Modigliani, V. Nabokov, translator of English and American classics, Boris Mikhailovich lived in Paris for more than a dozen years, fell in love with this city, its incomparable spirit, studied its history. The reader will see Paris of dArtagnan and Commissar Maigret, Ernest Hemingway and Honore de Balzac, Georges Brassance, Franz Liszt, great artists and poets, a city that has become a second homeland for several generations of Russian emigrants, and together with Boris Nosik will trace its history from the time of the Roman legionnaires to the present day. Inspired by the author`s praise of walking, we will start our walk from the island of Cité, Notre Dame Cathedral, the quiet island of Saint-Louis, follow the footsteps of Roman legionnaires, find ourselves in the Latin Quarter, walk along the street of the Fishing Cat, see Paris...',
    rating: '5',
    binding: 'paperback || hardcover',
    price: 23.99,
    dateOfIssue: '2018.01.01',
  },

  {
    bookCover: 'book3.png',
    title: 'Turkey',
    genre: ['Non—fiction', 'Travel books'],
    author: 'Shcherbakova',
    description: 'Turkey is a multi-faceted country, many great civilizations were born on its territory. It is famous for its architectural monuments, and its lands preserve a centuries-old history. This book will show that Turkey is not only package tours, but also an extraordinary nature, as well as an amazing mix of cultures, traditions and religions. Angelika Shcherbakova has been living in Turkey for more than 10 years. She shows the filming locations of Turkish TV series, maintains a website and a VKontakte group, where all useful information about Turkey is collected, as well as an Instagram blog, in which she talks about life in the country of contrasts. From personal experience, Angelika will share how Turks spend their free time, what their habits are, what cuisine and religion mean to them, and much more.',
    rating: '5',
    binding: 'paperback || hardcover',
    price: 25.99,
    dateOfIssue: '2020.01.01',
  },

  {
    bookCover: 'book2.png',
    title: 'Charlie Chaplin',
    genre: ['Non—fiction', 'Autobiography'],
    author: 'Charlie Chaplin',
    description: 'I was born at eight o`clock on the evening of April 16, 1889 in London, in the Walworth district, on the East Line.',
    rating: '5',
    binding: 'paperback || hardcover',
    price: 25.99,
    dateOfIssue: '2022.01.01',
  },

  {
    bookCover: 'book11.png',
    title: 'Steve Jobs',
    genre: ['Non—fiction', 'Autobiography'],
    author: 'Isaacson Walter',
    description: 'This biography is based on conversations with Steve Jobs himself, as well as with his relatives, friends, enemies, rivals and colleagues. Jobs had no control over the author. He answered all the questions frankly and expected the same honesty from the others. This is a story about a life full of ups and downs, about a strong man and a talented businessman who was one of the first to understand that to succeed in the XXI century, you need to combine creativity and technology. "I have never come across a more effective tool to help me make choices in important moments of life than the consciousness that I am going to die soon. Because almost everything -the expectations of others, pride, fear of getting into an awkward position or failing - all these things just recede in the face of death, and only what is really important remains." Steve Jobs, the founder and long-term head of Apple, the main generator of ideas that set the direction of all the activities of the corporation, Steve Jobs forever changed the world of digital technology. This book tells about the life of the creator of the Apple world, who became one of the symbols of technological progress and the digital revolution.',
    rating: '5',
    binding: 'paperback || hardcover',
    price: 6.99,
    dateOfIssue: '2001.01.01',
  },

  {
    bookCover: 'book19.png',
    title: 'Patriotic War.',
    genre: ['Non—fiction', 'History'],
    author: 'Lyubaev',
    description: 'An interactive, annotated book of short stories and poems dedicated to the Great Patriotic War.',
    rating: '5',
    binding: 'paperback || hardcover',
    price: 8.99,
    dateOfIssue: '2003.01.01',
  },

  {
    bookCover: 'book4.png',
    title: 'Bright people',
    genre: ['Fiction', 'Politics'],
    author: 'Boris Akunin',
    description: 'The history of Russia, told through the fate of the brightest figures of the national pantheon. After all, the most interesting thing in history is the people who made it. Boris Akunin, the author of the multi-volume History of the Russian State, focuses on those exceptional personalities who, due to circumstances and human qualities, seem to radiate a radiance that has not faded even in our times. "Illumination of History" is a literary and historical experiment. Each volume will consist of both historical essays and fiction short stories. "Bright People of Ancient Russia" is twelve essays and twelve short stories about twelve people, without whom today`s Russia would have turned out to be somewhat different, and in some cases even completely different.',
    rating: '5',
    binding: 'paperback || hardcover',
    price: 10.99,
    dateOfIssue: '2005.01.01',
  },

  {
    bookCover: 'book8.png',
    title: 'Don Cavelli',
    genre: ['Fiction', 'Politics'],
    author: 'Conti David',
    description: 'Cardinal found dead in the Negev desert" - this news has stirred up all the world`s news channels. What made the venerable seventy-year-old minister of the church, one of the most likely candidates for the papacy, Eduardo Fontana, go alone on foot and without a supply of water to this perilous place? Donato Cavelli has the key to this mystery. Investigating the death of a good friend, he suddenly learns the solution to one of the most notorious crimes of the twentieth century.',
    rating: '5',
    binding: 'paperback || hardcover',
    price: 12.99,
    dateOfIssue: '2007.01.01',
  },

  {
    bookCover: 'book6.png',
    title: 'Ergo',
    genre: ['Fiction', 'Romance'],
    author: 'Dontsenko Tatiana',
    description: 'This summer, every student of our school has a new friend. Some nice guy, a recent graduate, or something... it`s a pleasure to correspond with him. It seems like you`ve known each other for ages. And you don`t notice how you tell him everything, even secrets that you wouldn`t entrust to your best friend. Eleventh-grader Sanek is a real programming genius. In the summer, he wrote a chatbot that learned to really understand people based on their social media profiles. The collected data will help you learn more about Alyonka, who likes Sanka. But a harmless virtual character suddenly grows into something bigger and sinister. He managed to ingratiate himself with the whole school and acts not on the Internet, but in the real world, turning people into his tool. The heroes will have to resist the force that monitors every step and from which it is impossible to hide. Tatiana Dotsenko works as an actuary. Perhaps it is her mathematical education that helps her so accurately...',
    rating: '5',
    binding: 'paperback || hardcover',
    price: 14.99,
    dateOfIssue: '2009.01.01',
  },

  {
    bookCover: 'book7.png',
    title: 'Burning',
    genre: ['Fiction', 'Romance'],
    author: 'Scott Emma',
    description: 'It is not an ideal story about how the sense of stability, which we often strive for, does not allow us to open our wings and pave the way to spiritual happiness. However, sooner or later true love comes to the heart, and then you will have to have the courage to open the doors for her...',
    rating: '5',
    binding: 'paperback || hardcover',
    price: 16.99,
    dateOfIssue: '2011.01.01',
  },

  {
    bookCover: 'book20.png',
    title: 'Sed sit',
    genre: ['Fiction', 'Satire'],
    author: 'Scott Emma',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper iaculis leo non molestie. Nulla facilisi. Donec vel est massa.',
    rating: '5',
    binding: 'paperback || hardcover',
    price: 18.99,
    dateOfIssue: '2013.01.01',
  },

  {
    bookCover: 'book21.png',
    title: 'Nullam malesuada',
    genre: ['Fiction', 'Satire'],
    author: 'Scott Emma',
    description: 'Ut in nunc et massa lacinia dapibus. Sed aliquet ornare.',
    rating: '5',
    binding: 'paperback || hardcover',
    price: 20.99,
    dateOfIssue: '2015.01.01',
  },

  {
    bookCover: 'book22.png',
    title: 'Praesent ac',
    genre: ['Fiction', 'Horror'],
    author: 'Scott Emma',
    description: 'Pellentesque malesuada lorem a lacus cursus, non efficitur erat facilisis. Nullam sed neque sed nulla.',
    rating: '5',
    binding: 'paperback || hardcover',
    price: 22.99,
    dateOfIssue: '2017.01.01',
  },

  {
    bookCover: 'book23.png',
    title: 'Mauris molestie',
    genre: ['Fiction', 'Horror'],
    author: 'Scott Emma',
    description: 'Quisque tempor posuere odio non finibus. Donec.',
    rating: '5',
    binding: 'paperback || hardcover',
    price: 24.99,
    dateOfIssue: '2019.01.01',
  },

  {
    bookCover: 'book24.png',
    title: 'Mauris iaculis',
    genre: ['Fiction', 'Horror'],
    author: 'Scott Emma',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget tempor orci. Nunc.',
    rating: '5',
    binding: 'paperback || hardcover',
    price: 6.00,
    dateOfIssue: '2021.01.01',
  },

  {
    bookCover: 'book25.png',
    title: 'Cras sagittis',
    genre: ['Fiction', 'Horror'],
    author: 'Scott Emma',
    description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque ut hendrerit est. Pellentesque congue hendrerit tincidunt. Vivamus luctus sagittis lorem a pulvinar. Ut molestie orci non ligula.',
    rating: '5',
    binding: 'paperback || hardcover',
    price: 8.00,
    dateOfIssue: '2023.01.01',
  },

  {
    bookCover: 'book26.png',
    title: 'Aliquam non',
    genre: ['Fiction', 'Health / Medicine'],
    author: 'Maecenas a.',
    description: 'Maecenas vestibulum auctor ipsum consectetur posuere. Maecenas sed augue purus. Praesent porta efficitur sem, commodo tincidunt mi facilisis vehicula. Aenean condimentum dui tellus, ut porttitor est iaculis nec.',
    rating: '5',
    binding: 'paperback || hardcover',
    price: 12.23,
    dateOfIssue: '2000.01.01',
  },

  {
    bookCover: 'book27.png',
    title: 'Sed ac',
    genre: ['Fiction', 'Health / Medicine'],
    author: 'Scott Emma',
    description: 'Quisque pellentesque velit ac aliquam tincidunt. Phasellus ex tortor, euismod vitae turpis at, condimentum.',
    rating: '5',
    binding: 'paperback || hardcover',
    price: 17.89,
    dateOfIssue: '2005.01.01',
  },

  {
    bookCover: 'book28.png',
    title: 'Aliquam viverra',
    genre: ['Fiction', 'Children`s books'],
    author: 'Maecenas a.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    rating: '5',
    binding: 'paperback || hardcover',
    price: 25.00,
    dateOfIssue: '2014.01.01',
  },

  {
    bookCover: 'book29.png',
    title: 'Duis venenatis',
    genre: ['Fiction', 'Children`s books'],
    author: 'Lorem ipsum.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt, mauris non.',
    rating: '5',
    binding: 'paperback || hardcover',
    price: 5.67,
    dateOfIssue: '2013.01.01',
  },

  {
    bookCover: 'book30.png',
    title: 'Maecenas',
    genre: ['Fiction', 'Encyclopedia'],
    author: 'Lorem ipsum.',
    description: 'Cras ac venenatis ipsum. Nam nec est eleifend, vestibulum nisi.',
    rating: '5',
    binding: 'paperback || hardcover',
    price: 14.89,
    dateOfIssue: '2007.01.01',
  },
];

// const genres = [
//   'Fiction',
//   'Non—fiction',
//   'Light fiction',
//   'Science-fiction',
//   'Fantasy',
//   'Business & Finance',
//   'Politics',
//   'Travel books',
//   'Autobiography',
//   'History',
//   'Thriller / Mystery',
//   'Romance',
//   'Satire',
//   'Horror',
//   'Health / Medicine',
//   'Children`s books',
//   'Encyclopedia'];

(async () => {
  try {
    await connectToDb();

    // genres.forEach(async (elem) => {
    //   const genre = new Genre();
    //   genre.genreName = elem;

    //   await db.genre.save(genre);
    // })

    books.forEach(async (item) => {
      const genreArr: Genre[] = [];

      const book = new Book();
      book.bookCover = item.bookCover;
      book.title = item.title;
      book.author = item.author;
      book.description = item.description;
      book.rating = item.rating;
      book.binding = item.binding;
      book.price = item.price;
      book.dateOfIssue = item.dateOfIssue;

      for (let i = 0; i < item.genre.length; i++) {
        const genreElem = await db.genre.findOne({ where: { genreName: item.genre[i] } });

        genreArr.push(genreElem as Genre);
      }

      book.genre = genreArr;

      await db.book.save(book);
    });


  } catch (err) {
    console.log(err);
  }
})();