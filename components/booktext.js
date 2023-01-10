// React libraries:
import { useState, useEffect } from 'react'
import { useRef } from 'react'

// Chakra UI libraries:
import { Heading, Text } from '@chakra-ui/react'

// To test shorter text, use this:
//const paragraphArray = ['Första', 'Andra', 'Tredje']

// Sample text. The first chapter of Kallocain By Karin Boye, as found on Project Runeberg.
const paragraphArray = [
	'Den bok jag nu sätter mig ner att skriva måste verka meningslös på många - om jag alls vågar tänka mig, att "många" får läsa den - eftersom jag alldeles självmant, utan någons order, börjar ett sådant arbete och ändå inte själv är riktigt på det klara med vad avsikten är. Jag vill och måste, det är alltsammans. Allt mer och mer obönhörligt frågar man efter avsikten och planmässigheten i vad som göres och säges, så att helst inte ett ord ska falla på måfå - det är bara författaren till den här boken som har tvingats gå motsatta vägen, ut i det ändamålslösa. Ty fast mina år här som fånge och kemist - de måste vara över tjugu, tänker jag mig - har varit fulla nog ändå av arbete och brådska, måste det finnas något som inte tycker det är tillräckligt och som har lett och överblickat ett annat arbete inom mig, ett som jag själv inte hade någon möjlighet att överblicka och där jag ändå har varit djupt och nästan plågsamt medintresserad. Det arbetet kommer att vara slutfört, när jag väl har skrivit ner min bok. Jag inser alltså, hur förnuftsvidriga mina skriverier måste te sig inför allt rationellt och praktiskt tänkande, men jag skriver ändå.',
	'Kanske jag inte skulle vågat det förr. Kanske det rentav är fångenskapen, som har gjort mig lättsinnig. Mina levnadsvillkor nu skiljer sig obetydligt från dem jag levde under som fri man. Maten visade sig vara knappt märkbart sämre här - det vande man sig vid. Britsen visade sig vara något hårdare än min säng hemma i Kemistaden n:r 4 - det vande man sig vid. Jag kom något mera sällan ut i fria luften - det vande man sig också vid. Värst var skilsmässan från min hustru och mina barn, särskilt som jag ingenting visste eller vet om deras öde; det gjorde mina första år i fångenskapen fulla av oro och ångest. Men allteftersom tiden led, började jag känna mig lugnare än förr och till och med trivas mer och mer med min tillvaro. Här hade jag ingenting att vara ängslig för. Jag hade varken underordnade eller chefer - så när som på fängelsevakterna, som sällan störde mitt arbete och bara bekymrade sig om att jag efterlevde ordningsreglerna. Jag hade varken beskyddare eller medtävlare. De vetenskapsmän jag ibland sammanfördes med för att kunna följa med nya rön på kemins område, behandlade mig hövligt och sakligt, om än något nedlåtande för min främmande nationalitets skull. Jag visste, att ingen ansåg sig ha skäl att avundas mig. Kort sagt: på sätt och vis kunde jag känna mig friare än i friheten. Men på samma gång som lugnet växte också detta underliga arbete med det förflutna inom mig, och nu får jag ingen ro förrän jag har skrivit ner mina minnen från en viss innehållsrik tid i mitt liv. Möjlighet att skriva har man givit mig för mitt vetenskapliga arbetes skull, och kontroll utövas först i det ögonblick jag lämnar ett färdigt arbete ifrån mig. Jag kan alltså kosta på mig detta enda nöje, även om det skulle bli det sista jag fick tillfälle till.',
	'Vid den tid då min berättelse börjar närmade jag mig de fyrti. Om jag för övrigt bör presentera mig, kan jag kanske tala om under vilken bild jag tänkte mig livet. Det finns få saker som säger mer om en människa än hennes bild av livet: om hon ser det som en väg, ett fältslag, ett växande träd eller ett rullande hav. För min del såg jag det med en snäll skolgosses ögon som en trappa, där man skyndade från avsats till avsats så fort man kunde, med flämtande andetag och medtävlaren i hälarna. I själva verket hade jag inte många medtävlare. De flesta av mina arbetskamrater på laboratoriet hade förlagt hela sin ärelystnad till det militära och ansåg dagens arbete som ett tråkigt men nödvändigt avbrott i kvällarnas militärtjänstgöring. Själv skulle jag väl knappast velat tillstå för någon av dem, hur mycket mer intresserad jag var av min kemi än av min militärtjänst, fast jag visst inte var någon dålig soldat. I alla fall jagade jag fram i min trappa. Hur många trappsteg man egentligen hade att lägga bakom sig, hade jag aldrig funderat över, inte heller vad det månde finnas för härligheter på vinden. Kanske jag dimmigt föreställde mig livets hus som ett av våra vanliga stadshus, där man steg upp ur jordens innandömen och till sist kom ut på takterrassen, i fria luften, i vind och dagsljus. Vad vinden och dagsljuset skulle motsvaras av i min livsvandring, hade jag inte klart för mig. Men säkert var, att varje ny trappavsats betecknades av korta officiella meddelanden från högre ort: om en genomgången examen, ett godkänt prov, en förflyttning till ett mera betydande verksamhetsfält. Jag hade också en hel rad sådana livsviktiga slut- och begynnelsepunkter bakom mig, dock inte så många att en ny skulle blekna i betydelse. Det var därför med ett stänk av feber i blodet jag kom tillbaka från det korta telefonsamtal, som meddelade att jag kunde vänta min kontrollchef dagen därpå och alltså fick börja experimentera med mänsklig materiel. I morgon således kom det slutliga eldprovet för min hittills största uppfinning.',
	'Jag var så uppspelt, att det föll sig svårt för mig att börja något nytt under de tio minuter som ännu återstod av arbetstiden. I stället fuskade jag en smula - jag tror nästan för första gången i mitt liv - och började ställa bort apparaterna i förtid, långsamt och försiktigt, medan jag sneglade genom glasväggarna åt båda sidor för att se om någon gav akt på mig. Så fort signalklockan förkunnade att arbetet var slut för dagen, skyndade jag ut genom de långa laboratoriekorridorerna som en av de första i strömmen. Hastigt duschade jag, bytte arbetskläderna mot fritidsuniformen, sprang in i paternosterhissen och stod efter några ögonblick uppe på gatan. Eftersom vi fått vår bostad i mitt arbetsdistrikt, hade vi nämligen ovanjordslicens där, och jag njöt alltid av att sträcka på mig i det fria.',
	'Då jag kom förbi metrostationen, föll det mig in att jag kunde vänta på Linda. Eftersom jag var så tidig, hade hon säkert inte hunnit hem än från sin livsmedelsfabrik drygt tjugu minuters metroväg därifrån. Ett tåg hade nyss kommit, och en flod av människor vällde upp ur jorden, pressades genom spärren, där ovanjordslicenserna kontrollerades, och sipprade ut över gatorna runtomkring. Över de nu tomma takterrasserna, över alla de hoprullade bergsgråa och ängsgröna presenningarna, som på tio minuter kunde göra staden osynlig från luften, betraktade jag hela den myllrande skaran av hemvändande medsoldater i fritidsuniform, och det slog mig plötsligt, att kanske alla dessa bar på samma dröm som jag: drömmen om uppåtvägen.',
	'Tanken grep mig. Jag visste, att förr, under den civilistiska epoken, hade människorna måst lockas till arbete och ansträngning genom hopp om rymligare bostäder, läckrare mat och vackrare kläder. Numera behövdes ingenting sådant. Standardvåningen - ett rum för de ogifta, två för familj - räckte gott åt alla, från de ringaste till de mest förtjänta. Huskökets mat gav mättnad åt generalen likaväl som åt den menige. Den allmänna uniformen - en för arbetet, en för fritiden och en för militär- och polistjänsten - var lika för alla, för man och kvinna, och för hög och låg sånär som på gradbeteckningen. Till och med den senare var egentligen inte grannare för den ene än för den andre. Det eftersträvansvärda i en högre chefsbeteckning låg enbart i vad den symboliserade. Så högt förandligad, tänkte jag lycklig, är faktiskt varenda medsoldat i Världsstaten, att det han anar som livets högsta värde knappast har någon mera konkret form för honom än tre svarta slingor på ärmen - tre svarta slingor, som är honom en pant både på egen självaktning och aktning från andras sida. Av materiella njutningar kan man säkert få nog och mer än nog - just därför misstänker jag att de gamla civilistiska kapitalisternas tolvrumsvåningar knappt heller var mer än en symbol - men detta subtilaste av allt, som man jagar under formen av gradbeteckningar, det gör ingen övermätt. Ingen kan ha så mycket aktning och så mycket självaktning, att han inte vill ha mer. På det mest förandligade, det mest luftiga och ouppnåeliga av allt vilar vår fasta samhällsordning trygg för alla tider.',
	'Så stod jag i funderingar vid metrons uppgång och såg som i en dröm vakten gå fram och tillbaka längs den taggtrådskrönta distriktsmuren. Fyra tåg hade kommit, fyra gånger hade skarorna strömmat upp i dagsljuset, då äntligen Linda passerade spärren. Jag skyndade fram till henne och vi fortsatte sida vid sida.',
	'Tala kunde vi naturligtvis inte för luftflottans övningar, som varken dag eller natt tillät något samtal att föras utomhus. I alla fall såg hon min glada min och nickade uppmuntrande, fast allvarlig som alltid. Inte förrän vi hunnit in i bostadshuset och hissen förde oss ner till vår våning, slöt sig en relativ tystnad omkring oss - metrobullret, som skakade väggarna, var inte starkare än att man kunde tala obehindrat - och ändå uppsköt vi försiktigtvis alla samtal, tills vi kommit in. Hade någon kommit på oss med att tala i hissen, skulle ju ingen misstanke varit naturligare än att vi dryftade ämnen som vi inte ville låta barnen eller hembiträdet höra. Sådana fall hade inträffat, då statsfiender och andra förbrytare velat använda hissen som konspirationslokal; det låg ju också nära till hands, eftersom polisöra och polisöga av tekniska skäl inte kunde monteras i en hiss och eftersom portvakten brukade ha annat att göra än springa och lyssna i trappnedgångarna. Vi teg alltså försiktigt ända tills vi stigit in i familjerummet, där veckans hembiträde redan dukat fram kvällsmaten och väntade med barnen, som hon hämtat ner ur husets barnvåning. Hon föreföll att vara en ordentlig och hygglig flicka, och vår vänliga hälsning berodde alltså inte bara på medvetandet om att hon, som alla hembiträden, var skyldig att avlägga rapport om familjen vid veckans slut - en reform, som allmänt ansågs ha förbättrat tonen i många hem. En stämning av glädje och trevnad rådde kring vårt bord, särskilt som vår äldste son, Ossu, var med bland oss andra. Han hade kommit på besök från barnlägret, eftersom det var hemafton.',
	'- Jag kan tala om något roligt, sade jag till Linda över potatissoppan. Mitt experiment har kommit så långt att jag får börja med mänsklig materiel i morgon, under överinseende av en kontrollchef. - Vem tror du det blir? frågade Linda.',
	'Utanpå märktes det säkert inte, men invärtes ryckte jag till vid hennes ord. De kunde vara helt oskyldigt menade. Vad var mera naturligt, än att en hustru frågade, vem som skulle bli mannens kontrollchef! På kontrollchefens kitslighet eller tillmötesgående hängde ju hur lång prövningstiden skulle bli. Det hade till och med hänt, att ärelystna kontrollchefer gjort kontrollandens uppfinning till sin egen, och man hade jämförelsevis lite möjlighet att värja sig mot sådant. Inte underligt då, om ens närmaste frågade vem det skulle bli.',
	'Men jag lyssnade efter en underton i hennes röst. Min närmaste chef, och alltså sannolikt min blivande kontrollchef, var Edo Rissen. Och Edo Rissen hade förut varit anställd på den livsmedelsfabrik, där Linda arbetade. Jag visste, att de haft en hel del beröring med varandra, och av åtskilliga små tecken slöt jag mig till att han hade gjort ett visst intryck på min hustru.',
	'Vid hennes fråga vaknade min svartsjuka och vädrade. Hur intimt var egentligen förhållandet mellan henne och Rissen? I en stor fabrik kunde det ofta hända, att två personer befann sig utom synhåll för de andra, i lagerlokalerna till exempel, där balar och lårar skymde utsikten genom glasväggarna och där kanske till råga på allt ingen annan var sysselsatt vid den tiden... Också Linda hade ju haft sin tur som nattvakt i fabriken. Rissen kunde mycket väl haft sin vakt på samma gång. Allt var möjligt, till och med det värsta av allt: att det fortfarande var honom hon älskade och inte mig.',
	'På den tiden undrade jag sällan över mig själv, över vad jag tänkte och kände eller över vad andra tänkte och kände, såvida det inte hade direkt praktisk betydelse för mig. Först senare, under min ensamma tid som fånge, har ögonblicken kommit att vända tillbaka som gåtor och tvingat mig att undra, tyda och tyda om. Nu, så långt efteråt, vet jag, att då jag så ivrigt hoppades på "visshet" i fråga om Linda och Rissen, ville jag egentligen inte ha en visshet om att där inte fanns något samband mellan dem. Jag ville ha visshet om att hon drogs åt annat håll. Jag ville ha en visshet som skulle göra slut på mitt äktenskap.',
	'Men på den tiden skulle jag tillbakavisat en sådan tanke med förakt. Linda spelade en alltför viktig roll i mitt liv, skulle jag sagt. Och det var sant, inget grubbel och inga omtydningar har sedan kunnat ändra det. I betydelse hade hon gott kunnat ta upp tävlan med min karriär. Mot min vilja höll hon mig fast på ett rent oförnuftigt sätt.',
	'Man kan tala om "kärlek" som ett föråldrat romantiskt begrepp, men jag är rädd att den finns likafullt, och ända från början rymmer den ett obeskrivligt kvalfullt element. En man dras till en kvinna, en kvinna till en man, och för vart steg man närmar sig varandra, har man givit till spillo något av sig själv; en serie nederlag, där man hoppades på segrar. Redan i mitt första äktenskap - barnlöst och därför ingenting att fortsätta - hade jag känt en försmak. Linda stegrade den till mardröm. Under de första åren vi var gifta hade jag verkligen en mardröm, fast jag då inte satte den i samband med henne: jag stod mitt i ett stort mörker, själv starkt belyst med strålkastarljus; utifrån mörkret kände jag Ögonen riktade på mig, och jag vred mig som en mask för att komma undan, medan jag inte kunde undgå att skämmas som en hund över de oanständiga trasorna jag hade fått på mig. - Först senare förstod jag, att det var en god bild av mitt förhållande till Linda, där jag själv kände mig skrämmande genomskinlig, fast jag gjorde allt för att krypa undan och skydda mig, medan hon tycktes förbli samma gåta, underbar, stark, nästan övermänsklig, men evigt oroande, därför att hennes gåtfullhet gav henne ett förhatligt övertag. När hennes mun drog ihop sig till ett smalt rött streck - å nej, det var inte ett leende, varken av hån eller glädje, snarare kunde det kallas en spänning, som när man spänner en båge - och under tiden stod ögonen orörligt vidöppna - då gick alltjämt samma ilning av ångest tvärsigenom mig, och alltjämt band hon mig och drog mig lika obarmhärtigt, fast jag anade, att hon aldrig skulle öppnas för mig. Jag förmodar det är på sin plats att använda ordet kärlek, när man mitt i hopplösheten ändå håller fast vid varandra, som om trots allt ett under kunde ske - då själva kvalfullheten har fått ett slags eget värde och blivit ett vittnesbörd om att man åtminstone har ett gemensamt: väntan på något som inte finns.',
	'Runtomkring oss såg vi föräldrar skiljas, så fort deras barnkull blivit färdig för barnlägret - skiljas och gifta om sig för att bilda nya kullar. Ossu, vår äldste, var redan åtta år och hade alltså ett helt år varit i barnlägret. Laila, den yngsta, var fyra och hade tre år kvar i hemmet. Och sedan? Skulle vi också skiljas och gifta om oss, i den barnsliga föreställningen att samma väntan kunde bli mindre hopplös med en annan? Allt förnuft jag hade sade mig att det var en bedräglig illusion. En enda liten oförnuftig förhoppning viskade: nej nej - att du har misslyckats med Linda beror på att hon vill till Rissen! Hon hör till Rissen, inte till dig! Skaffa dig klarhet om att det är Rissen hon tänker på - så är allt förklarat, och du har ännu hopp om en ny kärlek med mening i!',
	'Så underligt sammanslingrat var det som vaknade vid Lindas självklara fråga. - Förmodligen Rissen, svarade jag och lyssnade ivrigt in i den tystnad som följde. - Är det ogrannlaga att fråga vad det är för ett experiment? frågade hembiträdet.',
	'Hon hade ju en självklar rätt att fråga, på sätt och vis var hon ju där för att hålla reda på vad som försiggick inom familjen. Och jag kunde inte inse, vad som kunde förvrängas och användas emot mig, inte heller hur det skulle kunna skada Staten, ifall ryktet om min uppfinning spreds i förväg.',
	'- Det är något jag hoppas Staten kommer att få nytta av, sade jag. Ett medel, som får vilken människa som helst att blotta sina hemligheter, just allt sådant som hon förut har tvingat sig att tiga med, av skam eller rädsla. Är ni härifrån staden, medsoldat hembiträde?',
	'Det hände ju då och då, att man stötte på folk som hämtats från annat håll i tider av folkbrist och som därför inte hade Kemistädernas allmänbildning annat än i den mån de lyckats snappa upp en smula vid vuxen ålder.',
	'- Nej, sade hon och rodnade, jag är utifrån. Närmare förklaringar om varifrån man kom var strängt förbjudna, eftersom de kunde utnyttjas i spionagets tjänst. Det var naturligtvis därför hon rodnat.',
	'- Då ska jag inte närmare ingå på den kemiska sammansättningen eller tillverkningen, sade jag. Det ska man kanske undvika ändå för resten, ämnet får ju under inga omständigheter komma i enskilda händer. Men ni har kanske hört talas om hur alkohol förr användes som rusmedel och vilka verkningar det hade?',
	'- Ja, sade hon, jag vet att det gjorde hemmen olyckliga, förstörde hälsan och i värsta fall ledde till skälvningar i hela kroppen och hallucinationer av vita möss, höns och dylikt.',
	'Jag kände igen de helt elementära läroböckernas ord och smålog. Hon hade tydligen inte hunnit lägga sig till med Kemistädernas allmänbildning.',
	'- Alldeles riktigt, sade jag, så var det i värsta fall. Men innan det gick så långt, hände det ofta, att de berusade pratade bredvid munnen, förrådde hemligheter och begick oförsiktiga handlingar, därför att deras förmåga av skam och rädsla var rubbad. Det är de verkningarna mitt medel har - tänker jag mig, eftersom jag inte har prövat färdigt än. Men det är den skillnaden, att det inte sväljs, utan sprutas direkt in i blodet, och för resten har det en helt annan sammansättning. De otrevliga efterverkningarna som ni nämnde saknar det också - åtminstone behöver man inte ge så starka doser. En lätt huvudvärk är allt försökspersonen märker efteråt, och det händer inte, som det ibland hände med alkoholberusade, att man efteråt glömmer vad man har sagt. - Ni förstår nog, att det är en viktig uppfinning. Hädanefter kan ingen brottsling neka till sanningen. Inte ens våra innersta tankar är våra egna längre - som vi så länge har trott, med orätt.',
	'- Med orätt? - Ja visst, med orätt. Ur tankar och känslor föds ord och handlingar. Hur skulle tankar och känslor då kunna vara den enskildes ensak? Tillhör inte hela medsoldaten Staten? Vem skulle då hans tankar och känslor tillhöra, om inte Staten, de också? Hittills har det bara inte varit möjligt att kontrollera dem - men nu är alltså medlet funnet.',
	'Hon gav mig en hastig blick, men sänkte den genast. Inte en min förändrade hon, men jag fick ett intryck av att hennes färg sjönk. - Inte har ni något att vara rädd för, medsoldat, uppmuntrade jag henne. Inte är det meningen att blotta alla enskildas små förälskelser eller antipatier. Om min uppfinning råkade i enskilda händer - ja, då kunde man lätt föreställa sig vilket kaos som skulle uppstå! Men det får naturligtvis inte hända. Medlet ska tjäna vår trygghet, allas vår trygghet, Statens trygghet. - Jag är inte rädd, jag har inget att vara rädd för, svarade hon ganska kallt, och ändå hade jag bara menat att vara vänlig.',
	'Så gick vi då över till andra samtal. Barnen berättade vad som hänt under dagen i barnvåningen. De hade lekt i leklådan - ett väldigt emaljerat fat, väl fyra kvadratmeter stort och en meter djupt, där man inte bara kunde släppa ner små lekbomber och antända skogar och uppstickande hustak av brännbart material utan också utkämpa hela sjöslag i miniatyr, om man fyllde lådan med vatten och laddade de små fartygens kanoner med samma lätta sprängämne som användes i lekbomberna; till och med torpedbåtar fanns det. På så sätt lektes ju strategisk blick in i barnen, så den blev deras andra natur, nästan en instinkt, och på samma gång var det ju ett nöje av första ordningen. Ibland avundades jag mina egna barn att de fick växa upp med en så fulländad leksak - i min barndom var det där lätta sprängämnet inte uppfunnet än - och jag förstod inte riktigt att de ändå med hela sin själ längtade efter att fylla sju år och komma till barnlägret, där övningarna mycket mer liknade verklig militär utbildning och där man bodde både dag och natt.',
	'Ofta föreföll det mig som om den nya generationen var mer realistiskt inställd än vi i vår barndom. Just den dagen jag talar om skulle jag få ett nytt belägg för den saken. Eftersom det var familjekväll, då varken Linda eller jag hade militär- och polistjänst och då Ossu, min äldste, var hemma och hälsade på - på så sätt var familjens intima liv tillgodosett - så hade jag tänkt ut ett sätt att roa barnen. Från laboratoriet hade jag köpt med mig hem ett mycket litet stycke natrium, som jag tänkte låta fara omkring på vattnet med sin blekvioletta låga. Vi ställde fram ett fyllt fat, släckte ljuset och samlades omkring min lilla kemiska märkvärdighet. Själv hade jag varit mycket förtjust över fenomenet, då jag var liten och min far visade det för mig, men för mina barn gjorde det övervägande fiasko. Ossu, som redan gjorde upp eldar på egen hand, sköt med barnpistol och kastade små smällare, som föreställde handgranater - nå, att han inte uppskattade den lilla bleka lågan, det var kanske rätt naturligt. Men att inte heller Laila, fyraåringen, var intresserad av en explosion, om den inte kostade några fiender livet, det kom mig att häpna. Den enda som verkade fängslad var Maryl, mellanflickan. Hon satt stilla och drömmande som vanligt och följde den fräsande lyktgubben med vidöppna ögon, som påminde om hennes mors. Och fast hennes uppmärksamhet nog gav mig en viss tröst, oroade den mig samtidigt. Klart och tydligt gick det upp för mig, att det var Ossu och Laila, som var den nya tidens barn. Deras inställning var den sakliga och riktiga, medan min var ett utslag av föråldrad romantik. Och trots den upprättelse hon gav mig, önskade jag plötsligt att Maryl varit mer lik de andra. Det bådade inte gott, att hon på det där sättet föll utanför generationernas sunda utveckling.',
	'Kvällen gick, och det blev tid för Ossu att ge sig av till barnlägret igen. Om han hade lust att stanna kvar eller var rädd för den långa vägen i metro, så visade han det i varje fall inte. Med sina åtta år var han redan disciplinerad medsoldat. Genom mig själv däremot gick en het våg av längtan efter den tid då de alla tre var kväll kröp ner i sina små sängar. En son är i alla fall en son, tänkte jag, och han står sin far närmare än döttrarna. Och ändå vågade jag inte tänka på den dagen, då också Maryl, också Laila skulle vara borta och bara komma hem två kvällar i veckan för att hälsa på. Jag aktade mig i alla fall för att låta någon märka min svaghet. Barnen skulle inte klaga en gång över dåligt exempel, hembiträdet skulle inte ha en slapp hållning hos husfadern att rapportera, och Linda - Linda minst av alla! Jag ville ogärna bli föraktad av någon, men minst av Linda, hon som själv aldrig var svag.',
	'Så fälldes sängarna i familjerummet ut och bäddades åt småflickorna, och Linda stoppade om dem. Hembiträdet hade just satt in middagsrester och porslin i mathissen och skulle göra sig i ordning att gå, då hon kom att tänka på något.',
	'- Det är sant, sade hon, det har kommit ett brev till er, min chef. Jag lade det i föräldrarummet. Något förvånade synade Linda och jag brevet, ett tjänstebrev. Hade jag varit hembiträdets polischef, skulle jag säkert ha givit henne en varning för det här. Antingen hon verkligen glömt alltsammans eller avsiktligt underlåtit det, var det lika vårdslöst att inte ta reda på vad ett tjänstebrev innehöll - hon hade ju haft full rätt till det. Men samtidigt flög en aning genom mig, att brevet kunde ha ett sådant innehåll, att jag borde vara henne tacksam för att hon slarvat.',
	'Brevet var från Propagandaministeriets sjunde byrå. Och för att förklara innehållet måste jag gå något tillbaka i tiden.'
]

// Count the words of the paragraph.

//================================================================================

export default function BookText() {
	const [paragraphCount, setParagraphCount] = useState(0)
	const [wordCount, setWordCount] = useState(0)
	const [errorCount, setErrorCount] = useState(0)
	// Position keeps track of how many characters have been typed.
	const [position, setPosition] = useState(0)
	// Time elapsed is a simple timer that starts when the user starts typing.
	// And stops when the user has typed the last character in the paragraph.
	const [timeElapsed, setTimeElapsed] = useState(0)
	// isRunning is used to start and stop the timer.
	const [isRunning, setIsRunning] = useState(false)
	// useRef Hook - ESLint warned me about the way I handled my variable earlier.
	// So I implemented this Hook to apease it. I hope too understand the concept soon.
	const positionRef = useRef(0)
	// This function is used to move the cursor forward or backward.
	// Backwards is not used for now.
	const moveCursor = direction => {
		const updatePosition = direction === 'forward' ? 1 : -1
		setPosition(prevPos => prevPos + updatePosition)
	}
	// KEYDOWN EVENT LISTENER
	useEffect(() => {
		const handleKeyDown = event => {
			// Mainly to prevent scrolling when pressing space.
			event.preventDefault()

			if (event.key === paragraphArray[paragraphCount][positionRef.current]) {
				positionRef.current = positionRef.current + 1
				moveCursor('forward')
			} else if (event.key === 'Backspace') {
				// Adds the ability to use backspace. For now it serves no purpose.
				// moveCursor('backward')
				// positionRef.current = positionRef.current - 1
			} else if (event.key === 'Shift') {
				// Dont count shift as an error.
			} else if (event.key === 'Enter' && positionRef.current === paragraphArray[paragraphCount].length) {
				// If the user has typed the last character and presses enter, load the next paragraph.
				// Check that there is one more paragraph to load.
				if (paragraphCount < paragraphArray.length - 1) {
					// The paragraph that was finished was not the last one.
					positionRef.current = 0
					setPosition(0)
					setTimeElapsed(0)
					setIsRunning(false)
					setParagraphCount(prevParagraphCount => prevParagraphCount + 1)
					setErrorCount(0)
					setWordCount(paragraphArray[paragraphCount].split(' ').length)
					const nextParagraph = document.querySelector('.nextParagraph')
					nextParagraph.innerHTML = ''
				} else {
					// The paragraph that was finished was the last one.
					const nextParagraph = document.querySelector('.nextParagraph')
					nextParagraph.innerHTML = `> Du har nått slutet.`
				}
			} else {
				// Add 1 to the error count.
				setErrorCount(prevErrorCount => prevErrorCount + 1)
			}

			// Used to keep the current line centered in the viewport if scrolling is needed.
			const spanElement = document.querySelector('.current')
			spanElement.scrollIntoView({
				behavior: 'smooth',
				block: 'center',
				inline: 'nearest'
			})
		}

		// Adds the event listener to the document.
		document.addEventListener('keydown', handleKeyDown)

		// Removes the event listener when the component unmounts.
		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [paragraphCount])

	// START STOP TIMER
	useEffect(() => {
		setIsRunning(position === 1 ? true : position === paragraphArray[paragraphCount].length ? false : isRunning)
	}, [position, isRunning, paragraphCount])

	// UPDATE TIMER
	useEffect(() => {
		if (isRunning) {
			const interval = setInterval(() => {
				setTimeElapsed(prevTime => prevTime + 1)
			}, 1000) // 1000 milliseconds = 1 second

			return () => clearInterval(interval)
		}
	}, [isRunning])

	// HANDLE END OF PARAGRAPH
	useEffect(() => {
		if (position === paragraphArray[paragraphCount].length) {
			//  1. The end has been reached. Count WPM and display it.
			const wpm = Math.floor(wordCount / (timeElapsed / 60))
			const nextParagraph = document.querySelector('.nextParagraph')
			nextParagraph.innerHTML = `> Nästa [enter]`
			const wpmElement = document.querySelector('.wpm')
			wpmElement.innerHTML = `Ord per minut: ${wpm}`

			// 2. Write the number of the paragraph to the local storage, as a string.
			// TODO
		}
	}, [position, timeElapsed, paragraphCount, wordCount])

	return (
		<>
			<Text fontFamily="monospace" fontSize="xs">
				Paragraf {paragraphCount + 1} av {paragraphArray.length - 1}
			</Text>
			<Text fontFamily="monospace" fontSize="xs">
				<span>
					[{Math.floor(timeElapsed / 60)}m : {timeElapsed % 60}s]
				</span>
				<span> | </span>
				<span> {errorCount} fel </span>
				<span> | </span>
				<span>ord: {wordCount} </span>
				<span> | </span>
				<span className="wpm">Ord per minut:</span>
			</Text>
			<Heading fontSize="1.8rem">Kallocain av Karin Boye</Heading>
			<Heading mb="3" fontSize="1.5rem">
				Första kapitlet
			</Heading>
			<Text id="pageBooktext" fontSize="2xl">
				<span className="textBehind">{paragraphArray[paragraphCount].substring(0, position)}</span>
				<span className="current">{paragraphArray[paragraphCount].substring(position, position + 1)}</span>
				{paragraphArray[paragraphCount].substring(position + 1)}
			</Text>
			<Text fontSize={'xs'} color={'#bf616a'} className="nextParagraph"></Text>
		</>
	)
}
