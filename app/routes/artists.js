import Route from '@ember/routing/route';

export default class ArtistsRoute extends Route {
  model() {
    let savage = Song.create({
      title: 'Savage',
      artist: 'Megan Thee Stallion',
      rating: 10
    });

    let bodakYellow = Song.create({
      title: "Bodak Yellow",
      artist: "Cardi B",
      rating: 7
    });

    let saySo = Song.create({
      title: "Say So",
      artist: "Doja Cat",
      rating: 9
    });

    let bigDrank = Song.create({
      title: 'Big Drank',
      artist: 'Megan Thee Stallion',
      rating: 4
    });

    let megStallion = Artist.create({ 
      name: 'Megan Thee Stallion',
      slug: 'meg-thee-stallion',
      songs: A([savage, bigDrank]),
      description: 'Megan Thee Stallion is a Houston Texas artist.'
    });

    let cardiB = Artist.create({
      name: 'Cardi B ',
      slug: 'cardi-b',
      songs: A([bodakYellow]),
      description: 'Cardi B is a New York artist.'
    });

    let dojaCat = Artist.create({
      name: 'Doja Cat',
      slug: 'doja-cat',
      songs: A([saySo]),
      description: 'Doja Cat is a Los Angeles artist.'
    });
    return this.store.findAll('band');
  }
}
