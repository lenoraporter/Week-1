import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import { A } from '@ember/array';

const Artists = EmberObject.extend({
  name: '',
});

const Song = EmberObject.extend({
  title: '',
  rating: 0,
  band: ''
});

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

    let megStallion = Artists.create({ 
      name: 'Megan Thee Stallion',
      slug: 'meg-thee-stallion',
      songs: A([savage, bigDrank])
    });

    let cardiB = Artists.create({
      name: 'Cardi B ',
      slug: 'cardi-b',
      songs: A([bodakYellow])
    });

    let dojaCat = Artists.create({
      name: 'Doja Cat',
      slug: 'doja-cat',
      songs: A([saySo])
    });

    return A([megStallion, cardiB, dojaCat]);
  }
}
