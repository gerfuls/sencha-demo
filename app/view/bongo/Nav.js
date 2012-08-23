Ext.define('Bongo.view.bongo.Nav', {
	extend: 'Ext.navigation.View',
	xtype: 'bongonav',
	
	requires: [
		'Bongo.view.bongo.Test'
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
				xtype: 'button',
				align: 'center',
				text: 'New View',
				listeners: {
					tap: function() {
						var nav = this.getParent().push({
							xtype: 'bongotest'
						});
					}
				}
			}
		]
	}
});