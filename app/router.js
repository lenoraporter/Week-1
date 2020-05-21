import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;

  init() {
    this._super();
    this.setDocumentTitle();
  }

  setDocumentTitle() {
    this.on('routeDidChange', (transition) => {
      if (!transition.to) {
        return;
      }
      let toRouteName = transition.to.name;
      let pageTitles = {
        'artists.index': () => {
          return 'Artists';
        },
        'artists.artist.songs': () => {
          let artistRouteInfo = transition.to.find(info => info.name.includes('artists.artist'));
          let artistSlug = artistRouteInfo.params.slug;
          let artistName = artistSlug.split('-').map(s => capitalize(s)).join('');
          return `${artistName} songs`;
        }
      }
      let titleSegments = [];
      let titleSetter = pageTitles[toRouteName];
      if (titleSetter) {
        titleSegments.push(titleSetter());
      }
      titleSegments.push('Rock and Roll with Ember.js');
      document.title = titleSegments.join(' - ');
    });
  }
}

Router.map(function() {
  this.route('artists', function() {
    this.route('artist', { path: ':slug'}, function () {
      this.route('songs');
      this.route('details');
    });
  });
});
