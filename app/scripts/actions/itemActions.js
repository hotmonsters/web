import Reflux from 'reflux';

const ItemActions = Reflux.createActions({
  'loadItems': {children: ['completed', 'failed']}
});

ItemActions.loadItems.listen(function(){
  // make your api call/ async stuff here
  // we use setTimeout for faking async behaviour here
  setTimeout(() => {
    const items = [
        ['yN', '  GB', '  IaJEz', 'Eqpraz', 'DassC', '  GaH', '    X'],
        ['   B        A', '  PaaaaaO', '  Pata%aO', '  PapppaO', '    DaaaC', '      X  W'],
        ['       MN', '     IaaJ ', '   MaassJ ', '   aRRRaaB', '   assaaaC', '   aaaaaaB', '   DC      DC'],
        ['   AB', ' AxaB ', ' aaaa  ', ' assa', ' aaaa ', ' aqra  ', ' aaaa', ' aaa5', ' OPOP'],
        [' MN  MN ', ' bOPaOPb', ' biaa%ab ', ' baaiaab', ' baaaaab ', ' baaGHab ', ' GaRRbbH', '   hh h'],
        ['  IJ', ' IaJ', ' STU', ' s$sE E' , ' a0a0a0B', ' aaaaaaa1', ' OP      OP'],
        ['    NMJ', '    b b b b b ', '    !!!', '  yAsD1', '  yCDCz', '    STU ',   '    aaa', '    K  L'],
        ['AaaaaB', 'Aabb&bbaB', 'AIJIJB ', 'AKLKLB', ' STTTU ', 'AaaaaB', ' d  d  d', ' e  e  e'],
        ['y3aaaaaaF  ', ' EFbSTUbccc00' , 'bcsscbcsbbbsbbbccc00', 'bcKLcbcccccc00300 ', 'bcIJcbcD0CD0C', 'bcRRcbcaaaaaaF', 'bc00cbcaaaaaaH ', 'cO Pc  f  f'],
    ];
    this.completed(items);

    // on error
    // this.failed('an error occured');
  }, 500);
});

export default ItemActions;
