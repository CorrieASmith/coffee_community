import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  articleTitle: DS.attr(),
  article: DS.attr(),
  image: DS.attr()
});
