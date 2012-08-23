Ext.define('Bongo.store.Updates', {
	extend: 'Ext.data.Store',
	
	config: {
		model: 'Bongo.model.Update',
		data: [
			{ 'name':'Joshua Dover', 'type':'checkin', 'place':'Layne\'s' },
			{ 'name':'Keith Pattison', 'type':'checkin', 'place':'Cane\'s' },
			{ 'name':'Keith Pattison', 'type':'share-offer', 'offer':'Get 20% off at MSC Bookstore!' },
		]
	}
});