import React from "react";
import withLightbox from "../../infrastructure/withLightbox";
import ArticleTitle from "../../articles/ArticleTitle";
import Smile from "../../icons/Smile";

export default withLightbox(() => {
    return (<div>
        <ArticleTitle title="Cesta z města" date="Čtvrtek 13. 4."/>
        <p>Na zelený čtvrtek jsme po práci vyrazili na náš první společný výlet do Slovinska. Kufr i zadní sedadla plná,
            pro jistotu jsme vzali úplně všechno. Až na kolíky ke stanu, ale o tom až dál. Od začátku jsme projížděli
            hustým provozem, který vyvrcholil kolem půl jedné za slovinskými hranicemi, kde jsme zastavovali na
            benzínce, abychom si koupili dálniční známku. Bylo tu úplně narváno! Čas dojezdu se nám postupně posouval až
            na půl 2 ráno. Asi 40 min před cílem, kterým byl kemp na břehu Bohinsjkého jezera, jsme konečně sjeli z
            dálnice. Za tu slovinskou jsme mimochodem zaplatili 2x tolik, co za rakouskou, i když jsme na ní strávili
            jen chvilku. Tip pro příště: jet mimo dálnice!</p>
        <p>Začínáme koukat kolem silnice, jestli někde nenarazíme na pěkné místečko na spaní. Oficiálně se tu tedy
            stanovat nesmí, ale teď už by nás nemusel nikdo kontrolovat. Nakonec ale s vypětím sil dorazíme až do kempu
            v Ukanc, kde k našemu překvapení není vůbec nikdo, takže si tu klidně můžeme bez poplatku postavit stan na
            břehu jezera. Najdeme travnatý plácek kousek od vody, která ve světle čelovky vypadá spíš jako špinavá
            louže. Necháme Fabínkovi zapnutá světla, abychom mohli postavit stan. Ale ouha, kolíky nikde! Měla je za
            úkol zabalit Šárka, ale sklerotik na ně úplně zapomněla. Naštěstí neprší ani nefouká, tak si vystačíme s pár
            provizorníma klackama, které Míša oseká, aby šly zabodnout do země. Ještě, že je tak šikovnej, drsnej a
            užitečnej a vyřeší všechny problémy, které jeho drahá způsobí. <Smile/>
        </p>
        <p>Umývárny jsou zavřené, tak si vyčistíme zuby do auta a s vypětím sil zalezeme do stanu. Dobrou noc!</p>
    </div>)
}, [])
