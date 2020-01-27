var timer = null;
var countdownNumber = 10;
//aタグをクリックしたとき（oncklick）に他のstateへ飛ぶメソッド
var changeState = function (state) {
//'body-state'+stateは引数であるstateの中身をとstringである'body-state'の組み合わせをbodyのクラスに代入する。
//bodyのclassの書き換え
	document.body.className='body-state'+state;
	//カウントダウンのストップ
	clearInterval(timer);
	//clearOnterval後カウントを10に戻す
	countdownNumber = 10;
	document.getElementById('countdown').innerHTML　= countdownNumber;
//stateが２の時にカウントダウンを行う。
	if (state == 2) {
		//タイマー処理　setInterval…一定時間ごとに特定の処理を繰り返す。スライドショーなどに使える
		timer = setInterval(function () {
			//変数countdownNumberから１引く
			countdownNumber = countdownNumber -1;
			//innerHTMLプロパティにグローバル変数countdownNumberを代入
			//innerHTMLはHTMLのタグの間の文字などを指す
			document.getElementById('countdown').innerHTML　= countdownNumber;
			
			
			//0になったときにstate3に移行
			if (countdownNumber <= 0) {
				changeState(3);
			};
			//カウントの間隔
			
		}, 500);
}	else if (state == 3){
	//setTimeout時間を設定して、何秒後に何が発動するか決められる、時間差で起こる何かを作りたいときに使われる
		var success = setTimeout(function ()
		{
				var randomNumber = Math.round(Math.random()*10);

					console.log('randomNumber:', randomNumber)

				// succes
				if(randomNumber > 5){
					changeState(4);
				}else{
					changeState(5);// oh no!
				}
		},	2000);
};
}