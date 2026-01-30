/*--- Avanquest WebEasy Motion Script ---*/


function OnWeLoad()
{
	IDP.bw=0; IDP.bd=0;
	if(self.innerHeight)
	{	IDP.bw=self.innerWidth;
		IDP.bd=self.innerHeight;
	}
	else if(document.documentElement && document.documentElement.clientHeight)
	{	IDP.bw=document.documentElement.clientWidth;
		IDP.bd=document.documentElement.clientHeight;
	}
	else if(document.body)
	{	IDP.bw=document.body.clientWidth;
		IDP.bd=document.body.clientHeight;
	}
	IDP.bw=IDP.bw / 1.33;
	IDP.bd=IDP.bd / 1.33;
	IDP[1]={	x:new Array(348,411,429,446,504,485,471,380,363,348,347,347),
				y:new Array(339,338,311,338,337,306,337,337,314,337,336,337),
				s:8 };
	IDP[2]=(V5)?document.getElementById('e1').style:(IE)?e1.style:document.e1;
	window.setTimeout('DoRoute(2,1,0,0,1,100)',0);
}


/*--- EndOfFile ---*/
