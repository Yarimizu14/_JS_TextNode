$(function() {
  /*
   * jQueryオブジェクトを取得
   */
  var $h1 = $("#wrapper");

  var children = $h1.contents(); // Array of child NodeList

  /*
   * テキストノード
   */
  var $t = $(h1.contents()[0]);  //jQuery object of text node
  $t.data("key", "this is text node");

  //textの取得は出来るが変更は出来ない
  console.log($t.text());           // "    ああああ    "
  console.log($t.text("いいいい")); // => DOMは変わらない
  $t[0].nodeValue = "いいいい";     // 変更する時はNodeListオブジェクトを直接弄る

  // text nodeのjQuery objではdataメソッドを使えない
  console.log($t.data("key"));  

  //jQueryオブジェクトではDOMとのリンクが切れるメソッドがある
  console.log($t.parent()); //=> [<h1 id="wrapper">...</h1>]
  $t.replaceWith("うううう");
  console.log($t.parent()); //=> []  親への参照は消える
});

