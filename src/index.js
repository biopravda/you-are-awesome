
// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (enumProperty) => {return enumProperty};
const createNotEnumerableProperty = (enumProperty) => {
    Object.defineProperty(Object.prototype, enumProperty, {
        enumerable: false,
        value: 'value'});
        return enumProperty;};

const createProtoMagicObject = () => {
    function magicObj(){};

    magicObj.prototype = magicObj.__proto__;

    return magicObj;
};
let i = 0;
const incrementor = () => {i++; return incrementor};incrementor.valueOf = () => i;
const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {return null};
const toBuffer = () => {};
const sortByProto = () => {};
const sortByProto = (arr) => {
    arr.sort((a, b) => {
        return a.x - b.x;})
return arr;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;


exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
