package tinx.node.mongo;

// import tink.lang.helpers.CollectorOp;
import tinx.node.mongo.Internal;
using tink.CoreApi;
#if macro
	import haxe.macro.Context;
	import haxe.macro.Expr;
	import tinx.node.mongo.lang.Match;
	using tink.MacroApi;
	using tinx.node.mongo.lang.Compiler;
	using tinx.node.mongo.lang.TypeInfo;
#else
	// import tinx.node.Error;
#end

class Collection<T> extends CollectionBase<T> {
	#if !macro
		function noop() {}
		function force<A>(f:Future<A>) {
			f.handle(noop);
			return f;
		}
			
		public function insertOne(doc:T):Unsafe<T>
			return insert([doc]) >> function (results:Array<T>) return results[0];
		
		public function insert(docs:Array<T>):Unsafe<Array<T>>
			return force(native >> @f(collection) Node.await(collection.insert(docs, { safe: true })));
	#end
	macro public function first<T>(ethis:ExprOf<Collection<T>>, projection:Array<Expr>):ExprOf<T> {
		ethis = macro @:privateAccess $ethis;
		return macro @:pos(Context.currentPos()) $ethis.where().first($a { projection } );
	}
	macro public function all<T>(ethis:ExprOf<Collection<T>>, projection:Array<Expr>):ExprOf<T> {
		ethis = macro @:privateAccess $ethis;
		return macro @:pos(Context.currentPos()) $ethis.where().all($a { projection } );
	}
	macro public function where<T>(ethis:ExprOf<Collection<T>>, ?match:Expr):ExprOf<Where<T>> {
		ethis = macro @:pos(ethis.pos) @:privateAccess $ethis;
		match = Match.compile(match, ethis.getInfo()).expr;
		return macro @:pos(match.pos) new tinx.node.mongo.Where($ethis, $match);
	}
}
