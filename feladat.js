const adatbekeres = async () => {
    const response = await fetch('./autok.txt');
    const valasz = await response.text();
    console.log(valasz);

    return valasz;
};

let lepteto = 0;
let balKontener = document.querySelector('#bal-kontener');
let jobbKontener = document.querySelector('#jobb-kontener');

const megoldas = async () => {
    const adatok = await adatbekeres();
    const adatTomb = adatok.split('\n');

    if (lepteto === 0) {
        let leirasTartalom = '<p>using System;</p>';
        leirasTartalom += '<p>using System.Text;</p>';
        leirasTartalom += '<p>using System.Collections.Generic;</p>';
        leirasTartalom += '<p>using System.IO;</p><br />';
        leirasTartalom += '<p>namespace Autok</p>';
        leirasTartalom += '<p>{</p>';
        leirasTartalom += '<p class="egyes">internal public Program</p>';
        leirasTartalom += '<p class="egyes">{</p>';
        leirasTartalom +=
            '<p class="kettes">static void Main(string[] args)</p>';
        leirasTartalom += '<p class="kettes">{</p>';
        leirasTartalom +=
            '<p class="harmas kiemel">using (StreamReader sr = new StreamReader("autok.txt", Encoding.UTF8))</p>';
        leirasTartalom += '<p class="harmas kiemel">{</p>';
        leirasTartalom +=
            '<p class="negyes kiemel">while (!sr.EndOfStream)</p>';
        leirasTartalom += '<p class="negyes kiemel">{</p>';
        leirasTartalom +=
            '<p class="otos kiemel">string sor = sr.ReadLine();</p>';
        leirasTartalom += '<p class="otos kiemel">Console.WriteLine(sor);</p>';
        leirasTartalom += '<p class="negyes kiemel">}</p>';
        leirasTartalom += '<p class="harmas kiemel">}</p><br />';
        leirasTartalom += '<p class="harmas">Console.ReadKey(true);</p>';
        leirasTartalom += '<p class="kettes">}</p>';
        leirasTartalom += '<p class="egyes">}</p>';
        leirasTartalom += '<p>}</p>';
        balKontener.innerHTML = leirasTartalom;

        let megoldasTartalom = '';

        for (let i = 0; i < adatTomb.length; i++) {
            setTimeout(() => {
                megoldasTartalom += `<div class="keret tav-le">${adatTomb[i]}</div>`;
                jobbKontener.innerHTML = megoldasTartalom;
            }, i * 0);
        }
    } else if (lepteto === 1) {
        let leirasTartalom = '<p>using System;</p>';
        leirasTartalom += '<p>using System.Text;</p>';
        leirasTartalom += '<p>using System.Collections.Generic;</p>';
        leirasTartalom += '<p>using System.IO;</p><br />';
        leirasTartalom += '<p>namespace Autok</p>';
        leirasTartalom += '<p>{</p>';
        leirasTartalom += '<p class="egyes">internal public Program</p>';
        leirasTartalom += '<p class="egyes">{</p>';
        leirasTartalom +=
            '<p class="kettes">static void Main(string[] args)</p>';
        leirasTartalom += '<p class="kettes">{</p>';
        leirasTartalom +=
            '<p class="harmas">using (StreamReader sr = new StreamReader("autok.txt", Encoding.UTF8))</p>';
        leirasTartalom += '<p class="harmas">{</p>';
        leirasTartalom += '<p class="negyes">while (!sr.EndOfStream)</p>';
        leirasTartalom += '<p class="negyes">{</p>';
        leirasTartalom += '<p class="otos">string sor = sr.ReadLine();</p>';
        leirasTartalom +=
            "<p class='otos kiemel'>string[] tomb = sor.Split(';');</p>";
        leirasTartalom += '<p class="otos kiemel">string adatSor = "";</p>';
        leirasTartalom +=
            '<p class="otos kiemel">for (int i = 0; i < tomb.Length; i++)</p>';
        leirasTartalom += '<p class="otos kiemel">{</p>';
        leirasTartalom +=
            '<p class="hatos kiemel">adatSor += tomb[i] + " ";</p>';
        leirasTartalom += '<p class="otos kiemel">}</p>';
        leirasTartalom +=
            '<p class="otos kiemel">Console.WriteLine(adatSor);</p>';
        leirasTartalom += '<p class="negyes">}</p>';
        leirasTartalom += '<p class="harmas">}</p><br />';
        leirasTartalom += '<p class="harmas">Console.ReadKey(true);</p>';
        leirasTartalom += '<p class="kettes">}</p>';
        leirasTartalom += '<p class="egyes">}</p>';
        leirasTartalom += '<p>}</p>';
        balKontener.innerHTML = leirasTartalom;

        let megoldasTartalom = '';

        for (let i = 0; i < adatTomb.length; i++) {
            setTimeout(() => {
                let adatTombSor = adatTomb[i].split(';');
                let adatSor = '';

                for (let j = 0; j < adatTombSor.length; j++) {
                    adatSor += `<span class="keret tav">${adatTombSor[j]}</span>`;
                }

                megoldasTartalom += `<div class="tav-le">${adatSor}</div>`;
                jobbKontener.innerHTML = megoldasTartalom;
            }, i * 0);
        }
    } else if (lepteto === 2) {
        let leirasTartalom = '<p>using System;</p>';
        leirasTartalom += '<p>using System.Text;</p>';
        leirasTartalom += '<p>using System.Collections.Generic;</p>';
        leirasTartalom += '<p>using System.IO;</p><br />';
        leirasTartalom += '<p>namespace Autok</p>';
        leirasTartalom += '<p>{</p>';
        leirasTartalom += '<p class="egyes">internal public Program</p>';
        leirasTartalom += '<p class="egyes">{</p>';
        leirasTartalom +=
            '<p class="kettes">static void Main(string[] args)</p>';
        leirasTartalom += '<p class="kettes">{</p>';
        leirasTartalom +=
            '<p class="harmas kiemel">List&lt;string[]&gt; autokLista = new List&lt;string[]&gt;();</p><br />';
        leirasTartalom +=
            '<p class="harmas">using (StreamReader sr = new StreamReader("autok.txt", Encoding.UTF8))</p>';
        leirasTartalom += '<p class="harmas">{</p>';
        leirasTartalom += '<p class="negyes">while (!sr.EndOfStream)</p>';
        leirasTartalom += '<p class="negyes">{</p>';
        leirasTartalom += '<p class="otos">string sor = sr.ReadLine();</p>';
        leirasTartalom += "<p class='otos'>string[] tomb = sor.Split(';');</p>";
        leirasTartalom += "<p class='otos kiemel'>autokLista.Add(tomb);</p>";
        leirasTartalom += '<p class="negyes">}</p>';
        leirasTartalom += '<p class="harmas">}</p><br />';
        leirasTartalom += '<p class="harmas">Console.ReadKey(true);</p>';
        leirasTartalom += '<p class="kettes">}</p>';
        leirasTartalom += '<p class="egyes">}</p>';
        leirasTartalom += '<p>}</p>';
        balKontener.innerHTML = leirasTartalom;

        let megoldasTartalom = '';

        for (let i = 0; i < adatTomb.length; i++) {
            let adatTombSor = adatTomb[i].split(';');
            let adatSor = '';
            for (let j = 0; j < adatTombSor.length; j++) {
                adatSor += `<span class="keret tav">${adatTombSor[j]}</span>`;
            }
            megoldasTartalom += `<div class="tav-le">${adatSor}</div>`;
        }

        jobbKontener.innerHTML = megoldasTartalom;
    } else if (lepteto === 3) {
        let leirasTartalom = '<p>using System;</p>';
        leirasTartalom += '<p>using System.Text;</p>';
        leirasTartalom += '<p>using System.Collections.Generic;</p>';
        leirasTartalom += '<p>using System.IO;</p><br />';
        leirasTartalom += '<p>namespace Autok</p>';
        leirasTartalom += '<p>{</p>';
        leirasTartalom += '<p class="egyes">internal public Program</p>';
        leirasTartalom += '<p class="egyes">{</p>';
        leirasTartalom +=
            '<p class="kettes">static void Main(string[] args)</p>';
        leirasTartalom += '<p class="kettes">{</p>';
        leirasTartalom +=
            '<p class="harmas">List&lt;string[]&gt; autokLista = new List&lt;string[]&gt;();</p><br />';
        leirasTartalom +=
            '<p class="harmas">using (StreamReader sr = new StreamReader("autok.txt", Encoding.UTF8))</p>';
        leirasTartalom += '<p class="harmas">{</p>';
        leirasTartalom += '<p class="negyes">while (!sr.EndOfStream)</p>';
        leirasTartalom += '<p class="negyes">{</p>';
        leirasTartalom += '<p class="otos">string sor = sr.ReadLine();</p>';
        leirasTartalom += "<p class='otos'>string[] tomb = sor.Split(';');</p>";
        leirasTartalom += "<p class='otos'>autokLista.Add(tomb);</p>";
        leirasTartalom += '<p class="negyes">}</p>';
        leirasTartalom += '<p class="harmas">}</p><br />';
        leirasTartalom +=
            '<p class="harmas kiemel">// 1. Feladat: Hány autónak van 5 ajtaja?</p>';
        leirasTartalom += '<p class="harmas kiemel">int otAjtos = 0;</p>';
        leirasTartalom +=
            '<p class="harmas kiemel">for (int i = 0; i < autokLista.Count; i++)</p>';
        leirasTartalom += '<p class="harmas kiemel">{</p>';
        leirasTartalom +=
            '<p class="negyes kiemel">if (Int32.Parse(autokLista[i][2]) == 5) otAjtos++;</p>';
        leirasTartalom += '<p class="harmas kiemel">}</p>';
        leirasTartalom +=
            '<p class="harmas kiemel">Console.WriteLine($"1. Feladat: {otAjtos} kocsinak van 5 ajtaja.");</p><br />';
        leirasTartalom += '<p class="harmas">Console.ReadKey(true);</p>';
        leirasTartalom += '<p class="kettes">}</p>';
        leirasTartalom += '<p class="egyes">}</p>';
        leirasTartalom += '<p>}</p>';
        balKontener.innerHTML = leirasTartalom;

        let megoldasTartalom =
            '<h4>1. Feladat: Hány autónak van 5 ajtaja?</h4>';
        let otAjtos = 0;

        for (let i = 0; i < adatTomb.length; i++) {
            setTimeout(() => {
                let adatTombSor = adatTomb[i].split(';');
                let adatSor = '';
                if (+adatTombSor[2] === 5) {
                    otAjtos++;
                    for (let j = 0; j < adatTombSor.length; j++) {
                        adatSor += `<span class="keret tav toltve">${adatTombSor[j]}</span>`;
                    }
                } else {
                    for (let j = 0; j < adatTombSor.length; j++) {
                        adatSor += `<span class="keret tav">${adatTombSor[j]}</span>`;
                    }
                }
                megoldasTartalom += `<div class="tav-le">${adatSor}</div>`;
                megoldasTartalom += `<div class="tav-le">Az 5 ajtós kocsik száma: ${otAjtos}</div>`;

                jobbKontener.innerHTML = megoldasTartalom;
            }, i * 0);
        }
    } else if (lepteto === 4) {
        let leirasTartalom = '<p>using System;</p>';
        leirasTartalom += '<p>using System.Text;</p>';
        leirasTartalom += '<p>using System.Collections.Generic;</p>';
        leirasTartalom += '<p>using System.IO;</p><br />';
        leirasTartalom += '<p>namespace Autok</p>';
        leirasTartalom += '<p>{</p>';
        leirasTartalom += '<p class="egyes">internal public Program</p>';
        leirasTartalom += '<p class="egyes">{</p>';
        leirasTartalom +=
            '<p class="kettes">static void Main(string[] args)</p>';
        leirasTartalom += '<p class="kettes">{</p>';
        leirasTartalom +=
            '<p class="harmas">List&lt;string[]&gt; autokLista = new List&lt;string[]&gt;();</p><br />';
        leirasTartalom +=
            '<p class="harmas">using (StreamReader sr = new StreamReader("autok.txt", Encoding.UTF8))</p>';
        leirasTartalom += '<p class="harmas">{</p>';
        leirasTartalom += '<p class="negyes">while (!sr.EndOfStream)</p>';
        leirasTartalom += '<p class="negyes">{</p>';
        leirasTartalom += '<p class="otos">string sor = sr.ReadLine();</p>';
        leirasTartalom += "<p class='otos'>string[] tomb = sor.Split(';');</p>";
        leirasTartalom += "<p class='otos'>autokLista.Add(tomb);</p>";
        leirasTartalom += '<p class="negyes">}</p>';
        leirasTartalom += '<p class="harmas">}</p><br />';
        leirasTartalom +=
            '<p class="harmas">// 1. Feladat: Hány autónak van 5 ajtaja?</p>';
        leirasTartalom += '<p class="harmas">int otAjtos = 0;</p>';
        leirasTartalom +=
            '<p class="harmas">for (int i = 0; i < autokLista.Count; i++)</p>';
        leirasTartalom += '<p class="harmas">{</p>';
        leirasTartalom +=
            '<p class="negyes">if (Int32.Parse(autokLista[i][2]) == 5) otAjtos++;</p>';
        leirasTartalom += '<p class="harmas">}</p>';
        leirasTartalom +=
            '<p class="harmas">Console.WriteLine($"1. Feladat: {otAjtos} kocsinak van 5 ajtaja.");</p><br />';
        leirasTartalom +=
            '<p class="harmas kiemel">// 2. Feladat: Hány Toyota márkájú autó van a fájlban? (Többféle Toyota is van!)</p>';
        leirasTartalom += '<p class="harmas kiemel">int toyotakSzama = 0;</p>';
        leirasTartalom +=
            '<p class="harmas kiemel">for (int i = 0; i < autokLista.Count; i++)</p>';
        leirasTartalom += '<p class="harmas kiemel">{</p>';
        leirasTartalom +=
            '<p class="negyes kiemel">if (autokLista[i][0]).Contains("Toyota")) toyotakSzama++;</p>';
        leirasTartalom += '<p class="harmas kiemel">}</p>';
        leirasTartalom +=
            '<p class="harmas kiemel">Console.WriteLine($"2. Feladat: {toyotakSzama} Toyota van.");</p><br />';
        leirasTartalom += '<p class="harmas">Console.ReadKey(true);</p>';
        leirasTartalom += '<p class="kettes">}</p>';
        leirasTartalom += '<p class="egyes">}</p>';
        leirasTartalom += '<p>}</p>';
        balKontener.innerHTML = leirasTartalom;

        let megoldasTartalom =
            '<h4>2. Feladat: Hány Toyota márkájú autó van a fájlban? (Többféle Toyota is van!)</h4>';
        let toyotakSzama = 0;

        for (let i = 0; i < adatTomb.length; i++) {
            setTimeout(() => {
                let adatTombSor = adatTomb[i].split(';');
                let adatSor = '';
                if (adatTombSor[0].includes('Toyota')) {
                    toyotakSzama++;
                    for (let j = 0; j < adatTombSor.length; j++) {
                        adatSor += `<span class="keret tav toltve">${adatTombSor[j]}</span>`;
                    }
                } else {
                    for (let j = 0; j < adatTombSor.length; j++) {
                        adatSor += `<span class="keret tav">${adatTombSor[j]}</span>`;
                    }
                }
                megoldasTartalom += `<div class="tav-le">${adatSor}</div>`;
                megoldasTartalom += `<div class="tav-le">A Toyota kocsik száma: ${toyotakSzama}</div>`;

                jobbKontener.innerHTML = megoldasTartalom;
            }, i * 0);
        }
    } else if (lepteto === 5) {
        let leirasTartalom = '<p>using System;</p>';
        leirasTartalom += '<p>using System.Text;</p>';
        leirasTartalom += '<p>using System.Collections.Generic;</p>';
        leirasTartalom += '<p>using System.IO;</p><br />';
        leirasTartalom += '<p>namespace Autok</p>';
        leirasTartalom += '<p>{</p>';
        leirasTartalom += '<p class="egyes">internal public Program</p>';
        leirasTartalom += '<p class="egyes">{</p>';
        leirasTartalom +=
            '<p class="kettes">static void Main(string[] args)</p>';
        leirasTartalom += '<p class="kettes">{</p>';
        leirasTartalom +=
            '<p class="harmas">List&lt;string[]&gt; autokLista = new List&lt;string[]&gt;();</p><br />';
        leirasTartalom +=
            '<p class="harmas">using (StreamReader sr = new StreamReader("autok.txt", Encoding.UTF8))</p>';
        leirasTartalom += '<p class="harmas">{</p>';
        leirasTartalom += '<p class="negyes">while (!sr.EndOfStream)</p>';
        leirasTartalom += '<p class="negyes">{</p>';
        leirasTartalom += '<p class="otos">string sor = sr.ReadLine();</p>';
        leirasTartalom += "<p class='otos'>string[] tomb = sor.Split(';');</p>";
        leirasTartalom += "<p class='otos'>autokLista.Add(tomb);</p>";
        leirasTartalom += '<p class="negyes">}</p>';
        leirasTartalom += '<p class="harmas">}</p><br />';
        leirasTartalom +=
            '<p class="harmas">// 1. Feladat: Hány autónak van 5 ajtaja?</p>';
        leirasTartalom += '<p class="harmas">int otAjtos = 0;</p>';
        leirasTartalom +=
            '<p class="harmas">for (int i = 0; i < autokLista.Count; i++)</p>';
        leirasTartalom += '<p class="harmas">{</p>';
        leirasTartalom +=
            '<p class="negyes">if (Int32.Parse(autokLista[i][2]) == 5) otAjtos++;</p>';
        leirasTartalom += '<p class="harmas">}</p>';
        leirasTartalom +=
            '<p class="harmas">Console.WriteLine($"1. Feladat: {otAjtos} kocsinak van 5 ajtaja.");</p><br />';
        leirasTartalom +=
            '<p class="harmas">// 2. Feladat: Hány Toyota márkájú autó van a fájlban? (Többféle Toyota is van!)</p>';
        leirasTartalom += '<p class="harmas">int toyotakSzama = 0;</p>';
        leirasTartalom +=
            '<p class="harmas">for (int i = 0; i < autokLista.Count; i++)</p>';
        leirasTartalom += '<p class="harmas">{</p>';
        leirasTartalom +=
            '<p class="negyes">if (autokLista[i][0]).Contains("Toyota")) toyotakSzama++;</p>';
        leirasTartalom += '<p class="harmas">}</p>';
        leirasTartalom +=
            '<p class="harmas">Console.WriteLine($"2. Feladat: {toyotakSzama} Toyota van.");</p><br />';
        leirasTartalom +=
            '<p class="harmas kiemel">// 3. Feladat: Mi a legfiatalabb autó típusa?</p>';
        leirasTartalom += '<p class="harmas kiemel">int legfiatalabbKor = 100;</p>';
        leirasTartalom += '<p class="harmas kiemel">string legfiatalabbAuto = "";</p>';
        leirasTartalom +=
            '<p class="harmas kiemel">for (int i = 0; i < autokLista.Count; i++)</p>';
        leirasTartalom += '<p class="harmas kiemel">{</p>';
        leirasTartalom += '<p class="negyes kiemel">int kor = 2025 - Int32.Parse(autokLista[i][1]);</p>';
        leirasTartalom +=
            '<p class="negyes kiemel">if (kor <= legfiatalabbKor)</p>';
        leirasTartalom +='<p class="negyes kiemel">{</p>';
        leirasTartalom +='<p class="otos kiemel">legfiatalabbKor = kor;</p>';
        leirasTartalom +='<p class="otos kiemel">legfiatalabbAuto = autokLista[i][0];</p>';
        leirasTartalom +='<p class="negyes kiemel">}</p>';
        leirasTartalom += '<p class="harmas kiemel">}</p>';
        leirasTartalom +=
            '<p class="harmas kiemel">Console.WriteLine($"3. Feladat: Legfiatalabb kocsi: {legfiatalabbAuto} és kora: {legfiatalabbKor}.");</p><br />';
        leirasTartalom += '<p class="harmas">Console.ReadKey(true);</p>';
        leirasTartalom += '<p class="kettes">}</p>';
        leirasTartalom += '<p class="egyes">}</p>';
        leirasTartalom += '<p>}</p>';
        balKontener.innerHTML = leirasTartalom;

        let megoldasTartalom =
            '<h4>3. Feladat: Mi a legfiatalabb autó típusa?</h4>';
        let legfiatalabbKor = 100;
        let legfiatalabbAuto = '';

        for (let i = 0; i < adatTomb.length; i++) {
            setTimeout(() => {
                let adatTombSor = adatTomb[i].split(';');
                let adatSor = '';
                let kor = 2025 - +adatTombSor[1];
                if (kor <= legfiatalabbKor) {
                    legfiatalabbKor = kor;
                    legfiatalabbAuto = adatTombSor[0];
                    for (let j = 0; j < adatTombSor.length; j++) {
                        adatSor += `<span class="keret tav toltve">${adatTombSor[j]}</span>`;
                    }
                } else {
                    for (let j = 0; j < adatTombSor.length; j++) {
                        adatSor += `<span class="keret tav">${adatTombSor[j]}</span>`;
                    }
                }
                megoldasTartalom += `<div class="tav-le">${adatSor}</div>`;
                megoldasTartalom += `<div class="tav-le">A legfiatabb  ${legfiatalabbAuto}, életkora: ${legfiatalabbKor}</div>`;

                jobbKontener.innerHTML = megoldasTartalom;
            }, i * 1000);
        }
    }

    lepteto++;
};
