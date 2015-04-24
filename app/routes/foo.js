import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var change = Ember.Object.create({
      subject: "Trenger å bytte server pure03",
      description: "Serveren er gammel og treg, har vært oppgradert mange ganger, men blir alltid en flaskehals. Bytter denne ut med en ny og bedre maskin. Bruk opptil 50,000",
      note: "TK: Her anbefaler jeg en Dell XC90 XtremeServer Edition. KOG: Den er piss, kjør for Eple server 2001",
      risks: Ember.A([
        Ember.Object.create({name: "sykdom", prob: "50", impact:6}),
        Ember.Object.create({name: "kompatibilitets problemer", prob: "10", impact:7}),
        Ember.Object.create({name: "QA failer det", prob: "90", impact:1})])
    });
    return change;
  }
});
