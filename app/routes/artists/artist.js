import Route from '@ember/routing/route';

export default class ArtistsArtistRoute extends Route {
  model(params) {
    let artists = this.modelFor('artists');
      return artists.find(artist => artist.slug === params.slug);
  }
}
