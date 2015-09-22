import Ember from 'ember';

export default Ember.Component.extend({
  addNewArticle: false,
  actions: {
    articleFormShow() {
      this.set('addNewArticle', true);
    },

    save1() {
      var params = {
        author: this.get('author'),
        articleTitle: this.get('articleTitle'),
        article: this.get('article'),
        image: this.get('image'),
      };
      this.set('addNewArticle', false),
      this.sendAction('save2', params);
    }
  }
});
