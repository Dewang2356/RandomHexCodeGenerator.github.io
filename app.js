
btn.addEventListener('click',()=>{

	let color = '#';
	color += Math.random().toString(16).slice(2, 8);
	

	circle.style.transform = 'scale(0)';
	code.style.transform = 'scale(1.1)';
	
	circle.style.background=color;
	code.innerText = color;
	
	setTimeout(()=>{
		circle.style.transform = 'scale(1)';
			code.style.transform = 'scale(1)';
		

	},350);
	document.querySelector('meta[name="theme-color"]').setAttribute('content',  color);
})
window.onload=()=>{
	let a = '#';

	a += Math.random().toString(16).slice(2, 8);
	circle.style.background=a;
		circle.style.transform = 'scale(1)';
		code.innerText = a;

}
copy.addEventListener('click',()=>{
		copied.style.top="9%"
		copied.style.opacity = '1';
	setTimeout(()=>{
	copied.style.top="-5%"
	copied.style.opacity = '0';
	},900);



	var elm = document.getElementById("code");


  if(document.body.createTextRange) {
    var range = document.body.createTextRange();
    range.moveToElementText(elm);
    range.select();
    document.execCommand("Copy");
    
  }
  else if(window.getSelection) {
 

    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(elm);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("Copy");
    
  }
})






  
