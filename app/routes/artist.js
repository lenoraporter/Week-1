import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import { A } from '@ember/array';

const Artist = EmberObject.extend({
  name: '',
});

export default class ArtistRoute extends Route {
  model() {
    let megStallion = Artist.create({ name: 'Megan Thee Stallion' });
    let cardiB = Artist.create({ name: 'Cardi B '});
    let dojaCat = Artist.create({ name: 'Doja Cat'});

    return A([megStallion, cardiB, dojaCat]);
  }
}
