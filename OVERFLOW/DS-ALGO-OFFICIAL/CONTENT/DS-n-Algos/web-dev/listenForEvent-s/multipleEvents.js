/*

Add multiple event listeners with the same CSS Selector to an element.

- Use  Array.forEach()  and  EventTarget.addEventListener()  to add multiple event listeners with an assigned callback function to an element.
*/

const addListeners2El = (htmlEle, eventTypeArr, listener, cb) => {
  eventTypeArr.forEach((type) => htmlEle.addEventListener(type, listener, cb));
};
addListeners2El(
  document.querySelector(".my-element"),
  ["click", "mousedown"],
  () => {
    console.log("hello!");
  }
);
