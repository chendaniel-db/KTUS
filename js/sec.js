/* 秒數倒數跳轉 */

	setTimeout('countdown()', 1000);
	function countdown() 
		{
			var s = document.getElementById('timer');
			s.innerHTML = s.innerHTML - 1;
			if (s.innerHTML == 0)
			window.location = 'https://chenmsit-my.sharepoint.com/:f:/g/personal/chen_0910705_chenmsit_onmicrosoft_com/Ehn-a-ntkSNNquPqsLBURqgBAbiRemPi_AFGMOYx62qsCg?e=cD5vxf';
			else
			setTimeout('countdown()', 1000);
		}
	
/* 顯示時間 */
	function ShowTime()
        {
            var NowDate = new Date();
            var d = NowDate.getDay();
            var dayNames = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
            document.getElementById('showbox').innerHTML = '系統目前時間：' + NowDate.toLocaleString() + '（' + dayNames[d] + '）';
            setTimeout('ShowTime()', 1000);
        }
