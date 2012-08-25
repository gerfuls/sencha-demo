Ext.define('Bongo.view.deals.Nav', {
	extend: 'Ext.navigation.View',
	xtype: 'deals-nav',
	
	requires: [
		'Bongo.view.deals.Tabs'
	],
	
	config: {
		autoDestroy: false,
		
		navigationBar: {
			ui: 'light',
			items: [
				{
					xtype: 'button',
					id: 'settingsButton',
					iconCls: 'settings',
					iconMask: true,
					align: 'left'
				},
				{
					xtype: 'button',
					id: 'searchButton',
					iconCls: 'search',
					iconMask: true,
					align: 'right'
				}
			]
		},
		
		items: [
			{
				xtype: 'deals-tabs'
			}
		]
	}
});