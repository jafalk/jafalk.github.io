/* looplo.com/wp.js - white paper-popup med klient-side kryptering.
   Sprog vaelges automatisk ud fra <html lang>. modtag.php skal ligge ved siden af denne fil. */
(function(){
var PUB="MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAkXtC2ve86glLlz4052w0Vj28S2zvkq4M0/jDSF0SiQ439JyDFVtCvznJ83XV1g29INH2PTYaTyp0GxMt1F1+la1vCJfe+3Z1lJExMOt2+XD6ZPZZYfrJiPbgOOryyeVmtkdHfm2n+KzN/to+kDNu2b62eE30rC933tofJaJnTc0/rfX9MDg9N00o7L6XRnMLaoO0pqij5mhNlWBFWav1+yqcb90EEyYuFDo63GIQEZFX/ztQsOeFSzhd4VWL8G50U9hDkHhSraLket+XmsyVE2OVW3gBhgGaM69NnV/cEg/1W+pYRhMVwdsOzntK3jJAI68w8dMOVpzyS9rtWLzI50tw2Np9XSzxIoZBcHB4VY665+B1TVjh2jrZE/JWnRvmQLl6C1b3BVmkQv+vcBMh7oq0Lz36eqQzTbX+R/yya6uEpN5npdAm9B2nwE0iK9pAbeYmvT53VM92/SchG81u84qZe8u8rFpfrBqZUD9iRZapB5hz09sqLQ7oxEdqfPMVs6fZFeks+Cd/I7OVS3Oj+rnSBNzuBmFn6WSgPhHAc1aXR1EJCjf7DezWeFznMPpfq512KFCDmqUuohOjtmtECnvvef8yMFaMbu5m+JQ33n/tHWTGeuNT0nIrVVyZp6ERtLsBSnM0TaT/qLhSTx0BvXnWCf5hItQJMyN5gKbLuHUCAwEAAQ==";

var IND=[
 {v:"AI i produktion, ikke kun pilot",
  t:{da:"Vi vil have vores AI-initiativer i produktion, ikke kun i pilot",
     en:"We want our AI initiatives in production, not just in pilot",
     de:"Wir wollen unsere KI-Initiativen in der Produktion, nicht nur im Pilotbetrieb",
     nl:"We willen onze AI-initiatieven in productie, niet alleen in pilot",
     no:"Vi vil ha AI-initiativene våre i produksjon, ikke bare i pilot",
     sv:"Vi vill ha våra AI-initiativ i produktion, inte bara i pilot"}},
 {v:"Mindre tid paa koordinering paa tvaers",
  t:{da:"Vi vil bruge mindre tid på koordinering på tværs",
     en:"We want to spend less time on cross-cutting coordination",
     de:"Wir wollen weniger Zeit für bereichsübergreifende Koordination aufwenden",
     nl:"We willen minder tijd besteden aan overkoepelende coördinatie",
     no:"Vi vil bruke mindre tid på koordinering på tvers",
     sv:"Vi vill lägga mindre tid på koordinering på tvären"}},
 {v:"Faelles begreber paa tvaers af afdelinger",
  t:{da:"Vi vil have fælles begreber, der holder på tværs af afdelinger",
     en:"We want shared definitions that hold across departments",
     de:"Wir wollen gemeinsame Begriffe, die abteilungsübergreifend tragen",
     nl:"We willen gedeelde begrippen die standhouden tussen afdelingen",
     no:"Vi vil ha felles begreper som holder på tvers av avdelinger",
     sv:"Vi vill ha gemensamma begrepp som håller över avdelningar"}},
 {v:"Dokumentere ansvarsplacering naar der spoerges",
  t:{da:"Vi vil kunne dokumentere ansvarsplacering, når der bliver spurgt",
     en:"We want to be able to document accountability when asked",
     de:"Wir wollen die Verantwortungszuordnung belegen können, wenn gefragt wird",
     nl:"We willen verantwoordelijkheid kunnen aantonen wanneer ernaar gevraagd wordt",
     no:"Vi vil kunne dokumentere ansvarsplassering når det blir spurt",
     sv:"Vi vill kunna dokumentera ansvarsplacering när frågan kommer"}},
 {v:"Kende leverandoerafhaengighed i tal",
  t:{da:"Vi vil kende vores leverandørafhængighed i tal",
     en:"We want our supplier dependency quantified",
     de:"Wir wollen unsere Lieferantenabhängigkeit in Zahlen kennen",
     nl:"We willen onze leveranciersafhankelijkheid in cijfers kennen",
     no:"Vi vil kjenne leverandøravhengigheten vår i tall",
     sv:"Vi vill känna vårt leverantörsberoende i siffror"}},
 {v:"Se sammenhaengen mellem omraaderne",
  t:{da:"Vi vil se sammenhængen mellem områderne, ikke kun status for hvert",
     en:"We want to see how the areas connect, not just the status of each",
     de:"Wir wollen den Zusammenhang zwischen den Bereichen sehen, nicht nur den Status je Bereich",
     nl:"We willen de samenhang tussen de gebieden zien, niet alleen de status per gebied",
     no:"Vi vil se sammenhengen mellom områdene, ikke bare status for hvert",
     sv:"Vi vill se sambandet mellan områdena, inte bara status för vart och ett"}},
 {v:"Samlet billede ved ny ledelse eller ny strategi",
  t:{da:"Ny ledelse eller ny strategi - vi vil have et samlet billede",
     en:"New leadership or new strategy - we want a single overall picture",
     de:"Neue Führung oder neue Strategie - wir wollen ein Gesamtbild",
     nl:"Nieuwe leiding of nieuwe strategie - we willen een totaalbeeld",
     no:"Ny ledelse eller ny strategi - vi vil ha et samlet bilde",
     sv:"Ny ledning eller ny strategi - vi vill ha en samlad bild"}}
];

var DOK=[
 {v:"Kobling white paper",k:"wp1",
  t:{da:["Kobling","white paper: Værdien ligger i koblingerne"],en:["Coupling","white paper: Value Lives in the Couplings"],de:["Kopplung","White Paper: Der Wert liegt in den Kopplungen"],nl:["Koppeling","white paper: De waarde zit in de koppelingen"],no:["Kobling","white paper: Verdien ligger i koblingene"],sv:["Koppling","white paper: Värdet ligger i kopplingarna"]}},
 {v:"Enterprise AI white paper",k:"wp2",
  t:{da:["Enterprise AI","white paper: Modellen ved ikke, hvad I mener"],en:["Enterprise AI","white paper: The Model Does Not Know What You Mean"],de:["Enterprise AI","White Paper: Das Modell weiß nicht, was Sie meinen"],nl:["Enterprise AI","white paper: Het model weet niet wat u bedoelt"],no:["Enterprise AI","white paper: Modellen vet ikke hva dere mener"],sv:["Enterprise AI","white paper: Modellen vet inte vad ni menar"]}},
 {v:"Kobling exec summary",k:"ex1",fil:"materiale/Looplo_exec_summary_Kobling.pdf",filEn:"materiale/Looplo_exec_summary_Kobling_EN.pdf",
  t:{da:["Kobling","exec summary: Modenhed og koblinger"],en:["Coupling","exec summary: Maturity and couplings"],de:["Kopplung","Exec Summary: Reife und Kopplungen"],nl:["Koppeling","exec summary: Volwassenheid en koppelingen"],no:["Kobling","exec summary: Modenhet og koblinger"],sv:["Koppling","exec summary: Mognad och kopplingar"]}},
 {v:"Enterprise AI exec summary",k:"ex2",fil:"materiale/Looplo_exec_summary_EnterpriseAI.pdf",filEn:"materiale/Looplo_exec_summary_EnterpriseAI_EN.pdf",
  t:{da:["Enterprise AI","exec summary: Ansvarlig AI"],en:["Enterprise AI","exec summary: Responsible AI"],de:["Enterprise AI","Exec Summary: Verantwortungsvolle KI"],nl:["Enterprise AI","exec summary: Verantwoorde AI"],no:["Enterprise AI","exec summary: Ansvarlig AI"],sv:["Enterprise AI","exec summary: Ansvarsfull AI"]}}
];

var T={
 da:{h:"Få vores materiale",s:"Udfyld, så sender vi det.",navn:"Navn",mail:"Email",li:"LinkedIn-profil",hint:"Udfyld mindst én, så vi kan sende dig materialet.",rolle:"Rolle",titel:"Titel / andet",arb:"Arbejder med eller overvejer",dok:"Hvad vil du have tilsendt?",sam:"Ja tak, I må sende mig materialet og kontakte mig om det.",send:"Send",sender:"Sender...",annul:"Annuller",eNavn:"Skriv dit navn.",eKontakt:"Udfyld email eller LinkedIn - mindst én.",eMail:"Skriv en gyldig email.",eRolle:"Vælg din rolle.",eDok:"Vælg mindst ét dokument.",eSam:"Sæt flueben i samtykke.",eFejl:"Kunne ikke sende lige nu. Prøv igen senere.",okH:"Tak!",okS:"Anmodningen er sendt krypteret. Vi vender tilbage med materialet.",aaben:"Åben for download",hent:"Download",efter:"White paper eftersendes pr. mail.",luk:"Luk"},
 en:{h:"Get our material",s:"Fill in and we will send it.",navn:"Name",mail:"Email",li:"LinkedIn profile",hint:"Fill in at least one so we can send you the material.",rolle:"Role",titel:"Title / other",arb:"Working on or considering",dok:"What would you like to receive?",sam:"Yes, you may send me the material and contact me about it.",send:"Send",sender:"Sending...",annul:"Cancel",eNavn:"Enter your name.",eKontakt:"Enter email or LinkedIn - at least one.",eMail:"Enter a valid email.",eRolle:"Choose your role.",eDok:"Choose at least one document.",eSam:"Please tick consent.",eFejl:"Could not send right now. Please try again later.",okH:"Thank you!",okS:"Your request was sent encrypted. We will get back to you with the material.",aaben:"Open for download",hent:"Download",efter:"The white paper follows by email.",luk:"Close"},
 de:{h:"Unser Material erhalten",s:"Ausfüllen, wir senden es Ihnen zu.",navn:"Name",mail:"E-Mail",li:"LinkedIn-Profil",hint:"Mindestens eines ausfüllen, damit wir das Material senden können.",rolle:"Rolle",titel:"Titel / anderes",arb:"Beschäftigt sich mit oder erwägt",dok:"Was möchten Sie erhalten?",sam:"Ja, Sie dürfen mir das Material senden und mich dazu kontaktieren.",send:"Senden",sender:"Wird gesendet...",annul:"Abbrechen",eNavn:"Bitte Namen eingeben.",eKontakt:"E-Mail oder LinkedIn angeben - mindestens eines.",eMail:"Bitte gültige E-Mail eingeben.",eRolle:"Bitte Rolle wählen.",eDok:"Bitte mindestens ein Dokument wählen.",eSam:"Bitte Einwilligung ankreuzen.",eFejl:"Senden derzeit nicht möglich. Bitte später erneut versuchen.",okH:"Danke!",okS:"Ihre Anfrage wurde verschlüsselt gesendet. Wir melden uns mit dem Material.",aaben:"Frei zum Download",hent:"Download",efter:"Das White Paper folgt per E-Mail.",luk:"Schließen"},
 nl:{h:"Ontvang ons materiaal",s:"Vul in, dan sturen we het toe.",navn:"Naam",mail:"E-mail",li:"LinkedIn-profiel",hint:"Vul er minstens één in zodat we het materiaal kunnen sturen.",rolle:"Rol",titel:"Functie / anders",arb:"Werkt aan of overweegt",dok:"Wat wilt u ontvangen?",sam:"Ja, u mag mij het materiaal sturen en hierover contact opnemen.",send:"Versturen",sender:"Bezig...",annul:"Annuleren",eNavn:"Vul uw naam in.",eKontakt:"Vul e-mail of LinkedIn in - minstens één.",eMail:"Vul een geldig e-mailadres in.",eRolle:"Kies uw rol.",eDok:"Kies minstens één document.",eSam:"Vink toestemming aan.",eFejl:"Versturen lukt nu niet. Probeer het later opnieuw.",okH:"Dank u!",okS:"Uw aanvraag is versleuteld verzonden. We komen bij u terug met het materiaal.",aaben:"Vrij te downloaden",hent:"Download",efter:"De white paper volgt per e-mail.",luk:"Sluiten"},
 no:{h:"Få materialet vårt",s:"Fyll ut, så sender vi det.",navn:"Navn",mail:"E-post",li:"LinkedIn-profil",hint:"Fyll ut minst én, så vi kan sende deg materialet.",rolle:"Rolle",titel:"Tittel / annet",arb:"Jobber med eller vurderer",dok:"Hva vil du få tilsendt?",sam:"Ja takk, dere kan sende meg materialet og kontakte meg om det.",send:"Send",sender:"Sender...",annul:"Avbryt",eNavn:"Skriv navnet ditt.",eKontakt:"Fyll ut e-post eller LinkedIn - minst én.",eMail:"Skriv en gyldig e-post.",eRolle:"Velg rollen din.",eDok:"Velg minst ett dokument.",eSam:"Kryss av for samtykke.",eFejl:"Kunne ikke sende nå. Prøv igjen senere.",okH:"Takk!",okS:"Forespørselen ble sendt kryptert. Vi kommer tilbake med materialet.",aaben:"Åpen for nedlasting",hent:"Last ned",efter:"White paper ettersendes pr. e-post.",luk:"Lukk"},
 sv:{h:"Få vårt material",s:"Fyll i, så skickar vi det.",navn:"Namn",mail:"E-post",li:"LinkedIn-profil",hint:"Fyll i minst en, så vi kan skicka materialet.",rolle:"Roll",titel:"Titel / annat",arb:"Arbetar med eller överväger",dok:"Vad vill du få skickat?",sam:"Ja tack, ni får skicka mig materialet och kontakta mig om det.",send:"Skicka",sender:"Skickar...",annul:"Avbryt",eNavn:"Skriv ditt namn.",eKontakt:"Fyll i e-post eller LinkedIn - minst en.",eMail:"Skriv en giltig e-post.",eRolle:"Välj din roll.",eDok:"Välj minst ett dokument.",eSam:"Kryssa i samtycke.",eFejl:"Kunde inte skicka just nu. Försök igen senare.",okH:"Tack!",okS:"Din förfrågan skickades krypterad. Vi återkommer med materialet.",aaben:"Öppen för nedladdning",hent:"Ladda ner",efter:"White paper skickas efter via e-post.",luk:"Stäng"}
};

var lang=(document.documentElement.lang||"da").slice(0,2).toLowerCase();
if(!T[lang])lang="da";
var t=T[lang];

// modtag.php ligger ved siden af denne fil
var me=document.currentScript?document.currentScript.src:"";
var BASE=me?me.replace(/[^\/]*$/,""):"";
var ENDPOINT=BASE+"modtag.php";

var css='.lwp-ov{position:fixed;inset:0;background:rgba(15,46,54,.55);display:none;align-items:flex-start;justify-content:center;padding:20px;z-index:9999;overflow-y:auto}'
+'.lwp-ov.open{display:flex}.lwp-m{background:#EEF1EE;color:#0F2E36;border-radius:16px;max-width:460px;width:100%;padding:26px;margin:auto;box-shadow:0 24px 60px rgba(0,0,0,.28);font-family:"IBM Plex Sans",system-ui,sans-serif;line-height:1.55}'
+'.lwp-m h3{font-family:"Space Grotesk",system-ui;font-weight:700;font-size:22px;margin:0 0 4px;color:#0F2E36}'
+'.lwp-sub{margin:0 0 18px;color:#3C5760;font-size:14px}.lwp-f{margin:0 0 13px}.lwp-f label{display:block;font-size:13px;font-weight:600;margin:0 0 5px}'
+'.lwp-f input{width:100%;padding:11px 13px;border:1px solid rgba(15,46,54,.14);border-radius:9px;font:inherit;font-size:15px;background:#fff;color:#0F2E36;box-sizing:border-box}'
+'.lwp-g{font-family:"Space Grotesk",system-ui;font-weight:600;font-size:14px;margin:16px 0 8px}'
+'.lwp-r{display:flex;gap:8px;flex-wrap:wrap}.lwp-r label{flex:1;min-width:88px;text-align:center;border:1px solid rgba(15,46,54,.14);border-radius:9px;padding:9px 6px;font-size:14px;cursor:pointer;background:#fff}'
+'.lwp-r input{display:none}.lwp-r input:checked+span{font-weight:600;color:#C2791C}'
+'.lwp-c{display:flex;gap:9px;align-items:flex-start;margin:0 0 7px;font-size:13.5px;color:#3C5760;cursor:pointer;line-height:1.4}'
+'.lwp-c input{margin-top:2px;flex:none;width:16px;height:16px;accent-color:#C2791C}.lwp-c b{color:#0F2E36;font-weight:600}'
+'.lwp-a{display:flex;gap:10px;margin-top:18px}.lwp-send{flex:1;background:#C2791C;color:#fff;border:none;border-radius:10px;padding:12px 20px;font-family:"Space Grotesk",system-ui;font-weight:600;font-size:15px;cursor:pointer}'
+'.lwp-x{background:none;border:1px solid rgba(15,46,54,.14);color:#0F2E36;border-radius:10px;padding:12px 18px;font-family:"Space Grotesk",system-ui;font-weight:600;font-size:15px;cursor:pointer}'
+'.lwp-e{color:#b23b2e;font-size:13px;margin:8px 0 0;display:none}.lwp-ok{display:none;text-align:center;padding:8px 0}'
+'.lwp-hr{border:none;border-top:1px solid rgba(15,46,54,.14);margin:16px 0 4px}.lwp-hint{margin:6px 0 0;font-size:12.5px;color:#8FA9A6}';

function esc(x){return String(x).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}

var built=false,ov;
function build(){
 if(built)return;built=true;
 var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
 var ih='';
 IND.forEach(function(o,i){ih+='<label class="lwp-c"><input type="checkbox" class="lwp-ind" data-v="'+esc(o.v)+'"> <span>'+esc(o.t[lang]||o.t.da)+'</span></label>';});
 var dh='';
 var execVist=false;
 DOK.forEach(function(o,i){var tr=o.t[lang]||o.t.da;var forvalgt=(i===0||o.fil)?' checked':'';
   if(o.fil && !execVist){execVist=true;dh+='<div class="lwp-g" style="margin:14px 0 7px">'+esc(t.aaben)+'</div>';}
   dh+='<label class="lwp-c"><input type="checkbox" class="lwp-dok" data-v="'+esc(o.v)+'"'+forvalgt+'> <span><b>'+esc(tr[0])+'</b> - '+esc(tr[1])+'</span></label>';});
 ov=document.createElement('div');ov.className='lwp-ov';
 ov.innerHTML='<div class="lwp-m" role="dialog" aria-modal="true"><div class="lwp-form">'
 +'<h3>'+esc(t.h)+'</h3><p class="lwp-sub">'+esc(t.s)+'</p>'
 +'<div class="lwp-f"><label>'+esc(t.navn)+'</label><input type="text" class="lwp-navn" autocomplete="name"></div>'
 +'<div class="lwp-f"><label>'+esc(t.mail)+'</label><input type="email" class="lwp-mail" autocomplete="email"></div>'
 +'<div class="lwp-f"><label>'+esc(t.li)+'</label><input type="text" class="lwp-li" placeholder="linkedin.com/in/..."><p class="lwp-hint">'+esc(t.hint)+'</p></div>'
 +'<div class="lwp-g">'+esc(t.rolle)+'</div><div class="lwp-r">'
 +'<label><input type="radio" name="lwprolle" value="Board"><span>Board</span></label>'
 +'<label><input type="radio" name="lwprolle" value="Boss"><span>Boss</span></label>'
 +'<label><input type="radio" name="lwprolle" value="Consultant"><span>Consultant</span></label></div>'
 +'<input type="text" class="lwp-rt" placeholder="'+esc(t.titel)+'" style="width:100%;margin-top:8px;padding:11px 13px;border:1px solid rgba(15,46,54,.14);border-radius:9px;font:inherit;font-size:15px;background:#fff;box-sizing:border-box">'
 +'<div class="lwp-g">'+esc(t.arb)+'</div>'+ih
 +'<hr class="lwp-hr"><div class="lwp-g">'+esc(t.dok)+'</div>'+dh
 +'<label class="lwp-c" style="margin-top:10px"><input type="checkbox" class="lwp-sam"> <span><b>'+esc(t.sam)+'</b></span></label>'
 +'<p class="lwp-e"></p><div class="lwp-a"><button type="button" class="lwp-x">'+esc(t.annul)+'</button>'
 +'<button type="button" class="lwp-send">'+esc(t.send)+'</button></div></div>'
 +'<div class="lwp-ok"><h3>'+esc(t.okH)+'</h3><p class="lwp-sub">'+esc(t.okS)+'</p>'
 +'<div class="lwp-hent"></div>'
 +'<button type="button" class="lwp-x" style="width:100%">'+esc(t.luk)+'</button></div></div>';
 document.body.appendChild(ov);
 ov.addEventListener('click',function(e){if(e.target===ov)close();});
 ov.querySelectorAll('.lwp-x').forEach(function(b){b.addEventListener('click',close);});
 ov.querySelector('.lwp-send').addEventListener('click',submit);
 var rt=ov.querySelector('.lwp-rt');
 rt.addEventListener('input',function(){if(this.value.trim()){var r=ov.querySelector('input[name=lwprolle]:checked');if(r)r.checked=false;}});
 ov.querySelectorAll('input[name=lwprolle]').forEach(function(rb){rb.addEventListener('change',function(){if(this.checked)rt.value='';});});
}
function close(){if(!ov)return;ov.classList.remove('open');ov.querySelector('.lwp-form').style.display='block';
 ov.querySelector('.lwp-ok').style.display='none';ov.querySelector('.lwp-e').style.display='none';}

function b64b(b){var s=atob(b),u=new Uint8Array(s.length);for(var i=0;i<s.length;i++)u[i]=s.charCodeAt(i);return u.buffer;}
function bb64(b){var u=new Uint8Array(b),s='';for(var i=0;i<u.length;i++)s+=String.fromCharCode(u[i]);return btoa(s);}

async function send(obj){
 var pt=new TextEncoder().encode(JSON.stringify(obj));
 var k=await crypto.subtle.generateKey({name:'AES-GCM',length:256},true,['encrypt']);
 var iv=crypto.getRandomValues(new Uint8Array(12));
 var ct=await crypto.subtle.encrypt({name:'AES-GCM',iv:iv},k,pt);
 var pub=await crypto.subtle.importKey('spki',b64b(PUB),{name:'RSA-OAEP',hash:'SHA-256'},false,['encrypt']);
 var ek=await crypto.subtle.encrypt({name:'RSA-OAEP'},pub,await crypto.subtle.exportKey('raw',k));
 var r=await fetch(ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json'},
   body:JSON.stringify({ek:bb64(ek),iv:bb64(iv),ct:bb64(ct)})});
 if(!r.ok)throw new Error('HTTP '+r.status);
 var j=await r.json();if(!j.ok)throw new Error('afvist');
}

function submit(){
 var e=ov.querySelector('.lwp-e');
 function fail(m){e.textContent=m;e.style.display='block';}
 var navn=ov.querySelector('.lwp-navn').value.trim();
 var mail=ov.querySelector('.lwp-mail').value.trim();
 var li=ov.querySelector('.lwp-li').value.trim();
 var rEl=ov.querySelector('input[name=lwprolle]:checked');
 var rt=ov.querySelector('.lwp-rt').value.trim();
 var rolle=rEl?rEl.value:rt;
 var ind=[].slice.call(ov.querySelectorAll('.lwp-ind:checked')).map(function(c){return c.dataset.v;});
 var dok=[].slice.call(ov.querySelectorAll('.lwp-dok:checked')).map(function(c){return c.dataset.v;});
 var sam=ov.querySelector('.lwp-sam').checked;
 if(!navn)return fail(t.eNavn);
 if(!mail&&!li)return fail(t.eKontakt);
 if(mail&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(mail))return fail(t.eMail);
 if(!rolle)return fail(t.eRolle);
 if(!dok.length)return fail(t.eDok);
 if(!sam)return fail(t.eSam);
 var b=ov.querySelector('.lwp-send');b.disabled=true;b.textContent=t.sender;
 send({navn:navn,email:mail,linkedin:li,rolle:rolle,indgange:ind,oensker:dok,
   samtykke:true,sprog:lang,side:location.pathname,tid:new Date().toISOString()})
 .then(function(){
   var ok=ov.querySelector('.lwp-ok'), boks=ok.querySelector('.lwp-hent');
   boks.innerHTML='';
   var valgteEx=DOK.filter(function(o){return o.fil && dok.indexOf(o.v)>-1;});
   if(valgteEx.length){
     var h=document.createElement('div');h.className='lwp-g';h.style.marginTop='4px';
     h.textContent=t.hent;boks.appendChild(h);
     valgteEx.forEach(function(o){
       var tr=o.t[lang]||o.t.da;
       var a=document.createElement('a');
       a.className='lwp-send';a.style.display='block';a.style.margin='0 0 8px';
       a.style.textDecoration='none';a.href=BASE+((lang!=='da' && o.filEn) ? o.filEn : o.fil);a.target='_blank';a.rel='noopener';
       var kunDa = (lang!=='da' && !o.filEn);
       a.textContent=tr[0]+' - PDF'+(kunDa?' (dansk)':'');
       boks.appendChild(a);
     });
   }
   if(dok.some(function(v){return v.indexOf('white paper')>-1;})){
     var p=document.createElement('p');p.className='lwp-sub';p.style.margin='6px 0 0';
     p.textContent=t.efter;boks.appendChild(p);
   }
   ov.querySelector('.lwp-form').style.display='none';ok.style.display='block';})
 .catch(function(err){b.disabled=false;b.textContent=t.send;fail(t.eFejl);console.error(err);});
}

window.looploWP=function(){build();ov.classList.add('open');};
})();
