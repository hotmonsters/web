import Reflux from 'reflux';
import $ from 'jquery';

import config from '../config.js';

const ItemActions = Reflux.createActions({
  'loadItems': {children: ['completed', 'failed']}
});

function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

ItemActions.loadItems.listen(function(){
  var promise = $.get(config.apiRoot + '/');
  promise.then((function(monsters) {
      this.completed(monsters.monsters);
  }).bind(this));
  /*
  setTimeout(() => {
    const items = [
      {
          lines: ['   B        A', '  PaaaaaO', '  Pata%aO', '  PapppaO', '    DaaaC', '      X  W'],
          contributor: 'billy grace hawthorne, age √19',
      },
      {
          contributor: 'mrs. jeremiah stevenson, age 86',
          lines: ['       MN', '     IaaJ ', '   MaassJ ', '   aRRRaaB', '   assaaaC', '   aaaaaaB', '   DC      DC'],
      },
      {
          contributor: 'm. larux, age 52',
          lines: ['   AB', ' AxaB ', ' aaaa  ', ' assa', ' aaaa ', ' aqra  ', ' aaaa', ' aaa5', ' OPOP'],
      },
      {
          contributor: 'diderot, age 9',
          lines: [' MN  MN ', ' bOPaOPb', ' biaa%ab ', ' baaiaab', ' baaaaab ', ' baaGHab ', ' GaRRbbH', '   hh h'],
      },
    ];
    this.completed(shuffle(items));

    // on error
    // this.failed('an error occured');
  }, 1000);*/
});

export default ItemActions;
