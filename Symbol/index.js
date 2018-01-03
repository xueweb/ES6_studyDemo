var sym = Symbol("foo");
typeof sym;     // "symbol"
var symObj = Object(sym);
typeof symObj;  // "object"