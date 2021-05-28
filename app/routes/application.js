import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  // remove async to have it work
  async beforeModel() {
    return this.transitionTo('setup');
  }
}
