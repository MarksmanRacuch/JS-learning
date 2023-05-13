for (let i = 10; i >= 0; i--) 
{
    setTimeout(function() 
    {
      if (i == 0) 
      {
        document.getElementById("odliczanie").innerHTML = "Happy New Year!";
      } else 
      {
        document.getElementById("odliczanie").innerHTML = (i);
      }
    }, (10 - i) * 1000);
  }


let odliczanie = 10;
const final_countdown = setInterval(function() 
{
   
    console.log(odliczanie);

    if (odliczanie > 0) 
    {
      odliczanie -- ;
    }
    
    if (odliczanie == 0) 
    {
      console.log("Happy New Year!");
      clearInterval(final_countdown);
    }
}, 1000);

function NWD()
{
    const numer1 = parseInt(document.getElementById("numer1").value);
    const numer2 = parseInt(document.getElementById("numer2").value);

    let nwd = 1;
    for (let i = 1; i <= numer1 && i <= numer2; i++) 
    {
      if (numer1 % i === 0 && numer2 % i === 0) 
      {
        nwd = i;
      }
    }

    document.getElementById("result").innerHTML = `NWD = (${numer1},${numer2}) =  ${nwd}.`;
  }


