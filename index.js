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

}