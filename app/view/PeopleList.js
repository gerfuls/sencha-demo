Ext.define('Bongo.view.PeopleList', {
	extend: 'Ext.List',
	xtype: 'peoplelist',
	requires: ['Bongo.store.People'],
	
	config: {
		itemTpl: '{name}',
		store: 'People',
		fullscreen: true
	}
});