// alert ("Hello World!")

let a = 10;
let b = 20;
let c = 23.2;
let suma = a + b + c
let roznica = a - b - c
let iloczyn = a * b * c
let iloraz = a / b / c

console.log(a,b,c)

document.getElementById("suma").innerHTML = "Suma: " + suma;
document.getElementById("roznica").innerHTML = "Roznica: " + roznica;
document.getElementById("iloczyn").innerHTML = "Iloczyn: " + iloczyn;
document.getElementById("iloraz").innerHTML = "Iloraz: " + iloraz;

alert("Suma liczb wynosi: " + suma +
      "\nRoznica liczb wynosi: " + roznica +
      "\nIloczyn liczb wynosi: " + iloczyn +
      "\nIloraz liczb wynosi: " + iloraz
    )

    let osoba = prompt("Prosze podaj swoje imie");

    if (osoba != "" || osoba != null) {
        alert("Witaj " + osoba + " miło Cię widzieć!")
    }
    else {
        alert("Nie podales swojego imienia. Czemu tak zrobiles?")
    }

    let x = parseInt(prompt("Podaj długość przyprostokątnej x: "));
    let y = parseInt(prompt("Podaj długość przyprostokątnej y: "));
    let z = parseInt(prompt("Podaj długość przeciwprostokątnej z: "));
    let p = parseInt((x + y + z) / 2);
    let pole = parseFloat(Math.sqrt(p*((p-x)*(p-y)*(p-z))))
    
    

    document.getElementById("pole").innerHTML = "Pole trojkata wynosi: " + pole;

    let random = Math.floor(Math.random()*5);

    console.log(random);

    document.write("Program wylosowal liczbe calkowita z przedzialu od 1 do 5. Zgadnij ja!");

    let letsdothis = parseInt(prompt("Zgadnij liczbe od 1 do 5: "));
    while (letsdothis != random) {
        letsdothis = parseInt(prompt("Próbuj dalej!: "));
    } 
    if (letsdothis = random){
        alert("Zgadles! Gratulacje!")
    }
    const num1 = parseFloat(prompt("Podaj 1 liczbe: "));
    const num2 = parseFloat(prompt("Podaj 2 liczbe: "));
    const num3 = parseFloat(prompt("Podaj 3 liczbe: "));
    
    let najwieksza;

    if(num1 >= num2 && num1 >= num3) {
        najwieksza = num1;
    }
    else if (num2 >= num1 && num2 >= num3) {
        najwieksza = num2;
    }
    else {
        najwieksza = num3;
    }

    document.getElementById("najwieksza").innerHTML="Najwieksza liczba to: " + najwieksza;

