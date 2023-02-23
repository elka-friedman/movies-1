const { db, User, Movie } = require("./server/db");
// const {red,green} = require('chalk');

const movies_info = [
  {
    title: "Cottage, The",
    genre: "Thriller",
    description:
      "dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia",
    imageUrl: "http://dummyimage.com/130x100.png/5fa2dd/ffffff",
    ratings: 1,
  },
  {
    title: "Jonny Vang",
    genre: "Comedy|Drama|Mystery",
    description:
      "primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel",
    imageUrl: "http://dummyimage.com/223x100.png/cc0000/ffffff",
    ratings: 2,
  },
  {
    title: "Best Defense",
    genre: "Comedy|War",
    description:
      "ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque",
    imageUrl: "http://dummyimage.com/166x100.png/dddddd/000000",
    ratings: 3,
  },
  {
    title: "Fullmetal Alchemist: The Sacred Star of Milos",
    genre: "Action|Adventure|Animation",
    description:
      "in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae",
    imageUrl: "http://dummyimage.com/240x100.png/dddddd/000000",
    ratings: 5,
  },
  {
    title: "Year of the Gun",
    genre: "Action|Romance|Thriller",
    description:
      "interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue",
    imageUrl: "http://dummyimage.com/170x100.png/ff4444/ffffff",
    ratings: 1,
  },
  {
    title: "Spinning Plates",
    genre: "Documentary",
    description:
      "mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus",
    imageUrl: "http://dummyimage.com/231x100.png/dddddd/000000",
    ratings: 1,
  },
  {
    title: "Made",
    genre: "Comedy",
    description:
      "arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst",
    imageUrl: "http://dummyimage.com/198x100.png/ff4444/ffffff",
    ratings: 4,
  },
  {
    title: "Dead Tired (Grosse Fatigue)",
    genre: "Comedy",
    description:
      "sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci",
    imageUrl: "http://dummyimage.com/161x100.png/dddddd/000000",
    ratings: 2,
  },
  {
    title: "Tale of Despereaux, The",
    genre: "Adventure|Animation|Children|Comedy|Fantasy",
    description:
      "gravida sem praesent id massa id nisl venenatis lacinia aenean",
    imageUrl: "http://dummyimage.com/203x100.png/5fa2dd/ffffff",
    ratings: 2,
  },
  {
    title: "All the Real Girls",
    genre: "Drama|Romance",
    description:
      "ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat",
    imageUrl: "http://dummyimage.com/234x100.png/ff4444/ffffff",
    ratings: 1,
  },
  {
    title: "Man with Two Brains, The",
    genre: "Comedy",
    description:
      "bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at",
    imageUrl: "http://dummyimage.com/227x100.png/dddddd/000000",
    ratings: 1,
  },
  {
    title: "Downstairs",
    genre: "Drama",
    description:
      "in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti",
    imageUrl: "http://dummyimage.com/130x100.png/ff4444/ffffff",
    ratings: 2,
  },
  {
    title: "Roaring Twenties, The",
    genre: "Crime|Drama|Thriller",
    description:
      "a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt",
    imageUrl: "http://dummyimage.com/126x100.png/ff4444/ffffff",
    ratings: 1,
  },
  {
    title: "Inside Moves",
    genre: "Drama",
    description:
      "metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    imageUrl: "http://dummyimage.com/200x100.png/ff4444/ffffff",
    ratings: 2,
  },
  {
    title: "First Snow",
    genre: "Drama|Thriller",
    description:
      "lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam",
    imageUrl: "http://dummyimage.com/126x100.png/dddddd/000000",
    ratings: 3,
  },
  {
    title: "Bikes vs Cars",
    genre: "Documentary",
    description:
      "lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in",
    imageUrl: "http://dummyimage.com/244x100.png/cc0000/ffffff",
    ratings: 5,
  },
  {
    title: "Rock 'N' Roll High School",
    genre: "Comedy|Musical",
    description:
      "curae nulla dapibus dolor vel est donec odio justo sollicitudin",
    imageUrl: "http://dummyimage.com/170x100.png/cc0000/ffffff",
    ratings: 1,
  },
  {
    title: "Other Voices, Other Rooms",
    genre: "Drama",
    description:
      "et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue",
    imageUrl: "http://dummyimage.com/200x100.png/cc0000/ffffff",
    ratings: 2,
  },
  {
    title: "Fido",
    genre: "Comedy|Horror|Thriller",
    description:
      "faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec",
    imageUrl: "http://dummyimage.com/131x100.png/5fa2dd/ffffff",
    ratings: 1,
  },
  {
    title: "Daisy",
    genre: "Drama|Romance",
    description:
      "eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla",
    imageUrl: "http://dummyimage.com/142x100.png/dddddd/000000",
    ratings: 4,
  },
  {
    title: "Thief Lord, The",
    genre: "Adventure|Children|Fantasy",
    description:
      "lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate",
    imageUrl: "http://dummyimage.com/163x100.png/5fa2dd/ffffff",
    ratings: 1,
  },
  {
    title: "Police Academy 6: City Under Siege",
    genre: "Comedy|Crime",
    description:
      "justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie",
    imageUrl: "http://dummyimage.com/191x100.png/5fa2dd/ffffff",
    ratings: 3,
  },
  {
    title: "Uwasa No Onna (The Woman in the Rumor) (Her Mother's Profession)",
    genre: "Drama|Romance",
    description:
      "risus dapibus augue vel accumsan tellus nisi eu orci mauris",
    imageUrl: "http://dummyimage.com/130x100.png/dddddd/000000",
    ratings: 5,
  },
  {
    title: "April Showers",
    genre: "Drama",
    description:
      "dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque",
    imageUrl: "http://dummyimage.com/177x100.png/cc0000/ffffff",
    ratings: 4,
  },
  {
    title: "The Brave Little Toaster Goes to Mars",
    genre: "Animation|Children",
    description:
      "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec",
    imageUrl: "http://dummyimage.com/207x100.png/5fa2dd/ffffff",
    ratings: 5,
  },
];

    

  const users = [
    {
      firstName: "Allina",
      lastName: "Stuther",
      email: "astuther0@bloglovin.com",
      imageUrl: "http://dummyimage.com/196x100.png/cc0000/ffffff",
      userRating: 2,
    },
    {
      firstName: "Rene",
      lastName: "Josiah",
      email: "rjosiah1@imgur.com",
      imageUrl: "http://dummyimage.com/210x100.png/5fa2dd/ffffff",
      userRating: 3,
    },
    {
      firstName: "Ramsey",
      lastName: "Baldacchi",
      email: "rbaldacchi2@arizona.edu",
      imageUrl: "http://dummyimage.com/220x100.png/ff4444/ffffff",
      userRating: 1,
    },
    {
      firstName: "Jethro",
      lastName: "Abba",
      email: "jabba3@cnn.com",
      imageUrl: "http://dummyimage.com/170x100.png/5fa2dd/ffffff",
      userRating: 1,
    },
    {
      firstName: "Rivkah",
      lastName: "Kybert",
      email: "rkybert4@cbsnews.com",
      imageUrl: "http://dummyimage.com/106x100.png/cc0000/ffffff",
      userRating: 1,
    },
    {
      firstName: "Nellie",
      lastName: "Enticott",
      email: "nenticott5@reuters.com",
      imageUrl: "http://dummyimage.com/132x100.png/5fa2dd/ffffff",
      userRating: 2,
    },
    {
      firstName: "Sergio",
      lastName: "Cestard",
      email: "scestard6@wix.com",
      imageUrl: "http://dummyimage.com/130x100.png/cc0000/ffffff",
      userRating: 3,
    },
    {
      firstName: "Stephi",
      lastName: "d'Arcy",
      email: "sdarcy7@mac.com",
      imageUrl: "http://dummyimage.com/220x100.png/5fa2dd/ffffff",
      userRating: 3,
    },
    {
      firstName: "Audra",
      lastName: "Domb",
      email: "adomb8@sina.com.cn",
      imageUrl: "http://dummyimage.com/130x100.png/cc0000/ffffff",
      userRating: 5,
    },
    {
      firstName: "Kari",
      lastName: "Dahlen",
      email: "kdahlen9@e-recht24.de",
      imageUrl: "http://dummyimage.com/179x100.png/cc0000/ffffff",
      userRating: 1,
    },
    {
      firstName: "Pegeen",
      lastName: "Soutter",
      email: "psouttera@list-manage.com",
      imageUrl: "http://dummyimage.com/183x100.png/cc0000/ffffff",
      userRating: 4,
    },
    {
      firstName: "Cosetta",
      lastName: "Parzis",
      email: "cparzisb@zdnet.com",
      imageUrl: "http://dummyimage.com/206x100.png/dddddd/000000",
      userRating: 1,
    },
    {
      firstName: "Marta",
      lastName: "Hewins",
      email: "mhewinsc@ustream.tv",
      imageUrl: "http://dummyimage.com/200x100.png/5fa2dd/ffffff",
      userRating: 4,
    },
    {
      firstName: "Blanch",
      lastName: "Males",
      email: "bmalesd@cocolog-nifty.com",
      imageUrl: "http://dummyimage.com/211x100.png/ff4444/ffffff",
      userRating: 2,
    },
    {
      firstName: "Andy",
      lastName: "Hing",
      email: "ahinge@wordpress.org",
      imageUrl: "http://dummyimage.com/143x100.png/dddddd/000000",
      userRating: 1,
    },
    {
      firstName: "Tomaso",
      lastName: "Murden",
      email: "tmurdenf@va.gov",
      imageUrl: "http://dummyimage.com/132x100.png/dddddd/000000",
      userRating: 5,
    },
    {
      firstName: "Annis",
      lastName: "Stickells",
      email: "astickellsg@is.gd",
      imageUrl: "http://dummyimage.com/187x100.png/cc0000/ffffff",
      userRating: 5,
    },
    {
      firstName: "Bobinette",
      lastName: "Farahar",
      email: "bfaraharh@quantcast.com",
      imageUrl: "http://dummyimage.com/199x100.png/5fa2dd/ffffff",
      userRating: 4,
    },
    {
      firstName: "Derby",
      lastName: "Mandrey",
      email: "dmandreyi@baidu.com",
      imageUrl: "http://dummyimage.com/195x100.png/ff4444/ffffff",
      userRating: 4,
    },
    {
      firstName: "Nickolaus",
      lastName: "Blazic",
      email: "nblazicj@wired.com",
      imageUrl: "http://dummyimage.com/130x100.png/dddddd/000000",
      userRating: 1,
    },
    {
      firstName: "Moshe",
      lastName: "Ditch",
      email: "mditchk@paypal.com",
      imageUrl: "http://dummyimage.com/123x100.png/cc0000/ffffff",
      userRating: 1,
    },
    {
      firstName: "Edi",
      lastName: "Gurton",
      email: "egurtonl@rambler.ru",
      imageUrl: "http://dummyimage.com/183x100.png/dddddd/000000",
      userRating: 1,
    },
    {
      firstName: "Allan",
      lastName: "Cluelow",
      email: "acluelowm@globo.com",
      imageUrl: "http://dummyimage.com/173x100.png/ff4444/ffffff",
      userRating: 4,
    },
    {
      firstName: "Cornela",
      lastName: "Vezey",
      email: "cvezeyn@unicef.org",
      imageUrl: "http://dummyimage.com/232x100.png/dddddd/000000",
      userRating: 3,
    },
    {
      firstName: "Glyn",
      lastName: "Winslow",
      email: "gwinslowo@printfriendly.com",
      imageUrl: "http://dummyimage.com/249x100.png/cc0000/ffffff",
      userRating: 3,
    },
  ];


const seed = async() => {
  try {
    await db.sync({force: true});
    await Promise.all(
      users.map(user => {
        return User.create(user);
      })
    )
  await Promise.all(
    movies_info.map(movie => {
      return Movie.create(movie);
      })
    )
  } catch (err) {
  console.log(err)
  }
}

module.exports = seed;

if(require.main === module) {
  seed()
  .then(() => {
    console.log(('Seeding success!'));
    db.close()
  })
  .catch((err) => {
    console.error(('something went wrong!'))
    console.error(err);
    db.close()
  });
}


