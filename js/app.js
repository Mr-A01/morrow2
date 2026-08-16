/* ================= DATA ================= */
const IMG={
hero:"https://image.qwenlm.ai/public_source/979f876f-9a99-449c-a433-aa2c599cdab5/1c46c33a8-7083-4799-a329-536449cfef4a.png",
amalfi:"https://image.qwenlm.ai/public_source/979f876f-9a99-449c-a433-aa2c599cdab5/1f6df3e49-740e-4141-9028-a58d5e6f8927.png",
dest_japan:"https://image.qwenlm.ai/public_source/979f876f-9a99-449c-a433-aa2c599cdab5/16a37e786-8868-4b1f-ba1a-9ce673034e23.png",
dest_nordics:"https://image.qwenlm.ai/public_source/979f876f-9a99-449c-a433-aa2c599cdab5/1822cf2a5-ebcc-4a8b-a5b7-d57f66213e62.png",
dest_indianocean:"https://image.qwenlm.ai/public_source/979f876f-9a99-449c-a433-aa2c599cdab5/1b851a69f-24ac-4c60-bcfa-557817eb2a1e.png",
dest_sea:"https://image.qwenlm.ai/public_source/979f876f-9a99-449c-a433-aa2c599cdab5/1383a7d9b-161c-4d84-800f-a0cff256cc0.png",
dest_northamerica:"https://image.qwenlm.ai/public_source/979f876f-9a99-449c-a433-aa2c599cdab5/18f83f844-a30e-4dbe-9b51-f3e569185c15.png",
dest_africa:"https://image.qwenlm.ai/public_source/979f876f-9a99-449c-a433-aa2c599cdab5/161dc0c00-e5fc-46ff-84b0-46dc3b7cca33.png",
casa_ext:"https://image.qwenlm.ai/public_source/979f876f-9a99-449c-a433-aa2c599cdab5/1cea7300f-30dc-490b-bc28-24f963ac3b43.png",
casa_lobby:"https://image.qwenlm.ai/public_source/979f876f-9a99-449c-a433-aa2c599cdab5/1a1e4e5b0-a647-461a-8135-c9ff29bb37fc.png",
casa_room:"https://image.qwenlm.ai/public_source/979f876f-9a99-449c-a433-aa2c599cdab5/19f7d33f1-67e6-4de6-b011-f879cc1223bc.png",
casa_bath:"https://image.qwenlm.ai/public_source/979f876f-9a99-449c-a433-aa2c599cdab5/1419f0d18-839a-4c9f-bab7-3fc0a869ca91.png",
casa_pool:"https://image.qwenlm.ai/public_source/979f876f-9a99-449c-a433-aa2c599cdab5/17102ac89-ad12-4695-9ab6-539ed5735c0b.png",
casa_restaurant:"https://image.qwenlm.ai/public_source/979f876f-9a99-449c-a433-aa2c599cdab5/19601de5e-9444-4a52-94c0-eb32de869ca1.png",
casa_view:"https://image.qwenlm.ai/public_source/979f876f-9a99-449c-a433-aa2c599cdab5/1891892fc-52fa-4f10-983e-7a051d6024d8.png",
casa_detail:"https://image.qwenlm.ai/public_source/979f876f-9a99-449c-a433-aa2c599cdab5/1ecf46673-35f3-45ab-a616-1a96be0ac56b.png",
stay_ryokan:"https://image.qwenlm.ai/public_source/979f876f-9a99-449c-a433-aa2c599cdab5/1b0144b94-ca61-4285-a4d5-f86ea9d3b003.png",
stay_cabin:"https://image.qwenlm.ai/public_source/979f876f-9a99-449c-a433-aa2c599cdab5/10bfe7152-f99f-4084-ac39-8989d180e77f.png",
stay_riad:"https://image.qwenlm.ai/public_source/979f876f-9a99-449c-a433-aa2c599cdab5/1f483c541-4d3b-496e-ba72-3944b6e5fdba.png",
stay_lisbon:"https://image.qwenlm.ai/public_source/979f876f-9a99-449c-a433-aa2c599cdab5/1ad0b3d58-b180-4e04-9d02-7c0d662dda25.png",
stay_bigsur:"https://image.qwenlm.ai/public_source/979f876f-9a99-449c-a433-aa2c599cdab5/113f318c2-14e6-43ce-8ead-d3d689d9c3c7.png",
exp_sail:"https://image.qwenlm.ai/public_source/979f876f-9a99-449c-a433-aa2c599cdab5/1587c5047-b42e-465e-8fef-ea30fd1741a4.png",
exp_ceramic:"https://image.qwenlm.ai/public_source/979f876f-9a99-449c-a433-aa2c599cdab5/16640dcdc-a47b-4084-ac39-8989d180e77f.png",
exp_chef:"https://image.qwenlm.ai/public_source/979f876f-9a99-449c-a433-aa2c599cdab5/147c9440a-9800-43e6-ab21-3e7c9d1ed793.png",
journal_quiet:"https://image.qwenlm.ai/public_source/979f876f-9a99-449c-a433-aa2c599cdab5/1dbcbe451-81ec-4832-8010-90bf56107290.png",
journal_disappear:"https://image.qwenlm.ai/public_source/979f876f-9a99-449c-a433-aa2c599cdab5/112f61572-ca6e-4f2e-8e03-786ff96b1663.png"};
const TZ={"Amalfi Coast":"Europe/Rome","Kyoto":"Asia/Tokyo","Lofoten":"Europe/Oslo","Maldives":"Indian/Maldives","Ubud":"Asia/Bangkok","Big Sur":"America/Los_Angeles","Marrakech":"Africa/Casablanca","Lisbon":"Europe/Lisbon"};
const WX={"Amalfi Coast":"22°C · Golden hour","Kyoto":"17°C · Clear","Lofoten":"9°C · Mist","Maldives":"29°C · Warm water","Ubud":"26°C · Green","Big Sur":"14°C · Fog","Marrakech":"31°C · Dry heat","Lisbon":"24°C · Bright"};
const DESTS=[
{id:"amalfi",name:"Amalfi Coast",tag:"Light, stone and slow lunches",img:"amalfi",n:"38 stays"},
{id:"kyoto",name:"Kyoto",tag:"Quiet rooms, precise beauty",img:"dest_japan",n:"21 stays"},
{id:"lofoten",name:"Lofoten",tag:"Fjords, forests and firelight",img:"dest_nordics",n:"14 stays"},
{id:"maldives",name:"Maldives",tag:"Barefoot days, warm water",img:"dest_indianocean",n:"12 stays"},
{id:"ubud",name:"Ubud",tag:"Green mornings, night markets",img:"dest_sea",n:"17 stays"},
{id:"bigsur",name:"Big Sur",tag:"Wide roads and far coasts",img:"dest_northamerica",n:"16 stays"},
{id:"marrakech",name:"Marrakech",tag:"Deserts, mountains, open skies",img:"dest_africa",n:"11 stays"}];
const STAYS=[
{id:"casa-aurelia",name:"Casa Aurelia",location:"Amalfi Coast, Italy",region:"Mediterranean",style:"Design Hotel",type:"design",rating:4.9,reviews:184,price:620,img:"casa_ext",alt:"casa_room",tags:["beachfront","wellness"],amen:["Pool","Spa","Restaurant","Beach access","Airport transfer"],blurb:"Built into the hillside above the Amalfi coast, Casa Aurelia balances local stone, Mediterranean light and contemporary interiors."},
{id:"ryokan-sen",name:"Ryokan Sen",location:"Kyoto, Japan",region:"Japan",style:"Ryokan",type:"ryokan",rating:4.8,reviews:96,price:410,img:"stay_ryokan",alt:"dest_japan",tags:["urban","wellness","adults"],amen:["Onsen","Kaiseki dinner","Garden","Tea ceremony"],blurb:"Nine tatami rooms behind a moss garden in Higashiyama. Futon laid while you are at dinner; tea poured while you watch the maple."},
{id:"fjord-haven",name:"Fjord Haven",location:"Lofoten, Norway",region:"Nordics",style:"Cabin",type:"cabin",rating:4.9,reviews:71,price:380,img:"stay_cabin",alt:"dest_nordics",tags:["mountain"],amen:["Sauna","Fjord kayaks","Fireplace","Breakfast basket"],blurb:"A restored fisherman\u2019s cabin on dark rocks at the water\u2019s edge. The sauna is wood-fired; the silence is total."},
{id:"riad-nour",name:"Riad Nour",location:"Marrakech, Morocco",region:"Africa",style:"Private Estate",type:"estate",rating:4.7,reviews:58,price:540,img:"stay_riad",alt:"dest_africa",tags:["urban","wellness"],amen:["Courtyard pool","Hammam","Rooftop","Staffed kitchen"],blurb:"A terracotta riad in the old medina, arranged around a zellige fountain. Breakfast on the roof, hammam at five."},
{id:"miradouro-house",name:"Miradouro House",location:"Lisbon, Portugal",region:"Mediterranean",style:"Hotel",type:"hotel",rating:4.6,reviews:112,price:460,img:"stay_lisbon",alt:"journal_quiet",tags:["urban","family"],amen:["Rooftop bar","Library","Bicycles","Concierge"],blurb:"Limestone calm above the Alfama roofs. A small hotel that behaves like a very good friend\u2019s apartment."},
{id:"mist-line",name:"Mist Line",location:"Big Sur, California",region:"North America",style:"Cabin",type:"cabin",rating:4.8,reviews:64,price:720,img:"stay_bigsur",alt:"dest_northamerica",tags:["mountain","adults"],amen:["Hot tub","Fireplace","Trail access","Ocean view"],blurb:"A timber lodge on the cliff edge where the fog rolls in at six. No television; the Pacific is the programme."},
{id:"villa-limoni",name:"Villa Limoni",location:"Praiano, Italy",region:"Mediterranean",style:"Villa",type:"villa",rating:4.8,reviews:43,price:980,img:"amalfi",alt:"casa_restaurant",tags:["beachfront","family"],amen:["Private pool","Chef on request","Lemon garden","Parking"],blurb:"A lemon-grove villa above Praiano with a private pool and a chef who shops in the village each morning."}];
const ROOMS=[
{id:"sea-view",name:"Sea View Room",price:620,size:42,guests:2,bed:"Queen bed",view:"Sea view",img:"casa_room",amen:["Linen bedding","Rain shower","Terracotta floors","Espresso & tea","Daily housekeeping"]},
{id:"junior-suite",name:"Junior Suite",price:890,size:58,guests:2,bed:"King bed",view:"Sea view · sitting area",img:"casa_lobby",amen:["Sitting room","Walk-in shower","Writing desk","Evening turndown"]},
{id:"terrace-suite",name:"Terrace Suite",price:1250,size:76,guests:3,bed:"King bed + daybed",view:"Private terrace · panoramic",img:"casa_ext",amen:["Private terrace","Outdoor shower","Breakfast included","Butler pantry"]}];
const GALLERY=[["casa_ext","Exterior"],["casa_lobby","Lobby"],["casa_room","Room"],["casa_bath","Bathroom"],["casa_pool","Pool"],["casa_restaurant","Restaurant"],["casa_view","Landscape"],["casa_detail","Details"]];
const EXPERIENCES=[
{id:"sunset-sail",name:"A private evening on the Mediterranean",short:"Private sunset sail",cat:"Nature",loc:"Amalfi Coast",price:180,dur:"3 hours",group:"Up to 6 guests",img:"exp_sail",times:["17:30","19:15"],desc:"A barefoot sail along the coast as the villages light up. Aperitivo on board, swim stop in a quiet cove, and a skipper who knows exactly when to stop talking.",includes:["Private skipper & sailboat","Aperitivo & local wine","Swim stop in a cove","Hotel pickup (Amalfi)"],bring:["Swimwear","A light layer for the way back","Soft-soled shoes"],cancel:"Free cancellation until 24 hours before departure.",addons:[["pickup","Hotel pickup — Praiano / Positano",40]]},
{id:"ceramic-workshop",name:"Hands in clay, a Vietri ceramic workshop",short:"Local ceramic workshop",cat:"Culture",loc:"Vietri sul Mare",price:95,dur:"2.5 hours",group:"Up to 8 guests",img:"exp_ceramic",times:["10:00","15:00"],desc:"Two and a half hours at the wheel with third-generation ceramicist Enzo Capano. Your piece is glazed, fired and shipped to your home within three weeks.",includes:["All materials & firing","Worldwide shipping of your piece","Espresso & sfogliatella"],bring:["Nothing — aprons provided"],cancel:"Free cancellation until 48 hours before.",addons:[["glaze","Extra glaze firing",15]]},
{id:"chefs-table",name:"Chef\u2019s table in Ravello",short:"Chef\u2019s table",cat:"Food",loc:"Ravello",price:220,dur:"3 hours",group:"Up to 10 guests",img:"exp_chef",times:["19:00"],desc:"Seven courses at the pass while the kitchen works around you. Menu written that morning around the market, paired with wines from the Campanian coast.",includes:["Seven courses","Wine pairing","Water & coffee"],bring:["An appetite and an evening with no plans"],cancel:"Free cancellation until 72 hours before.",addons:[["pair","Reserve pairing upgrade",60]]},
{id:"path-of-gods",name:"The Path of the Gods at first light",short:"Mountain hike",cat:"Adventure",loc:"Bomerano → Nocelle",price:120,dur:"5 hours",group:"Up to 8 guests",img:"casa_view",times:["07:30"],desc:"The Sentiero degli Dei before the heat and the crowds. A local guide, the coast 600 metres below, and lemon granita waiting at the end in Positano.",includes:["Certified mountain guide","Granita & coffee in Positano","Return transfer to Amalfi"],bring:["Trail shoes","1.5L water","Sun hat"],cancel:"Free cancellation until 24 hours before.",addons:[]},
{id:"morning-yoga",name:"Sunrise yoga above the sea",short:"Sunrise yoga",cat:"Wellness",loc:"Casa Aurelia terrace",price:75,dur:"1 hour",group:"Up to 10 guests",img:"casa_pool",times:["07:00","18:00"],desc:"An hour of slow vinyasa on the pool terrace before the world wakes up. Mats, shade and cold fennel tea afterwards.",includes:["Mat & props","Cold-pressed tea"],bring:["Comfortable clothing"],cancel:"Free cancellation until 12 hours before.",addons:[]},
{id:"villa-rufolo-concert",name:"Chamber concert at Villa Rufolo",short:"Evening concert",cat:"Art",loc:"Ravello",price:60,dur:"1.5 hours",group:"Solo & pairs",img:"casa_detail",times:["20:00"],desc:"A string quartet in the gardens of Villa Rufolo, the sea black below and the programme kept secret until the first note.",includes:["Reserved garden seating"],bring:["A light jacket"],cancel:"Non-refundable within 24 hours.",addons:[]},
{id:"ravello-gardens",name:"The gardens of Ravello, a walking study",short:"Architecture walk",cat:"Architecture",loc:"Ravello",price:85,dur:"2 hours",group:"Up to 6 guests",img:"casa_view",times:["09:30"],desc:"Two hours through Villa Cimbrone and Villa Rufolo with an architectural historian — terraces, sightlines and a century of travellers who never left on time.",includes:["Historian guide","Entrance fees"],bring:["Walking shoes"],cancel:"Free cancellation until 24 hours before.",addons:[]}];
const ARTICLES=[
{slug:"48-hours-kyoto",cat:"Guides",title:"48 hours in Kyoto",dek:"Two days is not enough for Kyoto. It is, however, exactly enough to fall for it.",author:"Elena Marchetti",date:"May 12, 2026",read:"8 min",img:"dest_japan",body:`<p>Kyoto does not reward speed. The city reveals itself at walking pace — in the creak of a temple floor, in the steam off a morning coffee in a converted machiya, in the way light falls across a moss garden at four in the afternoon and stays there, unbothered, for an hour.</p><p>Start before the city does. Hōnen-in at 7 a.m. is empty except for a monk raking the sand mounds at the gate. You will have the camphor trees to yourself, which is a kind of luxury no itinerary can schedule and no fee can buy.</p><figure></figure><blockquote class="pull">The city reveals itself at walking pace — never before four, never for the hurried.</blockquote><p>Spend the middle of the day the way the city intends: slowly. Lunch at a counter serving one thing done well, then tea in Gion at a house that has been pouring it for four generations. Do not plan the evening. The lanterns come on around six, and the wooden streets of Higashiyama become the reason you came.</p><p>On your last morning, resist the checklist. Sit with a coffee near the Kamo river, watch the herons do their patient work, and let Kyoto be exactly what it is: a city that has practised quiet for a thousand years, and is in no hurry to explain it.</p>`},
{slug:"quieter-hotels",cat:"Hotels",title:"Why the world\u2019s best hotels are becoming quieter",dek:"No lobbies full of marble. No gold. The new luxury is linen, stone and silence.",author:"Jonas Reinholt",date:"Apr 28, 2026",read:"6 min",img:"journal_quiet",body:`<p>Somewhere in the last decade, the best hotels stopped performing. The marble shrank. The chandeliers became paper lanterns. The staff stopped announcing themselves and started remembering your name, your coffee, your habit of reading by the window at six.</p><p>What replaced the spectacle is harder to build and easier to love: proportion, natural materials, honest light. A corridor of stone and linen can move you more than a lobby of crystal, because it is calibrated the way a good instrument is calibrated — to disappear in the hands of the person using it.</p><blockquote class="pull">The new luxury is not what a hotel adds. It is what a hotel has the confidence to leave out.</blockquote><p>The quiet hotel is not minimalism for its own sake. It is hospitality that trusts you. It assumes you do not need to be impressed — only rested, fed well, and pointed gently toward the place you actually came to see.</p><p>When you check out, you will not remember the thread count. You will remember the sound of the shutters at seven in the morning, and the feeling that the house had been waiting for you, quietly, all along.</p>`},
{slug:"mediterranean-summer",cat:"Design",title:"The architecture of Mediterranean summer",dek:"Limewash, shade and the long lunch: how the coast builds its days around light.",author:"Elena Marchetti",date:"Jun 3, 2026",read:"7 min",img:"casa_ext",body:`<p>Mediterranean architecture is a negotiation with the sun. Thick stone walls hold the cool of the night until noon. Shutters slice the afternoon into manageable light. A terrace is not a decoration — it is a room, and for half the year, the most important one in the house.</p><p>Walk any cliffside village on the Amalfi coast and you can read the logic in the walls: pale limewash to throw the light back, small windows on the street side, generous ones facing the sea. Everything is oriented toward the water the way a sunflower is oriented toward the sun.</p><blockquote class="pull">A terrace is not a decoration. For half the year it is the most important room in the house.</blockquote><p>The houses that endure here were never designed to be photographed. They were designed to be lived in slowly — long lunches under a pergola, naps in cross-breezes, evenings on the roof when the stone finally gives back its warmth. That is the architecture of a Mediterranean summer: not a style, but a schedule.</p>`},
{slug:"five-places-disappear",cat:"Stories",title:"Five places to disappear for a week",dek:"No itineraries, no signals worth the battery. Just far, good and quiet.",author:"Mara Osei",date:"Mar 17, 2026",read:"9 min",img:"journal_disappear",body:`<p>There is a particular kind of tired that only distance can fix. Not the tired of work — the tired of noise, of feeds, of being reachable. The cure is a place with one road, one bench, one horizon.</p><p>A stone bothy on a Hebridean point, where the sea fog erases the afternoon and the kettle is the only notification. A fjord cabin in Norway with a wood-fired sauna and no neighbour within earshot. A riad courtyard in Marrakech where the city roars one wall away and you hear only the fountain.</p><blockquote class="pull">The cure is a place with one road, one bench, one horizon.</blockquote><p>Disappearing is not escape — it is attention, redirected. After four or five days, something in the chest unclenches. You start noticing the light again. You write the letter, read the book, have the conversation.</p><p>Then you come back, of course. But you come back with the quiet packed somewhere behind the ribs, where it keeps.</p>`}];
const POIS=[
{id:"casa-aurelia",cat:"stay",x:500,y:372,name:"Casa Aurelia",note:"Design hotel · from €620"},
{id:"villa-limoni",cat:"stay",x:285,y:350,name:"Villa Limoni",note:"Private villa · from €980"},
{id:"rosa",cat:"eat",x:470,y:398,name:"La Terrazza di Rosa",note:"Campanian · €€€ · sea terrace"},
{id:"gemma",cat:"eat",x:698,y:430,name:"Da Gemma",note:"Seafood · €€ · Cetara"},
{id:"sail",cat:"exp",x:520,y:470,name:"Sunset sail",note:"Private · 3 hours · €180"},
{id:"ceramic",cat:"exp",x:860,y:430,name:"Ceramic workshop",note:"Vietri · 2.5 hours · €95"},
{id:"gods",cat:"exp",x:210,y:282,name:"Path of the Gods",note:"Guided hike · 5 hours · €120"},
{id:"praia",cat:"beach",x:300,y:356,name:"Marina di Praia",note:"Small cove · Praiano"},
{id:"duoglio",cat:"beach",x:452,y:398,name:"Duoglio Beach",note:"Stairway access · Amalfi"},
{id:"duomo",cat:"culture",x:487,y:372,name:"Duomo di Amalfi",note:"9th century · Amalfi"},
{id:"rufolo",cat:"culture",x:560,y:290,name:"Villa Rufolo",note:"Gardens & concerts · Ravello"}];
const TOWNS=[["Positano",150,332],["Praiano",268,346],["Amalfi",475,386],["Ravello",560,300],["Cetara",705,418],["Vietri",868,446]];
const CATL={stay:"Stays",eat:"Restaurants",exp:"Experiences",beach:"Beaches",culture:"Culture"};
const TRIP={id:"amalfi",dest:"Amalfi Coast",dates:"Sep 18–23, 2026",hotel:"Casa Aurelia",status:"Confirmed",
days:[
{n:"01",t:"Arrival",items:[["14:10","Airport transfer — Naples → Amalfi","booked"],["16:00","Check-in, Casa Aurelia","booked"],["20:00","Sunset dinner, La Terrazza di Rosa","booked"]]},
{n:"02",t:"The sea",items:[["08:30","Breakfast on the terrace","booked"],["17:30","Private sunset sail","booked"],["21:00","Dinner in Amalfi","open"]]},
{n:"03",t:"Villages",items:[["10:00","Positano village walk","open"],["15:00","Spa afternoon at the hotel","booked"],["20:00","Dinner at the hotel restaurant","open"]]},
{n:"04",t:"Craft & gardens",items:[["10:00","Ravello — Villa Rufolo gardens","open"],["15:00","Ceramic workshop, Vietri","req"],["20:30","Chamber concert, Villa Rufolo","req"]]},
{n:"05",t:"Slow morning",items:[["09:00","Swim & slow breakfast","open"],["12:00","Check-out","booked"],["15:20","Private transfer to Naples","booked"]]}]};
const PLANS={
kyoto:{title:"5 days in Kyoto",days:[["Day 1","Arrival + Gion evening — lantern-lit walk, counter dinner"],["Day 2","Architecture + tea ceremony — Hōnen-in at dawn, tea in Gion"],["Day 3","Arashiyama + private dinner — bamboo grove early, kaiseki at Ryokan Sen"],["Day 4","Craft + temples — ceramic & textile studios, Nishijin weaving"],["Day 5","Slow morning + departure — Kamo river coffee, shinkansen at 4"]]},
amalfi:{title:"5 days on the Amalfi Coast",days:[["Day 1","Arrival + sunset dinner — transfer from Naples, terrace table at eight"],["Day 2","The sea — private sail at 17:30, swim in a quiet cove"],["Day 3","Villages — Positano on foot, spa afternoon"],["Day 4","Craft & gardens — Vietri ceramics, Ravello at golden hour"],["Day 5","Slow morning + departure — lemon granita, transfer at 3"]]},
_generic:(d,interests)=>({title:`5 days in ${d}`,days:[["Day 1","Arrival + first walk — "+(interests[0]||"culture")+" by evening light"],["Day 2",(interests[1]||"Food")+" + local tables — market morning, long lunch"],["Day 3","Landscape day — the quiet side of "+d+", guided"],["Day 4","Craft + neighbourhoods — studios, cafés, no schedule after 4"],["Day 5","Slow morning + departure — one last coffee, unhurried"]]})};
const CH1=[
{i:"amalfi",idx:"I — The Mediterranean",name:"The Amalfi Coast",txt:"Cliffside villages, quiet mornings, long lunches and the sea below. Between mountain and water, the coast rewards the unhurried.",meta:"38 stays · 12 experiences · best Apr – Oct"},
{i:"dest_japan",idx:"II — Japan",name:"Kyoto",txt:"Nine tatami rooms, moss gardens, tea poured without a word. A city that has practised quiet for a thousand years.",meta:"21 stays · ryokans · best Mar – May"},
{i:"dest_nordics",idx:"III — The Nordics",name:"Lofoten",txt:"A wood-fired sauna on dark rocks, mountains in the mist, and silence you can lean against. Summer light that never ends.",meta:"14 stays · cabins · best Jun – Sep"}];
/* ================= STATE ================= */
const state={route:"",wish:new Set(),currency:"EUR",excat:null,
f:{where:"",in:new Date(2026,8,18),out:new Date(2026,8,23),guests:2,cat:"all",amen:[],setting:[],max:1300,sort:"rec"},
bk:{step:1,in:new Date(2026,8,18),out:new Date(2026,8,23),guests:2,room:"sea-view",x:{transfer:false,breakfast:false,sail:false},pay:"card",cal:new Date(2026,8,1),payErr:false,paying:false},
hero:{where:"",in:null,out:null,g:{a:2,c:0}},
draft:{in:null,out:null,cal:new Date(2026,8,1)},datesCtx:"bk",
mapCats:new Set(["stay","eat","exp","beach","culture"]),mapSel:null,
gal:null,avail:false,plan:null,planLoading:false,exp:{date:1,time:0,g:2,add:[]},conc:{svc:[],sent:false},acct:"profile"};
try{JSON.parse(localStorage.getItem("morrow-wish")||"[]").forEach(i=>state.wish.add(i))}catch(e){}
const RATES={EUR:{r:1,s:"€"},USD:{r:1.08,s:"$"},GBP:{r:0.86,s:"£"},JPY:{r:163,s:"¥"}};
function fmt(eur){const k=RATES[state.currency];return k.s+Math.round(eur*k.r).toLocaleString("en-US")}
/* ================= HELPERS ================= */
const $=s=>document.querySelector(s);
const I={arr:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="14" height="14"><path d="M4 12h15m-6-7 7 7-7 7"/></svg>',
star:'<svg viewBox="0 0 24 24"><path d="M12 2.5l2.9 6.2 6.6.8-4.9 4.6 1.3 6.6L12 17.4l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z"/></svg>',
heart:'<svg viewBox="0 0 24 24"><path d="M12 20s-7.5-4.7-9.4-9A5.3 5.3 0 0 1 12 6.6 5.3 5.3 0 0 1 21.4 11c-1.9 4.3-9.4 9-9.4 9Z"/></svg>',
check:'<svg viewBox="0 0 24 24"><path d="m4 12.5 5 5L20 6.5"/></svg>',
x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m6 6 12 12M18 6 6 18"/></svg>',
chev:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="16" height="16"><path d="m9 5 7 7-7 7"/></svg>'};
function im(key,alt,lazy=true,cls=""){
  const src = IMG[key] || "";
  return `<div class="im ${cls}"><img src="${src}" alt="${alt||""}" loading="${lazy?"lazy":"eager"}" decoding="async" onload="this.parentNode.classList.add('ld')" onerror="this.parentNode.classList.add('ld','err');this.alt='Image unavailable'"></div>`;
}
/* Safety: force-show any .im that never fired onload (cached / blocked CDN) */
function forceImages(){
  document.querySelectorAll(".im:not(.ld):not(.force)").forEach(el=>{
    const img = el.querySelector("img");
    if(!img) return;
    if(img.complete && img.naturalWidth > 0){ el.classList.add("ld"); }
    else {
      setTimeout(()=>{ if(!el.classList.contains("ld")) el.classList.add("force"); }, 2200);
    }
  });
}
const dshort=d=>d?d.toLocaleDateString("en-US",{month:"short",day:"numeric"}):"";
const dlong=d=>d?d.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"";
const nights=()=>state.bk.in&&state.bk.out?Math.round((state.bk.out-state.bk.in)/864e5):0;
function totals(){const r=ROOMS.find(r=>r.id===state.bk.room);const n=Math.max(nights(),0);const base=r.price*n;const ex=(state.bk.x.transfer?90:0)+(state.bk.x.breakfast?45*n:0)+(state.bk.x.sail?180*state.bk.guests:0);const tax=Math.round((base+ex)*.1);return{n,base,ex,tax,total:base+ex+tax,room:r}}
function toast(msg,icon){const t=document.createElement("div");t.className="toast";t.innerHTML=`<span class="tk">${icon||"✓"}</span>${msg}`;$("#toasts").appendChild(t);requestAnimationFrame(()=>t.classList.add("on"));setTimeout(()=>{t.classList.remove("on");setTimeout(()=>t.remove(),400)},2800)}
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.12});
function reveal(){document.querySelectorAll(".rv:not(.in)").forEach(el=>io.observe(el))}
function persist(){try{localStorage.setItem("morrow-wish",JSON.stringify([...state.wish]))}catch(e){}}
function wishBadge(){const b=$("#wcount");b.hidden=state.wish.size===0;b.textContent=state.wish.size}
function clockFor(tz){try{return new Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit",timeZone:tz}).format(new Date())}catch(e){return "—"}}
function tickClocks(){document.querySelectorAll("[data-tz]").forEach(el=>{el.textContent=clockFor(el.dataset.tz)})}
setInterval(tickClocks,20000);
/* ================= COMPONENTS ================= */
function chlabel(no,nm){return `<div class="chlabel"><span class="no">${no}</span><span class="nm">${nm}</span><span class="ln"></span></div>`}
function stayCard(s){const sv=state.wish.has(s.id);return `<article class="scard rv">
<a class="scard-im" href="#/stay/${s.id}" aria-label="View ${s.name}">${im(s.img,s.name+" — "+s.location)}${im(s.alt,"",true,"im2")}<span class="scard-view">View stay ${I.arr}</span></a>
<button class="savebtn ${sv?"on":""}" data-act="save" data-id="${s.id}" aria-label="Save ${s.name}" aria-pressed="${sv}">${I.heart}</button>
<div class="scard-info"><div class="row"><h3 class="display" style="font-size:21px">${s.name}</h3><span class="rate">${I.star}${s.rating}</span></div>
<p class="mut sm">${s.location} · ${s.style}</p><p class="price">From <b>${fmt(s.price)}</b> / night</p></div></article>`}
function expCard(x){return `<a class="xcard rv" href="#/experience/${x.id}">${im(x.img,x.name)}<span class="xtag">${x.cat}</span>
<div class="xinfo"><h3 class="display" style="font-size:19px">${x.short}</h3><p class="xmeta">${x.loc} · ${x.dur}</p><p class="price">From <b>${fmt(x.price)}</b> / person</p></div></a>`}
function acard(a){return `<a class="acard rv" href="#/journal/${a.slug}">${im(a.img,a.title)}<p class="am" style="margin-top:15px">${a.cat} · ${a.read} read</p><h3 class="display" style="font-size:22px">${a.title}</h3><p class="am">${a.author} · ${a.date}</p></a>`}
function mapSVG(){const mk=POIS.filter(p=>state.mapCats.has(p.cat)).map(p=>{const sel=state.mapSel===p.id;
return `<g class="poi" data-act="poi" data-id="${p.id}" role="button" tabindex="0" aria-label="${p.name}">${sel?`<circle cx="${p.x}" cy="${p.y}" r="13" class="poi-ring"/>`:""}<circle cx="${p.x}" cy="${p.y}" r="6.5" class="poi-dot c-${p.cat}"/></g>`}).join("");
const tl=TOWNS.map(t=>`<text x="${t[1]}" y="${t[2]-14}" text-anchor="middle" class="tlabel">${t[0]}</text>`).join("");
return `<svg viewBox="0 0 1000 640" class="mapsvg" role="img" aria-label="Stylised map of the Amalfi Coast">
<rect width="1000" height="640" fill="#d5dbd0"/>
<path d="M0,0 H1000 V444 C862,452 794,408 700,416 C606,424 552,376 462,384 C372,392 320,336 235,344 C150,352 90,318 0,330 Z" fill="#e9e2d0"/>
<path d="M0,330 C90,318 150,352 235,344 C320,336 372,392 462,384 C552,376 606,424 700,416 C794,408 862,452 1000,444" fill="none" stroke="#b5ab90" stroke-width="2"/>
<path d="M0,240 C140,228 260,268 400,258 C560,248 700,300 1000,330" fill="none" stroke="#ddd5bf" stroke-width="1.4"/>
<path d="M0,140 C200,130 420,170 640,160 C800,152 900,190 1000,200" fill="none" stroke="#e0d8c4" stroke-width="1.2"/>
<path d="M120,336 C240,352 340,362 470,392 C600,420 720,424 880,450" fill="none" stroke="#ccc3a9" stroke-width="2.4"/>
${tl}${mk}</svg>`}
function mapChips(){return `<div class="map-chips">${Object.keys(CATL).map(c=>`<button class="chip ${state.mapCats.has(c)?"on":""}" data-act="mcat" data-v="${c}">${CATL[c]}</button>`).join("")}</div>`}
function mapPanel(){const p=POIS.find(p=>p.id===state.mapSel);if(!p)return"";
const act=p.cat==="stay"?`<a class="btn sm acc" href="#/stay/${p.id}">View stay</a>`:p.cat==="exp"?`<a class="btn sm acc" href="#/experience/${p.id}">Reserve</a>`:`<button class="btn sm ghost" data-act="poi-add">Add to trip</button>`;
return `<div class="map-panel"><div><b style="font:500 15px var(--sans)">${p.name}</b><p class="mut3 xs" style="margin-top:2px">${CATL[p.cat]} · ${p.note}</p></div>${act}<button class="icobtn" data-act="poi-close" aria-label="Close">${I.x}</button></div>`}
function calHTML(src){const d=src==="draft"?state.draft:state.bk;const m=d.cal,y=m.getFullYear(),mo=m.getMonth();
const start=(new Date(y,mo,1).getDay()+6)%7,days=new Date(y,mo+1,0).getDate(),today=new Date();today.setHours(0,0,0,0);
let c="";for(let i=0;i<start;i++)c+='<span></span>';
for(let dd=1;dd<=days;dd++){const dt=new Date(y,mo,dd);let cls="";
if(d.in&&dt.getTime()===d.in.getTime())cls="in";else if(d.out&&dt.getTime()===d.out.getTime())cls="out";else if(d.in&&d.out&&dt>d.in&&dt<d.out)cls="mid";
c+=`<button class="cal-d ${cls}" data-act="pickday" data-src="${src}" data-ts="${dt.getTime()}" ${dt<today?"disabled":""} aria-label="${dlong(dt)}">${dd}</button>`}
return `<div class="cal"><div class="cal-head"><button class="icobtn" data-act="cal-prev" data-src="${src}" aria-label="Previous month">${I.chev.replace("m9 5 7 7-7 7","m15 5-7 7 7 7")}</button><b>${m.toLocaleDateString("en-US",{month:"long",year:"numeric"})}</b><button class="icobtn" data-act="cal-next" data-src="${src}" aria-label="Next month">${I.chev}</button></div>
<div class="cal-grid">${["M","T","W","T","F","S","S"].map(x=>`<span class="cal-dow">${x}</span>`).join("")}${c}</div></div>`}
function grow(label,key){const g=state.hero.g;return `<div class="grow"><span class="sm">${label}</span><div class="stepper"><button data-act="g-${key}-" aria-label="Fewer ${label}">−</button><b style="min-width:14px;text-align:center">${key==="a"?g.a:g.c}</b><button data-act="g-${key}+" aria-label="More ${label}">+</button></div></div>`}
/* ================= HOME ================= */
function homeView(){return `
<section class="hero" data-ch="now"><div class="hbg"><img src="${IMG.hero}" alt="A secluded Mediterranean hotel above the sea at dawn" loading="eager" decoding="async"></div><div class="hero-fade"></div>
<div class="wrap hero-top"><span class="mono">N 40.6340° · E 14.6027°</span><span class="mono"><span data-tz="Europe/Rome">${clockFor("Europe/Rome")}</span> — Amalfi Coast · ${WX["Amalfi Coast"]}</span></div>
<div class="wrap hero-copy">
<p class="mono rv">Curated stays / Private experiences / Slow travel</p>
<h1 class="display"><span class="hl"><i style="--d:.2s">Go somewhere</i></span><span class="hl"><i style="--d:.34s">worth <em class="it" style="color:var(--acc)">remembering.</em></i></span></h1>
<div class="hero-cta rv" style="--d:.55s"><a class="btn" href="#/stays">Explore stays ${I.arr}</a><a class="ulink" href="#/destinations" style="color:var(--tx)">Find your next destination ${I.arr}</a></div>
<div class="hmeta-row rv" style="--d:.68s"><span class="hchip"><span class="dot"></span>142 stays, each one visited</span><span class="hchip">26 destinations · 4.9 average rating</span></div></div>
<div class="scue"><span>Scroll</span><span class="ln"></span></div></section>
<div class="wrap searchwrap"><form id="heroSearch" class="sb-card" aria-label="Search stays">
<div class="sb-cell"><span class="lbl">Where</span><input id="hWhere" list="destlist" placeholder="Where to?" value="${state.hero.where}" autocomplete="off"><datalist id="destlist">${DESTS.map(d=>`<option value="${d.name}">`).join("")}</datalist></div>
<button type="button" class="sb-cell" data-act="open-dates" data-ctx="hero"><span class="lbl">Check in — Check out</span><span class="val ${state.hero.in?"":"ph"}">${state.hero.in?dshort(state.hero.in)+" → "+dshort(state.hero.out):"Add dates"}</span></button>
<button type="button" class="sb-cell" data-act="gpop" aria-haspopup="true"><span class="lbl">Guests</span><span class="val" id="gLbl">${state.hero.g.a+state.hero.g.c} guests</span></button>
<button class="btn sb-btn" type="submit">Search ${I.arr}</button>
<div class="gpop" id="gpop">${grow("Adults","a")}${grow("Children","c")}</div></form></div>
<div class="marq" aria-hidden="true"><div class="marq-track">${[0,1].map(()=>`<span>Amalfi Coast <i class="st">✦</i></span><span class="it">Kyoto <i class="st">✦</i></span><span>Lofoten <i class="st">✦</i></span><span class="it">Marrakech <i class="st">✦</i></span><span>Big Sur <i class="st">✦</i></span><span class="it">Lisbon <i class="st">✦</i></span><span>Maldives <i class="st">✦</i></span><span class="it">Ubud <i class="st">✦</i></span>`).join("")}</div></div>
<section class="sec" data-ch="atlas"><div class="wrap">${chlabel("— 01","Somewhere, right now")}
<div class="ch1"><div class="ch1-media rv">${CH1.map((b,i)=>`<div class="ch1-img ${i===0?"on":""}" data-ci="${i}"><img src="${IMG[b.i]}" alt="${b.name}" loading="${i?"lazy":"eager"}"></div>`).join("")}</div>
<div class="ch1-blocks">${CH1.map((b,i)=>`<div class="ch1-block" data-ci="${i}"><span class="idx rv">${b.idx}</span><h2 class="display rv" style="--d:.08s">${b.name}</h2><p class="lede rv" style="--d:.14s">${b.txt}</p><p class="mono rv" style="--d:.2s">${b.meta}</p><a class="ulink rv" style="--d:.26s" href="#/${i===0?"destination/amalfi":"stays"}">Explore ${i===0?"Amalfi":"the stays"} ${I.arr}</a></div>`).join("")}</div></div></div></section>
<section class="hrail" id="hrail" data-ch="horizon"><div class="hr-sticky">
<div class="wrap hr-head"><div style="display:flex;align-items:center;gap:18px"><span class="no" style="font-family:var(--mono);font-size:11px;letter-spacing:.24em;color:var(--acc)">— 02</span><span class="nm" style="font-family:var(--mono);font-size:10.5px;letter-spacing:.26em;text-transform:uppercase;color:var(--tx3)">The Atlas</span></div><span class="mut3" style="font-family:var(--mono);font-size:10px;letter-spacing:.2em">SCROLL →</span></div>
<div class="hr-track" id="hrTrack">${DESTS.map((d,i)=>`<a class="hrc" href="#/${d.id==="amalfi"?"destination/amalfi":"stays"}">
<div class="pwrap"><div class="im" style="height:100%"><img src="${IMG[d.img]}" alt="${d.name}" loading="lazy" decoding="async" onload="this.parentNode.classList.add('ld')"></div></div>
<div class="hrc-t"><div><p class="mono" style="margin-bottom:9px"><span class="acc-t">0${i+1}</span> · ${d.n}</p><h3>${d.name}</h3><p class="hrc-m">${d.tag}</p></div>
<span class="clock">Local time<b data-tz="${TZ[d.name]}">${clockFor(TZ[d.name])}</b>${WX[d.name]}</span></div></a>`).join("")}
<a class="hrc" href="#/destinations" style="display:flex;align-items:center;justify-content:center;border:1px solid var(--line);border-radius:10px;height:min(56vh,510px);width:min(50vw,380px)"><span class="serif it" style="font-size:26px">View all 26 →</span></a></div>
<div class="hr-prog"><i id="hrBar"></i></div></div></section>
<section class="sec" data-ch="stays"><div class="wrap">${chlabel("— 03","Places worth staying")}
<div class="sec-head" style="margin-bottom:34px"><h2 class="display rv">The index.</h2><a class="ulink rv" href="#/stays">View all stays ${I.arr}</a></div>
<ul class="idxlist rv">${STAYS.slice(0,6).map((s,i)=>`<li data-img="${s.img}" data-href="#/stay/${s.id}"><span class="i-no">0${i+1}</span><span class="i-name">${s.name}</span><span class="i-loc">${s.location}</span><span class="i-st">${s.style}</span><span class="i-pr">${fmt(s.price)} <span class="mut3 xs">/ night</span></span><span class="i-ar">${I.arr}</span></li>`).join("")}</ul>
<div id="idxPrev"><img src="${IMG.casa_ext}" alt=""></div>
<div style="display:flex;gap:clamp(28px,5vw,84px);margin-top:clamp(44px,6vw,72px);flex-wrap:wrap">
${[["142","Curated stays"],["26","Destinations"],["4.9","Guest rating"]].map(s=>`<div class="rv"><b class="serif" style="font-size:clamp(36px,3.6vw,52px);font-weight:340"><span data-count="${s[0]}">0</span></b><p class="mono" style="margin-top:6px">${s[1]}</p></div>`).join("")}</div></div></section>
<section class="scene"><div class="im" data-px="0.14"><img src="${IMG.casa_view}" alt="The coast from above" loading="lazy" onload="this.parentNode.classList.add('ld')"></div><div class="dg"></div>
<div class="sq"><p class="rv">“The best trips are not measured in nights.<br>They are measured in <span style="color:var(--acc2)">mornings you didn\u2019t want to end.</span>”</p><p class="qa rv" style="--d:.15s">— The MORROW manifesto</p></div></section>
<section class="sec" data-ch="do"><div class="wrap">${chlabel("— 04","Experiences")}
<div class="sec-head" style="margin-bottom:30px"><h2 class="display rv">Things worth doing slowly.</h2><a class="ulink rv" href="#/experiences">All experiences ${I.arr}</a></div>
<div class="xrow">${EXPERIENCES.slice(0,5).map(expCard).join("")}</div></div></section>
<section class="sec" style="padding-top:0" data-ch="journal"><div class="wrap">${chlabel("— 05","Journal")}
<div class="sec-head" style="margin-bottom:34px"><h2 class="display rv">Notes from the road.</h2><a class="ulink rv" href="#/journal">Read the journal ${I.arr}</a></div>
<div class="sgrid">${ARTICLES.slice(0,3).map(acard).join("")}</div></div></section>
<section class="sec" style="padding-top:0" data-ch="concierge"><div class="wrap">${chlabel("— 06","Concierge")}
<div class="cband rv">${im("casa_restaurant","A table at sunset")}<div class="dg"></div>
<div class="ct"><p class="mono"><span class="acc-t">Private concierge</span> · 07:00 – 23:00 CET</p>
<h2 class="display">Let us handle <em class="it" style="color:var(--acc2)">the details.</em></h2>
<p class="mut" style="max-width:46ch">Restaurant tables, boat charters, a driver at the airport, a proposal planned to the minute. Ask once; consider it done.</p>
<a class="btn" href="#/concierge">Request concierge ${I.arr}</a></div></div></div></section>`}
/* ================= VIEWS ================= */
function destinationsView(){return `<header class="phead"><span class="ghostw gword">Atlas</span><div class="wrap"><p class="mono"><span class="acc-t">02</span> · Destinations</p><h1 class="display">Where will you go next?</h1><p class="lede">Twenty-six regions, chosen for the way they make you feel at 7 a.m. — not for the postcard.</p></div></header>
<div class="wrap sec" style="padding-top:60px"><div style="display:grid;grid-template-columns:repeat(12,1fr);gap:16px">${DESTS.map((d,i)=>`<a class="rv" style="grid-column:span ${[7,5,4,4,4,6,6][i]};position:relative;height:${[480,480,380,380,380,430,430][i]}px;border-radius:10px;overflow:hidden;display:block" href="#/${d.id==="amalfi"?"destination/amalfi":"stays"}">${im(d.img,d.name)}<div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(10,8,5,.7),transparent 55%)"></div><div style="position:absolute;left:22px;right:22px;bottom:18px"><h3 class="display" style="font-size:clamp(24px,2.4vw,34px)">${d.name}</h3><p class="mono" style="margin-top:8px">${d.tag} · ${d.n} · <span data-tz="${TZ[d.name]}">${clockFor(TZ[d.name])}</span> local</p></div></a>`).join("")}</div></div>`}
function staysView(){const f=state.f;let list=STAYS.filter(s=>{
if(f.cat!=="all"&&s.type!==f.cat)return false;
if(f.where){const q=f.where.toLowerCase();if(!(s.location+s.region+s.name+s.style).toLowerCase().includes(q))return false}
if(f.amen.length&&!f.amen.every(a=>s.amen.includes(a)))return false;
if(f.setting.length&&!f.setting.every(t=>s.tags.includes(t)))return false;
if(s.price>f.max)return false;return true});
if(f.sort==="lo")list.sort((a,b)=>a.price-b.price);if(f.sort==="hi")list.sort((a,b)=>b.price-a.price);if(f.sort==="rate")list.sort((a,b)=>b.rating-a.rating);
const cats=[["all","All"],["hotel","Hotels"],["villa","Villas"],["cabin","Cabins"],["ryokan","Ryokans"],["estate","Private estates"],["design","Design hotels"]];
return `<header class="phead"><span class="ghostw gword">Stays</span><div class="wrap"><p class="mono"><span class="acc-t">01</span> · Stays</p><h1 class="display">Places worth staying.</h1><p class="lede">A small collection, chosen slowly. Every property visited before it appears here.</p>
<div class="cat-row">${cats.map(c=>`<button class="chip ${f.cat===c[0]?"on":""}" data-act="fcat" data-v="${c[0]}">${c[1]}</button>`).join("")}</div></div></header>
<div class="wrap" style="padding:50px clamp(20px,4.5vw,58px) 0"><div class="stays-layout" id="staysLayout">
<aside class="filters" aria-label="Filters">
<div class="fgroup"><h4>Destination</h4><input class="sel" id="fWhere" list="destlist2" placeholder="Anywhere" value="${f.where}"><datalist id="destlist2">${DESTS.map(d=>`<option value="${d.name}">`).join("")}</datalist></div>
<div class="fgroup"><h4>Dates</h4><button class="sel" style="text-align:left" data-act="open-dates" data-ctx="f">${f.in?dshort(f.in)+" → "+dshort(f.out):"Add dates"}</button></div>
<div class="fgroup"><h4>Guests</h4><div class="bc-g"><span class="sm">${f.guests} guest${f.guests>1?"s":""}</span><div class="stepper"><button data-act="fg-">−</button><button data-act="fg+">+</button></div></div></div>
<div class="fgroup"><h4>Max price · ${fmt(f.max)}</h4><input type="range" min="300" max="1300" step="20" value="${f.max}" id="fPrice" aria-label="Maximum price per night"></div>
<div class="fgroup"><h4>Amenities</h4><div class="fchips">${["Pool","Spa","Restaurant","Beach access"].map(a=>`<button class="chip ${f.amen.includes(a)?"on":""}" data-act="famen" data-v="${a}">${a}</button>`).join("")}</div></div>
<div class="fgroup"><h4>Setting</h4><div class="fchips">${[["beachfront","Beachfront"],["mountain","Mountain"],["urban","Urban"],["wellness","Wellness"],["family","Family"],["adults","Adults only"]].map(a=>`<button class="chip ${f.setting.includes(a[0])?"on":""}" data-act="fset" data-v="${a[0]}">${a[1]}</button>`).join("")}</div></div>
<button class="ulink" data-act="clear-f" style="align-self:flex-start">Clear all filters</button></aside>
<section class="results"><div class="res-top"><span class="mut3 sm" style="font-family:var(--mono);letter-spacing:.1em;text-transform:uppercase">${list.length} stay${list.length!==1?"s":""}${f.where?" · "+f.where:""}</span>
<div style="display:flex;gap:10px;align-items:center"><select class="sel" id="fSort" style="width:auto" aria-label="Sort"><option value="rec">Recommended</option><option value="lo">Price · low to high</option><option value="hi">Price · high to low</option><option value="rate">Highest rated</option></select><button class="chip" data-act="show-map">Map</button></div></div>
<div class="res-grid">${list.length?list.map(stayCard).join(""):`<div class="empty"><p class="mono">No results</p><h3 class="display" style="font-size:26px">No stays match your search.</h3><p>Try widening the dates, lifting the price cap, or exploring a neighbouring coast.</p><div class="eacts"><button class="btn sm" data-act="clear-f">Clear filters</button><button class="btn sm ghost" data-act="open-dates" data-ctx="f">Adjust dates</button><a class="btn sm ghost" href="#/destination/amalfi">Explore nearby</a></div></div>`}</div></section>
<aside class="maprail" aria-label="Map"><div class="map-wrap">${mapChips()}${mapSVG()}${mapPanel()}<div style="position:absolute;right:12px;bottom:12px"><button class="chip" data-act="show-list" style="background:var(--bg2);color:var(--tx2)">List</button></div></div></aside>
</div></div><div style="height:80px"></div>`}
function stayView(id){const s=STAYS.find(s=>s.id===id)||STAYS[0];const sv=state.wish.has(s.id);
const gal=s.id==="casa-aurelia"?GALLERY:[[s.img,"Exterior"],[s.alt,"Interior"]];
const rooms=s.id==="casa-aurelia"?ROOMS:[{id:s.id+"-r1",name:"The Room",price:s.price,size:38,guests:2,bed:"Queen bed",view:s.style,img:s.img,amen:s.amen.slice(0,4)},{id:s.id+"-r2",name:"The Suite",price:Math.round(s.price*1.5),size:62,guests:3,bed:"King bed",view:"Best view in the house",img:s.alt,amen:s.amen.slice(0,4)}];
const tz=TZ[s.location.split(",")[1]?.trim()]||"Europe/Rome";
return `<section class="hhero">${im(s.img,s.name,false).replace('class="im"','class="im" style="position:absolute;inset:0"')}<div class="dg"></div>
<div class="wrap hhero-c"><a class="ulink" href="#/stays" style="margin-bottom:16px;display:inline-flex;color:var(--tx)">← Stays</a>
<div class="row"><div><p class="mono"><span class="acc-t">The house</span> · ${s.style}</p><h1 class="display" style="font-size:clamp(40px,5.4vw,68px)">${s.name}</h1>
<div class="hmeta"><span>${s.location}</span><span class="rate">${I.star}${s.rating} · ${s.reviews} reviews</span><span><span data-tz="${tz}">${clockFor(tz)}</span> local</span></div></div>
<div style="display:flex;gap:12px;flex-wrap:wrap"><button class="btn" data-act="scroll-rooms">Check availability ${I.arr}</button><button class="btn ghost" data-act="save" data-id="${s.id}">${sv?"Saved ♥":"Save"}</button></div></div></div></section>
<div class="wrap"><div class="gal-mosaic">${gal.slice(0,5).map((g,i)=>`<button class="im g${i}" data-act="open-gallery" data-id="${s.id}" data-i="${i}" aria-label="Open photo ${g[1]}"><img src="${IMG[g[0]]}" alt="${g[1]}" loading="${i?"lazy":"eager"}" decoding="async" onload="this.parentNode.classList.add('ld')" style="width:100%;height:100%;object-fit:cover"></button>`).join("")}
<button class="btn sm gal-btn" data-act="open-gallery" data-id="${s.id}" data-i="0">View all ${gal.length} photos</button></div></div>
<div class="wrap hlayout"><div class="hmain">
<section><h2 class="display">A house between mountain and sea.</h2><p class="lede" style="max-width:60ch">${s.blurb}</p>
<div class="info-grid" style="margin-top:28px"><div><span>Rooms</span><b>${s.id==="casa-aurelia"?28:Math.max(9,s.reviews%20+6)}</b></div><div><span>Check-in</span><b>15:00</b></div><div><span>Check-out</span><b>12:00</b></div><div><span>Style</span><b style="font-size:13px">${s.style==="Design Hotel"?"Contemporary Mediterranean":s.style}</b></div></div></section>
<section><h2 class="display">Around the house</h2><div class="amen-tiles">${[["casa_pool","Pool"],["casa_bath","Spa & bath"],["casa_restaurant","Restaurant"],["casa_view","Beach access"]].map(a=>`<figure class="rv">${im(a[0],a[1])}<figcaption>${a[1]}</figcaption></figure>`).join("")}</div>
<div class="amen-chips">${["Airport transfer","Room service","Concierge","Beach access","24h check-in"].map(a=>`<span class="chip" style="cursor:default">${a}</span>`).join("")}</div></section>
<section id="rooms"><h2 class="display">Rooms & suites</h2>${rooms.map(r=>`<div class="room-card rv"><div class="im"><img src="${IMG[r.img]}" alt="${r.name}" loading="lazy" decoding="async" onload="this.parentNode.classList.add('ld')"></div>
<div class="rc-info"><h3 class="display" style="font-size:22px">${r.name}</h3><div class="rc-meta"><span>${r.size} m²</span><span>${r.guests} guests</span><span>${r.bed}</span><span>${r.view}</span></div><div class="rc-amen">${r.amen.map(a=>`<span class="chip" style="cursor:default;padding:6px 12px">${a}</span>`).join("")}</div></div>
<div class="rc-side"><div class="p">${fmt(r.price)} <span>/ night</span></div><button class="btn sm" data-act="select-room" data-id="${r.id}" data-stay="${s.id}">Select room</button></div></div>`).join("")}</section>
<section><h2 class="display">What guests remember</h2><div class="rev-sum"><div class="rev-big"><b>4.9</b><span class="mut3 sm">${s.reviews} verified stays</span></div>
<div class="rev-bars">${[["Cleanliness",4.9],["Location",5.0],["Service",4.9],["Design",4.8],["Food",4.7],["Value",4.6]].map(r=>`<div class="rbar"><span>${r[0]}</span><div class="tr"><i style="width:${r[1]/5*100}%"></i></div><span>${r[1].toFixed(1)}</span></div>`).join("")}</div></div>
<div class="rev-card"><p>“The house is quiet in the way only old stone knows how to be. Breakfast on the terrace ruined all other breakfasts. We extended twice.”</p><p class="mut3 xs" style="margin-top:9px;font-family:var(--mono);letter-spacing:.1em;text-transform:uppercase">Claire & Tom H. · London · September 2025</p></div>
<div class="rev-card"><p>“Staff remembered our coffee order by day two and our hiking plans by day three. Felt less like a hotel, more like being expected.”</p><p class="mut3 xs" style="margin-top:9px;font-family:var(--mono);letter-spacing:.1em;text-transform:uppercase">M. Okafor · Zurich · June 2025</p></div></section>
<section><h2 class="display">Where you are</h2><div class="map-wrap">${mapChips()}${mapSVG()}${mapPanel()}</div><p class="mut3 sm" style="margin-top:14px">Via Marina Grande 14, Amalfi · 55 min from Naples by private transfer · 10 min walk to the Duomo.</p></section></div>
<aside class="book-card rv"><div class="bc-price"><b>${fmt(s.price)}</b> <span class="mut3 sm" style="font-family:var(--mono)">/ night</span></div>
<div class="bc-dates"><button class="bc-cell" data-act="open-dates" data-ctx="bk"><span class="lbl">Check-in</span>${state.bk.in?dshort(state.bk.in):"Add date"}</button>
<button class="bc-cell" data-act="open-dates" data-ctx="bk"><span class="lbl">Check-out</span>${state.bk.out?dshort(state.bk.out):"Add date"}</button></div>
<div class="bc-g"><span class="sm">${state.bk.guests} guest${state.bk.guests>1?"s":""}</span><div class="stepper"><button data-act="bg-">−</button><button data-act="bg+">+</button></div></div>
<div id="bcAvail">${state.avail&&nights()>0?`<div style="border-top:1px solid var(--line);padding-top:12px"><div class="sumline"><span>${nights()} nights · Sea View Room</span><span>${fmt(620*nights())}</span></div><p class="xs mut3">Free cancellation until Sep 11</p></div>`:state.avail?`<p class="xs mut3">Select dates to see rates.</p>`:`<div style="display:flex;flex-direction:column;gap:8px"><div class="skel" style="height:14px"></div><div class="skel" style="height:14px;width:70%"></div></div>`}</div>
<button class="btn wide" data-act="scroll-rooms">Check availability</button>
<ul class="trust"><li>${I.check}Free cancellation until Sep 11</li><li>${I.check}Secure payment · no hidden fees</li><li>${I.check}Verified property — visited May 2026</li></ul></aside></div>
<div class="sticky-cta"><div><b style="font:600 15px var(--sans)">${fmt(s.price)}</b> <span class="mut3 xs">/ night</span></div><button class="btn sm" data-act="scroll-rooms">Check availability</button></div>`}
function bookView(){const bk=state.bk;const steps=["Dates","Room","Details","Payment","Confirmed"];
const prog=`<div class="prog" role="list" aria-label="Booking progress">${steps.map((s,i)=>`${i?'<span class="pline"></span>':""}<div class="pstep ${bk.step>i+1?"done":""} ${bk.step===i+1?"now":""}" role="listitem"><span class="pdot">${bk.step>i+1?"✓":i+1}</span><span class="plbl">${s}</span></div>`).join("")}</div>`;
let body="";
if(bk.step===1){body=`<h2 class="display">When are you going?</h2><p class="mut3 sm" style="margin-bottom:22px;font-family:var(--mono);letter-spacing:.08em">CASA AURELIA · AMALFI COAST</p>
<div style="display:flex;gap:28px;flex-wrap:wrap;align-items:flex-start">${calHTML("bk")}
<div style="min-width:222px"><h4 class="mono" style="margin-bottom:12px">Guests</h4>
<div class="bc-g" style="margin-bottom:12px"><span class="sm">Adults</span><div class="stepper"><button data-act="bg-">−</button><b>${bk.guests}</b><button data-act="bg+">+</button></div></div>
<p class="xs mut3">Rooms sleep up to 3. For larger parties, the concierge will combine rooms.</p></div></div>
<div class="bk-nav"><a class="btn ghost" href="#/stay/casa-aurelia">Back</a><button class="btn" data-act="bk-next" ${nights()>0?"":"disabled"}>Continue ${I.arr}</button></div>`}
if(bk.step===2){body=`<h2 class="display">Choose your room</h2><p class="mut3 sm" style="margin-bottom:22px;font-family:var(--mono);letter-spacing:.08em">${dlong(bk.in).toUpperCase()} → ${dlong(bk.out).toUpperCase()} · ${bk.guests} GUESTS</p>
${ROOMS.map(r=>`<div class="room-card ${bk.room===r.id?"selr":""}" style="grid-template-columns:170px 1fr auto"><div class="im"><img src="${IMG[r.img]}" alt="${r.name}" loading="lazy" onload="this.parentNode.classList.add('ld')"></div>
<div class="rc-info"><h3 class="display" style="font-size:20px">${r.name}</h3><div class="rc-meta"><span>${r.size} m²</span><span>${r.guests} guests</span><span>${r.bed}</span></div><p class="xs mut3">Flex rate · breakfast included · free cancellation until Sep 11</p></div>
<div class="rc-side"><div class="p">${fmt(r.price)} <span>/ night</span></div><button class="btn sm ${bk.room===r.id?"":"ghost"}" data-act="pick-room" data-id="${r.id}">${bk.room===r.id?"Selected":"Select"}</button></div></div>`).join("")}
<div class="bk-nav"><button class="btn ghost" data-act="bk-back">Back</button><button class="btn" data-act="bk-next">Continue ${I.arr}</button></div>`}
if(bk.step===3){body=`<h2 class="display">Who is travelling?</h2><p class="mut3 sm" style="margin-bottom:24px">We share these details with the hotel only.</p>
<form id="guestForm" class="frm"><div class="fld"><label for="gfn">First name</label><input class="sel" id="gfn" required value="Sofia"></div>
<div class="fld"><label for="gln">Last name</label><input class="sel" id="gln" required value="Keller"></div>
<div class="fld"><label for="gem">Email</label><input class="sel" id="gem" type="email" required value="sofia@keller.ch"></div>
<div class="fld"><label for="gph">Phone</label><input class="sel" id="gph" type="tel" value="+41 79 555 01 22"></div>
<div class="fld"><label for="gco">Country</label><select class="sel" id="gco"><option>Switzerland</option><option>United Kingdom</option><option>France</option><option>Italy</option><option>Japan</option><option>United States</option><option>Germany</option></select></div>
<div class="fld"><label for="gar">Arrival time</label><select class="sel" id="gar"><option>Before 15:00</option><option selected>15:00 – 18:00</option><option>18:00 – 22:00</option><option>After 22:00</option></select></div>
<div class="fld full"><label for="gsr">Special requests</label><textarea class="sel" id="gsr" placeholder="Anniversaries, allergies, a quiet room at the end of the corridor…">High floor, corner room if possible.</textarea></div>
<div class="full" style="display:flex;flex-direction:column;gap:10px"><h4 class="mono">Optional extras</h4>
<label class="check"><input type="checkbox" data-x="transfer" ${bk.x.transfer?"checked":""}><span><b>Airport transfer — Naples → hotel</b><span>Private driver, 55 min · ${fmt(90)}</span></span></label>
<label class="check"><input type="checkbox" data-x="breakfast" ${bk.x.breakfast?"checked":""}><span><b>Breakfast on the terrace</b><span>${fmt(45)} per night · otherwise à la carte</span></span></label>
<label class="check"><input type="checkbox" data-x="sail" ${bk.x.sail?"checked":""}><span><b>Private sunset sail</b><span>${fmt(180)} per person · Sep 20, 17:30</span></span></label></div>
<div class="full bk-nav"><button type="button" class="btn ghost" data-act="bk-back">Back</button><button class="btn" type="submit">Continue ${I.arr}</button></div></form>`}
if(bk.step===4){const t=totals();body=`<h2 class="display">Payment</h2>
<div style="border:1px solid var(--line);border-radius:10px;padding:20px;margin:20px 0">
<div class="sumline"><span>${t.room.name} · ${t.n} nights</span><span>${fmt(t.base)}</span></div>
${t.ex?`<div class="sumline"><span>Extras</span><span>${fmt(t.ex)}</span></div>`:""}
<div class="sumline"><span>Taxes & city tax (10%)</span><span>${fmt(t.tax)}</span></div>
<div class="sumline tot"><span>Total</span><span>${fmt(t.total)}</span></div>
<p class="xs mut3" style="margin-top:9px">Transparent pricing — this is the full amount. No hidden fees, ever.</p></div>
${bk.payErr?`<div class="errbox" role="alert"><p><b>Something went wrong while checking availability.</b> Your card was not charged.</p><div style="display:flex;gap:10px"><button class="btn sm" data-act="bk-pay">Try again</button><a class="btn sm ghost" href="#/concierge">Contact concierge</a></div></div>`:""}
<div class="paytabs">${[["card","Card"],["apple","Apple Pay"],["google","G Pay"]].map(p=>`<button class="chip ${bk.pay===p[0]?"on":""}" data-act="paym" data-v="${p[0]}">${p[1]}</button>`).join("")}</div>
${bk.pay==="card"?`<div class="frm"><div class="fld full"><label>Card number</label><input class="sel" id="ccNum" inputmode="numeric" placeholder="1234 5678 9012 3456" autocomplete="cc-number"></div>
<div class="fld full"><label>Name on card</label><input class="sel" placeholder="SOFIA KELLER"></div>
<div class="fld"><label>Expiry</label><input class="sel" placeholder="08 / 28"></div><div class="fld"><label>CVC</label><input class="sel" placeholder="···" inputmode="numeric"></div></div>
<button class="btn wide" style="margin-top:20px" data-act="bk-pay" id="payBtn">${bk.paying?'<span class="spin"></span> Processing…':`Pay ${fmt(t.total)}`}</button>`:`<button class="btn wide" style="margin-top:8px" data-act="bk-pay" id="payBtn">${bk.paying?'<span class="spin"></span> Processing…':`Continue with ${bk.pay==="apple"?"Apple":"Google"} Pay`}</button>`}
<ul class="trust" style="margin-top:18px"><li>${I.check}Secure, encrypted payment</li><li>${I.check}You won\u2019t be charged until the hotel confirms</li></ul>
<div class="bk-nav"><button class="btn ghost" data-act="bk-back" style="margin-top:14px">Back</button><span></span></div>`}
if(bk.step===5){const t=totals();body=`<div class="conf"><div class="ok">${I.check}</div>
<h2 class="display">Your journey begins here.</h2><p class="mut" style="margin-top:10px">A confirmation email is on its way. The house has been told to expect you.</p>
<div class="confno">MORROW-48291</div>
<div class="conf-grid"><div><span>Hotel</span><b>Casa Aurelia</b></div><div><span>Dates</span><b>${dshort(bk.in)} – ${dshort(bk.out)}, ${bk.out.getFullYear()}</b></div><div><span>Room</span><b>${t.room.name}</b></div><div><span>Guests</span><b>${bk.guests}</b></div></div>
<div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap"><a class="btn" href="#/trip/amalfi">View trip ${I.arr}</a><a class="btn ghost" href="#/experiences">Explore experiences</a></div></div>`}
const t=totals();
return `<div class="wrap bk-wrap"><p class="mono"><span class="acc-t">Booking</span> · Casa Aurelia</p><h1 class="display" style="font-size:clamp(30px,3.6vw,46px);margin-top:12px">${bk.step===5?"Confirmed":"Reserve your stay"}</h1>${prog}
<div class="bk-grid"><div class="bk-card">${body}</div>
${bk.step<5?`<aside class="book-card bk-sum" style="position:static"><div style="display:flex;gap:14px">${im("casa_ext","Casa Aurelia",true).replace('class="im"','class="im" style="width:86px;height:86px;border-radius:8px;flex:none"')}<div><b style="font:500 15px var(--sans)">Casa Aurelia</b><p class="mut3 xs">Amalfi Coast, Italy</p><p class="xs mut3" style="margin-top:5px">${dshort(bk.in)} → ${dshort(bk.out)} · ${bk.guests} guests</p></div></div>
<div style="border-top:1px solid var(--line);padding-top:12px"><div class="sumline"><span>${t.room.name}</span><span>${fmt(t.room.price)} / night</span></div>
<div class="sumline"><span>${t.n} nights</span><span>${fmt(t.base)}</span></div>${t.ex?`<div class="sumline"><span>Extras</span><span>${fmt(t.ex)}</span></div>`:""}<div class="sumline"><span>Taxes</span><span>${fmt(t.tax)}</span></div><div class="sumline tot"><span>Total</span><span>${fmt(t.total)}</span></div></div>
<ul class="trust"><li>${I.check}Free cancellation until Sep 11</li><li>${I.check}No hidden fees</li></ul></aside>`:""}</div></div>`}
function destView(){return `<section class="hhero" style="height:min(72vh,660px)">${im("amalfi","Amalfi Coast",false).replace('class="im"','class="im" style="position:absolute;inset:0"')}<div class="dg"></div>
<div class="wrap hhero-c"><p class="mono"><span class="acc-t">Destination</span> · Italy · <span data-tz="Europe/Rome">${clockFor("Europe/Rome")}</span> local · ${WX["Amalfi Coast"]}</p><h1 class="display" style="font-size:clamp(44px,6vw,80px)">Amalfi Coast</h1><p class="lede" style="max-width:44ch">Between mountain and sea.</p></div></section>
<div class="wrap" style="padding:50px clamp(20px,4.5vw,58px) 0">
<div class="cat-row" style="margin-bottom:clamp(40px,5vw,64px)">${["Where to stay","What to do","Where to eat","When to go","Culture","Map"].map((c,i)=>`<a class="chip" href="#am-${i}">${c}</a>`).join("")}</div>
<section id="am-0" style="margin-bottom:64px">${chlabel("— 01","Where to stay")}<div class="sgrid">${[STAYS[0],STAYS[6],STAYS[4]].map(stayCard).join("")}</div></section>
<section id="am-1" style="margin-bottom:64px">${chlabel("— 02","What to do")}<div class="xrow">${EXPERIENCES.slice(0,5).map(expCard).join("")}</div></section>
<section id="am-2" style="margin-bottom:64px">${chlabel("— 03","Where to eat")}
${[["La Terrazza di Rosa","Amalfi · €€€","Sea terrace, handmade scialatielli, the best sunset table on the coast."],["Da Gemma","Cetara · €€","Fishermen's trattoria — order the colatura alici spaghetti, thank us later."],["Sal De Riso","Minori · €€","The coast's pastry temple. Lemon delizia, obviously."]].map(r=>`<div style="display:flex;justify-content:space-between;gap:16px;padding:20px 4px;border-bottom:1px solid var(--line)" class="rv"><div><b class="display" style="font-size:20px">${r[0]}</b><p class="mut sm">${r[2]}</p></div><span class="mut3 xs" style="white-space:nowrap;padding-top:6px;font-family:var(--mono);letter-spacing:.08em">${r[1]}</span></div>`).join("")}</section>
<section id="am-3" style="margin-bottom:64px">${chlabel("— 04","When to go")}
<div style="display:grid;grid-template-columns:repeat(12,1fr);gap:6px;max-width:780px">${["J","F","M","A","M","J","J","A","S","O","N","D"].map((m,i)=>{const best=i>=3&&i<=9,peak=i>=5&&i<=8;return `<div style="text-align:center" class="rv"><div style="height:48px;border-radius:6px;background:${peak?"var(--acc)":best?"var(--sage)":"var(--panel2)"}"></div><span class="xs mut3">${m}</span></div>`}).join("")}</div>
<p class="mut sm" style="margin-top:14px">April–June and September–October for light and quiet. July–August for heat and festivals. Winter for the villages to themselves.</p></section>
<section id="am-4" style="margin-bottom:64px">${chlabel("— 05","Local culture")}<div style="display:grid;grid-template-columns:6fr 6fr;gap:clamp(24px,4vw,64px)"><div class="rv">${im("casa_detail","Ceramic and stone detail")}</div>
<div style="display:flex;flex-direction:column;gap:16px;align-items:flex-start" class="rv"><p class="lede">The coast runs on craft: Vietri's ceramics, Minori's paper, the lemon groves stitched into the cliffs. Meals are long, siestas are sacred, and the ferry timetable is a rumour.</p><p class="mut sm">Learn three words of Italian. Say yes to the second limoncello. Walk the Sentiero degli Dei before nine.</p><a class="ulink" href="#/guide/kyoto">Read our travel guides ${I.arr}</a></div></div></section>
<section id="am-5" style="padding-bottom:40px">${chlabel("— 06","The coast, mapped")}<div class="map-wrap">${mapChips()}${mapSVG()}${mapPanel()}</div></section></div>`}
function expView(){const cats=["All","Food","Culture","Nature","Adventure","Wellness","Art","Architecture"];return `<header class="phead"><span class="ghostw gword">Do</span><div class="wrap"><p class="mono"><span class="acc-t">03</span> · Experiences</p><h1 class="display">Things worth doing slowly.</h1><p class="lede">Small, private, and run by people who were doing it before it was a listing.</p>
<div class="cat-row">${cats.map(c=>`<button class="chip ${state.excat===c||(c==="All"&&!state.excat)?"on":""}" data-act="excat" data-v="${c}">${c}</button>`).join("")}</div></div></header>
<div class="wrap sec" style="padding-top:60px"><div class="sgrid">${EXPERIENCES.filter(x=>!state.excat||state.excat==="All"||x.cat===state.excat).map(expCard).join("")}</div></div>`}
function expDetailView(id){const x=EXPERIENCES.find(e=>e.id===id)||EXPERIENCES[0];const e=state.exp;
const days=[...Array(7)].map((_,i)=>new Date(2026,8,18+i).toLocaleDateString("en-US",{weekday:"short",day:"numeric"}));
return `<section class="xhero">${im(x.img,x.name,false).replace('class="im"','class="im" style="position:absolute;inset:0"')}<div class="dg"></div>
<div class="wrap hhero-c"><p class="mono"><span class="acc-t">${x.cat}</span> · ${x.loc}</p><h1 class="display" style="font-size:clamp(34px,4.6vw,58px);max-width:20ch">${x.name}</h1>
<div class="hmeta"><span>${x.dur}</span><span>${x.group}</span><span>From ${fmt(x.price)} / person</span></div></div></section>
<div class="wrap xlayout"><div>
<p class="lede" style="margin-bottom:36px">${x.desc}</p>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:36px;margin-bottom:36px"><div><h3 class="display" style="font-size:21px;margin-bottom:14px">What\u2019s included</h3><ul class="inc-list">${x.includes.map(i=>`<li>${I.check}${i}</li>`).join("")}</ul></div>
<div><h3 class="display" style="font-size:21px;margin-bottom:14px">What to bring</h3><ul class="inc-list">${x.bring.map(i=>`<li>${I.check}${i}</li>`).join("")}</ul></div></div>
<h3 class="display" style="font-size:21px;margin-bottom:9px">Cancellation</h3><p class="mut sm" style="margin-bottom:28px">${x.cancel}</p>
<h3 class="display" style="font-size:21px;margin-bottom:14px">Nearby stays</h3><div class="sgrid" style="grid-template-columns:1fr 1fr">${[STAYS[0],STAYS[6]].map(stayCard).join("")}</div></div>
<aside class="book-card rv" id="expBook"><h3 class="display" style="font-size:21px">Reserve</h3>
<h4 class="mono" style="margin:8px 0 9px">Date · September 2026</h4>
<div class="datechips">${days.map((d,i)=>`<button class="chip ${e.date===i?"on":""}" data-act="exp-date" data-v="${i}">${d}</button>`).join("")}</div>
<h4 class="mono" style="margin:16px 0 9px">Time</h4>
<div class="datechips">${x.times.map((t,i)=>`<button class="chip ${e.time===i?"on":""}" data-act="exp-time" data-v="${i}">${t}</button>`).join("")}</div>
<div class="bc-g" style="margin:16px 0"><span class="sm">Guests</span><div class="stepper"><button data-act="eg-">−</button><b>${e.g}</b><button data-act="eg+">+</button></div></div>
${x.addons.length?`<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:8px">${x.addons.map(a=>`<label class="check" style="padding:11px 13px"><input type="checkbox" data-eadd="${a[0]}" ${e.add.includes(a[0])?"checked":""}><span><b style="font-size:12.5px">${a[1]}</b><span>+${fmt(a[2])}</span></span></label>`).join("")}</div>`:""}
<div style="border-top:1px solid var(--line);padding-top:12px"><div class="sumline tot" style="border:none;margin:0;padding:0"><span>Total</span><span>${fmt(x.price*e.g+x.addons.reduce((s,a)=>s+(x.addons.find(q=>q[0]===a)?.[2]||0),0))}</span></div></div>
<button class="btn wide" data-act="exp-reserve">Reserve experience</button>
<ul class="trust"><li>${I.check}Free cancellation window above</li><li>${I.check}Added straight to your trip</li></ul></aside></div>`}
function tripsView(){return `<header class="phead"><span class="ghostw gword">Trips</span><div class="wrap"><p class="mono"><span class="acc-t">08</span> · Trips</p><h1 class="display">Your trips</h1></div></header>
<div class="wrap sec" style="padding-top:54px"><p class="mono" style="margin-bottom:16px"><span class="acc-t">Upcoming</span></p>
<div class="trip-card rv">${im("amalfi","Amalfi Coast")}<div class="tc-info"><p class="mono" style="color:var(--sage)">Confirmed · MORROW-48291</p>
<h3 class="display" style="font-size:28px">Amalfi Coast</h3><p class="mut sm">Sep 18–23, 2026 · Casa Aurelia · 2 guests</p>
<div style="display:flex;gap:8px;flex-wrap:wrap;margin:6px 0 12px">${["Hotel","Flights","Transfers","Experiences","Reservations"].map(t=>`<span class="chip" style="cursor:default;padding:7px 13px">${t}</span>`).join("")}</div>
<div style="display:flex;gap:12px"><a class="btn sm" href="#/trip/amalfi">View trip</a><a class="btn sm ghost" href="#/experiences">Add experiences</a></div></div></div>
<p class="mono" style="margin:38px 0 16px">Past</p>
<div class="trip-card rv" style="opacity:.85">${im("dest_japan","Kyoto")}<div class="tc-info"><p class="mono">Completed · April 2025</p><h3 class="display" style="font-size:28px">Kyoto</h3><p class="mut sm">Apr 4–10, 2025 · Ryokan Sen</p><div style="display:flex;gap:12px;margin-top:10px"><a class="btn sm ghost" href="#/guide/kyoto">Kyoto guide</a><button class="btn sm ghost" data-act="rebook">Book again</button></div></div></div></div>`}
function tripView(){return `<header class="phead"><div class="wrap"><a class="ulink" href="#/trips" style="color:var(--tx)">← Your trips</a><h1 class="display" style="margin-top:14px">${TRIP.dest}</h1><p class="lede">${TRIP.dates} · ${TRIP.hotel} · <span style="color:var(--acc)">${TRIP.status}</span></p>
<div style="display:flex;gap:12px;margin-top:22px"><a class="btn" href="#/experiences">Add experience ${I.arr}</a><a class="btn ghost" href="#/concierge">Concierge</a></div></div></header>
<div class="wrap sec" style="padding-top:54px"><div class="logi" style="margin-bottom:48px">
<div><h4>Flights</h4><p style="font-size:14px">AZ 5711 · ZRH → NAP<br><span class="mut3 xs">Sep 18 · 09:40 – 13:05 · Booked</span></p></div>
<div><h4>Transfers</h4><p style="font-size:14px">Private driver, Naples → Amalfi<br><span class="mut3 xs">Sep 18 · 14:10 · Booked</span></p></div>
<div><h4>Experiences</h4><p style="font-size:14px">Sunset sail · Sep 20, 17:30<br><span class="mut3 xs">Booked · Ceramic workshop requested</span></p></div>
<div><h4>Reservations</h4><p style="font-size:14px">La Terrazza di Rosa · Sep 18, 20:00<br><span class="mut3 xs">Table for two, sea side · Booked</span></p></div></div>
<h2 class="display" style="margin-bottom:10px">Itinerary</h2>
${TRIP.days.map(d=>`<div class="tl-day rv"><div class="dn"><span>Day</span><b>${d.n}</b><p class="mut3 xs" style="margin-top:7px">${d.t}</p></div>
<div>${d.items.map(it=>`<div class="tl-item ${it[2]}"><span class="t">${it[0]}</span><span class="dot"></span><div><b>${it[1]}</b><span class="st">${it[2]==="booked"?"Booked":it[2]==="req"?"Requested":"Open"}</span></div></div>`).join("")}</div></div>`).join("")}</div>`}
function conciergeView(){const svcs=["Restaurant reservation","Airport transfer","Private driver","Boat charter","Local guide","Special occasion","Custom itinerary"];
return `<header class="phead"><span class="ghostw gword">Ask</span><div class="wrap"><p class="mono"><span class="acc-t">05</span> · Concierge</p><h1 class="display">Let us handle the details.</h1><p class="lede">A human, on your side of the world, within minutes.</p></div></header>
<div class="wrap split sec" style="padding-top:60px"><div>
<p class="mono" style="margin-bottom:6px">What do you need?</p><div>${svcs.map(s=>`<div class="svc ${state.conc.svc.includes(s)?"on":""}" data-act="csvc" data-v="${s}" role="checkbox" aria-checked="${state.conc.svc.includes(s)}" tabindex="0"><span>${s}</span><span class="ck"></span></div>`).join("")}</div></div>
<div class="form-card">${state.conc.sent?`<div class="conf" style="padding:50px 10px"><div class="ok">${I.check}</div><h2 class="display">We\u2019ll take it from here.</h2><p class="mut" style="margin-top:12px;max-width:38ch;margin-left:auto;margin-right:auto">Your concierge, Ana, will reply within 4 hours with a plan and a direct number.</p><button class="btn ghost" style="margin-top:26px" data-act="conc-again">Send another request</button></div>`:
`<form id="conciergeForm" class="frm"><div class="fld full"><label>Destination</label><select class="sel"><option>Amalfi Coast</option><option>Kyoto</option><option>Lofoten</option><option>Marrakech</option><option>Lisbon</option><option>Big Sur</option></select></div>
<div class="fld"><label>Date</label><input class="sel" type="date" value="2026-09-19"></div><div class="fld"><label>Guests</label><select class="sel"><option>2</option><option>1</option><option>3</option><option>4</option><option>6+</option></select></div>
<div class="fld full"><label>Budget</label><select class="sel"><option>Flexible</option><option>Modest</option><option>Comfortable</option><option>Generous</option></select></div>
<div class="fld full"><label>Additional details</label><textarea class="sel" placeholder="Tell us everything, or one line. Both are fine.">A quiet table for two on Sep 19, somewhere local, no music.</textarea></div>
<div class="full"><button class="btn wide">Send request ${I.arr}</button></div></form>`}</div></div>`}
function plannerView(){const p=state.plan;
return `<header class="phead"><span class="ghostw gword">Plan</span><div class="wrap"><p class="mono"><span class="acc-t">Trip planner</span></p><h1 class="display">Build your journey.</h1><p class="lede">Tell us the shape of the trip; we\u2019ll sketch the days.</p></div></header>
<div class="wrap split sec" style="padding-top:60px"><div class="form-card">
<form id="planForm" class="frm"><div class="fld full"><label>Destination</label><select class="sel" id="plDest"><option>Kyoto</option><option>Amalfi Coast</option><option>Lofoten</option><option>Marrakech</option><option>Lisbon</option><option>Big Sur</option></select></div>
<div class="fld"><label>Days</label><select class="sel" id="plDays"><option>3</option><option selected>5</option><option>7</option></select></div>
<div class="fld"><label>Budget</label><select class="sel"><option>€€ · Considered</option><option selected>€€€ · Comfortable</option><option>€€€€ · Unbothered</option></select></div>
<div class="fld full"><label>Travel style</label><select class="sel"><option>Slow</option><option>Active</option><option>Design-led</option><option>Food-first</option></select></div>
<div class="fld full"><label>Interests</label><div class="fchips" id="plInt">${["Food","Architecture","Nature","Wellness","Adventure","Culture"].map((c,i)=>`<button type="button" class="chip ${i<3?"on":""}" data-act="pint" data-v="${c}">${c}</button>`).join("")}</div></div>
<div class="full"><button class="btn wide">${state.planLoading?'<span class="spin"></span> Sketching…':"Create itinerary "+I.arr}</button></div></form></div>
<div>${state.planLoading?`<div style="display:flex;flex-direction:column;gap:12px">${[...Array(5)].map(()=>`<div class="skel" style="height:66px;border-radius:10px"></div>`).join("")}</div>`:p?`
<div class="rv in"><p class="mono"><span class="acc-t">Sample itinerary</span></p><h2 class="display" style="margin:12px 0 4px">${p.title}</h2><p class="mut3 sm" style="margin-bottom:22px">Drafted from your preferences · editable by concierge</p>
${p.days.map(d=>`<div style="display:grid;grid-template-columns:70px 1fr;gap:18px;padding:17px 0;border-top:1px solid var(--line)"><b class="serif" style="font-size:20px;font-weight:400">${d[0].replace("Day ","D")}</b><div><b style="font:500 14.5px var(--sans)">${d[1].split(" — ")[0]}</b><p class="mut sm">${d[1].split(" — ")[1]||""}</p></div></div>`).join("")}
<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:26px"><button class="btn" data-act="plan-save">Save trip</button><button class="btn ghost" data-act="plan-edit">Edit</button><a class="btn ghost" href="#/stays">Book</a><button class="btn ghost" data-act="plan-share">Share</button></div></div>`:
`<div class="empty" style="grid-column:auto"><p class="mono">No itinerary yet</p><h3 class="display" style="font-size:24px">Your journey, sketched in seconds.</h3><p>Choose a destination and a few interests — we\u2019ll draft the days, you keep the spontaneity.</p></div>`}</div></div>`}
function circleView(){return `<header class="phead"><span class="ghostw gword">Circle</span><div class="wrap"><p class="mono"><span class="acc-t">06</span> · Membership</p><h1 class="display">The Circle.</h1><p class="lede">For travellers who go often, and go well. Invitations, not subscriptions.</p></div></header>
<div class="wrap sec" style="padding-top:60px"><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:18px">
${[["The Circle","By invitation","Priority concierge line","Room upgrades where the house allows","A gift in the room on arrival","The Sunday letter, first"],["Circle Plus","€180 / year","Everything in The Circle","Two complimentary experiences a year","Early access to new houses","Annual dinner with the editors"],["Patron","Application","A dedicated travel designer","First stays in new destinations","Your name in the library at every house","The world, arranged"]].map((t,i)=>`<div class="tier rv" style="--d:${i*.1}s"><span class="tp">Tier 0${i+1}</span><b>${t[0]}</b><span class="mut3" style="font-family:var(--mono);font-size:10px;letter-spacing:.2em;text-transform:uppercase">${t[1]}</span><ul class="inc-list" style="margin-top:10px">${t.slice(2).map(x=>`<li>${I.check}${x}</li>`).join("")}</ul><button class="btn ${i===1?"":"ghost"}" style="margin-top:auto" data-act="toast" data-msg="Request received — the editors will be in touch.">${i===2?"Apply":"Request invitation"}</button></div>`).join("")}</div>
<div style="margin-top:76px;text-align:center" class="rv"><p class="serif it" style="font-size:clamp(20px,2.4vw,28px);max-width:36ch;margin:0 auto;color:var(--tx2)">“Membership is not a tier. It is a promise that somebody at MORROW knows your name.”</p></div></div>`}
function manifestoView(){return `<header class="phead" style="min-height:56vh;display:flex;align-items:center"><div class="wrap"><p class="mono"><span class="acc-t">07</span> · Manifesto · MMXXVI</p><h1 class="display">Inspire first.<br><em class="it" style="color:var(--acc)">Simplify second.</em><br>Sell third.</h1></div></header>
<section class="sec"><div class="wrap" style="max-width:900px">
${[["We believe","the best trips are not measured in nights, but in mornings you didn\u2019t want to end."],["We believe","a room should be quiet enough to hear yourself think, and beautiful enough to make you forget to."],["We believe","in long lunches, slow roads, second espressos, and the dignity of an unhurried check-in."],["We do not believe","in lobbies that shout, in gold that gilds, in itineraries with seventeen pins in a day."],["We promise","transparent prices, honest cancellations, and a human on the phone within minutes — every day of your journey."]].map((m,i)=>`<div class="rv" style="margin-bottom:52px"><p class="mono" style="margin-bottom:12px"><span class="acc-t">${String(i+1).padStart(2,"0")}</span> · ${m[0]}</p><p class="mline">${m[1]}</p></div>`).join("")}
<div class="rv" style="margin-top:54px"><a class="btn" href="#/destinations">Go somewhere worth remembering ${I.arr}</a></div></div></section>`}
function journalView(){return `<header class="phead"><span class="ghostw gword">Read</span><div class="wrap"><p class="mono"><span class="acc-t">04</span> · Journal</p><h1 class="display">Notes from the road.</h1><p class="lede">Destinations, hotels, food, culture, design — written by people who went.</p>
<div class="cat-row">${["All","Destinations","Hotels","Food","Culture","Design","Guides","Stories"].map((c,i)=>`<button class="chip ${i===0?"on":""}" data-act="jcat" data-v="${c}">${c}</button>`).join("")}</div></div></header>
<div class="wrap sec" style="padding-top:56px"><a class="rv" href="#/journal/${ARTICLES[0].slug}" style="position:relative;display:block;height:clamp(320px,54vh,540px);border-radius:10px;overflow:hidden;margin-bottom:clamp(38px,5vw,64px)">${im(ARTICLES[0].img,ARTICLES[0].title)}<div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(10,8,5,.72),transparent 60%)"></div><div style="position:absolute;left:30px;bottom:26px;right:30px"><p class="mono">${ARTICLES[0].cat} · ${ARTICLES[0].read} read</p><h2 class="display" style="font-size:clamp(28px,3.6vw,46px)">${ARTICLES[0].title}</h2></div></a>
<div class="sgrid">${ARTICLES.slice(1).map(acard).join("")}</div></div>`}
function articleView(slug){const a=ARTICLES.find(a=>a.slug===slug)||ARTICLES[0];const body=a.body.replace("<figure></figure>",`<figure>${im(a.img==="dest_japan"?"stay_ryokan":"casa_pool",a.title)}<figcaption>${a.img==="dest_japan"?"A tatami room at Ryokan Sen, Higashiyama.":"The pool terrace at Casa Aurelia, before the world wakes up."}</figcaption></figure>`);
return `<header class="phead" style="text-align:center"><div class="wrap" style="max-width:880px"><p class="mono"><span class="acc-t">${a.cat}</span> · ${a.read} read</p><h1 class="display" style="font-size:clamp(34px,4.6vw,62px);margin:18px auto 16px;max-width:22ch">${a.title}</h1><p class="lede" style="margin:0 auto">${a.dek}</p><p class="mut3 sm" style="margin-top:20px;font-family:var(--mono);letter-spacing:.1em;text-transform:uppercase">By ${a.author} · ${a.date}</p></div></header>
<div class="wrap" style="padding:56px clamp(20px,4.5vw,58px) 64px"><div style="max-width:1100px;margin:0 auto">${im(a.img,a.title)}</div></div>
<div class="wrap" style="padding-bottom:70px"><div class="prose">${body}</div></div>
<div class="wrap" style="padding-bottom:100px">${chlabel("—","Related stays")}<div class="sgrid" style="grid-template-columns:1fr 1fr">${(a.slug.includes("kyoto")?[STAYS[1],STAYS[4]]:[STAYS[0],STAYS[6]]).map(stayCard).join("")}</div>
<div style="margin-top:48px;display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap"><a class="ulink" href="#/destination/amalfi">Explore the destination ${I.arr}</a><a class="ulink" href="#/journal">More from the journal ${I.arr}</a></div></div>`}
function guideView(){return `<section class="hhero" style="height:min(62vh,560px)">${im("dest_japan","Kyoto",false).replace('class="im"','class="im" style="position:absolute;inset:0"')}<div class="dg"></div>
<div class="wrap hhero-c"><p class="mono"><span class="acc-t">Travel guide</span> · Japan · <span data-tz="Asia/Tokyo">${clockFor("Asia/Tokyo")}</span> local</p><h1 class="display" style="font-size:clamp(44px,5.6vw,72px)">Kyoto</h1><p class="lede" style="color:var(--tx2)">A thousand years of practised quiet.</p></div></section>
<div class="wrap sec" style="padding-top:56px"><div class="split" style="align-items:start">
<div>${chlabel("— 01","Best time to visit")}<p class="lede" style="margin-bottom:22px">Late March–April for cherry blossom, November for maples. May and October are the locals\u2019 secret: mild, clear, calmer.</p>
<div style="display:grid;grid-template-columns:repeat(12,1fr);gap:6px;max-width:560px">${["J","F","M","A","M","J","J","A","S","O","N","D"].map((m,i)=>{const pk=(i===2||i===10),best=[3,4,8,9].includes(i);return `<div style="text-align:center"><div style="height:42px;border-radius:6px;background:${pk?"var(--acc)":best?"var(--sage)":"var(--panel2)"}"></div><span class="xs mut3">${m}</span></div>`}).join("")}</div>
<div style="margin-top:46px">${chlabel("— 02","Neighbourhoods")}</div>
${[["Higashiyama","Temple lanes, lantern light, the classic Kyoto"],["Gion","Tea houses and twilight walks"],["Arashiyama","Bamboo, river, mountain air"],["Nishijin","Weaving houses and quiet cafés"]].map(n=>`<div style="padding:15px 4px;border-top:1px solid var(--line)"><b class="display" style="font-size:18px">${n[0]}</b><p class="mut sm">${n[1]}</p></div>`).join("")}
<div style="margin-top:46px">${chlabel("— 03","Restaurants")}</div>
${[["Kappo Nakamura","Counter kaiseki · ¥¥¥"],["Korakuen Coffee","Morning coffee, garden view · ¥"],["Gion Nishimura","Kaiseki, two stars, no sign · ¥¥¥¥"],["Arashiyama Yoshimura","Soba over the river · ¥¥"]].map(n=>`<div style="padding:15px 4px;border-top:1px solid var(--line);display:flex;justify-content:space-between;gap:12px"><b class="display" style="font-size:18px">${n[0]}</b><span class="mut3 xs" style="text-align:right;padding-top:5px">${n[1]}</span></div>`).join("")}
<div style="margin-top:46px">${chlabel("— 04","Etiquette")}</div><ul class="inc-list">${["Speak softly on streets and trains — residents live behind every door.","Photograph geiko and maiko from a distance, never in their path.","Remove shoes where tatami begins; socks are always correct.","Cash is still king in small houses."].map(i=>`<li>${I.check}${i}</li>`).join("")}</ul></div>
<div>${chlabel("— 05","Where to stay")}${[STAYS[1]].map(stayCard).join("")}
<div style="margin-top:28px" class="rv">${im("stay_ryokan","Ryokan interior")}</div>
<div style="margin-top:28px;display:flex;flex-direction:column;gap:10px"><a class="btn" href="#/stay/ryokan-sen">View Ryokan Sen ${I.arr}</a><a class="btn ghost" href="#/planner">Plan Kyoto days</a></div></div></div></div>`}
function wishView(){
  const W = [...(state.wish || [])];
  const stays = W.filter(i => STAYS.some(s => s.id === i)).map(i => STAYS.find(s => s.id === i)).filter(Boolean);
  const exps  = W.filter(i => EXPERIENCES.some(x => x.id === i)).map(i => EXPERIENCES.find(x => x.id === i)).filter(Boolean);
  return `<header class="phead"><span class="ghostw gword">Saved</span><div class="wrap"><p class="mono"><span class="acc-t">09</span> · Wishlist</p><h1 class="display">Saved for later.</h1></div></header>
<div class="wrap sec" style="padding-top:56px">${W.length===0?`<div class="empty"><p class="mono">Nothing saved yet</p><h3 class="display" style="font-size:26px">A shortlist of places worth remembering.</h3><p>Save stays, experiences and destinations with the heart — they’ll wait here, patiently.</p><div class="eacts"><a class="btn" href="#/stays">Explore stays</a><a class="btn ghost" href="#/destinations">Browse destinations</a></div></div>`:
(stays.length?`<p class="mono" style="margin-bottom:18px">Stays · ${stays.length}</p><div class="sgrid" style="margin-bottom:44px">${stays.map(stayCard).join("")}</div>`:"")+
(exps.length?`<p class="mono" style="margin-bottom:18px">Experiences · ${exps.length}</p><div class="xrow">${exps.map(expCard).join("")}</div>`:"")
}</div>`;
}
function accountView(){const t=state.acct;const tabs=[["profile","Profile"],["trips","Trips"],["wishlist","Wishlist"],["payment","Payment"],["prefs","Travel preferences"],["docs","Documents"],["notif","Notifications"]];
let panel="";
if(t==="profile")panel=`<div class="form-card"><h3 class="display" style="margin-bottom:22px">Profile</h3><form id="prefForm" class="frm"><div class="fld"><label>First name</label><input class="sel" value="Sofia"></div><div class="fld"><label>Last name</label><input class="sel" value="Keller"></div><div class="fld"><label>Email</label><input class="sel" value="sofia@keller.ch"></div><div class="fld"><label>Home city</label><input class="sel" value="Zurich"></div><div class="full"><p class="mut3 xs" style="font-family:var(--mono);letter-spacing:.1em;text-transform:uppercase">MORROW Circle member since 2023 · 4 trips</p><button class="btn" style="margin-top:16px">Save changes</button></div></form></div>`;
if(t==="payment")panel=`<div class="form-card"><h3 class="display" style="margin-bottom:22px">Payment methods</h3><div style="display:flex;justify-content:space-between;align-items:center;padding:17px;border:1px solid var(--line);border-radius:10px"><div><b style="font:500 14px var(--sans)">Visa ·· 4829</b><p class="mut3 xs">Expires 08/28 · Default</p></div><span class="chip on" style="cursor:default">Default</span></div><button class="btn ghost" style="margin-top:18px" data-act="toast" data-msg="Card management is handled securely at checkout.">Add payment method</button></div>`;
if(t==="prefs")panel=`<div class="form-card"><h3 class="display" style="margin-bottom:22px">Travel preferences</h3><form id="prefForm" class="frm"><div class="fld"><label>Room preference</label><select class="sel"><option>High floor</option><option>Ground floor</option><option>Corner room</option></select></div><div class="fld"><label>Bed preference</label><select class="sel"><option>King</option><option>Two queens</option><option>Twin</option></select></div><div class="fld"><label>Dietary</label><select class="sel"><option>None</option><option selected>Vegetarian</option><option>Vegan</option><option>Gluten-free</option></select></div><div class="fld"><label>Travel style</label><select class="sel"><option>Slow</option><option>Active</option><option>Design-led</option></select></div><div class="fld full"><label>Interests</label><div class="fchips">${["Food","Architecture","Nature","Wellness","Adventure","Culture"].map((c,i)=>`<button type="button" class="chip ${i<4?"on":""}" data-act="pint" data-v="${c}">${c}</button>`).join("")}</div></div><div class="fld full"><label>Favourite destinations</label><input class="sel" value="Amalfi Coast, Kyoto, Lofoten"></div><div class="full"><p class="mut3 xs">These quietly personalise your recommendations and bookings.</p><button class="btn" style="margin-top:16px">Save preferences</button></div></form></div>`;
if(t==="docs")panel=`<div class="form-card"><h3 class="display" style="margin-bottom:22px">Documents</h3>${[["Passport ·· 8821","Verified · expires 2031"],["Travel insurance · AXA ·· 118","Active"]].map(d=>`<div style="display:flex;justify-content:space-between;padding:16px 4px;border-top:1px solid var(--line)"><b style="font:500 14px var(--sans)">${d[0]}</b><span class="xs" style="color:var(--sage)">${d[1]}</span></div>`).join("")}<button class="btn ghost" style="margin-top:18px" data-act="toast" data-msg="A secure upload link has been emailed to you.">Add document</button></div>`;
if(t==="notif")panel=`<div class="form-card"><h3 class="display" style="margin-bottom:22px">Notifications</h3>${[["Trip updates","Gate changes, transfers, check-in windows",true],["Concierge messages","Replies from your concierge",true],["Offers","Rare — a few a year",false],["Journal weekly","One email, Sunday mornings",true]].map(n=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:17px 4px;border-top:1px solid var(--line)"><div><b style="font:500 14px var(--sans)">${n[0]}</b><p class="mut3 xs">${n[1]}</p></div><button class="tog ${n[2]?"on":""}" data-act="tog" aria-label="Toggle ${n[0]}"></button></div>`).join("")}</div>`;
if(t==="trips")panel=`<p class="mut sm" style="margin-bottom:18px">Your trips live in one place.</p><a class="btn" href="#/trips">Open trips ${I.arr}</a>`;
if(t==="wishlist")panel=`<a class="btn" href="#/wishlist">Open wishlist ${I.arr}</a>`;
return `<header class="phead"><div class="wrap"><p class="mono"><span class="acc-t">Account</span></p><h1 class="display">Sofia Keller</h1><p class="lede">MORROW Circle · Zurich · since 2023</p></div></header>
<div class="wrap acc-layout sec" style="padding-top:54px"><nav class="acc-nav" aria-label="Account sections">${tabs.map(x=>`<button class="${t===x[0]?"on":""}" data-act="acct" data-v="${x[0]}">${x[1]}</button>`).join("")}</nav><div>${panel}</div></div>`}
/* ================= SEARCH OVERLAY ================= */
function searchOverlay(){
  openOverlay(`
    <div class="sov-backdrop" data-act="m-close" aria-hidden="true"></div>
    <div class="sov" role="dialog" aria-modal="true" aria-label="Search">
      <div class="sov-head">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
        <input id="sovInput" placeholder="Search destinations, stays, experiences, journal…" autocomplete="off" aria-label="Search">
        <button class="sov-close" data-act="m-close" aria-label="Close search">${I.x}</button>
      </div>
      <div class="sov-body" id="sovBody">${sovResults("")}</div>
    </div>`);
  setTimeout(() => {
    const inp = document.getElementById("sovInput");
    if (inp) {
      inp.focus();
      inp.addEventListener("input", function() {
        const body = document.getElementById("sovBody");
        if (body) body.innerHTML = sovResults(this.value);
      });
    }
  }, 40);
}
function sovResults(q){q=(q||"").toLowerCase();const idx=[...DESTS.map(d=>({t:d.name,s:d.tag,type:"Destination",img:d.img,href:d.id==="amalfi"?"#/destination/amalfi":"#/stays"})),...STAYS.map(s=>({t:s.name,s:s.location,type:"Stay",img:s.img,href:"#/stay/"+s.id})),...EXPERIENCES.map(x=>({t:x.short,s:x.loc,type:"Experience",img:x.img,href:"#/experience/"+x.id})),...ARTICLES.map(a=>({t:a.title,s:a.cat,type:"Journal",img:a.img,href:"#/journal/"+a.slug}))];
const res=q?idx.filter(i=>(i.t+" "+i.s+" "+i.type).toLowerCase().includes(q)):idx.slice(0,6);
if(!res.length)return `<div class="empty" style="margin-top:10px"><h3 class="display" style="font-size:22px">Nothing found for “${q}”.</h3><p>Try “Amalfi”, “ryokan” or “sail”.</p></div>`;
const groups={};res.forEach(r=>{(groups[r.type]=groups[r.type]||[]).push(r)});
return (q?"":`<h5 style="font:600 9.5px var(--mono);letter-spacing:.24em;text-transform:uppercase;color:var(--tx3);margin-bottom:12px">Popular right now</h5><div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px">${["Amalfi Coast","Kyoto","Lofoten","Ryokan Sen","Sunset sail"].map(p=>`<button class="chip" data-act="sov-q" data-v="${p}">${p}</button>`).join("")}</div>`)+Object.keys(groups).map(g=>`<div class="sov-group"><h5>${g==="Stay"?"Stays":g==="Experience"?"Experiences":g}</h5>${groups[g].map(r=>`<a class="sov-item" href="${r.href}">${im(r.img,r.t)}<div><b>${r.t}</b><span>${r.s}</span></div></a>`).join("")}</div>`).join("")}
/* ================= OVERLAY ================= */
function openOverlay(html){$("#overlay").innerHTML=html;$("#overlay").classList.add("open");document.body.style.overflow="hidden";document.body.classList.add("overlay-open")}
function closeOverlay(){$("#overlay").classList.remove("open");$("#overlay").innerHTML="";document.body.style.overflow="";document.body.classList.remove("overlay-open");state.gal=null}
function datesModal(){const d=state.draft;openOverlay(`<div class="modal" role="dialog" aria-modal="true" aria-label="Select dates"><div class="m-card"><div class="m-head"><h3 class="display" style="font-size:22px">Select dates</h3><button class="icobtn" data-act="m-close" aria-label="Close">${I.x}</button></div>${calHTML("draft")}<div class="m-foot"><span>${d.in?dshort(d.in)+(d.out?" → "+dshort(d.out):""):"Tap a check-in date"}</span><div style="display:flex;gap:8px"><button class="btn ghost sm" data-act="dates-clear">Clear</button><button class="btn sm" data-act="dates-apply">Apply</button></div></div></div></div>`)}
function gallery(id,i){const s=STAYS.find(s=>s.id===id);const gal=s&&s.id==="casa-aurelia"?GALLERY:[[s.img,"Exterior"],[s.alt,"Interior"]];state.gal={gal,i:+i,name:s?s.name:""};renderGal()}
function renderGal(){const g=state.gal;if(!g)return;const cur=g.gal[g.i];openOverlay(`<div class="lb" role="dialog" aria-modal="true" aria-label="Photo gallery">
<div class="lb-img"><div class="im ld"><img src="${IMG[cur[0]]}" alt="${cur[1]}"></div></div>
<div class="lb-bar"><span>${g.name}</span><span>${cur[1]} · ${g.i+1} / ${g.gal.length}</span></div>
<button class="lb-ctl prev" data-act="gal-prev" aria-label="Previous image">${I.chev.replace("m9 5 7 7-7 7","m15 5-7 7 7 7")}</button>
<button class="lb-ctl next" data-act="gal-next" aria-label="Next image">${I.chev}</button>
<button class="icobtn lb-x" data-act="m-close" aria-label="Close gallery">${I.x}</button></div>`)}
/* ================= ROUTER ================= */
const RAILCH=[["now","Now"],["atlas","Somewhere"],["horizon","Atlas"],["stays","Stays"],["do","Do"],["journal","Journal"],["concierge","Concierge"]];
function buildRail(){const r=$("#rail");r.innerHTML=RAILCH.map(c=>`<button data-ch-nav="${c[0]}" aria-label="Go to ${c[1]}"><span class="rd"></span><span class="rl">${c[1]}</span></button>`).join("")}
let chObs=null;
function watchChapters(){if(chObs)chObs.disconnect();
chObs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){const id=e.target.dataset.ch;document.querySelectorAll("[data-ch-nav]").forEach(b=>b.classList.toggle("on",b.dataset.chNav===id))}})},{rootMargin:"-40% 0px -50% 0px"});
document.querySelectorAll("[data-ch]").forEach(s=>chObs.observe(s))}
let ch1Obs=null;
function watchCh1(){if(ch1Obs)ch1Obs.disconnect();
ch1Obs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){const i=e.target.dataset.ci;document.querySelectorAll(".ch1-img").forEach(m=>m.classList.toggle("on",m.dataset.ci===i))}})},{rootMargin:"-42% 0px -42% 0px"});
document.querySelectorAll(".ch1-block").forEach(b=>ch1Obs.observe(b))}
function route(){const h=location.hash.replace(/^#\/?/,"");const p=h.split("/").filter(Boolean);state.route=p[0]||"home";
$("#drawer").classList.remove("open");
closeOverlay();
forceImages();
let html="",title="MORROW — Go somewhere worth remembering.";
if(!p[0])html=homeView();
else if(p[0]==="stays"){html=staysView();title="Stays · MORROW"}
else if(p[0]==="stay"){html=stayView(p[1]);title=(STAYS.find(s=>s.id===p[1])||{}).name+" · MORROW"}
else if(p[0]==="destinations"){html=destinationsView();title="Destinations · MORROW"}
else if(p[0]==="destination"){html=destView();title="Amalfi Coast · MORROW"}
else if(p[0]==="experiences"){html=expView();title="Experiences · MORROW"}
else if(p[0]==="experience"){html=expDetailView(p[1]);title="Experiences · MORROW"}
else if(p[0]==="book"){html=bookView();title="Booking · MORROW"}
else if(p[0]==="trips"){html=tripsView();title="Your trips · MORROW"}
else if(p[0]==="trip"){html=tripView();title="Amalfi Coast trip · MORROW"}
else if(p[0]==="concierge"){html=conciergeView();title="Concierge · MORROW"}
else if(p[0]==="planner"){html=plannerView();title="Trip planner · MORROW"}
else if(p[0]==="circle"){html=circleView();title="The Circle · MORROW"}
else if(p[0]==="manifesto"){html=manifestoView();title="Manifesto · MORROW"}
else if(p[0]==="journal"){html=p[1]?articleView(p[1]):journalView();title="Journal · MORROW"}
else if(p[0]==="guide"){html=guideView();title="Kyoto guide · MORROW"}
else if(p[0]==="wishlist"){html=wishView();title="Wishlist · MORROW"}
else if(p[0]==="account"){html=accountView();title="Account · MORROW"}
else html=homeView();
document.title=title;$("#view").innerHTML=html;window.scrollTo({top:0});
document.querySelectorAll("[data-nav]").forEach(a=>a.classList.toggle("cur",a.dataset.nav===state.route));
document.querySelectorAll("[data-bn]").forEach(a=>a.classList.toggle("cur",a.dataset.bn===state.route));
$("#rail").style.display=state.route==="home"?"flex":"none";
reveal();wishBadge();initScrollBits();tickClocks();forceImages();
if(state.route==="home"){watchChapters();watchCh1();initIdx()}
if(state.route==="stays"||state.route==="destination"||state.route==="stay")requestAnimationFrame(onScroll)}
window.addEventListener("hashchange",route);
/* ================= SCROLL ENGINE ================= */
let ticking=false;
function onScroll(){if(ticking)return;ticking=true;requestAnimationFrame(()=>{ticking=false;
const sy=scrollY,vh=innerHeight,doc=document.documentElement;
$("#pbar").style.width=(sy/Math.max(1,doc.scrollHeight-vh)*100)+"%";
$("#nav").classList.toggle("solid",sy>40||state.route!=="home");
document.querySelectorAll("[data-px]").forEach(el=>{const r=el.getBoundingClientRect();if(r.bottom<0||r.top>vh)return;
const off=(r.top+r.height/2-vh/2)*parseFloat(el.dataset.px);el.style.transform=`translate3d(0,${off}px,0)`});
const rail=$("#hrail"),track=$("#hrTrack");
if(rail&&track&&innerWidth>900){const rect=rail.getBoundingClientRect();const total=Math.max(0,track.scrollWidth-innerWidth+120);
const prog=Math.min(1,Math.max(0,-rect.top/Math.max(1,rail.offsetHeight-vh)));track.style.transform=`translate3d(${-prog*total}px,0,0)`;
const bar=$("#hrBar");if(bar)bar.style.width=(prog*100)+"%"}
document.querySelectorAll("[data-count]:not(.done)").forEach(el=>{const r=el.getBoundingClientRect();if(r.top>vh||r.bottom<0)return;el.classList.add("done");
const target=parseFloat(el.dataset.count),isF=String(el.dataset.count).includes("."),t0=performance.now();
(function step(t){const k=Math.min(1,(t-t0)/1400);const v=target*(1-Math.pow(1-k,3));el.textContent=isF?v.toFixed(1):Math.round(v);if(k<1)requestAnimationFrame(step)})(t0)})})}
window.addEventListener("scroll",onScroll,{passive:true});
function initScrollBits(){const rail=$("#hrail"),track=$("#hrTrack");
if(rail&&track&&innerWidth>900){rail.style.height=(track.scrollWidth-innerWidth+innerHeight+220)+"px"}
onScroll()}
window.addEventListener("resize",initScrollBits);
/* idx preview */
function initIdx(){const list=$(".idxlist");const prev=$("#idxPrev");if(!list||!prev)return;
if(matchMedia("(pointer:coarse)").matches){prev.style.display="none";return}
list.addEventListener("mousemove",e=>{prev.style.left=Math.min(e.clientX+28,innerWidth-284)+"px";prev.style.top=Math.max(10,e.clientY-165)+"px"});
list.querySelectorAll("li").forEach(li=>{li.addEventListener("mouseenter",()=>{prev.querySelector("img").src=IMG[li.dataset.img];prev.classList.add("on")});
li.addEventListener("mouseleave",()=>prev.classList.remove("on"));
li.addEventListener("click",()=>location.hash=li.dataset.href)})}
/* soft renders */
function render(kind){const y=window.scrollY;
const map={bk:bookView,stays:staysView,experiences:expView,concierge:conciergeView,account:accountView,planner:plannerView};
if(map[kind]){$("#view").innerHTML=map[kind]();window.scrollTo({top:y});reveal();wishBadge();return}
if(kind==="exp-soft"){route();window.scrollTo({top:y});return}
if(kind==="map-soft"){document.querySelectorAll(".map-wrap").forEach(w=>{w.innerHTML=mapChips()+mapSVG()+mapPanel()});return}}
/* ================= ACTIONS ================= */
document.addEventListener("click",e=>{
const t=e.target.closest("[data-act]");if(!t)return;const a=t.dataset.act,v=t.dataset.v,id=t.dataset.id;
if(a==="menu")$("#drawer").classList.add("open");
if(a==="close-drawer")$("#drawer").classList.remove("open");
if(a==="open-search")searchOverlay();
if(a==="m-close")closeOverlay();
if(a==="sov-q"){$("#sovInput").value=v;$("#sovBody").innerHTML=sovResults(v)}
if(a==="save"){const on=state.wish.has(id);on?state.wish.delete(id):state.wish.add(id);persist();wishBadge();
 t.classList.add("pop");setTimeout(()=>t.classList.remove("pop"),400);
 if(t.classList.contains("savebtn")){t.classList.toggle("on",!on);t.setAttribute("aria-pressed",String(!on))}
 toast(!on?"Saved to wishlist":"Removed from wishlist",!on?"♥":"×");if(state.route==="wishlist")route()}
if(a==="open-gallery")gallery(id,t.dataset.i);
if(a==="gal-prev"){state.gal.i=(state.gal.i-1+state.gal.gal.length)%state.gal.gal.length;renderGal()}
if(a==="gal-next"){state.gal.i=(state.gal.i+1)%state.gal.gal.length;renderGal()}
if(a==="open-dates"){state.datesCtx=v;const src=v==="bk"?state.bk:v==="hero"?state.hero:state.f;state.draft={in:src.in||null,out:src.out||null,cal:new Date((src.in||new Date(2026,8,18)).getFullYear(),(src.in||new Date(2026,8,18)).getMonth(),1)};datesModal()}
if(a==="cal-prev"||a==="cal-next"){const d=t.dataset.src==="draft"?state.draft:state.bk;d.cal=new Date(d.cal.getFullYear(),d.cal.getMonth()+(a==="cal-next"?1:-1),1);t.dataset.src==="draft"?datesModal():render("bk")}
if(a==="pickday"){const dt=new Date(+t.dataset.ts);const d=t.dataset.src==="draft"?state.draft:state.bk;
 if(!d.in||(d.in&&d.out)){d.in=dt;d.out=null}else if(dt>d.in)d.out=dt;else{d.in=dt;d.out=null}
 t.dataset.src==="draft"?datesModal():render("bk")}
if(a==="dates-clear"){state.draft.in=null;state.draft.out=null;datesModal()}
if(a==="dates-apply"){const c=state.datesCtx;const tgt=c==="bk"?state.bk:c==="hero"?state.hero:state.f;tgt.in=state.draft.in;tgt.out=state.draft.out;closeOverlay();
 if(c==="bk"){state.avail=false;render("bk");setTimeout(()=>{state.avail=true;const el=$("#bcAvail");if(el)el.innerHTML=`<div style="border-top:1px solid var(--line);padding-top:12px"><div class="sumline"><span>${nights()} nights · Sea View Room</span><span>${fmt(620*Math.max(nights(),0))}</span></div><p class="xs mut3">Free cancellation until Sep 11</p></div>`},750)}else route()}
if(a==="gpop"){e.stopPropagation();$("#gpop").classList.toggle("open")}
if(a.startsWith("g-a")){state.hero.g.a=Math.min(6,Math.max(1,state.hero.g.a+(a.endsWith("+")?1:-1)));const l=$("#gLbl");if(l)l.textContent=(state.hero.g.a+state.hero.g.c)+" guests";const p=$("#gpop");if(p)p.innerHTML=grow("Adults","a")+grow("Children","c")}
if(a.startsWith("g-c")){state.hero.g.c=Math.min(4,Math.max(0,state.hero.g.c+(a.endsWith("+")?1:-1)));const l=$("#gLbl");if(l)l.textContent=(state.hero.g.a+state.hero.g.c)+" guests";const p=$("#gpop");if(p)p.innerHTML=grow("Adults","a")+grow("Children","c")}
if(a==="fg-")state.f.guests=Math.max(1,state.f.guests-1),render("stays");
if(a==="fg+")state.f.guests=Math.min(8,state.f.guests+1),render("stays");
if(a==="bg-")state.bk.guests=Math.max(1,state.bk.guests-1),(state.route==="book"?render("bk"):route());
if(a==="bg+")state.bk.guests=Math.min(3,state.bk.guests+1),(state.route==="book"?render("bk"):route());
if(a==="eg-")state.exp.g=Math.max(1,state.exp.g-1),render("exp-soft");
if(a==="eg+")state.exp.g=Math.min(6,state.exp.g+1),render("exp-soft");
if(a==="fcat")state.f.cat=v,render("stays");
if(a==="famen"){const i=state.f.amen.indexOf(v);i<0?state.f.amen.push(v):state.f.amen.splice(i,1);render("stays")}
if(a==="fset"){const i=state.f.setting.indexOf(v);i<0?state.f.setting.push(v):state.f.setting.splice(i,1);render("stays")}
if(a==="clear-f"){Object.assign(state.f,{where:"",amen:[],setting:[],max:1300,cat:"all"});render("stays")}
if(a==="show-map")$("#staysLayout").classList.add("showmap");
if(a==="show-list")$("#staysLayout").classList.remove("showmap");
if(a==="mcat"){state.mapCats.has(v)?state.mapCats.delete(v):state.mapCats.add(v);state.mapSel=null;render("map-soft")}
if(a==="poi")state.mapSel=id,render("map-soft");
if(a==="poi-close")state.mapSel=null,render("map-soft");
if(a==="poi-add")toast("Added to your Amalfi trip draft");
if(a==="scroll-rooms"){const r=$("#rooms");r?r.scrollIntoView({behavior:"smooth"}):location.hash="#/book"}
if(a==="select-room"){state.bk.room=id;location.hash="#/book"}
if(a==="pick-room")state.bk.room=id,render("bk");
if(a==="bk-next"){state.bk.step=Math.min(5,state.bk.step+1);render("bk")}
if(a==="bk-back"){state.bk.step=Math.max(1,state.bk.step-1);state.bk.payErr=false;render("bk")}
if(a==="paym")state.bk.pay=v,render("bk");
if(a==="bk-pay"){if(state.bk.paying)return;const cc=$("#ccNum");if(cc&&cc.value.replace(/\s/g,"").startsWith("0000")){state.bk.payErr=true;render("bk");return}
 state.bk.paying=true;const b=$("#payBtn");if(b)b.innerHTML='<span class="spin"></span> Processing…';setTimeout(()=>{state.bk.paying=false;state.bk.step=5;render("bk");toast("Booking confirmed — MORROW-48291")},1100)}
if(a==="exp-date")state.exp.date=+v,render("exp-soft");
if(a==="exp-time")state.exp.time=+v,render("exp-soft");
if(a==="exp-reserve"){toast("Reserved — added to your trip");const el=$("#expBook");if(el&&!el.querySelector(".errbox"))el.insertAdjacentHTML("beforeend",`<div class="errbox" style="background:rgba(92,102,71,.16);border-color:rgba(92,102,71,.5);margin-top:14px"><p style="margin:0"><b>Reserved.</b> See it under Trips → Amalfi Coast.</p></div>`)}
if(a==="excat")state.excat=v,render("experiences");
if(a==="jcat")toast(v==="All"?"Showing all stories":"Filtered to "+v);
if(a==="csvc"){const i=state.conc.svc.indexOf(v);i<0?state.conc.svc.push(v):state.conc.svc.splice(i,1);render("concierge")}
if(a==="conc-again")state.conc.sent=false,render("concierge");
if(a==="pint")t.classList.toggle("on");
if(a==="plan-save")toast("Trip saved to your trips");
if(a==="plan-share")toast("Share link copied to clipboard");
if(a==="plan-edit")toast("Concierge will call to refine the draft");
if(a==="acct")state.acct=v,render("account");
if(a==="tog")t.classList.toggle("on"),toast(t.classList.contains("on")?"Notifications on":"Notifications off");
if(a==="toast")toast(t.dataset.msg);
if(a==="rebook"){state.bk.step=1;location.hash="#/book"}
const ch=e.target.closest("[data-ch-nav]");
if(ch){const sec=document.querySelector(`[data-ch="${ch.dataset.chNav}"]`);sec&&sec.scrollIntoView({behavior:"smooth"})}
});
document.addEventListener("submit",e=>{e.preventDefault();const id=e.target.id;
if(id==="heroSearch"){state.hero.where=$("#hWhere").value;state.f.where=$("#hWhere").value;location.hash="#/stays"}
if(id==="guestForm"){e.target.querySelectorAll("[data-x]").forEach(c=>state.bk.x[c.dataset.x]=c.checked);state.bk.step=4;render("bk")}
if(id==="conciergeForm"){state.conc.sent=true;render("concierge");toast("Request sent to your concierge")}
if(id==="planForm"){state.planLoading=true;render("planner");const dest=$("#plDest")?$("#plDest").value:"Kyoto";const ints=[...document.querySelectorAll("#plInt .chip.on")].map(c=>c.dataset.v);
 setTimeout(()=>{state.planLoading=false;state.plan=dest==="Kyoto"?PLANS.kyoto:dest==="Amalfi Coast"?PLANS.amalfi:PLANS._generic(dest,ints);render("planner")},950)}
if(id==="prefForm")toast("Saved");
if(id==="newsForm"){e.target.querySelector("input").value="";toast("Welcome to the Sunday letter")}});
document.addEventListener("change",e=>{
if(e.target.id==="fPrice"){state.f.max=+e.target.value;render("stays")}
if(e.target.id==="fSort"){state.f.sort=e.target.value;render("stays")}
if(e.target.id==="fWhere"){state.f.where=e.target.value;render("stays")}
if(e.target.id==="currSel"){state.currency=e.target.value;route();toast("Prices now shown in "+e.target.value)}
if(e.target.id==="langSel")toast("Interface language updated");
if(e.target.dataset&&e.target.dataset.x){state.bk.x[e.target.dataset.x]=e.target.checked;render("bk")}
if(e.target.dataset&&e.target.dataset.eadd){const k=e.target.dataset.eadd;const i=state.exp.add.indexOf(k);i<0?state.exp.add.push(k):state.exp.add.splice(i,1);render("exp-soft")}});
document.addEventListener("keydown",e=>{
if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"){e.preventDefault();searchOverlay()}
if(e.key==="Escape"){if($("#overlay").classList.contains("open"))closeOverlay();$("#drawer").classList.remove("open");const g=$("#gpop");g&&g.classList.remove("open")}
if($("#overlay").classList.contains("open")&&state.gal){if(e.key==="ArrowLeft"){state.gal.i=(state.gal.i-1+state.gal.gal.length)%state.gal.gal.length;renderGal()}if(e.key==="ArrowRight"){state.gal.i=(state.gal.i+1)%state.gal.gal.length;renderGal()}}});
document.addEventListener("click",e=>{const g=$("#gpop");if(g&&!e.target.closest("#gpop")&&!e.target.closest('[data-act="gpop"]'))g.classList.remove("open")});
/* ================= INIT ================= */
buildRail();route();
(function loader(){const rm=matchMedia("(prefers-reduced-motion: reduce)").matches;
if(rm){$("#loader").classList.add("done");document.body.classList.add("loaded");return}
let n=0;const t=setInterval(()=>{n=Math.min(100,n+Math.ceil(Math.random()*9));
$("#lcount").textContent=String(n).padStart(2,"0");$("#lbar").style.width=n+"%";
if(n>=100){clearInterval(t);setTimeout(()=>{$("#loader").classList.add("done");document.body.classList.add("loaded")},220)}},52)})();
