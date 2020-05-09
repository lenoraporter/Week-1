import Controller from '@ember/controller';
import { action } from '@ember/object';
import Artist from 'music-collection/models/artist';
import { empty } from '@ember/object/computed';

export default class ArtistsController extends Controller {
  isAddingArtist = false
  newArtistName = ''

  @empty('newArtistName') isAddButtonDisabled;

  @action
  addArtist() {
    this.set('isAddingArtist', true); 
  }

  @action
  cancelAddArtist() {
    this.set('isAddingArtist', false);
  }

  @action
  saveArtist(e) {
    event.preventDefault();
    let newArtist = Artist.create({ name: this.newArtistName });
    this.model.pushObject(newArtist);
    this.set('newArtistName', '');
  }
}
