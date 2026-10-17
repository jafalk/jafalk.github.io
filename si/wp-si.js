/* looplo.si/wp-si.js - henvendelses-popup med materiale-valg (tre saet).
   Genbrug af looplo.com/wp.js: samme OFFENTLIGE noegle, samme kryptering
   (AES-256-GCM + RSA-OAEP SHA-256), samme POST-format {ek,iv,ct} til modtag.php.
   Den private noegle er IKKE her. modtag.php + materiale/ ligger ved siden af.
   Global: looploSI(). */
(function(){
var PUB="MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAkXtC2ve86glLlz4052w0Vj28S2zvkq4M0/jDSF0SiQ439JyDFVtCvznJ83XV1g29INH2PTYaTyp0GxMt1F1+la1vCJfe+3Z1lJExMOt2+XD6ZPZZYfrJiPbgOOryyeVmtkdHfm2n+KzN/to+kDNu2b62eE30rC933tofJaJnTc0/rfX9MDg9N00o7L6XRnMLaoO0pqij5mhNlWBFWav1+yqcb90EEyYuFDo63GIQEZFX/ztQsOeFSzhd4VWL8G50U9hDkHhSraLket+XmsyVE2OVW3gBhgGaM69NnV/cEg/1W+pYRhMVwdsOzntK3jJAI68w8dMOVpzyS9rtWLzI50tw2Np9XSzxIoZBcHB4VY665+B1TVjh2jrZE/JWnRvmQLl6C1b3BVmkQv+vcBMh7oq0Lz36eqQzTbX+R/yya6uEpN5npdAm9B2nwE0iK9pAbeYmvT53VM92/SchG81u84qZe8u8rFpfrBqZUD9iRZapB5hz09sqLQ7oxEdqfPMVs6fZFeks+Cd/I7OVS3Oj+rnSBNzuBmFn6WSgPhHAc1aXR1EJCjf7DezWeFznMPpfq512KFCDmqUuohOjtmtECnvvef8yMFaMbu5m+JQ33n/tHWTGeuNT0nIrVVyZp6ERtLsBSnM0TaT/qLhSTx0BvXnWCf5hItQJMyN5gKbLuHUCAwEAAQ==";

/* De tre saet. fil-stierne ligger i materiale/ ved siden af siden. */
var SETS=[
 {k:"koert-fast", navn:"Kørt fast",  d:"Kom fri - projektet i drift igen"},
 {k:"i-gang",     navn:"I gang",     d:"Kom godt i gang - uden grøften"},
 {k:"si-native",  navn:"SI-native",  d:"Byg stærkt - fundamentet holder"}
];

var T={
 da:{h:"Få materialet",s:"Vælg hvad I vil have. Vi sender det med det samme.",
     vaelg:"Hvilke sæt vil du have?",navn:"Navn",mail:"Email",tel:"Telefon",
     opt:"Navn, mail og telefon er valgfrie.",kontakt:"I må gerne kontakte mig",
     send:"Send",sender:"Sender...",annul:"Annuller",
     eSaet:"Vælg mindst ét sæt.",eMail:"Skriv en gyldig email.",
     eFejl:"Kunne ikke sende lige nu. Prøv igen senere.",
     okH:"Værsgo!",okS:"Her er dit materiale. Vi har også noteret din henvendelse.",
     brief:"Brief (PDF)",udd:"Uddybende (PDF)",luk:"Luk"},
 en:{h:"Get the material",s:"Pick what you want. We send it right away.",
     vaelg:"Which sets do you want?",navn:"Name",mail:"Email",tel:"Phone",
     opt:"Name, email and phone are optional.",kontakt:"You may contact me",
     send:"Send",sender:"Sending...",annul:"Cancel",
     eSaet:"Choose at least one set.",eMail:"Enter a valid email.",
     eFejl:"Could not send right now. Please try again later.",
     okH:"Here you go!",okS:"Here is your material. We have also noted your request.",
     brief:"Brief (PDF)",udd:"In-depth (PDF)",luk:"Close"}
};
var lang=(document.documentElement.lang||"da").slice(0,2).toLowerCase();
if(!T[lang])lang="da"; var t=T[lang];

var me=document.currentScript?document.currentScript.src:"";
var BASE=me?me.replace(/[^\/]*$/,""):"";
var ENDPOINT=BASE+"modtag.php";

var css='.lsi-ov{position:fixed;inset:0;background:rgba(21,17,13,.55);display:none;align-items:flex-start;justify-content:center;padding:20px;z-index:9999;overflow-y:auto}'
+'.lsi-ov.open{display:flex}'
+'.lsi-m{background:#f5f0e6;color:#241f18;border-radius:16px;max-width:440px;width:100%;padding:26px;margin:auto;box-shadow:0 24px 60px rgba(0,0,0,.3);font-family:system-ui,-apple-system,"Segoe UI",sans-serif;line-height:1.5}'
+'.lsi-m h3{font-weight:800;font-size:22px;margin:0 0 4px;color:#241f18}'
+'.lsi-sub{margin:0 0 16px;color:#6c6150;font-size:14px}'
+'.lsi-g{font-weight:700;font-size:14px;margin:4px 0 8px;color:#241f18}'
+'.lsi-set{display:flex;gap:10px;align-items:flex-start;border:1px solid rgba(36,31,24,.14);border-radius:10px;padding:11px 13px;margin:0 0 8px;cursor:pointer;background:#fff}'
+'.lsi-set input{margin-top:3px;flex:none;width:17px;height:17px;accent-color:#b5761a}'
+'.lsi-set b{display:block;color:#241f18;font-size:15px}.lsi-set span{color:#6c6150;font-size:13px}'
+'.lsi-f{margin:0 0 12px}.lsi-f label{display:block;font-size:13px;font-weight:600;margin:0 0 5px}'
+'.lsi-f input{width:100%;padding:11px 13px;border:1px solid rgba(36,31,24,.16);border-radius:9px;font:inherit;font-size:15px;background:#fff;color:#241f18;box-sizing:border-box}'
+'.lsi-hint{margin:2px 0 14px;font-size:12.5px;color:#8a7d66}'
+'.lsi-c{display:flex;gap:9px;align-items:flex-start;margin:0 0 4px;font-size:13.5px;color:#6c6150;cursor:pointer;line-height:1.4}'
+'.lsi-c input{margin-top:2px;flex:none;width:16px;height:16px;accent-color:#b5761a}'
+'.lsi-a{display:flex;gap:10px;margin-top:18px}'
+'.lsi-send{flex:1;background:#b5761a;color:#fff;border:none;border-radius:10px;padding:12px 20px;font-weight:700;font-size:15px;cursor:pointer;text-align:center}'
+'.lsi-x{background:none;border:1px solid rgba(36,31,24,.18);color:#241f18;border-radius:10px;padding:12px 18px;font-weight:600;font-size:15px;cursor:pointer}'
+'.lsi-e{color:#b23b2e;font-size:13px;margin:8px 0 0;display:none}'
+'.lsi-ok{display:none}.lsi-dl b{display:block;font-weight:700;font-size:14px;margin:14px 0 6px;color:#241f18}'
+'.lsi-dl a{display:block;text-decoration:none;margin:0 0 7px}.lsi-hr{border:none;border-top:1px solid rgba(36,31,24,.12);margin:12px 0}';

function esc(x){return String(x).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}

var built=false,ov;
function build(){
 if(built)return;built=true;
 var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
 var sh='';
 SETS.forEach(function(o){sh+='<label class="lsi-set"><input type="checkbox" class="lsi-set-cb" data-k="'+esc(o.k)+'"> <span><b>'+esc(o.navn)+'</b><span>'+esc(o.d)+'</span></span></label>';});
 ov=document.createElement('div');ov.className='lsi-ov';
 ov.innerHTML='<div class="lsi-m" role="dialog" aria-modal="true"><div class="lsi-form">'
 +'<h3>'+esc(t.h)+'</h3><p class="lsi-sub">'+esc(t.s)+'</p>'
 +'<div class="lsi-g">'+esc(t.vaelg)+'</div>'+sh
 +'<hr class="lsi-hr">'
 +'<div class="lsi-f"><label>'+esc(t.navn)+'</label><input type="text" class="lsi-navn" autocomplete="name"></div>'
 +'<div class="lsi-f"><label>'+esc(t.mail)+'</label><input type="email" class="lsi-mail" autocomplete="email"></div>'
 +'<div class="lsi-f"><label>'+esc(t.tel)+'</label><input type="tel" class="lsi-tel" autocomplete="tel"></div>'
 +'<p class="lsi-hint">'+esc(t.opt)+'</p>'
 +'<label class="lsi-c"><input type="checkbox" class="lsi-kontakt"> <span>'+esc(t.kontakt)+'</span></label>'
 +'<p class="lsi-e"></p><div class="lsi-a"><button type="button" class="lsi-x">'+esc(t.annul)+'</button>'
 +'<button type="button" class="lsi-go">'+esc(t.send)+'</button></div></div>'
 +'<div class="lsi-ok"><h3>'+esc(t.okH)+'</h3><p class="lsi-sub">'+esc(t.okS)+'</p>'
 +'<div class="lsi-dl"></div>'
 +'<button type="button" class="lsi-x" style="width:100%;margin-top:6px">'+esc(t.luk)+'</button></div></div>';
 document.body.appendChild(ov);
 ov.addEventListener('click',function(e){if(e.target===ov)close();});
 ov.querySelectorAll('.lsi-x').forEach(function(b){b.addEventListener('click',close);});
 ov.querySelector('.lsi-go').addEventListener('click',submit);
}
function close(){if(!ov)return;ov.classList.remove('open');
 ov.querySelector('.lsi-form').style.display='block';ov.querySelector('.lsi-ok').style.display='none';
 ov.querySelector('.lsi-e').style.display='none';}

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

function visDownloads(valgte){
 var box=ov.querySelector('.lsi-dl');box.innerHTML='';
 valgte.forEach(function(k){
  var o=SETS.filter(function(s){return s.k===k;})[0];if(!o)return;
  var h=document.createElement('b');h.textContent=o.navn;box.appendChild(h);
  [[t.brief,'brief'],[t.udd,'uddybende']].forEach(function(p){
   var a=document.createElement('a');a.className='lsi-send';
   a.href=BASE+'materiale/'+(lang==='en'?'en/':'')+'SI_'+k+'_'+p[1]+'.pdf';a.target='_blank';a.rel='noopener';
   a.textContent=p[0];box.appendChild(a);
  });
 });
}

function submit(){
 var e=ov.querySelector('.lsi-e');
 function fail(m){e.textContent=m;e.style.display='block';}
 var valgte=[].slice.call(ov.querySelectorAll('.lsi-set-cb:checked')).map(function(c){return c.dataset.k;});
 var navn=ov.querySelector('.lsi-navn').value.trim();
 var mail=ov.querySelector('.lsi-mail').value.trim();
 var tel=ov.querySelector('.lsi-tel').value.trim();
 var kontakt=ov.querySelector('.lsi-kontakt').checked;
 if(!valgte.length)return fail(t.eSaet);
 if(mail&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(mail))return fail(t.eMail);
 var b=ov.querySelector('.lsi-go');b.disabled=true;b.textContent=t.sender;
 send({navn:navn,email:mail,tel:tel,kontakt:kontakt,materiale:valgte,kilde:"looplo.si",
   sprog:lang,side:location.pathname,tid:new Date().toISOString()})
 .then(function(){visDownloads(valgte);
   ov.querySelector('.lsi-form').style.display='none';
   ov.querySelector('.lsi-ok').style.display='block';})
 .catch(function(err){b.disabled=false;b.textContent=t.send;fail(t.eFejl);console.error(err);});
}

window.looploSI=function(){build();ov.classList.add('open');};
})();
