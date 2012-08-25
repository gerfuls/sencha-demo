Ext.define('Bongo.view.places.Tabs', {
	extend: 'Ext.tab.Panel',
	xtype: 'places-tabs',
	
	config: {
		title: 'Places',
		
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
				title: 'Suggested',
				cls: 'card'
			},
			{
				title: 'All',
				cls: 'card'
			}
		]
	}
});