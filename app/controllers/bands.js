import Controller from '@ember/controller';
import { action } from '@ember/object';
import Band from 'music-collection/models/band';
import { empty } from '@ember/object/computed';
import { inject as service } from '@ember/service'; 
import { dasherize } from '@ember/string';

export default class BandsController extends Controller {
  isAddingBand = false
  newBandName = ''

  @empty('newBandName') isAddButtonDisabled;

  @service router

  @action
  addBand() {
    this.set('isAddingBand', true); 
  }

  @action
  cancelAddBand() {
    this.set('isAddingBand', false);
  }

  @action
  saveBand(event) {
    event.preventDefault();
    let newBand = Band.create({ name: this.newBandName });
    this.model.pushObject(newBand);
    this.setProperties({
    newBandName: '',
    isAddingBand: false });
    newBand.set('slug', dasherize(newBand.name));
    this.router.transitionTo('bands.band.songs', newBand.slug);
  }
}
