import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import Image from '../../articles/Image';
import img1src from "../../../images/slovinsko17/KoupelBohinj.jpg";
import img2src from "../../../images/slovinsko17/RekaUkanc.jpg";
import img3src from "../../../images/slovinsko17/ChatickaUkanc.jpg";
import img4src from "../../../images/slovinsko17/Savica.jpg";
import img5src from "../../../images/slovinsko17/VyhledNaBohinj.jpg";
import img6src from "../../../images/slovinsko17/CerneJezero.jpg";
import img7src from "../../../images/slovinsko17/UdoliTriglavskychJezer.jpg";
import ArticleTitle from "../../articles/ArticleTitle";

const img1 = buildLightboxImage(img1src, "Ranní hygiena");
const img2 = buildLightboxImage(img2src, "Řeka v Ukanc");
const img3 = buildLightboxImage(img3src, "Chajdička cestou k Savici");
const img4 = buildLightboxImage(img4src, "Výhled od vodopádu Savica");
const img5 = buildLightboxImage(img5src, "Cestou k Černému jezeru");
const img6 = buildLightboxImage(img6src, "Černé jezero");
const img7 = buildLightboxImage(img7src, "Údolí sedmi Triglavských jezer");

export default withLightbox(({openLightbox}) => {
    return (<div>
        <ArticleTitle title="Ukanc - Údolí sedmi Triglavských jezer" date="Pátek 14. 4."/>
        <p>Spíme jako dřeva, ale ráno nás budí bzučící čmelák. No jo, na to nejsme v Praze zvyklí. Vylezeme tedy ze
            stanu a to, co vidíme, nemá chybu! Ze špinavé louže se vyklubalo průzračně čisté jezero, za kterým se
            majestátně tyčí hory. Navíc je i celkem hezky a teplo! A lidi skoro žádní, takže se tu klidně můžeme
            promenádovat jen ve spodním prádle. Hned za rohem od našeho stanu objevíme krásnou bílou písečnou pláž,
            která úplně vybízí k osvěžení. Neohroženě shazujeme svršky (nebo spíš spodky, víc toho na sobě nemáme), a
            vrháme se do vody. Musíme rychle, jinak bychom tam asi nevlezli. Není to úplně ledové, ale dost studené ano.
            Pohled okolo nás ale naprosto unáší – kolem dokola jsou samé hory se zasněženými vrcholky. Všechno se rázem
            jeví mnohem radostněji, než v noci.</p>
        <Image lightboxImage={img1} openLightbox={openLightbox}/>
        <p>Ranní koupel nás probere, tak s chutí balíme stan, oblékáme se do hikovacího a vyrážíme s Fabínkem do vesnice
            hledat něco k snídani. Kousek od kempu narazíme na penzion Erlah s restaurací, který je jako jeden z mála
            otevřený. Sluníčko svítí, tak se posadíme na terásku, vykláníme se, abychom viděli na hory, a objednáme si
            vaječné omelety se sýrem a pečivem a k tomu čaj. Číšník je moc ochotný a umí dobře anglicky, tak ho hned
            vyzpovídáme. Poradí nám, abychom nejezdili na parkoviště k vodopádům, kde bývá drahé parkovné, ale necháme
            Fabínka u penzionu a jdeme pěšky.</p>
        <Image lightboxImage={img2} openLightbox={openLightbox}/>
        <p>Posilněni tedy nasazujeme pohorky a krosny, vyfotíme si naše zbrusu nové a ještě čisté botky a vyrážíme. Hned
            kousek od penzionu narážíme na most přes krásně průzračnou řeku. Pokračujeme pozvolnou cestičku kolem
            krásných chatiček, nad kterými se majestátně tyčí zasněžené hory. Vypadá to tu úplně pohádkově! Zároveň taky
            zjišťujeme, že jsme se dost nabalili, takže se u lavičky vyrobené ze starých lyžáků převlékáme do kraťasů a
            trička. </p>
        <Image lightboxImage={img3} openLightbox={openLightbox}/>
        <p>Naší první zastávkou jsou vodopády Savica, kde je vstup zpoplatněn 3 eury. Od pokladny je to ještě pěkný kus
            do kopce po schodech, takže se i poprvé zadýcháme. Stojí to ale za to, vodopád je super a výhled na jezero
            taky. Pofotíme, otočíme, kousek se vrátíme a za řekou odbočíme do kopce směrem na Černé jezero.</p>
        <Image lightboxImage={img4} openLightbox={openLightbox}/>
        <p>Podle ukazatele to tam má trvat 1:15. Hned od začátku je to slušný krpál, dokonce si musíme dát pauzu na
            oblepení pat, které se nám při tom šplhání v nových pohorkách trochu odírají. Compeed náplasti nás ale před
            puchýři ochrání. Brzy se cesta lesem proměňuje ve stoupání po skalnaté stěně, odkud máme nádherné výhledy.
            Navíc tu nikdo není, to je pecka! Když se konečně celí mokří vydrápeme nahoru, cesta se změní v rovnou lesní
            pěšinku. Jsme skoro u vytržení, když v lese podél cesty vidíme zbytky sněhu. Míša si ho dokonce nadšeně
            osahává. To ještě netušíme, že si ho později užijeme ažaž.</p>
        <Image lightboxImage={img5} openLightbox={openLightbox}/>
        <p>Po chvíli se stromy kolem nás rozestoupí a my konečně spatříme jezírko, které se pod námi na sluníčku krásně
            třpytí. Trvalo to sice o dost déle, než se dole cedule tvářila (od té doby se naučíme brát slovinské
            ukazatele s rezervou), ale stojí to za to! Je nám pohádkově. Konečně můžeme doplnit síly, odpočinout si a
            udělat pár fotek. U jezera je to nejlepší místo, protože tu krásně svítí sluníčko a je tu teplo. A co víc,
            jsme tu úplně sami! Sedneme si na kámen přímo na břehu jezera a kocháme se. V tom se zaposloucháme a
            uslyšíme tiché cinkání, jako by někdo hrál na skleničky, nebo cinkaly zvonečky. A ony to jsou kousky ledu,
            jak do sebe naráží ve vlnkách vody. Je to nádhera! Jedna z těch magických chvil, ve které byste rádi
            zastavili čas a užili si ji (a taky zapamatovali) co nejdéle.</p>
        <Image lightboxImage={img6} openLightbox={openLightbox}/>
        <p>Dáváme si chleba se sýrem a ovoce a pozorujeme nádhernou krajinu, co nás obklopuje. V tom ale zaslechneme
            hlasy. Co čert nechtěl, blíží se k nám dvě holky, navíc Češky. Naštěstí jsou moc fajn, tak chvíli pokecáme,
            navzájem se pofotíme a my potom pokračujeme dál. Ještě nás čeká pěkný kus a cestu nám začíná komplikovat
            náhlá překážka – sníh. Jak stoupáme, je ho čím dál tím víc. Nezbývá, než se v něm brodit, což je zpočátku
            docela zábava, ale jak jsme unavení a obtěžkaní cca 10 kily navíc na zádech, začíná to být dost
            vyčerpávající. Jdeme krásným údolím mezi skalami stále do kopce. Voda tu po skále stéká dolů, tak toho
            využijeme a doplňujeme láhve. Procházíme pod skalními převisy a pak zase serpentinami do kopce, pěkně
            dlouho. Míša nás ujišťuje, že už tam brzy musíme být.</p>
        <p>Jak vystoupáme ještě výš, počasí se najednou mění, zatahuje se a mraky se honí. Dokonce začíná poprchávat. To
            by ještě tak scházelo, abychom zmokli! Vyhecujeme se a přidáváme do kroku. Před námi je snad už poslední kus
            šlapání do kopce, kolem stále mraky sněhu. V tom se před námi objeví ukazatel. K našemu nocležišti už je to
            jen 15 min! Sláva!</p>
        <p>Po chvíli se před námi konečně otevírá Dolina sedmi triglavských jezer, náš cíl. Výhled máme nádherný, všude
            sníh, kry na jezeře a kolem vysoké skalnaté štíty, které ještě chvílemi osvětluje sluníčko, když vykoukne
            zpoza tmavých mraků. Mezi jezery pod námi leží zavřená turistická chata. My míříme až za ní, dozadu, protože
            jsme si na internetu našli, že by tam měla být ještě nouzová zimní noclehárna až pro 18 lidí, která je
            otevřená celoročně a nic se za přespání v ní neplatí. Jsme trochu napjatí, aby to tak opravdu bylo. Sice s
            sebou máme i stan, ale tady v tom sněhu by se nám stavěl těžko.</p>
        <Image lightboxImage={img7} openLightbox={openLightbox}/>
        <p>Naštěstí to dopadne dobře a je to skutečně tak, jak jsme doufali. Vlastně ještě lepší! Chajda je patrová,
            vybavená palandami s dekami a polštáři. Navíc tu nikdo není. Luxus! Rychle obsadíme skoro všechny palandy,
            abychom si tu vybalili krosny. Na dvojpalandě budeme spát, kolem si vyskládáme oblečení a jídlo. Před
            chajdou je lavička, tak tu zakempíme a uvaříme si na vařiči polívku a posléze i čaj, který poctivě ředíme
            Jägermeisterem. Postupně se zatáhne úplně a jak nám bylo cestou nahoru horko, teď na sebe navlékáme další
            vrstvy. Zahříváme se i kliky a dřepy s výskokem, abychom si mohli pár odečíst ze seznamu za naše jídelní a
            pitelní hříchy. Postupně se setmí a my stále sedíme venku, povídáme si a doplňujeme pitný režim. Taky
            chodíme každou chvilku čůrat, vyšlapanou cestičkou ve sněhu až k jezeru.</p>
        <p>Když už je černočerná tma a dost zima, zalezeme si v chajdě do spacáků na vrchní patro dvojpalandy a paříme
            prší. Skoro se tu nedá ani zvednout hlava, jak je tu nízký strop. Míša nám pěkně narafičil čelovky, aby nám
            pěkně svítily, a zapálíme si i hřbitovní svíčku. Jsme si celkem jisti, že už nikdo nepřijde a nechce se nám
            věřit našemu štěstí. Než ulehneme úplně, jdeme ještě jednou čůrat a koukat na hvězdy. Vypadá to, že mrzne,
            protože nám sníh pod nohama pěkně křupe a ve svitu měsíce se nádherně třpytí.</p>
        <p>Už pomalu usínáme, když najednou zaslechneme hlasy. Někdo se nám dobývá do chatky! Svítí dovnitř čelovkou.
            Asi třikrát takhle nakoukne a zas zavře. Podle hlasů zjistíme, že to jsou Češi. 3 kluci. No to se dalo
            čekat! Koho taky jiného by člověk mohl potkat v noci uprostřed zasněžených slovinských hor, než Čechy. Kluci
            si udělají jídlo nahoře, ale spát jdou k nám dolů, aby nám společně bylo tepleji. Opravdu si to pak v noci
            pěkně zafuníme, takže je nakonec i celkem vedro.</p>
    </div>)
}, [img1, img2, img3, img4, img5, img6, img7])
