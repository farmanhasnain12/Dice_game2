document.querySelector("#image1").addEventListener("click",handleclicked);
document.querySelector("#image2").addEventListener("click",handleclicked);

  var randomNumber1;
  var randomNumber2


function handleclicked()
{
   randomNumber2=Math.floor(Math.random()*6)+1;
  var source="images/dice"+randomNumber2+".png";
  document.querySelector("#image2").setAttribute("src",source);

  randomNumber1=Math.floor(Math.random()*6)+1;
 var source1="images/dice"+randomNumber1+".png";
 document.querySelector("#image1").setAttribute("src",source1);

update();

}

function update()
{



  //document.querySelector("#temp").innerHTML="Haye Mazy "+x;



var x=document.getElementById("image1").src;
var pg_url1= x[x.length - 5]



var y=document.getElementById("image2").src;
var pg_url2 = y[y.length - 5]



if (pg_url1>pg_url2)
{
  document.querySelector("h1").innerHTML="Player 1 wins !";
}
else if (pg_url2>pg_url1)
{
  document.querySelector("h1").innerHTML="Player 2 wins !"
}
else
{
  document.querySelector("h1").innerHTML="Draw!";
}


}
