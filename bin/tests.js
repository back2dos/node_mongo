(function () { "use strict";
var $estr = function() { return js.Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var _Base = {};
_Base.PhysicalType_Impl_ = function() { };
_Base.PhysicalType_Impl_.__name__ = ["_Base","PhysicalType_Impl_"];
_Base.PhysicalType_Impl_._new = function(v) {
	return v;
};
_Base.PhysicalType_Impl_.toString = function(this1) {
	switch(this1[1]) {
	case 0:
		var c = this1[2];
		return Type.getClassName(c);
	case 1:
		var e = this1[2];
		return Type.getEnumName(e);
	}
};
_Base.PhysicalType_Impl_.check = function(this1,v) {
	return Std.is(v,this1.slice(2)[0]);
};
_Base.PhysicalType_Impl_.ofClass = function(c) {
	return _Base.PhysicalType_Impl_._new(tink.core.Either.Left(c));
};
_Base.PhysicalType_Impl_.ofEnum = function(e) {
	return _Base.PhysicalType_Impl_._new(tink.core.Either.Right(e));
};
var haxe = {};
haxe.unit = {};
haxe.unit.TestCase = function() {
};
haxe.unit.TestCase.__name__ = ["haxe","unit","TestCase"];
haxe.unit.TestCase.prototype = {
	currentTest: null
	,setup: function() {
	}
	,tearDown: function() {
	}
	,print: function(v) {
		haxe.unit.TestRunner.print(v);
	}
	,assertTrue: function(b,c) {
		this.currentTest.done = true;
		if(b == false) {
			this.currentTest.success = false;
			this.currentTest.error = "expected true but was false";
			this.currentTest.posInfos = c;
			throw this.currentTest;
		}
	}
	,assertFalse: function(b,c) {
		this.currentTest.done = true;
		if(b == true) {
			this.currentTest.success = false;
			this.currentTest.error = "expected false but was true";
			this.currentTest.posInfos = c;
			throw this.currentTest;
		}
	}
	,assertEquals: function(expected,actual,c) {
		this.currentTest.done = true;
		if(actual != expected) {
			this.currentTest.success = false;
			this.currentTest.error = "expected '" + Std.string(expected) + "' but was '" + Std.string(actual) + "'";
			this.currentTest.posInfos = c;
			throw this.currentTest;
		}
	}
	,__class__: haxe.unit.TestCase
};
var Base = function() {
	haxe.unit.TestCase.call(this);
};
Base.__name__ = ["Base"];
Base.__super__ = haxe.unit.TestCase;
Base.prototype = $extend(haxe.unit.TestCase.prototype,{
	fail: function(msg,c) {
		this.currentTest.done = true;
		this.currentTest.success = false;
		this.currentTest.error = msg;
		this.currentTest.posInfos = c;
		throw this.currentTest;
	}
	,assertStructEq: function(expected,found) {
		var compare;
		var compare1 = null;
		compare1 = function(e,f) {
			var ret;
			{
				var _g = Type["typeof"](e);
				switch(_g[1]) {
				case 0:case 1:case 3:case 2:case 8:
					ret = e == f;
					break;
				case 6:
					switch(_g[2]) {
					case String:
						ret = e == f;
						break;
					case Array:
						var ret1 = compare1(e.length,f.length);
						if(ret1) {
							var _g2 = 0;
							var _g1 = e.length;
							while(_g2 < _g1) {
								var i = _g2++;
								if(!compare1(e[i],f[i])) {
									ret1 = false;
									break;
								}
							}
						}
						ret = ret1;
						break;
					default:
						if(js.Boot.__instanceof(e,IMap)) {
							var e1 = e;
							var f1 = f;
							var ret2 = true;
							var find = function(orig) {
								var $it0 = f1.keys();
								while( $it0.hasNext() ) {
									var copy = $it0.next();
									if(compare1(orig,copy)) return copy;
								}
								return orig;
							};
							if(ret2) {
								var $it1 = e1.keys();
								while( $it1.hasNext() ) {
									var k = $it1.next();
									if(!compare1(e1.get(k),f1.get(find(k)))) {
										ret2 = false;
										break;
									}
								}
							}
							e1.toString();
							ret = ret2;
						} else throw "assert";
					}
					break;
				case 4:
					var ret3 = true;
					var _g11 = 0;
					var _g21 = Reflect.fields(e);
					while(_g11 < _g21.length) {
						var field = _g21[_g11];
						++_g11;
						if(field != "__id__" && !compare1(Reflect.field(e,field),Reflect.field(f,field))) {
							ret3 = false;
							break;
						}
					}
					ret = ret3;
					break;
				case 7:
					var enm = _g[2];
					ret = js.Boot.__instanceof(f,enm) && compare1(Type.enumIndex(e),Type.enumIndex(f)) && compare1(Type.enumParameters(e),Type.enumParameters(f));
					break;
				default:
					throw "assert";
				}
			}
			return ret;
		};
		compare = compare1;
		if(compare(expected,found)) this.assertTrue(true,{ fileName : "Base.hx", lineNumber : 95, className : "Base", methodName : "assertStructEq"}); else this.fail("expected something like " + Std.string(expected) + ", found " + Std.string(found),{ fileName : "Base.hx", lineNumber : 96, className : "Base", methodName : "assertStructEq"});
	}
	,throws: function(f,t,check,pos) {
		try {
			f();
		} catch( e ) {
			if(!_Base.PhysicalType_Impl_.check(t,e)) this.fail("Exception " + Std.string(e) + " not of type " + _Base.PhysicalType_Impl_.toString(t),pos);
			if(check != null && !check(e)) this.fail("Exception " + Std.string(e) + " does not satisfy condition",pos);
			this.assertTrue(true,{ fileName : "Base.hx", lineNumber : 104, className : "Base", methodName : "throws"});
			return;
		}
		this.fail("no exception thrown",pos);
	}
	,__class__: Base
});
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
EReg.__name__ = ["EReg"];
EReg.prototype = {
	r: null
	,match: function(s) {
		if(this.r.global) this.r.lastIndex = 0;
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,matched: function(n) {
		if(this.r.m != null && n >= 0 && n < this.r.m.length) return this.r.m[n]; else throw "EReg::matched";
	}
	,__class__: EReg
};
var HxOverrides = function() { };
HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
};
HxOverrides.indexOf = function(a,obj,i) {
	var len = a.length;
	if(i < 0) {
		i += len;
		if(i < 0) i = 0;
	}
	while(i < len) {
		if(a[i] === obj) return i;
		i++;
	}
	return -1;
};
HxOverrides.remove = function(a,obj) {
	var i = HxOverrides.indexOf(a,obj,0);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
};
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var List = function() {
	this.length = 0;
};
List.__name__ = ["List"];
List.prototype = {
	h: null
	,q: null
	,length: null
	,add: function(item) {
		var x = [item];
		if(this.h == null) this.h = x; else this.q[1] = x;
		this.q = x;
		this.length++;
	}
	,iterator: function() {
		return { h : this.h, hasNext : function() {
			return this.h != null;
		}, next : function() {
			if(this.h == null) return null;
			var x = this.h[0];
			this.h = this.h[1];
			return x;
		}};
	}
	,__class__: List
};
var IMap = function() { };
IMap.__name__ = ["IMap"];
IMap.prototype = {
	get: null
	,keys: null
	,toString: null
	,__class__: IMap
};
Math.__name__ = ["Math"];
var Reflect = function() { };
Reflect.__name__ = ["Reflect"];
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		return null;
	}
};
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
};
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
};
var tink = {};
tink.Lang = function() { };
tink.Lang.__name__ = ["tink","Lang"];
var TestAll = function() {
	Base.call(this);
};
TestAll.__name__ = ["TestAll"];
TestAll.__interfaces__ = [tink.Lang];
TestAll.__super__ = Base;
TestAll.prototype = $extend(Base.prototype,{
	testWhere: function() {
		var db = new Db(tinx.node.mongo._Internal.DbParams_Impl_.ofString("mongodb://localhost:27017/tinx_node_mongo_test"));
		var this1;
		var tmp = new tinx.node.mongo.Where(db.get_users(),{ profiles : { $elemMatch : { provider : "facebook"}}});
		this1 = tmp._findOne(null,tmp.match,{ });
		this1(function(_) {
			switch(_[1]) {
			case 0:
				var user = _[2];
				if(_[2] == null) {
				} else switch(_[2]) {
				default:
					haxe.Log.trace(user,{ fileName : "TestAll.hx", lineNumber : 32, className : "TestAll", methodName : "testWhere"});
				}
				break;
			case 1:
				var f = _[2];
				break;
			}
		});
	}
	,__class__: TestAll
});
var RunTests = function() { };
RunTests.__name__ = ["RunTests"];
RunTests.main = function() {
	var buf = [];
	haxe.unit.TestRunner.print = function(s) {
		var parts = s.split("\n");
		if(parts.length > 1) {
			parts[0] = buf.join("") + parts[0];
			buf = [];
			while(parts.length > 1) console.log(parts.shift());
		}
		buf.push(parts[0]);
	};
	var runner = new haxe.unit.TestRunner();
	var _g = 0;
	var _g1 = RunTests.tests;
	while(_g < _g1.length) {
		var test = _g1[_g];
		++_g;
		runner.add(test);
	}
	runner.run();
};
var Std = function() { };
Std.__name__ = ["Std"];
Std.is = function(v,t) {
	return js.Boot.__instanceof(v,t);
};
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
};
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
};
var StringBuf = function() {
	this.b = "";
};
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype = {
	b: null
	,add: function(x) {
		this.b += Std.string(x);
	}
	,__class__: StringBuf
};
var StringTools = function() { };
StringTools.__name__ = ["StringTools"];
StringTools.htmlEscape = function(s,quotes) {
	s = s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
	if(quotes) return s.split("\"").join("&quot;").split("'").join("&#039;"); else return s;
};
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && HxOverrides.substr(s,0,start.length) == start;
};
var tinx = {};
tinx.node = {};
tinx.node.mongo = {};
tinx.node.mongo.DbBase = function(params) {
	var _g = this;
	this.collections = new haxe.ds.StringMap();
	this.prefix = "";
	var params1 = params;
	if(params1 == null) params1 = { };
	var name;
	if(params1.name == null) name = "test"; else name = params1.name;
	var host;
	if(params1.host == null) host = "localhost"; else host = params1.host;
	var port;
	if(params1.port == null) port = 27017; else port = params1.port;
	var login;
	if(params1.login == null) login = ""; else login = params1.login.user + ":" + params1.login.password + "@";
	this.native = tink.core._Future.Future_Impl_.async(function(__tink_tmp4) {
		(require('mongodb').Db).connect(_g.connector = "mongodb://" + login + host + ":" + port + "/" + name,{ safe : true},function(error,result) {
			if(error != null) __tink_tmp4(tink.core.Outcome.Failure(tink.core.Error.withData(error.message,error,{ fileName : "Node.hx", lineNumber : 29, className : "tinx.node.mongo.DbBase", methodName : "new"}))); else __tink_tmp4(tink.core.Outcome.Success(result));
		});
	});
};
tinx.node.mongo.DbBase.__name__ = ["tinx","node","mongo","DbBase"];
tinx.node.mongo.DbBase.__interfaces__ = [tink.Lang];
tinx.node.mongo.DbBase.prototype = {
	native: null
	,collections: null
	,prefix: null
	,connector: null
	,collection: function(name) {
		var _g = this;
		if(!this.collections.exists(name)) this.collections.set(name,new tinx.node.mongo.Collection(tink.core._Future.Future_Impl_._tryFailingFlatMap(this.native,function(db) {
			return tink.core._Future.Future_Impl_.async(function(__tink_tmp6) {
				db.collection(_g.prefix + name,function(error,result) {
					if(error != null) __tink_tmp6(tink.core.Outcome.Failure(tink.core.Error.withData(error.message,error,{ fileName : "Node.hx", lineNumber : 29, className : "tinx.node.mongo.DbBase", methodName : "collection"}))); else __tink_tmp6(tink.core.Outcome.Success(result));
				});
			});
		})));
		return this.collections.get(name);
	}
	,get_connector: function() {
		return this.connector;
	}
	,__class__: tinx.node.mongo.DbBase
};
var Db = function(params) {
	tinx.node.mongo.DbBase.call(this,params);
	this.users = this.collection("users");
};
Db.__name__ = ["Db"];
Db.__super__ = tinx.node.mongo.DbBase;
Db.prototype = $extend(tinx.node.mongo.DbBase.prototype,{
	users: null
	,get_users: function() {
		return this.users;
	}
	,__class__: Db
});
var ValueType = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] };
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; };
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; };
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
var Type = function() { };
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null;
	if((o instanceof Array) && o.__enum__ == null) return Array; else return o.__class__;
};
Type.getClassName = function(c) {
	var a = c.__name__;
	return a.join(".");
};
Type.getEnumName = function(e) {
	var a = e.__ename__;
	return a.join(".");
};
Type.getInstanceFields = function(c) {
	var a = [];
	for(var i in c.prototype) a.push(i);
	HxOverrides.remove(a,"__class__");
	HxOverrides.remove(a,"__properties__");
	return a;
};
Type["typeof"] = function(v) {
	var _g = typeof(v);
	switch(_g) {
	case "boolean":
		return ValueType.TBool;
	case "string":
		return ValueType.TClass(String);
	case "number":
		if(Math.ceil(v) == v % 2147483648.0) return ValueType.TInt;
		return ValueType.TFloat;
	case "object":
		if(v == null) return ValueType.TNull;
		var e = v.__enum__;
		if(e != null) return ValueType.TEnum(e);
		var c;
		if((v instanceof Array) && v.__enum__ == null) c = Array; else c = v.__class__;
		if(c != null) return ValueType.TClass(c);
		return ValueType.TObject;
	case "function":
		if(v.__name__ || v.__ename__) return ValueType.TObject;
		return ValueType.TFunction;
	case "undefined":
		return ValueType.TNull;
	default:
		return ValueType.TUnknown;
	}
};
Type.enumParameters = function(e) {
	return e.slice(2);
};
Type.enumIndex = function(e) {
	return e[1];
};
haxe.StackItem = { __ename__ : ["haxe","StackItem"], __constructs__ : ["CFunction","Module","FilePos","Method","LocalFunction"] };
haxe.StackItem.CFunction = ["CFunction",0];
haxe.StackItem.CFunction.toString = $estr;
haxe.StackItem.CFunction.__enum__ = haxe.StackItem;
haxe.StackItem.Module = function(m) { var $x = ["Module",1,m]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; };
haxe.StackItem.FilePos = function(s,file,line) { var $x = ["FilePos",2,s,file,line]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; };
haxe.StackItem.Method = function(classname,method) { var $x = ["Method",3,classname,method]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; };
haxe.StackItem.LocalFunction = function(v) { var $x = ["LocalFunction",4,v]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; };
haxe.CallStack = function() { };
haxe.CallStack.__name__ = ["haxe","CallStack"];
haxe.CallStack.exceptionStack = function() {
	return [];
};
haxe.CallStack.toString = function(stack) {
	var b = new StringBuf();
	var _g = 0;
	while(_g < stack.length) {
		var s = stack[_g];
		++_g;
		b.b += "\nCalled from ";
		haxe.CallStack.itemToString(b,s);
	}
	return b.b;
};
haxe.CallStack.itemToString = function(b,s) {
	switch(s[1]) {
	case 0:
		b.b += "a C function";
		break;
	case 1:
		var m = s[2];
		b.b += "module ";
		b.b += m;
		break;
	case 2:
		var line = s[4];
		var file = s[3];
		var s1 = s[2];
		if(s1 != null) {
			haxe.CallStack.itemToString(b,s1);
			b.b += " (";
		}
		b.b += file;
		b.b += " line ";
		b.b += "" + line;
		if(s1 != null) b.b += ")";
		break;
	case 3:
		var meth = s[3];
		var cname = s[2];
		b.b += cname;
		b.b += ".";
		b.b += meth;
		break;
	case 4:
		var n = s[2];
		b.b += "local function #";
		b.b += "" + n;
		break;
	}
};
haxe.Log = function() { };
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
};
haxe.ds = {};
haxe.ds.Option = { __ename__ : ["haxe","ds","Option"], __constructs__ : ["Some","None"] };
haxe.ds.Option.Some = function(v) { var $x = ["Some",0,v]; $x.__enum__ = haxe.ds.Option; $x.toString = $estr; return $x; };
haxe.ds.Option.None = ["None",1];
haxe.ds.Option.None.toString = $estr;
haxe.ds.Option.None.__enum__ = haxe.ds.Option;
haxe.ds.StringMap = function() {
	this.h = { };
};
haxe.ds.StringMap.__name__ = ["haxe","ds","StringMap"];
haxe.ds.StringMap.__interfaces__ = [IMap];
haxe.ds.StringMap.prototype = {
	h: null
	,set: function(key,value) {
		this.h["$" + key] = value;
	}
	,get: function(key) {
		return this.h["$" + key];
	}
	,exists: function(key) {
		return this.h.hasOwnProperty("$" + key);
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key.substr(1));
		}
		return HxOverrides.iter(a);
	}
	,toString: function() {
		var s = new StringBuf();
		s.b += "{";
		var it = this.keys();
		while( it.hasNext() ) {
			var i = it.next();
			s.b += i;
			s.b += " => ";
			s.add(Std.string(this.get(i)));
			if(it.hasNext()) s.b += ", ";
		}
		s.b += "}";
		return s.b;
	}
	,__class__: haxe.ds.StringMap
};
haxe.unit.TestResult = function() {
	this.m_tests = new List();
	this.success = true;
};
haxe.unit.TestResult.__name__ = ["haxe","unit","TestResult"];
haxe.unit.TestResult.prototype = {
	m_tests: null
	,success: null
	,add: function(t) {
		this.m_tests.add(t);
		if(!t.success) this.success = false;
	}
	,toString: function() {
		var buf = new StringBuf();
		var failures = 0;
		var $it0 = this.m_tests.iterator();
		while( $it0.hasNext() ) {
			var test = $it0.next();
			if(test.success == false) {
				buf.b += "* ";
				buf.b += test.classname;
				buf.b += "::";
				buf.b += test.method;
				buf.b += "()";
				buf.b += "\n";
				buf.b += "ERR: ";
				if(test.posInfos != null) {
					buf.b += test.posInfos.fileName;
					buf.b += ":";
					buf.b += "" + test.posInfos.lineNumber;
					buf.b += "(";
					buf.b += test.posInfos.className;
					buf.b += ".";
					buf.b += test.posInfos.methodName;
					buf.b += ") - ";
				}
				buf.b += test.error;
				buf.b += "\n";
				if(test.backtrace != null) {
					buf.b += test.backtrace;
					buf.b += "\n";
				}
				buf.b += "\n";
				failures++;
			}
		}
		buf.b += "\n";
		if(failures == 0) buf.b += "OK "; else buf.b += "FAILED ";
		buf.b += "" + this.m_tests.length;
		buf.b += " tests, ";
		buf.b += "" + failures;
		buf.b += " failed, ";
		buf.b += "" + (this.m_tests.length - failures);
		buf.b += " success";
		buf.b += "\n";
		return buf.b;
	}
	,__class__: haxe.unit.TestResult
};
haxe.unit.TestRunner = function() {
	this.result = new haxe.unit.TestResult();
	this.cases = new List();
};
haxe.unit.TestRunner.__name__ = ["haxe","unit","TestRunner"];
haxe.unit.TestRunner.print = function(v) {
	var msg = js.Boot.__string_rec(v,"");
	var d;
	if(typeof(document) != "undefined" && (d = document.getElementById("haxe:trace")) != null) {
		msg = msg.split("\n").join("<br/>");
		d.innerHTML += StringTools.htmlEscape(msg) + "<br/>";
	} else if(typeof process != "undefined" && process.stdout != null && process.stdout.write != null) process.stdout.write(msg); else if(typeof console != "undefined" && console.log != null) console.log(msg);
};
haxe.unit.TestRunner.customTrace = function(v,p) {
	haxe.unit.TestRunner.print(p.fileName + ":" + p.lineNumber + ": " + Std.string(v) + "\n");
};
haxe.unit.TestRunner.prototype = {
	result: null
	,cases: null
	,add: function(c) {
		this.cases.add(c);
	}
	,run: function() {
		this.result = new haxe.unit.TestResult();
		var $it0 = this.cases.iterator();
		while( $it0.hasNext() ) {
			var c = $it0.next();
			this.runCase(c);
		}
		haxe.unit.TestRunner.print(this.result.toString());
		return this.result.success;
	}
	,runCase: function(t) {
		var old = haxe.Log.trace;
		haxe.Log.trace = haxe.unit.TestRunner.customTrace;
		var cl = Type.getClass(t);
		var fields = Type.getInstanceFields(cl);
		haxe.unit.TestRunner.print("Class: " + Type.getClassName(cl) + " ");
		var _g = 0;
		while(_g < fields.length) {
			var f = fields[_g];
			++_g;
			var fname = f;
			var field = Reflect.field(t,f);
			if(StringTools.startsWith(fname,"test") && Reflect.isFunction(field)) {
				t.currentTest = new haxe.unit.TestStatus();
				t.currentTest.classname = Type.getClassName(cl);
				t.currentTest.method = fname;
				t.setup();
				try {
					Reflect.callMethod(t,field,new Array());
					if(t.currentTest.done) {
						t.currentTest.success = true;
						haxe.unit.TestRunner.print(".");
					} else {
						t.currentTest.success = false;
						t.currentTest.error = "(warning) no assert";
						haxe.unit.TestRunner.print("W");
					}
				} catch( $e0 ) {
					if( js.Boot.__instanceof($e0,haxe.unit.TestStatus) ) {
						var e = $e0;
						haxe.unit.TestRunner.print("F");
						t.currentTest.backtrace = haxe.CallStack.toString(haxe.CallStack.exceptionStack());
					} else {
					var e1 = $e0;
					haxe.unit.TestRunner.print("E");
					if(e1.message != null) t.currentTest.error = "exception thrown : " + Std.string(e1) + " [" + Std.string(e1.message) + "]"; else t.currentTest.error = "exception thrown : " + Std.string(e1);
					t.currentTest.backtrace = haxe.CallStack.toString(haxe.CallStack.exceptionStack());
					}
				}
				this.result.add(t.currentTest);
				t.tearDown();
			}
		}
		haxe.unit.TestRunner.print("\n");
		haxe.Log.trace = old;
	}
	,__class__: haxe.unit.TestRunner
};
haxe.unit.TestStatus = function() {
	this.done = false;
	this.success = false;
};
haxe.unit.TestStatus.__name__ = ["haxe","unit","TestStatus"];
haxe.unit.TestStatus.prototype = {
	done: null
	,success: null
	,error: null
	,method: null
	,classname: null
	,posInfos: null
	,backtrace: null
	,__class__: haxe.unit.TestStatus
};
var js = {};
js.Boot = function() { };
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
};
js.Boot.__trace = function(v,i) {
	var msg;
	if(i != null) msg = i.fileName + ":" + i.lineNumber + ": "; else msg = "";
	msg += js.Boot.__string_rec(v,"");
	if(i != null && i.customParams != null) {
		var _g = 0;
		var _g1 = i.customParams;
		while(_g < _g1.length) {
			var v1 = _g1[_g];
			++_g;
			msg += "," + js.Boot.__string_rec(v1,"");
		}
	}
	var d;
	if(typeof(document) != "undefined" && (d = document.getElementById("haxe:trace")) != null) d.innerHTML += js.Boot.__unhtml(msg) + "<br/>"; else if(typeof console != "undefined" && console.log != null) console.log(msg);
};
js.Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) return Array; else return o.__class__;
};
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i1;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js.Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str2 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str2.length != 2) str2 += ", \n";
		str2 += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
};
js.Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Array:
		return (o instanceof Array) && o.__enum__ == null;
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) return true;
				if(js.Boot.__interfLoop(js.Boot.getClass(o),cl)) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
};
tink.core = {};
tink.core._Callback = {};
tink.core._Callback.Callback_Impl_ = function() { };
tink.core._Callback.Callback_Impl_.__name__ = ["tink","core","_Callback","Callback_Impl_"];
tink.core._Callback.Callback_Impl_._new = function(f) {
	return f;
};
tink.core._Callback.Callback_Impl_.invoke = function(this1,data) {
	this1(data);
};
tink.core._Callback.Callback_Impl_.fromNiladic = function(f) {
	return function(r) {
		f();
	};
};
tink.core._Callback.Callback_Impl_.fromMany = function(callbacks) {
	return function(v) {
		var _g = 0;
		while(_g < callbacks.length) {
			var callback = callbacks[_g];
			++_g;
			callback(v);
		}
	};
};
tink.core._Callback.CallbackLink_Impl_ = function() { };
tink.core._Callback.CallbackLink_Impl_.__name__ = ["tink","core","_Callback","CallbackLink_Impl_"];
tink.core._Callback.CallbackLink_Impl_._new = function(link) {
	return link;
};
tink.core._Callback.CallbackLink_Impl_.dissolve = function(this1) {
	if(this1 != null) this1();
};
tink.core._Callback.CallbackLink_Impl_.toCallback = function(this1) {
	var f = this1;
	return function(r) {
		f();
	};
};
tink.core._Callback.CallbackLink_Impl_.fromFunction = function(f) {
	return f;
};
tink.core._Callback.CallbackLink_Impl_.fromMany = function(callbacks) {
	return function() {
		var _g = 0;
		while(_g < callbacks.length) {
			var cb = callbacks[_g];
			++_g;
			if(cb != null) cb();
		}
	};
};
tink.core._Callback.Cell = function() {
};
tink.core._Callback.Cell.__name__ = ["tink","core","_Callback","Cell"];
tink.core._Callback.Cell.get = function() {
	if(tink.core._Callback.Cell.pool.length > 0) return tink.core._Callback.Cell.pool.pop(); else return new tink.core._Callback.Cell();
};
tink.core._Callback.Cell.prototype = {
	cb: null
	,free: function() {
		this.cb = null;
		tink.core._Callback.Cell.pool.push(this);
	}
	,__class__: tink.core._Callback.Cell
};
tink.core._Callback.CallbackList_Impl_ = function() { };
tink.core._Callback.CallbackList_Impl_.__name__ = ["tink","core","_Callback","CallbackList_Impl_"];
tink.core._Callback.CallbackList_Impl_._new = function() {
	return [];
};
tink.core._Callback.CallbackList_Impl_.get_length = function(this1) {
	return this1.length;
};
tink.core._Callback.CallbackList_Impl_.add = function(this1,cb) {
	var cell;
	if(tink.core._Callback.Cell.pool.length > 0) cell = tink.core._Callback.Cell.pool.pop(); else cell = new tink.core._Callback.Cell();
	cell.cb = cb;
	this1.push(cell);
	return function() {
		if(HxOverrides.remove(this1,cell)) {
			cell.cb = null;
			tink.core._Callback.Cell.pool.push(cell);
		}
		cell = null;
	};
};
tink.core._Callback.CallbackList_Impl_.invoke = function(this1,data) {
	var _g = 0;
	var _g1 = this1.slice();
	while(_g < _g1.length) {
		var cell = _g1[_g];
		++_g;
		if(cell.cb != null) cell.cb(data);
	}
};
tink.core._Callback.CallbackList_Impl_.clear = function(this1) {
	var _g = 0;
	var _g1 = this1.splice(0,this1.length);
	while(_g < _g1.length) {
		var cell = _g1[_g];
		++_g;
		cell.cb = null;
		tink.core._Callback.Cell.pool.push(cell);
	}
};
tink.core.Either = { __ename__ : ["tink","core","Either"], __constructs__ : ["Left","Right"] };
tink.core.Either.Left = function(a) { var $x = ["Left",0,a]; $x.__enum__ = tink.core.Either; $x.toString = $estr; return $x; };
tink.core.Either.Right = function(b) { var $x = ["Right",1,b]; $x.__enum__ = tink.core.Either; $x.toString = $estr; return $x; };
tink.core.Error = function(message,pos) {
	this.message = message;
	this.pos = pos;
};
tink.core.Error.__name__ = ["tink","core","Error"];
tink.core.Error.withData = function(message,data,pos) {
	var ret = new tink.core.Error(message,pos);
	ret.data = data;
	return ret;
};
tink.core.Error.prototype = {
	message: null
	,data: null
	,pos: null
	,printPos: function() {
		return this.pos.className + "." + this.pos.methodName + ":" + this.pos.lineNumber;
	}
	,toString: function() {
		var ret = "Error: " + this.message;
		if(this.pos != null) ret += this.printPos();
		return ret;
	}
	,throwSelf: function() {
		throw this;
	}
	,__class__: tink.core.Error
};
tink.core._Future = {};
tink.core._Future.Future_Impl_ = function() { };
tink.core._Future.Future_Impl_.__name__ = ["tink","core","_Future","Future_Impl_"];
tink.core._Future.Future_Impl_._new = function(f) {
	return f;
};
tink.core._Future.Future_Impl_.handle = function(this1,callback) {
	return this1(callback);
};
tink.core._Future.Future_Impl_.gather = function(this1) {
	var op = new tink.core.FutureTrigger();
	var self = this1;
	return function(cb) {
		if(self != null) {
			self($bind(op,op.trigger));
			self = null;
		}
		return op.future(cb);
	};
};
tink.core._Future.Future_Impl_.first = function(this1,other) {
	return tink.core._Future.Future_Impl_.async(function(cb) {
		this1(cb);
		other(cb);
	});
};
tink.core._Future.Future_Impl_.map = function(this1,f,gather) {
	if(gather == null) gather = true;
	var ret = function(callback) {
		return this1(function(result) {
			var data = f(result);
			callback(data);
		});
	};
	if(gather) return tink.core._Future.Future_Impl_.gather(ret); else return ret;
};
tink.core._Future.Future_Impl_.flatMap = function(this1,next,gather) {
	if(gather == null) gather = true;
	var ret = tink.core._Future.Future_Impl_.flatten(tink.core._Future.Future_Impl_.map(this1,next,gather));
	if(gather) return tink.core._Future.Future_Impl_.gather(ret); else return ret;
};
tink.core._Future.Future_Impl_.merge = function(this1,other,merger,gather) {
	if(gather == null) gather = true;
	return tink.core._Future.Future_Impl_.flatMap(this1,function(t) {
		return tink.core._Future.Future_Impl_.map(other,function(a) {
			return merger(t,a);
		},false);
	},gather);
};
tink.core._Future.Future_Impl_.flatten = function(f) {
	return function(callback) {
		var ret = null;
		ret = f(function(next) {
			ret = next(function(result) {
				callback(result);
			});
		});
		return ret;
	};
};
tink.core._Future.Future_Impl_.fromTrigger = function(trigger) {
	return trigger.future;
};
tink.core._Future.Future_Impl_.ofMany = function(futures,gather) {
	if(gather == null) gather = true;
	var ret = tink.core._Future.Future_Impl_.sync([]);
	var _g = 0;
	while(_g < futures.length) {
		var f = [futures[_g]];
		++_g;
		ret = tink.core._Future.Future_Impl_.flatMap(ret,(function(f) {
			return function(results) {
				return tink.core._Future.Future_Impl_.map(f[0],(function() {
					return function(result) {
						return results.concat([result]);
					};
				})(),false);
			};
		})(f),false);
	}
	if(gather) return tink.core._Future.Future_Impl_.gather(ret); else return ret;
};
tink.core._Future.Future_Impl_.fromMany = function(futures) {
	return tink.core._Future.Future_Impl_.ofMany(futures);
};
tink.core._Future.Future_Impl_.lazy = function(l) {
	return function(cb) {
		var data = l();
		cb(data);
		return null;
	};
};
tink.core._Future.Future_Impl_.sync = function(v) {
	return function(callback) {
		callback(v);
		return null;
	};
};
tink.core._Future.Future_Impl_.async = function(f,lazy) {
	if(lazy == null) lazy = false;
	if(lazy) return tink.core._Future.Future_Impl_.flatten(tink.core._Future.Future_Impl_.lazy(tink.core._Lazy.Lazy_Impl_.ofFunc((function(f1,f2,a1) {
		return function() {
			return f1(f2,a1);
		};
	})(tink.core._Future.Future_Impl_.async,f,false)))); else {
		var op = new tink.core.FutureTrigger();
		f($bind(op,op.trigger));
		return op.future;
	}
};
tink.core._Future.Future_Impl_.or = function(a,b) {
	return tink.core._Future.Future_Impl_.first(a,b);
};
tink.core._Future.Future_Impl_.either = function(a,b) {
	return tink.core._Future.Future_Impl_.first(tink.core._Future.Future_Impl_.map(a,tink.core.Either.Left,false),tink.core._Future.Future_Impl_.map(b,tink.core.Either.Right,false));
};
tink.core._Future.Future_Impl_.and = function(a,b) {
	return tink.core._Future.Future_Impl_.merge(a,b,function(a1,b1) {
		return { a : a1, b : b1};
	});
};
tink.core._Future.Future_Impl_._tryFailingFlatMap = function(f,map) {
	return tink.core._Future.Future_Impl_.flatMap(f,function(o) {
		switch(o[1]) {
		case 0:
			var d = o[2];
			return map(d);
		case 1:
			var f1 = o[2];
			return tink.core._Future.Future_Impl_.sync(tink.core.Outcome.Failure(f1));
		}
	});
};
tink.core._Future.Future_Impl_._tryFlatMap = function(f,map) {
	return tink.core._Future.Future_Impl_.flatMap(f,function(o) {
		switch(o[1]) {
		case 0:
			var d = o[2];
			return tink.core._Future.Future_Impl_.map(map(d),tink.core.Outcome.Success);
		case 1:
			var f1 = o[2];
			return tink.core._Future.Future_Impl_.sync(tink.core.Outcome.Failure(f1));
		}
	});
};
tink.core._Future.Future_Impl_._tryFailingMap = function(f,map) {
	return tink.core._Future.Future_Impl_.map(f,function(o) {
		switch(o[1]) {
		case 0:
			var d = o[2];
			return map(d);
		case 1:
			var f1 = o[2];
			return tink.core.Outcome.Failure(f1);
		}
	});
};
tink.core._Future.Future_Impl_._tryMap = function(f,map) {
	return tink.core._Future.Future_Impl_.map(f,function(o) {
		switch(o[1]) {
		case 0:
			var d = o[2];
			return tink.core.Outcome.Success(map(d));
		case 1:
			var f1 = o[2];
			return tink.core.Outcome.Failure(f1);
		}
	});
};
tink.core._Future.Future_Impl_._flatMap = function(f,map) {
	return tink.core._Future.Future_Impl_.flatMap(f,map);
};
tink.core._Future.Future_Impl_._map = function(f,map) {
	return tink.core._Future.Future_Impl_.map(f,map);
};
tink.core._Future.Future_Impl_.trigger = function() {
	return new tink.core.FutureTrigger();
};
tink.core.FutureTrigger = function() {
	var _g = this;
	this.list = [];
	this.future = function(callback) {
		if(_g.list == null) {
			callback(_g.result);
			return null;
		} else return tink.core._Callback.CallbackList_Impl_.add(_g.list,callback);
	};
};
tink.core.FutureTrigger.__name__ = ["tink","core","FutureTrigger"];
tink.core.FutureTrigger.prototype = {
	result: null
	,list: null
	,future: null
	,asFuture: function() {
		return this.future;
	}
	,trigger: function(result) {
		if(this.list == null) return false; else {
			var list = this.list;
			this.list = null;
			this.result = result;
			tink.core._Callback.CallbackList_Impl_.invoke(list,result);
			tink.core._Callback.CallbackList_Impl_.clear(list);
			return true;
		}
	}
	,__class__: tink.core.FutureTrigger
};
tink.core._Lazy = {};
tink.core._Lazy.Lazy_Impl_ = function() { };
tink.core._Lazy.Lazy_Impl_.__name__ = ["tink","core","_Lazy","Lazy_Impl_"];
tink.core._Lazy.Lazy_Impl_._new = function(r) {
	return r;
};
tink.core._Lazy.Lazy_Impl_.get = function(this1) {
	return this1();
};
tink.core._Lazy.Lazy_Impl_.ofFunc = function(f) {
	var result = null;
	return function() {
		if(f != null) {
			result = f();
			f = null;
		}
		return result;
	};
};
tink.core._Lazy.Lazy_Impl_.map = function(this1,f) {
	return tink.core._Lazy.Lazy_Impl_.ofFunc(function() {
		return f(this1());
	});
};
tink.core._Lazy.Lazy_Impl_.flatMap = function(this1,f) {
	return tink.core._Lazy.Lazy_Impl_.ofFunc(function() {
		var this2 = f(this1());
		return this2();
	});
};
tink.core._Lazy.Lazy_Impl_.ofConst = function(c) {
	return function() {
		return c;
	};
};
tink.core.Noise = { __ename__ : ["tink","core","Noise"], __constructs__ : ["Noise"] };
tink.core.Noise.Noise = ["Noise",0];
tink.core.Noise.Noise.toString = $estr;
tink.core.Noise.Noise.__enum__ = tink.core.Noise;
tink.core.Outcome = { __ename__ : ["tink","core","Outcome"], __constructs__ : ["Success","Failure"] };
tink.core.Outcome.Success = function(data) { var $x = ["Success",0,data]; $x.__enum__ = tink.core.Outcome; $x.toString = $estr; return $x; };
tink.core.Outcome.Failure = function(failure) { var $x = ["Failure",1,failure]; $x.__enum__ = tink.core.Outcome; $x.toString = $estr; return $x; };
tink.core.OutcomeTools = function() { };
tink.core.OutcomeTools.__name__ = ["tink","core","OutcomeTools"];
tink.core.OutcomeTools.sure = function(outcome) {
	switch(outcome[1]) {
	case 0:
		var data = outcome[2];
		return data;
	case 1:
		var failure = outcome[2];
		if(js.Boot.__instanceof(failure,tink.core.Error)) return failure.throwSelf(); else throw failure;
		break;
	}
};
tink.core.OutcomeTools.toOption = function(outcome) {
	switch(outcome[1]) {
	case 0:
		var data = outcome[2];
		return haxe.ds.Option.Some(data);
	case 1:
		return haxe.ds.Option.None;
	}
};
tink.core.OutcomeTools.toOutcome = function(option,pos) {
	switch(option[1]) {
	case 0:
		var value = option[2];
		return tink.core.Outcome.Success(value);
	case 1:
		return tink.core.Outcome.Failure("Some value expected but none found in " + pos.fileName + "@line " + pos.lineNumber);
	}
};
tink.core.OutcomeTools.orUse = function(outcome,fallback) {
	switch(outcome[1]) {
	case 0:
		var data = outcome[2];
		return data;
	case 1:
		return fallback;
	}
};
tink.core.OutcomeTools.orTry = function(outcome,fallback) {
	switch(outcome[1]) {
	case 0:
		return outcome;
	case 1:
		return fallback;
	}
};
tink.core.OutcomeTools.equals = function(outcome,to) {
	switch(outcome[1]) {
	case 0:
		var data = outcome[2];
		return data == to;
	case 1:
		return false;
	}
};
tink.core.OutcomeTools.map = function(outcome,transform) {
	switch(outcome[1]) {
	case 0:
		var a = outcome[2];
		return tink.core.Outcome.Success(transform(a));
	case 1:
		var f = outcome[2];
		return tink.core.Outcome.Failure(f);
	}
};
tink.core.OutcomeTools.isSuccess = function(outcome) {
	switch(outcome[1]) {
	case 0:
		return true;
	default:
		return false;
	}
};
tink.core.OutcomeTools.flatMap = function(o,mapper) {
	return tink.core._Outcome.OutcomeMap_Impl_.apply(mapper,o);
};
tink.core._Outcome = {};
tink.core._Outcome.OutcomeMap_Impl_ = function() { };
tink.core._Outcome.OutcomeMap_Impl_.__name__ = ["tink","core","_Outcome","OutcomeMap_Impl_"];
tink.core._Outcome.OutcomeMap_Impl_._new = function(f) {
	return { f : f};
};
tink.core._Outcome.OutcomeMap_Impl_.apply = function(this1,o) {
	return this1.f(o);
};
tink.core._Outcome.OutcomeMap_Impl_.withSameError = function(f) {
	return tink.core._Outcome.OutcomeMap_Impl_._new(function(o) {
		switch(o[1]) {
		case 0:
			var d = o[2];
			return f(d);
		case 1:
			var f1 = o[2];
			return tink.core.Outcome.Failure(f1);
		}
	});
};
tink.core._Outcome.OutcomeMap_Impl_.withEitherError = function(f) {
	return tink.core._Outcome.OutcomeMap_Impl_._new(function(o) {
		switch(o[1]) {
		case 0:
			var d = o[2];
			{
				var _g = f(d);
				switch(_g[1]) {
				case 0:
					var d1 = _g[2];
					return tink.core.Outcome.Success(d1);
				case 1:
					var f1 = _g[2];
					return tink.core.Outcome.Failure(tink.core.Either.Right(f1));
				}
			}
			break;
		case 1:
			var f2 = o[2];
			return tink.core.Outcome.Failure(tink.core.Either.Left(f2));
		}
	});
};
tink.core._Pair = {};
tink.core._Pair.Pair_Impl_ = function() { };
tink.core._Pair.Pair_Impl_.__name__ = ["tink","core","_Pair","Pair_Impl_"];
tink.core._Pair.Pair_Impl_._new = function(a,b) {
	return { a : a, b : b};
};
tink.core._Pair.Pair_Impl_.get_a = function(this1) {
	return this1.a;
};
tink.core._Pair.Pair_Impl_.get_b = function(this1) {
	return this1.b;
};
tink.core._Pair.Pair_Impl_.toBool = function(this1) {
	return this1 != null;
};
tink.core._Pair.Pair_Impl_.isNil = function(this1) {
	return this1 == null;
};
tink.core._Pair.Pair_Impl_.nil = function() {
	return null;
};
tink.core._Pair.MPair_Impl_ = function() { };
tink.core._Pair.MPair_Impl_.__name__ = ["tink","core","_Pair","MPair_Impl_"];
tink.core._Pair.MPair_Impl_._new = function(a,b) {
	return { a : a, b : b};
};
tink.core._Pair.MPair_Impl_.get_a = function(this1) {
	return this1.a;
};
tink.core._Pair.MPair_Impl_.get_b = function(this1) {
	return this1.b;
};
tink.core._Pair.MPair_Impl_.set_a = function(this1,v) {
	return this1.a = v;
};
tink.core._Pair.MPair_Impl_.set_b = function(this1,v) {
	return this1.b = v;
};
tink.core._Ref = {};
tink.core._Ref.Ref_Impl_ = function() { };
tink.core._Ref.Ref_Impl_.__name__ = ["tink","core","_Ref","Ref_Impl_"];
tink.core._Ref.Ref_Impl_._new = function() {
	var this1;
	this1 = new Array(1);
	return this1;
};
tink.core._Ref.Ref_Impl_.get_value = function(this1) {
	return this1[0];
};
tink.core._Ref.Ref_Impl_.set_value = function(this1,param) {
	return this1[0] = param;
};
tink.core._Ref.Ref_Impl_.toString = function(this1) {
	return "@[" + Std.string(this1[0]) + "]";
};
tink.core._Ref.Ref_Impl_.to = function(v) {
	var ret;
	var this1;
	this1 = new Array(1);
	ret = this1;
	ret[0] = v;
	return ret;
};
tink.core._Signal = {};
tink.core._Signal.Signal_Impl_ = function() { };
tink.core._Signal.Signal_Impl_.__name__ = ["tink","core","_Signal","Signal_Impl_"];
tink.core._Signal.Signal_Impl_._new = function(f) {
	return f;
};
tink.core._Signal.Signal_Impl_.handle = function(this1,handler) {
	return this1(handler);
};
tink.core._Signal.Signal_Impl_.map = function(this1,f,gather) {
	if(gather == null) gather = true;
	var ret = function(cb) {
		return this1(function(result) {
			var data = f(result);
			cb(data);
		});
	};
	if(gather) return tink.core._Signal.Signal_Impl_.gather(ret); else return ret;
};
tink.core._Signal.Signal_Impl_.flatMap = function(this1,f,gather) {
	if(gather == null) gather = true;
	var ret = function(cb) {
		return this1(function(result) {
			var this2 = f(result);
			this2(cb);
		});
	};
	if(gather) return tink.core._Signal.Signal_Impl_.gather(ret); else return ret;
};
tink.core._Signal.Signal_Impl_.filter = function(this1,f,gather) {
	if(gather == null) gather = true;
	var ret = function(cb) {
		return this1(function(result) {
			if(f(result)) cb(result);
		});
	};
	if(gather) return tink.core._Signal.Signal_Impl_.gather(ret); else return ret;
};
tink.core._Signal.Signal_Impl_.join = function(this1,other,gather) {
	if(gather == null) gather = true;
	var ret = function(cb) {
		return tink.core._Callback.CallbackLink_Impl_.fromMany([this1(cb),other(cb)]);
	};
	if(gather) return tink.core._Signal.Signal_Impl_.gather(ret); else return ret;
};
tink.core._Signal.Signal_Impl_.next = function(this1) {
	var ret = new tink.core.FutureTrigger();
	var handler = tink.core._Callback.CallbackLink_Impl_.toCallback(this1($bind(ret,ret.trigger)));
	this1(handler);
	return ret.future;
};
tink.core._Signal.Signal_Impl_.noise = function(this1) {
	return tink.core._Signal.Signal_Impl_.map(this1,function(_) {
		return tink.core.Noise.Noise;
	});
};
tink.core._Signal.Signal_Impl_.gather = function(this1) {
	var ret = tink.core._Signal.Signal_Impl_.trigger();
	var handler = (function(_e) {
		return function(event) {
			return tink.core._Callback.CallbackList_Impl_.invoke(_e,event);
		};
	})(ret);
	this1(handler);
	return tink.core._Signal.SignalTrigger_Impl_.asSignal(ret);
};
tink.core._Signal.Signal_Impl_.trigger = function() {
	return [];
};
tink.core._Signal.Signal_Impl_.ofClassical = function(add,remove,gather) {
	if(gather == null) gather = true;
	var ret = function(cb) {
		var f = function(a) {
			cb(a);
		};
		add(f);
		var f1 = (function(f2,a1) {
			return function() {
				return f2(a1);
			};
		})(remove,f);
		return f1;
	};
	if(gather) return tink.core._Signal.Signal_Impl_.gather(ret); else return ret;
};
tink.core._Signal.SignalTrigger_Impl_ = function() { };
tink.core._Signal.SignalTrigger_Impl_.__name__ = ["tink","core","_Signal","SignalTrigger_Impl_"];
tink.core._Signal.SignalTrigger_Impl_._new = function() {
	return [];
};
tink.core._Signal.SignalTrigger_Impl_.trigger = function(this1,event) {
	tink.core._Callback.CallbackList_Impl_.invoke(this1,event);
};
tink.core._Signal.SignalTrigger_Impl_.getLength = function(this1) {
	return this1.length;
};
tink.core._Signal.SignalTrigger_Impl_.asSignal = function(this1) {
	var f = (function(_e) {
		return function(cb) {
			return tink.core._Callback.CallbackList_Impl_.add(_e,cb);
		};
	})(this1);
	return f;
};
tinx.node.Node = function() { };
tinx.node.Node.__name__ = ["tinx","node","Node"];
tinx.node.mongo.CollectionBase = function(native) {
	this.native = native;
};
tinx.node.mongo.CollectionBase.__name__ = ["tinx","node","mongo","CollectionBase"];
tinx.node.mongo.CollectionBase.__interfaces__ = [tink.Lang];
tinx.node.mongo.CollectionBase.prototype = {
	native: null
	,_findOne: function(proto,match,project) {
		return tink.core._Future.Future_Impl_._tryFailingFlatMap(this.native,function(collection) {
			return tink.core._Future.Future_Impl_.async(function(__tink_tmp13) {
				collection.findOne(match,project,function(error,result) {
					if(error != null) __tink_tmp13(tink.core.Outcome.Failure(tink.core.Error.withData(error.message,error,{ fileName : "Node.hx", lineNumber : 29, className : "tinx.node.mongo.CollectionBase", methodName : "_findOne"}))); else __tink_tmp13(tink.core.Outcome.Success(result));
				});
			});
		});
	}
	,_find: function(proto,match,project) {
		return new tinx.node.mongo.Cursor(tink.core._Future.Future_Impl_._tryFailingFlatMap(this.native,function(collection) {
			return tink.core._Future.Future_Impl_.async(function(__tink_tmp14) {
				collection.find(match,project,function(error,result) {
					if(error != null) __tink_tmp14(tink.core.Outcome.Failure(tink.core.Error.withData(error.message,error,{ fileName : "Node.hx", lineNumber : 29, className : "tinx.node.mongo.CollectionBase", methodName : "_find"}))); else __tink_tmp14(tink.core.Outcome.Success(result));
				});
			});
		}));
	}
	,_remove: function(match,justOne) {
		return tink.core._Future.Future_Impl_._tryFailingFlatMap(this.native,function(collection) {
			return tink.core._Future.Future_Impl_.async(function(__tink_tmp11) {
				collection.remove(match,{ single : justOne},function(error,result) {
					if(error != null) __tink_tmp11(tink.core.Outcome.Failure(tink.core.Error.withData(error.message,error,{ fileName : "Node.hx", lineNumber : 29, className : "tinx.node.mongo.CollectionBase", methodName : "_remove"}))); else __tink_tmp11(tink.core.Outcome.Success(result));
				});
			});
		});
	}
	,_update: function(match,update,options) {
		return tink.core._Future.Future_Impl_._tryFailingFlatMap(this.native,function(collection) {
			return tink.core._Future.Future_Impl_.async(function(__tink_tmp15) {
				collection.update(match,update,options,function(error,result) {
					if(error != null) __tink_tmp15(tink.core.Outcome.Failure(tink.core.Error.withData(error.message,error,{ fileName : "Node.hx", lineNumber : 29, className : "tinx.node.mongo.CollectionBase", methodName : "_update"}))); else __tink_tmp15(tink.core.Outcome.Success(result));
				});
			});
		});
	}
	,_findAndModify: function(proto,match,update,options) {
		return tink.core._Future.Future_Impl_._tryFailingFlatMap(this.native,function(collection) {
			return tink.core._Future.Future_Impl_.async(function(__tink_tmp16) {
				collection.findAndModify(match,[],update,options,function(error,result) {
					if(error != null) __tink_tmp16(tink.core.Outcome.Failure(tink.core.Error.withData(error.message,error,{ fileName : "Node.hx", lineNumber : 29, className : "tinx.node.mongo.CollectionBase", methodName : "_findAndModify"}))); else __tink_tmp16(tink.core.Outcome.Success(result));
				});
			});
		});
	}
	,__class__: tinx.node.mongo.CollectionBase
};
tinx.node.mongo.Collection = function(native) {
	tinx.node.mongo.CollectionBase.call(this,native);
};
tinx.node.mongo.Collection.__name__ = ["tinx","node","mongo","Collection"];
tinx.node.mongo.Collection.__super__ = tinx.node.mongo.CollectionBase;
tinx.node.mongo.Collection.prototype = $extend(tinx.node.mongo.CollectionBase.prototype,{
	noop: function() {
	}
	,force: function(f) {
		f((function($this) {
			var $r;
			var f1 = $bind($this,$this.noop);
			$r = function(r) {
				f1();
			};
			return $r;
		}(this)));
		return f;
	}
	,insertOne: function(doc) {
		return tink.core._Future.Future_Impl_._tryMap(this.insert([doc]),function(results) {
			return results[0];
		});
	}
	,insert: function(docs) {
		return this.force(tink.core._Future.Future_Impl_._tryFailingFlatMap(this.native,function(collection) {
			return tink.core._Future.Future_Impl_.async(function(__tink_tmp12) {
				collection.insert(docs,{ safe : true},function(error,result) {
					if(error != null) __tink_tmp12(tink.core.Outcome.Failure(tink.core.Error.withData(error.message,error,{ fileName : "Node.hx", lineNumber : 29, className : "tinx.node.mongo.Collection", methodName : "insert"}))); else __tink_tmp12(tink.core.Outcome.Success(result));
				});
			});
		}));
	}
	,__class__: tinx.node.mongo.Collection
});
tinx.node.mongo.Cursor = function(native) {
	this.native = native;
};
tinx.node.mongo.Cursor.__name__ = ["tinx","node","mongo","Cursor"];
tinx.node.mongo.Cursor.__interfaces__ = [tink.Lang];
tinx.node.mongo.Cursor.prototype = {
	native: null
	,count: function() {
		return tink.core._Future.Future_Impl_._tryFailingFlatMap(this.native,function(cursor) {
			return tink.core._Future.Future_Impl_.async(function(__tink_tmp7) {
				cursor.count(function(error,result) {
					if(error != null) __tink_tmp7(tink.core.Outcome.Failure(tink.core.Error.withData(error.message,error,{ fileName : "Node.hx", lineNumber : 29, className : "tinx.node.mongo.Cursor", methodName : "count"}))); else __tink_tmp7(tink.core.Outcome.Success(result));
				});
			});
		});
	}
	,skip: function(count) {
		return new tinx.node.mongo.Cursor(tink.core._Future.Future_Impl_._tryFailingFlatMap(this.native,function(cursor) {
			return tink.core._Future.Future_Impl_.async(function(__tink_tmp8) {
				cursor.skip(count,function(error,result) {
					if(error != null) __tink_tmp8(tink.core.Outcome.Failure(tink.core.Error.withData(error.message,error,{ fileName : "Node.hx", lineNumber : 29, className : "tinx.node.mongo.Cursor", methodName : "skip"}))); else __tink_tmp8(tink.core.Outcome.Success(result));
				});
			});
		}));
	}
	,limit: function(count) {
		return new tinx.node.mongo.Cursor(tink.core._Future.Future_Impl_._tryFailingFlatMap(this.native,function(cursor) {
			return tink.core._Future.Future_Impl_.async(function(__tink_tmp9) {
				cursor.limit(count,function(error,result) {
					if(error != null) __tink_tmp9(tink.core.Outcome.Failure(tink.core.Error.withData(error.message,error,{ fileName : "Node.hx", lineNumber : 29, className : "tinx.node.mongo.Cursor", methodName : "limit"}))); else __tink_tmp9(tink.core.Outcome.Success(result));
				});
			});
		}));
	}
	,toArray: function() {
		return tink.core._Future.Future_Impl_._tryFailingFlatMap(this.native,function(cursor) {
			return tink.core._Future.Future_Impl_.async(function(__tink_tmp10) {
				cursor.toArray(function(error,result) {
					if(error != null) __tink_tmp10(tink.core.Outcome.Failure(tink.core.Error.withData(error.message,error,{ fileName : "Node.hx", lineNumber : 29, className : "tinx.node.mongo.Cursor", methodName : "toArray"}))); else __tink_tmp10(tink.core.Outcome.Success(result));
				});
			});
		});
	}
	,__class__: tinx.node.mongo.Cursor
};
tinx.node.mongo._Internal = {};
tinx.node.mongo._Internal.DbParams_Impl_ = function() { };
tinx.node.mongo._Internal.DbParams_Impl_.__name__ = ["tinx","node","mongo","_Internal","DbParams_Impl_"];
tinx.node.mongo._Internal.DbParams_Impl_.get_data = function(this1) {
	return this1;
};
tinx.node.mongo._Internal.DbParams_Impl_.ofString = function(s) {
	if(tinx.node.mongo._Internal.DbParams_Impl_.wlogin.match(s)) return { host : tinx.node.mongo._Internal.DbParams_Impl_.wlogin.matched(3), name : tinx.node.mongo._Internal.DbParams_Impl_.wlogin.matched(5), port : Std.parseInt(tinx.node.mongo._Internal.DbParams_Impl_.wlogin.matched(4)), login : { user : tinx.node.mongo._Internal.DbParams_Impl_.wlogin.matched(1), password : tinx.node.mongo._Internal.DbParams_Impl_.wlogin.matched(2)}}; else if(tinx.node.mongo._Internal.DbParams_Impl_.anon.match(s)) return { host : tinx.node.mongo._Internal.DbParams_Impl_.anon.matched(1), name : tinx.node.mongo._Internal.DbParams_Impl_.anon.matched(3), port : Std.parseInt(tinx.node.mongo._Internal.DbParams_Impl_.anon.matched(2))}; else throw "invalid connector string " + s;
};
tinx.node.mongo._ObjectID = {};
tinx.node.mongo._ObjectID.ObjectID_Impl_ = function() { };
tinx.node.mongo._ObjectID.ObjectID_Impl_.__name__ = ["tinx","node","mongo","_ObjectID","ObjectID_Impl_"];
tinx.node.mongo._ObjectID.ObjectID_Impl_._new = function(s) {
	return new (require("mongodb").ObjectID)(s);
};
tinx.node.mongo._ObjectID.ObjectID_Impl_.toString = function(this1) {
	return this1.toString();
};
tinx.node.mongo._ObjectID.ObjectID_Impl_.parse = function(s) {
	try {
		return tink.core.Outcome.Success(tinx.node.mongo._ObjectID.ObjectID_Impl_._new(s));
	} catch( e ) {
		return tink.core.Outcome.Failure(e);
	}
};
tinx.node.mongo._ObjectID.ObjectID_Impl_.eq = function(a,b) {
	if(a == null) return b == null; else if(b == null) return false; else return tinx.node.mongo._ObjectID.ObjectID_Impl_.toString(a) == tinx.node.mongo._ObjectID.ObjectID_Impl_.toString(b);
};
tinx.node.mongo._ObjectID.ObjectID_Impl_.neq = function(a,b) {
	return !tinx.node.mongo._ObjectID.ObjectID_Impl_.eq(a,b);
};
tinx.node.mongo._ObjectID.ObjectID_Impl_.toDate = function(this1) {
	if(this1 == null) return null; else {
		var t = parseInt((function($this) {
			var $r;
			var _this = this1.toString();
			$r = HxOverrides.substr(_this,0,8);
			return $r;
		}(this)),16) * 1000;
		var d = new Date();
		d.setTime(t);
		return d;
	}
};
tinx.node.mongo.Where = function(c,match) {
	tinx.node.mongo.CollectionBase.call(this,c.native);
	this.match = match;
};
tinx.node.mongo.Where.__name__ = ["tinx","node","mongo","Where"];
tinx.node.mongo.Where.__super__ = tinx.node.mongo.CollectionBase;
tinx.node.mongo.Where.prototype = $extend(tinx.node.mongo.CollectionBase.prototype,{
	match: null
	,remove: function() {
		return this._remove(this.match,true);
	}
	,removeAll: function() {
		return this._remove(this.match,false);
	}
	,__class__: tinx.node.mongo.Where
});
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
if(Array.prototype.indexOf) HxOverrides.indexOf = function(a,o,i) {
	return Array.prototype.indexOf.call(a,o,i);
};
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
Math.isFinite = function(i) {
	return isFinite(i);
};
Math.isNaN = function(i1) {
	return isNaN(i1);
};
String.prototype.__class__ = String;
String.__name__ = ["String"];
Array.__name__ = ["Array"];
Date.prototype.__class__ = Date;
Date.__name__ = ["Date"];
var Int = { __name__ : ["Int"]};
var Dynamic = { __name__ : ["Dynamic"]};
var Float = Number;
Float.__name__ = ["Float"];
var Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = { __name__ : ["Class"]};
var Enum = { };
RunTests.tests = [new TestAll()];
tink.core._Callback.Cell.pool = [];
tinx.node.mongo._Internal.DbParams_Impl_.wlogin = new EReg("mongodb://(.*?):(.*?)@(.*?):(.*?)/(.*)","");
tinx.node.mongo._Internal.DbParams_Impl_.anon = new EReg("mongodb://(.*?):(.*?)/(.*)","");
RunTests.main();
})();
