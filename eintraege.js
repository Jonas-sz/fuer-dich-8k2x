// ===== EINSTELLUNG =====
const START_DATUM = "2026-10-24"; // Tag 1 = ihr Geburtstag (JJJJ-MM-TT)

// ===== TEXT-POOLS (Startmaterial, gern durch Eigenes ersetzen) =====
const GRUENDE = [
  "Dein Lachen ist das aller süßeste.", "Ich liebe unsere kleinen Gespräche.", "Mit dir fühlt sich jeder Tag besonders an.",
  "Mit dir macht sogar Zeitungverteilen um 2 Uhr spaß.", "Du bist mutig, auch wenn du es selbst nicht weißt.",
  "Deine Umarmungen.", "Du errinerst dich immer an alles.", "Wie du dich über Kleinigkeiten freust.",
  "Deine Ehrlichkeit.", "Du machst jeden Raum wärmer.", "Deine süße Stimme.", "Du glaubst an mich.",
  "Wie du mich ansiehst.", "Du bist loyal.", "Mit dir kann ich ich selbst sein.",
  "Deine Geduld mit mir.", "Du hast ein großes Herz.", "Dein Humor.", "Du gibst nicht auf.",
  "Deine Augen, wenn du lachst.", "Dein Mitgefühl.", "Du bist Sympatisch.",
  "Deine Neugier.", "Du bringst Ruhe in mein Chaos.", "Wie du singst, wenn du denkst, es hört keiner zu.",
  "Du siehst das Gute in anderen.", "Deine Hand in meiner.", "Du machst mich zu einem besseren Menschen.",
  "Deine Kreativität.", "Du verzeihst großzügig.", "Dein perfekter Duft.",
  "Wie du dich freust wenn ich dir Essen mache.", "Du lässt mich träumen.", "Du bist ehrlich zu mir, auch wenn es schwer ist.",
  "Du tröstest mich, ohne viele Worte.", "Deine Spontanität.", "Du lachst über meine schlechten Witze.",
  "Dein Mut, Neues auszuprobieren.", "Du bist für deine Liebsten da.", "Dein Lächeln nach einem langen Tag.",
  "Du erinnerst mich daran, das Leben zu genießen.", "Du forderst mich heraus.", "Du bist mein Lieblingsmensch.",
  "Du teilst Freude.", "Du verstehst mich, auch wenn ich schweige.", "Du machst Orte zu einem Zuhause.",
  "Die Tage an denen du schlechte Laune hast, wir aber am ende trotzdem kuscheln.", "Du motivierst mich.", "Unsere Filmabende.",
  "Ich bin so so so so sehr dankbar, dass es dich gibt.",
];
const GUTSCHEINE = [
  "Ich bringe dir Frühstück ans Bett", "Ein Abend, an dem du den Film aussuchst", "Eine Massage (20 Minuten)",
  "Ein Date, das ich plane und bezahle", "Ein Tag, an dem ich den Haushalt mache", "Es gibt genau das zu Essen, was du dir wüscht",
  "Ein Spaziergang mit Eis", "Ein Spieleabend (egal welches und egal wie oft)", "Eine Umarmung, jederzeit einlösbar",
  "Ich muss 10 Liegestütze vor dir machen", "Ein Picknick", "Ein Kinoabend mit Snacks (zuhause oder Kino)", "Ein Wunsch frei (im Rahmen der Vernunft natürlich)",
  "Ein Spieleabend, bei dem du gewinnen darfst (Lasse ich dich sowieso immer)", "Heiße Schokolade und Kuscheldecke", "Ein Ausflug, den du aussuchst",
  "Ein Kuchen-Date am Wochenende", "Ein Sonnenuntergang zu zweit", "Ein Tag ohne Diskussionen", "Zusammen Fotos machen (mit Stativ und so)",
  "Ich fahre dich, wohin du willst (Action, DM usw.)", "Eine Stunde Kopfkraulen", "Pizza-Abend ohne Kompromisse", "Ein Tanz im Wohnzimmer (Nur ich oder wir zusammen)",
  "Ein Besuch an deinem Lieblingsort", "Ein Abend, an dem ich nur zuhöre", "Ein Mitternachtssnack",
  "Ein Tag, an dem du bestimmst", "Ein Abend Sterne gucken", "Ein Kuschelsonntag"
];
const FRAGEN = [
  "Was war heute dein schönster Moment?", "Welchen Ort willst du unbedingt mit mir sehen?", "Was war dein erster Eindruck von mir?",
  "Welches Lied erinnert dich an uns?", "Was wünschst du dir für das kommende Jahr?", "Welche Erinnerung an uns magst du am liebsten?",
  "Welche Superkraft hättest du gern?", "Was ist dein Lieblingsessen, das wir zusammen hatten?", "Wofür bist du gerade dankbar?",
  "Wenn wir morgen frei hätten: Was machen wir?", "Welches Tier wärst du?", "Was bringt dich garantiert zum Lachen?",
  "Welche Gewohnheit von mir findest du süß?", "Wo wollen wir in fünf Jahren zusammen sein?", "Was war unser lustigster Moment?",
  "Welchen Film sollen wir als Nächstes schauen?", "Was ist dein Traumurlaub?", "Was ist ein kleiner Luxus, den du liebst?",
  "Was würdest du deinem zehnjährigen Ich sagen?", "Welche Jahreszeit passt am besten zu uns?", "Was möchtest du unbedingt mal lernen?",
  "Welches Gericht sollen wir zusammen kochen?", "Was macht einen perfekten Sonntag aus?", "Wovon träumst du gerade?",
  "Was war das Schönste, was jemand für dich getan hat?", "Welches Hobby sollen wir gemeinsam ausprobieren?",
  "Welchen Spitznamen für mich magst du am liebsten?", "Was würdest du mit einem freien Tag nur für dich tun?",
  "Welche Eigenschaft magst du an dir selbst am meisten?", "Was ist dein liebster Duft?", "Welches Wort beschreibt uns am besten?",
  "Was ist dein Lieblingsplatz bei uns zu Hause?"
];
const RAETSEL = [
  ["Was hat Zähne, aber beißt nie?", "Ein Kamm."], ["Je mehr du davon nimmst, desto mehr lässt du zurück. Was ist es?", "Schritte."],
  ["Was gehört dir, wird aber meist von anderen benutzt?", "Dein Name."], ["Was wird nasser, je mehr es trocknet?", "Ein Handtuch."],
  ["Was hat Hände, aber kann nicht klatschen?", "Eine Uhr."], ["Was hat einen Hals, aber keinen Kopf?", "Eine Flasche."],
  ["Was ist so zerbrechlich, dass es schon bei seinem Namen kaputtgeht?", "Das Schweigen."], ["Was steigt, aber fällt nie?", "Das Alter."],
  ["Was hat Städte ohne Häuser, Wälder ohne Bäume und Wasser ohne Fische?", "Eine Landkarte."], ["Was wird größer, wenn man es teilt?", "Freude."],
  ["Was ist immer vor dir, aber du kannst es nicht sehen?", "Die Zukunft."], ["Ich habe Tasten, aber öffne keine Tür. Was bin ich?", "Eine Tastatur."],
  ["Was ist leichter als eine Feder, aber selbst der Stärkste kann es nicht lange halten?", "Der Atem."], ["Was hat ein Auge, aber kann nicht sehen?", "Eine Nadel."],
  ["Was geht um die Welt, bleibt aber in der Ecke?", "Eine Briefmarke."], ["Welche Frage kann man nie mit Ja beantworten?", "Schläfst du schon?"],
  ["Je mehr man davon hat, desto weniger sieht man. Was ist es?", "Dunkelheit."], ["Was wächst, wenn man es isst?", "Der Appetit."],
  ["Ich bin klein, schlage ohne Pause und gehöre dir. Was bin ich?", "Mein Herz."], ["Was ist das Wertvollste, das man verschenken kann, ohne Geld auszugeben?", "Zeit."],
  ["Was kann man teilen und trotzdem behalten?", "Ein Geheimnis."], ["Was ist bei jedem Wetter nass, aber nie im Regen?", "Die Zunge."],
  ["Was hat vier Beine, aber kann nicht laufen?", "Ein Tisch."], ["Was kommt einmal in der Minute, zweimal im Moment, aber nie in tausend Jahren?", "Der Buchstabe M."]
];

// ===== BESONDERE TAGE (mit Platzhaltern, bitte persönlich ausfüllen) =====
const BESONDERE_TAGE = {
  1:   { typ: "Dein Geburtstag hehe", bildtext: "Das wären deine Geschenke wenn ich mehr Geld hätte😪", text: "Ich wünsche dir alles gute und liebe zum Geburstag mein wunderschöner Schatz Mausi Engel!!!\n\nIch liebe dich über alles und für immer und das hier soll dich jeden Tag daran errinern❤️" },
  7:   { typ: "Eine Woche", bildtext: "Schon eine Woche um! Bewerte die App mit Sternen!", text: "Aufgabe: Du musst mich heute 1 mal richtig erschrecken!" },
  30:  { typ: "Ein Monat", bildtext: "Monat 1", text: "Ein Monat voller kleiner Überraschungen.\n\n[Dein persönlicher Text]" },
  100: { typ: "Tag 100", bildtext: "100 Tage", text: "100 Tage. Danke, dass du dabei bist.\n\n[Dein persönlicher Text]" },
  200: { typ: "Tag 200", bildtext: "200 Tage", text: "200 Tage, und es gibt noch so viel mehr.\n\n[Dein persönlicher Text]" },
  300: { typ: "Tag 300", bildtext: "300 Tage", text: "300 Tage. Fast ein ganzes Jahr.\n\n[Dein persönlicher Text]" },
  365: { typ: "Ein Jahr", bildtext: "Ein ganzes Jahr", text: "Ein ganzes Jahr, Tag für Tag.\n\n[Dein persönlicher Text zum Abschluss]" }
};

// ===== EIGENE EINTRÄGE (überschreiben alles andere) =====
// Beispiel: PERSOENLICH[5] = { text: "Mein eigener Text", bildtext: "Unser Urlaub", bild: "bilder/urlaub.jpg" };
const PERSOENLICH = {};
PERSOENLICH[4] = {
  typ: "Aufgabe",
  bildtext: "Ich war schon immer neidisch auf deinen Biezeps",
  text: "Beweise das du stärker bist als ich indem du dir eine Sportchallange ausdenkst, in der du gewinnst!"
};

PERSOENLICH[5] = {
  typ: "Rätsel",
  bildtext: "Schaffst du es das Rätsel zu lösen?",
  text: "Was kommt einmal in jeder Minute, zweimal in jedem Moment, aber nie in tausend Jahren vor?"
};

PERSOENLICH[6] = {
  typ: "Gutschein",
  bildtext: "Ein Gutschein für dich?",
  text: "Ein Spieleabend (egal welches und egal wie oft)"
};

PERSOENLICH[8] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[9] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[10] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[11] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[12] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[13] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[14] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[15] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[16] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[17] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[18] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[19] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[20] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[21] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[22] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[23] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[24] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[25] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[26] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[27] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[28] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[29] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[30] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[31] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[32] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[33] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[34] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[35] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[36] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[37] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[38] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[39] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[40] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[41] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[42] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[43] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[44] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[45] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[46] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[47] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[48] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[49] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[50] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[51] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[52] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[53] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[54] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[55] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[56] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[57] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[58] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[59] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[60] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[61] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[62] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[63] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[64] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[65] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[66] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[67] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[68] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[69] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[70] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[71] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[72] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[73] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[74] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[75] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[76] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[77] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[78] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[79] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[80] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[81] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[82] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[83] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[84] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[85] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[86] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[87] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[88] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[89] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[90] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[91] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[92] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[93] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[94] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[95] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[96] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[97] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[98] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[99] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[100] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[101] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[102] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[103] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[104] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[105] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[106] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[107] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[108] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[109] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[110] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[111] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[112] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[113] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[114] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[115] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[116] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[117] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[118] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[119] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[120] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[121] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[122] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[123] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[124] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[125] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[126] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[127] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[128] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[129] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[130] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[131] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[132] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[133] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[134] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[135] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[136] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[137] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[138] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[139] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[140] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[141] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[142] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[143] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[144] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[145] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[146] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[147] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[148] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[149] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[150] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[151] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[152] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[153] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[154] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[155] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[156] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[157] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[158] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[159] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[160] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[161] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[162] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[163] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[164] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[165] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[166] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[167] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[168] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[169] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[170] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[171] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[172] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[173] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[174] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[175] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[176] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[177] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[178] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[179] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[180] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[181] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[182] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[183] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[184] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[185] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[186] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[187] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[188] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[189] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[190] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[191] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[192] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[193] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[194] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[195] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[196] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[197] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[198] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[199] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[200] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[201] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[202] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[203] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[204] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[205] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[206] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[207] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[208] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[209] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[210] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[211] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[212] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[213] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[214] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[215] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[216] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[217] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[218] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[219] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[220] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[221] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[222] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[223] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[224] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[225] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[226] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[227] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[228] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[229] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[230] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[231] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[232] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[233] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[234] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[235] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[236] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[237] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[238] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[239] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[240] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[241] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[242] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[243] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[244] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[245] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[246] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[247] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[248] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[249] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[250] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[251] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[252] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[253] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[254] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[255] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[256] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[257] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[258] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[259] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[260] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[261] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[262] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[263] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[264] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[265] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[266] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[267] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[268] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[269] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[270] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[271] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[272] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[273] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[274] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[275] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[276] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[277] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[278] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[279] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[280] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[281] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[282] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[283] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[284] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[285] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[286] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[287] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[288] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[289] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[290] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[291] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[292] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[293] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[294] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[295] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[296] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[297] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[298] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[299] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[300] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[301] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[302] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[303] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[304] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[305] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[306] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[307] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[308] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[309] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[310] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[311] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[312] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[313] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[314] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[315] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[316] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[317] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[318] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[319] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[320] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[321] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[322] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[323] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[324] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[325] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[326] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[327] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[328] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[329] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[330] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[331] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[332] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[333] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[334] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[335] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[336] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[337] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[338] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[339] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[340] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[341] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[342] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[343] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[344] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[345] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[346] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[347] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[348] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[349] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[350] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[351] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[352] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[353] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[354] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[355] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[356] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[357] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[358] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[359] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[360] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[361] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[362] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[363] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[364] = {
  typ: "",
  bildtext: "",
  text: ""
};

PERSOENLICH[365] = {
  typ: "",
  bildtext: "",
  text: ""
};


// ===== 365 EINTRÄGE ZUSAMMENBAUEN =====
const EINTRAEGE = (function () {
  const liste = [];
  const reihe = ["Grund", "Gutschein", "Frage", "Grund", "Rätsel"];
  const zaehler = {};
  for (let tag = 1; tag <= 365; tag++) {
    const typ = reihe[(tag - 1) % 5];
    const i = zaehler[typ] = (zaehler[typ] === undefined ? 0 : zaehler[typ] + 1);
    let e;
    if (typ === "Grund") {
      e = { bildtext: "Grund Nr. " + (i + 1), text: "Grund Nr. " + (i + 1) + ":\n" + GRUENDE[i % GRUENDE.length] };
    } else if (typ === "Gutschein") {
      e = { bildtext: "Gutschein", text: "Gutschein Nr. " + (i + 1) + ":\n" + GUTSCHEINE[i % GUTSCHEINE.length] + "\n\nEinlösbar nach Absprache." };
    } else if (typ === "Frage") {
      e = { bildtext: "Frage des Tages", text: FRAGEN[i % FRAGEN.length] };
    } else {
      const r = RAETSEL[i % RAETSEL.length];
      e = { bildtext: "Rätsel des Tages", text: r[0], antwort: r[1] };
    }
    e.typ = typ;
    e.bild = "bilder/tag" + String(tag).padStart(3, "0") + ".jpg";
    liste.push(Object.assign(e, { antwort: e.antwort || "" }, BESONDERE_TAGE[tag], PERSOENLICH[tag]));
  }
  return liste;
})();
