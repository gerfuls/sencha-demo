Ext.define('Bongo.view.bongo.Nav', {
	extend: 'Ext.navigation.View',
	xtype: 'bongo-nav',
	
	requires: [
		'Bongo.view.bongo.FirstPanel'
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
				xtype: 'bongo-first-panel'
			}
		]
	}
});