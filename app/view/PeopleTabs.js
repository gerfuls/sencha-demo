Ext.define('Bongo.view.PeopleTabs', {
	extend: 'Ext.tab.Panel',
	xtype: 'peopletabs',
	
	config: {
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
				cls: 'card'
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