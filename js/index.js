$(function() {
	
	var open = document.querySelector('.open');
	var p = document.querySelector('.title').querySelector('p');
	var close = document.querySelector('.close');
	
	open.onclick = function() {
		this.children[0].style.display = 'none';
		this.className = 'open';
		this.children[1].style.display = 'block';
		this.children[1].style.animation = 'move 1s linear';
		setTimeout(function() {
			open.children[1].style.display = 'none';
			p.innerHTML = '手慢了，红包派完了';
		}, 1000);
	}
	
	close.onclick = function() {
		$(".red_packet").hide();
		$(".benediction").show();
	}
	
})