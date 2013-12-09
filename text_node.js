document.addEventListener("DOMContentLoaded", function() {
  /*
   * NodeList, HTMLCollection（DOMツリーのライブオブジェクト）を取得する
   */
  var h1 = document.getElementById("wrapper");
  console.log(Object.prototype.toString.call(h1)); //=> "[object HTMLHeadingElement]" - NodeList パーフェクトJS p.
  console.log(Object.prototype.toString.call(document.images)); //=> "[object HTMLCollection]" -HTMLCollection  パーフェクトJS p.255

  /*
   * テキストノード
   */
  var t = h1.firstChild;

  // [object Text] は [object String]　とは違う
  console.log(Object.prototype.toString.call(t)); //=> "[object Text]" - TextNode

  //値の取り出し方,nodeValueが普通っぽい
  console.log(t.parentNode); //=> <h1 id="wrapper">...</h1> 参照は残る
  console.log(t.nodeValue);  //=>  "    ああああ     "
  console.log(t.data);       //=>  "    ああああ     "
  console.log(typeof t.nodeValue); //=> "string" string型で格納される

  t.nodeValue = "いいい"; //DOMが変わる

});
