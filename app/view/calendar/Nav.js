Ext.define('Bongo.view.calendar.Nav', {
	extend: 'Ext.navigation.View',
	xtype: 'calendar-nav',
	
	requires: [
		'Bongo.view.calendar.Tabs'
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
				xtype: 'calendar-tabs'
			}
		]
	}
});