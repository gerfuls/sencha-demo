Ext.define('Bongo.view.places.Nav', {
	extend: 'Ext.navigation.View',
	xtype: 'placesnav',
	
	requires: [
		'Bongo.view.places.Tabs'
	],
	
	config: {
		autoDestroy: false,
		
		navigationBar: {
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
				xtype: 'placestabs'
			}
		]
	}
});