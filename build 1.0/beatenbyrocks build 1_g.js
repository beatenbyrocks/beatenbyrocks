/*--- Avanquest WebEasy Document Script ---*/

IE=(navigator.appName.indexOf('Microsoft') >= 0);
NS=(navigator.appName.indexOf('Netscape') >= 0);
SF=(navigator.appName.indexOf('Safari') >= 0);
FF=(navigator.userAgent.indexOf('Firefox') >= 0);
OP=(navigator.userAgent.indexOf('Opera') >= 0);
GK=(navigator.userAgent.indexOf('Gecko') >= 0);
V4=(parseInt(navigator.appVersion) >= 4);
if((V5=navigator.appVersion.indexOf('MSIE '))<0) V5=-5;
V5=(parseInt(navigator.appVersion.charAt(V5+5))>=5);
MAC=(navigator.userAgent.indexOf('Mac')!=-1);


IDP={}; IDP[0]=0;

function DoRoute( obj,tpt,pos,ids,loop,delay)
{	var dx,dy,dd,tm;
	if((pos+2) > IDP[tpt].x.length )
	{	if(!loop)
		{	IDP[obj].left= IDP[tpt].x[pos]+'pt';
			IDP[obj].top  = IDP[tpt].y[pos]+'pt';
			if((IDP[tpt].x[pos]==IDP.bw)||(IDP[tpt].y[pos]==IDP.bd))
			{	IDP[obj].visibility='hidden';
				IDP[obj].left=0+'pt';
				IDP[obj].top =0+'pt';
			}
			return;
		}
		pos=0;
	}
	tm=delay;
	dx=IDP[tpt].x[pos+1]-IDP[tpt].x[pos];
	dy=IDP[tpt].y[pos+1]-IDP[tpt].y[pos];
	dd=Math.abs((Math.abs(dx) > Math.abs(dy))?dx:dy);
	if(dd)
	{	if(ids < dd)
		{	if((dd-ids) < (IDP[tpt].s/2))
			{	IDP[obj].left= IDP[tpt].x[pos+1]+'pt';
				IDP[obj].top = IDP[tpt].y[pos+1]+'pt';
				ids=dd;
			}else
			{	IDP[obj].left=(0.5+IDP[tpt].x[pos]+ids*(dx/dd) )+'pt';
				IDP[obj].top =(0.5+IDP[tpt].y[pos]+ids*(dy/dd) )+'pt';
			}
			ids+=IDP[tpt].s;
		}else
		{	ids-=dd;  pos++;  tm=0;
		}
	}else
	{	pos++;	tm=0;
	}
	window.setTimeout('DoRoute('+obj+','+tpt+','+pos+','+ids+','+loop+','+delay+')',tm);
	return;
}


/*--- EndOfFile ---*/
