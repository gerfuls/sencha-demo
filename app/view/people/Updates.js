Ext.define('Bongo.view.people.Updates', {
	extend: 'Ext.List',
	xtype: 'people-updates',
	
	requires: [
		'Bongo.store.Updates',
		'Ext.plugin.PullRefresh'
	],
	
	config: {
		itemTpl: '{name}',
		store: 'Updates',
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