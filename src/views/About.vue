<template>
  <v-layout column>
    <v-card light class="pa-1">
      <h1 class="header-1">Az alkalmazásról</h1>
      <p>(Mindenképpen ajánlom előbb kipróbálni az alkalmazást, ez az oldal csak a magyarázata hogy miért is kellett.)</p>
      <v-divider class="mb-3"/>
      <p>A tanulás játék, de hogy dönti el az ember játékosan hogy tanuljon-e?
        <br>Az App-a! a dolgozatíráshoz kapcsolódó rossz érzéseket némileg enyhíteni tudja humorral.
        <br>Ezzel együtt hasznos információhoz juthatnak mind a diákok mind tanáraik... idővel.
      </p>
      <h2>A súlyozási rendszer:</h2>
      <p>A rendszer az alapvető valószínűséget (1.Lépés) változtatja meg az adott válaszok függvényében.</p>
      <p>
        {
        a: ['igen', 'nem'],
        q: 'Régen írtál dolgozatot?',
        }
        <br>Ez, egy eldöntendő kérdés.
        A súlyozása: [5,-212]. Ez azt jelenti, hogy ha régen írt dolgozatot a felhasználó, akkor az 5 egységet jelent a valószínűségi skálán pozitív irányban.
        <br>Ha nem régen írt dolgozatot, akkor viszont relatív -212 egységnyit levon a többi kérdésre adott válaszszal összevetve.
      </p>
      <h2>Hogy készül el az eredmény?</h2>
      <p>A varázsszám, (mert nincs igazi neve) Az alapvető valószínűséghez (1.Lépés az appban) közelebbi "biztos valószínűség" (0, vagy 100%), és a kezdeti valószínűség abszolút különbsége, osztva a megválaszolt kérdések súlyainak abszolút értékeinek az összegével.
        <br>A végeredmény ezzel a varázsszám-mal megszorzott megválaszolt kérdések súlyának összege.
      </p>
      <p>
        PÉLDA:
        <br>A súlyok [-4, -5, 2].
        <br>Az alapvető valószínűség: 40%.
        <br>A varázsszám: 40/(|-4|+|-5|+|2|) = 40/11 (~ 3.636363...)
        <br>A százalékos érték: 40 + (-4-5+2)*40/11 =
        <strong>14,54%</strong>
      </p>
      <h2>Felhő segítségével App-a! önmagát fejleszti</h2>
      <p>Honnan tudhatjuk relatív mennyire veszélyesebb nem tanulni ha rossz kedvű a tanár mintha sokan hianyoznának?
        <br>A rendszer bizonyos adatokat ment, ha a felhasználó rányom a mentés gombra a végső lépésnél, és miután kiderült hogy igaza volt e App-a!-nak, vissza tud jelezni, hogy sikeresen tippelt vagy sem. Ebből a visszajelzésből a megfelelő súly értékeket növeli vagy csökkenti a helyességük alapján a rendszer.
        <br>Minden oldalbetöltéskor frissülnek a felhőből a súlyozások.
      </p>
      <h2>PWA: Progresszív web alkalmazás</h2>
      <ol>
        <li>Működik offline</li>
        <li>Nem csak Androidon, hanem iOS-en is működik</li>
        <li>Az apk frissítése nélkül tud az alkalmazás frissülni</li>
      </ol>
      <v-card dark class="pa-3 ma-1">
        <v-img class="mb-1" src="img/ikon.webp"/>
        <p class="mb-2">Ikonok</p>
        <v-img class="my-1" src="img/Works_on_pc.png"/>
        <p class="mb-2">PC-n is</p>
        <v-img class="my-1" src="img/addTo.jpg"/>
        <p class="mb-2">kezdőképernyőhöz adás</p>
        <v-img class="my-1" src="img/loading.jpg"/>
        <p class="mb-2">Betöltő képernyő</p>
        <v-img class="my-1" src="img/loaded.jpg"/>
        <p class="mb-2">Nincs böngésző sáv</p>
      </v-card>
      <p>
        <br>A legjobb élményt az Androidos Google Chrome nyújtja az iOS Safari-ja mellett. (Chrome 78 után headless WebView támogatás is lesz apk-n belül, addig a "kihelyezés a kezdőképernyőre" felugró menüs webAPK módszer jobb.)
        <br>PC-n az összes modern webböngésző meg tudja nyitni az alkalmazást:
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ask-app-a.firebaseapp.com"
        >https://ask-app-a.firebaseapp.com</a>
      </p>
      <h2>A tanárok sem vakok</h2>
      <p>Az App-a! nem csak a diákokat segíti, hanem a tanároknak is szolgálhat hasznos információkkal.
        <br>Az App-a anoním módon, a modell frissítése mellett gyűjti az eredményeket, amikből később (több adat megléte után) következtetéseket lehet levonni.
      </p>
      <v-card>
        <v-img class="my-1" src="img/analitics.jpg"/>
        <p class="mb-2">Melyik nap félnek a tanulók leginkább a dolgozatoktól?</p>
      </v-card>
      <p>A tanár célja a tanulók tanulásra kéztetése. Ha több információ áll az oktatók rendelkezésére, lehet, módszereik hatékonyabbá, akár a diákoknak is kedvező módon változhat.</p>
      <p>Az App-a! helyettesítí a döntést, de sosem dönt határozottan. Az alkalmazás több helyen/módon is jelzi, hogy az App-a! csak egy játék és hogy a felhsználó ítélőképességének megtartása feltétlenül szükséges az App-a! használata melett is.</p>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://developers.google.com/web/updates/2019/02/using-twa"
      >Trusted Web Activities</a>
      <p>
        A Web Alkalmazás forráskódja itt érhető el:
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/remenyo/ask-app-a.firebseapp.com"
        >https://github.com/remenyo/ask-app-a.firebseapp.com</a>
      </p>

      <p>
        Az Androidos alkalmazás forráskódja itt érhető el:
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/remenyo/App-a_Andorid"
        >https://github.com/remenyo/App-a_Andorid</a>
      </p>Kérdés, bővebb ismertetés, élő technikai bemutatató igénye esetén: Keresd Olivért, vagy Árpit.
      <v-footer class="center">Matula Árpád & Remény Olivér
        <br>12.C
      </v-footer>
    </v-card>
  </v-layout>
</template>
