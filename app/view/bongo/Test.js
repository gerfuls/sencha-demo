Ext.define('Bongo.view.bongo.Test', {
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