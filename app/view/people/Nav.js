Ext.define('Bongo.view.people.Nav', {
	extend: 'Ext.navigation.View',
	xtype: 'people-nav',
	
	requires: [
		'Bongo.view.people.Tabs'
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
					align: 'left',
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
				xtype: 'people-tabs'
			}
		]
	}
});