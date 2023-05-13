function Akcja_Walidacja() 
{
  var imie = document.getElementById("imie").value;
  var nazwisko = document.getElementById("nazwisko").value;
  var email = document.getElementById("email").value;
  var haslo = document.getElementById("haslo").value;
  var potwierdzenie_hasla = document.getElementById("reapeat_haslo").value
  var urodziny = document.getElementById("birthdate").value;
  var Email = /^\S+@\S+\.\S+$/;
  var Hasło = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

  if (imie == "" || nazwisko == "" || email == "" || haslo == "" || urodziny == "") 
  {
    alert("Proszę wypełnić wszystkie pola formularza");
    return false;
  }

  if (haslo.length < 8) 
  {
    alert("Hasło powinno mieć co najmniej 8 znaków");
    return false;
  }

  if (!Email.test(email)) 
  {
    alert("Nieprawidłowy adres email");
    return false;
  }

  if (!Hasło.test(haslo)) 
  {
    alert("Hasło powinno mieć co najmniej 8 znaków, zawierać co najmniej jedną małą i jedną dużą literę oraz jedną cyfrę");
    return false;
  }
  
  if (haslo !== potwierdzenie_hasla)
  {
    alert("Hasła nie są identyczne!");
    return false;
  }

  var dzis = new Date(); // dzisiejsza data
  var urodziny = new Date(urodziny); // wartosc z pola daty urodzenia

  var wiek = dzis.getFullYear() - urodziny.getFullYear(); // biężący rok odejmujemy z rokiem z pola daty urodzenia
  var miesiac = dzis.getMonth() - urodziny.getMonth(); // bieżący miesiac odejmujemy z miesiacem z pola daty urodzenia

  if (miesiac < 0 || (miesiac == 0 && dzis.getDate() < urodziny.getDate())) 
  {
    wiek--;
  }

  if (wiek < 18) 
  {
    alert("Musisz mieć co najmniej 18 lat, aby zarejestrować się na tej stronie.");
    return false;
  }
  
  
  alert("Formularz został poprawnie wypełniony!");
  return true;
}

function Avada_Kedavra() 
{
  var checkbox = document.getElementById("adres-checkbox"); // wartosc z checkboxa
  var adresKorespondencyjny = document.getElementById("adres-korespondencyjny"); // wartosc ukryta z adresu kores.
  
  if (checkbox.checked == false)
  {
    adresKorespondencyjny.style.display = "block";
  } 
  else 
  {
    adresKorespondencyjny.style.display = "none";
  }
}

function Hokus_Pokus() 
{
  var wybierz_kraj = document.getElementById("country"); // wartosc z kraju
  var wybierz_wojewodztwo = document.getElementById("wojewodztwo"); // wartosc z wojewodztwa

  if (wybierz_kraj.value == "Polska") 
  {
    wybierz_wojewodztwo.disabled = false;
    
  } 
  else 
  {
    wybierz_wojewodztwo.disabled = true;
  }
 
  var checkbox_adresu = document.getElementById("adres-checkbox"); // wartosc z checkboxa adresu koresponcyjcyjnego
  var adres_korespondyncyjny = document.getElementById("adres-korespondencyjny"); // wartosc z diva adresu który ma status ukryty

  if (checkbox_adresu.checked) 
  {
    adres_korespondyncyjny.style.display = "none";
  } 
  else 
  {
    adres_korespondyncyjny.style.display = "block";
  }
}

function Czary_Mary() 
{
  var wojewodztwo = document.getElementById("wojewodztwo"); // wartosc z pola wojewodztwo
  var adres = document.getElementById("adres"); // wartosc z pola adres zamieszkania
  var AdresKorespondencyjny = document.getElementById("adres-korespondencyjny"); // wartosc z pola adresu koresponcyjnego
  
  if (wojewodztwo.value) 
  {
    adres.disabled = false;
    AdresKorespondencyjny.style.display = "block";
  } 
  else 
  {
    adres.disabled = true;
    AdresKorespondencyjny.style.display = "none";
  }
}
  
function sprawdz() 
  {
    
    var telefon = document.getElementById("telefon").value;
    telefon = telefon.replace(/\D/g,'');
    document.getElementById("telefon").value = telefon;
}
