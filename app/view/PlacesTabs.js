Ext.define('Bongo.view.PlacesTabs', {
	extend: 'Ext.tab.Panel',
	xtype: 'placestabs',
	
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