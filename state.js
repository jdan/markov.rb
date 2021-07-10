const machine = Machine({
  id: 'machine',
  initial: 'start',
  states: {
          start: {
        on: {
          "0.05-Lia": "Lia",
"0.1-Oli": "Oli",
"0.05-Noa": "Noa",
"0.05-Emm": "Emm",
"0.05-Ava": "Ava",
"0.05-Eli": "Eli",
"0.05-Cha": "Cha",
"0.05-Wil": "Wil",
"0.05-Sop": "Sop",
"0.05-Jam": "Jam",
"0.05-Ame": "Ame",
"0.05-Ben": "Ben",
"0.05-Isa": "Isa",
"0.05-Luc": "Luc",
"0.05-Mia": "Mia",
"0.05-Hen": "Hen",
"0.05-Eve": "Eve",
"0.05-Ale": "Ale",
"0.05-Har": "Har",
        }
      },

      Lia: {
        on: {
          "1.0-iam": "iam",
        }
      },

      iam: {
        on: {
          "1.0-end": "end",
        }
      },

      Oli: {
        on: {
          "1.0-liv": "liv",
        }
      },

      liv: {
        on: {
          "0.5-ivi": "ivi",
"0.5-ive": "ive",
        }
      },

      ivi: {
        on: {
          "1.0-via": "via",
        }
      },

      via: {
        on: {
          "1.0-end": "end",
        }
      },

      Noa: {
        on: {
          "1.0-oah": "oah",
        }
      },

      oah: {
        on: {
          "1.0-end": "end",
        }
      },

      Emm: {
        on: {
          "1.0-mma": "mma",
        }
      },

      mma: {
        on: {
          "1.0-end": "end",
        }
      },

      ive: {
        on: {
          "1.0-ver": "ver",
        }
      },

      ver: {
        on: {
          "1.0-end": "end",
        }
      },

      Ava: {
        on: {
          "1.0-end": "end",
        }
      },

      Eli: {
        on: {
          "1.0-lij": "lij",
        }
      },

      lij: {
        on: {
          "1.0-ija": "ija",
        }
      },

      ija: {
        on: {
          "1.0-jah": "jah",
        }
      },

      jah: {
        on: {
          "1.0-end": "end",
        }
      },

      Cha: {
        on: {
          "1.0-har": "har",
        }
      },

      har: {
        on: {
          "1.0-arl": "arl",
        }
      },

      arl: {
        on: {
          "1.0-rlo": "rlo",
        }
      },

      rlo: {
        on: {
          "1.0-lot": "lot",
        }
      },

      lot: {
        on: {
          "1.0-ott": "ott",
        }
      },

      ott: {
        on: {
          "1.0-tte": "tte",
        }
      },

      tte: {
        on: {
          "1.0-end": "end",
        }
      },

      Wil: {
        on: {
          "1.0-ill": "ill",
        }
      },

      ill: {
        on: {
          "1.0-lli": "lli",
        }
      },

      lli: {
        on: {
          "1.0-lia": "lia",
        }
      },

      lia: {
        on: {
          "0.5-iam": "iam",
"0.5-end": "end",
        }
      },

      Sop: {
        on: {
          "1.0-oph": "oph",
        }
      },

      oph: {
        on: {
          "1.0-phi": "phi",
        }
      },

      phi: {
        on: {
          "1.0-hia": "hia",
        }
      },

      hia: {
        on: {
          "1.0-end": "end",
        }
      },

      Jam: {
        on: {
          "1.0-ame": "ame",
        }
      },

      ame: {
        on: {
          "1.0-mes": "mes",
        }
      },

      mes: {
        on: {
          "1.0-end": "end",
        }
      },

      Ame: {
        on: {
          "1.0-mel": "mel",
        }
      },

      mel: {
        on: {
          "1.0-eli": "eli",
        }
      },

      eli: {
        on: {
          "1.0-lia": "lia",
        }
      },

      Ben: {
        on: {
          "1.0-enj": "enj",
        }
      },

      enj: {
        on: {
          "1.0-nja": "nja",
        }
      },

      nja: {
        on: {
          "1.0-jam": "jam",
        }
      },

      jam: {
        on: {
          "1.0-ami": "ami",
        }
      },

      ami: {
        on: {
          "1.0-min": "min",
        }
      },

      min: {
        on: {
          "1.0-end": "end",
        }
      },

      Isa: {
        on: {
          "1.0-sab": "sab",
        }
      },

      sab: {
        on: {
          "1.0-abe": "abe",
        }
      },

      abe: {
        on: {
          "1.0-bel": "bel",
        }
      },

      bel: {
        on: {
          "1.0-ell": "ell",
        }
      },

      ell: {
        on: {
          "1.0-lla": "lla",
        }
      },

      lla: {
        on: {
          "1.0-end": "end",
        }
      },

      Luc: {
        on: {
          "1.0-uca": "uca",
        }
      },

      uca: {
        on: {
          "1.0-cas": "cas",
        }
      },

      cas: {
        on: {
          "1.0-end": "end",
        }
      },

      Mia: {
        on: {
          "1.0-end": "end",
        }
      },

      Hen: {
        on: {
          "1.0-enr": "enr",
        }
      },

      enr: {
        on: {
          "1.0-nry": "nry",
        }
      },

      nry: {
        on: {
          "1.0-end": "end",
        }
      },

      Eve: {
        on: {
          "1.0-vel": "vel",
        }
      },

      vel: {
        on: {
          "1.0-ely": "ely",
        }
      },

      ely: {
        on: {
          "1.0-lyn": "lyn",
        }
      },

      lyn: {
        on: {
          "1.0-end": "end",
        }
      },

      Ale: {
        on: {
          "1.0-lex": "lex",
        }
      },

      lex: {
        on: {
          "1.0-exa": "exa",
        }
      },

      exa: {
        on: {
          "1.0-xan": "xan",
        }
      },

      xan: {
        on: {
          "1.0-and": "and",
        }
      },

      and: {
        on: {
          "1.0-nde": "nde",
        }
      },

      nde: {
        on: {
          "1.0-der": "der",
        }
      },

      der: {
        on: {
          "1.0-end": "end",
        }
      },

      Har: {
        on: {
          "1.0-arp": "arp",
        }
      },

      arp: {
        on: {
          "1.0-rpe": "rpe",
        }
      },

      rpe: {
        on: {
          "1.0-per": "per",
        }
      },

      per: {
        on: {
          "1.0-end": "end",
        }
      },

    end: {
      type: "final"
    }
  }
});
