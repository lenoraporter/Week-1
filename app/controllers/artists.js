import Controller from '@ember/controller';
import { action } from '@ember/object';
import Artist from 'music-collection/models/artist';
import { empty } from '@ember/object/computed';
import { inject as service } from '@ember/service'; 
import { dasherize } from '@ember/string';

export default class ArtistsController extends Controller {
  isAddingArtist = false
  newArtistName = ''

  @empty('newArtistName') isAddButtonDisabled;

  @service router

  @action
  addArtist() {
    this.set('isAddingArtist', true); 
  }

  @action
  cancelAddArtist() {
    this.set('isAddingArtist', false);
  }

  @action
  saveArtist(event) {
    event.preventDefault();
    let newArtist = Artist.create({ name: this.newArtistName });
    this.model.pushObject(newArtist);
    this.setProperties({
    newArtistName: '',
    isAddingBand: false });
    newArtist.set('slug', dasherize(newArtist.name));
    this.router.transitionTo('artists.artist.songs', newArtist.slug);
  }
}
