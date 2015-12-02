import Reflux from 'reflux';

const ItemActions = Reflux.createActions({
  'loadItems': {children: ['completed', 'failed']}
});

ItemActions.loadItems.listen(function(){
  // make your api call/ async stuff here
  // we use setTimeout for faking async behaviour here
  setTimeout(() => {
    const items = [
      {
          lines: ['yN', '  GB', '  IaJEz', 'Eqpraz', 'DassC', '  GaH', '    X'],
      },
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
      {
          contributor: 'almost, age 27',
          lines: ['  IJ', ' IaJ', ' STU', ' s$sE E' , ' a0a0a0B', ' aaaaaaa1', ' OP      OP'],
      },
      {
          contributor: 'plorgiam, age 1',
          lines: ['    NMJ', '    b b b b b ', '    !!!', '  yAsD1', '  yCDCz', '    STU ',   '    aaa', '    K  L'],
      },
      {
          contributor: 'samuel k. winterhoff, age 11',
          lines: ['AaaaaB', 'Aabb&bbaB', 'AIJIJB ', 'AKLKLB', ' STTTU ', 'AaaaaB', ' d  d  d', ' e  e  e'],
      },
      {
          contributor: 'stella feinstein, age 32',
          lines: ["y3aaaaaaF",  " EFbSTUbccc00", "bcsscbcsbbbsbbbcccb00","bcKLcbcccccc00300", "bcIJcbcD0CD0C","bcRRcbcaaaaaaF","bc00cbcaaaaaaH", "cO Pc  f    f"]
      },
    ];
    this.completed(items);

    // on error
    // this.failed('an error occured');
  }, 500);
});

export default ItemActions;
