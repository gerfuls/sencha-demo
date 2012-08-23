Ext.define('Bongo.store.People', {
	extend: 'Ext.data.Store',
	
	config: {
		model: 'Bongo.model.Person',
		data: [
			{ 'name':'Joshua Dover' },
			{ 'name':'Keith Pattison' }
		]
	}
});