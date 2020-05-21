import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.modelFor('artists.artist');
  },
  resetController(controller) {
    controller.setProperties({
      isAddingSong: false,
      newSongTitle: ''
    });
  },
})