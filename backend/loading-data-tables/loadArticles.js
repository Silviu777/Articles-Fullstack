var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://localhost:5000/articles',
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "Article_no": 1,
    "Article_short_description": "De ce generatia Z din Iran vrea sa traiasca altfel?",
    "Article_source": "BBC News",
    "Article_URL": "https://www.bbc.com/news/world-middle-east-63213745",
    "Article_tokensIDs": [],
    "Article_categoryID": " inlocuim cu id-ul de la societate",
    "Location": "Iran",
    "Article_keywords": "proteste, GenZ, human rights",
    "Article_weight": "usor",
    "Article_citation": "Parham Ghobadi, BBC Persian,Iran's Gen Z 'realise life can be lived differently' "
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
});


var options = {
    'method': 'POST',
    'url': 'http://localhost:5000/articles',
    'headers': {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "Article_no": 2,
      "Article_short_description": "Zece ani cu Xi Jinping",
      "Article_source": "panorama.ro",
      "Article_URL": "https://panorama.ro/cum-s-a-transformat-china-in-cei-10-ani-cu-xi-jinping/",
      "Article_tokensIDs": [],
      "Article_categoryID": " inlocuim cu id-ul de la politica",
      "Location": "China",
      "Article_keywords": "comunism, putere, diplomatie",
      "Article_weight": "dificil",
      "Article_citation": "Andreea Brinza, Cum s-a transformat China în cei 10 ani cu Xi Jinping"
    })
  
  };


  var options = {
  'method': 'POST',
  'url': 'http://localhost:5000/articles',
  'headers': {
  'Content-Type': 'application/json'
  },
  body: JSON.stringify({
  "Article_no": 3,
  "Article_short_description": "Nou scandal pe TikTok",
  "Article_source": "BBC News",
  "Article_URL": "https://www.bbc.com/news/technology-63243423?xtor=ES-208-[55811_NEWS_NLB_ACT_WK43_Mon_24_October]-20221024-[bbcnews_technology_tiktok_allows_abuse_fimmaker_says]",
  "Article_tokensIDs": [],
  "Article_categoryID": " inlocuim cu id-ul de la internet",
  "Location": "no location",
  "Article_keywords": "TikTok, algorithm, comments",
  "Article_weight": "mediu",
  "Article_citation": "Zoe Kleinman,TikTok blamed by filmmaker for allowing abusive comments on video"
  })


  };
  request(options, function (error, response) {
  if (error) throw new Error(error);
  });


  var options = {
  'method': 'POST',
  'url': 'http://localhost:5000/articles',
  'headers': {
  'Content-Type': 'application/json'
  },
  body: JSON.stringify({
  "Article_no": 4,
  "Article_short_description": "Barbatii imbatranesc mai repede",
  "Article_source": "University of Jyvaskyla",
  "Article_URL": "https://neurosciencenews.com/aging-gap-21605/?utm_source=substack&utm_medium=email",
  "Article_tokensIDs": [],
  "Article_categoryID": " inlocuim cu id-ul de la stiinta",
  "Location": "no location",
  "Article_keywords": "genetics, neuroscience, men",
  "Article_weight": "mediu",
  "Article_citation": "Researchers shed light on why the life expectancy and aging gap is narrowing between men and women"
  })



  };
  request(options, function (error, response) {
  if (error) throw new Error(error);
  });

  var options = {
  'method': 'POST',
  'url': 'http://localhost:5000/articles',
  'headers': {
  'Content-Type': 'application/json'
  },
  body: JSON.stringify({
  "Article_no": 5,
  "Article_short_description": "O noua tema ideologica in Turcia",
  "Article_source": "G4Media.ro",
  "Article_URL": "https://www.g4media.ro/erdogan-o-noua-tema-ideologica-inaintea-alegerilor-cruciale-din-2023-el-propune-un-referendum-cu-privire-la-purtarea-valului-islamic.html",
  "Article_tokensIDs": [],
  "Article_categoryID": " inlocuim cu id-ul de la religie",
  "Location": "Turcia",
  "Article_keywords": "referendum, alegeri, val",
  "Article_weight": "usor",
  "Article_citation": "Erdogan, o nouă temă ideologică înaintea alegerilor cruciale din 2023. El propune un referendum cu privire la purtarea vălului islamic"
  })
  };
  request(options, function (error, response) {
  if (error) throw new Error(error);
  });


  var options = {
  'method': 'POST',
  'url': 'http://localhost:5000/articles',
  'headers': {
  'Content-Type': 'application/json'
  },
  body: JSON.stringify({
  "Article_no": 6,
  "Article_short_description": "Cea mai trista Cupa Mondiala",
  "Article_source": "The Guardian",
  "Article_URL": "https://www.theguardian.com/football/2022/oct/20/fifa-world-cup-human-rights-abuses-qatar-amnesty-international",
  "Article_tokensIDs": [],
  "Article_categoryID": " inlocuim cu id-ul de la sport",
  "Location": "Qatar",
  "Article_keywords": "world, football, Fifa",
  "Article_weight": "mediu",
  "Article_citation": "Human rights abuses in Qatar persist on significant scale."
  })
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
  });


  var options = {
    'method': 'POST',
    'url': 'http://localhost:5000/articles',
    'headers': {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "Article_no": 7,
      "Article_short_description": "Sfaturi pentru reducerea  consumului electric.",
      "Article_source": "Ziaristii",
      "Article_URL": "https://ziaristii.com/cum-reduci-facturile-la-energie-electrica-sfaturi-practice/",
      "Article_tokensIDs": [],
      "Article_categoryID": " inlocuim cu id-ul de la Finante",
      "Location": "Romania",
      "Article_keywords": "energie, furnizor, verde",
      "Article_weight": "mediu",
      "Article_citation": "Cum reduci facturile la energie electrică? Sfaturi practice"
    })
  };
    request(options, function (error, response) {
        if (error) throw new Error(error);
      });

      var options = {
        'method': 'POST',
        'url': 'http://localhost:5000/articles',
        'headers': {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "Article_no": 8,
          "Article_short_description": "Pacea nu vine asa cum credeam",
          "Article_source": "Politico.com",
          "Article_URL": "https://www.politico.com/news/magazine/2022/10/05/free-markets-dont-buy-peace-00060236?utm_medium=email&utm_source=pocket_hits&utm_campaign=POCKET_HITS-EN-DAILY-RECS-2022_10_12&sponsored=0&position=1&scheduled_corpus_item_id=70f6f21f-271a-4aea-8ba6-075f0471d791",
          "Article_tokensIDs": [],
          "Article_categoryID": " inlocuim cu id-ul de la Economie",
          "Location": "USA",
          "Article_keywords": "tranzactii, Britain, economics",
          "Article_weight": "dificil",
          "Article_citation": "One of the Most Famous Ideas in Economics Is Wrong"
        })
      };
        request(options, function (error, response) {
            if (error) throw new Error(error);
          });


          var options = {
            'method': 'POST',
            'url': 'http://localhost:5000/articles',
            'headers': {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "Article_no": 9,
              "Article_short_description": "Flotarile arata cat mai ai de trait.",
              "Article_source": "Harvard T.H. Chan",
              "Article_URL": "https://www.hsph.harvard.edu/news/press-releases/push-up-capacity-cardiovascular-disease-events-men/?utm_source=substack&utm_medium=email",
              "Article_tokensIDs": [],
              "Article_categoryID": " inlocuim cu id-ul de la sport",
              "Location": "no location",
              "Article_keywords": "push-up, diseaze, stress",
              "Article_weight": "dificil",
              "Article_citation": "Push-up capacity linked with lower incidence of future cardiovascular disease events among men"
            })
          };
            request(options, function (error, response) {
                if (error) throw new Error(error);
              });


  var options = {
  'method': 'POST',
  'url': 'http://localhost:5000/articles',
  'headers': {
  'Content-Type': 'application/json'
  },
  body: JSON.stringify({
  "Article_no": 10,
  "Article_short_description": "Totul despre somn",
  "Article_source": "Te Guardian",
  "Article_URL": "https://www.theguardian.com/lifeandstyle/2022/sep/24/want-to-get-a-good-nights-sleep-first-of-all-stop-trying?utm_source=substack&utm_medium=email",
  "Article_tokensIDs": [],
  "Article_categoryID": " inlocuim cu id-ul de la societate",
  "Location": "no location",
  "Article_keywords": "sleep, diseaze, night",
  "Article_weight": "dificil",
  "Article_citation": "Want to get a good night’s sleep? First of all, stop trying"
  })
  };
  request(options, function (error, response) {
  if (error) throw new Error(error);
  });

  var options = {
  'method': 'POST',
  'url': 'http://localhost:5000/articles',
  'headers': {
  'Content-Type': 'application/json'
  },
  body: JSON.stringify({
  "Article_no": 11,
  "Article_short_description": "Productia cat si importurile de carbune sunt in crestere.",
  "Article_source": "profit.ro",
  "Article_URL": "https://www.profit.ro/povesti-cu-profit/energie/productia-dar-si-importurile-de-carbune-in-crestere-20896514",
  "Article_tokensIDs": [],
  "Article_categoryID": " inlocuim cu id-ul de la societate",
  "Location": "Romania",
  "Article_keywords": "carbune, importuri, statistica",
  "Article_weight": "usor",
  "Article_citation": "Producția, dar și importurile de cărbune - în creștere"
  })
  };
  request(options, function (error, response) {
  if (error) throw new Error(error);
  });


  var options = {
  'method': 'POST',
  'url': 'http://localhost:5000/articles',
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "Article_no": 12,
    "Article_short_description": "Finantarea 3,5%, disputata de USR",
    "Article_source": "Republica.ro",
    "Article_URL": "https://republica.ro/dragi-politicieni-bine-intentionati-va-rog-respectuos-sa-nu-distrugeti-mecanismul-3-5-de-finantare-a-ong",
    "Article_tokensIDs": [],
    "Article_categoryID": " inlocuim cu id-ul de la politica",
    "Location": "Romania",
    "Article_keywords": "partid, finantare, ONG",
    "Article_weight": "mediu",
    "Article_citation": "Mirela Oprea - Dragi politicieni bine intenţionaţi, vă rog respectuos să nu distrugeţi mecanismul 3,5% de finanţare a ONG-urilor"
  })
  };

  request(options, function (error, response) {
      if (error) throw new Error(error);
    });
    var options = {
      'method': 'POST',
      'url': 'http://localhost:5000/articles',
      'headers': {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "Article_no": 13,
        "Article_short_description": "De ce te simți amețit când bei? Cauze si efectele alcoolului",
        "Article_source": "universal-sci.com",
        "Article_URL": "https://www.universal-sci.com/article/why-you-get-dizzy-when-drunk",
        "Article_tokensIDs": [],
        "Article_categoryID": " inlocuim cu id-ul de la stiinta si tehnologie",
        "Location": "no location",
        "Article_keywords": "bautura, echilibru, studiu",
        "Article_weight": "dificil",
        "Article_citation": "Many of us have experienced this at least once; after having one too many drinks, you seem to lose your balance and start having difficulty walking in a straight line. "
      })
    };
      request(options, function (error, response) {
          if (error) throw new Error(error);
        });

        var options = {
          'method': 'POST',
          'url': 'http://localhost:5000/articles',
          'headers': {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "Article_no": 14,
            "Article_short_description": "Flotarile indica sanatatea cardio-vasculara. Studiu",
            "Article_source": "JAMA Network Open",
            "Article_URL": "https://www.hsph.harvard.edu/news/press-releases/push-up-capacity-cardiovascular-disease-events-men/?utm_source=substack&utm_medium=email",
            "Article_tokensIDs": [],
            "Article_categoryID": " inlocuim cu id-ul de la stiinta si tehnologie",
            "Location": "no location",
            "Article_keywords": "flotari, sanatate, fitness",
            "Article_weight": "dificil",
            "Article_citation": "Push-up capacity linked with lower incidence of future cardiovascular disease events among men"
          })
        };
          request(options, function (error, response) {
              if (error) throw new Error(error);
            });
    

var options = {
  'method': 'POST',
  'url': 'http://localhost:5000/articles',
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "Article_no": 15,
    "Article_short_description": "Comertul liber nu aduce de fapt pace.",
    "Article_source": "politico.com",
    "Article_URL": "https://www.politico.com/news/magazine/2022/10/05/free-markets-dont-buy-peace-00060236?utm_medium=email&utm_source=pocket_hits&utm_campaign=POCKET_HITS-EN-DAILY-RECS-2022_10_12&sponsored=0&position=1&scheduled_corpus_item_id=70f6f21f-271a-4aea-8ba6-075f0471d791",
    "Article_tokensIDs": [],
    "Article_categoryID": " inlocuim cu id-ul de la politica",
    "Location": "no location",
    "Article_keywords": "pace, America, razboi",
    "Article_weight": "dificil",
    "Article_citation": "One of the most enduring ideas in economics is that free markets bring peace between countries. It comes from the notion that commerce drives humans to follow their mutual material interests rather than make destructive war due to passions."
  })
};
  request(options, function (error, response) {
      if (error) throw new Error(error);
    });
        

    var options = {
      'method': 'POST',
      'url': 'http://localhost:5000/articles',
      'headers': {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "Article_no": 16,
        "Article_short_description": "Incalci drepturile angajatului daca ii ceri sa porneasca camera web.",
        "Article_source": "techcrunch.com",
        "Article_URL": "https://www.politico.com/news/magazine/2022/10/05/free-markets-dont-buy-peace-00060236?utm_medium=email&utm_source=pocket_hits&utm_campaign=POCKET_HITS-EN-DAILY-RECS-2022_10_12&sponsored=0&position=1&scheduled_corpus_item_id=70f6f21f-271a-4aea-8ba6-075f0471d791",
        "Article_tokensIDs": [],
        "Article_categoryID": " inlocuim cu id-ul de la economie",
        "Location": "Olanda",
        "Article_keywords": "remote, job, avocat",
        "Article_weight": "mediu",
        "Article_citation": "Demanding employees turn on their webcams is a human rights violation, Dutch Court rules"
      })
    };
      request(options, function (error, response) {
          if (error) throw new Error(error);
        });



var options = {
  'method': 'POST',
  'url': 'http://localhost:5000/articles',
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "Article_no": 17,
    "Article_short_description": "Costul de a trai intr-un cartier rau famat.",
    "Article_source": "bigissue.com",
    "Article_URL": "https://www.bigissue.com/news/social-justice/how-one-uk-most-deprived-neighbourhoods-tackling-cost-of-living-crisis/?xtor=ES-208-[55559_NEWS_NLB_ACT_WK41_Thurs_13_October]-20221013-[Big+Issue]",
    "Article_tokensIDs": [],
    "Article_categoryID": " inlocuim cu id-ul de la societate",
    "Location": "Marea Britanie",
    "Article_keywords": "locuinta, criza, viata",
    "Article_weight": "mediu",
    "Article_citation": "How one of the most deprived neighbourhoods in the UK is tackling the cost of living crisis"
  })
};
  request(options, function (error, response) {
      if (error) throw new Error(error);
    });



    var options = {
      'method': 'POST',
      'url': 'http://localhost:5000/articles',
      'headers': {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "Article_no": 18,
        "Article_short_description": "Mecanism de evitare al legii in imobiliare",
        "Article_source": "hotnews.ro",
        "Article_URL": "https://www.hotnews.ro/stiri-administratie_locala-25826824-care-este-mecanismul-prin-care-putut-construi-bazele-sportive-care-apartinut-fabricilor-comuniste-desi-lege-interzice-acest-lucru-interviu-ong-istul-dan-trifu.htm",
        "Article_tokensIDs": [],
        "Article_categoryID": " inlocuim cu id-ul de la societate",
        "Location": "Romania",
        "Article_keywords": "fabrici, constructii, ilegal",
        "Article_weight": "mediu",
        "Article_citation": "Schema prin care dezvoltatorii imobiliari au putut construi pe bazele sportive, deși legea o interzice / Interviu cu ONG-istul care a văzut lucrurile din interior"
      })
    };
      request(options, function (error, response) {
          if (error) throw new Error(error);
        });



        var options = {
          'method': 'POST',
          'url': 'http://localhost:5000/articles',
          'headers': {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "Article_no": 19,
            "Article_short_description": "Intreaga lume este stresata",
            "Article_source": "bigthink.com",
            "Article_URL": "https://bigthink.com/strange-maps/global-emotions-report/?utm_source=substack&utm_medium=email",
            "Article_tokensIDs": [],
            "Article_categoryID": " inlocuim cu id-ul de la societate",
            "Location": "no location",
            "Article_keywords": "lume, emotie, studiu",
            "Article_weight": "dificil",
            "Article_citation": "Map of global emotions shows the world is more stressed out than ever"
          })
        };
          request(options, function (error, response) {
              if (error) throw new Error(error);
            });



            var options = {
              'method': 'POST',
              'url': 'http://localhost:5000/articles',
              'headers': {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                "Article_no": 20,
                "Article_short_description": "Pasarela pazita si vandalizata",
                "Article_source": "buletin.ro",
                "Article_URL": "https://buletin.de/bucuresti/pasarela-neputintei-din-otopeni-batranii-si-persoanele-cu-handicap-pe-scari-din-cauza-lifturilor-vandalizate-in-timp-ce-primaria-plateste-milioane-de-euro-pentru-paza-si-protectie/",
                "Article_tokensIDs": [],
                "Article_categoryID": " inlocuim cu id-ul de la societate",
                "Location": "Romania",
                "Article_keywords": "primarie, vandalism, paza",
                "Article_weight": "mediu",
                "Article_citation": "Pasarela “neputinței” din Otopeni: Bătrânii și persoanele cu handicap, pe scări din cauza lifturilor vandalizate, în timp ce primăria plătește milioane de euro pentru pază și protecție"
              })
            };
              request(options, function (error, response) {
                  if (error) throw new Error(error);
                });