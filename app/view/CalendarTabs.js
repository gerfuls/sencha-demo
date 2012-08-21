Ext.define('Bongo.view.CalendarTabs', {
	extend: 'Ext.tab.Panel',
	xtype: 'calendartabs',
	
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
				title: 'Month',
				cls: 'card'
			},
			{
				title: 'Day',
				cls: 'card'
			},
			{
				title: 'Trending',
				cls: 'card'
			}
		]
	}
});