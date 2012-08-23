Ext.define('Bongo.view.bongo.FirstPanel', {
	extend: 'Ext.Container',
	xtype: 'bongo-first-panel',
	requires: [ 'Bongo.view.bongo.SecondPanel' ],
	
	config: {
		autoDestroy: false,
		title: 'Panel 1',
		
		items: [
			{
				xtype: 'button',
				align: 'center',
				text: 'Push-a-Panel!',
				listeners: {
					tap: function() {
						this.getParent().getParent().push({
							xtype: 'bongo-second-panel'
						});
					}
				}
			}
		]
	}
});