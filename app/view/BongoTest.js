Ext.define('Bongo.view.BongoTest', {
	extend: 'Ext.navigation.View',
	xtype: 'bongotest',
	
	config: {
		autoDestroy: false,
		
		items: [
			{
				xtype: 'button',
				align: 'center',
				text: 'You made it!'
			}
		]
	}
});