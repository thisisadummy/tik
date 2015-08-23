//this is my new addition
//this is from the dummy account
var player=0;
var ideas = {"p1":"p11","p2":"p12","p3":"p13","p4":"p21","p5":"p22","p6":"p23","p7":"p31","p8":"p32","p9":"p33"};
var classes = {"p11":"p1","p12":"p2","p13":"p3","p21":"p4","p22":"p5","p23":"p6","p31":"p7","p32":"p8","p33":"p9"};
var punnu;
function checksquare(position)
{
	var p = position.className;
	var x = document.getElementsByClassName(p);
	var trio = checkbyclass(x);
	 return checkbyclass(x);
//	else return true;
	
	
}
function activa(ids)
{
	var inactive = document.getElementsByClassName(classes[ids]);
		for(i=0;i<inactive.length;i++)
		{
			inactive[i].onclick=function(){doit(this);};
			inactive[i].style.background="#353535";
		}
}
function inactiva(ids)
{
	var inactive = document.getElementsByClassName(classes[ids]);
	for(i=0;i<inactive.length;i++)
	{
		inactive[i].onclick=function(){};
		inactive[i].style.background="#202020";
	}
}

function checkbyclass(x)
{
	if(x==null || x=="pizza")
	{
		return true;
	}	
	else if((x[0].innerHTML=="O" && x[1].innerHTML=="O" && x[2].innerHTML=="O")||(x[0].innerHTML=="X" && x[1].innerHTML=="X" && x[2].innerHTML=="X"))
	{

		return true;
	}
	else
	{
		return false;
	}
}

/*function deactivate(position, value)
{
	var ids;
	for(ids in classes)
	{
		if(!value)
		{
			if(ids != position.id)
			{	
				var inactive = document.getElementsByClassName(classes[ids]);
				for(i=0;i<inactive.length;i++)
				{
					inactive[i].onclick=function(){};
					inactive[i].style.background="#202020";	
				}
			}
			else if(classes[ids]==null)
			{	
				var inactive = document.getElementsByClassName(classes[ids]);
				for(i=0;i<inactive.length;i++)
				{
					inactive[i].onclick=function(){};
					inactive[i].style.background="#202020";
				}
			}
			else
			{	
				var inactive = document.getElementsByClassName(classes[ids]);
				for(i=0;i<inactive.length;i++)
				{
					inactive[i].onclick=function(){doit(this);};
					inactive[i].style.background="#353535";		
				}
			}
		}
		else if (value && classes[position.id]==null)
		{
			if(ids == position.id)
			{
				var inactive = document.getElementsByClassName(classes[ids]);
				for(i=0;i<inactive.length;i++)
				{
					inactive[i].onclick=function(){};
					inactive[i].style.background="#202020";	
				}
				

			}
			else
			{
				var inactive = document.getElementsByClassName(classes[ids]);
				for(i=0;i<inactive.length;i++)
				{
					inactive[i].onclick=function(){doit(this);};
					inactive[i].style.background="#353535";
				}
				
			}
		}
		else
		{
			if(ids == position.id)
			{
				var inactive = document.getElementsByClassName(classes[ids]);
				for(i=0;i<inactive.length;i++)
				{
					inactive[i].onclick=function(){doit(this);};
					inactive[i].style.background="#353535";
				}
				

			}
			else
			{
				var inactive = document.getElementsByClassName(classes[ids]);
				for(i=0;i<inactive.length;i++)
				{
					inactive[i].onclick=function(){};
					inactive[i].style.background="#202020";
				}
				
			}
		}	
	}
	if(classes[position.id]==null)
	{
		console.log("Entered");
		for(ids in classes)
		{
			if(classes[ids]!=null)
			{
				var inactive = document.getElementsByClassName(classes[ids]);
				for(i=0;i<inactive.length;i++) 
				{
					inactive[i].onclick=function(){doit(this);};
					inactive[i].style.background="#353535";
				}
			}
		}
	}
	if(value){
		var x = ideas[position.className];
		classes[x]=null;
	}
}*/

function deactivate2(position, value)
{
	var ids;
	var x;
	var p = classes[position.id];
	if(p!=null) x=document.getElementsByClassName(p);
	else x="pizza";
	for(ids in classes)
	{
		if(!value && !checkbyclass(x))
		{
			if(ids==position.id) activa(ids);
			else inactiva(ids);
		}
		else if(value && !checkbyclass(x))
		{
			if(ids==position.id) 
			{
				activa(ids);
				classes[position.id]=null;
			}
			else inactiva(ids);
		}
		else if(!value && checkbyclass(x))
		{	
			if(classes[position.id]==null)
			{
				if(classes[ids]!=null) activa(ids);
				else inactiva(ids);
			}

//			else activa(ids);
		}
		else
		{	
			
			if(classes[ids]==null || position.id==ids) 
			{
				inactiva(ids);
				
			}
			else activa(ids);
			var mn = position.className;
			var mnb = ideas[mn];
			if(mnb==ids){
				var tre = classes[ids];
				classes[ids]=null;
				deactivate2(ids);
			}
		}	
	}
}

function getO(position){
	position.style.color="green";
	position.innerHTML="O";
	player++;
	player=player%2;
	deactivate2(position, checksquare(position));
}
function getX(position){
	position.style.color="red";
	position.innerHTML="X";
	player++;
	player=player%2;	
	deactivate2(position, checksquare(position));

}
function doit(position){
	var punnu = position;
	if(position.innerHTML==""){
		if(player==0) {getO(position);}
		else if (player==1) {getX(position);}
	}
}
