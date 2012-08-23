Ext.define('Bongo.view.bongo.SecondPanel', {
	extend: 'Ext.Container',
	xtype: 'bongo-second-panel',
	
	config: {
		autoDestroy: false,
		title: 'Panel 2',
		
		items: [
			{
				xtype: 'button',
				align: 'center',
				text: 'You made it!'
			}
		]
	}
});