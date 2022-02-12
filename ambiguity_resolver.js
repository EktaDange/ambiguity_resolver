n1=Math.floor(Math.random()*6)+1;
var diceimg1=document.querySelectorAll("img")[0];
diceimg1.setAttribute("src","C:\/Users\/dell\/Downloads\/Web-dev\/ambiguity_resolver\/img\/dice"+n1+".png");


n2=Math.floor(Math.random()*6)+1;
var diceimg2=document.querySelectorAll("img")[1];
diceimg2.setAttribute("src","C:\/Users\/dell\/Downloads\/Web-dev\/ambiguity_resolver\/img\/dice"+n2+".png");

if(n1>n2)
{
    document.querySelector("h1").innerHTML=" Player 1 wins !";
}
else if(n1<n2)
{
    document.querySelector("h1").innerHTML="Player 2 wins !";
}
else
{
    document.querySelector("h1").innerHTML="Draw!"; 
}