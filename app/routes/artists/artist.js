import Route from '@ember/routing/route';
import {inject as service } from '@ember/service';

export default Route.extend({

  router: service(),

  model(params) {
    let artists = this.modelFor('artists');
      return artists.find(artist => artist.slug === params.slug);
  },

  redirect(band) {
    if (band.description) {
      this.router.transitionTo('artists.artist.details');
    } else {
      this.router.transitionTo('artists.artist.songs');
    }
  }
})