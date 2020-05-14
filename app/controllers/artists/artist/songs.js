import Controller from '@ember/controller';
import Song from 'music-collection/models/song';
import { action } from '@ember/object';
import { empty } from '@ember/object/computed';
import song from "../../../models/song";

export default class SongsController extends Controller {
  isAddingSong = false 
  newSongTitle = ""

  @empty('newSongTitle') isAddButtonDisabled

  @action
  addSong() { 
    this.set('isAddingSong', true);
  }

  @action
  cancelAddSong() { 
    this.set('isAddingSong', false);
  }

  @action
  saveSong(event) {
    event.preventDefault();
    let newSong = Song.create({ title: this.newSongTitle }); 
    this.model.songs.pushObject(newSong); 
    this.set('newSongTitle', '');
  }

  @action
  updateRating(song, rating) {
    song.set('rating', rating);
  }
}
