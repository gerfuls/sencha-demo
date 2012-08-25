Ext.define('Bongo.view.people.Tabs', {
	extend: 'Ext.tab.Panel',
	xtype: 'peopletabs',
	requires: ['Bongo.view.people.Updates'],
	
	config: {
		title: 'People',
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
				title: 'Updates',
				xtype: 'people-updates'
			},
			{
				title: 'My Friends',
				cls: 'card'
			},
			{
				title: 'Clubs',
				cls: 'card'
			}
		]
	}
});