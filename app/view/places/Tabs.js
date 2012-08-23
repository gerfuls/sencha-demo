Ext.define('Bongo.view.places.Tabs', {
	extend: 'Ext.tab.Panel',
	xtype: 'placestabs',
	
	config: {
		title: 'Places',
		
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