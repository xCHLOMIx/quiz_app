export interface QuizQuestion {
  id: number;
  questionText: string;
  questionImage?: string;
  choices: QuizChoice[];
}

export interface QuizChoice {
  label: "A" | "B" | "C" | "D";
  text?: string;
  image?: string;
  correct?: boolean;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    questionText: "Ikinyabiziga cyose cyangwa ibinyabiziga bigenda bigomba kugira:",
    choices: [
      { label: "A", text: "Umuyobozi", correct: true },
      { label: "B", text: "Umuherekeza" },
      { label: "C", text: "A na B ni ibisubizo by’ukuri" },
      { label: "D", text: "Nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 2,
    questionText: "Ijambo “akayira” bivuga inzira nyabagendwa ifunganye yagenewe gusa:",
    choices: [
      { label: "A", text: "Abanyamaguru" },
      { label: "B", text: "Ibinyabiziga bigendera ku biziga bibiri" },
      { label: "C", text: "A na B ni ibisubizo by’ukuri", correct: true },
      { label: "D", text: "Nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 3,
    questionText: "Umurongo uciyemo uduce umenyesha ahegereye umurongo ushobora kuzuzwa n’uturanga gukata tw’ibara ryera utwo turanga cyerekezo tumenyesha :",
    choices: [
      { label: "A", text: "Igisate cy’umuhanda abayobozi bagomba gukurikira" },
      { label: "B", text: "Ahegereye umurongo ukomeje" },
      { label: "C", text: "Igabanurwa ry’umubare w’ibisate by’umuhanda mu cyerekezo bajyamo", correct: true },
      { label: "D", text: "A na C nibyo" },
    ]
  },
  {
    id: 4,
    questionText: "Ahantu ho kugendera mu muhanda herekanwa n’ibimenyetso bimurika ibinyabiziga ntibishobora kuhagenda :",
    choices: [
      { label: "A", text: "Biteganye" },
      { label: "B", text: "Ku murongo umwe" },
      { label: "C", text: "A na B nibyo" },
      { label: "D", text: "Nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 5,
    questionText: "Ibinyabiziga bikurikira bigomba gukorerwa isuzumwa buri mwaka:",
    choices: [
      { label: "A", text: "Ibinyabiziga bigenewe gutwara abagenzi muri rusange" },
      { label: "B", text: "Ibinyabiziga bigenewe gutwara ibintu birengeje toni 3.5" },
      { label: "C", text: "Ibinyabiziga bigenewe kwigisha gutwara" },
      { label: "D", text: "Nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 6,
    questionText: "Ubugari bwa romoruki ikuruwe n’ikinyamitende itatu ntibugomba kurenza ibipimo bikurikira:",
    choices: [
      { label: "A", text: "cm75" },
      { label: "B", text: "cm125" },
      { label: "C", text: "cm265" },
      { label: "D", text: "Nta gisubizo cy’ukuri", correct: true },
    ]
  },
  {
    id: 7,
    questionText: "Uburebure bw’ibinyabiziga bikurikira ntibugomba kurenga metero 11 :",
    choices: [
      { label: "A", text: "Ibifite umutambiko umwe uhuza imipira" },
      { label: "B", text: "Ibifite imitambiko ibiri ikurikiranye mu bugari bwayo" },
      { label: "C", text: "Makuzungu" },
      { label: "D", text: "Nta gisubizo cy’ukuri", correct: true },
    ]
  },
  {
    id: 8,
    questionText: "Ikinyabiziga kibujijwe guhagarara akanya kanini aha hakurikira :",
    choices: [
      { label: "A", text: "Ahatarengeje metero 1 imbere cyangwa inyuma y’ikinyabiziga gihagaze akanya gato cyangwa kanini :" },
      { label: "B", text: "Ahantu hari ibimenyetso bibuza byabugenewe" },
      { label: "C", text: "Aho abanyamaguru banyura mu muhanda ngo bakikire inkomyi" },
      { label: "D", text: "Ibisubizo byose nibyo", correct: true },
    ]
  },
  {
    id: 9,
    questionText: "Kunyuranaho bikorerwa:",
    choices: [
      { label: "A", text: "Mu ruhande rw’iburyo gusa" },
      { label: "B", text: "Igihe cyose ni ibumoso" },
      { label: "C", text: "Iburyo iyo unyura ku nyamaswa" },
      { label: "D", text: "Nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 10,
    questionText: "Icyapa cyerekana umuvuduko ntarengwa ikinyabiziga kitagomba kurenza gishyirwa gusa ku binyabiziga bifite uburemere ntarengwa bukurikira:",
    choices: [
      { label: "A", text: "Burenga toni 1" },
      { label: "B", text: "Burenga toni 2" },
      { label: "C", text: "Burenga toni 24" },
      { label: "D", text: "Nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 11,
    questionText: "Ahatari mu nsisiro umuvuduko ntarengwa mu isaha wa velomoteri ni:",
    choices: [
      { label: "A", text: "Km50", correct: true },
      { label: "B", text: "Km40" },
      { label: "C", text: "Km30" },
      { label: "D", text: "Nta gisubizo cy’ukuri" },
    ]
  },
  {
    id: 12,
    questionText: "Umuyobozi ugenda mu muhanda igihe ubugari bwawo budatuma anyuranaho nta nkomyi ashobora kunyura mu kayira k’abanyamaguru ariko amaze kureba ibi bikurikira:",
    choices: [
      { label: "A", text: "Umuvuduko w’abanyamaguru" },
      { label: "B", text: "Ubugari bw’umuhanda" },
      { label: "C", text: "Umubare w’abanyamaguru" },
      { label: "D", text: "Nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 13,
    questionText: "Ku byerekeye kwerekana ibinyabiziga n’ukumurika kwabyo ndetse no kwerekana ihindura ry’ibyerekezo byabyo. Birabujijwe gukora andi matara cyangwa utugarurarumuri uretse ibitegetswe ariko ntibireba amatara akurikira:",
    choices: [
      { label: "A", text: "Amatara ndanga" },
      { label: "B", text: "Amatara ari imbere mu modoka", correct: true },
      { label: "C", text: "Amatara ndangaburambarare" },
      { label: "D", text: "Ibisubizo byose nibyo" },
    ]
  },
  {
    id: 14,
    questionText: "Iyo nta mategeko awugabanya by’umwihariko umuvuduko ntarengwa w’amapikipiki mu isaha ni:",
    choices: [
      { label: "A", text: "Km25" },
      { label: "B", text: "Km70" },
      { label: "C", text: "Km40" },
      { label: "D", text: "Nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 15,
    questionText: "Uburyo bukoreshwa kugirango ikinyabiziga kigende gahoro igihe feri idakora neza babwita:",
    choices: [
      { label: "A", text: "Feri y’urugendo" },
      { label: "B", text: "Feri yo guhagarara umwanya munini" },
      { label: "C", text: "Feri yo gutabara", correct: true },
      { label: "D", text: "Nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 16,
    questionText: "Nibura ikinyabiziga gitegetswe kugira uduhanagurakirahure tungahe:",
    choices: [
      { label: "A", text: "2" },
      { label: "B", text: "3" },
      { label: "C", text: "1", correct: true },
      { label: "D", text: "Nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 17,
    questionText: "Amatara maremare y’ikinyabiziga agomba kuzimwa mu bihe bikurikira:",
    choices: [
      { label: "A", text: "Iyo umuhanda umurikiye umuyobozi abasha kureba muri metero 20" },
      { label: "B", text: "Iyo ikinyabiziga kigiye kubisikana n’ibindi", correct: true },
      { label: "C", text: "Iyo ari mu nsisiro" },
      { label: "D", text: "Ibisubizo byose ni ukuri" },
    ]
  },
  {
    id: 18,
    questionText: "Ikinyabiziga ntigishobora kugira amatara arenga abiri y’ubwoko bumwe keretse kubyerekeye amatara akurikira:",
    choices: [
      { label: "A", text: "Itara ndangamubyimba" },
      { label: "B", text: "Itara ryerekana icyerekezo" },
      { label: "C", text: "Itara ndangaburumbarare" },
      { label: "D", text: "Ibisubizo byose ni ukuri", correct: true },
    ]
  },
  {
    id: 19,
    questionText: "Ubugari bwa romoruki ikuruwe n’igare cyangwa velomoteri ntiburenza ibipimo bikurikira:",
    choices: [
      { label: "A", text: "cm25" },
      { label: "B", text: "cm125" },
      { label: "C", text: "cm45" },
      { label: "D", text: "Nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 20,
    questionText: "Ibinyabiziga bikoreshwa nka tagisi, bitegerereza abantu mu nzira nyabagendwa, bishobora gushyirwaho itara ryerekana ko ikinyabiziga kitakodeshejwe. Iryo tara rishyirwaho ku buryo bukurikira:",
    choices: [
      { label: "A", text: "Ni itara ry’icyatsi rishyirwa imbere ku kinyabiziga", correct: true },
      { label: "B", text: "Ni itara ry’icyatsi rishyirwa ibumoso" },
      { label: "C", text: "Ni itara ry’umuhondo rishyirwa inyuma" },
      { label: "D", text: "A na C ni ibisubizo by’ukuri" },
    ]
  },
  {
    id: 21,
    questionText: "Za otobisi zagenewe gutwara abanyeshuri zishobora gushyirwaho amatara abiri asa n’icunga rihishije amyasa kugirango yerekane ko zihagaze no kwerekana ko bagomba kwitonda, ayo matara ashyirwaho ku buryo bukurikira :",
    choices: [
      { label: "A", text: "Amatara abiri ashyirwa inyuma" },
      { label: "B", text: "Amatara abiri ashyirwa imbere" },
      { label: "C", text: "Rimwe rishyirwa imbere irindi inyuma", correct: true },
      { label: "D", text: "b na c ni ibisubizo by’ukuri" },
    ]
  },
  {
    id: 22,
    questionText: "Itara ryo guhagarara ry’ibara ritukura rigomba kugaragara igihe ijuru rikeye nibura mu ntera ikurikira:",
    choices: [
      { label: "A", text: "Metero 100 ku manywa na metero 20 mu ijoro" },
      { label: "B", text: "Metero 150 ku manywa na metero50 mu ijoro" },
      { label: "C", text: "Metero 200 ku manywa na metero100 mu ijoro" },
      { label: "D", text: "Nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 23,
    questionText: "Iyo umuvuduko w’ibinyabiziga bidapakiye ushobora kurenga km50 mu isaha ahategamye, bigomba kuba bifite ibikoresho by’ihoni byumvikanira mu ntera:",
    choices: [
      { label: "A", text: "Metero 100" },
      { label: "B", text: "Metero 200" },
      { label: "C", text: "Metero 50", correct: true },
      { label: "D", text: "Metero 150" },
    ]
  },
  {
    id: 24,
    questionText: "Birabujijwe kugenza ibinyabiziga bigendeshwa na moteri naza romoruki zikururwa nabyo, iyo ibiziga byambaye inziga zidahagwa cyangwa inziga zikururuka zifite umubyimba uri hasi ya cm 4. Ariko ibyo ntibikurikizwa kubinyabiziga bikurikira:",
    choices: [
      { label: "A", text: "Ku binyabiziga by’ingabo bijya ahatarenga km25" },
      { label: "B", text: "Ibinyabiziga bihinga" },
      { label: "C", text: "Ibinyabiziga bya police" },
      { label: "D", text: "Nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 25,
    questionText: "Igice cy'inzira nyabagendwa kigarukira ku mirongo ibiri yera icagaguye ibangikanye kandi gifite ubugari budahagije kugira ngo imodoka zitambuke neza, kiba ari:",
    choices: [
      { label: "A", text: "Ahanyurwa n’amagare na velomoteri" },
      { label: "B", text: "Ahanyurwa n’ingorofani" },
      { label: "C", text: "Ahanyurwa n’ibinyamitende", correct: true },
      { label: "D", text: "Nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 26,
    questionText: "Ubugari bwa romoruki ntiburenza ubugari bw’ikinyabiziga kiyikurura iyo ikuruwe n’ibinyabiziga bikurikira:",
    choices: [
      { label: "A", text: "Igare" },
      { label: "B", text: "Velomoteri" },
      { label: "C", text: "Ipikipiki ifite akanyabiziga kometse ku ruhande rwayo", correct: true },
      { label: "D", text: "Nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 27,
    questionText: "Iyo hatarimo indi myanya birabujijwe gutwara ku ntebe y’imbere y’imodoka abana badafite imyaka:",
    choices: [
      { label: "A", text: "Imyaka 10" },
      { label: "B", text: "Imyaka 12", correct: true },
      { label: "C", text: "Imyaka 7" },
      { label: "D", text: "Ntagisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 28,
    questionText: "Icyapa kivuga gutambuka mbere y’ibinyabiziga biturutse imbere gifite amabara akurikira:",
    choices: [
      { label: "A", text: "Ubuso ni umweru" },
      { label: "B", text: "Ikirango ni umutuku n’umukara" },
      { label: "C", text: "Ikirango ni umweru n’umukara" },
      { label: "D", text: "Nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 29,
    questionText: "Ni ryari itegeko rigenga gutambuka mbere kw’iburyo rikurikizwa mu masangano:",
    choices: [
      { label: "A", text: "Iyo nta cyapa cyo gutambuka mbere gihari" },
      { label: "B", text: "Iyo ikimenyetso kimurika cyagenewe ibinyabiziga kidakora" },
      { label: "C", text: "A na B ni ibisubizo by’ukuri", correct: true },
      { label: "D", text: "Nta gisubizo cy’ukuri" },
    ]
  },
  {
    id: 30,
    questionText: "Ibimenyetso bimurika byerekana uburyo bwo kugendera mu muhanda kw'ibinyabiziga bishyirwa iburyo bw'umuhanda. Ariko bishobora no gushyirwa ibumoso cyangwa hejuru y’umuhanda:",
    choices: [
      { label: "A", text: "Hakurikijwe icyerekezo abagenzi bireba baganamo" },
      { label: "B", text: "Hakurikijwe icyo ibyo bimenyetso bigamije kwerekana" },
      { label: "C", text: "Kugirango birusheho kugaragara neza", correct: true },
      { label: "D", text: "Ibisubizo byose ni ukuri" },
    ]
  },
  {
    id: 31,
    questionText: "Iyo itara ry’umuhondo rimyatsa rikoreshejwe mu masangano y’amayira ahwanyije agaciro rishyirwa ahagana he:",
    choices: [
      { label: "A", text: "Kuri buri nzira" },
      { label: "B", text: "Hagati y’amasangano" },
      { label: "C", text: "Iburyo bw’amasangano" },
      { label: "D", text: "a na b ni ibisubizo by’ ukuri", correct: true },
    ]
  },
  {
    id: 32,
    questionText: "Inkombe z’inzira nyabagendwa cyangwa z’umuhanda zishobora kugaragazwa n’ibikoresho ngarurarumuri. Ibyo bikoresho bigomba gushyirwaho ku buryo abagenzi babibona :",
    choices: [
      { label: "A", text: "Babona gusa ibumoso bwabo iby’ibara ritukura" },
      { label: "B", text: "Iburyo babona iby’ibara risa n’icunga rihishije gusa" },
      { label: "C", text: "Babona iby’ibara ry’umuhondo ibumoso" },
      { label: "D", text: "Nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 33,
    questionText: "Ibinyabiziga bikurikira bigomba gukorerwa isuzumwa rimwe mu mezi 6:",
    choices: [
      { label: "A", text: "Ibinyabiziga bitwara abagenzi muri rusange" },
      { label: "B", text: "Ibinyabiziga bigenewe gutwara ibintu birengeje toni 3.5" },
      { label: "C", text: "Ibinyabiziga bigenewe kwigisha gutwara" },
      { label: "D", text: "Ibisubizo byose ni ukuri", correct: true },
    ]
  },
  {
    id: 34,
    questionText: "Iyo kuyobya umuhanda ari ngombwa bigaragazwa kuva aho uhera no kuburebure bwawo n’icyapa gifite ubuso bw’amabara akurikira:",
    choices: [
      { label: "A", text: "Ubururu", correct: true },
      { label: "B", text: "Umweru" },
      { label: "C", text: "Umutuku" },
      { label: "D", text: "Nta gisubizo cy’ukuri" },
    ]
  },
  {
    id: 35,
    questionText: "Ku mihanda ibyapa bikurikira bigomba kugaragazwa ku buryo bumwe:",
    choices: [
      { label: "A", text: "Ibyapa biyobora n’ibitegeka" },
      { label: "B", text: "Ibyapa biburira n’ibitegeka" },
      { label: "C", text: "Ibyapa bibuza n’ibitegeka", correct: true },
      { label: "D", text: "Nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 36,
    questionText: "Ni iyihe feri ituma imodoka igenda buhoro kandi igahagarara ku buryo bwizewe bubangutse kandi nyabwo, uko imodoka yaba yikoreye kose yaba igeze ahacuramye cyangwa ahaterera:",
    choices: [
      { label: "A", text: "Feri y’urugendo", correct: true },
      { label: "B", text: "Feri yo gutabara" },
      { label: "C", text: "Feri yo guhagarara umwanya munini" },
      { label: "D", text: "Nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 37,
    questionText: "Ibizirikisho by’iminyururu cyangwa by’insinga kimwe n’ibindi by’ingoboka bikoreshwa gusa igihe nta kundi umuntu yabigenza kandi nta kindi bigiriwe uretse gusa kugirango ikinyabiziga kigere aho kigomba gukorerwa kandi nturenze na rimwe km 20 mu isaha, ibyo bizirikisho bigaragazwa ku buryo bukurikira:",
    choices: [
      { label: "A", text: "Agatambaro gatukura kuri cm 50 z’umuhanda" },
      { label: "B", text: "Ikimenyetso cy’itara risa n’icunga rihishije" },
      { label: "C", text: "Icyapa cyera cya mpande enye zingana gifite cm 20 kuri buri ruhande" },
      { label: "D", text: "Nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 38,
    questionText: "Uretse mu mujyi, ku yindi mihanda yajyenwe na minisitiri ushinzwe gutwara abantu n’ibintu, uburemere ntarengwa ku binyabiziga bifite imitambiko itatu cyangwa irenga hatarimo makuzungu ni :",
    choices: [
      { label: "A", text: "Toni 10" },
      { label: "B", text: "Toni 12" },
      { label: "C", text: "Toni 16", correct: true },
      { label: "D", text: "Toni 24" },
    ]
  },
  {
    id: 39,
    questionText: "Ubugari bw’imizigo yikorewe n’ibinyamitende itatu n’ubwiyikorewe n’ibinyamitende 4 bifite cyangwa bidafite moteri kimwe n’ubw’iyikorewe na romuruki zikuruwe n’ibyo binyabiziga ntibushobora kurenga ibipimo bikurikira:",
    choices: [
      { label: "A", text: "cm 30 ku bugari bw’icyo kinyabiziga kidapakiye" },
      { label: "B", text: "Ubugari ntarengwa budakuka ni metero 2 na sentimetero 50" },
      { label: "C", text: "A na B ni ibisubizo by’ukuri", correct: true },
      { label: "D", text: "Nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 40,
    questionText: "Kunyura ku binyabiziga bindi, uretse icy’ibiziga bibiri, bibujijwe aha hakurikira:",
    choices: [
      { label: "A", text: "Hafi y’iteme iyo hari umuhanda ufunganye" },
      { label: "B", text: "Hafi y’aho abanyamaguru banyura" },
      { label: "C", text: "Hafi y’ibice by’umuhanda bimeze nabi" },
      { label: "D", text: "Ibi bisubizo byose ni ukuri", correct: true },
    ]
  },
  {
    id: 41,
    questionText: "Iyo nta mategeko awugabanya by’umwihariko, umuvuduko ntarengwa ku modoka zitwara abagenzi mu buryo bwa rusange ni:",
    choices: [
      { label: "A", text: "Km 60 mu isaha", correct: true },
      { label: "B", text: "Km 40 mu isaha" },
      { label: "C", text: "Km 25 mu isaha" },
      { label: "D", text: "Km20 mu isaha" },
    ]
  },
  {
    id: 42,
    questionText: "Iyo nta mategeko awugabanya by’umwihariko, umuvuduko ntarengwa ku modoka zikoreshwa nk’amavatiri y’ifasi cyangwa amatagisi zifite uburemere bwemewe butarenga kilogarama 3500 ni:",
    choices: [
      { label: "A", text: "Km 60 mu isaha" },
      { label: "B", text: "Km 40 mu isaha" },
      { label: "C", text: "Km 75 mu isaha", correct: true },
      { label: "D", text: "Km20 mu isaha" },
    ]
  },
  {
    id: 43,
    questionText: "Ikinyabiziga kibujijwe guhagarara akanya kanini aha hakurikira :",
    choices: [
      { label: "A", text: "Imbere y’ahantu hinjirwa hakasohokerwa n’abantu benshi" },
      { label: "B", text: "Mu muhanda aho ugabanyijemo ibisate bigaragazwa n’imirongo idacagaguye" },
      { label: "C", text: "A na B ni ibisubizo by’ukuri", correct: true },
      { label: "D", text: "Nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 44,
    questionText: "Iyo bwije kugeza bukeye cyangwa bitewe n’uko ibihe bimeze nk’igihe cy’ibihu cyangwa cy’imvura bitagishoboka kubona neza muri m 200, udutsiko twose tw’abanyamaguru nk’imperekerane cyangwa udutsiko tw’abanyeshuri bari ku murongo bayobowe n’umwarimu, iyo bagenda mu muhanda ku isonga hakaba hari abantu barenze umwe bagomba kugaragazwa kuburyo bukurikira :",
    choices: [
      { label: "A", text: "Imbere ni itara ry’umuhondo ritwariwe ibumoso" },
      { label: "B", text: "Inyuma ni itara ryera ritwariwe ibumoso n’umuntu uri ku murongo w’inyuma hafi y’umurongo ugabanya umuhanda mo kabiri" },
      { label: "C", text: "A na B ni ibisubizo by’ukuri" },
      { label: "D", text: "Nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 45,
    questionText: "Utuyira turi ku mpande z’umuhanda n’ inkengero zigiye hejuru biharirwa abanyamaguru mu bihe bikurikira:",
    choices: [
      { label: "A", text: "Iyo hari amategeko yihariye yerekanwa n’ibimenyetso" },
      { label: "B", text: "Iyo badatatanye kandi bayobowe n’umwarimu" },
      { label: "C", text: "Iyo hatari amategeko yihariye yerekanwa n’ibimenyetso", correct: true },
      { label: "D", text: "Ibisubizo byose ni ukuri" },
    ]
  },
  {
    id: 46,
    questionText: "Imburira zimurika zemerewe gukoreshwa kugirango bamenyeshe umuyobozi ko bagiye kumunyuraho aha hakurikira:",
    choices: [
      { label: "A", text: "Mu nsisiro gusa" },
      { label: "B", text: "Ahegereye inyamaswa zikurura" },
      { label: "C", text: "Hafi y’amatungo" },
      { label: "D", text: "Nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 47,
    questionText: "Uburemere ntarengwa bwemewe ntibushobora kurenga ½ cy’uburemere bw’ikinyabiziga gikurura nubw’umuyobozi kuri romoruki zikurikira :",
    choices: [
      { label: "A", text: "Romoruki ifite feri y’urugendo" },
      { label: "B", text: "Romoruki idafite feri y’urugendo", correct: true },
      { label: "C", text: "Romoruki itarenza kg 750" },
      { label: "D", text: "Nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 48,
    questionText: "Ibinyabiziga bifite ubugari bufite ibipimo bikurikira bigomba kugira amatara ndangaburumbarare :",
    choices: [
      { label: "A", text: "Metero 2 na cm 10", correct: true },
      { label: "B", text: "Metero 2 na cm 50" },
      { label: "C", text: "Metero 3" },
      { label: "D", text: "Metero 2" },
    ]
  },
  {
    id: 49,
    questionText: "Nta tara na rimwe cyangwa akagarurarumuri bishobora kuba bifunze ku buryo igice cyabyo cyo hasi cyane kimurika kitaba kiri hasi y’ibipimo bikurikira kuva ku butaka igihe ikinyabiziga kidapakiye :",
    choices: [
      { label: "A", text: "Cm 30" },
      { label: "B", text: "Cm 40", correct: true },
      { label: "C", text: "Cm 50" },
      { label: "D", text: "Metero 1 na cm 55" },
    ]
  },
  {
    id: 50,
    questionText: "Iyo ikinyabiziga gifite amatara abiri cyangwa menshi y’ubwoko bumwe ayo matara agomba kugira ibara rimwe n’ingufu zingana kandi akagomba gushyirwaho ku buryo buteganye uhereye ku murongo ugabanya ikinyabizigamo kabiri mu burebure bwacyo. Ariko ibi ntibikurikizwa ku matara akurikira:",
    choices: [
      { label: "A", text: "itara ndangamubyimba" },
      { label: "B", text: "itara ndangaburumbarare" },
      { label: "C", text: "itara ribonesha icyapa kiranga numero y’ikinyabiziga inyuma", correct: true },
      { label: "D", text: "A na B byose nibyo" },
    ]
  },
  {
    id: 51,
    questionText: "Ahari hejuru cyane y’ubuso bumurika h’amatara ndangambere na ndanganyuma ntihashobora kuba aharenze ibipimo bikurikira hejuru y’ubutaka iyo ikinyabiziga kidapakiye:",
    choices: [
      { label: "A", text: "m1 na cm 50" },
      { label: "B", text: "m1 na cm 75" },
      { label: "C", text: "m 1 na cm 90", correct: true },
      { label: "D", text: "m2 na cm 10" },
    ]
  },
  {
    id: 52,
    questionText: "Ni ryari ikinyabiziga gishobora kugenda mu muhanda moteri itaka cyangwa vitesi idakora:",
    choices: [
      { label: "A", text: "igihe kigenda ahamanuka" },
      { label: "B", text: "igihe gikuruwe n’ikindi kinyabiziga", correct: true },
      { label: "C", text: "igihe gifite feri y’urugendo" },
      { label: "D", text: "ibisubizo byose ni byo" },
    ]
  },
  {
    id: 52,
    questionText: "Umurongo mugari wera udacagaguye ushobora gucibwa ku muhanda kugirango ugaragaze ibi bikurikira:",
    choices: [
      { label: "A", text: "inkombe mpimbano z’umuhanda", correct: true },
      { label: "B", text: "ahahagararwa umwanya muto n’umunini" },
      { label: "C", text: "ahanyura abayobozi b’amagare" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 53,
    questionText: "Buri modoka cyangwa buri romoruki ikuruwe n’iyo modoka bishobora kugira itara risa n’icyatsi kibisi bituma umuyobozi yerekana ko yabonye ikimenyetso cy’uwitegura kumunyuraho. Iryo tara rigomba gushyirwa aha hakurikira:",
    choices: [
      { label: "A", text: "hafi y’inguni y’ibumoso bw’ikinyabiziga" },
      { label: "B", text: "inyuma hafi y’impera y’iburyo bw’ikinyabiziga" },
      { label: "C", text: "inyuma ahegereye inguni y’iburyo" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 54,
    questionText: "Ibinyabiziga bikurikira bigomba kugira icyerekana umuvuduko kiri aho umuyobozi areba neza kandi kigahora kitabwaho kugirango kigume gukora neza:",
    choices: [
      { label: "A", text: "ibinyabiziga bifite umuvuduko nibura wa km 60 mu isaha" },
      { label: "B", text: "ibinyabiziga bishobora kurenza km 40 mu isaha", correct: true },
      { label: "C", text: "ibinyabiziga bishobora kurenza km 30 mu isaha" },
      { label: "D", text: "ibinyabiziga bishobora kurenza km 25 mu isaha" },
    ]
  },
  {
    id: 55,
    questionText: "Ubugari bw’imizigo yikorewe n’ipikipiki idafite akanyabiziga ko kuruhande kimwe n’ubwa romoruki ikuruwe na bene icyo kinyabiziga ntibushobora kurenza ibipimo bikurikira:",
    choices: [
      { label: "A", text: "m 1.25", correct: true },
      { label: "B", text: "cm 30" },
      { label: "C", text: "cm 75" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 56,
    questionText: "Ibinyabiziga bikurikira bigomba kugira itara ry’ubururu rimyatsa riboneka mu mpande zose:",
    choices: [
      { label: "A", text: "ibinyabiziga bifite ubugari burenga m 2 na cm 10" },
      { label: "B", text: "ibinyabiziga bya police y’igihugu" },
      { label: "C", text: "ibinyabiziga ndakumirwa", correct: true },
      { label: "D", text: "ibisubizo byose ni ukuri" },
    ]
  },
  {
    id: 57,
    questionText: "Ibinyabiziga bihinga n’ibindi bikoresho byihariye bikoreshwa n’ibigo bipatana imirimo, iyo bigenda mu nzira nyabagendwa igihe cya nijoro cyangwa bitewe n’uko ibihe bimeze bitagishoboka kubona neza muri m 200 bishobora kugaragazwa inyuma n’amatara 2 atukura, bipfa kuba bitarenza ibipimo bikurikira:",
    choices: [
      { label: "A", text: "kutarenza umuvuduko wa km20 mu isaha" },
      { label: "B", text: "uburebure bwabyo habariwemo ibyo bitwaye bukaba butarengeje m6" },
      { label: "C", text: "uburebure ntarengwa ntiburenga m8" },
      { label: "D", text: "A na B nibyo bisubizo by’ukuri", correct: true },
    ]
  },
  {
    id: 58,
    questionText: "Iyo romoruki iziritse ku kinyamitende, velomoteri n’amapikipiki bidafite akanyabiziga ko kuruhande uretse ikinyamitende na velomoteri bidafite umuyobozi, iyo uburumbarare bwayo cyangwa bw’ibyo yikoreye bituma itara ry’ikinyabiziga gikurura ritagaragara igihe bitagishoboka kubona neza muri m 200 bigomba kugaragazwa ku buryo bukurikira:",
    choices: [
      { label: "A", text: "itara ryera cyangwa ry’umuhondo cyangwa risa n’icunga rihishije riri kuri rumoruki inyuma", correct: true },
      { label: "B", text: "itara ry’icyatsi cyangwa ry’umuhondo cyangwa risa n’icunga rihishije riri kuri rumoruki inyuma" },
      { label: "C", text: "A na B ni ibisubizo by’ukuri" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 59,
    questionText: "Ku kinyabiziga cyangwa ibinyabiziga bikururana igice kirenga ku biziga ntikigomba kurenga ibipimo bikurikira:",
    choices: [
      { label: "A", text: "inyuma ni m 3 na cm 50", correct: true },
      { label: "B", text: "imbere ni m 1 na cm 70" },
      { label: "C", text: "A na B ni ibisubizo by’ukuri" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 60,
    questionText: "Iyo amatara y’ikinyabiziga agomba gucanwa kandi igihe imizigo isumba impera y’ikinyabiziga ho metero irenga igice gihera cy’imizigo kigaragazwa ku buryo bukurikira:",
    choices: [
      { label: "A", text: "itara ritukura cyangwa akagarurarumuri ku mutuku ku manywa" },
      { label: "B", text: "agatambaro gatukura gafite nibura cm 50 z’uruhande mu ijoro" },
      { label: "C", text: "itara ry’umuhondo cyangwa akagarurarumuri k’umuhondo" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 61,
    questionText: "Iyo imizigo igizwe n’ibinyampeke, ikawa, ipamba idatonoye, ibishara, ibyatsi, ibishami cyangwa ubwatsi bw’amatungo bidahambiriye uretse amapaki afunze, ubugari bwayo bushobora kugera ku bipimo bikurikira:",
    choices: [
      { label: "A", text: "m 2.50" },
      { label: "B", text: "m 2.75", correct: true },
      { label: "C", text: "m 3" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 62,
    questionText: "Uretse mu mijyi kuyindi mihanda yagenywe na minisiteri ushinzwe gutwara ibintu n’abantu, uburemere ntarengwa bwemewe ku binyabiziga bifatanye bifite imitambiko itatu ni:",
    choices: [
      { label: "A", text: "toni 20" },
      { label: "B", text: "toni 16 ( c) toni 12" },
      { label: "D", text: "toni 10" },
    ]
  },
  {
    id: 63,
    questionText: "Buri modoka cyangwa buri romoruki ikuruwe n’iyo modoka bishobora kugira itara rituma umuyobozi yerekana ko yabonye ikimenyetso cy’uwitegura kumunyuraho. Iryo tara rifite amabara akurikira:",
    choices: [
      { label: "A", text: "umuhondo" },
      { label: "B", text: "icyatsi kibisi", correct: true },
      { label: "C", text: "umweru" },
      { label: "D", text: "umutuku" },
    ]
  },
  {
    id: 64,
    questionText: "Ikinyabiziga cyangwa ibinyabiziga bikururana bifite imitambiko ibiri ikurikiranye mu bugari bwayo ni ukuvuga imitambiko yihindukiza kucyo ifungiyeho, uburebure bwabyo ntibugomba kurenza ibipimo bikurikira:",
    choices: [
      { label: "A", text: "m11" },
      { label: "B", text: "m10" },
      { label: "C", text: "m7", correct: true },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 65,
    questionText: "Bumwe muri ubu bwoko bwa feri ituma imodoka iguma aho iri uko yaba yikoreye kose ku muzamuko cyangwa ku gacuri bya 16%, imyanya ya feri igomba gufata igakomeza kwegera kuburyo bw’ibyuma niyo umuyobozi yaba atarimo:",
    choices: [
      { label: "A", text: "feri yo guhagarara umwanya munini", correct: true },
      { label: "B", text: "feri y’urugendo" },
      { label: "C", text: "feri yo gutabara" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 66,
    questionText: "Utugarurarumuri turi mu mbavu z’ikinyabiziga tugomba kugira ibara rikurikira:",
    choices: [
      { label: "A", text: "umweru" },
      { label: "B", text: "umuhondo", correct: true },
      { label: "C", text: "umutuku" },
      { label: "D", text: "Nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 67,
    questionText: "Romoruki zifite ubugari ntarengwa bwa cm 80 zishobora gushyirwaho akagarurarumuri kamwe gusa iyo zikuruwe n’ibinyabiziga bikurikira:",
    choices: [
      { label: "A", text: "velomoteri" },
      { label: "B", text: "ipikipiki idafite akanyabiziga ku ruhande", correct: true },
      { label: "C", text: "amavatiri y’ifasi" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 68,
    questionText: "Amatara maremare y’ibara ryera cyangwa ry’umuhondo agomba, nijoro igihe ijuru rikeye, kumurika mu muhanda mu ntera ya m 100 nibura imbere y’ikinyabiziga, ariko ku binyabiziga bifite moteri itarengeje za sentimetero kibe 125 iyo ntera igira ibipimo bikurikira:",
    choices: [
      { label: "A", text: "m200" },
      { label: "B", text: "m100" },
      { label: "C", text: "m85" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 69,
    questionText: "Iyo banyuze iruhande rw’inkomyi abanyamaguru bagomba gukikira banyuze mu muhanda, abayobozi bagomba gusiga umwanya ufite ubugari bwa m 1 nibura hagati yabo nayo. Iyo ibyo bidashobora kubahirizwa kandi umunyamaguru akaba anyura hafi yiyo nkomyi, umuyobozi agomba kuyikikira afite umuvuduko utarengeje ibipimo bikurikira:",
    choices: [
      { label: "A", text: "km 10 mu isaha" },
      { label: "B", text: "km 20 mu isaha" },
      { label: "C", text: "km 30 mu isaha" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 70,
    questionText: "Guhagarara akanya gato no guhagarara akanya kanini bibujijwe cyane cyane aha hakurikira:",
    choices: [
      { label: "A", text: "ku mihanda y’icyerekezo kimwe hose" },
      { label: "B", text: "mu ruhande ruteganye n’urwo ikindi kinyabiziga gihagazemo akanya gato cyangwa kanini", correct: true },
      { label: "C", text: "ku mihanda ibisikanirwamo, iyo ubugari bw’umwanya w’ibinyabiziga ugomba gutuma bibisikana butagifite m12" },
      { label: "D", text: "ibisubizo byose nibyo" },
    ]
  },
  {
    id: 71,
    questionText: "Amatara ndangambere n’aya ndanganyuma y’imodoka zitarengeje m 6 z’uburebure na m 2 z’ubugari habariwemo imitwaro kdi nta kinyabiziga kindi kiziritseho ashobora gusimburwa n’amatara akurikira, iyo ibyo binyabiziga bihagaze umwanya muto cyangwa munini mu nsisiro bibangikanye ku ruhande rw’umuhanda:",
    choices: [
      { label: "A", text: "amatara magufi" },
      { label: "B", text: "amatara ndangaburumbarare" },
      { label: "C", text: "amatara yo guhagarara umwanya munini", correct: true },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 72,
    questionText: "Iyo kuva bwije kugeza bukeye cyangwa bitewe nuko ibihe bimeze nk’igihe cy’igihu cyangwa cy’imvura bitagishoboka kubona neza muri m 200, imirongo y’ingabo z’igihugu zigendera kuri gahunda n’utundi dutsiko twose tw’abanyamaguru nk’imperekerane cyangwa udutsiko tw’abanyeshuri bari ku murongo bayobowe na mwarimu, iyo bagenda mu muhanda ku isonga hakaba hari abantu barenze umwe, bagaragzwa ku buryo bukurikira:",
    choices: [
      { label: "A", text: "imbere ni itara ryera ritwariwe ku ruhande rw’ibumoso n’umuntu uri ku murongo w’imbere hafi y’umurongo ugabanya umuhanda mo kabiri", correct: true },
      { label: "B", text: "inyuma ni itara umuhondo ritwariwe ku ruhande rw’ibumoso n’umuntu uri ku murongo w’inyuma hafi y’umurongo ugabanya umuhanda mo kabiri" },
      { label: "C", text: "A na B ni ibisubizo by’ukuri" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 73,
    questionText: "Imizigo yikorewe n’amagare, velomoteri, amapikipiki, ibinyamitende by’ibiziga bitatu nibyo ibiziga bine bifite cyangwa bidafite moteri inyuma ntishobora kurenza ibipimo bikurikira:",
    choices: [
      { label: "A", text: "cm 20" },
      { label: "B", text: "cm 30" },
      { label: "C", text: "cm 50", correct: true },
      { label: "D", text: "cm 60" },
    ]
  },
  {
    id: 74,
    questionText: "Itara ndanganyuma rigomba gushyirwa aha hakurikira:",
    choices: [
      { label: "A", text: "ahagereye inguni y’ibumoso y’ikinyabiziga", correct: true },
      { label: "B", text: "ahagereye inguni y’iburyo bw’ikinyabiziga" },
      { label: "C", text: "inyuma kandi y’impera y’ibumoso bw’ikinyabiziga" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 75,
    questionText: "Nta tara na rimwe cyangwa utugarurarumuri bishobora kuba bifunze kuburyo igice cyabyo cyo hasi cyane kimurika kitaba kiri hasi ya cm 40 kuva ku butaka igihe ikinyabiziga kidapakiye ariko ibyo ntibikurikizwa ku matara akurikira:",
    choices: [
      { label: "A", text: "amatara kamenabihu" },
      { label: "B", text: "amatara yo gusubira inyuma" },
      { label: "C", text: "A na B ni ibisubizo by’ukuri", correct: true },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 76,
    questionText: "Iyo tumuritswe n’amatara y’urugendo y’i kinyabiziga utugarurarumuri tugomba n’ijoro, igihe ijuru rikeye kubonwa n’umuyobozi w’ikinyabiziga kiri mu ntera ikurikira:",
    choices: [
      { label: "A", text: "metero 100" },
      { label: "B", text: "metero 150", correct: true },
      { label: "C", text: "metero 200" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 77,
    questionText: "Ibinyabiziga bigendeshwa na moteri, hatarimo velomoteri n’ibinyabiziga bidapakiye umuvuduko wabyo udashobora kurenga km 50 mu isaha ahateganye bigomba kuba bifite ibikoresho by’ihoni byumvikanira mu ntera ikurikira:",
    choices: [
      { label: "A", text: "metero 200" },
      { label: "B", text: "metero 150" },
      { label: "C", text: "metero 100", correct: true },
      { label: "D", text: "metero 50" },
    ]
  },
  {
    id: 78,
    questionText: "Ahatari mu nsisiro ibyapa biburira n’ibyapa byo gutambuka mbere bigomba gushyirwa mu ntera ikurikira y’ahantu habyerekana:",
    choices: [
      { label: "A", text: "metero 150 kugeza kuri 200", correct: true },
      { label: "B", text: "metero 100 kugeza kuri 150" },
      { label: "C", text: "metero 50 kugeza kuri 100" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 79,
    questionText: "Inkombe z’inzira nyabagendwa cyangwa z’umuhanda zishobora kugaragazwa n’ibikoresho ngarurarumuri. Ibyo bikoresho bigomba gushyirwaho ku buryo abagenzi babibona ku buryo bukurikira:",
    choices: [
      { label: "A", text: "babona iburyo bwabo ibyibara ritukura cyangwa ibisa n’icunga rihishije" },
      { label: "B", text: "ibumoso babona iby’ibara ryera" },
      { label: "C", text: "A na B ni ibisubizo by’ukuri", correct: true },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 80,
    questionText: "Ahatari mu nsisiro, umuyobozi wese ugenza ikinyabiziga kimwe cyangwa ibinyabiziga bikomatanye bifite uburemere ntarengwa bwemewe burenga ibiro 3500 cyangwa bifite uburebure bwite burenga metero 10 agomba, keretse iyo anyuze cyangwa agiye kunyura ku bindi binyabiziga, gusiga hagati y’ikinyabiziga cye n’iki muri imbere umwanya uhagije kugirango ibinyabiziga bimuhiseho bishobore kuhigobeka bidateje impanuka igihe bibaye ngombwa ariko ibyo ntibikurikizwa mu bihe bikurikira:",
    choices: [
      { label: "A", text: "mu gihe ibigendera mu muhanda ari byinshi kimwe no mu duce tw'inzira nyabagendwa aho kunyuranaho bibujijwe", correct: true },
      { label: "B", text: "igihe ibigendera mu muhanda ari byinshi" },
      { label: "C", text: "mu duce tw’inzira nyabagendwa aho kunyuranaho bibujijwe" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 96,
    questionText: "Ibiziga by’ibinyabiziga bigendeshwa na moteri n’ibya velomoteri kimwe n’ibya romoruki zabyo bigomba kuba byambaye inziga zihagwa zifite amano n’ubujyakuzimu butari munsi ya milimetero imwe ku migongo yabyo yose nubudodo bwabyo ntibugire ahantu na hamwe bugaragara kandi ntibugire aho byacitse bikomeye mu mpande zabyo ariko ibyo ntibikurikizwa ku binyabiziga bikurikira:",
    choices: [
      { label: "A", text: "ibinyabiziga bidapakiye kandi bitajya birenza umuvuduko wa km 25 mu isaha ahateganye", correct: true },
      { label: "B", text: "ibinyabiziga bya police bijya ahatarenga km 25 uvuye aho biba" },
      { label: "C", text: "A na B ni ibisubizo by’ukuri" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 81,
    questionText: "Amatara ndangacyerekezo agomba kuba agizwe n’ibintu bifashe ku rumuri rumyasa, biringaniye ku buryo bigira umubare utari igiharwe ku mpande z’imbere n’inyuma z’ikinyabiziga ayo matara aba afite amabara akurikira:",
    choices: [
      { label: "A", text: "amatara y’imbere aba yera cyangwa ari umuhondo" },
      { label: "B", text: "ayinyuma aba atukura cyangwa asa n’icunga rihishije" },
      { label: "C", text: "A na B ni ibisubizo by’ukuri", correct: true },
      { label: "D", text: "ayinyuma aba asa n’icunga rihishije" },
    ]
  },
  {
    id: 82,
    questionText: "Amahoni y’ibinyabiziga bigendeshwa na moteri agomba kohereza ijwi ry’injyana imwe rikomeza kandi ridacengera amatwi ariko ibinyabiziga bikurikira bishobora kugira ihoni ridasanzwe ridahuye n’ibivuzwe haruguru:",
    choices: [
      { label: "A", text: "ibinyabiziga ndakumirwa" },
      { label: "B", text: "ibinyabiziga bikora ku mihanda" },
      { label: "C", text: "ibinyabiziga bifite ubugari burenze m 2.10" },
      { label: "D", text: "A na B ni ibisubizo by’ukuri", correct: true },
    ]
  },
  {
    id: 83,
    questionText: "Icyapa kibuza kunyura kubindi binyabiziga byose uretse ibinyamitende ibiri n’amapikipiki adafite akanyabiziga ku ruhande gifite ibimenyetso by’amabara akurikira:",
    choices: [
      { label: "A", text: "umweru n’umukara" },
      { label: "B", text: "umutuku n’umukara", correct: true },
      { label: "C", text: "ubururu" },
      { label: "D", text: "A na B ni ibisubizo by’ukuri" },
    ]
  },
  {
    id: 84,
    questionText: "Icyapa kivuga ko hatanyurwa mu byerekezo byombi kirangwa n’ubuso bw’ibara rikurikira:",
    choices: [
      { label: "A", text: "umukara" },
      { label: "B", text: "umweru", correct: true },
      { label: "C", text: "ubururu" },
      { label: "D", text: "umutuku" },
    ]
  },
  {
    id: 85,
    questionText: "Ibinyabiziga bikurikira bigomba kugira ibikoresho by’ihoni byumvikanira mu ntera ya m 20:",
    choices: [
      { label: "A", text: "amapikipiki" },
      { label: "B", text: "velomoteri", correct: true },
      { label: "C", text: "ibinyabiziga bigendeshwa na moteri bidapakiye" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 86,
    questionText: "Imirongo y’ingabo z’igihugu zigendera kuri gahunda n’utundi dutsiko twose tw’abanyamaguru nk’imperekerane cyangwa udutsiko tw’abanyeshuri iyo bitagishoboka kubona neza muri m200, bagaragazwa ni itara ryera imbere naho inyuma ni itara ry’umutuku ariko iyo uburebure bwiyo mirongo cyangwa bw’utwo dutsiko burenga m6 impande zatwo cyangwa zayo zigaragazwa ku buryo bukurikira:",
    choices: [
      { label: "A", text: "itara rimwe cyangwa menshi yera" },
      { label: "B", text: "amatara menshi y’umuhondo" },
      { label: "C", text: "amatara menshi asa n’icunga rihishije" },
      { label: "D", text: "ibisubizo byose nibyo", correct: true },
    ]
  },
  {
    id: 87,
    questionText: "Amatara ndangambere na ndanganyuma y’imodoka zitarengeje m 6 z’uburebure na m 2 z’ubugari habariwemo imitwaro kandi nta kindi kinyabiziga kiziritseho ashobora gusimburwa n’amatara yo guhagarara umwanya munini iyo ibyo binyabiziga bihagaze umwanya muto cyangwa munini mu nsisiro bibangikanye ku ruhande rw’umuhanda. Ayo matara arangwa n’amabara akurikira:",
    choices: [
      { label: "A", text: "umweru cyangwa umuhondo imbere" },
      { label: "B", text: "umutuku cyangwa umuhondo inyuma" },
      { label: "C", text: "A na B ni ibisubizo by’ukuri", correct: true },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 88,
    questionText: "Amatara ndangaburumbarare agomba kubonwa nijoro igihe ijuru rikeye n’umuyobozi w’ikinyabiziga kiri mu ntera ya :",
    choices: [
      { label: "A", text: "m 50 nibura" },
      { label: "B", text: "m 100" },
      { label: "C", text: "m 150" },
      { label: "D", text: "m 200 nibura", correct: true },
    ]
  },
  {
    id: 89,
    questionText: "Uretse ku byerekeye imihanda iromboreje y’ibisate byinshi n’imihanda yimodoka igice cy’umuhanda kiri hakurya y’umurongo mugari wera ucibwa ku muhanda ngo ugaragaze inkombe mpimbano zawo kigenewe ibi bikurikira:",
    choices: [
      { label: "A", text: "guhagararwamo umwanya muto gusa" },
      { label: "B", text: "guhagararwamo umwanya munini gusa" },
      { label: "C", text: "guhagararwamo umwanya muto n’umunini", correct: true },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 90,
    questionText: "Ibimenyetso by’agateganyo bigizwe n’imitemeri y’ibara risa n’icunga rihishije bishobora gusimbura ibi bikurikira:",
    choices: [
      { label: "A", text: "imirongo yera irombereje idacagaguye gusa" },
      { label: "B", text: "imirongo yera irombereje idacagaguye n’icagaguye", correct: true },
      { label: "C", text: "imirongo icagaguye n’idacagaguye ibangikanye" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 91,
    questionText: "Iyo bitagishoboka kubona muri m 200 imodoka zikuruwe n’inyamaswa, ingorofani, inyamaswa zitwaye imizigo cyangwa zigenderwamo kimwe n’amatungo bigomba kurangwa na :",
    choices: [
      { label: "A", text: "imbere ni itara ryera" },
      { label: "B", text: "imbere ni itara ry’umuhondo cyangwa risa n’icunga rihishije" },
      { label: "C", text: "inyuma ni itara rimwe ritukura" },
      { label: "D", text: "ibisubizo byose ni ukuri", correct: true },
    ]
  },
  {
    id: 92,
    questionText: "Uretse igihe hari amategeko yihariye akurikizwa muri ako karere ikinyabiziga cyose gihagaze umwanya muto cyangwa munini, iyo gihagaze mu mwanya wo kuruhande wagenewe abanyamaguru, kugirango bashobore kugenda batagombye kunyura mu muhanda, umuyobozi agombye kubasigira akayira gafite byibura ibipimo bikurikira by’ubugari:",
    choices: [
      { label: "A", text: "m 1", correct: true },
      { label: "B", text: "m 2" },
      { label: "C", text: "m 0.5" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 93,
    questionText: "Icyapa cyerekana ahantu hagenewe guhagararwamo n’imodoka nini zagenewe gutwara abantu cyirangwa n’ubuso bw’amabara akurikira:",
    choices: [
      { label: "A", text: "ubururu" },
      { label: "B", text: "umweru" },
      { label: "C", text: "umutuku" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 94,
    questionText: "Icyapa cyerekana ko inzira giteyeho mu ntangiriro idakomeza kigaragazwa n’ikirango (ikimenyetso) cy’amabara akurikira:",
    choices: [
      { label: "A", text: "umukara n’umutuku" },
      { label: "B", text: "umukara n’umweru" },
      { label: "C", text: "umweru n’umutuku", correct: true },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 95,
    questionText: "Buri modoka yagenewe gutwara abantu, ariko umubare wabo ntarengwa ukaba munsi ya 6 umuyobozi abariwemo igomba kugira imikandara yo kurinda ibyago igenewe aba bakurikira:",
    choices: [
      { label: "A", text: "umuyobozi" },
      { label: "B", text: "umugenzi wicaye ku ntebe y’imbere" },
      { label: "C", text: "ishobora no kugira imikandara kuzindi ntebe z’inyuma" },
      { label: "D", text: "ibisubizo byose ni ukuri", correct: true },
    ]
  },
  {
    id: 96,
    questionText: "Usibye ibinyabiziga by'ingabo z'Igihugu, Ikinyabiziga kigendeshwa na moteri kiriho ibyuma ntamenwa cyangwa ikindi cyose gituma gikoreshwa mu gutera cyangwa mu kwitabara ntigishobora kugenda mu nzira nyabagendwa kidafite uruhushya rwihariye. Urwo ruhushya rutangwa naba bakurikira:",
    choices: [
      { label: "A", text: "police y’igihugu" },
      { label: "B", text: "minisitiri ushinzwe gutwara abantu n’ibintu", correct: true },
      { label: "C", text: "minisitiri w’ingabo" },
      { label: "D", text: "ikigo cy’igihugu gishinzwe imisoro n’amahoro." },
    ]
  },
  {
    id: 97,
    questionText: "Iyo umukumbi ugizwe n’amatungo maremare arenze ane cyangwa amatungo magufi arenze atandatu mu nzira nyabagendwa iyo hatakibona neza kuburyo umuyobozi abona muri m 200 ugomba kugaragazwa kuburyo bukurikira:",
    choices: [
      { label: "A", text: "itara ry’urumuri rwera cyangwa rusa n’icunga rihishije imbere y’umukumbi" },
      { label: "B", text: "itara ry’urumuri rutukura cyangwaumuhondo ritwawe inyuma y’umukumbi" },
      { label: "C", text: "A na B ni ibisubizo by’ukuri" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 98,
    questionText: "Ibinyabiziga biherekeranyije mu butumwa ntibishobora gutonda uburebure burenga umurongo wa m 500. Iyi bibaye bityo ibinyabiziga biherekeranye mu butumwa bishobora kugabanwamo amatsinda atonze umurongo atarengeje m 50 z’uburebure kdi hagati yayo hakaba byibura m 50 ariko ibyo ntibikurikizwa kubinyabiziga bikurikira:",
    choices: [
      { label: "A", text: "ibinyabiziga bya police biherekeranyije" },
      { label: "B", text: "ibinyabiziga by’abasirikare biherekeranyije mu nsisiro", correct: true },
      { label: "C", text: "A na B ni ibisubizo by’ukuri" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 99,
    questionText: "Iyo ikinyabiziga gikururwa n’inyamaswa nacyo gikuruye ikindi uburebure bw’ibikururwa bukaba burenga m 18 hatabariwemo icyo kinyabiziga cya mbere kiziritseho hagomba ibi bikurikira:",
    choices: [
      { label: "A", text: "umuherekeza w’ikinyabiziga cya kabiri", correct: true },
      { label: "B", text: "abaherekeza babiri" },
      { label: "C", text: "A na B ni ibisubizo by’ukuri" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 100,
    questionText: "Ibinyabiziga bikurikira ntibitegetswe kugira ibimenyetso bibyerekana iyo byambukiranya umuhanda cyangwa bigenda ku ruhande rwawo:",
    choices: [
      { label: "A", text: "ibinyabiziga bigendwamo n’abana" },
      { label: "B", text: "ibinyabiziga bigendwamo n’abamugaye" },
      { label: "C", text: "A na B ni ibisubizo by’ukuri", correct: true },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 101,
    questionText: "Icyapa cy’inyongera kigaragaza ikibanza cy’ingando cyangwa cy’abantu benshi bagendera ku nyamaswa kirangwa n’amabara akurikira:",
    choices: [
      { label: "A", text: "ubururu, umweru n’umukara", correct: true },
      { label: "B", text: "umukara umweru n’umuhondo" },
      { label: "C", text: "icyatsi kibisi, umuhondo n’ikirango cy’umukara" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 102,
    questionText: "Icyapa cyerekana ahantu amategeko y’ Umuhanda urombeje w’ibice byinshi atangirira gukurikizwa, kirangwa n’ibirango (ibimenyetso) by’amabara akurikira:",
    choices: [
      { label: "A", text: "umweru n’umukara" },
      { label: "B", text: "umweru n’umutuku" },
      { label: "C", text: "umweru n’umuhondo" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 103,
    questionText: "Igihe ikorwa ry’imirimo ribangamiye cyane cyangwa buke uburyo bwo kugenda mu nzira nyabagendwa, ahakorerwa imirimo hagaragazwa ku buryo bukurikira:",
    choices: [
      { label: "A", text: "icyapa cyera cya mpande enye, zingana zifite uruhande rwa metero 0.30" },
      { label: "B", text: "uruzitiro ruri ku mpera y’iburyo" },
      { label: "C", text: "A na B ni ibisubizo by’ukuri" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 104,
    questionText: "Iyo mu muhanda, imirimo yihariye ubugari butuma abayobozi bagomba kuva mu mwanya wabo usanzwe kugirango bakomeze urugendo, ahategetswe kunyurwa hagaragazwa n’ikimenyetso gishyirwa aho imirimo irangirira mu ruhande rugenderwamo. Icyo kimenyetso kirangwa n’amabara akurikira:",
    choices: [
      { label: "A", text: "ubuso bw’ubururu ikirango cy’umweru", correct: true },
      { label: "B", text: "umuzenguruko w’umutuku, ubuso umweru n’ikirango cy’umukara" },
      { label: "C", text: "umuzenguruko w’umutuku, ubuso mu ibara ryera, ikirango mu ibara ry’umutuku n’umukara" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 105,
    questionText: "Icyapa cyerekana ko hari amabwiriza yihariye mu buryo bwo kugendera mu cyambu cyangwa ku kibuga cy’indege giteye ku buryo bukurikira:",
    choices: [
      { label: "A", text: "ishusho mpandeshatu, ubuso mu ibara ryera, ikirango mu ibara ry’umukara" },
      { label: "B", text: "ishusho mpandenye, ubuso mu ibara ry’ubururu n’ikirango kiri mu ibara ryera", correct: true },
      { label: "C", text: "ishusho y’uruziga mu ibara ry’ubururu ni ikirango kiri mu ibara ryera" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 106,
    questionText: "Nijoro igihe ijuru rikeye, itara ribonesha icyapa kiranga numero y’ikinyabiziga rigomba gutuma izo numero zisomerwa nibura mu ntera ikurikira:",
    choices: [
      { label: "A", text: "M 150" },
      { label: "B", text: "M 50" },
      { label: "C", text: "M 20", correct: true },
      { label: "D", text: "M 10" },
    ]
  },
  {
    id: 107,
    questionText: "Ibyapa byerekana icyago cyidahoraho kandi bigenewe kwerekana aho bagana cyangwa aho berekeza umuhanda nk’igihe cy’impanuka cyangwa hari imirimo ikorwa mu muhanda birangwa n’amabara akurikira:",
    choices: [
      { label: "A", text: "umweru n’umukara" },
      { label: "B", text: "umweru n’umuhondo" },
      { label: "C", text: "ubuso bw’umweru gusa" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 108,
    questionText: "Birabujijwe kubangamira imigendere isanzwe y’ibindi binyabiziga kubera ibi bikurikira:",
    choices: [
      { label: "A", text: "kugabanya umuvuduko kuburyo budasanzwe" },
      { label: "B", text: "gukacira feri bidatewe no kwirinda ibyago" },
      { label: "C", text: "A na B ni ibisubizo by’ukuri", correct: true },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 109,
    questionText: "Iyo kuva bwije kugeza bukeye cyangwa bitewe n’uko ibihe bimeze bitagishoboka kubona neza muri m 200, mu nzira nyabagendwa, romoruki iziritse kuri velomoteri cyangwa ipikipiki idafite akanyabiziga ku ruhande, uretse velomoteri idafite umuyobozi, kandi uburumbarare bwayo, cyangwa bw’ibyo yikoreye bukaba butuma itara ry’ikinyabiziga biyikurura ritagaragara, iyo romoruki igaragazwa ku buryo bukurikira:",
    choices: [
      { label: "A", text: "itara ryera riri kuri romoruki inyuma" },
      { label: "B", text: "itara ry’umuhondo riri kuri romoruki inyuma" },
      { label: "C", text: "itara risa n’icunga riri kuri romoruki inyuma" },
      { label: "D", text: "ibi bisubizo byose nibyo", correct: true },
    ]
  },
  {
    id: 110,
    questionText: "Amatara maremare y’ikinyabiziga agomba kuzimwa mu bihe bikurikira:",
    choices: [
      { label: "A", text: "iyo umuhanda umurikiwe hose kandi umuyobozi ashobora kubona nibura mu ntera ingana na metero 200" },
      { label: "B", text: "iyo ikinyabiziga gikurikiye mu ntambwe zitagera muri m100 keretse iyo umuyobozi wacyo ashaka kunyura kucyo akurikiye acana azimya vuba vuba amatara maremare" },
      { label: "C", text: "A na B ni ibisubizo by’ukuri", correct: true },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 111,
    questionText: "Iyo akanyabiziga gasunikwa cyangwa ibyo gatwaye bidatuma umuyobozi abona neza imbere ye, uwo muyobozi agomba gukora ibi bikurikira:",
    choices: [
      { label: "A", text: "gushaka umuherekeza" },
      { label: "B", text: "gukurura ikinyabiziga cye", correct: true },
      { label: "C", text: "A na B ni ibisubizo by’ukuri" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 112,
    questionText: "Uretse igihe hari amategeko yihariye akurikizwa muri ako karere cyangwa imitunganyirize bwite y’aho, ikinyabiziga cyose cyangwa inyamaswa ihagaze umwanya muto cyangwa munini igomba kuba iri aha hakurikira:",
    choices: [
      { label: "A", text: "mu kaboko k’iburyo hakurikijwe aho yaganaga uretse igihe ari mu muhanda w’icyerekezo kimwe" },
      { label: "B", text: "ahegereye bishobotse akayira k’abanyamaguru iyo umuhanda ugafite ariko umwanya w’ibiziga n’akayira ntube urenga santimetero 50" },
      { label: "C", text: "A na B ni ibisubizo by’ukuri", correct: true },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 113,
    questionText: "Iyo ikinyabiziga gihagaritswe n’ijoro ku buryo abayobozi bakigana badashobora kumenya ko kibabereye imbogamizi, kigomba kurangirwa kure n’ikimenyetso cyabigenewe kiri ahantu hagaragara kugirango kiburire hakiri kare abandi bayobozi baza bagisanga, ariko ntibireba ibinyabiziga bikurikira:",
    choices: [
      { label: "A", text: "velomoteri" },
      { label: "B", text: "ipikipiki idafite akanyabiziga ku ruhande" },
      { label: "C", text: "A na B ni ibisubizo by’ukuri", correct: true },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 114,
    questionText: "Abanyamaguru batatanye cyangwa bagize udutsiko tudafatanyije gahunda kdi batanayobowe n’umwarimu bategetswe kunyura mu tuyira turi ku mpande z’umuhanda no ku nkengero zigiye hejuru uretse ubutaka butsindagiye butandukanya imihanda ibiri bwo kunyurwamo gusa n’aba bakurikira:",
    choices: [
      { label: "A", text: "abanyamaguru bashaka guhagarara akanya gato igihe bambukiranya umuhanda", correct: true },
      { label: "B", text: "abanyamaguru bagize udutsiko tw’abantu benshi" },
      { label: "C", text: "A na B ni ibisubizo by’ukuri" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 115,
    questionText: "Ibinyabiziga biherekeranyije mu butumwa ntibishobora gutonda uburebure burenga umurongo wa m 500, iyo bibaye bityo ibinyabiziga biherekeranyije mu butumwa bishobora kugabanywamo amatsinda atonze umurongo utarengeje ibipimo bikurikira:",
    choices: [
      { label: "A", text: "utarengeje m50", correct: true },
      { label: "B", text: "utarengeje m100" },
      { label: "C", text: "utarengeje 150" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 116,
    questionText: "Ibyapa byereka inkomane y’inzira nyabagendwa n’inzira ya gariyamoshi bigomba iteka kumurikwa cyangwa kugarura urumuri ku buryo bigaragarira nibura mu ntera ikurikira igihe ijuru rikeye:",
    choices: [
      { label: "A", text: "m200" },
      { label: "B", text: "m 250" },
      { label: "C", text: "m300" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 117,
    questionText: "Imbibi ziri ku mpera z’ubwihugiko bw’abanyamaguru kandi ziri mu muhanda kimwe n’imbibi n’ibindi bikoresho bigenewe gutuma bagenda mu muhanda nta muvundo zisigwa irangi ry’ibara rikurikira:",
    choices: [
      { label: "A", text: "irangi ry’umuhondo ngarurarumuri", correct: true },
      { label: "B", text: "irangi ry’umweru ngarurarumuri" },
      { label: "C", text: "irangi risa n’icunga rihishije ngarurarumuri" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 118,
    questionText: "Kugirango ikinyabiziga kive ahantu hari urwondo cyangwa hanyerera bidasanzwe hashobora gukoreshwa uburyo bukurikira:",
    choices: [
      { label: "A", text: "inziga zishobora gushyirwaho udushyundu" },
      { label: "B", text: "inziga zishobora gushyirwaho iminyururu irwanya ubunyerere", correct: true },
      { label: "C", text: "A na B ni ibisubizo by’ukuri" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 119,
    questionText: "Iyo imizigo igizwe n’ibinyampeke, ikawa, amakara, ubwatsi bw’amatungo bidahambiriye, ubugari bwayo bushobora kugera kuri m2 na cm75 ariko iyo iyo mizigo ijyanwa mu karere katarenga km25 uvuye aho yapakiriwe, usibye mu nsisiro, ubugari bwayo bushobora kugera ku bipimo bikurikira:",
    choices: [
      { label: "A", text: "m4" },
      { label: "B", text: "m3 na cm50" },
      { label: "C", text: "m3", correct: true },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 120,
    questionText: "Mu mujyi no ku mihanda y’igihugu igenwa na minisitiri ushinzwe gutwara abantu n’ibintu, ubwikorere ntarengwa ku ikamyo iyo ariyo yose ntibushobora kurenga ibipimo bikurikira:",
    choices: [
      { label: "A", text: "toni 10" },
      { label: "B", text: "toni 16" },
      { label: "C", text: "toni 24" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 121,
    questionText: "Iyo bitewe n’imiterere y’ahantu intera itandukanya icyapa n’ahantu habi iri munsi ya m150 ku buryo bugaragara, iyo ntera yerekanishwa icyapa cy’inyongera giteye ku buryo bukurikira:",
    choices: [
      { label: "A", text: "kare ifite ubuso bw’ibara ryera" },
      { label: "B", text: "urukiramende rufite ubuso bw’ibara ryera", correct: true },
      { label: "C", text: "mpandeshatu ifite umuzenguruko utukura" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 122,
    questionText: "Nijoro, amatara yo kubisikana y’ibara ryera cyangwa y’umuhondo agomba, igihe ijoro rikeye kumurika mu muhanda nibura mu ntera ikurikira:",
    choices: [
      { label: "A", text: "m100" },
      { label: "B", text: "m50" },
      { label: "C", text: "m40", correct: true },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 123,
    questionText: "Ikintu cyose cyatuma hahindurwa ibyanditse bireba nyirikarita cyangwa ibiranga ikinyabiziga kigomba kumenyeshwa ibiro by’umusoro haba mu magambo cyangwa mu ibaruwa ishinganye ibyo bikorwa mu gihe kingana gute:",
    choices: [
      { label: "A", text: "mu mezi 2" },
      { label: "B", text: "mu kwezi kumwe" },
      { label: "C", text: "mu minsi cumi n’itanu" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 124,
    questionText: "Kugirango berekane ahantu habi cyane, hakoreshwa ikimenyetso cy’itara ry’umuhondo rimyasa, rivuga uburenganzira bwo gutambuka icyo kimenyetso barushijeho kwitonda. Ese icyo kimenyetso gihindura iki ku mategeko agenga gutambuka mbere:",
    choices: [
      { label: "A", text: "ntacyo gihindura", correct: true },
      { label: "B", text: "abo rireba nibo batambuka mbere" },
      { label: "C", text: "abatwaye ibinyabiziga binini nibo batambuka mbere" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 125,
    questionText: "Romoruki zifite ubugari ntarengwa bwa sentimetero 80 zishobora gushyirwaho akagarurarumuri kamwe gusa iyo zikuruwe n’ibinyabiziga bikurikira:",
    choices: [
      { label: "A", text: "velomoteri" },
      { label: "B", text: "ipikipiki ifite akanyabiziga kuruhande" },
      { label: "C", text: "igare" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 126,
    questionText: "Amatara maremare y’ibara ryera cyangwa ry’umuhondo agomba nijoro igihe ijuru rikeye kumurika mu ntera ikurikira ku binyabiziga bifite moteri itarengeje ingufu zigera kuri sentimetero kibe 125",
    choices: [
      { label: "A", text: "m100" },
      { label: "B", text: "m75", correct: true },
      { label: "C", text: "m25" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 127,
    questionText: "Iyo kuva bwije kugeza bukeye cyangwa bitewe n’uko ibintu bimeze bitagishoboka kubona muri m 200, ibinyabiziga cyangwa imitwaro bifite ubugari burenga m 2.50 iyo bigenda mu nzira nyabagendwa bigaragazwa ku buryo bukurikira:",
    choices: [
      { label: "A", text: "inyuma ni amatara abiri atukura" },
      { label: "B", text: "iyo bibaye ngombwa no ku mpera y’amabondo y’ikinyabiziga cyangwa y’imitwaro ni itara ndangaburumbarare risa n’icunga rihishije cyangwa ry’umuhondo" },
      { label: "C", text: "A na B ni ibisubizo by’ukuri", correct: true },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 128,
    questionText: "Igice cy’umuhanda kiri hakurya y’umurongo mugari wera udacagaguye ugaragaza inkombe mpimbano y’umuhanda kiba kigenewe ibi bikurikira:",
    choices: [
      { label: "A", text: "guhagararwamo umwanya muto gusa" },
      { label: "B", text: "guhagararwamo umwanya muto n’umunini ndetse no kumihanda irombereje y’ibisate byinshi n’imihanda y’imodoka" },
      { label: "C", text: "A na B ni ibisubizo by’ukuri" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 130,
    questionText: "Iminyururu n’ibindi byuma bifashisha bishobora kuvanwaho cyangwa binagana, hatabariwemo ibimenyetso byerekana ibyerekezo bigomba gutungurwa ku kinyabiziga ku buryo igihe byizunguza bitarenga impande zihera uburumbarare bw’ikinyabiziga kandi ibyo byuma bifashisha ntibigomba gukururuka ku butaka ariko ibyo ntibibujijwe ku binyabiziga bikurikira:",
    choices: [
      { label: "A", text: "imashini zihinga", correct: true },
      { label: "B", text: "ibinyabiziga bitwaye ibintu bidashobora gufata inkongi" },
      { label: "C", text: "A na B ni ibisubizo by’ukuri" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 131,
    questionText: "Ku binyabiziga cyangwa ibinyabiziga bikururana igice kirenga ku biziga ntigishobora kurenga ibipimo bikurikira:",
    choices: [
      { label: "A", text: "iby’inyuma : m3" },
      { label: "B", text: "iby’imbere: m2.70", correct: true },
      { label: "C", text: "A na B ni ibisubizo by’ukuri" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 132,
    questionText: "Uretse bibonewe uruhushya, ubundi birabujijwe gushyira no gukomeza kugendesha imodoka cyangwa romoruki mu nzira nyabagendwa iyo uburemere bw’ibyikorewe burenze uburemere ntarengwa bwemewe n’ikarita iranga ikinyabiziga ariko ibyo ntibikurikizwa ku binyabiziga bikurikira:",
    choices: [
      { label: "A", text: "ibinyabiziga bya police" },
      { label: "B", text: "ibinyabiziga bihinga" },
      { label: "C", text: "imashini zikoreshwa mu kubaka imihanda", correct: true },
      { label: "D", text: "ibisubizo byose ni ukuri" },
    ]
  },
  {
    id: 133,
    questionText: "Gushyira mu muhanda ku buryo budasanzwe ibinyabiziga bikururana birenze bitatu bigomba gutangirwa uruhusa, uretse imashini ihinga iyo zigenda uregendo rutarenze km 25, ibinyabiziga bikururana bitwaye ibyamamazwa n’ibindi biteganwa n’iri teka ariko igiteranyo cy’uburebure bw’ibyo binyabiziga bikururana ntigishobora kurenga ibipimo bikurikira:",
    choices: [
      { label: "A", text: "m50" },
      { label: "B", text: "m35" },
      { label: "C", text: "m25", correct: true },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 134,
    questionText: "Ibinyamitende itatu bifite moteri bigomba kugira amatara akurikira:",
    choices: [
      { label: "A", text: "amatara abiri ndangambere n’amatara abiri ndanganyuma yerekana ko ikinyabiziga gihagaze" },
      { label: "B", text: "utugarurarumuri tubiri" },
      { label: "C", text: "A na B ni ibisubizo by’ukuri", correct: true },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 135,
    questionText: "Ibyapa bibuza n’ibitegeka bikurikizwa gusa aha hakurikira:",
    choices: [
      { label: "A", text: "mu masangano" },
      { label: "B", text: "mu gice cy’inzira nyabagendwa kiri hagati yaho bishinze n’inkomane ikurikiyeho ku ruhande rw’inzira bishinzeho", correct: true },
      { label: "C", text: "ibyo byapa bishyirwaho hakurikijwe intera ibitandukanya" },
      { label: "D", text: "B na C ni ibisubizo by’ukuri" },
    ]
  },
  {
    id: 136,
    questionText: "Icyapa cy’inyongera kerekana aho bagobokera ibinyabiziga kirangwa n’amabara akurikira:",
    choices: [
      { label: "A", text: "ubururu, umweru, umutuku" },
      { label: "B", text: "umweru, umukara, ubururu", correct: true },
      { label: "C", text: "umutuku, umweru n’umukara" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 137,
    questionText: "Icyapa cyerekana uburebure bw’igice cyatera ibyago cyangwa bw’ahantu amabwiriza y’icyo cyapa agomba gukurikizwa kirangwa n’ubuso n’ibimenyetso bikurikira:",
    choices: [
      { label: "A", text: "ubuso umweru, ikimenyetso ubururu" },
      { label: "B", text: "ubuso ubururu, ikimenyetso umweru" },
      { label: "C", text: "ubuso ubururu, ikimenyetso umweru n’umukara" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 138,
    questionText: "Umurongo w’umuhondo ucagaguye uciye ku nkombe nyayo y’umuhanda, umusezero w’inzira y’abanyamaguru cyangwa w’inkengero y’umuhanda yegutse uvuga ibi bikurikira:",
    choices: [
      { label: "A", text: "guhagarara umwanya muto birabujijwe ku burebure bw’uwo murongo" },
      { label: "B", text: "guhagarara umwanya muto n’umunini birabujijwe ku burebure bw’uwo murongo" },
      { label: "C", text: "aho bahagarara umwanya munini cyangwa muto" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 139,
    questionText: "Ku binyabiziga cyangwa ibinyabiziga bikururana igice kirenga ku biziga ntigishobora kurenga ibipimo bikurikira:",
    choices: [
      { label: "A", text: "iby’inyuma m 3.40" },
      { label: "B", text: "iby’imbere m 2.50" },
      { label: "C", text: "A na B ni ibisubizo by’ukuri" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 171,
    questionText: "Mu migi no ku yindi mihanda y’igihugu igenwa na minisitiri ushinzwe gutwara abantu n’ibintu uburebure ntarengwa kuri buri mitambiko 3 ifungwaho ibiziga bine ni:",
    choices: [
      { label: "A", text: "toni 24", correct: true },
      { label: "B", text: "toni 10" },
      { label: "C", text: "toni 16" },
      { label: "D", text: "toni 53" },
    ]
  },
  {
    id: 172,
    questionText: "Iyo hagati y’uruhande rw’imbere rwa romoruki n’uruhande rw’inyuma rw’ikinyabiziga kiyikurura hari umwanya urenze m 3 ikibizirikanyije kigomba kugaragazwa ku buryo bukurikira iyo amatara y’ikinyabiziga agomba gucanwa:",
    choices: [
      { label: "A", text: "agatambaro gatukura gafite nibura cm 50 z’uruhande" },
      { label: "B", text: "itara risa n’icunga rihishije rigaragara mu mbavu igihe ikibizirikanyije kimuritswe", correct: true },
      { label: "C", text: "A na B ni ibisubizo by’ukuri" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 173,
    questionText: "Itara ryo guhagarara ry’ibara ritukura rigomba kuba ridahumisha, kandi rigomba kugaragarira mu ntera ikurikira:",
    choices: [
      { label: "A", text: "nijoro igihe ijuru rikeye nibura muri m 200" },
      { label: "B", text: "ku manywa igihe cy’umucyo nibura muri m50" },
      { label: "C", text: "nijoro nibura muri m 100 igihe ijuru rikeye" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 174,
    questionText: "Birabujijwe kongera ku mpande z’ikinyabiziga kigendeshwa na moteri cyangwa velomoteri ibi bikurikira:",
    choices: [
      { label: "A", text: "imitako" },
      { label: "B", text: "ibintu bifite imigongo cyangwa ibirenga ku mubyimba kandi bishobora gutera ibyago abandi bagenzi" },
      { label: "C", text: "A na B ni ibisubizo by’ukuri", correct: true },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 175,
    questionText: "Ikintu cyose cyatuma hahindurwa ibyanditswe bireba nyirikarita cyangwa ibiranga ikinyabiziga kigomba kumenyeshwa ibiro by’imisoro haba mu magambo cyangwa mu ibaruwa ishinganye. Ibyo bikorwa mu gihe kingana gute:",
    choices: [
      { label: "A", text: "mu minsi 5" },
      { label: "B", text: "mu minsi 8", correct: true },
      { label: "C", text: "mu minsi 15" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 176,
    questionText: "Kunyuranaho bikorerwa:",
    choices: [
      { label: "A", text: "mu ruhande rw’iburyo gusa" },
      { label: "B", text: "igihe cyose ni ibumoso" },
      { label: "C", text: "iburyo iyo unyura ku nyamaswa" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 177,
    questionText: "Iyo ubugari bw’inzira nyabagendwa igenderwamo n’ibinyabiziga budahagije kugirango bibisikane nta nkomyi abagenzi bategetswe:",
    choices: [
      { label: "A", text: "kunyura mu nzira z’impande z’abanyamaguru" },
      { label: "B", text: "guhagarara aho bageze" },
      { label: "C", text: "koroherana", correct: true },
      { label: "D", text: "gukuraho inkomyi" },
    ]
  },
  {
    id: 178,
    questionText: "Umuyobozi ugenda mu muhanda igihe ubugari bwawo budatuma anyuranaho nta nkomyi ashobora kunyura mu kayira k’abanyamaguru ariko amaze kureba ibi bikurikira:",
    choices: [
      { label: "A", text: "umuvuduko w’abanyamaguru" },
      { label: "B", text: "ubugari bw’umuhanda" },
      { label: "C", text: "umubare w’abanyamaguru" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 179,
    questionText: "Icyapa cyerekana umuvuduko ntarengwa ikinyabiziga kitagomba kurenza gishyirwa ku binyabiziga bifite uburebure ntarengwa bukurikira:",
    choices: [
      { label: "A", text: "burenga toni 1" },
      { label: "B", text: "burenga toni 2" },
      { label: "C", text: "burenga toni 24" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 180,
    questionText: "Iyo nta mategeko awugabanya by’umwihariko, umuvuduko ntarengwa w’amapikipiki mu isaha ni:",
    choices: [
      { label: "A", text: "km 25" },
      { label: "B", text: "km 70" },
      { label: "C", text: "km 40" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 181,
    questionText: "Ahatari mu nsisiro umuvuduko ntarengwa wa velomoteri mu isaha ni:",
    choices: [
      { label: "A", text: "km 50", correct: true },
      { label: "B", text: "km 40" },
      { label: "C", text: "km 30" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 182,
    questionText: "Birabujijwe guhagarara akanya kanini aha hakurikira:",
    choices: [
      { label: "A", text: "mu duhanda tw’abanyamagare" },
      { label: "B", text: "mu duhanda twagenewe velomoteri" },
      { label: "C", text: "A na B ni ibisubizo by’ukuri", correct: true },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 183,
    questionText: "Amatara maremare y’ikinyabiziga agomba kutamurika mu bihe bikurikira:",
    choices: [
      { label: "A", text: "iyo umuhanda umurikiwe umuyobozi abasha kureba muri m 200" },
      { label: "B", text: "iyo ikinyabiziga kigiye kubisikana nikindi", correct: true },
      { label: "C", text: "iyo ari mu nsisiro" },
      { label: "D", text: "ibisubizo byose nibyo" },
    ]
  },
  {
    id: 184,
    questionText: "Ubugari bwa romoruki ikuruwe n’igare cyangwa velomoteri ntiburenza ibipimo bikurikira:",
    choices: [
      { label: "A", text: "cm 25" },
      { label: "B", text: "cm 125" },
      { label: "C", text: "cm 45" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 185,
    questionText: "Uburyo bukoreshwa kugirango ikinyabiziga kigende gahoro igihe feri idakora neza bwitwa:",
    choices: [
      { label: "A", text: "feri y’urugendo" },
      { label: "B", text: "feri yo guhagarara" },
      { label: "C", text: "feri yo gutabara", correct: true },
      { label: "D", text: "Nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 186,
    questionText: "Nta mwanya n’umwe feri ifungiraho ushobora kurekurana n’ibiziga keretse:",
    choices: [
      { label: "A", text: "iyo bireba feri y’urugendo" },
      { label: "B", text: "iyo kurekurana ari ibyakanya gato" },
      { label: "C", text: "iyo bireba feri yo guhagarara umwanya munini, ubwo kurekurana bikaba bidashoboka bidakozwe n'umuyobozi" },
      { label: "D", text: "byose ni ibisubizo by’ukuri", correct: true },
    ]
  },
  {
    id: 187,
    questionText: "Ikinyabiziga ntigishobora kugira amatara arenze abiri y’ubwoko bumwe keretse kubyerekeye amatara akurikira:",
    choices: [
      { label: "A", text: "itara ndangamubyimba" },
      { label: "B", text: "itara ryerekana icyerekezo" },
      { label: "C", text: "itara ndangaburumbarare" },
      { label: "D", text: "ibisubizo byose ni ukuri", correct: true },
    ]
  },
  {
    id: 188,
    questionText: "Itara ndanganyuma rigomba gushyirwa aha hakurikira:",
    choices: [
      { label: "A", text: "ku nguni y’iburyo y’ikinyabiziga" },
      { label: "B", text: "ku gice cy’inyuma ku kinyabiziga" },
      { label: "C", text: "ahegereye inguni y’ibumoso y’ikinyabiziga", correct: true },
      { label: "D", text: "ibisubizo byose ni ukuri" },
    ]
  },
  {
    id: 189,
    questionText: "Nibura ikinyabiziga gitegetswe kugira uduhanagurabirahuri dukurikira:",
    choices: [
      { label: "A", text: "2" },
      { label: "B", text: "3" },
      { label: "C", text: "1", correct: true },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 190,
    questionText: "Ibiziga by’ibinyabiziga bigendeshwa na moteri n’ibya velomoteri kimwe n’ibya romoruki zabyo bigomba kuba byambaye inziga zihagwa zifite amano n’ubujyakuzimu butari munsi ya milimetero imwe ku migongo yabyo yose, n’ubudodo bwabyo ntibugire ahantu na hamwe bugaragara kdi ntibigire aho byacitse bikomeye mu mpande zabyo. Ariko ibyo ntibikurikizwa ku binyabiziga bikurikira:",
    choices: [
      { label: "A", text: "ibinyabiziga bidapakiye kdi bitajya birenza umuvuduko wa km 25 mu isaha ahateganye", correct: true },
      { label: "B", text: "ibinyabiziga bya police bijya ahatarenga km 25 uvuye aho biba" },
      { label: "C", text: "A na B ni ibisubizo by’ukuri" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 191,
    questionText: "Birabujijwe kugenza ibinyabiziga bigendeshwa na moteri na za romoruki zikururwa nabyo, iyo ibiziga byambaye inziga zidahagwa cyangwa inziga zikururuka zifite umubyimba uri hasi ya cm 4. Ariko ibyo ntibikurikizwa ku binyabiziga bikurikira:",
    choices: [
      { label: "A", text: "ku binyabiziga by’ingabo" },
      { label: "B", text: "ibinyabiziga bihinga iyo bigendeshwa mu karere katarenga km 25 uvuye aho ziba", correct: true },
      { label: "C", text: "ibinyabiziga bya police" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 192,
    questionText: "Imirongo yera iteganye n’umurongo ugabanya umuhanda mo kabiri mu burebure bwawo ugaragaza:",
    choices: [
      { label: "A", text: "ahanyurwa n’amagare na velomoteri" },
      { label: "B", text: "ahanyurwa n’ingorofani n’ibinyamitende" },
      { label: "C", text: "ahanyurwa n’abanyamaguru", correct: true },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 193,
    questionText: "Iyo harimo indi myanya birabujijwe gutwara ku ntebe y’imbere y’imodoka abana badafite imyaka ikurikira:",
    choices: [
      { label: "A", text: "imyaka 10" },
      { label: "B", text: "imyaka 12", correct: true },
      { label: "C", text: "imyaka 7" },
      { label: "D", text: "nta gisubizocy’ukuri kirimo" },
    ]
  },
  {
    id: 194,
    questionText: "Iyo ikinyabiziga kitagikora cyangwa cyoherejwe mu mahanga burundu ibyapa ndanga bigomba gukurwaho bikoherezwa mu biro by’imisoro, ibyo bikorwa mu gihe kingana gute:",
    choices: [
      { label: "A", text: "ibyumweru bibiri" },
      { label: "B", text: "amezi abiri", correct: true },
      { label: "C", text: "ukwezi kumwe" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 195,
    questionText: "Inkombe z’inzira nyabagendwa cyangwa z’umuhanda zishobora kugaragazwa n’ibikoresho ngarurarumuri ibyo bikoresho bigomba gushyirwaho ku buryo abagenzi babibona ku buryo bukurikira:",
    choices: [
      { label: "A", text: "babona gusa ibumoso bwabo ibyibara ryera" },
      { label: "B", text: "iburyo babona iby’ibara ritukura cyangwa risa n’icunga rihishije gusa" },
      { label: "C", text: "A na B ni ibisubizo by’ukuri", correct: true },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 196,
    questionText: "Iyo kuyobya umuhanda ari ngombwa bigaragazwa kuva aho uhera no kuburebure bwawo n’icyapa gifite ubuso bw’amabara akurikira:",
    choices: [
      { label: "A", text: "umukara" },
      { label: "B", text: "umweru" },
      { label: "C", text: "umutuku" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 197,
    questionText: "Ku mihanda yagenwe na minisitiri ubifite mu nshingano ibyapa biburira n’ibyapa byerekana bigomba kugaragazwa kuva bwije kugera bukeye n’urumuri rwihariye cyangwa amatara ku mihanda cyangwa ibintu ngarurarumuri. Igihe ijuru rikeye intera y’ahagaragara igomba kuba nibura:",
    choices: [
      { label: "A", text: "m50" },
      { label: "B", text: "m120" },
      { label: "C", text: "m150" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 198,
    questionText: "Ibizirikisho by’iminyururu cyangwa by’insinga kimwe n’ibindi by’ingoboka bikoreshwa gusa igihe nta kundi umuntu yabigenza kandi nta kindi bigiriwe uretse gusa kugirango ikinyabiziga kigere aho kigomba gukorerwa kandi nturenze na rimwe km 20 mu isaha, ibyo bizirikisho bigaragazwa ku buryo bukurikira:",
    choices: [
      { label: "A", text: "agatambaro gatukura kuri cm 50 z’umuhanda" },
      { label: "B", text: "ikimenyetso cy’itara risa n’icunga rihishije" },
      { label: "C", text: "icyapa cyera cya mpande enye zingana gifite cm 30 kuri buri ruhande", correct: true },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 199,
    questionText: "Uretse mu mijyi, kuyindi mihanda yagenywe na minisiteri ushinzwe gutwara ibintu n’abantu, uburemere ntarengwa bwemewe ku binyabiziga bifatanye bifite imitambiko itatu ni:",
    choices: [
      { label: "A", text: "toni 12", correct: true },
      { label: "B", text: "toni 16" },
      { label: "C", text: "toni 10" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 200,
    questionText: "Uretse mu mujyi kuyindi mihanda yajyenwe na minisitiri ushinzwe gutwara abantu n’ibintu, uburemere ntarengwa ku binyabiziga bifite imitambiko itatu cyangwa irenga hatarimo mukuzungu ni :",
    choices: [
      { label: "A", text: "toni 10" },
      { label: "B", text: "toni 12" },
      { label: "C", text: "toni 15" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 201,
    questionText: "Iyo nta mategeko awugabanya by’umwihariko umuvuduko ntarengwa ku modoka zidafite ibizibuza kwiceka kuberako ariko zakozwe ni:",
    choices: [
      { label: "A", text: "km 70 mu isaha" },
      { label: "B", text: "km 40 mu isaha" },
      { label: "C", text: "km 25 mu isaha", correct: true },
      { label: "D", text: "km20 mu isaha" },
    ]
  },
  {
    id: 202,
    questionText: "Iyo nta mategeko awugabanya by’umwihariko umuvuduko ntarengwa ku modoka zidafite ibizibuza kwiceka kuberako ariko zakozwe ni:",
    choices: [
      { label: "A", text: "km 20 mu isaha" },
      { label: "B", text: "km 40 mu isaha" },
      { label: "C", text: "km 35 mu isaha" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 203,
    questionText: "Ikinyabiziga kibujijwe guhagarara akanya kanini aha hakurikira :",
    choices: [
      { label: "A", text: "imbere y’ahantu nyabagendwa hinjirwa n’ahasohokerwa n’abantu benshi", correct: true },
      { label: "B", text: "mu muhanda aho ugabanyijemo ibisate bigaragazwa n’imirongo icagaguye" },
      { label: "C", text: "A na B ni ibisubizo by’ukuri" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 204,
    questionText: "Iyo kuva bwije kugeza bukeye cyangwa bitewe n’uko ibihe bimeze nk’igihe cy’ibihu cyangwa cy’imvura bitagishoboka kubona neza muri m 200, udutsiko twose tw’abanyamaguru nk’imperekerane cyangwa udutsiko tw’abanyeshuri bari ku murongo bayobowe n’umwarimu, iyo bagenda mu muhanda ku isonga hakaba hari abantu barenze umwe bagomba kugaragazwa kuburyo bukurikira:",
    choices: [
      { label: "A", text: "imbere ni itara ry’umuhondo ritwariwe ibumoso" },
      { label: "B", text: "inyuma ni itara ryumutuku ritwariwe ibumoso n’umuntu uri ku murongo w’inyuma hafi y’umurongo ugabanya umuhanda mo kabiri", correct: true },
      { label: "C", text: "A na B ni ibisubizo by’ukuri" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 205,
    questionText: "Imburira zimurika zemerewe gukoreshwa kugirango bamenyeshe umuyobozi ko bagiye kumunyuraho aha hakurikira:",
    choices: [
      { label: "A", text: "mu nsisiro cyangwa ahandi hose", correct: true },
      { label: "B", text: "ahegereye inyamaswa zikurura" },
      { label: "C", text: "hafi y’amatungo" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 206,
    questionText: "Ibinyabiziga bifite ubugari bufite ibipimo bikurikira bigomba kugira amatara ndangaburumbarare",
    choices: [
      { label: "A", text: "metero 3" },
      { label: "B", text: "metero 2 na cm 50" },
      { label: "C", text: "metero 1 na cm 10" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 207,
    questionText: "Nta tara na rimwe cyangwa akagarurarumuri bishobora kuba bifunze kuburyo igice cyabyo cyo hasi cyane kimurika kiba kiri hasi y’ibipimo bikurikira kuva ku butaka igihe ikinyabiziga kidapakiye:",
    choices: [
      { label: "A", text: "cm 30" },
      { label: "B", text: "cm 20" },
      { label: "C", text: "cm 50" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 208,
    questionText: "Ahari hejuru cyane y’ubuso bumurika h’amatara ndangambere na ndanganyuma ntihashobora kuba aharenze ibipimo bikurikira hejuru y’ubutaka iyo ikinyabiziga kidapakiye:",
    choices: [
      { label: "A", text: "m1 na cm 50" },
      { label: "B", text: "m1 na cm 75" },
      { label: "C", text: "m 1 na cm 80" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 209,
    questionText: "Buri modoka cyangwa buri romoruki ikuruwe n’iyo modoka bishobora kugira itara risa n’icyatsi kibisi bituma umuyobozi yerekana ko yabonye ikimenyetso cy’uwitegura kumunyuraho. Iryo tara rigomba gushyirwa aha hakurikira:",
    choices: [
      { label: "A", text: "hafi y’inguni y’ibumoso bw’ikinyabiziga" },
      { label: "B", text: "inyuma hafi y’impera y’ibumoso bw’ikinyabiziga", correct: true },
      { label: "C", text: "inyuma ahegereye inguni y’iburyo" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 210,
    questionText: "Ubugari bw’imizigo yikorewe n’ipikipiki ifite akanyabiziga ko kuruhande kimwe n’ubwa romoruki ikuruwe na bene icyo kinyabiziga ntibushobora kurenza ibipimo bikurikira ku bugari bw’icyo kinyabiziga kidapakiye:",
    choices: [
      { label: "A", text: "m 1.25" },
      { label: "B", text: "cm 30", correct: true },
      { label: "C", text: "cm 75" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 211,
    questionText: "Mu gihe telefone yawe ihamagawe utwaye imodoka wakora iki?",
    choices: [
      { label: "A", text: "Kwitaba cyangwa guhagarara ako kanya" },
      { label: "B", text: "kutayitaba" },
      { label: "C", text: "Gushyira imodoka iruhande ukayitaba", correct: true },
      { label: "D", text: "B na c ni ibisubizo byukuri" },
    ]
  },
  {
    id: 212,
    questionText: "Mu gihe telefone yawe ihamagawe utwaye imodoka wakora iki?",
    choices: [
      { label: "A", text: "Kwitaba cyangwa guhagarara ako kanya" },
      { label: "B", text: "kutayitaba" },
      { label: "C", text: "Gushyira imodoka iruhande ukayitaba", correct: true },
      { label: "D", text: "B na c ni ibisubizo byukuri" },
    ]
  },
  {
    id: 213,
    questionText: "Niki wakora mbere y’uko uhindura icyerekezo?",
    choices: [
      { label: "A", text: "Gutanga ikimenyetso cy’ukuboko no gukoresha amatara ndangacyerekezo." },
      { label: "B", text: "Itegereze neza niba icyapa kikwemerera guhindura icyerekezo." },
      { label: "C", text: "A na B n’ibisubizo by’ukuri", correct: true },
      { label: "D", text: "Nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 214,
    questionText: "Niki muribi wakwirinda mugihe ushaka kunyuranaho?",
    choices: [
      { label: "A", text: "Nyuma y’ikona ugategereza kubona uburyo bwo kunyuranaho.", correct: true },
      { label: "B", text: "Mumuhanda w’icyerekezo kimwe" },
      { label: "C", text: "Aho utagomba kurenza ibirometero 30 mu isaha." },
      { label: "D", text: "Ugeze mumuhanda utaringaniye neza" },
    ]
  },
  {
    id: 214,
    questionText: "Niki wakora mugihe usanze mu bimenyetso bimurika harimo ibara ry’umuhondo. img66",
    choices: [
      { label: "A", text: "Kongera umuvuduko" },
      { label: "B", text: "Kugumana umuvuduko wari uriho." },
      { label: "C", text: "Kwitegura guhagarara.", correct: true },
      { label: "D", text: "Gufata feri cyane." },
    ]
  },
  {
    id: 215,
    questionText: "Mugihe ukurikiranye na romoruki,n’ukubera iki ugomba gusiga umwanya uhagije hagati yawe nayo?",
    choices: [
      { label: "A", text: "Bituma ubasha gukata ikorosi vuba." },
      { label: "B", text: "Bifasha umuyobozi wa romoruki kukurebera mundorerwamo.", correct: true },
      { label: "C", text: "Bifasha romoruki guhagarara byoroshye." },
      { label: "D", text: "Bikurinda umuyaga." },
    ]
  },
  {
    id: 216,
    questionText: "Utegereje gukata iburyo kwiherezo ry’umuhanda. Ukingirijwe nimodoka ihagaze. Niki wakora?",
    choices: [
      { label: "A", text: "Guhagarara hanyuma ukagenda gake gake witonze kugezaho ureba neza.", correct: true },
      { label: "B", text: "Kwihuta wegera imbere aho ushobora kureba ugafunga ikindi cyerekezo." },
      { label: "C", text: "Gutegereza abanyamaguru bakakumenyesha ko ntakibazo wakata." },
      { label: "D", text: "Guhindukiza imodoka vuba kugirango ushake indi nzira wakoresha." },
    ]
  },
  {
    id: 217,
    questionText: "Mugihe uri murugendo rurerure mumuhanda urombereje w’ibice byinshi. Niki wakora mugihe wumva utangiye kugira ibitotsi?",
    choices: [
      { label: "A", text: "Gucuranga umuziki cyane." },
      { label: "B", text: "Kwihuta cyane kugirango usoze urugendo vuba." },
      { label: "C", text: "Kuva mumuhanda urombereje w’ibice byinshi, ugahagarara ahantu hatekanye.", correct: true },
      { label: "D", text: "Ntagisubizo cy’ukuri kirimo." },
    ]
  },
  {
    id: 218,
    questionText: "Kuki ugomba gucana amatara mugihe hatangiye kwijima?",
    choices: [
      { label: "A", text: "Kugirango akerekanamuvuduko kagaragare neza." },
      { label: "B", text: "Kugirango abandi biborohere kukubona.", correct: true },
      { label: "C", text: "Kugira ngo ujyane nabandi bayobozi bibinyabiziga." },
      { label: "D", text: "Kuko amatara yo ku muhanda ari kwaka" },
    ]
  },
  {
    id: 219,
    questionText: "Urimo kugenda munzira nyabagendwa ni gute wanyura k’umuyobozi w’igare?",
    choices: [
      { label: "A", text: "Kuvuza ihoni mugihe umunyuraho" },
      { label: "B", text: "Kumunyuraho umwegereye" },
      { label: "C", text: "Gusiga umwanya uhagije igihe umunyuraho", correct: true },
      { label: "D", text: "Kugabanya umuvuduko mbere y’uko umunyuraho" },
    ]
  },
  {
    id: 220,
    questionText: "Niki wakora igihe utabona neza usubira inyuma",
    choices: [
      { label: "A", text: "Kumanura ikirahure cy’imodoka urebe inyuma" },
      { label: "B", text: "Gufungura umuryango w’imodoka ureba inyuma" },
      { label: "C", text: "Gushaka umuntu uri hanze y’ikinyabiziga ukuyobora", correct: true },
      { label: "D", text: ". Gukoresha akarebanyuma kakwegereye" },
    ]
  },
  {
    id: 220,
    questionText: "Igihe ukurikiwe n’ikinyabiziga gitwara abarwayi gicanye amatara y’intabaza arabagirana. Wakora iki?",
    choices: [
      { label: "A", text: "Kugihigamira ako kanya ndetse byaba ngombwa ugahagarara b. Kongera umuvuduko kugirango ugisige c. Kugumana umuvuduko wari ufite d. Guhagarara bitunguranye mu muhanda", correct: true },
    ]
  },
  {
    id: 220,
    questionText: "Wifuza kugana ibumoso imbere yawe. kubera iki ushaka umwanya mwiza kandi uhagije?",
    choices: [
      { label: "A", text: "Kwemerera abandi bayobozi b’ibinyabiziga kugutambukaho" },
      { label: "B", text: "Kugirango ubone neza ikindi kerekezo ushaka gufata" },
      { label: "C", text: "Kugirango ufashe abandi bose bakoresha umuhanda icyo ushaka gukora", correct: true },
      { label: "D", text: "Kwemerera abandi bayobozi b’ibinyabiziga kukunyura muruhande rw’ibumoso" },
    ]
  },
  {
    id: 223,
    questionText: "Utwaye ikinyabiziga inyuma ya romoruki. Umuyobozi wayo akaguha ikimenyetso cyo kumutambukaho iburyo kandi ugana ibumoso, wakora iki?",
    choices: [
      { label: "A", text: "Kugabanya umuvuduko ukareka akagenda", correct: true },
      { label: "B", text: "Gukomeza iburyo bwawe" },
      { label: "C", text: "Kumunyuraho iburyo bwe" },
      { label: "D", text: "Kugumana umuvuduko wari ufite ukamuvugiriza ihoni" },
    ]
  },
  {
    id: 225,
    questionText: "Wegereye inzira y’abanyamaguru ugasanga bategereje kwambuka. Ugomba gukora iki?",
    choices: [
      { label: "A", text: "Kureka abakuze n’abafite ubumuga bagatambuka mbere" },
      { label: "B", text: "Kugabanya umuvuduko witegura guhagarara", correct: true },
      { label: "C", text: "Gukoresha amatara abamenyesha kwambuka" },
      { label: "D", text: "Gukoresha ibimenyetso byamaboko bibemerera kwambuka" },
    ]
  },
  {
    id: 224,
    questionText: "Uri hafi kunyura k’umuyobozi w’ikinyamitende. Muri ibi byapa bikurikira nikihe wakwitondera?",
    choices: [
      { label: "A", text: "img72" },
      { label: "B", text: "img74" },
      { label: "C", text: "img75", correct: true },
      { label: "D", text: "img79" },
    ]
  },
  {
    id: 227,
    questionText: "Kumanywa urumuri rudahagije hatabona neza. Ni ayahe matara y’urugendo ugomba gukoresha.",
    choices: [
      { label: "A", text: "Amatara yo kubisika na matara kamena-bihu." },
      { label: "B", text: "Amatara kamena-bihu y’imbere", correct: true },
      { label: "C", text: "Amatara yo kubisikana" },
      { label: "D", text: "Amatara kamena-bihu y’inyuma" },
    ]
  },
  {
    id: 227,
    questionText: "Niyihe mpamvu ituma tugomba kugabanya umuvuduko mugihe hari ibihu?",
    choices: [
      { label: "A", text: "Igihe feri idakora" },
      { label: "B", text: "Igihe uhumishijwe n’amatara yo kubisikana" },
      { label: "C", text: "Igihe moteri imara ngo izime" },
      { label: "D", text: "Nuko biba bitoroshye kubona ikiri imbere", correct: true },
    ]
  },
  {
    id: 228,
    questionText: "Niki ugomba gukora igihe uhagaze ku muhanda igihe cy’ibihu?",
    choices: [
      { label: "A", text: "Kureka amatara ndanga akaguma yaka", correct: true },
      { label: "A", text: "Kureka amatara yo k,ubisikana na kamena-bihu akaguma yaka" },
      { label: "B", text: "Kureka amatara yo kubisikana akaguma yaka" },
      { label: "C", text: "Kureka amatara y’urugendo akaguma yaka" },
    ]
  },
  {
    id: 229,
    questionText: "Iki cyapa cyivuga iki? img79",
    choices: [
      { label: "A", text: "Umuvuduko ntarengwa 30 km/h" },
      { label: "B", text: "Iherezo ry’umuvuduko muke ntarengwa utegetswe.", correct: true },
      { label: "B", text: "Iherezo ry’Umuvuduko muto utegetswe" },
      { label: "C", text: "Umuvuduko uri hejuru 30 km/h" },
    ]
  },
  {
    id: 230,
    questionText: "Icyapa gikurikira kivuze iki? img81",
    choices: [
      { label: "A", text: "Ntihanyurwa" },
      { label: "B", text: "Birabujijwe guhagarara umwanya munini", correct: true },
      { label: "C", text: "Umuvuduko utarengeje" },
      { label: "D", text: "Inzira yabanyeshuli" },
    ]
  },
  {
    id: 231,
    questionText: "Inzira nyabagendwa ifite ibyerekezo bibiri, uruhande rw’ibumoso rudufasha iki? img84",
    choices: [
      { label: "A", text: "Kunyuranaho gusa, ntugaruke iburyo bwawe" },
      { label: "B", text: "Kunyuranaho cyangwa ugakatira ibumoso c. Hemerewe kugenda imodoka zihuta gusa d. Gukatira iburyo gusa utanyuranyeho", correct: true },
    ]
  },
  {
    id: 232,
    questionText: "Ni hehe byemewe kunyuranaho munzira y’icyerekezo kimwe?",
    choices: [
      { label: "A", text: "ku gisate kiri Ibumoso bw’umuhanda b. Kunyuranaho ntibyemewe c. Ku gisate kiri iburyo bw’umuhanda gusa d. Ku gisate cy’ibumoso cyangwa iburyo", correct: true },
    ]
  },
  {
    id: 233,
    questionText: "N’uwuhe muntu ushobora gusimbura ibimenyetso byo mumuhanda, dutegetswe kubaha?",
    choices: [
      { label: "A", text: "Umuyobozi w’ikinyamitende" },
      { label: "B", text: "Umunyamaguru" },
      { label: "C", text: "Umukozi ubifitiye ububasha", correct: true },
      { label: "D", text: "Umuyobozi wa bisi" },
    ]
  },
  {
    id: 234,
    questionText: "Iki cyapa gisobanura iki? img85",
    choices: [
      { label: "A", text: "Iherezo ry’ibibuzwa byose mu karere ku binyabiziga bigenda b. Ntihemerewe kuhahagarara c. Umuvuduko ntarengwa wemewe d. Nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 235,
    questionText: "Ibyapa bitegeka bikozwe muyihe shusho?",
    choices: [
      { label: "A", text: "img88" },
      { label: "B", text: "img89" },
      { label: "C", text: "img90", correct: true },
      { label: "D", text: "img91" },
    ]
  },
  {
    id: 236,
    questionText: "Nikihe cyapa cyerekena ko nta kinyabiziga gifite moteri cyemerewe kuhanyura?",
    choices: [
      { label: "A", text: "img92" },
      { label: "B", text: "img93", correct: true },
      { label: "C", text: "img94" },
      { label: "D", text: "img95" },
    ]
  },
  {
    id: 237,
    questionText: "Kki cyapa gisobanura iki? img96",
    choices: [
      { label: "A", text: "Uburenganzira bwo gutambuka mbere" },
      { label: "B", text: "Nta kinyabiziga kigendeshwa na moteri" },
      { label: "C", text: "ibyerekezo bibiri by’umuhanda" },
      { label: "D", text: "Birabujijwe kunyuranaho", correct: true },
    ]
  },
  {
    id: 238,
    questionText: "Imbere yawe iki cyapa kikubwiye iki? img97",
    choices: [
      { label: "A", text: "Umuvuduko ntarengwa wemewe" },
      { label: "B", text: "Iherezo ry’ibyo wabuzwaga" },
      { label: "C", text: "Guhagarara umwanya munini n’umwanya moto ntibyemewe d.Birabujijwe kuhinjira", correct: true },
    ]
  },
  {
    id: 239,
    questionText: "Iki cyapa gisobanura iki? img100",
    choices: [
      { label: "A", text: "Umuhanda uzenguruka" },
      { label: "B", text: "Igice cy’umuhanda uzenguruka" },
      { label: "C", text: "Aho banyura bazengurutse", correct: true },
      { label: "D", text: "Ibisubizo byose nibyo" },
    ]
  },
  {
    id: 240,
    questionText: "Iki cyapa gisubanura iki? img101",
    choices: [
      { label: "A", text: "Iteme ridahoraho" },
      { label: "B", text: "Umuhanda utaringaniye", correct: true },
      { label: "C", text: "Umuhanda w’injira mu kuzimu" },
      { label: "D", text: "Ubutaka bworoshye" },
    ]
  },
  {
    id: 241,
    questionText: "Iki cyapa gisobanura iki? img102",
    choices: [
      { label: "A", text: "Umuyaga w’intambike", correct: true },
      { label: "B", text: "Urusaku rwo mu muhanda" },
      { label: "C", text: "Ikibuga cy’indege" },
      { label: "D", text: "Ibisubizko byose nibyo" },
    ]
  },
  {
    id: 242,
    questionText: "Iki Cyapa Gisobanura Iki? img104",
    choices: [
      { label: "A", text: "Iherezo Ry’inzira Y’abanyamaguru" },
      { label: "B", text: "Iherezo Ry’umuhanda Urombereje W’ibice Byinshi", correct: true },
      { label: "C", text: "A Na B Ni Ibisubizo By’ukuri" },
      { label: "D", text: "Nta nzira ihari" },
    ]
  },
  {
    id: 243,
    questionText: "Iki cyapa gisobanura Iki? img105",
    choices: [
      { label: "A", text: "Iherezo Ry’umuhanda Wi Byerekezo Bibiri" },
      { label: "B", text: "Iteme rinini Kandi rirerire" },
      { label: "C", text: "Ifungana Ry’umuhanda", correct: true },
      { label: "D", text: "Iherezo ry’iteme rifunganye" },
    ]
  },
  {
    id: 244,
    questionText: "Iki cyapa gisobanura iki? img106",
    choices: [
      { label: "A", text: "Isangano rifite ishusho ya T" },
      { label: "B", text: "Inzira idakomeza", correct: true },
      { label: "C", text: "Aho baterefonera" },
      { label: "D", text: "Nta gisubizo cy’ukuri" },
    ]
  },
  {
    id: 245,
    questionText: "Iki cyapa gisobanura iki? img109",
    choices: [
      { label: "A", text: "Inzira y’abanyeshuri" },
      { label: "B", text: "Abanyamaguru ntibemerewe" },
      { label: "C", text: "Agace k’abanyamaguru nta kinyabiziga" },
      { label: "D", text: "Hegereye aho abanyamaguru bambukira", correct: true },
    ]
  },
  {
    id: 246,
    questionText: "wakora iki ubonye icyi cyapa? img110",
    choices: [
      { label: "A", text: "guhagarara gusa igihe ibinyabiziga bikwegereye" },
      { label: "B", text: "guhagarara niyo nta kinyabiziga ubona", correct: true },
      { label: "C", text: "Guhagarara gusa niba hari abana bategereje kwambuka" },
      { label: "D", text: "Guhagarara gusa igihe ikimenyetso cyaka ari umutuku" },
    ]
  },
  {
    id: 247,
    questionText: "Iki cyapa gisobanura iki? img111",
    choices: [
      { label: "A", text: "Uguhinguka ku mwaro cyangwa ku nkombe cyangwa ahegereye icyome", correct: true },
      { label: "B", text: "Inzira nyabagendwa iri kumusozi ucuramye" },
      { label: "C", text: "Umuhanda utaringaniye" },
      { label: "D", text: "Umuhanda wangijwe n’isuri" },
    ]
  },
  {
    id: 248,
    questionText: "Iki cyapa gisobanura iki? img112",
    choices: [
      { label: "A", text: "Hanyurwa na velomoteri gusa" },
      { label: "B", text: "Nta modoka" },
      { label: "C", text: "Hanyurwa nimodoka gusa" },
      { label: "D", text: "Ntihanyurwa n’amapikipiki", correct: true },
    ]
  },
  {
    id: 249,
    questionText: "Icyapa gitanga uburenganzira bwo gutambuka mbere kigira iyihe shusho?",
    choices: [
      { label: "A", text: "img116" },
      { label: "B", text: "img117" },
      { label: "C", text: "img118" },
      { label: "D", text: "img119", correct: true },
    ]
  },
  {
    id: 250,
    questionText: "Iki cyapa gisobanura iki? img120",
    choices: [
      { label: "A", text: "Ahegereye amasangano y’inzira nyabagendwa n’inzira ya gari ya moshi ibambiye", correct: true },
      { label: "B", text: "Inzira ibambiye imbere" },
      { label: "C", text: "Inzira itabambiye itanafunze" },
      { label: "D", text: "Imbere hari ikiraro cy’amatungo" },
    ]
  },
  {
    id: 251,
    questionText: "Iki cyapa gisobanura iki? img121",
    choices: [
      { label: "A", text: "Umuhanda wubatswe nabi" },
      { label: "B", text: "Agacuri kateza ibyago", correct: true },
      { label: "C", text: "Umuhanda utaringaniye" },
      { label: "D", text: "Akazamuko gahanamye" },
    ]
  },
  {
    id: 252,
    questionText: "Iki cyapa gisobanura iki? img122",
    choices: [
      { label: "A", text: "Guhindura icyerekezo ibumoso ugana aho bahagarara" },
      { label: "B", text: "Umuhanda udakomeza", correct: true },
      { label: "C", text: "Nti byemewe guhindura icyerekezo ibumoso" },
      { label: "D", text: "Guhindura ikirekezo ibumoso ugana ku cyome" },
    ]
  },
  {
    id: 253,
    questionText: "Mu bimenyetso bimurika itara ritukura rivuga iki? img123",
    choices: [
      { label: "A" },
      { label: "B", text: " Hagarara kereste niba ushaka gukata ibumoso Hagarara niba ubona ntabyago byaguteza" },
      { label: "C", text: "Birabujijwe kurenga icyo kimenyetso", correct: true },
      { label: "D", text: " Wemerewe kugenda niba aho asohokera mu masangano y’umuhanda hafunze" },
    ]
  },
  {
    id: 254,
    questionText: "Mubimenyetso bimurika itara ry’umuhondo risobanura iki? img126",
    choices: [
      { label: "A", text: "Itegure kugenda" },
      { label: "B", text: "Birabujijwe gutambuka umurongo wo guhagarara umwanya muto cg igihe uwo murongo udahari icyo kimenyetso ubwacyo", correct: true },
      { label: "C", text: "A na b ni ibisubizo by’ukuri" },
      { label: "D", text: "Nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 255,
    questionText: "Mubimenyetso bimurika itara ry’icyatsi risobanura iki? img127",
    choices: [
      { label: "A", text: "Kwitegura kugenda" },
      { label: "B", text: "Uburenganzira bwo kurenga icyo kimenyetso", correct: true },
      { label: "C", text: "Hagarara niba inzira isohoka mu isangano ry’imihanda ifunze" },
      { label: "D", text: "Ntagisubizo cyukuri kirimo" },
    ]
  },
  {
    id: 256,
    questionText: "Umurongo ucagaguye wera mu muhanda usobanura iki? img128",
    choices: [
      { label: "A", text: "Birabujijwe kuwurenga a. Birabujijwe kuhahagarara b. Wegereye ahaguteza ibyago c. Kunyuranaho ntibyemewe", correct: true },
    ]
  },
  {
    id: 257,
    questionText: "Iki cyapa gisobanura iki? img131",
    choices: [
      { label: "A", text: "Ukugendera mu muhanda ubisikanirwamo", correct: true },
      { label: "B", text: "Ukugendera mu muhanda ubisikanirwamo ntibyemewe" },
      { label: "C", text: "Cyerekana aho umunyegare agomba kunyura" },
      { label: "D", text: "Nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 258,
    questionText: "Iki cyapa gisobanura iki? img132",
    choices: [
      { label: "A", text: "Ahatangirwa serivisi ni muri metero 30." },
      { label: "B", text: "Umuvuduko munini ntarengwa utegetswe ni 30 km/h." },
      { label: "C", text: "Umuvuduko muto ntarengwa utegetswe ni 30 km/h.", correct: true },
      { label: "D", text: "Aho ibinyabiziga bihagarara ni imbere mu birometero 30." },
    ]
  },
  {
    id: 259,
    questionText: "Iki cyapa gisobanura iki? img134",
    choices: [
      { label: "A", text: "Ahegereye umuhanda unyerera." },
      { label: "B", text: "Imbere ipine ryapfumutse." },
      { label: "C", text: "Ahegereye icyago kidasobanuye ukundi. d. Imbere hari hatangirwa serivisi.", correct: true },
    ]
  },
  {
    id: 260,
    questionText: "Iki cyapa gisobanura iki? 135",
    choices: [
      { label: "A", text: "Imbere hari umuyobozi w’amatungo." },
      { label: "B", text: "Imbere hari inzira ya gari ya moshi." },
      { label: "C", text: "Ahegereye amasangano y’inzira nyabagendwa n’inzira ya gari ya moshi hatabambiye d. Inkomane ibambiye.", correct: true },
    ]
  },
  {
    id: 261,
    questionText: "Muri iri sangano ry’umuhanda hari icyapa gisobanura “guhagarara” n’umurongo wera urombereje munzira . Niyihe mpamvu hari iki cyapa cyo “guhagarara” hano? img139",
    choices: [
      { label: "A", text: "Biragoye kubona neza mu muhanda munini", correct: true },
      { label: "B", text: "Umuvuduko mu muhanda munini wavanyweho" },
      { label: "C", text: "Ni mwisangano ry’umuhanda rikoreshwa cyane" },
      { label: "D", text: "Hari imirongo iburira ibyago bitunguranye" },
    ]
  },
  {
    id: 262,
    questionText: "Ni iki gikenewe muri ibi bikurikira kugirango ubashe gutwara imodoka mu muhanda biteganywa nitegeko",
    choices: [
      { label: "A", text: "Uruhushya rwa burundu rwo gutwara ibinyabiziga rugifite agaciro" },
      { label: "B", text: "Ubwishingizi bw’ikinyabizaga bugifite agaciro" },
      { label: "C", text: "Icyemezo cy’iyandikwa ry’ikinyabiziga" },
      { label: "D", text: "Ibisubizo byose nibyo", correct: true },
    ]
  },
  {
    id: 263,
    questionText: "Ikinyabiziga gishya gikenerwa gusuzumwa bwambere nyuma y’igihe kingana iki?",
    choices: [
      { label: "A", text: "Nyuma y’umwaka umwe" },
      { label: "B", text: "Nyuma y’imyaka ibiri", correct: true },
      { label: "C", text: "A na b ni ibisubizo by’ukuri" },
      { label: "D", text: "Nta gisubizo cy’ukuri" },
    ]
  },
  {
    id: 264,
    questionText: "Ni ryari ushobora kwakiriza icyarimwe amatara yose ndangacyerekezo y’ikinyabiziga?",
    choices: [
      { label: "A", text: "Mu gihe ushaka kuburira abandi bakoresha umuhanda" },
      { label: "B", text: "Mu gihe ikinyabiziga cyawe gishobora guteza ibyago" },
      { label: "C", text: "A na b ni ibisubizo by’ukuri", correct: true },
      { label: "D", text: "Ntagisubizo cy’ukuri" },
    ]
  },
  {
    id: 265,
    questionText: "Ugeze ahabereye impanuka yo mumuhanda bwambere ugasanga abakomeretse bikomeye. wakiriza icyarimwe amatara y’ibyerekezo byombi, niki kindi ushobora gukora?",
    choices: [
      { label: "A", text: "Kumenya neza niba imbangukiragutabara yahamagawe", correct: true },
      { label: "A", text: "Guhagarika ibinyabiziga bindi no kubasaba ubufasha" },
      { label: "B", text: "A na b ni ibisubizo by’ukuri" },
      { label: "C", text: "Nta gisubizo cy’ukuri" },
    ]
  },
  {
    id: 266,
    questionText: "Umuyobozi w’ikinyabizaga cy’ikoreye ibintu bishobora gufata inkongi, n’ikihe cyapa cyerekana ko ibyo atwaye biturika by’afata inkongi?",
    choices: [
      { label: "A", text: "img140" },
      { label: "B", text: "img143", correct: true },
      { label: "C", text: "img144" },
      { label: "D", text: "img145" },
    ]
  },
  {
    id: 267,
    questionText: "Wakoze impanuka yo mu muhanda , ni ikihe cyangombwa polisi ishobora kugusaba kucyerekana?",
    choices: [
      { label: "A", text: "Icyemezo cy’iyandikwa ryi ikinyabiziga" },
      { label: "B", text: "Uruhusa rwa burundu rwo gutwara ikinyabiziga", correct: true },
      { label: "B", text: "Uruhushya rwagateganyo" },
      { label: "C", text: "Imikorere y’ikinyabiziga" },
    ]
  },
  {
    id: 268,
    questionText: "Uhuye n’ingorane utwaye ikinyabiziga , mu muhanda ufite ibyerekezo bibiri, ufite ikimenyetso kiburira cya mpandeshatu. wagishyira mu ntera ingana iki uvuye aho ikinyabiziga cyahagaze img147",
    choices: [
      { label: "A", text: "Metero 5" },
      { label: "B", text: "Metero 25", correct: true },
      { label: "C", text: "Metero 45" },
      { label: "D", text: "Metero 100" },
    ]
  },
  {
    id: 269,
    questionText: "Umuyobozi usunika ipikipiki agomba gufatwa nka: img148",
    choices: [
      { label: "A", text: "Umunyamaguru" },
      { label: "B", text: "Umuyobozi w’ikinyabiziga", correct: true },
      { label: "C", text: "Umugenzi" },
      { label: "D", text: "A na b ni ibisubizo by’ukuri" },
    ]
  },
  {
    id: 270,
    questionText: "Icyapa gikoze mw’ishusho ya mpandeshatu kimenyesha: img151",
    choices: [
      { label: "A", text: "ibyago", correct: true },
      { label: "A", text: "ibibujijwe" },
      { label: "B", text: "ibitegetswe" },
      { label: "C", text: "ntagisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 271,
    questionText: "Iki cyapa gisobanura : img152",
    choices: [
      { label: "A", text: "uburenganzira bwo gutambuka mbere", correct: true },
      { label: "B", text: "uburenganzira bwo gutambuka mbere mu yandi masangano y’umuhanda akwegereye" },
      { label: "C", text: "ibyago imbere mu masangano y’umuhanda ukwegereye" },
      { label: "D", text: "a na b ni ibisubizo by’ukuri" },
    ]
  },
  {
    id: 272,
    questionText: "Iki cyapa gisobanura: img154",
    choices: [
      { label: "A", text: "Ntihanyurwa n’abanyamaguru", correct: true },
      { label: "B", text: "Akayira kabanyamaguru" },
      { label: "C", text: "Aho abanayamaguru bambukira" },
      { label: "D", text: "B na c ni ibisubizo by’ukuri" },
    ]
  },
  {
    id: 273,
    questionText: "Urenze munsisiro ,ukahasanga ibyapa bibiri iburyo bwawe bimenyesha ko irangira ry’imirimo bitewe nicyo ibyo byapa bemenyesha wagendera kuwuhe muvuduko? img155",
    choices: [
      { label: "A", text: "70 km/h" },
      { label: "B", text: "50 km/h" },
      { label: "C", text: "40 km/h" },
      { label: "D", text: "80 km/h", correct: true },
    ]
  },
  {
    id: 274,
    questionText: "Iki cyapa gisobanura iki? img158",
    choices: [
      { label: "A", text: "Hoteli" },
      { label: "B", text: "Ibitaro", correct: true },
      { label: "C", text: "Ahagenewe kugwa kajugujugu" },
      { label: "D", text: "B na c ni ibisubizo by’ukuri" },
    ]
  },
  {
    id: 275,
    questionText: "igice kinzira nyabagendwa gikikijwe n’imirongo ibiri y’umweru iciyemo uduce kandi iteganye : img159",
    choices: [
      { label: "A", text: "ahagenewe guhagarara umwanya munini n’umuto" },
      { label: "B", text: "ahagenewe abanayamaguru" },
      { label: "C", text: "ahagenewe inzira y’ibinyamitende", correct: true },
      { label: "D", text: "a na b ni ibisubizo by’ukuri" },
    ]
  },
  {
    id: 276,
    questionText: "iki cyapa kibuza abayobozi bibinyabiziga kunyuranaho : img160",
    choices: [
      { label: "A", text: "iburyo" },
      { label: "B", text: "ibumoso", correct: true },
      { label: "C", text: "iburyo n’ibumoso" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 277,
    questionText: "Iki cyapa kibuza kunyuranaho ibumoso ku binyabiziga bikurikira : img160",
    choices: [
      { label: "A", text: "ku binyabiziga byose" },
      { label: "B", text: "ku binyabiziga byose bifite moteri" },
      { label: "C", text: "kubinyabiziga byose uretse ibinyamitende ibiri n’amapikipiki adafite akanyabiziga ko k’uruhande", correct: true },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 278,
    questionText: "iki kimenyetso cyaka kinyemerera gukomeza: img164",
    choices: [
      { label: "A", text: "yego" },
      { label: "B", text: "yego ariko utanga inzira kubanyamaguru" },
      { label: "C", text: "yego utanga inzira kubandi bayobozi b’ibinyabizaga baturutse mukindi cyerekezo" },
      { label: "D", text: "oya", correct: true },
    ]
  },
  {
    id: 279,
    questionText: "Mu muhanda ufite uruhererekane rw’amakoni, feri y’urugendo ikoreshwa ryari? img165",
    choices: [
      { label: "A", text: "Mbere ya buri koni", correct: true },
      { label: "B", text: "Muri buri koni" },
      { label: "C", text: "Nyuma ya buri koni" },
      { label: "D", text: "Nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 280,
    questionText: "Ni ikihe cyapa muri ibi kintegeka gutanga inzira: img167",
    choices: [
      { label: "A", text: "Icyapa A19" },
      { label: "B", text: "Icyapa B5", correct: true },
      { label: "C", text: "Icyapa B6" },
      { label: "D", text: "Ntagisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 281,
    questionText: "Iki cyapa gisobanura : img168",
    choices: [
      { label: "A", text: "utubuye dutaruka mu muhanda", correct: true },
      { label: "B", text: "umuhanda urimo amazi" },
      { label: "C", text: "umuhanda unyerera" },
      { label: "D", text: "a na b ni bisubizo by’ukuri" },
    ]
  },
  {
    id: 282,
    questionText: "Uri umuyobozi wa velomoteri, uhuye n’umwe munshuti zawe agusaba ko wa mutwara ukamusiga ku’wundi muhanda. ufite imyaka 18 ariko nta ngofero yindi yabigenewe ufite. wamutwara? img171",
    choices: [
      { label: "A", text: "yego" },
      { label: "B", text: "yego usibye urugendo rurerure" },
      { label: "C", text: "yego usibye urugendo rugufi" },
      { label: "D", text: "Oya", correct: true },
    ]
  },
  {
    id: 283,
    questionText: "Ni ikihe cyapa cy’inyemerera gutambuka mbere mu masangano y’umuhanda? img172",
    choices: [
      { label: "A", text: "Icyapa B3", correct: true },
      { label: "B", text: "Icyapa A22 a" },
      { label: "C", text: "Icyapa A 20" },
      { label: "D", text: "Ibisubizo byose ni ukuri" },
    ]
  },
  {
    id: 284,
    questionText: "Mbere yo kunyura kumuyobozi w’ikinyabiziga cy’imitende ibiri, ngomba gucana akaranga cyerekezo k’ibumoso? img173",
    choices: [
      { label: "A", text: "Yego buri gihe", correct: true },
      { label: "B", text: "Yego igihe hari ikinyabiziga kinkurikiye" },
      { label: "C", text: "Yego iyo nkurikiwe nibindi binyabiziga by’imitende ibiri" },
      { label: "D", text: "Oya nta na rimwe kunyura kubinyabiziga by’imitende ibiri" },
    ]
  },
  {
    id: 285,
    questionText: "Nshobora kunyuraho umuyobozi w’ikinyabiziga wahagaze imbere y’inzira yabanyamaguru? img176",
    choices: [
      { label: "A", text: "yego" },
      { label: "B", text: "yego nyuma yo kuvuza ihoni" },
      { label: "C", text: "yego mu gihe nkurikiwe n’ibindi binyabiziga" },
      { label: "D", text: "Oya", correct: true },
    ]
  },
  {
    id: 286,
    questionText: "Hejuru y’aka kanunga: img177",
    choices: [
      { label: "A", text: "Nshobora kunyura ku kinyabiziga icyo aricyose mu gihe nagabanyije umuvuduko" },
      { label: "B", text: "nshobora kunyura gusa kubinyabiziga by’imitende ibiri" },
      { label: "C", text: "kunyuranaho ibumoso birabujijwe", correct: true },
      { label: "D", text: "a na b ni ibisubizo by’ukuri" },
    ]
  },
  {
    id: 287,
    questionText: "Mu gihe cy’impanuka mu muhanda n’ubundi bushotoranyi ni yihe nimero ya telefone y’ubutabazi wahamagara : img179",
    choices: [
      { label: "A", text: "911" },
      { label: "B", text: "100" },
      { label: "C", text: "112", correct: true },
      { label: "D", text: "131" },
    ]
  },
  {
    id: 288,
    questionText: "Ugeze bwa mbere ahabereye impanuka yo mu muhanda harimo inkomere wakora iki? img182",
    choices: [
      { label: "A", text: "gusohora inkomere mu kinyabiziga" },
      { label: "B", text: "kubaha icyo kunywa" },
      { label: "C", text: "ku menyesha impanuka no guhamagara ubutabazi", correct: true },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 289,
    questionText: "Mugihe ikinyabiziga cyacu bakinyuzeho",
    choices: [
      { label: "A", text: "Tugomba kugabanya umuvuduko b. Tugomba kongera umuvuduko c. Tugomba kongera umuvuduko n’ubwitonzi d. Nta gisubizo cy’ ukuri kirimo", correct: true },
    ]
  },
  {
    id: 290,
    questionText: "Ntibyemewe gukoresha telephone a. Mu biro bya leta b. Mu biro bya Polisi",
    choices: [
      { label: "C", text: "Igihe utwaye ikinyabiziga d. Ibisubizo byose ni ukuri", correct: true },
    ]
  },
  {
    id: 291,
    questionText: "Mbere yo kunyura ku kindi kinyabiziga, ni ngombwa kumenya ko: a. Nta kindi kinyabiziga kinturutse inyuma",
    choices: [
      { label: "B", text: "Umuhanda ubona neza, no kwitondera kunyuranaho c. Ikinyabiziga kinturutse imbere gishaka gukatira I buumoso d. Nta gisubizo cy’ukuri", correct: true },
    ]
  },
  {
    id: 292,
    questionText: "Ikindi kinyabiziga kiguturutse inyuma kiguterera amatara y’urumuri rumyasa, wakora iki? a. Kongera umuvuduko kugira ngo intera iri hagati yawe n’ukuri inyuma igumeho b. Fata feri y’urugendo kugira ngo umwereke ko ugiye guhagarara",
    choices: [
      { label: "C", text: "Emerera icyo kinyabiziga kugutambukaho niba imbere ntacyago gihari d. Nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 293,
    questionText: "Mu gihe Umuntu ufite ubumuga bwo kutabona yambuka umuhanda yitwaje inkoni yera y’abatabona:",
    choices: [
      { label: "A", text: "Umuyobozi w’ikinyabiziga agomba gufata iyo nkoni nk’icyapa kimumenyesha ko agomba guhagarara b. Vuza ihoni ukomeze c. Gabanya nurangiza ukomeze witonze d. Ibisubizo byose ni ukuri", correct: true },
    ]
  },
  {
    id: 294,
    questionText: "Amatara y’urugendo, mu gihe cy’ibihu: a. Ni meza kuko atuma ureba kure",
    choices: [
      { label: "C", text: "Ni mabi kuko arakugarukira akaguhuma amaso c. Akwizeza ko abandi bakubona d. Nta gisubizo cy’ukuri", correct: true },
    ]
  },
  {
    id: 295,
    questionText: "Gutwara uzungazunga mu muhanda: a. Ni bibi ku kinyabiziga cy’imitende ibiri",
    choices: [
      { label: "B", text: "Ni bibi igihe cyose c. Ni bibi ku kinyabiziga cy’imitende ine d. Nta gisubizo cy’ukuri", correct: true },
    ]
  },
  {
    id: 296,
    questionText: "Telephone ngendanwa ntigomba gukoreshwa: a. Ahari ibimenyetso bimurika b. Igihe utwaye ikinyabiziga Ku muvuduko wa 20km/h c. A na B ni ibisubizo by’ukuri",
    choices: [
      { label: "D", text: "Nta gisubizo cy’ukuri", correct: true },
    ]
  },
  {
    id: 297,
    questionText: "Kunyuranaho bibujijwe gusa igihe: a. Igihe mu muhanda hagati hashushanyijemo umurongo w’umweru ucagaguye.",
    choices: [
      { label: "B", text: "Umuhanda ushushanyijwemo umurongo wera udacagaguye c. Ikinyabiziga gitwawe ku musozi unyerera d. Nta gisubizo cy’ukuri", correct: true },
    ]
  },
  {
    id: 298,
    questionText: "Mu gihe utwaye ikinyabiziga ni joro ucanye amatara maremare ugahura n’ikindi kinyabiziga giturutse mu kindi cyerecyezo: a. Gukomeza ibumoso b. Kuzimya ucana amatara maremare n’amagufi",
    choices: [
      { label: "C", text: "Kuzimya amatara maremare kugeza ikindi kinyabiziga gitambutse d. Nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 299,
    questionText: "Igihe umuyobozi w’inyamaswa, afite inyamaswa idatuje, asaba ko ibinyabiziga bihagarara:",
    choices: [
      { label: "A", text: "Umuyobozi w’ikinyabiziga agomba guhagarara a. Umuyobozi w’ikinyabizigaagomba kuvuza ihoni agukomeza b. Umuyobozi w’ikinyabiziga agomba kugabanya umuvuduko c. Ibisubizo byose ni ukuri", correct: true },
    ]
  },
  {
    id: 300,
    questionText: "Iyo mu muhanda hashushanyijemo umurongo wera ucagaguye, ntugomba a. Ntugomba kujya mu kindi gice cy’umuhanda",
    choices: [
      { label: "B", text: "Ushobora kujya mu kindi gice cy’umuhanda bibaye ngombwa b. Agomba guhagarika ikinyabiziga c. Nta gisubizo cy’ukuri", correct: true },
    ]
  },
  {
    id: 301,
    questionText: "Kuvuza ihoni bibujijwe: a. Ku musigiti, ku rusengero, ku rutambiro",
    choices: [
      { label: "B", text: "Hafi y’ibitaro c. Hafi y’ubuyobozi bwa polisi d. Nta gisubizo cy’ukuri", correct: true },
    ]
  },
  {
    id: 302,
    questionText: "Icyemezo cy’Isuzuma ry’ikinyabiziga kimara igihe kingana iki? a. Amezi 6 kubinyabiziga bikora ubucuruzi b. Amezi 12 ku binyabiziga bidakora ubucuruzi c. Imyaka 2",
    choices: [
      { label: "D", text: "A na B ni ibisubizo by’ukuri", correct: true },
    ]
  },
  {
    id: 303,
    questionText: "N’iyihe myifatire myiza wagira ugeze aho abana bari hafi y’inzira nyabagendwa? img187",
    choices: [
      { label: "A", text: "Itonde , witegereze ni biba ngongwa ubaburire unitegura kuba wahagarara.", correct: true },
      { label: "B", text: "Ihute urenge aho abo bana bari c ) Komeza ugume ku muvuduko munini" },
      { label: "D", text: "Komeza ugendere kuruhande rw’iburyo" },
    ]
  },
  {
    id: 304,
    questionText: "Umuyobozi w’ikinyabiziga yegereye aho umwana w’umuhungu utwaye akagare k’abana asezera ku nshuti ye. N’iyihe myifatire myiza wagira imbere yabo? img190 a. Ikomereze nkaho ataragera munzira nyabagendwa",
    choices: [
      { label: "B", text: "Itegure kureka uwo mwana w’umuhungu atambuke, kuko yajya mu muhanda atitaye ku kinyabiziga cyawe c. Gabanya umuvuduko ubwire uwo mwana yambuke ukoresheje ibimenyetso d. Komeza nkaho uwo mwana akiri munzira y’abanyamaguru", correct: true },
    ]
  },
  {
    id: 305,
    questionText: "Nk’umuyobozi w’ikinyabiziga, n’iyihe myitwarire wagira? img191",
    choices: [
      { label: "A", text: "Umuyobozi w’ikinyabiziga agomba gukomeza b. Umuyobozi w’ikinyabiziga agomba kuguma mu ruhande rw’iburyo kugira ngo ahe inzira umumotari c. Umuyobozi w’ikinyabiziga agomba gutegereza d. Umuyobozi w’ikinyabiziga agomba gutanga inzira ayiha umu motari", correct: true },
    ]
  },
  {
    id: 306,
    questionText: "Umuyobozi w’ikinyabiziga ageze hafi y’inzira y’abanyamaguru yakwitwara ate? img192",
    choices: [
      { label: "A", text: "Kugabanya umuvuduko mu gihe cyiza, ukitegura guhagarara b. Gukomeza agendera ku muvuduko uri hejuru, mu gihe umunyamaguru ategereje c. Kuguma ku muvuduko yari afite mu gihe umunyamaguru atarambuka d. Kuvuza ihoni akaguma ku muvuduko yahozeho", correct: true },
    ]
  },
  {
    id: 307,
    questionText: "Umuyobozi w’ikinyabiziga akurikiye ibinyabiziga bibiri, yifuza kubinyuraho. N’iki yashingiraho mbere yo kubanyuraho? img195 a. Ugomba kuzinyuraho zombi",
    choices: [
      { label: "B", text: "Sibyiza ko yazinyuraho atabasha kureba neza imbere ye c. Ibyapa by’aho ageze ntibimwemerera kunyuranaho d. Imbere har’inzira y’abanyamaguru", correct: true },
    ]
  },
  {
    id: 308,
    questionText: "N’iki umuyobozi w’ikinyabiziga yakora ashaka gukatira iburyo? img196 a. Vuza ihoni umenyesha umunyegare ko ushaka gukatira iburyo b. Kata ikoni mbere y’umunyegare",
    choices: [
      { label: "C", text: "Emerera umunyegare akomeze inzira ye d. Ongera umuvuuko kugira ngo umutange gukata mbere ye", correct: true },
    ]
  },
  {
    id: 309,
    questionText: "N’ayahe matara umuyobozi w’ikinyabiziga agomba gukoresha mugihe cy’ibihu? img199",
    choices: [
      { label: "A", text: "Amatara kamena bihu y’imbere n’ay’inyuma hamwe n’amatara magufi", correct: true },
      { label: "B", text: "Amatara kamenabihu y’imbere n’ay’inyuma" },
      { label: "C", text: "Amatara magufi" },
      { label: "D", text: "Urumuri rusanzwe" },
    ]
  },
  {
    id: 310,
    questionText: "Muri ibi binyabiziga n’ikihe gihagaze nabi? img200",
    choices: [
      { label: "A", text: "Ibinyabiziga byombi b. Ikinyabiziga cy’icyatsi c. Ikinyabiziga cy’umutuku d. Nta n’imwe", correct: true },
    ]
  },
  {
    id: 311,
    questionText: "Ni gute umuyobozi w’ikinyabiziga yanyura kumunyegare hano? img201",
    choices: [
      { label: "A", text: "Aha umuyobozi w’ikinyabiziga ntashobora kumunyuraho" },
      { label: "B", text: "Atarenze umurongo wera ucagaguye" },
      { label: "C", text: "Arenze umurongo wera ucagaguye", correct: true },
      { label: "D", text: "Nta kurenga iyi mirongo yombi" },
    ]
  },
  {
    id: 312,
    questionText: "N’iki umuyobozi w’ikinyabiziga yakora aramutse ahumishijwe n’urumuri rw’amatara yikinyabiziga giturutse mu kindi cyerekezo? img202",
    choices: [
      { label: "A", text: "humisha ikinyabiziga giturutse mu kindi cyerekezo ucana amatara maremare." },
      { label: "B", text: "Egera kunkombe y’iburyo bw’umuhanda nibinashobioka ugabanye umuvuduko.", correct: true },
      { label: "C", text: "Canira amatara ikinyabiziga kiva mukindi cyerekezo" },
      { label: "D", text: "Ongera umuvuduko kugira ngo usohoke mururwo rumuri vuba bishoboka" },
    ]
  },
  {
    id: 313,
    questionText: "Niki ugomba gukora igihe wegereye ikimenyetso kimurika kiva mucyatsi kijya mumuhondo? img205",
    choices: [
      { label: "A", text: "Ongera umuvuduko kugirango usoze ikoni" },
      { label: "B", text: "Komeza kuko itara ry’icyatsi rigiye kwaka. (c )Hagarara niba utateza ibyago" },
      { label: "D", text: "Komeza ubwitonzi witegura guhagarara mugihe itara rihindutse umutuku" },
    ]
  },
  {
    id: 314,
    questionText: "Niki umuyobozi w’ ikinyabiziga akwiriye kumenya mugihe akurikiye umuyobozi wikinyamitende ibiri kandi imodoka y’ umweru iri gusubira inyuma ijya mumuhanda? img206 a. Umuyobozi wikinyabiziga gisubira inyuma azahagarara nabona umuyobozi w’ ikinyabimitende ibiri b. Umuyobozi w’ ikinyamitende ibiri ashobora gusaba umuyobozi w’ ikinyabiziga gisubira inyuma guhagarara c. Amatara yoguhagarara ashobora kuzima ikinyabiziga gikomeza gusubira inyuma",
    choices: [
      { label: "D", text: "Umuyobozi w’ ikinyamitende ashobora guhagarara bitunguranye", correct: true },
    ]
  },
  {
    id: 315,
    questionText: "Aha niki umuyobozi w’ ikinyabiziga yakora mugihe ashaka kujya iburyo? img207 a. Gukomeza hagati y’ abanyamaguru babiri b. kuvuza ihoni akongera umuvuduko (c )Guhagarara akareka abanyamaguru bakambuka",
    choices: [
      { label: "D", text: "Reka umunyamaguru umwe atambuke ubone umwanya wogutambuka" },
    ]
  },
  {
    id: 316,
    questionText: "Aha umuyobozi w’ ikinyabiziga ashobora kunyura kuri aba abanyamagare? img210",
    choices: [
      { label: "A", text: "Oya, umuyobozi ntashobora kureba imbere neza", correct: true },
      { label: "B", text: "Yego, kuko umurongo wera ucagaguye udashobora kuba udacagaguye." },
      { label: "C", text: "Yego, abanyamagare bazumva imodoka bave munzira" },
      { label: "D", text: "Yego, kuko buri kinyabiziga kiva mukindi cyerekezo gishobora kuguha inzira" },
    ]
  },
  {
    id: 317,
    questionText: "Aha niki umuyobozi w’ ikinyabiziga yakora? img211",
    choices: [
      { label: "A", text: "Kwemerera abanyamaguru kwambuka umuhanda", correct: true },
      { label: "B", text: "Kuvuza ihoni agakomeza" },
      { label: "C", text: "Tengereza munzira y’ abanyamaguru kugeza imidoka izimye" },
      { label: "D", text: "Kongera umuvuduko mbere yuko abanyamaguru bambuka" },
    ]
  },
  {
    id: 318,
    questionText: "Muri ibi binyabiziga bine ni ikihe kiri mu buryo bwiza bwo gukata ikoni ry’iburyo kiva mu muhanda munini kijya mu muto? img212",
    choices: [
      { label: "A", text: "Ikinyabiziga cya mbere kiri mu buryo bwiza bwo gukata ikoni ry’iburyo", correct: true },
      { label: "B", text: "Ikinyabiziga cya kabiri kiri mu buryo bwiza bwo gukata ikoni ry’iburyo" },
      { label: "C", text: "Ikinyabiziga cya gatatu kiri mu buryo bwiza bwo gukata ikoni ry’iburyo" },
      { label: "D", text: "Ikinyabiziga cya kane kiri mu buryo bwiza bwo gukata ikoni ry’iburyo" },
    ]
  },
  {
    id: 319,
    questionText: "Niki umuyobozi w’ikinyabiziga yakora mu gihe abonye icyapa kiburira cya mpande eshatu gitukura mu muhanda?",
    choices: [
      { label: "A", text: "Hagarara utegereze amabwiriza" },
      { label: "B", text: "Umuyobozi w’ikinyabiziga agomba kugabanya umuvuduko ateganya icyago imbere ye", correct: true },
      { label: "C", text: "Kukireka, ukagumana umuvuduko ufite ugakomeza" },
      { label: "D", text: "Hagarara kuri icyo cyapa cya mpande eshatu mbere yo gukomeza" },
    ]
  },
  {
    id: 320,
    questionText: "Niki umuyobozi w’ikinyabiziga agomba gukora ahuye n’amatungo mu muhanda? a. Kuvuza ihoni kugirango zihunge",
    choices: [
      { label: "B", text: "Umuyobozi w’ikinyabiziga agomba kugabanya umuvuduko zigatambuka c. Kwatsa amatara maremare kugirango utambuke wihuta mu buryo bushoboka bwose d. Kuvuza ihoni ukanyuraho witonze", correct: true },
    ]
  },
  {
    id: 321,
    questionText: "Niki umuyobozi w’ikinyabiziga yakora abonye otobisi iri kuva aho zagenewe guhagararwamo? a. Gukomeza iruhande kuko ufite uburenganzira bwo gukomeza",
    choices: [
      { label: "B", text: "Gabanya umuvuduko maze ureke ikomeze c. Gerageza unyureho kugirango atagutinza d. Menyesha umuyobozi wa otobisi aguhe inzira", correct: true },
    ]
  },
  {
    id: 322,
    questionText: "Niki umuyobozi w’ikinyabiziga yakora mugihe ahuye n’ikinyabiziga cyakije itara ry’umuhondo rimyatsa? a. Mu gihe ikinyabiziga giturutse mu kindi cyerekezo kitagishoboye kugenda b. Mu gihe ikinyabiziga ndakumirwa giturutse mu kindi cyerekezo c. Mu gihe ikinyabiziga giturutse mu cyindi cyerekezo cy’ihuta",
    choices: [
      { label: "D", text: "Kugabanya umuvuduko witegura guhagarara", correct: true },
    ]
  },
  {
    id: 323,
    questionText: "Umuyobozi w’ikinyabiziga yakara iki mu gihe anyuzweho nikindi kinyabiziga?",
    choices: [
      { label: "A", text: "Gukomezanya umuvuduko warufite b. Kujya i buryo c. Kujya I bumoso d. Kwongera umuvuduko", correct: true },
    ]
  },
  {
    id: 324,
    questionText: "Umurongo w’umweru urombereje uciye hagati mu muhanda uvuze iki? img215",
    choices: [
      { label: "A", text: "Umuyobozi wese abujijwe kuwurenga", correct: true },
      { label: "B", text: "Abanyamitende wemerewe kunyuranaho" },
      { label: "C", text: "Kuhahagara biremewe" },
      { label: "D", text: "Guhindukira ku manywa" },
    ]
  },
  {
    id: 325,
    questionText: "Umuyobozi w’ikinyabiziga ugeze mu isangano ry’umuhanda ugenzurwa ni ibimenyetso by’amatara yaka agasanga ataka (adakora), yakora iki?",
    choices: [
      { label: "A", text: "Guca mu isangano n’ubwitonzi nkaho ntakimenyetso kikuyobora kirimo, witondera abandi bayobozi b’ibinyabiziga", correct: true },
      { label: "B", text: "Gutwara neza ntagutinda mw’isangano" },
      { label: "C", text: "Guhagarara mw’isangano no guha inzira abayobozi b’ibinyabiziga baturuka iburyo bwawe" },
      { label: "D", text: "Gucana amatara yose ndanga cyerekezo ugakomeza" },
    ]
  },
  {
    id: 326,
    questionText: "Ni iki umuyobozi w’ikinyabiziga yakora ahuye n’ishyo ry’amatungo munzira nyabagendwa?",
    choices: [
      { label: "A", text: "Kuvuza ihoni kugirango ayo matungo atambuke" },
      { label: "B", text: "Umuyobozi w’ikinyabiziga agomba kugabanya umuvuduko no gutambukana ubwitonzi", correct: true },
      { label: "C", text: "Kwatsa amatara maremare n’amagufi no gutambuka vuba bishoboka" },
      { label: "D", text: "Kuvuza ihoni no gutambukana ubwitonzi" },
    ]
  },
  {
    id: 327,
    questionText: "Umuyobozi w’ikinyabiziga yakora iki igihe ageze ku kazamuko gashinze cyane?",
    choices: [
      { label: "A", text: "Umuyobozi w’ikinyabiziga agomba kugabanya umuvuduko akaguma kuruhande rw’iburyo yirinda ibyago", correct: true },
      { label: "B", text: "Gukandagira ikirenge cya amburiyage no kuvuza ihoni ryo kumunyesha" },
      { label: "C", text: "Kugumana umuvuduko n’ikirekezo wari ufite mu muhanda" },
      { label: "D", text: "Guhagarara ku mpera zuwo musozi" },
    ]
  },
  {
    id: 328,
    questionText: "Umuyobozi w’ikinyabiziga yakora iki ahuye n’ikinyabiziga giturutse mukindi kerekezo, gicanye amatara yumuhondo aburira?",
    choices: [
      { label: "A", text: "Umuyobozi w’ikinyabiziga agomba kugabanya umuvuduko no gutambukana ubwitonzi", correct: true },
      { label: "B", text: "Ikinyabiziga cy’ubutabazi" },
      { label: "C", text: "Yagize ibyago" },
      { label: "D", text: "Umuvudoko urenze" },
    ]
  },
  {
    id: 329,
    questionText: "Niki umuyobozi w’ikinyabiziga yakora ageze hafi y’inzira ifunganye igihe ahuye n’ikindi kinyabiziga giturutse mukindi cyerekezo?",
    choices: [
      { label: "A", text: "Agomba kuguma mumwanya yarimo agategereza gutambuka kwikindi kinyabiziga" },
      { label: "B", text: "kugabanya umuvuduko no gusiga umwanya uhagije hagati y’ibinyabiziga byombi", correct: true },
      { label: "B", text: "gutegereza ko undi muyobozi w’ikinyabiziga ava mu muhanda" },
      { label: "C", text: "gutwarira ikinyabiziga mu muhanda hagati kugirango abandi bayobozi bahagararare" },
    ]
  },
  {
    id: 330,
    questionText: "Umuyobozi w’ ikinyabiziga agendera inyuma y’ikindi kinyabizaga akaba adateganya kukinyuraho yakora iki?",
    choices: [
      { label: "A", text: "kuguma yicyo kinyabiziga hagati mu muhanda" },
      { label: "B", text: "kuguma inyuma yacyo kugirango yemerere ibindi binyabiziga gutambuka", correct: true },
      { label: "B", text: "gutwarira inyuma ye umwegereye cyane kugirango ureke ibindi binyabiziga bibanyureho" },
      { label: "C", text: "gutanga ibimenyetso kubindi binyabiziga ko byabanyuraho" },
    ]
  },
  {
    id: 331,
    questionText: "Niryari amatara ndanga cyerekezo agomba kugaragazwa kubandi bakoresha umuhanda?",
    choices: [
      { label: "A", text: "igihe gusa ari ngombwa amenyesha ibindi binyabiziga bimukurikiye" },
      { label: "B", text: "igihe gusa aringombwa kuburira abandi bayobozi bava mukindi cyerekezo" },
      { label: "C", text: "mugihe gikwiye ushaka kumenyesha abandi bakoresha umuhanda icyo ugiye gukora", correct: true },
      { label: "C", text: "keretse ahari ibimenyetso byo mu muhanda byerekana icyerekezo cyawe" },
    ]
  },
  {
    id: 332,
    questionText: "Gutinda gutanga ibimenyetso ku muyobozi w’ikinyabiziga ni gute bibangamira abandi bakoresha umuhanda?",
    choices: [
      { label: "A", text: "bigira ingaruka gusa kubaturuka mukindi cyerekezo" },
      { label: "B", text: "bishobora gutuma batabona igihe gihagije cyo gushyira mubikorwa icyo amenyeshejwe", correct: true },
      { label: "B", text: "baba bafite igihe gihagije cyo gushyira mu bikorwa ibyo bamyeshejwe" },
      { label: "C", text: "ntacy bibabangamiraho" },
    ]
  },
  {
    id: 333,
    questionText: "Ni ubuhe buryo bwiza bwakurikizwa igihe hari umuntu wakomerekeye mu mpanuka yo mu muhanda?",
    choices: [
      { label: "A", text: "Ku mushyira kunkengero y’umuhanda" },
      { label: "B", text: "Kutamukuramo keretse mugihe hari ibyago byaterwa n’inkogi y’umuriro cyangwa akaba ashobora kugongwa n’ikindi kinyabiziga no guhamagara ababishinzwe", correct: true },
      { label: "B", text: "Gusaba uwakomeretse kunyeganyeza ibice by’umubiri kugirano umenye aho ibikomere bye bigarukira" },
      { label: "C", text: "Guhumuriza uwakometse ukamuha ikinyobwo gikonje" },
    ]
  },
  {
    id: 334,
    questionText: "Niki umuyobozi w’ikinyabiziga yakora igihe agize uruhare mu mpanuka yo mu muhanda , aho ntawakometese ariko ibinyabiziga bikaba byateza icyago cyangwa byafunze umuhanda?",
    choices: [
      { label: "A", text: "Gushushanya aho zagonganiye no kuzishyira kuruhande", correct: true },
      { label: "A", text: "Gukuramo abagenze ugashyiraho icyapa cya mpandeshatu girukura kumodoka" },
      { label: "B", text: "Gutegereza ko abapolisi bahagera mbere yo gukura ibinyabiziga mu muhanda" },
      { label: "C", text: "Guhagarika ibindi binyabiziga kugeza ikibazo gikemutse mukabona kubikura mu muhanda" },
    ]
  },
  {
    id: 335,
    questionText: "Igihe umuyobozi w’ikinyabiziga agendera munzira y’icyerekezo kimwe akifuza gukata ibumoso yakora iki?",
    choices: [
      { label: "A", text: "gutwara yegera umurongo wo hagati mu muhanda yerekeza ibumoso" },
      { label: "B", text: "gutwara yegera uruhande rw’iburyo bw’umuhanda" },
      { label: "C", text: "gutwara yegera ku uruhande rw’ibumoso bw’umuhanda", correct: true },
      { label: "C", text: "Gutwarira hafi y’umurongo ugabanya umuhanda mo kabili" },
    ]
  },
  {
    id: 336,
    questionText: "Umuyobozi w’ikinyabizaga uri kugendera mu muhanda w’ibyerekezo bibiri nuruhe ruhande rw’umuhanda agomba gukoresha?",
    choices: [
      { label: "A", text: "uruhande rw’ibumoso bw’umuhanda uretse igihe atawaye imashini zihinga cyangwa zikoreshwa indi mirimo" },
      { label: "B", text: "Mu gice cy;umuhanda yumva ashaka" },
      { label: "C", text: "Mu gice cy’iburyo bw’umuhanda uretse igihe ashaka kunyuranaho cyangwa gukata ibumoso", correct: true },
      { label: "C", text: "Ku ruhande rw’ibumoso bw’umuhanda" },
    ]
  },
  {
    id: 337,
    questionText: "Igihe umuyobozi w’ikinyabiziga atwaye mu muhanda urombereje w’ibice byinshi agomba kugendera mu kihe gice cy’umuhanda?",
    choices: [
      { label: "A", text: "Kugendera mugice icyo aricyo cyose kirimo ibinyabiziga bike" },
      { label: "B", text: "Kugendera kugice cy’ibumoso keretse ushaka gusohokera iburyo" },
      { label: "C", text: "Kugendera mu gice cy’iburyo bw’umuhanda keretse ushaka kunyuranaho", correct: true },
      { label: "C", text: "Ntagutwarira mu ruhande rw’iburyo bw’umuhanda kuko hagenewe imodoka ziremereye n’imodoka nini zitwara abantu." },
    ]
  },
  {
    id: 338,
    questionText: "Umuyobozi w’ikinyabiziga yakora iki igihe ageze aho banyura bazenguruka?",
    choices: [
      { label: "A", text: "Tanga inzira ku binyabiziga byamaze kwinjira aho banyura bazunguruka", correct: true },
      { label: "A", text: "Tanga inzira kubinyabiziga biremereye gusa" },
      { label: "B", text: "Tanga inzira gusa niba uri munzira ya kabiri niya gatatu isohoka" },
      { label: "C", text: "Komeza kuko abandi bayobozi b’ibinyabiziga bagomba kuguha inzira yo gukomeza" },
    ]
  },
  {
    id: 339,
    questionText: "Ni kihe cyerekezo umuyobozi w’ikinyabiziga yinjiriramo iyo ageze aho banyura bazenguruka?",
    choices: [
      { label: "A", text: "ibumoso" },
      { label: "B", text: "ibumoso gusa igihe ayobowe ni kimenyetso kimurika" },
      { label: "C", text: "iburyo cyangwa ibumoso" },
      { label: "D", text: "iburyo", correct: true },
    ]
  },
  {
    id: 340,
    questionText: "Mbere yuko umuyobozi w’ikinyabiziga akata ibumoso mu nzira nyabagendwa, nihe ikinyabiziga kigomba kuba kiri? img224",
    choices: [
      { label: "A", text: "Mu ruhande rw’iburyo bw’inzira nyabagendwa" },
      { label: "B", text: "Gusa iburyo bwo hagati y’inzira nyabagendwa", correct: true },
      { label: "B", text: "Muruhande urwarirwo rwo hagati mu nzira nyabagendwa" },
      { label: "C", text: "Mu ruhande rw’ibumoso bw’inzira nyabagendwa" },
    ]
  },
  {
    id: 341,
    questionText: "Umuyobozi w’ikinyabiziga yakwitondera iki mbere yuko y’injira munzira banyuramo bazengurutse?",
    choices: [
      { label: "A", text: "ibinyabiziga bimuturuka inyuma umuvuduko bifite n’uburyo bimwegereye" },
      { label: "B", text: "(b) ibinyabiziga biturutse ibumoso bwe n’umuvuduko bifite n’intera iri hagati ye nabyo" },
      { label: "C", text: "ibinyabiziga biturutse iburyo n’umuvuduko bifite ni intera iri hagati ye nabyo" },
      { label: "D", text: "ibinyabiziga bimututse imbere , umuvuduko bifite n’intera iri hagati ye nabyo" },
    ]
  },
  {
    id: 342,
    questionText: "Umuyobozi w’ikinyabiziga ugendera inyuma y’ikinyabaziga gitwara abagenzi gihagaze gikuramo cyangwa gishyiramo abagenzi agomba :",
    choices: [
      { label: "A", text: "kunyuranaho ibumoso", correct: true },
      { label: "A", text: "gutegereza yihanganye" },
      { label: "B", text: "a na b ni ibisubizo by’ukuri" },
      { label: "C", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 343,
    questionText: "Igihe ubonye icyapa kigaragaza ishuli wakora iki?",
    choices: [
      { label: "A", text: "kugabanya umuvuduko no gukomeza witonze", correct: true },
      { label: "A", text: "gukomeza n’umuvuduko uri hejuru kuko umunyeshuli agomba gutegereza" },
      { label: "B", text: "kuvuza ihoni" },
      { label: "C", text: "ibisubizo byose ni ukuri" },
    ]
  },
  {
    id: 344,
    questionText: "Umubare w’abagenzi bemewe gutwarwa mukinyabiziga wanditswe mu :",
    choices: [
      { label: "A", text: "icyemezo cy’iyandikwa ry’ikinyabiziga" },
      { label: "B", text: "inyemezabwishyu y’umusoro" },
      { label: "C", text: "ubwishingizi", correct: true },
      { label: "C", text: "ibisubizo byose ni ukuri" },
    ]
  },
  {
    id: 345,
    questionText: "Gutwara ikinyabiziga wasinze:",
    choices: [
      { label: "A", text: "biremewe kubinyabiziga byabikorera kugiti cyabo" },
      { label: "B", text: "biremewe nijoro" },
      { label: "C", text: "birabujijwe ku binyabiziga byose bifite moteri", correct: true },
      { label: "C", text: "ibisubizo byose nibyo" },
    ]
  },
  {
    id: 346,
    questionText: "Umuyobozi w’ikinyabizaga ashobora kunyuranaho:",
    choices: [
      { label: "A", text: "ahamanuka" },
      { label: "B", text: "igihe umuhanda ari mugari" },
      { label: "C", text: "igihe umuyobozi w’ikinyabiziga kiri imbere ye amweretse ikimenyetso kimwemerera kunyuranaho", correct: true },
      { label: "C", text: "nta gisubizo cy’ukuri" },
    ]
  },
  {
    id: 347,
    questionText: "Ugeze ahari inzira yabanyamaguru barindiriye kwambuka. Ntibatangiye kwambuka , wakora iki?",
    choices: [
      { label: "A", text: "kuvuza ihoni" },
      { label: "B", text: "kwihangana ugatagereza", correct: true },
      { label: "B", text: "gukomeza" },
      { label: "C", text: "nta gisubizo cy’ukuri" },
    ]
  },
  {
    id: 348,
    questionText: "Igihe utwaye umuntu mu kinyabiziga cyawe, akibagirwa kwambara umukandara wo kwirinda ibyago ugomba:",
    choices: [
      { label: "A", text: "gukuramo umukandara wo kwirinda ibyago wambaye mukawambara mwembi" },
      { label: "B", text: "kubyerengagiza wizeyeko nta mpanuka muri bukore" },
      { label: "C", text: "funga cyane umukandara wo kwirinda ibyago wawe" },
      { label: "D", text: "Kubibutsa kwambara umukandara wo kwirinda ibyago", correct: true },
    ]
  },
  {
    id: 349,
    questionText: "Igihe za otobisi zigenewe gutwara banyeshuli zihagaze kugirango zibafate cyangwa bavemo ugomba :",
    choices: [
      { label: "A", text: "kuvuza ihoni ugakomeza" },
      { label: "B", text: "(b) gukomeza ugabanyije umuvuduko n’ubwitonzi kuko bishoboka ko abanyeshuli bakwambuka bitunguranye" },
      { label: "C", text: "nta bwitonzi budasnzwe bukenewe" },
      { label: "D", text: "ibisubizo byose ni ukuri" },
    ]
  },
  {
    id: 350,
    questionText: "Igihe imodoka iparitse ku nkengero z’umuhanda mugihe cy’ ijoro :",
    choices: [
      { label: "A", text: "Imodoka igomba kuba ifunze" },
      { label: "B", text: "Umuntu ufite uruhushya rwo gutwara ikinyabiziga agomba kuba yicaye mu mwanya w’umuyobozi" },
      { label: "C", text: "Amatara yo guhagarara umwanya munini aguma yaka", correct: true },
      { label: "C", text: "Ibisubizo byose ni ukuri" },
    ]
  },
  {
    id: 351,
    questionText: "Mu gihe hari undi muyobozi w’ikinyabiziga ugukurikiye watangiye kukunyuraho :",
    choices: [
      { label: "A", text: "Ntugomba kugira undi muyobozi w’ikinyabiziga unyuraho", correct: true },
      { label: "A", text: "Ugomba kunyura ku kindi kinyabiziga" },
      { label: "B", text: "Ugomba kunyura kukindi kinyabiziga uvugije ihoni" },
      { label: "C", text: "Nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 352,
    questionText: "Utwaye ikinyabiziga mu muhanda ufite ibyerekezo bibiri. Ikinyabiziga imbere yawe cyiragenda buhoro, imbere yawe umuhanda ntakibazo kunyuranaho, ugomba :",
    choices: [
      { label: "A", text: "kucyinyuraho bikorewe ibumoso", correct: true },
      { label: "A", text: "kucyinyuraho bikorewe iburyo" },
      { label: "B", text: "kucyinyuraho ukoresheje uruhande urwo arirwo rwose" },
      { label: "C", text: "ibisubizo byose ni ukuri" },
    ]
  },
  {
    id: 353,
    questionText: "Ibice by’umuhanda byera bigari biteganye n’umurongo ugabanya umuhanda mo ,kabiri bisobanura:",
    choices: [
      { label: "A", text: "guhagara kw’ikinyabiziga" },
      { label: "B", text: "aho abanyamaguru bambukira", correct: true },
      { label: "B", text: "guha ubushobozi binyabiziga" },
      { label: "C", text: "ibisubizo byose ni ukuri" },
    ]
  },
  {
    id: 354,
    questionText: "Uturebanyuma dukoreshwa:",
    choices: [
      { label: "A", text: "kwireba" },
      { label: "B", text: "(b) kugenzura ibigendera mu muhanda inyuma" },
      { label: "C", text: "kureba abicaye inyuma" },
      { label: "D", text: "ntagisubizo cy’ukuri" },
    ]
  },
  {
    id: 355,
    questionText: "Kuki abanyamaguru batemerewe kwambuka umuhanda mw’ikoni cyangwa hafi y’imodoka ihagaze?",
    choices: [
      { label: "A", text: "ingaruka kubindi binyabiziga" },
      { label: "B", text: "ingaruka kubandi bakoresha umuhanda" },
      { label: "C", text: "(c) Abandi bayobozi bi binyabiziga baza bashobora kutabona abambuka umuhanda" },
      { label: "D", text: "Ibisubizo byose ni ukuri" },
    ]
  },
  {
    id: 356,
    questionText: "Kunyuranaho mw’ikoni :",
    choices: [
      { label: "A", text: "biremewe" },
      { label: "B", text: "ntibyemewe", correct: true },
      { label: "B", text: "biremewe ukoranye ubwitonzi" },
      { label: "C", text: "ibisubizo byose ni ukuri" },
    ]
  },
  {
    id: 357,
    questionText: "Umuyobozi w’ikinyabiziga igihe atwaye ikinyabiziga akagira umunaniro utuma yasinzira yakora iki?",
    choices: [
      { label: "A", text: "Gufungura ikirahure cy’ikinyabiziga cyangwa gushyira ubukonje mu modoka kugirango umwuka mwiza winjire mu kinyabiziga" },
      { label: "B", text: "Guhagarara akaruhuka harimo no kugendagenda niba bishoboka", correct: true },
      { label: "B", text: "Kunanura amaboko no gufunga amaso mugihe gito" },
      { label: "C", text: "Kongera ubushyuhe mu kinyabiziga" },
    ]
  },
  {
    id: 358,
    questionText: "Niki umuyobozi w’ikinyabiziga yakora igihe atwaye ikinyabiziga mugihe cy’ibihu,imvura nyinshi, umwuzure cyangwa umukungugu mwinshi?",
    choices: [
      { label: "A", text: "Kugendera mu tuyira turi kumpande zu muhanda, ucunga ibimenyetso bigarura urumuri" },
      { label: "B", text: "Kugabanya umuvuduko hanyuma ugakoresha amatara magufi", correct: true },
      { label: "B", text: "Gucana amatara maremare hanyuma ukagenda gahoro" },
      { label: "C", text: "Kugendera mu murongo ugabanya umuhanda mo kabiri unareba ibimenyestso by’umuhanda bigarura urumuri" },
    ]
  },
  {
    id: 359,
    questionText: "Muri ibi byapa ni ubuhe bwoko bw’ibyapa bitegeka byo mu muhanda?",
    choices: [
      { label: "A", text: "ibiri mw’ishusho y’urukiramende n’umuzenguruko w’umuhondo" },
      { label: "B", text: "ibiri mw’ishusho ya mpande eshatu mu n’uzenguruko mw’ibara ry’ubururu" },
      { label: "C", text: "ibiri mw’ishusho y’uruziga n’umuzenguruko mw’ibara ry’umutuku", correct: true },
      { label: "D", text: "ibiri mw’ishusho ya mpande enye zingana mubuso bw’umukara" },
    ]
  },
  {
    id: 360,
    questionText: "Ugeze mu masangano y’umuhanda aho usanga ibimenyetso bimurika bidakora, wakora iki igihe umukozi ubifiye ububasha aguhaye iki kimenyesto? img233",
    choices: [
      { label: "A", text: "gukata ibumoso gusa" },
      { label: "B", text: "gukata iburyo gusa ugakomeza imbere" },
      { label: "C", text: "Guhagarara kumurongo wo guhagarara umwanya moto", correct: true },
      { label: "D", text: "komeza imbere gusa" },
    ]
  },
  {
    id: 361,
    questionText: "Amatara ndangacyerekezo agomba kugaragara nijoro igihe ijuru rikeye mu ntera nibura ya: a. m 100 b. m 200",
    choices: [
      { label: "C", text: "m150 d. m250", correct: true },
    ]
  },
  {
    id: 362,
    questionText: "Umurongo ucagaguye uvuga ko buri muyobozi abujijwe kuwurenga uretse mu gihe: a. Agomba kunyura ku kindi kinyabiziga b. Gukatira ibumoso c. Guhindukira cyangwa kujya mukindi gice cy’umuhanda",
    choices: [
      { label: "D", text: "Ibi bisubizo byose nibyo", correct: true },
    ]
  },
  {
    id: 363,
    questionText: "Igice cy’inzira nyabagendwa kigarukira kumirongo ibiri yera icagaguye ibangikanye kandi gifite ubugari budahagije kugirango imodoka zitambuke neza kiba ari: a. Inzira y’abanyamaguru",
    choices: [
      { label: "B", text: "Agahanda k’amagare c. a na b byose ni ukuri d. Nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 364,
    questionText: "Icyapa kimenyesha kugendera mu muhanda ubisikanirwamo gifite: a. Ishusho y’uruziga mw’ibara ritukura, ubuso bwera n’ikirango cy’umukara",
    choices: [
      { label: "B", text: "Ishusho ya mpandeshatu mw’ibara ritukura, ubuso bwera n’ikirango cy’umukara c. Ishusho ya mpandeshatu mw’ibara ritukura, ubuso bw’ubururu n’ikirango cy’umukara d. Ishusho y’uruziga mw’ibara ritukura, ubuso bw’ubururu n’ikirango cy’umukara", correct: true },
    ]
  },
  {
    id: 365,
    questionText: "Ikinyabiziga kigendeshwa na moteri n’ikinyabiziga gikururwa n’inyamaswa ntibishobora gukurura : a. Ibinyabiziga birenze kimwe b. Ibinyabiziga bipakiye birenze bibiri",
    choices: [
      { label: "C", text: "Ibinyabiziga birenze bibiri d. b na c ni byo", correct: true },
    ]
  },
  {
    id: 366,
    questionText: "Iki cyapa kivuga: img105 a. Aho imihanda ihurira b. inkomane y’aho umuhanda umwe urasukira iburyo c. a na b ni ibisubizo by’ukuri",
    choices: [
      { label: "D", text: "nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 367,
    questionText: "Iki cyapa gisobanura ibi bikurikira: img238 a.birabujijwe kunyura ku kindi kinyabiziga",
    choices: [
      { label: "B", text: "gutambuka mbere kw’ibinyabiziga bituruka aho ujya c. A na b ni ibisubizo by’ukuri d. nta gisubizo cyukuri kirimo", correct: true },
    ]
  },
  {
    id: 368,
    questionText: "Utugarurarumuri turi ku ruhande rw’imbere rw’ikinyabiziga tugomba gusa: a. N’umuhondo b. N’umutuku",
    choices: [
      { label: "C", text: "n’umweru d. Nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 370,
    questionText: "Iki cyapa kivuga: img240 a. Iherezo ryo gutambuka mbere b. Gutambuka mbere kw’ibinyabiziga biturutse imbere aho ujya",
    choices: [
      { label: "C", text: "gutambuka mbere y’ibinyabiziga biturutse imbere d. Nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 370,
    questionText: "Iki cyapa kigizwe: img242 a. ishusho mpandeshatu ,ubuso ubururu b. Ishusho mpandeshatu,ubuso umukara",
    choices: [
      { label: "C", text: "ishusho mpandeshatu,ubuso umweru d. Nta gisubizo cy’ukuri", correct: true },
    ]
  },
  {
    id: 371,
    questionText: "Iki cyapa kivuga: img246 a. ifungana ry’umuhanda iburyo",
    choices: [
      { label: "B", text: "ifungana ry’umuhanda w’akayira gasatira umuhanda ibumoso c. Akayira gato d. Nta gisubizo cy’ukuri", correct: true },
    ]
  },
  {
    id: 372,
    questionText: "Umuyobozi ubonye ko hari undi umukurikiye ashaka kumunyuraho agomba kubahiriza ibi bikurikira :",
    choices: [
      { label: "A", text: "kwegera i ruhande rw’iburyo bw’umuhanda b. Kongera umuvuduko c. Guhagarara d. a na c ni byo bisubizo by’ukuri", correct: true },
    ]
  },
  {
    id: 373,
    questionText: "Iki cyapa cyerekana : img248 a. ifungana ry’umuhanda b. ifungana ry’umuhanda n’akayira gasatira umuhanda i bumoso c. umuhanda utaringaniye",
    choices: [
      { label: "D", text: "nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 374,
    questionText: "Icyi cyapa gisobanura : img250",
    choices: [
      { label: "A", text: "ntihanyurwa mu byerekezo byombi b. ntihanyurwa n’abandi uretse abahatuye c. hanyurwa mu cyerekezo kimwe gusa d. nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 375,
    questionText: "Icyi cyapa cyerekana : img254 a. Ifungana ry’umuhanda b. umuhanda unyerera c. umuhanda utaringaniye",
    choices: [
      { label: "D", text: "nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 376,
    questionText: "Iki cyapa kivuga: img256",
    choices: [
      { label: "A", text: "ikoni iburyo b. akazamuko gashinze cyane c. akamanuko gashobora gutera ibyago d. b na c byose ni ukuri", correct: true },
    ]
  },
  {
    id: 377,
    questionText: "Iyo umuhanda ugabanijemo ibisate bibiri kandi ugendwamo mu byerekezo byombi umuyobozi abujijwe :",
    choices: [
      { label: "A", text: "kugendera mu gisate cy’iburyo" },
      { label: "B", text: "kunyuranaho" },
      { label: "C", text: "kugendera mu gisate cy’ibumoso", correct: true },
      { label: "D", text: "ibisubizo byose ni byo" },
    ]
  },
  {
    id: 378,
    questionText: "Icyapa kimenyesha kugendera mu muhanda ubisikanirwamo gifite:",
    choices: [
      { label: "A", text: "Ishusho y’uruziga mw’ibara ritukura, ubuso bwera n’ikirango cy’umukara" },
      { label: "B", text: "Ishusho ya mpandeshatu mw’ibara ritukura, ubuso bwera n’ikirango cy’umukara", correct: true },
      { label: "C", text: "Ishusho ya mpandeshatu mw’ibara ritukura, ubuso bw’ubururu n’ikirango cy’umukara" },
      { label: "D", text: "Ishusho y’uruziga mw’ibara ritukura, ubuso bw’ubururu n’ikirango cy’umukara" },
    ]
  },
  {
    id: 379,
    questionText: "Icyapa cyerekana inzira y’amatungo itegetswe giteye:",
    choices: [
      { label: "A", text: "Uruziga mubuso bw’ubururu, ishusho y’inka mu ibara ry’umukara" },
      { label: "B", text: "Uruziga mu ibara ryera, ishusho y’inka mwibara ry’ubururu" },
      { label: "C", text: "Uruziga mu buso bw’ibara ry’ubururu, ishusho y’inka mu ibara ryera n’ikirango cy’umukara" },
      { label: "D", text: "mpande eshatu mu buso bw’ibara ry’umweru n’ishusho y’inka mu ibara ry’umukara", correct: true },
    ]
  },
  {
    id: 380,
    questionText: "Icyapa cyerekana ko bibujijwe kuvuza amahoni kirangwa na : a Ishusho y’uruziga, ubuso bw’ubururu, ikiranga cy’umukara b Ishusho y’uruziga, ubuso bw’ubururu, ikiranga cy’umweru",
    choices: [
      { label: "C", text: "Ishusho y’uruziga, ubuso bw’umweru, ikiranga cy’umukara", correct: true },
      { label: "D", text: "Ntagisubizi cy’ukuri kirimo" },
    ]
  },
  {
    id: 381,
    questionText: "Ibyapa biburira nibyo gutambuka mbere birangwa:",
    choices: [
      { label: "A", text: "ishusho mpandeshatu mw’ibara ritukura , ubuso bwera n’ ikiranga mu ibara ry’umukara", correct: true },
      { label: "B", text: "ishusho mpandeshatu mw’ibara ritukura,ubuso bw’ubururu n’ikiranga mu ibara ry’umukara" },
      { label: "C", text: "ishusho y’uruziga mw’ibara ritukura,ubuso bw’ubururu n’ikiranga mu ibara ry’umukara" },
      { label: "D", text: "ishusho y’uruziga mw’ibara ritukura,ubuso bwera n’ikiranga mu ibara ry’umukara" },
    ]
  },
  {
    id: 382,
    questionText: "Ibyapa bibuza n’ibitegeka bikurikizwa gusa :",
    choices: [
      { label: "A", text: "Mumasangano" },
      { label: "B", text: "mu bimenyetso bimurika" },
      { label: "C", text: "a na b ni ibisubizo by’ukuri" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo", correct: true },
    ]
  },
  {
    id: 383,
    questionText: "Ibyapa biburira bibereyeho kumenyesha umugenzi :",
    choices: [
      { label: "A", text: "ko hari icyago", correct: true },
      { label: "B", text: "icyago kidasobanuye ukundi" },
      { label: "C", text: "imiterere y’icyago gitunguranye" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 384,
    questionText: "Ibyapa by’inyongera bishobora kumenyesha.",
    choices: [
      { label: "A", text: "ibitegetswe byihariye gusa" },
      { label: "B", text: "ubugerure cyangwa amarengamategeko rusange cyangwa ibibujijwe ndetse n’ibitegetswe byihariye", correct: true },
      { label: "C", text: "a na b ni ibisubizo by’ukuri" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 385,
    questionText: "Ishusho y’icyapa kivuga’’ugukikira”bitegetswe ni : a mpandeshatu",
    choices: [
      { label: "B", text: "uruziga", correct: true },
      { label: "C", text: "urukiramende" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 386,
    questionText: "Icyapa kivuga “icyerekezo gitegetswe”kigizwe n’ikirango cy’ibara : a umweru b umutuku",
    choices: [
      { label: "C", text: "ubururu n’ikirango cy’umweru d umukara", correct: true },
    ]
  },
  {
    id: 387,
    questionText: "Iki kimenyetso gitanzwe n’umukozi ubifitiye ububasha cyo guhagarara : img262",
    choices: [
      { label: "A", text: "ku bakoresha umuhanda ba muturutse imbere" },
      { label: "B", text: "ku bakoresha umuhanda bose bamuturutse imbere n’inyuma", correct: true },
      { label: "C", text: "kubakoresha umuhanda bose bamuturutse inyuma" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 388,
    questionText: "Ibi byapa byo mu muhanda birambuza kunyuranaho ibumoso? img263",
    choices: [
      { label: "A", text: "yego", correct: true },
      { label: "A", text: "yego, iyo ufite umuvuduo wa 90km/h" },
      { label: "B", text: "oya" },
      { label: "C", text: "ntagisubizo cy’ukuri" },
    ]
  },
  {
    id: 390,
    questionText: "Umuhanda urombereje w’ibice byinshi. Ndashaka kunyura kuri izi kamyo ibyiri mugihe gito ibumoso icyarimwe , biremewe? img266",
    choices: [
      { label: "A", text: "yego," },
      { label: "B", text: "oya", correct: true },
      { label: "C", text: "yego bikorewe ibumoso" },
      { label: "D", text: "ntagisubizo cy’ukuri" },
    ]
  },
  {
    id: 391,
    questionText: "K’umuyobozi w’ivatiri, iki cyapa kivuze iki? img267",
    choices: [
      { label: "A", text: "kirambuza gutwara ku muvuduko utarengeje 5km/h" },
      { label: "B", text: "ntaburenganzira kimpa, mugihe gikurikizwa ku binyabiziga bifite hejuru y atoni 5" },
      { label: "C", text: "ntacyo bindebaho mugihe bireba gusa zipima tone 5 no kurengaho.", correct: true },
      { label: "D", text: "Ntagisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 392,
    questionText: "Ndashaka gukata iburyo. Biremewe? img270",
    choices: [
      { label: "A", text: "yego" },
      { label: "B", text: "yego, ariko nyuma yo guhagarara" },
      { label: "C", text: "ntabwo byemewe", correct: true },
      { label: "D", text: "ntagisubizo cyukuri kirimo" },
    ]
  },
  {
    id: 393,
    questionText: "Umuhanda wambukiranya inzira ya gariyamoshi img271",
    choices: [
      { label: "A", text: "nshobora gukomeza nkambuka umuhanda kubera ko uruzitiro rufunguye" },
      { label: "B", text: "ngomba guhagarara munsi yitara ry’umutuku rimyatsa", correct: true },
      { label: "C", text: "ntabwo nakomeza urugendo rwanjye. Ngomba gihita mpagarara" },
      { label: "D", text: "ntagisubizo cy’ukuri" },
    ]
  },
  {
    id: 394,
    questionText: "Kuri iki cyapa cyo mu muhanda cyambere kintegeka? img272",
    choices: [
      { label: "A", text: "Kugendera k’umuvuduko uri hejuru ya 30km/h" },
      { label: "B", text: "kutarenza umuvuduko wa 30km/h" },
      { label: "C", text: "birabujijwe kugendera kumuvuduko uri hejuru ya 30km/h", correct: true },
      { label: "D", text: "nta gisubizo cyukuri" },
    ]
  },
  {
    id: 395,
    questionText: "Mpagaze mu murongo wo guhagarara umwanya muto img273",
    choices: [
      { label: "A", text: "Nshobora gukata iburyo" },
      { label: "A", text: "Nshobora gukata ibumoso", correct: true },
      { label: "C", text: "Nshobora gukata ibumoso cyangwa iburyo" },
      { label: "D", text: "Ntagisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 396,
    questionText: "Ngomba : img276",
    choices: [
      { label: "A", text: "guhagarara igihe gito kuri icyi cyapa cy’umuhanda" },
      { label: "B", text: "guhagarara ngatanga inzira kuri metero 100 ntaragera kuri icyi cyapa", correct: true },
      { label: "C", text: "gutanga inzira nkanahagarara iyo ari ngombwa muri m100 ntaragera kuri icyi cyapa" },
      { label: "D", text: "ntagisubizo cy’ukuri" },
    ]
  },
  {
    id: 397,
    questionText: "Ndashaka kugata ibumoso. Imodoka y’icyatsi yaje irahagarara. Ninde ufite uburenganzira bwo gutambuka mbere? img278",
    choices: [
      { label: "A", text: "mfite uburenganzira bwo gutambuka mbere" },
      { label: "B", text: "imodoka y’icyatsi ifite uburenganzira bwo gutambuka mbere", correct: true },
      { label: "C", text: "twembi ntaburenganzira bwo gutambuka mbere gusa tugomba gutambukana ubwitonzi" },
      { label: "D", text: "ntagisubizo nakimwe kirimo" },
    ]
  },
  {
    id: 398,
    questionText: "Mfite uburenganzira bwo gutambuka muri iri sangano? img280",
    choices: [
      { label: "A", text: "yego, niba ukata ibumoso" },
      { label: "B", text: "Oya niba ukata iburyo" },
      { label: "C", text: "yego , bitewe noho ngana", correct: true },
      { label: "D", text: "ntagisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 399,
    questionText: "Ndi kumuvuduko wa 20km/h. nshobora gukomeza muri iri sangano ry’umuhanda? img281",
    choices: [
      { label: "A", text: "oya", correct: true },
      { label: "B", text: "yago, nshobora gukata iburyo" },
      { label: "C", text: "yego, nshobora guta ibumoso cyangwa iburyo" },
      { label: "D", text: "yego, nshobora gukata ibumoso gusa" },
    ]
  },
  {
    id: 400,
    questionText: "Umuyobozi wikinyabiziga aritegura kunyuraho ibumoso : img284",
    choices: [
      { label: "A", text: "nshobora kumunyuraho nyuze iburyo" },
      { label: "B", text: "sinshobora kumunyura" },
      { label: "C", text: "nshobora kumunyura nciye ibumoso ariko mbonye ko mfite umwanya uhagije", correct: true },
      { label: "D", text: "Ntagisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 401,
    questionText: "Uhereye kuri ibi byapa habujijwe : img285",
    choices: [
      { label: "A", text: "Kunyuranaho kubinyabiziga bikururwa nibinyabiziga birengeje imitende ibiri ibumoso no kugendera kumuvuduko urengeje 70 km/h", correct: true },
      { label: "B", text: "Kunyuranaho kubinyabiziga bikururwa cyangwa ibinyabiziga birengeje imitende ibiri ibumoso" },
      { label: "C", text: "kugendera hejuru ya 70 km/h" },
      { label: "D", text: "ntagisubizo cy’ukuri" },
    ]
  },
  {
    id: 402,
    questionText: "Ndashaka gupariki ikinyabiga iburyo kunzira y’abanyamaguru img286",
    choices: [
      { label: "A", text: "biremewe munsi yicyi cyapa", correct: true },
      { label: "B", text: "biremewe imbere y’icyi cyapa" },
      { label: "C", text: "birabujijwe imbere n’inyuma yicyi cyapa" },
      { label: "D", text: "nta gisubizo cy’ukuri kirimo" },
    ]
  },
  {
    id: 403,
    questionText: "Iki cyapa gisobanura iki? img287",
    choices: [
      { label: "A", text: "Guhagarara, aho abanyeshuri bambukira" },
      { label: "B", text: "Hagarara akanya gato", correct: true },
      { label: "C", text: "Ibindi binyabiziga bigomba kuguha inzira" },
      { label: "D", text: "Gutanga umwanya ku bindi binyabiziga i buryo bwawe" },
    ]
  },
  {
    id: 404,
    questionText: "Iki cyapa gisobanura iki mu nkomane? img288",
    choices: [
      { label: "A", text: "Tanga inzira ku binyabiziga binini" },
      { label: "B", text: "Gabanya umuvuduko uhe inzira abanyamaguru." },
      { label: "C", text: "Tanga inzira ku binyabiziga bigenda mu muhanda munini wegera", correct: true },
      { label: "D", text: "Tanga inzira ku ibinyabiziga biturutse iburyo bwawe" },
    ]
  },
  {
    id: 405,
    questionText: "Iki cyapa gisobanura iki aho banyura bazengurutse? img292",
    choices: [
      { label: "A", text: "Tanga inzira ku binyabiziga biri mu muhanda munini" },
      { label: "B", text: "Tanga inzira ku binyabiziga biturutse i bumoso", correct: true },
      { label: "C", text: "Tanga inzira ku ma kamyo na za otobisi" },
      { label: "D", text: "Ibinyabiziga byose uretse amapikipiki bigomba gutanga inzira" },
    ]
  },
  {
    id: 406,
    questionText: "Iki cyapa gisobanura iki? img294",
    choices: [
      { label: "A", text: "Komeza imbere gusa", correct: true },
      { label: "B", text: "Aho kunyuranaho imbere" },
      { label: "C", text: "Aho guhagarara umwanya munini" },
      { label: "D", text: "Inzira y’ icyerekezo kimwe" },
    ]
  },
  {
    id: 407,
    questionText: "Iki cyapa gisobanura iki? img295",
    choices: [
      { label: "A", text: "Umuhanda urombereje w’ibice byinshi ibumoso" },
      { label: "B", text: "Umuhanda uyoborejwe i bumoso" },
      { label: "C", text: "Ibinyabiziga biturutse iburyo bifite uburenganzira bwo gutambuka mbere" },
      { label: "D", text: "Kata i bumoso gusa", correct: true },
    ]
  },
  {
    id: 408,
    questionText: "Iki cyapa gisobanura iki? img296",
    choices: [
      { label: "A", text: "Kunyuranaho bikorerwa i buryo gusa" },
      { label: "B", text: "Umuhanda uyoborejwe i buryo" },
      { label: "C", text: "Kata i buryo gusa", correct: true },
      { label: "D", text: "Umuhanda munini urasukira i bumoso" },
    ]
  },
  {
    id: 409,
    questionText: "Iki cyapa gisobanura iki? img297",
    choices: [
      { label: "A", text: "Birabujijwe gukata i buryo", correct: true },
      { label: "B", text: "Tanga inzira ku bindi binyabiziga bigenda mu gihe ugiye gukatira iburyo" },
      { label: "C", text: "Kata i buryo mu gihe nta bindi binyabiziga biturutse mu kindi cyerekezo" },
      { label: "D", text: "Nta nkengero y’umuhanda yegutse iri i buryo" },
    ]
  },
  {
    id: 8,
    questionText: "Iki cyapa gisobanura iki? img300",
    choices: [
      { label: "A", text: "Ntihasohokerwa i bumoso mu nzira banyuramo bazengurutse" },
      { label: "B", text: "Umuhanda udakomeza ibumoso" },
      { label: "C", text: "Nta nkengero y’umuhanda yegutse iri ibumoso" },
      { label: "D", text: "Birabujijwe gukata ibumoso", correct: true },
    ]
  },
  {
    id: 410,
    questionText: "Iki cyapa gisobanura iki? img301",
    choices: [
      { label: "A", text: "Birabujijwe guhindukira", correct: true },
      { label: "B", text: "Birabijijwe gusubira inyuma" },
      { label: "C", text: "Umuhanda unyerera imbere" },
      { label: "D", text: "Ntibyemewe kugendera mu byerekezo byombi" },
    ]
  },
  {
    id: 411,
    questionText: "Iki cyapa gisobanura iki? img302",
    choices: [
      { label: "A", text: "Umuhanda urombereje w’ibice byinshi ku birometero 50" },
      { label: "B", text: "Intera nto ntarengwa ya metero 50 hagati y’ibinyabiziga" },
      { label: "C", text: "Umuvuduko urenga ibirometero 50 mu isaha" },
      { label: "D", text: "Umuvuduko ntarengwa ugarukira ku birometero 50 mu isaha", correct: true },
    ]
  },
  {
    id: 412,
    questionText: "Iki cyapa gisobanura iki? img303",
    choices: [
      { label: "A", text: "Birabujijwe ku binyabiziga bitwara abakozi ba leta" },
      { label: "B", text: "Birabujijwe guhagara umwanya munini", correct: true },
      { label: "C", text: "Birabujijwe ku binyabiziga by’abikorera ki giti cyabo" },
      { label: "D", text: "Parikingi" },
    ]
  },
  {
    id: 413,
    questionText: "Iki cyapa gisobanura iki? img304",
    choices: [
      { label: "A", text: "Aho guhagararwamo n’abanyamagare imbere" },
      { label: "B", text: "Aho abana bagenewe kwiga gutwara amagare" },
      { label: "C", text: "Inzira y’iminyamitende n’abanyamaguru itegetswe", correct: true },
      { label: "D", text: "Abanyamagare bagomba kuva ku igare bakagendesha amaguru" },
    ]
  },
  {
    id: 414,
    questionText: "Iki cyapa gisobanura iki? img307",
    choices: [
      { label: "A", text: "Uburemere ntarengwa bwemewe bwa toni 3" },
      { label: "B", text: "Ntihanyurwa n’ibinyabiziga bigenewe gutwara ibicuruzwa", correct: true },
      { label: "C", text: "Ntihanyurwa n’ibinyabiziga bifite imitambiko itatu" },
      { label: "D", text: "Hanyurwa n’ibinyabiziga bifite imitambiko itatu gusa" },
    ]
  },
  {
    id: 415,
    questionText: "Iki cyapa gisobanura iki? img309",
    choices: [
      { label: "A", text: "Inkomane banyuramo bazengurutse", correct: true },
      { label: "B", text: "Biremewe guhindukira" },
      { label: "C", text: "Inzira y’icyerekezo kimwe imbere" },
      { label: "D", text: "Birabujijwe guhindukira" },
    ]
  },
  {
    id: 416,
    questionText: "Iki cyapa gisobanura iki? img311",
    choices: [
      { label: "A", text: "Umuhanda ugabanijwemo ibisate bibiri" },
      { label: "B", text: "Umuhanda ugabanijwemo ibisate bine" },
      { label: "C", text: "Inzira y’icyerekezo kimwe" },
      { label: "D", text: "Ukugendera mu muhanda ubisikanirwamo", correct: true },
    ]
  },
  {
    id: 417,
    questionText: "Iki cyapa gisobanura iki? img313",
    choices: [
      { label: "A", text: "Umuhanda utaringaniye i buryo" },
      { label: "B", text: "Akamanuko gashobora gutera ibyago", correct: true },
      { label: "C", text: "Ahantu umuhanda umeze nabi" },
      { label: "D", text: "Uguhinguka ku mwaro cyangwa ku nkombe" },
    ]
  },
  {
    id: 418,
    questionText: "Iki cyapa gisobanura iki? img315",
    choices: [
      { label: "A", text: "Akazamuko gashinze cyane", correct: true },
      { label: "B", text: "Umuhanda utaringaniye i bumoso" },
      { label: "C", text: "Ahantu umuhanda umeze nabi" },
      { label: "D", text: "Ahegereye utununga" },
    ]
  },
  {
    id: 419,
    questionText: "Iki cyapa gisobanura iki? img317",
    choices: [
      { label: "A", text: "Akazamuko gashinze cyane" },
      { label: "B", text: "Umuyaga w’intambike" },
      { label: "C", text: "Uruhererekane rw’amakoni" },
      { label: "D", text: "Umuhanda unyerera", correct: true },
    ]
  },
  {
    id: 420,
    questionText: "Iki cyapa gisobanura iki? img321",
    choices: [
      { label: "A", text: "Abana", correct: true },
      { label: "B", text: "Inzira y’abanyamaguru – Itegure guhagarara" },
      { label: "C", text: "Ikibuga cy’imikino cy’abana" },
      { label: "D", text: "Ikibuga cy’ imyidagaduro" },
    ]
  },
  {
    id: 421,
    questionText: "Iki cyapa gisobanura iki? img323",
    choices: [
      { label: "A", text: "Isoko ry’amatungo" },
      { label: "B", text: "Ivuriro ry’amatungo" },
      { label: "C", text: "Uruzitiro rw’amatungo" },
      { label: "D", text: "Akayira k’amatungo", correct: true },
    ]
  },
  {
    id: 422,
    questionText: "Mu byapa bikurikira , ni ikihe cyerekana umuhanda udakomeza: img325",
    choices: [
      { label: "A", text: "Icyapa C1" },
      { label: "B", text: "Icyapa E14", correct: true },
      { label: "C", text: "Icyapa C2a" },
      { label: "D", text: "Icyapa B2a" },
    ]
  },
  {
    id: 423,
    questionText: "Iki cyapa gisobanura iki? img326",
    choices: [
      { label: "A", text: "Tanga inzira", correct: true },
      { label: "B", text: "Icyago" },
      { label: "C", text: "Icyerekezo kimwe" },
      { label: "D", text: "Ntihanyurwa" },
    ]
  },
  {
    id: 424,
    questionText: "Muri ibi byapa bikurikira ni ikihe cyerekana ko umuyobozi ukibonye yemerewe gutambuka mbere y'abaturutse aho agana mu nzira ifunganye: img330",
    choices: [
      { label: "A", text: "Icyapa B6", correct: true },
      { label: "B", text: "Icyapa A19" },
      { label: "C", text: "Icyapa B3" },
      { label: "D", text: "Icyapa A22a" },
    ]
  },
  {
    id: 425,
    questionText: "Iki cyapa: img331",
    choices: [
      { label: "A", text: "Aho banyura bazengurutse", correct: true },
      { label: "B", text: "Cyerekana umuhanda w'ibisate bitatu" },
      { label: "C", text: "Cyerekana ahegereye inkomane" },
      { label: "D", text: "Ntagisuzo cy’ukuri kirimo" },
    ]
  },
  {
    id: 426,
    questionText: "Iki cyapa gisobanura iki? img333",
    choices: [
      { label: "A", text: "Hanyurwa mu cyerekezo kimwe" },
      { label: "B", text: "Ntihanyurwa", correct: true },
      { label: "C", text: "Umuhanda udakomeza" },
      { label: "D", text: "Ntagisuzo cy’ukuri kirimo" },
    ]
  },
  {
    id: 427,
    questionText: "Ni ikihe icyapa gisobanura umuhanda w'icyerekezo kimwe: img335",
    choices: [
      { label: "A", text: "Icyapa D1a" },
      { label: "B", text: "Icyapa E13a", correct: true },
      { label: "C", text: "Icyapa C19" },
      { label: "D", text: "Icyapa C1" },
    ]
  },
  {
    id: 428,
    questionText: "Iki cyapa gisobanura iki? img336",
    choices: [
      { label: "A", text: "Aho imihanda ihurira" },
      { label: "B", text: "Inkomane y’aho umuhanda umwe urasukira iburyo" },
      { label: "C", text: "Umuhanda udakomeza" },
      { label: "D", text: "Nta gisubizo kirimo", correct: true },
    ]
  },
  {
    id: 429,
    questionText: "Iki cyapa gisobanura iki? img340",
    choices: [
      { label: "A", text: "Iherezo ry’ umuhanda urombeje w’ibice byinshi", correct: true },
      { label: "B", text: "Birabujijwe kunyura mu mu muhanda w’ ikindi cyerekezo" },
      { label: "C", text: "Birabujijwe kunyuranaho" },
      { label: "D", text: "Birabujijwe guhagara ku iteme" },
    ]
  },
  {
    id: 430,
    questionText: "Iki kimenyetso kiri mu muhanda kivuze iki? img342",
    choices: [
      { label: "A", text: "Biremewe kunyuranaho" },
      { label: "B", text: "Umuyobozi abujijwe kukirenga", correct: true },
      { label: "C", text: "Wegereye icyapa cyo guhagarara umwanya muto" },
      { label: "D", text: "Umuhanda ufunganye" },
    ]
  },
  {
    id: 431,
    questionText: "Iki kimenyetso kiri mu muhanda kivuze iki? img343",
    choices: [
      { label: "A", text: "Umuyobozi abujijwe kurenga umurongo wera ucagaguye cyeretse mugihe bitateza icyago", correct: true },
      { label: "B", text: "Birabujijwe kunyuranaho" },
      { label: "C", text: "Biremewe kunyuranaho ariko nturenge umurongo wera ucagaguye" },
      { label: "D", text: "Birabujijwe gusubira inyuma" },
    ]
  },
  {
    id: 432,
    questionText: "Mu gihe utwaye ikinyabiziga uva kuri A ugana kuri B, Iki kimenyetso kiri mu muhanda kivuze iki? img344",
    choices: [
      { label: "A", text: "Umuyobozi ashobora kurenga umurongo wera udacagaguye mugihe cyo guhindukira gusa" },
      { label: "B", text: "Umuyobozi w’ikinyabiziga abujijwe kunyuranaho, uretse gusa abayobozi b’ibinyamitende nibo bashobora kurenga umurongo wera udacagaguye" },
      { label: "C", text: "Umuyobozi w’ikinyabiziga abujijwe kunyuranaho arenze umurongo wera udacagaguye" },
      { label: "D", text: "Umuyobozi w’ikinyabiziga ashobora kunyuranaho mu gihe bitateza icyago", correct: true },
    ]
  },
  {
    id: 433,
    questionText: "Mu gihe utwaye ikinyabiziga uva kuri A ugana kuri B, Iki kimenyetso kiri mu muhanda kivuze iki? img347",
    choices: [
      { label: "A", text: "Umuyobozi w’ikinyabiziga ashobora kunyuranaho arenze umurongo wera udacagaguye" },
      { label: "B", text: "Umuyobozi w’ikinyabiziga abujijwe kunyuranaho arenze imirongo yera", correct: true },
      { label: "C", text: "Umuyobozi w’ikinyabiziga yemerewe kunyuranaho" },
      { label: "D", text: "Abayobozi b’ibinyamitende gusa bemerewe kunyuranaho barenze umurongo wera udacagaguye" },
    ]
  },
];