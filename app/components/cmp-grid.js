import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editItem: function(a, b){
      this.sendAction('action', a, b);
    }
  }
});
