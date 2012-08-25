Ext.define('Bongo.view.calendar.Tabs', {
	extend: 'Ext.tab.Panel',
	xtype: 'calendar-tabs',
	
	config: {
		title: 'Calendar',
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