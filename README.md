#printAreaLite.js

範囲印刷の実装にあたって、[こちらのプラグイン](http://kojikoji75.hatenablog.com/entry/2014/02/06/212405)を使ってみたところ、自分の環境ではIE,Chromeで正常に動作しなかったため、今後の参考に作ってみました。  
なお、実装にあたってソースコードはこちらを参考にさせて頂きました。  
[http://560days.com/lab/2013/10/001441.php](http://560days.com/lab/2013/10/001441.php)

##Change Log
* 2014/12/19 ver 1.0 初版リリース

##License
**MIT License**  
<http://www.opensource.org/licenses/mit-license.php>

##Operation Check
####jQuery
* ver 1.8.2  

恐らくこれ以降でも動きます。  

####検証ブラウザ
**Windows**  
* IE 8(Emulation Mode)  
* IE 11  
* Firefox 33  
* Chrome 39  

こっちもあまり検証してません。が、恐らく色んなブラウザで動きます。たぶん。

##Howto
###HTML
**jquery.js**,**printAreaLite.js**を以下の順に読み込んでください。 

```ruby
<script src="js/jquery.js"></script>
<script src="js/printAreaLite.js"></script>
```

更に以下のコードで印刷のトリガーとなる要素と、印刷させたい要素を指定します。

```ruby
<script>
$(".btnPrint01").click(function(){
	$.printAreaLite(".printArea01");
});
</script>
```

###Sass
次にSassで以下のコードを書きます。

```ruby
@media print {
	.printDisplayNone {
		display: none !important;
	}
}
@media screen {
	#printFields {
		display: none !important;
	}
}
```

###Output CSS
コンパイル後のCSSです。印刷classを指定した以外の箇所は``@media print``で``display: none;``となり、印刷エリアとして``.append()``したdiv内に複製した要素達は画面上で見えないように``@media screen``で``display: none;``させます。

```ruby
@media print { .printDisplayNone { display: none !important; } }
@media screen { #printFields { display: none !important; } }
```

あとはコンテンツ内と同様のデザインを再現して印刷したい場合``#printFields``の要素内にも同様のスタイルをかけるのを忘れないでください。

##Remarks
改良点としては、``.html()``として変数に格納するのではなく、objectのまま``.clone()``してあとから変換している点と、Chromeだと``.html()``で吐き出した際、レンダリング中に印刷がスタートしてしまうケースが多々あったので、``setTimeout``を設けています。  
これがベストと言えるのか分からないけど、とりあえずこんな感じ。(｀・ω・´)
