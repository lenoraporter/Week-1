import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('artists', function() {
    this.route('artist', { path: ':slug'}, function () {
      this.route('songs');
    });
  });
});
