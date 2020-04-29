import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import { A } from '@ember/array';

let Song = EmberObject.extend({
  title: '',
  band: '',
  rating: 0
});

export default class ApplicationRoute extends Route {
  model() {
    let megStallion = Song.create({
      title: 'Savage',
      artist: 'Megan Thee Stallion',
      rating: 10
    });

    let cardiB = Song.create({
      title: "Bodak Yellow",
      artist: "Cardi B",
      rating: 7
    });

    let dojaCat = Song.create({
      title: "Say So",
      artist: "Doja Cat",
      rating: 9
    });

    return A([megStallion, cardiB, dojaCat]);
  } 
}
