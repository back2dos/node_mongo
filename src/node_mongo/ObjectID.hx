package node_mongo;

using tink.CoreApi;

@:native('(require("mongodb").ObjectID)')
private extern class Native {
  function new(?s:String);
  function toString():String;
}
abstract ObjectID<T>(Native) {
  public function new(?s:String) this = new Native(s); 
  @:to public function toString():String 
    return 
      if (this == null) null
      else this.toString();
  static public function parse<A>(s:String):Outcome<ObjectID<A>, Error> {
    try {
      return Success(new ObjectID(s));
    }
    catch (e:Dynamic) 
      return Failure(e);
  }
  
  @:op(a == b) static public function eq<A>(a:ObjectID<A>, b:ObjectID<A>)
    return 
      if (a == null) b == null;
      else if (b == null) false;
      else a.toString() == b.toString();
    
  @:op(a != b) static public function neq<A>(a:ObjectID<A>, b:ObjectID<A>)
    return !(a == b);
    
  @:to public function toDate():Date {
    return 
      if (this == null) null;
      else Date.fromTime((untyped parseInt)(this.toString().substr(0,8), 16)*1000);
  }
  
  #if tink_json
    @:to function toRepresentation() {
      return new tink.json.Representation<String>(this.toString());
    }
    
    @:from static function ofRepresentation(r:tink.json.Representation<String>)
      return new ObjectID(r.get());
  #end
}