function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  var rankedList = document.querySelectorAll("ul.ranked-list li");
  rankedList.forEach(function(){
    var rankedListTextContent = parseInt(rankedList.textContent);
    rankedList.textContent = rankedListTextContent + 1;
  });
  //access .ranked-list
  //loop through each item
  //increase rank by n
}

function deepestChild() {
  
}