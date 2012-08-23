Ext.define('Bongo.view.PeopleTabs', {
	extend: 'Ext.tab.Panel',
	xtype: 'peopletabs',
	requires: ['Bongo.view.PeopleList'],
	
	config: {
		title: 'People',
		
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
				title: 'Updates',
				xtype: 'peoplelist'
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