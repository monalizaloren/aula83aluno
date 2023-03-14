var lastPositionOfX, lastPositionOfY;
color = "black";
widthOfLine = 2;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Tente fazer sozinho uma variável que se chama 'width' em que ela guardará a largura da tela
//???

//Crie uma variável que se chama newWidth, em que ela guardará a largura da tela -200
//Faça o mesmo com a altura
//???
	if(width < 992)
	{
	document.getElementById("myCanvas").width = newWidth;
    document.getElementById("myCanvas").height = newHeight;
    document.body.style.overflow = "hidden";
	}
	canvas.addEventListener("touchstart", myTouchStart);

function myTouchStart(e) 
{

  color = document.getElementById("color").value;
  //Na linha acima, você está pegando elemento pelo ID, ou seja, está pegando a cor que você escolheu
  //Faça o mesmo com a widthOfLine
  //???
         
    lastPositionOfX = e.touches[0].clientX - canvas.offsetLeft;
    lastPositionOfY = e.touches[0].clientY - canvas.offsetTop;
}

//Utilize o código 'addEventListener' para que se aconteça um evento no canva, também aconteça a função 'myTouchMove'
canvas.???("touchmove", myTouchMove);

function myTouchMove(e) 
{

    currentPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
    currentPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthOfLine;

    ctx.moveTo(lastPositionOfX, lastPositionOfY);

    ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY);
    ctx.stroke();

    lastPositionOfX = currentPositionOfTouchX; 
    lastPositionOfY = currentPositionOfTouchY;
    
}

//Crie a função para limpar a área
??? {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
    
