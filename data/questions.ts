export interface QuizQuestion {
  id: number;
  questionText: string;
  questionImage?: string;
  choices: QuizChoice[];
}

export interface QuizChoice {
  text?: string;
  image?: string;
  correct?: boolean;
}

export const quizQuestions: QuizQuestion[] = [
  {
    "id": 1,
    "questionText": "Ikinyabiziga cyose cyangwa ibinyabiziga bigenda bigomba kugira:",
    "choices": [
      {
        "text": "Umuyobozi",
        "correct": true
      },
      {
        "text": "Umuherekeza"
      },
      {
        "text": "A na B ni ibisubizo by’ukuri"
      },
      {
        "text": "Nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 2,
    "questionText": "Ijambo “akayira” bivuga inzira nyabagendwa ifunganye yagenewe gusa:",
    "choices": [
      {
        "text": "Abanyamaguru"
      },
      {
        "text": "Ibinyabiziga bigendera ku biziga bibiri"
      },
      {
        "text": "A na B ni ibisubizo by’ukuri",
        "correct": true
      },
      {
        "text": "Nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 3,
    "questionText": "Umurongo uciyemo uduce umenyesha ahegereye umurongo ushobora kuzuzwa n’uturanga gukata tw’ibara ryera utwo turanga cyerekezo tumenyesha :",
    "choices": [
      {
        "text": "Igisate cy’umuhanda abayobozi bagomba gukurikira"
      },
      {
        "text": "Ahegereye umurongo ukomeje"
      },
      {
        "text": "Igabanurwa ry’umubare w’ibisate by’umuhanda mu cyerekezo bajyamo",
        "correct": true
      },
      {
        "text": "A na C nibyo"
      }
    ]
  },
  {
    "id": 4,
    "questionText": "Ahantu ho kugendera mu muhanda herekanwa n’ibimenyetso bimurika ibinyabiziga ntibishobora kuhagenda :",
    "choices": [
      {
        "text": "Biteganye"
      },
      {
        "text": "Ku murongo umwe"
      },
      {
        "text": "A na B nibyo"
      },
      {
        "text": "Nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 5,
    "questionText": "Ibinyabiziga bikurikira bigomba gukorerwa isuzumwa buri mwaka:",
    "choices": [
      {
        "text": "Ibinyabiziga bigenewe gutwara abagenzi muri rusange"
      },
      {
        "text": "Ibinyabiziga bigenewe gutwara ibintu birengeje toni 3.5"
      },
      {
        "text": "Ibinyabiziga bigenewe kwigisha gutwara"
      },
      {
        "text": "Nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 6,
    "questionText": "Ubugari bwa romoruki ikuruwe n’ikinyamitende itatu ntibugomba kurenza ibipimo bikurikira:",
    "choices": [
      {
        "text": "cm75"
      },
      {
        "text": "cm125"
      },
      {
        "text": "cm265"
      },
      {
        "text": "Nta gisubizo cy’ukuri",
        "correct": true
      }
    ]
  },
  {
    "id": 7,
    "questionText": "Uburebure bw’ibinyabiziga bikurikira ntibugomba kurenga metero 11 :",
    "choices": [
      {
        "text": "Ibifite umutambiko umwe uhuza imipira"
      },
      {
        "text": "Ibifite imitambiko ibiri ikurikiranye mu bugari bwayo"
      },
      {
        "text": "Makuzungu"
      },
      {
        "text": "Nta gisubizo cy’ukuri",
        "correct": true
      }
    ]
  },
  {
    "id": 8,
    "questionText": "Ikinyabiziga kibujijwe guhagarara akanya kanini aha hakurikira :",
    "choices": [
      {
        "text": "Ahatarengeje metero 1 imbere cyangwa inyuma y’ikinyabiziga gihagaze akanya gato cyangwa kanini :"
      },
      {
        "text": "Ahantu hari ibimenyetso bibuza byabugenewe"
      },
      {
        "text": "Aho abanyamaguru banyura mu muhanda ngo bakikire inkomyi"
      },
      {
        "text": "Ibisubizo byose nibyo",
        "correct": true
      }
    ]
  },
  {
    "id": 9,
    "questionText": "Kunyuranaho bikorerwa:",
    "choices": [
      {
        "text": "Mu ruhande rw’iburyo gusa"
      },
      {
        "text": "Igihe cyose ni ibumoso"
      },
      {
        "text": "Iburyo iyo unyura ku nyamaswa"
      },
      {
        "text": "Nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 10,
    "questionText": "Icyapa cyerekana umuvuduko ntarengwa ikinyabiziga kitagomba kurenza gishyirwa gusa ku binyabiziga bifite uburemere ntarengwa bukurikira:",
    "choices": [
      {
        "text": "Burenga toni 1"
      },
      {
        "text": "Burenga toni 2"
      },
      {
        "text": "Burenga toni 24"
      },
      {
        "text": "Nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 11,
    "questionText": "Ahatari mu nsisiro umuvuduko ntarengwa mu isaha wa velomoteri ni:",
    "choices": [
      {
        "text": "Km50",
        "correct": true
      },
      {
        "text": "Km40"
      },
      {
        "text": "Km30"
      },
      {
        "text": "Nta gisubizo cy’ukuri"
      }
    ]
  },
  {
    "id": 12,
    "questionText": "Umuyobozi ugenda mu muhanda igihe ubugari bwawo budatuma anyuranaho nta nkomyi ashobora kunyura mu kayira k’abanyamaguru ariko amaze kureba ibi bikurikira:",
    "choices": [
      {
        "text": "Umuvuduko w’abanyamaguru"
      },
      {
        "text": "Ubugari bw’umuhanda"
      },
      {
        "text": "Umubare w’abanyamaguru"
      },
      {
        "text": "Nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 13,
    "questionText": "Ku byerekeye kwerekana ibinyabiziga n’ukumurika kwabyo ndetse no kwerekana ihindura ry’ibyerekezo byabyo. Birabujijwe gukora andi matara cyangwa utugarurarumuri uretse ibitegetswe ariko ntibireba amatara akurikira:",
    "choices": [
      {
        "text": "Amatara ndanga"
      },
      {
        "text": "Amatara ari imbere mu modoka",
        "correct": true
      },
      {
        "text": "Amatara ndangaburambarare"
      },
      {
        "text": "Ibisubizo byose nibyo"
      }
    ]
  },
  {
    "id": 14,
    "questionText": "Iyo nta mategeko awugabanya by’umwihariko umuvuduko ntarengwa w’amapikipiki mu isaha ni:",
    "choices": [
      {
        "text": "Km25"
      },
      {
        "text": "Km70"
      },
      {
        "text": "Km40"
      },
      {
        "text": "Nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 15,
    "questionText": "Uburyo bukoreshwa kugirango ikinyabiziga kigende gahoro igihe feri idakora neza babwita:",
    "choices": [
      {
        "text": "Feri y’urugendo"
      },
      {
        "text": "Feri yo guhagarara umwanya munini"
      },
      {
        "text": "Feri yo gutabara",
        "correct": true
      },
      {
        "text": "Nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 16,
    "questionText": "Nibura ikinyabiziga gitegetswe kugira uduhanagurakirahure tungahe:",
    "choices": [
      {
        "text": "2"
      },
      {
        "text": "3"
      },
      {
        "text": "1",
        "correct": true
      },
      {
        "text": "Nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 17,
    "questionText": "Amatara maremare y’ikinyabiziga agomba kuzimwa mu bihe bikurikira:",
    "choices": [
      {
        "text": "Iyo umuhanda umurikiye umuyobozi abasha kureba muri metero 20"
      },
      {
        "text": "Iyo ikinyabiziga kigiye kubisikana n’ibindi",
        "correct": true
      },
      {
        "text": "Iyo ari mu nsisiro"
      },
      {
        "text": "Ibisubizo byose ni ukuri"
      }
    ]
  },
  {
    "id": 18,
    "questionText": "Ikinyabiziga ntigishobora kugira amatara arenga abiri y’ubwoko bumwe keretse kubyerekeye amatara akurikira:",
    "choices": [
      {
        "text": "Itara ndangamubyimba"
      },
      {
        "text": "Itara ryerekana icyerekezo"
      },
      {
        "text": "Itara ndangaburumbarare"
      },
      {
        "text": "Ibisubizo byose ni ukuri",
        "correct": true
      }
    ]
  },
  {
    "id": 19,
    "questionText": "Ubugari bwa romoruki ikuruwe n’igare cyangwa velomoteri ntiburenza ibipimo bikurikira:",
    "choices": [
      {
        "text": "cm25"
      },
      {
        "text": "cm125"
      },
      {
        "text": "cm45"
      },
      {
        "text": "Nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 20,
    "questionText": "Ibinyabiziga bikoreshwa nka tagisi, bitegerereza abantu mu nzira nyabagendwa, bishobora gushyirwaho itara ryerekana ko ikinyabiziga kitakodeshejwe. Iryo tara rishyirwaho ku buryo bukurikira:",
    "choices": [
      {
        "text": "Ni itara ry’icyatsi rishyirwa imbere ku kinyabiziga",
        "correct": true
      },
      {
        "text": "Ni itara ry’icyatsi rishyirwa ibumoso"
      },
      {
        "text": "Ni itara ry’umuhondo rishyirwa inyuma"
      },
      {
        "text": "A na C ni ibisubizo by’ukuri"
      }
    ]
  },
  {
    "id": 21,
    "questionText": "Za otobisi zagenewe gutwara abanyeshuri zishobora gushyirwaho amatara abiri asa n’icunga rihishije amyasa kugirango yerekane ko zihagaze no kwerekana ko bagomba kwitonda, ayo matara ashyirwaho ku buryo bukurikira :",
    "choices": [
      {
        "text": "Amatara abiri ashyirwa inyuma"
      },
      {
        "text": "Amatara abiri ashyirwa imbere"
      },
      {
        "text": "Rimwe rishyirwa imbere irindi inyuma",
        "correct": true
      },
      {
        "text": "b na c ni ibisubizo by’ukuri"
      }
    ]
  },
  {
    "id": 22,
    "questionText": "Itara ryo guhagarara ry’ibara ritukura rigomba kugaragara igihe ijuru rikeye nibura mu ntera ikurikira:",
    "choices": [
      {
        "text": "Metero 100 ku manywa na metero 20 mu ijoro"
      },
      {
        "text": "Metero 150 ku manywa na metero50 mu ijoro"
      },
      {
        "text": "Metero 200 ku manywa na metero100 mu ijoro"
      },
      {
        "text": "Nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 23,
    "questionText": "Iyo umuvuduko w’ibinyabiziga bidapakiye ushobora kurenga km50 mu isaha ahategamye, bigomba kuba bifite ibikoresho by’ihoni byumvikanira mu ntera:",
    "choices": [
      {
        "text": "Metero 100"
      },
      {
        "text": "Metero 200"
      },
      {
        "text": "Metero 50",
        "correct": true
      },
      {
        "text": "Metero 150"
      }
    ]
  },
  {
    "id": 24,
    "questionText": "Birabujijwe kugenza ibinyabiziga bigendeshwa na moteri naza romoruki zikururwa nabyo, iyo ibiziga byambaye inziga zidahagwa cyangwa inziga zikururuka zifite umubyimba uri hasi ya cm 4. Ariko ibyo ntibikurikizwa kubinyabiziga bikurikira:",
    "choices": [
      {
        "text": "Ku binyabiziga by’ingabo bijya ahatarenga km25"
      },
      {
        "text": "Ibinyabiziga bihinga"
      },
      {
        "text": "Ibinyabiziga bya police"
      },
      {
        "text": "Nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 25,
    "questionText": "Igice cy'inzira nyabagendwa kigarukira ku mirongo ibiri yera icagaguye ibangikanye kandi gifite ubugari budahagije kugira ngo imodoka zitambuke neza, kiba ari:",
    "choices": [
      {
        "text": "Ahanyurwa n’amagare na velomoteri"
      },
      {
        "text": "Ahanyurwa n’ingorofani"
      },
      {
        "text": "Ahanyurwa n’ibinyamitende",
        "correct": true
      },
      {
        "text": "Nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 26,
    "questionText": "Ubugari bwa romoruki ntiburenza ubugari bw’ikinyabiziga kiyikurura iyo ikuruwe n’ibinyabiziga bikurikira:",
    "choices": [
      {
        "text": "Igare"
      },
      {
        "text": "Velomoteri"
      },
      {
        "text": "Ipikipiki ifite akanyabiziga kometse ku ruhande rwayo",
        "correct": true
      },
      {
        "text": "Nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 27,
    "questionText": "Iyo hatarimo indi myanya birabujijwe gutwara ku ntebe y’imbere y’imodoka abana badafite imyaka:",
    "choices": [
      {
        "text": "Imyaka 10"
      },
      {
        "text": "Imyaka 12",
        "correct": true
      },
      {
        "text": "Imyaka 7"
      },
      {
        "text": "Ntagisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 28,
    "questionText": "Icyapa kivuga gutambuka mbere y’ibinyabiziga biturutse imbere gifite amabara akurikira:",
    "choices": [
      {
        "text": "Ubuso ni umweru"
      },
      {
        "text": "Ikirango ni umutuku n’umukara"
      },
      {
        "text": "Ikirango ni umweru n’umukara"
      },
      {
        "text": "Nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 29,
    "questionText": "Ni ryari itegeko rigenga gutambuka mbere kw’iburyo rikurikizwa mu masangano:",
    "choices": [
      {
        "text": "Iyo nta cyapa cyo gutambuka mbere gihari"
      },
      {
        "text": "Iyo ikimenyetso kimurika cyagenewe ibinyabiziga kidakora"
      },
      {
        "text": "A na B ni ibisubizo by’ukuri",
        "correct": true
      },
      {
        "text": "Nta gisubizo cy’ukuri"
      }
    ]
  },
  {
    "id": 30,
    "questionText": "Ibimenyetso bimurika byerekana uburyo bwo kugendera mu muhanda kw'ibinyabiziga bishyirwa iburyo bw'umuhanda. Ariko bishobora no gushyirwa ibumoso cyangwa hejuru y’umuhanda:",
    "choices": [
      {
        "text": "Hakurikijwe icyerekezo abagenzi bireba baganamo"
      },
      {
        "text": "Hakurikijwe icyo ibyo bimenyetso bigamije kwerekana"
      },
      {
        "text": "Kugirango birusheho kugaragara neza",
        "correct": true
      },
      {
        "text": "Ibisubizo byose ni ukuri"
      }
    ]
  },
  {
    "id": 31,
    "questionText": "Iyo itara ry’umuhondo rimyatsa rikoreshejwe mu masangano y’amayira ahwanyije agaciro rishyirwa ahagana he:",
    "choices": [
      {
        "text": "Kuri buri nzira"
      },
      {
        "text": "Hagati y’amasangano"
      },
      {
        "text": "Iburyo bw’amasangano"
      },
      {
        "text": "a na b ni ibisubizo by’ ukuri",
        "correct": true
      }
    ]
  },
  {
    "id": 32,
    "questionText": "Inkombe z’inzira nyabagendwa cyangwa z’umuhanda zishobora kugaragazwa n’ibikoresho ngarurarumuri. Ibyo bikoresho bigomba gushyirwaho ku buryo abagenzi babibona :",
    "choices": [
      {
        "text": "Babona gusa ibumoso bwabo iby’ibara ritukura"
      },
      {
        "text": "Iburyo babona iby’ibara risa n’icunga rihishije gusa"
      },
      {
        "text": "Babona iby’ibara ry’umuhondo ibumoso"
      },
      {
        "text": "Nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 33,
    "questionText": "Ibinyabiziga bikurikira bigomba gukorerwa isuzumwa rimwe mu mezi 6:",
    "choices": [
      {
        "text": "Ibinyabiziga bitwara abagenzi muri rusange"
      },
      {
        "text": "Ibinyabiziga bigenewe gutwara ibintu birengeje toni 3.5"
      },
      {
        "text": "Ibinyabiziga bigenewe kwigisha gutwara"
      },
      {
        "text": "Ibisubizo byose ni ukuri",
        "correct": true
      }
    ]
  },
  {
    "id": 34,
    "questionText": "Iyo kuyobya umuhanda ari ngombwa bigaragazwa kuva aho uhera no kuburebure bwawo n’icyapa gifite ubuso bw’amabara akurikira:",
    "choices": [
      {
        "text": "Ubururu",
        "correct": true
      },
      {
        "text": "Umweru"
      },
      {
        "text": "Umutuku"
      },
      {
        "text": "Nta gisubizo cy’ukuri"
      }
    ]
  },
  {
    "id": 35,
    "questionText": "Ku mihanda ibyapa bikurikira bigomba kugaragazwa ku buryo bumwe:",
    "choices": [
      {
        "text": "Ibyapa biyobora n’ibitegeka"
      },
      {
        "text": "Ibyapa biburira n’ibitegeka"
      },
      {
        "text": "Ibyapa bibuza n’ibitegeka",
        "correct": true
      },
      {
        "text": "Nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 36,
    "questionText": "Ni iyihe feri ituma imodoka igenda buhoro kandi igahagarara ku buryo bwizewe bubangutse kandi nyabwo, uko imodoka yaba yikoreye kose yaba igeze ahacuramye cyangwa ahaterera:",
    "choices": [
      {
        "text": "Feri y’urugendo",
        "correct": true
      },
      {
        "text": "Feri yo gutabara"
      },
      {
        "text": "Feri yo guhagarara umwanya munini"
      },
      {
        "text": "Nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 37,
    "questionText": "Ibizirikisho by’iminyururu cyangwa by’insinga kimwe n’ibindi by’ingoboka bikoreshwa gusa igihe nta kundi umuntu yabigenza kandi nta kindi bigiriwe uretse gusa kugirango ikinyabiziga kigere aho kigomba gukorerwa kandi nturenze na rimwe km 20 mu isaha, ibyo bizirikisho bigaragazwa ku buryo bukurikira:",
    "choices": [
      {
        "text": "Agatambaro gatukura kuri cm 50 z’umuhanda"
      },
      {
        "text": "Ikimenyetso cy’itara risa n’icunga rihishije"
      },
      {
        "text": "Icyapa cyera cya mpande enye zingana gifite cm 20 kuri buri ruhande"
      },
      {
        "text": "Nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 38,
    "questionText": "Uretse mu mujyi, ku yindi mihanda yajyenwe na minisitiri ushinzwe gutwara abantu n’ibintu, uburemere ntarengwa ku binyabiziga bifite imitambiko itatu cyangwa irenga hatarimo makuzungu ni :",
    "choices": [
      {
        "text": "Toni 10"
      },
      {
        "text": "Toni 12"
      },
      {
        "text": "Toni 16",
        "correct": true
      },
      {
        "text": "Toni 24"
      }
    ]
  },
  {
    "id": 39,
    "questionText": "Ubugari bw’imizigo yikorewe n’ibinyamitende itatu n’ubwiyikorewe n’ibinyamitende 4 bifite cyangwa bidafite moteri kimwe n’ubw’iyikorewe na romuruki zikuruwe n’ibyo binyabiziga ntibushobora kurenga ibipimo bikurikira:",
    "choices": [
      {
        "text": "cm 30 ku bugari bw’icyo kinyabiziga kidapakiye"
      },
      {
        "text": "Ubugari ntarengwa budakuka ni metero 2 na sentimetero 50"
      },
      {
        "text": "A na B ni ibisubizo by’ukuri",
        "correct": true
      },
      {
        "text": "Nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 40,
    "questionText": "Kunyura ku binyabiziga bindi, uretse icy’ibiziga bibiri, bibujijwe aha hakurikira:",
    "choices": [
      {
        "text": "Hafi y’iteme iyo hari umuhanda ufunganye"
      },
      {
        "text": "Hafi y’aho abanyamaguru banyura"
      },
      {
        "text": "Hafi y’ibice by’umuhanda bimeze nabi"
      },
      {
        "text": "Ibi bisubizo byose ni ukuri",
        "correct": true
      }
    ]
  },
  {
    "id": 41,
    "questionText": "Iyo nta mategeko awugabanya by’umwihariko, umuvuduko ntarengwa ku modoka zitwara abagenzi mu buryo bwa rusange ni:",
    "choices": [
      {
        "text": "Km 60 mu isaha",
        "correct": true
      },
      {
        "text": "Km 40 mu isaha"
      },
      {
        "text": "Km 25 mu isaha"
      },
      {
        "text": "Km20 mu isaha"
      }
    ]
  },
  {
    "id": 42,
    "questionText": "Iyo nta mategeko awugabanya by’umwihariko, umuvuduko ntarengwa ku modoka zikoreshwa nk’amavatiri y’ifasi cyangwa amatagisi zifite uburemere bwemewe butarenga kilogarama 3500 ni:",
    "choices": [
      {
        "text": "Km 60 mu isaha"
      },
      {
        "text": "Km 40 mu isaha"
      },
      {
        "text": "Km 75 mu isaha",
        "correct": true
      },
      {
        "text": "Km20 mu isaha"
      }
    ]
  },
  {
    "id": 43,
    "questionText": "Ikinyabiziga kibujijwe guhagarara akanya kanini aha hakurikira :",
    "choices": [
      {
        "text": "Imbere y’ahantu hinjirwa hakasohokerwa n’abantu benshi"
      },
      {
        "text": "Mu muhanda aho ugabanyijemo ibisate bigaragazwa n’imirongo idacagaguye"
      },
      {
        "text": "A na B ni ibisubizo by’ukuri",
        "correct": true
      },
      {
        "text": "Nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 44,
    "questionText": "Iyo bwije kugeza bukeye cyangwa bitewe n’uko ibihe bimeze nk’igihe cy’ibihu cyangwa cy’imvura bitagishoboka kubona neza muri m 200, udutsiko twose tw’abanyamaguru nk’imperekerane cyangwa udutsiko tw’abanyeshuri bari ku murongo bayobowe n’umwarimu, iyo bagenda mu muhanda ku isonga hakaba hari abantu barenze umwe bagomba kugaragazwa kuburyo bukurikira :",
    "choices": [
      {
        "text": "Imbere ni itara ry’umuhondo ritwariwe ibumoso"
      },
      {
        "text": "Inyuma ni itara ryera ritwariwe ibumoso n’umuntu uri ku murongo w’inyuma hafi y’umurongo ugabanya umuhanda mo kabiri"
      },
      {
        "text": "A na B ni ibisubizo by’ukuri"
      },
      {
        "text": "Nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 45,
    "questionText": "Utuyira turi ku mpande z’umuhanda n’ inkengero zigiye hejuru biharirwa abanyamaguru mu bihe bikurikira:",
    "choices": [
      {
        "text": "Iyo hari amategeko yihariye yerekanwa n’ibimenyetso"
      },
      {
        "text": "Iyo badatatanye kandi bayobowe n’umwarimu"
      },
      {
        "text": "Iyo hatari amategeko yihariye yerekanwa n’ibimenyetso",
        "correct": true
      },
      {
        "text": "Ibisubizo byose ni ukuri"
      }
    ]
  },
  {
    "id": 46,
    "questionText": "Imburira zimurika zemerewe gukoreshwa kugirango bamenyeshe umuyobozi ko bagiye kumunyuraho aha hakurikira:",
    "choices": [
      {
        "text": "Mu nsisiro gusa"
      },
      {
        "text": "Ahegereye inyamaswa zikurura"
      },
      {
        "text": "Hafi y’amatungo"
      },
      {
        "text": "Nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 47,
    "questionText": "Uburemere ntarengwa bwemewe ntibushobora kurenga ½ cy’uburemere bw’ikinyabiziga gikurura nubw’umuyobozi kuri romoruki zikurikira :",
    "choices": [
      {
        "text": "Romoruki ifite feri y’urugendo"
      },
      {
        "text": "Romoruki idafite feri y’urugendo",
        "correct": true
      },
      {
        "text": "Romoruki itarenza kg 750"
      },
      {
        "text": "Nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 48,
    "questionText": "Ibinyabiziga bifite ubugari bufite ibipimo bikurikira bigomba kugira amatara ndangaburumbarare :",
    "choices": [
      {
        "text": "Metero 2 na cm 10",
        "correct": true
      },
      {
        "text": "Metero 2 na cm 50"
      },
      {
        "text": "Metero 3"
      },
      {
        "text": "Metero 2"
      }
    ]
  },
  {
    "id": 49,
    "questionText": "Nta tara na rimwe cyangwa akagarurarumuri bishobora kuba bifunze ku buryo igice cyabyo cyo hasi cyane kimurika kitaba kiri hasi y’ibipimo bikurikira kuva ku butaka igihe ikinyabiziga kidapakiye :",
    "choices": [
      {
        "text": "Cm 30"
      },
      {
        "text": "Cm 40",
        "correct": true
      },
      {
        "text": "Cm 50"
      },
      {
        "text": "Metero 1 na cm 55"
      }
    ]
  },
  {
    "id": 50,
    "questionText": "Iyo ikinyabiziga gifite amatara abiri cyangwa menshi y’ubwoko bumwe ayo matara agomba kugira ibara rimwe n’ingufu zingana kandi akagomba gushyirwaho ku buryo buteganye uhereye ku murongo ugabanya ikinyabizigamo kabiri mu burebure bwacyo. Ariko ibi ntibikurikizwa ku matara akurikira:",
    "choices": [
      {
        "text": "itara ndangamubyimba"
      },
      {
        "text": "itara ndangaburumbarare"
      },
      {
        "text": "itara ribonesha icyapa kiranga numero y’ikinyabiziga inyuma",
        "correct": true
      },
      {
        "text": "A na B byose nibyo"
      }
    ]
  },
  {
    "id": 51,
    "questionText": "Ahari hejuru cyane y’ubuso bumurika h’amatara ndangambere na ndanganyuma ntihashobora kuba aharenze ibipimo bikurikira hejuru y’ubutaka iyo ikinyabiziga kidapakiye:",
    "choices": [
      {
        "text": "m1 na cm 50"
      },
      {
        "text": "m1 na cm 75"
      },
      {
        "text": "m 1 na cm 90",
        "correct": true
      },
      {
        "text": "m2 na cm 10"
      }
    ]
  },
  {
    "id": 52,
    "questionText": "Ni ryari ikinyabiziga gishobora kugenda mu muhanda moteri itaka cyangwa vitesi idakora:",
    "choices": [
      {
        "text": "igihe kigenda ahamanuka"
      },
      {
        "text": "igihe gikuruwe n’ikindi kinyabiziga",
        "correct": true
      },
      {
        "text": "igihe gifite feri y’urugendo"
      },
      {
        "text": "ibisubizo byose ni byo"
      }
    ]
  },
  {
    "id": 52,
    "questionText": "Umurongo mugari wera udacagaguye ushobora gucibwa ku muhanda kugirango ugaragaze ibi bikurikira:",
    "choices": [
      {
        "text": "inkombe mpimbano z’umuhanda",
        "correct": true
      },
      {
        "text": "ahahagararwa umwanya muto n’umunini"
      },
      {
        "text": "ahanyura abayobozi b’amagare"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 53,
    "questionText": "Buri modoka cyangwa buri romoruki ikuruwe n’iyo modoka bishobora kugira itara risa n’icyatsi kibisi bituma umuyobozi yerekana ko yabonye ikimenyetso cy’uwitegura kumunyuraho. Iryo tara rigomba gushyirwa aha hakurikira:",
    "choices": [
      {
        "text": "hafi y’inguni y’ibumoso bw’ikinyabiziga"
      },
      {
        "text": "inyuma hafi y’impera y’iburyo bw’ikinyabiziga"
      },
      {
        "text": "inyuma ahegereye inguni y’iburyo"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 54,
    "questionText": "Ibinyabiziga bikurikira bigomba kugira icyerekana umuvuduko kiri aho umuyobozi areba neza kandi kigahora kitabwaho kugirango kigume gukora neza:",
    "choices": [
      {
        "text": "ibinyabiziga bifite umuvuduko nibura wa km 60 mu isaha"
      },
      {
        "text": "ibinyabiziga bishobora kurenza km 40 mu isaha",
        "correct": true
      },
      {
        "text": "ibinyabiziga bishobora kurenza km 30 mu isaha"
      },
      {
        "text": "ibinyabiziga bishobora kurenza km 25 mu isaha"
      }
    ]
  },
  {
    "id": 55,
    "questionText": "Ubugari bw’imizigo yikorewe n’ipikipiki idafite akanyabiziga ko kuruhande kimwe n’ubwa romoruki ikuruwe na bene icyo kinyabiziga ntibushobora kurenza ibipimo bikurikira:",
    "choices": [
      {
        "text": "m 1.25",
        "correct": true
      },
      {
        "text": "cm 30"
      },
      {
        "text": "cm 75"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 56,
    "questionText": "Ibinyabiziga bikurikira bigomba kugira itara ry’ubururu rimyatsa riboneka mu mpande zose:",
    "choices": [
      {
        "text": "ibinyabiziga bifite ubugari burenga m 2 na cm 10"
      },
      {
        "text": "ibinyabiziga bya police y’igihugu"
      },
      {
        "text": "ibinyabiziga ndakumirwa",
        "correct": true
      },
      {
        "text": "ibisubizo byose ni ukuri"
      }
    ]
  },
  {
    "id": 57,
    "questionText": "Ibinyabiziga bihinga n’ibindi bikoresho byihariye bikoreshwa n’ibigo bipatana imirimo, iyo bigenda mu nzira nyabagendwa igihe cya nijoro cyangwa bitewe n’uko ibihe bimeze bitagishoboka kubona neza muri m 200 bishobora kugaragazwa inyuma n’amatara 2 atukura, bipfa kuba bitarenza ibipimo bikurikira:",
    "choices": [
      {
        "text": "kutarenza umuvuduko wa km20 mu isaha"
      },
      {
        "text": "uburebure bwabyo habariwemo ibyo bitwaye bukaba butarengeje m6"
      },
      {
        "text": "uburebure ntarengwa ntiburenga m8"
      },
      {
        "text": "A na B nibyo bisubizo by’ukuri",
        "correct": true
      }
    ]
  },
  {
    "id": 58,
    "questionText": "Iyo romoruki iziritse ku kinyamitende, velomoteri n’amapikipiki bidafite akanyabiziga ko kuruhande uretse ikinyamitende na velomoteri bidafite umuyobozi, iyo uburumbarare bwayo cyangwa bw’ibyo yikoreye bituma itara ry’ikinyabiziga gikurura ritagaragara igihe bitagishoboka kubona neza muri m 200 bigomba kugaragazwa ku buryo bukurikira:",
    "choices": [
      {
        "text": "itara ryera cyangwa ry’umuhondo cyangwa risa n’icunga rihishije riri kuri rumoruki inyuma",
        "correct": true
      },
      {
        "text": "itara ry’icyatsi cyangwa ry’umuhondo cyangwa risa n’icunga rihishije riri kuri rumoruki inyuma"
      },
      {
        "text": "A na B ni ibisubizo by’ukuri"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 59,
    "questionText": "Ku kinyabiziga cyangwa ibinyabiziga bikururana igice kirenga ku biziga ntikigomba kurenga ibipimo bikurikira:",
    "choices": [
      {
        "text": "inyuma ni m 3 na cm 50",
        "correct": true
      },
      {
        "text": "imbere ni m 1 na cm 70"
      },
      {
        "text": "A na B ni ibisubizo by’ukuri"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 60,
    "questionText": "Iyo amatara y’ikinyabiziga agomba gucanwa kandi igihe imizigo isumba impera y’ikinyabiziga ho metero irenga igice gihera cy’imizigo kigaragazwa ku buryo bukurikira:",
    "choices": [
      {
        "text": "itara ritukura cyangwa akagarurarumuri ku mutuku ku manywa"
      },
      {
        "text": "agatambaro gatukura gafite nibura cm 50 z’uruhande mu ijoro"
      },
      {
        "text": "itara ry’umuhondo cyangwa akagarurarumuri k’umuhondo"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 61,
    "questionText": "Iyo imizigo igizwe n’ibinyampeke, ikawa, ipamba idatonoye, ibishara, ibyatsi, ibishami cyangwa ubwatsi bw’amatungo bidahambiriye uretse amapaki afunze, ubugari bwayo bushobora kugera ku bipimo bikurikira:",
    "choices": [
      {
        "text": "m 2.50"
      },
      {
        "text": "m 2.75",
        "correct": true
      },
      {
        "text": "m 3"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 62,
    "questionText": "Uretse mu mijyi kuyindi mihanda yagenywe na minisiteri ushinzwe gutwara ibintu n’abantu, uburemere ntarengwa bwemewe ku binyabiziga bifatanye bifite imitambiko itatu ni:",
    "choices": [
      {
        "text": "toni 20"
      },
      {
        "text": "toni 16"
      },
      {
        "text": "toni 12",
        "correct": true
      },
      {
        "text": "toni 10"
      }
    ]
  },
  {
    "id": 63,
    "questionText": "Buri modoka cyangwa buri romoruki ikuruwe n’iyo modoka bishobora kugira itara rituma umuyobozi yerekana ko yabonye ikimenyetso cy’uwitegura kumunyuraho. Iryo tara rifite amabara akurikira:",
    "choices": [
      {
        "text": "umuhondo"
      },
      {
        "text": "icyatsi kibisi",
        "correct": true
      },
      {
        "text": "umweru"
      },
      {
        "text": "umutuku"
      }
    ]
  },
  {
    "id": 64,
    "questionText": "Ikinyabiziga cyangwa ibinyabiziga bikururana bifite imitambiko ibiri ikurikiranye mu bugari bwayo ni ukuvuga imitambiko yihindukiza kucyo ifungiyeho, uburebure bwabyo ntibugomba kurenza ibipimo bikurikira:",
    "choices": [
      {
        "text": "m11"
      },
      {
        "text": "m10"
      },
      {
        "text": "m7",
        "correct": true
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 65,
    "questionText": "Bumwe muri ubu bwoko bwa feri ituma imodoka iguma aho iri uko yaba yikoreye kose ku muzamuko cyangwa ku gacuri bya 16%, imyanya ya feri igomba gufata igakomeza kwegera kuburyo bw’ibyuma niyo umuyobozi yaba atarimo:",
    "choices": [
      {
        "text": "feri yo guhagarara umwanya munini",
        "correct": true
      },
      {
        "text": "feri y’urugendo"
      },
      {
        "text": "feri yo gutabara"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 66,
    "questionText": "Utugarurarumuri turi mu mbavu z’ikinyabiziga tugomba kugira ibara rikurikira:",
    "choices": [
      {
        "text": "umweru"
      },
      {
        "text": "umuhondo",
        "correct": true
      },
      {
        "text": "umutuku"
      },
      {
        "text": "Nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 67,
    "questionText": "Romoruki zifite ubugari ntarengwa bwa cm 80 zishobora gushyirwaho akagarurarumuri kamwe gusa iyo zikuruwe n’ibinyabiziga bikurikira:",
    "choices": [
      {
        "text": "velomoteri"
      },
      {
        "text": "ipikipiki idafite akanyabiziga ku ruhande",
        "correct": true
      },
      {
        "text": "amavatiri y’ifasi"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 68,
    "questionText": "Amatara maremare y’ibara ryera cyangwa ry’umuhondo agomba, nijoro igihe ijuru rikeye, kumurika mu muhanda mu ntera ya m 100 nibura imbere y’ikinyabiziga, ariko ku binyabiziga bifite moteri itarengeje za sentimetero kibe 125 iyo ntera igira ibipimo bikurikira:",
    "choices": [
      {
        "text": "m200"
      },
      {
        "text": "m100"
      },
      {
        "text": "m85"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 69,
    "questionText": "Iyo banyuze iruhande rw’inkomyi abanyamaguru bagomba gukikira banyuze mu muhanda, abayobozi bagomba gusiga umwanya ufite ubugari bwa m 1 nibura hagati yabo nayo. Iyo ibyo bidashobora kubahirizwa kandi umunyamaguru akaba anyura hafi yiyo nkomyi, umuyobozi agomba kuyikikira afite umuvuduko utarengeje ibipimo bikurikira:",
    "choices": [
      {
        "text": "km 10 mu isaha"
      },
      {
        "text": "km 20 mu isaha"
      },
      {
        "text": "km 30 mu isaha"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 70,
    "questionText": "Guhagarara akanya gato no guhagarara akanya kanini bibujijwe cyane cyane aha hakurikira:",
    "choices": [
      {
        "text": "ku mihanda y’icyerekezo kimwe hose"
      },
      {
        "text": "mu ruhande ruteganye n’urwo ikindi kinyabiziga gihagazemo akanya gato cyangwa kanini",
        "correct": true
      },
      {
        "text": "ku mihanda ibisikanirwamo, iyo ubugari bw’umwanya w’ibinyabiziga ugomba gutuma bibisikana butagifite m12"
      },
      {
        "text": "ibisubizo byose nibyo"
      }
    ]
  },
  {
    "id": 71,
    "questionText": "Amatara ndangambere n’aya ndanganyuma y’imodoka zitarengeje m 6 z’uburebure na m 2 z’ubugari habariwemo imitwaro kdi nta kinyabiziga kindi kiziritseho ashobora gusimburwa n’amatara akurikira, iyo ibyo binyabiziga bihagaze umwanya muto cyangwa munini mu nsisiro bibangikanye ku ruhande rw’umuhanda:",
    "choices": [
      {
        "text": "amatara magufi"
      },
      {
        "text": "amatara ndangaburumbarare"
      },
      {
        "text": "amatara yo guhagarara umwanya munini",
        "correct": true
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 72,
    "questionText": "Iyo kuva bwije kugeza bukeye cyangwa bitewe nuko ibihe bimeze nk’igihe cy’igihu cyangwa cy’imvura bitagishoboka kubona neza muri m 200, imirongo y’ingabo z’igihugu zigendera kuri gahunda n’utundi dutsiko twose tw’abanyamaguru nk’imperekerane cyangwa udutsiko tw’abanyeshuri bari ku murongo bayobowe na mwarimu, iyo bagenda mu muhanda ku isonga hakaba hari abantu barenze umwe, bagaragzwa ku buryo bukurikira:",
    "choices": [
      {
        "text": "imbere ni itara ryera ritwariwe ku ruhande rw’ibumoso n’umuntu uri ku murongo w’imbere hafi y’umurongo ugabanya umuhanda mo kabiri",
        "correct": true
      },
      {
        "text": "inyuma ni itara umuhondo ritwariwe ku ruhande rw’ibumoso n’umuntu uri ku murongo w’inyuma hafi y’umurongo ugabanya umuhanda mo kabiri"
      },
      {
        "text": "A na B ni ibisubizo by’ukuri"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 73,
    "questionText": "Imizigo yikorewe n’amagare, velomoteri, amapikipiki, ibinyamitende by’ibiziga bitatu nibyo ibiziga bine bifite cyangwa bidafite moteri inyuma ntishobora kurenza ibipimo bikurikira:",
    "choices": [
      {
        "text": "cm 20"
      },
      {
        "text": "cm 30"
      },
      {
        "text": "cm 50",
        "correct": true
      },
      {
        "text": "cm 60"
      }
    ]
  },
  {
    "id": 74,
    "questionText": "Itara ndanganyuma rigomba gushyirwa aha hakurikira:",
    "choices": [
      {
        "text": "ahagereye inguni y’ibumoso y’ikinyabiziga",
        "correct": true
      },
      {
        "text": "ahagereye inguni y’iburyo bw’ikinyabiziga"
      },
      {
        "text": "inyuma kandi y’impera y’ibumoso bw’ikinyabiziga"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 75,
    "questionText": "Nta tara na rimwe cyangwa utugarurarumuri bishobora kuba bifunze kuburyo igice cyabyo cyo hasi cyane kimurika kitaba kiri hasi ya cm 40 kuva ku butaka igihe ikinyabiziga kidapakiye ariko ibyo ntibikurikizwa ku matara akurikira:",
    "choices": [
      {
        "text": "amatara kamenabihu"
      },
      {
        "text": "amatara yo gusubira inyuma"
      },
      {
        "text": "A na B ni ibisubizo by’ukuri",
        "correct": true
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 76,
    "questionText": "Iyo tumuritswe n’amatara y’urugendo y’i kinyabiziga utugarurarumuri tugomba n’ijoro, igihe ijuru rikeye kubonwa n’umuyobozi w’ikinyabiziga kiri mu ntera ikurikira:",
    "choices": [
      {
        "text": "metero 100"
      },
      {
        "text": "metero 150",
        "correct": true
      },
      {
        "text": "metero 200"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 77,
    "questionText": "Ibinyabiziga bigendeshwa na moteri, hatarimo velomoteri n’ibinyabiziga bidapakiye umuvuduko wabyo udashobora kurenga km 50 mu isaha ahateganye bigomba kuba bifite ibikoresho by’ihoni byumvikanira mu ntera ikurikira:",
    "choices": [
      {
        "text": "metero 200"
      },
      {
        "text": "metero 150"
      },
      {
        "text": "metero 100",
        "correct": true
      },
      {
        "text": "metero 50"
      }
    ]
  },
  {
    "id": 78,
    "questionText": "Ahatari mu nsisiro ibyapa biburira n’ibyapa byo gutambuka mbere bigomba gushyirwa mu ntera ikurikira y’ahantu habyerekana:",
    "choices": [
      {
        "text": "metero 150 kugeza kuri 200",
        "correct": true
      },
      {
        "text": "metero 100 kugeza kuri 150"
      },
      {
        "text": "metero 50 kugeza kuri 100"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 79,
    "questionText": "Inkombe z’inzira nyabagendwa cyangwa z’umuhanda zishobora kugaragazwa n’ibikoresho ngarurarumuri. Ibyo bikoresho bigomba gushyirwaho ku buryo abagenzi babibona ku buryo bukurikira:",
    "choices": [
      {
        "text": "babona iburyo bwabo ibyibara ritukura cyangwa ibisa n’icunga rihishije"
      },
      {
        "text": "ibumoso babona iby’ibara ryera"
      },
      {
        "text": "A na B ni ibisubizo by’ukuri",
        "correct": true
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 80,
    "questionText": "Ahatari mu nsisiro, umuyobozi wese ugenza ikinyabiziga kimwe cyangwa ibinyabiziga bikomatanye bifite uburemere ntarengwa bwemewe burenga ibiro 3500 cyangwa bifite uburebure bwite burenga metero 10 agomba, keretse iyo anyuze cyangwa agiye kunyura ku bindi binyabiziga, gusiga hagati y’ikinyabiziga cye n’iki muri imbere umwanya uhagije kugirango ibinyabiziga bimuhiseho bishobore kuhigobeka bidateje impanuka igihe bibaye ngombwa ariko ibyo ntibikurikizwa mu bihe bikurikira:",
    "choices": [
      {
        "text": "mu gihe ibigendera mu muhanda ari byinshi kimwe no mu duce tw'inzira nyabagendwa aho kunyuranaho bibujijwe",
        "correct": true
      },
      {
        "text": "igihe ibigendera mu muhanda ari byinshi"
      },
      {
        "text": "mu duce tw’inzira nyabagendwa aho kunyuranaho bibujijwe"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 96,
    "questionText": "Ibiziga by’ibinyabiziga bigendeshwa na moteri n’ibya velomoteri kimwe n’ibya romoruki zabyo bigomba kuba byambaye inziga zihagwa zifite amano n’ubujyakuzimu butari munsi ya milimetero imwe ku migongo yabyo yose nubudodo bwabyo ntibugire ahantu na hamwe bugaragara kandi ntibugire aho byacitse bikomeye mu mpande zabyo ariko ibyo ntibikurikizwa ku binyabiziga bikurikira:",
    "choices": [
      {
        "text": "ibinyabiziga bidapakiye kandi bitajya birenza umuvuduko wa km 25 mu isaha ahateganye",
        "correct": true
      },
      {
        "text": "ibinyabiziga bya police bijya ahatarenga km 25 uvuye aho biba"
      },
      {
        "text": "A na B ni ibisubizo by’ukuri"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 81,
    "questionText": "Amatara ndangacyerekezo agomba kuba agizwe n’ibintu bifashe ku rumuri rumyasa, biringaniye ku buryo bigira umubare utari igiharwe ku mpande z’imbere n’inyuma z’ikinyabiziga ayo matara aba afite amabara akurikira:",
    "choices": [
      {
        "text": "amatara y’imbere aba yera cyangwa ari umuhondo"
      },
      {
        "text": "ayinyuma aba atukura cyangwa asa n’icunga rihishije"
      },
      {
        "text": "A na B ni ibisubizo by’ukuri",
        "correct": true
      },
      {
        "text": "ayinyuma aba asa n’icunga rihishije"
      }
    ]
  },
  {
    "id": 82,
    "questionText": "Amahoni y’ibinyabiziga bigendeshwa na moteri agomba kohereza ijwi ry’injyana imwe rikomeza kandi ridacengera amatwi ariko ibinyabiziga bikurikira bishobora kugira ihoni ridasanzwe ridahuye n’ibivuzwe haruguru:",
    "choices": [
      {
        "text": "ibinyabiziga ndakumirwa"
      },
      {
        "text": "ibinyabiziga bikora ku mihanda"
      },
      {
        "text": "ibinyabiziga bifite ubugari burenze m 2.10"
      },
      {
        "text": "A na B ni ibisubizo by’ukuri",
        "correct": true
      }
    ]
  },
  {
    "id": 83,
    "questionText": "Icyapa kibuza kunyura kubindi binyabiziga byose uretse ibinyamitende ibiri n’amapikipiki adafite akanyabiziga ku ruhande gifite ibimenyetso by’amabara akurikira:",
    "choices": [
      {
        "text": "umweru n’umukara"
      },
      {
        "text": "umutuku n’umukara",
        "correct": true
      },
      {
        "text": "ubururu"
      },
      {
        "text": "A na B ni ibisubizo by’ukuri"
      }
    ]
  },
  {
    "id": 84,
    "questionText": "Icyapa kivuga ko hatanyurwa mu byerekezo byombi kirangwa n’ubuso bw’ibara rikurikira:",
    "choices": [
      {
        "text": "umukara"
      },
      {
        "text": "umweru",
        "correct": true
      },
      {
        "text": "ubururu"
      },
      {
        "text": "umutuku"
      }
    ]
  },
  {
    "id": 85,
    "questionText": "Ibinyabiziga bikurikira bigomba kugira ibikoresho by’ihoni byumvikanira mu ntera ya m 20:",
    "choices": [
      {
        "text": "amapikipiki"
      },
      {
        "text": "velomoteri",
        "correct": true
      },
      {
        "text": "ibinyabiziga bigendeshwa na moteri bidapakiye"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 86,
    "questionText": "Imirongo y’ingabo z’igihugu zigendera kuri gahunda n’utundi dutsiko twose tw’abanyamaguru nk’imperekerane cyangwa udutsiko tw’abanyeshuri iyo bitagishoboka kubona neza muri m200, bagaragazwa ni itara ryera imbere naho inyuma ni itara ry’umutuku ariko iyo uburebure bwiyo mirongo cyangwa bw’utwo dutsiko burenga m6 impande zatwo cyangwa zayo zigaragazwa ku buryo bukurikira:",
    "choices": [
      {
        "text": "itara rimwe cyangwa menshi yera"
      },
      {
        "text": "amatara menshi y’umuhondo"
      },
      {
        "text": "amatara menshi asa n’icunga rihishije"
      },
      {
        "text": "ibisubizo byose nibyo",
        "correct": true
      }
    ]
  },
  {
    "id": 87,
    "questionText": "Amatara ndangambere na ndanganyuma y’imodoka zitarengeje m 6 z’uburebure na m 2 z’ubugari habariwemo imitwaro kandi nta kindi kinyabiziga kiziritseho ashobora gusimburwa n’amatara yo guhagarara umwanya munini iyo ibyo binyabiziga bihagaze umwanya muto cyangwa munini mu nsisiro bibangikanye ku ruhande rw’umuhanda. Ayo matara arangwa n’amabara akurikira:",
    "choices": [
      {
        "text": "umweru cyangwa umuhondo imbere"
      },
      {
        "text": "umutuku cyangwa umuhondo inyuma"
      },
      {
        "text": "A na B ni ibisubizo by’ukuri",
        "correct": true
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 88,
    "questionText": "Amatara ndangaburumbarare agomba kubonwa nijoro igihe ijuru rikeye n’umuyobozi w’ikinyabiziga kiri mu ntera ya :",
    "choices": [
      {
        "text": "m 50 nibura"
      },
      {
        "text": "m 100"
      },
      {
        "text": "m 150"
      },
      {
        "text": "m 200 nibura",
        "correct": true
      }
    ]
  },
  {
    "id": 89,
    "questionText": "Uretse ku byerekeye imihanda iromboreje y’ibisate byinshi n’imihanda yimodoka igice cy’umuhanda kiri hakurya y’umurongo mugari wera ucibwa ku muhanda ngo ugaragaze inkombe mpimbano zawo kigenewe ibi bikurikira:",
    "choices": [
      {
        "text": "guhagararwamo umwanya muto gusa"
      },
      {
        "text": "guhagararwamo umwanya munini gusa"
      },
      {
        "text": "guhagararwamo umwanya muto n’umunini",
        "correct": true
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 90,
    "questionText": "Ibimenyetso by’agateganyo bigizwe n’imitemeri y’ibara risa n’icunga rihishije bishobora gusimbura ibi bikurikira:",
    "choices": [
      {
        "text": "imirongo yera irombereje idacagaguye gusa"
      },
      {
        "text": "imirongo yera irombereje idacagaguye n’icagaguye",
        "correct": true
      },
      {
        "text": "imirongo icagaguye n’idacagaguye ibangikanye"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 91,
    "questionText": "Iyo bitagishoboka kubona muri m 200 imodoka zikuruwe n’inyamaswa, ingorofani, inyamaswa zitwaye imizigo cyangwa zigenderwamo kimwe n’amatungo bigomba kurangwa na :",
    "choices": [
      {
        "text": "imbere ni itara ryera"
      },
      {
        "text": "imbere ni itara ry’umuhondo cyangwa risa n’icunga rihishije"
      },
      {
        "text": "inyuma ni itara rimwe ritukura"
      },
      {
        "text": "ibisubizo byose ni ukuri",
        "correct": true
      }
    ]
  },
  {
    "id": 92,
    "questionText": "Uretse igihe hari amategeko yihariye akurikizwa muri ako karere ikinyabiziga cyose gihagaze umwanya muto cyangwa munini, iyo gihagaze mu mwanya wo kuruhande wagenewe abanyamaguru, kugirango bashobore kugenda batagombye kunyura mu muhanda, umuyobozi agombye kubasigira akayira gafite byibura ibipimo bikurikira by’ubugari:",
    "choices": [
      {
        "text": "m 1",
        "correct": true
      },
      {
        "text": "m 2"
      },
      {
        "text": "m 0.5"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 93,
    "questionText": "Icyapa cyerekana ahantu hagenewe guhagararwamo n’imodoka nini zagenewe gutwara abantu cyirangwa n’ubuso bw’amabara akurikira:",
    "choices": [
      {
        "text": "ubururu"
      },
      {
        "text": "umweru"
      },
      {
        "text": "umutuku"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 94,
    "questionText": "Icyapa cyerekana ko inzira giteyeho mu ntangiriro idakomeza kigaragazwa n’ikirango (ikimenyetso) cy’amabara akurikira:",
    "choices": [
      {
        "text": "umukara n’umutuku"
      },
      {
        "text": "umukara n’umweru"
      },
      {
        "text": "umweru n’umutuku",
        "correct": true
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 95,
    "questionText": "Buri modoka yagenewe gutwara abantu, ariko umubare wabo ntarengwa ukaba munsi ya 6 umuyobozi abariwemo igomba kugira imikandara yo kurinda ibyago igenewe aba bakurikira:",
    "choices": [
      {
        "text": "umuyobozi"
      },
      {
        "text": "umugenzi wicaye ku ntebe y’imbere"
      },
      {
        "text": "ishobora no kugira imikandara kuzindi ntebe z’inyuma"
      },
      {
        "text": "ibisubizo byose ni ukuri",
        "correct": true
      }
    ]
  },
  {
    "id": 96,
    "questionText": "Usibye ibinyabiziga by'ingabo z'Igihugu, Ikinyabiziga kigendeshwa na moteri kiriho ibyuma ntamenwa cyangwa ikindi cyose gituma gikoreshwa mu gutera cyangwa mu kwitabara ntigishobora kugenda mu nzira nyabagendwa kidafite uruhushya rwihariye. Urwo ruhushya rutangwa naba bakurikira:",
    "choices": [
      {
        "text": "police y’igihugu"
      },
      {
        "text": "minisitiri ushinzwe gutwara abantu n’ibintu",
        "correct": true
      },
      {
        "text": "minisitiri w’ingabo"
      },
      {
        "text": "ikigo cy’igihugu gishinzwe imisoro n’amahoro."
      }
    ]
  },
  {
    "id": 97,
    "questionText": "Iyo umukumbi ugizwe n’amatungo maremare arenze ane cyangwa amatungo magufi arenze atandatu mu nzira nyabagendwa iyo hatakibona neza kuburyo umuyobozi abona muri m 200 ugomba kugaragazwa kuburyo bukurikira:",
    "choices": [
      {
        "text": "itara ry’urumuri rwera cyangwa rusa n’icunga rihishije imbere y’umukumbi"
      },
      {
        "text": "itara ry’urumuri rutukura cyangwaumuhondo ritwawe inyuma y’umukumbi"
      },
      {
        "text": "A na B ni ibisubizo by’ukuri"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 98,
    "questionText": "Ibinyabiziga biherekeranyije mu butumwa ntibishobora gutonda uburebure burenga umurongo wa m 500. Iyi bibaye bityo ibinyabiziga biherekeranye mu butumwa bishobora kugabanwamo amatsinda atonze umurongo atarengeje m 50 z’uburebure kdi hagati yayo hakaba byibura m 50 ariko ibyo ntibikurikizwa kubinyabiziga bikurikira:",
    "choices": [
      {
        "text": "ibinyabiziga bya police biherekeranyije"
      },
      {
        "text": "ibinyabiziga by’abasirikare biherekeranyije mu nsisiro",
        "correct": true
      },
      {
        "text": "A na B ni ibisubizo by’ukuri"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 99,
    "questionText": "Iyo ikinyabiziga gikururwa n’inyamaswa nacyo gikuruye ikindi uburebure bw’ibikururwa bukaba burenga m 18 hatabariwemo icyo kinyabiziga cya mbere kiziritseho hagomba ibi bikurikira:",
    "choices": [
      {
        "text": "umuherekeza w’ikinyabiziga cya kabiri",
        "correct": true
      },
      {
        "text": "abaherekeza babiri"
      },
      {
        "text": "A na B ni ibisubizo by’ukuri"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 100,
    "questionText": "Ibinyabiziga bikurikira ntibitegetswe kugira ibimenyetso bibyerekana iyo byambukiranya umuhanda cyangwa bigenda ku ruhande rwawo:",
    "choices": [
      {
        "text": "ibinyabiziga bigendwamo n’abana"
      },
      {
        "text": "ibinyabiziga bigendwamo n’abamugaye"
      },
      {
        "text": "A na B ni ibisubizo by’ukuri",
        "correct": true
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 101,
    "questionText": "Icyapa cy’inyongera kigaragaza ikibanza cy’ingando cyangwa cy’abantu benshi bagendera ku nyamaswa kirangwa n’amabara akurikira:",
    "choices": [
      {
        "text": "ubururu, umweru n’umukara",
        "correct": true
      },
      {
        "text": "umukara umweru n’umuhondo"
      },
      {
        "text": "icyatsi kibisi, umuhondo n’ikirango cy’umukara"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 102,
    "questionText": "Icyapa cyerekana ahantu amategeko y’ Umuhanda urombeje w’ibice byinshi atangirira gukurikizwa, kirangwa n’ibirango (ibimenyetso) by’amabara akurikira:",
    "choices": [
      {
        "text": "umweru n’umukara"
      },
      {
        "text": "umweru n’umutuku"
      },
      {
        "text": "umweru n’umuhondo"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 103,
    "questionText": "Igihe ikorwa ry’imirimo ribangamiye cyane cyangwa buke uburyo bwo kugenda mu nzira nyabagendwa, ahakorerwa imirimo hagaragazwa ku buryo bukurikira:",
    "choices": [
      {
        "text": "icyapa cyera cya mpande enye, zingana zifite uruhande rwa metero 0.30"
      },
      {
        "text": "uruzitiro ruri ku mpera y’iburyo"
      },
      {
        "text": "A na B ni ibisubizo by’ukuri"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 104,
    "questionText": "Iyo mu muhanda, imirimo yihariye ubugari butuma abayobozi bagomba kuva mu mwanya wabo usanzwe kugirango bakomeze urugendo, ahategetswe kunyurwa hagaragazwa n’ikimenyetso gishyirwa aho imirimo irangirira mu ruhande rugenderwamo. Icyo kimenyetso kirangwa n’amabara akurikira:",
    "choices": [
      {
        "text": "ubuso bw’ubururu ikirango cy’umweru",
        "correct": true
      },
      {
        "text": "umuzenguruko w’umutuku, ubuso umweru n’ikirango cy’umukara"
      },
      {
        "text": "umuzenguruko w’umutuku, ubuso mu ibara ryera, ikirango mu ibara ry’umutuku n’umukara"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 105,
    "questionText": "Icyapa cyerekana ko hari amabwiriza yihariye mu buryo bwo kugendera mu cyambu cyangwa ku kibuga cy’indege giteye ku buryo bukurikira:",
    "choices": [
      {
        "text": "ishusho mpandeshatu, ubuso mu ibara ryera, ikirango mu ibara ry’umukara"
      },
      {
        "text": "ishusho mpandenye, ubuso mu ibara ry’ubururu n’ikirango kiri mu ibara ryera",
        "correct": true
      },
      {
        "text": "ishusho y’uruziga mu ibara ry’ubururu ni ikirango kiri mu ibara ryera"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 106,
    "questionText": "Nijoro igihe ijuru rikeye, itara ribonesha icyapa kiranga numero y’ikinyabiziga rigomba gutuma izo numero zisomerwa nibura mu ntera ikurikira:",
    "choices": [
      {
        "text": "M 150"
      },
      {
        "text": "M 50"
      },
      {
        "text": "M 20",
        "correct": true
      },
      {
        "text": "M 10"
      }
    ]
  },
  {
    "id": 107,
    "questionText": "Ibyapa byerekana icyago cyidahoraho kandi bigenewe kwerekana aho bagana cyangwa aho berekeza umuhanda nk’igihe cy’impanuka cyangwa hari imirimo ikorwa mu muhanda birangwa n’amabara akurikira:",
    "choices": [
      {
        "text": "umweru n’umukara"
      },
      {
        "text": "umweru n’umuhondo"
      },
      {
        "text": "ubuso bw’umweru gusa"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 108,
    "questionText": "Birabujijwe kubangamira imigendere isanzwe y’ibindi binyabiziga kubera ibi bikurikira:",
    "choices": [
      {
        "text": "kugabanya umuvuduko kuburyo budasanzwe"
      },
      {
        "text": "gukacira feri bidatewe no kwirinda ibyago"
      },
      {
        "text": "A na B ni ibisubizo by’ukuri",
        "correct": true
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 109,
    "questionText": "Iyo kuva bwije kugeza bukeye cyangwa bitewe n’uko ibihe bimeze bitagishoboka kubona neza muri m 200, mu nzira nyabagendwa, romoruki iziritse kuri velomoteri cyangwa ipikipiki idafite akanyabiziga ku ruhande, uretse velomoteri idafite umuyobozi, kandi uburumbarare bwayo, cyangwa bw’ibyo yikoreye bukaba butuma itara ry’ikinyabiziga biyikurura ritagaragara, iyo romoruki igaragazwa ku buryo bukurikira:",
    "choices": [
      {
        "text": "itara ryera riri kuri romoruki inyuma"
      },
      {
        "text": "itara ry’umuhondo riri kuri romoruki inyuma"
      },
      {
        "text": "itara risa n’icunga riri kuri romoruki inyuma"
      },
      {
        "text": "ibi bisubizo byose nibyo",
        "correct": true
      }
    ]
  },
  {
    "id": 110,
    "questionText": "Amatara maremare y’ikinyabiziga agomba kuzimwa mu bihe bikurikira:",
    "choices": [
      {
        "text": "iyo umuhanda umurikiwe hose kandi umuyobozi ashobora kubona nibura mu ntera ingana na metero 200"
      },
      {
        "text": "iyo ikinyabiziga gikurikiye mu ntambwe zitagera muri m100 keretse iyo umuyobozi wacyo ashaka kunyura kucyo akurikiye acana azimya vuba vuba amatara maremare"
      },
      {
        "text": "A na B ni ibisubizo by’ukuri",
        "correct": true
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 111,
    "questionText": "Iyo akanyabiziga gasunikwa cyangwa ibyo gatwaye bidatuma umuyobozi abona neza imbere ye, uwo muyobozi agomba gukora ibi bikurikira:",
    "choices": [
      {
        "text": "gushaka umuherekeza"
      },
      {
        "text": "gukurura ikinyabiziga cye",
        "correct": true
      },
      {
        "text": "A na B ni ibisubizo by’ukuri"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 112,
    "questionText": "Uretse igihe hari amategeko yihariye akurikizwa muri ako karere cyangwa imitunganyirize bwite y’aho, ikinyabiziga cyose cyangwa inyamaswa ihagaze umwanya muto cyangwa munini igomba kuba iri aha hakurikira:",
    "choices": [
      {
        "text": "mu kaboko k’iburyo hakurikijwe aho yaganaga uretse igihe ari mu muhanda w’icyerekezo kimwe"
      },
      {
        "text": "ahegereye bishobotse akayira k’abanyamaguru iyo umuhanda ugafite ariko umwanya w’ibiziga n’akayira ntube urenga santimetero 50"
      },
      {
        "text": "A na B ni ibisubizo by’ukuri",
        "correct": true
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 113,
    "questionText": "Iyo ikinyabiziga gihagaritswe n’ijoro ku buryo abayobozi bakigana badashobora kumenya ko kibabereye imbogamizi, kigomba kurangirwa kure n’ikimenyetso cyabigenewe kiri ahantu hagaragara kugirango kiburire hakiri kare abandi bayobozi baza bagisanga, ariko ntibireba ibinyabiziga bikurikira:",
    "choices": [
      {
        "text": "velomoteri"
      },
      {
        "text": "ipikipiki idafite akanyabiziga ku ruhande"
      },
      {
        "text": "A na B ni ibisubizo by’ukuri",
        "correct": true
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 114,
    "questionText": "Abanyamaguru batatanye cyangwa bagize udutsiko tudafatanyije gahunda kdi batanayobowe n’umwarimu bategetswe kunyura mu tuyira turi ku mpande z’umuhanda no ku nkengero zigiye hejuru uretse ubutaka butsindagiye butandukanya imihanda ibiri bwo kunyurwamo gusa n’aba bakurikira:",
    "choices": [
      {
        "text": "abanyamaguru bashaka guhagarara akanya gato igihe bambukiranya umuhanda",
        "correct": true
      },
      {
        "text": "abanyamaguru bagize udutsiko tw’abantu benshi"
      },
      {
        "text": "A na B ni ibisubizo by’ukuri"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 115,
    "questionText": "Ibinyabiziga biherekeranyije mu butumwa ntibishobora gutonda uburebure burenga umurongo wa m 500, iyo bibaye bityo ibinyabiziga biherekeranyije mu butumwa bishobora kugabanywamo amatsinda atonze umurongo utarengeje ibipimo bikurikira:",
    "choices": [
      {
        "text": "utarengeje m50",
        "correct": true
      },
      {
        "text": "utarengeje m100"
      },
      {
        "text": "utarengeje 150"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 116,
    "questionText": "Ibyapa byereka inkomane y’inzira nyabagendwa n’inzira ya gariyamoshi bigomba iteka kumurikwa cyangwa kugarura urumuri ku buryo bigaragarira nibura mu ntera ikurikira igihe ijuru rikeye:",
    "choices": [
      {
        "text": "m200"
      },
      {
        "text": "m 250"
      },
      {
        "text": "m300"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 117,
    "questionText": "Imbibi ziri ku mpera z’ubwihugiko bw’abanyamaguru kandi ziri mu muhanda kimwe n’imbibi n’ibindi bikoresho bigenewe gutuma bagenda mu muhanda nta muvundo zisigwa irangi ry’ibara rikurikira:",
    "choices": [
      {
        "text": "irangi ry’umuhondo ngarurarumuri",
        "correct": true
      },
      {
        "text": "irangi ry’umweru ngarurarumuri"
      },
      {
        "text": "irangi risa n’icunga rihishije ngarurarumuri"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 118,
    "questionText": "Kugirango ikinyabiziga kive ahantu hari urwondo cyangwa hanyerera bidasanzwe hashobora gukoreshwa uburyo bukurikira:",
    "choices": [
      {
        "text": "inziga zishobora gushyirwaho udushyundu"
      },
      {
        "text": "inziga zishobora gushyirwaho iminyururu irwanya ubunyerere",
        "correct": true
      },
      {
        "text": "A na B ni ibisubizo by’ukuri"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 119,
    "questionText": "Iyo imizigo igizwe n’ibinyampeke, ikawa, amakara, ubwatsi bw’amatungo bidahambiriye, ubugari bwayo bushobora kugera kuri m2 na cm75 ariko iyo iyo mizigo ijyanwa mu karere katarenga km25 uvuye aho yapakiriwe, usibye mu nsisiro, ubugari bwayo bushobora kugera ku bipimo bikurikira:",
    "choices": [
      {
        "text": "m4"
      },
      {
        "text": "m3 na cm50"
      },
      {
        "text": "m3",
        "correct": true
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 120,
    "questionText": "Mu mujyi no ku mihanda y’igihugu igenwa na minisitiri ushinzwe gutwara abantu n’ibintu, ubwikorere ntarengwa ku ikamyo iyo ariyo yose ntibushobora kurenga ibipimo bikurikira:",
    "choices": [
      {
        "text": "toni 10"
      },
      {
        "text": "toni 16"
      },
      {
        "text": "toni 24"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 121,
    "questionText": "Iyo bitewe n’imiterere y’ahantu intera itandukanya icyapa n’ahantu habi iri munsi ya m150 ku buryo bugaragara, iyo ntera yerekanishwa icyapa cy’inyongera giteye ku buryo bukurikira:",
    "choices": [
      {
        "text": "kare ifite ubuso bw’ibara ryera"
      },
      {
        "text": "urukiramende rufite ubuso bw’ibara ryera",
        "correct": true
      },
      {
        "text": "mpandeshatu ifite umuzenguruko utukura"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 122,
    "questionText": "Nijoro, amatara yo kubisikana y’ibara ryera cyangwa y’umuhondo agomba, igihe ijoro rikeye kumurika mu muhanda nibura mu ntera ikurikira:",
    "choices": [
      {
        "text": "m100"
      },
      {
        "text": "m50"
      },
      {
        "text": "m40",
        "correct": true
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 123,
    "questionText": "Ikintu cyose cyatuma hahindurwa ibyanditse bireba nyirikarita cyangwa ibiranga ikinyabiziga kigomba kumenyeshwa ibiro by’umusoro haba mu magambo cyangwa mu ibaruwa ishinganye ibyo bikorwa mu gihe kingana gute:",
    "choices": [
      {
        "text": "mu mezi 2"
      },
      {
        "text": "mu kwezi kumwe"
      },
      {
        "text": "mu minsi cumi n’itanu"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 124,
    "questionText": "Kugirango berekane ahantu habi cyane, hakoreshwa ikimenyetso cy’itara ry’umuhondo rimyasa, rivuga uburenganzira bwo gutambuka icyo kimenyetso barushijeho kwitonda. Ese icyo kimenyetso gihindura iki ku mategeko agenga gutambuka mbere:",
    "choices": [
      {
        "text": "ntacyo gihindura",
        "correct": true
      },
      {
        "text": "abo rireba nibo batambuka mbere"
      },
      {
        "text": "abatwaye ibinyabiziga binini nibo batambuka mbere"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 125,
    "questionText": "Romoruki zifite ubugari ntarengwa bwa sentimetero 80 zishobora gushyirwaho akagarurarumuri kamwe gusa iyo zikuruwe n’ibinyabiziga bikurikira:",
    "choices": [
      {
        "text": "velomoteri"
      },
      {
        "text": "ipikipiki ifite akanyabiziga kuruhande"
      },
      {
        "text": "igare"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 126,
    "questionText": "Amatara maremare y’ibara ryera cyangwa ry’umuhondo agomba nijoro igihe ijuru rikeye kumurika mu ntera ikurikira ku binyabiziga bifite moteri itarengeje ingufu zigera kuri sentimetero kibe 125",
    "choices": [
      {
        "text": "m100"
      },
      {
        "text": "m75",
        "correct": true
      },
      {
        "text": "m25"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 127,
    "questionText": "Iyo kuva bwije kugeza bukeye cyangwa bitewe n’uko ibintu bimeze bitagishoboka kubona muri m 200, ibinyabiziga cyangwa imitwaro bifite ubugari burenga m 2.50 iyo bigenda mu nzira nyabagendwa bigaragazwa ku buryo bukurikira:",
    "choices": [
      {
        "text": "inyuma ni amatara abiri atukura"
      },
      {
        "text": "iyo bibaye ngombwa no ku mpera y’amabondo y’ikinyabiziga cyangwa y’imitwaro ni itara ndangaburumbarare risa n’icunga rihishije cyangwa ry’umuhondo"
      },
      {
        "text": "A na B ni ibisubizo by’ukuri",
        "correct": true
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 128,
    "questionText": "Igice cy’umuhanda kiri hakurya y’umurongo mugari wera udacagaguye ugaragaza inkombe mpimbano y’umuhanda kiba kigenewe ibi bikurikira:",
    "choices": [
      {
        "text": "guhagararwamo umwanya muto gusa"
      },
      {
        "text": "guhagararwamo umwanya muto n’umunini ndetse no kumihanda irombereje y’ibisate byinshi n’imihanda y’imodoka"
      },
      {
        "text": "A na B ni ibisubizo by’ukuri"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 130,
    "questionText": "Iminyururu n’ibindi byuma bifashisha bishobora kuvanwaho cyangwa binagana, hatabariwemo ibimenyetso byerekana ibyerekezo bigomba gutungurwa ku kinyabiziga ku buryo igihe byizunguza bitarenga impande zihera uburumbarare bw’ikinyabiziga kandi ibyo byuma bifashisha ntibigomba gukururuka ku butaka ariko ibyo ntibibujijwe ku binyabiziga bikurikira:",
    "choices": [
      {
        "text": "imashini zihinga",
        "correct": true
      },
      {
        "text": "ibinyabiziga bitwaye ibintu bidashobora gufata inkongi"
      },
      {
        "text": "A na B ni ibisubizo by’ukuri"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 131,
    "questionText": "Ku binyabiziga cyangwa ibinyabiziga bikururana igice kirenga ku biziga ntigishobora kurenga ibipimo bikurikira:",
    "choices": [
      {
        "text": "iby’inyuma : m3"
      },
      {
        "text": "iby’imbere: m2.70",
        "correct": true
      },
      {
        "text": "A na B ni ibisubizo by’ukuri"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 132,
    "questionText": "Uretse bibonewe uruhushya, ubundi birabujijwe gushyira no gukomeza kugendesha imodoka cyangwa romoruki mu nzira nyabagendwa iyo uburemere bw’ibyikorewe burenze uburemere ntarengwa bwemewe n’ikarita iranga ikinyabiziga ariko ibyo ntibikurikizwa ku binyabiziga bikurikira:",
    "choices": [
      {
        "text": "ibinyabiziga bya police"
      },
      {
        "text": "ibinyabiziga bihinga"
      },
      {
        "text": "imashini zikoreshwa mu kubaka imihanda",
        "correct": true
      },
      {
        "text": "ibisubizo byose ni ukuri"
      }
    ]
  },
  {
    "id": 133,
    "questionText": "Gushyira mu muhanda ku buryo budasanzwe ibinyabiziga bikururana birenze bitatu bigomba gutangirwa uruhusa, uretse imashini ihinga iyo zigenda uregendo rutarenze km 25, ibinyabiziga bikururana bitwaye ibyamamazwa n’ibindi biteganwa n’iri teka ariko igiteranyo cy’uburebure bw’ibyo binyabiziga bikururana ntigishobora kurenga ibipimo bikurikira:",
    "choices": [
      {
        "text": "m50"
      },
      {
        "text": "m35"
      },
      {
        "text": "m25",
        "correct": true
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 134,
    "questionText": "Ibinyamitende itatu bifite moteri bigomba kugira amatara akurikira:",
    "choices": [
      {
        "text": "amatara abiri ndangambere n’amatara abiri ndanganyuma yerekana ko ikinyabiziga gihagaze"
      },
      {
        "text": "utugarurarumuri tubiri"
      },
      {
        "text": "A na B ni ibisubizo by’ukuri",
        "correct": true
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 135,
    "questionText": "Ibyapa bibuza n’ibitegeka bikurikizwa gusa aha hakurikira:",
    "choices": [
      {
        "text": "mu masangano"
      },
      {
        "text": "mu gice cy’inzira nyabagendwa kiri hagati yaho bishinze n’inkomane ikurikiyeho ku ruhande rw’inzira bishinzeho",
        "correct": true
      },
      {
        "text": "ibyo byapa bishyirwaho hakurikijwe intera ibitandukanya"
      },
      {
        "text": "B na C ni ibisubizo by’ukuri"
      }
    ]
  },
  {
    "id": 136,
    "questionText": "Icyapa cy’inyongera kerekana aho bagobokera ibinyabiziga kirangwa n’amabara akurikira:",
    "choices": [
      {
        "text": "ubururu, umweru, umutuku"
      },
      {
        "text": "umweru, umukara, ubururu",
        "correct": true
      },
      {
        "text": "umutuku, umweru n’umukara"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 137,
    "questionText": "Icyapa cyerekana uburebure bw’igice cyatera ibyago cyangwa bw’ahantu amabwiriza y’icyo cyapa agomba gukurikizwa kirangwa n’ubuso n’ibimenyetso bikurikira:",
    "choices": [
      {
        "text": "ubuso umweru, ikimenyetso ubururu"
      },
      {
        "text": "ubuso ubururu, ikimenyetso umweru"
      },
      {
        "text": "ubuso ubururu, ikimenyetso umweru n’umukara"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 138,
    "questionText": "Umurongo w’umuhondo ucagaguye uciye ku nkombe nyayo y’umuhanda, umusezero w’inzira y’abanyamaguru cyangwa w’inkengero y’umuhanda yegutse uvuga ibi bikurikira:",
    "choices": [
      {
        "text": "guhagarara umwanya muto birabujijwe ku burebure bw’uwo murongo"
      },
      {
        "text": "guhagarara umwanya muto n’umunini birabujijwe ku burebure bw’uwo murongo"
      },
      {
        "text": "aho bahagarara umwanya munini cyangwa muto"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 139,
    "questionText": "Ku binyabiziga cyangwa ibinyabiziga bikururana igice kirenga ku biziga ntigishobora kurenga ibipimo bikurikira:",
    "choices": [
      {
        "text": "iby’inyuma m 3.40"
      },
      {
        "text": "iby’imbere m 2.50"
      },
      {
        "text": "A na B ni ibisubizo by’ukuri"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 171,
    "questionText": "Mu migi no ku yindi mihanda y’igihugu igenwa na minisitiri ushinzwe gutwara abantu n’ibintu uburebure ntarengwa kuri buri mitambiko 3 ifungwaho ibiziga bine ni:",
    "choices": [
      {
        "text": "toni 24",
        "correct": true
      },
      {
        "text": "toni 10"
      },
      {
        "text": "toni 16"
      },
      {
        "text": "toni 53"
      }
    ]
  },
  {
    "id": 172,
    "questionText": "Iyo hagati y’uruhande rw’imbere rwa romoruki n’uruhande rw’inyuma rw’ikinyabiziga kiyikurura hari umwanya urenze m 3 ikibizirikanyije kigomba kugaragazwa ku buryo bukurikira iyo amatara y’ikinyabiziga agomba gucanwa:",
    "choices": [
      {
        "text": "agatambaro gatukura gafite nibura cm 50 z’uruhande"
      },
      {
        "text": "itara risa n’icunga rihishije rigaragara mu mbavu igihe ikibizirikanyije kimuritswe",
        "correct": true
      },
      {
        "text": "A na B ni ibisubizo by’ukuri"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 173,
    "questionText": "Itara ryo guhagarara ry’ibara ritukura rigomba kuba ridahumisha, kandi rigomba kugaragarira mu ntera ikurikira:",
    "choices": [
      {
        "text": "nijoro igihe ijuru rikeye nibura muri m 200"
      },
      {
        "text": "ku manywa igihe cy’umucyo nibura muri m50"
      },
      {
        "text": "nijoro nibura muri m 100 igihe ijuru rikeye"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 174,
    "questionText": "Birabujijwe kongera ku mpande z’ikinyabiziga kigendeshwa na moteri cyangwa velomoteri ibi bikurikira:",
    "choices": [
      {
        "text": "imitako"
      },
      {
        "text": "ibintu bifite imigongo cyangwa ibirenga ku mubyimba kandi bishobora gutera ibyago abandi bagenzi"
      },
      {
        "text": "A na B ni ibisubizo by’ukuri",
        "correct": true
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 175,
    "questionText": "Ikintu cyose cyatuma hahindurwa ibyanditswe bireba nyirikarita cyangwa ibiranga ikinyabiziga kigomba kumenyeshwa ibiro by’imisoro haba mu magambo cyangwa mu ibaruwa ishinganye. Ibyo bikorwa mu gihe kingana gute:",
    "choices": [
      {
        "text": "mu minsi 5"
      },
      {
        "text": "mu minsi 8",
        "correct": true
      },
      {
        "text": "mu minsi 15"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 176,
    "questionText": "Kunyuranaho bikorerwa:",
    "choices": [
      {
        "text": "mu ruhande rw’iburyo gusa"
      },
      {
        "text": "igihe cyose ni ibumoso"
      },
      {
        "text": "iburyo iyo unyura ku nyamaswa"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 177,
    "questionText": "Iyo ubugari bw’inzira nyabagendwa igenderwamo n’ibinyabiziga budahagije kugirango bibisikane nta nkomyi abagenzi bategetswe:",
    "choices": [
      {
        "text": "kunyura mu nzira z’impande z’abanyamaguru"
      },
      {
        "text": "guhagarara aho bageze"
      },
      {
        "text": "koroherana",
        "correct": true
      },
      {
        "text": "gukuraho inkomyi"
      }
    ]
  },
  {
    "id": 178,
    "questionText": "Umuyobozi ugenda mu muhanda igihe ubugari bwawo budatuma anyuranaho nta nkomyi ashobora kunyura mu kayira k’abanyamaguru ariko amaze kureba ibi bikurikira:",
    "choices": [
      {
        "text": "umuvuduko w’abanyamaguru"
      },
      {
        "text": "ubugari bw’umuhanda"
      },
      {
        "text": "umubare w’abanyamaguru"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 179,
    "questionText": "Icyapa cyerekana umuvuduko ntarengwa ikinyabiziga kitagomba kurenza gishyirwa ku binyabiziga bifite uburebure ntarengwa bukurikira:",
    "choices": [
      {
        "text": "burenga toni 1"
      },
      {
        "text": "burenga toni 2"
      },
      {
        "text": "burenga toni 24"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 180,
    "questionText": "Iyo nta mategeko awugabanya by’umwihariko, umuvuduko ntarengwa w’amapikipiki mu isaha ni:",
    "choices": [
      {
        "text": "km 25"
      },
      {
        "text": "km 70"
      },
      {
        "text": "km 40"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 181,
    "questionText": "Ahatari mu nsisiro umuvuduko ntarengwa wa velomoteri mu isaha ni:",
    "choices": [
      {
        "text": "km 50",
        "correct": true
      },
      {
        "text": "km 40"
      },
      {
        "text": "km 30"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 182,
    "questionText": "Birabujijwe guhagarara akanya kanini aha hakurikira:",
    "choices": [
      {
        "text": "mu duhanda tw’abanyamagare"
      },
      {
        "text": "mu duhanda twagenewe velomoteri"
      },
      {
        "text": "A na B ni ibisubizo by’ukuri",
        "correct": true
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 183,
    "questionText": "Amatara maremare y’ikinyabiziga agomba kutamurika mu bihe bikurikira:",
    "choices": [
      {
        "text": "iyo umuhanda umurikiwe umuyobozi abasha kureba muri m 200"
      },
      {
        "text": "iyo ikinyabiziga kigiye kubisikana nikindi",
        "correct": true
      },
      {
        "text": "iyo ari mu nsisiro"
      },
      {
        "text": "ibisubizo byose nibyo"
      }
    ]
  },
  {
    "id": 184,
    "questionText": "Ubugari bwa romoruki ikuruwe n’igare cyangwa velomoteri ntiburenza ibipimo bikurikira:",
    "choices": [
      {
        "text": "cm 25"
      },
      {
        "text": "cm 125"
      },
      {
        "text": "cm 45"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 185,
    "questionText": "Uburyo bukoreshwa kugirango ikinyabiziga kigende gahoro igihe feri idakora neza bwitwa:",
    "choices": [
      {
        "text": "feri y’urugendo"
      },
      {
        "text": "feri yo guhagarara"
      },
      {
        "text": "feri yo gutabara",
        "correct": true
      },
      {
        "text": "Nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 186,
    "questionText": "Nta mwanya n’umwe feri ifungiraho ushobora kurekurana n’ibiziga keretse:",
    "choices": [
      {
        "text": "iyo bireba feri y’urugendo"
      },
      {
        "text": "iyo kurekurana ari ibyakanya gato"
      },
      {
        "text": "iyo bireba feri yo guhagarara umwanya munini, ubwo kurekurana bikaba bidashoboka bidakozwe n'umuyobozi"
      },
      {
        "text": "byose ni ibisubizo by’ukuri",
        "correct": true
      }
    ]
  },
  {
    "id": 187,
    "questionText": "Ikinyabiziga ntigishobora kugira amatara arenze abiri y’ubwoko bumwe keretse kubyerekeye amatara akurikira:",
    "choices": [
      {
        "text": "itara ndangamubyimba"
      },
      {
        "text": "itara ryerekana icyerekezo"
      },
      {
        "text": "itara ndangaburumbarare"
      },
      {
        "text": "ibisubizo byose ni ukuri",
        "correct": true
      }
    ]
  },
  {
    "id": 188,
    "questionText": "Itara ndanganyuma rigomba gushyirwa aha hakurikira:",
    "choices": [
      {
        "text": "ku nguni y’iburyo y’ikinyabiziga"
      },
      {
        "text": "ku gice cy’inyuma ku kinyabiziga"
      },
      {
        "text": "ahegereye inguni y’ibumoso y’ikinyabiziga",
        "correct": true
      },
      {
        "text": "ibisubizo byose ni ukuri"
      }
    ]
  },
  {
    "id": 189,
    "questionText": "Nibura ikinyabiziga gitegetswe kugira uduhanagurabirahuri dukurikira:",
    "choices": [
      {
        "text": "2"
      },
      {
        "text": "3"
      },
      {
        "text": "1",
        "correct": true
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 190,
    "questionText": "Ibiziga by’ibinyabiziga bigendeshwa na moteri n’ibya velomoteri kimwe n’ibya romoruki zabyo bigomba kuba byambaye inziga zihagwa zifite amano n’ubujyakuzimu butari munsi ya milimetero imwe ku migongo yabyo yose, n’ubudodo bwabyo ntibugire ahantu na hamwe bugaragara kdi ntibigire aho byacitse bikomeye mu mpande zabyo. Ariko ibyo ntibikurikizwa ku binyabiziga bikurikira:",
    "choices": [
      {
        "text": "ibinyabiziga bidapakiye kdi bitajya birenza umuvuduko wa km 25 mu isaha ahateganye",
        "correct": true
      },
      {
        "text": "ibinyabiziga bya police bijya ahatarenga km 25 uvuye aho biba"
      },
      {
        "text": "A na B ni ibisubizo by’ukuri"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 191,
    "questionText": "Birabujijwe kugenza ibinyabiziga bigendeshwa na moteri na za romoruki zikururwa nabyo, iyo ibiziga byambaye inziga zidahagwa cyangwa inziga zikururuka zifite umubyimba uri hasi ya cm 4. Ariko ibyo ntibikurikizwa ku binyabiziga bikurikira:",
    "choices": [
      {
        "text": "ku binyabiziga by’ingabo"
      },
      {
        "text": "ibinyabiziga bihinga iyo bigendeshwa mu karere katarenga km 25 uvuye aho ziba",
        "correct": true
      },
      {
        "text": "ibinyabiziga bya police"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 192,
    "questionText": "Imirongo yera iteganye n’umurongo ugabanya umuhanda mo kabiri mu burebure bwawo ugaragaza:",
    "choices": [
      {
        "text": "ahanyurwa n’amagare na velomoteri"
      },
      {
        "text": "ahanyurwa n’ingorofani n’ibinyamitende"
      },
      {
        "text": "ahanyurwa n’abanyamaguru",
        "correct": true
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 193,
    "questionText": "Iyo harimo indi myanya birabujijwe gutwara ku ntebe y’imbere y’imodoka abana badafite imyaka ikurikira:",
    "choices": [
      {
        "text": "imyaka 10"
      },
      {
        "text": "imyaka 12",
        "correct": true
      },
      {
        "text": "imyaka 7"
      },
      {
        "text": "nta gisubizocy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 194,
    "questionText": "Iyo ikinyabiziga kitagikora cyangwa cyoherejwe mu mahanga burundu ibyapa ndanga bigomba gukurwaho bikoherezwa mu biro by’imisoro, ibyo bikorwa mu gihe kingana gute:",
    "choices": [
      {
        "text": "ibyumweru bibiri"
      },
      {
        "text": "amezi abiri",
        "correct": true
      },
      {
        "text": "ukwezi kumwe"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 195,
    "questionText": "Inkombe z’inzira nyabagendwa cyangwa z’umuhanda zishobora kugaragazwa n’ibikoresho ngarurarumuri ibyo bikoresho bigomba gushyirwaho ku buryo abagenzi babibona ku buryo bukurikira:",
    "choices": [
      {
        "text": "babona gusa ibumoso bwabo ibyibara ryera"
      },
      {
        "text": "iburyo babona iby’ibara ritukura cyangwa risa n’icunga rihishije gusa"
      },
      {
        "text": "A na B ni ibisubizo by’ukuri",
        "correct": true
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 196,
    "questionText": "Iyo kuyobya umuhanda ari ngombwa bigaragazwa kuva aho uhera no kuburebure bwawo n’icyapa gifite ubuso bw’amabara akurikira:",
    "choices": [
      {
        "text": "umukara"
      },
      {
        "text": "umweru"
      },
      {
        "text": "umutuku"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 197,
    "questionText": "Ku mihanda yagenwe na minisitiri ubifite mu nshingano ibyapa biburira n’ibyapa byerekana bigomba kugaragazwa kuva bwije kugera bukeye n’urumuri rwihariye cyangwa amatara ku mihanda cyangwa ibintu ngarurarumuri. Igihe ijuru rikeye intera y’ahagaragara igomba kuba nibura:",
    "choices": [
      {
        "text": "m50"
      },
      {
        "text": "m120"
      },
      {
        "text": "m150"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 198,
    "questionText": "Ibizirikisho by’iminyururu cyangwa by’insinga kimwe n’ibindi by’ingoboka bikoreshwa gusa igihe nta kundi umuntu yabigenza kandi nta kindi bigiriwe uretse gusa kugirango ikinyabiziga kigere aho kigomba gukorerwa kandi nturenze na rimwe km 20 mu isaha, ibyo bizirikisho bigaragazwa ku buryo bukurikira:",
    "choices": [
      {
        "text": "agatambaro gatukura kuri cm 50 z’umuhanda"
      },
      {
        "text": "ikimenyetso cy’itara risa n’icunga rihishije"
      },
      {
        "text": "icyapa cyera cya mpande enye zingana gifite cm 30 kuri buri ruhande",
        "correct": true
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 199,
    "questionText": "Uretse mu mijyi, kuyindi mihanda yagenywe na minisiteri ushinzwe gutwara ibintu n’abantu, uburemere ntarengwa bwemewe ku binyabiziga bifatanye bifite imitambiko itatu ni:",
    "choices": [
      {
        "text": "toni 12",
        "correct": true
      },
      {
        "text": "toni 16"
      },
      {
        "text": "toni 10"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 200,
    "questionText": "Uretse mu mujyi kuyindi mihanda yajyenwe na minisitiri ushinzwe gutwara abantu n’ibintu, uburemere ntarengwa ku binyabiziga bifite imitambiko itatu cyangwa irenga hatarimo mukuzungu ni :",
    "choices": [
      {
        "text": "toni 10"
      },
      {
        "text": "toni 12"
      },
      {
        "text": "toni 15"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 201,
    "questionText": "Iyo nta mategeko awugabanya by’umwihariko umuvuduko ntarengwa ku modoka zidafite ibizibuza kwiceka kuberako ariko zakozwe ni:",
    "choices": [
      {
        "text": "km 70 mu isaha"
      },
      {
        "text": "km 40 mu isaha"
      },
      {
        "text": "km 25 mu isaha",
        "correct": true
      },
      {
        "text": "km20 mu isaha"
      }
    ]
  },
  {
    "id": 202,
    "questionText": "Iyo nta mategeko awugabanya by’umwihariko umuvuduko ntarengwa ku modoka zidafite ibizibuza kwiceka kuberako ariko zakozwe ni:",
    "choices": [
      {
        "text": "km 20 mu isaha"
      },
      {
        "text": "km 40 mu isaha"
      },
      {
        "text": "km 35 mu isaha"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 203,
    "questionText": "Ikinyabiziga kibujijwe guhagarara akanya kanini aha hakurikira :",
    "choices": [
      {
        "text": "imbere y’ahantu nyabagendwa hinjirwa n’ahasohokerwa n’abantu benshi",
        "correct": true
      },
      {
        "text": "mu muhanda aho ugabanyijemo ibisate bigaragazwa n’imirongo icagaguye"
      },
      {
        "text": "A na B ni ibisubizo by’ukuri"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 204,
    "questionText": "Iyo kuva bwije kugeza bukeye cyangwa bitewe n’uko ibihe bimeze nk’igihe cy’ibihu cyangwa cy’imvura bitagishoboka kubona neza muri m 200, udutsiko twose tw’abanyamaguru nk’imperekerane cyangwa udutsiko tw’abanyeshuri bari ku murongo bayobowe n’umwarimu, iyo bagenda mu muhanda ku isonga hakaba hari abantu barenze umwe bagomba kugaragazwa kuburyo bukurikira:",
    "choices": [
      {
        "text": "imbere ni itara ry’umuhondo ritwariwe ibumoso"
      },
      {
        "text": "inyuma ni itara ryumutuku ritwariwe ibumoso n’umuntu uri ku murongo w’inyuma hafi y’umurongo ugabanya umuhanda mo kabiri",
        "correct": true
      },
      {
        "text": "A na B ni ibisubizo by’ukuri"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 205,
    "questionText": "Imburira zimurika zemerewe gukoreshwa kugirango bamenyeshe umuyobozi ko bagiye kumunyuraho aha hakurikira:",
    "choices": [
      {
        "text": "mu nsisiro cyangwa ahandi hose",
        "correct": true
      },
      {
        "text": "ahegereye inyamaswa zikurura"
      },
      {
        "text": "hafi y’amatungo"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 206,
    "questionText": "Ibinyabiziga bifite ubugari bufite ibipimo bikurikira bigomba kugira amatara ndangaburumbarare",
    "choices": [
      {
        "text": "metero 3"
      },
      {
        "text": "metero 2 na cm 50"
      },
      {
        "text": "metero 1 na cm 10"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 207,
    "questionText": "Nta tara na rimwe cyangwa akagarurarumuri bishobora kuba bifunze kuburyo igice cyabyo cyo hasi cyane kimurika kiba kiri hasi y’ibipimo bikurikira kuva ku butaka igihe ikinyabiziga kidapakiye:",
    "choices": [
      {
        "text": "cm 30"
      },
      {
        "text": "cm 20"
      },
      {
        "text": "cm 50"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 208,
    "questionText": "Ahari hejuru cyane y’ubuso bumurika h’amatara ndangambere na ndanganyuma ntihashobora kuba aharenze ibipimo bikurikira hejuru y’ubutaka iyo ikinyabiziga kidapakiye:",
    "choices": [
      {
        "text": "m1 na cm 50"
      },
      {
        "text": "m1 na cm 75"
      },
      {
        "text": "m 1 na cm 80"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 209,
    "questionText": "Buri modoka cyangwa buri romoruki ikuruwe n’iyo modoka bishobora kugira itara risa n’icyatsi kibisi bituma umuyobozi yerekana ko yabonye ikimenyetso cy’uwitegura kumunyuraho. Iryo tara rigomba gushyirwa aha hakurikira:",
    "choices": [
      {
        "text": "hafi y’inguni y’ibumoso bw’ikinyabiziga"
      },
      {
        "text": "inyuma hafi y’impera y’ibumoso bw’ikinyabiziga",
        "correct": true
      },
      {
        "text": "inyuma ahegereye inguni y’iburyo"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 210,
    "questionText": "Ubugari bw’imizigo yikorewe n’ipikipiki ifite akanyabiziga ko kuruhande kimwe n’ubwa romoruki ikuruwe na bene icyo kinyabiziga ntibushobora kurenza ibipimo bikurikira ku bugari bw’icyo kinyabiziga kidapakiye:",
    "choices": [
      {
        "text": "m 1.25"
      },
      {
        "text": "cm 30",
        "correct": true
      },
      {
        "text": "cm 75"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 211,
    "questionText": "Mu gihe telefone yawe ihamagawe utwaye imodoka wakora iki?",
    "choices": [
      {
        "text": "Kwitaba cyangwa guhagarara ako kanya"
      },
      {
        "text": "kutayitaba"
      },
      {
        "text": "Gushyira imodoka iruhande ukayitaba",
        "correct": true
      },
      {
        "text": "B na c ni ibisubizo byukuri"
      }
    ]
  },
  {
    "id": 212,
    "questionText": "Mu gihe telefone yawe ihamagawe utwaye imodoka wakora iki?",
    "choices": [
      {
        "text": "Kwitaba cyangwa guhagarara ako kanya"
      },
      {
        "text": "kutayitaba"
      },
      {
        "text": "Gushyira imodoka iruhande ukayitaba",
        "correct": true
      },
      {
        "text": "B na c ni ibisubizo byukuri"
      }
    ]
  },
  {
    "id": 213,
    "questionText": "Niki wakora mbere y’uko uhindura icyerekezo?",
    "choices": [
      {
        "text": "Gutanga ikimenyetso cy’ukuboko no gukoresha amatara ndangacyerekezo."
      },
      {
        "text": "Itegereze neza niba icyapa kikwemerera guhindura icyerekezo."
      },
      {
        "text": "A na B n’ibisubizo by’ukuri",
        "correct": true
      },
      {
        "text": "Nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 214,
    "questionText": "Niki muribi wakwirinda mugihe ushaka kunyuranaho?",
    "choices": [
      {
        "text": "Nyuma y’ikona ugategereza kubona uburyo bwo kunyuranaho.",
        "correct": true
      },
      {
        "text": "Mumuhanda w’icyerekezo kimwe"
      },
      {
        "text": "Aho utagomba kurenza ibirometero 30 mu isaha."
      },
      {
        "text": "Ugeze mumuhanda utaringaniye neza"
      }
    ]
  },
  {
    "id": 214,
    "questionText": "Niki wakora mugihe usanze mu bimenyetso bimurika harimo ibara ry’umuhondo.",
    "questionImage": "/image/img66.jpg",
    "choices": [
      {
        "text": "Kongera umuvuduko"
      },
      {
        "text": "Kugumana umuvuduko wari uriho."
      },
      {
        "text": "Kwitegura guhagarara.",
        "correct": true
      },
      {
        "text": "Gufata feri cyane."
      }
    ]
  },
  {
    "id": 215,
    "questionText": "Mugihe ukurikiranye na romoruki,n’ukubera iki ugomba gusiga umwanya uhagije hagati yawe nayo?",
    "choices": [
      {
        "text": "Bituma ubasha gukata ikorosi vuba."
      },
      {
        "text": "Bifasha umuyobozi wa romoruki kukurebera mundorerwamo.",
        "correct": true
      },
      {
        "text": "Bifasha romoruki guhagarara byoroshye."
      },
      {
        "text": "Bikurinda umuyaga."
      }
    ]
  },
  {
    "id": 216,
    "questionText": "Utegereje gukata iburyo kwiherezo ry’umuhanda. Ukingirijwe nimodoka ihagaze. Niki wakora?",
    "choices": [
      {
        "text": "Guhagarara hanyuma ukagenda gake gake witonze kugezaho ureba neza.",
        "correct": true
      },
      {
        "text": "Kwihuta wegera imbere aho ushobora kureba ugafunga ikindi cyerekezo."
      },
      {
        "text": "Gutegereza abanyamaguru bakakumenyesha ko ntakibazo wakata."
      },
      {
        "text": "Guhindukiza imodoka vuba kugirango ushake indi nzira wakoresha."
      }
    ]
  },
  {
    "id": 217,
    "questionText": "Mugihe uri murugendo rurerure mumuhanda urombereje w’ibice byinshi. Niki wakora mugihe wumva utangiye kugira ibitotsi?",
    "choices": [
      {
        "text": "Gucuranga umuziki cyane."
      },
      {
        "text": "Kwihuta cyane kugirango usoze urugendo vuba."
      },
      {
        "text": "Kuva mumuhanda urombereje w’ibice byinshi, ugahagarara ahantu hatekanye.",
        "correct": true
      },
      {
        "text": "Ntagisubizo cy’ukuri kirimo."
      }
    ]
  },
  {
    "id": 218,
    "questionText": "Kuki ugomba gucana amatara mugihe hatangiye kwijima?",
    "choices": [
      {
        "text": "Kugirango akerekanamuvuduko kagaragare neza."
      },
      {
        "text": "Kugirango abandi biborohere kukubona.",
        "correct": true
      },
      {
        "text": "Kugira ngo ujyane nabandi bayobozi bibinyabiziga."
      },
      {
        "text": "Kuko amatara yo ku muhanda ari kwaka"
      }
    ]
  },
  {
    "id": 219,
    "questionText": "Urimo kugenda munzira nyabagendwa ni gute wanyura k’umuyobozi w’igare?",
    "choices": [
      {
        "text": "Kuvuza ihoni mugihe umunyuraho"
      },
      {
        "text": "Kumunyuraho umwegereye"
      },
      {
        "text": "Gusiga umwanya uhagije igihe umunyuraho",
        "correct": true
      },
      {
        "text": "Kugabanya umuvuduko mbere y’uko umunyuraho"
      }
    ]
  },
  {
    "id": 220,
    "questionText": "Niki wakora igihe utabona neza usubira inyuma",
    "choices": [
      {
        "text": "Kumanura ikirahure cy’imodoka urebe inyuma"
      },
      {
        "text": "Gufungura umuryango w’imodoka ureba inyuma"
      },
      {
        "text": "Gushaka umuntu uri hanze y’ikinyabiziga ukuyobora",
        "correct": true
      },
      {
        "text": ". Gukoresha akarebanyuma kakwegereye"
      }
    ]
  },
  {
    "id": 220,
    "questionText": "Igihe ukurikiwe n’ikinyabiziga gitwara abarwayi gicanye amatara y’intabaza arabagirana. Wakora iki?",
    "choices": [
      {
        "text": "Kugihigamira ako kanya ndetse byaba ngombwa ugahagarara",
        "correct": true
      },
      {
        "text": "Kongera umuvuduko kugirango ugisige"
      },
      {
        "text": "Kugumana umuvuduko wari ufite"
      },
      {
        "text": "Guhagarara bitunguranye mu muhanda"
      }
    ]
  },
  {
    "id": 220,
    "questionText": "Wifuza kugana ibumoso imbere yawe. kubera iki ushaka umwanya mwiza kandi uhagije?",
    "choices": [
      {
        "text": "Kwemerera abandi bayobozi b’ibinyabiziga kugutambukaho"
      },
      {
        "text": "Kugirango ubone neza ikindi kerekezo ushaka gufata"
      },
      {
        "text": "Kugirango ufashe abandi bose bakoresha umuhanda icyo ushaka gukora",
        "correct": true
      },
      {
        "text": "Kwemerera abandi bayobozi b’ibinyabiziga kukunyura muruhande rw’ibumoso"
      }
    ]
  },
  {
    "id": 223,
    "questionText": "Utwaye ikinyabiziga inyuma ya romoruki. Umuyobozi wayo akaguha ikimenyetso cyo kumutambukaho iburyo kandi ugana ibumoso, wakora iki?",
    "choices": [
      {
        "text": "Kugabanya umuvuduko ukareka akagenda",
        "correct": true
      },
      {
        "text": "Gukomeza iburyo bwawe"
      },
      {
        "text": "Kumunyuraho iburyo bwe"
      },
      {
        "text": "Kugumana umuvuduko wari ufite ukamuvugiriza ihoni"
      }
    ]
  },
  {
    "id": 225,
    "questionText": "Wegereye inzira y’abanyamaguru ugasanga bategereje kwambuka. Ugomba gukora iki?",
    "choices": [
      {
        "text": "Kureka abakuze n’abafite ubumuga bagatambuka mbere"
      },
      {
        "text": "Kugabanya umuvuduko witegura guhagarara",
        "correct": true
      },
      {
        "text": "Gukoresha amatara abamenyesha kwambuka"
      },
      {
        "text": "Gukoresha ibimenyetso byamaboko bibemerera kwambuka"
      }
    ]
  },
  {
    "id": 224,
    "questionText": "Uri hafi kunyura k’umuyobozi w’ikinyamitende. Muri ibi byapa bikurikira nikihe wakwitondera?",
    "choices": [
      {
        "image": "/image/img72.jpg"
      },
      {
        "image": "/image/img74.jpg"
      },
      {
        "image": "/image/img75.jpg",
        "correct": true
      },
      {
        "image": "/image/img79.jpg"
      }
    ]
  },
  {
    "id": 227,
    "questionText": "Kumanywa urumuri rudahagije hatabona neza. Ni ayahe matara y’urugendo ugomba gukoresha.",
    "choices": [
      {
        "text": "Amatara yo kubisika na matara kamena-bihu."
      },
      {
        "text": "Amatara kamena-bihu y’imbere",
        "correct": true
      },
      {
        "text": "Amatara yo kubisikana"
      },
      {
        "text": "Amatara kamena-bihu y’inyuma"
      }
    ]
  },
  {
    "id": 227,
    "questionText": "Niyihe mpamvu ituma tugomba kugabanya umuvuduko mugihe hari ibihu?",
    "choices": [
      {
        "text": "Igihe feri idakora"
      },
      {
        "text": "Igihe uhumishijwe n’amatara yo kubisikana"
      },
      {
        "text": "Igihe moteri imara ngo izime"
      },
      {
        "text": "Nuko biba bitoroshye kubona ikiri imbere",
        "correct": true
      }
    ]
  },
  {
    "id": 228,
    "questionText": "Niki ugomba gukora igihe uhagaze ku muhanda igihe cy’ibihu?",
    "choices": [
      {
        "text": "Kureka amatara ndanga akaguma yaka",
        "correct": true
      },
      {
        "text": "Kureka amatara yo k,ubisikana na kamena-bihu akaguma yaka"
      },
      {
        "text": "Kureka amatara yo kubisikana akaguma yaka"
      },
      {
        "text": "Kureka amatara y’urugendo akaguma yaka"
      }
    ]
  },
  {
    "id": 229,
    "questionText": "Iki cyapa cyivuga iki?",
    "questionImage": "/image/img79.jpg",
    "choices": [
      {
        "text": "Umuvuduko ntarengwa 30 km/h"
      },
      {
        "text": "Iherezo ry’umuvuduko muke ntarengwa utegetswe.",
        "correct": true
      },
      {
        "text": "Iherezo ry’Umuvuduko muto utegetswe"
      },
      {
        "text": "Umuvuduko uri hejuru 30 km/h"
      }
    ]
  },
  {
    "id": 230,
    "questionText": "Icyapa gikurikira kivuze iki?",
    "questionImage": "/image/img81.jpg",
    "choices": [
      {
        "text": "Ntihanyurwa"
      },
      {
        "text": "Birabujijwe guhagarara umwanya munini",
        "correct": true
      },
      {
        "text": "Umuvuduko utarengeje"
      },
      {
        "text": "Inzira yabanyeshuli"
      }
    ]
  },
  {
    "id": 231,
    "questionText": "Inzira nyabagendwa ifite ibyerekezo bibiri, uruhande rw’ibumoso rudufasha iki?",
    "questionImage": "/image/img84.jpg",
    "choices": [
      {
        "text": "Kunyuranaho gusa, ntugaruke iburyo bwawe"
      },
      {
        "text": "Kunyuranaho cyangwa ugakatira ibumoso",
        "correct": true
      },
      {
        "text": "Hemerewe kugenda imodoka zihuta gusa"
      },
      {
        "text": "Gukatira iburyo gusa utanyuranyeho"
      }
    ]
  },
  {
    "id": 232,
    "questionText": "Ni hehe byemewe kunyuranaho munzira y’icyerekezo kimwe?",
    "choices": [
      {
        "text": "ku gisate kiri Ibumoso bw’umuhanda",
        "correct": true
      },
      {
        "text": "Kunyuranaho ntibyemewe"
      },
      {
        "text": "Ku gisate kiri iburyo bw’umuhanda gusa"
      },
      {
        "text": "Ku gisate cy’ibumoso cyangwa iburyo"
      }
    ]
  },
  {
    "id": 233,
    "questionText": "N’uwuhe muntu ushobora gusimbura ibimenyetso byo mumuhanda, dutegetswe kubaha?",
    "choices": [
      {
        "text": "Umuyobozi w’ikinyamitende"
      },
      {
        "text": "Umunyamaguru"
      },
      {
        "text": "Umukozi ubifitiye ububasha",
        "correct": true
      },
      {
        "text": "Umuyobozi wa bisi"
      }
    ]
  },
  {
    "id": 234,
    "questionText": "Iki cyapa gisobanura iki?",
    "questionImage": "/image/img85.jpg",
    "choices": [
      {
        "text": "Iherezo ry’ibibuzwa byose mu karere ku binyabiziga bigenda",
        "correct": true
      },
      {
        "text": "Ntihemerewe kuhahagarara"
      },
      {
        "text": "Umuvuduko ntarengwa wemewe"
      },
      {
        "text": "Nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 235,
    "questionText": "Ibyapa bitegeka bikozwe muyihe shusho?",
    "choices": [
      {
        "image": "/image/img88.jpg"
      },
      {
        "image": "/image/img89.jpg"
      },
      {
        "image": "/image/img90.jpg",
        "correct": true
      },
      {
        "image": "/image/img91.jpg"
      }
    ]
  },
  {
    "id": 236,
    "questionText": "Nikihe cyapa cyerekena ko nta kinyabiziga gifite moteri cyemerewe kuhanyura?",
    "choices": [
      {
        "image": "/image/img92.jpg"
      },
      {
        "image": "/image/img93.jpg",
        "correct": true
      },
      {
        "image": "/image/img94.jpg"
      },
      {
        "image": "/image/img95.jpg"
      }
    ]
  },
  {
    "id": 237,
    "questionText": "Kki cyapa gisobanura iki?",
    "questionImage": "/image/img96.jpg",
    "choices": [
      {
        "text": "Uburenganzira bwo gutambuka mbere"
      },
      {
        "text": "Nta kinyabiziga kigendeshwa na moteri"
      },
      {
        "text": "ibyerekezo bibiri by’umuhanda"
      },
      {
        "text": "Birabujijwe kunyuranaho",
        "correct": true
      }
    ]
  },
  {
    "id": 238,
    "questionText": "Imbere yawe iki cyapa kikubwiye iki?",
    "questionImage": "/image/img97.jpg",
    "choices": [
      {
        "text": "Umuvuduko ntarengwa wemewe"
      },
      {
        "text": "Iherezo ry’ibyo wabuzwaga"
      },
      {
        "text": "Guhagarara umwanya munini n’umwanya moto ntibyemewe",
        "correct": true
      },
      {
        "text": "Birabujijwe kuhinjira"
      }
    ]
  },
  {
    "id": 239,
    "questionText": "Iki cyapa gisobanura iki?",
    "questionImage": "/image/img100.jpg",
    "choices": [
      {
        "text": "Umuhanda uzenguruka"
      },
      {
        "text": "Igice cy’umuhanda uzenguruka"
      },
      {
        "text": "Aho banyura bazengurutse",
        "correct": true
      },
      {
        "text": "Ibisubizo byose nibyo"
      }
    ]
  },
  {
    "id": 240,
    "questionText": "Iki cyapa gisubanura iki?",
    "questionImage": "/image/img101.jpg",
    "choices": [
      {
        "text": "Iteme ridahoraho"
      },
      {
        "text": "Umuhanda utaringaniye",
        "correct": true
      },
      {
        "text": "Umuhanda w’injira mu kuzimu"
      },
      {
        "text": "Ubutaka bworoshye"
      }
    ]
  },
  {
    "id": 241,
    "questionText": "Iki cyapa gisobanura iki?",
    "questionImage": "/image/img102.jpg",
    "choices": [
      {
        "text": "Umuyaga w’intambike",
        "correct": true
      },
      {
        "text": "Urusaku rwo mu muhanda"
      },
      {
        "text": "Ikibuga cy’indege"
      },
      {
        "text": "Ibisubizko byose nibyo"
      }
    ]
  },
  {
    "id": 242,
    "questionText": "Iki Cyapa Gisobanura Iki?",
    "questionImage": "/image/img104.jpg",
    "choices": [
      {
        "text": "Iherezo Ry’inzira Y’abanyamaguru"
      },
      {
        "text": "Iherezo Ry’umuhanda Urombereje W’ibice Byinshi",
        "correct": true
      },
      {
        "text": "A Na B Ni Ibisubizo By’ukuri"
      },
      {
        "text": "Nta nzira ihari"
      }
    ]
  },
  {
    "id": 243,
    "questionText": "Iki cyapa gisobanura Iki?",
    "questionImage": "/image/img105.jpg",
    "choices": [
      {
        "text": "Iherezo Ry’umuhanda Wi Byerekezo Bibiri"
      },
      {
        "text": "Iteme rinini Kandi rirerire"
      },
      {
        "text": "Ifungana Ry’umuhanda",
        "correct": true
      },
      {
        "text": "Iherezo ry’iteme rifunganye"
      }
    ]
  },
  {
    "id": 244,
    "questionText": "Iki cyapa gisobanura iki?",
    "questionImage": "/image/img106.jpg",
    "choices": [
      {
        "text": "Isangano rifite ishusho ya T"
      },
      {
        "text": "Inzira idakomeza",
        "correct": true
      },
      {
        "text": "Aho baterefonera"
      },
      {
        "text": "Nta gisubizo cy’ukuri"
      }
    ]
  },
  {
    "id": 245,
    "questionText": "Iki cyapa gisobanura iki?",
    "questionImage": "/image/img109.jpg",
    "choices": [
      {
        "text": "Inzira y’abanyeshuri"
      },
      {
        "text": "Abanyamaguru ntibemerewe"
      },
      {
        "text": "Agace k’abanyamaguru nta kinyabiziga"
      },
      {
        "text": "Hegereye aho abanyamaguru bambukira",
        "correct": true
      }
    ]
  },
  {
    "id": 246,
    "questionText": "wakora iki ubonye icyi cyapa?",
    "questionImage": "/image/img110.jpg",
    "choices": [
      {
        "text": "guhagarara gusa igihe ibinyabiziga bikwegereye"
      },
      {
        "text": "guhagarara niyo nta kinyabiziga ubona",
        "correct": true
      },
      {
        "text": "Guhagarara gusa niba hari abana bategereje kwambuka"
      },
      {
        "text": "Guhagarara gusa igihe ikimenyetso cyaka ari umutuku"
      }
    ]
  },
  {
    "id": 247,
    "questionText": "Iki cyapa gisobanura iki?",
    "questionImage": "/image/img111.jpg",
    "choices": [
      {
        "text": "Uguhinguka ku mwaro cyangwa ku nkombe cyangwa ahegereye icyome",
        "correct": true
      },
      {
        "text": "Inzira nyabagendwa iri kumusozi ucuramye"
      },
      {
        "text": "Umuhanda utaringaniye"
      },
      {
        "text": "Umuhanda wangijwe n’isuri"
      }
    ]
  },
  {
    "id": 248,
    "questionText": "Iki cyapa gisobanura iki?",
    "questionImage": "/image/img112.jpg",
    "choices": [
      {
        "text": "Hanyurwa na velomoteri gusa"
      },
      {
        "text": "Nta modoka"
      },
      {
        "text": "Hanyurwa nimodoka gusa"
      },
      {
        "text": "Ntihanyurwa n’amapikipiki",
        "correct": true
      }
    ]
  },
  {
    "id": 249,
    "questionText": "Icyapa gitanga uburenganzira bwo gutambuka mbere kigira iyihe shusho?",
    "choices": [
      {
        "image": "/image/img116.jpg"
      },
      {
        "image": "/image/img117.jpg"
      },
      {
        "image": "/image/img118.jpg"
      },
      {
        "image": "/image/img119.jpg",
        "correct": true
      }
    ]
  },
  {
    "id": 250,
    "questionText": "Iki cyapa gisobanura iki?",
    "questionImage": "/image/img120.jpg",
    "choices": [
      {
        "text": "Ahegereye amasangano y’inzira nyabagendwa n’inzira ya gari ya moshi ibambiye",
        "correct": true
      },
      {
        "text": "Inzira ibambiye imbere"
      },
      {
        "text": "Inzira itabambiye itanafunze"
      },
      {
        "text": "Imbere hari ikiraro cy’amatungo"
      }
    ]
  },
  {
    "id": 251,
    "questionText": "Iki cyapa gisobanura iki?",
    "questionImage": "/image/img121.jpg",
    "choices": [
      {
        "text": "Umuhanda wubatswe nabi"
      },
      {
        "text": "Agacuri kateza ibyago",
        "correct": true
      },
      {
        "text": "Umuhanda utaringaniye"
      },
      {
        "text": "Akazamuko gahanamye"
      }
    ]
  },
  {
    "id": 252,
    "questionText": "Iki cyapa gisobanura iki?",
    "questionImage": "/image/img122.jpg",
    "choices": [
      {
        "text": "Guhindura icyerekezo ibumoso ugana aho bahagarara"
      },
      {
        "text": "Umuhanda udakomeza",
        "correct": true
      },
      {
        "text": "Nti byemewe guhindura icyerekezo ibumoso"
      },
      {
        "text": "Guhindura ikirekezo ibumoso ugana ku cyome"
      }
    ]
  },
  {
    "id": 253,
    "questionText": "Mu bimenyetso bimurika itara ritukura rivuga iki?",
    "questionImage": "/image/img123.jpg",
    "choices": [
      {
        "text": ""
      },
      {
        "text": "Hagarara kereste niba ushaka gukata ibumoso Hagarara niba ubona ntabyago byaguteza"
      },
      {
        "text": "Birabujijwe kurenga icyo kimenyetso",
        "correct": true
      },
      {
        "text": "Wemerewe kugenda niba aho asohokera mu masangano y’umuhanda hafunze"
      }
    ]
  },
  {
    "id": 254,
    "questionText": "Mubimenyetso bimurika itara ry’umuhondo risobanura iki?",
    "questionImage": "/image/img126.jpg",
    "choices": [
      {
        "text": "Itegure kugenda"
      },
      {
        "text": "Birabujijwe gutambuka umurongo wo guhagarara umwanya muto cg igihe uwo murongo udahari icyo kimenyetso ubwacyo",
        "correct": true
      },
      {
        "text": "A na b ni ibisubizo by’ukuri"
      },
      {
        "text": "Nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 255,
    "questionText": "Mubimenyetso bimurika itara ry’icyatsi risobanura iki?",
    "questionImage": "/image/img127.jpg",
    "choices": [
      {
        "text": "Kwitegura kugenda"
      },
      {
        "text": "Uburenganzira bwo kurenga icyo kimenyetso",
        "correct": true
      },
      {
        "text": "Hagarara niba inzira isohoka mu isangano ry’imihanda ifunze"
      },
      {
        "text": "Ntagisubizo cyukuri kirimo"
      }
    ]
  },
  {
    "id": 256,
    "questionText": "Umurongo ucagaguye wera mu muhanda usobanura iki?",
    "questionImage": "/image/img128.jpg",
    "choices": [
      {
        "text": "Birabujijwe kuwurenga",
        "correct": true
      },
      {
        "text": "Birabujijwe kuhahagarara"
      },
      {
        "text": "Wegereye ahaguteza ibyago"
      },
      {
        "text": "Kunyuranaho ntibyemewe"
      }
    ]
  },
  {
    "id": 257,
    "questionText": "Iki cyapa gisobanura iki?",
    "questionImage": "/image/img131.jpg",
    "choices": [
      {
        "text": "Ukugendera mu muhanda ubisikanirwamo",
        "correct": true
      },
      {
        "text": "Ukugendera mu muhanda ubisikanirwamo ntibyemewe"
      },
      {
        "text": "Cyerekana aho umunyegare agomba kunyura"
      },
      {
        "text": "Nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 258,
    "questionText": "Iki cyapa gisobanura iki?",
    "questionImage": "/image/img132.jpg",
    "choices": [
      {
        "text": "Ahatangirwa serivisi ni muri metero 30."
      },
      {
        "text": "Umuvuduko munini ntarengwa utegetswe ni 30 km/h."
      },
      {
        "text": "Umuvuduko muto ntarengwa utegetswe ni 30 km/h.",
        "correct": true
      },
      {
        "text": "Aho ibinyabiziga bihagarara ni imbere mu birometero 30."
      }
    ]
  },
  {
    "id": 259,
    "questionText": "Iki cyapa gisobanura iki?",
    "questionImage": "/image/img134.jpg",
    "choices": [
      {
        "text": "Ahegereye umuhanda unyerera."
      },
      {
        "text": "Imbere ipine ryapfumutse."
      },
      {
        "text": "Ahegereye icyago kidasobanuye ukundi.",
        "correct": true
      },
      {
        "text": "Imbere hari hatangirwa serivisi."
      }
    ]
  },
  {
    "id": 260,
    "questionText": "Iki cyapa gisobanura iki? 135",
    "choices": [
      {
        "text": "Imbere hari umuyobozi w’amatungo."
      },
      {
        "text": "Imbere hari inzira ya gari ya moshi."
      },
      {
        "text": "Ahegereye amasangano y’inzira nyabagendwa n’inzira ya gari ya moshi hatabambiye",
        "correct": true
      },
      {
        "text": "Inkomane ibambiye."
      }
    ]
  },
  {
    "id": 261,
    "questionText": "Muri iri sangano ry’umuhanda hari icyapa gisobanura “guhagarara” n’umurongo wera urombereje munzira . Niyihe mpamvu hari iki cyapa cyo “guhagarara” hano?",
    "questionImage": "/image/img139.jpg",
    "choices": [
      {
        "text": "Biragoye kubona neza mu muhanda munini",
        "correct": true
      },
      {
        "text": "Umuvuduko mu muhanda munini wavanyweho"
      },
      {
        "text": "Ni mwisangano ry’umuhanda rikoreshwa cyane"
      },
      {
        "text": "Hari imirongo iburira ibyago bitunguranye"
      }
    ]
  },
  {
    "id": 262,
    "questionText": "Ni iki gikenewe muri ibi bikurikira kugirango ubashe gutwara imodoka mu muhanda biteganywa nitegeko",
    "choices": [
      {
        "text": "Uruhushya rwa burundu rwo gutwara ibinyabiziga rugifite agaciro"
      },
      {
        "text": "Ubwishingizi bw’ikinyabizaga bugifite agaciro"
      },
      {
        "text": "Icyemezo cy’iyandikwa ry’ikinyabiziga"
      },
      {
        "text": "Ibisubizo byose nibyo",
        "correct": true
      }
    ]
  },
  {
    "id": 263,
    "questionText": "Ikinyabiziga gishya gikenerwa gusuzumwa bwambere nyuma y’igihe kingana iki?",
    "choices": [
      {
        "text": "Nyuma y’umwaka umwe"
      },
      {
        "text": "Nyuma y’imyaka ibiri",
        "correct": true
      },
      {
        "text": "A na b ni ibisubizo by’ukuri"
      },
      {
        "text": "Nta gisubizo cy’ukuri"
      }
    ]
  },
  {
    "id": 264,
    "questionText": "Ni ryari ushobora kwakiriza icyarimwe amatara yose ndangacyerekezo y’ikinyabiziga?",
    "choices": [
      {
        "text": "Mu gihe ushaka kuburira abandi bakoresha umuhanda"
      },
      {
        "text": "Mu gihe ikinyabiziga cyawe gishobora guteza ibyago"
      },
      {
        "text": "A na b ni ibisubizo by’ukuri",
        "correct": true
      },
      {
        "text": "Ntagisubizo cy’ukuri"
      }
    ]
  },
  {
    "id": 265,
    "questionText": "Ugeze ahabereye impanuka yo mumuhanda bwambere ugasanga abakomeretse bikomeye. wakiriza icyarimwe amatara y’ibyerekezo byombi, niki kindi ushobora gukora?",
    "choices": [
      {
        "text": "Kumenya neza niba imbangukiragutabara yahamagawe",
        "correct": true
      },
      {
        "text": "Guhagarika ibinyabiziga bindi no kubasaba ubufasha"
      },
      {
        "text": "A na b ni ibisubizo by’ukuri"
      },
      {
        "text": "Nta gisubizo cy’ukuri"
      }
    ]
  },
  {
    "id": 266,
    "questionText": "Umuyobozi w’ikinyabizaga cy’ikoreye ibintu bishobora gufata inkongi, n’ikihe cyapa cyerekana ko ibyo atwaye biturika by’afata inkongi?",
    "choices": [
      {
        "image": "/image/img140.jpg"
      },
      {
        "image": "/image/img143.jpg",
        "correct": true
      },
      {
        "image": "/image/img144.jpg"
      },
      {
        "image": "/image/img145.jpg"
      }
    ]
  },
  {
    "id": 267,
    "questionText": "Wakoze impanuka yo mu muhanda , ni ikihe cyangombwa polisi ishobora kugusaba kucyerekana?",
    "choices": [
      {
        "text": "Icyemezo cy’iyandikwa ryi ikinyabiziga"
      },
      {
        "text": "Uruhusa rwa burundu rwo gutwara ikinyabiziga",
        "correct": true
      },
      {
        "text": "Uruhushya rwagateganyo"
      },
      {
        "text": "Imikorere y’ikinyabiziga"
      }
    ]
  },
  {
    "id": 268,
    "questionText": "Uhuye n’ingorane utwaye ikinyabiziga , mu muhanda ufite ibyerekezo bibiri, ufite ikimenyetso kiburira cya mpandeshatu. wagishyira mu ntera ingana iki uvuye aho ikinyabiziga cyahagaze",
    "questionImage": "/image/img147.jpg",
    "choices": [
      {
        "text": "Metero 5"
      },
      {
        "text": "Metero 25",
        "correct": true
      },
      {
        "text": "Metero 45"
      },
      {
        "text": "Metero 100"
      }
    ]
  },
  {
    "id": 269,
    "questionText": "Umuyobozi usunika ipikipiki agomba gufatwa nka:",
    "questionImage": "/image/img148.jpg",
    "choices": [
      {
        "text": "Umunyamaguru"
      },
      {
        "text": "Umuyobozi w’ikinyabiziga",
        "correct": true
      },
      {
        "text": "Umugenzi"
      },
      {
        "text": "A na b ni ibisubizo by’ukuri"
      }
    ]
  },
  {
    "id": 270,
    "questionText": "Icyapa gikoze mw’ishusho ya mpandeshatu kimenyesha:",
    "questionImage": "/image/img151.jpg",
    "choices": [
      {
        "text": "ibyago",
        "correct": true
      },
      {
        "text": "ibibujijwe"
      },
      {
        "text": "ibitegetswe"
      },
      {
        "text": "ntagisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 271,
    "questionText": "Iki cyapa gisobanura :",
    "questionImage": "/image/img152.jpg",
    "choices": [
      {
        "text": "uburenganzira bwo gutambuka mbere",
        "correct": true
      },
      {
        "text": "uburenganzira bwo gutambuka mbere mu yandi masangano y’umuhanda akwegereye"
      },
      {
        "text": "ibyago imbere mu masangano y’umuhanda ukwegereye"
      },
      {
        "text": "a na b ni ibisubizo by’ukuri"
      }
    ]
  },
  {
    "id": 272,
    "questionText": "Iki cyapa gisobanura:",
    "questionImage": "/image/img154.jpg",
    "choices": [
      {
        "text": "Ntihanyurwa n’abanyamaguru",
        "correct": true
      },
      {
        "text": "Akayira kabanyamaguru"
      },
      {
        "text": "Aho abanayamaguru bambukira"
      },
      {
        "text": "B na c ni ibisubizo by’ukuri"
      }
    ]
  },
  {
    "id": 273,
    "questionText": "Urenze munsisiro ,ukahasanga ibyapa bibiri iburyo bwawe bimenyesha ko irangira ry’imirimo bitewe nicyo ibyo byapa bemenyesha wagendera kuwuhe muvuduko?",
    "questionImage": "/image/img155.jpg",
    "choices": [
      {
        "text": "70 km/h"
      },
      {
        "text": "50 km/h"
      },
      {
        "text": "40 km/h"
      },
      {
        "text": "80 km/h",
        "correct": true
      }
    ]
  },
  {
    "id": 274,
    "questionText": "Iki cyapa gisobanura iki?",
    "questionImage": "/image/img158.jpg",
    "choices": [
      {
        "text": "Hoteli"
      },
      {
        "text": "Ibitaro",
        "correct": true
      },
      {
        "text": "Ahagenewe kugwa kajugujugu"
      },
      {
        "text": "B na c ni ibisubizo by’ukuri"
      }
    ]
  },
  {
    "id": 275,
    "questionText": "igice kinzira nyabagendwa gikikijwe n’imirongo ibiri y’umweru iciyemo uduce kandi iteganye :",
    "questionImage": "/image/img159.jpg",
    "choices": [
      {
        "text": "ahagenewe guhagarara umwanya munini n’umuto"
      },
      {
        "text": "ahagenewe abanayamaguru"
      },
      {
        "text": "ahagenewe inzira y’ibinyamitende",
        "correct": true
      },
      {
        "text": "a na b ni ibisubizo by’ukuri"
      }
    ]
  },
  {
    "id": 276,
    "questionText": "iki cyapa kibuza abayobozi bibinyabiziga kunyuranaho :",
    "questionImage": "/image/img160.jpg",
    "choices": [
      {
        "text": "iburyo"
      },
      {
        "text": "ibumoso",
        "correct": true
      },
      {
        "text": "iburyo n’ibumoso"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 277,
    "questionText": "Iki cyapa kibuza kunyuranaho ibumoso ku binyabiziga bikurikira :",
    "questionImage": "/image/img160.jpg",
    "choices": [
      {
        "text": "ku binyabiziga byose"
      },
      {
        "text": "ku binyabiziga byose bifite moteri"
      },
      {
        "text": "kubinyabiziga byose uretse ibinyamitende ibiri n’amapikipiki adafite akanyabiziga ko k’uruhande",
        "correct": true
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 278,
    "questionText": "iki kimenyetso cyaka kinyemerera gukomeza:",
    "questionImage": "/image/img164.jpg",
    "choices": [
      {
        "text": "yego"
      },
      {
        "text": "yego ariko utanga inzira kubanyamaguru"
      },
      {
        "text": "yego utanga inzira kubandi bayobozi b’ibinyabizaga baturutse mukindi cyerekezo"
      },
      {
        "text": "oya",
        "correct": true
      }
    ]
  },
  {
    "id": 279,
    "questionText": "Mu muhanda ufite uruhererekane rw’amakoni, feri y’urugendo ikoreshwa ryari?",
    "questionImage": "/image/img165.jpg",
    "choices": [
      {
        "text": "Mbere ya buri koni",
        "correct": true
      },
      {
        "text": "Muri buri koni"
      },
      {
        "text": "Nyuma ya buri koni"
      },
      {
        "text": "Nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 280,
    "questionText": "Ni ikihe cyapa muri ibi kintegeka gutanga inzira:",
    "questionImage": "/image/img167.jpg",
    "choices": [
      {
        "text": "Icyapa A19"
      },
      {
        "text": "Icyapa B5",
        "correct": true
      },
      {
        "text": "Icyapa B6"
      },
      {
        "text": "Ntagisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 281,
    "questionText": "Iki cyapa gisobanura :",
    "questionImage": "/image/img168.jpg",
    "choices": [
      {
        "text": "utubuye dutaruka mu muhanda",
        "correct": true
      },
      {
        "text": "umuhanda urimo amazi"
      },
      {
        "text": "umuhanda unyerera"
      },
      {
        "text": "a na b ni bisubizo by’ukuri"
      }
    ]
  },
  {
    "id": 282,
    "questionText": "Uri umuyobozi wa velomoteri, uhuye n’umwe munshuti zawe agusaba ko wa mutwara ukamusiga ku’wundi muhanda. ufite imyaka 18 ariko nta ngofero yindi yabigenewe ufite. wamutwara?",
    "questionImage": "/image/img171.jpg",
    "choices": [
      {
        "text": "yego"
      },
      {
        "text": "yego usibye urugendo rurerure"
      },
      {
        "text": "yego usibye urugendo rugufi"
      },
      {
        "text": "Oya",
        "correct": true
      }
    ]
  },
  {
    "id": 283,
    "questionText": "Ni ikihe cyapa cy’inyemerera gutambuka mbere mu masangano y’umuhanda?",
    "questionImage": "/image/img172.jpg",
    "choices": [
      {
        "text": "Icyapa B3",
        "correct": true
      },
      {
        "text": "Icyapa A22 a"
      },
      {
        "text": "Icyapa A 20"
      },
      {
        "text": "Ibisubizo byose ni ukuri"
      }
    ]
  },
  {
    "id": 284,
    "questionText": "Mbere yo kunyura kumuyobozi w’ikinyabiziga cy’imitende ibiri, ngomba gucana akaranga cyerekezo k’ibumoso?",
    "questionImage": "/image/img173.jpg",
    "choices": [
      {
        "text": "Yego buri gihe",
        "correct": true
      },
      {
        "text": "Yego igihe hari ikinyabiziga kinkurikiye"
      },
      {
        "text": "Yego iyo nkurikiwe nibindi binyabiziga by’imitende ibiri"
      },
      {
        "text": "Oya nta na rimwe kunyura kubinyabiziga by’imitende ibiri"
      }
    ]
  },
  {
    "id": 285,
    "questionText": "Nshobora kunyuraho umuyobozi w’ikinyabiziga wahagaze imbere y’inzira yabanyamaguru?",
    "questionImage": "/image/img176.jpg",
    "choices": [
      {
        "text": "yego"
      },
      {
        "text": "yego nyuma yo kuvuza ihoni"
      },
      {
        "text": "yego mu gihe nkurikiwe n’ibindi binyabiziga"
      },
      {
        "text": "Oya",
        "correct": true
      }
    ]
  },
  {
    "id": 286,
    "questionText": "Hejuru y’aka kanunga:",
    "questionImage": "/image/img177.jpg",
    "choices": [
      {
        "text": "Nshobora kunyura ku kinyabiziga icyo aricyose mu gihe nagabanyije umuvuduko"
      },
      {
        "text": "nshobora kunyura gusa kubinyabiziga by’imitende ibiri"
      },
      {
        "text": "kunyuranaho ibumoso birabujijwe",
        "correct": true
      },
      {
        "text": "a na b ni ibisubizo by’ukuri"
      }
    ]
  },
  {
    "id": 287,
    "questionText": "Mu gihe cy’impanuka mu muhanda n’ubundi bushotoranyi ni yihe nimero ya telefone y’ubutabazi wahamagara :",
    "questionImage": "/image/img179.jpg",
    "choices": [
      {
        "text": "911"
      },
      {
        "text": "100"
      },
      {
        "text": "112",
        "correct": true
      },
      {
        "text": "131"
      }
    ]
  },
  {
    "id": 288,
    "questionText": "Ugeze bwa mbere ahabereye impanuka yo mu muhanda harimo inkomere wakora iki?",
    "questionImage": "/image/img182.jpg",
    "choices": [
      {
        "text": "gusohora inkomere mu kinyabiziga"
      },
      {
        "text": "kubaha icyo kunywa"
      },
      {
        "text": "ku menyesha impanuka no guhamagara ubutabazi",
        "correct": true
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 289,
    "questionText": "Mugihe ikinyabiziga cyacu bakinyuzeho",
    "choices": [
      {
        "text": "Tugomba kugabanya umuvuduko",
        "correct": true
      },
      {
        "text": "Tugomba kongera umuvuduko"
      },
      {
        "text": "Tugomba kongera umuvuduko n’ubwitonzi"
      },
      {
        "text": "Nta gisubizo cy’ ukuri kirimo"
      }
    ]
  },
  {
    "id": 290,
    "questionText": "Ntibyemewe gukoresha telephone",
    "choices": [
      {
        "text": "Mu biro bya leta"
      },
      {
        "text": "Mu biro bya Polisi"
      },
      {
        "text": "Igihe utwaye ikinyabiziga",
        "correct": true
      },
      {
        "text": "Ibisubizo byose ni ukuri"
      }
    ]
  },
  {
    "id": 291,
    "questionText": "Mbere yo kunyura ku kindi kinyabiziga, ni ngombwa kumenya ko:",
    "choices": [
      {
        "text": "Nta kindi kinyabiziga kinturutse inyuma"
      },
      {
        "text": "Umuhanda ubona neza, no kwitondera kunyuranaho",
        "correct": true
      },
      {
        "text": "Ikinyabiziga kinturutse imbere gishaka gukatira I buumoso"
      },
      {
        "text": "Nta gisubizo cy’ukuri"
      }
    ]
  },
  {
    "id": 292,
    "questionText": "Ikindi kinyabiziga kiguturutse inyuma kiguterera amatara y’urumuri rumyasa, wakora iki?",
    "choices": [
      {
        "text": "Kongera umuvuduko kugira ngo intera iri hagati yawe n’ukuri inyuma igumeho"
      },
      {
        "text": "Fata feri y’urugendo kugira ngo umwereke ko ugiye guhagarara"
      },
      {
        "text": "Emerera icyo kinyabiziga kugutambukaho niba imbere ntacyago gihari",
        "correct": true
      },
      {
        "text": "Nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 293,
    "questionText": "Mu gihe Umuntu ufite ubumuga bwo kutabona yambuka umuhanda yitwaje inkoni yera y’abatabona:",
    "choices": [
      {
        "text": "Umuyobozi w’ikinyabiziga agomba gufata iyo nkoni nk’icyapa kimumenyesha ko agomba guhagarara",
        "correct": true
      },
      {
        "text": "Vuza ihoni ukomeze"
      },
      {
        "text": "Gabanya nurangiza ukomeze witonze"
      },
      {
        "text": "Ibisubizo byose ni ukuri"
      }
    ]
  },
  {
    "id": 294,
    "questionText": "Amatara y’urugendo, mu gihe cy’ibihu:",
    "choices": [
      {
        "text": "Ni meza kuko atuma ureba kure"
      },
      {
        "text": "Ni mabi kuko arakugarukira akaguhuma amaso",
        "correct": true
      },
      {
        "text": "Akwizeza ko abandi bakubona"
      },
      {
        "text": "Nta gisubizo cy’ukuri"
      }
    ]
  },
  {
    "id": 295,
    "questionText": "Gutwara uzungazunga mu muhanda:",
    "choices": [
      {
        "text": "Ni bibi ku kinyabiziga cy’imitende ibiri"
      },
      {
        "text": "Ni bibi igihe cyose",
        "correct": true
      },
      {
        "text": "Ni bibi ku kinyabiziga cy’imitende ine"
      },
      {
        "text": "Nta gisubizo cy’ukuri"
      }
    ]
  },
  {
    "id": 296,
    "questionText": "Telephone ngendanwa ntigomba gukoreshwa:",
    "choices": [
      {
        "text": "Ahari ibimenyetso bimurika"
      },
      {
        "text": "Igihe utwaye ikinyabiziga Ku muvuduko wa 20km/h"
      },
      {
        "text": "A na B ni ibisubizo by’ukuri"
      },
      {
        "text": "Nta gisubizo cy’ukuri",
        "correct": true
      }
    ]
  },
  {
    "id": 297,
    "questionText": "Kunyuranaho bibujijwe gusa igihe:",
    "choices": [
      {
        "text": "Igihe mu muhanda hagati hashushanyijemo umurongo w’umweru ucagaguye."
      },
      {
        "text": "Umuhanda ushushanyijwemo umurongo wera udacagaguye",
        "correct": true
      },
      {
        "text": "Ikinyabiziga gitwawe ku musozi unyerera"
      },
      {
        "text": "Nta gisubizo cy’ukuri"
      }
    ]
  },
  {
    "id": 298,
    "questionText": "Mu gihe utwaye ikinyabiziga ni joro ucanye amatara maremare ugahura n’ikindi kinyabiziga giturutse mu kindi cyerecyezo:",
    "choices": [
      {
        "text": "Gukomeza ibumoso"
      },
      {
        "text": "Kuzimya ucana amatara maremare n’amagufi"
      },
      {
        "text": "Kuzimya amatara maremare kugeza ikindi kinyabiziga gitambutse",
        "correct": true
      },
      {
        "text": "Nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 299,
    "questionText": "Igihe umuyobozi w’inyamaswa, afite inyamaswa idatuje, asaba ko ibinyabiziga bihagarara:",
    "choices": [
      {
        "text": "Umuyobozi w’ikinyabiziga agomba guhagarara",
        "correct": true
      },
      {
        "text": "Umuyobozi w’ikinyabizigaagomba kuvuza ihoni agukomeza"
      },
      {
        "text": "Umuyobozi w’ikinyabiziga agomba kugabanya umuvuduko"
      },
      {
        "text": "Ibisubizo byose ni ukuri"
      }
    ]
  },
  {
    "id": 300,
    "questionText": "Iyo mu muhanda hashushanyijemo umurongo wera ucagaguye, ntugomba",
    "choices": [
      {
        "text": "Ntugomba kujya mu kindi gice cy’umuhanda"
      },
      {
        "text": "Ushobora kujya mu kindi gice cy’umuhanda bibaye ngombwa",
        "correct": true
      },
      {
        "text": "Agomba guhagarika ikinyabiziga"
      },
      {
        "text": "Nta gisubizo cy’ukuri"
      }
    ]
  },
  {
    "id": 301,
    "questionText": "Kuvuza ihoni bibujijwe:",
    "choices": [
      {
        "text": "Ku musigiti, ku rusengero, ku rutambiro"
      },
      {
        "text": "Hafi y’ibitaro",
        "correct": true
      },
      {
        "text": "Hafi y’ubuyobozi bwa polisi"
      },
      {
        "text": "Nta gisubizo cy’ukuri"
      }
    ]
  },
  {
    "id": 302,
    "questionText": "Icyemezo cy’Isuzuma ry’ikinyabiziga kimara igihe kingana iki?",
    "choices": [
      {
        "text": "Amezi 6 kubinyabiziga bikora ubucuruzi"
      },
      {
        "text": "Amezi 12 ku binyabiziga bidakora ubucuruzi"
      },
      {
        "text": "Imyaka 2"
      },
      {
        "text": "A na B ni ibisubizo by’ukuri",
        "correct": true
      }
    ]
  },
  {
    "id": 303,
    "questionText": "N’iyihe myifatire myiza wagira ugeze aho abana bari hafi y’inzira nyabagendwa?",
    "questionImage": "/image/img187.jpg",
    "choices": [
      {
        "text": "Itonde , witegereze ni biba ngongwa ubaburire unitegura kuba wahagarara.",
        "correct": true
      },
      {
        "text": "Ihute urenge aho abo bana bari"
      },
      {
        "text": "Komeza ugume ku muvuduko munini"
      },
      {
        "text": "Komeza ugendere kuruhande rw’iburyo"
      }
    ]
  },
  {
    "id": 304,
    "questionText": "Umuyobozi w’ikinyabiziga yegereye aho umwana w’umuhungu utwaye akagare k’abana asezera ku nshuti ye. N’iyihe myifatire myiza wagira imbere yabo?",
    "questionImage": "/image/img190.jpg",
    "choices": [
      {
        "text": "Ikomereze nkaho ataragera munzira nyabagendwa"
      },
      {
        "text": "Itegure kureka uwo mwana w’umuhungu atambuke, kuko yajya mu muhanda atitaye ku kinyabiziga cyawe",
        "correct": true
      },
      {
        "text": "Gabanya umuvuduko ubwire uwo mwana yambuke ukoresheje ibimenyetso"
      },
      {
        "text": "Komeza nkaho uwo mwana akiri munzira y’abanyamaguru"
      }
    ]
  },
  {
    "id": 305,
    "questionText": "Nk’umuyobozi w’ikinyabiziga, n’iyihe myitwarire wagira?",
    "questionImage": "/image/img191.jpg",
    "choices": [
      {
        "text": "Umuyobozi w’ikinyabiziga agomba gukomeza",
        "correct": true
      },
      {
        "text": "Umuyobozi w’ikinyabiziga agomba kuguma mu ruhande rw’iburyo kugira ngo ahe inzira umumotari"
      },
      {
        "text": "Umuyobozi w’ikinyabiziga agomba gutegereza"
      },
      {
        "text": "Umuyobozi w’ikinyabiziga agomba gutanga inzira ayiha umu motari"
      }
    ]
  },
  {
    "id": 306,
    "questionText": "Umuyobozi w’ikinyabiziga ageze hafi y’inzira y’abanyamaguru yakwitwara ate?",
    "questionImage": "/image/img192.jpg",
    "choices": [
      {
        "text": "Kugabanya umuvuduko mu gihe cyiza, ukitegura guhagarara",
        "correct": true
      },
      {
        "text": "Gukomeza agendera ku muvuduko uri hejuru, mu gihe umunyamaguru ategereje"
      },
      {
        "text": "Kuguma ku muvuduko yari afite mu gihe umunyamaguru atarambuka"
      },
      {
        "text": "Kuvuza ihoni akaguma ku muvuduko yahozeho"
      }
    ]
  },
  {
    "id": 307,
    "questionText": "Umuyobozi w’ikinyabiziga akurikiye ibinyabiziga bibiri, yifuza kubinyuraho. N’iki yashingiraho mbere yo kubanyuraho?",
    "questionImage": "/image/img195.jpg",
    "choices": [
      {
        "text": "Ugomba kuzinyuraho zombi"
      },
      {
        "text": "Sibyiza ko yazinyuraho atabasha kureba neza imbere ye",
        "correct": true
      },
      {
        "text": "Ibyapa by’aho ageze ntibimwemerera kunyuranaho"
      },
      {
        "text": "Imbere har’inzira y’abanyamaguru"
      }
    ]
  },
  {
    "id": 308,
    "questionText": "N’iki umuyobozi w’ikinyabiziga yakora ashaka gukatira iburyo?",
    "questionImage": "/image/img196.jpg",
    "choices": [
      {
        "text": "Vuza ihoni umenyesha umunyegare ko ushaka gukatira iburyo"
      },
      {
        "text": "Kata ikoni mbere y’umunyegare"
      },
      {
        "text": "Emerera umunyegare akomeze inzira ye",
        "correct": true
      },
      {
        "text": "Ongera umuvuuko kugira ngo umutange gukata mbere ye"
      }
    ]
  },
  {
    "id": 309,
    "questionText": "N’ayahe matara umuyobozi w’ikinyabiziga agomba gukoresha mugihe cy’ibihu?",
    "questionImage": "/image/img199.jpg",
    "choices": [
      {
        "text": "Amatara kamena bihu y’imbere n’ay’inyuma hamwe n’amatara magufi",
        "correct": true
      },
      {
        "text": "Amatara kamenabihu y’imbere n’ay’inyuma"
      },
      {
        "text": "Amatara magufi"
      },
      {
        "text": "Urumuri rusanzwe"
      }
    ]
  },
  {
    "id": 310,
    "questionText": "Muri ibi binyabiziga n’ikihe gihagaze nabi?",
    "questionImage": "/image/img200.jpg",
    "choices": [
      {
        "text": "Ibinyabiziga byombi",
        "correct": true
      },
      {
        "text": "Ikinyabiziga cy’icyatsi"
      },
      {
        "text": "Ikinyabiziga cy’umutuku"
      },
      {
        "text": "Nta n’imwe"
      }
    ]
  },
  {
    "id": 311,
    "questionText": "Ni gute umuyobozi w’ikinyabiziga yanyura kumunyegare hano?",
    "questionImage": "/image/img201.jpg",
    "choices": [
      {
        "text": "Aha umuyobozi w’ikinyabiziga ntashobora kumunyuraho"
      },
      {
        "text": "Atarenze umurongo wera ucagaguye"
      },
      {
        "text": "Arenze umurongo wera ucagaguye",
        "correct": true
      },
      {
        "text": "Nta kurenga iyi mirongo yombi"
      }
    ]
  },
  {
    "id": 312,
    "questionText": "N’iki umuyobozi w’ikinyabiziga yakora aramutse ahumishijwe n’urumuri rw’amatara yikinyabiziga giturutse mu kindi cyerekezo?",
    "questionImage": "/image/img202.jpg",
    "choices": [
      {
        "text": "humisha ikinyabiziga giturutse mu kindi cyerekezo ucana amatara maremare."
      },
      {
        "text": "Egera kunkombe y’iburyo bw’umuhanda nibinashobioka ugabanye umuvuduko.",
        "correct": true
      },
      {
        "text": "Canira amatara ikinyabiziga kiva mukindi cyerekezo"
      },
      {
        "text": "Ongera umuvuduko kugira ngo usohoke mururwo rumuri vuba bishoboka"
      }
    ]
  },
  {
    "id": 313,
    "questionText": "Niki ugomba gukora igihe wegereye ikimenyetso kimurika kiva mucyatsi kijya mumuhondo?",
    "questionImage": "/image/img205.jpg",
    "choices": [
      {
        "text": "Ongera umuvuduko kugirango usoze ikoni"
      },
      {
        "text": "Komeza kuko itara ry’icyatsi rigiye kwaka."
      },
      {
        "text": "Hagarara niba utateza ibyago",
        "correct": true
      },
      {
        "text": "Komeza ubwitonzi witegura guhagarara mugihe itara rihindutse umutuku"
      }
    ]
  },
  {
    "id": 314,
    "questionText": "Niki umuyobozi w’ ikinyabiziga akwiriye kumenya mugihe akurikiye umuyobozi wikinyamitende ibiri kandi imodoka y’ umweru iri gusubira inyuma ijya mumuhanda?",
    "questionImage": "/image/img206.jpg",
    "choices": [
      {
        "text": "Umuyobozi wikinyabiziga gisubira inyuma azahagarara nabona umuyobozi w’ ikinyabimitende ibiri"
      },
      {
        "text": "Umuyobozi w’ ikinyamitende ibiri ashobora gusaba umuyobozi w’ ikinyabiziga gisubira inyuma guhagarara"
      },
      {
        "text": "Amatara yoguhagarara ashobora kuzima ikinyabiziga gikomeza gusubira inyuma"
      },
      {
        "text": "Umuyobozi w’ ikinyamitende ashobora guhagarara bitunguranye",
        "correct": true
      }
    ]
  },
  {
    "id": 315,
    "questionText": "Aha niki umuyobozi w’ ikinyabiziga yakora mugihe ashaka kujya iburyo?",
    "questionImage": "/image/img207.jpg",
    "choices": [
      {
        "text": "Gukomeza hagati y’ abanyamaguru babiri"
      },
      {
        "text": "kuvuza ihoni akongera umuvuduko"
      },
      {
        "text": "Guhagarara akareka abanyamaguru bakambuka",
        "correct": true
      },
      {
        "text": "Reka umunyamaguru umwe atambuke ubone umwanya wogutambuka"
      }
    ]
  },
  {
    "id": 316,
    "questionText": "Aha umuyobozi w’ ikinyabiziga ashobora kunyura kuri aba abanyamagare?",
    "questionImage": "/image/img210.jpg",
    "choices": [
      {
        "text": "Oya, umuyobozi ntashobora kureba imbere neza",
        "correct": true
      },
      {
        "text": "Yego, kuko umurongo wera ucagaguye udashobora kuba udacagaguye."
      },
      {
        "text": "Yego, abanyamagare bazumva imodoka bave munzira"
      },
      {
        "text": "Yego, kuko buri kinyabiziga kiva mukindi cyerekezo gishobora kuguha inzira"
      }
    ]
  },
  {
    "id": 317,
    "questionText": "Aha niki umuyobozi w’ ikinyabiziga yakora?",
    "questionImage": "/image/img211.jpg",
    "choices": [
      {
        "text": "Kwemerera abanyamaguru kwambuka umuhanda",
        "correct": true
      },
      {
        "text": "Kuvuza ihoni agakomeza"
      },
      {
        "text": "Tengereza munzira y’ abanyamaguru kugeza imidoka izimye"
      },
      {
        "text": "Kongera umuvuduko mbere yuko abanyamaguru bambuka"
      }
    ]
  },
  {
    "id": 318,
    "questionText": "Muri ibi binyabiziga bine ni ikihe kiri mu buryo bwiza bwo gukata ikoni ry’iburyo kiva mu muhanda munini kijya mu muto?",
    "questionImage": "/image/img212.jpg",
    "choices": [
      {
        "text": "Ikinyabiziga cya mbere kiri mu buryo bwiza bwo gukata ikoni ry’iburyo",
        "correct": true
      },
      {
        "text": "Ikinyabiziga cya kabiri kiri mu buryo bwiza bwo gukata ikoni ry’iburyo"
      },
      {
        "text": "Ikinyabiziga cya gatatu kiri mu buryo bwiza bwo gukata ikoni ry’iburyo"
      },
      {
        "text": "Ikinyabiziga cya kane kiri mu buryo bwiza bwo gukata ikoni ry’iburyo"
      }
    ]
  },
  {
    "id": 319,
    "questionText": "Niki umuyobozi w’ikinyabiziga yakora mu gihe abonye icyapa kiburira cya mpande eshatu gitukura mu muhanda?",
    "choices": [
      {
        "text": "Hagarara utegereze amabwiriza"
      },
      {
        "text": "Umuyobozi w’ikinyabiziga agomba kugabanya umuvuduko ateganya icyago imbere ye",
        "correct": true
      },
      {
        "text": "Kukireka, ukagumana umuvuduko ufite ugakomeza"
      },
      {
        "text": "Hagarara kuri icyo cyapa cya mpande eshatu mbere yo gukomeza"
      }
    ]
  },
  {
    "id": 320,
    "questionText": "Niki umuyobozi w’ikinyabiziga agomba gukora ahuye n’amatungo mu muhanda?",
    "choices": [
      {
        "text": "Kuvuza ihoni kugirango zihunge"
      },
      {
        "text": "Umuyobozi w’ikinyabiziga agomba kugabanya umuvuduko zigatambuka",
        "correct": true
      },
      {
        "text": "Kwatsa amatara maremare kugirango utambuke wihuta mu buryo bushoboka bwose"
      },
      {
        "text": "Kuvuza ihoni ukanyuraho witonze"
      }
    ]
  },
  {
    "id": 321,
    "questionText": "Niki umuyobozi w’ikinyabiziga yakora abonye otobisi iri kuva aho zagenewe guhagararwamo?",
    "choices": [
      {
        "text": "Gukomeza iruhande kuko ufite uburenganzira bwo gukomeza"
      },
      {
        "text": "Gabanya umuvuduko maze ureke ikomeze",
        "correct": true
      },
      {
        "text": "Gerageza unyureho kugirango atagutinza"
      },
      {
        "text": "Menyesha umuyobozi wa otobisi aguhe inzira"
      }
    ]
  },
  {
    "id": 322,
    "questionText": "Niki umuyobozi w’ikinyabiziga yakora mugihe ahuye n’ikinyabiziga cyakije itara ry’umuhondo rimyatsa?",
    "choices": [
      {
        "text": "Mu gihe ikinyabiziga giturutse mu kindi cyerekezo kitagishoboye kugenda"
      },
      {
        "text": "Mu gihe ikinyabiziga ndakumirwa giturutse mu kindi cyerekezo"
      },
      {
        "text": "Mu gihe ikinyabiziga giturutse mu cyindi cyerekezo cy’ihuta"
      },
      {
        "text": "Kugabanya umuvuduko witegura guhagarara",
        "correct": true
      }
    ]
  },
  {
    "id": 323,
    "questionText": "Umuyobozi w’ikinyabiziga yakara iki mu gihe anyuzweho nikindi kinyabiziga?",
    "choices": [
      {
        "text": "Gukomezanya umuvuduko warufite",
        "correct": true
      },
      {
        "text": "Kujya i buryo"
      },
      {
        "text": "Kujya I bumoso"
      },
      {
        "text": "Kwongera umuvuduko"
      }
    ]
  },
  {
    "id": 324,
    "questionText": "Umurongo w’umweru urombereje uciye hagati mu muhanda uvuze iki?",
    "questionImage": "/image/img215.jpg",
    "choices": [
      {
        "text": "Umuyobozi wese abujijwe kuwurenga",
        "correct": true
      },
      {
        "text": "Abanyamitende wemerewe kunyuranaho"
      },
      {
        "text": "Kuhahagara biremewe"
      },
      {
        "text": "Guhindukira ku manywa"
      }
    ]
  },
  {
    "id": 325,
    "questionText": "Umuyobozi w’ikinyabiziga ugeze mu isangano ry’umuhanda ugenzurwa ni ibimenyetso by’amatara yaka agasanga ataka (adakora), yakora iki?",
    "choices": [
      {
        "text": "Guca mu isangano n’ubwitonzi nkaho ntakimenyetso kikuyobora kirimo, witondera abandi bayobozi b’ibinyabiziga",
        "correct": true
      },
      {
        "text": "Gutwara neza ntagutinda mw’isangano"
      },
      {
        "text": "Guhagarara mw’isangano no guha inzira abayobozi b’ibinyabiziga baturuka iburyo bwawe"
      },
      {
        "text": "Gucana amatara yose ndanga cyerekezo ugakomeza"
      }
    ]
  },
  {
    "id": 326,
    "questionText": "Ni iki umuyobozi w’ikinyabiziga yakora ahuye n’ishyo ry’amatungo munzira nyabagendwa?",
    "choices": [
      {
        "text": "Kuvuza ihoni kugirango ayo matungo atambuke"
      },
      {
        "text": "Umuyobozi w’ikinyabiziga agomba kugabanya umuvuduko no gutambukana ubwitonzi",
        "correct": true
      },
      {
        "text": "Kwatsa amatara maremare n’amagufi no gutambuka vuba bishoboka"
      },
      {
        "text": "Kuvuza ihoni no gutambukana ubwitonzi"
      }
    ]
  },
  {
    "id": 327,
    "questionText": "Umuyobozi w’ikinyabiziga yakora iki igihe ageze ku kazamuko gashinze cyane?",
    "choices": [
      {
        "text": "Umuyobozi w’ikinyabiziga agomba kugabanya umuvuduko akaguma kuruhande rw’iburyo yirinda ibyago",
        "correct": true
      },
      {
        "text": "Gukandagira ikirenge cya amburiyage no kuvuza ihoni ryo kumunyesha"
      },
      {
        "text": "Kugumana umuvuduko n’ikirekezo wari ufite mu muhanda"
      },
      {
        "text": "Guhagarara ku mpera zuwo musozi"
      }
    ]
  },
  {
    "id": 328,
    "questionText": "Umuyobozi w’ikinyabiziga yakora iki ahuye n’ikinyabiziga giturutse mukindi kerekezo, gicanye amatara yumuhondo aburira?",
    "choices": [
      {
        "text": "Umuyobozi w’ikinyabiziga agomba kugabanya umuvuduko no gutambukana ubwitonzi",
        "correct": true
      },
      {
        "text": "Ikinyabiziga cy’ubutabazi"
      },
      {
        "text": "Yagize ibyago"
      },
      {
        "text": "Umuvudoko urenze"
      }
    ]
  },
  {
    "id": 329,
    "questionText": "Niki umuyobozi w’ikinyabiziga yakora ageze hafi y’inzira ifunganye igihe ahuye n’ikindi kinyabiziga giturutse mukindi cyerekezo?",
    "choices": [
      {
        "text": "Agomba kuguma mumwanya yarimo agategereza gutambuka kwikindi kinyabiziga"
      },
      {
        "text": "kugabanya umuvuduko no gusiga umwanya uhagije hagati y’ibinyabiziga byombi",
        "correct": true
      },
      {
        "text": "gutegereza ko undi muyobozi w’ikinyabiziga ava mu muhanda"
      },
      {
        "text": "gutwarira ikinyabiziga mu muhanda hagati kugirango abandi bayobozi bahagararare"
      }
    ]
  },
  {
    "id": 330,
    "questionText": "Umuyobozi w’ ikinyabiziga agendera inyuma y’ikindi kinyabizaga akaba adateganya kukinyuraho yakora iki?",
    "choices": [
      {
        "text": "kuguma yicyo kinyabiziga hagati mu muhanda"
      },
      {
        "text": "kuguma inyuma yacyo kugirango yemerere ibindi binyabiziga gutambuka",
        "correct": true
      },
      {
        "text": "gutwarira inyuma ye umwegereye cyane kugirango ureke ibindi binyabiziga bibanyureho"
      },
      {
        "text": "gutanga ibimenyetso kubindi binyabiziga ko byabanyuraho"
      }
    ]
  },
  {
    "id": 331,
    "questionText": "Niryari amatara ndanga cyerekezo agomba kugaragazwa kubandi bakoresha umuhanda?",
    "choices": [
      {
        "text": "igihe gusa ari ngombwa amenyesha ibindi binyabiziga bimukurikiye"
      },
      {
        "text": "igihe gusa aringombwa kuburira abandi bayobozi bava mukindi cyerekezo"
      },
      {
        "text": "mugihe gikwiye ushaka kumenyesha abandi bakoresha umuhanda icyo ugiye gukora",
        "correct": true
      },
      {
        "text": "keretse ahari ibimenyetso byo mu muhanda byerekana icyerekezo cyawe"
      }
    ]
  },
  {
    "id": 332,
    "questionText": "Gutinda gutanga ibimenyetso ku muyobozi w’ikinyabiziga ni gute bibangamira abandi bakoresha umuhanda?",
    "choices": [
      {
        "text": "bigira ingaruka gusa kubaturuka mukindi cyerekezo"
      },
      {
        "text": "bishobora gutuma batabona igihe gihagije cyo gushyira mubikorwa icyo amenyeshejwe",
        "correct": true
      },
      {
        "text": "baba bafite igihe gihagije cyo gushyira mu bikorwa ibyo bamyeshejwe"
      },
      {
        "text": "ntacy bibabangamiraho"
      }
    ]
  },
  {
    "id": 333,
    "questionText": "Ni ubuhe buryo bwiza bwakurikizwa igihe hari umuntu wakomerekeye mu mpanuka yo mu muhanda?",
    "choices": [
      {
        "text": "Ku mushyira kunkengero y’umuhanda"
      },
      {
        "text": "Kutamukuramo keretse mugihe hari ibyago byaterwa n’inkogi y’umuriro cyangwa akaba ashobora kugongwa n’ikindi kinyabiziga no guhamagara ababishinzwe",
        "correct": true
      },
      {
        "text": "Gusaba uwakomeretse kunyeganyeza ibice by’umubiri kugirano umenye aho ibikomere bye bigarukira"
      },
      {
        "text": "Guhumuriza uwakometse ukamuha ikinyobwo gikonje"
      }
    ]
  },
  {
    "id": 334,
    "questionText": "Niki umuyobozi w’ikinyabiziga yakora igihe agize uruhare mu mpanuka yo mu muhanda , aho ntawakometese ariko ibinyabiziga bikaba byateza icyago cyangwa byafunze umuhanda?",
    "choices": [
      {
        "text": "Gushushanya aho zagonganiye no kuzishyira kuruhande",
        "correct": true
      },
      {
        "text": "Gukuramo abagenze ugashyiraho icyapa cya mpandeshatu girukura kumodoka"
      },
      {
        "text": "Gutegereza ko abapolisi bahagera mbere yo gukura ibinyabiziga mu muhanda"
      },
      {
        "text": "Guhagarika ibindi binyabiziga kugeza ikibazo gikemutse mukabona kubikura mu muhanda"
      }
    ]
  },
  {
    "id": 335,
    "questionText": "Igihe umuyobozi w’ikinyabiziga agendera munzira y’icyerekezo kimwe akifuza gukata ibumoso yakora iki?",
    "choices": [
      {
        "text": "gutwara yegera umurongo wo hagati mu muhanda yerekeza ibumoso"
      },
      {
        "text": "gutwara yegera uruhande rw’iburyo bw’umuhanda"
      },
      {
        "text": "gutwara yegera ku uruhande rw’ibumoso bw’umuhanda",
        "correct": true
      },
      {
        "text": "Gutwarira hafi y’umurongo ugabanya umuhanda mo kabili"
      }
    ]
  },
  {
    "id": 336,
    "questionText": "Umuyobozi w’ikinyabizaga uri kugendera mu muhanda w’ibyerekezo bibiri nuruhe ruhande rw’umuhanda agomba gukoresha?",
    "choices": [
      {
        "text": "uruhande rw’ibumoso bw’umuhanda uretse igihe atawaye imashini zihinga cyangwa zikoreshwa indi mirimo"
      },
      {
        "text": "Mu gice cy;umuhanda yumva ashaka"
      },
      {
        "text": "Mu gice cy’iburyo bw’umuhanda uretse igihe ashaka kunyuranaho cyangwa gukata ibumoso",
        "correct": true
      },
      {
        "text": "Ku ruhande rw’ibumoso bw’umuhanda"
      }
    ]
  },
  {
    "id": 337,
    "questionText": "Igihe umuyobozi w’ikinyabiziga atwaye mu muhanda urombereje w’ibice byinshi agomba kugendera mu kihe gice cy’umuhanda?",
    "choices": [
      {
        "text": "Kugendera mugice icyo aricyo cyose kirimo ibinyabiziga bike"
      },
      {
        "text": "Kugendera kugice cy’ibumoso keretse ushaka gusohokera iburyo"
      },
      {
        "text": "Kugendera mu gice cy’iburyo bw’umuhanda keretse ushaka kunyuranaho",
        "correct": true
      },
      {
        "text": "Ntagutwarira mu ruhande rw’iburyo bw’umuhanda kuko hagenewe imodoka ziremereye n’imodoka nini zitwara abantu."
      }
    ]
  },
  {
    "id": 338,
    "questionText": "Umuyobozi w’ikinyabiziga yakora iki igihe ageze aho banyura bazenguruka?",
    "choices": [
      {
        "text": "Tanga inzira ku binyabiziga byamaze kwinjira aho banyura bazunguruka",
        "correct": true
      },
      {
        "text": "Tanga inzira kubinyabiziga biremereye gusa"
      },
      {
        "text": "Tanga inzira gusa niba uri munzira ya kabiri niya gatatu isohoka"
      },
      {
        "text": "Komeza kuko abandi bayobozi b’ibinyabiziga bagomba kuguha inzira yo gukomeza"
      }
    ]
  },
  {
    "id": 339,
    "questionText": "Ni kihe cyerekezo umuyobozi w’ikinyabiziga yinjiriramo iyo ageze aho banyura bazenguruka?",
    "choices": [
      {
        "text": "ibumoso"
      },
      {
        "text": "ibumoso gusa igihe ayobowe ni kimenyetso kimurika"
      },
      {
        "text": "iburyo cyangwa ibumoso"
      },
      {
        "text": "iburyo",
        "correct": true
      }
    ]
  },
  {
    "id": 340,
    "questionText": "Mbere yuko umuyobozi w’ikinyabiziga akata ibumoso mu nzira nyabagendwa, nihe ikinyabiziga kigomba kuba kiri?",
    "questionImage": "/image/img224.jpg",
    "choices": [
      {
        "text": "Mu ruhande rw’iburyo bw’inzira nyabagendwa"
      },
      {
        "text": "Gusa iburyo bwo hagati y’inzira nyabagendwa",
        "correct": true
      },
      {
        "text": "Muruhande urwarirwo rwo hagati mu nzira nyabagendwa"
      },
      {
        "text": "Mu ruhande rw’ibumoso bw’inzira nyabagendwa"
      }
    ]
  },
  {
    "id": 341,
    "questionText": "Umuyobozi w’ikinyabiziga yakwitondera iki mbere yuko y’injira munzira banyuramo bazengurutse?",
    "choices": [
      {
        "text": "ibinyabiziga bimuturuka inyuma umuvuduko bifite n’uburyo bimwegereye"
      },
      {
        "text": "ibinyabiziga biturutse ibumoso bwe n’umuvuduko bifite n’intera iri hagati ye nabyo",
        "correct": true
      },
      {
        "text": "ibinyabiziga biturutse iburyo n’umuvuduko bifite ni intera iri hagati ye nabyo"
      },
      {
        "text": "ibinyabiziga bimututse imbere , umuvuduko bifite n’intera iri hagati ye nabyo"
      }
    ]
  },
  {
    "id": 342,
    "questionText": "Umuyobozi w’ikinyabiziga ugendera inyuma y’ikinyabaziga gitwara abagenzi gihagaze gikuramo cyangwa gishyiramo abagenzi agomba :",
    "choices": [
      {
        "text": "kunyuranaho ibumoso",
        "correct": true
      },
      {
        "text": "gutegereza yihanganye"
      },
      {
        "text": "a na b ni ibisubizo by’ukuri"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 343,
    "questionText": "Igihe ubonye icyapa kigaragaza ishuli wakora iki?",
    "choices": [
      {
        "text": "kugabanya umuvuduko no gukomeza witonze",
        "correct": true
      },
      {
        "text": "gukomeza n’umuvuduko uri hejuru kuko umunyeshuli agomba gutegereza"
      },
      {
        "text": "kuvuza ihoni"
      },
      {
        "text": "ibisubizo byose ni ukuri"
      }
    ]
  },
  {
    "id": 344,
    "questionText": "Umubare w’abagenzi bemewe gutwarwa mukinyabiziga wanditswe mu :",
    "choices": [
      {
        "text": "icyemezo cy’iyandikwa ry’ikinyabiziga"
      },
      {
        "text": "inyemezabwishyu y’umusoro"
      },
      {
        "text": "ubwishingizi",
        "correct": true
      },
      {
        "text": "ibisubizo byose ni ukuri"
      }
    ]
  },
  {
    "id": 345,
    "questionText": "Gutwara ikinyabiziga wasinze:",
    "choices": [
      {
        "text": "biremewe kubinyabiziga byabikorera kugiti cyabo"
      },
      {
        "text": "biremewe nijoro"
      },
      {
        "text": "birabujijwe ku binyabiziga byose bifite moteri",
        "correct": true
      },
      {
        "text": "ibisubizo byose nibyo"
      }
    ]
  },
  {
    "id": 346,
    "questionText": "Umuyobozi w’ikinyabizaga ashobora kunyuranaho:",
    "choices": [
      {
        "text": "ahamanuka"
      },
      {
        "text": "igihe umuhanda ari mugari"
      },
      {
        "text": "igihe umuyobozi w’ikinyabiziga kiri imbere ye amweretse ikimenyetso kimwemerera kunyuranaho",
        "correct": true
      },
      {
        "text": "nta gisubizo cy’ukuri"
      }
    ]
  },
  {
    "id": 347,
    "questionText": "Ugeze ahari inzira yabanyamaguru barindiriye kwambuka. Ntibatangiye kwambuka , wakora iki?",
    "choices": [
      {
        "text": "kuvuza ihoni"
      },
      {
        "text": "kwihangana ugatagereza",
        "correct": true
      },
      {
        "text": "gukomeza"
      },
      {
        "text": "nta gisubizo cy’ukuri"
      }
    ]
  },
  {
    "id": 348,
    "questionText": "Igihe utwaye umuntu mu kinyabiziga cyawe, akibagirwa kwambara umukandara wo kwirinda ibyago ugomba:",
    "choices": [
      {
        "text": "gukuramo umukandara wo kwirinda ibyago wambaye mukawambara mwembi"
      },
      {
        "text": "kubyerengagiza wizeyeko nta mpanuka muri bukore"
      },
      {
        "text": "funga cyane umukandara wo kwirinda ibyago wawe"
      },
      {
        "text": "Kubibutsa kwambara umukandara wo kwirinda ibyago",
        "correct": true
      }
    ]
  },
  {
    "id": 349,
    "questionText": "Igihe za otobisi zigenewe gutwara banyeshuli zihagaze kugirango zibafate cyangwa bavemo ugomba :",
    "choices": [
      {
        "text": "kuvuza ihoni ugakomeza"
      },
      {
        "text": "gukomeza ugabanyije umuvuduko n’ubwitonzi kuko bishoboka ko abanyeshuli bakwambuka bitunguranye",
        "correct": true
      },
      {
        "text": "nta bwitonzi budasnzwe bukenewe"
      },
      {
        "text": "ibisubizo byose ni ukuri"
      }
    ]
  },
  {
    "id": 350,
    "questionText": "Igihe imodoka iparitse ku nkengero z’umuhanda mugihe cy’ ijoro :",
    "choices": [
      {
        "text": "Imodoka igomba kuba ifunze"
      },
      {
        "text": "Umuntu ufite uruhushya rwo gutwara ikinyabiziga agomba kuba yicaye mu mwanya w’umuyobozi"
      },
      {
        "text": "Amatara yo guhagarara umwanya munini aguma yaka",
        "correct": true
      },
      {
        "text": "Ibisubizo byose ni ukuri"
      }
    ]
  },
  {
    "id": 351,
    "questionText": "Mu gihe hari undi muyobozi w’ikinyabiziga ugukurikiye watangiye kukunyuraho :",
    "choices": [
      {
        "text": "Ntugomba kugira undi muyobozi w’ikinyabiziga unyuraho",
        "correct": true
      },
      {
        "text": "Ugomba kunyura ku kindi kinyabiziga"
      },
      {
        "text": "Ugomba kunyura kukindi kinyabiziga uvugije ihoni"
      },
      {
        "text": "Nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 352,
    "questionText": "Utwaye ikinyabiziga mu muhanda ufite ibyerekezo bibiri. Ikinyabiziga imbere yawe cyiragenda buhoro, imbere yawe umuhanda ntakibazo kunyuranaho, ugomba :",
    "choices": [
      {
        "text": "kucyinyuraho bikorewe ibumoso",
        "correct": true
      },
      {
        "text": "kucyinyuraho bikorewe iburyo"
      },
      {
        "text": "kucyinyuraho ukoresheje uruhande urwo arirwo rwose"
      },
      {
        "text": "ibisubizo byose ni ukuri"
      }
    ]
  },
  {
    "id": 353,
    "questionText": "Ibice by’umuhanda byera bigari biteganye n’umurongo ugabanya umuhanda mo ,kabiri bisobanura:",
    "choices": [
      {
        "text": "guhagara kw’ikinyabiziga"
      },
      {
        "text": "aho abanyamaguru bambukira",
        "correct": true
      },
      {
        "text": "guha ubushobozi binyabiziga"
      },
      {
        "text": "ibisubizo byose ni ukuri"
      }
    ]
  },
  {
    "id": 354,
    "questionText": "Uturebanyuma dukoreshwa:",
    "choices": [
      {
        "text": "kwireba"
      },
      {
        "text": "kugenzura ibigendera mu muhanda inyuma",
        "correct": true
      },
      {
        "text": "kureba abicaye inyuma"
      },
      {
        "text": "ntagisubizo cy’ukuri"
      }
    ]
  },
  {
    "id": 355,
    "questionText": "Kuki abanyamaguru batemerewe kwambuka umuhanda mw’ikoni cyangwa hafi y’imodoka ihagaze?",
    "choices": [
      {
        "text": "ingaruka kubindi binyabiziga"
      },
      {
        "text": "ingaruka kubandi bakoresha umuhanda"
      },
      {
        "text": "Abandi bayobozi bi binyabiziga baza bashobora kutabona abambuka umuhanda",
        "correct": true
      },
      {
        "text": "Ibisubizo byose ni ukuri"
      }
    ]
  },
  {
    "id": 356,
    "questionText": "Kunyuranaho mw’ikoni :",
    "choices": [
      {
        "text": "biremewe"
      },
      {
        "text": "ntibyemewe",
        "correct": true
      },
      {
        "text": "biremewe ukoranye ubwitonzi"
      },
      {
        "text": "ibisubizo byose ni ukuri"
      }
    ]
  },
  {
    "id": 357,
    "questionText": "Umuyobozi w’ikinyabiziga igihe atwaye ikinyabiziga akagira umunaniro utuma yasinzira yakora iki?",
    "choices": [
      {
        "text": "Gufungura ikirahure cy’ikinyabiziga cyangwa gushyira ubukonje mu modoka kugirango umwuka mwiza winjire mu kinyabiziga"
      },
      {
        "text": "Guhagarara akaruhuka harimo no kugendagenda niba bishoboka",
        "correct": true
      },
      {
        "text": "Kunanura amaboko no gufunga amaso mugihe gito"
      },
      {
        "text": "Kongera ubushyuhe mu kinyabiziga"
      }
    ]
  },
  {
    "id": 358,
    "questionText": "Niki umuyobozi w’ikinyabiziga yakora igihe atwaye ikinyabiziga mugihe cy’ibihu,imvura nyinshi, umwuzure cyangwa umukungugu mwinshi?",
    "choices": [
      {
        "text": "Kugendera mu tuyira turi kumpande zu muhanda, ucunga ibimenyetso bigarura urumuri"
      },
      {
        "text": "Kugabanya umuvuduko hanyuma ugakoresha amatara magufi",
        "correct": true
      },
      {
        "text": "Gucana amatara maremare hanyuma ukagenda gahoro"
      },
      {
        "text": "Kugendera mu murongo ugabanya umuhanda mo kabiri unareba ibimenyestso by’umuhanda bigarura urumuri"
      }
    ]
  },
  {
    "id": 359,
    "questionText": "Muri ibi byapa ni ubuhe bwoko bw’ibyapa bitegeka byo mu muhanda?",
    "choices": [
      {
        "text": "ibiri mw’ishusho y’urukiramende n’umuzenguruko w’umuhondo"
      },
      {
        "text": "ibiri mw’ishusho ya mpande eshatu mu n’uzenguruko mw’ibara ry’ubururu"
      },
      {
        "text": "ibiri mw’ishusho y’uruziga n’umuzenguruko mw’ibara ry’umutuku",
        "correct": true
      },
      {
        "text": "ibiri mw’ishusho ya mpande enye zingana mubuso bw’umukara"
      }
    ]
  },
  {
    "id": 360,
    "questionText": "Ugeze mu masangano y’umuhanda aho usanga ibimenyetso bimurika bidakora, wakora iki igihe umukozi ubifiye ububasha aguhaye iki kimenyesto?",
    "questionImage": "/image/img233.jpg",
    "choices": [
      {
        "text": "gukata ibumoso gusa"
      },
      {
        "text": "gukata iburyo gusa ugakomeza imbere"
      },
      {
        "text": "Guhagarara kumurongo wo guhagarara umwanya moto",
        "correct": true
      },
      {
        "text": "komeza imbere gusa"
      }
    ]
  },
  {
    "id": 361,
    "questionText": "Amatara ndangacyerekezo agomba kugaragara nijoro igihe ijuru rikeye mu ntera nibura ya:",
    "choices": [
      {
        "text": "m 100"
      },
      {
        "text": "m 200"
      },
      {
        "text": "m150",
        "correct": true
      },
      {
        "text": "m250"
      }
    ]
  },
  {
    "id": 362,
    "questionText": "Umurongo ucagaguye uvuga ko buri muyobozi abujijwe kuwurenga uretse mu gihe:",
    "choices": [
      {
        "text": "Agomba kunyura ku kindi kinyabiziga"
      },
      {
        "text": "Gukatira ibumoso"
      },
      {
        "text": "Guhindukira cyangwa kujya mukindi gice cy’umuhanda"
      },
      {
        "text": "Ibi bisubizo byose nibyo",
        "correct": true
      }
    ]
  },
  {
    "id": 363,
    "questionText": "Igice cy’inzira nyabagendwa kigarukira kumirongo ibiri yera icagaguye ibangikanye kandi gifite ubugari budahagije kugirango imodoka zitambuke neza kiba ari:",
    "choices": [
      {
        "text": "Inzira y’abanyamaguru"
      },
      {
        "text": "Agahanda k’amagare",
        "correct": true
      },
      {
        "text": "a na b byose ni ukuri"
      },
      {
        "text": "Nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 364,
    "questionText": "Icyapa kimenyesha kugendera mu muhanda ubisikanirwamo gifite:",
    "choices": [
      {
        "text": "Ishusho y’uruziga mw’ibara ritukura, ubuso bwera n’ikirango cy’umukara"
      },
      {
        "text": "Ishusho ya mpandeshatu mw’ibara ritukura, ubuso bwera n’ikirango cy’umukara",
        "correct": true
      },
      {
        "text": "Ishusho ya mpandeshatu mw’ibara ritukura, ubuso bw’ubururu n’ikirango cy’umukara"
      },
      {
        "text": "Ishusho y’uruziga mw’ibara ritukura, ubuso bw’ubururu n’ikirango cy’umukara"
      }
    ]
  },
  {
    "id": 365,
    "questionText": "Ikinyabiziga kigendeshwa na moteri n’ikinyabiziga gikururwa n’inyamaswa ntibishobora gukurura :",
    "choices": [
      {
        "text": "Ibinyabiziga birenze kimwe"
      },
      {
        "text": "Ibinyabiziga bipakiye birenze bibiri"
      },
      {
        "text": "Ibinyabiziga birenze bibiri",
        "correct": true
      },
      {
        "text": "b na c ni byo"
      }
    ]
  },
  {
    "id": 366,
    "questionText": "Iki cyapa kivuga:",
    "questionImage": "/image/img105.jpg",
    "choices": [
      {
        "text": "Aho imihanda ihurira"
      },
      {
        "text": "inkomane y’aho umuhanda umwe urasukira iburyo"
      },
      {
        "text": "a na b ni ibisubizo by’ukuri"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 367,
    "questionText": "Iki cyapa gisobanura ibi bikurikira:",
    "questionImage": "/image/img238.jpg",
    "choices": [
      {
        "text": "birabujijwe kunyura ku kindi kinyabiziga"
      },
      {
        "text": "gutambuka mbere kw’ibinyabiziga bituruka aho ujya",
        "correct": true
      },
      {
        "text": "A na b ni ibisubizo by’ukuri"
      },
      {
        "text": "nta gisubizo cyukuri kirimo"
      }
    ]
  },
  {
    "id": 368,
    "questionText": "Utugarurarumuri turi ku ruhande rw’imbere rw’ikinyabiziga tugomba gusa:",
    "choices": [
      {
        "text": "N’umuhondo"
      },
      {
        "text": "N’umutuku"
      },
      {
        "text": "n’umweru",
        "correct": true
      },
      {
        "text": "Nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 370,
    "questionText": "Iki cyapa kivuga:",
    "questionImage": "/image/img240.jpg",
    "choices": [
      {
        "text": "Iherezo ryo gutambuka mbere"
      },
      {
        "text": "Gutambuka mbere kw’ibinyabiziga biturutse imbere aho ujya"
      },
      {
        "text": "gutambuka mbere y’ibinyabiziga biturutse imbere",
        "correct": true
      },
      {
        "text": "Nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 370,
    "questionText": "Iki cyapa kigizwe:",
    "questionImage": "/image/img242.jpg",
    "choices": [
      {
        "text": "ishusho mpandeshatu ,ubuso ubururu"
      },
      {
        "text": "Ishusho mpandeshatu,ubuso umukara"
      },
      {
        "text": "ishusho mpandeshatu,ubuso umweru",
        "correct": true
      },
      {
        "text": "Nta gisubizo cy’ukuri"
      }
    ]
  },
  {
    "id": 371,
    "questionText": "Iki cyapa kivuga:",
    "questionImage": "/image/img246.jpg",
    "choices": [
      {
        "text": "ifungana ry’umuhanda iburyo"
      },
      {
        "text": "ifungana ry’umuhanda w’akayira gasatira umuhanda ibumoso",
        "correct": true
      },
      {
        "text": "Akayira gato"
      },
      {
        "text": "Nta gisubizo cy’ukuri"
      }
    ]
  },
  {
    "id": 372,
    "questionText": "Umuyobozi ubonye ko hari undi umukurikiye ashaka kumunyuraho agomba kubahiriza ibi bikurikira :",
    "choices": [
      {
        "text": "kwegera i ruhande rw’iburyo bw’umuhanda",
        "correct": true
      },
      {
        "text": "Kongera umuvuduko"
      },
      {
        "text": "Guhagarara"
      },
      {
        "text": "a na c ni byo bisubizo by’ukuri"
      }
    ]
  },
  {
    "id": 373,
    "questionText": "Iki cyapa cyerekana :",
    "questionImage": "/image/img248.jpg",
    "choices": [
      {
        "text": "ifungana ry’umuhanda"
      },
      {
        "text": "ifungana ry’umuhanda n’akayira gasatira umuhanda i bumoso"
      },
      {
        "text": "umuhanda utaringaniye"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 374,
    "questionText": "Icyi cyapa gisobanura :",
    "questionImage": "/image/img250.jpg",
    "choices": [
      {
        "text": "ntihanyurwa mu byerekezo byombi",
        "correct": true
      },
      {
        "text": "ntihanyurwa n’abandi uretse abahatuye"
      },
      {
        "text": "hanyurwa mu cyerekezo kimwe gusa"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 375,
    "questionText": "Icyi cyapa cyerekana :",
    "questionImage": "/image/img254.jpg",
    "choices": [
      {
        "text": "Ifungana ry’umuhanda"
      },
      {
        "text": "umuhanda unyerera"
      },
      {
        "text": "umuhanda utaringaniye"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 376,
    "questionText": "Iki cyapa kivuga:",
    "questionImage": "/image/img256.jpg",
    "choices": [
      {
        "text": "ikoni iburyo",
        "correct": true
      },
      {
        "text": "akazamuko gashinze cyane"
      },
      {
        "text": "akamanuko gashobora gutera ibyago"
      },
      {
        "text": "b na c byose ni ukuri"
      }
    ]
  },
  {
    "id": 377,
    "questionText": "Iyo umuhanda ugabanijemo ibisate bibiri kandi ugendwamo mu byerekezo byombi umuyobozi abujijwe :",
    "choices": [
      {
        "text": "kugendera mu gisate cy’iburyo"
      },
      {
        "text": "kunyuranaho"
      },
      {
        "text": "kugendera mu gisate cy’ibumoso",
        "correct": true
      },
      {
        "text": "ibisubizo byose ni byo"
      }
    ]
  },
  {
    "id": 378,
    "questionText": "Icyapa kimenyesha kugendera mu muhanda ubisikanirwamo gifite:",
    "choices": [
      {
        "text": "Ishusho y’uruziga mw’ibara ritukura, ubuso bwera n’ikirango cy’umukara"
      },
      {
        "text": "Ishusho ya mpandeshatu mw’ibara ritukura, ubuso bwera n’ikirango cy’umukara",
        "correct": true
      },
      {
        "text": "Ishusho ya mpandeshatu mw’ibara ritukura, ubuso bw’ubururu n’ikirango cy’umukara"
      },
      {
        "text": "Ishusho y’uruziga mw’ibara ritukura, ubuso bw’ubururu n’ikirango cy’umukara"
      }
    ]
  },
  {
    "id": 379,
    "questionText": "Icyapa cyerekana inzira y’amatungo itegetswe giteye:",
    "choices": [
      {
        "text": "Uruziga mubuso bw’ubururu, ishusho y’inka mu ibara ry’umukara"
      },
      {
        "text": "Uruziga mu ibara ryera, ishusho y’inka mwibara ry’ubururu"
      },
      {
        "text": "Uruziga mu buso bw’ibara ry’ubururu, ishusho y’inka mu ibara ryera n’ikirango cy’umukara"
      },
      {
        "text": "mpande eshatu mu buso bw’ibara ry’umweru n’ishusho y’inka mu ibara ry’umukara",
        "correct": true
      }
    ]
  },
  {
    "id": 380,
    "questionText": "Icyapa cyerekana ko bibujijwe kuvuza amahoni kirangwa na :",
    "choices": [
      {
        "text": "Ishusho y’uruziga, ubuso bw’ubururu, ikiranga cy’umukara"
      },
      {
        "text": "Ishusho y’uruziga, ubuso bw’ubururu, ikiranga cy’umweru"
      },
      {
        "text": "Ishusho y’uruziga, ubuso bw’umweru, ikiranga cy’umukara",
        "correct": true
      },
      {
        "text": "Ntagisubizi cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 381,
    "questionText": "Ibyapa biburira nibyo gutambuka mbere birangwa:",
    "choices": [
      {
        "text": "ishusho mpandeshatu mw’ibara ritukura , ubuso bwera n’ ikiranga mu ibara ry’umukara",
        "correct": true
      },
      {
        "text": "ishusho mpandeshatu mw’ibara ritukura,ubuso bw’ubururu n’ikiranga mu ibara ry’umukara"
      },
      {
        "text": "ishusho y’uruziga mw’ibara ritukura,ubuso bw’ubururu n’ikiranga mu ibara ry’umukara"
      },
      {
        "text": "ishusho y’uruziga mw’ibara ritukura,ubuso bwera n’ikiranga mu ibara ry’umukara"
      }
    ]
  },
  {
    "id": 382,
    "questionText": "Ibyapa bibuza n’ibitegeka bikurikizwa gusa :",
    "choices": [
      {
        "text": "Mumasangano"
      },
      {
        "text": "mu bimenyetso bimurika"
      },
      {
        "text": "a na b ni ibisubizo by’ukuri"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 383,
    "questionText": "Ibyapa biburira bibereyeho kumenyesha umugenzi :",
    "choices": [
      {
        "text": "ko hari icyago",
        "correct": true
      },
      {
        "text": "icyago kidasobanuye ukundi"
      },
      {
        "text": "imiterere y’icyago gitunguranye"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 384,
    "questionText": "Ibyapa by’inyongera bishobora kumenyesha.",
    "choices": [
      {
        "text": "ibitegetswe byihariye gusa"
      },
      {
        "text": "ubugerure cyangwa amarengamategeko rusange cyangwa ibibujijwe ndetse n’ibitegetswe byihariye",
        "correct": true
      },
      {
        "text": "a na b ni ibisubizo by’ukuri"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 385,
    "questionText": "Ishusho y’icyapa kivuga’’ugukikira”bitegetswe ni :",
    "choices": [
      {
        "text": "mpandeshatu"
      },
      {
        "text": "uruziga",
        "correct": true
      },
      {
        "text": "urukiramende"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 386,
    "questionText": "Icyapa kivuga “icyerekezo gitegetswe”kigizwe n’ikirango cy’ibara :",
    "choices": [
      {
        "text": "umweru"
      },
      {
        "text": "umutuku"
      },
      {
        "text": "ubururu n’ikirango cy’umweru",
        "correct": true
      },
      {
        "text": "umukara"
      }
    ]
  },
  {
    "id": 387,
    "questionText": "Iki kimenyetso gitanzwe n’umukozi ubifitiye ububasha cyo guhagarara :",
    "questionImage": "/image/img262.jpg",
    "choices": [
      {
        "text": "ku bakoresha umuhanda ba muturutse imbere"
      },
      {
        "text": "ku bakoresha umuhanda bose bamuturutse imbere n’inyuma",
        "correct": true
      },
      {
        "text": "kubakoresha umuhanda bose bamuturutse inyuma"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 388,
    "questionText": "Ibi byapa byo mu muhanda birambuza kunyuranaho ibumoso?",
    "questionImage": "/image/img263.jpg",
    "choices": [
      {
        "text": "yego",
        "correct": true
      },
      {
        "text": "yego, iyo ufite umuvuduo wa 90km/h"
      },
      {
        "text": "oya"
      },
      {
        "text": "ntagisubizo cy’ukuri"
      }
    ]
  },
  {
    "id": 390,
    "questionText": "Umuhanda urombereje w’ibice byinshi. Ndashaka kunyura kuri izi kamyo ibyiri mugihe gito ibumoso icyarimwe , biremewe?",
    "questionImage": "/image/img266.jpg",
    "choices": [
      {
        "text": "yego,"
      },
      {
        "text": "oya",
        "correct": true
      },
      {
        "text": "yego bikorewe ibumoso"
      },
      {
        "text": "ntagisubizo cy’ukuri"
      }
    ]
  },
  {
    "id": 391,
    "questionText": "K’umuyobozi w’ivatiri, iki cyapa kivuze iki?",
    "questionImage": "/image/img267.jpg",
    "choices": [
      {
        "text": "kirambuza gutwara ku muvuduko utarengeje 5km/h"
      },
      {
        "text": "ntaburenganzira kimpa, mugihe gikurikizwa ku binyabiziga bifite hejuru y atoni 5"
      },
      {
        "text": "ntacyo bindebaho mugihe bireba gusa zipima tone 5 no kurengaho.",
        "correct": true
      },
      {
        "text": "Ntagisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 392,
    "questionText": "Ndashaka gukata iburyo. Biremewe?",
    "questionImage": "/image/img270.jpg",
    "choices": [
      {
        "text": "yego"
      },
      {
        "text": "yego, ariko nyuma yo guhagarara"
      },
      {
        "text": "ntabwo byemewe",
        "correct": true
      },
      {
        "text": "ntagisubizo cyukuri kirimo"
      }
    ]
  },
  {
    "id": 393,
    "questionText": "Umuhanda wambukiranya inzira ya gariyamoshi",
    "questionImage": "/image/img271.jpg",
    "choices": [
      {
        "text": "nshobora gukomeza nkambuka umuhanda kubera ko uruzitiro rufunguye"
      },
      {
        "text": "ngomba guhagarara munsi yitara ry’umutuku rimyatsa",
        "correct": true
      },
      {
        "text": "ntabwo nakomeza urugendo rwanjye. Ngomba gihita mpagarara"
      },
      {
        "text": "ntagisubizo cy’ukuri"
      }
    ]
  },
  {
    "id": 394,
    "questionText": "Kuri iki cyapa cyo mu muhanda cyambere kintegeka?",
    "questionImage": "/image/img272.jpg",
    "choices": [
      {
        "text": "Kugendera k’umuvuduko uri hejuru ya 30km/h"
      },
      {
        "text": "kutarenza umuvuduko wa 30km/h"
      },
      {
        "text": "birabujijwe kugendera kumuvuduko uri hejuru ya 30km/h",
        "correct": true
      },
      {
        "text": "nta gisubizo cyukuri"
      }
    ]
  },
  {
    "id": 395,
    "questionText": "Mpagaze mu murongo wo guhagarara umwanya muto",
    "questionImage": "/image/img273.jpg",
    "choices": [
      {
        "text": "Nshobora gukata iburyo"
      },
      {
        "text": "Nshobora gukata ibumoso",
        "correct": true
      },
      {
        "text": "Nshobora gukata ibumoso cyangwa iburyo"
      },
      {
        "text": "Ntagisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 396,
    "questionText": "Ngomba :",
    "questionImage": "/image/img276.jpg",
    "choices": [
      {
        "text": "guhagarara igihe gito kuri icyi cyapa cy’umuhanda"
      },
      {
        "text": "guhagarara ngatanga inzira kuri metero 100 ntaragera kuri icyi cyapa",
        "correct": true
      },
      {
        "text": "gutanga inzira nkanahagarara iyo ari ngombwa muri m100 ntaragera kuri icyi cyapa"
      },
      {
        "text": "ntagisubizo cy’ukuri"
      }
    ]
  },
  {
    "id": 397,
    "questionText": "Ndashaka kugata ibumoso. Imodoka y’icyatsi yaje irahagarara. Ninde ufite uburenganzira bwo gutambuka mbere?",
    "questionImage": "/image/img278.jpg",
    "choices": [
      {
        "text": "mfite uburenganzira bwo gutambuka mbere"
      },
      {
        "text": "imodoka y’icyatsi ifite uburenganzira bwo gutambuka mbere",
        "correct": true
      },
      {
        "text": "twembi ntaburenganzira bwo gutambuka mbere gusa tugomba gutambukana ubwitonzi"
      },
      {
        "text": "ntagisubizo nakimwe kirimo"
      }
    ]
  },
  {
    "id": 398,
    "questionText": "Mfite uburenganzira bwo gutambuka muri iri sangano?",
    "questionImage": "/image/img280.jpg",
    "choices": [
      {
        "text": "yego, niba ukata ibumoso"
      },
      {
        "text": "Oya niba ukata iburyo"
      },
      {
        "text": "yego , bitewe noho ngana",
        "correct": true
      },
      {
        "text": "ntagisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 399,
    "questionText": "Ndi kumuvuduko wa 20km/h. nshobora gukomeza muri iri sangano ry’umuhanda?",
    "questionImage": "/image/img281.jpg",
    "choices": [
      {
        "text": "oya",
        "correct": true
      },
      {
        "text": "yago, nshobora gukata iburyo"
      },
      {
        "text": "yego, nshobora guta ibumoso cyangwa iburyo"
      },
      {
        "text": "yego, nshobora gukata ibumoso gusa"
      }
    ]
  },
  {
    "id": 400,
    "questionText": "Umuyobozi wikinyabiziga aritegura kunyuraho ibumoso :",
    "questionImage": "/image/img284.jpg",
    "choices": [
      {
        "text": "nshobora kumunyuraho nyuze iburyo"
      },
      {
        "text": "sinshobora kumunyura"
      },
      {
        "text": "nshobora kumunyura nciye ibumoso ariko mbonye ko mfite umwanya uhagije",
        "correct": true
      },
      {
        "text": "Ntagisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 401,
    "questionText": "Uhereye kuri ibi byapa habujijwe :",
    "questionImage": "/image/img285.jpg",
    "choices": [
      {
        "text": "Kunyuranaho kubinyabiziga bikururwa nibinyabiziga birengeje imitende ibiri ibumoso no kugendera kumuvuduko urengeje 70 km/h",
        "correct": true
      },
      {
        "text": "Kunyuranaho kubinyabiziga bikururwa cyangwa ibinyabiziga birengeje imitende ibiri ibumoso"
      },
      {
        "text": "kugendera hejuru ya 70 km/h"
      },
      {
        "text": "ntagisubizo cy’ukuri"
      }
    ]
  },
  {
    "id": 402,
    "questionText": "Ndashaka gupariki ikinyabiga iburyo kunzira y’abanyamaguru",
    "questionImage": "/image/img286.jpg",
    "choices": [
      {
        "text": "biremewe munsi yicyi cyapa",
        "correct": true
      },
      {
        "text": "biremewe imbere y’icyi cyapa"
      },
      {
        "text": "birabujijwe imbere n’inyuma yicyi cyapa"
      },
      {
        "text": "nta gisubizo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 403,
    "questionText": "Iki cyapa gisobanura iki?",
    "questionImage": "/image/img287.jpg",
    "choices": [
      {
        "text": "Guhagarara, aho abanyeshuri bambukira"
      },
      {
        "text": "Hagarara akanya gato",
        "correct": true
      },
      {
        "text": "Ibindi binyabiziga bigomba kuguha inzira"
      },
      {
        "text": "Gutanga umwanya ku bindi binyabiziga i buryo bwawe"
      }
    ]
  },
  {
    "id": 404,
    "questionText": "Iki cyapa gisobanura iki mu nkomane?",
    "questionImage": "/image/img288.jpg",
    "choices": [
      {
        "text": "Tanga inzira ku binyabiziga binini"
      },
      {
        "text": "Gabanya umuvuduko uhe inzira abanyamaguru."
      },
      {
        "text": "Tanga inzira ku binyabiziga bigenda mu muhanda munini wegera",
        "correct": true
      },
      {
        "text": "Tanga inzira ku ibinyabiziga biturutse iburyo bwawe"
      }
    ]
  },
  {
    "id": 405,
    "questionText": "Iki cyapa gisobanura iki aho banyura bazengurutse?",
    "questionImage": "/image/img292.jpg",
    "choices": [
      {
        "text": "Tanga inzira ku binyabiziga biri mu muhanda munini"
      },
      {
        "text": "Tanga inzira ku binyabiziga biturutse i bumoso",
        "correct": true
      },
      {
        "text": "Tanga inzira ku ma kamyo na za otobisi"
      },
      {
        "text": "Ibinyabiziga byose uretse amapikipiki bigomba gutanga inzira"
      }
    ]
  },
  {
    "id": 406,
    "questionText": "Iki cyapa gisobanura iki?",
    "questionImage": "/image/img294.jpg",
    "choices": [
      {
        "text": "Komeza imbere gusa",
        "correct": true
      },
      {
        "text": "Aho kunyuranaho imbere"
      },
      {
        "text": "Aho guhagarara umwanya munini"
      },
      {
        "text": "Inzira y’ icyerekezo kimwe"
      }
    ]
  },
  {
    "id": 407,
    "questionText": "Iki cyapa gisobanura iki?",
    "questionImage": "/image/img295.jpg",
    "choices": [
      {
        "text": "Umuhanda urombereje w’ibice byinshi ibumoso"
      },
      {
        "text": "Umuhanda uyoborejwe i bumoso"
      },
      {
        "text": "Ibinyabiziga biturutse iburyo bifite uburenganzira bwo gutambuka mbere"
      },
      {
        "text": "Kata i bumoso gusa",
        "correct": true
      }
    ]
  },
  {
    "id": 408,
    "questionText": "Iki cyapa gisobanura iki?",
    "questionImage": "/image/img296.jpg",
    "choices": [
      {
        "text": "Kunyuranaho bikorerwa i buryo gusa"
      },
      {
        "text": "Umuhanda uyoborejwe i buryo"
      },
      {
        "text": "Kata i buryo gusa",
        "correct": true
      },
      {
        "text": "Umuhanda munini urasukira i bumoso"
      }
    ]
  },
  {
    "id": 409,
    "questionText": "Iki cyapa gisobanura iki?",
    "questionImage": "/image/img297.jpg",
    "choices": [
      {
        "text": "Birabujijwe gukata i buryo",
        "correct": true
      },
      {
        "text": "Tanga inzira ku bindi binyabiziga bigenda mu gihe ugiye gukatira iburyo"
      },
      {
        "text": "Kata i buryo mu gihe nta bindi binyabiziga biturutse mu kindi cyerekezo"
      },
      {
        "text": "Nta nkengero y’umuhanda yegutse iri i buryo"
      }
    ]
  },
  {
    "id": 8,
    "questionText": "Iki cyapa gisobanura iki?",
    "questionImage": "/image/img300.jpg",
    "choices": [
      {
        "text": "Ntihasohokerwa i bumoso mu nzira banyuramo bazengurutse"
      },
      {
        "text": "Umuhanda udakomeza ibumoso"
      },
      {
        "text": "Nta nkengero y’umuhanda yegutse iri ibumoso"
      },
      {
        "text": "Birabujijwe gukata ibumoso",
        "correct": true
      }
    ]
  },
  {
    "id": 410,
    "questionText": "Iki cyapa gisobanura iki?",
    "questionImage": "/image/img301.jpg",
    "choices": [
      {
        "text": "Birabujijwe guhindukira",
        "correct": true
      },
      {
        "text": "Birabijijwe gusubira inyuma"
      },
      {
        "text": "Umuhanda unyerera imbere"
      },
      {
        "text": "Ntibyemewe kugendera mu byerekezo byombi"
      }
    ]
  },
  {
    "id": 411,
    "questionText": "Iki cyapa gisobanura iki?",
    "questionImage": "/image/img302.jpg",
    "choices": [
      {
        "text": "Umuhanda urombereje w’ibice byinshi ku birometero 50"
      },
      {
        "text": "Intera nto ntarengwa ya metero 50 hagati y’ibinyabiziga"
      },
      {
        "text": "Umuvuduko urenga ibirometero 50 mu isaha"
      },
      {
        "text": "Umuvuduko ntarengwa ugarukira ku birometero 50 mu isaha",
        "correct": true
      }
    ]
  },
  {
    "id": 412,
    "questionText": "Iki cyapa gisobanura iki?",
    "questionImage": "/image/img303.jpg",
    "choices": [
      {
        "text": "Birabujijwe ku binyabiziga bitwara abakozi ba leta"
      },
      {
        "text": "Birabujijwe guhagara umwanya munini",
        "correct": true
      },
      {
        "text": "Birabujijwe ku binyabiziga by’abikorera ki giti cyabo"
      },
      {
        "text": "Parikingi"
      }
    ]
  },
  {
    "id": 413,
    "questionText": "Iki cyapa gisobanura iki?",
    "questionImage": "/image/img304.jpg",
    "choices": [
      {
        "text": "Aho guhagararwamo n’abanyamagare imbere"
      },
      {
        "text": "Aho abana bagenewe kwiga gutwara amagare"
      },
      {
        "text": "Inzira y’iminyamitende n’abanyamaguru itegetswe",
        "correct": true
      },
      {
        "text": "Abanyamagare bagomba kuva ku igare bakagendesha amaguru"
      }
    ]
  },
  {
    "id": 414,
    "questionText": "Iki cyapa gisobanura iki?",
    "questionImage": "/image/img307.jpg",
    "choices": [
      {
        "text": "Uburemere ntarengwa bwemewe bwa toni 3"
      },
      {
        "text": "Ntihanyurwa n’ibinyabiziga bigenewe gutwara ibicuruzwa",
        "correct": true
      },
      {
        "text": "Ntihanyurwa n’ibinyabiziga bifite imitambiko itatu"
      },
      {
        "text": "Hanyurwa n’ibinyabiziga bifite imitambiko itatu gusa"
      }
    ]
  },
  {
    "id": 415,
    "questionText": "Iki cyapa gisobanura iki?",
    "questionImage": "/image/img309.jpg",
    "choices": [
      {
        "text": "Inkomane banyuramo bazengurutse",
        "correct": true
      },
      {
        "text": "Biremewe guhindukira"
      },
      {
        "text": "Inzira y’icyerekezo kimwe imbere"
      },
      {
        "text": "Birabujijwe guhindukira"
      }
    ]
  },
  {
    "id": 416,
    "questionText": "Iki cyapa gisobanura iki?",
    "questionImage": "/image/img311.jpg",
    "choices": [
      {
        "text": "Umuhanda ugabanijwemo ibisate bibiri"
      },
      {
        "text": "Umuhanda ugabanijwemo ibisate bine"
      },
      {
        "text": "Inzira y’icyerekezo kimwe"
      },
      {
        "text": "Ukugendera mu muhanda ubisikanirwamo",
        "correct": true
      }
    ]
  },
  {
    "id": 417,
    "questionText": "Iki cyapa gisobanura iki?",
    "questionImage": "/image/img313.jpg",
    "choices": [
      {
        "text": "Umuhanda utaringaniye i buryo"
      },
      {
        "text": "Akamanuko gashobora gutera ibyago",
        "correct": true
      },
      {
        "text": "Ahantu umuhanda umeze nabi"
      },
      {
        "text": "Uguhinguka ku mwaro cyangwa ku nkombe"
      }
    ]
  },
  {
    "id": 418,
    "questionText": "Iki cyapa gisobanura iki?",
    "questionImage": "/image/img315.jpg",
    "choices": [
      {
        "text": "Akazamuko gashinze cyane",
        "correct": true
      },
      {
        "text": "Umuhanda utaringaniye i bumoso"
      },
      {
        "text": "Ahantu umuhanda umeze nabi"
      },
      {
        "text": "Ahegereye utununga"
      }
    ]
  },
  {
    "id": 419,
    "questionText": "Iki cyapa gisobanura iki?",
    "questionImage": "/image/img317.jpg",
    "choices": [
      {
        "text": "Akazamuko gashinze cyane"
      },
      {
        "text": "Umuyaga w’intambike"
      },
      {
        "text": "Uruhererekane rw’amakoni"
      },
      {
        "text": "Umuhanda unyerera",
        "correct": true
      }
    ]
  },
  {
    "id": 420,
    "questionText": "Iki cyapa gisobanura iki?",
    "questionImage": "/image/img321.jpg",
    "choices": [
      {
        "text": "Abana",
        "correct": true
      },
      {
        "text": "Inzira y’abanyamaguru – Itegure guhagarara"
      },
      {
        "text": "Ikibuga cy’imikino cy’abana"
      },
      {
        "text": "Ikibuga cy’ imyidagaduro"
      }
    ]
  },
  {
    "id": 421,
    "questionText": "Iki cyapa gisobanura iki?",
    "questionImage": "/image/img323.jpg",
    "choices": [
      {
        "text": "Isoko ry’amatungo"
      },
      {
        "text": "Ivuriro ry’amatungo"
      },
      {
        "text": "Uruzitiro rw’amatungo"
      },
      {
        "text": "Akayira k’amatungo",
        "correct": true
      }
    ]
  },
  {
    "id": 422,
    "questionText": "Mu byapa bikurikira , ni ikihe cyerekana umuhanda udakomeza:",
    "questionImage": "/image/img325.jpg",
    "choices": [
      {
        "text": "Icyapa C1"
      },
      {
        "text": "Icyapa E14",
        "correct": true
      },
      {
        "text": "Icyapa C2a"
      },
      {
        "text": "Icyapa B2a"
      }
    ]
  },
  {
    "id": 423,
    "questionText": "Iki cyapa gisobanura iki?",
    "questionImage": "/image/img326.jpg",
    "choices": [
      {
        "text": "Tanga inzira",
        "correct": true
      },
      {
        "text": "Icyago"
      },
      {
        "text": "Icyerekezo kimwe"
      },
      {
        "text": "Ntihanyurwa"
      }
    ]
  },
  {
    "id": 424,
    "questionText": "Muri ibi byapa bikurikira ni ikihe cyerekana ko umuyobozi ukibonye yemerewe gutambuka mbere y'abaturutse aho agana mu nzira ifunganye:",
    "questionImage": "/image/img330.jpg",
    "choices": [
      {
        "text": "Icyapa B6",
        "correct": true
      },
      {
        "text": "Icyapa A19"
      },
      {
        "text": "Icyapa B3"
      },
      {
        "text": "Icyapa A22a"
      }
    ]
  },
  {
    "id": 425,
    "questionText": "Iki cyapa:",
    "questionImage": "/image/img331.jpg",
    "choices": [
      {
        "text": "Aho banyura bazengurutse",
        "correct": true
      },
      {
        "text": "Cyerekana umuhanda w'ibisate bitatu"
      },
      {
        "text": "Cyerekana ahegereye inkomane"
      },
      {
        "text": "Ntagisuzo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 426,
    "questionText": "Iki cyapa gisobanura iki?",
    "questionImage": "/image/img333.jpg",
    "choices": [
      {
        "text": "Hanyurwa mu cyerekezo kimwe"
      },
      {
        "text": "Ntihanyurwa",
        "correct": true
      },
      {
        "text": "Umuhanda udakomeza"
      },
      {
        "text": "Ntagisuzo cy’ukuri kirimo"
      }
    ]
  },
  {
    "id": 427,
    "questionText": "Ni ikihe icyapa gisobanura umuhanda w'icyerekezo kimwe:",
    "questionImage": "/image/img335.jpg",
    "choices": [
      {
        "text": "Icyapa D1a"
      },
      {
        "text": "Icyapa E13a",
        "correct": true
      },
      {
        "text": "Icyapa C19"
      },
      {
        "text": "Icyapa C1"
      }
    ]
  },
  {
    "id": 428,
    "questionText": "Iki cyapa gisobanura iki?",
    "questionImage": "/image/img336.jpg",
    "choices": [
      {
        "text": "Aho imihanda ihurira"
      },
      {
        "text": "Inkomane y’aho umuhanda umwe urasukira iburyo"
      },
      {
        "text": "Umuhanda udakomeza"
      },
      {
        "text": "Nta gisubizo kirimo",
        "correct": true
      }
    ]
  },
  {
    "id": 429,
    "questionText": "Iki cyapa gisobanura iki?",
    "questionImage": "/image/img340.jpg",
    "choices": [
      {
        "text": "Iherezo ry’ umuhanda urombeje w’ibice byinshi",
        "correct": true
      },
      {
        "text": "Birabujijwe kunyura mu mu muhanda w’ ikindi cyerekezo"
      },
      {
        "text": "Birabujijwe kunyuranaho"
      },
      {
        "text": "Birabujijwe guhagara ku iteme"
      }
    ]
  },
  {
    "id": 430,
    "questionText": "Iki kimenyetso kiri mu muhanda kivuze iki?",
    "questionImage": "/image/img342.jpg",
    "choices": [
      {
        "text": "Biremewe kunyuranaho"
      },
      {
        "text": "Umuyobozi abujijwe kukirenga",
        "correct": true
      },
      {
        "text": "Wegereye icyapa cyo guhagarara umwanya muto"
      },
      {
        "text": "Umuhanda ufunganye"
      }
    ]
  },
  {
    "id": 431,
    "questionText": "Iki kimenyetso kiri mu muhanda kivuze iki?",
    "questionImage": "/image/img343.jpg",
    "choices": [
      {
        "text": "Umuyobozi abujijwe kurenga umurongo wera ucagaguye cyeretse mugihe bitateza icyago",
        "correct": true
      },
      {
        "text": "Birabujijwe kunyuranaho"
      },
      {
        "text": "Biremewe kunyuranaho ariko nturenge umurongo wera ucagaguye"
      },
      {
        "text": "Birabujijwe gusubira inyuma"
      }
    ]
  },
  {
    "id": 432,
    "questionText": "Mu gihe utwaye ikinyabiziga uva kuri A ugana kuri B, Iki kimenyetso kiri mu muhanda kivuze iki?",
    "questionImage": "/image/img344.jpg",
    "choices": [
      {
        "text": "Umuyobozi ashobora kurenga umurongo wera udacagaguye mugihe cyo guhindukira gusa"
      },
      {
        "text": "Umuyobozi w’ikinyabiziga abujijwe kunyuranaho, uretse gusa abayobozi b’ibinyamitende nibo bashobora kurenga umurongo wera udacagaguye"
      },
      {
        "text": "Umuyobozi w’ikinyabiziga abujijwe kunyuranaho arenze umurongo wera udacagaguye"
      },
      {
        "text": "Umuyobozi w’ikinyabiziga ashobora kunyuranaho mu gihe bitateza icyago",
        "correct": true
      }
    ]
  },
  {
    "id": 433,
    "questionText": "Mu gihe utwaye ikinyabiziga uva kuri A ugana kuri B, Iki kimenyetso kiri mu muhanda kivuze iki?",
    "questionImage": "/image/img347.jpg",
    "choices": [
      {
        "text": "Umuyobozi w’ikinyabiziga ashobora kunyuranaho arenze umurongo wera udacagaguye"
      },
      {
        "text": "Umuyobozi w’ikinyabiziga abujijwe kunyuranaho arenze imirongo yera",
        "correct": true
      },
      {
        "text": "Umuyobozi w’ikinyabiziga yemerewe kunyuranaho"
      },
      {
        "text": "Abayobozi b’ibinyamitende gusa bemerewe kunyuranaho barenze umurongo wera udacagaguye"
      }
    ]
  }
];
