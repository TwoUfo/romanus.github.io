var string = document.getElementById('h3');
var img = document.getElementById('img');
var sword = document.getElementById('sword_btn');
var pistol = document.getElementById('pistol_btn');
var nos = document.getElementById('nos_btn');
var digit = 5000;

var array1 = ['roma1.jpg', 'roma2.jpg', 'roma3.jpg', 'roma4.jpg'];
var array2 = ['roma5.jpg', 'roma6.jpg', 'roma7.jpg'];
var array3 = ['roma8.jpg', 'roma9.jpg'];

sword_btn.addEventListener('click', function(){
	var rand = Math.floor(Math.random()*array1.length);
	digit = digit - 50;
	if(digit >= 0) {
		string.textContent = "HP: "+digit;
		img.src = "img/"+array1[rand];
		console.log(img.src);
	}
	else {
	    img.src = "img/romaDead.jpg"
	    string.textContent = "0";
	}
});

pistol_btn.addEventListener('click', function(){
	var rand = Math.floor(Math.random()*array2.length);
	digit = digit - 80;
	if(digit >= 0) {
		string.textContent = "HP: "+digit;
		img.src = "img/"+array2[rand];
	}

	else {
	    img.src = "img/romaDead.jpg"
	    string.textContent = "0";
	}
});

nos_btn.addEventListener('click', function(){
	var rand = Math.floor(Math.random()*array3.length);
	digit = digit - 100;
	if(digit >= 0) {
		string.textContent = "HP: "+digit;
		img.src = "img/"+array3[rand];
	}

	else {
	    img.src = "img/romaDead.jpg"
	    string.textContent = "0";
	}
});
