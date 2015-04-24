import Ember from 'ember';

export default Ember.Controller.extend({
  editWindowComponentName: null,
  editWindowActive: false,
  editContent: null,

  items: function(){
    var one = Ember.Object.create({componentName: 'cmp-textarea', content: this.get('model.description'), editComp:'cmp-textarea-edit'});
    var two = Ember.Object.create({componentName: 'cmp-thumbs'});
    var three = Ember.Object.create({componentName: 'cmp-textarea', content: this.get('model.note'), editComp:'cmp-textarea-edit'});
    var four = Ember.Object.create({componentName: 'cmp-risk', content: this.get('model.risks'), isBig: true});
    var five = Ember.Object.create({componentName: 'cmp-matrix'});
    var list = Ember.A();
    list.pushObject(one);
    list.pushObject(two);
    list.pushObject(three);
    list.pushObject(four);
    list.pushObject(five);
    return list;
  }.property('model'),
  actions: {
    editItem: function(componentName, content){
      this.set('editContent', content);
      this.set('editWindowComponentName', componentName);
      this.toggleProperty('editWindowActive');
    }
  },
  modelObs: function(){
      console.log(this.get('model'));
  }.observes('model.description')
});
