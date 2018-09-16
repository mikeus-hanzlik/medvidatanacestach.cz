import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import video1Src from "../../../images/nepal/thorongLaPass.mp4";
import img1Src from "../../../images/nepal/thorongHighCamp.jpg";
import img2Src from "../../../images/nepal/cestaNaThorong.jpg";
import img3Src from "../../../images/nepal/cestaZThorongu.jpg";
import Image from "../../articles/Image";
import ArticleTitle from "../../articles/ArticleTitle";

const img1 = buildLightboxImage(img1Src, "Thorong High Camp, 4900 mnm");
const img2 = buildLightboxImage(img2Src, "Cestou na Thorong La Pass");
const img3 = buildLightboxImage(img3Src, "Cestou z Thorong La Pass");

export default withLightbox(({openLightbox}) => {
    return (
        <div>
            <ArticleTitle title="Thorong Phedi – Thorong La Pass – Jomsom" date="Pátek 11. 5."/>
            <p>Jak se spí v téměř 4500 mnm? Nám naštěstí dobře, jen člověku trochu víc buší srdce a taky má pocit, jako
                by si moc utáhl spacák. ☺ Vstáváme v půl 6 a venku je krásně jasno. Jsme celí natěšení a po snídani
                vyrážíme vzhůru. A to doslova. Z Thorong Phedi do Thorong High Campu, kde je další a poslední guest
                house, je to brutálně do kopce a během asi 45 min nastoupáme 400 výškových metrů. Cesta je tu cik cak a
                místy dost zmrzlá, tak je to trochu o držku. Nikoho nepotkáváme, asi už jsou všichni dávno na cestě. U
                high campu ale první lidi předbíháme. To jsou asi ti machři, co vstávali ve 4 ráno…</p>
            <Image lightboxImage={img1} openLightbox={openLightbox}/>
            <p>Jak stoupáme, sněhu přibývá. Stejně tak víc fouká a je větší zima. Už jsme téměř v 5000 mnm. Kyslíku je
                tu o polovinu míň, než u moře. Když se chceme napít nebo Šárinka vysmrkat, trochu se přidusíme. Taky
                děláme každou chvíli pauzy. Ujdeme pár metrů a musíme se zastavit. Hlavně Míša je trochu brzdička, no
                jo, dýchá ještě o pár desítek centimetrů výš. ☺ Omrzají nám obličeje a zamrzá voda ve vacích. Už tu není
                nic než sníh a modrá obloha a hory kolem. Taky tedy pár dalších hikerů, ti nás rozčilují, protože jdou
                ještě mnohem pomaleji než my, ale brzy většinu z nich necháváme za sebou.</p>
            <Image lightboxImage={img2} openLightbox={openLightbox}/>
            <p>Když jsme si o výstupu na Thorong La Pass četli, dozvěděli jsme se, že nás cestou čeká mírné stoupání a
                „many false peaks“. A je to přesně tak, za Thorong High Campem je to cesta dlouhá, pozvolná, sem tam
                potkáváme modlitební praporky a několikrát si myslíme, že už tam přece musíme být. Ale pořád tam nejsme.
                ☺ Fičí jako blázen, neslyšíme se a nejen kvůli nadmořské výšce, ale i poryvům vichru nemůžeme dýchat.
                Načež, když už to snad ani nečekáme, se přehoupneme přes horizont a konečně to vidíme – přes námi je
                malá budka, cedule Thorong La Pass a spoustu barevných praporků. Jsme tady, v 5416 mnm! Zvládli jsme to!
                Najednou v té výšce zvládneme i křičet, skákat a pobíhat, jakou máme radost. Fotíme se a točíme video,
                kde kromě vichru není asi nic slyšet.</p>
            <figure>
                <video controls>
                    <source src={video1Src} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <figcaption>Thorong La Pass, 5416 mnm</figcaption>
            </figure>
            <p>Je trochu paradoxní, že člověk dosáhl nejvyššího místa, ale přitom je jen v sedle a všude okolo se tyčí
                ještě mnohem vyšší hory. Jen kousek od nás je Thorong Peak (6100 mnm) s ledovcem, který se ve sluníčku
                krásně modře třpytí. Je tu dokonce i malinká čajovna, kde je stůl a pár lavic. Týpek sem musí každý den
                vylézt, aby tu turistům prodával čaj a kafe uvařené na plynové bombě. Strávíme na vrchu sotva čtvrt
                hodiny a už se vydáváme na cestu dolů. Je nám kosa, ruce, nos, ani nohy necítíme.</p>
            <p>Když nad tím zpětně tak přemýšlíme, všechno se to odehrálo děsně rychle. Člověk se přepne do nějakého
                šlapacího módu, a aby nezmrzl, musí to udělat všechno dost rychle. Přitom je škoda, že na tak nádherném
                místě nejde zůstat déle. Buď na chvilku, nebo napořád. ☺</p>
            <p>I cesta dolů je ale zábava. Druhá strana je mnohem prudší, proto tudy nahoru skoro nikdo nechodí, ani
                není, kde se aklimatizovat. Ve sněhu se jde dost špatně, tak to řešíme tak, že spíš běžíme, kloužeme se,
                skáčeme závějemi dolů. Sem tam spadneme, ale je to zábava a je to mnohem rychlejší. Sněhu pomalu ubývá,
                a za chvíli jsme na blátě. Jak se nám boty ve sněhu krásně vyčistily, tak tady si je zase pěkně
                zaprasíme.</p>
            <Image lightboxImage={img3} openLightbox={openLightbox}/>
            <p>Postupně nám rozmrzá voda ve vacích a průběžně sundáváme jednu vrstvu za druhou. Po několika hodinách
                jsme u prvního jídelního zařízení na druhé straně, ve 4100 mnm. Dáváme si tu oběd, šťouchané brambory.
                Míšu pěkně bolí hlava, asi jak jsme rychle vystoupali tak vysoko a ještě rychleji sestoupali zpět dolů.
                Tady použijeme první a naštěstí i poslední Ibalgin naší výpravy.</p>
            <p>Jsme hotoví, ale ještě musíme sestoupat dalších 400 výškových metrů do Muktinathu, kde se plánujeme
                ubytovat. Hmm smůla, opravdu je tu Indian Prime Minister a i když Thorong La Pass nikdo nezavřel, tak na
                celém území kolem Muktinathu je zákaz ubytovávat turisty. Musíme prý až do Jomsomu, který je ještě o
                dost níž, něco přes 2700 mnm. Pěšky by to bylo 19 km a na to nemáme síly, ani čas. Na(ne)štěstí se dá
                jet autobusem. Na pochybném autobusovém nádraží kupujeme lístky. Bus prý pojede asi ve 4 odpoledne.
                Batohy nám chtějí zas hodit na střechu, ale tentokrát se nedáme, radši si je bereme na klín, i když tím
                se připravujeme o prostor, pohodlí i dech. Cesta do Jomsomu vede chvíli po krásné opravené asfaltce,
                kterou tu beztak postavili kvůli tomu Prime Ministerovi, aby se mu sem pohodlně dojelo od heliportu pod
                městem, potom korytem řeky a nakonec městem Jomsom, kde se silnice tomu korytu řeky dost podobají.</p>
            <p>Jomsom je jinak celkem civilizace, jsou tu hotely, obchody a dokonce letiště. Těšíme se, že konečně
                budeme mít elektřinu a třeba i wifinu, ale ouha, ani jedno většinu večera nefunguje. Nevadí, dáme si
                aspoň parádní teplou sprchu a máme tu i evropský záchod.</p>
        </div>
    )
}, [img1, img2, img3])