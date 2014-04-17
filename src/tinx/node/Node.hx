package tinx.node;

#if macro
import haxe.macro.Expr;
import haxe.macro.Context;
using tink.MacroApi;
#end

class Node {
	macro static public function yield(handler, future:Expr)
		return {
			var d = future.pos.makeBlankType();
			var f = future.pos.makeBlankType();
			macro @:pos(future.pos) {
				var handler = $handler;
				($future : tink.core.Future.Surprise<$d, $f>).handle(function (__x) switch __x {
					case Success(data):
						handler(null, data);
					case Failure(error):
						handler(error, null);
				});
			}
		}
	macro static public function await(e) 
		return
			switch e {
				case macro $func($a{args}):
					var tmp = MacroApi.tempName(),
						pos = Context.currentPos();
					args.push(macro @:pos(pos) function (error, result) {
						if (error != null) $i{tmp}(tink.core.Outcome.Failure(tink.core.Error.withData(error.message, error)));
						else $i{tmp}(tink.core.Outcome.Success(result));
					});
					var ret = macro @:pos(pos) tink.core.Future.async(function ($tmp) {
						$func($a{args});
					});
					// ret.pos.warning(ret.toString());
					return ret;
				default: e.reject();
			}
}