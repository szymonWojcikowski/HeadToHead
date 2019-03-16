const raceInfo = [
  {
    "series": "GPM",
    "year": 2007,
    "race": 1,
    "competitors": ["Pietruch", "Smyk", "Aro_Kal", "Lomero"],
    "position":["1","2","3","4"]
  },
  {
    "series": "GPM",
    "year": 2007,
    "race": 2,
    "competitors": ["Smyk", "Duke", "Pietruch", "Sariel", "Liwnik"],
    "position":["1","2","3","4","5"]
  },
  {
    "series": "GPM",
    "year": 2007,
    "race": 3,
    "competitors": ["Duke", "M. Drwięga", "Pietruch", "Smyk", "Sariel"],
    "position":["1","2","3","4","5"]
  },
  {
    "series": "GPM",
    "year": 2007,
    "race": 4,
    "competitors": ["Aro_Kal", "Pietruch", "Sariel", "Smyk", "Duke"],
    "position":["1","2","3","4","5"]
  },
  {
    "series": "GPM",
    "year": 2008,
    "race": 1,
    "competitors": ["Duke", "Smyk", "Aro_Kal", "Lomero", "Pietruch", "Emilus", "Richard"],
    "position":["1","2","3","4","5","6","7"]
  },
  {
    "series": "GPM",
    "year": 2008,
    "race": 2,
    "competitors": ["Duke", "Smyk", "Aro_Kal", "Emilus", "Sariel"],
    "position":["1","2","3","4","5"]
  },
  {
    "series": "GPM",
    "year": 2008,
    "race": 3,
    "competitors": ["Duke", "Smyk", "Emilus", "Lomero", "Richard"],
    "position":["1","2","3","4","5"]
  },
  {
    "series": "GPM",
    "year": 2008,
    "race": 4,
    "competitors": ["Smyk", "Duke", "Emilus"],
    "position":["1","2","3"]
  },
  {
    "series": "GPM",
    "year": 2008,
    "race": 5,
    "competitors": ["Duke", "Emilus", "Lomero", "Skuter", "Smyk"],
    "position":["1","2","3","4","5"]
  },
  {
    "series": "GPM",
    "year": 2008,
    "race": 6,
    "competitors": ["Emilus", "Aro_Kal", "Duke", "Lomero"],
    "position":["1","2","3","4"]
  },
  {
    "series": "GPM",
    "year": 2009,
    "race": 1,
    "competitors": ["TT", "Smyk", "Emilus", "Aro_Kal", "Maniek", "Duke", "Atros"],
    "position":["1","2","3","4","5","6","7"]
  },
  {
    "series": "GPM",
    "year": 2009,
    "race": 2,
    "competitors": ["Aro_Kal", "Lomero", "Maniek", "Atros", "Smyk", "Duke", "Emilus"],
    "position":["1","2","3","4","5","6","7"]
  },
  {
    "series": "GPM",
    "year": 2009,
    "race":3,
    "competitors": ["TT", "Atros", "Emilus", "Smyk", "Maniek", "Aro_Kal", "Lomero", "Don Arkada"],
    "position":["1","2","3","4","4","6","7","8"]
  },
  {
    "series": "GPM",
    "year": 2009,
    "race":4,
    "competitors": ["Atros", "Smyk", "Lomero", "Aro_Kal", "Maniek", "Emilus"],
    "position":["1","2","3","4","4","6"]
  },
  {
    "series": "GPM",
    "year":2009,
    "race":5,
    "competitors": ["Atros", "Aro_Kal", "TT", "Maniek", "Deredi", "Kuba", "Lomero", "Smyk", "Sariel"],
    "position": ["1","2","3","4","5","6","7","8","9"]
  },
  {
    "series": "GPM",
    "year": 2010,
    "race":1,
    "competitors":  ["Emilus", "Sami", "Atros","Grzesiek", "Smyk", "Aro_Kal", "Cieślu", "Lomero", "Deredi", "Maniek","Duke", "Sariel"],
    "position": ["1","2","3","4","5","6","7","8","9","10","11","12"]
  },
  {
    "series": "GPM",
    "year": 2010,
    "race": 2,
    "competitors":["TT", "Emilus", "Atros", "Grzesiek", "Smyk", "Aro_Kal", "Sariel", "Deredi", "Cieślu", "Lomero", "Janek", "Don Arkada", "Ej"],
    "position": ["1","2","3","4","5","6","7","8","9","10","11","12","13"]
  },
  {
    "series": "GPM",
    "year": 2010,
    "race":3,
    "competitors": ["Atros", "Deredi", "Grzesiek", "Cieślu", "Emilus", "Smyk", "Lomero", "Ej", "Maniek", "Don Arkada", "Sariel"],
    "position":["1","2","3","4","5","6","7","8","9","10","11"]
  },
  {
    "series": "GPM",
    "year": 2010,
    "race": 4,
    "competitors": ["Atros", "Emilus", "Cieślu", "Maniek", "Sami", "Smyk", "Lomero", "Ej","Sariel", "Krzoso"],
    "position": ["1","2","3","4","5","6","6","8","9","10"]
  },
  {
    "series": "GPM",
    "year":2010,
    "race":5,
    "competitors": ["Emilus", "Atros", "Ej", "Smyk", "TT", "Cieślu", "Maniek", "Lomero", "Grzesiek", "Sariel"],
    "position": ["1","2","3","4","5","6","7","8","9","10"]
  },
  {
    "series": "GPM",
    "year": 2010,
    "race": 6,
    "competitors": ["Atros", "Emilus", "Grzesiek", "Dominik", "Lomero", "Cieślu", "Smyk", "Maniek", "Ej", "lyyar", "Sariel", "Krzoso"],
    "position": ["1","2","3","4","5","6","7","8","9","10","11","12"]
  },
  {
    "series": "GPM",
    "year": 2011,
    "race": 1,
    "competitors": ["Atros", "Maniek", "TT", "Emilus", "Smyk", "Grzesiek", "Lomero", "3dom", "William", "Cieślu", "Bartolini", "lyyar"],
    "position": ["1","2","3","4","5","6","7","8","9","10","11","11"]
  },
  {
    "series": "GPM",
    "year": 2011,
    "race": 2,
    "competitors": ["Grzesiek", "TT", "Atros", "Emilus", "Maniek", "Smyk", "Cieślu", "Lomero", "M4rc!n", "3dom", "William", "Ej", "Pimpur"],
    "position": ["1","1","3","4","5","6","7","8","8","10","11","11","13"]
  },
  {
    "series": "GPM",
    "year":2011,
    "race":3,
    "competitors": ["Atros", "TT", "Maniek", "Cieślu", "Smyk", "William", "Krzoso", "Komando", "Ej", "Nenio", "Bartek213", "Waler93", "3dom"],
    "position": ["1","2","3","4","5","6","7","8","9","9","11","12","13"]
  },
  {
    "series": "LTTC",
    "year":2011,
    "race":4,
    "competitors": ["Atros", "Emilus", "Smyk", "Mistakes", "Grzesiek", "Maniek", "BJ", "Krzosu", "Eric Trax", "Ej", "3dom", "Bartolini", "Sariel"],
    "position": ["1","2","3","4","5","6","7","8","9","10","11","11","11"]
  },
  {
    "series": "LTTC",
    "year": 2011,
    "race": 5,
    "competitors": ["Emilus", "Grzesiek", "Atros", "Maniek", "Karde", "TT", "BJ", "Mistakes", "Cieślu", "William", "Ej","Blaha","Eric","Smyk"],
    "position": ["1","2","3","4","5","6","7","8","9","10","11","11","11","11"]
  },
  {
    "series": "LTTC",
    "year": 2011,
    "race": 6,
    "competitors": ["Emilus", "Atros", "Smyk", "Mistakes", "Grzesiek", "Maniek", "3dom", "BJ", "TT"],
    "position": ["1","2","3","4","5","6","7","8","9"]
  },
  {
    "series": "LTTC",
    "year":2012,
    "race":1,
    "competitors": ["Atros", "Grzesiek", "Smyk", "TT", "Emilus", "Cieślu", "Mistakes", "BJ", "Blaha", "William", "Maniek", "3dom"],
    "position": ["1","2","3","3","5","6","7","8","8","10","11","11"]
  },
  {
    "series": "LTTC",
    "year":2012,
    "race": 2,
    "competitors": ["TT", "Atros", "Mistakes", "BJ", "Smyk", "Emilus", "Eric Trax", "Cieślu", "Jerryp", "3dom", "Lomero", "Krzosu", "Jaca"],
    "position": ["1","2","3","3","5","6","7","8","9","10","11","11","11"]
  },
  {
    "series": "LTTC",
    "year": 2012,
    "race": 3,
    "competitors": ["Atros", "Smyk", "Emilus", "TT", "Grzesiek", "3dom", "Jerryp", "BJ"],
    "position": ["1","2","3","4","5","6","7","8"]
  },
  {
    "series": "LTTC",
    "year": 2012,
    "race": 4,
    "competitors": ["Maniek", "Smyk", "Grzesiek", "Emilus", "Atros", "BJ", "3dom", "Lomero", "Jerryp"],
    "position": ["1","2","3","3","5","6","7","8","9"]
  },
  {
    "series": "LTTC",
    "year":2012,
    "race":5,
    "competitors": ["Maniek", "Atros", "Smyk", "Grzesiek", "Kamyk", "BJ", "William", "Eric Trax", "Jerryp", "Sebastian", "Przemo", "Jaca"],
    "position": ["1","2","3","4","5","6","7","8","9","10","10","10"]
  },
  {
    "series": "LTTC",
    "year": 2012,
    "race": 6,
    "competitors": ["Smyk", "Maniek", "Atros", "Kamyk", "Blaha", "BJ", "TT", "Emilus", "Grzesiek", "Eric Trax", "William", "Jaca", "Cieślu", "Przemo"],
    "position": ["1","2","3","3","5","6","7","8","9","10","11","11","13","14"]
  },
  {
    "series": "LTTC",
    "year": 2013,
    "race": 1,
    "competitors": ["TT", "Blaha", "Grzesiek", "Kamyk", "Emilus", "Atros", "Mistakes", "Jaca", "Zozoleon", "BVL", "Cieślu", "Maniek", "BJ", "PM"],
    "position": ["1","2","3","4","5","5","7","8","9","9","11","12","13","14"]
  },
  {
    "series": "LTTC",
    "year": 2013,
    "race": 2,
    "competitors": ["Atros", "BJ", "Blaha", "Jaca", "Kamyk", "TT", "Mistakes", "Zozoleon", "Maniek", "Cieślu", "Grzesiek"],
    "position": ["1","2","3","4","5","6","7","8","9","10","11"]
  },
  {
    "series": "LTTC",
    "year": 2013,
    "race": 3,
    "competitors": ["Blaha", "BJ", "Atros", "Smyk", "Jaca", "Mistakes", "Grzesiek", "BVL", "Maniek", "Zozoleon"],
    "position":["1","2","3","4","5","6","7","8","9","10"]
  },
  {
    "series": "LTTC",
    "year": 2013,
    "race": 4,
    "competitors": ["Smyk", "BJ", "Atros", "Kamyk", "Grzesiek", "Jerryp"],
    "position":["1","2","3","4","5","6"]
  },
  {
    "series": "LTTC",
    "year": 2013,
    "race": 5,
    "competitors": ["BJ", "Atros", "Smyk", "Grzesiek", "Maniek", "Kamyk", "Zozoleon", "BVL", "Cieślu"],
    "position":["1","2","3","4","5","5","7","7","9"]
  },
  {
    "series": "LTTC",
    "year": 2013,
    "race": 6,
    "competitors": ["BJ", "Smyk", "Atros", "Mistakes", "Maniek", "Cieślu"],
    "position": ["1","2","3","4","5","6"]
  },
  {
    "series": "LTTC",
    "year": 2014,
    "race": 1,
    "competitors": ["Atros", "BJ", "Cieślu", "Smyk", "Maniek"],
    "position": ["1","2","3","4","5"]
  },
  {
    "series": "LTTC",
    "year": 2014,
    "race": 2,
    "competitors": ["Smyk", "Cieślu", "BJ", "Atros", "Maniek"],
    "position": ["1","2","3","4","5"]
  },
  {
    "series": "LTTC",
    "year": 2014,
    "race": 3,
    "competitors": ["BJ", "Atros", "Maniek", "Mistakes", "Smyk"],
    "position": ["1","2","3","4","5"]
  },
  {
    "series": "LTTC",
    "year": 2014,
    "race": 4,
    "competitors": ["Atros", "Grzesiek", "Jaca", "Kamyk", "Smyk", "Blaha", "Seba", "BJ", "Emilus", "Kubrick"],
    "position": ["1","1","3","4","5","6","7","8","9","10"]
  },
  {
    "series": "LTTC",
    "year": 2014,
    "race": 5,
    "competitors": ["Atros", "BJ", "Maniek", "Cieślu", "Smyk"],
    "position": ["1","2","3","4","5"]
  },
  {
    "series": "LTTC",
    "year": 2014,
    "race": 6,
    "competitors": ["William", "Atros", "BJ", "Maniek", "Cieślu", "Smyk"],
    "position": ["1","2","3","4","5","6"]
  },
  {
    "series": "LTTC",
    "year": 2015,
    "race": 1,
    "competitors": ["Atros", "BJ", "Emilus", "Cieślu", "Mistakes", "William"],
    "position": ["1","2","3","4","5","6"]
  },
  {
    "series": "LTTC",
    "year": 2015,
    "race": 2,
    "competitors": ["Smyk", "BJ", "Atros", "Waller93", "William", "Cieślu", "Maniek", "Mistakes"],
    "position": ["1","2","3","4","5","6","7","8"]
  },
  {
    "series": "LTTC",
    "year": 2015,
    "race": 3,
    "competitors": ["Atros", "Cieślu", "Smyk", "BJ", "Maniek", "William", "Waler93"],
    "position": ["1","2","3","4","5","6","7"]
  },
  {
    "series": "LTTC",
    "year": 2015,
    "race": 4,
    "competitors": ["BJ", "Atros", "Smyk", "William"],
    "position": ["1","2","3","4"]
  },
  {
    "series": "LTTC",
    "year": 2015,
    "race": 5,
    "competitors": ["BJ", "Atros", "William", "Mistakes", "Smyk", "Cieślu"],
    "position": ["1","2","3","4","5","5"]
  },
  {
    "series": "LTTC",
    "year": 2015,
    "race": 6,
    "competitors": ["William", "Smyk", "BJ", "Cieślu", "Atros"],
    "position": ["1","2","2","4","5"]
  },
  {
    "series": "LTTC",
    "year": 2016,
    "race": 1,
    "competitors": ["Maniek", "William", "Smyk", "Atros", "Mistakes", "TT", "Cieślu", "BJ", "Omen"],
    "position": ["1","2","3","4","5","6","7","8","9"]
  },
  {
    "series": "LTTC",
    "year": 2016,
    "race": 2,
    "competitors": ["William", "Maniek", "BJ", "TT", "Smyk", "Atros", "Cieślu", "Omen"],
    "position": ["1","2","3","4","5","6","7","7"]
  },
  {
    "series": "LTTC",
    "year": 2016,
    "race": 3,
    "competitors": ["Atros", "Smyk", "Maniek", "Maciek", "BJ", "Omen"],
    "position": ["1","2","3","4","5","6"]
  },
  {
    "series": "LTTC",
    "year": 2016,
    "race": 4,
    "competitors": ["Atros", "Smyk", "Omen", "William", "BJ", "Cieślu"],
    "position": ["1","2","3","4","5","6"]
  },
  {
    "series": "LTTC",
    "year": 2016,
    "race": 5,
    "competitors": ["Smyk", "BJ", "Atros", "Omen", "Cieślu"],
    "position": ["1","1","3","4","5"]
  },
  {
    "series": "LTTC",
    "year": 2016,
    "race": 6,
    "competitors": ["Atros", "BJ", "Omen", "William", "Smyk", "Cieślu"],
    "position": ["1","2","3","4","5","6"]
  },
  {
    "series": "LTTC",
    "year": 2017,
    "race": 1,
    "competitors": ["Atros", "Omen", "BJ", "Smyk", "Cieślu", "William", "Mistakes"],
    "position": ["1","2","3","4","5","6","7"]
  },
  {
    "series": "LTTC",
    "year": 2017,
    "race": 2,
    "competitors": ["Atros", "BJ", "Omen", "Smyk", "Mistakes"],
    "position": ["1","2","3","4","5"]
  },
  {
    "series": "LTTC",
    "year": 2017,
    "race": 3,
    "competitors": ["Omen", "Atros", "Smyk", "BJ", "Cieślu"],
    "position": ["1","2","3","4","5"]
  },
  {
    "series": "LTTC",
    "year": 2017,
    "race": 4,
    "competitors": ["Omen", "Atros", "BJ", "Smyk"],
    "position": ["1","2","3","4"]
  },
  {
    "series": "LTTC",
    "year": 2017,
    "race": 5,
    "competitors": ["Omen", "Atros", "Smyk", "BJ", "Cieślu", "Mistakes"],
    "position": ["1","2","3","3","5","6"]
  },
  {
    "series": "LTTC",
    "year": 2017,
    "race": 6,
    "competitors": ["Kamyk", "Omen", "Atros", "Mistakes", "Smyk", "BJ", "Cieślu"],
    "position": ["1","2","3","4","5","6","7"]
  },
    {
      "year": 2018,
      "race": 1,
      "competitors": ["Atros", "Omen", "Smyk", "Mistakes", "BJ", "Cieślu"],
      "position": ["1", "2", "3", "4", "5", "6"]
    },
    {
      "series": "LTTC",
      "year": 2018,
      "race": 2,
      "competitors": ["Atros", "Omen", "Smyk", "BJ", "Mistakes"],
      "position": ["1", "2", "3", "4", "5"]
    },
    {
      "series": "LTTC",
      "year": 2018,
      "race": 3,
      "competitors": ["Atros", "Omen", "BJ", "Smyk"],
      "position": ["1", "2", "3", "4"]
    },
    {
      "series": "LTTC",
      "year": 2018,
      "race": 4,
      "competitors": ["Atros", "Omen", "BJ", "Cieślu", "Emilus"],
      "position": ["1", "2", "3", "4", "5"]
    },
    {
      "series": "LTTC",
      "year": 2018,
      "race": 5,
      "competitors": ["Atros", "Omen", "BJ", "Emilus"],
      "position": ["1", "2", "3", "4"]
    },
    {
      "series": "LTTC",
      "year": 2018,
      "race": 6,
      "competitors": ["Atros", "Omen", "Emilus", "BJ", "William"],
      "position": ["1", "1", "3", "5", "5"]
    }
  ];