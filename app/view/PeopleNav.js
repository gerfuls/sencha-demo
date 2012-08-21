Ext.define('Bongo.view.PeopleNav', {
	extend: 'Ext.navigation.View',
	xtype: 'peoplenav',
	
	requires: [
		'Bongo.view.PeopleTabs'
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
				xtype: 'peopletabs'
			}
		]
	}
});