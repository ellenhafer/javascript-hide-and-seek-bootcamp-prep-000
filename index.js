function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  var rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0; i < rankedLists.length; i++) {
    var children = rankedLists[i].children;

    for (let j = 0; j < children.length; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}

function deepestChild() {
  var grandNode = document.querySelector('#grand-node');
  var deepestNode = grandNode.children[0];
  for (var i = 0; !deepestNode.children[i]; i) {
    deepestNode = deepestNode.children[0]

  return deepestNode;
  }
}