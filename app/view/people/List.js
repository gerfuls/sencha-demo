Ext.define('Bongo.view.people.List', {
	extend: 'Ext.List',
	xtype: 'peoplelist',
	requires: [
		'Bongo.store.People',
		'Ext.plugin.PullRefresh'
	],
	
	config: {
		itemTpl: '{name}',
		store: 'People',
		plugins: [
			{
				xclass: 'Ext.plugin.PullRefresh',
				pullRefreshText: 'Pull to Refresh'
			}
		],
		listeners: {
			itemtap: function() {
				
			}
		}
	}
});