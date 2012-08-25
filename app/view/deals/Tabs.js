Ext.define('Bongo.view.deals.Tabs', {
	extend: 'Ext.tab.Panel',
	xtype: 'deals-tabs',
	
	config: {
		title: 'Deals',
		
		ui: 'light',
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