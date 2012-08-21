Ext.define('Bongo.view.PeopleList', {
	extend: 'Ext.List',
	xtype: 'peoplelist',
	requires: ['Bongo.store.People'],
	
	plugins: [
        {
            xclass: 'Ext.plugin.PullRefresh',
            pullRefreshText: 'Pull to Refresh'
        }
    ],
	
	config: {
		itemTpl: '{name}',
		store: 'People'
	}
});