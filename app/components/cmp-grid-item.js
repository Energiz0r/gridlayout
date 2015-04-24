import Ember from 'ember';

export default Ember.Component.extend({
  classNames:['c-grid-item'],
  content: null,
  isExpanded: false,
  isBig: false,
  editCmp: null,

  actions: {
    toggleExpand: function(){
      this.toggleProperty('isExpanded');
    },
    edit: function(){
      this.sendAction('action', this.get('editCmp'), this.get('content'));
    }
  }
});
