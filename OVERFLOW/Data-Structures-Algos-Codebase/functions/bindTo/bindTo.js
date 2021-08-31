/*
Creates a function that invokes ` func` with a given context, optionally adding any additional supplied parameters to the beginning of the arguments.
- Return a function that uses Function.apply() to apply the given context to  func.
- Use Array.concat() to prepend any additional supplied parameters to the arguments.
 */
function bindTo(func, context, ...boundArgs) {
  return (...args) => {
    return func.apply(context, [...boundArgs, ...args]);
  };
}
function complain(complaint, exclimation) {
  return (
    complaint +
    `[] == ![] ${this.Arrayisequalnotarray()},  and [ true == ![], true == [] ] ${this.trueisnotequaltonotemptyarrbutisequaltoemptyarr()},
    and  [ !!"false" == !!"true" ] ${this.trueisfalse()}, 
    and  [ 0.1 + 0.2 == 0.3, 0.1 + 0.2 ]  ${this.precisioniskeyhahagetit()}, ${exclimation},  
    thanksforinventingJavascript ${this.thanksforinventingJavascript}`
  );
}
const JavascriptIsWeird = {
  Arrayisequalnotarray: function () {
    return [] == ![];
  },
  trueisnotequaltonotemptyarrbutisequaltoemptyarr: function () {
    let wackArray = [true == ![], true == []];
    return wackArray;
  },
  trueisfalse: function () {
    return [!!"false" == !!"true"];
  },
  "WHYYYYY!!!!": function () {
    return [null == 0, null > 0, null >= 0];
  },
  whatamIdoingwithmylife: function () {
    return [1 < 2 < 3, 3 > 2 > 1];
  },
  precisioniskeyhahagetit: function () {
    return [0.1 + 0.2 == 0.3, 0.1 + 0.2];
  },
  thanksforinventingJavascript: "you lunatics",
};
const boundJavascriptIsWeird = bindTo(complain, JavascriptIsWeird);
console.log(boundJavascriptIsWeird("why is", `!`));
/*
why is[] == ![] true,  and [ true == ![], true == [] ] false,false,
    and  [ !!"false" == !!"true" ] true,
    and  [ 0.1 + 0.2 == 0.3, 0.1 + 0.2 ]  false,0.30000000000000004, !,
    thanksforinventingJavascript you lunatics
*/
