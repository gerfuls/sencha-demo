Ext.define('Bongo.view.people.Nav', {
	extend: 'Ext.navigation.View',
	xtype: 'peoplenav',
	
	requires: [
		'Bongo.view.people.Tabs',
		'Bongo.view.people.List'
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
					align: 'left',
					listeners: {
						tap: function() {
							if (!this.overlay) {
								this.overlay = Ext.Viewport.add({
									xtype: 'panel',
									modal: true,
									hideOnMaskTap: true,
									showAnimation: {
										type: 'popIn',
										duration: 250,
										easing: 'ease-out'
									},
									hideAnimation: {
										type: 'popOut',
										duration: 250,
										easing: 'ease-out'
									},
									centered: true,
									width: Ext.os.deviceType == 'Phone' ? 260 : 400,
									height: Ext.os.deviceType == 'Phone' ? 220 : 400,
									styleHtmlContent: true,
									html: '<p>This is a modal, centered and floating panel. hideOnMaskTap is true by default so ' +
										'we can tap anywhere outside the overlay to hide it.</p>',
									items: [
										{
											docked: 'top',
											xtype: 'toolbar',
											title: 'Settings'
										}
									],
									scrollable: true
								});
							}
		
							this.overlay.show();
						}
					}
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