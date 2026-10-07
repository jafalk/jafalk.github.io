/* ─────────────────────────────────────────────────────────────
   LOOPLO FEED - ÉN KILDE FOR BEGGE FEEDS.
   Redigér KUN denne liste. Ét objekt pr. LinkedIn-opslag.

   ai: true   -> vises BÅDE på Kobling (alle) og på AI-feedet
   ai: false  -> vises KUN på Kobling (alle)

   Kobling (kobling.html) = ALLE opslag. AI (ai.html) = kun ai:true.
   date: ISO (ÅÅÅÅ-MM-DD). Nyeste sorteres automatisk øverst. Viser de 10 seneste.

   url: FULD opslags-URL (deep link). Hentes paa LinkedIn: de tre prikker paa opslaget
        -> "Kopier link til opslag". Formen er:
        https://www.linkedin.com/posts/jacobfalkentorp_slug-activity-7301234567890123456-abcd
        Man kan ogsaa noejes med at skrive aktivitets-id'et alene, fx "7301234567890123456",
        saa bygger siden selv URL'en. Aabnes paa mobil springer den direkte ind i LinkedIn-appen.
   - url = PLACEHOLDER indtil de faktiske links er indsat.
   - ai-flag = mit skøn ud fra domæne. Ret hvor det er forkert.
   - et par datoer er anslået hvor trackeren kun gav måned (markeret // ca.).
   ───────────────────────────────────────────────────────────── */
window.POSTS = [
  {
    date: "2026-10-04", ai: true,
    title: "AI kill switch - lagt udenpå",
    body: "NVIDIAs Open Agent Safety Platform lægger sandbox og hardware-watchdog udenom agenten. Men et lag udenpå kan begrænse hvad agenten når - ikke afgøre om en handling burde ske, for den kunde, på det mandat. Det kræver en levende verdensmodel, og den kobling mellem AI og EA ejer ingen. Uden den er kill switchen alt, der er tilbage - og den fejler kun i én retning: mod stop.",
    tags: "#Looplo",
    en_title: "AI kill switch - bolted on",
    en_body: "NVIDIA's Open Agent Safety Platform wraps a sandbox and a hardware watchdog around the agent. But a layer bolted on can limit what the agent reaches - not decide whether an action should happen, for that client, on that mandate. That takes a living world model, and the coupling between AI and EA that no one owns. Without it, the kill switch is all that is left - and it fails in only one direction: toward stop.",
    img: "",   // valgfri illustration
    url: "7512537041453178880"
  },
  {
    date: "2026-09-29", ai: true,
    title: "Det sker allerede - når beslutningen bliver gratis, siver den ned i koblingerne",
    body: "Debatten siger, at når analysen bliver gratis, flytter værdien til at se sammenhængen. Rigtigt - men der er en stille halvdel: når selve beslutningen også bliver gratis, flytter den ikke op til dømmekraften. Den siver ned i koblingerne, hvor ingen ejer den.",
    tags: "#Looplo",
    en_title: "It is already happening - when the decision becomes free, it seeps into the couplings",
    en_body: "The debate says that when analysis becomes free, value moves to seeing the connections. True - but there is a quiet half: when the decision itself also becomes free, it does not move up to judgement. It seeps down into the couplings, where no one owns it.",
    img: "billeder/det-sker-allerede.png",   // valgfri illustration
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7510674053360246785"
  },
  {
    date: "2026-09-27", ai: false,
    title: "Hvem ejer fejlen? Just culture og psykologisk tryghed",
    body: "En ung maskinfører skrev, at et uheld var hundrede procent hans fejl - og hans tid i virksomheden sluttede. Just culture skelner mellem ærlig fejl og hensynsløs handling og flytter spørgsmålet fra \"hvem\" til \"hvad gjorde det muligt\". Nulfejlskultur flytter bare fejlene under overfladen.",
    tags: "#Looplo",
    en_title: "Who owns the error? Just culture and psychological safety",
    en_body: "A young operator wrote that an accident was one hundred percent his fault - and his time at the company ended. Just culture distinguishes honest error from reckless action and moves the question from \"who\" to \"what made it possible\". A zero-error culture only pushes the errors below the surface.",
    img: "",   // valgfri illustration
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7509886033698811904"
  },
  {
    date: "2026-09-23", ai: false,
    title: "Hvem ejer adgangen? Suverænitet flytter fra grænsen til koblingen",
    body: "En ny forsvarsaftale om Grønland uden slutdato. Det mest interessante står ikke i afsnittene om baser, men længere nede: tre regelsæt gælder over samme territorium på én gang. Suverænitet flytter fra grænsen til koblingen - EU-medlemskab bruges som tillidskriterium et sted, hvor EU's regler ikke gælder.",
    tags: "#Looplo",
    en_title: "Who owns access? Sovereignty moves from the border to the coupling",
    en_body: "A new defence agreement on Greenland with no end date. The most interesting part is not in the sections on bases, but further down: three sets of rules apply over the same territory at once. Sovereignty moves from the border to the coupling - EU membership is used as a trust criterion in a place where EU rules do not apply.",
    img: "billeder/jurisdiktion.png",   // valgfri illustration
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7508444866444451840"
  },
  {
    date: "2026-09-22", ai: true,
    title: "Samme ord, forskellige tal - koblingen er det semantiske lag",
    body: "To direktører giver forskellige svar på samme spørgsmål. Ikke fordi nogen tager fejl, men fordi de bruger det samme ord om forskellige ting. Det semantiske lag er koblingen mellem EA og AI - og når det er udefineret, bliver hvert tal til en forhandling.",
    tags: "#Looplo",
    en_title: "Same words, different numbers - the coupling is the semantic layer",
    en_body: "Two executives give different answers to the same question. Not because anyone is wrong, but because they use the same word for different things. The semantic layer is the coupling between EA and AI - and when it is undefined, every number becomes a negotiation.",
    img: "billeder/semantisk-lag.png",   // valgfri illustration
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7508039916262567936"
  },
  {
    date: "2026-09-20", ai: true,
    title: "Grooven ligger mellem sporene - AI i musik",
    body: "En komponist har skilt Diana Ross' \"Upside Down\" ad - bassen for sig, trommerne for sig. AI kan isolere hvert spor, men grooven sad aldrig i noget spor. Den bor i splitsekundet mellem bas og trommer. Maskinen adskiller; mennesket spiller mellemrummet.",
    tags: "#Looplo",
    en_title: "The groove lives between the tracks - AI in music",
    en_body: "A composer took Diana Ross' \"Upside Down\" apart - bass on its own, drums on their own. AI can isolate every track, but the groove never lived in any track. It lives in the split second between bass and drums. The machine separates; the human plays the gap.",
    img: "",   // valgfri illustration
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7507505057341349888"
  },
  {
    date: "2026-09-17", ai: false,
    title: "Exit i kontrakten. Ikke i arkitekturen.",
    body: "Kontrakten har en exit-klausul. Den er skrevet, forhandlet, underskrevet - på papiret kan I gå. Men exit lever i arkitekturen, ikke i kontrakten: hvis afhængigheden er bygget ind, står I stille i to år, uanset hvad der står i aftalen.",
    tags: "#Looplo",
    en_title: "Exit in the contract. Not in the architecture.",
    en_body: "The contract has an exit clause. Written, negotiated, signed - on paper you can leave. But exit lives in the architecture, not the contract: if the dependency is built in, you stand still for two years no matter what the agreement says.",
    img: "billeder/exit-i-kontrakten.png",   // valgfri illustration
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7506197176746909696"
  },
  {
    date: "2026-09-15", ai: false,
    title: "Moden arkitektur, moden cloud - men ingen kan sige hvad der må leve hvor",
    body: "\"Vi har en arkitektur, og vi har en cloud-platform. Men ingen kan sige hvad der må leve hvor.\" Det er ikke et modenhedsproblem i nogen af de to domæner - det er koblingsgæld mellem dem. Beslutningen om placering har ingen ejer, så den bliver aldrig truffet.",
    tags: "#Looplo",
    en_title: "Mature architecture, mature cloud - but no one can say what may live where",
    en_body: "\"We have an architecture and we have a cloud platform. But no one can say what may live where.\" This is not a maturity problem in either domain - it is coupling debt between them. The placement decision has no owner, so it never gets made.",
    img: "billeder/hvad-maa-leve-hvor.png",   // valgfri illustration
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7505490822461779969"
  },
  {
    date: "2026-09-13", ai: true,
    title: "AI erstatter ikke forfatterskab - den viser hvad der aldrig var det",
    body: "Werner Herzog blev spurgt til en dansk AI-film bygget i hans ånd. Hans dom var kort: den vil fejle - men ikke af teknofobi. AI kan træde ind netop dér, hvor arbejdet allerede var kollapset til efterligning. Den truer ikke dømmekraften - den afslører alt det omkring den, der var standardiseret nok til at automatisere, og som vi kaldte arbejde, fordi ingen så efter.",
    tags: "#Looplo",
    en_title: "AI does not replace authorship - it reveals what never was",
    en_body: "Werner Herzog was asked about a Danish AI film built in his spirit. His verdict was short: it will fail - but not out of technophobia. AI can step in precisely where the work had already collapsed into imitation. It does not threaten judgement - it exposes everything around it that was standardised enough to automate, and that we called work because no one was looking.",
    img: "",   // valgfri illustration
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7504950234083508224"
  },
  {
    date: "2026-09-05", ai: true,
    title: "AI - udvidelse og kognitiv amputation",
    body: "Hvis det, der automatiseres, er kognitionen, risikerer vi, at nødudgangen er lukket. Gates citerer det korrekt og med forbehold, men læser det som en risiko ved brug. McLuhan ville sige, det er ikke en risiko. Det er prisen. Den følger med udvidelsen og kan ikke reguleres væk.",
    tags: "#Looplo",
    en_title: "AI - extension and cognitive amputation",
    en_body: "If what gets automated is cognition, we risk the emergency exit being closed. Gates cites it correctly and with reservations, but reads it as a risk of use. McLuhan would say it is not a risk. It is the price. It comes with the extension and cannot be regulated away.",
    img: "",   // valgfri illustration
    url: "https://www.linkedin.com/posts/jacobfalkentorp_%F0%9D%97%94%F0%9D%97%9C-%F0%9D%98%82%F0%9D%97%B1%F0%9D%98%83%F0%9D%97%B6%F0%9D%97%B1%F0%9D%97%B2%F0%9D%97%B9%F0%9D%98%80%F0%9D%97%B2-%F0%9D%97%BC%F0%9D%97%B4-%F0%9D%97%B8%F0%9D%97%BC%F0%9D%97%B4%F0%9D%97%BB%F0%9D%97%B6-ugcPost-7501878621238632449-btZV/"
  },
  {
    date: "2026-09-03", ai: true,
    title: "Fem AI-initiativer. Ingen i drift.",
    body: "Bestyrelsen har godkendt fem AI-initiativer. Tocifrede millioner er brugt. Og ingen kan sætte noget i drift. Det er ikke et kapabilitetsproblem - domænerne blev finansieret, koblingerne imellem dem blev ikke.",
    tags: "#Looplo",
    en_title: "Five AI initiatives. None in production.",
    en_body: "The board approved five AI initiatives. Tens of millions spent. And nothing can be put into production. This is not a capability problem: the domains were funded, the couplings between them were not.",
    img: "billeder/pilot-til-produktion.jpg",   // valgfri illustration, fx "billeder/navn.jpg"
    url: "7501158391730503683"
  },
  {
    date: "2026-08-31", ai: true,
    title: "Generativ AI kan skrive alt. Derfor betyder det næsten ingenting.",
    body: "Modellen udfører. Den formulerer. Men velskrevet var før et tegn på, at nogen havde tænkt sig om - og det tegn er nu gratis at producere. Kvalitetssikring, der bestod i at læse om noget lød rigtigt, kontrollerer ingenting.",
    tags: "#Looplo",
    en_title: "Generative AI can write anything. Which is why it means almost nothing.",
    en_body: "The model executes. It formulates. But well written used to signal that someone had thought it through, and that signal is now free to produce. Quality assurance that consisted of reading whether something sounded right now checks nothing.",
    img: "",   // valgfri illustration, fx "billeder/navn.jpg"
    url: "7499907342722031616"
  },
  {
    date: "2026-09-01", ai: true,
    title: "Suverænitet koster teknologisk modenhed",
    body: "Digital suverænitet er en trappe, ikke ja eller nej. De fleste data skal ikke helt op - at tvinge alt mod øverste trin koster unødig modenhed. Det svære er at vide hvad der skal ligge hvor, og at nogen ejer overblikket på tværs af de fem domæner. Overblikket kan ikke lejes.",
    en_title: "Sovereignty costs technological maturity",
    en_body: "Digital sovereignty is a staircase, not a yes or no. Most data does not need the top step, and forcing everything upward costs maturity you do not need to spend. The hard part is knowing what belongs where, and having someone own that picture across the five domains. The overview cannot be leased.",
    img: "",   // valgfri illustration
    tags: "#Looplo",
    url: "https://www.linkedin.com/in/jacobfalkentorp/"
  },
  {
    date: "2026-08-26", ai: true,
    title: "En maskine, der kontrollerer om en anden maskine gjorde arbejdet ordentligt",
    body: "Behavior specs checker mod et opslagsværk - men kun det der allerede står skrevet. Organisationens egen model findes ikke og skal graves frem. Man skal lukke for vandet før man tørrer op.",
    en_title: "A machine that checks whether another machine did the work properly",
    en_body: "Behaviour specs check against a reference work, but only what is already written down. The organisation's own model does not exist and has to be excavated. You close the water before you mop the floor.",
    img: "",   // valgfri illustration
    tags: "#Looplo",
    url: "https://www.linkedin.com/in/jacobfalkentorp/"
  },
  {
    date: "2026-07-31", ai: false,
    title: "Det, der blev knapt",
    body: "Når produktionen bliver billig, bliver sammenhængen dyr. Hvert domæne kan melde grønt, mens helheden skrider - fordi ingen ejer koblingerne imellem dem.",
    en_title: "What became scarce",
    en_body: "When production turns cheap, coherence turns expensive. Every domain can report green while the whole slips, because nobody owns the couplings between them.",
    img: "",   // valgfri illustration
    tags: "#Looplo",
    url: "https://www.linkedin.com/company/looplo"
  },
  {
    date: "2026-07-25", ai: false,
    title: "Vi bliver tit spurgt, hvad vi egentlig laver",
    body: "Kort sagt: vi hjælper med det der ligger mellem domænerne. Værdi og risiko samler sig i koblingerne, ikke inde i de enkelte dele.",
    en_title: "We are often asked what we actually do",
    en_body: "Briefly: we help with what sits between the domains. Value and risk gather in the couplings, not inside the individual parts.",
    img: "",   // valgfri illustration
    tags: "#Looplo",
    url: "https://www.linkedin.com/company/looplo"
  },
  {
    date: "2026-07-18", ai: false, // ca. (trackeren: juli, sommerserie 1/3)
    title: "Vi hjælper med at håndtere koblingerne",
    body: "Kort til værdi: en trekvarters snak, en workshoprække efter behov, og løbende koblingsejerskab. Vi sælger ikke det vi måler.",
    en_title: "We help you handle the couplings",
    en_body: "Short path to value: a forty-five minute conversation, a workshop series as needed, and continuous coupling ownership. We do not sell what we measure.",
    img: "",   // valgfri illustration
    tags: "#Looplo",
    url: "https://www.linkedin.com/company/looplo"
  },
  {
    date: "2026-07-10", ai: true,
    title: "Når signalet bliver gratis, kollapser processen der byggede på det",
    body: "Når AI gør et signal gratis at producere, holder de processer op med at virke, som stiltiende regnede med at signalet var dyrt. Proxy-erkendelsen bliver et bestyrelsesspørgsmål.",
    en_title: "When the signal becomes free, the process built on it collapses",
    en_body: "When AI makes a signal free to produce, processes that quietly assumed the signal was expensive stop working. Recognising the proxy becomes a board-level question.",
    img: "",   // valgfri illustration
    tags: "#Looplo",
    url: "https://www.linkedin.com/in/jacobfalkentorp/"
  },
  {
    date: "2026-06-26", ai: true,
    title: "AI op 13 procent, tillid ned 18 procent",
    body: "Anvendelsen stiger, mens tilliden falder. Forskellen er trust ambiguity: uden psykologisk tryghed forbliver det uklart hvad man kan stole på - og AI forstærker uklarheden i stedet for at fjerne den.",
    en_title: "AI up 13 percent, trust down 18 percent",
    en_body: "Adoption rises while trust falls. The gap is trust ambiguity: without psychological safety it stays unclear what can be relied on, and AI amplifies the uncertainty rather than removing it.",
    img: "",   // valgfri illustration
    tags: "#Looplo",
    url: "https://www.linkedin.com/in/jacobfalkentorp/"
  },
  {
    date: "2026-06-25", ai: false,
    title: "AI lander ikke på budgettet - den lander på de tværgående afhængigheder",
    body: "Enig i diagnosen, men vægten ligger et andet sted: fem ligeværdige domæner, inklusive det menneskelige. Et er søkort at forstå, et andet skib at føre. Hvem ejer de tværgående afhængigheder?",
    en_title: "AI does not land on the budget, it lands on the cross-cutting dependencies",
    en_body: "Agreed on the diagnosis, but the weight sits elsewhere: five co-equal domains, including the human one. Reading the chart is one thing, sailing the ship another. Who owns the cross-cutting dependencies?",
    img: "",   // valgfri illustration
    tags: "#Looplo",
    url: "https://www.linkedin.com/in/jacobfalkentorp/"
  },
  {
    date: "2026-06-22", ai: false,
    title: "Da USA trak stikket, opdagede Europa hvor lidt vi ejer",
    body: "En suspendering var nok til at vise afhængigheden. Suverænitet er ikke et politisk slogan, men et spørgsmål om hvem der ejer koblingerne, når adgangen kan lukkes udefra.",
    en_title: "When the US pulled the plug, Europe discovered how little we own",
    en_body: "A suspension was enough to expose the dependency. Sovereignty is not a political slogan but a question of who owns the couplings when access can be closed from outside.",
    img: "",   // valgfri illustration
    tags: "#Looplo",
    url: "https://www.linkedin.com/in/jacobfalkentorp/"
  },
  {
    date: "2026-06-13", ai: false,
    title: "Når en kapabilitet kan slukkes af et dekret, er det en suverænitetsrisiko",
    body: "Amerikansk eksportkontrol gjorde det konkret: en evne du ikke ejer, kan forsvinde ved en beslutning truffet et andet sted. Det er en kobling, ingen på dansk jord har hånd om.",
    en_title: "When a capability can be switched off by decree, it is a sovereignty risk",
    en_body: "US export controls made it concrete: a capability you do not own can disappear by a decision taken somewhere else. That is a coupling nobody on Danish soil has a hand on.",
    img: "",   // valgfri illustration
    tags: "#Looplo",
    url: "https://www.linkedin.com/in/jacobfalkentorp/"
  },
  {
    date: "2026-06-12", ai: false,
    title: "BI er box-shaped, intelligens er netværk-shaped",
    body: "Men netværket stopper ikke ved data - de sværeste kanter går på tværs af domæner. Til sidst handler det om hvem der ejer sammenhængen, ikke om hvor dataene ligger.",
    en_title: "BI is box-shaped, intelligence is network-shaped",
    en_body: "But the network does not stop at data. The hardest edges run across domains. In the end it is about who owns the coherence, not where the data sits.",
    img: "",   // valgfri illustration
    tags: "#Looplo",
    url: "https://www.linkedin.com/in/jacobfalkentorp/"
  },
  {
    date: "2026-05-28", ai: true,
    title: "LLM i en nøddeskal: modellen forstærker den dømmekraft I bringer ind",
    body: "Præcise spørgsmål giver brugbart materiale. Uklare giver overbevisende svar, der føles færdige uden at være det. Beslutning og ansvar forbliver jeres.",
    en_title: "LLMs in a nutshell: the model amplifies the judgement you bring to it",
    en_body: "Sharp questions yield usable material. Vague ones yield convincing answers that feel finished without being so. The decision and the accountability remain yours.",
    img: "",   // valgfri illustration
    tags: "#Looplo",
    url: "https://www.linkedin.com/in/jacobfalkentorp/"
  },
  {
    date: "2026-05-27", ai: false,
    title: "50 CEOer nikkede - men det svære er koblingerne og kadencen",
    body: "Enigheden om isbjerget er nem. Det svære ligger under vandlinjen: afhængighederne mellem domænerne og tempoet de skal spille sammen i. Der ender arbejdet på en bygherrerolle.",
    en_title: "Fifty CEOs nodded, but the hard part is the couplings and the cadence",
    en_body: "Agreeing about the iceberg is easy. The hard part sits below the waterline: the dependencies between domains and the pace at which they must work together. That is where the work becomes an owner-side role.",
    img: "",   // valgfri illustration
    tags: "#Looplo",
    url: "https://www.linkedin.com/in/jacobfalkentorp/"
  },
  {
    date: "2026-04-28", ai: true,
    title: "Netcompany put AI in the peloton - but it starts with architecture",
    body: "AI kommer ikke i mål på egen hånd. Det starter med den arkitektur, der afgør om modellen kobler til det den skal - data, ansvar og organisationsdesign under vandlinjen.",
    en_title: "Netcompany put AI in the peloton, but it starts with architecture",
    en_body: "AI does not finish the race on its own. It starts with the architecture that decides whether the model connects to what it must: data, accountability and organisational design below the waterline.",
    img: "",   // valgfri illustration
    tags: "#Looplo",
    url: "https://www.linkedin.com/in/jacobfalkentorp/"
  },
  {
    date: "2026-03-22", ai: false,
    title: "EU chips, RISC-V og Zero Trust starter ved silicium",
    body: "Suverænitet begynder længere nede end de fleste tror. Uden kontrol over det underliggende lag er tilliden lånt - og en lånt tillid kan opsiges.",
    en_title: "EU chips, RISC-V and Zero Trust start at silicon",
    en_body: "Sovereignty begins further down than most assume. Without control of the underlying layer the trust is borrowed, and borrowed trust can be revoked.",
    img: "",   // valgfri illustration
    tags: "#Looplo",
    url: "https://www.linkedin.com/in/jacobfalkentorp/"
  }
];
