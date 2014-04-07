package ;

import tinx.node.mongo.Collection;
import tinx.node.mongo.ObjectID;

typedef User = {
	_id:ObjectID<User>,
	name:String,
	password:String,
	profiles:Array<{
		provider:String,
		id:String
	}>
}

class Db extends tinx.node.mongo.Internal.DbBase {
	@:read var users:Collection<User> = collection('users');
}

class TestAll extends Base implements tink.Lang {
	function testWhere() {
		var db = new Db('mongodb://localhost:27017/tinx_node_mongo_test');
		db.users.where(profiles.hasOne(provider == 'facebook')).first().handle(function (_) switch _ {
			case Success(null):
				// db.users.insertOne({
				// 	_id: new ObjectID(),
				// 	name: 'foo',
				// 	password: 'bar',
				// 	profiles: [{ id: '23r8werf8', provider: 'facebook' }]
				// });
			case Success(user):
				trace(user);
			case Failure(f):
		});
		// >> function (user:) {
		// 	if (user == null) 
		// }
	}
}