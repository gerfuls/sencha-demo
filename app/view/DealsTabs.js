Ext.define('Bongo.view.DealsTabs', {
	extend: 'Ext.tab.Panel',
	xtype: 'dealstabs',
	
	config: {
		ui: 'dark',
		tabBar: {
			layout: {
				pack: 'center'
			}
		},
		activeTab: 1,
		defaults: {
			scrollable: true
		},
		items: [
			{
				title: 'Favorites',
				cls: 'card'
			},
			{
				title: 'Nearby',
				cls: 'card'
			},
			{
				title: 'Suggested',
				cls: 'card'
			}
		]
	}
});