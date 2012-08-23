Ext.define('Bongo.view.BongoTest', {
	extend: 'Ext.Container',
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