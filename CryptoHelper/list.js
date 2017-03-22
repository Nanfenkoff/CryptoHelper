var fastto = 1;
var stronggo = 1;

document.addEventListener('DOMContentLoaded', function() {
    var y = document.getElementById('fast');
    y.addEventListener('click', function() {
		if (fastto == 1){
		fastto -= 1;
		fastul.style.opacity = "0";
			setTimeout(function(){
				fastul.style.display = "none";
			},300)
		}else{
		fastto += 1;
		fastul.style.display = "block";
			setTimeout(function(){
				fastul.style.opacity = "1";
			},20)
		
		}
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var y = document.getElementById('strong');
    y.addEventListener('click', function() {
		if (stronggo == 1){
		stronggo -= 1;
		strongul.style.opacity = "0";
			setTimeout(function(){
				strongul.style.display = "none";
			},300)
		}else{
		stronggo += 1;
		strongul.style.display = "block";
			setTimeout(function(){
				strongul.style.opacity = "1";
			},20)
		}
    });
});