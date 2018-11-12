module.exports = {
  Ships: {
    adder: {
      edID: 128049267,
      eddbID: 1,
      properties: {
        name: "Adder",
        manufacturer: "Zorgon Peterson",
        class: 1,
        hullCost: 4e4,
        speed: 220,
        boost: 320,
        boostEnergy: 9,
        baseShieldStrength: 60,
        baseArmour: 90,
        hardness: 35,
        hullMass: 35,
        masslock: 7,
        pipSpeed: .13636363636364,
        pitch: 38,
        roll: 100,
        yaw: 14,
        crew: 2
      },
      retailCost: 87810,
      bulkheads: [ {
        id: "BC",
        edID: 128049268,
        eddbID: 753,
        grp: "bh",
        cost: 0,
        mass: 0,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "BD",
        edID: 128049269,
        eddbID: 754,
        grp: "bh",
        cost: 35120,
        mass: 3,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "BE",
        edID: 128049270,
        eddbID: 755,
        grp: "bh",
        cost: 79030,
        mass: 5,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "BF",
        edID: 128049271,
        eddbID: 756,
        grp: "bh",
        cost: 186770,
        mass: 5,
        causres: 0,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "BG",
        edID: 128049272,
        eddbID: 757,
        grp: "bh",
        cost: 206960,
        mass: 5,
        causres: 0,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 3, 3, 3, 1, 2, 3, 3 ],
        hardpoints: [ 2, 1, 1, 0, 0 ],
        internal: [ 3, 3, 2, 2, 1 ]
      },
      defaults: {
        standard: [ "3E", "3E", "3E", "1E", "2E", "3E", "3C" ],
        hardpoints: [ 0, 17, 17, 0, 0 ],
        internal: [ "01", "44", "00", 0, "2h" ]
      }
    },
    alliance_chieftain: {
      edID: 128816574,
      eddbID: 33,
      properties: {
        name: "Alliance Chieftain",
        manufacturer: "Lakon",
        class: 2,
        hullCost: 18182883,
        speed: 230,
        boost: 330,
        boostEnergy: 19,
        baseShieldStrength: 200,
        baseArmour: 280,
        hardness: 65,
        hullMass: 400,
        masslock: 13,
        pipSpeed: .08695652173913,
        pitch: 39,
        roll: 92,
        yaw: 16,
        crew: 2
      },
      retailCost: 19382252,
      requirements: {
        horizons: true
      },
      bulkheads: [ {
        id: "CI",
        edID: 128816576,
        eddbID: 1640,
        grp: "bh",
        cost: 0,
        mass: 0,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "CJ",
        edID: 128816577,
        eddbID: 1641,
        grp: "bh",
        cost: 6803170,
        mass: 40,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "CK",
        edID: 128816578,
        eddbID: 1642,
        grp: "bh",
        cost: 15307134,
        mass: 78,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "CL",
        edID: 128816579,
        eddbID: 1643,
        grp: "bh",
        cost: 36175859,
        mass: 78,
        causres: 0,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "CM",
        edID: 128816580,
        eddbID: 1644,
        grp: "bh",
        cost: 40087682,
        mass: 78,
        causres: 0,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 6, 6, 5, 5, 6, 4, 4 ],
        hardpoints: [ 3, 3, 2, 1, 1, 1, 0, 0, 0, 0 ],
        internal: [ 6, 5, 4, 2, 2, {
          class: 4,
          name: "Military",
          eligible: {
            mahr: 1,
            hr: 1,
            scb: 1,
            mrp: 1,
            gsrp: 1,
            gmrp: 1,
            ghrp: 1
          }
        }, {
          class: 4,
          name: "Military",
          eligible: {
            mahr: 1,
            hr: 1,
            scb: 1,
            mrp: 1,
            gsrp: 1,
            gmrp: 1,
            ghrp: 1
          }
        }, {
          class: 4,
          name: "Military",
          eligible: {
            mahr: 1,
            hr: 1,
            scb: 1,
            mrp: 1,
            gsrp: 1,
            gmrp: 1,
            ghrp: 1
          }
        } ]
      },
      defaults: {
        standard: [ "6E", "6E", "5E", "5E", "6E", "4E", "4C" ],
        hardpoints: [ 17, 0, 17, 0, 0, 0, 0, 0, 0, 0 ],
        internal: [ "04", "4e", "02", "", "2h", "", "", "" ]
      }
    },
    alliance_challenger: {
      edID: 128816588,
      eddbID: 34,
      properties: {
        name: "Alliance Challenger",
        manufacturer: "Lakon",
        class: 2,
        hullCost: 28041035,
        speed: 204,
        boost: 310,
        boostEnergy: 19,
        baseShieldStrength: 220,
        baseArmour: 300,
        hardness: 65,
        hullMass: 450,
        masslock: 13,
        pipSpeed: .088709677419355,
        pitch: 32,
        roll: 90,
        yaw: 16,
        crew: 2
      },
      retailCost: 30472265,
      requirements: {
        horizons: true
      },
      bulkheads: [ {
        id: "0K",
        edID: 128816590,
        eddbID: 1650,
        grp: "bh",
        cost: 0,
        mass: 0,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "0P",
        edID: 128816591,
        eddbID: 1651,
        grp: "bh",
        cost: 6803170,
        mass: 40,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "0Q",
        edID: 128816592,
        eddbID: 1652,
        grp: "bh",
        cost: 15307134,
        mass: 78,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "0R",
        edID: 128816593,
        eddbID: 1653,
        grp: "bh",
        cost: 36175859,
        mass: 78,
        causres: 0,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "0S",
        edID: 128816594,
        eddbID: 1654,
        grp: "bh",
        cost: 40087682,
        mass: 78,
        causres: 0,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 6, 6, 5, 5, 6, 4, 4 ],
        hardpoints: [ 3, 2, 2, 2, 1, 1, 1, 0, 0, 0, 0 ],
        internal: [ 6, 6, 3, 3, 2, 2, {
          class: 4,
          name: "Military",
          eligible: {
            mahr: 1,
            hr: 1,
            scb: 1,
            mrp: 1,
            gsrp: 1,
            gmrp: 1,
            ghrp: 1
          }
        }, {
          class: 4,
          name: "Military",
          eligible: {
            mahr: 1,
            hr: 1,
            scb: 1,
            mrp: 1,
            gsrp: 1,
            gmrp: 1,
            ghrp: 1
          }
        }, {
          class: 4,
          name: "Military",
          eligible: {
            mahr: 1,
            hr: 1,
            scb: 1,
            mrp: 1,
            gsrp: 1,
            gmrp: 1,
            ghrp: 1
          }
        } ]
      },
      defaults: {
        standard: [ "6E", "6E", "5E", "5E", "6E", "4E", "4C" ],
        hardpoints: [ 17, 0, 17, 0, 0, 0, 0, 0, 0, 0 ],
        internal: [ "04", "4h", "01", "01", "2h", "", "", "", "" ]
      }
    },
    alliance_crusader: {
      edID: 128816581,
      eddbID: 36,
      properties: {
        name: "Alliance Crusader",
        manufacturer: "Lakon",
        class: 2,
        hullCost: 22866341,
        speed: 180,
        boost: 300,
        boostEnergy: 19,
        baseShieldStrength: 200,
        baseArmour: 300,
        hardness: 65,
        hullMass: 500,
        masslock: 13,
        fighterHangars: true,
        pipSpeed: .15833333333333,
        pitch: 32,
        roll: 80,
        yaw: 16,
        crew: 3
      },
      retailCost: 19382252,
      requirements: {
        horizons: true
      },
      bulkheads: [ {
        id: "CI",
        edID: 128816583,
        eddbID: 1659,
        grp: "bh",
        cost: 0,
        mass: 0,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "CJ",
        edID: 128816584,
        eddbID: 1660,
        grp: "bh",
        cost: 6803170,
        mass: 40,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "CK",
        edID: 128816585,
        eddbID: 1661,
        grp: "bh",
        cost: 15307134,
        mass: 78,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "CL",
        edID: 128816586,
        eddbID: 1662,
        grp: "bh",
        cost: 36175859,
        mass: 78,
        causres: 0,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "CM",
        edID: 128816587,
        eddbID: 1663,
        grp: "bh",
        cost: 40087682,
        mass: 78,
        causres: 0,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 6, 6, 5, 5, 6, 4, 4 ],
        hardpoints: [ 3, 2, 2, 1, 1, 1, 0, 0, 0, 0 ],
        internal: [ 6, 5, 3, 3, 2, 2, {
          class: 4,
          name: "Military",
          eligible: {
            mahr: 1,
            hr: 1,
            scb: 1,
            mrp: 1,
            gsrp: 1,
            gmrp: 1,
            ghrp: 1
          }
        }, {
          class: 4,
          name: "Military",
          eligible: {
            mahr: 1,
            hr: 1,
            scb: 1,
            mrp: 1,
            gsrp: 1,
            gmrp: 1,
            ghrp: 1
          }
        }, {
          class: 4,
          name: "Military",
          eligible: {
            mahr: 1,
            hr: 1,
            scb: 1,
            mrp: 1,
            gsrp: 1,
            gmrp: 1,
            ghrp: 1
          }
        } ]
      },
      defaults: {
        standard: [ "6E", "6E", "5E", "5E", "6E", "4E", "4C" ],
        hardpoints: [ 17, 0, 17, 0, 0, 0, 0, 0, 0, 0 ],
        internal: [ "04", "4e", "02", "", "2h", "", "", "" ]
      }
    },
    anaconda: {
      edID: 128049363,
      eddbID: 2,
      properties: {
        name: "Anaconda",
        manufacturer: "Faulcon DeLacy",
        class: 3,
        hullCost: 141889930,
        speed: 180,
        boost: 240,
        boostEnergy: 27,
        baseShieldStrength: 350,
        baseArmour: 525,
        hardness: 65,
        hullMass: 400,
        masslock: 23,
        pipSpeed: .13888888888889,
        fighterHangars: true,
        pitch: 25,
        roll: 60,
        yaw: 10,
        crew: 3
      },
      retailCost: 146969450,
      bulkheads: [ {
        id: "bT",
        edID: 128049364,
        eddbID: 818,
        grp: "bh",
        cost: 0,
        mass: 0,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "bU",
        edID: 128049365,
        eddbID: 819,
        grp: "bh",
        cost: 58787780,
        mass: 30,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "bV",
        edID: 128049366,
        eddbID: 820,
        grp: "bh",
        cost: 132272510,
        mass: 60,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "bW",
        edID: 128049367,
        eddbID: 821,
        grp: "bh",
        cost: 312604020,
        mass: 60,
        causres: 0,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "bX",
        edID: 128049368,
        eddbID: 822,
        grp: "bh",
        cost: 346407e3,
        mass: 60,
        causres: 0,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 8, 7, 6, 5, 8, 8, 5 ],
        hardpoints: [ 4, 3, 3, 3, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0 ],
        internal: [ 7, 6, 6, 6, 5, 5, 5, {
          class: 5,
          name: "Military",
          eligible: {
            mahr: 1,
            hr: 1,
            scb: 1,
            mrp: 1,
            gsrp: 1,
            gmrp: 1,
            ghrp: 1
          }
        }, 4, 4, 4, 2 ]
      },
      defaults: {
        standard: [ "8E", "7E", "6E", "5E", "8E", "8E", "5C" ],
        hardpoints: [ 0, 0, 0, 0, 0, 0, 17, 17, 0, 0, 0, 0, 0, 0, 0, 0 ],
        internal: [ "05", "04", "4j", 0, "03", 0, 0, 0, 0, 0, "2h", "00" ]
      }
    },
    asp: {
      edID: 128049303,
      eddbID: 3,
      properties: {
        name: "Asp Explorer",
        manufacturer: "Lakon",
        class: 2,
        hullCost: 6135660,
        speed: 250,
        boost: 340,
        boostEnergy: 13,
        baseShieldStrength: 140,
        baseArmour: 210,
        hardness: 52,
        hullMass: 280,
        masslock: 11,
        pipSpeed: .13,
        pitch: 38,
        roll: 100,
        yaw: 10,
        crew: 2
      },
      retailCost: 6661150,
      bulkheads: [ {
        id: "BH",
        edID: 128049304,
        eddbID: 778,
        grp: "bh",
        cost: 0,
        mass: 0,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "BI",
        edID: 128049305,
        eddbID: 779,
        grp: "bh",
        cost: 2664460,
        mass: 21,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "BJ",
        edID: 128049306,
        eddbID: 780,
        grp: "bh",
        cost: 5995040,
        mass: 42,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "BK",
        edID: 128049307,
        eddbID: 781,
        grp: "bh",
        cost: 14168270,
        mass: 42,
        causres: 0,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "BL",
        edID: 128049308,
        eddbID: 782,
        grp: "bh",
        cost: 15700340,
        mass: 42,
        causres: 0,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 5, 5, 5, 4, 4, 5, 5 ],
        hardpoints: [ 2, 2, 1, 1, 1, 1, 0, 0, 0, 0 ],
        internal: [ 6, 5, 3, 3, 3, 2, 2 ]
      },
      defaults: {
        standard: [ "5E", "5E", "5E", "4E", "4E", "5E", "5C" ],
        hardpoints: [ 0, 0, 17, 17, 0, 0, 0, 0, 0, 0 ],
        internal: [ "04", "4e", "01", 0, 0, "00", "2h" ]
      }
    },
    asp_scout: {
      edID: 128672276,
      eddbID: 24,
      properties: {
        name: "Asp Scout",
        manufacturer: "Lakon",
        class: 2,
        hullCost: 3818240,
        speed: 220,
        boost: 300,
        boostEnergy: 13,
        baseShieldStrength: 120,
        baseArmour: 180,
        hardness: 52,
        hullMass: 150,
        masslock: 8,
        pipSpeed: .125,
        pitch: 40,
        roll: 110,
        yaw: 15,
        crew: 2
      },
      retailCost: 3961150,
      bulkheads: [ {
        id: "c1",
        edID: 128672278,
        eddbID: 1503,
        grp: "bh",
        cost: 0,
        mass: 0,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "c2",
        edID: 128672279,
        eddbID: 1504,
        grp: "bh",
        cost: 1584460,
        mass: 21,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "c3",
        edID: 128672280,
        eddbID: 1505,
        grp: "bh",
        cost: 3565040,
        mass: 42,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "c4",
        edID: 128672281,
        eddbID: 1506,
        grp: "bh",
        cost: 8425380,
        mass: 42,
        causres: 0,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "c5",
        edID: 128672282,
        eddbID: 1507,
        grp: "bh",
        cost: 9336440,
        mass: 42,
        causres: 0,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 4, 4, 4, 3, 4, 4, 4 ],
        hardpoints: [ 2, 2, 1, 1, 0, 0 ],
        internal: [ 5, 4, 3, 3, 2, 2 ]
      },
      defaults: {
        standard: [ "4E", "4E", "4E", "3E", "4E", "4E", "4C" ],
        hardpoints: [ 0, 0, 17, 17, 0, 0 ],
        internal: [ "02", "02", "44", 0, 0, 0 ]
      }
    },
    beluga: {
      edID: 128049345,
      eddbID: 30,
      properties: {
        name: "Beluga Liner",
        manufacturer: "Saud Kruger",
        class: 3,
        hullCost: 79654610,
        speed: 200,
        boost: 280,
        boostEnergy: 19,
        baseShieldStrength: 280,
        baseArmour: 280,
        hardness: 60,
        hullMass: 950,
        masslock: 18,
        pipSpeed: .1125,
        luxuryCabins: true,
        fighterHangars: true,
        pitch: 25,
        roll: 60,
        yaw: 17,
        crew: 3
      },
      retailCost: 84532770,
      requirements: {
        horizons: true
      },
      bulkheads: [ {
        id: "cl",
        edID: 128049346,
        eddbID: 1554,
        grp: "bh",
        cost: 0,
        mass: 0,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "cm",
        edID: 128049347,
        eddbID: 1555,
        grp: "bh",
        cost: 33813120,
        mass: 83,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "cn",
        edID: 128049348,
        eddbID: 1556,
        grp: "bh",
        cost: 76079500,
        mass: 165,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "co",
        edID: 128049349,
        eddbID: 1557,
        grp: "bh",
        cost: 179801200,
        mass: 165,
        causres: 0,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "cp",
        edID: 128049350,
        eddbID: 1558,
        grp: "bh",
        cost: 199243730,
        mass: 165,
        causres: 0,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 6, 7, 7, 8, 6, 5, 7 ],
        hardpoints: [ 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0 ],
        internal: [ 6, 6, 6, 6, 5, 5, 4, 3, 3, 3, 3 ]
      },
      defaults: {
        standard: [ "6E", "7E", "7E", "8E", "6E", "5E", "7C" ],
        hardpoints: [ 17, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        internal: [ "4j", "04", "mi", "mi", "mg", "mg", "02", "01", 0, 0, "2h" ]
      }
    },
    cobra_mk_iii: {
      edID: 128049279,
      eddbID: 4,
      properties: {
        name: "Cobra Mk III",
        manufacturer: "Faulcon DeLacy",
        class: 1,
        hullCost: 205800,
        speed: 280,
        boost: 400,
        boostEnergy: 10,
        baseShieldStrength: 80,
        baseArmour: 120,
        hardness: 35,
        hullMass: 180,
        masslock: 8,
        pipSpeed: .125,
        pitch: 40,
        roll: 100,
        yaw: 10,
        crew: 2
      },
      retailCost: 349720,
      bulkheads: [ {
        id: "bk",
        edID: 128049280,
        eddbID: 763,
        grp: "bh",
        cost: 0,
        mass: 0,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "bl",
        edID: 128049281,
        eddbID: 764,
        grp: "bh",
        cost: 151890,
        mass: 14,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "bm",
        edID: 128049282,
        eddbID: 765,
        grp: "bh",
        cost: 341750,
        mass: 27,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "bn",
        edID: 128049283,
        eddbID: 766,
        grp: "bh",
        cost: 797410,
        mass: 27,
        causres: 0,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "bo",
        edID: 128049284,
        eddbID: 767,
        grp: "bh",
        cost: 895e3,
        mass: 27,
        causres: 0,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 4, 4, 4, 3, 3, 3, 4 ],
        hardpoints: [ 2, 2, 1, 1, 0, 0 ],
        internal: [ 4, 4, 4, 2, 2, 2 ]
      },
      defaults: {
        standard: [ "4E", "4E", "4E", "3E", "3E", "3E", "4C" ],
        hardpoints: [ 17, 17, 0, 0, 0, 0 ],
        internal: [ "02", "02", "49", "00", 0, "2h" ]
      }
    },
    cobra_mk_iv: {
      edID: 128672262,
      eddbID: 29,
      properties: {
        name: "Cobra Mk IV",
        manufacturer: "Faulcon DeLacy",
        class: 1,
        hullCost: 603740,
        speed: 200,
        boost: 300,
        boostEnergy: 10,
        baseShieldStrength: 120,
        baseArmour: 120,
        hardness: 35,
        hullMass: 210,
        masslock: 8,
        pipSpeed: .125,
        pitch: 30,
        roll: 90,
        yaw: 10,
        crew: 2
      },
      retailCost: 747660,
      requirements: {
        horizonsEarlyAdoption: true
      },
      bulkheads: [ {
        id: "cg",
        edID: 128672264,
        eddbID: 1518,
        grp: "bh",
        cost: 0,
        mass: 0,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "ch",
        edID: 128672265,
        eddbID: 1519,
        grp: "bh",
        cost: 305890,
        mass: 14,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "ci",
        edID: 128672266,
        eddbID: 1520,
        grp: "bh",
        cost: 688250,
        mass: 27,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "cj",
        edID: 128672267,
        eddbID: 1521,
        grp: "bh",
        cost: 1605910,
        mass: 27,
        causres: 0,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "ck",
        edID: 128672268,
        eddbID: 1522,
        grp: "bh",
        cost: 1802440,
        mass: 27,
        causres: 0,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 4, 4, 4, 3, 3, 3, 4 ],
        hardpoints: [ 2, 2, 1, 1, 1, 0, 0 ],
        internal: [ 4, 4, 4, 4, 3, 3, 2, 2 ]
      },
      defaults: {
        standard: [ "4E", "4E", "4E", "3E", "3E", "3E", "4C" ],
        hardpoints: [ 17, 17, 0, 0, 0, 0, 0 ],
        internal: [ "02", "02", "49", 0, 0, 0, "00", "2h" ]
      }
    },
    diamondback_explorer: {
      edID: 128671831,
      eddbID: 5,
      properties: {
        name: "Diamondback Explorer",
        manufacturer: "Lakon",
        class: 1,
        hullCost: 1635700,
        speed: 260,
        boost: 340,
        boostEnergy: 13,
        baseShieldStrength: 150,
        baseArmour: 150,
        hardness: 42,
        hullMass: 260,
        masslock: 10,
        pipSpeed: .098214285714286,
        pitch: 35,
        roll: 90,
        yaw: 13,
        crew: 1
      },
      retailCost: 1894760,
      bulkheads: [ {
        id: "ba",
        edID: 128671832,
        eddbID: 1456,
        grp: "bh",
        cost: 0,
        mass: 0,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "bb",
        edID: 128671833,
        eddbID: 1457,
        grp: "bh",
        cost: 8e5,
        mass: 23,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "bc",
        edID: 128671834,
        eddbID: 1458,
        grp: "bh",
        cost: 18e5,
        mass: 47,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "bd",
        edID: 128671835,
        eddbID: 1459,
        grp: "bh",
        cost: 42e5,
        mass: 26,
        causres: 0,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "be",
        edID: 128671836,
        eddbID: 1460,
        grp: "bh",
        cost: 4714e3,
        mass: 47,
        causres: 0,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 4, 4, 5, 3, 4, 3, 5 ],
        hardpoints: [ 3, 2, 2, 0, 0, 0, 0 ],
        internal: [ 4, 4, 3, 3, 2, 2 ]
      },
      defaults: {
        standard: [ "4E", "4E", "5E", "3E", "4E", "3E", "5C" ],
        hardpoints: [ 0, 17, 17, 0, 0, 0, 0 ],
        internal: [ "49", "02", "01", 0, "2h", 0 ]
      }
    },
    diamondback: {
      edID: 128671217,
      eddbID: 6,
      properties: {
        name: "Diamondback Scout",
        manufacturer: "Lakon",
        class: 1,
        hullCost: 461340,
        speed: 280,
        boost: 380,
        boostEnergy: 10,
        baseShieldStrength: 120,
        baseArmour: 120,
        hardness: 40,
        hullMass: 170,
        masslock: 8,
        pipSpeed: .096153846153846,
        pitch: 42,
        roll: 100,
        yaw: 15,
        crew: 1
      },
      retailCost: 564330,
      bulkheads: [ {
        id: "b5",
        edID: 128671218,
        eddbID: 1384,
        grp: "bh",
        cost: 0,
        mass: 0,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "b6",
        edID: 128671219,
        eddbID: 1385,
        grp: "bh",
        cost: 225700,
        mass: 13,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "b7",
        edID: 128671220,
        eddbID: 1386,
        grp: "bh",
        cost: 507900,
        mass: 26,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "b8",
        edID: 128671221,
        eddbID: 1387,
        grp: "bh",
        cost: 1185100,
        mass: 26,
        causres: 0,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "b9",
        edID: 128671222,
        eddbID: 1388,
        grp: "bh",
        cost: 1330100,
        mass: 26,
        causres: 0,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 4, 4, 4, 2, 3, 2, 4 ],
        hardpoints: [ 2, 2, 1, 1, 0, 0, 0, 0 ],
        internal: [ 3, 3, 3, 2 ]
      },
      defaults: {
        standard: [ "4E", "4E", "4E", "2E", "3E", "2E", "4C" ],
        hardpoints: [ 17, 17, 0, 0, 0, 0, 0, 0 ],
        internal: [ "44", 0, 0, "2h" ]
      }
    },
    dolphin: {
      edID: 128049291,
      eddbID: 31,
      properties: {
        name: "Dolphin",
        manufacturer: "Saud Kruger",
        class: 1,
        hullCost: 1115330,
        speed: 250,
        boost: 350,
        boostEnergy: 10,
        baseShieldStrength: 110,
        baseArmour: 110,
        hardness: 35,
        hullMass: 140,
        masslock: 9,
        pipSpeed: .13,
        luxuryCabins: true,
        pitch: 30,
        roll: 100,
        yaw: 20,
        crew: 1
      },
      retailCost: 1337330,
      requirements: {
        horizons: true
      },
      bulkheads: [ {
        id: "cq",
        edID: 128049292,
        eddbID: 1589,
        grp: "bh",
        cost: 0,
        mass: 0,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "cr",
        edID: 128049293,
        eddbID: 1590,
        grp: "bh",
        cost: 534940,
        mass: 32,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "cs",
        edID: 128049294,
        eddbID: 1591,
        grp: "bh",
        cost: 1203600,
        mass: 63,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "ct",
        edID: 128049295,
        eddbID: 1592,
        grp: "bh",
        cost: 2808390,
        mass: 63,
        causres: 0,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "cu",
        edID: 128049296,
        eddbID: 1593,
        grp: "bh",
        cost: 3152080,
        mass: 63,
        causres: 0,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 4, 5, 4, 4, 3, 3, 4 ],
        hardpoints: [ 1, 1, 0, 0, 0 ],
        internal: [ 5, 4, 4, 3, 2, 2, 2 ]
      },
      defaults: {
        standard: [ "4E", "5E", "4E", "4E", "3E", "3E", "4C" ],
        hardpoints: [ 17, 17, 0, 0, 0 ],
        internal: [ "md", "02", "49", "01", "00", 0, "2h" ]
      }
    },
    eagle: {
      edID: 128049255,
      eddbID: 7,
      properties: {
        name: "Eagle",
        manufacturer: "Core Dynamics",
        class: 1,
        hullCost: 10440,
        speed: 240,
        boost: 350,
        boostEnergy: 8,
        baseShieldStrength: 60,
        baseArmour: 40,
        hardness: 28,
        hullMass: 50,
        masslock: 6,
        pipSpeed: .0625,
        pitch: 50,
        roll: 120,
        yaw: 18,
        crew: 1
      },
      retailCost: 44800,
      bulkheads: [ {
        id: "bY",
        edID: 128049256,
        eddbID: 743,
        grp: "bh",
        cost: 0,
        mass: 0,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "bZ",
        edID: 128049257,
        eddbID: 744,
        grp: "bh",
        cost: 26880,
        mass: 4,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "B0",
        edID: 128049258,
        eddbID: 745,
        grp: "bh",
        cost: 90050,
        mass: 8,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "B1",
        edID: 128049259,
        eddbID: 746,
        grp: "bh",
        cost: 140090,
        mass: 8,
        causres: 0,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "B2",
        edID: 128049260,
        eddbID: 747,
        grp: "bh",
        cost: 150390,
        mass: 8,
        causres: 0,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 2, 3, 3, 1, 2, 2, 2 ],
        hardpoints: [ 1, 1, 1, 0 ],
        internal: [ 3, 2, {
          class: 2,
          name: "Military",
          eligible: {
            mahr: 1,
            hr: 1,
            scb: 1,
            mrp: 1,
            gsrp: 1,
            gmrp: 1,
            ghrp: 1
          }
        }, 1, 1 ]
      },
      defaults: {
        standard: [ "2E", "3E", "3E", "1E", "2E", "2E", "2C" ],
        hardpoints: [ 17, 17, 0, 0 ],
        internal: [ "44", "00", 0, "2h", 0 ]
      }
    },
    federal_assault_ship: {
      edID: 128672145,
      eddbID: 8,
      properties: {
        name: "Federal Assault Ship",
        manufacturer: "Core Dynamics",
        class: 2,
        hullCost: 19072e3,
        speed: 210,
        boost: 350,
        boostEnergy: 19,
        baseShieldStrength: 200,
        baseArmour: 300,
        hardness: 60,
        hullMass: 480,
        masslock: 14,
        pipSpeed: .071428571428571,
        pitch: 38,
        roll: 90,
        yaw: 19,
        crew: 2
      },
      retailCost: 19814210,
      requirements: {
        federationRank: 5
      },
      bulkheads: [ {
        id: "bz",
        edID: 128672147,
        eddbID: 1466,
        grp: "bh",
        cost: 0,
        mass: 0,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "bA",
        edID: 128672148,
        eddbID: 1467,
        grp: "bh",
        cost: 7925680,
        mass: 44,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "bB",
        edID: 128672149,
        eddbID: 1468,
        grp: "bh",
        cost: 17832780,
        mass: 87,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "bC",
        edID: 128672150,
        eddbID: 1469,
        grp: "bh",
        cost: 42144810,
        mass: 87,
        causres: 0,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "bD",
        edID: 128672151,
        eddbID: 1470,
        grp: "bh",
        cost: 46702080,
        mass: 87,
        causres: 0,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 6, 6, 5, 5, 6, 4, 4 ],
        hardpoints: [ 3, 3, 2, 2, 0, 0, 0, 0 ],
        internal: [ 5, 5, 4, {
          class: 4,
          name: "Military",
          eligible: {
            mahr: 1,
            hr: 1,
            scb: 1,
            mrp: 1,
            gsrp: 1,
            gmrp: 1,
            ghrp: 1
          }
        }, {
          class: 4,
          name: "Military",
          eligible: {
            mahr: 1,
            hr: 1,
            scb: 1,
            mrp: 1,
            gsrp: 1,
            gmrp: 1,
            ghrp: 1
          }
        }, 3, 2, 2 ]
      },
      defaults: {
        standard: [ "6E", "6E", "5E", "5E", "6E", "4E", "4C" ],
        hardpoints: [ 0, 0, 17, 17, 0, 0, 0, 0 ],
        internal: [ "4e", "03", "02", 0, 0, "02", 0, 0 ]
      }
    },
    federal_corvette: {
      edID: 128049369,
      eddbID: 25,
      properties: {
        name: "Federal Corvette",
        manufacturer: "Core Dynamics",
        class: 3,
        hullCost: 182589570,
        speed: 200,
        boost: 260,
        boostEnergy: 27,
        baseShieldStrength: 555,
        baseArmour: 370,
        hardness: 70,
        hullMass: 900,
        masslock: 24,
        pipSpeed: .125,
        fighterHangars: true,
        pitch: 28,
        roll: 75,
        yaw: 8,
        crew: 3
      },
      retailCost: 187969450,
      requirements: {
        federationRank: 12
      },
      bulkheads: [ {
        id: "BW",
        edID: 128049370,
        eddbID: 1498,
        grp: "bh",
        cost: 0,
        mass: 0,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "BX",
        edID: 128049371,
        eddbID: 1499,
        grp: "bh",
        cost: 75187790,
        mass: 30,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "BY",
        edID: 128049372,
        eddbID: 1500,
        grp: "bh",
        cost: 169172510,
        mass: 60,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "BZ",
        edID: 128049373,
        eddbID: 1501,
        grp: "bh",
        cost: 399811020,
        mass: 60,
        causres: 0,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "c0",
        edID: 128049374,
        eddbID: 1502,
        grp: "bh",
        cost: 443044e3,
        mass: 60,
        causres: 0,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 8, 7, 6, 5, 8, 8, 5 ],
        hardpoints: [ 4, 4, 3, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0 ],
        internal: [ 7, 7, 7, 6, 6, 5, 5, {
          class: 5,
          name: "Military",
          eligible: {
            mahr: 1,
            hr: 1,
            scb: 1,
            mrp: 1,
            gsrp: 1,
            gmrp: 1,
            ghrp: 1
          }
        }, {
          class: 5,
          name: "Military",
          eligible: {
            mahr: 1,
            hr: 1,
            scb: 1,
            mrp: 1,
            gsrp: 1,
            gmrp: 1,
            ghrp: 1
          }
        }, 4, 4, 3 ]
      },
      defaults: {
        standard: [ "8E", "7E", "6E", "5E", "8E", "8E", "5C" ],
        hardpoints: [ 0, 0, 0, 17, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        internal: [ "4o", "05", 0, 0, 0, 0, 0, 0, 0, "02", "01", "2h" ]
      }
    },
    federal_dropship: {
      edID: 128049321,
      eddbID: 9,
      properties: {
        name: "Federal Dropship",
        manufacturer: "Core Dynamics",
        class: 2,
        hullCost: 13469990,
        speed: 180,
        boost: 300,
        boostEnergy: 19,
        baseShieldStrength: 200,
        baseArmour: 300,
        hardness: 60,
        hullMass: 580,
        masslock: 14,
        pipSpeed: .11111111111111,
        pitch: 30,
        roll: 80,
        yaw: 14,
        crew: 2
      },
      retailCost: 14314210,
      requirements: {
        federationRank: 3
      },
      bulkheads: [ {
        id: "bE",
        edID: 128049322,
        eddbID: 793,
        grp: "bh",
        cost: 0,
        mass: 0,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "bF",
        edID: 128049323,
        eddbID: 794,
        grp: "bh",
        cost: 5725680,
        mass: 44,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "bG",
        edID: 128049324,
        eddbID: 795,
        grp: "bh",
        cost: 12882780,
        mass: 87,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "bH",
        edID: 128049325,
        eddbID: 796,
        grp: "bh",
        cost: 30446310,
        mass: 87,
        causres: 0,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "bI",
        edID: 128049326,
        eddbID: 797,
        grp: "bh",
        cost: 33738580,
        mass: 87,
        causres: 0,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 6, 6, 5, 5, 6, 4, 4 ],
        hardpoints: [ 3, 2, 2, 2, 2, 0, 0, 0, 0 ],
        internal: [ 6, 5, 5, 4, {
          class: 4,
          name: "Military",
          eligible: {
            mahr: 1,
            hr: 1,
            scb: 1,
            mrp: 1,
            gsrp: 1,
            gmrp: 1,
            ghrp: 1
          }
        }, {
          class: 4,
          name: "Military",
          eligible: {
            mahr: 1,
            hr: 1,
            scb: 1,
            mrp: 1,
            gsrp: 1,
            gmrp: 1,
            ghrp: 1
          }
        }, 3, 3, 2 ]
      },
      defaults: {
        standard: [ "6E", "6E", "5E", "5E", "6E", "4E", "4C" ],
        hardpoints: [ 0, 17, 17, 0, 0, 0, 0, 0, 0 ],
        internal: [ "04", "03", "4e", "02", 0, 0, 0, 0, "2h" ]
      }
    },
    federal_gunship: {
      edID: 128672152,
      eddbID: 10,
      properties: {
        name: "Federal Gunship",
        manufacturer: "Core Dynamics",
        class: 2,
        hullCost: 34774790,
        speed: 170,
        boost: 280,
        boostEnergy: 23,
        baseShieldStrength: 250,
        baseArmour: 350,
        hardness: 60,
        hullMass: 580,
        masslock: 14,
        pipSpeed: .10294117647059,
        fighterHangars: true,
        pitch: 25,
        roll: 80,
        yaw: 18,
        crew: 2
      },
      retailCost: 35814210,
      requirements: {
        federationRank: 7
      },
      bulkheads: [ {
        id: "bJ",
        edID: 128672154,
        eddbID: 1471,
        grp: "bh",
        cost: 0,
        mass: 0,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "bK",
        edID: 128672155,
        eddbID: 1472,
        grp: "bh",
        cost: 14325690,
        mass: 44,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "bL",
        edID: 128672156,
        eddbID: 1473,
        grp: "bh",
        cost: 32232790,
        mass: 87,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "bM",
        edID: 128672157,
        eddbID: 1474,
        grp: "bh",
        cost: 76176810,
        mass: 87,
        causres: 0,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "bN",
        edID: 128672158,
        eddbID: 1475,
        grp: "bh",
        cost: 84414090,
        mass: 87,
        causres: 0,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 6, 6, 5, 5, 7, 5, 4 ],
        hardpoints: [ 3, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0 ],
        internal: [ 6, 6, 5, {
          class: 4,
          name: "Military",
          eligible: {
            mahr: 1,
            hr: 1,
            scb: 1,
            mrp: 1,
            gsrp: 1,
            gmrp: 1,
            ghrp: 1
          }
        }, {
          class: 4,
          name: "Military",
          eligible: {
            mahr: 1,
            hr: 1,
            scb: 1,
            mrp: 1,
            gsrp: 1,
            gmrp: 1,
            ghrp: 1
          }
        }, {
          class: 4,
          name: "Military",
          eligible: {
            mahr: 1,
            hr: 1,
            scb: 1,
            mrp: 1,
            gsrp: 1,
            gmrp: 1,
            ghrp: 1
          }
        }, 2, 2 ]
      },
      defaults: {
        standard: [ "6E", "6E", "5E", "5E", "7E", "5E", "4C" ],
        hardpoints: [ 0, 17, 17, 0, 0, 0, 0, 0, 0, 0, 0 ],
        internal: [ 0, "4j", "03", 0, 0, 0, 0, "2h" ]
      }
    },
    fer_de_lance: {
      edID: 128049351,
      eddbID: 11,
      properties: {
        name: "Fer-de-Lance",
        manufacturer: "Zorgon Peterson",
        class: 2,
        hullCost: 51232230,
        speed: 260,
        boost: 350,
        boostEnergy: 19,
        baseShieldStrength: 300,
        baseArmour: 225,
        hardness: 70,
        hullMass: 250,
        masslock: 12,
        pipSpeed: .038461538461538,
        pitch: 38,
        roll: 90,
        yaw: 12,
        crew: 2
      },
      retailCost: 51567040,
      bulkheads: [ {
        id: "Bd",
        edID: 128049352,
        eddbID: 813,
        grp: "bh",
        cost: 0,
        mass: 0,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "Be",
        edID: 128049353,
        eddbID: 814,
        grp: "bh",
        cost: 20626820,
        mass: 19,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "Bf",
        edID: 128049354,
        eddbID: 815,
        grp: "bh",
        cost: 46410340,
        mass: 38,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "Bg",
        edID: 128049355,
        eddbID: 816,
        grp: "bh",
        cost: 109683090,
        mass: 38,
        causres: 0,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "Bh",
        edID: 128049356,
        eddbID: 817,
        grp: "bh",
        cost: 121543510,
        mass: 38,
        causres: 0,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 6, 5, 4, 4, 6, 4, 3 ],
        hardpoints: [ 4, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0 ],
        internal: [ 5, 4, 4, 2, 1 ]
      },
      defaults: {
        standard: [ "5E", "5E", "4E", "4E", "6E", "4E", "3C" ],
        hardpoints: [ 0, 17, 17, 0, 0, 0, 0, 0, 0, 0, 0 ],
        internal: [ "03", "49", "02", 0, "2h" ]
      }
    },
    hauler: {
      edID: 128049261,
      eddbID: 12,
      properties: {
        name: "Hauler",
        manufacturer: "Zorgon Peterson",
        class: 1,
        hullCost: 29790,
        speed: 200,
        boost: 300,
        boostEnergy: 7,
        baseShieldStrength: 50,
        baseArmour: 100,
        hardness: 20,
        hullMass: 14,
        masslock: 6,
        pipSpeed: .1625,
        pitch: 36,
        roll: 100,
        yaw: 14,
        crew: 1
      },
      retailCost: 52720,
      bulkheads: [ {
        id: "Bi",
        edID: 128049262,
        eddbID: 748,
        grp: "bh",
        cost: 0,
        mass: 0,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "Bj",
        edID: 128049263,
        eddbID: 749,
        grp: "bh",
        cost: 42180,
        mass: 1,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "Bk",
        edID: 128049264,
        eddbID: 750,
        grp: "bh",
        cost: 185050,
        mass: 2,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "Bl",
        edID: 128049265,
        eddbID: 751,
        grp: "bh",
        cost: 270300,
        mass: 2,
        causres: 0,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "Bm",
        edID: 128049266,
        eddbID: 752,
        grp: "bh",
        cost: 282420,
        mass: 2,
        causres: 0,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 2, 2, 2, 1, 1, 1, 2 ],
        hardpoints: [ 1, 0, 0 ],
        internal: [ 3, 3, 2, 1 ]
      },
      defaults: {
        standard: [ "2E", "2E", "2E", "1E", "1E", "1E", "2C" ],
        hardpoints: [ 17, 0, 0 ],
        internal: [ "01", "01", "3v", "2h" ]
      }
    },
    imperial_clipper: {
      edID: 128049315,
      eddbID: 13,
      properties: {
        name: "Imperial Clipper",
        manufacturer: "Gutamaya",
        class: 3,
        hullCost: 21077780,
        speed: 300,
        boost: 380,
        boostEnergy: 19,
        baseShieldStrength: 180,
        baseArmour: 270,
        hardness: 60,
        hullMass: 400,
        masslock: 12,
        pipSpeed: .1,
        pitch: 40,
        roll: 80,
        yaw: 18,
        crew: 2
      },
      retailCost: 22296860,
      requirements: {
        empireRank: 7
      },
      bulkheads: [ {
        id: "bp",
        edID: 128049316,
        eddbID: 788,
        grp: "bh",
        cost: 0,
        mass: 0,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "bq",
        edID: 128049317,
        eddbID: 789,
        grp: "bh",
        cost: 8918340,
        mass: 30,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "br",
        edID: 128049318,
        eddbID: 790,
        grp: "bh",
        cost: 20066270,
        mass: 60,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "bs",
        edID: 128049319,
        eddbID: 791,
        grp: "bh",
        cost: 47423290,
        mass: 60,
        causres: 0,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "bt",
        edID: 128049320,
        eddbID: 792,
        grp: "bh",
        cost: 52551340,
        mass: 60,
        causres: 0,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 6, 6, 5, 5, 6, 5, 4 ],
        hardpoints: [ 3, 3, 2, 2, 0, 0, 0, 0 ],
        internal: [ 7, 6, 4, 4, 3, 3, 2, 2 ]
      },
      defaults: {
        standard: [ "6E", "6E", "5E", "5E", "6E", "5E", "4C" ],
        hardpoints: [ 0, 0, 17, 17, 0, 0, 0, 0 ],
        internal: [ "05", "4j", "02", 0, 0, 0, "00", "2h" ]
      }
    },
    imperial_courier: {
      edID: 128671223,
      eddbID: 14,
      properties: {
        name: "Imperial Courier",
        manufacturer: "Gutamaya",
        class: 1,
        hullCost: 2481550,
        speed: 280,
        boost: 380,
        boostEnergy: 10,
        baseShieldStrength: 200,
        baseArmour: 80,
        hardness: 30,
        hullMass: 35,
        masslock: 7,
        pipSpeed: .053571428571429,
        pitch: 38,
        roll: 90,
        yaw: 16,
        crew: 1
      },
      retailCost: 2542930,
      requirements: {
        empireRank: 3
      },
      bulkheads: [ {
        id: "bf",
        edID: 128671224,
        eddbID: 1389,
        grp: "bh",
        cost: 0,
        mass: 0,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "bg",
        edID: 128671225,
        eddbID: 1390,
        grp: "bh",
        cost: 1017200,
        mass: 4,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "bh",
        edID: 128671226,
        eddbID: 1391,
        grp: "bh",
        cost: 2288600,
        mass: 8,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "bi",
        edID: 128671227,
        eddbID: 1392,
        grp: "bh",
        cost: 5408800,
        mass: 8,
        causres: 0,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "bj",
        edID: 128671228,
        eddbID: 1393,
        grp: "bh",
        cost: 5993700,
        mass: 8,
        causres: 0,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 4, 3, 3, 1, 3, 2, 3 ],
        hardpoints: [ 2, 2, 2, 0, 0, 0, 0 ],
        internal: [ 3, 3, 2, 2, 2, 1 ]
      },
      defaults: {
        standard: [ "4E", "3E", "3E", "1E", "3E", "2E", "3C" ],
        hardpoints: [ 17, 17, 0, 0, 0, 0, 0 ],
        internal: [ "01", "01", "3v", "00", "00", "2h" ]
      }
    },
    imperial_cutter: {
      edID: 128049375,
      eddbID: 26,
      properties: {
        name: "Imperial Cutter",
        manufacturer: "Gutamaya",
        class: 3,
        hullCost: 199926890,
        speed: 200,
        boost: 320,
        boostEnergy: 23,
        baseShieldStrength: 600,
        baseArmour: 400,
        hardness: 70,
        hullMass: 1100,
        masslock: 27,
        pipSpeed: .05,
        fighterHangars: true,
        pitch: 18,
        roll: 45,
        yaw: 8,
        crew: 3
      },
      retailCost: 208969450,
      requirements: {
        empireRank: 12
      },
      bulkheads: [ {
        id: "BR",
        edID: 128049376,
        eddbID: 1493,
        grp: "bh",
        cost: 0,
        mass: 0,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "BS",
        edID: 128049377,
        eddbID: 1494,
        grp: "bh",
        cost: 83587790,
        mass: 30,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "BT",
        edID: 128049378,
        eddbID: 1495,
        grp: "bh",
        cost: 188072510,
        mass: 60,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "BU",
        edID: 128049379,
        eddbID: 1496,
        grp: "bh",
        cost: 444478020,
        mass: 60,
        causres: 0,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "BV",
        edID: 128049380,
        eddbID: 1497,
        grp: "bh",
        cost: 492541e3,
        mass: 60,
        causres: 0,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 8, 8, 7, 7, 7, 7, 6 ],
        hardpoints: [ 4, 3, 3, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0 ],
        internal: [ 8, 8, 6, 6, 6, 5, 5, {
          class: 5,
          name: "Military",
          eligible: {
            mahr: 1,
            hr: 1,
            scb: 1,
            mrp: 1,
            gsrp: 1,
            gmrp: 1,
            ghrp: 1
          }
        }, {
          class: 5,
          name: "Military",
          eligible: {
            mahr: 1,
            hr: 1,
            scb: 1,
            mrp: 1,
            gsrp: 1,
            gmrp: 1,
            ghrp: 1
          }
        }, 4, 3 ]
      },
      defaults: {
        standard: [ "8E", "8E", "7E", "7E", "7E", "7E", "6C" ],
        hardpoints: [ 0, 0, 0, 17, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        internal: [ "4t", "06", "04", 0, 0, 0, 0, 0, 0, "01", "2h" ]
      }
    },
    imperial_eagle: {
      edID: 128672138,
      eddbID: 15,
      properties: {
        name: "Imperial Eagle",
        manufacturer: "Gutamaya",
        class: 1,
        hullCost: 72180,
        speed: 300,
        boost: 400,
        boostEnergy: 8,
        baseShieldStrength: 80,
        baseArmour: 60,
        hardness: 28,
        hullMass: 50,
        masslock: 6,
        pipSpeed: .075,
        pitch: 40,
        roll: 100,
        yaw: 15,
        crew: 1
      },
      retailCost: 110830,
      bulkheads: [ {
        id: "bu",
        edID: 128672140,
        eddbID: 1461,
        grp: "bh",
        cost: 0,
        mass: 0,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "bv",
        edID: 128672141,
        eddbID: 1462,
        grp: "bh",
        cost: 66500,
        mass: 4,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "bw",
        edID: 128672142,
        eddbID: 1463,
        grp: "bh",
        cost: 222760,
        mass: 8,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "bx",
        edID: 128672143,
        eddbID: 1464,
        grp: "bh",
        cost: 346550,
        mass: 8,
        causres: 0,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "by",
        edID: 128672144,
        eddbID: 1465,
        grp: "bh",
        cost: 372040,
        mass: 8,
        causres: 0,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 3, 3, 3, 1, 2, 2, 2 ],
        hardpoints: [ 2, 1, 1, 0 ],
        internal: [ 3, 2, {
          class: 2,
          name: "Military",
          eligible: {
            mahr: 1,
            hr: 1,
            scb: 1,
            mrp: 1,
            gsrp: 1,
            gmrp: 1,
            ghrp: 1
          }
        }, 1, 1 ]
      },
      defaults: {
        standard: [ "3E", "3E", "3E", "1E", "2E", "2E", "2C" ],
        hardpoints: [ 0, 17, 17, 0 ],
        internal: [ "44", "00", 0, "2h", 0 ]
      }
    },
    keelback: {
      edID: 128672269,
      eddbID: 27,
      properties: {
        name: "Keelback",
        manufacturer: "Lakon",
        class: 2,
        hullCost: 2943870,
        speed: 200,
        boost: 300,
        boostEnergy: 10,
        baseShieldStrength: 135,
        baseArmour: 270,
        hardness: 45,
        hullMass: 180,
        masslock: 8,
        pipSpeed: .1375,
        fighterHangars: true,
        pitch: 27,
        roll: 100,
        yaw: 15,
        crew: 2
      },
      retailCost: 3126150,
      bulkheads: [ {
        id: "cb",
        edID: 128672271,
        eddbID: 1513,
        grp: "bh",
        cost: 0,
        mass: 0,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "cc",
        edID: 128672272,
        eddbID: 1514,
        grp: "bh",
        cost: 1250460,
        mass: 12,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "cd",
        edID: 128672273,
        eddbID: 1515,
        grp: "bh",
        cost: 2813540,
        mass: 23,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "ce",
        edID: 128672274,
        eddbID: 1516,
        grp: "bh",
        cost: 6649330,
        mass: 23,
        causres: 0,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "cf",
        edID: 128672275,
        eddbID: 1517,
        grp: "bh",
        cost: 7368340,
        mass: 23,
        causres: 0,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 4, 4, 4, 1, 3, 2, 4 ],
        hardpoints: [ 2, 2, 1, 1, 0, 0, 0 ],
        internal: [ 5, 5, 4, 3, 2, 2 ]
      },
      defaults: {
        standard: [ "4E", "4E", "4E", "1E", "3E", "2E", "4C" ],
        hardpoints: [ 0, 0, 17, 17, 0, 0, 0 ],
        internal: [ "03", "03", "02", "44", "00", "2h" ]
      }
    },
    krait_mkii: {
      edID: 128816567,
      eddbID: 35,
      properties: {
        name: "Krait Mk II",
        manufacturer: "Faulcon DeLacy",
        class: 2,
        hullCost: 42409425,
        speed: 240,
        boost: 330,
        boostEnergy: 13,
        baseShieldStrength: 220,
        baseArmour: 220,
        hardness: 55,
        hullMass: 320,
        masslock: 17,
        pipSpeed: .09375,
        fighterHangars: true,
        pitch: 26,
        roll: 90,
        yaw: 10,
        crew: 3
      },
      retailCost: 45814205,
      bulkheads: [ {
        id: "2T",
        edID: 128816569,
        eddbID: 1645,
        grp: "bh",
        cost: 0,
        mass: 0,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "2U",
        edID: 128816570,
        eddbID: 1646,
        grp: "bh",
        cost: 22791270,
        mass: 36,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "2V",
        edID: 128816571,
        eddbID: 1647,
        grp: "bh",
        cost: 51280360,
        mass: 67,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "2W",
        edID: 128816572,
        eddbID: 1648,
        grp: "bh",
        cost: 121192590,
        mass: 67,
        causres: 0,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "2X",
        edID: 128816573,
        eddbID: 1649,
        grp: "bh",
        cost: 134297570,
        mass: 67,
        causres: 0,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 7, 6, 5, 4, 7, 6, 5 ],
        hardpoints: [ 3, 3, 3, 2, 2, 0, 0, 0, 0 ],
        internal: [ 6, 6, 5, 5, 4, 3, 3, 2 ]
      },
      defaults: {
        standard: [ "7E", "6E", "5E", "4E", "7E", "6E", "5C" ],
        hardpoints: [ 0, 0, 0, 17, 17, 0, 0, 0, 0 ],
        internal: [ "4h", "04", "04", "03", 0, "2h", 0, "00" ]
      }
    },
    krait_phantom: {
      edID: 128149376,
      eddbID: 35,
      properties: {
        name: "Krait Phantom",
        manufacturer: "Faulcon DeLacy",
        class: 2,
        hullCost: 42409425,
        speed: 250,
        boost: 380,
        boostEnergy: 13,
        baseShieldStrength: 200,
        baseArmour: 180,
        hardness: 60,
        hullMass: 270,
        masslock: 17,
        pipSpeed: .048387096774194,
        pitch: 27,
        roll: 80,
        yaw: 10,
        crew: 2
      },
      retailCost: 45814205,
      bulkheads: [ {
        id: "2T",
        edID: 128816569,
        eddbID: 1645,
        grp: "bh",
        cost: 0,
        mass: 0,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "2U",
        edID: 128816570,
        eddbID: 1646,
        grp: "bh",
        cost: 22791270,
        mass: 36,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "2V",
        edID: 128816571,
        eddbID: 1647,
        grp: "bh",
        cost: 51280360,
        mass: 67,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "2W",
        edID: 128816572,
        eddbID: 1648,
        grp: "bh",
        cost: 121192590,
        mass: 67,
        causres: 0,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "2X",
        edID: 128816573,
        eddbID: 1649,
        grp: "bh",
        cost: 134297570,
        mass: 67,
        causres: 0,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 7, 6, 5, 4, 7, 6, 5 ],
        hardpoints: [ 3, 3, 2, 2, 0, 0, 0, 0 ],
        internal: [ 6, 5, 5, 5, 3, 3, 3, 2 ]
      },
      defaults: {
        standard: [ "6E", "6E", "5E", "4E", "7E", "6E", "5C" ],
        hardpoints: [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        internal: [ "4h", "04", "04", "03", 0, "2h", 0, "00" ]
      }
    },
    orca: {
      edID: 128049327,
      eddbID: 16,
      properties: {
        name: "Orca",
        manufacturer: "Saud Kruger",
        class: 3,
        hullCost: 47790590,
        speed: 300,
        boost: 380,
        boostEnergy: 16,
        baseShieldStrength: 220,
        baseArmour: 220,
        hardness: 55,
        hullMass: 290,
        masslock: 16,
        pipSpeed: .083333333333333,
        luxuryCabins: true,
        pitch: 25,
        roll: 55,
        yaw: 18,
        crew: 2
      },
      retailCost: 48539900,
      bulkheads: [ {
        id: "BM",
        edID: 128049328,
        eddbID: 798,
        grp: "bh",
        cost: 0,
        mass: 0,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "BN",
        edID: 128049329,
        eddbID: 799,
        grp: "bh",
        cost: 19415950,
        mass: 21,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "BO",
        edID: 128049330,
        eddbID: 800,
        grp: "bh",
        cost: 43685900,
        mass: 87,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "BP",
        edID: 128049331,
        eddbID: 801,
        grp: "bh",
        cost: 103244340,
        mass: 87,
        causres: 0,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "BQ",
        edID: 128049332,
        eddbID: 802,
        grp: "bh",
        cost: 114408510,
        mass: 87,
        causres: 0,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 5, 6, 5, 6, 5, 4, 5 ],
        hardpoints: [ 3, 2, 2, 0, 0, 0, 0 ],
        internal: [ 6, 5, 5, 5, 4, 3, 2, 2 ]
      },
      defaults: {
        standard: [ "5E", "6E", "5E", "6E", "5E", "4E", "5C" ],
        hardpoints: [ 0, 17, 17, 0, 0, 0, 0 ],
        internal: [ "me", "mc", "03", "4e", "02", 0, 0, "2h" ]
      }
    },
    mamba: {
      edID: 128149376,
      eddbID: 11,
      properties: {
        name: "Mamba",
        manufacturer: "Zorgon Peterson",
        class: 2,
        hullCost: 55866341,
        speed: 310,
        boost: 380,
        boostEnergy: 10,
        baseShieldStrength: 270,
        baseArmour: 230,
        hardness: 65,
        hullMass: 250,
        masslock: 12,
        pipSpeed: .046052631578947,
        pitch: 27,
        roll: 80,
        yaw: 10,
        crew: 2
      },
      retailCost: 55382252,
      bulkheads: [ {
        id: "2T",
        edID: 128049376,
        eddbID: 813,
        grp: "bh",
        cost: 0,
        mass: 0,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "2U",
        edID: 128049377,
        eddbID: 814,
        grp: "bh",
        cost: 20626820,
        mass: 19,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "2V",
        edID: 128049378,
        eddbID: 815,
        grp: "bh",
        cost: 46410340,
        mass: 38,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "2W",
        edID: 128049379,
        eddbID: 816,
        grp: "bh",
        cost: 109683090,
        mass: 38,
        causres: 0,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "2X",
        edID: 128049380,
        eddbID: 817,
        grp: "bh",
        cost: 121543510,
        mass: 38,
        causres: 0,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 6, 5, 4, 4, 6, 4, 3 ],
        hardpoints: [ 4, 3, 3, 1, 1, 0, 0, 0, 0, 0, 0 ],
        internal: [ 5, 4, 3, 2, 2 ]
      },
      defaults: {
        standard: [ "5E", "5E", "4E", "4E", "6E", "4E", "3C" ],
        hardpoints: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        internal: [ "03", "49", "02", 0, "2h" ]
      }
    },
    python: {
      edID: 128049339,
      eddbID: 17,
      properties: {
        name: "Python",
        manufacturer: "Faulcon DeLacy",
        class: 2,
        hullCost: 55171380,
        speed: 230,
        boost: 300,
        boostEnergy: 23,
        baseShieldStrength: 260,
        baseArmour: 260,
        hardness: 65,
        hullMass: 350,
        masslock: 17,
        pipSpeed: .097826086956522,
        pitch: 29,
        roll: 90,
        yaw: 10,
        crew: 2
      },
      retailCost: 56978180,
      bulkheads: [ {
        id: "bO",
        edID: 128049340,
        eddbID: 808,
        grp: "bh",
        cost: 0,
        mass: 0,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "bP",
        edID: 128049341,
        eddbID: 809,
        grp: "bh",
        cost: 22791270,
        mass: 26,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "bQ",
        edID: 128049342,
        eddbID: 810,
        grp: "bh",
        cost: 51280360,
        mass: 53,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "bR",
        edID: 128049343,
        eddbID: 811,
        grp: "bh",
        cost: 121192590,
        mass: 53,
        causres: 0,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "bS",
        edID: 128049344,
        eddbID: 812,
        grp: "bh",
        cost: 134297570,
        mass: 53,
        causres: 0,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 7, 6, 5, 4, 7, 6, 5 ],
        hardpoints: [ 3, 3, 3, 2, 2, 0, 0, 0, 0 ],
        internal: [ 6, 6, 6, 5, 5, 4, 3, 3, 2 ]
      },
      defaults: {
        standard: [ "7E", "6E", "5E", "4E", "7E", "6E", "5C" ],
        hardpoints: [ 0, 0, 0, 17, 17, 0, 0, 0, 0 ],
        internal: [ "04", "04", "4j", "03", 0, 0, 0, "00", "2h" ]
      }
    },
    sidewinder: {
      edID: 128049249,
      eddbID: 18,
      properties: {
        name: "Sidewinder",
        manufacturer: "Faulcon DeLacy",
        class: 1,
        hullCost: 4070,
        speed: 220,
        boost: 320,
        boostEnergy: 7,
        baseShieldStrength: 40,
        baseArmour: 60,
        hardness: 20,
        hullMass: 25,
        masslock: 6,
        pipSpeed: .13636363636364,
        pitch: 42,
        roll: 110,
        yaw: 16,
        crew: 1
      },
      retailCost: 32e3,
      bulkheads: [ {
        id: "b0",
        edID: 128049250,
        eddbID: 738,
        grp: "bh",
        cost: 0,
        mass: 0,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "b1",
        edID: 128049251,
        eddbID: 739,
        grp: "bh",
        cost: 25600,
        mass: 2,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "b2",
        edID: 128049252,
        eddbID: 740,
        grp: "bh",
        cost: 80320,
        mass: 4,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "b3",
        edID: 128049253,
        eddbID: 741,
        grp: "bh",
        cost: 132060,
        mass: 4,
        causres: 0,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "b4",
        edID: 128049254,
        eddbID: 742,
        grp: "bh",
        cost: 139420,
        mass: 4,
        causres: 0,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 2, 2, 2, 1, 1, 1, 1 ],
        hardpoints: [ 1, 1, 0, 0 ],
        internal: [ 2, 2, 1, 1 ]
      },
      defaults: {
        standard: [ "2E", "2E", "2E", "1E", "1E", "1E", "1C" ],
        hardpoints: [ 18, 18, 0, 0 ],
        internal: [ "3v", "01", "2h", 0 ]
      }
    },
    type_6_transporter: {
      edID: 128049285,
      eddbID: 19,
      properties: {
        name: "Type-6 Transporter",
        manufacturer: "Lakon",
        class: 2,
        hullCost: 865790,
        speed: 220,
        boost: 350,
        boostEnergy: 10,
        baseShieldStrength: 90,
        baseArmour: 180,
        hardness: 35,
        hullMass: 155,
        masslock: 8,
        pipSpeed: .14772727272727,
        pitch: 30,
        roll: 100,
        yaw: 17,
        crew: 1
      },
      retailCost: 1045950,
      bulkheads: [ {
        id: "Bn",
        edID: 128049286,
        eddbID: 768,
        grp: "bh",
        cost: 0,
        mass: 0,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "Bo",
        edID: 128049287,
        eddbID: 769,
        grp: "bh",
        cost: 418380,
        mass: 12,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "Bp",
        edID: 128049288,
        eddbID: 770,
        grp: "bh",
        cost: 941350,
        mass: 23,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "Bq",
        edID: 128049289,
        eddbID: 771,
        grp: "bh",
        cost: 2224730,
        mass: 23,
        causres: 0,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "Br",
        edID: 128049290,
        eddbID: 772,
        grp: "bh",
        cost: 2465290,
        mass: 23,
        causres: 0,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 3, 4, 4, 2, 3, 2, 4 ],
        hardpoints: [ 1, 1, 0, 0, 0 ],
        internal: [ 5, 5, 4, 4, 3, 2, 2 ]
      },
      defaults: {
        standard: [ "3E", "4E", "4E", "2E", "3E", "2E", "4C" ],
        hardpoints: [ 17, 17, 0, 0, 0 ],
        internal: [ "03", "03", "02", "02", "44", "00", "2h" ]
      }
    },
    type_7_transport: {
      edID: 128049297,
      eddbID: 20,
      properties: {
        name: "Type-7 Transporter",
        manufacturer: "Lakon",
        class: 3,
        hullCost: 16780510,
        speed: 180,
        boost: 300,
        boostEnergy: 10,
        baseShieldStrength: 155,
        baseArmour: 340,
        hardness: 54,
        hullMass: 350,
        masslock: 10,
        pipSpeed: .16666666666667,
        pitch: 22,
        roll: 60,
        yaw: 22,
        crew: 1
      },
      retailCost: 17472260,
      bulkheads: [ {
        id: "Bs",
        edID: 128049298,
        eddbID: 773,
        grp: "bh",
        cost: 0,
        mass: 0,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "Bt",
        edID: 128049299,
        eddbID: 774,
        grp: "bh",
        cost: 6988900,
        mass: 32,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "Bu",
        edID: 128049300,
        eddbID: 775,
        grp: "bh",
        cost: 15725030,
        mass: 63,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "Bv",
        edID: 128049301,
        eddbID: 776,
        grp: "bh",
        cost: 37163480,
        mass: 63,
        causres: 0,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "Bw",
        edID: 128049302,
        eddbID: 777,
        grp: "bh",
        cost: 41182100,
        mass: 63,
        causres: 0,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 5, 5, 5, 4, 4, 3, 5 ],
        hardpoints: [ 1, 1, 1, 1, 0, 0, 0, 0 ],
        internal: [ 6, 6, 6, 5, 5, 5, 3, 3, 2 ]
      },
      defaults: {
        standard: [ "4E", "5E", "5E", "4E", "3E", "3E", "5C" ],
        hardpoints: [ 17, 17, 0, 0, 0, 0, 0, 0 ],
        internal: [ "04", "04", "04", "03", "03", "49", 0, 0, "2h" ]
      }
    },
    type_9_heavy: {
      edID: 128049333,
      eddbID: 21,
      properties: {
        name: "Type-9 Heavy",
        manufacturer: "Lakon",
        class: 3,
        hullCost: 73255150,
        speed: 130,
        boost: 200,
        boostEnergy: 19,
        baseShieldStrength: 240,
        baseArmour: 480,
        hardness: 65,
        hullMass: 850,
        masslock: 16,
        pipSpeed: .17307692307692,
        fighterHangars: true,
        pitch: 20,
        roll: 20,
        yaw: 8,
        crew: 3
      },
      retailCost: 76555840,
      bulkheads: [ {
        id: "Bx",
        edID: 128049334,
        eddbID: 803,
        grp: "bh",
        cost: 0,
        mass: 0,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "By",
        edID: 128049335,
        eddbID: 804,
        grp: "bh",
        cost: 30622340,
        mass: 75,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "Bz",
        edID: 128049336,
        eddbID: 805,
        grp: "bh",
        cost: 68900260,
        mass: 150,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "BA",
        edID: 128049337,
        eddbID: 806,
        grp: "bh",
        cost: 162834280,
        mass: 150,
        causres: 0,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "BB",
        edID: 128049338,
        eddbID: 807,
        grp: "bh",
        cost: 180442120,
        mass: 150,
        causres: 0,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 6, 7, 6, 5, 6, 4, 6 ],
        hardpoints: [ 2, 2, 2, 1, 1, 0, 0, 0, 0 ],
        internal: [ 8, 8, 7, 6, 5, 4, 4, 3, 3, 2 ]
      },
      defaults: {
        standard: [ "6E", "7E", "6E", "5E", "6E", "4E", "6C" ],
        hardpoints: [ 17, 17, 0, 0, 0, 0, 0, 0, 0 ],
        internal: [ "06", "06", "05", "4j", "03", "02", 0, "01", 0, "2h" ]
      }
    },
    type_10_defender: {
      edID: 128785619,
      eddbID: 32,
      properties: {
        name: "Type-10 Defender",
        manufacturer: "Lakon",
        class: 3,
        hullCost: 121454173,
        speed: 179,
        boost: 219,
        boostEnergy: 19,
        baseShieldStrength: 320,
        baseArmour: 580,
        hardness: 75,
        hullMass: 1200,
        masslock: 26,
        pipSpeed: .041666666666667,
        fighterHangars: true,
        pitch: 20,
        roll: 20,
        yaw: 8,
        crew: 3
      },
      retailCost: 121454652,
      bulkheads: [ {
        id: "1Q",
        edID: 128785621,
        eddbID: 1627,
        grp: "bh",
        cost: 0,
        mass: 0,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "1R",
        edID: 128785622,
        eddbID: 1628,
        grp: "bh",
        cost: 49902137,
        mass: 75,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "1S",
        edID: 128785623,
        eddbID: 1629,
        grp: "bh",
        cost: 112279807,
        mass: 150,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "1T",
        edID: 128785624,
        eddbID: 1630,
        grp: "bh",
        cost: 265354612,
        mass: 150,
        causres: 0,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "1U",
        edID: 128785625,
        eddbID: 1631,
        grp: "bh",
        cost: 294048342,
        mass: 150,
        causres: 0,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 8, 7, 7, 5, 7, 4, 6 ],
        hardpoints: [ 3, 3, 3, 3, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0 ],
        internal: [ 8, 7, 6, 5, 4, 4, 3, 3, 2, {
          class: 5,
          name: "Military",
          eligible: {
            mahr: 1,
            hr: 1,
            scb: 1,
            mrp: 1,
            gsrp: 1,
            gmrp: 1,
            ghrp: 1
          }
        }, {
          class: 5,
          name: "Military",
          eligible: {
            hr: 1,
            scb: 1,
            mrp: 1,
            gsrp: 1,
            gmrp: 1,
            ghrp: 1
          }
        } ]
      },
      defaults: {
        standard: [ "6E", "7E", "6E", "5E", "7E", "4E", "6C" ],
        hardpoints: [ 0, 0, 0, 0, 17, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        internal: [ "06", "05", "4j", "03", "02", 0, "01", 0, "2h", 0, 0 ]
      }
    },
    viper: {
      edID: 128049273,
      eddbID: 22,
      properties: {
        name: "Viper",
        manufacturer: "Faulcon DeLacy",
        class: 1,
        hullCost: 95900,
        speed: 320,
        boost: 400,
        boostEnergy: 10,
        baseShieldStrength: 105,
        baseArmour: 70,
        hardness: 35,
        hullMass: 50,
        masslock: 7,
        pipSpeed: .09375,
        pitch: 35,
        roll: 90,
        yaw: 15,
        crew: 1
      },
      retailCost: 142930,
      bulkheads: [ {
        id: "B3",
        edID: 128049274,
        eddbID: 758,
        grp: "bh",
        cost: 0,
        mass: 0,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "B4",
        edID: 128049275,
        eddbID: 759,
        grp: "bh",
        cost: 57170,
        mass: 5,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "B5",
        edID: 128049276,
        eddbID: 760,
        grp: "bh",
        cost: 128640,
        mass: 9,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "B6",
        edID: 128049277,
        eddbID: 761,
        grp: "bh",
        cost: 304010,
        mass: 9,
        causres: 0,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "B7",
        edID: 128049278,
        eddbID: 762,
        grp: "bh",
        cost: 336890,
        mass: 9,
        causres: 0,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 3, 3, 3, 2, 3, 3, 2 ],
        hardpoints: [ 2, 2, 1, 1, 0, 0 ],
        internal: [ 3, 3, {
          class: 3,
          name: "Military",
          eligible: {
            mahr: 1,
            hr: 1,
            scb: 1,
            mrp: 1,
            gsrp: 1,
            gmrp: 1,
            ghrp: 1
          }
        }, 2, 1 ]
      },
      defaults: {
        standard: [ "3E", "3E", "3E", "2E", "3E", "3E", "2C" ],
        hardpoints: [ 17, 17, 0, 0, 0, 0 ],
        internal: [ "01", "44", 0, 0, "2h" ]
      }
    },
    viper_mk_iv: {
      edID: 128672255,
      eddbID: 28,
      properties: {
        name: "Viper Mk IV",
        manufacturer: "Faulcon DeLacy",
        class: 1,
        hullCost: 310220,
        speed: 270,
        boost: 340,
        boostEnergy: 10,
        baseShieldStrength: 150,
        baseArmour: 150,
        hardness: 35,
        hullMass: 190,
        masslock: 7,
        pipSpeed: .087962962962963,
        pitch: 30,
        roll: 90,
        yaw: 12,
        crew: 1
      },
      retailCost: 437930,
      bulkheads: [ {
        id: "c6",
        edID: 128672257,
        eddbID: 1508,
        grp: "bh",
        cost: 0,
        mass: 0,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "c7",
        edID: 128672258,
        eddbID: 1509,
        grp: "bh",
        cost: 175180,
        mass: 5,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "c8",
        edID: 128672259,
        eddbID: 1510,
        grp: "bh",
        cost: 394140,
        mass: 9,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "c9",
        edID: 128672260,
        eddbID: 1511,
        grp: "bh",
        cost: 931490,
        mass: 9,
        causres: 0,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "ca",
        edID: 128672261,
        eddbID: 1512,
        grp: "bh",
        cost: 1033210,
        mass: 9,
        causres: 0,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 4, 4, 4, 2, 3, 3, 4 ],
        hardpoints: [ 2, 2, 1, 1, 0, 0 ],
        internal: [ 4, 4, 3, {
          class: 3,
          name: "Military",
          eligible: {
            mahr: 1,
            hr: 1,
            scb: 1,
            mrp: 1,
            gsrp: 1,
            gmrp: 1,
            ghrp: 1
          }
        }, 2, 2, 1 ]
      },
      defaults: {
        standard: [ "4E", "4E", "4E", "2E", "3E", "3E", "4C" ],
        hardpoints: [ 0, 0, 17, 17, 0, 0 ],
        internal: [ "02", "02", "44", 0, "00", 0, "2h" ]
      }
    },
    vulture: {
      edID: 128049309,
      eddbID: 23,
      properties: {
        name: "Vulture",
        manufacturer: "Core Dynamics",
        class: 1,
        hullCost: 4689640,
        speed: 210,
        boost: 340,
        boostEnergy: 16,
        baseShieldStrength: 240,
        baseArmour: 160,
        hardness: 55,
        hullMass: 230,
        masslock: 10,
        pipSpeed: .023809523809524,
        pitch: 42,
        roll: 110,
        yaw: 17,
        crew: 2
      },
      retailCost: 4925620,
      bulkheads: [ {
        id: "B8",
        edID: 128049310,
        eddbID: 783,
        grp: "bh",
        cost: 0,
        mass: 0,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: .8
      }, {
        id: "B9",
        edID: 128049311,
        eddbID: 784,
        grp: "bh",
        cost: 1970250,
        mass: 17,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 1.52
      }, {
        id: "Ba",
        edID: 128049312,
        eddbID: 785,
        grp: "bh",
        cost: 4433050,
        mass: 35,
        causres: 0,
        explres: -.4,
        kinres: -.2,
        thermres: 0,
        hullboost: 2.5
      }, {
        id: "Bb",
        edID: 128049313,
        eddbID: 786,
        grp: "bh",
        cost: 10476780,
        mass: 35,
        causres: 0,
        explres: -.5,
        kinres: -.75,
        thermres: .5,
        hullboost: 2.5
      }, {
        id: "Bc",
        edID: 128049314,
        eddbID: 787,
        grp: "bh",
        cost: 11609670,
        mass: 35,
        causres: 0,
        explres: .2,
        kinres: .25,
        thermres: -.4,
        hullboost: 2.5
      } ],
      slots: {
        standard: [ 4, 5, 4, 3, 5, 4, 3 ],
        hardpoints: [ 3, 3, 0, 0, 0, 0 ],
        internal: [ 5, {
          class: 5,
          name: "Military",
          eligible: {
            mahr: 1,
            hr: 1,
            scb: 1,
            mrp: 1,
            gsrp: 1,
            gmrp: 1,
            ghrp: 1
          }
        }, 4, 2, 1, 1 ]
      },
      defaults: {
        standard: [ "4E", "5E", "4E", "3E", "5E", "4E", "3C" ],
        hardpoints: [ 17, 17, 0, 0, 0, 0 ],
        internal: [ "4e", 0, "02", 0, 0, "2h" ]
      }
    }
  },
  Modules: {
    standard: {
      pp: [ {
        class: 8,
        cost: 1441234,
        edID: 128064063,
        eddbID: 921,
        eff: 1,
        grp: "pp",
        id: "py",
        integrity: 135,
        mass: 160,
        pgen: 24,
        rating: "E",
        symbol: "Int_Powerplant_Size8_Class1"
      }, {
        class: 8,
        cost: 4323700,
        edID: 128064064,
        eddbID: 922,
        eff: .75,
        grp: "pp",
        id: "px",
        integrity: 120,
        mass: 64,
        pgen: 27,
        rating: "D",
        symbol: "Int_Powerplant_Size8_Class2"
      }, {
        class: 8,
        cost: 12971099,
        edID: 128064065,
        eddbID: 923,
        eff: .5,
        grp: "pp",
        id: "pw",
        integrity: 150,
        mass: 80,
        pgen: 30,
        rating: "C",
        symbol: "Int_Powerplant_Size8_Class3"
      }, {
        class: 8,
        cost: 38913291,
        edID: 128064066,
        eddbID: 924,
        eff: .45,
        grp: "pp",
        id: "pv",
        integrity: 180,
        mass: 128,
        pgen: 33,
        rating: "B",
        symbol: "Int_Powerplant_Size8_Class4"
      }, {
        class: 8,
        cost: 116739874,
        edID: 128064067,
        eddbID: 925,
        eff: .4,
        grp: "pp",
        id: "pu",
        integrity: 165,
        mass: 80,
        pgen: 36,
        rating: "A",
        symbol: "Int_Powerplant_Size8_Class5"
      }, {
        class: 7,
        cost: 480411,
        edID: 128064058,
        eddbID: 916,
        eff: 1,
        grp: "pp",
        id: "pt",
        integrity: 118,
        mass: 80,
        pgen: 20,
        rating: "E",
        symbol: "Int_Powerplant_Size7_Class1"
      }, {
        class: 7,
        cost: 1441234,
        edID: 128064059,
        eddbID: 917,
        eff: .75,
        grp: "pp",
        id: "ps",
        integrity: 105,
        mass: 32,
        pgen: 22.5,
        rating: "D",
        symbol: "Int_Powerplant_Size7_Class2"
      }, {
        class: 7,
        cost: 4323700,
        edID: 128064060,
        eddbID: 918,
        eff: .5,
        grp: "pp",
        id: "pr",
        integrity: 131,
        mass: 40,
        pgen: 25,
        rating: "C",
        symbol: "Int_Powerplant_Size7_Class3"
      }, {
        class: 7,
        cost: 12971099,
        edID: 128064061,
        eddbID: 919,
        eff: .45,
        grp: "pp",
        id: "pq",
        integrity: 157,
        mass: 64,
        pgen: 27.5,
        rating: "B",
        symbol: "Int_Powerplant_Size7_Class4"
      }, {
        class: 7,
        cost: 38913291,
        edID: 128064062,
        eddbID: 920,
        eff: .4,
        grp: "pp",
        id: "pp",
        integrity: 144,
        mass: 40,
        pgen: 30,
        rating: "A",
        symbol: "Int_Powerplant_Size7_Class5"
      }, {
        class: 6,
        cost: 160138,
        edID: 128064053,
        eddbID: 911,
        eff: 1,
        grp: "pp",
        id: "po",
        integrity: 102,
        mass: 40,
        pgen: 16.8,
        rating: "E",
        symbol: "Int_Powerplant_Size6_Class1"
      }, {
        class: 6,
        cost: 480411,
        edID: 128064054,
        eddbID: 912,
        eff: .75,
        grp: "pp",
        id: "pn",
        integrity: 90,
        mass: 16,
        pgen: 18.9,
        rating: "D",
        symbol: "Int_Powerplant_Size6_Class2"
      }, {
        class: 6,
        cost: 1441234,
        edID: 128064055,
        eddbID: 913,
        eff: .5,
        grp: "pp",
        id: "pm",
        integrity: 113,
        mass: 20,
        pgen: 21,
        rating: "C",
        symbol: "Int_Powerplant_Size6_Class3"
      }, {
        class: 6,
        cost: 4323700,
        edID: 128064056,
        eddbID: 914,
        eff: .45,
        grp: "pp",
        id: "pl",
        integrity: 136,
        mass: 32,
        pgen: 23.1,
        rating: "B",
        symbol: "Int_Powerplant_Size6_Class4"
      }, {
        class: 6,
        cost: 12971099,
        edID: 128064057,
        eddbID: 915,
        eff: .4,
        grp: "pp",
        id: "pk",
        integrity: 124,
        mass: 20,
        pgen: 25.2,
        rating: "A",
        symbol: "Int_Powerplant_Size6_Class5"
      }, {
        class: 5,
        cost: 53380,
        edID: 128064048,
        eddbID: 906,
        eff: 1,
        grp: "pp",
        id: "pj",
        integrity: 86,
        mass: 20,
        pgen: 13.6,
        rating: "E",
        symbol: "Int_Powerplant_Size5_Class1"
      }, {
        class: 5,
        cost: 160138,
        edID: 128064049,
        eddbID: 907,
        eff: .75,
        grp: "pp",
        id: "pi",
        integrity: 77,
        mass: 8,
        pgen: 15.3,
        rating: "D",
        symbol: "Int_Powerplant_Size5_Class2"
      }, {
        class: 5,
        cost: 480411,
        edID: 128064050,
        eddbID: 908,
        eff: .5,
        grp: "pp",
        id: "ph",
        integrity: 96,
        mass: 10,
        pgen: 17,
        rating: "C",
        symbol: "Int_Powerplant_Size5_Class3"
      }, {
        class: 5,
        cost: 1441234,
        edID: 128064051,
        eddbID: 909,
        eff: .45,
        grp: "pp",
        id: "pg",
        integrity: 114,
        mass: 16,
        pgen: 18.7,
        rating: "B",
        symbol: "Int_Powerplant_Size5_Class4"
      }, {
        class: 5,
        cost: 4323700,
        edID: 128064052,
        eddbID: 910,
        eff: .4,
        grp: "pp",
        id: "pf",
        integrity: 106,
        mass: 10,
        pgen: 20.4,
        rating: "A",
        symbol: "Int_Powerplant_Size5_Class5"
      }, {
        class: 4,
        cost: 17794,
        edID: 128064043,
        eddbID: 901,
        eff: 1,
        grp: "pp",
        id: "pe",
        integrity: 72,
        mass: 10,
        pgen: 10.4,
        rating: "E",
        symbol: "Int_Powerplant_Size4_Class1"
      }, {
        class: 4,
        cost: 53380,
        edID: 128064044,
        eddbID: 902,
        eff: .75,
        grp: "pp",
        id: "pd",
        integrity: 64,
        mass: 4,
        pgen: 11.7,
        rating: "D",
        symbol: "Int_Powerplant_Size4_Class2"
      }, {
        class: 4,
        cost: 160138,
        edID: 128064045,
        eddbID: 903,
        eff: .5,
        grp: "pp",
        id: "pc",
        integrity: 80,
        mass: 5,
        pgen: 13,
        rating: "C",
        symbol: "Int_Powerplant_Size4_Class3"
      }, {
        class: 4,
        cost: 480411,
        edID: 128064046,
        eddbID: 904,
        eff: .45,
        grp: "pp",
        id: "pb",
        integrity: 96,
        mass: 8,
        pgen: 14.3,
        rating: "B",
        symbol: "Int_Powerplant_Size4_Class4"
      }, {
        class: 4,
        cost: 1441234,
        edID: 128064047,
        eddbID: 905,
        eff: .4,
        grp: "pp",
        id: "pa",
        integrity: 88,
        mass: 5,
        pgen: 15.6,
        rating: "A",
        symbol: "Int_Powerplant_Size4_Class5"
      }, {
        class: 3,
        cost: 5932,
        edID: 128064038,
        eddbID: 896,
        eff: 1,
        grp: "pp",
        id: "p9",
        integrity: 58,
        mass: 5,
        pgen: 8,
        rating: "E",
        symbol: "Int_Powerplant_Size3_Class1"
      }, {
        class: 3,
        cost: 17794,
        edID: 128064039,
        eddbID: 897,
        eff: .75,
        grp: "pp",
        id: "p8",
        integrity: 51,
        mass: 2,
        pgen: 9,
        rating: "D",
        symbol: "Int_Powerplant_Size3_Class2"
      }, {
        class: 3,
        cost: 53380,
        edID: 128064040,
        eddbID: 898,
        eff: .5,
        grp: "pp",
        id: "p7",
        integrity: 64,
        mass: 2.5,
        pgen: 10,
        rating: "C",
        symbol: "Int_Powerplant_Size3_Class3"
      }, {
        class: 3,
        cost: 160138,
        edID: 128064041,
        eddbID: 899,
        eff: .45,
        grp: "pp",
        id: "p6",
        integrity: 77,
        mass: 4,
        pgen: 11,
        rating: "B",
        symbol: "Int_Powerplant_Size3_Class4"
      }, {
        class: 3,
        cost: 480411,
        edID: 128064042,
        eddbID: 900,
        eff: .4,
        grp: "pp",
        id: "p5",
        integrity: 70,
        mass: 2.5,
        pgen: 12,
        rating: "A",
        symbol: "Int_Powerplant_Size3_Class5"
      }, {
        class: 2,
        cost: 1980,
        edID: 128064033,
        eddbID: 891,
        eff: 1,
        grp: "pp",
        id: "p4",
        integrity: 46,
        mass: 2.5,
        pgen: 6.4,
        rating: "E",
        symbol: "Int_Powerplant_Size2_Class1"
      }, {
        class: 2,
        cost: 5930,
        edID: 128064034,
        eddbID: 892,
        eff: .75,
        grp: "pp",
        id: "p3",
        integrity: 41,
        mass: 1,
        pgen: 7.2,
        rating: "D",
        symbol: "Int_Powerplant_Size2_Class2"
      }, {
        class: 2,
        cost: 17800,
        edID: 128064035,
        eddbID: 893,
        eff: .5,
        grp: "pp",
        id: "p2",
        integrity: 51,
        mass: 1.3,
        pgen: 8,
        rating: "C",
        symbol: "Int_Powerplant_Size2_Class3"
      }, {
        class: 2,
        cost: 53380,
        edID: 128064036,
        eddbID: 894,
        eff: .45,
        grp: "pp",
        id: "p1",
        integrity: 61,
        mass: 2,
        pgen: 8.8,
        rating: "B",
        symbol: "Int_Powerplant_Size2_Class4"
      }, {
        class: 2,
        cost: 160138,
        edID: 128064037,
        eddbID: 895,
        eff: .4,
        grp: "pp",
        id: "p0",
        integrity: 56,
        mass: 1.3,
        pgen: 9.6,
        rating: "A",
        symbol: "Int_Powerplant_Size2_Class5"
      }, {
        class: 2,
        cost: 192165,
        edID: 128833988,
        eddbID: 895,
        eff: .5,
        grp: "pp",
        id: "0A",
        integrity: 56,
        mass: 1.5,
        pgen: 12.7,
        rating: "A",
        name: "Guardian Hybrid Power Plant",
        symbol: "Int_GuardianPowerplant_Size2"
      }, {
        class: 3,
        cost: 576493,
        edID: 128833989,
        eddbID: 895,
        eff: .5,
        grp: "pp",
        id: "0B",
        integrity: 70,
        mass: 2.9,
        pgen: 15.8,
        rating: "A",
        name: "Guardian Hybrid Power Plant",
        symbol: "Int_GuardianPowerplant_Size3"
      }, {
        class: 4,
        cost: 1729480,
        edID: 128833990,
        eddbID: 895,
        eff: .5,
        grp: "pp",
        id: "0C",
        integrity: 88,
        mass: 5.9,
        pgen: 20.6,
        rating: "A",
        name: "Guardian Hybrid Power Plant",
        symbol: "Int_GuardianPowerplant_Size4"
      }, {
        class: 5,
        cost: 5188441,
        edID: 128833991,
        eddbID: 895,
        eff: .5,
        grp: "pp",
        id: "0D",
        integrity: 106,
        mass: 11.7,
        pgen: 26.9,
        rating: "A",
        name: "Guardian Hybrid Power Plant",
        symbol: "Int_GuardianPowerplant_Size5"
      }, {
        class: 6,
        cost: 15565317,
        edID: 128833992,
        eddbID: 895,
        eff: .5,
        grp: "pp",
        id: "0E",
        integrity: 124,
        mass: 23.4,
        pgen: 33.3,
        rating: "A",
        name: "Guardian Hybrid Power Plant",
        symbol: "Int_GuardianPowerplant_Size6"
      }, {
        class: 7,
        cost: 46695951,
        edID: 128833993,
        eddbID: 895,
        eff: .5,
        grp: "pp",
        id: "0F",
        integrity: 144,
        mass: 46.8,
        pgen: 39.6,
        rating: "A",
        name: "Guardian Hybrid Power Plant",
        symbol: "Int_GuardianPowerplant_Size7"
      }, {
        class: 8,
        cost: 140087850,
        edID: 128833994,
        eddbID: 895,
        eff: .5,
        grp: "pp",
        id: "0G",
        integrity: 165,
        mass: 93.6,
        pgen: 47.5,
        rating: "A",
        name: "Guardian Hybrid Power Plant",
        symbol: "Int_GuardianPowerplant_Size8"
      } ],
      t: [ {
        class: 8,
        cost: 2007240,
        edID: 128064098,
        eddbID: 956,
        grp: "t",
        id: "ty",
        integrity: 135,
        mass: 160,
        maxmass: 3360,
        maxmul: 1.03,
        minmass: 1120,
        minmul: .83,
        optmass: 2240,
        optmul: 1,
        power: 7.2,
        rating: "E",
        symbol: "Int_Engine_Size8_Class1"
      }, {
        class: 8,
        cost: 6021720,
        edID: 128064099,
        eddbID: 957,
        grp: "t",
        id: "tx",
        integrity: 120,
        mass: 64,
        maxmass: 3780,
        maxmul: 1.06,
        minmass: 1260,
        minmul: .86,
        optmass: 2520,
        optmul: 1,
        power: 8.1,
        rating: "D",
        symbol: "Int_Engine_Size8_Class2"
      }, {
        class: 8,
        cost: 18065170,
        edID: 128064100,
        eddbID: 958,
        grp: "t",
        id: "tw",
        integrity: 150,
        mass: 160,
        maxmass: 4200,
        maxmul: 1.1,
        minmass: 1400,
        minmul: .9,
        optmass: 2800,
        optmul: 1,
        power: 9,
        rating: "C",
        symbol: "Int_Engine_Size8_Class3"
      }, {
        class: 8,
        cost: 54195500,
        edID: 128064101,
        eddbID: 959,
        grp: "t",
        id: "tv",
        integrity: 180,
        mass: 256,
        maxmass: 4620,
        maxmul: 1.13,
        minmass: 1540,
        minmul: .93,
        optmass: 3080,
        optmul: 1,
        power: 9.9,
        rating: "B",
        symbol: "Int_Engine_Size8_Class4"
      }, {
        class: 8,
        cost: 162586490,
        edID: 128064102,
        eddbID: 960,
        grp: "t",
        id: "tu",
        integrity: 165,
        mass: 160,
        maxmass: 5040,
        maxmul: 1.16,
        minmass: 1680,
        minmul: .96,
        optmass: 3360,
        optmul: 1,
        power: 10.8,
        rating: "A",
        symbol: "Int_Engine_Size8_Class5"
      }, {
        class: 7,
        cost: 633200,
        edID: 128064093,
        eddbID: 951,
        grp: "t",
        id: "tt",
        integrity: 118,
        mass: 80,
        maxmass: 2160,
        maxmul: 1.03,
        minmass: 720,
        minmul: .83,
        optmass: 1440,
        optmul: 1,
        power: 6.08,
        rating: "E",
        symbol: "Int_Engine_Size7_Class1"
      }, {
        class: 7,
        cost: 1899600,
        edID: 128064094,
        eddbID: 952,
        grp: "t",
        id: "ts",
        integrity: 105,
        mass: 32,
        maxmass: 2430,
        maxmul: 1.06,
        minmass: 810,
        minmul: .86,
        optmass: 1620,
        optmul: 1,
        power: 6.84,
        rating: "D",
        symbol: "Int_Engine_Size7_Class2"
      }, {
        class: 7,
        cost: 5698790,
        edID: 128064095,
        eddbID: 953,
        grp: "t",
        id: "tr",
        integrity: 131,
        mass: 80,
        maxmass: 2700,
        maxmul: 1.1,
        minmass: 900,
        minmul: .9,
        optmass: 1800,
        optmul: 1,
        power: 7.6,
        rating: "C",
        symbol: "Int_Engine_Size7_Class3"
      }, {
        class: 7,
        cost: 17096370,
        edID: 128064096,
        eddbID: 954,
        grp: "t",
        id: "tq",
        integrity: 157,
        mass: 128,
        maxmass: 2970,
        maxmul: 1.13,
        minmass: 990,
        minmul: .93,
        optmass: 1980,
        optmul: 1,
        power: 8.36,
        rating: "B",
        symbol: "Int_Engine_Size7_Class4"
      }, {
        class: 7,
        cost: 51289110,
        edID: 128064097,
        eddbID: 955,
        grp: "t",
        id: "tp",
        integrity: 144,
        mass: 80,
        maxmass: 3240,
        maxmul: 1.16,
        minmass: 1080,
        minmul: .96,
        optmass: 2160,
        optmul: 1,
        power: 9.12,
        rating: "A",
        symbol: "Int_Engine_Size7_Class5"
      }, {
        class: 6,
        cost: 199750,
        edID: 128064088,
        eddbID: 946,
        grp: "t",
        id: "to",
        integrity: 102,
        mass: 40,
        maxmass: 1440,
        maxmul: 1.03,
        minmass: 480,
        minmul: .83,
        optmass: 960,
        optmul: 1,
        power: 5.04,
        rating: "E",
        symbol: "Int_Engine_Size6_Class1"
      }, {
        class: 6,
        cost: 599240,
        edID: 128064089,
        eddbID: 947,
        grp: "t",
        id: "tn",
        integrity: 90,
        mass: 16,
        maxmass: 1620,
        maxmul: 1.06,
        minmass: 540,
        minmul: .86,
        optmass: 1080,
        optmul: 1,
        power: 5.67,
        rating: "D",
        symbol: "Int_Engine_Size6_Class2"
      }, {
        class: 6,
        cost: 1797730,
        edID: 128064090,
        eddbID: 948,
        grp: "t",
        id: "tm",
        integrity: 113,
        mass: 40,
        maxmass: 1800,
        maxmul: 1.1,
        minmass: 600,
        minmul: .9,
        optmass: 1200,
        optmul: 1,
        power: 6.3,
        rating: "C",
        symbol: "Int_Engine_Size6_Class3"
      }, {
        class: 6,
        cost: 5393180,
        edID: 128064091,
        eddbID: 949,
        grp: "t",
        id: "tl",
        integrity: 136,
        mass: 64,
        maxmass: 1980,
        maxmul: 1.13,
        minmass: 660,
        minmul: .93,
        optmass: 1320,
        optmul: 1,
        power: 6.93,
        rating: "B",
        symbol: "Int_Engine_Size6_Class4"
      }, {
        class: 6,
        cost: 16179530,
        edID: 128064092,
        eddbID: 950,
        grp: "t",
        id: "tk",
        integrity: 124,
        mass: 40,
        maxmass: 2160,
        maxmul: 1.16,
        minmass: 720,
        minmul: .96,
        optmass: 1440,
        optmul: 1,
        power: 7.56,
        rating: "A",
        symbol: "Int_Engine_Size6_Class5"
      }, {
        class: 5,
        cost: 63010,
        edID: 128064083,
        eddbID: 941,
        grp: "t",
        id: "tj",
        integrity: 86,
        mass: 20,
        maxmass: 840,
        maxmul: 1.03,
        minmass: 280,
        minmul: .83,
        optmass: 560,
        optmul: 1,
        power: 4.08,
        rating: "E",
        symbol: "Int_Engine_Size5_Class1"
      }, {
        class: 5,
        cost: 189040,
        edID: 128064084,
        eddbID: 942,
        grp: "t",
        id: "ti",
        integrity: 77,
        mass: 8,
        maxmass: 945,
        maxmul: 1.06,
        minmass: 315,
        minmul: .86,
        optmass: 630,
        optmul: 1,
        power: 4.59,
        rating: "D",
        symbol: "Int_Engine_Size5_Class2"
      }, {
        class: 5,
        cost: 567110,
        edID: 128064085,
        eddbID: 943,
        grp: "t",
        id: "th",
        integrity: 96,
        mass: 20,
        maxmass: 1050,
        maxmul: 1.1,
        minmass: 350,
        minmul: .9,
        optmass: 700,
        optmul: 1,
        power: 5.1,
        rating: "C",
        symbol: "Int_Engine_Size5_Class3"
      }, {
        class: 5,
        cost: 1701320,
        edID: 128064086,
        eddbID: 944,
        grp: "t",
        id: "tg",
        integrity: 115,
        mass: 32,
        maxmass: 1155,
        maxmul: 1.13,
        minmass: 385,
        minmul: .93,
        optmass: 770,
        optmul: 1,
        power: 5.61,
        rating: "B",
        symbol: "Int_Engine_Size5_Class4"
      }, {
        class: 5,
        cost: 5103950,
        edID: 128064087,
        eddbID: 945,
        grp: "t",
        id: "tf",
        integrity: 106,
        mass: 20,
        maxmass: 1260,
        maxmul: 1.16,
        minmass: 420,
        minmul: .96,
        optmass: 840,
        optmul: 1,
        power: 6.12,
        rating: "A",
        symbol: "Int_Engine_Size5_Class5"
      }, {
        class: 4,
        cost: 19880,
        edID: 128064078,
        eddbID: 936,
        grp: "t",
        id: "te",
        integrity: 72,
        mass: 10,
        maxmass: 420,
        maxmul: 1.03,
        minmass: 140,
        minmul: .83,
        optmass: 280,
        optmul: 1,
        power: 3.28,
        rating: "E",
        symbol: "Int_Engine_Size4_Class1"
      }, {
        class: 4,
        cost: 59630,
        edID: 128064079,
        eddbID: 937,
        grp: "t",
        id: "td",
        integrity: 64,
        mass: 4,
        maxmass: 472.5,
        maxmul: 1.06,
        minmass: 157.5,
        minmul: .86,
        optmass: 315,
        optmul: 1,
        power: 3.69,
        rating: "D",
        symbol: "Int_Engine_Size4_Class2"
      }, {
        class: 4,
        cost: 178900,
        edID: 128064080,
        eddbID: 938,
        grp: "t",
        id: "tc",
        integrity: 80,
        mass: 10,
        maxmass: 525,
        maxmul: 1.1,
        minmass: 175,
        minmul: .9,
        optmass: 350,
        optmul: 1,
        power: 4.1,
        rating: "C",
        symbol: "Int_Engine_Size4_Class3"
      }, {
        class: 4,
        cost: 536690,
        edID: 128064081,
        eddbID: 939,
        grp: "t",
        id: "tb",
        integrity: 96,
        mass: 16,
        maxmass: 577.5,
        maxmul: 1.13,
        minmass: 192.5,
        minmul: .93,
        optmass: 385,
        optmul: 1,
        power: 4.51,
        rating: "B",
        symbol: "Int_Engine_Size4_Class4"
      }, {
        class: 4,
        cost: 1610080,
        edID: 128064082,
        eddbID: 940,
        grp: "t",
        id: "ta",
        integrity: 88,
        mass: 10,
        maxmass: 630,
        maxmul: 1.16,
        minmass: 210,
        minmul: .96,
        optmass: 420,
        optmul: 1,
        power: 4.92,
        rating: "A",
        symbol: "Int_Engine_Size4_Class5"
      }, {
        class: 3,
        cost: 6270,
        edID: 128064073,
        eddbID: 931,
        grp: "t",
        id: "t9",
        integrity: 58,
        mass: 5,
        maxmass: 120,
        maxmul: 1.03,
        minmass: 40,
        minmul: .83,
        optmass: 80,
        optmul: 1,
        power: 2.48,
        rating: "E",
        symbol: "Int_Engine_Size3_Class1"
      }, {
        class: 3,
        cost: 18810,
        edID: 128064074,
        eddbID: 932,
        grp: "t",
        id: "t8",
        integrity: 51,
        mass: 2,
        maxmass: 135,
        maxmul: 1.06,
        minmass: 45,
        minmul: .86,
        optmass: 90,
        optmul: 1,
        power: 2.79,
        rating: "D",
        symbol: "Int_Engine_Size3_Class2"
      }, {
        class: 3,
        cost: 56440,
        edID: 128064075,
        eddbID: 933,
        grp: "t",
        id: "t7",
        integrity: 64,
        mass: 5,
        maxmass: 150,
        maxmul: 1.1,
        minmass: 50,
        minmul: .9,
        optmass: 100,
        optmul: 1,
        power: 3.1,
        rating: "C",
        symbol: "Int_Engine_Size3_Class3"
      }, {
        class: 3,
        cost: 169300,
        edID: 128064076,
        eddbID: 934,
        grp: "t",
        id: "t6",
        integrity: 77,
        mass: 8,
        maxmass: 165,
        maxmul: 1.13,
        minmass: 55,
        minmul: .93,
        optmass: 110,
        optmul: 1,
        power: 3.41,
        rating: "B",
        symbol: "Int_Engine_Size3_Class4"
      }, {
        class: 3,
        cost: 507910,
        edID: 128064077,
        eddbID: 935,
        grp: "t",
        id: "t5",
        integrity: 72,
        mass: 5,
        maxmass: 180,
        maxmul: 1.16,
        minmass: 60,
        minmul: .96,
        optmass: 120,
        optmul: 1,
        power: 3.72,
        rating: "A",
        symbol: "Int_Engine_Size3_Class5"
      }, {
        class: 2,
        cost: 1980,
        edID: 128064068,
        eddbID: 926,
        grp: "t",
        id: "t4",
        integrity: 46,
        mass: 2.5,
        maxmass: 72,
        maxmul: 1.03,
        minmass: 24,
        minmul: .83,
        optmass: 48,
        optmul: 1,
        power: 2,
        rating: "E",
        symbol: "Int_Engine_Size2_Class1"
      }, {
        class: 2,
        cost: 5930,
        edID: 128064069,
        eddbID: 927,
        grp: "t",
        id: "t3",
        integrity: 41,
        mass: 1,
        maxmass: 81,
        maxmul: 1.06,
        minmass: 27,
        minmul: .86,
        optmass: 54,
        optmul: 1,
        power: 2.25,
        rating: "D",
        symbol: "Int_Engine_Size2_Class2"
      }, {
        class: 2,
        cost: 17800,
        edID: 128064070,
        eddbID: 928,
        grp: "t",
        id: "t2",
        integrity: 51,
        mass: 2.5,
        maxmass: 90,
        maxmul: 1.1,
        minmass: 30,
        minmul: .9,
        optmass: 60,
        optmul: 1,
        power: 2.5,
        rating: "C",
        symbol: "Int_Engine_Size2_Class3"
      }, {
        class: 2,
        cost: 53410,
        edID: 128064071,
        eddbID: 929,
        grp: "t",
        id: "t1",
        integrity: 61,
        mass: 4,
        maxmass: 99,
        maxmul: 1.13,
        minmass: 33,
        minmul: .93,
        optmass: 66,
        optmul: 1,
        power: 2.75,
        rating: "B",
        symbol: "Int_Engine_Size2_Class4"
      }, {
        class: 2,
        cost: 160220,
        edID: 128064072,
        eddbID: 930,
        grp: "t",
        id: "t0",
        integrity: 56,
        mass: 2.5,
        maxmass: 108,
        maxmul: 1.16,
        minmass: 36,
        minmul: .96,
        optmass: 72,
        optmul: 1,
        power: 3,
        rating: "A",
        symbol: "Int_Engine_Size2_Class5"
      }, {
        class: 3,
        cost: 5103950,
        edID: 128682013,
        eddbID: 1548,
        grp: "t",
        id: "tz",
        integrity: 55,
        mass: 5,
        maxmass: 200,
        maxmul: 1.367,
        maxmulacceleration: 1.2,
        maxmulrotation: 1.3,
        maxmulspeed: 1.6,
        minmass: 70,
        minmul: .9,
        minmulacceleration: .9,
        minmulrotation: .9,
        minmulspeed: .9,
        name: "Enhanced Performance",
        optmass: 90,
        optmul: 1.15,
        optmulacceleration: 1.1,
        optmulrotation: 1.1,
        optmulspeed: 1.25,
        power: 5,
        rating: "A",
        symbol: "Int_Engine_Size3_Class5_Fast"
      }, {
        class: 2,
        cost: 1610080,
        edID: 128682014,
        eddbID: 1547,
        grp: "t",
        id: "u0",
        integrity: 40,
        mass: 2.5,
        maxmass: 120,
        maxmul: 1.367,
        maxmulacceleration: 1.2,
        maxmulrotation: 1.3,
        maxmulspeed: 1.6,
        minmass: 50,
        minmul: .9,
        minmulacceleration: .9,
        minmulrotation: .9,
        minmulspeed: .9,
        name: "Enhanced Performance",
        optmass: 60,
        optmul: 1.15,
        optmulacceleration: 1.1,
        optmulrotation: 1.1,
        optmulspeed: 1.25,
        power: 4,
        rating: "A",
        symbol: "Int_Engine_Size2_Class5_Fast"
      } ],
      fsd: [ {
        class: 8,
        cost: 2007242,
        edID: 128064133,
        eddbID: 991,
        fuelmul: .011,
        fuelpower: 2.9,
        grp: "fsd",
        id: "Fy",
        integrity: 93,
        mass: 160,
        maxfuel: 0,
        optmass: 0,
        power: .56,
        rating: "E",
        symbol: "Int_Hyperdrive_Size8_Class1"
      }, {
        class: 8,
        cost: 6021723,
        edID: 128064134,
        eddbID: 992,
        fuelmul: .01,
        fuelpower: 2.9,
        grp: "fsd",
        id: "Fx",
        integrity: 37,
        mass: 64,
        maxfuel: 0,
        optmass: 0,
        power: .63,
        rating: "D",
        symbol: "Int_Hyperdrive_Size8_Class2"
      }, {
        class: 8,
        cost: 18065166,
        edID: 128064135,
        eddbID: 993,
        fuelmul: .008,
        fuelpower: 2.9,
        grp: "fsd",
        id: "Fw",
        integrity: 46,
        mass: 160,
        maxfuel: 0,
        optmass: 0,
        power: .7,
        rating: "C",
        symbol: "Int_Hyperdrive_Size8_Class3"
      }, {
        class: 8,
        cost: 54195496,
        edID: 128064136,
        eddbID: 994,
        fuelmul: .01,
        fuelpower: 2.9,
        grp: "fsd",
        id: "Fv",
        integrity: 74,
        mass: 256,
        maxfuel: 0,
        optmass: 0,
        power: .88,
        rating: "B",
        symbol: "Int_Hyperdrive_Size8_Class4"
      }, {
        class: 8,
        cost: 162586488,
        edID: 128064137,
        eddbID: 995,
        fuelmul: .012,
        fuelpower: 2.9,
        grp: "fsd",
        id: "Fu",
        integrity: 46,
        mass: 160,
        maxfuel: 0,
        optmass: 0,
        power: 1.05,
        rating: "A",
        symbol: "Int_Hyperdrive_Size8_Class5"
      }, {
        class: 7,
        cost: 633200,
        edID: 128064128,
        eddbID: 986,
        fuelmul: .011,
        fuelpower: 2.75,
        grp: "fsd",
        id: "Ft",
        integrity: 118,
        mass: 80,
        maxfuel: 8.5,
        optmass: 1440,
        power: .48,
        rating: "E",
        symbol: "Int_Hyperdrive_Size7_Class1"
      }, {
        class: 7,
        cost: 1899600,
        edID: 128064129,
        eddbID: 987,
        fuelmul: .01,
        fuelpower: 2.75,
        grp: "fsd",
        id: "Fs",
        integrity: 105,
        mass: 32,
        maxfuel: 8.5,
        optmass: 1620,
        power: .54,
        rating: "D",
        symbol: "Int_Hyperdrive_Size7_Class2"
      }, {
        class: 7,
        cost: 5698790,
        edID: 128064130,
        eddbID: 988,
        fuelmul: .008,
        fuelpower: 2.75,
        grp: "fsd",
        id: "Fr",
        integrity: 131,
        mass: 80,
        maxfuel: 8.5,
        optmass: 1800,
        power: .6,
        rating: "C",
        symbol: "Int_Hyperdrive_Size7_Class3"
      }, {
        class: 7,
        cost: 17096370,
        edID: 128064131,
        eddbID: 989,
        fuelmul: .01,
        fuelpower: 2.75,
        grp: "fsd",
        id: "Fq",
        integrity: 157,
        mass: 128,
        maxfuel: 10.6,
        optmass: 2250,
        power: .75,
        rating: "B",
        symbol: "Int_Hyperdrive_Size7_Class4"
      }, {
        class: 7,
        cost: 51289110,
        edID: 128064132,
        eddbID: 990,
        fuelmul: .012,
        fuelpower: 2.75,
        grp: "fsd",
        id: "Fp",
        integrity: 144,
        mass: 80,
        maxfuel: 12.8,
        optmass: 2700,
        power: .9,
        rating: "A",
        symbol: "Int_Hyperdrive_Size7_Class5"
      }, {
        class: 6,
        cost: 199750,
        edID: 128064123,
        eddbID: 981,
        fuelmul: .011,
        fuelpower: 2.6,
        grp: "fsd",
        id: "Fo",
        integrity: 102,
        mass: 40,
        maxfuel: 5.3,
        optmass: 960,
        power: .4,
        rating: "E",
        symbol: "Int_Hyperdrive_Size6_Class1"
      }, {
        class: 6,
        cost: 599240,
        edID: 128064124,
        eddbID: 982,
        fuelmul: .01,
        fuelpower: 2.6,
        grp: "fsd",
        id: "Fn",
        integrity: 90,
        mass: 16,
        maxfuel: 5.3,
        optmass: 1080,
        power: .45,
        rating: "D",
        symbol: "Int_Hyperdrive_Size6_Class2"
      }, {
        class: 6,
        cost: 1797730,
        edID: 128064125,
        eddbID: 983,
        fuelmul: .008,
        fuelpower: 2.6,
        grp: "fsd",
        id: "Fm",
        integrity: 113,
        mass: 40,
        maxfuel: 5.3,
        optmass: 1200,
        power: .5,
        rating: "C",
        symbol: "Int_Hyperdrive_Size6_Class3"
      }, {
        class: 6,
        cost: 5393180,
        edID: 128064126,
        eddbID: 984,
        fuelmul: .01,
        fuelpower: 2.6,
        grp: "fsd",
        id: "Fl",
        integrity: 136,
        mass: 64,
        maxfuel: 6.6,
        optmass: 1500,
        power: .63,
        rating: "B",
        symbol: "Int_Hyperdrive_Size6_Class4"
      }, {
        class: 6,
        cost: 16179530,
        edID: 128064127,
        eddbID: 985,
        fuelmul: .012,
        fuelpower: 2.6,
        grp: "fsd",
        id: "Fk",
        integrity: 124,
        mass: 40,
        maxfuel: 8,
        optmass: 1800,
        power: .75,
        rating: "A",
        symbol: "Int_Hyperdrive_Size6_Class5"
      }, {
        class: 5,
        cost: 63010,
        edID: 128064118,
        eddbID: 976,
        fuelmul: .011,
        fuelpower: 2.45,
        grp: "fsd",
        id: "Fj",
        integrity: 86,
        mass: 20,
        maxfuel: 3.3,
        optmass: 560,
        power: .32,
        rating: "E",
        symbol: "Int_Hyperdrive_Size5_Class1"
      }, {
        class: 5,
        cost: 189040,
        edID: 128064119,
        eddbID: 977,
        fuelmul: .01,
        fuelpower: 2.45,
        grp: "fsd",
        id: "Fi",
        integrity: 77,
        mass: 8,
        maxfuel: 3.3,
        optmass: 630,
        power: .36,
        rating: "D",
        symbol: "Int_Hyperdrive_Size5_Class2"
      }, {
        class: 5,
        cost: 567110,
        edID: 128064120,
        eddbID: 978,
        fuelmul: .008,
        fuelpower: 2.45,
        grp: "fsd",
        id: "Fh",
        integrity: 96,
        mass: 20,
        maxfuel: 3.3,
        optmass: 700,
        power: .4,
        rating: "C",
        symbol: "Int_Hyperdrive_Size5_Class3"
      }, {
        class: 5,
        cost: 1701320,
        edID: 128064121,
        eddbID: 979,
        fuelmul: .01,
        fuelpower: 2.45,
        grp: "fsd",
        id: "Fg",
        integrity: 115,
        mass: 32,
        maxfuel: 4.1,
        optmass: 875,
        power: .5,
        rating: "B",
        symbol: "Int_Hyperdrive_Size5_Class4"
      }, {
        class: 5,
        cost: 5103950,
        edID: 128064122,
        eddbID: 980,
        fuelmul: .012,
        fuelpower: 2.45,
        grp: "fsd",
        id: "Ff",
        integrity: 120,
        mass: 20,
        maxfuel: 5,
        optmass: 1050,
        power: .6,
        rating: "A",
        symbol: "Int_Hyperdrive_Size5_Class5"
      }, {
        class: 4,
        cost: 19880,
        edID: 128064113,
        eddbID: 971,
        fuelmul: .011,
        fuelpower: 2.3,
        grp: "fsd",
        id: "Fe",
        integrity: 72,
        mass: 10,
        maxfuel: 2,
        optmass: 280,
        power: .24,
        rating: "E",
        symbol: "Int_Hyperdrive_Size4_Class1"
      }, {
        class: 4,
        cost: 59630,
        edID: 128064114,
        eddbID: 972,
        fuelmul: .01,
        fuelpower: 2.3,
        grp: "fsd",
        id: "Fd",
        integrity: 64,
        mass: 4,
        maxfuel: 2,
        optmass: 315,
        power: .27,
        rating: "D",
        symbol: "Int_Hyperdrive_Size4_Class2"
      }, {
        class: 4,
        cost: 178900,
        edID: 128064115,
        eddbID: 973,
        fuelmul: .008,
        fuelpower: 2.3,
        grp: "fsd",
        id: "Fc",
        integrity: 80,
        mass: 10,
        maxfuel: 2,
        optmass: 350,
        power: .3,
        rating: "C",
        symbol: "Int_Hyperdrive_Size4_Class3"
      }, {
        class: 4,
        cost: 536690,
        edID: 128064116,
        eddbID: 974,
        fuelmul: .01,
        fuelpower: 2.3,
        grp: "fsd",
        id: "Fb",
        integrity: 96,
        mass: 16,
        maxfuel: 2.5,
        optmass: 437.5,
        power: .38,
        rating: "B",
        symbol: "Int_Hyperdrive_Size4_Class4"
      }, {
        class: 4,
        cost: 1610080,
        edID: 128064117,
        eddbID: 975,
        fuelmul: .012,
        fuelpower: 2.3,
        grp: "fsd",
        id: "Fa",
        integrity: 88,
        mass: 10,
        maxfuel: 3,
        optmass: 525,
        power: .45,
        rating: "A",
        symbol: "Int_Hyperdrive_Size4_Class5"
      }, {
        class: 3,
        cost: 6270,
        edID: 128064108,
        eddbID: 966,
        fuelmul: .011,
        fuelpower: 2.15,
        grp: "fsd",
        id: "F9",
        integrity: 58,
        mass: 5,
        maxfuel: 1.2,
        optmass: 80,
        power: .24,
        rating: "E",
        symbol: "Int_Hyperdrive_Size3_Class1"
      }, {
        class: 3,
        cost: 18810,
        edID: 128064109,
        eddbID: 967,
        fuelmul: .01,
        fuelpower: 2.15,
        grp: "fsd",
        id: "F8",
        integrity: 51,
        mass: 2,
        maxfuel: 1.2,
        optmass: 90,
        power: .27,
        rating: "D",
        symbol: "Int_Hyperdrive_Size3_Class2"
      }, {
        class: 3,
        cost: 56440,
        edID: 128064110,
        eddbID: 968,
        fuelmul: .008,
        fuelpower: 2.15,
        grp: "fsd",
        id: "F7",
        integrity: 64,
        mass: 5,
        maxfuel: 1.2,
        optmass: 100,
        power: .3,
        rating: "C",
        symbol: "Int_Hyperdrive_Size3_Class3"
      }, {
        class: 3,
        cost: 169300,
        edID: 128064111,
        eddbID: 969,
        fuelmul: .01,
        fuelpower: 2.15,
        grp: "fsd",
        id: "F6",
        integrity: 77,
        mass: 8,
        maxfuel: 1.5,
        optmass: 125,
        power: .38,
        rating: "B",
        symbol: "Int_Hyperdrive_Size3_Class4"
      }, {
        class: 3,
        cost: 507910,
        edID: 128064112,
        eddbID: 970,
        fuelmul: .012,
        fuelpower: 2.15,
        grp: "fsd",
        id: "F5",
        integrity: 70,
        mass: 5,
        maxfuel: 1.8,
        optmass: 150,
        power: .45,
        rating: "A",
        symbol: "Int_Hyperdrive_Size3_Class5"
      }, {
        class: 2,
        cost: 1980,
        edID: 128064103,
        eddbID: 961,
        fuelmul: .011,
        fuelpower: 2,
        grp: "fsd",
        id: "F4",
        integrity: 46,
        mass: 2.5,
        maxfuel: .6,
        optmass: 48,
        power: .16,
        rating: "E",
        symbol: "Int_Hyperdrive_Size2_Class1"
      }, {
        class: 2,
        cost: 5930,
        edID: 128064104,
        eddbID: 962,
        fuelmul: .01,
        fuelpower: 2,
        grp: "fsd",
        id: "F3",
        integrity: 41,
        mass: 1,
        maxfuel: .6,
        optmass: 54,
        power: .18,
        rating: "D",
        symbol: "Int_Hyperdrive_Size2_Class2"
      }, {
        class: 2,
        cost: 17800,
        edID: 128064105,
        eddbID: 963,
        fuelmul: .008,
        fuelpower: 2,
        grp: "fsd",
        id: "F2",
        integrity: 51,
        mass: 2.5,
        maxfuel: .6,
        optmass: 60,
        power: .2,
        rating: "C",
        symbol: "Int_Hyperdrive_Size2_Class3"
      }, {
        class: 2,
        cost: 53410,
        edID: 128064106,
        eddbID: 964,
        fuelmul: .01,
        fuelpower: 2,
        grp: "fsd",
        id: "F1",
        integrity: 61,
        mass: 4,
        maxfuel: .8,
        optmass: 75,
        power: .25,
        rating: "B",
        symbol: "Int_Hyperdrive_Size2_Class4"
      }, {
        class: 2,
        cost: 160220,
        edID: 128064107,
        eddbID: 965,
        fuelmul: .012,
        fuelpower: 2,
        grp: "fsd",
        id: "F0",
        integrity: 56,
        mass: 2.5,
        maxfuel: .9,
        optmass: 90,
        power: .3,
        rating: "A",
        symbol: "Int_Hyperdrive_Size2_Class5"
      } ],
      ls: [ {
        boot: 1,
        class: 8,
        cost: 697590,
        edID: 128064173,
        eddbID: 1031,
        grp: "ls",
        id: "lD",
        integrity: 120,
        mass: 160,
        power: .8,
        rating: "E",
        time: 300,
        symbol: "Int_LifeSupport_Size8_Class1"
      }, {
        boot: 1,
        class: 8,
        cost: 1743970,
        edID: 128064174,
        eddbID: 1032,
        grp: "ls",
        id: "lC",
        integrity: 135,
        mass: 64,
        power: .9,
        rating: "D",
        time: 450,
        symbol: "Int_LifeSupport_Size8_Class2"
      }, {
        boot: 1,
        class: 8,
        cost: 4359900,
        edID: 128064175,
        eddbID: 1033,
        grp: "ls",
        id: "lB",
        integrity: 150,
        mass: 160,
        power: 1,
        rating: "C",
        time: 600,
        symbol: "Int_LifeSupport_Size8_Class3"
      }, {
        boot: 1,
        class: 8,
        cost: 10899757,
        edID: 128064176,
        eddbID: 1034,
        grp: "ls",
        id: "lA",
        integrity: 165,
        mass: 256,
        power: 1.1,
        rating: "B",
        time: 900,
        symbol: "Int_LifeSupport_Size8_Class4"
      }, {
        boot: 1,
        class: 8,
        cost: 27249400,
        edID: 128064177,
        eddbID: 1035,
        grp: "ls",
        id: "lz",
        integrity: 180,
        mass: 160,
        power: 1.2,
        rating: "A",
        time: 1500,
        symbol: "Int_LifeSupport_Size8_Class5"
      }, {
        boot: 1,
        class: 7,
        cost: 249140,
        edID: 128064168,
        eddbID: 1026,
        grp: "ls",
        id: "ly",
        integrity: 105,
        mass: 80,
        power: .72,
        rating: "E",
        time: 300,
        symbol: "Int_LifeSupport_Size7_Class1"
      }, {
        boot: 1,
        class: 7,
        cost: 622840,
        edID: 128064169,
        eddbID: 1027,
        grp: "ls",
        id: "lx",
        integrity: 118,
        mass: 32,
        power: .81,
        rating: "D",
        time: 450,
        symbol: "Int_LifeSupport_Size7_Class2"
      }, {
        boot: 1,
        class: 7,
        cost: 1557110,
        edID: 128064170,
        eddbID: 1028,
        grp: "ls",
        id: "lw",
        integrity: 131,
        mass: 80,
        power: .9,
        rating: "C",
        time: 600,
        symbol: "Int_LifeSupport_Size7_Class3"
      }, {
        boot: 1,
        class: 7,
        cost: 3892770,
        edID: 128064171,
        eddbID: 1029,
        grp: "ls",
        id: "lv",
        integrity: 144,
        mass: 128,
        power: .99,
        rating: "B",
        time: 900,
        symbol: "Int_LifeSupport_Size7_Class4"
      }, {
        boot: 1,
        class: 7,
        cost: 9731930,
        edID: 128064172,
        eddbID: 1030,
        grp: "ls",
        id: "lu",
        integrity: 157,
        mass: 80,
        power: 1.08,
        rating: "A",
        time: 1500,
        symbol: "Int_LifeSupport_Size7_Class5"
      }, {
        boot: 1,
        class: 6,
        cost: 88980,
        edID: 128064163,
        eddbID: 1021,
        grp: "ls",
        id: "lt",
        integrity: 90,
        mass: 40,
        power: .64,
        rating: "E",
        time: 300,
        symbol: "Int_LifeSupport_Size6_Class1"
      }, {
        boot: 1,
        class: 6,
        cost: 222440,
        edID: 128064164,
        eddbID: 1022,
        grp: "ls",
        id: "ls",
        integrity: 102,
        mass: 16,
        power: .72,
        rating: "D",
        time: 450,
        symbol: "Int_LifeSupport_Size6_Class2"
      }, {
        boot: 1,
        class: 6,
        cost: 556110,
        edID: 128064165,
        eddbID: 1023,
        grp: "ls",
        id: "lr",
        integrity: 113,
        mass: 40,
        power: .8,
        rating: "C",
        time: 600,
        symbol: "Int_LifeSupport_Size6_Class3"
      }, {
        boot: 1,
        class: 6,
        cost: 1390280,
        edID: 128064166,
        eddbID: 1024,
        grp: "ls",
        id: "lq",
        integrity: 124,
        mass: 64,
        power: .88,
        rating: "B",
        time: 900,
        symbol: "Int_LifeSupport_Size6_Class4"
      }, {
        boot: 1,
        class: 6,
        cost: 3475690,
        edID: 128064167,
        eddbID: 1025,
        grp: "ls",
        id: "lp",
        integrity: 136,
        mass: 40,
        power: .96,
        rating: "A",
        time: 1500,
        symbol: "Int_LifeSupport_Size6_Class5"
      }, {
        boot: 1,
        class: 5,
        cost: 31780,
        edID: 128064158,
        eddbID: 1016,
        grp: "ls",
        id: "lo",
        integrity: 77,
        mass: 20,
        power: .57,
        rating: "E",
        time: 300,
        symbol: "Int_LifeSupport_Size5_Class1"
      }, {
        boot: 1,
        class: 5,
        cost: 79440,
        edID: 128064159,
        eddbID: 1017,
        grp: "ls",
        id: "ln",
        integrity: 86,
        mass: 8,
        power: .64,
        rating: "D",
        time: 450,
        symbol: "Int_LifeSupport_Size5_Class2"
      }, {
        boot: 1,
        class: 5,
        cost: 198610,
        edID: 128064160,
        eddbID: 1018,
        grp: "ls",
        id: "lm",
        integrity: 96,
        mass: 20,
        power: .71,
        rating: "C",
        time: 600,
        symbol: "Int_LifeSupport_Size5_Class3"
      }, {
        boot: 1,
        class: 5,
        cost: 496530,
        edID: 128064161,
        eddbID: 1019,
        grp: "ls",
        id: "ll",
        integrity: 106,
        mass: 32,
        power: .78,
        rating: "B",
        time: 900,
        symbol: "Int_LifeSupport_Size5_Class4"
      }, {
        boot: 1,
        class: 5,
        cost: 1241320,
        edID: 128064162,
        eddbID: 1020,
        grp: "ls",
        id: "lk",
        integrity: 115,
        mass: 20,
        power: .85,
        rating: "A",
        time: 1500,
        symbol: "Int_LifeSupport_Size5_Class5"
      }, {
        boot: 1,
        class: 4,
        cost: 11350,
        edID: 128064153,
        eddbID: 1011,
        grp: "ls",
        id: "lj",
        integrity: 64,
        mass: 10,
        power: .5,
        rating: "E",
        time: 300,
        symbol: "Int_LifeSupport_Size4_Class1"
      }, {
        boot: 1,
        class: 4,
        cost: 28370,
        edID: 128064154,
        eddbID: 1012,
        grp: "ls",
        id: "li",
        integrity: 72,
        mass: 4,
        power: .56,
        rating: "D",
        time: 450,
        symbol: "Int_LifeSupport_Size4_Class2"
      }, {
        boot: 1,
        class: 4,
        cost: 70930,
        edID: 128064155,
        eddbID: 1013,
        grp: "ls",
        id: "lh",
        integrity: 80,
        mass: 10,
        power: .62,
        rating: "C",
        time: 600,
        symbol: "Int_LifeSupport_Size4_Class3"
      }, {
        boot: 1,
        class: 4,
        cost: 177330,
        edID: 128064156,
        eddbID: 1014,
        grp: "ls",
        id: "lg",
        integrity: 88,
        mass: 16,
        power: .68,
        rating: "B",
        time: 900,
        symbol: "Int_LifeSupport_Size4_Class4"
      }, {
        boot: 1,
        class: 4,
        cost: 443330,
        edID: 128064157,
        eddbID: 1015,
        grp: "ls",
        id: "lf",
        integrity: 96,
        mass: 10,
        power: .74,
        rating: "A",
        time: 1500,
        symbol: "Int_LifeSupport_Size4_Class5"
      }, {
        boot: 1,
        class: 3,
        cost: 4050,
        edID: 128064148,
        eddbID: 1006,
        grp: "ls",
        id: "le",
        integrity: 51,
        mass: 5,
        power: .42,
        rating: "E",
        time: 300,
        symbol: "Int_LifeSupport_Size3_Class1"
      }, {
        boot: 1,
        class: 3,
        cost: 10130,
        edID: 128064149,
        eddbID: 1007,
        grp: "ls",
        id: "ld",
        integrity: 58,
        mass: 2,
        power: .48,
        rating: "D",
        time: 450,
        symbol: "Int_LifeSupport_Size3_Class2"
      }, {
        boot: 1,
        class: 3,
        cost: 25330,
        edID: 128064150,
        eddbID: 1008,
        grp: "ls",
        id: "lc",
        integrity: 64,
        mass: 5,
        power: .53,
        rating: "C",
        time: 600,
        symbol: "Int_LifeSupport_Size3_Class3"
      }, {
        boot: 1,
        class: 3,
        cost: 63330,
        edID: 128064151,
        eddbID: 1009,
        grp: "ls",
        id: "lb",
        integrity: 70,
        mass: 8,
        power: .58,
        rating: "B",
        time: 900,
        symbol: "Int_LifeSupport_Size3_Class4"
      }, {
        boot: 1,
        class: 3,
        cost: 158330,
        edID: 128064152,
        eddbID: 1010,
        grp: "ls",
        id: "la",
        integrity: 77,
        mass: 5,
        power: .64,
        rating: "A",
        time: 1500,
        symbol: "Int_LifeSupport_Size3_Class5"
      }, {
        boot: 1,
        class: 2,
        cost: 1450,
        edID: 128064143,
        eddbID: 1001,
        grp: "ls",
        id: "l9",
        integrity: 41,
        mass: 2.5,
        power: .37,
        rating: "E",
        time: 300,
        symbol: "Int_LifeSupport_Size2_Class1"
      }, {
        boot: 1,
        class: 2,
        cost: 3620,
        edID: 128064144,
        eddbID: 1002,
        grp: "ls",
        id: "l8",
        integrity: 46,
        mass: 1,
        power: .41,
        rating: "D",
        time: 450,
        symbol: "Int_LifeSupport_Size2_Class2"
      }, {
        boot: 1,
        class: 2,
        cost: 9050,
        edID: 128064145,
        eddbID: 1003,
        grp: "ls",
        id: "l7",
        integrity: 51,
        mass: 2.5,
        power: .46,
        rating: "C",
        time: 600,
        symbol: "Int_LifeSupport_Size2_Class3"
      }, {
        boot: 1,
        class: 2,
        cost: 22620,
        edID: 128064146,
        eddbID: 1004,
        grp: "ls",
        id: "l6",
        integrity: 56,
        mass: 4,
        power: .51,
        rating: "B",
        time: 900,
        symbol: "Int_LifeSupport_Size2_Class4"
      }, {
        boot: 1,
        class: 2,
        cost: 56550,
        edID: 128064147,
        eddbID: 1005,
        grp: "ls",
        id: "l5",
        integrity: 61,
        mass: 2.5,
        power: .55,
        rating: "A",
        time: 1500,
        symbol: "Int_LifeSupport_Size2_Class5"
      }, {
        boot: 1,
        class: 1,
        cost: 520,
        edID: 128064138,
        eddbID: 996,
        grp: "ls",
        id: "l4",
        integrity: 32,
        mass: 1.3,
        power: .32,
        rating: "E",
        time: 300,
        symbol: "Int_LifeSupport_Size1_Class1"
      }, {
        boot: 1,
        class: 1,
        cost: 1290,
        edID: 128064139,
        eddbID: 997,
        grp: "ls",
        id: "l3",
        integrity: 36,
        mass: .5,
        power: .36,
        rating: "D",
        time: 450,
        symbol: "Int_LifeSupport_Size1_Class2"
      }, {
        boot: 1,
        class: 1,
        cost: 3230,
        edID: 128064140,
        eddbID: 998,
        grp: "ls",
        id: "l2",
        integrity: 40,
        mass: 1.3,
        power: .4,
        rating: "C",
        time: 600,
        symbol: "Int_LifeSupport_Size1_Class3"
      }, {
        boot: 1,
        class: 1,
        cost: 8080,
        edID: 128064141,
        eddbID: 999,
        grp: "ls",
        id: "l1",
        integrity: 44,
        mass: 2,
        power: .44,
        rating: "B",
        time: 900,
        symbol: "Int_LifeSupport_Size1_Class4"
      }, {
        boot: 1,
        class: 1,
        cost: 20200,
        edID: 128064142,
        eddbID: 1e3,
        grp: "ls",
        id: "l0",
        integrity: 48,
        mass: 1.3,
        power: .48,
        rating: "A",
        time: 1500,
        symbol: "Int_LifeSupport_Size1_Class5"
      } ],
      pd: [ {
        class: 8,
        cost: 697580,
        edID: 128064213,
        eddbID: 1071,
        engcap: 32,
        engrate: 3.2,
        grp: "pd",
        id: "dD",
        integrity: 135,
        mass: 160,
        power: .64,
        rating: "E",
        syscap: 32,
        sysrate: 3.2,
        wepcap: 48,
        weprate: 4.8,
        symbol: "Int_PowerDistributor_Size8_Class1"
      }, {
        class: 8,
        cost: 1743960,
        edID: 128064214,
        eddbID: 1072,
        engcap: 36,
        engrate: 3.6,
        grp: "pd",
        id: "dC",
        integrity: 120,
        mass: 64,
        power: .72,
        rating: "D",
        syscap: 36,
        sysrate: 3.6,
        wepcap: 54,
        weprate: 5.4,
        symbol: "Int_PowerDistributor_Size8_Class2"
      }, {
        class: 8,
        cost: 4359900,
        edID: 128064215,
        eddbID: 1073,
        engcap: 40,
        engrate: 4,
        grp: "pd",
        id: "dB",
        integrity: 150,
        mass: 160,
        power: .8,
        rating: "C",
        syscap: 40,
        sysrate: 4,
        wepcap: 60,
        weprate: 6,
        symbol: "Int_PowerDistributor_Size8_Class3"
      }, {
        class: 8,
        cost: 10899760,
        edID: 128064216,
        eddbID: 1074,
        engcap: 44,
        engrate: 4.4,
        grp: "pd",
        id: "dA",
        integrity: 180,
        mass: 256,
        power: .88,
        rating: "B",
        syscap: 44,
        sysrate: 4.4,
        wepcap: 66,
        weprate: 6.6,
        symbol: "Int_PowerDistributor_Size8_Class4"
      }, {
        class: 8,
        cost: 27249390,
        edID: 128064217,
        eddbID: 1075,
        engcap: 48,
        engrate: 4.8,
        grp: "pd",
        id: "dz",
        integrity: 165,
        mass: 160,
        power: .96,
        rating: "A",
        syscap: 48,
        sysrate: 4.8,
        wepcap: 72,
        weprate: 7.2,
        symbol: "Int_PowerDistributor_Size8_Class5"
      }, {
        class: 7,
        cost: 249140,
        edID: 128064208,
        eddbID: 1066,
        engcap: 27,
        engrate: 2.6,
        grp: "pd",
        id: "dy",
        integrity: 118,
        mass: 80,
        power: .59,
        rating: "E",
        syscap: 27,
        sysrate: 2.6,
        wepcap: 41,
        weprate: 4.1,
        symbol: "Int_PowerDistributor_Size7_Class1"
      }, {
        class: 7,
        cost: 622840,
        edID: 128064209,
        eddbID: 1067,
        engcap: 31,
        engrate: 3,
        grp: "pd",
        id: "dx",
        integrity: 105,
        mass: 32,
        power: .67,
        rating: "D",
        syscap: 31,
        sysrate: 3,
        wepcap: 46,
        weprate: 4.6,
        symbol: "Int_PowerDistributor_Size7_Class2"
      }, {
        class: 7,
        cost: 1557110,
        edID: 128064210,
        eddbID: 1068,
        engcap: 34,
        engrate: 3.3,
        grp: "pd",
        id: "dw",
        integrity: 131,
        mass: 80,
        power: .74,
        rating: "C",
        syscap: 34,
        sysrate: 3.3,
        wepcap: 51,
        weprate: 5.1,
        symbol: "Int_PowerDistributor_Size7_Class3"
      }, {
        class: 7,
        cost: 3892770,
        edID: 128064211,
        eddbID: 1069,
        engcap: 37,
        engrate: 3.6,
        grp: "pd",
        id: "dv",
        integrity: 157,
        mass: 128,
        power: .81,
        rating: "B",
        syscap: 37,
        sysrate: 3.6,
        wepcap: 56,
        weprate: 5.6,
        symbol: "Int_PowerDistributor_Size7_Class4"
      }, {
        class: 7,
        cost: 9731930,
        edID: 128064212,
        eddbID: 1070,
        engcap: 41,
        engrate: 4,
        grp: "pd",
        id: "du",
        integrity: 144,
        mass: 80,
        power: .89,
        rating: "A",
        syscap: 41,
        sysrate: 4,
        wepcap: 61,
        weprate: 6.1,
        symbol: "Int_PowerDistributor_Size7_Class5"
      }, {
        class: 6,
        cost: 88980,
        edID: 128064203,
        eddbID: 1061,
        engcap: 23,
        engrate: 2.2,
        grp: "pd",
        id: "dt",
        integrity: 102,
        mass: 40,
        power: .54,
        rating: "E",
        syscap: 23,
        sysrate: 2.2,
        wepcap: 34,
        weprate: 3.4,
        symbol: "Int_PowerDistributor_Size6_Class1"
      }, {
        class: 6,
        cost: 222440,
        edID: 128064204,
        eddbID: 1062,
        engcap: 26,
        engrate: 2.4,
        grp: "pd",
        id: "ds",
        integrity: 90,
        mass: 16,
        power: .61,
        rating: "D",
        syscap: 26,
        sysrate: 2.4,
        wepcap: 38,
        weprate: 3.9,
        symbol: "Int_PowerDistributor_Size6_Class2"
      }, {
        class: 6,
        cost: 556110,
        edID: 128064205,
        eddbID: 1063,
        engcap: 29,
        engrate: 2.7,
        grp: "pd",
        id: "dr",
        integrity: 113,
        mass: 40,
        power: .68,
        rating: "C",
        syscap: 29,
        sysrate: 2.7,
        wepcap: 42,
        weprate: 4.3,
        symbol: "Int_PowerDistributor_Size6_Class3"
      }, {
        class: 6,
        cost: 1390280,
        edID: 128064206,
        eddbID: 1064,
        engcap: 32,
        engrate: 3,
        grp: "pd",
        id: "dq",
        integrity: 136,
        mass: 64,
        power: .75,
        rating: "B",
        syscap: 32,
        sysrate: 3,
        wepcap: 46,
        weprate: 4.7,
        symbol: "Int_PowerDistributor_Size6_Class4"
      }, {
        class: 6,
        cost: 3475690,
        edID: 128064207,
        eddbID: 1065,
        engcap: 35,
        engrate: 3.2,
        grp: "pd",
        id: "dp",
        integrity: 124,
        mass: 40,
        power: .82,
        rating: "A",
        syscap: 35,
        sysrate: 3.2,
        wepcap: 50,
        weprate: 5.2,
        symbol: "Int_PowerDistributor_Size6_Class5"
      }, {
        class: 5,
        cost: 31780,
        edID: 128064198,
        eddbID: 1056,
        engcap: 19,
        engrate: 1.7,
        grp: "pd",
        id: "do",
        integrity: 86,
        mass: 20,
        power: .5,
        rating: "E",
        syscap: 19,
        sysrate: 1.7,
        wepcap: 27,
        weprate: 2.9,
        symbol: "Int_PowerDistributor_Size5_Class1"
      }, {
        class: 5,
        cost: 79440,
        edID: 128064199,
        eddbID: 1057,
        engcap: 22,
        engrate: 1.9,
        grp: "pd",
        id: "dn",
        integrity: 77,
        mass: 8,
        power: .56,
        rating: "D",
        syscap: 22,
        sysrate: 1.9,
        wepcap: 31,
        weprate: 3.2,
        symbol: "Int_PowerDistributor_Size5_Class2"
      }, {
        class: 5,
        cost: 198610,
        edID: 128064200,
        eddbID: 1058,
        engcap: 24,
        engrate: 2.1,
        grp: "pd",
        id: "dm",
        integrity: 96,
        mass: 20,
        power: .62,
        rating: "C",
        syscap: 24,
        sysrate: 2.1,
        wepcap: 34,
        weprate: 3.6,
        symbol: "Int_PowerDistributor_Size5_Class3"
      }, {
        class: 5,
        cost: 496530,
        edID: 128064201,
        eddbID: 1059,
        engcap: 26,
        engrate: 2.3,
        grp: "pd",
        id: "dl",
        integrity: 115,
        mass: 32,
        power: .68,
        rating: "B",
        syscap: 26,
        sysrate: 2.3,
        wepcap: 37,
        weprate: 4,
        symbol: "Int_PowerDistributor_Size5_Class4"
      }, {
        class: 5,
        cost: 1241320,
        edID: 128064202,
        eddbID: 1060,
        engcap: 29,
        engrate: 2.5,
        grp: "pd",
        id: "dk",
        integrity: 106,
        mass: 20,
        power: .74,
        rating: "A",
        syscap: 29,
        sysrate: 2.5,
        wepcap: 41,
        weprate: 4.3,
        symbol: "Int_PowerDistributor_Size5_Class5"
      }, {
        class: 4,
        cost: 11350,
        edID: 128064193,
        eddbID: 1051,
        engcap: 15,
        engrate: 1.3,
        grp: "pd",
        id: "dj",
        integrity: 72,
        mass: 10,
        power: .45,
        rating: "E",
        syscap: 15,
        sysrate: 1.3,
        wepcap: 22,
        weprate: 2.3,
        symbol: "Int_PowerDistributor_Size4_Class1"
      }, {
        class: 4,
        cost: 28370,
        edID: 128064194,
        eddbID: 1052,
        engcap: 17,
        engrate: 1.4,
        grp: "pd",
        id: "di",
        integrity: 64,
        mass: 4,
        power: .5,
        rating: "D",
        syscap: 17,
        sysrate: 1.4,
        wepcap: 24,
        weprate: 2.6,
        symbol: "Int_PowerDistributor_Size4_Class2"
      }, {
        class: 4,
        cost: 70930,
        edID: 128064195,
        eddbID: 1053,
        engcap: 19,
        engrate: 1.6,
        grp: "pd",
        id: "dh",
        integrity: 80,
        mass: 10,
        power: .56,
        rating: "C",
        syscap: 19,
        sysrate: 1.6,
        wepcap: 27,
        weprate: 2.9,
        symbol: "Int_PowerDistributor_Size4_Class3"
      }, {
        class: 4,
        cost: 177330,
        edID: 128064196,
        eddbID: 1054,
        engcap: 21,
        engrate: 1.8,
        grp: "pd",
        id: "dg",
        integrity: 96,
        mass: 16,
        power: .62,
        rating: "B",
        syscap: 21,
        sysrate: 1.8,
        wepcap: 30,
        weprate: 3.2,
        symbol: "Int_PowerDistributor_Size4_Class4"
      }, {
        class: 4,
        cost: 443330,
        edID: 128064197,
        eddbID: 1055,
        engcap: 23,
        engrate: 1.9,
        grp: "pd",
        id: "df",
        integrity: 88,
        mass: 10,
        power: .67,
        rating: "A",
        syscap: 23,
        sysrate: 1.9,
        wepcap: 32,
        weprate: 3.5,
        symbol: "Int_PowerDistributor_Size4_Class5"
      }, {
        class: 3,
        cost: 4050,
        edID: 128064188,
        eddbID: 1046,
        engcap: 12,
        engrate: .9,
        grp: "pd",
        id: "de",
        integrity: 58,
        mass: 5,
        power: .4,
        rating: "E",
        syscap: 12,
        sysrate: .9,
        wepcap: 16,
        weprate: 1.8,
        symbol: "Int_PowerDistributor_Size3_Class1"
      }, {
        class: 3,
        cost: 10130,
        edID: 128064189,
        eddbID: 1047,
        engcap: 14,
        engrate: 1,
        grp: "pd",
        id: "dd",
        integrity: 51,
        mass: 2,
        power: .45,
        rating: "D",
        syscap: 14,
        sysrate: 1,
        wepcap: 18,
        weprate: 2.1,
        symbol: "Int_PowerDistributor_Size3_Class2"
      }, {
        class: 3,
        cost: 25330,
        edID: 128064190,
        eddbID: 1048,
        engcap: 15,
        engrate: 1.1,
        grp: "pd",
        id: "dc",
        integrity: 64,
        mass: 5,
        power: .5,
        rating: "C",
        syscap: 15,
        sysrate: 1.1,
        wepcap: 20,
        weprate: 2.3,
        symbol: "Int_PowerDistributor_Size3_Class3"
      }, {
        class: 3,
        cost: 63330,
        edID: 128064191,
        eddbID: 1049,
        engcap: 17,
        engrate: 1.2,
        grp: "pd",
        id: "db",
        integrity: 77,
        mass: 8,
        power: .55,
        rating: "B",
        syscap: 17,
        sysrate: 1.2,
        wepcap: 22,
        weprate: 2.5,
        symbol: "Int_PowerDistributor_Size3_Class4"
      }, {
        class: 3,
        cost: 158330,
        edID: 128064192,
        eddbID: 1050,
        engcap: 18,
        engrate: 1.3,
        grp: "pd",
        id: "da",
        integrity: 70,
        mass: 5,
        power: .6,
        rating: "A",
        syscap: 18,
        sysrate: 1.3,
        wepcap: 24,
        weprate: 2.8,
        symbol: "Int_PowerDistributor_Size3_Class5"
      }, {
        class: 2,
        cost: 1450,
        edID: 128064183,
        eddbID: 1041,
        engcap: 10,
        engrate: .6,
        grp: "pd",
        id: "d9",
        integrity: 46,
        mass: 2.5,
        power: .36,
        rating: "E",
        syscap: 10,
        sysrate: .6,
        wepcap: 12,
        weprate: 1.4,
        symbol: "Int_PowerDistributor_Size2_Class1"
      }, {
        class: 2,
        cost: 3620,
        edID: 128064184,
        eddbID: 1042,
        engcap: 11,
        engrate: .6,
        grp: "pd",
        id: "d8",
        integrity: 41,
        mass: 1,
        power: .41,
        rating: "D",
        syscap: 11,
        sysrate: .6,
        wepcap: 14,
        weprate: 1.6,
        symbol: "Int_PowerDistributor_Size2_Class2"
      }, {
        class: 2,
        cost: 9050,
        edID: 128064185,
        eddbID: 1043,
        engcap: 12,
        engrate: .7,
        grp: "pd",
        id: "d7",
        integrity: 51,
        mass: 2.5,
        power: .45,
        rating: "C",
        syscap: 12,
        sysrate: .7,
        wepcap: 15,
        weprate: 1.8,
        symbol: "Int_PowerDistributor_Size2_Class3"
      }, {
        class: 2,
        cost: 22620,
        edID: 128064186,
        eddbID: 1044,
        engcap: 13,
        engrate: .8,
        grp: "pd",
        id: "d6",
        integrity: 61,
        mass: 4,
        power: .5,
        rating: "B",
        syscap: 13,
        sysrate: .8,
        wepcap: 17,
        weprate: 2,
        symbol: "Int_PowerDistributor_Size2_Class4"
      }, {
        class: 2,
        cost: 56550,
        edID: 128064187,
        eddbID: 1045,
        engcap: 14,
        engrate: .8,
        grp: "pd",
        id: "d5",
        integrity: 56,
        mass: 2.5,
        power: .54,
        rating: "A",
        syscap: 14,
        sysrate: .8,
        wepcap: 18,
        weprate: 2.2,
        symbol: "Int_PowerDistributor_Size2_Class5"
      }, {
        class: 1,
        cost: 520,
        edID: 128064178,
        eddbID: 1036,
        engcap: 8,
        engrate: .4,
        grp: "pd",
        id: "d4",
        integrity: 46,
        mass: 1.3,
        power: .32,
        rating: "E",
        syscap: 8,
        sysrate: .4,
        wepcap: 10,
        weprate: 1.2,
        symbol: "Int_PowerDistributor_Size1_Class1"
      }, {
        class: 1,
        cost: 1290,
        edID: 128064179,
        eddbID: 1037,
        engcap: 9,
        engrate: .5,
        grp: "pd",
        id: "d3",
        integrity: 41,
        mass: .5,
        power: .36,
        rating: "D",
        syscap: 9,
        sysrate: .5,
        wepcap: 11,
        weprate: 1.4,
        symbol: "Int_PowerDistributor_Size1_Class2"
      }, {
        class: 1,
        cost: 3230,
        edID: 128064180,
        eddbID: 1038,
        engcap: 10,
        engrate: .5,
        grp: "pd",
        id: "d2",
        integrity: 51,
        mass: 1.3,
        power: .4,
        rating: "C",
        syscap: 10,
        sysrate: .5,
        wepcap: 12,
        weprate: 1.5,
        symbol: "Int_PowerDistributor_Size1_Class3"
      }, {
        class: 1,
        cost: 8080,
        edID: 128064181,
        eddbID: 1039,
        engcap: 11,
        engrate: .6,
        grp: "pd",
        id: "d1",
        integrity: 61,
        mass: 2,
        power: .44,
        rating: "B",
        syscap: 11,
        sysrate: .6,
        wepcap: 13,
        weprate: 1.7,
        symbol: "Int_PowerDistributor_Size1_Class4"
      }, {
        class: 1,
        cost: 20200,
        edID: 128064182,
        eddbID: 1040,
        engcap: 12,
        engrate: .6,
        grp: "pd",
        id: "d0",
        integrity: 56,
        mass: 1.3,
        power: .48,
        rating: "A",
        syscap: 12,
        sysrate: .6,
        wepcap: 14,
        weprate: 1.8,
        symbol: "Int_PowerDistributor_Size1_Class5"
      }, {
        class: 1,
        cost: 40957,
        edID: 128833980,
        eddbID: 1040,
        engcap: 9,
        engrate: .8,
        grp: "pd",
        id: "0T",
        integrity: 56,
        mass: 1.4,
        power: .62,
        rating: "A",
        syscap: 10,
        sysrate: .8,
        wepcap: 10,
        weprate: 2.5,
        name: "Guardian Power Distributor",
        symbol: "Int_GuardianPowerDistributor_Size1"
      }, {
        class: 2,
        cost: 111600,
        edID: 128833981,
        eddbID: 1040,
        engcap: 9,
        engrate: .8,
        grp: "pd",
        id: "0U",
        integrity: 56,
        mass: 2.6,
        power: .73,
        rating: "A",
        syscap: 10,
        sysrate: .8,
        wepcap: 10,
        weprate: 2.5,
        name: "Guardian Power Distributor",
        symbol: "Int_GuardianPowerDistributor_Size2"
      }, {
        class: 3,
        cost: 311365,
        edID: 128833982,
        eddbID: 1040,
        engcap: 14,
        engrate: 1.7,
        grp: "pd",
        id: "0X",
        integrity: 56,
        mass: 5.25,
        power: .78,
        rating: "A",
        syscap: 14,
        sysrate: 1.7,
        wepcap: 13,
        weprate: 3.1,
        name: "Guardian Power Distributor",
        symbol: "Int_GuardianPowerDistributor_Size3"
      }, {
        class: 4,
        cost: 868708,
        edID: 128833983,
        eddbID: 1040,
        engcap: 17,
        engrate: 2.5,
        grp: "pd",
        id: "1A",
        integrity: 56,
        mass: 10.5,
        power: .87,
        rating: "A",
        syscap: 14,
        sysrate: 1.7,
        wepcap: 22,
        weprate: 4.9,
        name: "Guardian Power Distributor",
        symbol: "Int_GuardianPowerDistributor_Size4"
      }, {
        class: 5,
        cost: 2423690,
        edID: 128833984,
        eddbID: 1040,
        engcap: 22,
        engrate: 3.3,
        grp: "pd",
        id: "1E",
        integrity: 56,
        mass: 21,
        power: .96,
        rating: "A",
        syscap: 22,
        sysrate: 3.3,
        wepcap: 29,
        weprate: 6,
        name: "Guardian Power Distributor",
        symbol: "Int_GuardianPowerDistributor_Size5"
      }, {
        class: 6,
        cost: 6762091,
        edID: 128833985,
        eddbID: 1040,
        engcap: 26,
        engrate: 4.2,
        grp: "pd",
        id: "1B",
        integrity: 56,
        mass: 42,
        power: 1.07,
        rating: "A",
        syscap: 26,
        sysrate: 4.2,
        wepcap: 35,
        weprate: 7.3,
        name: "Guardian Power Distributor",
        symbol: "Int_GuardianPowerDistributor_Size6"
      }, {
        class: 7,
        cost: 18866235,
        edID: 128833986,
        eddbID: 1040,
        engcap: 31,
        engrate: 5.2,
        grp: "pd",
        id: "1C",
        integrity: 56,
        mass: 84,
        power: 1.16,
        rating: "A",
        syscap: 31,
        sysrate: 5.2,
        wepcap: 43,
        weprate: 8.5,
        name: "Guardian Power Distributor",
        symbol: "Int_GuardianPowerDistributor_Size7"
      }, {
        class: 8,
        cost: 52636793,
        edID: 128833987,
        eddbID: 1040,
        engcap: 36,
        engrate: 6.2,
        grp: "pd",
        id: "1D",
        integrity: 56,
        mass: 168,
        power: 1.25,
        rating: "A",
        syscap: 36,
        sysrate: 6.2,
        wepcap: 50,
        weprate: 10.1,
        name: "Guardian Power Distributor",
        symbol: "Int_GuardianPowerDistributor_Size8"
      } ],
      s: [ {
        angle: 30,
        class: 8,
        cost: 697580,
        edID: 128064253,
        eddbID: 1111,
        grp: "s",
        id: "sy",
        integrity: 135,
        mass: 160,
        power: .55,
        range: 5.12,
        rating: "E",
        symbol: "Int_Sensors_Size8_Class1"
      }, {
        angle: 30,
        class: 8,
        cost: 1743960,
        edID: 128064254,
        eddbID: 1112,
        grp: "s",
        id: "sx",
        integrity: 120,
        mass: 64,
        power: .62,
        range: 5.76,
        rating: "D",
        symbol: "Int_Sensors_Size8_Class2"
      }, {
        angle: 30,
        class: 8,
        cost: 4359900,
        edID: 128064255,
        eddbID: 1113,
        grp: "s",
        id: "sw",
        integrity: 150,
        mass: 160,
        power: .69,
        range: 6.4,
        rating: "C",
        symbol: "Int_Sensors_Size8_Class3"
      }, {
        angle: 30,
        class: 8,
        cost: 10899760,
        edID: 128064256,
        eddbID: 1114,
        grp: "s",
        id: "sv",
        integrity: 180,
        mass: 256,
        power: 1.14,
        range: 7.04,
        rating: "B",
        symbol: "Int_Sensors_Size8_Class4"
      }, {
        angle: 30,
        class: 8,
        cost: 27249390,
        edID: 128064257,
        eddbID: 1115,
        grp: "s",
        id: "su",
        integrity: 165,
        mass: 160,
        power: 2.07,
        range: 7.68,
        rating: "A",
        symbol: "Int_Sensors_Size8_Class5"
      }, {
        angle: 30,
        class: 7,
        cost: 249140,
        edID: 128064248,
        eddbID: 1106,
        grp: "s",
        id: "sD",
        integrity: 118,
        mass: 80,
        power: .47,
        range: 4.96,
        rating: "E",
        symbol: "Int_Sensors_Size7_Class1"
      }, {
        angle: 30,
        class: 7,
        cost: 622840,
        edID: 128064249,
        eddbID: 1107,
        grp: "s",
        id: "sC",
        integrity: 105,
        mass: 32,
        power: .53,
        range: 5.58,
        rating: "D",
        symbol: "Int_Sensors_Size7_Class2"
      }, {
        angle: 30,
        class: 7,
        cost: 1557110,
        edID: 128064250,
        eddbID: 1108,
        grp: "s",
        id: "sB",
        integrity: 131,
        mass: 80,
        power: .59,
        range: 6.2,
        rating: "C",
        symbol: "Int_Sensors_Size7_Class3"
      }, {
        angle: 30,
        class: 7,
        cost: 3892770,
        edID: 128064251,
        eddbID: 1109,
        grp: "s",
        id: "sA",
        integrity: 157,
        mass: 128,
        power: .97,
        range: 6.82,
        rating: "B",
        symbol: "Int_Sensors_Size7_Class4"
      }, {
        angle: 30,
        class: 7,
        cost: 9731930,
        edID: 128064252,
        eddbID: 1110,
        grp: "s",
        id: "sz",
        integrity: 144,
        mass: 80,
        power: 1.77,
        range: 7.44,
        rating: "A",
        symbol: "Int_Sensors_Size7_Class5"
      }, {
        angle: 30,
        class: 6,
        cost: 88980,
        edID: 128064243,
        eddbID: 1101,
        grp: "s",
        id: "st",
        integrity: 102,
        mass: 40,
        power: .4,
        range: 4.8,
        rating: "E",
        symbol: "Int_Sensors_Size6_Class1"
      }, {
        angle: 30,
        class: 6,
        cost: 222440,
        edID: 128064244,
        eddbID: 1102,
        grp: "s",
        id: "ss",
        integrity: 90,
        mass: 16,
        power: .45,
        range: 5.4,
        rating: "D",
        symbol: "Int_Sensors_Size6_Class2"
      }, {
        angle: 30,
        class: 6,
        cost: 556110,
        edID: 128064245,
        eddbID: 1103,
        grp: "s",
        id: "sr",
        integrity: 113,
        mass: 40,
        power: .5,
        range: 6,
        rating: "C",
        symbol: "Int_Sensors_Size6_Class3"
      }, {
        angle: 30,
        class: 6,
        cost: 1390280,
        edID: 128064246,
        eddbID: 1104,
        grp: "s",
        id: "sq",
        integrity: 136,
        mass: 64,
        power: .83,
        range: 6.6,
        rating: "B",
        symbol: "Int_Sensors_Size6_Class4"
      }, {
        angle: 30,
        class: 6,
        cost: 3475690,
        edID: 128064247,
        eddbID: 1105,
        grp: "s",
        id: "sp",
        integrity: 124,
        mass: 40,
        power: 1.5,
        range: 7.2,
        rating: "A",
        symbol: "Int_Sensors_Size6_Class5"
      }, {
        angle: 30,
        class: 5,
        cost: 31780,
        edID: 128064238,
        eddbID: 1096,
        grp: "s",
        id: "so",
        integrity: 86,
        mass: 20,
        power: .33,
        range: 4.64,
        rating: "E",
        symbol: "Int_Sensors_Size5_Class1"
      }, {
        angle: 30,
        class: 5,
        cost: 79440,
        edID: 128064239,
        eddbID: 1097,
        grp: "s",
        id: "sn",
        integrity: 77,
        mass: 8,
        power: .37,
        range: 5.22,
        rating: "D",
        symbol: "Int_Sensors_Size5_Class2"
      }, {
        angle: 30,
        class: 5,
        cost: 198610,
        edID: 128064240,
        eddbID: 1098,
        grp: "s",
        id: "sm",
        integrity: 96,
        mass: 20,
        power: .41,
        range: 5.8,
        rating: "C",
        symbol: "Int_Sensors_Size5_Class3"
      }, {
        angle: 30,
        class: 5,
        cost: 496530,
        edID: 128064241,
        eddbID: 1099,
        grp: "s",
        id: "sl",
        integrity: 115,
        mass: 32,
        power: .68,
        range: 6.38,
        rating: "B",
        symbol: "Int_Sensors_Size5_Class4"
      }, {
        angle: 30,
        class: 5,
        cost: 1241320,
        edID: 128064242,
        eddbID: 1100,
        grp: "s",
        id: "sk",
        integrity: 106,
        mass: 20,
        power: 1.23,
        range: 6.96,
        rating: "A",
        symbol: "Int_Sensors_Size5_Class5"
      }, {
        angle: 30,
        class: 4,
        cost: 11350,
        edID: 128064233,
        eddbID: 1091,
        grp: "s",
        id: "sj",
        integrity: 72,
        mass: 10,
        power: .27,
        range: 4.48,
        rating: "E",
        symbol: "Int_Sensors_Size4_Class1"
      }, {
        angle: 30,
        class: 4,
        cost: 28370,
        edID: 128064234,
        eddbID: 1092,
        grp: "s",
        id: "si",
        integrity: 64,
        mass: 4,
        power: .31,
        range: 5.04,
        rating: "D",
        symbol: "Int_Sensors_Size4_Class2"
      }, {
        angle: 30,
        class: 4,
        cost: 70930,
        edID: 128064235,
        eddbID: 1093,
        grp: "s",
        id: "sh",
        integrity: 80,
        mass: 10,
        power: .34,
        range: 5.6,
        rating: "C",
        symbol: "Int_Sensors_Size4_Class3"
      }, {
        angle: 30,
        class: 4,
        cost: 177330,
        edID: 128064236,
        eddbID: 1094,
        grp: "s",
        id: "sg",
        integrity: 96,
        mass: 16,
        power: .56,
        range: 6.16,
        rating: "B",
        symbol: "Int_Sensors_Size4_Class4"
      }, {
        angle: 30,
        class: 4,
        cost: 443330,
        edID: 128064237,
        eddbID: 1095,
        grp: "s",
        id: "sf",
        integrity: 88,
        mass: 10,
        power: 1.02,
        range: 6.72,
        rating: "A",
        symbol: "Int_Sensors_Size4_Class5"
      }, {
        angle: 30,
        class: 3,
        cost: 4050,
        edID: 128064228,
        eddbID: 1086,
        grp: "s",
        id: "se",
        integrity: 58,
        mass: 5,
        power: .22,
        range: 4.32,
        rating: "E",
        symbol: "Int_Sensors_Size3_Class1"
      }, {
        angle: 30,
        class: 3,
        cost: 10130,
        edID: 128064229,
        eddbID: 1087,
        grp: "s",
        id: "sd",
        integrity: 51,
        mass: 2,
        power: .25,
        range: 4.86,
        rating: "D",
        symbol: "Int_Sensors_Size3_Class2"
      }, {
        angle: 30,
        class: 3,
        cost: 25330,
        edID: 128064230,
        eddbID: 1088,
        grp: "s",
        id: "sc",
        integrity: 64,
        mass: 5,
        power: .28,
        range: 5.4,
        rating: "C",
        symbol: "Int_Sensors_Size3_Class3"
      }, {
        angle: 30,
        class: 3,
        cost: 63330,
        edID: 128064231,
        eddbID: 1089,
        grp: "s",
        id: "sb",
        integrity: 77,
        mass: 8,
        power: .46,
        range: 5.94,
        rating: "B",
        symbol: "Int_Sensors_Size3_Class4"
      }, {
        angle: 30,
        class: 3,
        cost: 158330,
        edID: 128064232,
        eddbID: 1090,
        grp: "s",
        id: "sa",
        integrity: 70,
        mass: 5,
        power: .84,
        range: 6.48,
        rating: "A",
        symbol: "Int_Sensors_Size3_Class5"
      }, {
        angle: 30,
        class: 2,
        cost: 1450,
        edID: 128064223,
        eddbID: 1081,
        grp: "s",
        id: "s9",
        integrity: 46,
        mass: 2.5,
        power: .18,
        range: 4.16,
        rating: "E",
        symbol: "Int_Sensors_Size2_Class1"
      }, {
        angle: 30,
        class: 2,
        cost: 3620,
        edID: 128064224,
        eddbID: 1082,
        grp: "s",
        id: "s8",
        integrity: 41,
        mass: 1,
        power: .21,
        range: 4.68,
        rating: "D",
        symbol: "Int_Sensors_Size2_Class2"
      }, {
        angle: 30,
        class: 2,
        cost: 9050,
        edID: 128064225,
        eddbID: 1083,
        grp: "s",
        id: "s7",
        integrity: 51,
        mass: 2.5,
        power: .23,
        range: 5.2,
        rating: "C",
        symbol: "Int_Sensors_Size2_Class3"
      }, {
        angle: 30,
        class: 2,
        cost: 22620,
        edID: 128064226,
        eddbID: 1084,
        grp: "s",
        id: "s6",
        integrity: 61,
        mass: 4,
        power: .38,
        range: 5.72,
        rating: "B",
        symbol: "Int_Sensors_Size2_Class4"
      }, {
        angle: 30,
        class: 2,
        cost: 56550,
        edID: 128064227,
        eddbID: 1085,
        grp: "s",
        id: "s5",
        integrity: 56,
        mass: 2.5,
        power: .69,
        range: 6.24,
        rating: "A",
        symbol: "Int_Sensors_Size2_Class5"
      }, {
        angle: 30,
        class: 1,
        cost: 520,
        edID: 128064218,
        eddbID: 1076,
        grp: "s",
        id: "s4",
        integrity: 46,
        mass: 1.3,
        power: .16,
        range: 4,
        rating: "E",
        symbol: "Int_Sensors_Size1_Class1"
      }, {
        angle: 30,
        class: 1,
        cost: 1290,
        edID: 128064219,
        eddbID: 1077,
        grp: "s",
        id: "s3",
        integrity: 41,
        mass: .5,
        power: .18,
        range: 4.5,
        rating: "D",
        symbol: "Int_Sensors_Size1_Class2"
      }, {
        angle: 30,
        class: 1,
        cost: 3230,
        edID: 128064220,
        eddbID: 1078,
        grp: "s",
        id: "s2",
        integrity: 51,
        mass: 1.3,
        power: .2,
        range: 5,
        rating: "C",
        symbol: "Int_Sensors_Size1_Class3"
      }, {
        angle: 30,
        class: 1,
        cost: 8080,
        edID: 128064221,
        eddbID: 1079,
        grp: "s",
        id: "s1",
        integrity: 61,
        mass: 2,
        power: .33,
        range: 5.5,
        rating: "B",
        symbol: "Int_Sensors_Size1_Class4"
      }, {
        angle: 30,
        class: 1,
        cost: 20200,
        edID: 128064222,
        eddbID: 1080,
        grp: "s",
        id: "s0",
        integrity: 56,
        mass: 1.3,
        power: .6,
        range: 6,
        rating: "A",
        symbol: "Int_Sensors_Size1_Class5"
      } ],
      ft: [ {
        class: 1,
        cost: 1e3,
        edID: 128064346,
        eddbID: 1199,
        fuel: 2,
        mass: 0,
        grp: "ft",
        id: "f1",
        rating: "C",
        symbol: "Int_FuelTank_Size1_Class3"
      }, {
        class: 2,
        cost: 3750,
        edID: 128064347,
        eddbID: 1200,
        fuel: 4,
        mass: 0,
        grp: "ft",
        id: "f2",
        rating: "C",
        symbol: "Int_FuelTank_Size2_Class3"
      }, {
        class: 3,
        cost: 7060,
        edID: 128064348,
        eddbID: 1201,
        fuel: 8,
        mass: 0,
        grp: "ft",
        id: "f3",
        rating: "C",
        symbol: "Int_FuelTank_Size3_Class3"
      }, {
        class: 4,
        cost: 24730,
        edID: 128064349,
        eddbID: 1202,
        fuel: 16,
        mass: 0,
        grp: "ft",
        id: "f4",
        rating: "C",
        symbol: "Int_FuelTank_Size4_Class3"
      }, {
        class: 5,
        cost: 97750,
        edID: 128064350,
        eddbID: 1203,
        fuel: 32,
        mass: 0,
        grp: "ft",
        id: "f5",
        rating: "C",
        symbol: "Int_FuelTank_Size5_Class3"
      }, {
        class: 6,
        cost: 341580,
        edID: 128064351,
        eddbID: 1204,
        fuel: 64,
        mass: 0,
        grp: "ft",
        id: "f6",
        rating: "C",
        symbol: "Int_FuelTank_Size6_Class3"
      }, {
        class: 7,
        cost: 1780910,
        edID: 128064352,
        eddbID: 1205,
        fuel: 128,
        mass: 0,
        grp: "ft",
        id: "f7",
        rating: "C",
        symbol: "Int_FuelTank_Size7_Class3"
      }, {
        class: 8,
        cost: 5428431,
        edID: 128064353,
        eddbID: 1206,
        fuel: 256,
        mass: 0,
        grp: "ft",
        id: "f8",
        rating: "C",
        symbol: "Int_FuelTank_Size8_Class3"
      } ],
      pas: [ {
        class: 1,
        cost: 500,
        edID: 128672317,
        eddbID: 1538,
        grp: "pas",
        id: "PA",
        mass: 0,
        power: 0,
        rating: "I",
        symbol: "Int_PlanetApproachSuite"
      } ]
    },
    hardpoints: {
      pl: [ {
        breachdmg: 1.7,
        breachmax: .8,
        breachmin: .4,
        class: 1,
        cost: 2200,
        damage: 2.05,
        damagedist: {
          T: 1
        },
        distdraw: .3,
        edID: 128049381,
        eddbID: 823,
        falloff: 500,
        grp: "pl",
        id: "17",
        integrity: 40,
        mass: 2,
        mount: "F",
        piercing: 20,
        power: .39,
        range: 3e3,
        rating: "F",
        rof: 3.85,
        thermload: .33,
        symbol: "Hpt_PulseLaser_Fixed_Small"
      }, {
        breachdmg: 1.3,
        breachmax: .8,
        breachmin: .4,
        class: 1,
        cost: 6600,
        damage: 1.56,
        damagedist: {
          T: 1
        },
        distdraw: .31,
        edID: 128049385,
        eddbID: 826,
        falloff: 500,
        grp: "pl",
        id: "18",
        integrity: 40,
        mass: 2,
        mount: "G",
        piercing: 20,
        power: .39,
        range: 3e3,
        rating: "G",
        rof: 4,
        thermload: .31,
        symbol: "Hpt_PulseLaser_Gimbal_Small"
      }, {
        breachdmg: 1,
        breachmax: .8,
        breachmin: .4,
        class: 1,
        cost: 26e3,
        damage: 1.19,
        damagedist: {
          T: 1
        },
        distdraw: .19,
        edID: 128049388,
        eddbID: 829,
        falloff: 500,
        grp: "pl",
        id: "19",
        integrity: 40,
        mass: 2,
        mount: "T",
        piercing: 20,
        power: .38,
        range: 3e3,
        rating: "G",
        rof: 3.33,
        thermload: .19,
        symbol: "Hpt_PulseLaser_Turret_Small"
      }, {
        breachdmg: 3,
        breachmax: .8,
        breachmin: .4,
        class: 2,
        cost: 17600,
        damage: 3.5,
        damagedist: {
          T: 1
        },
        distdraw: .5,
        edID: 128049382,
        eddbID: 824,
        falloff: 500,
        grp: "pl",
        id: "1a",
        integrity: 51,
        mass: 4,
        mount: "F",
        piercing: 35,
        power: .6,
        range: 3e3,
        rating: "E",
        rof: 3.45,
        thermload: .56,
        symbol: "Hpt_PulseLaser_Fixed_Medium"
      }, {
        breachdmg: 2.3,
        breachmax: .8,
        breachmin: .4,
        class: 2,
        cost: 35400,
        damage: 2.68,
        damagedist: {
          T: 1
        },
        distdraw: .54,
        edID: 128049386,
        eddbID: 827,
        falloff: 500,
        grp: "pl",
        id: "1b",
        integrity: 51,
        mass: 4,
        mount: "G",
        piercing: 35,
        power: .6,
        range: 3e3,
        rating: "F",
        rof: 3.57,
        thermload: .54,
        symbol: "Hpt_PulseLaser_Gimbal_Medium"
      }, {
        breachdmg: 1.7,
        breachmax: .8,
        breachmin: .4,
        class: 2,
        cost: 132800,
        damage: 2.05,
        damagedist: {
          T: 1
        },
        distdraw: .33,
        edID: 128049389,
        eddbID: 830,
        falloff: 500,
        grp: "pl",
        id: "1c",
        integrity: 51,
        mass: 4,
        mount: "T",
        piercing: 35,
        power: .58,
        range: 3e3,
        rating: "F",
        rof: 3.03,
        thermload: .33,
        symbol: "Hpt_PulseLaser_Turret_Medium"
      }, {
        breachdmg: 2.4,
        breachmax: .8,
        breachmin: .4,
        class: 2,
        cost: 26400,
        damage: 2.8,
        damagedist: {
          T: 1
        },
        distdraw: .9,
        edID: 128671342,
        eddbID: 1483,
        falloff: 500,
        grp: "pl",
        id: "PL",
        integrity: 51,
        mass: 4,
        mount: "F",
        name: "Disruptor",
        piercing: 35,
        power: .7,
        pp: "Felicia Winters",
        rating: "E",
        rof: 1.664,
        thermload: 1,
        symbol: "Hpt_PulseLaser_Fixed_Medium_Disruptor"
      }, {
        breachdmg: 5.1,
        breachmax: .8,
        breachmin: .4,
        class: 3,
        cost: 70400,
        damage: 5.98,
        damagedist: {
          T: 1
        },
        distdraw: .86,
        edID: 128049383,
        eddbID: 825,
        falloff: 500,
        grp: "pl",
        id: "1d",
        integrity: 64,
        mass: 8,
        mount: "F",
        piercing: 52,
        power: .9,
        range: 3e3,
        rating: "D",
        rof: 3.03,
        thermload: .96,
        symbol: "Hpt_PulseLaser_Fixed_Large"
      }, {
        breachdmg: 3.9,
        breachmax: .8,
        breachmin: .4,
        class: 3,
        cost: 140600,
        damage: 4.58,
        damagedist: {
          T: 1
        },
        distdraw: .92,
        edID: 128049387,
        eddbID: 828,
        falloff: 500,
        grp: "pl",
        id: "1e",
        integrity: 64,
        mass: 8,
        mount: "G",
        piercing: 52,
        power: .92,
        range: 3e3,
        rating: "E",
        rof: 3.23,
        thermload: .92,
        symbol: "Hpt_PulseLaser_Gimbal_Large"
      }, {
        breachdmg: 3,
        breachmax: .8,
        breachmin: .4,
        class: 3,
        cost: 400400,
        damage: 3.5,
        damagedist: {
          T: 1
        },
        distdraw: .56,
        edID: 128049390,
        eddbID: 831,
        falloff: 500,
        grp: "pl",
        id: "1f",
        integrity: 64,
        mass: 8,
        mount: "T",
        piercing: 52,
        power: .89,
        range: 3e3,
        rating: "F",
        rof: 2.7,
        thermload: .56,
        symbol: "Hpt_PulseLaser_Turret_Large"
      }, {
        breachdmg: 8.7,
        breachmax: .8,
        breachmin: .4,
        class: 4,
        cost: 177600,
        damage: 10.24,
        damagedist: {
          T: 1
        },
        distdraw: 1.48,
        edID: 128049384,
        eddbID: 1539,
        falloff: 500,
        grp: "pl",
        id: "7q",
        integrity: 80,
        mass: 16,
        mount: "F",
        piercing: 65,
        power: 1.33,
        range: 3e3,
        rating: "A",
        rof: 2.63,
        thermload: 1.64,
        symbol: "Hpt_PulseLaser_Fixed_Huge"
      }, {
        breachdmg: 6.6,
        breachmax: .8,
        breachmin: .4,
        class: 4,
        cost: 877600,
        damage: 7.82,
        damagedist: {
          T: 1
        },
        distdraw: 1.56,
        edID: 128681995,
        eddbID: 1545,
        falloff: 500,
        grp: "pl",
        id: "7r",
        integrity: 80,
        mass: 16,
        mount: "G",
        piercing: 65,
        power: 1.37,
        range: 3e3,
        rating: "A",
        rof: 2.78,
        thermload: 1.56,
        symbol: "Hpt_PulseLaser_Gimbal_Huge"
      } ],
      ul: [ {
        breachdmg: 1.5,
        breachmax: .8,
        breachmin: .4,
        burst: 3,
        burstrof: 15,
        class: 1,
        cost: 4400,
        damage: 1.72,
        damagedist: {
          T: 1
        },
        distdraw: .25,
        edID: 128049400,
        eddbID: 832,
        falloff: 500,
        grp: "ul",
        id: "11",
        integrity: 40,
        mass: 2,
        mount: "F",
        piercing: 20,
        power: .65,
        range: 3e3,
        rating: "F",
        rof: 2,
        thermload: .38,
        symbol: "Hpt_PulseLaserBurst_Fixed_Small"
      }, {
        breachdmg: 1,
        breachmax: .8,
        breachmin: .4,
        burst: 3,
        burstrof: 17,
        class: 1,
        cost: 8600,
        damage: 1.22,
        damagedist: {
          T: 1
        },
        distdraw: .24,
        edID: 128049404,
        eddbID: 835,
        falloff: 500,
        grp: "ul",
        id: "12",
        integrity: 40,
        mass: 2,
        mount: "G",
        piercing: 20,
        power: .64,
        range: 3e3,
        rating: "G",
        rof: 2.23,
        thermload: .34,
        symbol: "Hpt_PulseLaserBurst_Gimbal_Small"
      }, {
        breachdmg: .4,
        breachmax: .8,
        breachmin: .6,
        burst: 3,
        burstrof: 19,
        class: 1,
        cost: 52800,
        damage: .87,
        damagedist: {
          T: 1
        },
        distdraw: .14,
        edID: 128049407,
        eddbID: 838,
        falloff: 500,
        grp: "ul",
        id: "13",
        integrity: 40,
        mass: 2,
        mount: "T",
        piercing: 20,
        power: .6,
        range: 3e3,
        rating: "G",
        rof: 1.92,
        thermload: .19,
        symbol: "Hpt_PulseLaserBurst_Turret_Small"
      }, {
        breachdmg: 3.1,
        breachmax: 0,
        breachmin: 0,
        burst: 8,
        burstrof: 20,
        class: 1,
        cost: 8800,
        damage: 3.6,
        damagedist: {
          T: 1
        },
        distdraw: .31,
        edID: 128671449,
        eddbID: 1477,
        falloff: 600,
        grp: "ul",
        id: "cy",
        integrity: 40,
        jitter: 3.5,
        mass: 2,
        mount: "F",
        name: "Cytoscrambler",
        piercing: 1,
        power: .8,
        pp: "Archon Delaine",
        range: 3e3,
        rating: "F",
        rof: 7.6,
        thermload: .3,
        symbol: "Hpt_PulseLaserBurst_Fixed_Small_Scatter"
      }, {
        breachdmg: 3,
        breachmax: .8,
        breachmin: .4,
        burst: 3,
        burstrof: 11,
        class: 2,
        cost: 23e3,
        damage: 3.53,
        damagedist: {
          T: 1
        },
        distdraw: .5,
        edID: 128049401,
        eddbID: 833,
        falloff: 500,
        grp: "ul",
        id: "7h",
        integrity: 40,
        mass: 4,
        mount: "F",
        piercing: 35,
        power: 1.05,
        range: 3e3,
        rating: "E",
        rof: 1.6,
        thermload: .78,
        symbol: "Hpt_PulseLaserBurst_Fixed_Medium"
      }, {
        breachdmg: 2.1,
        breachmax: .8,
        breachmin: .4,
        burst: 3,
        burstrof: 13,
        class: 2,
        cost: 48500,
        damage: 2.45,
        damagedist: {
          T: 1
        },
        distdraw: .49,
        edID: 128049405,
        eddbID: 836,
        falloff: 500,
        grp: "ul",
        id: "7i",
        integrity: 40,
        mass: 4,
        mount: "G",
        piercing: 35,
        power: 1.04,
        range: 3e3,
        rating: "F",
        rof: 1.78,
        thermload: .67,
        symbol: "Hpt_PulseLaserBurst_Gimbal_Medium"
      }, {
        breachdmg: .9,
        breachmax: .8,
        breachmin: .6,
        burst: 3,
        burstrof: 15,
        class: 2,
        cost: 162800,
        damage: 1.72,
        damagedist: {
          T: 1
        },
        distdraw: .28,
        edID: 128049408,
        eddbID: 839,
        falloff: 500,
        grp: "ul",
        id: "7j",
        integrity: 40,
        mass: 4,
        mount: "T",
        piercing: 35,
        power: .98,
        range: 3e3,
        rating: "F",
        rof: 1.57,
        thermload: .38,
        symbol: "Hpt_PulseLaserBurst_Turret_Medium"
      }, {
        breachdmg: 3.9,
        breachmax: .8,
        breachmin: .4,
        burst: 3,
        burstrof: 7,
        class: 3,
        cost: 140400,
        damage: 7.73,
        damagedist: {
          T: 1
        },
        distdraw: 1.11,
        edID: 128049402,
        eddbID: 834,
        falloff: 500,
        grp: "ul",
        id: "14",
        integrity: 64,
        mass: 8,
        mount: "F",
        piercing: 52,
        power: 1.66,
        range: 3e3,
        rating: "D",
        rof: 1.2,
        thermload: 1.7,
        symbol: "Hpt_PulseLaserBurst_Fixed_Large"
      }, {
        breachdmg: 4.4,
        breachmax: .8,
        breachmin: .4,
        burst: 3,
        burstrof: 9,
        class: 3,
        cost: 281600,
        damage: 5.16,
        damagedist: {
          T: 1
        },
        distdraw: 1.03,
        edID: 128049406,
        eddbID: 837,
        falloff: 500,
        grp: "ul",
        id: "15",
        integrity: 64,
        mass: 8,
        mount: "G",
        piercing: 52,
        power: 1.65,
        range: 3e3,
        rating: "E",
        rof: 1.4,
        thermload: 1.42,
        symbol: "Hpt_PulseLaserBurst_Gimbal_Large"
      }, {
        breachdmg: 1.8,
        breachmax: .8,
        breachmin: .6,
        burst: 3,
        burstrof: 11,
        class: 3,
        cost: 800400,
        damage: 3.53,
        damagedist: {
          T: 1
        },
        distdraw: .56,
        edID: 128049409,
        eddbID: 840,
        falloff: 500,
        grp: "ul",
        id: "16",
        integrity: 64,
        mass: 8,
        mount: "T",
        piercing: 52,
        power: 1.57,
        range: 3e3,
        rating: "E",
        rof: 1.272,
        thermload: .78,
        symbol: "Hpt_PulseLaserBurst_Turret_Large"
      }, {
        breachdmg: 17.5,
        breachmax: .8,
        breachmin: .4,
        burst: 3,
        burstrof: 3,
        class: 4,
        cost: 281600,
        damage: 20.61,
        damagedist: {
          T: 1
        },
        distdraw: 2.98,
        edID: 128049403,
        eddbID: 1549,
        falloff: 500,
        grp: "ul",
        id: "7s",
        integrity: 80,
        mass: 16,
        mount: "F",
        piercing: 65,
        power: 2.58,
        range: 3e3,
        rating: "E",
        rof: .8,
        thermload: 4.53,
        symbol: "Hpt_PulseLaserBurst_Fixed_Huge"
      }, {
        breachdmg: 10.3,
        breachmax: .8,
        breachmin: .4,
        burst: 3,
        burstrof: 5,
        class: 4,
        cost: 1245600,
        damage: 12.09,
        damagedist: {
          T: 1
        },
        distdraw: 2.41,
        edID: 128727920,
        eddbID: 1550,
        falloff: 500,
        grp: "ul",
        id: "7t",
        integrity: 80,
        mass: 16,
        mount: "G",
        piercing: 65,
        power: 2.59,
        range: 3e3,
        rating: "E",
        rof: 1,
        thermload: 3.33,
        symbol: "Hpt_PulseLaserBurst_Gimbal_Huge"
      } ],
      bl: [ {
        breachdmg: 7.9,
        breachmax: .8,
        breachmin: .4,
        class: 1,
        cost: 37430,
        damage: 9.8,
        damagedist: {
          T: 1
        },
        distdraw: 1.94,
        edID: 128049428,
        eddbID: 841,
        falloff: 600,
        grp: "bl",
        id: "10",
        integrity: 40,
        mass: 2,
        mount: "F",
        piercing: 18,
        power: .62,
        range: 3e3,
        rating: "E",
        thermload: 3.5,
        symbol: "Hpt_BeamLaser_Fixed_Small"
      }, {
        breachdmg: 6.1,
        breachmax: .8,
        breachmin: .4,
        class: 1,
        cost: 74650,
        damage: 7.66,
        damagedist: {
          T: 1
        },
        distdraw: 2.11,
        edID: 128049432,
        eddbID: 844,
        falloff: 600,
        grp: "bl",
        id: "0p",
        integrity: 40,
        mass: 2,
        mount: "G",
        piercing: 18,
        power: .6,
        range: 3e3,
        rating: "E",
        thermload: 3.6,
        symbol: "Hpt_BeamLaser_Gimbal_Small"
      }, {
        breachdmg: 4.3,
        breachmax: .8,
        breachmin: .4,
        class: 1,
        cost: 5e5,
        damage: 5.4,
        damagedist: {
          T: 1
        },
        distdraw: 1.32,
        edID: 128049435,
        eddbID: 847,
        falloff: 600,
        eps: 1.32,
        grp: "bl",
        hps: 2.4,
        id: "0q",
        integrity: 40,
        mass: 2,
        mount: "T",
        piercing: 18,
        power: .57,
        range: 3e3,
        rating: "F",
        thermload: 2.4,
        symbol: "Hpt_BeamLaser_Turret_Small"
      }, {
        breachdmg: 3.9,
        breachmax: .8,
        breachmin: .4,
        class: 1,
        cost: 56150,
        damage: 4.9,
        damagedist: {
          T: 1
        },
        distdraw: 2.52,
        edID: 128671346,
        eddbID: 1476,
        falloff: 600,
        grp: "bl",
        id: "b0",
        integrity: 40,
        mass: 2,
        mount: "F",
        name: "Retributor",
        piercing: 18,
        power: .62,
        pp: "Edmund Mahon",
        range: 3e3,
        rating: "E",
        thermload: 2.7,
        symbol: "Hpt_BeamLaser_Fixed_Small_Heat"
      }, {
        breachdmg: 12.8,
        breachmax: .8,
        breachmin: .4,
        class: 2,
        cost: 299520,
        damage: 15.96,
        damagedist: {
          T: 1
        },
        distdraw: 3.16,
        edID: 128049429,
        eddbID: 842,
        falloff: 600,
        grp: "bl",
        id: "0r",
        integrity: 51,
        mass: 4,
        mount: "F",
        piercing: 35,
        power: 1.01,
        range: 3e3,
        rating: "D",
        thermload: 5.1,
        symbol: "Hpt_BeamLaser_Fixed_Medium"
      }, {
        breachdmg: 10,
        breachmax: .8,
        breachmin: .4,
        class: 2,
        cost: 500600,
        damage: 12.52,
        damagedist: {
          T: 1
        },
        distdraw: 3.44,
        edID: 128049433,
        eddbID: 845,
        falloff: 600,
        grp: "bl",
        id: "0s",
        integrity: 51,
        mass: 4,
        mount: "G",
        piercing: 35,
        power: .99,
        range: 3e3,
        rating: "D",
        thermload: 5.3,
        symbol: "Hpt_BeamLaser_Gimbal_Medium"
      }, {
        breachdmg: 7.1,
        breachmax: .8,
        breachmin: .4,
        class: 2,
        cost: 2099900,
        damage: 8.82,
        damagedist: {
          T: 1
        },
        distdraw: 2.16,
        edID: 128049436,
        eddbID: 848,
        falloff: 600,
        grp: "bl",
        id: "0t",
        integrity: 51,
        mass: 4,
        mount: "T",
        piercing: 35,
        power: .93,
        range: 3e3,
        rating: "E",
        thermload: 3.5,
        symbol: "Hpt_BeamLaser_Turret_Medium"
      }, {
        breachdmg: 20.6,
        breachmax: .8,
        breachmin: .4,
        class: 3,
        cost: 1177600,
        damage: 25.78,
        damagedist: {
          T: 1
        },
        distdraw: 5.1,
        edID: 128049430,
        eddbID: 843,
        falloff: 600,
        grp: "bl",
        id: "0u",
        integrity: 64,
        mass: 8,
        mount: "F",
        piercing: 50,
        power: 1.62,
        range: 3e3,
        rating: "C",
        thermload: 7.2,
        symbol: "Hpt_BeamLaser_Fixed_Large"
      }, {
        breachdmg: 16.2,
        breachmax: .8,
        breachmin: .4,
        class: 3,
        cost: 2396160,
        damage: 20.28,
        damagedist: {
          T: 1
        },
        distdraw: 5.58,
        edID: 128049434,
        eddbID: 846,
        falloff: 600,
        grp: "bl",
        id: "0v",
        integrity: 64,
        mass: 8,
        mount: "G",
        piercing: 50,
        power: 1.6,
        range: 3e3,
        rating: "C",
        thermload: 7.6,
        symbol: "Hpt_BeamLaser_Gimbal_Large"
      }, {
        breachdmg: 11.5,
        breachmax: .8,
        breachmin: .4,
        class: 3,
        cost: 19399600,
        damage: 14.34,
        damagedist: {
          T: 1
        },
        distdraw: 3.51,
        edID: 128049437,
        eddbID: 849,
        falloff: 600,
        grp: "bl",
        id: "0o",
        integrity: 64,
        mass: 8,
        mount: "T",
        piercing: 50,
        power: 1.51,
        range: 3e3,
        rating: "D",
        thermload: 5.1,
        symbol: "Hpt_BeamLaser_Turret_Large"
      }, {
        breachdmg: 33.1,
        breachmax: .8,
        breachmin: .4,
        class: 4,
        cost: 2396160,
        damage: 41.38,
        damagedist: {
          T: 1
        },
        distdraw: 8.19,
        edID: 128049431,
        eddbID: 1540,
        falloff: 600,
        grp: "bl",
        id: "0w",
        integrity: 80,
        mass: 16,
        mount: "F",
        piercing: 60,
        power: 2.61,
        range: 3e3,
        rating: "A",
        thermload: 9.9,
        symbol: "Hpt_BeamLaser_Fixed_Huge"
      }, {
        breachdmg: 26.1,
        breachmax: .8,
        breachmin: .4,
        class: 4,
        cost: 8746160,
        damage: 32.68,
        damagedist: {
          T: 1
        },
        distdraw: 8.99,
        edID: 128681994,
        eddbID: 1544,
        falloff: 600,
        grp: "bl",
        id: "0x",
        integrity: 80,
        mass: 16,
        mount: "G",
        piercing: 60,
        power: 2.57,
        range: 3e3,
        rating: "A",
        thermload: 10.6,
        symbol: "Hpt_BeamLaser_Gimbal_Huge"
      } ],
      mc: [ {
        ammo: 2100,
        breachdmg: 1,
        breachmax: .8,
        breachmin: .4,
        class: 1,
        clip: 100,
        cost: 9500,
        damage: 1.12,
        damagedist: {
          K: 1
        },
        distdraw: .06,
        edID: 128049455,
        eddbID: 867,
        falloff: 1800,
        grp: "mc",
        id: "23",
        integrity: 40,
        mass: 2,
        mount: "F",
        piercing: 22,
        power: .28,
        range: 4e3,
        rating: "F",
        reload: 4,
        rof: 7.69,
        shotspeed: 1600,
        thermload: .09,
        symbol: "Hpt_MultiCannon_Fixed_Small"
      }, {
        ammo: 2100,
        breachdmg: .7,
        breachmax: .8,
        breachmin: .4,
        class: 1,
        clip: 90,
        cost: 14250,
        damage: .82,
        damagedist: {
          K: 1
        },
        distdraw: .07,
        edID: 128049459,
        eddbID: 869,
        falloff: 1800,
        grp: "mc",
        id: "24",
        integrity: 40,
        mass: 2,
        mount: "G",
        piercing: 22,
        power: .37,
        range: 4e3,
        rating: "G",
        reload: 5,
        rof: 8.33,
        shotspeed: 1600,
        thermload: .1,
        symbol: "Hpt_MultiCannon_Gimbal_Small"
      }, {
        ammo: 2100,
        breachdmg: .5,
        breachmax: .8,
        breachmin: .4,
        class: 1,
        clip: 90,
        cost: 81600,
        damage: .56,
        damagedist: {
          K: 1
        },
        distdraw: .03,
        edID: 128049462,
        eddbID: 871,
        falloff: 1800,
        grp: "mc",
        id: "25",
        integrity: 40,
        mass: 2,
        mount: "T",
        piercing: 22,
        power: .26,
        range: 4e3,
        rating: "G",
        reload: 4,
        rof: 7.14,
        shotspeed: 1600,
        thermload: .04,
        symbol: "Hpt_MultiCannon_Turret_Small"
      }, {
        ammo: 1e3,
        breachdmg: 2.6,
        breachmax: .8,
        breachmin: .4,
        class: 1,
        clip: 60,
        cost: 13980,
        damage: 2.9,
        damagedist: {
          K: 1
        },
        distdraw: .12,
        edID: 128671345,
        eddbID: 1481,
        falloff: 1800,
        grp: "mc",
        id: "e0",
        integrity: 40,
        mass: 2,
        mount: "F",
        name: "Enforcer",
        piercing: 30,
        power: .28,
        pp: "Pranav Antal",
        range: 4500,
        rating: "F",
        reload: 4,
        rof: 4.3,
        shotspeed: 1800,
        thermload: .2,
        symbol: "Hpt_MultiCannon_Fixed_Small_Strong"
      }, {
        ammo: 2100,
        breachdmg: 2,
        breachmax: .8,
        breachmin: .4,
        class: 2,
        clip: 100,
        cost: 38e3,
        damage: 2.19,
        damagedist: {
          K: 1
        },
        distdraw: .11,
        edID: 128049456,
        eddbID: 868,
        falloff: 1800,
        grp: "mc",
        id: "26",
        integrity: 51,
        mass: 4,
        mount: "F",
        piercing: 37,
        power: .46,
        range: 4e3,
        rating: "E",
        reload: 4,
        rof: 7.14,
        shotspeed: 1600,
        thermload: .18,
        symbol: "Hpt_MultiCannon_Fixed_Medium"
      }, {
        ammo: 2100,
        breachdmg: 1.5,
        breachmax: .8,
        breachmin: .4,
        class: 2,
        clip: 90,
        cost: 57e3,
        damage: 1.64,
        damagedist: {
          K: 1
        },
        distdraw: .14,
        edID: 128049460,
        eddbID: 870,
        falloff: 1800,
        grp: "mc",
        id: "27",
        integrity: 51,
        mass: 4,
        mount: "G",
        piercing: 37,
        power: .64,
        range: 4e3,
        rating: "F",
        reload: 5,
        rof: 7.69,
        shotspeed: 1600,
        thermload: .2,
        symbol: "Hpt_MultiCannon_Gimbal_Medium"
      }, {
        ammo: 2100,
        breachdmg: 1.1,
        breachmax: .8,
        breachmin: .4,
        class: 2,
        clip: 90,
        cost: 1292800,
        damage: 1.17,
        damagedist: {
          K: 1
        },
        distdraw: .06,
        edID: 128049463,
        eddbID: 872,
        falloff: 1800,
        grp: "mc",
        id: "28",
        integrity: 51,
        mass: 4,
        mount: "T",
        piercing: 37,
        power: .5,
        range: 4e3,
        rating: "F",
        reload: 4,
        rof: 6.25,
        shotspeed: 1600,
        thermload: .09,
        symbol: "Hpt_MultiCannon_Turret_Medium"
      }, {
        ammo: 2100,
        breachdmg: 3.5,
        breachmax: .8,
        breachmin: .4,
        class: 3,
        clip: 100,
        cost: 140400,
        damage: 3.92,
        damagedist: {
          K: 1
        },
        distdraw: .18,
        edID: 128049457,
        eddbID: 1541,
        falloff: 1800,
        grp: "mc",
        id: "7k",
        integrity: 64,
        mass: 8,
        mount: "F",
        piercing: 54,
        power: .64,
        range: 4e3,
        rating: "C",
        reload: 4,
        rof: 5.884,
        shotspeed: 1600,
        thermload: .28,
        symbol: "Hpt_MultiCannon_Fixed_Large"
      }, {
        ammo: 2100,
        breachdmg: 2.6,
        breachmax: .8,
        breachmin: .4,
        class: 3,
        clip: 90,
        cost: 578436,
        damage: 2.84,
        damagedist: {
          K: 1
        },
        distdraw: .25,
        edID: 128049461,
        eddbID: 1543,
        falloff: 1800,
        grp: "mc",
        id: "7l",
        integrity: 64,
        mass: 8,
        mount: "G",
        piercing: 54,
        power: .97,
        range: 4e3,
        rating: "C",
        reload: 5,
        rof: 6.665,
        shotspeed: 1600,
        thermload: .34,
        symbol: "Hpt_MultiCannon_Gimbal_Large"
      }, {
        ammo: 2100,
        breachdmg: 2,
        breachmax: .8,
        breachmin: .4,
        class: 3,
        clip: 90,
        cost: 3794601,
        damage: 2.2,
        damagedist: {
          K: 1
        },
        distdraw: .16,
        edID: 128049464,
        eddbID: 1658,
        falloff: 2e3,
        grp: "mc",
        id: "yH",
        integrity: 64,
        mass: 8,
        mount: "T",
        piercing: 54,
        power: .86,
        range: 4e3,
        rating: "E",
        reload: 4,
        rof: 5.3,
        shotspeed: 1600,
        thermload: .2,
        symbol: "Hpt_MultiCannon_Turret_Large"
      }, {
        ammo: 2100,
        breachdmg: 4.2,
        breachmax: .8,
        breachmin: .4,
        class: 4,
        clip: 100,
        cost: 1177600,
        damage: 4.625,
        damagedist: {
          K: 1
        },
        distdraw: .24,
        edID: 128049458,
        eddbID: 1542,
        falloff: 1800,
        grp: "mc",
        id: "7n",
        integrity: 80,
        mass: 16,
        mount: "F",
        piercing: 68,
        power: .73,
        range: 4e3,
        rating: "A",
        reload: 4,
        rof: 3.03,
        roundspershot: 2,
        shotspeed: 1600,
        thermload: .39,
        symbol: "Hpt_MultiCannon_Fixed_Huge"
      }, {
        ammo: 2100,
        breachdmg: 3.1,
        breachmax: .8,
        breachmin: .4,
        class: 4,
        clip: 90,
        cost: 6377600,
        damage: 3.46,
        damagedist: {
          K: 1
        },
        distdraw: .37,
        edID: 128681996,
        eddbID: 1546,
        falloff: 1800,
        grp: "mc",
        id: "7o",
        integrity: 80,
        mass: 16,
        mount: "G",
        piercing: 68,
        power: 1.22,
        range: 4e3,
        rating: "A",
        reload: 5,
        rof: 3.365,
        roundspershot: 2,
        shotspeed: 1600,
        thermload: .51,
        symbol: "Hpt_MultiCannon_Gimbal_Huge"
      } ],
      axmc: [ {
        ammo: 2100,
        breachdmg: 2.8,
        breachmax: .5,
        breachmin: .8,
        class: 2,
        clip: 100,
        cost: 379e3,
        damage: 3.3,
        damagedist: {
          X: 1
        },
        distdraw: .11,
        edID: 128788701,
        eddbID: 1618,
        falloff: 2e3,
        grp: "axmc",
        id: "x0",
        integrity: 51,
        mass: 4,
        mount: "F",
        piercing: 17,
        power: .46,
        range: 4e3,
        rating: "E",
        reload: 4,
        rof: 7.1,
        shotspeed: 1600,
        thermload: .2,
        symbol: "Hpt_ATMultiCannon_Fixed_Medium"
      }, {
        ammo: 2100,
        breachdmg: .4,
        breachmax: .5,
        breachmin: .5,
        class: 2,
        clip: 90,
        cost: 1826500,
        damage: 1.7,
        damagedist: {
          X: 1
        },
        distdraw: .06,
        edID: 128793059,
        eddbID: 1619,
        falloff: 2e3,
        grp: "axmc",
        id: "x1",
        integrity: 51,
        mass: 4,
        mount: "T",
        piercing: 17,
        power: .5,
        range: 4e3,
        rating: "F",
        reload: 4,
        rof: 6.2,
        shotspeed: 1600,
        thermload: .1,
        symbol: "Hpt_ATMultiCannon_Turret_Medium"
      }, {
        ammo: 2100,
        breachdmg: 5.2,
        breachmax: .5,
        breachmin: .8,
        class: 3,
        clip: 100,
        cost: 1181500,
        damage: 6.1,
        damagedist: {
          X: 1
        },
        distdraw: .18,
        edID: 128788702,
        eddbID: 1625,
        falloff: 2e3,
        grp: "axmc",
        id: "x2",
        integrity: 64,
        mass: 8,
        mount: "F",
        piercing: 33,
        power: .64,
        range: 4e3,
        rating: "C",
        reload: 4,
        rof: 5.9,
        shotspeed: 1600,
        thermload: .3,
        symbol: "Hpt_ATMultiCannon_Fixed_Large"
      }, {
        ammo: 2100,
        breachdmg: .8,
        breachmax: .5,
        breachmin: .5,
        class: 3,
        clip: 90,
        cost: 3821600,
        damage: 3.3,
        damagedist: {
          X: 1
        },
        distdraw: .06,
        edID: 128793060,
        eddbID: 1626,
        falloff: 2e3,
        grp: "axmc",
        id: "x3",
        integrity: 64,
        mass: 8,
        mount: "T",
        piercing: 33,
        power: .64,
        range: 4e3,
        rating: "E",
        reload: 4,
        rof: 6.2,
        shotspeed: 1600,
        thermload: .1,
        symbol: "Hpt_ATMultiCannon_Turret_Large"
      } ],
      c: [ {
        ammo: 120,
        breachdmg: 17.1,
        breachmax: .8,
        breachmin: .6,
        class: 1,
        clip: 6,
        cost: 21100,
        damage: 22.5,
        damagedist: {
          K: 1
        },
        distdraw: .46,
        edID: 128049438,
        eddbID: 850,
        falloff: 3e3,
        grp: "c",
        id: "1h",
        integrity: 40,
        mass: 2,
        mount: "F",
        piercing: 35,
        power: .34,
        range: 3e3,
        rating: "D",
        reload: 3,
        rof: .5,
        shotspeed: 1200,
        thermload: 1.4,
        symbol: "Hpt_Cannon_Fixed_Small"
      }, {
        ammo: 100,
        breachdmg: 13.2,
        breachmax: .9,
        breachmin: .6,
        class: 1,
        clip: 5,
        cost: 42200,
        damage: 16,
        damagedist: {
          K: 1
        },
        distdraw: .48,
        edID: 128049442,
        eddbID: 854,
        falloff: 3e3,
        grp: "c",
        id: "1i",
        integrity: 40,
        mass: 2,
        mount: "G",
        piercing: 35,
        power: .38,
        range: 3e3,
        rating: "E",
        reload: 4,
        rof: .52,
        shotspeed: 1e3,
        thermload: 1.3,
        symbol: "Hpt_Cannon_Gimbal_Small"
      }, {
        ammo: 100,
        breachdmg: 10.6,
        breachmax: .8,
        breachmin: .6,
        class: 1,
        clip: 5,
        cost: 506400,
        damage: 12.75,
        damagedist: {
          K: 1
        },
        distdraw: .22,
        edID: 128049445,
        eddbID: 857,
        falloff: 3e3,
        grp: "c",
        id: "1j",
        integrity: 40,
        mass: 2,
        mount: "T",
        piercing: 35,
        power: .32,
        range: 3e3,
        rating: "F",
        reload: 4,
        rof: .435,
        shotspeed: 1e3,
        thermload: .7,
        symbol: "Hpt_Cannon_Turret_Small"
      }, {
        ammo: 120,
        breachdmg: 28,
        breachmax: .8,
        breachmin: .6,
        class: 2,
        clip: 6,
        cost: 168430,
        damage: 36.5,
        damagedist: {
          K: 1
        },
        distdraw: .7,
        edID: 128049439,
        eddbID: 851,
        falloff: 3500,
        grp: "c",
        id: "1k",
        integrity: 51,
        mass: 4,
        mount: "F",
        piercing: 50,
        power: .49,
        range: 3500,
        rating: "D",
        reload: 3,
        rof: .465,
        shotspeed: 1051,
        thermload: 2.1,
        symbol: "Hpt_Cannon_Fixed_Medium"
      }, {
        ammo: 100,
        breachdmg: 20.3,
        breachmax: .8,
        breachmin: .6,
        class: 2,
        clip: 5,
        cost: 337600,
        damage: 24.5,
        damagedist: {
          K: 1
        },
        distdraw: .75,
        edID: 128049443,
        eddbID: 855,
        falloff: 3500,
        grp: "c",
        id: "1l",
        integrity: 51,
        mass: 4,
        mount: "G",
        piercing: 50,
        power: .54,
        range: 3500,
        rating: "D",
        reload: 4,
        rof: .485,
        shotspeed: 875,
        thermload: 1.9,
        symbol: "Hpt_Cannon_Gimbal_Medium"
      }, {
        ammo: 100,
        breachdmg: 16.3,
        breachmax: .8,
        breachmin: .6,
        class: 2,
        clip: 5,
        cost: 4051200,
        damage: 19.77,
        damagedist: {
          K: 1
        },
        distdraw: .34,
        edID: 128049446,
        eddbID: 858,
        falloff: 3500,
        grp: "c",
        id: "1m",
        integrity: 51,
        mass: 4,
        mount: "T",
        piercing: 50,
        power: .45,
        range: 3500,
        rating: "E",
        reload: 4,
        rof: .405,
        shotspeed: 875,
        thermload: 1,
        symbol: "Hpt_Cannon_Turret_Medium"
      }, {
        ammo: 120,
        breachdmg: 42.3,
        breachmax: .8,
        breachmin: .6,
        class: 3,
        clip: 6,
        cost: 675200,
        damage: 54.94,
        damagedist: {
          K: 1
        },
        distdraw: 1.07,
        edID: 128049440,
        eddbID: 852,
        falloff: 4e3,
        grp: "c",
        id: "1n",
        integrity: 64,
        mass: 8,
        mount: "F",
        piercing: 70,
        power: .67,
        range: 4e3,
        rating: "C",
        reload: 3,
        rof: .425,
        shotspeed: 959,
        thermload: 3.2,
        symbol: "Hpt_Cannon_Fixed_Large"
      }, {
        ammo: 100,
        breachdmg: 30.9,
        breachmax: .8,
        breachmin: .6,
        class: 3,
        clip: 5,
        cost: 1350400,
        damage: 37.39,
        damagedist: {
          K: 1
        },
        distdraw: 1.14,
        edID: 128671120,
        eddbID: 1383,
        falloff: 4e3,
        eps: .456,
        grp: "c",
        hps: 1.16,
        id: "1o",
        integrity: 64,
        mass: 8,
        mount: "G",
        piercing: 70,
        power: .75,
        range: 4e3,
        rating: "C",
        reload: 4,
        rof: .445,
        shotspeed: 800,
        thermload: 2.9,
        symbol: "Hpt_Cannon_Gimbal_Large"
      }, {
        ammo: 100,
        breachdmg: 25.14,
        breachmax: .8,
        breachmin: .6,
        class: 3,
        clip: 5,
        cost: 16204800,
        damage: 30.4,
        damagedist: {
          K: 1
        },
        distdraw: .53,
        edID: 128049447,
        eddbID: 859,
        falloff: 4e3,
        grp: "c",
        id: "1p",
        integrity: 64,
        mass: 8,
        mount: "T",
        piercing: 70,
        power: .64,
        range: 4e3,
        rating: "D",
        reload: 4,
        rof: .37,
        shotspeed: 800,
        thermload: 1.6,
        symbol: "Hpt_Cannon_Turret_Large"
      }, {
        ammo: 120,
        breachdmg: 63.2,
        breachmax: .8,
        breachmin: .6,
        class: 4,
        clip: 6,
        cost: 2700800,
        damage: 82.1,
        damagedist: {
          K: 1
        },
        distdraw: 1.61,
        edID: 128049441,
        eddbID: 853,
        falloff: 4500,
        eps: .644,
        grp: "c",
        hps: 1.92,
        id: "1q",
        integrity: 80,
        mass: 16,
        mount: "F",
        piercing: 90,
        power: .92,
        range: 4500,
        rating: "B",
        reload: 3,
        rof: .385,
        shotspeed: 900,
        thermload: 4.8,
        symbol: "Hpt_Cannon_Fixed_Huge"
      }, {
        ammo: 100,
        breachdmg: 46.7,
        breachmax: .8,
        breachmin: .6,
        class: 4,
        clip: 5,
        cost: 5401600,
        damage: 56.58,
        damagedist: {
          K: 1
        },
        distdraw: 1.72,
        edID: 128049444,
        eddbID: 856,
        falloff: 4500,
        eps: .688,
        grp: "c",
        hps: 1.76,
        id: "1r",
        integrity: 80,
        mass: 16,
        mount: "G",
        piercing: 90,
        power: 1.03,
        range: 4500,
        rating: "B",
        reload: 4,
        rof: .4,
        shotspeed: 750,
        thermload: 4.4,
        symbol: "Hpt_Cannon_Gimbal_Huge"
      } ],
      fc: [ {
        ammo: 180,
        breachdmg: 1.3,
        breachmax: .8,
        breachmin: .4,
        class: 1,
        clip: 3,
        cost: 36e3,
        damage: 1.43,
        damagedist: {
          K: 1
        },
        distdraw: .21,
        edID: 128049448,
        eddbID: 860,
        falloff: 1800,
        grp: "fc",
        id: "20",
        integrity: 40,
        jitter: 5,
        mass: 2,
        mount: "F",
        piercing: 20,
        power: .45,
        range: 2e3,
        rating: "E",
        reload: 5,
        rof: 5.555,
        roundspershot: 12,
        shotspeed: 667,
        thermload: .4,
        symbol: "Hpt_Slugshot_Fixed_Small"
      }, {
        ammo: 180,
        breachdmg: .9,
        breachmax: .8,
        breachmin: .4,
        class: 1,
        clip: 3,
        cost: 54720,
        damage: 1.01,
        damagedist: {
          K: 1
        },
        distdraw: .26,
        edID: 128049451,
        eddbID: 863,
        falloff: 1800,
        grp: "fc",
        id: "21",
        integrity: 40,
        jitter: 5,
        mass: 2,
        mount: "G",
        piercing: 20,
        power: .59,
        range: 2e3,
        rating: "E",
        reload: 5,
        rof: 5.88,
        roundspershot: 12,
        shotspeed: 667,
        thermload: .4,
        symbol: "Hpt_Slugshot_Gimbal_Small"
      }, {
        ammo: 180,
        breachdmg: .5,
        breachmax: .8,
        breachmin: .4,
        class: 1,
        clip: 3,
        cost: 182400,
        damage: .69,
        damagedist: {
          K: 1
        },
        distdraw: .1,
        edID: 128049453,
        eddbID: 865,
        falloff: 1800,
        grp: "fc",
        id: "22",
        integrity: 40,
        jitter: 5,
        mass: 2,
        mount: "T",
        piercing: 20,
        power: .42,
        range: 2e3,
        rating: "E",
        reload: 5,
        rof: 4.76,
        roundspershot: 12,
        shotspeed: 667,
        thermload: .2,
        symbol: "Hpt_Slugshot_Turret_Small"
      }, {
        ammo: 180,
        breachdmg: 2.3,
        breachmax: .8,
        breachmin: .4,
        class: 2,
        clip: 3,
        cost: 291840,
        damage: 3,
        damagedist: {
          K: 1
        },
        distdraw: .37,
        edID: 128049449,
        eddbID: 861,
        falloff: 1800,
        grp: "fc",
        id: "1s",
        integrity: 80,
        jitter: 5,
        mass: 4,
        mount: "F",
        piercing: 30,
        power: .74,
        range: 2e3,
        rating: "A",
        reload: 5,
        rof: 4.975,
        roundspershot: 12,
        shotspeed: 667,
        thermload: .7,
        symbol: "Hpt_Slugshot_Fixed_Medium"
      }, {
        ammo: 180,
        breachdmg: 1.8,
        breachmax: .8,
        breachmin: .4,
        class: 2,
        clip: 3,
        cost: 437761,
        damage: 2.275,
        damagedist: {
          K: 1
        },
        distdraw: .49,
        edID: 128049452,
        eddbID: 864,
        falloff: 1800,
        grp: "fc",
        id: "7e",
        integrity: 80,
        jitter: 5,
        mass: 4,
        mount: "G",
        piercing: 30,
        power: 1.03,
        range: 2e3,
        rating: "D",
        reload: 5,
        rof: 5.26,
        roundspershot: 12,
        shotspeed: 667,
        thermload: .8,
        symbol: "Hpt_Slugshot_Gimbal_Medium"
      }, {
        ammo: 180,
        breachdmg: 1.3,
        breachmax: .8,
        breachmin: .4,
        class: 2,
        clip: 3,
        cost: 1459200,
        damage: 1.7,
        damagedist: {
          K: 1
        },
        distdraw: .21,
        edID: 128049454,
        eddbID: 866,
        falloff: 1800,
        grp: "fc",
        id: "7f",
        integrity: 80,
        jitter: 5,
        mass: 4,
        mount: "T",
        piercing: 30,
        power: .79,
        range: 2e3,
        rating: "D",
        reload: 5,
        rof: 4.26,
        roundspershot: 12,
        shotspeed: 667,
        thermload: .4,
        symbol: "Hpt_Slugshot_Turret_Medium"
      }, {
        ammo: 180,
        breachdmg: 3.5,
        breachmax: .8,
        breachmin: .4,
        class: 3,
        clip: 3,
        cost: 1167360,
        damage: 4.57,
        damagedist: {
          K: 1
        },
        distdraw: .57,
        edID: 128049450,
        eddbID: 862,
        falloff: 1800,
        grp: "fc",
        id: "1t",
        integrity: 80,
        jitter: 5,
        mass: 8,
        mount: "F",
        piercing: 45,
        power: 1.02,
        range: 2e3,
        rating: "C",
        reload: 5,
        rof: 4.545,
        roundspershot: 12,
        shotspeed: 667,
        thermload: 1.1,
        symbol: "Hpt_Slugshot_Fixed_Large"
      }, {
        ammo: 180,
        breachdmg: 2.9,
        breachmax: .8,
        breachmin: .4,
        class: 3,
        clip: 3,
        cost: 1751040,
        damage: 3.77,
        damagedist: {
          K: 1
        },
        distdraw: .81,
        edID: 128671321,
        eddbID: 1454,
        falloff: 1800,
        grp: "fc",
        id: "1u",
        integrity: 80,
        jitter: 5,
        mass: 8,
        mount: "G",
        piercing: 45,
        power: 1.55,
        range: 2e3,
        rating: "C",
        reload: 5,
        rof: 4.76,
        roundspershot: 12,
        shotspeed: 667,
        thermload: 1.4,
        symbol: "Hpt_Slugshot_Gimbal_Large"
      }, {
        ammo: 180,
        breachdmg: 2.3,
        breachmax: .8,
        breachmin: .4,
        class: 3,
        clip: 3,
        cost: 5836800,
        damage: 2.98,
        damagedist: {
          K: 1
        },
        distdraw: .37,
        edID: 128671322,
        eddbID: 1455,
        falloff: 1800,
        grp: "fc",
        id: "1v",
        integrity: 80,
        jitter: 5,
        mass: 8,
        mount: "T",
        piercing: 45,
        power: 1.29,
        range: 2e3,
        rating: "C",
        reload: 5,
        rof: 4,
        roundspershot: 12,
        shotspeed: 667,
        thermload: .7,
        symbol: "Hpt_Slugshot_Turret_Large"
      }, {
        ammo: 180,
        breachdmg: 3.1,
        breachmax: .8,
        breachmin: .4,
        class: 3,
        clip: 3,
        cost: 1400830,
        damage: 3.4,
        damagedist: {
          K: 1
        },
        distdraw: .57,
        edID: 128671343,
        eddbID: 1478,
        falloff: 1800,
        grp: "fc",
        id: "pa",
        integrity: 64,
        jitter: 1.7,
        mass: 8,
        mount: "F",
        name: "Pacifier",
        piercing: 45,
        power: 1.02,
        pp: "Zachary Hudson",
        rating: "C",
        reload: 5,
        rof: 4.5,
        roundspershot: 12,
        shotspeed: 1e3,
        thermload: 1.1,
        symbol: "Hpt_Slugshot_Fixed_Large_Range"
      } ],
      rfl: [ {
        ammo: 32,
        breachdmg: 1.7,
        breachmax: 1,
        breachmin: 1,
        class: 2,
        clip: 1,
        cost: 261800,
        damage: 34,
        damagedist: {
          E: 1
        },
        distdraw: .24,
        edID: 128785626,
        eddbID: 1620,
        falloff: 1e5,
        grp: "rfl",
        id: "x8",
        integrity: 51,
        mass: 4,
        mount: "F",
        piercing: 60,
        power: 1.2,
        rating: "B",
        reload: 2,
        rof: .5,
        shotspeed: 550,
        thermload: 3.6,
        symbol: "Hpt_FlakMortar_Fixed_Medium"
      }, {
        ammo: 32,
        breachdmg: 1.7,
        breachmax: 1,
        breachmin: 1,
        class: 2,
        clip: 1,
        cost: 1259200,
        damage: 34,
        damagedist: {
          E: 1
        },
        distdraw: .24,
        edID: 128793058,
        eddbID: 1621,
        falloff: 1e5,
        grp: "rfl",
        id: "x9",
        integrity: 51,
        mass: 4,
        mount: "T",
        piercing: 60,
        power: 1.2,
        rating: "B",
        reload: 2,
        rof: .5,
        shotspeed: 550,
        thermload: 3.6,
        symbol: "Hpt_FlakMortar_Turret_Medium"
      } ],
      rg: [ {
        ammo: 80,
        breachdmg: 22.2,
        breachmax: .8,
        breachmin: .4,
        class: 1,
        clip: 1,
        cost: 51600,
        damage: 23.25,
        damagedist: {
          K: .5,
          T: .5
        },
        distdraw: 2.69,
        edID: 128049488,
        eddbID: 876,
        falloff: 1e3,
        grp: "rg",
        id: "29",
        integrity: 40,
        mass: 2,
        mount: "F",
        piercing: 100,
        power: 1.15,
        range: 3e3,
        rating: "D",
        reload: 1,
        rof: 1.6,
        thermload: 12,
        symbol: "Hpt_Railgun_Fixed_Small"
      }, {
        ammo: 80,
        breachdmg: 39.5,
        breachmax: .8,
        breachmin: .4,
        class: 2,
        clip: 1,
        cost: 412800,
        damage: 41.5,
        damagedist: {
          K: .5,
          T: .5
        },
        distdraw: 5.11,
        edID: 128049489,
        eddbID: 877,
        falloff: 1e3,
        grp: "rg",
        id: "2a",
        integrity: 51,
        mass: 4,
        mount: "F",
        piercing: 100,
        power: 1.63,
        range: 3e3,
        rating: "B",
        reload: 1,
        rof: 1.2,
        thermload: 20,
        symbol: "Hpt_Railgun_Fixed_Medium"
      }, {
        ammo: 240,
        breachdmg: 14.3,
        breachmax: .8,
        breachmin: .4,
        burst: 3,
        burstrof: 6,
        class: 2,
        clip: 3,
        cost: 619200,
        damage: 15,
        damagedist: {
          K: .5,
          T: .5
        },
        distdraw: 2,
        edID: 128671341,
        eddbID: 1484,
        falloff: 1e3,
        grp: "rg",
        id: "ih",
        integrity: 51,
        mass: 4,
        mount: "F",
        name: "Imperial Hammer",
        piercing: 100,
        power: 1.63,
        pp: "Arissa Lavigny-Duval",
        range: 3e3,
        rating: "B",
        reload: 1,
        rof: 4.1,
        thermload: 11,
        symbol: "Hpt_Railgun_Fixed_Medium_Burst"
      } ],
      pa: [ {
        ammo: 100,
        breachdmg: 44.2,
        breachmax: .8,
        breachmin: .4,
        class: 2,
        clip: 5,
        cost: 834200,
        damage: 54.3,
        damagedist: {
          A: .6,
          K: .2,
          T: .2
        },
        distdraw: 8.65,
        edID: 128049465,
        eddbID: 873,
        falloff: 2e3,
        grp: "pa",
        id: "1g",
        integrity: 51,
        mass: 4,
        mount: "F",
        piercing: 100,
        power: 1.43,
        range: 3500,
        rating: "C",
        reload: 6,
        rof: .33,
        shotspeed: 875,
        thermload: 15.6,
        symbol: "Hpt_PlasmaAccelerator_Fixed_Medium"
      }, {
        ammo: 100,
        breachdmg: 68,
        breachmax: .8,
        breachmin: .4,
        class: 3,
        clip: 5,
        cost: 3051200,
        damage: 83.4,
        damagedist: {
          A: .6,
          K: .2,
          T: .2
        },
        distdraw: 13.6,
        edID: 128049466,
        eddbID: 874,
        falloff: 2e3,
        grp: "pa",
        id: "2b",
        integrity: 64,
        mass: 8,
        mount: "F",
        piercing: 100,
        power: 1.97,
        range: 3500,
        rating: "B",
        reload: 6,
        rof: .29,
        shotspeed: 875,
        thermload: 21.8,
        symbol: "Hpt_PlasmaAccelerator_Fixed_Large"
      }, {
        ammo: 300,
        breachdmg: 30.9,
        breachmax: .8,
        breachmin: .4,
        class: 3,
        clip: 20,
        cost: 4119120,
        damage: 34.5,
        damagedist: {
          A: .6,
          K: .2,
          T: .2
        },
        distdraw: 5.5,
        edID: 128671339,
        eddbID: 1482,
        falloff: 2e3,
        grp: "pa",
        id: "Ap",
        integrity: 64,
        mass: 8,
        mount: "F",
        name: "Advanced Plasma Accelerator",
        piercing: 100,
        power: 1.97,
        pp: "Denton Patreus",
        range: 3500,
        rating: "B",
        reload: 6,
        rof: .8,
        shotspeed: 875,
        thermload: 11,
        symbol: "Hpt_PlasmaAccelerator_Fixed_Large_Advanced"
      }, {
        ammo: 100,
        breachdmg: 102,
        breachmax: .8,
        breachmin: .4,
        class: 4,
        clip: 5,
        cost: 13793600,
        damage: 125.2,
        damagedist: {
          A: .6,
          K: .2,
          T: .2
        },
        distdraw: 21.04,
        edID: 128049467,
        eddbID: 875,
        falloff: 2e3,
        grp: "pa",
        id: "2c",
        integrity: 80,
        mass: 16,
        mount: "F",
        piercing: 100,
        power: 2.63,
        range: 3500,
        rating: "A",
        reload: 6,
        rof: .25,
        shotspeed: 875,
        thermload: 29.5,
        symbol: "Hpt_PlasmaAccelerator_Fixed_Huge"
      } ],
      mr: [ {
        ammo: 16,
        breachdmg: 20,
        breachmax: 1,
        breachmin: 1,
        class: 1,
        clip: 8,
        cost: 32180,
        damage: 50,
        damagedist: {
          E: 1
        },
        distdraw: .24,
        edID: 128666724,
        eddbID: 1326,
        grp: "mr",
        id: "2d",
        integrity: 40,
        mass: 2,
        missile: "D",
        mount: "F",
        piercing: 60,
        power: .4,
        rating: "B",
        reload: 5,
        rof: .5,
        shotspeed: 750,
        thermload: 3.6,
        symbol: "Hpt_DumbfireMissileRack_Fixed_Small"
      }, {
        ammo: 6,
        breachdmg: 16,
        breachmax: 0,
        breachmin: 0,
        class: 1,
        clip: 6,
        cost: 72600,
        damage: 40,
        damagedist: {
          E: 1
        },
        distdraw: .24,
        edID: 128049492,
        eddbID: 878,
        grp: "mr",
        id: "2e",
        integrity: 40,
        mass: 2,
        missile: "S",
        mount: "F",
        piercing: 60,
        power: .6,
        rating: "B",
        reload: 12,
        rof: .333,
        shotspeed: 625,
        thermload: 3.6,
        symbol: "Hpt_BasicMissileRack_Fixed_Small"
      }, {
        ammo: 48,
        breachdmg: 20,
        breachmax: 1,
        breachmin: 1,
        class: 2,
        clip: 12,
        cost: 240400,
        damage: 50,
        damagedist: {
          E: 1
        },
        distdraw: .24,
        edID: 128666725,
        eddbID: 1327,
        eps: .12,
        grp: "mr",
        hps: 1.8,
        id: "2f",
        integrity: 51,
        mass: 4,
        missile: "D",
        mount: "F",
        piercing: 60,
        power: 1.2,
        rating: "B",
        reload: 5,
        rof: .5,
        shotspeed: 750,
        thermload: 3.6,
        symbol: "Hpt_DumbfireMissileRack_Fixed_Medium"
      }, {
        ammo: 18,
        breachdmg: 16,
        breachmax: 0,
        breachmin: 0,
        class: 2,
        clip: 6,
        cost: 512400,
        damage: 40,
        damagedist: {
          E: 1
        },
        distdraw: .24,
        edID: 128049493,
        eddbID: 879,
        eps: .07,
        grp: "mr",
        hps: 1.08,
        id: "2g",
        integrity: 51,
        mass: 4,
        missile: "S",
        mount: "F",
        piercing: 60,
        power: 1.2,
        rating: "B",
        reload: 12,
        rof: .333,
        shotspeed: 625,
        thermload: 3.6,
        symbol: "Hpt_BasicMissileRack_Fixed_Medium"
      }, {
        ammo: 48,
        breachdmg: 16,
        breachmax: 1,
        breachmin: 1,
        class: 2,
        clip: 12,
        cost: 1951040,
        damage: 40,
        damagedist: {
          E: 1
        },
        distdraw: .24,
        eddbID: 1559,
        grp: "mr",
        edID: 128732552,
        id: "1z",
        integrity: 51,
        mass: 4,
        missile: "D",
        mount: "F",
        name: "Rocket Propelled FSD Disruptor",
        piercing: 60,
        power: 1.2,
        pp: "Yuri Grom",
        rating: "B",
        reload: 5,
        rof: .333,
        shotspeed: 750,
        thermload: 3.6,
        symbol: "Hpt_DumbfireMissileRack_Fixed_Medium_Lasso"
      }, {
        ammo: 120,
        breachdmg: 3,
        breachmax: 0,
        breachmin: 0,
        class: 2,
        clip: 12,
        cost: 768600,
        damage: 7.5,
        damagedist: {
          E: 1
        },
        distdraw: .24,
        edID: 128671344,
        eddbID: 1480,
        eps: 1.92,
        grp: "mr",
        hps: 28.8,
        id: "Ph",
        integrity: 51,
        mass: 4,
        missile: "S",
        mount: "F",
        name: "Pack-Hound",
        piercing: 60,
        power: 1.2,
        pp: "Li Yong-Rui",
        rating: "B",
        reload: 5,
        rof: 2,
        roundspershot: 4,
        shotspeed: 600,
        thermload: 3.6,
        symbol: "Hpt_DrunkMissileRack_Fixed_Medium"
      }, {
        ammo: 96,
        breachdmg: 20,
        breachmax: 1,
        breachmin: 1,
        class: 3,
        clip: 12,
        cost: 1021501,
        damage: 50,
        damagedist: {
          E: 1
        },
        distdraw: .24,
        edID: 0,
        eddbID: 1657,
        grp: "mr",
        id: "yI",
        integrity: 64,
        mass: 8,
        missile: "D",
        mount: "F",
        piercing: 60,
        power: 1.62,
        rating: "A",
        reload: 5,
        rof: .5,
        shotspeed: 750,
        thermload: 3.6,
        symbol: "Hpt_DumbfireMissileRack_Fixed_Large"
      }, {
        ammo: 36,
        breachdmg: 16,
        breachmax: 0,
        breachmin: 0,
        class: 3,
        clip: 6,
        cost: 1471030,
        damage: 40,
        damagedist: {
          E: 1
        },
        distdraw: .24,
        edID: 128049494,
        eddbID: 1656,
        grp: "mr",
        id: "yJ",
        integrity: 64,
        mass: 8,
        missile: "S",
        mount: "F",
        piercing: 60,
        power: 1.62,
        rating: "A",
        reload: 12,
        rof: .333,
        shotspeed: 625,
        thermload: 3.6,
        symbol: "Hpt_BasicMissileRack_Fixed_Large"
      } ],
      axmr: [ {
        ammo: 64,
        breachdmg: .1,
        breachmax: .8,
        breachmin: 1,
        class: 2,
        clip: 8,
        cost: 540900,
        damage: 64,
        damagedist: {
          X: 1
        },
        distdraw: .14,
        edID: 128788699,
        eddbID: 1614,
        falloff: 1e4,
        grp: "axmr",
        id: "x4",
        integrity: 51,
        mass: 4,
        missile: "D",
        mount: "F",
        piercing: 60,
        power: 1.2,
        rating: "B",
        reload: 5,
        rof: .5,
        shotspeed: 750,
        thermload: 2.4,
        symbol: "Hpt_ATDumbfireMissile_Fixed_Medium"
      }, {
        ammo: 64,
        breachdmg: .1,
        breachmax: .8,
        breachmin: 1,
        class: 2,
        clip: 8,
        cost: 2022700,
        damage: 50,
        damagedist: {
          X: 1
        },
        distdraw: .08,
        edID: 128788704,
        eddbID: 1615,
        falloff: 1e4,
        grp: "axmr",
        id: "x5",
        integrity: 51,
        mass: 4,
        missile: "D",
        mount: "T",
        piercing: 60,
        power: 1.2,
        rating: "B",
        reload: 5,
        rof: .5,
        shotspeed: 750,
        thermload: 1.5,
        symbol: "Hpt_ATDumbfireMissile_Turret_Medium"
      }, {
        ammo: 128,
        breachdmg: .1,
        breachmax: .8,
        breachmin: 1,
        class: 3,
        clip: 12,
        cost: 1352250,
        damage: 64,
        damagedist: {
          X: 1
        },
        distdraw: .24,
        edID: 128788700,
        eddbID: 1623,
        falloff: 1e4,
        grp: "axmr",
        id: "x6",
        integrity: 64,
        mass: 8,
        missile: "D",
        mount: "F",
        piercing: 60,
        power: 1.62,
        rating: "A",
        reload: 5,
        rof: .5,
        shotspeed: 750,
        thermload: 3.6,
        symbol: "Hpt_ATDumbfireMissile_Fixed_Large"
      }, {
        ammo: 128,
        breachdmg: .1,
        breachmax: .8,
        breachmin: 1,
        class: 3,
        clip: 12,
        cost: 4056750,
        damage: 64,
        damagedist: {
          X: 1
        },
        distdraw: .14,
        edID: 128788705,
        eddbID: 1624,
        falloff: 1e4,
        grp: "axmr",
        id: "x7",
        integrity: 64,
        mass: 8,
        missile: "D",
        mount: "T",
        piercing: 60,
        power: 1.75,
        rating: "A",
        reload: 5,
        rof: .5,
        shotspeed: 750,
        thermload: 1.9,
        symbol: "Hpt_ATDumbfireMissile_Turret_Large"
      } ],
      tp: [ {
        ammo: 1,
        breachdmg: 60,
        breachmax: .8,
        breachmin: .6,
        class: 1,
        clip: 1,
        cost: 11200,
        damage: 120,
        damagedist: {
          E: 1
        },
        distdraw: 0,
        edID: 128049509,
        eddbID: 882,
        grp: "tp",
        id: "2h",
        integrity: 40,
        mass: 2,
        missile: "S",
        mount: "F",
        piercing: 1e4,
        power: .4,
        rating: "I",
        reload: 5,
        rof: 1,
        shotspeed: 250,
        thermload: 45,
        symbol: "Hpt_AdvancedTorpPylon_Fixed_Small"
      }, {
        ammo: 2,
        breachdmg: 60,
        breachmax: .8,
        breachmin: .6,
        class: 2,
        clip: 1,
        cost: 44800,
        damage: 120,
        damagedist: {
          E: 1
        },
        distdraw: 0,
        edID: 128049510,
        eddbID: 883,
        grp: "tp",
        id: "2i",
        integrity: 51,
        mass: 4,
        missile: "S",
        mount: "F",
        piercing: 1e4,
        power: .4,
        rating: "I",
        reload: 5,
        rof: 1,
        shotspeed: 250,
        thermload: 50,
        symbol: "Hpt_AdvancedTorpPylon_Fixed_Medium"
      }, {
        ammo: 4,
        breachdmg: 60,
        breachmax: 1,
        breachmin: 1,
        class: 3,
        clip: 4,
        cost: 157960,
        damage: 120,
        damagedist: {
          E: 1
        },
        distdraw: 0,
        edID: 128049511,
        eddbID: 1655,
        grp: "tp",
        id: "yK",
        integrity: 64,
        mass: 8,
        missile: "S",
        mount: "F",
        piercing: 1e4,
        power: .6,
        rating: "I",
        reload: 5,
        rof: 1,
        shotspeed: 250,
        thermload: 55,
        symbol: "Hpt_AdvancedTorpPylon_Fixed_Large"
      } ],
      nl: [ {
        ammo: 36,
        breachdmg: 0,
        breachmax: 0,
        breachmin: 0,
        class: 1,
        clip: 1,
        cost: 24260,
        damage: 44,
        damagedist: {
          E: .5,
          T: .5
        },
        distdraw: 0,
        edID: 128049500,
        eddbID: 880,
        grp: "nl",
        id: "2j",
        integrity: 40,
        mass: 2,
        mount: "F",
        piercing: 60,
        power: .4,
        rating: "I",
        reload: 2,
        rof: 1,
        thermload: 5,
        symbol: "Hpt_MineLauncher_Fixed_Small"
      }, {
        ammo: 36,
        breachdmg: 0,
        breachmax: 0,
        breachmin: 0,
        class: 1,
        clip: 1,
        cost: 36400,
        damage: 32,
        damagedist: {
          E: .5,
          T: .5
        },
        distdraw: 0,
        edID: 128671448,
        eddbID: 1523,
        grp: "nl",
        id: "kp",
        integrity: 40,
        mass: 2,
        mount: "F",
        name: "Shock Mine Launcher",
        piercing: 60,
        power: .4,
        rating: "I",
        reload: 2,
        rof: 1,
        thermload: 5,
        symbol: "Hpt_MineLauncher_Fixed_Small_Impulse"
      }, {
        ammo: 72,
        breachdmg: 0,
        breachmax: 0,
        breachmin: 0,
        class: 2,
        clip: 3,
        cost: 294080,
        damage: 44,
        damagedist: {
          E: .5,
          T: .5
        },
        distdraw: 0,
        edID: 128049501,
        eddbID: 881,
        grp: "nl",
        id: "2k",
        integrity: 51,
        mass: 4,
        mount: "F",
        piercing: 60,
        power: .4,
        rating: "I",
        reload: 6.6,
        rof: 1,
        thermload: 7.5,
        symbol: "Hpt_MineLauncher_Fixed_Medium"
      } ],
      ml: [ {
        breachdmg: .3,
        breachmax: .2,
        breachmin: .1,
        class: 1,
        cost: 6800,
        damage: 2,
        damagedist: {
          T: 1
        },
        distdraw: 1.5,
        edID: 128049525,
        eddbID: 888,
        falloff: 300,
        grp: "ml",
        id: "2l",
        integrity: 40,
        mass: 2,
        mount: "F",
        piercing: 18,
        power: .5,
        range: 500,
        rating: "D",
        thermload: 2,
        symbol: "Hpt_MiningLaser_Fixed_Small"
      }, {
        breachdmg: .3,
        breachmax: .2,
        breachmin: .1,
        class: 1,
        cost: 9400,
        damage: 2,
        damagedist: {
          T: 1
        },
        distdraw: 1.5,
        edID: 128740819,
        eddbID: 1587,
        falloff: 300,
        grp: "ml",
        id: "w0",
        integrity: 40,
        mass: 2,
        mount: "T",
        piercing: 18,
        power: .5,
        range: 500,
        rating: "D",
        thermload: 2,
        symbol: "Hpt_MiningLaser_Turret_Small"
      }, {
        breachdmg: 1.2,
        breachmax: .2,
        breachmin: .1,
        class: 1,
        cost: 13600,
        damage: 8,
        damagedist: {
          T: 1
        },
        distdraw: 1.75,
        edID: 128671347,
        eddbID: 1479,
        falloff: 400,
        grp: "ml",
        id: "ml",
        integrity: 40,
        mass: 2,
        mount: "F",
        name: "Mining Lance",
        piercing: 18,
        power: .7,
        pp: "Zemina Torval",
        range: 2e3,
        rating: "D",
        thermload: 6,
        symbol: "Hpt_MiningLaser_Fixed_Small_Advanced"
      }, {
        breachdmg: .6,
        breachmax: .2,
        breachmin: .1,
        class: 2,
        cost: 22580,
        damage: 4,
        damagedist: {
          T: 1
        },
        distdraw: 3,
        edID: 128049526,
        eddbID: 889,
        falloff: 300,
        grp: "ml",
        id: "2m",
        integrity: 51,
        mass: 2,
        mount: "F",
        piercing: 18,
        power: .75,
        range: 500,
        rating: "D",
        thermload: 4,
        symbol: "Hpt_MiningLaser_Fixed_Medium"
      }, {
        breachdmg: .6,
        breachmax: .2,
        breachmin: .1,
        class: 2,
        cost: 32578,
        damage: 4,
        damagedist: {
          T: 1
        },
        distdraw: 3,
        edID: 128740820,
        eddbID: 1588,
        falloff: 300,
        grp: "ml",
        id: "w1",
        integrity: 51,
        mass: 2,
        mount: "T",
        piercing: 18,
        power: .75,
        range: 500,
        rating: "D",
        thermload: 4,
        symbol: "Hpt_MiningLaser_Turret_Medium"
      } ],
      cs: [ {
        angle: 15,
        class: 0,
        cost: 13540,
        edID: 128662520,
        eddbID: 1227,
        grp: "cs",
        id: "0d",
        integrity: 32,
        mass: 1.3,
        power: .2,
        range: 2e3,
        rating: "E",
        scantime: 10,
        symbol: "Hpt_CargoScanner_Size0_Class1"
      }, {
        angle: 15,
        class: 0,
        cost: 40630,
        edID: 128662521,
        eddbID: 1228,
        grp: "cs",
        id: "0c",
        integrity: 24,
        mass: 1.3,
        power: .4,
        range: 2500,
        rating: "D",
        scantime: 10,
        symbol: "Hpt_CargoScanner_Size0_Class2"
      }, {
        angle: 15,
        class: 0,
        cost: 121900,
        edID: 128662522,
        eddbID: 1229,
        grp: "cs",
        id: "0b",
        integrity: 40,
        mass: 1.3,
        power: .8,
        range: 3e3,
        rating: "C",
        scantime: 10,
        symbol: "Hpt_CargoScanner_Size0_Class3"
      }, {
        angle: 15,
        class: 0,
        cost: 365700,
        edID: 128662523,
        eddbID: 1230,
        grp: "cs",
        id: "0a",
        integrity: 56,
        mass: 1.3,
        power: 1.6,
        range: 3500,
        rating: "B",
        scantime: 10,
        symbol: "Hpt_CargoScanner_Size0_Class4"
      }, {
        angle: 15,
        class: 0,
        cost: 1097100,
        edID: 128662524,
        eddbID: 1231,
        grp: "cs",
        id: "09",
        integrity: 48,
        mass: 1.3,
        power: 3.2,
        range: 4e3,
        rating: "A",
        scantime: 10,
        symbol: "Hpt_CargoScanner_Size0_Class5"
      } ],
      ws: [ {
        class: 0,
        cost: 13540,
        edID: 128662525,
        eddbID: 1232,
        grp: "ws",
        id: "0i",
        integrity: 32,
        mass: 1.3,
        power: .2,
        range: 2e3,
        rating: "E",
        scantime: 10,
        symbol: "Hpt_CloudScanner_Size0_Class1"
      }, {
        class: 0,
        cost: 40630,
        edID: 128662526,
        eddbID: 1233,
        grp: "ws",
        id: "0h",
        integrity: 24,
        mass: 1.3,
        power: .4,
        range: 2500,
        rating: "D",
        scantime: 10,
        symbol: "Hpt_CloudScanner_Size0_Class2"
      }, {
        class: 0,
        cost: 121900,
        edID: 128662527,
        eddbID: 1234,
        grp: "ws",
        id: "0g",
        integrity: 40,
        mass: 1.3,
        power: .8,
        range: 3e3,
        rating: "C",
        scantime: 10,
        symbol: "Hpt_CloudScanner_Size0_Class3"
      }, {
        class: 0,
        cost: 365700,
        edID: 128662528,
        eddbID: 1235,
        grp: "ws",
        id: "0f",
        integrity: 56,
        mass: 1.3,
        power: 1.6,
        range: 3500,
        rating: "B",
        scantime: 10,
        symbol: "Hpt_CloudScanner_Size0_Class4"
      }, {
        class: 0,
        cost: 1097100,
        edID: 128662529,
        eddbID: 1236,
        grp: "ws",
        id: "0e",
        integrity: 48,
        mass: 1.3,
        power: 3.2,
        range: 4e3,
        rating: "A",
        scantime: 10,
        symbol: "Hpt_CloudScanner_Size0_Class5"
      } ],
      kw: [ {
        class: 0,
        cost: 13540,
        edID: 128662530,
        eddbID: 1237,
        grp: "kw",
        id: "0n",
        integrity: 32,
        mass: 1.3,
        power: .2,
        range: 2e3,
        rating: "E",
        scantime: 10,
        symbol: "Hpt_CrimeScanner_Size0_Class1"
      }, {
        class: 0,
        cost: 40630,
        edID: 128662531,
        eddbID: 1238,
        grp: "kw",
        id: "0m",
        integrity: 24,
        mass: 1.3,
        power: .4,
        range: 2500,
        rating: "D",
        scantime: 10,
        symbol: "Hpt_CrimeScanner_Size0_Class2"
      }, {
        class: 0,
        cost: 121900,
        edID: 128662532,
        eddbID: 1239,
        grp: "kw",
        id: "0l",
        integrity: 40,
        mass: 1.3,
        power: .8,
        range: 3e3,
        rating: "C",
        scantime: 10,
        symbol: "Hpt_CrimeScanner_Size0_Class3"
      }, {
        class: 0,
        cost: 365700,
        edID: 128662533,
        eddbID: 1240,
        grp: "kw",
        id: "0k",
        integrity: 56,
        mass: 1.3,
        power: 1.6,
        range: 3500,
        rating: "B",
        scantime: 10,
        symbol: "Hpt_CrimeScanner_Size0_Class4"
      }, {
        class: 0,
        cost: 1097100,
        edID: 128662534,
        eddbID: 1241,
        grp: "kw",
        id: "0j",
        integrity: 48,
        mass: 1.3,
        power: 3.2,
        range: 4e3,
        rating: "A",
        scantime: 10,
        symbol: "Hpt_CrimeScanner_Size0_Class5"
      } ],
      sb: [ {
        class: 0,
        cost: 1e4,
        edID: 128668532,
        eddbID: 1368,
        grp: "sb",
        id: "08",
        integrity: 25,
        mass: .5,
        passive: 1,
        power: .2,
        rating: "E",
        shieldboost: .04,
        explres: 0,
        kinres: 0,
        thermres: 0,
        symbol: "Hpt_ShieldBooster_Size0_Class1"
      }, {
        class: 0,
        cost: 23e3,
        edID: 128668533,
        eddbID: 1369,
        grp: "sb",
        id: "07",
        integrity: 35,
        mass: 1,
        passive: 1,
        power: .5,
        rating: "D",
        shieldboost: .08,
        explres: 0,
        kinres: 0,
        thermres: 0,
        symbol: "Hpt_ShieldBooster_Size0_Class2"
      }, {
        class: 0,
        cost: 53e3,
        edID: 128668534,
        eddbID: 1370,
        grp: "sb",
        id: "06",
        integrity: 40,
        mass: 2,
        passive: 1,
        power: .7,
        rating: "C",
        shieldboost: .12,
        explres: 0,
        kinres: 0,
        thermres: 0,
        symbol: "Hpt_ShieldBooster_Size0_Class3"
      }, {
        class: 0,
        cost: 122e3,
        edID: 128668535,
        eddbID: 1371,
        grp: "sb",
        id: "05",
        integrity: 45,
        mass: 3,
        passive: 1,
        power: 1,
        rating: "B",
        shieldboost: .16,
        explres: 0,
        kinres: 0,
        thermres: 0,
        symbol: "Hpt_ShieldBooster_Size0_Class4"
      }, {
        class: 0,
        cost: 281e3,
        edID: 128668536,
        eddbID: 1372,
        grp: "sb",
        id: "04",
        integrity: 48,
        mass: 3.5,
        passive: 1,
        power: 1.2,
        rating: "A",
        shieldboost: .2,
        explres: 0,
        kinres: 0,
        thermres: 0,
        symbol: "Hpt_ShieldBooster_Size0_Class5"
      } ],
      ch: [ {
        ammo: 10,
        ammocost: 100,
        class: 0,
        clip: 1,
        cost: 8500,
        distdraw: 4,
        duration: 20,
        edID: 128049513,
        eddbID: 884,
        grp: "ch",
        id: "00",
        integrity: 20,
        mass: 1.3,
        name: "Chaff Launcher",
        passive: 1,
        power: .2,
        rating: "I",
        reload: 10,
        rof: 1,
        thermload: 4,
        symbol: "Hpt_ChaffLauncher_Tiny"
      } ],
      ec: [ {
        activepower: 4,
        chargeup: 3,
        class: 0,
        cooldown: 10,
        cost: 12500,
        edID: 128049516,
        eddbID: 885,
        grp: "ec",
        id: "01",
        integrity: 20,
        mass: 1.3,
        name: "Electronic Countermeasure",
        power: .2,
        range: 3e3,
        rating: "F",
        reload: 10,
        thermload: 4,
        symbol: "Hpt_ElectronicCountermeasure_Tiny"
      } ],
      hs: [ {
        ammo: 2,
        ammocost: 25,
        class: 0,
        clip: 1,
        cost: 3500,
        distdraw: 2,
        drain: 100,
        duration: 10,
        edID: 128049519,
        eddbID: 886,
        eps: .4,
        grp: "hs",
        id: "02",
        integrity: 20,
        mass: 1.3,
        name: "Heat Sink Launcher",
        passive: 1,
        power: .2,
        rating: "I",
        reload: 10,
        rof: .2,
        symbol: "Hpt_HeatSinkLauncher_Turret_Tiny"
      } ],
      po: [ {
        ammo: 1e4,
        burst: 4,
        burstrof: 15,
        class: 0,
        clip: 12,
        cost: 18550,
        damage: .2,
        damagedist: {
          K: 1
        },
        edID: 128049522,
        eddbID: 887,
        grp: "po",
        id: "03",
        integrity: 30,
        jitter: .75,
        mass: .5,
        name: "Point Defence",
        passive: 1,
        power: .2,
        range: 2500,
        rating: "I",
        reload: .4,
        rof: 10,
        shotspeed: 1e3,
        thermload: .1,
        symbol: "Hpt_PlasmaPointDefence_Turret_Tiny"
      } ],
      gpc: [ {
        ammo: 200,
        breachdmg: .4,
        breachmax: .8,
        breachmin: .5,
        class: 1,
        clip: 15,
        cost: 176500,
        damage: 1.7,
        damagedist: {
          A: 1
        },
        distdraw: .68,
        edID: 0,
        eddbID: 0,
        falloff: 1e3,
        grp: "gpc",
        id: "yN",
        integrity: 34,
        mass: 2,
        mount: "F",
        piercing: 65,
        power: 1.4,
        range: 3e3,
        rating: "D",
        reload: 3,
        rof: 5,
        shotspeed: 1200,
        thermload: 4.2,
        symbol: "Hpt_Guardian_PlasmaLauncher_Fixed_Small"
      }, {
        ammo: 200,
        breachdmg: .3,
        breachmax: .8,
        breachmin: .5,
        class: 1,
        clip: 15,
        cost: 484050,
        damage: 1.1,
        damagedist: {
          A: 1
        },
        distdraw: .8,
        edID: 0,
        eddbID: 0,
        falloff: 1e3,
        grp: "gpc",
        id: "yM",
        integrity: 34,
        mass: 2,
        mount: "T",
        piercing: 65,
        power: 1.6,
        range: 3e3,
        rating: "F",
        reload: 3,
        rof: 5,
        shotspeed: 1200,
        thermload: 5,
        symbol: "Hpt_Guardian_PlasmaLauncher_Turret_Small"
      }, {
        ammo: 200,
        breachdmg: .7,
        breachmax: .8,
        breachmin: .5,
        class: 2,
        clip: 15,
        cost: 567761,
        damage: 5,
        damagedist: {
          A: 1
        },
        distdraw: 1.25,
        edID: 128833998,
        eddbID: 874,
        falloff: 1e3,
        grp: "gpc",
        id: "0J",
        integrity: 42,
        mass: 4,
        mount: "F",
        piercing: 80,
        power: 2.13,
        range: 3500,
        rating: "B",
        reload: 3,
        rof: 5,
        shotspeed: 1200,
        thermload: 5.2,
        symbol: "Hpt_Guardian_PlasmaLauncher_Fixed_Medium"
      }, {
        ammo: 200,
        breachdmg: 1,
        breachmax: .8,
        breachmin: .5,
        class: 2,
        clip: 15,
        cost: 1659200,
        damage: 4,
        damagedist: {
          A: 1
        },
        distdraw: 1.4,
        edID: 128833999,
        eddbID: 874,
        falloff: 1e3,
        grp: "gpc",
        id: "0I",
        integrity: 42,
        mass: 4,
        mount: "T",
        piercing: 80,
        power: 2.01,
        range: 3500,
        rating: "E",
        reload: 3,
        rof: 5,
        shotspeed: 1200,
        thermload: 5.8,
        symbol: "Hpt_Guardian_PlasmaLauncher_Turret_Medium"
      }, {
        rating: "C",
        class: 3,
        grp: "gpc",
        id: "xu",
        eddbID: 0,
        edID: 128834783,
        mount: "F",
        cost: 1423301,
        mass: 8,
        integrity: 51,
        power: 3.1,
        damage: 3.4,
        distdraw: 2.42,
        thermload: 6.2,
        piercing: 95,
        range: 3e3,
        shotspeed: 1200,
        rof: 5,
        clip: 15,
        ammo: 200,
        reload: 3,
        breachdmg: 1,
        breachmin: .5,
        breachmax: .8,
        symbol: "Hpt_Guardian_PlasmaLauncher_Fixed_Large",
        damagedist: {
          A: 1
        },
        falloff: 1e3
      }, {
        ammo: 200,
        breachdmg: .8,
        breachmax: .8,
        breachmin: .5,
        class: 3,
        clip: 15,
        cost: 5495200,
        damage: 3.3,
        damagedist: {
          A: 1
        },
        distdraw: 2.6,
        edID: 128834784,
        eddbID: 0,
        falloff: 1e3,
        grp: "gpc",
        id: "xv",
        integrity: 51,
        mass: 8,
        mount: "T",
        piercing: 95,
        power: 2.53,
        range: 3e3,
        rating: "D",
        reload: 3,
        rof: 5,
        shotspeed: 1200,
        thermload: 6.4,
        symbol: "Hpt_Guardian_PlasmaLauncher_Turret_Large"
      } ],
      ggc: [ {
        ammo: 80,
        breachdmg: 11,
        breachmax: .4,
        breachmin: .2,
        class: 1,
        clip: 1,
        cost: 167250,
        damage: 22,
        damagedist: {
          T: 1
        },
        distdraw: 3.8,
        edID: 0,
        eddbID: 0,
        falloff: 1500,
        grp: "ggc",
        id: "yL",
        integrity: 40,
        mass: 2,
        mount: "F",
        piercing: 140,
        power: 1.91,
        range: 3e3,
        rating: "D",
        reload: 1,
        rof: 1.2,
        thermload: 15,
        symbol: "Hpt_Guardian_GaussCannon_Fixed_Small",
        requirements: {
          horizons: true
        }
      }, {
        ammo: 80,
        breachdmg: 35,
        breachmax: .4,
        breachmin: .2,
        burst: 1,
        burstrof: .83,
        class: 2,
        clip: 1,
        cost: 543801,
        damage: 70,
        damagedist: {
          T: 1
        },
        distdraw: 7.2,
        edID: 128833687,
        eddbID: 876,
        falloff: 1500,
        grp: "ggc",
        id: "0H",
        integrity: 42,
        mass: 4,
        mount: "F",
        piercing: 140,
        power: 2.61,
        range: 3e3,
        rating: "B",
        reload: 1,
        rof: 1.205,
        thermload: 25,
        symbol: "Hpt_Guardian_GaussCannon_Fixed_Medium",
        requirements: {
          horizons: true
        }
      } ],
      sfn: [ {
        class: 0,
        cost: 63e3,
        edID: 128771884,
        eddbID: 1622,
        grp: "sfn",
        id: "Sn",
        integrity: 35,
        mass: 1.3,
        name: "Shutdown Field Neutraliser",
        passive: 1,
        power: .2,
        activepower: .25,
        rating: "F",
        cooldown: 10,
        duration: 1,
        range: 3e3,
        symbol: "Hpt_AntiUnknownShutdown_Tiny"
      } ],
      xs: [ {
        class: 0,
        cost: 365698,
        edID: 128793115,
        eddbID: 1616,
        grp: "xs",
        id: "xs",
        integrity: 56,
        mass: 1.3,
        name: "Xeno Scanner",
        power: .2,
        range: 500,
        rating: "E",
        boot: 2,
        scantime: 10,
        angle: 23,
        symbol: "Hpt_XenoScanner_Basic_Tiny"
      } ],
      tbsc: [ {
        rating: "C",
        class: 3,
        grp: "tbsc",
        id: "yG",
        eddbID: 0,
        edID: 128834780,
        mount: "F",
        cost: 1015750,
        mass: 8,
        integrity: 64,
        power: .89,
        damage: 18.1,
        distdraw: .92,
        thermload: 2.7,
        piercing: 60,
        range: 3e3,
        shotspeed: 1200,
        rof: 10,
        roundspershot: 0,
        clip: 16,
        ammo: 240,
        reload: 6,
        breachdmg: 12.7,
        breachmin: .4,
        breachmax: .8,
        jitter: 0,
        symbol: "Hpt_PlasmaShockCannon_Fixed_Large",
        damagedist: {
          K: 1
        },
        falloff: 2500
      }, {
        rating: "C",
        class: 3,
        grp: "tbsc",
        ammo: 240,
        mass: 8,
        eddbID: 0,
        breachdmg: 10.4,
        breachmax: .8,
        breachmin: .4,
        clip: 16,
        damage: 14.9,
        damagedist: {
          K: 1
        },
        distdraw: 1.07,
        falloff: 2500,
        integrity: 64,
        mount: "G",
        piercing: 60,
        power: .89,
        range: 3e3,
        rof: 10,
        shotspeed: 1200,
        thermload: 3.1,
        cost: 2249050,
        reload: 6,
        id: "2N",
        edID: 128834781,
        symbol: "Hpt_PlasmaShockCannon_Gimbal_Large"
      }, {
        rating: "D",
        class: 3,
        grp: "tbsc",
        symbol: "Hpt_PlasmaShockCannon_Turret_Large",
        id: "xz",
        eddbID: 0,
        edID: 128834782,
        mount: "T",
        cost: 6050201,
        mass: 8,
        integrity: 64,
        power: .64,
        damage: 12.32,
        distdraw: .79,
        thermload: 2.2,
        piercing: 60,
        range: 3e3,
        shotspeed: 1200,
        rof: 10,
        clip: 16,
        ammo: 240,
        reload: 6,
        breachdmg: 8.6,
        breachmin: .4,
        breachmax: .8,
        damagedist: {
          K: 1
        },
        falloff: 2500
      }, {
        rating: "D",
        class: 2,
        grp: "tbsc",
        ammo: 240,
        mass: 4,
        eddbID: 0,
        breachdmg: 7.1,
        breachmax: .8,
        breachmin: .4,
        clip: 16,
        damage: 14.9,
        damagedist: {
          K: 1
        },
        distdraw: .58,
        falloff: 2500,
        integrity: 51,
        mount: "G",
        piercing: 40,
        power: .89,
        range: 3e3,
        rof: 10,
        reload: 6,
        shotspeed: 1200,
        thermload: 2.1,
        cost: 565200,
        id: "2O",
        edID: 128834003,
        symbol: "Hpt_PlasmaShockCannon_Gimbal_Medium"
      }, {
        grp: "tbsc",
        symbol: "Hpt_PlasmaShockCannon_Fixed_Medium",
        id: "y0",
        eddbID: 0,
        edID: 128834002,
        class: 2,
        rating: "D",
        mount: "F",
        cost: 367501,
        mass: 4,
        integrity: 51,
        power: .57,
        damage: 13,
        distdraw: .47,
        thermload: 1.8,
        piercing: 40,
        range: 3e3,
        shotspeed: 1200,
        rof: 10,
        clip: 16,
        ammo: 240,
        reload: 6,
        breachdmg: 9.1,
        breachmin: .4,
        breachmax: .6,
        damagedist: {
          K: 1
        },
        falloff: 2500
      }, {
        rating: "E",
        class: 2,
        grp: "tbsc",
        id: "0",
        eddbID: 0,
        edID: 128834004,
        mount: "T",
        cost: 1359200,
        mass: 4,
        integrity: 51,
        power: .5,
        damage: 9,
        distdraw: .39,
        thermload: 1.2,
        piercing: 40,
        range: 3e3,
        shotspeed: 1200,
        rof: 10,
        roundspershot: 0,
        clip: 16,
        ammo: 240,
        reload: 6,
        breachdmg: 6.3,
        breachmin: .4,
        breachmax: .8,
        jitter: 0,
        symbol: "Hpt_PlasmaShockCannon_Turret_Medium",
        damagedist: {
          K: 1
        },
        falloff: 2500
      }, {
        rating: "D",
        class: 1,
        grp: "tbsc",
        id: "yQ",
        eddbID: 0,
        edID: 0,
        mount: "F",
        cost: 65941,
        mass: 2,
        integrity: 40,
        power: .41,
        damage: 8.6,
        distdraw: .27,
        thermload: 1.1,
        piercing: 25,
        range: 3e3,
        shotspeed: 1200,
        rof: 10,
        clip: 16,
        ammo: 240,
        reload: 6,
        breachdmg: 6,
        breachmin: .4,
        breachmax: .6,
        symbol: "Hpt_PlasmaShockCannon_Fixed_Small",
        damagedist: {
          K: 1
        },
        falloff: 2500
      }, {
        rating: "E",
        class: 1,
        grp: "tbsc",
        ammo: 240,
        mass: 2,
        eddbID: 0,
        breachdmg: 4.8,
        breachmax: .8,
        breachmin: .4,
        clip: 16,
        damage: 6.9,
        damagedist: {
          K: 1
        },
        distdraw: .39,
        falloff: 2500,
        integrity: 40,
        mount: "G",
        piercing: 25,
        power: .47,
        range: 3e3,
        rof: 10,
        shotspeed: 1200,
        thermload: 1.5,
        cost: 137501,
        reload: 6,
        id: "yR",
        edID: 0,
        symbol: "Hpt_PlasmaShockCannon_Gimbal_Small"
      }, {
        rating: "F",
        class: 1,
        grp: "tbsc",
        symbol: "Hpt_PlasmaShockCannon_Turret_Small",
        id: "yS",
        eddbID: 0,
        edID: 0,
        mount: "T",
        cost: 364e3,
        mass: 2,
        integrity: 40,
        power: .54,
        damage: 4.5,
        distdraw: .21,
        thermload: .7,
        piercing: 25,
        range: 3e3,
        shotspeed: 1200,
        rof: 10,
        clip: 16,
        ammo: 240,
        reload: 6,
        breachdmg: 3.1,
        breachmin: .4,
        breachmax: .8,
        damagedist: {
          K: 1
        },
        falloff: 2500
      } ],
      tbem: [ {
        rating: "B",
        class: 2,
        grp: "tbem",
        id: "xt",
        eddbID: 0,
        edID: 128833995,
        mount: "F",
        cost: 480501,
        mass: 4,
        integrity: 51,
        power: 1.2,
        damage: 5,
        distdraw: .08,
        thermload: 1.5,
        piercing: 60,
        shotspeed: 750,
        rof: .5,
        clip: 8,
        ammo: 64,
        reload: 5,
        breachdmg: 0,
        breachmin: .8,
        breachmax: 1,
        symbol: "Hpt_CausticMissile_Fixed_Medium",
        damagedist: {
          E: 1
        }
      } ],
      tbrfl: [ {
        rating: "B",
        class: 2,
        grp: "tbrfl",
        id: "xy",
        eddbID: 0,
        edID: 128833996,
        mount: "F",
        cost: 353761,
        mass: 4,
        integrity: 51,
        power: 1.2,
        damage: 13,
        distdraw: .24,
        thermload: 3.6,
        piercing: 80,
        shotspeed: 550,
        rof: .5,
        clip: 1,
        ammo: 72,
        reload: 2,
        breachdmg: 6.5,
        breachmin: 1,
        breachmax: 1,
        symbol: "Hpt_FlechetteLauncher_Fixed_Medium",
        damagedist: {
          K: 1
        }
      }, {
        rating: "B",
        class: 2,
        grp: "tbrfl",
        id: "yF",
        eddbID: 0,
        edID: 128833997,
        mount: "T",
        cost: 1279200,
        mass: 4,
        integrity: 51,
        power: 1.2,
        damage: 13,
        distdraw: .24,
        thermload: 3.6,
        piercing: 70,
        shotspeed: 550,
        rof: .5,
        clip: 1,
        ammo: 72,
        reload: 2,
        breachdmg: 6.5,
        breachmin: 1,
        breachmax: 1,
        symbol: "Hpt_FlechetteLauncher_Turret_Medium",
        damagedist: {
          K: 1
        }
      } ],
      gsc: [ {
        rating: "D",
        class: 1,
        grp: "gsc",
        id: "yO",
        eddbID: 0,
        edID: 0,
        mount: "F",
        cost: 151650,
        mass: 2,
        integrity: 34,
        power: .87,
        damage: 2,
        distdraw: .42,
        thermload: .7,
        piercing: 30,
        range: 1700,
        shotspeed: 1133,
        rof: 1.7,
        roundspershot: 12,
        clip: 5,
        ammo: 180,
        reload: 5,
        breachdmg: 1.6,
        breachmin: .6,
        breachmax: .8,
        jitter: 5,
        symbol: "Hpt_Guardian_ShardCannon_Fixed_Small",
        damagedist: {
          T: 1
        },
        falloff: 1700
      }, {
        rating: "F",
        class: 1,
        grp: "gsc",
        id: "yP",
        eddbID: 0,
        edID: 0,
        mount: "T",
        cost: 502e3,
        mass: 2,
        integrity: 34,
        power: .72,
        damage: 1.1,
        distdraw: .36,
        thermload: .6,
        piercing: 30,
        range: 1700,
        shotspeed: 1133,
        rof: 1.7,
        roundspershot: 12,
        clip: 5,
        ammo: 180,
        reload: 5,
        breachdmg: .9,
        breachmin: .6,
        breachmax: .8,
        jitter: 5,
        symbol: "Hpt_Guardian_ShardCannon_Turret_Small",
        damagedist: {
          T: 1
        },
        falloff: 1700
      }, {
        rating: "A",
        class: 2,
        grp: "gsc",
        id: "2P",
        eddbID: 0,
        edID: 128834e3,
        mount: "F",
        cost: 507761,
        mass: 4,
        integrity: 42,
        power: 1.21,
        damage: 3.7,
        distdraw: .65,
        thermload: 1.2,
        piercing: 45,
        range: 1700,
        shotspeed: 1133,
        rof: 1.7,
        roundspershot: 12,
        clip: 5,
        ammo: 180,
        reload: 5,
        breachdmg: 3,
        breachmin: .6,
        breachmax: .8,
        jitter: 5,
        symbol: "Hpt_Guardian_ShardCannon_Fixed_Medium",
        damagedist: {
          T: 1
        },
        falloff: 1700
      }, {
        rating: "D",
        class: 2,
        grp: "gsc",
        id: "xw",
        eddbID: 0,
        edID: 0,
        mount: "T",
        cost: 1767001,
        mass: 4,
        integrity: 42,
        power: 1.16,
        damage: 2.4,
        distdraw: .57,
        thermload: 1.1,
        piercing: 45,
        range: 1700,
        shotspeed: 1133,
        rof: 1.7,
        roundspershot: 12,
        clip: 5,
        ammo: 180,
        reload: 5,
        breachdmg: 1.9,
        breachmin: .6,
        breachmax: .8,
        jitter: 5,
        symbol: "Hpt_Guardian_ShardCannon_Turret_Medium",
        damagedist: {
          T: 1
        },
        falloff: 1700
      }, {
        rating: "C",
        class: 3,
        grp: "gsc",
        id: "2Q",
        eddbID: 0,
        edID: 128834778,
        mount: "F",
        cost: 1461350,
        mass: 8,
        integrity: 51,
        power: 1.68,
        damage: 5.2,
        distdraw: 1.4,
        thermload: 2.2,
        piercing: 60,
        range: 1700,
        shotspeed: 1133,
        rof: 1.7,
        clip: 5,
        ammo: 180,
        roundspershot: 12,
        reload: 5,
        breachdmg: 4.2,
        breachmin: .6,
        breachmax: .8,
        jitter: 5,
        symbol: "Hpt_Guardian_ShardCannon_Fixed_Large",
        damagedist: {
          T: 1
        },
        falloff: 1700
      }, {
        rating: "D",
        class: 3,
        grp: "gsc",
        id: "xx",
        eddbID: 0,
        edID: 128834779,
        mount: "T",
        cost: 5865026,
        mass: 8,
        integrity: 51,
        power: 1.39,
        damage: 3.4,
        distdraw: 1.2,
        thermload: 2,
        piercing: 60,
        range: 1700,
        shotspeed: 1133,
        rof: 1.7,
        clip: 5,
        ammo: 180,
        roundspershot: 12,
        reload: 5,
        breachdmg: 2.7,
        breachmin: .6,
        breachmax: .8,
        jitter: 5,
        symbol: "Hpt_Guardian_ShardCannon_Turret_Large",
        damagedist: {
          T: 1
        },
        falloff: 1700
      } ]
    },
    internal: {
      am: [ {
        ammo: 1e3,
        ammocost: 1,
        class: 1,
        cost: 1e4,
        edID: 128667598,
        eddbID: 1328,
        grp: "am",
        id: "0c",
        power: .54,
        rating: "E",
        repair: 12,
        symbol: "Int_Repairer_Size1_Class1"
      }, {
        ammo: 900,
        ammocost: 1,
        class: 1,
        cost: 3e4,
        edID: 128667606,
        eddbID: 1336,
        grp: "am",
        id: "0b",
        power: .72,
        rating: "D",
        repair: 14.4,
        symbol: "Int_Repairer_Size1_Class2"
      }, {
        ammo: 1e3,
        ammocost: 1,
        class: 1,
        cost: 9e4,
        edID: 128667614,
        eddbID: 1344,
        grp: "am",
        id: "0a",
        power: .9,
        rating: "C",
        repair: 20,
        symbol: "Int_Repairer_Size1_Class3"
      }, {
        ammo: 1200,
        ammocost: 1,
        class: 1,
        cost: 27e4,
        edID: 128667622,
        eddbID: 1352,
        grp: "am",
        id: "09",
        power: 1.04,
        rating: "B",
        repair: 27.6,
        symbol: "Int_Repairer_Size1_Class4"
      }, {
        ammo: 1100,
        ammocost: 1,
        class: 1,
        cost: 81e4,
        edID: 128667630,
        eddbID: 1360,
        grp: "am",
        id: "08",
        power: 1.26,
        rating: "A",
        repair: 30.8,
        symbol: "Int_Repairer_Size1_Class5"
      }, {
        ammo: 2300,
        ammocost: 1,
        class: 2,
        cost: 18e3,
        edID: 128667599,
        eddbID: 1329,
        grp: "am",
        id: "0h",
        power: .68,
        rating: "E",
        repair: 27.6,
        symbol: "Int_Repairer_Size2_Class1"
      }, {
        ammo: 2100,
        ammocost: 1,
        class: 2,
        cost: 54e3,
        edID: 128667607,
        eddbID: 1337,
        grp: "am",
        id: "0g",
        power: .9,
        rating: "D",
        repair: 33.6,
        symbol: "Int_Repairer_Size2_Class2"
      }, {
        ammo: 2300,
        ammocost: 1,
        class: 2,
        cost: 162e3,
        edID: 128667615,
        eddbID: 1345,
        grp: "am",
        id: "0f",
        power: 1.13,
        rating: "C",
        repair: 46,
        symbol: "Int_Repairer_Size2_Class3"
      }, {
        ammo: 2800,
        ammocost: 1,
        class: 2,
        cost: 486e3,
        edID: 128667623,
        eddbID: 1353,
        grp: "am",
        id: "0e",
        power: 1.29,
        rating: "B",
        repair: 64.4,
        symbol: "Int_Repairer_Size2_Class4"
      }, {
        ammo: 2500,
        ammocost: 1,
        class: 2,
        cost: 1458e3,
        edID: 128667631,
        eddbID: 1361,
        grp: "am",
        id: "0d",
        power: 1.58,
        rating: "A",
        repair: 70,
        symbol: "Int_Repairer_Size2_Class5"
      }, {
        ammo: 3600,
        ammocost: 1,
        class: 3,
        cost: 32400,
        edID: 128667600,
        eddbID: 1330,
        grp: "am",
        id: "0m",
        power: .81,
        rating: "E",
        repair: 43.2,
        symbol: "Int_Repairer_Size3_Class1"
      }, {
        ammo: 3200,
        ammocost: 1,
        class: 3,
        cost: 97200,
        edID: 128667608,
        eddbID: 1338,
        grp: "am",
        id: "0l",
        power: 1.08,
        rating: "D",
        repair: 51.2,
        symbol: "Int_Repairer_Size3_Class2"
      }, {
        ammo: 3600,
        ammocost: 1,
        class: 3,
        cost: 291600,
        edID: 128667616,
        eddbID: 1346,
        grp: "am",
        id: "0k",
        power: 1.35,
        rating: "C",
        repair: 72,
        symbol: "Int_Repairer_Size3_Class3"
      }, {
        ammo: 4300,
        ammocost: 1,
        class: 3,
        cost: 874800,
        edID: 128667624,
        eddbID: 1354,
        grp: "am",
        id: "0j",
        power: 1.55,
        rating: "B",
        repair: 98.9,
        symbol: "Int_Repairer_Size3_Class4"
      }, {
        ammo: 4e3,
        ammocost: 1,
        class: 3,
        cost: 2624400,
        edID: 128667632,
        eddbID: 1362,
        grp: "am",
        id: "0i",
        power: 1.89,
        rating: "A",
        repair: 112,
        symbol: "Int_Repairer_Size3_Class5"
      }, {
        ammo: 4900,
        ammocost: 1,
        class: 4,
        cost: 58320,
        edID: 128667601,
        eddbID: 1331,
        grp: "am",
        id: "0r",
        power: .99,
        rating: "E",
        repair: 58.8,
        symbol: "Int_Repairer_Size4_Class1"
      }, {
        ammo: 4400,
        ammocost: 1,
        class: 4,
        cost: 174960,
        edID: 128667609,
        eddbID: 1339,
        grp: "am",
        id: "0q",
        power: 1.32,
        rating: "D",
        repair: 70.4,
        symbol: "Int_Repairer_Size4_Class2"
      }, {
        ammo: 4900,
        ammocost: 1,
        class: 4,
        cost: 524880,
        edID: 128667617,
        eddbID: 1347,
        grp: "am",
        id: "0p",
        power: 1.65,
        rating: "C",
        repair: 98,
        symbol: "Int_Repairer_Size4_Class3"
      }, {
        ammo: 5900,
        ammocost: 1,
        class: 4,
        cost: 1574640,
        edID: 128667625,
        eddbID: 1355,
        grp: "am",
        id: "0o",
        power: 1.9,
        rating: "B",
        repair: 135.7,
        symbol: "Int_Repairer_Size4_Class4"
      }, {
        ammo: 5400,
        ammocost: 1,
        class: 4,
        cost: 4723920,
        edID: 128667633,
        eddbID: 1363,
        grp: "am",
        id: "0n",
        power: 2.31,
        rating: "A",
        repair: 151.2,
        symbol: "Int_Repairer_Size4_Class5"
      }, {
        ammo: 6100,
        ammocost: 1,
        class: 5,
        cost: 104980,
        edID: 128667602,
        eddbID: 1332,
        grp: "am",
        id: "10",
        power: 1.17,
        rating: "E",
        repair: 73.2,
        symbol: "Int_Repairer_Size5_Class1"
      }, {
        ammo: 5500,
        ammocost: 1,
        class: 5,
        cost: 314930,
        edID: 128667610,
        eddbID: 1340,
        grp: "am",
        id: "0v",
        power: 1.56,
        rating: "D",
        repair: 88,
        symbol: "Int_Repairer_Size5_Class2"
      }, {
        ammo: 6100,
        ammocost: 1,
        class: 5,
        cost: 944780,
        edID: 128667618,
        eddbID: 1348,
        grp: "am",
        id: "0u",
        power: 1.95,
        rating: "C",
        repair: 122,
        symbol: "Int_Repairer_Size5_Class3"
      }, {
        ammo: 7300,
        ammocost: 1,
        class: 5,
        cost: 2834350,
        edID: 128667626,
        eddbID: 1356,
        grp: "am",
        id: "0t",
        power: 2.24,
        rating: "B",
        repair: 167.9,
        symbol: "Int_Repairer_Size5_Class4"
      }, {
        ammo: 6700,
        ammocost: 1,
        class: 5,
        cost: 8503060,
        edID: 128667634,
        eddbID: 1364,
        grp: "am",
        id: "0s",
        power: 2.73,
        rating: "A",
        repair: 187.6,
        symbol: "Int_Repairer_Size5_Class5"
      }, {
        ammo: 7400,
        ammocost: 1,
        class: 6,
        cost: 188960,
        edID: 128667603,
        eddbID: 1333,
        grp: "am",
        id: "15",
        power: 1.4,
        rating: "E",
        repair: 88.8,
        symbol: "Int_Repairer_Size6_Class1"
      }, {
        ammo: 6700,
        ammocost: 1,
        class: 6,
        cost: 566870,
        edID: 128667611,
        eddbID: 1341,
        grp: "am",
        id: "14",
        power: 1.86,
        rating: "D",
        repair: 107.2,
        symbol: "Int_Repairer_Size6_Class2"
      }, {
        ammo: 7400,
        ammocost: 1,
        class: 6,
        cost: 1700610,
        edID: 128667619,
        eddbID: 1349,
        grp: "am",
        id: "13",
        power: 2.33,
        rating: "C",
        repair: 148,
        symbol: "Int_Repairer_Size6_Class3"
      }, {
        ammo: 8900,
        ammocost: 1,
        class: 6,
        cost: 5101830,
        edID: 128667627,
        eddbID: 1357,
        grp: "am",
        id: "12",
        power: 2.67,
        rating: "B",
        repair: 204.7,
        symbol: "Int_Repairer_Size6_Class4"
      }, {
        ammo: 8100,
        ammocost: 1,
        class: 6,
        cost: 15305500,
        edID: 128667635,
        eddbID: 1365,
        grp: "am",
        id: "11",
        power: 3.26,
        rating: "A",
        repair: 226.8,
        symbol: "Int_Repairer_Size6_Class5"
      }, {
        ammo: 8700,
        ammocost: 1,
        class: 7,
        cost: 340120,
        edID: 128667604,
        eddbID: 1334,
        grp: "am",
        id: "1a",
        power: 1.58,
        rating: "E",
        repair: 104.4,
        symbol: "Int_Repairer_Size7_Class1"
      }, {
        ammo: 7800,
        ammocost: 1,
        class: 7,
        cost: 1020370,
        edID: 128667612,
        eddbID: 1342,
        grp: "am",
        id: "19",
        power: 2.1,
        rating: "D",
        repair: 124.8,
        symbol: "Int_Repairer_Size7_Class2"
      }, {
        ammo: 8700,
        ammocost: 1,
        class: 7,
        cost: 3061100,
        edID: 128667620,
        eddbID: 1350,
        grp: "am",
        id: "18",
        power: 2.63,
        rating: "C",
        repair: 174,
        symbol: "Int_Repairer_Size7_Class3"
      }, {
        ammo: 10400,
        ammocost: 1,
        class: 7,
        cost: 9183300,
        edID: 128667628,
        eddbID: 1358,
        grp: "am",
        id: "17",
        power: 3.02,
        rating: "B",
        repair: 239.2,
        symbol: "Int_Repairer_Size7_Class4"
      }, {
        ammo: 9600,
        ammocost: 1,
        class: 7,
        cost: 27549900,
        edID: 128667636,
        eddbID: 1366,
        grp: "am",
        id: "16",
        power: 3.68,
        rating: "A",
        repair: 268.8,
        symbol: "Int_Repairer_Size7_Class5"
      }, {
        ammo: 1e4,
        ammocost: 1,
        class: 8,
        cost: 612220,
        edID: 128667605,
        eddbID: 1335,
        grp: "am",
        id: "1f",
        power: 1.8,
        rating: "E",
        repair: 120,
        symbol: "Int_Repairer_Size8_Class1"
      }, {
        ammo: 9e3,
        ammocost: 1,
        class: 8,
        cost: 1836660,
        edID: 128667613,
        eddbID: 1343,
        grp: "am",
        id: "1e",
        power: 2.4,
        rating: "D",
        repair: 144,
        symbol: "Int_Repairer_Size8_Class2"
      }, {
        ammo: 1e4,
        ammocost: 1,
        class: 8,
        cost: 5509980,
        edID: 128667621,
        eddbID: 1351,
        grp: "am",
        id: "1d",
        power: 3,
        rating: "C",
        repair: 200,
        symbol: "Int_Repairer_Size8_Class3"
      }, {
        ammo: 12e3,
        ammocost: 1,
        class: 8,
        cost: 16529940,
        edID: 128667629,
        eddbID: 1359,
        grp: "am",
        id: "1c",
        power: 3.45,
        rating: "B",
        repair: 276,
        symbol: "Int_Repairer_Size8_Class4"
      }, {
        ammo: 11e3,
        ammocost: 1,
        class: 8,
        cost: 49589820,
        edID: 128667637,
        eddbID: 1367,
        grp: "am",
        id: "1b",
        power: 4.2,
        rating: "A",
        repair: 308,
        symbol: "Int_Repairer_Size8_Class5"
      } ],
      bsg: [ {
        brokenregen: 2.4,
        class: 1,
        cost: 7710,
        distdraw: .6,
        edID: 128671331,
        eddbID: 1530,
        explres: .5,
        grp: "bsg",
        id: "B6",
        integrity: 40,
        kinres: .4,
        mass: 1.3,
        maxmass: 63,
        maxmul: 1.4,
        minmass: 13,
        minmul: .4,
        optmass: 25,
        optmul: .9,
        power: 1.2,
        rating: "C",
        regen: 1.8,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size1_Class3_Fast"
      }, {
        brokenregen: 2.4,
        class: 2,
        cost: 26710,
        distdraw: .6,
        edID: 128671332,
        eddbID: 1531,
        explres: .5,
        grp: "bsg",
        id: "B5",
        integrity: 51,
        kinres: .4,
        mass: 2.5,
        maxmass: 138,
        maxmul: 1.4,
        minmass: 28,
        minmul: .4,
        optmass: 55,
        optmul: .9,
        power: 1.5,
        rating: "C",
        regen: 1.8,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size2_Class3_Fast"
      }, {
        brokenregen: 2.8,
        class: 3,
        cost: 84650,
        distdraw: .6,
        edID: 128671333,
        eddbID: 1532,
        explres: .5,
        grp: "bsg",
        id: "B4",
        integrity: 64,
        kinres: .4,
        mass: 5,
        maxmass: 413,
        maxmul: 1.4,
        minmass: 83,
        minmul: .4,
        optmass: 165,
        optmul: .9,
        power: 1.8,
        rating: "C",
        regen: 1.8,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size3_Class3_Fast"
      }, {
        brokenregen: 3.8,
        class: 4,
        cost: 268350,
        distdraw: .6,
        edID: 128671334,
        eddbID: 1533,
        explres: .5,
        grp: "bsg",
        id: "B3",
        integrity: 80,
        kinres: .4,
        mass: 10,
        maxmass: 713,
        maxmul: 1.4,
        minmass: 143,
        minmul: .4,
        optmass: 285,
        optmul: .9,
        power: 2.2,
        rating: "C",
        regen: 1.8,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size4_Class3_Fast"
      }, {
        brokenregen: 5.6,
        class: 5,
        cost: 850660,
        distdraw: .6,
        edID: 128671335,
        eddbID: 1534,
        explres: .5,
        grp: "bsg",
        id: "B2",
        integrity: 96,
        kinres: .4,
        mass: 20,
        maxmass: 1013,
        maxmul: 1.4,
        minmass: 203,
        minmul: .4,
        optmass: 405,
        optmul: .9,
        power: 2.6,
        rating: "C",
        regen: 2.2,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size5_Class3_Fast"
      }, {
        brokenregen: 8,
        class: 6,
        cost: 2696600,
        distdraw: .6,
        edID: 128671336,
        eddbID: 1535,
        explres: .5,
        grp: "bsg",
        id: "B1",
        integrity: 113,
        kinres: .4,
        mass: 40,
        maxmass: 1350,
        maxmul: 1.4,
        minmass: 270,
        minmul: .4,
        optmass: 540,
        optmul: .9,
        power: 3.1,
        rating: "C",
        regen: 3.2,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size6_Class3_Fast"
      }, {
        brokenregen: 11,
        class: 7,
        cost: 8548186,
        distdraw: .6,
        edID: 128671337,
        eddbID: 1536,
        explres: .5,
        grp: "bsg",
        id: "B0",
        integrity: 131,
        kinres: .4,
        mass: 80,
        maxmass: 2650,
        maxmul: 1.4,
        minmass: 530,
        minmul: .4,
        optmass: 1060,
        optmul: .9,
        power: 3.5,
        rating: "C",
        regen: 4.4,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size7_Class3_Fast"
      }, {
        brokenregen: 14.4,
        class: 8,
        cost: 27097750,
        distdraw: .6,
        edID: 128671338,
        eddbID: 1537,
        explres: .5,
        grp: "bsg",
        id: "B7",
        integrity: 150,
        kinres: .4,
        mass: 160,
        maxmass: 4500,
        maxmul: 1.4,
        minmass: 900,
        minmul: .4,
        optmass: 1800,
        optmul: .9,
        power: 4,
        rating: "C",
        regen: 5.8,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size8_Class3_Fast"
      } ],
      cr: [ {
        cargo: 2,
        class: 1,
        cost: 1e3,
        edID: 128064338,
        eddbID: 1191,
        grp: "cr",
        id: "00",
        rating: "E",
        mass: 0,
        symbol: "Int_CargoRack_Size1_Class1"
      }, {
        cargo: 4,
        class: 2,
        cost: 3250,
        edID: 128064339,
        eddbID: 1192,
        grp: "cr",
        id: "01",
        rating: "E",
        mass: 0,
        symbol: "Int_CargoRack_Size2_Class1"
      }, {
        cargo: 8,
        class: 3,
        cost: 10560,
        edID: 128064340,
        eddbID: 1193,
        grp: "cr",
        id: "02",
        rating: "E",
        mass: 0,
        symbol: "Int_CargoRack_Size3_Class1"
      }, {
        cargo: 16,
        class: 4,
        cost: 34330,
        edID: 128064341,
        eddbID: 1194,
        grp: "cr",
        id: "03",
        rating: "E",
        mass: 0,
        symbol: "Int_CargoRack_Size4_Class1"
      }, {
        cargo: 32,
        class: 5,
        cost: 111570,
        edID: 128064342,
        eddbID: 1195,
        grp: "cr",
        id: "04",
        rating: "E",
        mass: 0,
        symbol: "Int_CargoRack_Size5_Class1"
      }, {
        cargo: 64,
        class: 6,
        cost: 362590,
        edID: 128064343,
        eddbID: 1196,
        grp: "cr",
        id: "05",
        rating: "E",
        mass: 0,
        symbol: "Int_CargoRack_Size6_Class1"
      }, {
        cargo: 128,
        class: 7,
        cost: 1178420,
        edID: 128064344,
        eddbID: 1197,
        grp: "cr",
        id: "06",
        rating: "E",
        mass: 0,
        symbol: "Int_CargoRack_Size7_Class1"
      }, {
        cargo: 256,
        class: 8,
        cost: 3829870,
        edID: 128064345,
        eddbID: 1198,
        grp: "cr",
        id: "07",
        rating: "E",
        mass: 0,
        symbol: "Int_CargoRack_Size8_Class1"
      }, {
        cargo: 1,
        class: 1,
        cost: 6250,
        edID: 128681641,
        eddbID: 1553,
        grp: "cr",
        id: "1w",
        name: "Corrosion Resistant",
        rating: "E",
        mass: 0,
        symbol: "Int_CorrosionProofCargoRack_Size1_Class1"
      }, {
        cargo: 2,
        class: 1,
        cost: 12563,
        edID: 128681992,
        eddbID: 1552,
        grp: "cr",
        id: "1y",
        name: "Corrosion Resistant",
        rating: "F",
        mass: 0,
        symbol: "Int_CorrosionProofCargoRack_Size1_Class2"
      }, {
        cargo: 4,
        class: 2,
        cost: 12563,
        edID: 128681992,
        eddbID: 1552,
        grp: "cr",
        id: "0V",
        name: "Corrosion Resistant",
        rating: "F",
        mass: 0,
        symbol: "Int_CorrosionProofCargoRack_Size2_Class1"
      }, {
        cargo: 16,
        class: 4,
        cost: 94330,
        edID: 128833944,
        eddbID: 1552,
        grp: "cr",
        id: "0W",
        name: "Corrosion Resistant",
        rating: "E",
        mass: 0,
        symbol: "Int_CorrosionProofCargoRack_Size4_Class1"
      } ],
      cc: [ {
        class: 1,
        cost: 600,
        edID: 128671229,
        eddbID: 1394,
        grp: "cc",
        id: "C1",
        mass: .5,
        maximum: 1,
        power: .14,
        range: .8,
        rating: "E",
        time: 300,
        symbol: "Int_DroneControl_Collection_Size1_Class1"
      }, {
        class: 1,
        cost: 1200,
        edID: 128671230,
        eddbID: 1395,
        grp: "cc",
        id: "C2",
        mass: .5,
        maximum: 1,
        power: .18,
        range: .6,
        rating: "D",
        time: 600,
        symbol: "Int_DroneControl_Collection_Size1_Class2"
      }, {
        class: 1,
        cost: 2400,
        edID: 128671231,
        eddbID: 1396,
        grp: "cc",
        id: "C3",
        mass: 1.3,
        maximum: 1,
        power: .23,
        range: 1,
        rating: "C",
        time: 510,
        symbol: "Int_DroneControl_Collection_Size1_Class3"
      }, {
        class: 1,
        cost: 4800,
        edID: 128671232,
        eddbID: 1397,
        grp: "cc",
        id: "C4",
        mass: 2,
        maximum: 1,
        power: .28,
        range: 1.4,
        rating: "B",
        time: 420,
        symbol: "Int_DroneControl_Collection_Size1_Class4"
      }, {
        class: 1,
        cost: 9600,
        edID: 128671233,
        eddbID: 1398,
        grp: "cc",
        id: "C5",
        mass: 2,
        maximum: 1,
        power: .32,
        range: 1.2,
        rating: "A",
        time: 720,
        symbol: "Int_DroneControl_Collection_Size1_Class5"
      }, {
        class: 3,
        cost: 5400,
        edID: 128671234,
        eddbID: 1399,
        grp: "cc",
        id: "C6",
        mass: 2,
        maximum: 2,
        power: .2,
        range: .88,
        rating: "E",
        time: 300,
        symbol: "Int_DroneControl_Collection_Size3_Class1"
      }, {
        class: 3,
        cost: 10800,
        edID: 128671235,
        eddbID: 1400,
        grp: "cc",
        id: "C7",
        mass: 2,
        maximum: 2,
        power: .27,
        range: .66,
        rating: "D",
        time: 600,
        symbol: "Int_DroneControl_Collection_Size3_Class2"
      }, {
        class: 3,
        cost: 21600,
        edID: 128671236,
        eddbID: 1401,
        grp: "cc",
        id: "C8",
        mass: 5,
        maximum: 2,
        power: .34,
        range: 1.1,
        rating: "C",
        time: 510,
        symbol: "Int_DroneControl_Collection_Size3_Class3"
      }, {
        class: 3,
        cost: 43200,
        edID: 128671237,
        eddbID: 1402,
        grp: "cc",
        id: "C9",
        mass: 8,
        maximum: 2,
        power: .41,
        range: 1.54,
        rating: "B",
        time: 420,
        symbol: "Int_DroneControl_Collection_Size3_Class4"
      }, {
        class: 3,
        cost: 86400,
        edID: 128671238,
        eddbID: 1403,
        grp: "cc",
        id: "C0",
        mass: 8,
        maximum: 2,
        power: .48,
        range: 1.32,
        rating: "A",
        time: 720,
        symbol: "Int_DroneControl_Collection_Size3_Class5"
      }, {
        class: 5,
        cost: 48600,
        edID: 128671239,
        eddbID: 1404,
        grp: "cc",
        id: "Ca",
        mass: 8,
        maximum: 3,
        power: .3,
        range: 1.04,
        rating: "E",
        time: 300,
        symbol: "Int_DroneControl_Collection_Size5_Class1"
      }, {
        class: 5,
        cost: 97200,
        edID: 128671240,
        eddbID: 1405,
        grp: "cc",
        id: "Cb",
        mass: 8,
        maximum: 3,
        power: .4,
        range: .78,
        rating: "D",
        time: 600,
        symbol: "Int_DroneControl_Collection_Size5_Class2"
      }, {
        class: 5,
        cost: 194400,
        edID: 128671241,
        eddbID: 1406,
        grp: "cc",
        id: "Cc",
        mass: 20,
        maximum: 3,
        power: .5,
        range: 1.3,
        rating: "C",
        time: 510,
        symbol: "Int_DroneControl_Collection_Size5_Class3"
      }, {
        class: 5,
        cost: 388800,
        edID: 128671242,
        eddbID: 1407,
        grp: "cc",
        id: "Cd",
        mass: 32,
        maximum: 3,
        power: .6,
        range: 1.82,
        rating: "B",
        time: 420,
        symbol: "Int_DroneControl_Collection_Size5_Class4"
      }, {
        class: 5,
        cost: 777600,
        edID: 128671243,
        eddbID: 1408,
        grp: "cc",
        id: "Ce",
        mass: 32,
        maximum: 3,
        power: .7,
        range: 1.56,
        rating: "A",
        time: 720,
        symbol: "Int_DroneControl_Collection_Size5_Class5"
      }, {
        class: 7,
        cost: 437400,
        edID: 128671244,
        eddbID: 1409,
        grp: "cc",
        id: "Cf",
        mass: 32,
        maximum: 4,
        power: .41,
        range: 1.36,
        rating: "E",
        time: 300,
        symbol: "Int_DroneControl_Collection_Size7_Class1"
      }, {
        class: 7,
        cost: 874800,
        edID: 128671245,
        eddbID: 1410,
        grp: "cc",
        id: "Cg",
        mass: 32,
        maximum: 4,
        power: .55,
        range: 1.02,
        rating: "D",
        time: 600,
        symbol: "Int_DroneControl_Collection_Size7_Class2"
      }, {
        class: 7,
        cost: 1749600,
        edID: 128671246,
        eddbID: 1411,
        grp: "cc",
        id: "Ch",
        mass: 80,
        maximum: 4,
        power: .69,
        range: 1.7,
        rating: "C",
        time: 510,
        symbol: "Int_DroneControl_Collection_Size7_Class3"
      }, {
        class: 7,
        cost: 3499200,
        edID: 128671247,
        eddbID: 1412,
        grp: "cc",
        id: "Ci",
        mass: 128,
        maximum: 4,
        power: .83,
        range: 2.38,
        rating: "B",
        time: 420,
        symbol: "Int_DroneControl_Collection_Size7_Class4"
      }, {
        class: 7,
        cost: 6998400,
        edID: 128671248,
        eddbID: 1413,
        grp: "cc",
        id: "Cj",
        mass: 128,
        maximum: 4,
        power: .97,
        range: 2.04,
        rating: "A",
        time: 720,
        symbol: "Int_DroneControl_Collection_Size7_Class5"
      } ],
      dc: [ {
        class: 1,
        cost: 4500,
        edID: 128049549,
        eddbID: 890,
        grp: "dc",
        id: "24",
        integrity: 10,
        name: "Standard Docking Computer",
        power: .39,
        rating: "E",
        symbol: "Int_DockingComputer_Standard"
      } ],
      dtl: [ {
        class: 1,
        cost: 3600,
        edID: 128793941,
        eddbID: 1632,
        grp: "dtl",
        id: "y1",
        mass: 1.3,
        maximum: 1,
        power: .18,
        range: .6,
        rating: "E",
        symbol: "Int_DroneControl_Decontamination_Size1_Class1"
      }, {
        class: 3,
        cost: 16201,
        edID: 128793942,
        eddbID: 1633,
        grp: "dtl",
        id: "y2",
        mass: 2,
        maximum: 2,
        power: .2,
        range: .88,
        rating: "E",
        symbol: "Int_DroneControl_Decontamination_Size3_Class1"
      }, {
        class: 5,
        cost: 145801,
        edID: 128793943,
        eddbID: 1634,
        grp: "dtl",
        id: "y3",
        mass: 20,
        maximum: 3,
        power: .5,
        range: 1.3,
        rating: "E",
        symbol: "Int_DroneControl_Decontamination_Size5_Class1"
      }, {
        class: 7,
        cost: 1312201,
        edID: 128793944,
        eddbID: 1635,
        grp: "dtl",
        id: "y4",
        mass: 128,
        maximum: 4,
        power: .97,
        range: 2.04,
        rating: "E",
        symbol: "Int_DroneControl_Decontamination_Size7_Class1"
      } ],
      fh: [ {
        bays: 1,
        class: 5,
        cost: 575644,
        edID: 128727930,
        eddbID: 1562,
        fightercost: 1030,
        grp: "fh",
        id: "fr",
        integrity: 60,
        mass: 20,
        power: .25,
        rating: "D",
        rebuildsperbay: 6,
        symbol: "Int_FighterBay_Size5_Class1"
      }, {
        bays: 2,
        class: 6,
        cost: 1869350,
        edID: 128727931,
        eddbID: 1561,
        fightercost: 1030,
        grp: "fh",
        id: "fm",
        integrity: 80,
        mass: 40,
        power: .35,
        rating: "D",
        rebuildsperbay: 8,
        symbol: "Int_FighterBay_Size6_Class1"
      }, {
        bays: 2,
        class: 7,
        edID: 128727932,
        cost: 2369330,
        eddbID: 1560,
        fightercost: 1030,
        grp: "fh",
        id: "fh",
        integrity: 120,
        mass: 60,
        power: .35,
        rating: "D",
        rebuildsperbay: 15,
        symbol: "Int_FighterBay_Size7_Class1"
      } ],
      fi: [ {
        boot: 15,
        class: 1,
        cost: 12e3,
        edID: 128666704,
        eddbID: 1306,
        facinglimit: 50,
        grp: "fi",
        id: "6a",
        integrity: 32,
        mass: 1.3,
        power: .14,
        ranget: 3,
        rating: "E",
        symbol: "Int_FSDInterdictor_Size1_Class1"
      }, {
        boot: 15,
        class: 1,
        cost: 36e3,
        edID: 128666708,
        eddbID: 1310,
        facinglimit: 50,
        grp: "fi",
        id: "69",
        integrity: 24,
        mass: .5,
        power: .18,
        ranget: 4,
        rating: "D",
        symbol: "Int_FSDInterdictor_Size1_Class2"
      }, {
        boot: 15,
        class: 1,
        cost: 108e3,
        edID: 128666712,
        eddbID: 1314,
        facinglimit: 50,
        grp: "fi",
        id: "68",
        integrity: 40,
        mass: 1.3,
        power: .23,
        ranget: 5,
        rating: "C",
        symbol: "Int_FSDInterdictor_Size1_Class3"
      }, {
        boot: 15,
        class: 1,
        cost: 324e3,
        edID: 128666716,
        eddbID: 1318,
        facinglimit: 50,
        grp: "fi",
        id: "67",
        integrity: 56,
        mass: 2,
        power: .28,
        ranget: 6,
        rating: "B",
        symbol: "Int_FSDInterdictor_Size1_Class4"
      }, {
        boot: 15,
        class: 1,
        cost: 972e3,
        edID: 128666720,
        eddbID: 1322,
        facinglimit: 50,
        grp: "fi",
        id: "66",
        integrity: 48,
        mass: 1.3,
        power: .32,
        ranget: 7,
        rating: "A",
        symbol: "Int_FSDInterdictor_Size1_Class5"
      }, {
        boot: 15,
        class: 2,
        cost: 33600,
        edID: 128666705,
        eddbID: 1307,
        facinglimit: 50,
        grp: "fi",
        id: "6f",
        integrity: 41,
        mass: 2.5,
        power: .17,
        ranget: 6,
        rating: "E",
        symbol: "Int_FSDInterdictor_Size2_Class1"
      }, {
        boot: 15,
        class: 2,
        cost: 100800,
        edID: 128666709,
        eddbID: 1311,
        facinglimit: 50,
        grp: "fi",
        id: "6e",
        integrity: 51,
        mass: 1,
        power: .22,
        ranget: 7,
        rating: "D",
        symbol: "Int_FSDInterdictor_Size2_Class2"
      }, {
        boot: 15,
        class: 2,
        cost: 302400,
        edID: 128666713,
        eddbID: 1315,
        facinglimit: 50,
        grp: "fi",
        id: "6d",
        integrity: 51,
        mass: 2.5,
        power: .28,
        ranget: 8,
        rating: "C",
        symbol: "Int_FSDInterdictor_Size2_Class3"
      }, {
        boot: 15,
        class: 2,
        cost: 907200,
        edID: 128666717,
        eddbID: 1319,
        facinglimit: 50,
        grp: "fi",
        id: "6c",
        integrity: 71,
        mass: 4,
        power: .34,
        ranget: 9,
        rating: "B",
        symbol: "Int_FSDInterdictor_Size2_Class4"
      }, {
        boot: 15,
        class: 2,
        cost: 2721600,
        edID: 128666721,
        eddbID: 1323,
        facinglimit: 50,
        grp: "fi",
        id: "6b",
        integrity: 61,
        mass: 2.5,
        power: .39,
        ranget: 10,
        rating: "A",
        symbol: "Int_FSDInterdictor_Size2_Class5"
      }, {
        boot: 15,
        class: 3,
        cost: 94080,
        edID: 128666706,
        eddbID: 1308,
        facinglimit: 50,
        grp: "fi",
        id: "6k",
        integrity: 51,
        mass: 5,
        power: .2,
        ranget: 9,
        rating: "E",
        symbol: "Int_FSDInterdictor_Size3_Class1"
      }, {
        boot: 15,
        class: 3,
        cost: 282240,
        edID: 128666710,
        eddbID: 1312,
        facinglimit: 50,
        grp: "fi",
        id: "6j",
        integrity: 38,
        mass: 2,
        power: .27,
        ranget: 10,
        rating: "D",
        symbol: "Int_FSDInterdictor_Size3_Class2"
      }, {
        boot: 15,
        class: 3,
        cost: 846720,
        edID: 128666714,
        eddbID: 1316,
        facinglimit: 50,
        grp: "fi",
        id: "6i",
        integrity: 64,
        mass: 5,
        power: .34,
        ranget: 11,
        rating: "C",
        symbol: "Int_FSDInterdictor_Size3_Class3"
      }, {
        boot: 15,
        class: 3,
        cost: 2540160,
        edID: 128666718,
        eddbID: 1320,
        facinglimit: 50,
        grp: "fi",
        id: "6h",
        integrity: 90,
        mass: 8,
        power: .41,
        ranget: 12,
        rating: "B",
        symbol: "Int_FSDInterdictor_Size3_Class4"
      }, {
        boot: 15,
        class: 3,
        cost: 7620480,
        edID: 128666722,
        eddbID: 1324,
        facinglimit: 50,
        grp: "fi",
        id: "6g",
        integrity: 77,
        mass: 5,
        power: .48,
        ranget: 13,
        rating: "A",
        symbol: "Int_FSDInterdictor_Size3_Class5"
      }, {
        boot: 15,
        class: 4,
        cost: 263420,
        edID: 128666707,
        eddbID: 1309,
        facinglimit: 50,
        grp: "fi",
        id: "6p",
        integrity: 64,
        mass: 10,
        power: .25,
        ranget: 12,
        rating: "E",
        symbol: "Int_FSDInterdictor_Size4_Class1"
      }, {
        boot: 15,
        class: 4,
        cost: 790270,
        edID: 128666711,
        eddbID: 1313,
        facinglimit: 50,
        grp: "fi",
        id: "6o",
        integrity: 48,
        mass: 4,
        power: .33,
        ranget: 13,
        rating: "D",
        symbol: "Int_FSDInterdictor_Size4_Class2"
      }, {
        boot: 15,
        class: 4,
        cost: 2370820,
        edID: 128666715,
        eddbID: 1317,
        facinglimit: 50,
        grp: "fi",
        id: "6n",
        integrity: 80,
        mass: 10,
        power: .41,
        ranget: 14,
        rating: "C",
        symbol: "Int_FSDInterdictor_Size4_Class3"
      }, {
        boot: 15,
        class: 4,
        cost: 7112450,
        edID: 128666719,
        eddbID: 1321,
        facinglimit: 50,
        grp: "fi",
        id: "6m",
        integrity: 112,
        mass: 16,
        power: .49,
        ranget: 15,
        rating: "B",
        symbol: "Int_FSDInterdictor_Size4_Class4"
      }, {
        boot: 15,
        class: 4,
        cost: 21337340,
        edID: 128666723,
        eddbID: 1325,
        facinglimit: 50,
        grp: "fi",
        id: "6l",
        integrity: 96,
        mass: 10,
        power: .57,
        ranget: 16,
        rating: "A",
        symbol: "Int_FSDInterdictor_Size4_Class5"
      } ],
      fs: [ {
        class: 1,
        cost: 310,
        edID: 128666644,
        eddbID: 1246,
        grp: "fs",
        id: "2n",
        power: .14,
        rate: 18,
        rating: "E",
        symbol: "Int_FuelScoop_Size1_Class1"
      }, {
        class: 1,
        cost: 1290,
        edID: 128666652,
        eddbID: 1254,
        grp: "fs",
        id: "2m",
        power: .18,
        rate: 24,
        rating: "D",
        symbol: "Int_FuelScoop_Size1_Class2"
      }, {
        class: 1,
        cost: 5140,
        edID: 128666660,
        eddbID: 1262,
        grp: "fs",
        id: "2l",
        power: .23,
        rate: 30,
        rating: "C",
        symbol: "Int_FuelScoop_Size1_Class3"
      }, {
        class: 1,
        cost: 20570,
        edID: 128666668,
        eddbID: 1270,
        grp: "fs",
        id: "2k",
        power: .28,
        rate: 36,
        rating: "B",
        symbol: "Int_FuelScoop_Size1_Class4"
      }, {
        class: 1,
        cost: 82270,
        edID: 128666676,
        eddbID: 1278,
        grp: "fs",
        id: "2j",
        power: .32,
        rate: 42,
        rating: "A",
        symbol: "Int_FuelScoop_Size1_Class5"
      }, {
        class: 2,
        cost: 1070,
        edID: 128666645,
        eddbID: 1247,
        grp: "fs",
        id: "2s",
        power: .17,
        rate: 32,
        rating: "E",
        symbol: "Int_FuelScoop_Size2_Class1"
      }, {
        class: 2,
        cost: 4450,
        edID: 128666653,
        eddbID: 1255,
        grp: "fs",
        id: "2r",
        power: .22,
        rate: 43,
        rating: "D",
        symbol: "Int_FuelScoop_Size2_Class2"
      }, {
        class: 2,
        cost: 17800,
        edID: 128666661,
        eddbID: 1263,
        grp: "fs",
        id: "2q",
        power: .28,
        rate: 54,
        rating: "C",
        symbol: "Int_FuelScoop_Size2_Class3"
      }, {
        class: 2,
        cost: 71210,
        edID: 128666669,
        eddbID: 1271,
        grp: "fs",
        id: "2p",
        power: .34,
        rate: 65,
        rating: "B",
        symbol: "Int_FuelScoop_Size2_Class4"
      }, {
        class: 2,
        cost: 284840,
        edID: 128666677,
        eddbID: 1279,
        grp: "fs",
        id: "2o",
        power: .39,
        rate: 75,
        rating: "A",
        symbol: "Int_FuelScoop_Size2_Class5"
      }, {
        class: 3,
        cost: 3390,
        edID: 128666646,
        eddbID: 1248,
        grp: "fs",
        id: "31",
        power: .2,
        rate: 75,
        rating: "E",
        symbol: "Int_FuelScoop_Size3_Class1"
      }, {
        class: 3,
        cost: 14110,
        edID: 128666654,
        eddbID: 1256,
        grp: "fs",
        id: "30",
        power: .27,
        rate: 100,
        rating: "D",
        symbol: "Int_FuelScoop_Size3_Class2"
      }, {
        class: 3,
        cost: 56440,
        edID: 128666662,
        eddbID: 1264,
        grp: "fs",
        id: "2v",
        power: .34,
        rate: 126,
        rating: "C",
        symbol: "Int_FuelScoop_Size3_Class3"
      }, {
        class: 3,
        cost: 225740,
        edID: 128666670,
        eddbID: 1272,
        grp: "fs",
        id: "2u",
        power: .41,
        rate: 151,
        rating: "B",
        symbol: "Int_FuelScoop_Size3_Class4"
      }, {
        class: 3,
        cost: 902950,
        edID: 128666678,
        eddbID: 1280,
        grp: "fs",
        id: "2t",
        power: .48,
        rate: 176,
        rating: "A",
        symbol: "Int_FuelScoop_Size3_Class5"
      }, {
        class: 4,
        cost: 10730,
        edID: 128666647,
        eddbID: 1249,
        grp: "fs",
        id: "36",
        power: .25,
        rate: 147,
        rating: "E",
        symbol: "Int_FuelScoop_Size4_Class1"
      }, {
        class: 4,
        cost: 44720,
        edID: 128666655,
        eddbID: 1257,
        grp: "fs",
        id: "35",
        power: .33,
        rate: 196,
        rating: "D",
        symbol: "Int_FuelScoop_Size4_Class2"
      }, {
        class: 4,
        cost: 178900,
        edID: 128666663,
        eddbID: 1265,
        grp: "fs",
        id: "34",
        power: .41,
        rate: 245,
        rating: "C",
        symbol: "Int_FuelScoop_Size4_Class3"
      }, {
        class: 4,
        cost: 715590,
        edID: 128666671,
        eddbID: 1273,
        grp: "fs",
        id: "33",
        power: .49,
        rate: 294,
        rating: "B",
        symbol: "Int_FuelScoop_Size4_Class4"
      }, {
        class: 4,
        cost: 2862360,
        edID: 128666679,
        eddbID: 1281,
        grp: "fs",
        id: "32",
        power: .57,
        rate: 342,
        rating: "A",
        symbol: "Int_FuelScoop_Size4_Class5"
      }, {
        class: 5,
        cost: 34030,
        edID: 128666648,
        eddbID: 1250,
        grp: "fs",
        id: "3b",
        power: .3,
        rate: 247,
        rating: "E",
        symbol: "Int_FuelScoop_Size5_Class1"
      }, {
        class: 5,
        cost: 141780,
        edID: 128666656,
        eddbID: 1258,
        grp: "fs",
        id: "3a",
        power: .4,
        rate: 330,
        rating: "D",
        symbol: "Int_FuelScoop_Size5_Class2"
      }, {
        class: 5,
        cost: 567110,
        edID: 128666664,
        eddbID: 1266,
        grp: "fs",
        id: "39",
        power: .5,
        rate: 412,
        rating: "C",
        symbol: "Int_FuelScoop_Size5_Class3"
      }, {
        class: 5,
        cost: 2268420,
        edID: 128666672,
        eddbID: 1274,
        grp: "fs",
        id: "38",
        power: .6,
        rate: 494,
        rating: "B",
        symbol: "Int_FuelScoop_Size5_Class4"
      }, {
        class: 5,
        cost: 9073690,
        edID: 128666680,
        eddbID: 1282,
        grp: "fs",
        id: "37",
        power: .7,
        rate: 577,
        rating: "A",
        symbol: "Int_FuelScoop_Size5_Class5"
      }, {
        class: 6,
        cost: 107860,
        edID: 128666649,
        eddbID: 1251,
        grp: "fs",
        id: "3g",
        power: .35,
        rate: 376,
        rating: "E",
        symbol: "Int_FuelScoop_Size6_Class1"
      }, {
        class: 6,
        cost: 449430,
        edID: 128666657,
        eddbID: 1259,
        grp: "fs",
        id: "3f",
        power: .47,
        rate: 502,
        rating: "D",
        symbol: "Int_FuelScoop_Size6_Class2"
      }, {
        class: 6,
        cost: 1797730,
        edID: 128666665,
        eddbID: 1267,
        grp: "fs",
        id: "3e",
        power: .59,
        rate: 627,
        rating: "C",
        symbol: "Int_FuelScoop_Size6_Class3"
      }, {
        class: 6,
        cost: 7190900,
        edID: 128666673,
        eddbID: 1275,
        grp: "fs",
        id: "3d",
        power: .71,
        rate: 752,
        rating: "B",
        symbol: "Int_FuelScoop_Size6_Class4"
      }, {
        class: 6,
        cost: 28763610,
        edID: 128666681,
        eddbID: 1283,
        grp: "fs",
        id: "3c",
        power: .83,
        rate: 878,
        rating: "A",
        symbol: "Int_FuelScoop_Size6_Class5"
      }, {
        class: 7,
        cost: 341930,
        edID: 128666650,
        eddbID: 1252,
        grp: "fs",
        id: "3l",
        power: .41,
        rate: 534,
        rating: "E",
        symbol: "Int_FuelScoop_Size7_Class1"
      }, {
        class: 7,
        cost: 1424700,
        edID: 128666658,
        eddbID: 1260,
        grp: "fs",
        id: "3k",
        power: .55,
        rate: 712,
        rating: "D",
        symbol: "Int_FuelScoop_Size7_Class2"
      }, {
        class: 7,
        cost: 5698790,
        edID: 128666666,
        eddbID: 1268,
        grp: "fs",
        id: "3j",
        power: .69,
        rate: 890,
        rating: "C",
        symbol: "Int_FuelScoop_Size7_Class3"
      }, {
        class: 7,
        cost: 22795160,
        edID: 128666674,
        eddbID: 1276,
        grp: "fs",
        id: "3i",
        power: .83,
        rate: 1068,
        rating: "B",
        symbol: "Int_FuelScoop_Size7_Class4"
      }, {
        class: 7,
        cost: 91180640,
        edID: 128666682,
        eddbID: 1284,
        grp: "fs",
        id: "3h",
        power: .97,
        rate: 1245,
        rating: "A",
        symbol: "Int_FuelScoop_Size7_Class5"
      }, {
        class: 8,
        cost: 1083910,
        edID: 128666651,
        eddbID: 1253,
        grp: "fs",
        id: "3q",
        power: .48,
        rate: 720,
        rating: "E",
        symbol: "Int_FuelScoop_Size8_Class1"
      }, {
        class: 8,
        cost: 4516290,
        edID: 128666659,
        eddbID: 1261,
        grp: "fs",
        id: "3p",
        power: .64,
        rate: 960,
        rating: "D",
        symbol: "Int_FuelScoop_Size8_Class2"
      }, {
        class: 8,
        cost: 18065160,
        edID: 128666667,
        eddbID: 1269,
        grp: "fs",
        id: "3o",
        power: .8,
        rate: 1200,
        rating: "C",
        symbol: "Int_FuelScoop_Size8_Class3"
      }, {
        class: 8,
        cost: 72260660,
        edID: 128666675,
        eddbID: 1277,
        grp: "fs",
        id: "3n",
        power: .96,
        rate: 1440,
        rating: "B",
        symbol: "Int_FuelScoop_Size8_Class4"
      }, {
        class: 8,
        cost: 289042642,
        edID: 128666683,
        eddbID: 1285,
        grp: "fs",
        id: "3m",
        power: 1.12,
        rate: 1680,
        rating: "A",
        symbol: "Int_FuelScoop_Size8_Class5"
      } ],
      ft: [ {
        class: 1,
        cost: 1e3,
        edID: 128064346,
        eddbID: 1199,
        fuel: 2,
        grp: "ft",
        id: "f1",
        rating: "C",
        symbol: "Int_FuelTank_Size1_Class3"
      }, {
        class: 2,
        cost: 3750,
        edID: 128064347,
        eddbID: 1200,
        fuel: 4,
        grp: "ft",
        id: "f2",
        rating: "C",
        symbol: "Int_FuelTank_Size2_Class3"
      }, {
        class: 3,
        cost: 7060,
        edID: 128064348,
        eddbID: 1201,
        fuel: 8,
        grp: "ft",
        id: "f3",
        rating: "C",
        symbol: "Int_FuelTank_Size3_Class3"
      }, {
        class: 4,
        cost: 24730,
        edID: 128064349,
        eddbID: 1202,
        fuel: 16,
        grp: "ft",
        id: "f4",
        rating: "C",
        symbol: "Int_FuelTank_Size4_Class3"
      }, {
        class: 5,
        cost: 97750,
        edID: 128064350,
        eddbID: 1203,
        fuel: 32,
        grp: "ft",
        id: "f5",
        rating: "C",
        symbol: "Int_FuelTank_Size5_Class3"
      }, {
        class: 6,
        cost: 341580,
        edID: 128064351,
        eddbID: 1204,
        fuel: 64,
        grp: "ft",
        id: "f6",
        rating: "C",
        symbol: "Int_FuelTank_Size6_Class3"
      }, {
        class: 7,
        cost: 1780910,
        edID: 128064352,
        eddbID: 1205,
        fuel: 128,
        grp: "ft",
        id: "f7",
        rating: "C",
        symbol: "Int_FuelTank_Size7_Class3"
      }, {
        class: 8,
        cost: 5428431,
        edID: 128064353,
        eddbID: 1206,
        fuel: 256,
        grp: "ft",
        id: "f8",
        rating: "C",
        symbol: "Int_FuelTank_Size8_Class3"
      } ],
      fx: [ {
        class: 1,
        cost: 600,
        edID: 128671249,
        eddbID: 1414,
        grp: "fx",
        id: "F0",
        mass: 1.3,
        maximum: 1,
        power: .18,
        range: .6,
        rating: "E",
        symbol: "Int_DroneControl_FuelTransfer_Size1_Class1"
      }, {
        class: 1,
        cost: 1200,
        edID: 128671250,
        eddbID: 1415,
        grp: "fx",
        id: "F1",
        mass: .5,
        maximum: 1,
        power: .14,
        range: .8,
        rating: "D",
        symbol: "Int_DroneControl_FuelTransfer_Size1_Class2"
      }, {
        class: 1,
        cost: 2400,
        edID: 128671251,
        eddbID: 1416,
        grp: "fx",
        id: "F2",
        mass: 1.3,
        maximum: 1,
        power: .23,
        range: 1,
        rating: "C",
        symbol: "Int_DroneControl_FuelTransfer_Size1_Class3"
      }, {
        class: 1,
        cost: 4800,
        edID: 128671252,
        eddbID: 1417,
        grp: "fx",
        id: "F3",
        mass: 2,
        maximum: 1,
        power: .32,
        range: 1.2,
        rating: "B",
        symbol: "Int_DroneControl_FuelTransfer_Size1_Class4"
      }, {
        class: 1,
        cost: 9600,
        edID: 128671253,
        eddbID: 1418,
        grp: "fx",
        id: "F4",
        mass: 1.3,
        maximum: 1,
        power: .28,
        range: 1.4,
        rating: "A",
        symbol: "Int_DroneControl_FuelTransfer_Size1_Class5"
      }, {
        class: 3,
        cost: 5400,
        edID: 128671254,
        eddbID: 1419,
        grp: "fx",
        id: "F5",
        mass: 5,
        maximum: 2,
        power: .27,
        range: .66,
        rating: "E",
        symbol: "Int_DroneControl_FuelTransfer_Size3_Class1"
      }, {
        class: 3,
        cost: 10800,
        edID: 128671255,
        eddbID: 1420,
        grp: "fx",
        id: "F6",
        mass: 2,
        maximum: 2,
        power: .2,
        range: .88,
        rating: "D",
        symbol: "Int_DroneControl_FuelTransfer_Size3_Class2"
      }, {
        class: 3,
        cost: 21600,
        edID: 128671256,
        eddbID: 1421,
        grp: "fx",
        id: "F7",
        mass: 5,
        maximum: 2,
        power: .34,
        range: 1.1,
        rating: "C",
        symbol: "Int_DroneControl_FuelTransfer_Size3_Class3"
      }, {
        class: 3,
        cost: 43200,
        edID: 128671257,
        eddbID: 1422,
        grp: "fx",
        id: "F8",
        mass: 8,
        maximum: 2,
        power: .48,
        range: 1.32,
        rating: "B",
        symbol: "Int_DroneControl_FuelTransfer_Size3_Class4"
      }, {
        class: 3,
        cost: 86400,
        edID: 128671258,
        eddbID: 1423,
        grp: "fx",
        id: "F9",
        mass: 5,
        maximum: 2,
        power: .41,
        range: 1.54,
        rating: "A",
        symbol: "Int_DroneControl_FuelTransfer_Size3_Class5"
      }, {
        class: 5,
        cost: 48600,
        edID: 128671259,
        eddbID: 1424,
        grp: "fx",
        id: "Fa",
        mass: 20,
        maximum: 4,
        power: .4,
        range: .78,
        rating: "E",
        symbol: "Int_DroneControl_FuelTransfer_Size5_Class1"
      }, {
        class: 5,
        cost: 97200,
        edID: 128671260,
        eddbID: 1425,
        grp: "fx",
        id: "Fb",
        mass: 8,
        maximum: 4,
        power: .3,
        range: 1.04,
        rating: "D",
        symbol: "Int_DroneControl_FuelTransfer_Size5_Class2"
      }, {
        class: 5,
        cost: 194400,
        edID: 128671261,
        eddbID: 1426,
        grp: "fx",
        id: "Fc",
        mass: 20,
        maximum: 4,
        power: .5,
        range: 1.3,
        rating: "C",
        symbol: "Int_DroneControl_FuelTransfer_Size5_Class3"
      }, {
        class: 5,
        cost: 388800,
        edID: 128671262,
        eddbID: 1427,
        grp: "fx",
        id: "Fd",
        mass: 32,
        maximum: 4,
        power: .97,
        range: 1.56,
        rating: "B",
        symbol: "Int_DroneControl_FuelTransfer_Size5_Class4"
      }, {
        class: 5,
        cost: 777600,
        edID: 128671263,
        eddbID: 1428,
        grp: "fx",
        id: "Fe",
        mass: 20,
        maximum: 4,
        power: .6,
        range: 1.82,
        rating: "A",
        symbol: "Int_DroneControl_FuelTransfer_Size5_Class5"
      }, {
        class: 7,
        cost: 437400,
        edID: 128671264,
        eddbID: 1429,
        grp: "fx",
        id: "Ff",
        mass: 80,
        maximum: 8,
        power: .55,
        range: 1.02,
        rating: "E",
        symbol: "Int_DroneControl_FuelTransfer_Size7_Class1"
      }, {
        class: 7,
        cost: 874800,
        edID: 128671265,
        eddbID: 1430,
        grp: "fx",
        id: "Fg",
        mass: 32,
        maximum: 8,
        power: .41,
        range: 1.36,
        rating: "D",
        symbol: "Int_DroneControl_FuelTransfer_Size7_Class2"
      }, {
        class: 7,
        cost: 1749600,
        edID: 128671266,
        eddbID: 1431,
        grp: "fx",
        id: "Fh",
        mass: 80,
        maximum: 8,
        power: .69,
        range: 1.7,
        rating: "C",
        symbol: "Int_DroneControl_FuelTransfer_Size7_Class3"
      }, {
        class: 7,
        cost: 3499200,
        edID: 128671267,
        eddbID: 1432,
        grp: "fx",
        id: "Fi",
        mass: 128,
        maximum: 8,
        power: .97,
        range: 2.04,
        rating: "B",
        symbol: "Int_DroneControl_FuelTransfer_Size7_Class4"
      }, {
        class: 7,
        cost: 6998400,
        edID: 128671268,
        eddbID: 1433,
        grp: "fx",
        id: "Fj",
        mass: 80,
        maximum: 8,
        power: .83,
        range: 2.38,
        rating: "A",
        symbol: "Int_DroneControl_FuelTransfer_Size7_Class5"
      } ],
      hb: [ {
        class: 1,
        cost: 600,
        edID: 128066532,
        eddbID: 1207,
        grp: "hb",
        id: "6u",
        mass: 1.3,
        maximum: 2,
        power: .12,
        range: 1.5,
        rating: "E",
        time: 42,
        symbol: "Int_DroneControl_ResourceSiphon_Size1_Class1"
      }, {
        class: 1,
        cost: 1200,
        edID: 128066533,
        eddbID: 1208,
        grp: "hb",
        id: "6t",
        mass: .5,
        maximum: 1,
        power: .16,
        range: 2,
        rating: "D",
        time: 36,
        symbol: "Int_DroneControl_ResourceSiphon_Size1_Class2"
      }, {
        class: 1,
        cost: 2400,
        edID: 128066534,
        eddbID: 1209,
        grp: "hb",
        id: "6s",
        mass: 1.3,
        maximum: 1,
        power: .2,
        range: 2.5,
        rating: "C",
        time: 30,
        symbol: "Int_DroneControl_ResourceSiphon_Size1_Class3"
      }, {
        class: 1,
        cost: 4800,
        edID: 128066535,
        eddbID: 1210,
        grp: "hb",
        id: "6r",
        mass: 2,
        maximum: 2,
        power: .24,
        range: 3,
        rating: "B",
        time: 24,
        symbol: "Int_DroneControl_ResourceSiphon_Size1_Class4"
      }, {
        class: 1,
        cost: 9600,
        edID: 128066536,
        eddbID: 1211,
        grp: "hb",
        id: "6q",
        mass: 1.3,
        maximum: 1,
        power: .28,
        range: 3.5,
        rating: "A",
        time: 18,
        symbol: "Int_DroneControl_ResourceSiphon_Size1_Class5"
      }, {
        class: 3,
        cost: 5400,
        edID: 128066537,
        eddbID: 1212,
        grp: "hb",
        id: "73",
        mass: 5,
        maximum: 4,
        power: .18,
        range: 1.62,
        rating: "E",
        time: 36,
        symbol: "Int_DroneControl_ResourceSiphon_Size3_Class1"
      }, {
        class: 3,
        cost: 10800,
        edID: 128066538,
        eddbID: 1213,
        grp: "hb",
        id: "72",
        mass: 2,
        maximum: 3,
        power: .24,
        range: 2.16,
        rating: "D",
        time: 31,
        symbol: "Int_DroneControl_ResourceSiphon_Size3_Class2"
      }, {
        class: 3,
        cost: 21600,
        edID: 128066539,
        eddbID: 1214,
        grp: "hb",
        id: "71",
        mass: 5,
        maximum: 3,
        power: .3,
        range: 2.7,
        rating: "C",
        time: 26,
        symbol: "Int_DroneControl_ResourceSiphon_Size3_Class3"
      }, {
        class: 3,
        cost: 43200,
        edID: 128066540,
        eddbID: 1215,
        grp: "hb",
        id: "70",
        mass: 8,
        maximum: 4,
        power: .36,
        range: 3.24,
        rating: "B",
        time: 21,
        symbol: "Int_DroneControl_ResourceSiphon_Size3_Class4"
      }, {
        class: 3,
        cost: 86400,
        edID: 128066541,
        eddbID: 1216,
        grp: "hb",
        id: "6v",
        mass: 5,
        maximum: 3,
        power: .42,
        range: 3.78,
        rating: "A",
        time: 16,
        symbol: "Int_DroneControl_ResourceSiphon_Size3_Class5"
      }, {
        class: 5,
        cost: 48600,
        edID: 128066542,
        eddbID: 1217,
        grp: "hb",
        id: "78",
        mass: 20,
        maximum: 9,
        power: .3,
        range: 1.98,
        rating: "E",
        time: 31,
        symbol: "Int_DroneControl_ResourceSiphon_Size5_Class1"
      }, {
        class: 5,
        cost: 97200,
        edID: 128066543,
        eddbID: 1218,
        grp: "hb",
        id: "77",
        mass: 8,
        maximum: 6,
        power: .4,
        range: 2.64,
        rating: "D",
        time: 26,
        symbol: "Int_DroneControl_ResourceSiphon_Size5_Class2"
      }, {
        class: 5,
        cost: 194400,
        edID: 128066544,
        eddbID: 1219,
        grp: "hb",
        id: "76",
        mass: 20,
        maximum: 7,
        power: .5,
        range: 3.3,
        rating: "C",
        time: 22,
        symbol: "Int_DroneControl_ResourceSiphon_Size5_Class3"
      }, {
        class: 5,
        cost: 388800,
        edID: 128066545,
        eddbID: 1220,
        grp: "hb",
        id: "75",
        mass: 32,
        maximum: 9,
        power: .6,
        range: 3.96,
        rating: "B",
        time: 18,
        symbol: "Int_DroneControl_ResourceSiphon_Size5_Class4"
      }, {
        class: 5,
        cost: 777600,
        edID: 128066546,
        eddbID: 1221,
        grp: "hb",
        id: "74",
        mass: 20,
        maximum: 6,
        power: .7,
        range: 4.62,
        rating: "A",
        time: 13,
        symbol: "Int_DroneControl_ResourceSiphon_Size5_Class5"
      }, {
        class: 7,
        cost: 437400,
        edID: 128066547,
        eddbID: 1222,
        grp: "hb",
        id: "7d",
        mass: 80,
        maximum: 18,
        power: .42,
        range: 2.58,
        rating: "E",
        time: 25,
        symbol: "Int_DroneControl_ResourceSiphon_Size7_Class1"
      }, {
        class: 7,
        cost: 874800,
        edID: 128066548,
        eddbID: 1223,
        grp: "hb",
        id: "7c",
        mass: 32,
        maximum: 12,
        power: .56,
        range: 3.44,
        rating: "D",
        time: 22,
        symbol: "Int_DroneControl_ResourceSiphon_Size7_Class2"
      }, {
        class: 7,
        cost: 1749600,
        edID: 128066549,
        eddbID: 1224,
        grp: "hb",
        id: "7b",
        mass: 80,
        maximum: 15,
        power: .7,
        range: 4.3,
        rating: "C",
        time: 18,
        symbol: "Int_DroneControl_ResourceSiphon_Size7_Class3"
      }, {
        class: 7,
        cost: 3499200,
        edID: 128066550,
        eddbID: 1225,
        grp: "hb",
        id: "7a",
        mass: 128,
        maximum: 18,
        power: .84,
        range: 5.16,
        rating: "B",
        time: 14,
        symbol: "Int_DroneControl_ResourceSiphon_Size7_Class4"
      }, {
        class: 7,
        cost: 6998400,
        edID: 128066551,
        eddbID: 1226,
        grp: "hb",
        id: "79",
        mass: 80,
        maximum: 12,
        power: .98,
        range: 6.02,
        rating: "A",
        time: 11,
        symbol: "Int_DroneControl_ResourceSiphon_Size7_Class5"
      } ],
      hr: [ {
        hullreinforcement: 80,
        class: 1,
        cost: 5e3,
        edID: 128668537,
        eddbID: 1373,
        causres: 0,
        explres: .005,
        grp: "hr",
        id: "26",
        kinres: .005,
        mass: 2,
        rating: "E",
        thermres: .005,
        symbol: "Int_HullReinforcement_Size1_Class1"
      }, {
        hullreinforcement: 110,
        class: 1,
        cost: 15e3,
        edID: 128668538,
        eddbID: 1374,
        causres: 0,
        explres: .005,
        grp: "hr",
        id: "25",
        kinres: .005,
        mass: 1,
        rating: "D",
        thermres: .005,
        symbol: "Int_HullReinforcement_Size1_Class2"
      }, {
        hullreinforcement: 150,
        class: 2,
        cost: 12e3,
        edID: 128668539,
        eddbID: 1375,
        causres: 0,
        explres: .01,
        grp: "hr",
        id: "28",
        kinres: .01,
        mass: 4,
        rating: "E",
        thermres: .01,
        symbol: "Int_HullReinforcement_Size2_Class1"
      }, {
        hullreinforcement: 190,
        class: 2,
        cost: 36e3,
        edID: 128668540,
        eddbID: 1376,
        causres: 0,
        explres: .01,
        grp: "hr",
        id: "27",
        kinres: .01,
        mass: 2,
        rating: "D",
        thermres: .01,
        symbol: "Int_HullReinforcement_Size2_Class2"
      }, {
        hullreinforcement: 230,
        class: 3,
        cost: 28e3,
        edID: 128668541,
        eddbID: 1377,
        causres: 0,
        explres: .015,
        grp: "hr",
        id: "2a",
        kinres: .015,
        mass: 8,
        rating: "E",
        thermres: .015,
        symbol: "Int_HullReinforcement_Size3_Class1"
      }, {
        hullreinforcement: 260,
        class: 3,
        cost: 84e3,
        edID: 128668542,
        eddbID: 1378,
        causres: 0,
        explres: .015,
        grp: "hr",
        id: "29",
        kinres: .015,
        mass: 4,
        rating: "D",
        thermres: .015,
        symbol: "Int_HullReinforcement_Size3_Class2"
      }, {
        hullreinforcement: 300,
        class: 4,
        cost: 65e3,
        edID: 128668543,
        eddbID: 1379,
        causres: 0,
        explres: .02,
        grp: "hr",
        id: "2c",
        kinres: .02,
        mass: 16,
        rating: "E",
        thermres: .02,
        symbol: "Int_HullReinforcement_Size4_Class1"
      }, {
        hullreinforcement: 330,
        class: 4,
        cost: 195e3,
        edID: 128668544,
        eddbID: 1380,
        causres: 0,
        explres: .02,
        grp: "hr",
        id: "2b",
        kinres: .02,
        mass: 8,
        rating: "D",
        thermres: .02,
        symbol: "Int_HullReinforcement_Size4_Class2"
      }, {
        hullreinforcement: 360,
        class: 5,
        cost: 15e4,
        edID: 128668545,
        eddbID: 1381,
        causres: 0,
        explres: .025,
        grp: "hr",
        id: "2e",
        kinres: .025,
        mass: 32,
        rating: "E",
        thermres: .025,
        symbol: "Int_HullReinforcement_Size5_Class1"
      }, {
        hullreinforcement: 390,
        class: 5,
        cost: 45e4,
        edID: 128668546,
        eddbID: 1382,
        causres: 0,
        explres: .025,
        grp: "hr",
        id: "2d",
        kinres: .025,
        mass: 16,
        rating: "D",
        thermres: .025,
        symbol: "Int_HullReinforcement_Size5_Class2"
      } ],
      mahr: [ {
        hullreinforcement: 72,
        class: 1,
        cost: 7501,
        edID: 128793117,
        eddbID: 0,
        explres: 0,
        grp: "mahr",
        id: "y5",
        kinres: 0,
        mass: 2,
        rating: "E",
        thermres: 0,
        causres: .03,
        symbol: "Int_MetaAlloyHullReinforcement_Size1_Class1"
      }, {
        hullreinforcement: 99,
        class: 1,
        cost: 22501,
        edID: 128793118,
        eddbID: 0,
        explres: 0,
        grp: "mahr",
        id: "y6",
        kinres: 0,
        mass: 2,
        rating: "D",
        thermres: 0,
        causres: .03,
        symbol: "Int_MetaAlloyHullReinforcement_Size1_Class2"
      }, {
        hullreinforcement: 135,
        class: 2,
        cost: 18e3,
        edID: 128793119,
        eddbID: 0,
        explres: 0,
        grp: "mahr",
        id: "y7",
        kinres: 0,
        mass: 4,
        rating: "E",
        thermres: 0,
        causres: .03,
        symbol: "Int_MetaAlloyHullReinforcement_Size2_Class1"
      }, {
        hullreinforcement: 171,
        class: 2,
        cost: 54e3,
        edID: 128793120,
        eddbID: 0,
        explres: 0,
        grp: "mahr",
        id: "y8",
        kinres: 0,
        mass: 2,
        rating: "D",
        thermres: 0,
        causres: .03,
        symbol: "Int_MetaAlloyHullReinforcement_Size2_Class2"
      }, {
        hullreinforcement: 207,
        class: 3,
        cost: 42e3,
        edID: 128793121,
        eddbID: 0,
        explres: 0,
        grp: "mahr",
        id: "y9",
        kinres: 0,
        mass: 8,
        rating: "E",
        thermres: 0,
        causres: .03,
        symbol: "Int_MetaAlloyHullReinforcement_Size3_Class1"
      }, {
        hullreinforcement: 234,
        class: 3,
        cost: 126e3,
        edID: 128793122,
        eddbID: 0,
        explres: 0,
        grp: "mahr",
        id: "yA",
        kinres: 0,
        mass: 4,
        rating: "D",
        thermres: 0,
        causres: .03,
        symbol: "Int_MetaAlloyHullReinforcement_Size3_Class2"
      }, {
        hullreinforcement: 270,
        class: 4,
        cost: 97501,
        edID: 128793123,
        eddbID: 0,
        explres: 0,
        grp: "mahr",
        id: "yB",
        kinres: 0,
        mass: 16,
        rating: "E",
        thermres: 0,
        causres: .03,
        symbol: "Int_MetaAlloyHullReinforcement_Size4_Class1"
      }, {
        hullreinforcement: 297,
        class: 4,
        cost: 292501,
        edID: 128793124,
        eddbID: 0,
        explres: 0,
        grp: "mahr",
        id: "yC",
        kinres: 0,
        mass: 8,
        rating: "D",
        thermres: 0,
        causres: .03,
        symbol: "Int_MetaAlloyHullReinforcement_Size4_Class2"
      }, {
        hullreinforcement: 324,
        class: 5,
        cost: 225001,
        edID: 128793125,
        eddbID: 0,
        explres: 0,
        grp: "mahr",
        id: "yD",
        kinres: 0,
        mass: 32,
        rating: "E",
        thermres: 0,
        causres: .03,
        symbol: "Int_MetaAlloyHullReinforcement_Size5_Class1"
      }, {
        hullreinforcement: 351,
        class: 5,
        cost: 675001,
        edID: 128793126,
        eddbID: 0,
        explres: 0,
        grp: "mahr",
        id: "yE",
        kinres: 0,
        mass: 16,
        rating: "D",
        thermres: 0,
        causres: .03,
        symbol: "Int_MetaAlloyHullReinforcement_Size5_Class2"
      } ],
      mrp: [ {
        class: 1,
        cost: 5e3,
        eddbID: 1577,
        edID: 128737270,
        grp: "mrp",
        id: "m0",
        integrity: 77,
        mass: 2,
        protection: .3,
        rating: "E",
        symbol: "Int_ModuleReinforcement_Size1_Class1"
      }, {
        class: 1,
        cost: 15e3,
        eddbID: 1578,
        edID: 128737271,
        grp: "mrp",
        id: "m1",
        integrity: 70,
        mass: 1,
        protection: .6,
        rating: "D",
        symbol: "Int_ModuleReinforcement_Size1_Class2"
      }, {
        class: 2,
        cost: 12e3,
        eddbID: 1579,
        edID: 128737272,
        grp: "mrp",
        id: "m2",
        integrity: 115,
        mass: 4,
        protection: .3,
        rating: "E",
        symbol: "Int_ModuleReinforcement_Size2_Class1"
      }, {
        class: 2,
        cost: 36e3,
        eddbID: 1580,
        edID: 128737273,
        grp: "mrp",
        id: "m3",
        integrity: 105,
        mass: 2,
        protection: .6,
        rating: "D",
        symbol: "Int_ModuleReinforcement_Size2_Class2"
      }, {
        class: 3,
        cost: 28e3,
        eddbID: 1581,
        edID: 128737274,
        grp: "mrp",
        id: "m4",
        integrity: 170,
        mass: 8,
        protection: .3,
        rating: "E",
        symbol: "Int_ModuleReinforcement_Size3_Class1"
      }, {
        class: 3,
        cost: 84e3,
        eddbID: 1582,
        edID: 128737275,
        grp: "mrp",
        id: "m5",
        integrity: 155,
        mass: 4,
        protection: .6,
        rating: "D",
        symbol: "Int_ModuleReinforcement_Size3_Class2"
      }, {
        class: 4,
        cost: 65e3,
        eddbID: 1583,
        edID: 128737276,
        grp: "mrp",
        id: "m6",
        integrity: 260,
        mass: 16,
        protection: .3,
        rating: "E",
        symbol: "Int_ModuleReinforcement_Size4_Class1"
      }, {
        class: 4,
        cost: 195e3,
        eddbID: 1584,
        edID: 128737277,
        grp: "mrp",
        id: "m7",
        integrity: 235,
        mass: 8,
        protection: .6,
        rating: "D",
        symbol: "Int_ModuleReinforcement_Size4_Class2"
      }, {
        class: 5,
        cost: 15e4,
        eddbID: 1585,
        edID: 128737278,
        grp: "mrp",
        id: "m8",
        integrity: 385,
        mass: 32,
        protection: .3,
        rating: "E",
        symbol: "Int_ModuleReinforcement_Size5_Class1"
      }, {
        class: 5,
        cost: 45e4,
        eddbID: 1586,
        edID: 128737279,
        grp: "mrp",
        id: "m9",
        integrity: 350,
        mass: 16,
        protection: .6,
        rating: "D",
        symbol: "Int_ModuleReinforcement_Size5_Class2"
      } ],
      pv: [ {
        bays: 1,
        class: 2,
        cost: 18e3,
        edID: 128672288,
        eddbID: 1528,
        grp: "pv",
        id: "v5",
        integrity: 30,
        mass: 12,
        power: .25,
        rating: "H",
        symbol: "Int_BuggyBay_Size2_Class1"
      }, {
        bays: 1,
        class: 2,
        cost: 21600,
        edID: 128672289,
        eddbID: 1529,
        grp: "pv",
        id: "v6",
        integrity: 30,
        mass: 6,
        power: .75,
        rating: "G",
        symbol: "Int_BuggyBay_Size2_Class2"
      }, {
        bays: 2,
        class: 4,
        cost: 72e3,
        edID: 128672290,
        eddbID: 1526,
        grp: "pv",
        id: "v3",
        integrity: 30,
        mass: 20,
        power: .4,
        rating: "H",
        symbol: "Int_BuggyBay_Size4_Class1"
      }, {
        bays: 2,
        class: 4,
        cost: 86400,
        edID: 128672291,
        eddbID: 1527,
        grp: "pv",
        id: "v4",
        integrity: 30,
        mass: 10,
        power: 1.2,
        rating: "G",
        symbol: "Int_BuggyBay_Size4_Class2"
      }, {
        bays: 4,
        class: 6,
        cost: 576e3,
        edID: 128672292,
        eddbID: 1524,
        grp: "pv",
        id: "v1",
        integrity: 30,
        mass: 34,
        power: .6,
        rating: "H",
        symbol: "Int_BuggyBay_Size6_Class1"
      }, {
        bays: 4,
        class: 6,
        cost: 691200,
        edID: 128672293,
        eddbID: 1525,
        grp: "pv",
        id: "v2",
        integrity: 30,
        mass: 17,
        power: 1.8,
        rating: "G",
        symbol: "Int_BuggyBay_Size6_Class2"
      } ],
      psg: [ {
        brokenregen: 1.2,
        class: 1,
        cost: 132200,
        distdraw: .6,
        edID: 128671323,
        eddbID: 1485,
        explres: .5,
        grp: "psg",
        id: "p6",
        integrity: 48,
        kinres: .4,
        mass: 2.5,
        maxmass: 63,
        maxmul: 2,
        minmass: 13,
        minmul: 1,
        optmass: 25,
        optmul: 1.5,
        power: 2.52,
        pp: "Aisling Duval",
        rating: "A",
        regen: 1,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size1_Class5_Strong"
      }, {
        brokenregen: 1.2,
        class: 2,
        cost: 240340,
        distdraw: .6,
        edID: 128671324,
        eddbID: 1486,
        explres: .5,
        grp: "psg",
        id: "p5",
        integrity: 61,
        kinres: .4,
        mass: 5,
        maxmass: 138,
        maxmul: 2,
        minmass: 23,
        minmul: 1,
        optmass: 55,
        optmul: 1.5,
        power: 3.15,
        pp: "Aisling Duval",
        rating: "A",
        regen: 1,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size2_Class5_Strong"
      }, {
        brokenregen: 1.3,
        class: 3,
        cost: 761870,
        distdraw: .6,
        edID: 128671325,
        eddbID: 1487,
        explres: .5,
        grp: "psg",
        id: "p4",
        integrity: 77,
        kinres: .4,
        mass: 10,
        maxmass: 413,
        maxmul: 2,
        minmass: 83,
        minmul: 1,
        optmass: 165,
        optmul: 1.5,
        power: 3.78,
        pp: "Aisling Duval",
        rating: "A",
        regen: 1,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size3_Class5_Strong"
      }, {
        brokenregen: 1.7,
        class: 4,
        cost: 2415120,
        distdraw: .6,
        edID: 128671326,
        eddbID: 1488,
        explres: .5,
        grp: "psg",
        id: "p3",
        integrity: 96,
        kinres: .4,
        mass: 20,
        maxmass: 713,
        maxmul: 2,
        minmass: 143,
        minmul: 1,
        optmass: 285,
        optmul: 1.5,
        power: 4.62,
        pp: "Aisling Duval",
        rating: "A",
        regen: 1,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size4_Class5_Strong"
      }, {
        brokenregen: 2.3,
        class: 5,
        cost: 7655930,
        distdraw: .6,
        edID: 128671327,
        eddbID: 1489,
        explres: .5,
        grp: "psg",
        id: "p2",
        integrity: 115,
        kinres: .4,
        mass: 40,
        maxmass: 1013,
        maxmul: 2,
        minmass: 203,
        minmul: 1,
        optmass: 405,
        optmul: 1.5,
        power: 5.46,
        pp: "Aisling Duval",
        rating: "A",
        regen: 1,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size5_Class5_Strong"
      }, {
        brokenregen: 3.2,
        class: 6,
        cost: 24269300,
        distdraw: .6,
        edID: 128671328,
        eddbID: 1490,
        explres: .5,
        grp: "psg",
        id: "p1",
        integrity: 136,
        kinres: .4,
        mass: 80,
        maxmass: 1350,
        maxmul: 2,
        minmass: 270,
        minmul: 1,
        optmass: 540,
        optmul: 1.5,
        power: 6.51,
        pp: "Aisling Duval",
        rating: "A",
        regen: 1,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size6_Class5_Strong"
      }, {
        brokenregen: 4.2,
        class: 7,
        cost: 76933670,
        distdraw: .6,
        edID: 128671329,
        eddbID: 1491,
        explres: .5,
        grp: "psg",
        id: "p0",
        integrity: 157,
        kinres: .4,
        mass: 160,
        maxmass: 2650,
        maxmul: 2,
        minmass: 530,
        minmul: 1,
        optmass: 1060,
        optmul: 1.5,
        power: 7.35,
        pp: "Aisling Duval",
        rating: "A",
        regen: 1.1,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size7_Class5_Strong"
      }, {
        brokenregen: 5.4,
        class: 8,
        cost: 243879730,
        distdraw: .6,
        edID: 128671330,
        eddbID: 1492,
        explres: .5,
        grp: "psg",
        id: "p7",
        integrity: 180,
        kinres: .4,
        mass: 320,
        maxmass: 4500,
        maxmul: 2,
        minmass: 900,
        minmul: 1,
        optmass: 1800,
        optmul: 1.5,
        power: 8.4,
        pp: "Aisling Duval",
        rating: "A",
        regen: 1.4,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size8_Class5_Strong"
      } ],
      pc: [ {
        class: 1,
        cost: 600,
        edID: 128671269,
        eddbID: 1434,
        grp: "pc",
        id: "P0",
        mass: 1.3,
        maximum: 1,
        power: .18,
        range: 3,
        rating: "E",
        symbol: "Int_DroneControl_Prospector_Size1_Class1"
      }, {
        class: 1,
        cost: 1200,
        edID: 128671270,
        eddbID: 1435,
        grp: "pc",
        id: "P1",
        mass: .5,
        maximum: 1,
        power: .14,
        range: 4,
        rating: "D",
        symbol: "Int_DroneControl_Prospector_Size1_Class2"
      }, {
        class: 1,
        cost: 2400,
        edID: 128671271,
        eddbID: 1436,
        grp: "pc",
        id: "P2",
        mass: 1.3,
        maximum: 1,
        power: .23,
        range: 5,
        rating: "C",
        symbol: "Int_DroneControl_Prospector_Size1_Class3"
      }, {
        class: 1,
        cost: 4800,
        edID: 128671272,
        eddbID: 1437,
        grp: "pc",
        id: "P3",
        mass: 2,
        maximum: 1,
        power: .32,
        range: 6,
        rating: "B",
        symbol: "Int_DroneControl_Prospector_Size1_Class4"
      }, {
        class: 1,
        cost: 9600,
        edID: 128671273,
        eddbID: 1438,
        grp: "pc",
        id: "P4",
        mass: 1.3,
        maximum: 1,
        power: .28,
        range: 7,
        rating: "A",
        symbol: "Int_DroneControl_Prospector_Size1_Class5"
      }, {
        class: 3,
        cost: 5400,
        edID: 128671274,
        eddbID: 1439,
        grp: "pc",
        id: "P5",
        mass: 5,
        maximum: 2,
        power: .27,
        range: 3.3,
        rating: "E",
        symbol: "Int_DroneControl_Prospector_Size3_Class1"
      }, {
        class: 3,
        cost: 10800,
        edID: 128671275,
        eddbID: 1440,
        grp: "pc",
        id: "P6",
        mass: 2,
        maximum: 2,
        power: .2,
        range: 4.4,
        rating: "D",
        symbol: "Int_DroneControl_Prospector_Size3_Class2"
      }, {
        class: 3,
        cost: 21600,
        edID: 128671276,
        eddbID: 1441,
        grp: "pc",
        id: "P7",
        mass: 5,
        maximum: 2,
        power: .34,
        range: 5.5,
        rating: "C",
        symbol: "Int_DroneControl_Prospector_Size3_Class3"
      }, {
        class: 3,
        cost: 43200,
        edID: 128671277,
        eddbID: 1442,
        grp: "pc",
        id: "P8",
        mass: 8,
        maximum: 2,
        power: .48,
        range: 6.6,
        rating: "B",
        symbol: "Int_DroneControl_Prospector_Size3_Class4"
      }, {
        class: 3,
        cost: 86400,
        edID: 128671278,
        eddbID: 1443,
        grp: "pc",
        id: "P9",
        mass: 5,
        maximum: 2,
        power: .41,
        range: 7.7,
        rating: "A",
        symbol: "Int_DroneControl_Prospector_Size3_Class5"
      }, {
        class: 5,
        cost: 48600,
        edID: 128671279,
        eddbID: 1444,
        grp: "pc",
        id: "Pa",
        mass: 20,
        maximum: 4,
        power: .4,
        range: 3.9,
        rating: "E",
        symbol: "Int_DroneControl_Prospector_Size5_Class1"
      }, {
        class: 5,
        cost: 97200,
        edID: 128671280,
        eddbID: 1445,
        grp: "pc",
        id: "Pb",
        mass: 8,
        maximum: 4,
        power: .3,
        range: 5.2,
        rating: "D",
        symbol: "Int_DroneControl_Prospector_Size5_Class2"
      }, {
        class: 5,
        cost: 194400,
        edID: 128671281,
        eddbID: 1446,
        grp: "pc",
        id: "Pc",
        mass: 20,
        maximum: 4,
        power: .5,
        range: 6.5,
        rating: "C",
        symbol: "Int_DroneControl_Prospector_Size5_Class3"
      }, {
        class: 5,
        cost: 388800,
        edID: 128671282,
        eddbID: 1447,
        grp: "pc",
        id: "Pd",
        mass: 32,
        maximum: 4,
        power: .97,
        range: 7.8,
        rating: "B",
        symbol: "Int_DroneControl_Prospector_Size5_Class4"
      }, {
        class: 5,
        cost: 777600,
        edID: 128671283,
        eddbID: 1448,
        grp: "pc",
        id: "Pe",
        mass: 20,
        maximum: 4,
        power: .6,
        range: 9.1,
        rating: "A",
        symbol: "Int_DroneControl_Prospector_Size5_Class5"
      }, {
        class: 7,
        cost: 437400,
        edID: 128671284,
        eddbID: 1449,
        grp: "pc",
        id: "Pf",
        mass: 80,
        maximum: 8,
        power: .55,
        range: 5.1,
        rating: "E",
        symbol: "Int_DroneControl_Prospector_Size7_Class1"
      }, {
        class: 7,
        cost: 874800,
        edID: 128671285,
        eddbID: 1450,
        grp: "pc",
        id: "Pg",
        mass: 32,
        maximum: 8,
        power: .41,
        range: 6.8,
        rating: "D",
        symbol: "Int_DroneControl_Prospector_Size7_Class2"
      }, {
        class: 7,
        cost: 1749600,
        edID: 128671286,
        eddbID: 1451,
        grp: "pc",
        id: "Ph",
        mass: 80,
        maximum: 8,
        power: .69,
        range: 8.5,
        rating: "C",
        symbol: "Int_DroneControl_Prospector_Size7_Class3"
      }, {
        class: 7,
        cost: 3499200,
        edID: 128671287,
        eddbID: 1452,
        grp: "pc",
        id: "Pi",
        mass: 128,
        maximum: 8,
        power: .97,
        range: 10.2,
        rating: "B",
        symbol: "Int_DroneControl_Prospector_Size7_Class4"
      }, {
        class: 7,
        cost: 6998400,
        edID: 128671288,
        eddbID: 1453,
        grp: "pc",
        id: "Pj",
        mass: 80,
        maximum: 8,
        power: .83,
        range: 11.9,
        rating: "A",
        symbol: "Int_DroneControl_Prospector_Size7_Class5"
      } ],
      pce: [ {
        class: 2,
        cost: 4320,
        edID: 128734690,
        eddbID: 1563,
        grp: "pce",
        id: "ma",
        mass: 2.5,
        passengers: 2,
        rating: "E",
        symbol: "Int_PassengerCabin_Size2_Class1"
      }, {
        class: 3,
        cost: 8659,
        edID: 128734691,
        eddbID: 1564,
        grp: "pce",
        id: "mb",
        mass: 5,
        passengers: 4,
        rating: "E",
        symbol: "Int_PassengerCabin_Size3_Class1"
      }, {
        class: 4,
        cost: 18960,
        edID: 128727922,
        eddbID: 1565,
        grp: "pce",
        id: "mc",
        mass: 10,
        passengers: 8,
        rating: "E",
        symbol: "Int_PassengerCabin_Size4_Class1"
      }, {
        class: 5,
        cost: 34960,
        edID: 128734693,
        eddbID: 1566,
        grp: "pce",
        id: "md",
        mass: 20,
        passengers: 16,
        rating: "E",
        symbol: "Int_PassengerCabin_Size5_Class1"
      }, {
        class: 6,
        cost: 61420,
        edID: 128727926,
        eddbID: 1567,
        grp: "pce",
        id: "me",
        mass: 40,
        passengers: 32,
        rating: "E",
        symbol: "Int_PassengerCabin_Size6_Class1"
      } ],
      pci: [ {
        class: 3,
        cost: 26707,
        edID: 128734692,
        eddbID: 1568,
        grp: "pci",
        id: "mf",
        mass: 5,
        passengers: 3,
        rating: "D",
        symbol: "Int_PassengerCabin_Size3_Class2"
      }, {
        class: 4,
        cost: 56870,
        edID: 128727923,
        eddbID: 1569,
        grp: "pci",
        id: "mg",
        mass: 10,
        passengers: 6,
        rating: "D",
        symbol: "Int_PassengerCabin_Size4_Class2"
      }, {
        class: 5,
        cost: 92370,
        edID: 128734694,
        eddbID: 1570,
        grp: "pci",
        id: "mh",
        mass: 20,
        passengers: 10,
        rating: "D",
        symbol: "Int_PassengerCabin_Size5_Class2"
      }, {
        class: 6,
        cost: 184240,
        edID: 128727927,
        eddbID: 1571,
        grp: "pci",
        id: "mi",
        mass: 40,
        passengers: 16,
        rating: "D",
        symbol: "Int_PassengerCabin_Size6_Class2"
      } ],
      pcm: [ {
        class: 4,
        cost: 170587,
        edID: 128727924,
        eddbID: 1572,
        grp: "pcm",
        id: "mj",
        mass: 10,
        passengers: 3,
        rating: "C",
        symbol: "Int_PassengerCabin_Size4_Class3"
      }, {
        class: 5,
        cost: 340528,
        edID: 128734695,
        eddbID: 1573,
        grp: "pcm",
        id: "mk",
        mass: 20,
        passengers: 6,
        rating: "C",
        symbol: "Int_PassengerCabin_Size5_Class3"
      }, {
        class: 6,
        cost: 552700,
        edID: 128727928,
        eddbID: 1574,
        grp: "pcm",
        id: "ml",
        mass: 40,
        passengers: 12,
        rating: "C",
        symbol: "Int_PassengerCabin_Size6_Class3"
      } ],
      pcq: [ {
        class: 5,
        cost: 1658100,
        edID: 128727925,
        eddbID: 1575,
        grp: "pcq",
        id: "mm",
        mass: 20,
        passengers: 4,
        rating: "B",
        symbol: "Int_PassengerCabin_Size5_Class4"
      }, {
        class: 6,
        cost: 4974288,
        edID: 128727929,
        eddbID: 1576,
        grp: "pcq",
        id: "mn",
        mass: 40,
        passengers: 8,
        rating: "B",
        symbol: "Int_PassengerCabin_Size6_Class4"
      } ],
      rf: [ {
        bins: 1,
        class: 1,
        cost: 6e3,
        edID: 128666684,
        eddbID: 1286,
        grp: "rf",
        id: "1k",
        power: .14,
        rating: "E",
        symbol: "Int_Refinery_Size1_Class1"
      }, {
        bins: 1,
        class: 1,
        cost: 18e3,
        edID: 128666688,
        eddbID: 1290,
        grp: "rf",
        id: "1j",
        power: .18,
        rating: "D",
        symbol: "Int_Refinery_Size1_Class2"
      }, {
        bins: 2,
        class: 1,
        cost: 54e3,
        edID: 128666692,
        eddbID: 1294,
        grp: "rf",
        id: "1i",
        power: .23,
        rating: "C",
        symbol: "Int_Refinery_Size1_Class3"
      }, {
        bins: 3,
        class: 1,
        cost: 162e3,
        edID: 128666696,
        eddbID: 1298,
        grp: "rf",
        id: "1h",
        power: .28,
        rating: "B",
        symbol: "Int_Refinery_Size1_Class4"
      }, {
        bins: 4,
        class: 1,
        cost: 486e3,
        edID: 128666700,
        eddbID: 1302,
        grp: "rf",
        id: "1g",
        power: .32,
        rating: "A",
        symbol: "Int_Refinery_Size1_Class5"
      }, {
        bins: 2,
        class: 2,
        cost: 12600,
        edID: 128666685,
        eddbID: 1287,
        grp: "rf",
        id: "1p",
        power: .17,
        rating: "E",
        symbol: "Int_Refinery_Size2_Class1"
      }, {
        bins: 3,
        class: 2,
        cost: 37800,
        edID: 128666689,
        eddbID: 1291,
        grp: "rf",
        id: "1o",
        power: .22,
        rating: "D",
        symbol: "Int_Refinery_Size2_Class2"
      }, {
        bins: 4,
        class: 2,
        cost: 113400,
        edID: 128666693,
        eddbID: 1295,
        grp: "rf",
        id: "1n",
        power: .28,
        rating: "C",
        symbol: "Int_Refinery_Size2_Class3"
      }, {
        bins: 5,
        class: 2,
        cost: 340200,
        edID: 128666697,
        eddbID: 1299,
        grp: "rf",
        id: "1m",
        power: .34,
        rating: "B",
        symbol: "Int_Refinery_Size2_Class4"
      }, {
        bins: 6,
        class: 2,
        cost: 1020600,
        edID: 128666701,
        eddbID: 1303,
        grp: "rf",
        id: "1l",
        power: .39,
        rating: "A",
        symbol: "Int_Refinery_Size2_Class5"
      }, {
        bins: 3,
        class: 3,
        cost: 26460,
        edID: 128666686,
        eddbID: 1288,
        grp: "rf",
        id: "1u",
        power: .2,
        rating: "E",
        symbol: "Int_Refinery_Size3_Class1"
      }, {
        bins: 4,
        class: 3,
        cost: 79380,
        edID: 128666690,
        eddbID: 1292,
        grp: "rf",
        id: "1t",
        power: .27,
        rating: "D",
        symbol: "Int_Refinery_Size3_Class2"
      }, {
        bins: 6,
        class: 3,
        cost: 238140,
        edID: 128666694,
        eddbID: 1296,
        grp: "rf",
        id: "1s",
        power: .34,
        rating: "C",
        symbol: "Int_Refinery_Size3_Class3"
      }, {
        bins: 7,
        class: 3,
        cost: 714420,
        edID: 128666698,
        eddbID: 1300,
        grp: "rf",
        id: "1r",
        power: .41,
        rating: "B",
        symbol: "Int_Refinery_Size3_Class4"
      }, {
        bins: 8,
        class: 3,
        cost: 2143260,
        edID: 128666702,
        eddbID: 1304,
        grp: "rf",
        id: "1q",
        power: .48,
        rating: "A",
        symbol: "Int_Refinery_Size3_Class5"
      }, {
        bins: 4,
        class: 4,
        cost: 55570,
        edID: 128666687,
        eddbID: 1289,
        grp: "rf",
        id: "23",
        power: .25,
        rating: "E",
        symbol: "Int_Refinery_Size4_Class1"
      }, {
        bins: 5,
        class: 4,
        cost: 166700,
        edID: 128666691,
        eddbID: 1293,
        grp: "rf",
        id: "22",
        power: .33,
        rating: "D",
        symbol: "Int_Refinery_Size4_Class2"
      }, {
        bins: 7,
        class: 4,
        cost: 500090,
        edID: 128666695,
        eddbID: 1297,
        grp: "rf",
        id: "21",
        power: .41,
        rating: "C",
        symbol: "Int_Refinery_Size4_Class3"
      }, {
        bins: 9,
        class: 4,
        cost: 1500280,
        edID: 128666699,
        eddbID: 1301,
        grp: "rf",
        id: "20",
        power: .49,
        rating: "B",
        symbol: "Int_Refinery_Size4_Class4"
      }, {
        bins: 10,
        class: 4,
        cost: 4500850,
        edID: 128666703,
        eddbID: 1305,
        grp: "rf",
        id: "1v",
        power: .57,
        rating: "A",
        symbol: "Int_Refinery_Size4_Class5"
      } ],
      scb: [ {
        ammo: 3,
        ammocost: 300,
        boot: 25,
        class: 1,
        clip: 1,
        cost: 517,
        duration: 1,
        edID: 128064298,
        eddbID: 1151,
        grp: "scb",
        id: "52",
        integrity: 32,
        mass: 1.3,
        power: .41,
        rating: "E",
        shieldreinforcement: 12,
        rechargerating: "E",
        spinup: 5,
        thermload: 170,
        symbol: "Int_ShieldCellBank_Size1_Class1"
      }, {
        ammo: 0,
        ammocost: 300,
        boot: 25,
        class: 1,
        clip: 1,
        cost: 1293,
        duration: 1,
        edID: 128064299,
        eddbID: 1152,
        grp: "scb",
        id: "51",
        integrity: 24,
        mass: .5,
        power: .55,
        rating: "D",
        shieldreinforcement: 12.5,
        rechargerating: "D",
        spinup: 5,
        thermload: 170,
        symbol: "Int_ShieldCellBank_Size1_Class2"
      }, {
        ammo: 2,
        ammocost: 300,
        boot: 25,
        class: 1,
        clip: 1,
        cost: 3231,
        duration: 1,
        edID: 128064300,
        eddbID: 1153,
        grp: "scb",
        id: "50",
        integrity: 40,
        mass: 1.3,
        power: .69,
        rating: "C",
        shieldreinforcement: 20,
        rechargerating: "C",
        spinup: 5,
        thermload: 170,
        symbol: "Int_ShieldCellBank_Size1_Class3"
      }, {
        ammo: 3,
        ammocost: 300,
        boot: 25,
        class: 1,
        clip: 1,
        cost: 8078,
        duration: 1,
        edID: 128064301,
        eddbID: 1154,
        grp: "scb",
        id: "4v",
        integrity: 56,
        mass: 2,
        power: .83,
        rating: "B",
        shieldreinforcement: 24,
        rechargerating: "B",
        spinup: 5,
        thermload: 170,
        symbol: "Int_ShieldCellBank_Size1_Class4"
      }, {
        ammo: 2,
        ammocost: 300,
        boot: 25,
        class: 1,
        clip: 1,
        cost: 20195,
        duration: 1,
        edID: 128064302,
        eddbID: 1155,
        grp: "scb",
        id: "4u",
        integrity: 48,
        mass: 1.3,
        power: .97,
        rating: "A",
        shieldreinforcement: 28,
        rechargerating: "A",
        spinup: 5,
        thermload: 170,
        symbol: "Int_ShieldCellBank_Size1_Class5"
      }, {
        ammo: 4,
        ammocost: 300,
        boot: 25,
        class: 2,
        clip: 1,
        cost: 1448,
        duration: 2,
        edID: 128064303,
        eddbID: 1156,
        grp: "scb",
        id: "57",
        integrity: 41,
        mass: 2.5,
        power: .5,
        rating: "E",
        shieldreinforcement: 14,
        rechargerating: "E",
        spinup: 5,
        thermload: 240,
        symbol: "Int_ShieldCellBank_Size2_Class1"
      }, {
        ammo: 2,
        ammocost: 300,
        boot: 25,
        class: 2,
        clip: 1,
        cost: 3619,
        duration: 2,
        edID: 128064304,
        eddbID: 1157,
        grp: "scb",
        id: "56",
        integrity: 31,
        mass: 1,
        power: .67,
        rating: "D",
        shieldreinforcement: 18,
        rechargerating: "D",
        spinup: 5,
        thermload: 240,
        symbol: "Int_ShieldCellBank_Size2_Class2"
      }, {
        ammo: 3,
        ammocost: 300,
        boot: 25,
        class: 2,
        clip: 1,
        cost: 9048,
        duration: 2,
        edID: 128064305,
        eddbID: 1158,
        grp: "scb",
        id: "55",
        integrity: 51,
        mass: 2.5,
        power: .84,
        rating: "C",
        shieldreinforcement: 23,
        rechargerating: "C",
        spinup: 5,
        thermload: 240,
        symbol: "Int_ShieldCellBank_Size2_Class3"
      }, {
        ammo: 4,
        ammocost: 300,
        boot: 25,
        class: 2,
        clip: 1,
        cost: 22619,
        duration: 2,
        edID: 128064306,
        eddbID: 1159,
        grp: "scb",
        id: "54",
        integrity: 71,
        mass: 4,
        power: 1.01,
        rating: "B",
        shieldreinforcement: 28,
        rechargerating: "B",
        spinup: 5,
        thermload: 240,
        symbol: "Int_ShieldCellBank_Size2_Class4"
      }, {
        ammo: 3,
        ammocost: 300,
        boot: 25,
        class: 2,
        clip: 1,
        cost: 56547,
        duration: 2,
        edID: 128064307,
        eddbID: 1160,
        grp: "scb",
        id: "53",
        integrity: 61,
        mass: 2.5,
        power: 1.18,
        rating: "A",
        shieldreinforcement: 32,
        rechargerating: "A",
        spinup: 5,
        thermload: 240,
        symbol: "Int_ShieldCellBank_Size2_Class5"
      }, {
        ammo: 4,
        ammocost: 300,
        boot: 25,
        class: 3,
        clip: 1,
        cost: 4053,
        duration: 2,
        edID: 128064308,
        eddbID: 1161,
        grp: "scb",
        id: "5c",
        integrity: 51,
        mass: 5,
        power: .61,
        rating: "E",
        shieldreinforcement: 17,
        rechargerating: "E",
        spinup: 5,
        thermload: 340,
        symbol: "Int_ShieldCellBank_Size3_Class1"
      }, {
        ammo: 2,
        ammocost: 300,
        boot: 25,
        class: 3,
        clip: 1,
        cost: 10133,
        duration: 2,
        edID: 128064309,
        eddbID: 1162,
        grp: "scb",
        id: "5b",
        integrity: 38,
        mass: 2,
        power: .82,
        rating: "D",
        shieldreinforcement: 23,
        rechargerating: "D",
        spinup: 5,
        thermload: 340,
        symbol: "Int_ShieldCellBank_Size3_Class2"
      }, {
        ammo: 3,
        ammocost: 300,
        boot: 25,
        class: 3,
        clip: 1,
        cost: 25333,
        duration: 2,
        edID: 128064310,
        eddbID: 1163,
        grp: "scb",
        id: "5a",
        integrity: 64,
        mass: 5,
        power: 1.02,
        rating: "C",
        shieldreinforcement: 29,
        rechargerating: "C",
        spinup: 5,
        thermload: 340,
        symbol: "Int_ShieldCellBank_Size3_Class3"
      }, {
        ammo: 4,
        ammocost: 300,
        boot: 25,
        class: 3,
        clip: 1,
        cost: 63333,
        duration: 2,
        edID: 128064311,
        eddbID: 1164,
        grp: "scb",
        id: "59",
        integrity: 90,
        mass: 8,
        power: 1.22,
        rating: "B",
        shieldreinforcement: 35,
        rechargerating: "B",
        spinup: 5,
        thermload: 340,
        symbol: "Int_ShieldCellBank_Size3_Class4"
      }, {
        ammo: 3,
        ammocost: 300,
        boot: 25,
        class: 3,
        clip: 1,
        cost: 158331,
        duration: 2,
        edID: 128064312,
        eddbID: 1165,
        grp: "scb",
        id: "58",
        integrity: 77,
        mass: 5,
        power: 1.43,
        rating: "A",
        shieldreinforcement: 41,
        rechargerating: "A",
        spinup: 5,
        thermload: 340,
        symbol: "Int_ShieldCellBank_Size3_Class5"
      }, {
        ammo: 4,
        ammocost: 300,
        boot: 25,
        class: 4,
        clip: 1,
        cost: 11349,
        duration: 3,
        edID: 128064313,
        eddbID: 1166,
        grp: "scb",
        id: "5h",
        integrity: 64,
        mass: 10,
        power: .74,
        rating: "E",
        shieldreinforcement: 20,
        rechargerating: "E",
        spinup: 5,
        thermload: 410,
        symbol: "Int_ShieldCellBank_Size4_Class1"
      }, {
        ammo: 2,
        ammocost: 300,
        boot: 25,
        class: 4,
        clip: 1,
        cost: 28373,
        duration: 3,
        edID: 128064314,
        eddbID: 1167,
        grp: "scb",
        id: "5g",
        integrity: 48,
        mass: 4,
        power: .98,
        rating: "D",
        shieldreinforcement: 26,
        rechargerating: "D",
        spinup: 5,
        thermload: 410,
        symbol: "Int_ShieldCellBank_Size4_Class2"
      }, {
        ammo: 3,
        ammocost: 300,
        boot: 25,
        class: 4,
        clip: 1,
        cost: 70932,
        duration: 3,
        edID: 128064315,
        eddbID: 1168,
        grp: "scb",
        id: "5f",
        integrity: 80,
        mass: 10,
        power: 1.23,
        rating: "C",
        shieldreinforcement: 33,
        rechargerating: "C",
        spinup: 5,
        thermload: 410,
        symbol: "Int_ShieldCellBank_Size4_Class3"
      }, {
        ammo: 4,
        ammocost: 300,
        boot: 25,
        class: 4,
        clip: 1,
        cost: 177331,
        duration: 3,
        edID: 128064316,
        eddbID: 1169,
        grp: "scb",
        id: "5e",
        integrity: 112,
        mass: 16,
        power: 1.48,
        rating: "B",
        shieldreinforcement: 39,
        rechargerating: "B",
        spinup: 5,
        thermload: 410,
        symbol: "Int_ShieldCellBank_Size4_Class4"
      }, {
        ammo: 3,
        ammocost: 300,
        boot: 25,
        class: 4,
        clip: 1,
        cost: 443328,
        duration: 3,
        edID: 128064317,
        eddbID: 1170,
        grp: "scb",
        id: "5d",
        integrity: 96,
        mass: 10,
        power: 1.72,
        rating: "A",
        shieldreinforcement: 46,
        rechargerating: "A",
        spinup: 5,
        thermload: 410,
        symbol: "Int_ShieldCellBank_Size4_Class5"
      }, {
        ammo: 4,
        ammocost: 300,
        boot: 25,
        class: 5,
        clip: 1,
        cost: 31778,
        duration: 5,
        edID: 128064318,
        eddbID: 1171,
        grp: "scb",
        id: "5m",
        integrity: 77,
        mass: 20,
        power: .9,
        rating: "E",
        shieldreinforcement: 21,
        rechargerating: "E",
        spinup: 5,
        thermload: 540,
        symbol: "Int_ShieldCellBank_Size5_Class1"
      }, {
        ammo: 2,
        ammocost: 300,
        boot: 25,
        class: 5,
        clip: 1,
        cost: 79444,
        duration: 5,
        edID: 128064319,
        eddbID: 1172,
        grp: "scb",
        id: "5l",
        integrity: 58,
        mass: 8,
        power: 1.2,
        rating: "D",
        shieldreinforcement: 28,
        rechargerating: "D",
        spinup: 5,
        thermload: 540,
        symbol: "Int_ShieldCellBank_Size5_Class2"
      }, {
        ammo: 3,
        ammocost: 300,
        boot: 25,
        class: 5,
        clip: 1,
        cost: 198612,
        duration: 5,
        edID: 128064320,
        eddbID: 1173,
        grp: "scb",
        id: "5k",
        integrity: 96,
        mass: 20,
        power: 1.5,
        rating: "C",
        shieldreinforcement: 35,
        rechargerating: "C",
        spinup: 5,
        thermload: 540,
        symbol: "Int_ShieldCellBank_Size5_Class3"
      }, {
        ammo: 4,
        ammocost: 300,
        boot: 25,
        class: 5,
        clip: 1,
        cost: 496527,
        duration: 5,
        edID: 128064321,
        eddbID: 1174,
        grp: "scb",
        id: "5j",
        integrity: 134,
        mass: 32,
        power: 1.8,
        rating: "B",
        shieldreinforcement: 41,
        rechargerating: "B",
        spinup: 5,
        thermload: 540,
        symbol: "Int_ShieldCellBank_Size5_Class4"
      }, {
        ammo: 3,
        ammocost: 300,
        boot: 25,
        class: 5,
        clip: 1,
        cost: 1241319,
        duration: 5,
        edID: 128064322,
        eddbID: 1175,
        grp: "scb",
        id: "5i",
        integrity: 115,
        mass: 20,
        power: 2.1,
        rating: "A",
        shieldreinforcement: 48,
        rechargerating: "A",
        spinup: 5,
        thermload: 540,
        symbol: "Int_ShieldCellBank_Size5_Class5"
      }, {
        ammo: 5,
        ammocost: 300,
        boot: 25,
        class: 6,
        clip: 1,
        cost: 88987,
        duration: 8,
        edID: 128064323,
        eddbID: 1176,
        grp: "scb",
        id: "5r",
        integrity: 90,
        mass: 40,
        power: 1.06,
        rating: "E",
        shieldreinforcement: 20,
        rechargerating: "E",
        spinup: 5,
        thermload: 640,
        symbol: "Int_ShieldCellBank_Size6_Class1"
      }, {
        ammo: 3,
        ammocost: 300,
        boot: 25,
        class: 6,
        clip: 1,
        cost: 222444,
        duration: 8,
        edID: 128064324,
        eddbID: 1177,
        grp: "scb",
        id: "5q",
        integrity: 68,
        mass: 16,
        power: 1.42,
        rating: "D",
        shieldreinforcement: 26,
        rechargerating: "D",
        spinup: 5,
        thermload: 640,
        symbol: "Int_ShieldCellBank_Size6_Class2"
      }, {
        ammo: 4,
        ammocost: 300,
        boot: 25,
        class: 6,
        clip: 1,
        cost: 556110,
        duration: 8,
        edID: 128064325,
        eddbID: 1178,
        grp: "scb",
        id: "5p",
        integrity: 113,
        mass: 40,
        power: 1.77,
        rating: "C",
        shieldreinforcement: 33,
        rechargerating: "C",
        spinup: 5,
        thermload: 640,
        symbol: "Int_ShieldCellBank_Size6_Class3"
      }, {
        ammo: 5,
        ammocost: 300,
        boot: 25,
        class: 6,
        clip: 1,
        cost: 1390275,
        duration: 8,
        edID: 128064326,
        eddbID: 1179,
        grp: "scb",
        id: "5o",
        integrity: 158,
        mass: 64,
        power: 2.12,
        rating: "B",
        shieldreinforcement: 39,
        rechargerating: "B",
        spinup: 5,
        thermload: 640,
        symbol: "Int_ShieldCellBank_Size6_Class4"
      }, {
        ammo: 4,
        ammocost: 300,
        boot: 25,
        class: 6,
        clip: 1,
        cost: 3475688,
        duration: 8,
        edID: 128064327,
        eddbID: 1180,
        grp: "scb",
        id: "5n",
        integrity: 136,
        mass: 40,
        power: 2.48,
        rating: "A",
        shieldreinforcement: 46,
        rechargerating: "A",
        spinup: 5,
        thermload: 640,
        symbol: "Int_ShieldCellBank_Size6_Class5"
      }, {
        ammo: 5,
        ammocost: 300,
        boot: 25,
        class: 7,
        clip: 1,
        cost: 249137,
        duration: 11,
        edID: 128064328,
        eddbID: 1181,
        grp: "scb",
        id: "60",
        integrity: 105,
        mass: 80,
        power: 1.24,
        rating: "E",
        shieldreinforcement: 24,
        rechargerating: "E",
        spinup: 5,
        thermload: 720,
        symbol: "Int_ShieldCellBank_Size7_Class1"
      }, {
        ammo: 3,
        ammocost: 300,
        boot: 25,
        class: 7,
        clip: 1,
        cost: 622843,
        duration: 11,
        edID: 128064329,
        eddbID: 1182,
        grp: "scb",
        id: "5v",
        integrity: 79,
        mass: 32,
        power: 1.66,
        rating: "D",
        shieldreinforcement: 32,
        rechargerating: "D",
        spinup: 5,
        thermload: 720,
        symbol: "Int_ShieldCellBank_Size7_Class2"
      }, {
        ammo: 4,
        ammocost: 300,
        boot: 25,
        class: 7,
        clip: 1,
        cost: 1557108,
        duration: 11,
        edID: 128064330,
        eddbID: 1183,
        grp: "scb",
        id: "5u",
        integrity: 131,
        mass: 80,
        power: 2.07,
        rating: "C",
        shieldreinforcement: 41,
        rechargerating: "C",
        spinup: 5,
        thermload: 720,
        symbol: "Int_ShieldCellBank_Size7_Class3"
      }, {
        ammo: 5,
        ammocost: 300,
        boot: 25,
        class: 7,
        clip: 1,
        cost: 3892770,
        duration: 11,
        edID: 128064331,
        eddbID: 1184,
        grp: "scb",
        id: "5t",
        integrity: 183,
        mass: 128,
        power: 2.48,
        rating: "B",
        shieldreinforcement: 49,
        rechargerating: "B",
        spinup: 5,
        thermload: 720,
        symbol: "Int_ShieldCellBank_Size7_Class4"
      }, {
        ammo: 4,
        ammocost: 300,
        boot: 25,
        class: 7,
        clip: 1,
        cost: 9731925,
        duration: 11,
        edID: 128064332,
        eddbID: 1185,
        grp: "scb",
        id: "5s",
        integrity: 157,
        mass: 80,
        power: 2.9,
        rating: "A",
        shieldreinforcement: 57,
        rechargerating: "A",
        spinup: 5,
        thermload: 720,
        symbol: "Int_ShieldCellBank_Size7_Class5"
      }, {
        ammo: 5,
        ammocost: 300,
        boot: 25,
        class: 8,
        clip: 1,
        cost: 697584,
        duration: 17,
        edID: 128064333,
        eddbID: 1186,
        grp: "scb",
        id: "65",
        integrity: 120,
        mass: 160,
        power: 1.44,
        rating: "E",
        shieldreinforcement: 28,
        rechargerating: "C",
        spinup: 5,
        thermload: 800,
        symbol: "Int_ShieldCellBank_Size8_Class1"
      }, {
        ammo: 3,
        ammocost: 300,
        boot: 25,
        class: 8,
        clip: 1,
        cost: 1743961,
        duration: 17,
        edID: 128064334,
        eddbID: 1187,
        grp: "scb",
        id: "64",
        integrity: 90,
        mass: 64,
        power: 1.92,
        rating: "D",
        shieldreinforcement: 37,
        rechargerating: "D",
        spinup: 5,
        thermload: 800,
        symbol: "Int_ShieldCellBank_Size8_Class2"
      }, {
        ammo: 4,
        ammocost: 300,
        boot: 25,
        class: 8,
        clip: 1,
        cost: 4359903,
        duration: 17,
        edID: 128064335,
        eddbID: 1188,
        grp: "scb",
        id: "63",
        integrity: 150,
        mass: 160,
        power: 2.4,
        rating: "C",
        shieldreinforcement: 47,
        rechargerating: "C",
        spinup: 5,
        thermload: 800,
        symbol: "Int_ShieldCellBank_Size8_Class3"
      }, {
        ammo: 5,
        ammocost: 300,
        boot: 25,
        class: 8,
        clip: 1,
        cost: 10899756,
        duration: 17,
        edID: 128064336,
        eddbID: 1189,
        grp: "scb",
        id: "62",
        integrity: 210,
        mass: 256,
        power: 2.88,
        rating: "B",
        shieldreinforcement: 56,
        rechargerating: "B",
        spinup: 5,
        thermload: 800,
        symbol: "Int_ShieldCellBank_Size8_Class4"
      }, {
        ammo: 4,
        ammocost: 300,
        boot: 25,
        class: 8,
        clip: 1,
        cost: 27249391,
        duration: 17,
        edID: 128064337,
        eddbID: 1190,
        grp: "scb",
        id: "61",
        integrity: 180,
        mass: 160,
        power: 3.36,
        rating: "A",
        shieldreinforcement: 65,
        rechargerating: "A",
        spinup: 5,
        thermload: 800,
        symbol: "Int_ShieldCellBank_Size8_Class5"
      } ],
      sg: [ {
        brokenregen: 1.6,
        class: 1,
        cost: 88075,
        distdraw: .6,
        edID: 128064262,
        eddbID: 1551,
        explres: .5,
        grp: "sg",
        id: "1x",
        integrity: 48,
        kinres: .4,
        mass: 1.3,
        maxmass: 63,
        maxmul: 1.7,
        minmass: 13,
        minmul: .7,
        optmass: 25,
        optmul: 1.2,
        power: 1.68,
        rating: "A",
        regen: 1,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size1_Class5"
      }, {
        brokenregen: 1.6,
        class: 2,
        cost: 1980,
        distdraw: .6,
        edID: 128064263,
        eddbID: 1116,
        explres: .5,
        grp: "sg",
        id: "3v",
        integrity: 41,
        kinres: .4,
        mass: 2.5,
        maxmass: 138,
        maxmul: 1.3,
        minmass: 28,
        minmul: .3,
        optmass: 55,
        optmul: .8,
        power: .9,
        rating: "E",
        regen: 1,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size2_Class1"
      }, {
        brokenregen: 1.6,
        class: 2,
        cost: 5930,
        distdraw: .6,
        edID: 128064264,
        eddbID: 1117,
        explres: .5,
        grp: "sg",
        id: "3u",
        integrity: 31,
        kinres: .4,
        mass: 1,
        maxmass: 138,
        maxmul: 1.4,
        minmass: 28,
        minmul: .4,
        optmass: 55,
        optmul: .9,
        power: 1.2,
        rating: "D",
        regen: 1,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size2_Class2"
      }, {
        brokenregen: 1.6,
        class: 2,
        cost: 17800,
        distdraw: .6,
        edID: 128064265,
        eddbID: 1118,
        explres: .5,
        grp: "sg",
        id: "3t",
        integrity: 51,
        kinres: .4,
        mass: 2.5,
        maxmass: 138,
        maxmul: 1.5,
        minmass: 28,
        minmul: .5,
        optmass: 55,
        optmul: 1,
        power: 1.5,
        rating: "C",
        regen: 1,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size2_Class3"
      }, {
        brokenregen: 1.6,
        class: 2,
        cost: 53410,
        distdraw: .6,
        edID: 128064266,
        eddbID: 1119,
        explres: .5,
        grp: "sg",
        id: "3s",
        integrity: 71,
        kinres: .4,
        mass: 4,
        maxmass: 138,
        maxmul: 1.6,
        minmass: 28,
        minmul: .6,
        optmass: 55,
        optmul: 1.1,
        power: 1.8,
        rating: "B",
        regen: 1,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size2_Class4"
      }, {
        brokenregen: 1.6,
        class: 2,
        cost: 160220,
        distdraw: .6,
        edID: 128064267,
        eddbID: 1120,
        explres: .5,
        grp: "sg",
        id: "3r",
        integrity: 61,
        kinres: .4,
        mass: 2.5,
        maxmass: 138,
        maxmul: 1.7,
        minmass: 28,
        minmul: .7,
        optmass: 55,
        optmul: 1.2,
        power: 2.1,
        rating: "A",
        regen: 1,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size2_Class5"
      }, {
        brokenregen: 1.9,
        class: 3,
        cost: 6270,
        distdraw: .6,
        edID: 128064268,
        eddbID: 1121,
        explres: .5,
        grp: "sg",
        id: "44",
        integrity: 51,
        kinres: .4,
        mass: 5,
        maxmass: 413,
        maxmul: 1.3,
        minmass: 83,
        minmul: .3,
        optmass: 165,
        optmul: .8,
        power: 1.08,
        rating: "E",
        regen: 1,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size3_Class1"
      }, {
        brokenregen: 1.9,
        class: 3,
        cost: 18810,
        distdraw: .6,
        edID: 128064269,
        eddbID: 1122,
        explres: .5,
        grp: "sg",
        id: "43",
        integrity: 38,
        kinres: .4,
        mass: 2,
        maxmass: 413,
        maxmul: 1.4,
        minmass: 83,
        minmul: .4,
        optmass: 165,
        optmul: .9,
        power: 1.44,
        rating: "D",
        regen: 1,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size3_Class2"
      }, {
        brokenregen: 1.9,
        class: 3,
        cost: 56440,
        distdraw: .6,
        edID: 128064270,
        eddbID: 1123,
        explres: .5,
        grp: "sg",
        id: "42",
        integrity: 64,
        kinres: .4,
        mass: 5,
        maxmass: 413,
        maxmul: 1.5,
        minmass: 83,
        minmul: .5,
        optmass: 165,
        optmul: 1,
        power: 1.8,
        rating: "C",
        regen: 1,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size3_Class3"
      }, {
        brokenregen: 1.9,
        class: 3,
        cost: 169300,
        distdraw: .6,
        edID: 128064271,
        eddbID: 1124,
        explres: .5,
        grp: "sg",
        id: "41",
        integrity: 90,
        kinres: .4,
        mass: 8,
        maxmass: 413,
        maxmul: 1.6,
        minmass: 83,
        minmul: .6,
        optmass: 165,
        optmul: 1.1,
        power: 2.16,
        rating: "B",
        regen: 1,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size3_Class4"
      }, {
        brokenregen: 1.9,
        class: 3,
        cost: 507910,
        distdraw: .6,
        edID: 128064272,
        eddbID: 1125,
        explres: .5,
        grp: "sg",
        id: "40",
        integrity: 77,
        kinres: .4,
        mass: 5,
        maxmass: 413,
        maxmul: 1.7,
        minmass: 83,
        minmul: .7,
        optmass: 165,
        optmul: 1.2,
        power: 2.52,
        rating: "A",
        regen: 1,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size3_Class5"
      }, {
        brokenregen: 2.5,
        class: 4,
        cost: 19880,
        distdraw: .6,
        edID: 128064273,
        eddbID: 1126,
        explres: .5,
        grp: "sg",
        id: "49",
        integrity: 64,
        kinres: .4,
        mass: 10,
        maxmass: 713,
        maxmul: 1.3,
        minmass: 143,
        minmul: .3,
        optmass: 285,
        optmul: .8,
        power: 1.32,
        rating: "E",
        regen: 1,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size4_Class1"
      }, {
        brokenregen: 2.5,
        class: 4,
        cost: 59630,
        distdraw: .6,
        edID: 128064274,
        eddbID: 1127,
        explres: .5,
        grp: "sg",
        id: "48",
        integrity: 48,
        kinres: .4,
        mass: 4,
        maxmass: 713,
        maxmul: 1.4,
        minmass: 143,
        minmul: .4,
        optmass: 285,
        optmul: .9,
        power: 1.76,
        rating: "D",
        regen: 1,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size4_Class2"
      }, {
        brokenregen: 2.5,
        class: 4,
        cost: 178900,
        distdraw: .6,
        edID: 128064275,
        eddbID: 1128,
        explres: .5,
        grp: "sg",
        id: "47",
        integrity: 80,
        kinres: .4,
        mass: 10,
        maxmass: 713,
        maxmul: 1.5,
        minmass: 143,
        minmul: .5,
        optmass: 285,
        optmul: 1,
        power: 2.2,
        rating: "C",
        regen: 1,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size4_Class3"
      }, {
        brokenregen: 2.5,
        class: 4,
        cost: 536690,
        distdraw: .6,
        edID: 128064276,
        eddbID: 1129,
        explres: .5,
        grp: "sg",
        id: "46",
        integrity: 112,
        kinres: .4,
        mass: 16,
        maxmass: 713,
        maxmul: 1.6,
        minmass: 143,
        minmul: .6,
        optmass: 285,
        optmul: 1.1,
        power: 2.64,
        rating: "B",
        regen: 1,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size4_Class4"
      }, {
        brokenregen: 2.5,
        class: 4,
        cost: 1610080,
        distdraw: .6,
        edID: 128064277,
        eddbID: 1130,
        explres: .5,
        grp: "sg",
        id: "45",
        integrity: 96,
        kinres: .4,
        mass: 10,
        maxmass: 713,
        maxmul: 1.7,
        minmass: 143,
        minmul: .7,
        optmass: 285,
        optmul: 1.2,
        power: 3.08,
        rating: "A",
        regen: 1,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size4_Class5"
      }, {
        brokenregen: 3.7,
        class: 5,
        cost: 63010,
        distdraw: .6,
        edID: 128064278,
        eddbID: 1131,
        explres: .5,
        grp: "sg",
        id: "4e",
        integrity: 77,
        kinres: .4,
        mass: 20,
        maxmass: 1013,
        maxmul: 1.3,
        minmass: 203,
        minmul: .3,
        optmass: 405,
        optmul: .8,
        power: 1.56,
        rating: "E",
        regen: 1,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size5_Class1"
      }, {
        brokenregen: 3.7,
        class: 5,
        cost: 189040,
        distdraw: .6,
        edID: 128064279,
        eddbID: 1132,
        explres: .5,
        grp: "sg",
        id: "4d",
        integrity: 58,
        kinres: .4,
        mass: 8,
        maxmass: 1013,
        maxmul: 1.4,
        minmass: 203,
        minmul: .4,
        optmass: 405,
        optmul: .9,
        power: 2.08,
        rating: "D",
        regen: 1,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size5_Class2"
      }, {
        brokenregen: 3.7,
        class: 5,
        cost: 567110,
        distdraw: .6,
        edID: 128064280,
        eddbID: 1133,
        explres: .5,
        grp: "sg",
        id: "4c",
        integrity: 96,
        kinres: .4,
        mass: 20,
        maxmass: 1013,
        maxmul: 1.5,
        minmass: 203,
        minmul: .5,
        optmass: 405,
        optmul: 1,
        power: 2.6,
        rating: "C",
        regen: 1,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size5_Class3"
      }, {
        brokenregen: 3.7,
        class: 5,
        cost: 1701320,
        distdraw: .6,
        edID: 128064281,
        eddbID: 1134,
        explres: .5,
        grp: "sg",
        id: "4b",
        integrity: 134,
        kinres: .4,
        mass: 32,
        maxmass: 1013,
        maxmul: 1.6,
        minmass: 203,
        minmul: .6,
        optmass: 405,
        optmul: 1.1,
        power: 3.12,
        rating: "B",
        regen: 1,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size5_Class4"
      }, {
        brokenregen: 3.7,
        class: 5,
        cost: 5103950,
        distdraw: .6,
        edID: 128064282,
        eddbID: 1135,
        explres: .5,
        grp: "sg",
        id: "4a",
        integrity: 115,
        kinres: .4,
        mass: 20,
        maxmass: 1013,
        maxmul: 1.7,
        minmass: 203,
        minmul: .7,
        optmass: 405,
        optmul: 1.2,
        power: 3.64,
        rating: "A",
        regen: 1,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size5_Class5"
      }, {
        brokenregen: 5.3,
        class: 6,
        cost: 199750,
        distdraw: .6,
        edID: 128064283,
        eddbID: 1136,
        explres: .5,
        grp: "sg",
        id: "4j",
        integrity: 90,
        kinres: .4,
        mass: 40,
        maxmass: 1350,
        maxmul: 1.3,
        minmass: 270,
        minmul: .3,
        optmass: 540,
        optmul: .8,
        power: 1.86,
        rating: "E",
        regen: 1.3,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size6_Class1"
      }, {
        brokenregen: 5.3,
        class: 6,
        cost: 599240,
        distdraw: .6,
        edID: 128064284,
        eddbID: 1137,
        explres: .5,
        grp: "sg",
        id: "4i",
        integrity: 68,
        kinres: .4,
        mass: 16,
        maxmass: 1350,
        maxmul: 1.4,
        minmass: 270,
        minmul: .4,
        optmass: 540,
        optmul: .9,
        power: 2.48,
        rating: "D",
        regen: 1.3,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size6_Class2"
      }, {
        brokenregen: 5.3,
        class: 6,
        cost: 1797730,
        distdraw: .6,
        edID: 128064285,
        eddbID: 1138,
        explres: .5,
        grp: "sg",
        id: "4h",
        integrity: 113,
        kinres: .4,
        mass: 40,
        maxmass: 1350,
        maxmul: 1.5,
        minmass: 270,
        minmul: .5,
        optmass: 540,
        optmul: 1,
        power: 3.1,
        rating: "C",
        regen: 1.3,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size6_Class3"
      }, {
        brokenregen: 5.3,
        class: 6,
        cost: 5393180,
        distdraw: .6,
        edID: 128064286,
        eddbID: 1139,
        explres: .5,
        grp: "sg",
        id: "4g",
        integrity: 158,
        kinres: .4,
        mass: 64,
        maxmass: 1350,
        maxmul: 1.6,
        minmass: 270,
        minmul: .6,
        optmass: 540,
        optmul: 1.1,
        power: 3.72,
        rating: "B",
        regen: 1.3,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size6_Class4"
      }, {
        brokenregen: 5.3,
        class: 6,
        cost: 16179530,
        distdraw: .6,
        edID: 128064287,
        eddbID: 1140,
        explres: .5,
        grp: "sg",
        id: "4f",
        integrity: 136,
        kinres: .4,
        mass: 40,
        maxmass: 1350,
        maxmul: 1.7,
        minmass: 270,
        minmul: .7,
        optmass: 540,
        optmul: 1.2,
        power: 4.34,
        rating: "A",
        regen: 1.3,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size6_Class5"
      }, {
        brokenregen: 7.3,
        class: 7,
        cost: 633200,
        distdraw: .6,
        edID: 128064288,
        eddbID: 1141,
        explres: .5,
        grp: "sg",
        id: "4o",
        integrity: 105,
        kinres: .4,
        mass: 80,
        maxmass: 2650,
        maxmul: 1.3,
        minmass: 530,
        minmul: .3,
        optmass: 1060,
        optmul: .8,
        power: 2.1,
        rating: "E",
        regen: 1.8,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size7_Class1"
      }, {
        brokenregen: 7.3,
        class: 7,
        cost: 1899600,
        distdraw: .6,
        edID: 128064289,
        eddbID: 1142,
        explres: .5,
        grp: "sg",
        id: "4n",
        integrity: 79,
        kinres: .4,
        mass: 32,
        maxmass: 2650,
        maxmul: 1.4,
        minmass: 530,
        minmul: .4,
        optmass: 1060,
        optmul: .9,
        power: 2.8,
        rating: "D",
        regen: 1.8,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size7_Class2"
      }, {
        brokenregen: 7.3,
        class: 7,
        cost: 5698790,
        distdraw: .6,
        edID: 128064290,
        eddbID: 1143,
        explres: .5,
        grp: "sg",
        id: "4m",
        integrity: 131,
        kinres: .4,
        mass: 80,
        maxmass: 2650,
        maxmul: 1.5,
        minmass: 530,
        minmul: .5,
        optmass: 1060,
        optmul: 1,
        power: 3.5,
        rating: "C",
        regen: 1.8,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size7_Class3"
      }, {
        brokenregen: 7.3,
        class: 7,
        cost: 17096370,
        distdraw: .6,
        edID: 128064291,
        eddbID: 1144,
        explres: .5,
        grp: "sg",
        id: "4l",
        integrity: 183,
        kinres: .4,
        mass: 128,
        maxmass: 2650,
        maxmul: 1.6,
        minmass: 530,
        minmul: .6,
        optmass: 1060,
        optmul: 1.1,
        power: 4.2,
        rating: "B",
        regen: 1.8,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size7_Class4"
      }, {
        brokenregen: 7.3,
        class: 7,
        cost: 51289110,
        distdraw: .6,
        edID: 128064292,
        eddbID: 1145,
        explres: .5,
        grp: "sg",
        id: "4k",
        integrity: 157,
        kinres: .4,
        mass: 80,
        maxmass: 2650,
        maxmul: 1.7,
        minmass: 530,
        minmul: .7,
        optmass: 1060,
        optmul: 1.2,
        power: 4.9,
        rating: "A",
        regen: 1.8,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size7_Class5"
      }, {
        brokenregen: 9.6,
        class: 8,
        cost: 2007240,
        distdraw: .6,
        edID: 128064293,
        eddbID: 1146,
        explres: .5,
        grp: "sg",
        id: "4t",
        integrity: 120,
        kinres: .4,
        mass: 160,
        maxmass: 4500,
        maxmul: 1.3,
        minmass: 900,
        minmul: .3,
        optmass: 1800,
        optmul: .8,
        power: 2.4,
        rating: "E",
        regen: 2.4,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size8_Class1"
      }, {
        brokenregen: 9.6,
        class: 8,
        cost: 6021720,
        distdraw: .6,
        edID: 128064294,
        eddbID: 1147,
        explres: .5,
        grp: "sg",
        id: "4s",
        integrity: 90,
        kinres: .4,
        mass: 64,
        maxmass: 4500,
        maxmul: 1.4,
        minmass: 900,
        minmul: .4,
        optmass: 1800,
        optmul: .9,
        power: 3.2,
        rating: "D",
        regen: 2.4,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size8_Class2"
      }, {
        brokenregen: 9.6,
        class: 8,
        cost: 18065170,
        distdraw: .6,
        edID: 128064295,
        eddbID: 1148,
        explres: .5,
        grp: "sg",
        id: "4r",
        integrity: 150,
        kinres: .4,
        mass: 160,
        maxmass: 4500,
        maxmul: 1.5,
        minmass: 900,
        minmul: .5,
        optmass: 1800,
        optmul: 1,
        power: 4,
        rating: "C",
        regen: 2.4,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size8_Class3"
      }, {
        brokenregen: 9.6,
        class: 8,
        cost: 54195500,
        distdraw: .6,
        edID: 128064296,
        eddbID: 1149,
        explres: .5,
        grp: "sg",
        id: "4q",
        integrity: 210,
        kinres: .4,
        mass: 256,
        maxmass: 4500,
        maxmul: 1.6,
        minmass: 900,
        minmul: .6,
        optmass: 1800,
        optmul: 1.1,
        power: 4.8,
        rating: "B",
        regen: 2.4,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size8_Class4"
      }, {
        brokenregen: 9.6,
        class: 8,
        cost: 162586490,
        distdraw: .6,
        edID: 128064297,
        eddbID: 1150,
        explres: .5,
        grp: "sg",
        id: "4p",
        integrity: 180,
        kinres: .4,
        mass: 160,
        maxmass: 4500,
        maxmul: 1.7,
        minmass: 900,
        minmul: .7,
        optmass: 1800,
        optmul: 1.2,
        power: 5.6,
        rating: "A",
        regen: 2.4,
        thermres: -.2,
        symbol: "Int_ShieldGenerator_Size8_Class5"
      } ],
      ss: [ {
        class: 1,
        cost: 25e4,
        edID: 128666634,
        eddbID: 1245,
        grp: "ss",
        id: "2i",
        mass: 1.3,
        name: "Detailed Surface Scanner",
        power: 0,
        rating: "C",
        symbol: "Int_DetailedSurfaceScanner_Tiny"
      } ],
      rpl: [ {
        class: 1,
        cost: 600,
        edID: 128777327,
        eddbID: 1594,
        grp: "rpl",
        id: "9z",
        mass: 1.3,
        maximum: 1,
        power: .18,
        range: .6,
        rating: "E",
        symbol: "Int_DroneControl_Repair_Size1_Class1"
      }, {
        class: 1,
        cost: 1200,
        edID: 128777328,
        eddbID: 1595,
        grp: "rpl",
        id: "9q",
        mass: .5,
        maximum: 1,
        power: .14,
        range: .8,
        rating: "D",
        symbol: "Int_DroneControl_Repair_Size1_Class2"
      }, {
        class: 1,
        cost: 2400,
        edID: 128777329,
        eddbID: 1596,
        grp: "rpl",
        id: "9a",
        mass: 1.3,
        maximum: 1,
        power: .23,
        range: 1,
        rating: "C",
        symbol: "Int_DroneControl_Repair_Size1_Class3"
      }, {
        class: 1,
        cost: 4800,
        edID: 128777330,
        eddbID: 1597,
        grp: "rpl",
        id: "9w",
        mass: 2,
        maximum: 1,
        power: .32,
        range: 1.2,
        rating: "B",
        symbol: "Int_DroneControl_Repair_Size1_Class4"
      }, {
        class: 1,
        cost: 9600,
        edID: 128777331,
        eddbID: 1598,
        grp: "rpl",
        id: "9s",
        mass: 1.3,
        maximum: 1,
        power: .28,
        range: 1.4,
        rating: "A",
        symbol: "Int_DroneControl_Repair_Size1_Class5"
      }, {
        class: 3,
        cost: 5400,
        edID: 128777332,
        eddbID: 1599,
        grp: "rpl",
        id: "9x",
        mass: 5,
        maximum: 2,
        power: .27,
        range: .66,
        rating: "E",
        symbol: "Int_DroneControl_Repair_Size3_Class1"
      }, {
        class: 3,
        cost: 10800,
        edID: 128777333,
        eddbID: 1600,
        grp: "rpl",
        id: "9e",
        mass: 2,
        maximum: 2,
        power: .2,
        range: .88,
        rating: "D",
        symbol: "Int_DroneControl_Repair_Size3_Class2"
      }, {
        class: 3,
        cost: 21600,
        edID: 128777334,
        eddbID: 1601,
        grp: "rpl",
        id: "9d",
        mass: 5,
        maximum: 2,
        power: .34,
        range: 1.1,
        rating: "C",
        symbol: "Int_DroneControl_Repair_Size3_Class3"
      }, {
        class: 3,
        cost: 43200,
        edID: 128777335,
        eddbID: 1602,
        grp: "rpl",
        id: "9c",
        mass: 8,
        maximum: 2,
        power: .48,
        range: 1.32,
        rating: "B",
        symbol: "Int_DroneControl_Repair_Size3_Class4"
      }, {
        class: 3,
        cost: 86400,
        edID: 128777336,
        eddbID: 1603,
        grp: "rpl",
        id: "9r",
        mass: 5,
        maximum: 2,
        power: .41,
        range: 1.54,
        rating: "A",
        symbol: "Int_DroneControl_Repair_Size3_Class5"
      }, {
        class: 5,
        cost: 48600,
        edID: 128777337,
        eddbID: 1604,
        grp: "rpl",
        id: "9f",
        mass: 20,
        maximum: 3,
        power: .4,
        range: .78,
        rating: "E",
        symbol: "Int_DroneControl_Repair_Size5_Class1"
      }, {
        class: 5,
        cost: 97200,
        edID: 128777338,
        eddbID: 1605,
        grp: "rpl",
        id: "9v",
        mass: 8,
        maximum: 3,
        power: .3,
        range: 1.04,
        rating: "D",
        symbol: "Int_DroneControl_Repair_Size5_Class2"
      }, {
        class: 5,
        cost: 194400,
        edID: 128777339,
        eddbID: 1606,
        grp: "rpl",
        id: "9t",
        mass: 20,
        maximum: 3,
        power: .5,
        range: 1.3,
        rating: "C",
        symbol: "Int_DroneControl_Repair_Size5_Class3"
      }, {
        class: 5,
        cost: 388800,
        edID: 128777340,
        eddbID: 1607,
        grp: "rpl",
        id: "9g",
        mass: 32,
        maximum: 3,
        power: .97,
        range: 1.56,
        rating: "B",
        symbol: "Int_DroneControl_Repair_Size5_Class4"
      }, {
        class: 5,
        cost: 777600,
        edID: 128777341,
        eddbID: 1608,
        grp: "rpl",
        id: "9b",
        mass: 20,
        maximum: 3,
        power: .6,
        range: 1.82,
        rating: "A",
        symbol: "Int_DroneControl_Repair_Size5_Class5"
      }, {
        class: 7,
        cost: 437400,
        edID: 128777342,
        eddbID: 1609,
        grp: "rpl",
        id: "9y",
        mass: 80,
        maximum: 4,
        power: .55,
        range: 1.02,
        rating: "E",
        symbol: "Int_DroneControl_Repair_Size7_Class1"
      }, {
        class: 7,
        cost: 874800,
        edID: 128777343,
        eddbID: 1610,
        grp: "rpl",
        id: "9h",
        mass: 32,
        maximum: 4,
        power: .41,
        range: 1.36,
        rating: "D",
        symbol: "Int_DroneControl_Repair_Size7_Class2"
      }, {
        class: 7,
        cost: 1749600,
        edID: 128777344,
        eddbID: 1611,
        grp: "rpl",
        id: "9n",
        mass: 80,
        maximum: 4,
        power: .69,
        range: 1.7,
        rating: "C",
        symbol: "Int_DroneControl_Repair_Size7_Class3"
      }, {
        class: 7,
        cost: 3499200,
        edID: 128777345,
        eddbID: 1612,
        grp: "rpl",
        id: "9u",
        mass: 128,
        maximum: 4,
        power: .97,
        range: 2.04,
        rating: "B",
        symbol: "Int_DroneControl_Repair_Size7_Class4"
      }, {
        class: 7,
        cost: 6998400,
        edID: 128777346,
        eddbID: 1613,
        grp: "rpl",
        id: "9j",
        mass: 80,
        maximum: 4,
        power: .83,
        range: 2.38,
        rating: "A",
        symbol: "Int_DroneControl_Repair_Size7_Class5"
      } ],
      rcpl: [ {
        class: 1,
        cost: 2600,
        edID: 128837858,
        eddbID: 1636,
        grp: "rcpl",
        id: "0L",
        mass: 1.3,
        maximum: 1,
        power: .18,
        range: 1.2,
        rating: "E",
        integrity: 24,
        hacktime: 22,
        symbol: "Int_DroneControl_Recon_Size1_Class1"
      }, {
        class: 3,
        cost: 8200,
        edID: 128841592,
        eddbID: 1637,
        grp: "rcpl",
        id: "0M",
        mass: 2,
        maximum: 1,
        power: .2,
        range: 1.4,
        rating: "E",
        integrity: 51,
        hacktime: 17,
        symbol: "Int_DroneControl_Recon_Size3_Class1"
      }, {
        class: 5,
        cost: 75800,
        edID: 128841593,
        eddbID: 1638,
        grp: "rcpl",
        id: "0N",
        mass: 20,
        maximum: 1,
        power: .5,
        range: 1.7,
        rating: "E",
        integrity: 96,
        hacktime: 13,
        symbol: "Int_DroneControl_Recon_Size5_Class1"
      }, {
        class: 7,
        cost: 612200,
        edID: 128841594,
        eddbID: 1639,
        grp: "rcpl",
        id: "0O",
        mass: 128,
        maximum: 1,
        power: .97,
        range: 2,
        rating: "E",
        integrity: 157,
        hacktime: 10,
        symbol: "Int_DroneControl_Recon_Size7_Class1"
      } ],
      rsl: [ {
        rating: "E",
        class: 1,
        grp: "rsl",
        id: "0",
        eddbID: 1617,
        edID: 128793116,
        cost: 1749600,
        mass: 1.3,
        maximum: 1,
        power: .4,
        range: 2e3,
        symbol: "Int_DroneControl_UnkVesselResearch",
        time: 300,
        integrity: 20
      } ],
      gsrp: [ {
        shieldaddition: 44,
        integrity: 36,
        class: 1,
        cost: 1e4,
        edID: 128833965,
        power: .35,
        eddbID: 1373,
        grp: "gsrp",
        id: "0Z",
        mass: 2,
        rating: "E",
        symbol: "Int_GuardianShieldReinforcement_Size1_Class1"
      }, {
        shieldaddition: 61,
        integrity: 36,
        class: 1,
        cost: 3e4,
        edID: 128833966,
        power: .46,
        eddbID: 1373,
        grp: "gsrp",
        id: "0y",
        mass: 1,
        rating: "D",
        symbol: "Int_GuardianShieldReinforcement_Size1_Class2"
      }, {
        shieldaddition: 83,
        integrity: 36,
        class: 2,
        cost: 24e3,
        edID: 128833967,
        power: .56,
        eddbID: 1373,
        grp: "gsrp",
        id: "0z",
        mass: 4,
        rating: "E",
        symbol: "Int_GuardianShieldReinforcement_Size2_Class1"
      }, {
        shieldaddition: 105,
        integrity: 36,
        class: 2,
        cost: 72e3,
        edID: 128833968,
        power: .67,
        eddbID: 1373,
        grp: "gsrp",
        id: "1E",
        mass: 2,
        rating: "D",
        symbol: "Int_GuardianShieldReinforcement_Size2_Class2"
      }, {
        shieldaddition: 143,
        integrity: 36,
        class: 3,
        cost: 172800,
        edID: 128833970,
        power: .84,
        eddbID: 1373,
        grp: "gsrp",
        id: "1F",
        mass: 4,
        rating: "D",
        symbol: "Int_GuardianShieldReinforcement_Size3_Class2"
      }, {
        shieldaddition: 127,
        integrity: 36,
        class: 3,
        cost: 57600,
        edID: 128833969,
        power: .74,
        eddbID: 1373,
        grp: "gsrp",
        id: "1G",
        mass: 8,
        rating: "E",
        symbol: "Int_GuardianShieldReinforcement_Size3_Class1"
      }, {
        shieldaddition: 165,
        integrity: 36,
        class: 4,
        cost: 138240,
        edID: 128833971,
        power: .95,
        eddbID: 1373,
        grp: "gsrp",
        id: "1I",
        mass: 16,
        rating: "E",
        symbol: "Int_GuardianShieldReinforcement_Size4_Class1"
      }, {
        shieldaddition: 182,
        integrity: 36,
        class: 4,
        cost: 414720,
        edID: 128833972,
        power: 1.05,
        eddbID: 1373,
        grp: "gsrp",
        id: "1J",
        mass: 8,
        rating: "D",
        symbol: "Int_GuardianShieldReinforcement_Size4_Class2"
      }, {
        shieldaddition: 215,
        integrity: 36,
        class: 5,
        cost: 995330,
        edID: 128833974,
        power: 1.26,
        eddbID: 1373,
        grp: "gsrp",
        id: "1K",
        mass: 16,
        rating: "D",
        symbol: "Int_GuardianShieldReinforcement_Size5_Class2"
      }, {
        shieldaddition: 198,
        integrity: 36,
        class: 5,
        cost: 331778,
        edID: 128833973,
        power: 1.16,
        eddbID: 1373,
        grp: "gsrp",
        id: "1L",
        mass: 32,
        rating: "E",
        symbol: "Int_GuardianShieldReinforcement_Size5_Class1"
      } ],
      gfsb: [ {
        jumpboost: 4,
        integrity: 32,
        class: 1,
        cost: 405022,
        edID: 128833975,
        power: .75,
        eddbID: 1373,
        grp: "gfsb",
        id: "1H",
        mass: 1.3,
        rating: "H",
        symbol: "Int_GuardianFSDBooster_Size1"
      }, {
        jumpboost: 6,
        integrity: 32,
        class: 2,
        cost: 810521,
        edID: 128833976,
        power: .98,
        eddbID: 1373,
        grp: "gfsb",
        id: "1M",
        mass: 1.3,
        rating: "H",
        symbol: "Int_GuardianFSDBooster_Size2"
      }, {
        jumpboost: 7.75,
        integrity: 32,
        class: 3,
        cost: 1620431,
        edID: 128833977,
        power: 1.27,
        eddbID: 1373,
        grp: "gfsb",
        id: "1N",
        mass: 1.3,
        rating: "H",
        symbol: "Int_GuardianFSDBooster_Size3"
      }, {
        jumpboost: 9.25,
        integrity: 32,
        class: 4,
        cost: 3245013,
        edID: 128833978,
        power: 1.65,
        eddbID: 1373,
        grp: "gfsb",
        id: "1P",
        mass: 1.3,
        rating: "H",
        symbol: "Int_GuardianFSDBooster_Size4"
      }, {
        jumpboost: 10.5,
        integrity: 32,
        class: 5,
        cost: 6483101,
        edID: 128833979,
        power: 2.14,
        eddbID: 1373,
        grp: "gfsb",
        id: "1O",
        mass: 1.3,
        rating: "H",
        symbol: "Int_GuardianFSDBooster_Size5"
      } ],
      ghrp: [ {
        rating: "D",
        class: "1",
        mass: 1,
        id: "1V",
        edID: 128833946,
        eddbID: 0,
        power: .56,
        hullreinforcement: 138,
        causres: .05,
        explres: 0,
        kinres: 0,
        thermres: .02,
        cost: 3e4,
        symbol: "Int_GuardianHullReinforcement_Size1_Class2",
        grp: "ghrp"
      }, {
        rating: "E",
        class: "1",
        mass: 2,
        id: "1W",
        edID: 128833945,
        eddbID: 0,
        power: .45,
        hullreinforcement: 100,
        causres: .05,
        explres: 0,
        kinres: 0,
        thermres: .02,
        cost: 1e4,
        symbol: "Int_GuardianHullReinforcement_Size1_Class1",
        grp: "ghrp"
      }, {
        rating: "D",
        class: "2",
        mass: 2,
        id: "1X",
        edID: 128833948,
        eddbID: 0,
        power: .79,
        hullreinforcement: 238,
        causres: .05,
        explres: 0,
        kinres: 0,
        thermres: .02,
        cost: 72e3,
        symbol: "Int_GuardianHullReinforcement_Size2_Class2",
        grp: "ghrp"
      }, {
        rating: "E",
        class: "2",
        mass: 4,
        id: "1Y",
        edID: 128833947,
        eddbID: 0,
        power: .68,
        hullreinforcement: 188,
        causres: .05,
        explres: 0,
        kinres: 0,
        thermres: .02,
        cost: 24e3,
        symbol: "Int_GuardianHullReinforcement_Size2_Class1",
        grp: "ghrp"
      }, {
        rating: "D",
        class: "3",
        mass: 4,
        id: "1Z",
        edID: 128833950,
        eddbID: 0,
        power: 1.01,
        hullreinforcement: 325,
        causres: .05,
        explres: 0,
        kinres: 0,
        thermres: .02,
        cost: 172800,
        symbol: "Int_GuardianHullReinforcement_Size3_Class2",
        grp: "ghrp"
      }, {
        rating: "E",
        class: "3",
        mass: 8,
        id: "2A",
        edID: 128833949,
        eddbID: 0,
        power: .9,
        hullreinforcement: 288,
        causres: .05,
        explres: 0,
        kinres: 0,
        thermres: .02,
        cost: 57600,
        symbol: "Int_GuardianHullReinforcement_Size3_Class1",
        grp: "ghrp"
      }, {
        rating: "D",
        class: "4",
        mass: 8,
        edID: 128833952,
        eddbID: 0,
        power: 1.24,
        hullreinforcement: 413,
        causres: .05,
        explres: 0,
        kinres: 0,
        thermres: .02,
        cost: 414720,
        id: "2R",
        symbol: "Int_GuardianHullReinforcement_Size4_Class2",
        grp: "ghrp"
      }, {
        rating: "E",
        class: "4",
        mass: 16,
        edID: 128833951,
        eddbID: 0,
        power: 1.13,
        hullreinforcement: 375,
        causres: .05,
        explres: 0,
        kinres: 0,
        thermres: .02,
        cost: 138240,
        id: "2B",
        symbol: "Int_GuardianHullReinforcement_Size4_Class1",
        grp: "ghrp"
      }, {
        rating: "D",
        class: "5",
        mass: 16,
        edID: 128833954,
        eddbID: 0,
        power: 1.46,
        hullreinforcement: 488,
        causres: .05,
        explres: 0,
        kinres: 0,
        thermres: .02,
        cost: 995330,
        id: "2C",
        symbol: "Int_GuardianHullReinforcement_Size5_Class2",
        grp: "ghrp"
      }, {
        rating: "E",
        class: "5",
        mass: 32,
        edID: 128833953,
        eddbID: 0,
        power: 1.35,
        hullreinforcement: 450,
        causres: .05,
        explres: 0,
        kinres: 0,
        thermres: .02,
        cost: 331778,
        id: "2D",
        symbol: "Int_GuardianHullReinforcement_Size5_Class1",
        grp: "ghrp"
      } ],
      gmrp: [ {
        rating: "D",
        class: "1",
        mass: 1,
        eddbID: 0,
        power: .34,
        protection: .6,
        integrity: 77,
        cost: 3e4,
        id: "2E",
        edID: 128833956,
        symbol: "Int_GuardianModuleReinforcement_Size1_Class2",
        grp: "gmrp"
      }, {
        rating: "E",
        class: "1",
        mass: 2,
        eddbID: 0,
        power: .27,
        protection: .3,
        integrity: 85,
        cost: 1e4,
        id: "2F",
        edID: 128833955,
        symbol: "Int_GuardianModuleReinforcement_Size1_Class1",
        grp: "gmrp"
      }, {
        rating: "D",
        class: "2",
        mass: 2,
        eddbID: 0,
        power: .47,
        protection: .6,
        integrity: 116,
        cost: 72e3,
        id: "2G",
        edID: 128833958,
        symbol: "Int_GuardianModuleReinforcement_Size2_Class2",
        grp: "gmrp"
      }, {
        rating: "E",
        class: "2",
        mass: 4,
        eddbID: 0,
        power: .41,
        protection: .3,
        integrity: 127,
        cost: 24e3,
        id: "2S",
        edID: 128833957,
        symbol: "Int_GuardianModuleReinforcement_Size2_Class1",
        grp: "gmrp"
      }, {
        rating: "D",
        class: "3",
        mass: 4,
        eddbID: 0,
        power: .61,
        protection: .6,
        integrity: 171,
        cost: 172800,
        id: "2H",
        edID: 128833960,
        symbol: "Int_GuardianModuleReinforcement_Size3_Class2",
        grp: "gmrp"
      }, {
        rating: "E",
        class: "3",
        mass: 8,
        eddbID: 0,
        power: .54,
        protection: .3,
        integrity: 187,
        cost: 57600,
        id: "2I",
        edID: 128833959,
        symbol: "Int_GuardianModuleReinforcement_Size3_Class1",
        grp: "gmrp"
      }, {
        rating: "D",
        class: "4",
        mass: 8,
        eddbID: 0,
        power: .74,
        protection: .6,
        integrity: 259,
        cost: 414720,
        id: "2J",
        edID: 128833962,
        symbol: "Int_GuardianModuleReinforcement_Size4_Class2",
        grp: "gmrp"
      }, {
        rating: "E",
        class: "4",
        mass: 16,
        eddbID: 0,
        power: .68,
        protection: .3,
        integrity: 286,
        cost: 138240,
        id: "2K",
        edID: 128833961,
        symbol: "Int_GuardianModuleReinforcement_Size4_Class1",
        grp: "gmrp"
      }, {
        rating: "D",
        class: "5",
        mass: 16,
        eddbID: 0,
        power: .88,
        protection: .6,
        integrity: 385,
        cost: 995330,
        id: "2L",
        edID: 128833964,
        symbol: "Int_GuardianModuleReinforcement_Size5_Class2",
        grp: "gmrp"
      }, {
        rating: "E",
        class: "5",
        mass: 32,
        eddbID: 0,
        power: .81,
        protection: .3,
        integrity: 424,
        cost: 331778,
        id: "2M",
        edID: 128833963,
        symbol: "Int_GuardianModuleReinforcement_Size5_Class1",
        grp: "gmrp"
      } ]
    }
  },
  Modifications: {
    blueprints: {
      AFM_Shielded: {
        fdname: "AFM_Shielded",
        grades: {
          "1": {
            components: {
              "Worn Shield Emitters": 1
            },
            features: {
              integrity: [ 0, .6 ],
              power: [ .2, .2 ]
            },
            uuid: "c879e8d2-290a-471e-833c-eaea947a20c1"
          },
          "2": {
            components: {
              Carbon: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .6, 1.2 ],
              power: [ .4, .4 ]
            },
            uuid: "90981fc0-8c0e-4b86-a656-9ef1a9a7fa00"
          },
          "3": {
            components: {
              Carbon: 1,
              "High Density Composites": 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ 1.2, 1.8 ],
              power: [ .6, .6 ]
            },
            uuid: "30976550-2ff1-46e2-9687-ae3faa4f4701"
          },
          "4": {
            components: {
              "Proprietary Composites": 1,
              "Shielding Sensors": 1,
              Vanadium: 1
            },
            features: {
              integrity: [ 1.8, 2.4 ],
              power: [ .8, .8 ]
            },
            uuid: "82195e56-cfe5-4996-a821-a820dcd9405d"
          }
        },
        id: 3,
        modulename: [ "Auto field mainentance unit", "AFMU" ],
        name: "Shielded"
      },
      Armour_Advanced: {
        fdname: "Armour_Advanced",
        grades: {
          "1": {
            components: {
              Iron: 1
            },
            features: {
              explres: [ 0, .042 ],
              hullboost: [ -.01, -.01 ],
              kinres: [ 0, .036 ],
              mass: [ 0, -.15 ],
              thermres: [ 0, .03 ]
            },
            uuid: "fb33c5c9-24e4-48b5-8227-cc7b855572cd"
          },
          "2": {
            components: {
              "Conductive Components": 1,
              Iron: 1
            },
            features: {
              explres: [ .042, .084 ],
              hullboost: [ -.02, -.02 ],
              kinres: [ .036, .072 ],
              mass: [ -.15, -.25 ],
              thermres: [ .03, .06 ]
            },
            uuid: "a9417081-356c-43d7-bf30-9cc1de0c62a1"
          },
          "3": {
            components: {
              "Conductive Components": 1,
              "High Density Composites": 1,
              Iron: 1
            },
            features: {
              explres: [ .084, .126 ],
              hullboost: [ -.03, -.03 ],
              kinres: [ .072, .108 ],
              mass: [ -.25, -.35 ],
              thermres: [ .06, .09 ]
            },
            uuid: "b93f110f-c467-4340-8496-9ea99332ef55"
          },
          "4": {
            components: {
              "Conductive Ceramics": 1,
              Germanium: 1,
              "Proprietary Composites": 1
            },
            features: {
              explres: [ .126, .168 ],
              hullboost: [ -.04, -.04 ],
              kinres: [ .108, .144 ],
              mass: [ -.35, -.45 ],
              thermres: [ .09, .12 ]
            },
            uuid: "4b9c30c9-0acf-4b56-bce9-3fc65be95382"
          },
          "5": {
            components: {
              "Conductive Ceramics": 1,
              "Military Grade Alloys": 1,
              Tin: 1
            },
            features: {
              explres: [ .168, .21 ],
              hullboost: [ -.05, -.05 ],
              kinres: [ .144, .18 ],
              mass: [ -.45, -.55 ],
              thermres: [ .12, .15 ]
            },
            uuid: "b97b8100-b8bb-4ef3-84bf-65f9b49eaa30"
          }
        },
        id: 6,
        modulename: [ "Bulkheads", "Armour" ],
        name: "Lightweight"
      },
      Armour_Explosive: {
        fdname: "Armour_Explosive",
        grades: {
          "1": {
            components: {
              Nickel: 1
            },
            features: {
              explres: [ 0, .168 ],
              kinres: [ -.05, -.05 ],
              thermres: [ -.04, -.04 ]
            },
            uuid: "c74fe800-a8c1-4ae9-95a1-47a8a9d1f10d"
          },
          "2": {
            components: {
              Carbon: 1,
              Zinc: 1
            },
            features: {
              explres: [ .168, .266 ],
              kinres: [ -.07, -.07 ],
              thermres: [ -.06, -.06 ]
            },
            uuid: "78f76eb3-ac9e-47bd-be6f-a26b4fdf9c57"
          },
          "3": {
            components: {
              "Salvaged Alloys": 1,
              Vanadium: 1
            },
            features: {
              explres: [ .366, .364 ],
              kinres: [ -.1, -.1 ],
              thermres: [ -.08, -.08 ]
            },
            uuid: "83ea4fd2-2eee-4cfb-baa6-d6c314f58b8d"
          },
          "4": {
            components: {
              "Galvanising Alloys": 1,
              Mercury: 1,
              Tungsten: 1
            },
            features: {
              explres: [ .364, .462 ],
              kinres: [ -.12, -.12 ],
              thermres: [ -.1, -.1 ]
            },
            uuid: "9656e75a-a8ac-454f-941a-9fe4b4f6a330"
          },
          "5": {
            components: {
              Molybdenum: 1,
              "Phase Alloys": 1,
              Ruthenium: 1
            },
            features: {
              explres: [ .462, .56 ],
              kinres: [ -.14, -.14 ],
              thermres: [ -.12, -.12 ]
            },
            uuid: "37e0788b-6f7d-43c8-89ca-decaff5f3653"
          }
        },
        id: 5,
        modulename: [ "Bulkheads", "Armour" ],
        name: "Blast resistant"
      },
      Armour_HeavyDuty: {
        fdname: "Armour_HeavyDuty",
        grades: {
          "1": {
            components: {
              Carbon: 1
            },
            features: {
              explres: [ 0, .014 ],
              hullboost: [ 0, .12 ],
              kinres: [ 0, .012 ],
              mass: [ .1, .1 ],
              thermres: [ 0, .01 ]
            },
            uuid: "f9d519ab-b6f6-4d81-a93b-8f4fb45edd55"
          },
          "2": {
            components: {
              Carbon: 1,
              "Shield Emitters": 1
            },
            features: {
              explres: [ .014, .028 ],
              hullboost: [ .12, .17 ],
              kinres: [ .012, .024 ],
              mass: [ .15, .15 ],
              thermres: [ .01, .02 ]
            },
            uuid: "ab58e035-3128-4eec-8974-cbbff022d31e"
          },
          "3": {
            components: {
              Carbon: 1,
              "High Density Composites": 1,
              "Shield Emitters": 1
            },
            features: {
              explres: [ .028, .042 ],
              hullboost: [ .17, .22 ],
              kinres: [ .024, .036 ],
              mass: [ .2, .2 ],
              thermres: [ .02, .03 ]
            },
            uuid: "20afd6a5-5a72-4825-813d-b660fe796cb3"
          },
          "4": {
            components: {
              "Proprietary Composites": 1,
              "Shielding Sensors": 1,
              Vanadium: 1
            },
            features: {
              explres: [ .042, .056 ],
              hullboost: [ .22, .27 ],
              kinres: [ .036, .048 ],
              mass: [ .25, .25 ],
              thermres: [ .03, .04 ]
            },
            uuid: "e08d3ec0-79e1-4d9f-ae16-6bd0a7e5b5c4"
          },
          "5": {
            components: {
              "Compound Shielding": 1,
              "Core Dynamics Composites": 1,
              Tungsten: 1
            },
            features: {
              explres: [ .056, .07 ],
              hullboost: [ .27, .32 ],
              kinres: [ .048, .06 ],
              mass: [ .3, .3 ],
              thermres: [ .04, .05 ]
            },
            uuid: "58b95d8a-1066-4e22-957f-0beb3927a2dd"
          }
        },
        id: 7,
        modulename: [ "Bulkheads", "Armour" ],
        name: "Heavy duty"
      },
      Armour_Kinetic: {
        fdname: "Armour_Kinetic",
        grades: {
          "1": {
            components: {
              Nickel: 1
            },
            features: {
              explres: [ -.06, -.06 ],
              kinres: [ 0, .144 ],
              thermres: [ -.04, -.04 ]
            },
            uuid: "285736a7-9677-4875-b425-0704d2c05ee6"
          },
          "2": {
            components: {
              Nickel: 1,
              Vanadium: 1
            },
            features: {
              explres: [ -.08, -.08 ],
              kinres: [ .144, .228 ],
              thermres: [ -.06, -.06 ]
            },
            uuid: "816adb1f-c089-49b6-b52d-a8ca189a4ef5"
          },
          "3": {
            components: {
              "High Density Composites": 1,
              "Salvaged Alloys": 1,
              Vanadium: 1
            },
            features: {
              explres: [ -.11, -.11 ],
              kinres: [ .228, .312 ],
              thermres: [ -.08, -.08 ]
            },
            uuid: "54c5cc67-3112-4c77-87f9-c5d6a5f0ae3c"
          },
          "4": {
            components: {
              "Galvanising Alloys": 1,
              "Proprietary Composites": 1,
              Tungsten: 1
            },
            features: {
              explres: [ -.14, -.14 ],
              kinres: [ .312, .396 ],
              thermres: [ -.1, -.1 ]
            },
            uuid: "80cdd75d-a574-4092-b45d-77187e52edf5"
          },
          "5": {
            components: {
              "Core Dynamics Composites": 1,
              Molybdenum: 1,
              "Phase Alloys": 1
            },
            features: {
              explres: [ -.17, -.17 ],
              kinres: [ .396, .48 ],
              thermres: [ -.12, -.12 ]
            },
            uuid: "f56d18cc-3eca-4bec-8238-4a0105947e4e"
          }
        },
        id: 4,
        modulename: [ "Bulkheads", "Armour" ],
        name: "Kinetic resistant"
      },
      Armour_Thermic: {
        fdname: "Armour_Thermic",
        grades: {
          "1": {
            components: {
              "Heat Conduction Wiring": 1
            },
            features: {
              explres: [ -.06, -.06 ],
              kinres: [ -.05, -.05 ],
              thermres: [ 0, .12 ]
            },
            uuid: "73c3a3c1-da09-4792-a1e9-d0161da6c0f2"
          },
          "2": {
            components: {
              "Heat Dispersion Plate": 1,
              Nickel: 1
            },
            features: {
              explres: [ -.08, -.08 ],
              kinres: [ -.07, -.07 ],
              thermres: [ .12, .19 ]
            },
            uuid: "f3096b56-d6d2-4aa5-a77c-98ce2adc79dc"
          },
          "3": {
            components: {
              "Heat Exchangers": 1,
              "Salvaged Alloys": 1,
              Vanadium: 1
            },
            features: {
              explres: [ -.11, -.11 ],
              kinres: [ -.1, -.1 ],
              thermres: [ .19, .26 ]
            },
            uuid: "1aa48c57-d187-4e82-aa88-8b4a7a4bc856"
          },
          "4": {
            components: {
              "Galvanising Alloys": 1,
              "Heat Vanes": 1,
              Tungsten: 1
            },
            features: {
              explres: [ -.14, -.14 ],
              kinres: [ -.12, -.12 ],
              thermres: [ .26, .33 ]
            },
            uuid: "afc78426-8570-4ad4-923a-794821c2506f"
          },
          "5": {
            components: {
              Molybdenum: 1,
              "Phase Alloys": 1,
              "Proto Heat Radiators": 1
            },
            features: {
              explres: [ -.17, -.17 ],
              kinres: [ -.14, -.14 ],
              thermres: [ .33, .4 ]
            },
            uuid: "12abc854-37c9-4f20-874d-dca8755e76fc"
          }
        },
        id: 8,
        modulename: [ "Bulkheads", "Armour" ],
        name: "Thermal resistant"
      },
      CargoScanner_LightWeight: {
        fdname: "CargoScanner_LightWeight",
        grades: {
          "1": {
            components: {
              Phosphorus: 1
            },
            features: {
              integrity: [ -.1, -.1 ],
              mass: [ 0, -.45 ]
            },
            uuid: "5ebd5d76-7bb8-4958-9cc3-f5e2176f2b5e"
          },
          "2": {
            components: {
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.2, -.2 ],
              mass: [ -.45, -.55 ]
            },
            uuid: "c49d42a8-cd8f-4576-9c60-85725f635185"
          },
          "3": {
            components: {
              "Conductive Ceramics": 1,
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.3, -.3 ],
              mass: [ -.55, -.65 ]
            },
            uuid: "bc048a95-b5aa-4f6c-a696-6c40b87a1606"
          },
          "4": {
            components: {
              "Conductive Components": 1,
              "Phase Alloys": 1,
              "Proto Light Alloys": 1
            },
            features: {
              integrity: [ -.4, -.4 ],
              mass: [ -.65, -.75 ]
            },
            uuid: "4f9467f7-0c5f-4ab3-856b-aaad019bd79d"
          },
          "5": {
            components: {
              "Conductive Ceramics": 1,
              "Proto Light Alloys": 1,
              "Proto Radiolic Alloys": 1
            },
            features: {
              integrity: [ -.5, -.5 ],
              mass: [ -.75, -.85 ]
            },
            uuid: "15d2a67d-71b5-405a-ba21-4f94583064a3"
          }
        },
        id: 9,
        modulename: [ "Cargo scanner", "Manifest scanner" ],
        name: "Lightweight"
      },
      CargoScanner_Reinforced: {
        fdname: "CargoScanner_Reinforced",
        grades: {
          "1": {
            components: {
              Nickel: 1
            },
            features: {
              integrity: [ 0, .6 ],
              mass: [ .3, .3 ]
            },
            uuid: "9b714883-e0e7-46b5-a2bb-5367f2cc9b3f"
          },
          "2": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .6, 1.2 ],
              mass: [ .6, .6 ]
            },
            uuid: "9de3e096-fbfa-4694-a2e4-919494d39ee1"
          },
          "3": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ 1.2, 1.8 ],
              mass: [ .9, .9 ]
            },
            uuid: "4a5d7441-2543-4405-8587-9b969fffd3f2"
          },
          "4": {
            components: {
              Molybdenum: 1,
              Tungsten: 1,
              Zinc: 1
            },
            features: {
              integrity: [ 1.8, 2.4 ],
              mass: [ 1.2, 1.2 ]
            },
            uuid: "f4b41ce9-d3a8-4362-9821-0d45f2b975bc"
          },
          "5": {
            components: {
              "High Density Composites": 1,
              Molybdenum: 1,
              Technetium: 1
            },
            features: {
              integrity: [ 2.4, 3 ],
              mass: [ 1.5, 1.5 ]
            },
            uuid: "d5d06450-a1cf-4dd2-b8f0-12d0142ad773"
          }
        },
        id: 10,
        modulename: [ "Cargo scanner", "Manifest scanner" ],
        name: "Reinforced"
      },
      CargoScanner_Shielded: {
        fdname: "CargoScanner_Shielded",
        grades: {
          "1": {
            components: {
              "Worn Shield Emitters": 1
            },
            features: {
              integrity: [ 0, .6 ],
              power: [ .2, .2 ]
            },
            uuid: "f3684224-dfb1-4b30-81df-827246ccce14"
          },
          "2": {
            components: {
              Carbon: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .6, 1.2 ],
              power: [ .4, .4 ]
            },
            uuid: "0fec52b1-3a81-4260-8168-7af698e9ebf3"
          },
          "3": {
            components: {
              Carbon: 1,
              "High Density Composites": 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ 1.2, 1.8 ],
              power: [ .6, .6 ]
            },
            uuid: "6ca69c4f-07b6-43e4-97c9-e9134cb1eaf4"
          },
          "4": {
            components: {
              "Proprietary Composites": 1,
              "Shielding Sensors": 1,
              Vanadium: 1
            },
            features: {
              integrity: [ 1.8, 2.4 ],
              power: [ .8, .8 ]
            },
            uuid: "e6ebc222-ec93-4f0f-ac8a-e690ab50656d"
          },
          "5": {
            components: {
              "Compound Shielding": 1,
              "Core Dynamics Composites": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ 2.4, 3 ],
              power: [ 1, 1 ]
            },
            uuid: "b307db6f-a54c-49e9-be82-5a4458661fe1"
          }
        },
        id: 11,
        modulename: [ "Cargo scanner", "Manifest scanner" ],
        name: "Shielded"
      },
      ChaffLauncher_ChaffCapacity: {
        fdname: "ChaffLauncher_ChaffCapacity",
        grades: {
          "3": {
            components: {
              "Mechanical Scrap": 1,
              Niobium: 1,
              Vanadium: 1
            },
            features: {
              ammo: [ 0, .5 ],
              mass: [ 1, 1 ],
              reload: [ .1, .1 ]
            },
            uuid: "cc81fa92-d36d-4619-98f9-4202d475b2d8"
          }
        },
        id: 12,
        modulename: [ "Chaff launcher" ],
        name: "Ammo capacity"
      },
      ChaffLauncher_LightWeight: {
        fdname: "ChaffLauncher_LightWeight",
        grades: {
          "1": {
            components: {
              Phosphorus: 1
            },
            features: {
              integrity: [ -.1, -.1 ],
              mass: [ 0, -.45 ]
            },
            uuid: "99afdcd4-c7cf-4855-aea8-e35d968d448e"
          },
          "2": {
            components: {
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.2, -.2 ],
              mass: [ -.45, -.55 ]
            },
            uuid: "4c0aa103-e0d8-4dce-bb38-067549af7c27"
          },
          "3": {
            components: {
              "Conductive Ceramics": 1,
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.3, -.3 ],
              mass: [ -.55, -.65 ]
            },
            uuid: "90ddb40a-8520-4e0a-8e42-5f3f9ecf4c28"
          },
          "4": {
            components: {
              "Conductive Components": 1,
              "Phase Alloys": 1,
              "Proto Light Alloys": 1
            },
            features: {
              integrity: [ -.4, -.4 ],
              mass: [ -.65, -.75 ]
            },
            uuid: "45047669-536a-4455-8563-b8be46d482e0"
          },
          "5": {
            components: {
              "Conductive Ceramics": 1,
              "Proto Light Alloys": 1,
              "Proto Radiolic Alloys": 1
            },
            features: {
              integrity: [ -.5, -.5 ],
              mass: [ -.75, -.85 ]
            },
            uuid: "ab6cc0b2-73eb-4aa5-a2a3-2b662e38b7d8"
          }
        },
        id: 13,
        modulename: [ "Chaff launcher" ],
        name: "Lightweight"
      },
      ChaffLauncher_Reinforced: {
        fdname: "ChaffLauncher_Reinforced",
        grades: {
          "1": {
            components: {
              Nickel: 1
            },
            features: {
              integrity: [ 0, .6 ],
              mass: [ .3, .3 ]
            },
            uuid: "c952091e-30de-4b13-8e7e-c59aee4c1466"
          },
          "2": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .6, 1.2 ],
              mass: [ .6, .6 ]
            },
            uuid: "5f868185-7351-49ec-95b4-87dab4d08e02"
          },
          "3": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ 1.2, 1.8 ],
              mass: [ .9, .9 ]
            },
            uuid: "33e63006-29ae-4466-b240-7708ddd9804b"
          },
          "4": {
            components: {
              Molybdenum: 1,
              Tungsten: 1,
              Zinc: 1
            },
            features: {
              integrity: [ 1.8, 2.4 ],
              mass: [ 1.2, 1.2 ]
            },
            uuid: "5d0cb508-a654-4dc8-8e04-6cafac0ea86d"
          },
          "5": {
            components: {
              "High Density Composites": 1,
              Molybdenum: 1,
              Technetium: 1
            },
            features: {
              integrity: [ 2.4, 3 ],
              mass: [ 1.5, 1.5 ]
            },
            uuid: "06a5631b-036b-47ac-9d41-4c1728a5d34e"
          }
        },
        id: 14,
        modulename: [ "Chaff launcher" ],
        name: "Reinforced"
      },
      ChaffLauncher_Shielded: {
        fdname: "ChaffLauncher_Shielded",
        grades: {
          "1": {
            components: {
              "Worn Shield Emitters": 1
            },
            features: {
              integrity: [ 0, .6 ],
              power: [ .2, .2 ]
            },
            uuid: "ac3908c2-c5aa-44a1-a847-a9d27c34a326"
          },
          "2": {
            components: {
              Carbon: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .6, 1.2 ],
              power: [ .4, .4 ]
            },
            uuid: "ee1ad091-7a25-44ac-b3e4-9ee5e4228483"
          },
          "3": {
            components: {
              Carbon: 1,
              "High Density Composites": 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ 1.2, 1.8 ],
              power: [ .6, .6 ]
            },
            uuid: "eddd7f16-035d-4e9e-96fc-bf82e9ce7397"
          },
          "4": {
            components: {
              "Proprietary Composites": 1,
              "Shielding Sensors": 1,
              Vanadium: 1
            },
            features: {
              integrity: [ 1.8, 2.4 ],
              power: [ .8, .8 ]
            },
            uuid: "1fef7b64-bf77-4024-a9b4-24146d5cefe3"
          },
          "5": {
            components: {
              "Compound Shielding": 1,
              "Core Dynamics Composites": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ 2.4, 3 ],
              power: [ 1, 1 ]
            },
            uuid: "f6df4a5b-58f4-4854-843c-a99b2f106154"
          }
        },
        id: 15,
        modulename: [ "Chaff launcher" ],
        name: "Shielded"
      },
      CollectionLimpet_LightWeight: {
        fdname: "CollectionLimpet_LightWeight",
        grades: {
          "1": {
            components: {
              Phosphorus: 1
            },
            features: {
              integrity: [ -.1, -.1 ],
              mass: [ 0, -.45 ]
            },
            uuid: "40d015c8-e3c3-4e6c-8703-0e5dc0c0ca7a"
          },
          "2": {
            components: {
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.2, -.2 ],
              mass: [ -.45, -.55 ]
            },
            uuid: "4f4f23cf-fb43-4542-8d60-c96cf884c3c9"
          },
          "3": {
            components: {
              "Conductive Ceramics": 1,
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.3, -.3 ],
              mass: [ -.55, -.65 ]
            },
            uuid: "9c4ebeff-12e1-4f0e-a972-bb8d4d7e4f08"
          },
          "4": {
            components: {
              "Conductive Components": 1,
              "Phase Alloys": 1,
              "Proto Light Alloys": 1
            },
            features: {
              integrity: [ -.4, -.4 ],
              mass: [ -.65, -.75 ]
            },
            uuid: "befa7711-25fa-49d2-97fb-3f8a4cc8b91e"
          },
          "5": {
            components: {
              "Conductive Ceramics": 1,
              "Proto Light Alloys": 1,
              "Proto Radiolic Alloys": 1
            },
            features: {
              integrity: [ -.5, -.5 ],
              mass: [ -.75, -.85 ]
            },
            uuid: "d5c4d258-6597-4557-bc1b-b4afc7b59784"
          }
        },
        id: 16,
        modulename: [ "Collector limpet controller" ],
        name: "Lightweight"
      },
      CollectionLimpet_Reinforced: {
        fdname: "CollectionLimpet_Reinforced",
        grades: {
          "1": {
            components: {
              Nickel: 1
            },
            features: {
              integrity: [ 0, .6 ],
              mass: [ .3, .3 ]
            },
            uuid: "d0451acd-f57f-46a5-ac1a-c2a2f1919283"
          },
          "2": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .6, 1.2 ],
              mass: [ .6, .6 ]
            },
            uuid: "ccbf3b26-6ded-4e86-b2dd-330280ca552f"
          },
          "3": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ 1.2, 1.8 ],
              mass: [ .9, .9 ]
            },
            uuid: "a841e48c-d34b-4dd2-b540-14910224398a"
          },
          "4": {
            components: {
              Molybdenum: 1,
              Tungsten: 1,
              Zinc: 1
            },
            features: {
              integrity: [ 1.8, 2.4 ],
              mass: [ 1.2, 1.2 ]
            },
            uuid: "de78dde7-c159-4d37-91e2-b6562dd754e4"
          },
          "5": {
            components: {
              "High Density Composites": 1,
              Molybdenum: 1,
              Technetium: 1
            },
            features: {
              integrity: [ 2.4, 3 ],
              mass: [ 1.5, 1.5 ]
            },
            uuid: "2a175094-0490-41f1-ad85-1d199e69f768"
          }
        },
        id: 17,
        modulename: [ "Collector limpet controller" ],
        name: "Reinforced"
      },
      CollectionLimpet_Shielded: {
        fdname: "CollectionLimpet_Shielded",
        grades: {
          "1": {
            components: {
              "Worn Shield Emitters": 1
            },
            features: {
              integrity: [ 0, .6 ],
              power: [ .2, .2 ]
            },
            uuid: "6e384cd7-1ab5-4a03-849f-d1a6d5711012"
          },
          "2": {
            components: {
              Carbon: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .6, 1.2 ],
              power: [ .4, .4 ]
            },
            uuid: "be06b5e7-44c0-4bb4-b084-ca5578cd5b26"
          },
          "3": {
            components: {
              Carbon: 1,
              "High Density Composites": 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ 1.2, 1.8 ],
              power: [ .6, .6 ]
            },
            uuid: "d18a63f6-c96e-4e73-b4a1-70deeb27af9c"
          },
          "4": {
            components: {
              "Proprietary Composites": 1,
              "Shielding Sensors": 1,
              Vanadium: 1
            },
            features: {
              integrity: [ 1.8, 2.4 ],
              power: [ .8, .8 ]
            },
            uuid: "99d03d5e-1fd6-49b1-a99d-71571c35dca5"
          },
          "5": {
            components: {
              "Compound Shielding": 1,
              "Core Dynamics Composites": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ 2.4, 3 ],
              power: [ 1, 1 ]
            },
            uuid: "bedb2a94-2d59-4ed1-9e51-58ae2cfb4189"
          }
        },
        id: 18,
        modulename: [ "Collector limpet controller" ],
        name: "Shielded"
      },
      ECM_LightWeight: {
        fdname: "ECM_LightWeight",
        grades: {
          "1": {
            components: {
              Phosphorus: 1
            },
            features: {
              integrity: [ -.1, -.1 ],
              mass: [ 0, -.45 ]
            },
            uuid: "123ef1f4-cb7e-4b8e-8dfc-48c3407d0c94"
          },
          "2": {
            components: {
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.2, -.2 ],
              mass: [ -.45, -.55 ]
            },
            uuid: "abf6487e-1fac-46e7-9ae3-a46bea977412"
          },
          "3": {
            components: {
              "Conductive Ceramics": 1,
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.3, -.3 ],
              mass: [ -.55, -.65 ]
            },
            uuid: "e1bc6bec-da7b-4b5c-aedd-637b753d2e1f"
          },
          "4": {
            components: {
              "Conductive Components": 1,
              "Phase Alloys": 1,
              "Proto Light Alloys": 1
            },
            features: {
              integrity: [ -.4, -.4 ],
              mass: [ -.65, -.75 ]
            },
            uuid: "ac3a70dc-8759-4f69-8c97-c31be11d9b49"
          },
          "5": {
            components: {
              "Conductive Ceramics": 1,
              "Proto Light Alloys": 1,
              "Proto Radiolic Alloys": 1
            },
            features: {
              integrity: [ -.5, -.5 ],
              mass: [ -.75, -.85 ]
            },
            uuid: "1ca34b8b-ce91-44a5-b210-ab7ce9333657"
          }
        },
        id: 19,
        modulename: [ "Electronic counter measures", "ECM" ],
        name: "Lightweight"
      },
      ECM_Reinforced: {
        fdname: "ECM_Reinforced",
        grades: {
          "1": {
            components: {
              Nickel: 1
            },
            features: {
              integrity: [ 0, .6 ],
              mass: [ .3, .3 ]
            },
            uuid: "6bcb5b84-5e90-4d3d-be7c-6ed6c1f048c4"
          },
          "2": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .6, 1.2 ],
              mass: [ .6, .6 ]
            },
            uuid: "8497a12f-becf-499b-8df8-6814cfa93e39"
          },
          "3": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ 1.2, 1.8 ],
              mass: [ .9, .9 ]
            },
            uuid: "2fbadb73-1c89-4d25-9061-43735d4970b3"
          },
          "4": {
            components: {
              Molybdenum: 1,
              Tungsten: 1,
              Zinc: 1
            },
            features: {
              integrity: [ 1.8, 2.4 ],
              mass: [ 1.2, 1.2 ]
            },
            uuid: "a89859a9-1278-40d0-ac77-e3e6bf10de95"
          },
          "5": {
            components: {
              "High Density Composites": 1,
              Molybdenum: 1,
              Technetium: 1
            },
            features: {
              integrity: [ 2.4, 3 ],
              mass: [ 1.5, 1.5 ]
            },
            uuid: "7ab56e9d-f02d-4562-b1e1-82168f482a3e"
          }
        },
        id: 20,
        modulename: [ "Electronic counter measures", "ECM" ],
        name: "Reinforced"
      },
      ECM_Shielded: {
        fdname: "ECM_Shielded",
        grades: {
          "1": {
            components: {
              "Worn Shield Emitters": 1
            },
            features: {
              integrity: [ 0, .6 ],
              power: [ .2, .2 ]
            },
            uuid: "0dd69a33-0309-4ab6-bf88-e500db42448c"
          },
          "2": {
            components: {
              Carbon: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .6, 1.2 ],
              power: [ .4, .4 ]
            },
            uuid: "297bc1b2-7e2c-4556-b971-b2ff38cbff53"
          },
          "3": {
            components: {
              Carbon: 1,
              "High Density Composites": 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ 1.2, 1.8 ],
              power: [ .6, .6 ]
            },
            uuid: "385a3392-8580-4fa6-a52c-1205f1041b99"
          },
          "4": {
            components: {
              "Proprietary Composites": 1,
              "Shielding Sensors": 1,
              Vanadium: 1
            },
            features: {
              integrity: [ 1.8, 2.4 ],
              power: [ .8, .8 ]
            },
            uuid: "eb3e8641-031c-4318-9e97-43f27529fd86"
          },
          "5": {
            components: {
              "Compound Shielding": 1,
              "Core Dynamics Composites": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ 2.4, 3 ],
              power: [ 1, 1 ]
            },
            uuid: "7d291eef-55fa-4ffd-8d5c-1b4e46669333"
          }
        },
        id: 21,
        modulename: [ "Electronic counter measures", "ECM" ],
        name: "Shielded"
      },
      Engine_Dirty: {
        fdname: "Engine_Dirty",
        grades: {
          "1": {
            components: {
              "Specialised Legacy Firmware": 1
            },
            features: {
              integrity: [ -.03, -.03 ],
              optmass: [ -.03, -.03 ],
              optmul: [ 0, .12 ],
              power: [ .04, .04 ],
              thermload: [ .2, .2 ]
            },
            uuid: "bbdea125-dd2b-4031-8698-56c922df3b76"
          },
          "2": {
            components: {
              "Mechanical Equipment": 1,
              "Specialised Legacy Firmware": 1
            },
            features: {
              integrity: [ -.06, -.06 ],
              optmass: [ -.05, -.05 ],
              optmul: [ .12, .19 ],
              power: [ .06, .06 ],
              thermload: [ .3, .3 ]
            },
            uuid: "d3ccba04-e0f5-40c3-a6f8-a038d5e5b4bf"
          },
          "3": {
            components: {
              Chromium: 1,
              "Mechanical Components": 1,
              "Specialised Legacy Firmware": 1
            },
            features: {
              integrity: [ -.09, -.09 ],
              optmass: [ -.08, -.08 ],
              optmul: [ .19, .26 ],
              power: [ .08, .08 ],
              thermload: [ .4, .4 ]
            },
            uuid: "60091d1f-38a9-4d62-bbc0-6332e03c7f3d"
          },
          "4": {
            components: {
              "Configurable Components": 1,
              "Modified Consumer Firmware": 1,
              Selenium: 1
            },
            features: {
              integrity: [ -.12, -.12 ],
              optmass: [ -.1, -.1 ],
              optmul: [ .26, .33 ],
              power: [ .1, .1 ],
              thermload: [ .5, .5 ]
            },
            uuid: "7355e32e-b850-4428-8279-66f234f59c6a"
          },
          "5": {
            components: {
              Cadmium: 1,
              "Cracked Industrial Firmware": 1,
              "Pharmaceutical Isolators": 1
            },
            features: {
              integrity: [ -.15, -.15 ],
              optmass: [ -.13, -.13 ],
              optmul: [ .33, .4 ],
              power: [ .12, .12 ],
              thermload: [ .6, .6 ]
            },
            uuid: "92514d80-4513-489e-b85f-1b7010b3ae0f"
          }
        },
        id: 22,
        modulename: [ "Thrusters", "Engines" ],
        name: "Dirty"
      },
      Engine_Reinforced: {
        fdname: "Engine_Reinforced",
        grades: {
          "1": {
            components: {
              Carbon: 1
            },
            features: {
              integrity: [ 0, .3 ],
              mass: [ .05, .05 ],
              thermload: [ -.1, -.1 ]
            },
            uuid: "21503395-f165-4340-91c7-07d062895eae"
          },
          "2": {
            components: {
              "Heat Conduction Wiring": 1,
              Vanadium: 1
            },
            features: {
              integrity: [ .3, .5 ],
              mass: [ .1, .1 ],
              thermload: [ -.1, -.2 ]
            },
            uuid: "452e2359-5804-4de1-94bf-d16c9d512cc4"
          },
          "3": {
            components: {
              "Heat Conduction Wiring": 1,
              "Shielding Sensors": 1,
              Vanadium: 1
            },
            features: {
              integrity: [ .5, .7 ],
              mass: [ .15, .15 ],
              thermload: [ -.2, -.3 ]
            },
            uuid: "ae1a71bb-e025-4268-aa7f-fd4063945beb"
          },
          "4": {
            components: {
              "Compound Shielding": 1,
              "Heat Dispersion Plate": 1,
              "High Density Composites": 1
            },
            features: {
              integrity: [ .7, .9 ],
              mass: [ .2, .2 ],
              thermload: [ -.3, -.4 ]
            },
            uuid: "4bc0b925-dd64-41da-a653-f15acf108f23"
          },
          "5": {
            components: {
              "Heat Exchangers": 1,
              "Imperial Shielding": 1,
              "Proprietary Composites": 1
            },
            features: {
              integrity: [ .9, 1.1 ],
              mass: [ .25, .25 ],
              thermload: [ -.4, -.5 ]
            },
            uuid: "88aef454-76f6-48a3-a66c-958e50c92e7c"
          }
        },
        id: 23,
        modulename: [ "Thrusters", "Engines" ],
        name: "Reinforced"
      },
      Engine_Tuned: {
        fdname: "Engine_Tuned",
        grades: {
          "1": {
            components: {
              Sulphur: 1
            },
            features: {
              optmass: [ -.02, -.02 ],
              optmul: [ 0, .08 ],
              thermload: [ 0, -.2 ]
            },
            uuid: "5b32dae1-7c4a-4760-8c48-0d9a9fa2758d"
          },
          "2": {
            components: {
              "Conductive Components": 1,
              "Specialised Legacy Firmware": 1
            },
            features: {
              integrity: [ -.04, -.04 ],
              optmass: [ -.04, -.04 ],
              optmul: [ .08, .13 ],
              power: [ .04, .04 ],
              thermload: [ -.2, -.3 ]
            },
            uuid: "5382eecb-c840-4613-99c1-9bcbdb8d7760"
          },
          "3": {
            components: {
              "Conductive Components": 1,
              "Specialised Legacy Firmware": 1,
              "Unexpected Emission Data": 1
            },
            features: {
              integrity: [ -.08, -.08 ],
              optmass: [ -.06, -.06 ],
              optmul: [ .13, .18 ],
              power: [ .08, .08 ],
              thermload: [ -.3, -.4 ]
            },
            uuid: "0c58a5c8-0bf9-4a2c-baf0-b14228f236df"
          },
          "4": {
            components: {
              "Conductive Ceramics": 1,
              "Decoded Emission Data": 1,
              "Modified Consumer Firmware": 1
            },
            features: {
              integrity: [ -.12, -.12 ],
              optmass: [ -.08, -.08 ],
              optmul: [ .18, .23 ],
              power: [ .12, .12 ],
              thermload: [ -.4, -.5 ]
            },
            uuid: "afb2b22e-ab30-4195-8bfe-ae81ea6067f3"
          },
          "5": {
            components: {
              "Abnormal Compact Emissions Data": 1,
              "Conductive Ceramics": 1,
              Tin: 1
            },
            features: {
              integrity: [ -.16, -.16 ],
              optmass: [ -.1, -.1 ],
              optmul: [ .23, .28 ],
              power: [ .16, .16 ],
              thermload: [ -.5, -.6 ]
            },
            uuid: "74e6e223-c709-4c91-88d5-c55f9dfdf722"
          }
        },
        id: 24,
        modulename: [ "Thrusters", "Engines" ],
        name: "Clean"
      },
      FSD_FastBoot: {
        fdname: "FSD_FastBoot",
        grades: {
          "1": {
            components: {
              "Grid Resistors": 1
            },
            features: {
              boot: [ 0, -.2 ],
              integrity: [ -.03, -.03 ],
              optmass: [ 0, .03 ],
              thermload: [ .04, .04 ]
            },
            uuid: "23f08173-4d05-49d2-b126-d9e5ea5ee8b5"
          },
          "2": {
            components: {
              Chromium: 1,
              "Grid Resistors": 1
            },
            features: {
              boot: [ -.2, -.35 ],
              integrity: [ -.06, -.06 ],
              optmass: [ .03, .06 ],
              thermload: [ .08, .08 ]
            },
            uuid: "56875992-02ae-4364-934c-88dbfda0cc57"
          },
          "3": {
            components: {
              "Grid Resistors": 1,
              "Heat Dispersion Plate": 1,
              Selenium: 1
            },
            features: {
              boot: [ -.35, -.5 ],
              integrity: [ -.09, -.09 ],
              optmass: [ .06, .09 ],
              thermload: [ .12, .12 ]
            },
            uuid: "80c84723-9c37-434b-890e-8723504e5e48"
          },
          "4": {
            components: {
              Cadmium: 1,
              "Heat Exchangers": 1,
              "Hybrid Capacitors": 1
            },
            features: {
              boot: [ -.5, -.65 ],
              integrity: [ -.12, -.12 ],
              optmass: [ .09, .12 ],
              thermload: [ .16, .16 ]
            },
            uuid: "3747180c-d798-4bc4-bb42-daecf44729cc"
          },
          "5": {
            components: {
              "Electrochemical Arrays": 1,
              "Heat Vanes": 1,
              Tellurium: 1
            },
            features: {
              boot: [ -.65, -.8 ],
              integrity: [ -.15, -.15 ],
              optmass: [ .12, .15 ],
              thermload: [ .2, .2 ]
            },
            uuid: "1f542f8e-9c17-418d-af88-6f219596465e"
          }
        },
        id: 25,
        modulename: [ "Frame shift drive", "FSD" ],
        name: "Faster boot sequence"
      },
      FSD_LongRange: {
        fdname: "FSD_LongRange",
        grades: {
          "1": {
            components: {
              "Atypical Disrupted Wake Echoes": 1
            },
            features: {
              integrity: [ -.03, -.03 ],
              mass: [ .1, .1 ],
              optmass: [ 0, .15 ],
              power: [ .03, .03 ]
            },
            uuid: "bb67b1a2-7a5b-47bc-8ed8-e949b5e3fb16"
          },
          "2": {
            components: {
              "Atypical Disrupted Wake Echoes": 1,
              "Chemical Processors": 1
            },
            features: {
              integrity: [ -.06, -.06 ],
              mass: [ .15, .15 ],
              optmass: [ .15, .25 ],
              power: [ .06, .06 ]
            },
            uuid: "74045351-f348-45f5-8798-487211f19520"
          },
          "3": {
            components: {
              "Chemical Processors": 1,
              Phosphorus: 1,
              "Strange Wake Solutions": 1
            },
            features: {
              integrity: [ -.09, -.09 ],
              mass: [ .2, .2 ],
              optmass: [ .25, .35 ],
              power: [ .09, .09 ]
            },
            uuid: "cf196bb9-55a1-457f-893b-84ff2afd4db9"
          },
          "4": {
            components: {
              "Chemical Distillery": 1,
              "Eccentric Hyperspace Trajectories": 1,
              Manganese: 1
            },
            features: {
              integrity: [ -.12, -.12 ],
              mass: [ .25, .25 ],
              optmass: [ .35, .45 ],
              power: [ .12, .12 ]
            },
            uuid: "ecf49fec-32fd-4930-949d-a341bf0fd00c"
          },
          "5": {
            components: {
              Arsenic: 1,
              "Chemical Manipulators": 1,
              "Datamined Wake Exceptions": 1
            },
            features: {
              integrity: [ -.15, -.15 ],
              mass: [ .3, .3 ],
              optmass: [ .45, .55 ],
              power: [ .15, .15 ]
            },
            uuid: "dddd4fd3-bc9a-4c5b-8606-853c63d0f554"
          }
        },
        id: 26,
        modulename: [ "Frame shift drive", "FSD" ],
        name: "Increased range"
      },
      FSD_Shielded: {
        fdname: "FSD_Shielded",
        grades: {
          "1": {
            components: {
              Nickel: 1
            },
            features: {
              integrity: [ 0, .25 ],
              mass: [ .04, .04 ],
              optmass: [ 0, .03 ],
              thermload: [ 0, -.1 ]
            },
            uuid: "0bf46ac9-dfcd-49c3-bcef-db93ba04ed97"
          },
          "2": {
            components: {
              Carbon: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .25, .5 ],
              mass: [ .08, .08 ],
              optmass: [ .03, .06 ],
              thermload: [ -.1, -.15 ]
            },
            uuid: "2858e680-b675-4ee9-9c24-04e8dd2bfe85"
          },
          "3": {
            components: {
              Carbon: 1,
              "Shielding Sensors": 1,
              Zinc: 1
            },
            features: {
              integrity: [ .5, .75 ],
              mass: [ .12, .12 ],
              optmass: [ .06, .09 ],
              thermload: [ -.15, -.2 ]
            },
            uuid: "f836e994-c19f-4ed0-926d-fbcc75f136c0"
          },
          "4": {
            components: {
              "Compound Shielding": 1,
              "High Density Composites": 1,
              Vanadium: 1
            },
            features: {
              integrity: [ .75, 1 ],
              mass: [ .16, .16 ],
              optmass: [ .09, .12 ],
              thermload: [ -.2, -.25 ]
            },
            uuid: "fe30a1a0-3644-4411-af1f-59bae0a565b9"
          },
          "5": {
            components: {
              "Imperial Shielding": 1,
              "Proprietary Composites": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ 1, 1.25 ],
              mass: [ .2, .2 ],
              optmass: [ .12, .15 ],
              thermload: [ -.25, -.3 ]
            },
            uuid: "eba5e423-bba4-40c1-aafb-e954881f9f2c"
          }
        },
        id: 27,
        modulename: [ "Frame shift drive", "FSD" ],
        name: "Shielded"
      },
      FSDinterdictor_Expanded: {
        fdname: "FSDinterdictor_Expanded",
        grades: {
          "1": {
            components: {
              "Mechanical Scrap": 1
            },
            features: {
              facinglimit: [ 0, .4 ],
              power: [ .1, .1 ],
              ranget: [ -.1, .1 ]
            },
            uuid: "da98fe81-8ac1-4c4a-ba1b-76b894dc9de8"
          },
          "2": {
            components: {
              "Mechanical Equipment": 1,
              "Unusual Encrypted Files": 1
            },
            features: {
              facinglimit: [ .4, .6 ],
              power: [ .2, .2 ],
              ranget: [ -.15, -.15 ]
            },
            uuid: "88bcd4df-3ae3-4e6b-80d8-27bf8815e4d2"
          },
          "3": {
            components: {
              "Grid Resistors": 1,
              "Mechanical Components": 1,
              "Tagged Encryption Codes": 1
            },
            features: {
              facinglimit: [ .6, .8 ],
              power: [ .3, .3 ],
              ranget: [ -.2, -.2 ]
            },
            uuid: "1036b38e-676f-4b42-8518-abed6f627fb7"
          },
          "4": {
            components: {
              "Divergent Scan Data": 1,
              "Mechanical Equipment": 1,
              "Strange Wake Solutions": 1
            },
            features: {
              facinglimit: [ .8, 1 ],
              power: [ .4, .4 ],
              ranget: [ -.25, -.25 ]
            },
            uuid: "6c9f4098-99fa-4777-bd21-367937d1391f"
          }
        },
        id: 28,
        modulename: [ "Frame shift drive interdictor", "FSDI" ],
        name: "Expanded capture arc"
      },
      FSDinterdictor_LongRange: {
        fdname: "FSDinterdictor_LongRange",
        grades: {
          "1": {
            components: {
              "Unusual Encrypted Files": 1
            },
            features: {
              facinglimit: [ -.01, -.01 ],
              mass: [ .1, .1 ],
              power: [ .1, .1 ],
              ranget: [ 0, .2 ]
            },
            uuid: "ecec8b3e-891f-4b79-8c07-7836e62424f8"
          },
          "2": {
            components: {
              "Atypical Disrupted Wake Echoes": 1,
              "Tagged Encryption Codes": 1
            },
            features: {
              facinglimit: [ -.15, -.15 ],
              mass: [ .15, .15 ],
              power: [ .2, .2 ],
              ranget: [ .2, .3 ]
            },
            uuid: "08d02c88-e63f-4d29-86b9-eea6a20b17a1"
          },
          "3": {
            components: {
              "Anomalous Bulk Scan Data": 1,
              "Anomalous FSD Telemetry": 1,
              "Open Symmetric Keys": 1
            },
            features: {
              facinglimit: [ -.2, -.2 ],
              mass: [ .2, .2 ],
              power: [ .3, .3 ],
              ranget: [ .3, .4 ]
            },
            uuid: "a2d4bed7-4326-4776-a17b-6ee746f4c9be"
          },
          "4": {
            components: {
              "Unidentified Scan Archives": 1,
              "Strange Wake Solutions": 1,
              "Atypical Encryption Archives": 1
            },
            features: {
              facinglimit: [ -.25, -.25 ],
              mass: [ .25, .25 ],
              power: [ .4, .4 ],
              ranget: [ .4, .5 ]
            },
            uuid: "aaabe016-883e-4ec6-a0f0-dd519b4f0ca5"
          }
        },
        id: 29,
        modulename: [ "Frame shift drive interdictor", "FSDI" ],
        name: "Long range"
      },
      FuelScoop_Shielded: {
        fdname: "FuelScoop_Shielded",
        grades: {
          "1": {
            components: {
              "Worn Shield Emitters": 1
            },
            features: {
              integrity: [ 0, .6 ],
              power: [ .2, .2 ]
            },
            uuid: "7b71b0d6-e035-4526-91cf-b16a15d32594"
          },
          "2": {
            components: {
              Carbon: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .6, 1.2 ],
              power: [ .4, .4 ]
            },
            uuid: "1c367826-7b57-4beb-9d99-c9a598d29cf9"
          },
          "3": {
            components: {
              Carbon: 1,
              "High Density Composites": 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ 1.2, 1.8 ],
              power: [ .6, .6 ]
            },
            uuid: "b61946ff-9e65-447b-9757-4c37789fc350"
          },
          "4": {
            components: {
              "Proprietary Composites": 1,
              "Shielding Sensors": 1,
              Vanadium: 1
            },
            features: {
              integrity: [ 1.8, 2.4 ],
              power: [ .8, .8 ]
            },
            uuid: "457e3d79-cdc8-44e6-b98c-c360821b0131"
          }
        },
        id: 30,
        modulename: [ "Fuel scoop" ],
        name: "Shielded"
      },
      FuelTransferLimpet_LightWeight: {
        fdname: "FuelTransferLimpet_LightWeight",
        grades: {
          "1": {
            components: {
              Phosphorus: 1
            },
            features: {
              integrity: [ -.1, -.1 ],
              mass: [ 0, -.45 ]
            },
            uuid: "b4abda7b-ac4c-4ddf-ac76-f3d9640e217b"
          },
          "2": {
            components: {
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.2, -.2 ],
              mass: [ -.45, -.55 ]
            },
            uuid: "7bae1015-d4b9-4c33-8286-79c93386cf33"
          },
          "3": {
            components: {
              "Conductive Ceramics": 1,
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.3, -.3 ],
              mass: [ -.55, -.65 ]
            },
            uuid: "b69e0eb2-67c4-402a-8b4d-69d64c899fdc"
          },
          "4": {
            components: {
              "Conductive Components": 1,
              "Phase Alloys": 1,
              "Proto Light Alloys": 1
            },
            features: {
              integrity: [ -.4, -.4 ],
              mass: [ -.65, -.75 ]
            },
            uuid: "36d13200-4c1d-4d49-9936-af8562a6fbce"
          },
          "5": {
            components: {
              "Conductive Ceramics": 1,
              "Proto Light Alloys": 1,
              "Proto Radiolic Alloys": 1
            },
            features: {
              integrity: [ -.5, -.5 ],
              mass: [ -.75, -.85 ]
            },
            uuid: "e7ac0755-b319-4e35-b736-8235b68a1b09"
          }
        },
        id: 31,
        modulename: [ "Fuel transfer limpet controller" ],
        name: "Lightweight"
      },
      FuelTransferLimpet_Reinforced: {
        fdname: "FuelTransferLimpet_Reinforced",
        grades: {
          "1": {
            components: {
              Nickel: 1
            },
            features: {
              integrity: [ 0, .6 ],
              mass: [ .3, .3 ]
            },
            uuid: "9d3c40c1-a35c-42a7-8756-68dba821bde1"
          },
          "2": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .6, 1.2 ],
              mass: [ .6, .6 ]
            },
            uuid: "c09e8d1b-e78e-43b8-bc8c-8ebf7bd84dc5"
          },
          "3": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ 1.2, 1.8 ],
              mass: [ .9, .9 ]
            },
            uuid: "51e5c01d-191c-446c-8ae1-d91e68da1013"
          },
          "4": {
            components: {
              Molybdenum: 1,
              Tungsten: 1,
              Zinc: 1
            },
            features: {
              integrity: [ 1.8, 2.4 ],
              mass: [ 1.2, 1.2 ]
            },
            uuid: "1a2e3498-d593-4420-ad66-01281648f8c7"
          },
          "5": {
            components: {
              "High Density Composites": 1,
              Molybdenum: 1,
              Technetium: 1
            },
            features: {
              integrity: [ 2.4, 3 ],
              mass: [ 1.5, 1.5 ]
            },
            uuid: "9faf5a34-a93d-4bcb-873f-0d044b5bc1ba"
          }
        },
        id: 32,
        modulename: [ "Fuel transfer limpet controller" ],
        name: "Reinforced"
      },
      FuelTransferLimpet_Shielded: {
        fdname: "FuelTransferLimpet_Shielded",
        grades: {
          "1": {
            components: {
              "Worn Shield Emitters": 1
            },
            features: {
              integrity: [ 0, .6 ],
              power: [ .2, .2 ]
            },
            uuid: "736aca61-1fd6-4e95-931c-9354434b52ce"
          },
          "2": {
            components: {
              Carbon: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .6, 1.2 ],
              power: [ .4, .4 ]
            },
            uuid: "60b7eeba-eaeb-4799-a7ab-c989afc9e74a"
          },
          "3": {
            components: {
              Carbon: 1,
              "High Density Composites": 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ 1.2, 1.8 ],
              power: [ .6, .6 ]
            },
            uuid: "31f3e418-9020-4b01-94ec-cf9d62529f12"
          },
          "4": {
            components: {
              "Proprietary Composites": 1,
              "Shielding Sensors": 1,
              Vanadium: 1
            },
            features: {
              integrity: [ 1.8, 2.4 ],
              power: [ .8, .8 ]
            },
            uuid: "65e897c7-0bb2-426f-bed2-3162767a80d2"
          },
          "5": {
            components: {
              "Compound Shielding": 1,
              "Core Dynamics Composites": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ 2.4, 3 ],
              power: [ 1, 1 ]
            },
            uuid: "800144e0-f708-4f40-b78a-6d1354712489"
          }
        },
        id: 33,
        modulename: [ "Fuel transfer limpet controller" ],
        name: "Shielded"
      },
      HatchBreakerLimpet_LightWeight: {
        fdname: "HatchBreakerLimpet_LightWeight",
        grades: {
          "1": {
            components: {
              Phosphorus: 1
            },
            features: {
              integrity: [ -.1, -.1 ],
              mass: [ 0, -.45 ]
            },
            uuid: "3434789e-7555-4bca-a901-09ddbae0d323"
          },
          "2": {
            components: {
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.2, -.2 ],
              mass: [ -.45, -.55 ]
            },
            uuid: "c62a09da-8157-474e-8b8f-04b43792a372"
          },
          "3": {
            components: {
              "Conductive Ceramics": 1,
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.3, -.3 ],
              mass: [ -.55, -.65 ]
            },
            uuid: "ad0166b8-9313-4c7a-a95c-5e4b0e53fc40"
          },
          "4": {
            components: {
              "Conductive Components": 1,
              "Phase Alloys": 1,
              "Proto Light Alloys": 1
            },
            features: {
              integrity: [ -.4, -.4 ],
              mass: [ -.65, -.75 ]
            },
            uuid: "cf482f0a-de37-4fec-8bcd-f087203e0f2d"
          },
          "5": {
            components: {
              "Conductive Ceramics": 1,
              "Proto Light Alloys": 1,
              "Proto Radiolic Alloys": 1
            },
            features: {
              integrity: [ -.5, -.5 ],
              mass: [ -.75, -.85 ]
            },
            uuid: "80d2445b-47ef-4738-8729-152f45c732f9"
          }
        },
        id: 34,
        modulename: [ "Hatch breaker limpet controller" ],
        name: "Lightweight"
      },
      HatchBreakerLimpet_Reinforced: {
        fdname: "HatchBreakerLimpet_Reinforced",
        grades: {
          "1": {
            components: {
              Nickel: 1
            },
            features: {
              integrity: [ 0, .6 ],
              mass: [ .3, .3 ]
            },
            uuid: "f75e88b4-7a5c-40da-9652-a7e91aa174e2"
          },
          "2": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .6, 1.2 ],
              mass: [ .6, .6 ]
            },
            uuid: "d794c46b-13e7-4136-b435-bdb96c87c657"
          },
          "3": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ 1.2, 1.8 ],
              mass: [ .9, .9 ]
            },
            uuid: "07acc4c6-724e-4c6b-be15-c9c49d4d95a6"
          },
          "4": {
            components: {
              Molybdenum: 1,
              Tungsten: 1,
              Zinc: 1
            },
            features: {
              integrity: [ 1.8, 2.4 ],
              mass: [ 1.2, 1.2 ]
            },
            uuid: "fe76b519-7695-4618-b71f-4e27f53f9eb4"
          },
          "5": {
            components: {
              "High Density Composites": 1,
              Molybdenum: 1,
              Technetium: 1
            },
            features: {
              integrity: [ 2.4, 3 ],
              mass: [ 1.5, 1.5 ]
            },
            uuid: "eb38c498-6805-4ac5-8806-c81cc32123af"
          }
        },
        id: 35,
        modulename: [ "Hatch breaker limpet controller" ],
        name: "Reinforced"
      },
      HatchBreakerLimpet_Shielded: {
        fdname: "HatchBreakerLimpet_Shielded",
        grades: {
          "1": {
            components: {
              "Worn Shield Emitters": 1
            },
            features: {
              integrity: [ 0, .6 ],
              power: [ .2, .2 ]
            },
            uuid: "952d56cc-0c1c-4a62-a8c4-a4c668181654"
          },
          "2": {
            components: {
              Carbon: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .6, 1.2 ],
              power: [ .4, .4 ]
            },
            uuid: "accfd35c-3172-455a-94b6-27be6409970a"
          },
          "3": {
            components: {
              Carbon: 1,
              "High Density Composites": 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ 1.2, 1.8 ],
              power: [ .6, .6 ]
            },
            uuid: "0db2b6bd-df3f-48be-ac6b-a334b79757a1"
          },
          "4": {
            components: {
              "Proprietary Composites": 1,
              "Shielding Sensors": 1,
              Vanadium: 1
            },
            features: {
              integrity: [ 1.8, 2.4 ],
              power: [ .8, .8 ]
            },
            uuid: "a747942f-d354-4f0d-ad59-323e52823924"
          },
          "5": {
            components: {
              "Compound Shielding": 1,
              "Core Dynamics Composites": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ 2.4, 3 ],
              power: [ 1, 1 ]
            },
            uuid: "acf4833c-1fe8-4aef-a396-33ca652793e2"
          }
        },
        id: 36,
        modulename: [ "Hatch breaker limpet controller" ],
        name: "Shielded"
      },
      HeatSinkLauncher_HeatSinkCapacity: {
        fdname: "HeatSinkLauncher_HeatSinkCapacity",
        grades: {
          "3": {
            components: {
              "Mechanical Scrap": 1,
              Niobium: 1,
              Vanadium: 1
            },
            features: {
              ammo: [ .5, .5 ],
              mass: [ 1, 1 ],
              reload: [ .5, .5 ]
            },
            uuid: "93c43a5d-106c-4481-b50b-c46311607209"
          }
        },
        id: 37,
        modulename: [ "Heat sink launcher" ],
        name: "Ammo capacity"
      },
      HeatSinkLauncher_LightWeight: {
        fdname: "HeatSinkLauncher_LightWeight",
        grades: {
          "1": {
            components: {
              Phosphorus: 1
            },
            features: {
              integrity: [ -.1, -.1 ],
              mass: [ 0, -.45 ]
            },
            uuid: "0a20c246-fe84-43d1-835b-ae74474cdec9"
          },
          "2": {
            components: {
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.2, -.2 ],
              mass: [ -.45, -.55 ]
            },
            uuid: "83dc9090-28c5-45b7-a4f5-8e2a76923e90"
          },
          "3": {
            components: {
              "Conductive Ceramics": 1,
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.3, -.3 ],
              mass: [ -.55, -.65 ]
            },
            uuid: "777b5a47-9d29-4787-b097-8c4a22c11d20"
          },
          "4": {
            components: {
              "Conductive Components": 1,
              "Phase Alloys": 1,
              "Proto Light Alloys": 1
            },
            features: {
              integrity: [ -.4, -.4 ],
              mass: [ -.65, -.75 ]
            },
            uuid: "558a1180-e1a0-4c4a-8992-fac17d58860b"
          },
          "5": {
            components: {
              "Conductive Ceramics": 1,
              "Proto Light Alloys": 1,
              "Proto Radiolic Alloys": 1
            },
            features: {
              integrity: [ -.5, -.5 ],
              mass: [ -.75, -.85 ]
            },
            uuid: "732d7fd3-4ba6-4402-8260-75a2d26c8dc9"
          }
        },
        id: 38,
        modulename: [ "Heat sink launcher" ],
        name: "Lightweight"
      },
      HeatSinkLauncher_Reinforced: {
        fdname: "HeatSinkLauncher_Reinforced",
        grades: {
          "1": {
            components: {
              Nickel: 1
            },
            features: {
              integrity: [ 0, .6 ],
              mass: [ .3, .3 ]
            },
            uuid: "4b8ad4b4-4d42-4014-98ac-2175392ad0c8"
          },
          "2": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .6, 1.2 ],
              mass: [ .6, .6 ]
            },
            uuid: "7a7166cf-d789-4cb8-9768-f31cc3159dc5"
          },
          "3": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ 1.2, 1.8 ],
              mass: [ .9, .9 ]
            },
            uuid: "93d33903-1dc8-453a-8bd6-df3198c1eac5"
          },
          "4": {
            components: {
              Molybdenum: 1,
              Tungsten: 1,
              Zinc: 1
            },
            features: {
              integrity: [ 1.8, 2.4 ],
              mass: [ 1.2, 1.2 ]
            },
            uuid: "9a174428-ac75-4bc8-80e0-c1327d0317b8"
          },
          "5": {
            components: {
              "High Density Composites": 1,
              Molybdenum: 1,
              Technetium: 1
            },
            features: {
              integrity: [ 2.4, 3 ],
              mass: [ 1.5, 1.5 ]
            },
            uuid: "2b450008-60f9-4473-8e2d-563e1f0ded00"
          }
        },
        id: 39,
        modulename: [ "Heat sink launcher" ],
        name: "Reinforced"
      },
      HeatSinkLauncher_Shielded: {
        fdname: "HeatSinkLauncher_Shielded",
        grades: {
          "1": {
            components: {
              "Worn Shield Emitters": 1
            },
            features: {
              integrity: [ 0, .6 ],
              power: [ .2, .2 ]
            },
            uuid: "b7bb4a4a-61ee-44b6-b477-e6abf7540240"
          },
          "2": {
            components: {
              Carbon: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .6, 1.2 ],
              power: [ .4, .4 ]
            },
            uuid: "69ec3d60-591c-4c65-a6d4-2b2fe83e1819"
          },
          "3": {
            components: {
              Carbon: 1,
              "High Density Composites": 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ 1.2, 1.8 ],
              power: [ .6, .6 ]
            },
            uuid: "beb3c5c1-689c-497d-a1b0-92d7fda93878"
          },
          "4": {
            components: {
              "Proprietary Composites": 1,
              "Shielding Sensors": 1,
              Vanadium: 1
            },
            features: {
              integrity: [ 1.8, 2.4 ],
              power: [ .8, .8 ]
            },
            uuid: "52f4a6d1-c291-4ac6-84f2-6d39bc54e675"
          },
          "5": {
            components: {
              "Compound Shielding": 1,
              "Core Dynamics Composites": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ 2.4, 3 ],
              power: [ 1, 1 ]
            },
            uuid: "aa1707cb-c9e3-425f-91cf-98ab482317ca"
          }
        },
        id: 40,
        modulename: [ "Heat sink launcher" ],
        name: "Shielded"
      },
      HullReinforcement_Advanced: {
        fdname: "HullReinforcement_Advanced",
        grades: {
          "1": {
            components: {
              Iron: 1
            },
            features: {
              hullboost: [ 0, .08 ],
              hullreinforcement: [ -.04, -.04 ],
              mass: [ 0, -.08 ]
            },
            uuid: "8405c035-bf65-47d1-bdbe-5253b5c0a98b"
          },
          "2": {
            components: {
              "Conductive Components": 1,
              Iron: 1
            },
            features: {
              hullboost: [ .08, .12 ],
              hullreinforcement: [ -.08, -.08 ],
              mass: [ -.08, -.12 ]
            },
            uuid: "a8dad054-0392-460a-934e-27d40f65e1fc"
          },
          "3": {
            components: {
              "Conductive Components": 1,
              "High Density Composites": 1,
              Iron: 1
            },
            features: {
              hullboost: [ .12, .16 ],
              hullreinforcement: [ -.12, -.12 ],
              mass: [ -.12, -.16 ]
            },
            uuid: "ee887ba1-c66f-4002-97cb-5169201324af"
          },
          "4": {
            components: {
              "Conductive Ceramics": 1,
              Germanium: 1,
              "Proprietary Composites": 1
            },
            features: {
              hullboost: [ .16, .2 ],
              hullreinforcement: [ -.16, -.16 ],
              mass: [ -.16, -.2 ]
            },
            uuid: "8912615d-e711-4e5d-a08f-739cbf372963"
          },
          "5": {
            components: {
              "Conductive Ceramics": 1,
              "Military Grade Alloys": 1,
              Tin: 1
            },
            features: {
              hullboost: [ .2, .24 ],
              hullreinforcement: [ -.2, -.2 ],
              mass: [ -.2, -.24 ]
            },
            uuid: "371f79dc-6387-40eb-9d98-be915ae4413d"
          }
        },
        id: 41,
        modulename: [ "Hull reinforcement", "Hull reinforcement package", "HRP" ],
        name: "Lightweight"
      },
      HullReinforcement_Explosive: {
        fdname: "HullReinforcement_Explosive",
        grades: {
          "1": {
            components: {
              Nickel: 1
            },
            features: {
              explres: [ 0, .117 ],
              hullreinforcement: [ 0, .03 ],
              kinres: [ -.02, -.02 ],
              thermres: [ -.02, -.02 ]
            },
            uuid: "ed72014b-4033-413c-8a71-5eac18e085ce"
          },
          "2": {
            components: {
              Carbon: 1,
              Zinc: 1
            },
            features: {
              explres: [ .117, .185 ],
              hullreinforcement: [ .03, .06 ],
              kinres: [ -.04, -.04 ],
              thermres: [ -.04, -.04 ]
            },
            uuid: "7be2929b-0c89-4059-90d9-4631d90c053b"
          },
          "3": {
            components: {
              "Salvaged Alloys": 1,
              Vanadium: 1,
              Zirconium: 1
            },
            features: {
              explres: [ .185, .254 ],
              hullreinforcement: [ .06, .09 ],
              kinres: [ -.06, -.06 ],
              thermres: [ -.06, -.06 ]
            },
            uuid: "11742116-77d3-40ea-bd1f-71e0558a0ad1"
          },
          "4": {
            components: {
              "Galvanising Alloys": 1,
              Mercury: 1,
              Tungsten: 1
            },
            features: {
              explres: [ .254, .322 ],
              hullreinforcement: [ .09, .12 ],
              kinres: [ -.08, -.08 ],
              thermres: [ -.08, -.08 ]
            },
            uuid: "1f59b0aa-46ab-4eb5-bf07-fe4d8f968c1d"
          },
          "5": {
            components: {
              Molybdenum: 1,
              "Phase Alloys": 1,
              Ruthenium: 1
            },
            features: {
              explres: [ .322, .39 ],
              hullreinforcement: [ .12, .15 ],
              kinres: [ -.1, -.1 ],
              thermres: [ -.1, -.1 ]
            },
            uuid: "2251a73a-39da-4a50-b099-014c07378857"
          }
        },
        id: 43,
        modulename: [ "Hull reinforcement", "Hull reinforcement package", "HRP" ],
        name: "Blast resistant"
      },
      HullReinforcement_HeavyDuty: {
        fdname: "HullReinforcement_HeavyDuty",
        grades: {
          "1": {
            components: {
              Carbon: 1
            },
            features: {
              explres: [ 0, .03 ],
              hullreinforcement: [ 0, .24 ],
              kinres: [ 0, .03 ],
              mass: [ .08, .08 ],
              thermres: [ 0, .03 ]
            },
            uuid: "e174a927-ab55-4691-be3e-832f6d68d679"
          },
          "2": {
            components: {
              Carbon: 1,
              "Shield Emitters": 1
            },
            features: {
              explres: [ .03, .06 ],
              hullreinforcement: [ .24, .36 ],
              kinres: [ .03, .06 ],
              mass: [ .16, .16 ],
              thermres: [ .03, .06 ]
            },
            uuid: "2cd3f87c-5ea3-4bd5-ab6d-70458f29de7e"
          },
          "3": {
            components: {
              Carbon: 1,
              "High Density Composites": 1,
              "Shield Emitters": 1
            },
            features: {
              explres: [ .06, .09 ],
              hullreinforcement: [ .36, .48 ],
              kinres: [ .06, .09 ],
              mass: [ .24, .24 ],
              thermres: [ .06, .09 ]
            },
            uuid: "251e8773-d06a-4b0e-9e30-a5114a45a5c1"
          },
          "4": {
            components: {
              "Proprietary Composites": 1,
              "Shielding Sensors": 1,
              Vanadium: 1
            },
            features: {
              explres: [ .09, .12 ],
              hullreinforcement: [ .48, .6 ],
              kinres: [ .09, .12 ],
              mass: [ .32, .32 ],
              thermres: [ .09, .12 ]
            },
            uuid: "d6b14f0e-9a32-4838-b41f-986f4a5abd6d"
          },
          "5": {
            components: {
              "Compound Shielding": 1,
              "Core Dynamics Composites": 1,
              Tungsten: 1
            },
            features: {
              explres: [ .12, .15 ],
              hullreinforcement: [ .6, .72 ],
              kinres: [ .12, .15 ],
              mass: [ .4, .4 ],
              thermres: [ .12, .15 ]
            },
            uuid: "137a648d-394b-48ac-a4de-bfa145fa9cf0"
          }
        },
        id: 42,
        modulename: [ "Hull reinforcement", "Hull reinforcement package", "HRP" ],
        name: "Heavy duty"
      },
      HullReinforcement_Kinetic: {
        fdname: "HullReinforcement_Kinetic",
        grades: {
          "1": {
            components: {
              Nickel: 1
            },
            features: {
              explres: [ -.02, -.02 ],
              hullreinforcement: [ 0, .03 ],
              kinres: [ 0, .117 ],
              thermres: [ -.02, -.02 ]
            },
            uuid: "9d5338ab-031c-40e5-bd13-d3eb057540ab"
          },
          "2": {
            components: {
              Nickel: 1,
              Vanadium: 1
            },
            features: {
              explres: [ -.04, -.04 ],
              hullreinforcement: [ .03, .06 ],
              kinres: [ .117, .185 ],
              thermres: [ -.04, -.04 ]
            },
            uuid: "238db8e4-99e2-4e70-b4e3-f918294110c7"
          },
          "3": {
            components: {
              "High Density Composites": 1,
              "Salvaged Alloys": 1,
              Vanadium: 1
            },
            features: {
              explres: [ -.06, -.06 ],
              hullreinforcement: [ .06, .09 ],
              kinres: [ .185, .254 ],
              thermres: [ -.06, -.06 ]
            },
            uuid: "cb65ddfa-2fd9-4db5-9558-0770866ea8ee"
          },
          "4": {
            components: {
              "Galvanising Alloys": 1,
              "Proprietary Composites": 1,
              Tungsten: 1
            },
            features: {
              explres: [ -.08, -.08 ],
              hullreinforcement: [ .09, .12 ],
              kinres: [ .254, .322 ],
              thermres: [ -.08, -.08 ]
            },
            uuid: "944cb78e-4da0-43a0-acc8-95c7d67eaf92"
          },
          "5": {
            components: {
              "Core Dynamics Composites": 1,
              Molybdenum: 1,
              "Phase Alloys": 1
            },
            features: {
              explres: [ -.1, -.1 ],
              hullreinforcement: [ .12, .15 ],
              kinres: [ .322, .29 ],
              thermres: [ -.1, -.1 ]
            },
            uuid: "bd68edc4-6ed5-4704-9682-28b51a18591f"
          }
        },
        id: 44,
        modulename: [ "Hull reinforcement", "Hull reinforcement package", "HRP" ],
        name: "Kinetic resistant"
      },
      HullReinforcement_Thermic: {
        fdname: "HullReinforcement_Thermic",
        grades: {
          "1": {
            components: {
              "Heat Conduction Wiring": 1
            },
            features: {
              explres: [ -.02, -.02 ],
              hullreinforcement: [ 0, .03 ],
              kinres: [ -.02, -.02 ],
              thermres: [ 0, .117 ]
            },
            uuid: "cc3d62d5-9769-480d-9e37-620c61a276ab"
          },
          "2": {
            components: {
              "Heat Dispersion Plate": 1,
              Nickel: 1
            },
            features: {
              explres: [ -.04, -.04 ],
              hullreinforcement: [ .03, .06 ],
              kinres: [ -.04, -.04 ],
              thermres: [ .117, .185 ]
            },
            uuid: "e4aa2331-7dc5-479c-9959-d90f0e473da9"
          },
          "3": {
            components: {
              "Heat Exchangers": 1,
              "Salvaged Alloys": 1,
              Vanadium: 1
            },
            features: {
              explres: [ -.06, -.06 ],
              hullreinforcement: [ .06, .09 ],
              kinres: [ -.06, -.06 ],
              thermres: [ .185, .254 ]
            },
            uuid: "29f49ae9-e241-4791-a9e3-bfdccd6cdfbb"
          },
          "4": {
            components: {
              "Galvanising Alloys": 1,
              "Heat Vanes": 1,
              Tungsten: 1
            },
            features: {
              explres: [ -.08, -.08 ],
              hullreinforcement: [ .09, .12 ],
              kinres: [ -.08, -.08 ],
              thermres: [ .254, .322 ]
            },
            uuid: "19e30f32-a789-4acf-8f69-f97677ace963"
          },
          "5": {
            components: {
              Molybdenum: 1,
              "Phase Alloys": 1,
              "Proto Heat Radiators": 1
            },
            features: {
              explres: [ -.1, -.1 ],
              hullreinforcement: [ .12, .15 ],
              kinres: [ -.1, -.1 ],
              thermres: [ .322, .39 ]
            },
            uuid: "e6151657-1317-4aec-9e49-2d7e7a093d74"
          }
        },
        id: 45,
        modulename: [ "Hull reinforcement", "Hull reinforcement package", "HRP" ],
        name: "Thermal resistant"
      },
      KillWarrantScanner_LightWeight: {
        fdname: "KillWarrantScanner_LightWeight",
        grades: {
          "1": {
            components: {
              Phosphorus: 1
            },
            features: {
              integrity: [ -.1, -.1 ],
              mass: [ 0, -.45 ]
            },
            uuid: "b56007ba-9351-417e-9da8-def090b31e50"
          },
          "2": {
            components: {
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.2, -.2 ],
              mass: [ -.45, -.55 ]
            },
            uuid: "14b2d6f0-5f93-48c9-a04a-b9b1064b4bd1"
          },
          "3": {
            components: {
              "Conductive Ceramics": 1,
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.3, -.3 ],
              mass: [ -.55, -.65 ]
            },
            uuid: "d6dc2106-b95e-49fe-bd56-0ab0729045ad"
          },
          "4": {
            components: {
              "Conductive Components": 1,
              "Phase Alloys": 1,
              "Proto Light Alloys": 1
            },
            features: {
              integrity: [ -.4, -.4 ],
              mass: [ -.65, -.75 ]
            },
            uuid: "fa568ca9-fe6f-4036-89ae-c6659fdc4e33"
          },
          "5": {
            components: {
              "Conductive Ceramics": 1,
              "Proto Light Alloys": 1,
              "Proto Radiolic Alloys": 1
            },
            features: {
              integrity: [ -.5, -.5 ],
              mass: [ -.75, -.85 ]
            },
            uuid: "caadbd5f-2b31-42bb-b3ee-754d44d34938"
          }
        },
        id: 46,
        modulename: [ "Kill warrant scanner", "KWS" ],
        name: "Lightweight"
      },
      KillWarrantScanner_LongRange: {
        fdname: "KillWarrantScanner_LongRange",
        grades: {
          "1": {
            components: {
              Iron: 1
            },
            features: {
              power: [ .1, .1 ],
              angle: [ -.1, -.1 ],
              range: [ 0, .24 ]
            },
            uuid: "2689c846-02d7-4694-97f1-85cd5437b42f"
          },
          "2": {
            components: {
              "Hybrid Capacitors": 1,
              Iron: 1
            },
            features: {
              power: [ .2, .2 ],
              angle: [ -.15, -.15 ],
              range: [ .24, .48 ]
            },
            uuid: "c2160767-b03f-491e-9a45-31976fb78899"
          },
          "3": {
            components: {
              "Hybrid Capacitors": 1,
              Iron: 1,
              "Unexpected Emission Data": 1
            },
            features: {
              power: [ .3, .3 ],
              angle: [ -.2, -.2 ],
              range: [ .48, .72 ]
            },
            uuid: "4d9ccdb6-89cc-4f27-a8c8-584de68dae4b"
          },
          "4": {
            components: {
              "Decoded Emission Data": 1,
              "Electrochemical Arrays": 1,
              Germanium: 1
            },
            features: {
              power: [ .4, .4 ],
              angle: [ -.25, -.25 ],
              range: [ .72, .96 ]
            },
            uuid: "0ecb3bee-4033-4937-a5ed-161f50cb6024"
          },
          "5": {
            components: {
              "Abnormal Compact Emissions Data": 1,
              Niobium: 1,
              "Polymer Capacitors": 1
            },
            features: {
              power: [ .5, .5 ],
              angle: [ -.3, -.3 ],
              range: [ .96, 1.2 ]
            },
            uuid: "8ec2cbd4-b944-448b-b230-d9de87aea5b8"
          }
        },
        id: 99,
        modulename: [ "Kill warrant scanner", "KWS" ],
        name: "Long range"
      },
      KillWarrantScanner_Reinforced: {
        fdname: "KillWarrantScanner_Reinforced",
        grades: {
          "1": {
            components: {
              Nickel: 1
            },
            features: {
              integrity: [ 0, .6 ],
              mass: [ .3, .3 ]
            },
            uuid: "54cf058d-795d-423c-8923-fdd6971dec29"
          },
          "2": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .6, 1.2 ],
              mass: [ .6, .6 ]
            },
            uuid: "3d7eb835-8a30-458d-bbf3-cfd8de5f8cb4"
          },
          "3": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ 1.2, 1.8 ],
              mass: [ .9, .9 ]
            },
            uuid: "200dfa7b-085d-43d8-ae61-f7080feed350"
          },
          "4": {
            components: {
              Molybdenum: 1,
              Tungsten: 1,
              Zinc: 1
            },
            features: {
              integrity: [ 1.8, 2.4 ],
              mass: [ 1.2, 1.2 ]
            },
            uuid: "4fdb0643-c9e0-43f6-8b6b-4613fec1de03"
          },
          "5": {
            components: {
              "High Density Composites": 1,
              Molybdenum: 1,
              Technetium: 1
            },
            features: {
              integrity: [ 2.4, 3 ],
              mass: [ 1.5, 1.5 ]
            },
            uuid: "b5787172-ca08-43bd-8d57-b00a26c3d6c8"
          }
        },
        id: 47,
        modulename: [ "Kill warrant scanner", "KWS" ],
        name: "Reinforced"
      },
      KillWarrantScanner_Shielded: {
        fdname: "KillWarrantScanner_Shielded",
        grades: {
          "1": {
            components: {
              "Worn Shield Emitters": 1
            },
            features: {
              integrity: [ 0, .6 ],
              power: [ .2, .2 ]
            },
            uuid: "f4426054-f766-4be3-8b26-e9236ff61dd9"
          },
          "2": {
            components: {
              Carbon: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .6, 1.2 ],
              power: [ .4, .4 ]
            },
            uuid: "fa7b4b7f-ed0a-401f-a372-1d03c09f9c55"
          },
          "3": {
            components: {
              Carbon: 1,
              "High Density Composites": 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ 1.2, 1.8 ],
              power: [ .6, .6 ]
            },
            uuid: "443fe7e9-e313-457b-8c0f-6eb22e6e91ef"
          },
          "4": {
            components: {
              "Proprietary Composites": 1,
              "Shielding Sensors": 1,
              Vanadium: 1
            },
            features: {
              integrity: [ 1.8, 2.4 ],
              power: [ .8, .8 ]
            },
            uuid: "b1a0e15d-7164-44f9-85e5-9acc64e56b8b"
          },
          "5": {
            components: {
              "Compound Shielding": 1,
              "Core Dynamics Composites": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ 2.4, 3 ],
              power: [ 1, 1 ]
            },
            uuid: "499f1881-9448-4df5-a734-cc3876f23790"
          }
        },
        id: 48,
        modulename: [ "Kill warrant scanner", "KWS" ],
        name: "Shielded"
      },
      LifeSupport_LightWeight: {
        fdname: "LifeSupport_LightWeight",
        grades: {
          "1": {
            components: {
              Phosphorus: 1
            },
            features: {
              integrity: [ -.1, -.1 ],
              mass: [ 0, -.45 ]
            },
            uuid: "e1e1bd93-3a3f-4454-bfe3-0e2b6840b43a"
          },
          "2": {
            components: {
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.2, -.2 ],
              mass: [ -.45, -.55 ]
            },
            uuid: "aaf29592-df21-4b4c-aeac-20252e75b8aa"
          },
          "3": {
            components: {
              "Conductive Ceramics": 1,
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.3, -.3 ],
              mass: [ -.55, -.65 ]
            },
            uuid: "8876b27a-2c31-49f0-8a47-c11acd801c2b"
          },
          "4": {
            components: {
              "Conductive Components": 1,
              "Phase Alloys": 1,
              "Proto Light Alloys": 1
            },
            features: {
              integrity: [ -.4, -.4 ],
              mass: [ -.65, -.75 ]
            },
            uuid: "b7672f07-e10e-4371-989c-dd49e28c4b79"
          }
        },
        id: 49,
        modulename: [ "Life support" ],
        name: "Lightweight"
      },
      LifeSupport_Reinforced: {
        fdname: "LifeSupport_Reinforced",
        grades: {
          "1": {
            components: {
              Nickel: 1
            },
            features: {
              integrity: [ 0, .6 ],
              mass: [ .3, .3 ]
            },
            uuid: "b40b11a1-5f0f-440f-b77d-9abf9833d546"
          },
          "2": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .6, 1.2 ],
              mass: [ .6, .6 ]
            },
            uuid: "847b937b-ffa2-4418-9a48-0993a675d43f"
          },
          "3": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ 1.2, 1.8 ],
              mass: [ .9, .9 ]
            },
            uuid: "8303d5f6-da56-41d0-8af3-4620efcc561e"
          },
          "4": {
            components: {
              Molybdenum: 1,
              Tungsten: 1,
              Zinc: 1
            },
            features: {
              integrity: [ 1.8, 2.4 ],
              mass: [ 1.2, 1.2 ]
            },
            uuid: "6c37ca40-0ae6-48e0-a145-c3eea2bf7cce"
          },
          "5": {
            components: {
              "High Density Composites": 1,
              Molybdenum: 1,
              Technetium: 1
            },
            features: {
              integrity: [ 2.4, 3 ],
              mass: [ 1.5, 1.5 ]
            },
            uuid: "dd40a1d9-9c29-424f-8362-0b76f2ef63a5"
          }
        },
        id: 50,
        modulename: [ "Life support" ],
        name: "Reinforced"
      },
      LifeSupport_Shielded: {
        fdname: "LifeSupport_Shielded",
        grades: {
          "1": {
            components: {
              "Worn Shield Emitters": 1
            },
            features: {
              integrity: [ 0, .6 ],
              power: [ .2, .2 ]
            },
            uuid: "fcd12382-bbb3-431b-95c5-ae9539a02a54"
          },
          "2": {
            components: {
              Carbon: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .6, 1.2 ],
              power: [ .4, .4 ]
            },
            uuid: "9a62eb66-8231-4fa9-9047-284798892e93"
          },
          "3": {
            components: {
              Carbon: 1,
              "High Density Composites": 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ 1.2, 1.8 ],
              power: [ .6, .6 ]
            },
            uuid: "c46b6c89-0a24-4586-865d-76ff5ae35209"
          },
          "4": {
            components: {
              "Proprietary Composites": 1,
              "Shielding Sensors": 1,
              Vanadium: 1
            },
            features: {
              integrity: [ 1.8, 2.4 ],
              power: [ .8, .8 ]
            },
            uuid: "89f25da8-029a-4f3e-828d-393b36f0d7b3"
          }
        },
        id: 51,
        modulename: [ "Life support" ],
        name: "Shielded"
      },
      PointDefence_LightWeight: {
        fdname: "PointDefence_LightWeight",
        grades: {
          "1": {
            components: {
              Phosphorus: 1
            },
            features: {
              integrity: [ -.1, -.1 ],
              mass: [ 0, -.45 ]
            },
            uuid: "b212ba23-880a-46f7-94ef-f276acb068da"
          },
          "2": {
            components: {
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.2, -.2 ],
              mass: [ -.45, -.55 ]
            },
            uuid: "17733fc5-6153-406c-b7f6-fbc6904b7223"
          },
          "3": {
            components: {
              "Conductive Ceramics": 1,
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.3, -.3 ],
              mass: [ -.55, -.65 ]
            },
            uuid: "428b7f9f-9ab2-4f1f-9e8e-9a54ede9af65"
          },
          "4": {
            components: {
              "Conductive Components": 1,
              "Phase Alloys": 1,
              "Proto Light Alloys": 1
            },
            features: {
              integrity: [ -.4, -.4 ],
              mass: [ -.65, -.75 ]
            },
            uuid: "6285a7cd-bb8f-427d-b2aa-3c20953c9c9c"
          },
          "5": {
            components: {
              "Conductive Ceramics": 1,
              "Proto Light Alloys": 1,
              "Proto Radiolic Alloys": 1
            },
            features: {
              integrity: [ -.5, -.5 ],
              mass: [ -.75, -.85 ]
            },
            uuid: "1e819178-49c2-4aad-bf17-723061cb3f95"
          }
        },
        id: 52,
        modulename: [ "Point defence" ],
        name: "Lightweight"
      },
      PointDefence_PointDefenseCapacity: {
        fdname: "PointDefence_PointDefenseCapacity",
        grades: {
          "3": {
            components: {
              "Mechanical Scrap": 1,
              Niobium: 1,
              Vanadium: 1
            },
            features: {
              ammo: [ 0, .5 ],
              mass: [ 1, 1 ],
              reload: [ .1, .1 ]
            },
            uuid: "84b2fe9b-5c82-4b3c-8181-7c15aeb9ecf9"
          }
        },
        id: 55,
        modulename: [ "Point defence" ],
        name: "Ammo capacity"
      },
      PointDefence_Reinforced: {
        fdname: "PointDefence_Reinforced",
        grades: {
          "1": {
            components: {
              Nickel: 1
            },
            features: {
              integrity: [ 0, .6 ],
              mass: [ .3, .3 ]
            },
            uuid: "be6995c8-ffe3-41db-82c7-8a1d876254bd"
          },
          "2": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .6, 1.2 ],
              mass: [ .6, .6 ]
            },
            uuid: "b485f4a5-194e-44cd-8a68-d78d87b78749"
          },
          "3": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ 1.2, 1.8 ],
              mass: [ .9, .9 ]
            },
            uuid: "007beb33-2cb2-48fc-b3d3-b5b82fc7c795"
          },
          "4": {
            components: {
              Molybdenum: 1,
              Tungsten: 1,
              Zinc: 1
            },
            features: {
              integrity: [ 1.8, 2.4 ],
              mass: [ 1.2, 1.2 ]
            },
            uuid: "3fbaecf6-2bdf-4c53-b455-d37d0d78571c"
          },
          "5": {
            components: {
              "High Density Composites": 1,
              Molybdenum: 1,
              Technetium: 1
            },
            features: {
              integrity: [ 2.4, 3 ],
              mass: [ 1.5, 1.5 ]
            },
            uuid: "e6c7a828-4c26-44e6-80ed-e39978850532"
          }
        },
        id: 53,
        modulename: [ "Point defence" ],
        name: "Reinforced"
      },
      PointDefence_Shielded: {
        fdname: "PointDefence_Shielded",
        grades: {
          "1": {
            components: {
              "Worn Shield Emitters": 1
            },
            features: {
              integrity: [ 0, .6 ],
              power: [ .2, .2 ]
            },
            uuid: "84de52cc-9d50-48b9-94bc-262735f61a27"
          },
          "2": {
            components: {
              Carbon: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .6, 1.2 ],
              power: [ .4, .4 ]
            },
            uuid: "94b0ceb5-3f07-4206-aa02-1e69f1059476"
          },
          "3": {
            components: {
              Carbon: 1,
              "High Density Composites": 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ 1.2, 1.8 ],
              power: [ .6, .6 ]
            },
            uuid: "ad2d6c5e-f69d-44cd-94e5-0437a1b77e39"
          },
          "4": {
            components: {
              "Proprietary Composites": 1,
              "Shielding Sensors": 1,
              Vanadium: 1
            },
            features: {
              integrity: [ 1.8, 2.4 ],
              power: [ .8, .8 ]
            },
            uuid: "718b1c81-ffc9-4097-8969-3805dfab4ce2"
          },
          "5": {
            components: {
              "Compound Shielding": 1,
              "Core Dynamics Composites": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ 2.4, 3 ],
              power: [ 1, 1 ]
            },
            uuid: "4a89d7e7-fb6d-4d65-aca6-641b634d2cbb"
          }
        },
        id: 54,
        modulename: [ "Point defence" ],
        name: "Shielded"
      },
      PowerDistributor_HighCapacity: {
        fdname: "PowerDistributor_HighCapacity",
        grades: {
          "1": {
            components: {
              Sulphur: 1
            },
            features: {
              engcap: [ 0, .1 ],
              engrate: [ -.02, -.02 ],
              integrity: [ 0, .1 ],
              syscap: [ 0, .1 ],
              sysrate: [ -.02, -.02 ],
              wepcap: [ 0, .1 ],
              weprate: [ -.02, -.02 ]
            },
            uuid: "e1ae5651-f688-46e2-a94a-9c3bc6e8665b"
          },
          "2": {
            components: {
              Chromium: 1,
              "Specialised Legacy Firmware": 1
            },
            features: {
              engcap: [ .1, .18 ],
              engrate: [ -.06, -.06 ],
              integrity: [ .1, .18 ],
              syscap: [ .08, .1 ],
              sysrate: [ -.06, -.06 ],
              wepcap: [ .1, .18 ],
              weprate: [ -.06, -.06 ]
            },
            uuid: "d5ea6b7b-31eb-44f4-b1f3-8126dd6ea7b5"
          },
          "3": {
            components: {
              Chromium: 1,
              "High Density Composites": 1,
              "Specialised Legacy Firmware": 1
            },
            features: {
              engcap: [ .18, .26 ],
              engrate: [ -.1, -.1 ],
              integrity: [ .15, .2 ],
              syscap: [ .18, .26 ],
              sysrate: [ -.1, -.1 ],
              wepcap: [ .18, .26 ],
              weprate: [ -.1, -.1 ]
            },
            uuid: "b959a87e-a231-46e7-a6a7-65fe6c0464bc"
          },
          "4": {
            components: {
              "Modified Consumer Firmware": 1,
              "Proprietary Composites": 1,
              Selenium: 1
            },
            features: {
              engcap: [ .26, .34 ],
              engrate: [ -.14, -.14 ],
              integrity: [ .2, .25 ],
              syscap: [ .26, .34 ],
              sysrate: [ -.14, -.14 ],
              wepcap: [ .26, .34 ],
              weprate: [ -.14, -.14 ]
            },
            uuid: "5f468c03-ed6d-474f-9e82-601b11d728c8"
          },
          "5": {
            components: {
              "Cracked Industrial Firmware": 1,
              "Military Supercapacitors": 1,
              "Proprietary Composites": 1
            },
            features: {
              engcap: [ .34, .42 ],
              engrate: [ -.18, -.18 ],
              integrity: [ .25, .3 ],
              syscap: [ .34, .42 ],
              sysrate: [ -.18, -.18 ],
              wepcap: [ .34, .42 ],
              weprate: [ -.18, -.18 ]
            },
            uuid: "50b4cbc5-9445-43e3-a9a8-b1320fc0b27e"
          }
        },
        id: 56,
        modulename: [ "Power distributor", "Distributor" ],
        name: "High charge capacity"
      },
      PowerDistributor_HighFrequency: {
        fdname: "PowerDistributor_HighFrequency",
        grades: {
          "1": {
            components: {
              "Specialised Legacy Firmware": 1
            },
            features: {
              engcap: [ -.01, -.01 ],
              engrate: [ 0, .09 ],
              syscap: [ -.01, -.01 ],
              sysrate: [ 0, .09 ],
              wepcap: [ -.01, -.01 ],
              weprate: [ 0, .09 ]
            },
            uuid: "e8ce47e1-c5d7-46bf-b31e-48dcfe9ab1a5"
          },
          "2": {
            components: {
              "Chemical Processors": 1,
              "Specialised Legacy Firmware": 1
            },
            features: {
              engcap: [ -.02, -.02 ],
              engrate: [ .09, .18 ],
              syscap: [ -.02, -.02 ],
              sysrate: [ .09, .18 ],
              wepcap: [ -.02, -.02 ],
              weprate: [ .09, .18 ]
            },
            uuid: "528b87b2-157d-471e-9958-831a9962c595"
          },
          "3": {
            components: {
              "Chemical Distillery": 1,
              "Grid Resistors": 1,
              "Modified Consumer Firmware": 1
            },
            features: {
              engcap: [ -.03, -.03 ],
              engrate: [ .18, .27 ],
              syscap: [ -.03, -.03 ],
              sysrate: [ .18, .27 ],
              wepcap: [ -.03, -.03 ],
              weprate: [ .18, .27 ]
            },
            uuid: "713b5e19-b7a5-447f-b450-248e771dcd72"
          },
          "4": {
            components: {
              "Chemical Manipulators": 1,
              "Cracked Industrial Firmware": 1,
              "Hybrid Capacitors": 1
            },
            features: {
              engcap: [ -.04, -.04 ],
              engrate: [ .27, .36 ],
              syscap: [ -.04, -.04 ],
              sysrate: [ .27, .36 ],
              wepcap: [ -.04, -.04 ],
              weprate: [ .27, .36 ]
            },
            uuid: "1bfd4836-c69d-4adf-94dd-e7c41da96416"
          },
          "5": {
            components: {
              "Chemical Manipulators": 1,
              "Cracked Industrial Firmware": 1,
              "Exquisite Focus Crystals": 1
            },
            features: {
              engcap: [ -.05, -.05 ],
              engrate: [ .36, .45 ],
              syscap: [ -.05, -.05 ],
              sysrate: [ .36, .45 ],
              wepcap: [ -.05, -.05 ],
              weprate: [ .36, .45 ]
            },
            uuid: "5adf6ae2-0e1b-4b3e-9513-9b981213cdfd"
          }
        },
        id: 57,
        modulename: [ "Power distributor", "Distributor" ],
        name: "Charge enhanced"
      },
      PowerDistributor_PriorityEngines: {
        fdname: "PowerDistributor_PriorityEngines",
        grades: {
          "1": {
            components: {
              Sulphur: 1
            },
            features: {
              engcap: [ 0, .2 ],
              engrate: [ 0, .16 ],
              syscap: [ -.03, -.03 ],
              sysrate: [ -.03, -.03 ],
              wepcap: [ -.03, -.03 ],
              weprate: [ -.01, -.01 ]
            },
            uuid: "69f1b8a3-c868-452f-bdbd-cfc95e117ab5"
          },
          "2": {
            components: {
              "Conductive Components": 1,
              Sulphur: 1
            },
            features: {
              engcap: [ .2, .3 ],
              engrate: [ .16, .23 ],
              syscap: [ -.06, -.06 ],
              sysrate: [ -.06, -.06 ],
              wepcap: [ -.06, -.06 ],
              weprate: [ -.02, -.02 ]
            },
            uuid: "5e91d652-7346-4a22-82c9-79853fdcdf91"
          },
          "3": {
            components: {
              "Anomalous Bulk Scan Data": 1,
              Chromium: 1,
              "Electrochemical Arrays": 1
            },
            features: {
              engcap: [ .3, .4 ],
              engrate: [ .23, .3 ],
              syscap: [ -.09, -.09 ],
              sysrate: [ -.09, -.09 ],
              wepcap: [ -.09, -.09 ],
              weprate: [ -.03, -.03 ]
            },
            uuid: "4185370a-c4e9-4f58-9b67-a7f46bb2d3c2"
          },
          "4": {
            components: {
              "Unidentified Scan Archives": 1,
              Selenium: 1,
              "Polymer Capacitors": 1
            },
            features: {
              engcap: [ .4, .5 ],
              engrate: [ .3, .37 ],
              syscap: [ -.12, -.12 ],
              sysrate: [ -.12, -.12 ],
              wepcap: [ -.12, -.12 ],
              weprate: [ -.04, -.04 ]
            },
            uuid: "6a6a497e-8261-4763-8a15-c78222a00443"
          },
          "5": {
            components: {
              "Classified Scan Databanks": 1,
              Cadmium: 1,
              "Military Supercapacitors": 1
            },
            features: {
              engcap: [ .5, .6 ],
              engrate: [ .37, .44 ],
              syscap: [ -.15, -.15 ],
              sysrate: [ -.15, -.15 ],
              wepcap: [ -.15, -.15 ],
              weprate: [ -.05, -.05 ]
            },
            uuid: "ac618c54-ecfc-489a-98cb-e3f5789ad69f"
          }
        },
        id: 58,
        modulename: [ "Power distributor", "Distributor" ],
        name: "Engine focused"
      },
      PowerDistributor_PrioritySystems: {
        fdname: "PowerDistributor_PrioritySystems",
        grades: {
          "1": {
            components: {
              Sulphur: 1
            },
            features: {
              engcap: [ -.03, -.03 ],
              engrate: [ -.01, -.01 ],
              syscap: [ 0, .2 ],
              sysrate: [ 0, .16 ],
              wepcap: [ -.03, -.03 ],
              weprate: [ -.03, -.03 ]
            },
            uuid: "8138ba35-155d-4b82-86ef-ad4600ab5e03"
          },
          "2": {
            components: {
              "Conductive Components": 1,
              Sulphur: 1
            },
            features: {
              engcap: [ -.06, -.06 ],
              engrate: [ -.02, -.02 ],
              syscap: [ .2, .3 ],
              sysrate: [ .16, .23 ],
              wepcap: [ -.06, -.06 ],
              weprate: [ -.06, -.06 ]
            },
            uuid: "91c79b1b-b494-4dd9-98c4-10d58aa5509f"
          },
          "3": {
            components: {
              "Anomalous Bulk Scan Data": 1,
              Chromium: 1,
              "Electrochemical Arrays": 1
            },
            features: {
              engcap: [ -.09, -.09 ],
              engrate: [ -.03, -.03 ],
              syscap: [ .3, .4 ],
              sysrate: [ .23, .3 ],
              wepcap: [ -.09, -.09 ],
              weprate: [ -.09, -.09 ]
            },
            uuid: "13ab16c7-2456-4387-b536-b28fd2f57d2e"
          },
          "4": {
            components: {
              "Unidentified Scan Archives": 1,
              Selenium: 1,
              "Polymer Capacitors": 1
            },
            features: {
              engcap: [ -.12, -.12 ],
              engrate: [ -.04, -.04 ],
              syscap: [ .4, .5 ],
              sysrate: [ .3, .37 ],
              wepcap: [ -.12, -.12 ],
              weprate: [ -.12, -.12 ]
            },
            uuid: "544e6d6b-be89-478d-9b1b-62fae7599d30"
          },
          "5": {
            components: {
              "Classified Scan Databanks": 1,
              Cadmium: 1,
              "Military Supercapacitors": 1
            },
            features: {
              engcap: [ -.15, -.15 ],
              engrate: [ -.05, -.05 ],
              syscap: [ .5, .6 ],
              sysrate: [ .37, .44 ],
              wepcap: [ -.15, -.15 ],
              weprate: [ -.15, -.15 ]
            },
            uuid: "892dcc86-a720-4fda-96cd-cb0245305764"
          }
        },
        id: 59,
        modulename: [ "Power distributor", "Distributor" ],
        name: "System focused"
      },
      PowerDistributor_PriorityWeapons: {
        fdname: "PowerDistributor_PriorityWeapons",
        grades: {
          "1": {
            components: {
              Sulphur: 1
            },
            features: {
              engcap: [ -.03, -.03 ],
              engrate: [ -.03, -.03 ],
              syscap: [ -.03, -.03 ],
              sysrate: [ -.01, -.01 ],
              wepcap: [ 0, .2 ],
              weprate: [ 0, .16 ]
            },
            uuid: "dd023cf4-0b4d-4d18-957f-4b1eecb71c0a"
          },
          "2": {
            components: {
              "Conductive Components": 1,
              Sulphur: 1
            },
            features: {
              engcap: [ -.06, -.06 ],
              engrate: [ -.06, -.06 ],
              syscap: [ -.06, -.06 ],
              sysrate: [ -.02, -.02 ],
              wepcap: [ .2, .3 ],
              weprate: [ .16, .23 ]
            },
            uuid: "cac790f3-9852-4673-a219-0f5e4dc6a0ad"
          },
          "3": {
            components: {
              "Anomalous Bulk Scan Data": 1,
              Chromium: 1,
              "Electrochemical Arrays": 1
            },
            features: {
              engcap: [ -.09, -.09 ],
              engrate: [ -.09, -.09 ],
              syscap: [ -.09, -.09 ],
              sysrate: [ -.03, -.03 ],
              wepcap: [ .3, .4 ],
              weprate: [ .23, .3 ]
            },
            uuid: "cc5507e8-613b-4d43-a7fe-a874be963125"
          },
          "4": {
            components: {
              "Unidentified Scan Archives": 1,
              Selenium: 1,
              "Polymer Capacitors": 1
            },
            features: {
              engcap: [ -.12, -.12 ],
              engrate: [ -.12, -.12 ],
              syscap: [ -.12, -.12 ],
              sysrate: [ -.04, -.04 ],
              wepcap: [ .4, .5 ],
              weprate: [ .3, .37 ]
            },
            uuid: "34c9c5e5-8a42-4509-a22a-7313528263f2"
          },
          "5": {
            components: {
              "Classified Scan Databanks": 1,
              Cadmium: 1,
              "Military Supercapacitors": 1
            },
            features: {
              engcap: [ -.15, -.15 ],
              engrate: [ -.15, -.15 ],
              syscap: [ -.15, -.15 ],
              sysrate: [ -.05, -.05 ],
              wepcap: [ .5, .6 ],
              weprate: [ .37, .44 ]
            },
            uuid: "23d55bbf-af1c-46ac-b77b-214e70628fe2"
          }
        },
        id: 60,
        modulename: [ "Power distributor", "Distributor" ],
        name: "Weapon focused"
      },
      PowerDistributor_Shielded: {
        fdname: "PowerDistributor_Shielded",
        grades: {
          "1": {
            components: {
              "Worn Shield Emitters": 1
            },
            features: {
              integrity: [ 0, .4 ],
              mass: [ .03, .03 ],
              power: [ 0, -.1 ]
            },
            uuid: "05883145-2407-46a1-9eea-5a56ac549cfd"
          },
          "2": {
            components: {
              Carbon: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .4, .8 ],
              mass: [ .06, .06 ],
              power: [ -.1, -.15 ]
            },
            uuid: "5822ff0c-fa6c-4072-95be-e2534f37be00"
          },
          "3": {
            components: {
              Carbon: 1,
              "High Density Composites": 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .8, 1.2 ],
              mass: [ .09, .09 ],
              power: [ -.15, -.2 ]
            },
            uuid: "d5040eac-fa75-4613-828d-ea71aefd9051"
          },
          "4": {
            components: {
              "Proprietary Composites": 1,
              "Shielding Sensors": 1,
              Vanadium: 1
            },
            features: {
              integrity: [ 1.2, 1.6 ],
              mass: [ .12, .12 ],
              power: [ -.2, -.25 ]
            },
            uuid: "32c94fd6-71c3-461b-80ed-bfe1543f9651"
          },
          "5": {
            components: {
              "Compound Shielding": 1,
              "Core Dynamics Composites": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ 1.6, 2 ],
              mass: [ .15, .15 ],
              power: [ -.25, -.3 ]
            },
            uuid: "1b073867-c10f-474b-88d7-5fb6c602b838"
          }
        },
        id: 61,
        modulename: [ "Power distributor", "Distributor" ],
        name: "Shielded"
      },
      PowerPlant_Armoured: {
        fdname: "PowerPlant_Armoured",
        grades: {
          "1": {
            components: {
              "Worn Shield Emitters": 1
            },
            features: {
              eff: [ 0, -.04 ],
              integrity: [ 0, .4 ],
              pgen: [ 0, .04 ],
              mass: [ .04, .04 ]
            },
            uuid: "14be2e0d-417b-4cde-834f-b7e8ca14bb85"
          },
          "2": {
            components: {
              Carbon: 1,
              "Shield Emitters": 1
            },
            features: {
              eff: [ -.04, -.06 ],
              integrity: [ .3, .6 ],
              pgen: [ 0, .06 ],
              mass: [ .08, .08 ]
            },
            uuid: "14ade730-2a1d-4f48-a619-46be865819ec"
          },
          "3": {
            components: {
              Carbon: 1,
              "High Density Composites": 1,
              "Shield Emitters": 1
            },
            features: {
              eff: [ -.06, -.08 ],
              integrity: [ .6, .8 ],
              pgen: [ .06, .08 ],
              mass: [ .12, .12 ]
            },
            uuid: "aa9a05c9-f142-40db-b0bf-8f6ca29efba8"
          },
          "4": {
            components: {
              "Proprietary Composites": 1,
              "Shielding Sensors": 1,
              Vanadium: 1
            },
            features: {
              eff: [ -.08, -.1 ],
              integrity: [ .5, 1 ],
              pgen: [ .08, .1 ],
              mass: [ .16, .16 ]
            },
            uuid: "bfb0ccc8-389e-4df0-9acd-4df91680c5a3"
          },
          "5": {
            components: {
              "Compound Shielding": 1,
              "Core Dynamics Composites": 1,
              Tungsten: 1
            },
            features: {
              eff: [ -.1, -.12 ],
              integrity: [ 1, 1.2 ],
              pgen: [ .1, .12 ],
              mass: [ .2, .2 ]
            },
            uuid: "5156badb-c1eb-49f4-923d-b9e6f862799f"
          }
        },
        id: 62,
        modulename: [ "Power plant" ],
        name: "Armoured"
      },
      PowerPlant_Boosted: {
        fdname: "PowerPlant_Boosted",
        grades: {
          "1": {
            components: {
              Sulphur: 1
            },
            features: {
              eff: [ .05, .05 ],
              integrity: [ -.05, -.05 ],
              pgen: [ 0, .12 ]
            },
            uuid: "06282764-2821-4604-ad2c-d9b148d562d0"
          },
          "2": {
            components: {
              "Conductive Components": 1,
              "Heat Conduction Wiring": 1
            },
            features: {
              eff: [ .1, .1 ],
              integrity: [ -.1, -.1 ],
              pgen: [ .12, .19 ]
            },
            uuid: "feb49620-2df8-4ec6-9a58-13f986aed81f"
          },
          "3": {
            components: {
              "Conductive Components": 1,
              "Heat Conduction Wiring": 1,
              Selenium: 1
            },
            features: {
              eff: [ .15, .15 ],
              integrity: [ -.15, -.15 ],
              pgen: [ .19, .26 ]
            },
            uuid: "9325c166-998d-4ea6-8dab-0aafcec76705"
          },
          "4": {
            components: {
              Cadmium: 1,
              "Conductive Ceramics": 1,
              "Heat Dispersion Plate": 1
            },
            features: {
              eff: [ .2, .2 ],
              integrity: [ -.2, -.2 ],
              pgen: [ .26, .33 ]
            },
            uuid: "6dd84c8d-1d21-4bf5-a747-f582ffe49a99"
          },
          "5": {
            components: {
              "Chemical Manipulators": 1,
              "Conductive Ceramics": 1,
              Tellurium: 1
            },
            features: {
              eff: [ .25, .25 ],
              integrity: [ -.25, -.25 ],
              pgen: [ .33, .4 ]
            },
            uuid: "f8cee63e-9cdf-43e5-9584-a945d4c57aee"
          }
        },
        id: 63,
        modulename: [ "Power plant" ],
        name: "Overcharged"
      },
      PowerPlant_Stealth: {
        fdname: "PowerPlant_Stealth",
        grades: {
          "1": {
            components: {
              Iron: 1
            },
            features: {
              eff: [ 0, -.25 ],
              mass: [ .04, .04 ],
              pgen: [ -.03, -.03 ]
            },
            uuid: "92571059-8e76-4473-b3ee-1b50803c75ef"
          },
          "2": {
            components: {
              Iron: 1,
              "Irregular Emission Data": 1
            },
            features: {
              eff: [ -.25, -.35 ],
              mass: [ .08, .08 ],
              pgen: [ -.06, -.06 ]
            },
            uuid: "5a20a4d0-2d5d-4380-b14d-6099928cd0a7"
          },
          "3": {
            components: {
              "Heat Exchangers": 1,
              Iron: 1,
              "Irregular Emission Data": 1
            },
            features: {
              eff: [ -.35, -.45 ],
              mass: [ .12, .12 ],
              pgen: [ -.09, -.09 ]
            },
            uuid: "a0283399-56cd-4013-8293-872ad44a1ffd"
          },
          "4": {
            components: {
              "Heat Vanes": 1,
              Germanium: 1,
              "Unexpected Emission Data": 1
            },
            features: {
              eff: [ -.45, -.55 ],
              mass: [ .16, .16 ],
              pgen: [ -.12, -.12 ]
            },
            uuid: "e87a55a5-ddf0-42fe-b919-9a3ef13a7bba"
          },
          "5": {
            components: {
              "Proto Heat Radiators": 1,
              Niobium: 1,
              "Decoded Emission Data": 1
            },
            features: {
              eff: [ -.55, -.65 ],
              mass: [ .2, .2 ],
              pgen: [ -.15, -.15 ]
            },
            uuid: "83a93700-084e-4c4b-aed5-30dc99d1da0c"
          }
        },
        id: 64,
        modulename: [ "Power plant" ],
        name: "Low emissions"
      },
      ProspectingLimpet_LightWeight: {
        fdname: "ProspectingLimpet_LightWeight",
        grades: {
          "1": {
            components: {
              Phosphorus: 1
            },
            features: {
              integrity: [ -.1, -.1 ],
              mass: [ 0, -.45 ]
            },
            uuid: "bb27a6b6-5c10-41e8-a6b3-3abc8a4ed23e"
          },
          "2": {
            components: {
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.2, -.2 ],
              mass: [ -.45, -.55 ]
            },
            uuid: "95af3c55-ec45-4f5d-848d-1639307fee41"
          },
          "3": {
            components: {
              "Conductive Ceramics": 1,
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.3, -.3 ],
              mass: [ -.55, -.65 ]
            },
            uuid: "a3b84b26-d67e-4d8c-9653-f23181cce9f8"
          },
          "4": {
            components: {
              "Conductive Components": 1,
              "Phase Alloys": 1,
              "Proto Light Alloys": 1
            },
            features: {
              integrity: [ -.4, -.4 ],
              mass: [ -.65, -.75 ]
            },
            uuid: "363a9543-4072-4211-8c89-8e9477fa72eb"
          },
          "5": {
            components: {
              "Conductive Ceramics": 1,
              "Proto Light Alloys": 1,
              "Proto Radiolic Alloys": 1
            },
            features: {
              integrity: [ -.5, -.5 ],
              mass: [ -.75, -.85 ]
            },
            uuid: "4de10a2c-e440-4b2e-95fb-e1121bff19a4"
          }
        },
        id: 65,
        modulename: [ "Prospector limpet controller" ],
        name: "Lightweight"
      },
      ProspectingLimpet_Reinforced: {
        fdname: "ProspectingLimpet_Reinforced",
        grades: {
          "1": {
            components: {
              Nickel: 1
            },
            features: {
              integrity: [ 0, .6 ],
              mass: [ .3, .3 ]
            },
            uuid: "650fdb39-a2fa-4757-bac0-fcad6c7104f9"
          },
          "2": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .6, 1.2 ],
              mass: [ .6, .6 ]
            },
            uuid: "ee33e0d9-d8b2-4ac5-9370-7dac2f252570"
          },
          "3": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ 1.2, 1.8 ],
              mass: [ .9, .9 ]
            },
            uuid: "5c8c244e-2f93-4422-8fcb-ad4012020a8a"
          },
          "4": {
            components: {
              Molybdenum: 1,
              Tungsten: 1,
              Zinc: 1
            },
            features: {
              integrity: [ 1.8, 2.4 ],
              mass: [ 1.2, 1.2 ]
            },
            uuid: "31532d5f-6e3c-45a6-95b2-13fb0218aa7a"
          },
          "5": {
            components: {
              "High Density Composites": 1,
              Molybdenum: 1,
              Technetium: 1
            },
            features: {
              integrity: [ 2.4, 3 ],
              mass: [ 1.5, 1.5 ]
            },
            uuid: "d98c0250-252f-4d48-9c98-e43b8c50b978"
          }
        },
        id: 66,
        modulename: [ "Prospector limpet controller" ],
        name: "Reinforced"
      },
      ProspectingLimpet_Shielded: {
        fdname: "ProspectingLimpet_Shielded",
        grades: {
          "1": {
            components: {
              "Worn Shield Emitters": 1
            },
            features: {
              integrity: [ 0, .6 ],
              power: [ .2, .2 ]
            },
            uuid: "573d6e16-dc01-4093-a14d-420621279673"
          },
          "2": {
            components: {
              Carbon: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .6, 1.2 ],
              power: [ .4, .4 ]
            },
            uuid: "197d4759-f451-4b30-8051-08c5fde05421"
          },
          "3": {
            components: {
              Carbon: 1,
              "High Density Composites": 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ 1.2, 1.8 ],
              power: [ .6, .6 ]
            },
            uuid: "633cafa0-a2c3-436c-867f-aba0205e55b8"
          },
          "4": {
            components: {
              "Proprietary Composites": 1,
              "Shielding Sensors": 1,
              Vanadium: 1
            },
            features: {
              integrity: [ 1.8, 2.4 ],
              power: [ .8, .8 ]
            },
            uuid: "6a396efb-3aa1-4022-b66d-dd299ff7e4d8"
          },
          "5": {
            components: {
              "Compound Shielding": 1,
              "Core Dynamics Composites": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ 2.4, 3 ],
              power: [ 1, 1 ]
            },
            uuid: "85a8d27b-8f97-46fb-91b3-3f56553e1eef"
          }
        },
        id: 67,
        modulename: [ "Prospector limpet controller" ],
        name: "Shielded"
      },
      Refineries_Shielded: {
        fdname: "Refineries_Shielded",
        grades: {
          "1": {
            components: {
              "Worn Shield Emitters": 1
            },
            features: {
              integrity: [ 0, .6 ],
              power: [ .2, .2 ]
            },
            uuid: "58578acb-b652-4a30-8ffe-e4e488325221"
          },
          "2": {
            components: {
              Carbon: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .6, 1.2 ],
              power: [ .4, .4 ]
            },
            uuid: "e33c7809-d6cd-4549-8596-9400baabc3cd"
          },
          "3": {
            components: {
              Carbon: 1,
              "High Density Composites": 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ 1.2, 1.8 ],
              power: [ .6, .6 ]
            },
            uuid: "cffa4897-fa7a-44dd-8fe1-1b3702e82f9e"
          },
          "4": {
            components: {
              "Proprietary Composites": 1,
              "Shielding Sensors": 1,
              Vanadium: 1
            },
            features: {
              integrity: [ 1.8, 2.4 ],
              power: [ .8, .8 ]
            },
            uuid: "48d62ffb-b0ff-47bf-9e4a-a8a4cfbd22bc"
          }
        },
        id: 92,
        modulename: [ "Refinery" ],
        name: "Shielded"
      },
      Sensor_CargoScanner_FastScan: {
        fdname: "Sensor_CargoScanner_FastScan",
        grades: {
          "1": {
            components: {
              Phosphorus: 1
            },
            features: {
              integrity: [ -.1, -.1 ],
              range: [ -.05, -.05 ],
              scantime: [ 0, -.2 ]
            },
            uuid: "8e2046eb-06bf-44e4-8fad-981f24d68340"
          },
          "2": {
            components: {
              "Flawed Focus Crystals": 1,
              Phosphorus: 1
            },
            features: {
              integrity: [ -.2, -.2 ],
              range: [ -.1, -.1 ],
              scantime: [ -.2, -.35 ]
            },
            uuid: "953bcfbf-a46d-45e2-90c7-f727e641edc3"
          },
          "3": {
            components: {
              "Flawed Focus Crystals": 1,
              "Open Symmetric Keys": 1,
              Phosphorus: 1
            },
            features: {
              integrity: [ -.3, -.3 ],
              range: [ -.15, -.15 ],
              scantime: [ -.35, -.5 ]
            },
            uuid: "bed8bdc6-ef45-450e-aa7f-802cea642b2d"
          },
          "4": {
            components: {
              "Atypical Encryption Archives": 1,
              "Focus Crystals": 1,
              Manganese: 1
            },
            features: {
              integrity: [ -.4, -.4 ],
              range: [ -.2, -.2 ],
              scantime: [ -.5, -.65 ]
            },
            uuid: "610ba60e-d0e3-42c2-9269-c67bafb25546"
          },
          "5": {
            components: {
              "Adaptive Encryptors Capture": 1,
              Arsenic: 1,
              "Refined Focus Crystals": 1
            },
            features: {
              integrity: [ -.5, -.5 ],
              range: [ -.25, -.25 ],
              scantime: [ -.8, -.8 ]
            },
            uuid: "64b8d29d-de5c-4b50-bd77-ae7cb3c78ed6"
          }
        },
        id: 102,
        modulename: [ "Cargo scanner", "Manifest scanner" ],
        name: "Fast scan"
      },
      Sensor_CargoScanner_LongRange: {
        fdname: "Sensor_CargoScanner_LongRange",
        grades: {
          "1": {
            components: {
              Iron: 1
            },
            features: {
              power: [ .1, .1 ],
              angle: [ -.1, -.1 ],
              range: [ 0, .24 ]
            },
            uuid: "1b566f8d-56ef-4b11-bb06-1fd9c603ab1c"
          },
          "2": {
            components: {
              "Hybrid Capacitors": 1,
              Iron: 1
            },
            features: {
              power: [ .2, .2 ],
              angle: [ -.15, -.15 ],
              range: [ .24, .48 ]
            },
            uuid: "9371ee9f-12a1-4859-9b97-e3c3c87ee0a0"
          },
          "3": {
            components: {
              "Hybrid Capacitors": 1,
              Iron: 1,
              "Unexpected Emission Data": 1
            },
            features: {
              power: [ .3, .3 ],
              angle: [ -.2, -.2 ],
              range: [ .48, .72 ]
            },
            uuid: "317bbfd2-7b05-4f7a-b6ca-55e0a7d3f147"
          },
          "4": {
            components: {
              "Decoded Emission Data": 1,
              "Electrochemical Arrays": 1,
              Germanium: 1
            },
            features: {
              power: [ .4, .4 ],
              angle: [ -.25, -.25 ],
              range: [ .72, .96 ]
            },
            uuid: "5e3ac270-69ef-4301-9e86-8c9cbc5ada89"
          },
          "5": {
            components: {
              "Abnormal Compact Emissions Data": 1,
              Niobium: 1,
              "Polymer Capacitors": 1
            },
            features: {
              power: [ .5, .5 ],
              angle: [ -.3, -.3 ],
              range: [ .96, 1.2 ]
            },
            uuid: "993b050e-b308-4010-8ba6-58e08483793d"
          }
        },
        id: 104,
        modulename: [ "Cargo scanner", "Manifest scanner" ],
        name: "Long range"
      },
      Sensor_CargoScanner_WideAngle: {
        fdname: "Sensor_CargoScanner_WideAngle",
        grades: {
          "1": {
            components: {
              "Mechanical Scrap": 1
            },
            features: {
              mass: [ .2, .2 ],
              angle: [ 0, .4 ],
              scantime: [ .1, .1 ]
            },
            uuid: "c034e952-985f-4b04-9d9e-bec4ddc50171"
          },
          "2": {
            components: {
              Germanium: 1,
              "Mechanical Scrap": 1
            },
            features: {
              mass: [ .4, .4 ],
              angle: [ .4, .8 ],
              scantime: [ .2, .2 ]
            },
            uuid: "c2dee450-a617-4740-9af9-57cf2ea7de4f"
          },
          "3": {
            components: {
              "Classified Scan Databanks": 1,
              Germanium: 1,
              "Mechanical Scrap": 1
            },
            features: {
              mass: [ .6, .6 ],
              angle: [ .8, 1.2 ],
              scantime: [ .3, .3 ]
            },
            uuid: "181cd2e3-ef3c-4939-b5b9-f6b21090d920"
          },
          "4": {
            components: {
              "Divergent Scan Data": 1,
              "Mechanical Equipment": 1,
              Niobium: 1
            },
            features: {
              mass: [ .8, .8 ],
              angle: [ 1.2, 1.6 ],
              scantime: [ .4, .4 ]
            },
            uuid: "a93247e8-cbce-4026-9640-6137934614c9"
          },
          "5": {
            components: {
              "Classified Scan Fragment": 1,
              "Mechanical Components": 1,
              Tin: 1
            },
            features: {
              mass: [ 1, 1 ],
              angle: [ 1.6, 2 ],
              scantime: [ .5, .5 ]
            },
            uuid: "9f6b1226-d7b9-4bcd-b60d-9e8227be79f2"
          }
        },
        id: 105,
        modulename: [ "Cargo scanner", "Manifest scanner" ],
        name: "Wide angle"
      },
      Sensor_KillWarrantScanner_FastScan: {
        fdname: "Sensor_KillWarrantScanner_FastScan",
        grades: {
          "1": {
            components: {
              Phosphorus: 1
            },
            features: {
              integrity: [ -.1, -.1 ],
              range: [ -.05, -.05 ],
              scantime: [ 0, -.2 ]
            },
            uuid: "37c2d07b-fa12-4ad2-a1cb-a1c9c5cdb348"
          },
          "2": {
            components: {
              "Flawed Focus Crystals": 1,
              Phosphorus: 1
            },
            features: {
              integrity: [ -.2, -.2 ],
              range: [ -.1, -.1 ],
              scantime: [ -.2, -.35 ]
            },
            uuid: "a375ac53-e245-4364-8d8a-389e247bc74d"
          },
          "3": {
            components: {
              "Flawed Focus Crystals": 1,
              "Open Symmetric Keys": 1,
              Phosphorus: 1
            },
            features: {
              integrity: [ -.3, -.3 ],
              range: [ -.15, -.15 ],
              scantime: [ -.35, -.5 ]
            },
            uuid: "472ebde0-72d0-4ec1-beda-11cbcbad13f9"
          },
          "4": {
            components: {
              "Atypical Encryption Archives": 1,
              "Focus Crystals": 1,
              Manganese: 1
            },
            features: {
              integrity: [ -.4, -.4 ],
              range: [ -.2, -.2 ],
              scantime: [ -.5, -.65 ]
            },
            uuid: "6d8d3ba8-46b3-4482-a65d-b1c6663c543b"
          },
          "5": {
            components: {
              "Adaptive Encryptors Capture": 1,
              Arsenic: 1,
              "Refined Focus Crystals": 1
            },
            features: {
              integrity: [ -.5, -.5 ],
              range: [ -.25, -.25 ],
              scantime: [ -.8, -.8 ]
            },
            uuid: "fb2433bb-5493-43d8-a1ec-e57e43951751"
          }
        },
        id: 101,
        modulename: [ "Kill warrant scanner", "KWS" ],
        name: "Fast scan"
      },
      Sensor_KillWarrantScanner_WideAngle: {
        fdname: "Sensor_KillWarrantScanner_WideAngle",
        grades: {
          "1": {
            components: {
              "Mechanical Scrap": 1
            },
            features: {
              mass: [ .2, .2 ],
              angle: [ 0, .4 ],
              scantime: [ .1, .1 ]
            },
            uuid: "69ee982f-f925-4e0a-a7a8-cc52ff9bc295"
          },
          "2": {
            components: {
              Germanium: 1,
              "Mechanical Scrap": 1
            },
            features: {
              mass: [ .4, .4 ],
              angle: [ .4, .8 ],
              scantime: [ .2, .2 ]
            },
            uuid: "3f0b3cbd-3acf-4a49-a176-6ceb02b958f9"
          },
          "3": {
            components: {
              "Classified Scan Databanks": 1,
              Germanium: 1,
              "Mechanical Scrap": 1
            },
            features: {
              mass: [ .6, .6 ],
              angle: [ .8, 1.2 ],
              scantime: [ .3, .3 ]
            },
            uuid: "5c378d56-97f7-4a75-b113-7e6bc846d53f"
          },
          "4": {
            components: {
              "Divergent Scan Data": 1,
              "Mechanical Equipment": 1,
              Niobium: 1
            },
            features: {
              mass: [ .8, .8 ],
              angle: [ 1.2, 1.6 ],
              scantime: [ .4, .4 ]
            },
            uuid: "887d9bb6-422f-42ce-8a21-22d1f43a7f64"
          },
          "5": {
            components: {
              "Classified Scan Fragment": 1,
              "Mechanical Components": 1,
              Tin: 1
            },
            features: {
              mass: [ 1, 1 ],
              angle: [ 1.6, 2 ],
              scantime: [ .5, .5 ]
            },
            uuid: "0f0f8c7e-e9d4-4264-88a6-668372ad9d47"
          }
        },
        id: 107,
        modulename: [ "Kill warrant scanner", "KWS" ],
        name: "Wide angle"
      },
      Sensor_Sensor_LightWeight: {
        fdname: "Sensor_Sensor_LightWeight",
        grades: {
          "1": {
            components: {
              Phosphorus: 1
            },
            features: {
              integrity: [ -.1, -.1 ],
              mass: [ 0, -.2 ],
              angle: [ -.05, -.05 ]
            },
            uuid: "239cd942-3298-4be0-b032-143961c801a1"
          },
          "2": {
            components: {
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.2, -.2 ],
              mass: [ -.2, -.35 ],
              angle: [ -.1, -.1 ]
            },
            uuid: "8dd41f78-c4f0-4107-a1fe-d1eee78bbd23"
          },
          "3": {
            components: {
              "Conductive Ceramics": 1,
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.3, -.3 ],
              mass: [ -.35, -.5 ],
              angle: [ -.15, -.15 ]
            },
            uuid: "d51697d0-c837-4c0d-a6af-f192ace27e9a"
          },
          "4": {
            components: {
              "Conductive Components": 1,
              "Phase Alloys": 1,
              "Proto Light Alloys": 1
            },
            features: {
              integrity: [ -.4, -.4 ],
              mass: [ -.5, -.65 ],
              angle: [ -.2, -.2 ]
            },
            uuid: "01ccf913-c1cb-47a6-9515-1d2ee3e3b2ae"
          },
          "5": {
            components: {
              "Conductive Ceramics": 1,
              "Proto Light Alloys": 1,
              "Proto Radiolic Alloys": 1
            },
            features: {
              integrity: [ -.5, -.5 ],
              mass: [ -.65, -.8 ],
              angle: [ -.25, -.25 ]
            },
            uuid: "93c0ae86-d3ac-40c5-9ef3-b65c14d53cf6"
          }
        },
        id: 96,
        modulename: [ "Sensors" ],
        name: "Lightweight"
      },
      Sensor_Sensor_LongRange: {
        fdname: "Sensor_Sensor_LongRange",
        grades: {
          "1": {
            components: {
              Iron: 1
            },
            features: {
              mass: [ .2, .2 ],
              angle: [ -.1, -.1 ],
              range: [ 0, .15 ]
            },
            uuid: "92c755ae-690b-442c-bacd-606575987f22"
          },
          "2": {
            components: {
              "Hybrid Capacitors": 1,
              Iron: 1
            },
            features: {
              mass: [ .4, .4 ],
              angle: [ -.15, -.15 ],
              range: [ .15, .3 ]
            },
            uuid: "40167259-2960-4072-a135-cba93c87709d"
          },
          "3": {
            components: {
              "Hybrid Capacitors": 1,
              Iron: 1,
              "Unexpected Emission Data": 1
            },
            features: {
              mass: [ .6, .6 ],
              angle: [ -.2, -.2 ],
              range: [ .3, .45 ]
            },
            uuid: "6d422ca1-ebdd-4c87-b2b2-056e36c0cbfb"
          },
          "4": {
            components: {
              "Decoded Emission Data": 1,
              "Electrochemical Arrays": 1,
              Germanium: 1
            },
            features: {
              mass: [ .8, .8 ],
              angle: [ -.25, -.25 ],
              range: [ .45, .6 ]
            },
            uuid: "6b09d91f-919f-4a3a-9900-850b026ab01c"
          },
          "5": {
            components: {
              "Abnormal Compact Emissions Data": 1,
              Niobium: 1,
              "Polymer Capacitors": 1
            },
            features: {
              mass: [ 1, 1 ],
              angle: [ -.3, -.3 ],
              range: [ .6, .75 ]
            },
            uuid: "c055cafb-3e8a-4415-8e9b-cfa8be809b75"
          }
        },
        id: 97,
        modulename: [ "Sensors" ],
        name: "Long range"
      },
      Sensor_Sensor_WideAngle: {
        fdname: "Sensor_Sensor_WideAngle",
        grades: {
          "1": {
            components: {
              "Mechanical Scrap": 1
            },
            features: {
              power: [ .1, .1 ],
              angle: [ 0, .4 ],
              range: [ -.04, -.04 ]
            },
            uuid: "996dc047-9f07-47a6-8b05-3283ce666fa7"
          },
          "2": {
            components: {
              Germanium: 1,
              "Mechanical Scrap": 1
            },
            features: {
              power: [ .2, .2 ],
              angle: [ .4, .8 ],
              range: [ -.08, -.08 ]
            },
            uuid: "0855a023-3a25-44c1-84fa-c6e4e8ac3384"
          },
          "3": {
            components: {
              "Classified Scan Databanks": 1,
              Germanium: 1,
              "Mechanical Scrap": 1
            },
            features: {
              power: [ .3, .3 ],
              angle: [ .8, 1.2 ],
              range: [ -.12, -.12 ]
            },
            uuid: "06908f4d-30e8-448f-9652-5051a79713f3"
          },
          "4": {
            components: {
              "Divergent Scan Data": 1,
              "Mechanical Equipment": 1,
              Niobium: 1
            },
            features: {
              power: [ .4, .4 ],
              angle: [ 1.2, 1.6 ],
              range: [ -.16, -.16 ]
            },
            uuid: "af874bae-07c3-457a-b525-baeb771b3d72"
          },
          "5": {
            components: {
              "Classified Scan Fragment": 1,
              "Mechanical Components": 1,
              Tin: 1
            },
            features: {
              power: [ .5, .5 ],
              angle: [ 1.6, 2 ],
              range: [ -.2, -.2 ]
            },
            uuid: "1368129e-942e-452e-8228-8a3622dc72a1"
          }
        },
        id: 98,
        modulename: [ "Sensors" ],
        name: "Wide angle"
      },
      Sensor_SurfaceScanner_FastScan: {
        fdname: "Sensor_SurfaceScanner_FastScan",
        grades: {
          "1": {
            components: {
              Phosphorus: 1
            },
            features: {
              mass: [ .2, .2 ],
              scanrate: [ 0, .2 ]
            },
            uuid: "97940d61-5b9a-4b0e-8cfd-33f2175b956a"
          },
          "2": {
            components: {
              "Flawed Focus Crystals": 1,
              Phosphorus: 1
            },
            features: {
              mass: [ .4, .4 ],
              scanrate: [ .2, .35 ]
            },
            uuid: "d5c0c74d-a4ff-45ed-a732-3c68aded4e06"
          },
          "3": {
            components: {
              "Flawed Focus Crystals": 1,
              "Open Symmetric Keys": 1,
              Phosphorus: 1
            },
            features: {
              mass: [ .6, .6 ],
              scanrate: [ .35, .5 ]
            },
            uuid: "ca9fc2bb-948e-43f4-b2f2-7bea95509d63"
          },
          "4": {
            components: {
              "Atypical Encryption Archives": 1,
              "Focus Crystals": 1,
              Manganese: 1
            },
            features: {
              mass: [ .8, .8 ],
              scanrate: [ .5, .65 ]
            },
            uuid: "ef254d05-630e-41b4-9e0f-d6ea0002b1fc"
          },
          "5": {
            components: {
              "Adaptive Encryptors Capture": 1,
              Arsenic: 1,
              "Refined Focus Crystals": 1
            },
            features: {
              mass: [ 1, 1 ],
              scanrate: [ .65, .8 ]
            },
            uuid: "5938bc5c-cd01-4429-a04c-33f53b6b7027"
          }
        },
        id: 95,
        modulename: [ "Detailed surface scanner", "DSS" ],
        name: "Fast scan"
      },
      Sensor_SurfaceScanner_LongRange: {
        fdname: "Sensor_SurfaceScanner_LongRange",
        grades: {
          "1": {
            components: {
              Iron: 1
            },
            features: {
              mass: [ .2, .2 ],
              range: [ 0, .4 ]
            },
            uuid: "c35f597e-dac8-4e38-8648-e2cb0018006c"
          },
          "2": {
            components: {
              "Hybrid Capacitors": 1,
              Iron: 1
            },
            features: {
              mass: [ .4, .4 ],
              range: [ .4, .8 ]
            },
            uuid: "5d607664-6ec6-4fdd-b692-4d3621c76150"
          },
          "3": {
            components: {
              "Hybrid Capacitors": 1,
              Iron: 1,
              "Unexpected Emission Data": 1
            },
            features: {
              mass: [ .6, .6 ],
              range: [ .8, 1.2 ]
            },
            uuid: "e438dda9-1b0d-47e0-be07-295c17b56c2b"
          },
          "4": {
            components: {
              "Decoded Emission Data": 1,
              "Electrochemical Arrays": 1,
              Germanium: 1
            },
            features: {
              mass: [ .8, .8 ],
              range: [ 1.2, 1.6 ]
            },
            uuid: "07ea5b4c-8ea7-44fb-8b0b-d38149dff798"
          },
          "5": {
            components: {
              "Abnormal Compact Emissions Data": 1,
              Niobium: 1,
              "Polymer Capacitors": 1
            },
            features: {
              mass: [ 1, 1 ],
              range: [ 1.6, 2 ]
            },
            uuid: "885ea8d3-3b00-481c-894c-e8ea8dd9f7e5"
          }
        },
        id: 93,
        modulename: [ "Detailed surface scanner", "DSS" ],
        name: "Long range"
      },
      Sensor_SurfaceScanner_WideAngle: {
        fdname: "Sensor_SurfaceScanner_WideAngle",
        grades: {
          "1": {
            components: {
              "Mechanical Scrap": 1
            },
            features: {
              mass: [ .2, .2 ],
              angle: [ 0, .4 ]
            },
            uuid: "74d12e8c-a62a-4812-b7f4-9e3356963206"
          },
          "2": {
            components: {
              Germanium: 1,
              "Mechanical Scrap": 1
            },
            features: {
              mass: [ .4, .4 ],
              angle: [ .4, .8 ]
            },
            uuid: "4e76da64-72ea-4112-a5e8-4c14fc2efe57"
          },
          "3": {
            components: {
              "Classified Scan Databanks": 1,
              Germanium: 1,
              "Mechanical Scrap": 1
            },
            features: {
              mass: [ .6, .6 ],
              angle: [ .8, 1.2 ]
            },
            uuid: "e09980d9-b243-4d0f-8645-441552acb58e"
          },
          "4": {
            components: {
              "Divergent Scan Data": 1,
              "Mechanical Equipment": 1,
              Niobium: 1
            },
            features: {
              mass: [ .8, .8 ],
              angle: [ 1.2, 1.6 ]
            },
            uuid: "ed5c2046-bb49-4e48-8799-8c96db420359"
          },
          "5": {
            components: {
              "Classified Scan Fragment": 1,
              "Mechanical Components": 1,
              Tin: 1
            },
            features: {
              mass: [ 1, 1 ],
              angle: [ 1.6, 2 ]
            },
            uuid: "2b315099-a97d-43a8-958e-3c26c97b4421"
          }
        },
        id: 94,
        modulename: [ "Detailed surface scanner", "DSS" ],
        name: "Wide angle"
      },
      Sensor_WakeScanner_FastScan: {
        fdname: "Sensor_WakeScanner_FastScan",
        grades: {
          "1": {
            components: {
              Phosphorus: 1
            },
            features: {
              integrity: [ -.1, -.1 ],
              range: [ -.05, -.05 ],
              scantime: [ 0, -.2 ]
            },
            uuid: "c7abe4af-26f0-460c-8df7-71412f12d5f8"
          },
          "2": {
            components: {
              "Flawed Focus Crystals": 1,
              Phosphorus: 1
            },
            features: {
              integrity: [ -.2, -.2 ],
              range: [ -.1, -.1 ],
              scantime: [ -.2, -.35 ]
            },
            uuid: "940b832d-2dac-4671-9ada-4bede831342e"
          },
          "3": {
            components: {
              "Flawed Focus Crystals": 1,
              "Open Symmetric Keys": 1,
              Phosphorus: 1
            },
            features: {
              integrity: [ -.3, -.3 ],
              range: [ -.15, -.15 ],
              scantime: [ -.35, -.5 ]
            },
            uuid: "223a0854-036f-495d-afa1-69253f2b87c3"
          },
          "4": {
            components: {
              "Atypical Encryption Archives": 1,
              "Focus Crystals": 1,
              Manganese: 1
            },
            features: {
              integrity: [ -.4, -.4 ],
              range: [ -.2, -.2 ],
              scantime: [ -.5, -.65 ]
            },
            uuid: "992ffcbe-26c5-4f41-bc2d-81bb6565ac27"
          },
          "5": {
            components: {
              "Adaptive Encryptors Capture": 1,
              Arsenic: 1,
              "Refined Focus Crystals": 1
            },
            features: {
              integrity: [ -.5, -.5 ],
              range: [ -.25, -.25 ],
              scantime: [ -.8, -.8 ]
            },
            uuid: "d2af32a6-ffdb-4c28-89ee-88f331e678d3"
          }
        },
        id: 109,
        modulename: [ "Wake scanner", "Frame shift wake scanner" ],
        name: "Fast scan"
      },
      Sensor_WakeScanner_LongRange: {
        fdname: "Sensor_WakeScanner_LongRange",
        grades: {
          "1": {
            components: {
              Iron: 1
            },
            features: {
              power: [ .1, .1 ],
              angle: [ -.1, -.1 ],
              range: [ 0, .24 ]
            },
            uuid: "11521a5e-0b00-4efe-9433-b0d4b5168c11"
          },
          "2": {
            components: {
              "Hybrid Capacitors": 1,
              Iron: 1
            },
            features: {
              power: [ .2, .2 ],
              angle: [ -.15, -.15 ],
              range: [ .24, .48 ]
            },
            uuid: "16235231-561b-4efb-a9bc-dcacb18b5651"
          },
          "3": {
            components: {
              "Hybrid Capacitors": 1,
              Iron: 1,
              "Unexpected Emission Data": 1
            },
            features: {
              power: [ .3, .3 ],
              angle: [ -.2, -.2 ],
              range: [ .48, .72 ]
            },
            uuid: "8dcbfbd5-748e-46ee-b179-4e2d213e518c"
          },
          "4": {
            components: {
              "Decoded Emission Data": 1,
              "Electrochemical Arrays": 1,
              Germanium: 1
            },
            features: {
              power: [ .4, .4 ],
              angle: [ -.25, -.25 ],
              range: [ .72, .96 ]
            },
            uuid: "44a348b1-979f-498e-bf61-22b38cb6f53b"
          },
          "5": {
            components: {
              "Abnormal Compact Emissions Data": 1,
              Niobium: 1,
              "Polymer Capacitors": 1
            },
            features: {
              power: [ .5, .5 ],
              angle: [ -.3, -.3 ],
              range: [ .96, 1.2 ]
            },
            uuid: "ee756b0e-c36f-4ea5-a46b-13291522feea"
          }
        },
        id: 108,
        modulename: [ "Wake scanner", "Frame shift wake scanner" ],
        name: "Long range"
      },
      Sensor_WakeScanner_WideAngle: {
        fdname: "Sensor_WakeScanner_WideAngle",
        grades: {
          "1": {
            components: {
              "Mechanical Scrap": 1
            },
            features: {
              mass: [ .2, .2 ],
              angle: [ 0, .4 ],
              scantime: [ .1, .1 ]
            },
            uuid: "1b76dc7a-d52c-4cdd-93c6-6857f509519b"
          },
          "2": {
            components: {
              Germanium: 1,
              "Mechanical Scrap": 1
            },
            features: {
              mass: [ .4, .4 ],
              angle: [ .4, .8 ],
              scantime: [ .2, .2 ]
            },
            uuid: "9e143db0-83e9-49ff-ba53-04927287190b"
          },
          "3": {
            components: {
              "Classified Scan Databanks": 1,
              Germanium: 1,
              "Mechanical Scrap": 1
            },
            features: {
              mass: [ .6, .6 ],
              angle: [ .8, 1.2 ],
              scantime: [ .3, .3 ]
            },
            uuid: "d2b0776c-9e74-4fe9-be1c-e49e104dcad6"
          },
          "4": {
            components: {
              "Divergent Scan Data": 1,
              "Mechanical Equipment": 1,
              Niobium: 1
            },
            features: {
              mass: [ .8, .8 ],
              angle: [ 1.2, 1.6 ],
              scantime: [ .4, .4 ]
            },
            uuid: "a00e7425-0828-41ea-9e11-e44bc391dd6f"
          },
          "5": {
            components: {
              "Classified Scan Fragment": 1,
              "Mechanical Components": 1,
              Tin: 1
            },
            features: {
              mass: [ 1, 1 ],
              angle: [ 1.6, 2 ],
              scantime: [ .5, .5 ]
            },
            uuid: "7835c40b-1612-49ac-9a41-230cfff63daa"
          }
        },
        id: 106,
        modulename: [ "Wake scanner", "Frame shift wake scanner" ],
        name: "Wide angle"
      },
      ShieldBooster_Explosive: {
        fdname: "ShieldBooster_Explosive",
        grades: {
          "1": {
            components: {
              Iron: 1
            },
            features: {
              explres: [ 0, .07 ],
              kinres: [ -.01, -.01 ],
              thermres: [ -.01, -.01 ]
            },
            uuid: "b6dd19e6-60e4-4307-a34f-c7e0e6182d44"
          },
          "2": {
            components: {
              "Conductive Components": 1,
              Iron: 1
            },
            features: {
              explres: [ .07, .12 ],
              kinres: [ -.02, -.02 ],
              thermres: [ -.02, -.02 ]
            },
            uuid: "3dd5f8fb-8399-4c4c-96d7-87c3840cfdeb"
          },
          "3": {
            components: {
              "Conductive Components": 1,
              "Focus Crystals": 1,
              Iron: 1
            },
            features: {
              explres: [ .12, .17 ],
              kinres: [ -.03, -.03 ],
              thermres: [ -.03, -.03 ]
            },
            uuid: "640409d8-6cb5-4624-b2b6-f435c9d8453b"
          },
          "4": {
            components: {
              Germanium: 1,
              "Refined Focus Crystals": 1,
              "Untypical Shield Scans": 1
            },
            features: {
              explres: [ .17, .22 ],
              kinres: [ -.04, -.04 ],
              thermres: [ -.04, -.04 ]
            },
            uuid: "8a311709-54f6-4a5f-a1cc-94c109d947df"
          },
          "5": {
            components: {
              "Aberrant Shield Pattern Analysis": 1,
              "Exquisite Focus Crystals": 1,
              Niobium: 1
            },
            features: {
              explres: [ .22, .27 ],
              kinres: [ -.05, -.05 ],
              thermres: [ -.05, -.05 ]
            },
            uuid: "4f120562-e421-4ed8-b0ed-0be8e27548bb"
          }
        },
        id: 68,
        modulename: [ "Shield booster" ],
        name: "Blast resistant"
      },
      ShieldBooster_HeavyDuty: {
        fdname: "ShieldBooster_HeavyDuty",
        grades: {
          "1": {
            components: {
              "Grid Resistors": 1
            },
            features: {
              integrity: [ 0, .03 ],
              mass: [ 1, 1 ],
              power: [ .05, .05 ],
              shieldboost: [ .03, .1 ]
            },
            uuid: "350e7873-893a-49d2-9057-c00e060178eb"
          },
          "2": {
            components: {
              "Distorted Shield Cycle Recordings": 1,
              "Hybrid Capacitors": 1
            },
            features: {
              integrity: [ .03, .06 ],
              mass: [ 1.5, 1.5 ],
              power: [ .1, .1 ],
              shieldboost: [ .1, .17 ]
            },
            uuid: "636ccc8d-cc59-4366-9934-8b235becc2d7"
          },
          "3": {
            components: {
              "Distorted Shield Cycle Recordings": 1,
              "Hybrid Capacitors": 1,
              Niobium: 1
            },
            features: {
              integrity: [ .06, .09 ],
              mass: [ 2, 2 ],
              power: [ .15, .15 ],
              shieldboost: [ .17, .24 ]
            },
            uuid: "82a66c08-1205-4c1a-ab02-1889e8ebcdd8"
          },
          "4": {
            components: {
              "Electrochemical Arrays": 1,
              "Inconsistent Shield Soak Analysis": 1,
              Tin: 1
            },
            features: {
              integrity: [ .09, .12 ],
              mass: [ 2.5, 2.5 ],
              power: [ .2, .2 ],
              shieldboost: [ .24, .31 ]
            },
            uuid: "c635934c-8d9d-4d1c-89e4-3a000a972bf2"
          },
          "5": {
            components: {
              Antimony: 1,
              "Polymer Capacitors": 1,
              "Untypical Shield Scans": 1
            },
            features: {
              integrity: [ .12, .15 ],
              mass: [ 3, 3 ],
              power: [ .25, .25 ],
              shieldboost: [ .31, .38 ]
            },
            uuid: "933e238e-56e0-44d6-b114-49eaab02f033"
          }
        },
        id: 69,
        modulename: [ "Shield booster" ],
        name: "Heavy duty"
      },
      ShieldBooster_Kinetic: {
        fdname: "ShieldBooster_Kinetic",
        grades: {
          "1": {
            components: {
              Iron: 1
            },
            features: {
              explres: [ -.01, -.01 ],
              kinres: [ 0, .07 ],
              thermres: [ -.01, -.01 ]
            },
            uuid: "8252b4bb-3195-4f46-88e8-b79ed5b5ad43"
          },
          "2": {
            components: {
              Germanium: 1,
              "Grid Resistors": 1
            },
            features: {
              explres: [ -.02, -.02 ],
              kinres: [ .07, .12 ],
              thermres: [ -.02, -.02 ]
            },
            uuid: "5f099a0e-0c37-447b-b552-f2e3d8dc1d19"
          },
          "3": {
            components: {
              "Focus Crystals": 1,
              "Hybrid Capacitors": 1,
              "Salvaged Alloys": 1
            },
            features: {
              explres: [ -.03, -.03 ],
              kinres: [ .12, .17 ],
              thermres: [ -.03, -.03 ]
            },
            uuid: "ab7f39b5-0b0e-45b2-a016-0916026e9633"
          },
          "4": {
            components: {
              "Galvanising Alloys": 1,
              "Refined Focus Crystals": 1,
              "Untypical Shield Scans": 1
            },
            features: {
              explres: [ -.04, -.04 ],
              kinres: [ .17, .22 ],
              thermres: [ -.04, -.04 ]
            },
            uuid: "59ddbb49-f4fc-466d-84b6-06f0529915a9"
          },
          "5": {
            components: {
              "Aberrant Shield Pattern Analysis": 1,
              "Exquisite Focus Crystals": 1,
              "Phase Alloys": 1
            },
            features: {
              explres: [ -.05, -.05 ],
              kinres: [ .22, .27 ],
              thermres: [ -.05, -.05 ]
            },
            uuid: "a224e524-7308-46a1-9a6b-a37a82bdc50b"
          }
        },
        id: 70,
        modulename: [ "Shield booster" ],
        name: "Kinetic resistant"
      },
      ShieldBooster_Resistive: {
        fdname: "ShieldBooster_Resistive",
        grades: {
          "1": {
            components: {
              Phosphorus: 1
            },
            features: {
              explres: [ .05, .05 ],
              integrity: [ -.04, -.04 ],
              kinres: [ .05, .05 ],
              power: [ .05, .05 ],
              thermres: [ .05, .05 ]
            },
            uuid: "54f9f0c6-b4e9-4861-86ab-730d800bea54"
          },
          "2": {
            components: {
              "Conductive Components": 1,
              Phosphorus: 1
            },
            features: {
              explres: [ .08, .08 ],
              integrity: [ -.06, -.06 ],
              kinres: [ .08, .08 ],
              power: [ .1, .1 ],
              thermres: [ .08, .08 ]
            },
            uuid: "f082652b-7778-4bce-a1f1-f2491b27eb1a"
          },
          "3": {
            components: {
              "Conductive Components": 1,
              "Focus Crystals": 1,
              Phosphorus: 1
            },
            features: {
              explres: [ .11, .11 ],
              integrity: [ -.08, -.08 ],
              kinres: [ .11, .11 ],
              power: [ .15, .15 ],
              thermres: [ .11, .11 ]
            },
            uuid: "cfb01505-ea2b-4a33-aa6b-cbabeb60db7c"
          },
          "4": {
            components: {
              "Conductive Ceramics": 1,
              Manganese: 1,
              "Refined Focus Crystals": 1
            },
            features: {
              explres: [ .14, .14 ],
              integrity: [ -.1, -.1 ],
              kinres: [ .14, .14 ],
              power: [ .2, .2 ],
              thermres: [ .14, .14 ]
            },
            uuid: "1d11b8c8-9c16-4bdb-ba33-e52e79fa5999"
          },
          "5": {
            components: {
              "Conductive Ceramics": 1,
              "Imperial Shielding": 1,
              "Refined Focus Crystals": 1
            },
            features: {
              explres: [ .17, .17 ],
              integrity: [ -.12, -.12 ],
              kinres: [ .17, .17 ],
              power: [ .25, .25 ],
              thermres: [ .17, .17 ]
            },
            uuid: "00a2aefc-0698-4c16-a1f1-6a84907e42bc"
          }
        },
        id: 71,
        modulename: [ "Shield booster" ],
        name: "Resistance augmented"
      },
      ShieldBooster_Thermic: {
        fdname: "ShieldBooster_Thermic",
        grades: {
          "1": {
            components: {
              Iron: 1
            },
            features: {
              explres: [ -.01, -.01 ],
              kinres: [ -.01, -.01 ],
              thermres: [ 0, .07 ]
            },
            uuid: "9316e798-33cd-4ed2-8289-94eb82e41574"
          },
          "2": {
            components: {
              Germanium: 1,
              "Heat Conduction Wiring": 1
            },
            features: {
              explres: [ -.02, -.02 ],
              kinres: [ -.02, -.02 ],
              thermres: [ .07, .12 ]
            },
            uuid: "62eaf453-a4dd-42e6-b404-dfb7569afec6"
          },
          "3": {
            components: {
              "Focus Crystals": 1,
              "Heat Conduction Wiring": 1,
              "Heat Dispersion Plate": 1
            },
            features: {
              explres: [ -.03, -.03 ],
              kinres: [ -.03, -.03 ],
              thermres: [ .12, .17 ]
            },
            uuid: "90cddf76-5636-46ae-8c41-b28c6831549b"
          },
          "4": {
            components: {
              "Heat Dispersion Plate": 1,
              "Refined Focus Crystals": 1,
              "Untypical Shield Scans": 1
            },
            features: {
              explres: [ -.04, -.04 ],
              kinres: [ -.04, -.04 ],
              thermres: [ .17, .22 ]
            },
            uuid: "3a922d38-e010-4874-97c9-7459dda8c184"
          },
          "5": {
            components: {
              "Aberrant Shield Pattern Analysis": 1,
              "Exquisite Focus Crystals": 1,
              "Heat Exchangers": 1
            },
            features: {
              explres: [ -.05, -.05 ],
              kinres: [ -.05, -.05 ],
              thermres: [ .22, .27 ]
            },
            uuid: "562f0d31-cefe-4631-939e-53168a9df2ab"
          }
        },
        id: 72,
        modulename: [ "Shield booster" ],
        name: "Thermal resistant"
      },
      ShieldCellBank_Rapid: {
        fdname: "ShieldCellBank_Rapid",
        grades: {
          "1": {
            components: {
              Sulphur: 1
            },
            features: {
              boot: [ .1, .1 ],
              duration: [ -.06, -.06 ],
              shieldreinforcement: [ 0, .05 ],
              spinup: [ 0, -.1 ]
            },
            uuid: "8f315143-e256-41c2-8833-f35d12e47dce"
          },
          "2": {
            components: {
              Chromium: 1,
              "Grid Resistors": 1
            },
            features: {
              boot: [ .15, .15 ],
              duration: [ -.12, -.12 ],
              shieldreinforcement: [ .05, .1 ],
              spinup: [ -.1, -.2 ]
            },
            uuid: "f983d8e1-9a38-425c-a5bb-3881c5e0f14d"
          },
          "3": {
            components: {
              "Hybrid Capacitors": 1,
              "Precipitated Alloys": 1,
              Sulphur: 1
            },
            features: {
              boot: [ .2, .2 ],
              duration: [ -.18, -.18 ],
              shieldreinforcement: [ .1, .15 ],
              spinup: [ -.2, -.3 ]
            },
            uuid: "f1cc436c-d2f0-4b79-a832-5fafd62ab5d8"
          }
        },
        id: 73,
        modulename: [ "Shield cell bank", "SCB" ],
        name: "Rapid charge"
      },
      ShieldCellBank_Specialised: {
        fdname: "ShieldCellBank_Specialised",
        grades: {
          "1": {
            components: {
              "Specialised Legacy Firmware": 1
            },
            features: {
              boot: [ 0, -.08 ],
              integrity: [ -.05, -.05 ],
              power: [ .1, .1 ],
              shieldreinforcement: [ 0, .04 ],
              thermload: [ 0, -.06 ]
            },
            uuid: "3aa962e3-48f8-4305-829a-717dbead2830"
          },
          "2": {
            components: {
              "Conductive Components": 1,
              "Specialised Legacy Firmware": 1
            },
            features: {
              boot: [ -.08, -.16 ],
              integrity: [ -.1, -.1 ],
              power: [ .15, .15 ],
              shieldreinforcement: [ .04, .06 ],
              thermload: [ -.06, -.12 ]
            },
            uuid: "53d40533-967f-4792-b938-421f7a938540"
          },
          "3": {
            components: {
              "Conductive Components": 1,
              "Cracked Industrial Firmware": 1,
              "Exceptional Scrambled Emission Data": 1
            },
            features: {
              boot: [ -.16, -.24 ],
              integrity: [ -.15, -.15 ],
              power: [ .2, .2 ],
              shieldreinforcement: [ .06, .08 ],
              thermload: [ -.12, -.18 ]
            },
            uuid: "0648b687-cf76-4953-a531-7eca944ec325"
          }
        },
        id: 74,
        modulename: [ "Shield cell bank", "SCB" ],
        name: "Specialised"
      },
      ShieldGenerator_Kinetic: {
        fdname: "ShieldGenerator_Kinetic",
        grades: {
          "1": {
            components: {
              "Distorted Shield Cycle Recordings": 1
            },
            features: {
              integrity: [ 0, .2 ],
              kinres: [ 0, .06 ],
              thermres: [ -.04, -.04 ]
            },
            uuid: "df87f0c1-bd60-4e18-8a03-76063d635235"
          },
          "2": {
            components: {
              "Distorted Shield Cycle Recordings": 1,
              "Modified Consumer Firmware": 1
            },
            features: {
              integrity: [ .2, .25 ],
              kinres: [ .06, .12 ],
              thermres: [ -.07, -.07 ]
            },
            uuid: "b67f86a0-866c-4233-9cd3-f5ea87a572eb"
          },
          "3": {
            components: {
              "Distorted Shield Cycle Recordings": 1,
              "Modified Consumer Firmware": 1,
              Selenium: 1
            },
            features: {
              integrity: [ .25, .3 ],
              kinres: [ .12, .18 ],
              thermres: [ -.11, -.11 ]
            },
            uuid: "93979fd6-d135-4221-9a60-c9354e02619f"
          },
          "4": {
            components: {
              "Focus Crystals": 1,
              "Inconsistent Shield Soak Analysis": 1,
              Mercury: 1
            },
            features: {
              integrity: [ .3, .35 ],
              kinres: [ .18, .24 ],
              thermres: [ -.14, -.14 ]
            },
            uuid: "0e14c801-fd35-4bca-b97b-24da20d8c716"
          },
          "5": {
            components: {
              "Refined Focus Crystals": 1,
              Ruthenium: 1,
              "Untypical Shield Scans": 1
            },
            features: {
              integrity: [ .35, .4 ],
              kinres: [ .18, .3 ],
              thermres: [ -.18, -.18 ]
            },
            uuid: "dfdb4767-78e1-4e5f-ae1a-aeb6ae2748c9"
          }
        },
        id: 75,
        modulename: [ "Shield generator", "Shields" ],
        name: "Kinetic resistant"
      },
      ShieldGenerator_Optimised: {
        fdname: "ShieldGenerator_Optimised",
        grades: {
          "1": {
            components: {
              "Distorted Shield Cycle Recordings": 1
            },
            features: {
              integrity: [ -.05, -.05 ],
              mass: [ 0, -.18 ],
              optmass: [ -.02, -.02 ],
              optmul: [ 0, .03 ],
              power: [ 0, -.2 ]
            },
            uuid: "598e0c47-ecd2-4cfa-93d1-08bbda4cd765"
          },
          "2": {
            components: {
              "Distorted Shield Cycle Recordings": 1,
              Germanium: 1
            },
            features: {
              integrity: [ -.1, -.1 ],
              mass: [ -.18, -.26 ],
              optmass: [ -.03, -.03 ],
              optmul: [ .03, .06 ],
              power: [ -.2, -.25 ]
            },
            uuid: "605d6333-c544-425e-96c6-a76b6b839e2c"
          },
          "3": {
            components: {
              "Distorted Shield Cycle Recordings": 1,
              Germanium: 1,
              "Precipitated Alloys": 1
            },
            features: {
              integrity: [ -.15, -.15 ],
              mass: [ -.26, -.34 ],
              optmass: [ -.04, -.04 ],
              optmul: [ .06, .09 ],
              power: [ -.25, -.3 ]
            },
            uuid: "db5f0467-5bdc-433e-986d-031bbd48067b"
          },
          "4": {
            components: {
              "Inconsistent Shield Soak Analysis": 1,
              Niobium: 1,
              "Thermic Alloys": 1
            },
            features: {
              integrity: [ -.2, -.2 ],
              mass: [ -.34, -.42 ],
              optmass: [ -.05, -.05 ],
              optmul: [ .09, .12 ],
              power: [ -.3, -.35 ]
            },
            uuid: "88987ab7-b759-4cda-acbb-726bd0ad17c7"
          },
          "5": {
            components: {
              "Military Grade Alloys": 1,
              Tin: 1,
              "Untypical Shield Scans": 1
            },
            features: {
              integrity: [ -.25, -.25 ],
              mass: [ -.42, -.5 ],
              optmass: [ -.06, -.06 ],
              optmul: [ .12, .15 ],
              power: [ -.35, -.4 ]
            },
            uuid: "cf878a5a-542b-46e8-8b56-4d179eac3f46"
          }
        },
        id: 76,
        modulename: [ "Shield generator", "Shields" ],
        name: "Enhanced low power"
      },
      ShieldGenerator_Reinforced: {
        fdname: "ShieldGenerator_Reinforced",
        grades: {
          "1": {
            components: {
              Phosphorus: 1
            },
            features: {
              brokenregen: [ -.1, -.1 ],
              distdraw: [ .04, .04 ],
              explres: [ 0, .0225 ],
              kinres: [ 0, .027 ],
              optmul: [ 0, .14 ],
              thermres: [ 0, .054 ]
            },
            uuid: "47ad77c0-e49b-44e5-9824-4074b63db369"
          },
          "2": {
            components: {
              "Conductive Components": 1,
              Phosphorus: 1
            },
            features: {
              brokenregen: [ -.1, -.1 ],
              distdraw: [ .06, .06 ],
              explres: [ .0225, .0375 ],
              kinres: [ .027, .045 ],
              optmul: [ .14, .2 ],
              thermres: [ .054, .09 ]
            },
            uuid: "823f8f82-745d-4051-8f35-4e38a561932e"
          },
          "3": {
            components: {
              "Conductive Components": 1,
              "Mechanical Components": 1,
              Phosphorus: 1
            },
            features: {
              brokenregen: [ -.1, -.1 ],
              distdraw: [ .08, .08 ],
              explres: [ .0375, .0525 ],
              kinres: [ .045, .063 ],
              optmul: [ .2, .26 ],
              thermres: [ .09, .126 ]
            },
            uuid: "a1a29713-f2e5-4e15-a913-e01dc065f99f"
          },
          "4": {
            components: {
              "Conductive Ceramics": 1,
              "Configurable Components": 1,
              Manganese: 1
            },
            features: {
              brokenregen: [ -.1, -.1 ],
              distdraw: [ .1, .1 ],
              explres: [ .0525, .0675 ],
              kinres: [ .063, .081 ],
              optmul: [ .26, .32 ],
              thermres: [ .126, .162 ]
            },
            uuid: "87ac1315-7904-48f6-a5fe-f044be546490"
          },
          "5": {
            components: {
              Arsenic: 1,
              "Conductive Polymers": 1,
              "Improvised Components": 1
            },
            features: {
              brokenregen: [ -.1, -.1 ],
              distdraw: [ .12, .12 ],
              explres: [ .0675, .0825 ],
              kinres: [ .081, .099 ],
              optmul: [ .32, .38 ],
              thermres: [ .162, .198 ]
            },
            uuid: "1d9af376-c7c9-4b1a-9bc9-e77b4025e328"
          }
        },
        id: 77,
        modulename: [ "Shield generator", "Shields" ],
        name: "Reinforced"
      },
      ShieldGenerator_Thermic: {
        fdname: "ShieldGenerator_Thermic",
        grades: {
          "1": {
            components: {
              "Distorted Shield Cycle Recordings": 1
            },
            features: {
              integrity: [ 0, .2 ],
              kinres: [ -.02, -.02 ],
              thermres: [ 0, .12 ]
            },
            uuid: "ef5a3026-0777-4715-a1f4-5c65eff85b12"
          },
          "2": {
            components: {
              "Distorted Shield Cycle Recordings": 1,
              Germanium: 1
            },
            features: {
              integrity: [ .2, .25 ],
              kinres: [ -.05, -.05 ],
              thermres: [ .12, .24 ]
            },
            uuid: "54e6e07a-3281-41aa-afa0-bbf292131c0f"
          },
          "3": {
            components: {
              "Distorted Shield Cycle Recordings": 1,
              Germanium: 1,
              Selenium: 1
            },
            features: {
              integrity: [ .25, .3 ],
              kinres: [ -.07, -.07 ],
              thermres: [ .24, .36 ]
            },
            uuid: "307935bf-60d3-4887-b449-24d712518154"
          },
          "4": {
            components: {
              "Focus Crystals": 1,
              "Inconsistent Shield Soak Analysis": 1,
              Mercury: 1
            },
            features: {
              integrity: [ .3, .35 ],
              kinres: [ -.1, -.1 ],
              thermres: [ .36, .48 ]
            },
            uuid: "ef6a4d70-9996-4db8-ae22-7c61c3dcaf74"
          },
          "5": {
            components: {
              "Refined Focus Crystals": 1,
              Ruthenium: 1,
              "Untypical Shield Scans": 1
            },
            features: {
              integrity: [ .35, .4 ],
              kinres: [ -.12, -.12 ],
              thermres: [ .48, .6 ]
            },
            uuid: "f14e779f-d09a-47e4-8f4e-89c85b730f6b"
          }
        },
        id: 78,
        modulename: [ "Shield generator", "Shields" ],
        name: "Thermal resistant"
      },
      WakeScanner_LightWeight: {
        fdname: "WakeScanner_LightWeight",
        grades: {
          "1": {
            components: {
              Phosphorus: 1
            },
            features: {
              integrity: [ -.1, -.1 ],
              mass: [ 0, -.45 ]
            },
            uuid: "bb40e7d4-d0f1-46aa-bedd-d946db82012d"
          },
          "2": {
            components: {
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.2, -.2 ],
              mass: [ -.45, -.55 ]
            },
            uuid: "3d38ce20-64c8-4416-bf8c-a0de02225624"
          },
          "3": {
            components: {
              "Conductive Ceramics": 1,
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              integrity: [ -.3, -.3 ],
              mass: [ -.55, -.65 ]
            },
            uuid: "86c3114f-e2d5-46a1-963b-a8dcdc4254c3"
          },
          "4": {
            components: {
              "Conductive Components": 1,
              "Phase Alloys": 1,
              "Proto Light Alloys": 1
            },
            features: {
              integrity: [ -.4, -.4 ],
              mass: [ -.65, -.75 ]
            },
            uuid: "cd80437d-740d-4391-810d-607f7e35202c"
          },
          "5": {
            components: {
              "Conductive Ceramics": 1,
              "Proto Light Alloys": 1,
              "Proto Radiolic Alloys": 1
            },
            features: {
              integrity: [ -.5, -.5 ],
              mass: [ -.75, -.85 ]
            },
            uuid: "e6f931fb-2d19-40b0-bfb2-4a0520f0c478"
          }
        },
        id: 79,
        modulename: [ "Frame shift wake scanner", "Wake scanner" ],
        name: "Lightweight"
      },
      WakeScanner_Reinforced: {
        fdname: "WakeScanner_Reinforced",
        grades: {
          "1": {
            components: {
              Nickel: 1
            },
            features: {
              integrity: [ 0, .6 ],
              mass: [ .3, .3 ]
            },
            uuid: "8a71178f-3d2a-4c53-94dc-606d9d43d43a"
          },
          "2": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .6, 1.2 ],
              mass: [ .6, .6 ]
            },
            uuid: "72595b30-3bbf-47e3-82f7-db29654bef66"
          },
          "3": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ 1.2, 1.8 ],
              mass: [ .9, .9 ]
            },
            uuid: "8cca72b3-f01a-49aa-a979-a72f3412bf6e"
          },
          "4": {
            components: {
              Molybdenum: 1,
              Tungsten: 1,
              Zinc: 1
            },
            features: {
              integrity: [ 1.8, 2.4 ],
              mass: [ 1.2, 1.2 ]
            },
            uuid: "89f9e00f-e621-4d34-bb15-4732f29a7f15"
          },
          "5": {
            components: {
              "High Density Composites": 1,
              Molybdenum: 1,
              Technetium: 1
            },
            features: {
              integrity: [ 2.4, 3 ],
              mass: [ 1.5, 1.5 ]
            },
            uuid: "8f0e13ab-c621-4c21-b7a1-f8acd4057007"
          }
        },
        id: 81,
        modulename: [ "Frame shift wake scanner", "Wake scanner" ],
        name: "Reinforced"
      },
      WakeScanner_Shielded: {
        fdname: "WakeScanner_Shielded",
        grades: {
          "1": {
            components: {
              "Worn Shield Emitters": 1
            },
            features: {
              integrity: [ 0, .6 ],
              power: [ .2, .2 ]
            },
            uuid: "c500da24-7fe5-48f6-8661-593f4caee91a"
          },
          "2": {
            components: {
              Carbon: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ .6, 1.2 ],
              power: [ .4, .4 ]
            },
            uuid: "eed60442-f13e-4662-8132-e50a23e2534a"
          },
          "3": {
            components: {
              Carbon: 1,
              "High Density Composites": 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ 1.2, 1.8 ],
              power: [ .6, .6 ]
            },
            uuid: "df8baf0f-01a1-4fea-94e6-e169f71af1c6"
          },
          "4": {
            components: {
              "Proprietary Composites": 1,
              "Shielding Sensors": 1,
              Vanadium: 1
            },
            features: {
              integrity: [ 1.8, 2.4 ],
              power: [ .8, .8 ]
            },
            uuid: "107cbead-888f-4b4c-a57e-324ccfe37006"
          },
          "5": {
            components: {
              "Compound Shielding": 1,
              "Core Dynamics Composites": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ 2.4, 3 ],
              power: [ 1, 1 ]
            },
            uuid: "1c08bdca-000b-4e79-89cb-2cab3d5e3ce7"
          }
        },
        id: 80,
        modulename: [ "Frame shift wake scanner", "Wake scanner" ],
        name: "Shielded"
      },
      Weapon_DoubleShot: {
        fdname: "Weapon_DoubleShot",
        grades: {
          "1": {
            components: {
              Carbon: 1
            },
            features: {
              burst: [ 2, 2 ],
              burstrof: [ 0, 6 ],
              clip: [ .34, .34 ],
              range: [ -.02, -.02 ]
            },
            uuid: "0dad25c2-bbf3-4020-9af5-25f902ec7732"
          },
          "2": {
            components: {
              Carbon: 1,
              "Mechanical Equipment": 1
            },
            features: {
              burst: [ 2, 2 ],
              burstrof: [ 6, 8 ],
              clip: [ .34, .34 ],
              range: [ -.04, -.04 ]
            },
            uuid: "5cdaf06c-5ecd-40f0-bb8b-54ce8847b4e6"
          },
          "3": {
            components: {
              Carbon: 1,
              "Cracked Industrial Firmware": 1,
              "Mechanical Equipment": 1
            },
            features: {
              burst: [ 2, 2 ],
              burstrof: [ 8, 10 ],
              clip: [ .34, .34 ],
              range: [ -.06, -.06 ]
            },
            uuid: "fca184ef-5346-4f9a-8964-1e158763ab03"
          },
          "4": {
            components: {
              "Mechanical Components": 1,
              "Security Firmware Patch": 1,
              Vanadium: 1
            },
            features: {
              burst: [ 2, 2 ],
              burstrof: [ 10, 12 ],
              clip: [ .34, .34 ],
              range: [ -.08, -.08 ]
            },
            uuid: "93cc424a-f547-409e-8487-2f73c27d4e47"
          },
          "5": {
            components: {
              "Configurable Components": 1,
              "High Density Composites": 1,
              "Modified Embedded Firmware": 1
            },
            features: {
              burst: [ 2, 2 ],
              burstrof: [ 12, 14 ],
              clip: [ 1, 1 ],
              range: [ -.1, -.1 ]
            },
            uuid: "0d790580-fc41-4378-b8e9-4feceaebb618"
          }
        },
        id: 82,
        modulename: [ "Weapon" ],
        name: "Double shot"
      },
      Weapon_Efficient: {
        fdname: "Weapon_Efficient",
        grades: {
          "1": {
            components: {
              Sulphur: 1
            },
            features: {
              damage: [ 0, .08 ],
              thermload: [ 0, -.38 ]
            },
            uuid: "3fbcc9dc-169a-4cd3-b945-cedc55882cd3"
          },
          "2": {
            components: {
              "Heat Dispersion Plate": 1,
              Sulphur: 1
            },
            features: {
              damage: [ .08, .12 ],
              distdraw: [ 0, -.15 ],
              power: [ 0, -.12 ],
              thermload: [ -.38, -.43 ]
            },
            uuid: "a35a0c80-784d-4125-b858-fdee45750269"
          },
          "3": {
            components: {
              Chromium: 1,
              "Exceptional Scrambled Emission Data": 1,
              "Heat Exchangers": 1
            },
            features: {
              damage: [ .12, .16 ],
              distdraw: [ -.15, -.25 ],
              power: [ -.12, -.24 ],
              thermload: [ -.43, -.48 ]
            },
            uuid: "a429328b-11f4-402d-9909-2c6190505966"
          },
          "4": {
            components: {
              "Heat Vanes": 1,
              "Irregular Emission Data": 1,
              Selenium: 1
            },
            features: {
              damage: [ .16, .2 ],
              distdraw: [ -.25, -.35 ],
              power: [ -.24, -.36 ],
              thermload: [ -.48, -.52 ]
            },
            uuid: "8c364495-468c-4ab1-9baf-079917a6cf9a"
          },
          "5": {
            components: {
              Cadmium: 1,
              "Proto Heat Radiators": 1,
              "Unexpected Emission Data": 1
            },
            features: {
              damage: [ .2, .24 ],
              distdraw: [ -.35, -.45 ],
              power: [ -.36, -.48 ],
              thermload: [ -.52, -.6 ]
            },
            uuid: "5ac92753-1c19-4ae8-8b12-c6f130bda4a5"
          }
        },
        id: 83,
        modulename: [ "Weapon" ],
        name: "Efficient"
      },
      Weapon_Focused: {
        fdname: "Weapon_Focused",
        grades: {
          "1": {
            components: {
              Iron: 1
            },
            features: {
              piercing: [ 0, .4 ],
              range: [ 0, .36 ],
              shotspeed: [ 0, .36 ],
              thermload: [ .01, .01 ]
            },
            uuid: "fc3e4f2e-04fb-4509-a31f-1121940e1bc6"
          },
          "2": {
            components: {
              "Conductive Components": 1,
              Iron: 1
            },
            features: {
              piercing: [ .4, .6 ],
              range: [ .36, .52 ],
              shotspeed: [ .36, .52 ],
              thermload: [ .02, .02 ]
            },
            uuid: "437e00b1-a6fd-4d84-9242-075c3ce8adcb"
          },
          "3": {
            components: {
              Chromium: 1,
              "Conductive Ceramics": 1,
              Iron: 1
            },
            features: {
              piercing: [ .6, .8 ],
              range: [ .52, .68 ],
              shotspeed: [ .52, .68 ],
              thermload: [ .03, .03 ]
            },
            uuid: "bfbadc34-e11a-4cc4-80cc-83dde5731e6f"
          },
          "4": {
            components: {
              "Focus Crystals": 1,
              Germanium: 1,
              "Polymer Capacitors": 1
            },
            features: {
              piercing: [ .8, 1 ],
              range: [ .68, .84 ],
              shotspeed: [ .68, .84 ],
              thermload: [ .04, .04 ]
            },
            uuid: "7c41f9fc-90ec-435e-9d92-6024c32ac40d"
          },
          "5": {
            components: {
              "Military Supercapacitors": 1,
              Niobium: 1,
              "Refined Focus Crystals": 1
            },
            features: {
              piercing: [ 1, 1.2 ],
              range: [ .84, 1 ],
              shotspeed: [ .84, 1 ],
              thermload: [ .05, .05 ]
            },
            uuid: "d9306721-43a4-45cd-b225-ac9174da4d13"
          }
        },
        id: 84,
        modulename: [ "Weapon" ],
        name: "Focused"
      },
      Weapon_HighCapacity: {
        fdname: "Weapon_HighCapacity",
        grades: {
          "1": {
            components: {
              "Mechanical Scrap": 1
            },
            features: {
              ammo: [ 0, .36 ],
              clip: [ 0, .36 ],
              mass: [ .2, .2 ],
              power: [ .04, .04 ],
              rof: [ 0, .02 ]
            },
            uuid: "f622da45-ef05-4a9f-bdcb-879b5933b869"
          },
          "2": {
            components: {
              "Mechanical Scrap": 1,
              Vanadium: 1
            },
            features: {
              ammo: [ .36, .52 ],
              clip: [ .36, .52 ],
              mass: [ .3, .3 ],
              power: [ .08, .08 ],
              rof: [ .02, .04 ]
            },
            uuid: "c2cf2614-1a13-4b8d-81eb-d4eaf76257d0"
          },
          "3": {
            components: {
              "Mechanical Scrap": 1,
              Niobium: 1,
              Vanadium: 1
            },
            features: {
              ammo: [ .52, .68 ],
              clip: [ .52, .68 ],
              mass: [ .4, .4 ],
              power: [ .12, .12 ],
              rof: [ .04, .06 ]
            },
            uuid: "e37a6dba-669e-4ce6-bb3d-e831bdd656c0"
          },
          "4": {
            components: {
              "High Density Composites": 1,
              "Mechanical Equipment": 1,
              Tin: 1
            },
            features: {
              ammo: [ .68, .84 ],
              clip: [ .68, .84 ],
              mass: [ .5, .5 ],
              power: [ .16, .16 ],
              rof: [ .06, .08 ]
            },
            uuid: "8800433a-2061-4776-9821-5dc04772b963"
          },
          "5": {
            components: {
              "Mechanical Components": 1,
              "Military Supercapacitors": 1,
              "Proprietary Composites": 1
            },
            features: {
              ammo: [ .84, 1 ],
              clip: [ .84, 1 ],
              mass: [ .6, .6 ],
              power: [ .2, .2 ],
              rof: [ .08, .1 ]
            },
            uuid: "4b3f4f18-a517-4354-a02d-de46b3cd4efc"
          }
        },
        id: 85,
        modulename: [ "Weapon" ],
        name: "High capacity"
      },
      Weapon_LightWeight: {
        fdname: "Weapon_LightWeight",
        grades: {
          "1": {
            components: {
              Phosphorus: 1
            },
            features: {
              integrity: [ -.2, -.2 ],
              mass: [ 0, -.3 ]
            },
            uuid: "d5a539c5-120a-450f-bb68-e10abbeca8a9"
          },
          "2": {
            components: {
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              distdraw: [ 0, -.2 ],
              integrity: [ -.3, -.3 ],
              mass: [ -.3, -.45 ],
              power: [ 0, -.1 ]
            },
            uuid: "b6a80556-c22a-466e-931c-239c208c9890"
          },
          "3": {
            components: {
              "Conductive Ceramics": 1,
              Manganese: 1,
              "Salvaged Alloys": 1
            },
            features: {
              distdraw: [ -.2, -.25 ],
              integrity: [ -.4, -.4 ],
              mass: [ -.45, -.6 ],
              power: [ -.1, -.2 ]
            },
            uuid: "cbec8003-80e4-455a-84fe-257d2018386e"
          },
          "4": {
            components: {
              "Conductive Components": 1,
              "Phase Alloys": 1,
              "Proto Light Alloys": 1
            },
            features: {
              distdraw: [ -.25, -.3 ],
              integrity: [ -.5, -.5 ],
              mass: [ -.6, -.75 ],
              power: [ -.2, -.3 ]
            },
            uuid: "3a57effa-ccac-448d-8d1c-3e0966042e24"
          },
          "5": {
            components: {
              "Conductive Ceramics": 1,
              "Proto Light Alloys": 1,
              "Proto Radiolic Alloys": 1
            },
            features: {
              distdraw: [ -.3, -.35 ],
              integrity: [ -.6, -.6 ],
              mass: [ -.75, -.9 ],
              power: [ -.3, -.4 ]
            },
            uuid: "89f5d8e2-4f4c-4ef0-9e74-9f0691244b22"
          }
        },
        id: 86,
        modulename: [ "Weapon" ],
        name: "Lightweight"
      },
      Weapon_LongRange: {
        fdname: "Weapon_LongRange",
        grades: {
          "1": {
            components: {
              Sulphur: 1
            },
            features: {
              fallofffromrange: [ .2, .2 ],
              mass: [ .1, .1 ],
              power: [ .03, .03 ],
              range: [ 0, .2 ],
              shotspeed: [ 0, .2 ]
            },
            uuid: "356d1457-e52f-4302-8af5-745e103b85e8"
          },
          "2": {
            components: {
              "Modified Consumer Firmware": 1,
              Sulphur: 1
            },
            features: {
              fallofffromrange: [ .2, .4 ],
              mass: [ .15, .15 ],
              power: [ .06, .06 ],
              range: [ .2, .4 ],
              shotspeed: [ .2, .4 ]
            },
            uuid: "965e7108-73d5-4f26-95ab-2d261716a80c"
          },
          "3": {
            components: {
              "Focus Crystals": 1,
              "Modified Consumer Firmware": 1,
              Sulphur: 1
            },
            features: {
              fallofffromrange: [ .4, .6 ],
              mass: [ .2, .2 ],
              power: [ .09, .09 ],
              range: [ .4, .6 ],
              shotspeed: [ .4, .6 ]
            },
            uuid: "9d56f79f-9077-4391-8719-67e96c9613dd"
          },
          "4": {
            components: {
              "Conductive Polymers": 1,
              "Focus Crystals": 1,
              "Modified Consumer Firmware": 1
            },
            features: {
              fallofffromrange: [ .6, .8 ],
              mass: [ .25, .25 ],
              power: [ .12, .12 ],
              range: [ .6, .8 ],
              shotspeed: [ .6, .8 ]
            },
            uuid: "fbd49a72-d117-4e01-8485-d69b2267c803"
          },
          "5": {
            components: {
              "Biotech Conductors": 1,
              "Cracked Industrial Firmware": 1,
              "Thermic Alloys": 1
            },
            features: {
              fallofffromrange: [ .8, 1 ],
              mass: [ .3, .3 ],
              power: [ .15, .15 ],
              range: [ .8, 1 ],
              shotspeed: [ .8, 1 ]
            },
            uuid: "0d08a432-cfcd-40a7-8000-74a0dee56812"
          }
        },
        id: 87,
        modulename: [ "Weapon" ],
        name: "Long range"
      },
      Weapon_Overcharged: {
        fdname: "Weapon_Overcharged",
        grades: {
          "1": {
            components: {
              Nickel: 1
            },
            features: {
              clip: [ -.03, -.03 ],
              damage: [ 0, .3 ],
              distdraw: [ .15, .15 ],
              thermload: [ .03, .03 ]
            },
            uuid: "e917ebe3-d5f1-4016-b8a9-2c759e16a7d4"
          },
          "2": {
            components: {
              "Conductive Components": 1,
              Nickel: 1
            },
            features: {
              clip: [ -.06, -.06 ],
              damage: [ .3, .4 ],
              distdraw: [ .2, .2 ],
              thermload: [ .06, .06 ]
            },
            uuid: "f5921fc1-fb10-4d2f-8e0a-cd8d8e9e3a84"
          },
          "3": {
            components: {
              "Conductive Components": 1,
              "Electrochemical Arrays": 1,
              Nickel: 1
            },
            features: {
              clip: [ -.09, -.09 ],
              damage: [ .4, .5 ],
              distdraw: [ .25, .25 ],
              thermload: [ .09, .09 ]
            },
            uuid: "4389883f-c2b3-4487-9b1a-b668a761057a"
          },
          "4": {
            components: {
              "Conductive Ceramics": 1,
              "Polymer Capacitors": 1,
              Zinc: 1
            },
            features: {
              clip: [ -.12, -.12 ],
              damage: [ .5, .6 ],
              distdraw: [ .3, .3 ],
              thermload: [ .12, .12 ]
            },
            uuid: "25ec26dd-63b8-4e83-9a6e-86e5b80c4771"
          },
          "5": {
            components: {
              "Conductive Polymers": 1,
              "Modified Embedded Firmware": 1,
              Zirconium: 1
            },
            features: {
              clip: [ -.15, -.15 ],
              damage: [ .6, .7 ],
              distdraw: [ .35, .35 ],
              thermload: [ .15, .15 ]
            },
            uuid: "4dcf6bdc-bcff-448a-92a0-7612de548db7"
          }
        },
        id: 88,
        modulename: [ "Weapon" ],
        name: "Overcharged"
      },
      PA_Overcharged: {
        fdname: "Weapon_Overcharged",
        grades: {
          "1": {
            components: {
              Nickel: 1
            },
            features: {
              damage: [ 0, .3 ],
              distdraw: [ .15, .15 ],
              thermload: [ .03, .03 ]
            },
            uuid: "e917ebe3-d5f1-4016-b8a9-2c759e16a7d4"
          },
          "2": {
            components: {
              "Conductive Components": 1,
              Nickel: 1
            },
            features: {
              damage: [ .3, .4 ],
              distdraw: [ .2, .2 ],
              thermload: [ .06, .06 ]
            },
            uuid: "f5921fc1-fb10-4d2f-8e0a-cd8d8e9e3a84"
          },
          "3": {
            components: {
              "Conductive Components": 1,
              "Electrochemical Arrays": 1,
              Nickel: 1
            },
            features: {
              damage: [ .4, .5 ],
              distdraw: [ .25, .25 ],
              thermload: [ .09, .09 ]
            },
            uuid: "4389883f-c2b3-4487-9b1a-b668a761057a"
          },
          "4": {
            components: {
              "Conductive Ceramics": 1,
              "Polymer Capacitors": 1,
              Zinc: 1
            },
            features: {
              damage: [ .5, .6 ],
              distdraw: [ .3, .3 ],
              thermload: [ .12, .12 ]
            },
            uuid: "25ec26dd-63b8-4e83-9a6e-86e5b80c4771"
          },
          "5": {
            components: {
              "Conductive Polymers": 1,
              "Modified Embedded Firmware": 1,
              Zirconium: 1
            },
            features: {
              damage: [ .6, .7 ],
              distdraw: [ .35, .35 ],
              thermload: [ .15, .15 ]
            },
            uuid: "4dcf6bdc-bcff-448a-92a0-7612de548db7"
          }
        },
        id: 103,
        modulename: [ "Weapon" ],
        name: "Overcharged"
      },
      Weapon_RapidFire: {
        fdname: "Weapon_RapidFire",
        grades: {
          "1": {
            components: {
              "Mechanical Scrap": 1
            },
            features: {
              damage: [ -.01, -.01 ],
              jitter: [ .5, .5 ],
              reload: [ 0, -.25 ],
              rof: [ 0, .08 ]
            },
            uuid: "a7ca2bf6-14be-41ed-8bfb-c7348fda7713"
          },
          "2": {
            components: {
              "Heat Dispersion Plate": 1,
              "Mechanical Scrap": 1
            },
            features: {
              damage: [ -.02, -.02 ],
              distdraw: [ 0, -.05 ],
              jitter: [ .5, .5 ],
              reload: [ -.25, -.35 ],
              rof: [ .08, .17 ]
            },
            uuid: "0008257b-ea33-48ea-a18e-56cc6cf98a77"
          },
          "3": {
            components: {
              "Mechanical Equipment": 1,
              "Precipitated Alloys": 1,
              "Specialised Legacy Firmware": 1
            },
            features: {
              damage: [ -.03, -.03 ],
              distdraw: [ -.05, -.15 ],
              jitter: [ .5, .5 ],
              reload: [ -.35, -.45 ],
              rof: [ .17, .26 ]
            },
            uuid: "f3338d38-f944-4841-b350-09755e1b615d"
          },
          "4": {
            components: {
              "Mechanical Components": 1,
              "Modified Consumer Firmware": 1,
              "Thermic Alloys": 1
            },
            features: {
              damage: [ -.04, -.04 ],
              distdraw: [ -.15, -.25 ],
              jitter: [ .5, .5 ],
              reload: [ -.45, -.55 ],
              rof: [ .26, .35 ]
            },
            uuid: "d2bdb568-725a-44bf-9328-ba72d2988acd"
          },
          "5": {
            components: {
              "Configurable Components": 1,
              "Precipitated Alloys": 1,
              Technetium: 1
            },
            features: {
              damage: [ -.05, -.05 ],
              distdraw: [ -.25, -.35 ],
              jitter: [ .5, .5 ],
              reload: [ -.55, -.65 ],
              rof: [ .35, .44 ]
            },
            uuid: "b1792824-0e96-42a3-9d3a-0b41d5ef83e0"
          }
        },
        id: 89,
        modulename: [ "Weapon" ],
        name: "Rapid fire"
      },
      Weapon_ShortRange: {
        fdname: "Weapon_ShortRange",
        grades: {
          "1": {
            components: {
              Nickel: 1
            },
            features: {
              damage: [ .15, .27 ],
              range: [ -.1, -.1 ]
            },
            uuid: "81dca970-1fbf-4017-af46-0c6285c3a728"
          },
          "2": {
            components: {
              "Modified Consumer Firmware": 1,
              Nickel: 1
            },
            features: {
              damage: [ .27, .39 ],
              range: [ -.2, -.2 ],
              thermload: [ .1, .1 ]
            },
            uuid: "cf07de84-b794-43fd-a8b6-57ee781e9247"
          },
          "3": {
            components: {
              "Electrochemical Arrays": 1,
              "Modified Consumer Firmware": 1,
              Nickel: 1
            },
            features: {
              damage: [ .39, .51 ],
              range: [ -.3, -.3 ],
              thermload: [ .2, .2 ]
            },
            uuid: "7cd60cfe-e406-4005-a912-a306a69067e0"
          },
          "4": {
            components: {
              "Conductive Polymers": 1,
              "Electrochemical Arrays": 1,
              "Modified Consumer Firmware": 1
            },
            features: {
              damage: [ .51, .63 ],
              range: [ -.4, -.4 ],
              thermload: [ .3, .3 ]
            },
            uuid: "adae0f67-fd08-47d5-8870-f926cc63353f"
          },
          "5": {
            components: {
              "Biotech Conductors": 1,
              "Configurable Components": 1,
              "Cracked Industrial Firmware": 1
            },
            features: {
              damage: [ .63, .75 ],
              range: [ -.5, -.5 ],
              thermload: [ .4, .4 ]
            },
            uuid: "ccf0cfd9-6da2-4975-95fa-ea7f0ccda991"
          }
        },
        id: 90,
        modulename: [ "Weapon" ],
        name: "Short range"
      },
      Weapon_Sturdy: {
        fdname: "Weapon_Sturdy",
        grades: {
          "1": {
            components: {
              Nickel: 1
            },
            features: {
              integrity: [ 0, 1 ],
              mass: [ .2, .2 ],
              piercing: [ 0, .2 ],
              thermload: [ 0, -.1 ]
            },
            uuid: "3ac55eb7-0a45-440b-8c59-6ead43c7ef49"
          },
          "2": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1
            },
            features: {
              integrity: [ 1.5, 1.5 ],
              mass: [ .4, .4 ],
              piercing: [ .2, .3 ],
              thermload: [ -.1, -.15 ]
            },
            uuid: "53c131ab-cd66-4919-b49b-c1435362c8ff"
          },
          "3": {
            components: {
              Nickel: 1,
              "Shield Emitters": 1,
              Tungsten: 1
            },
            features: {
              integrity: [ 2, 2 ],
              mass: [ .6, .6 ],
              piercing: [ .3, .4 ],
              thermload: [ -.15, -.2 ]
            },
            uuid: "2d1873d4-6d38-4d39-b4c5-ea199be2bd6a"
          },
          "4": {
            components: {
              Molybdenum: 1,
              Tungsten: 1,
              Zinc: 1
            },
            features: {
              integrity: [ 2.5, 2.5 ],
              mass: [ .8, .8 ],
              piercing: [ .4, .5 ],
              thermload: [ -.2, -.25 ]
            },
            uuid: "4ceeab9c-7a85-4553-9fa4-81ebc6e88d4f"
          },
          "5": {
            components: {
              "High Density Composites": 1,
              Molybdenum: 1,
              Technetium: 1
            },
            features: {
              integrity: [ 3, 3 ],
              mass: [ 1, 1 ],
              piercing: [ .5, .6 ],
              thermload: [ -.25, -.3 ]
            },
            uuid: "53ab027e-1c5f-404b-82e3-0bc4c55c71af"
          }
        },
        id: 91,
        modulename: [ "Weapon" ],
        name: "Sturdy"
      }
    },
    modifications: {
      ammo: {
        id: 0,
        name: "ammo",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      boot: {
        id: 1,
        name: "boot",
        type: "percentage",
        method: "multiplicative",
        higherbetter: false
      },
      brokenregen: {
        id: 2,
        name: "brokenregen",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      burst: {
        id: 3,
        name: "burst",
        type: "numeric",
        method: "overwrite",
        higherbetter: true
      },
      burstrof: {
        id: 41,
        name: "burstrof",
        type: "numeric",
        method: "overwrite",
        higherbetter: true
      },
      causres: {
        id: 51,
        name: "explres",
        type: "percentage",
        method: "additive",
        higherbetter: true
      },
      clip: {
        id: 4,
        name: "clip",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      damage: {
        id: 5,
        name: "damage",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      damagedist: {
        id: 40,
        name: "damage",
        type: "object",
        hidden: true,
        method: "overwrite"
      },
      distdraw: {
        id: 6,
        name: "distdraw",
        type: "percentage",
        method: "multiplicative",
        higherbetter: false
      },
      duration: {
        id: 7,
        name: "duration",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      eff: {
        id: 8,
        name: "eff",
        type: "percentage",
        method: "multiplicative",
        higherbetter: false
      },
      engcap: {
        id: 9,
        name: "engcap",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      engrate: {
        id: 10,
        name: "engrate",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      explres: {
        id: 11,
        name: "explres",
        type: "percentage",
        method: "additive",
        higherbetter: true
      },
      facinglimit: {
        id: 12,
        name: "facinglimit",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      falloff: {
        id: 45,
        name: "falloff",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      fallofffromrange: {
        id: 42,
        name: "fallofffromrange",
        type: "numeric",
        aggregated: true,
        method: "overwrite"
      },
      hullboost: {
        id: 13,
        name: "hullboost",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      hullreinforcement: {
        id: 14,
        name: "hullreinforcement",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      integrity: {
        id: 15,
        name: "integrity",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      jitter: {
        id: 16,
        name: "jitter",
        type: "numeric",
        method: "additive",
        higherbetter: false
      },
      kinres: {
        id: 17,
        name: "kinres",
        type: "percentage",
        method: "additive",
        higherbetter: true
      },
      mass: {
        id: 18,
        name: "mass",
        type: "percentage",
        method: "multiplicative",
        higherbetter: false
      },
      maxfuel: {
        id: 19,
        name: "maxfuel",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      optmass: {
        id: 20,
        name: "optmass",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      optmul: {
        id: 21,
        name: "optmul",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      pgen: {
        id: 22,
        name: "pgen",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      piercing: {
        id: 23,
        name: "piercing",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      power: {
        id: 24,
        name: "power",
        type: "percentage",
        method: "multiplicative",
        higherbetter: false
      },
      protection: {
        id: 44,
        name: "protection",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      range: {
        id: 25,
        name: "range",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      ranget: {
        id: 26,
        name: "ranget",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      regen: {
        id: 27,
        name: "regen",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      reload: {
        id: 28,
        name: "reload",
        type: "percentage",
        method: "multiplicative",
        higherbetter: false
      },
      rof: {
        id: 29,
        name: "rof",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      angle: {
        id: 46,
        name: "angle",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      scanrate: {
        id: 49,
        name: "scanrate",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      scantime: {
        id: 48,
        name: "scantime",
        type: "percentage",
        method: "multiplicative",
        higherbetter: false
      },
      shield: {
        id: 30,
        name: "shield",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      shieldboost: {
        id: 31,
        name: "shieldboost",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      shotspeed: {
        id: 43,
        name: "shotspeed",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      spinup: {
        id: 32,
        name: "spinup",
        type: "percentage",
        method: "multiplicative",
        higherbetter: false
      },
      syscap: {
        id: 33,
        name: "syscap",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      sysrate: {
        id: 34,
        name: "sysrate",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      thermload: {
        id: 35,
        name: "thermload",
        type: "percentage",
        method: "multiplicative",
        higherbetter: false
      },
      thermres: {
        id: 36,
        name: "thermres",
        type: "percentage",
        method: "additive",
        higherbetter: true
      },
      wepcap: {
        id: 37,
        name: "wepcap",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      weprate: {
        id: 38,
        name: "weprate",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      shieldreinforcement: {
        id: 39,
        name: "shieldreinforcement",
        type: "percentage",
        method: "multiplicative",
        higherbetter: true
      },
      jumpboost: {
        id: 47,
        name: "jumpboost",
        type: "numeric",
        method: "additive",
        higherbetter: true
      },
      shieldaddition: {
        id: 50,
        name: "shieldaddition",
        type: "numeric",
        method: "additive",
        higherbetter: true
      }
    },
    modifierActions: {
      OutfittingFieldType_BootTime: {
        boot: 1
      },
      OutfittingFieldType_ExplosiveResistance: {
        explres: 1
      },
      OutfittingFieldType_DefenceModifierHealthAddition: {
        hullreinforcement: 1
      },
      OutfittingFieldType_DefenceModifierHealthMultiplier: {
        hullboost: 1
      },
      OutfittingFieldType_KineticResistance: {
        kinres: 1
      },
      OutfittingFieldType_DefenceModifierShieldMultiplier: {
        shieldboost: 1
      },
      OutfittingFieldType_ThermicResistance: {
        thermres: 1
      },
      OutfittingFieldType_EngineHeatRate: {
        thermload: 1
      },
      OutfittingFieldType_EngineOptimalMass: {
        optmass: 1
      },
      OutfittingFieldType_EngineOptPerformance: {
        optmul: 1
      },
      OutfittingFieldType_FSDHeatRate: {
        thermload: 1
      },
      OutfittingFieldType_FSDMaxFuelPerJump: {
        maxfuel: 1
      },
      OutfittingFieldType_FSDOptimalMass: {
        optmass: 1
      },
      OutfittingFieldType_FSDInterdictorFacingLimit: {
        facinglimit: 1
      },
      OutfittingFieldType_FSDInterdictorRange: {
        ranget: 1
      },
      OutfittingFieldType_Integrity: {
        integrity: 1
      },
      OutfittingFieldType_Mass: {
        mass: 1
      },
      OutfittingFieldType_SensorTargetScanAngle: {
        angle: 1
      },
      OutfittingFieldType_DSS_RateMult: {
        scanrate: 1
      },
      OutfittingFieldType_ScannerTimeToScan: {
        scantime: 1
      },
      OutfittingFieldType_ScannerRange: {
        range: 1
      },
      OutfittingFieldType_MaxAngle: {
        angle: 1
      },
      OutfittingFieldType_Range: {
        range: 1
      },
      OutfittingFieldType_PowerDraw: {
        power: 1
      },
      OutfittingFieldType_EnginesCapacity: {
        engcap: 1
      },
      OutfittingFieldType_EnginesRecharge: {
        engrate: 1
      },
      OutfittingFieldType_SystemsCapacity: {
        syscap: 1
      },
      OutfittingFieldType_SystemsRecharge: {
        sysrate: 1
      },
      OutfittingFieldType_WeaponsCapacity: {
        wepcap: 1
      },
      OutfittingFieldType_WeaponsRecharge: {
        weprate: 1
      },
      OutfittingFieldType_HeatEfficiency: {
        eff: 1
      },
      OutfittingFieldType_PowerCapacity: {
        pgen: 1
      },
      OutfittingFieldType_BrokenRegenRate: {
        brokenregen: 1
      },
      OutfittingFieldType_EnergyPerRegen: {
        distdraw: 1
      },
      OutfittingFieldType_ShieldGenOptimalMass: {
        optmass: 1
      },
      OutfittingFieldType_ShieldGenStrength: {
        optmul: 1
      },
      OutfittingFieldType_RegenRate: {
        regen: 1
      },
      OutfittingFieldType_ShieldBankHeat: {
        thermload: 1
      },
      OutfittingFieldType_ShieldBankDuration: {
        duration: 1
      },
      OutfittingFieldType_ShieldBankReinforcement: {
        shieldreinforcement: 1
      },
      OutfittingFieldType_ShieldBankSpinUp: {
        spinup: 1
      },
      OutfittingFieldType_ThermalLoad: {
        thermload: 1
      },
      OutfittingFieldType_DistributorDraw: {
        distdraw: 1
      },
      OutfittingFieldType_AmmoMaximum: {
        ammo: 1
      },
      OutfittingFieldType_RateOfFire: {
        rof: 1
      },
      OutfittingFieldType_weapon_burst_rof: {
        burstrof: 1
      },
      OutfittingFieldType_weapon_burst_size: {
        burst: 1
      },
      OutfittingFieldType_AmmoClipSize: {
        clip: 1
      },
      OutfittingFieldType_weapon_clip_size_override: {
        clip: 1
      },
      OutfittingFieldType_Damage: {
        damage: 1
      },
      OutfittingFieldType_weapon_falloffrange_from_range: {},
      OutfittingFieldType_ArmourPenetration: {
        piercing: 1
      },
      OutfittingFieldType_Jitter: {
        jitter: 1
      },
      OutfittingFieldType_MaximumRange: {
        range: 1
      },
      OutfittingFieldType_ReloadTime: {
        reload: 1
      },
      special_auto_loader: {},
      special_choke_canister: {},
      special_feedback_cascade_cooled: {
        thermload: -.4
      },
      special_super_penetrator_cooled: {
        thermload: -.4
      },
      special_concordant_sequence: {
        thermload: .5
      },
      special_corrosive_shell: {
        ammo: -.2
      },
      special_plasma_slug_cooled: {
        damage: -.1,
        thermload: -.4
      },
      special_dispersal_field: {},
      special_distortion_field: {},
      special_drag_munitions: {},
      special_emissive_munitions: {
        thermload: 1
      },
      special_feedback_cascade: {
        breachdmg: -.2,
        damage: -.2
      },
      special_force_shell: {
        shotspeed: -.1667
      },
      special_fsd_interrupt: {
        damage: -.3,
        rof: .5
      },
      special_high_yield_shell: {
        rof: .1111111111111111
      },
      special_incendiary_rounds: {
        rof: .05263157894736842,
        thermload: 2,
        damagedist: {
          T: 1
        }
      },
      special_inertial_impact: {
        damage: .5,
        jitter: 3,
        damagedist: {
          K: .5,
          T: .5
        }
      },
      special_overload_munitions: {
        damagedist: {
          E: .5,
          T: .5
        }
      },
      special_phasing_sequence: {
        damage: -.1
      },
      special_plasma_slug: {
        damage: -.2
      },
      special_radiant_canister: {
        ammo: -.25
      },
      special_regeneration_sequence: {
        damage: -.1
      },
      special_reverberating_cascade: {},
      special_scramble_spectrum: {
        rof: .1111111111111111
      },
      special_screening_shell: {
        reload: -.5
      },
      special_shiftlock_canister: {
        damage: -.2
      },
      special_super_penetrator: {
        reload: .5
      },
      special_thermal_cascade: {},
      special_thermal_conduit: {},
      special_thermal_vent: {},
      special_thermalshock: {
        damage: -.2
      },
      special_penetrator_munitions: {},
      special_deep_cut_payload: {},
      special_mass_lock: {},
      special_shield_regenerative: {
        brokenregen: .15,
        regen: .15,
        thermres: -1,
        kinres: -1,
        explres: -1
      },
      special_shield_resistive: {
        thermres: 3,
        kinres: 3,
        explres: 3,
        power: .1,
        distdraw: .25
      },
      special_shield_health: {
        power: .1,
        optmul: .06,
        distdraw: .25
      },
      special_shield_efficient: {
        power: -.2,
        distdraw: -.2,
        thermres: -1,
        optmul: -.02,
        kinres: -1,
        explres: -1
      },
      special_shield_thermic: {
        optmul: -.03,
        thermres: 8
      },
      special_shield_kinetic: {
        optmul: -.03,
        kinres: 8
      },
      special_shield_toughened: {
        integrity: .15
      },
      special_shield_lightweight: {
        mass: -.1
      },
      special_engine_cooled: {
        mass: .1,
        thermload: -.1
      },
      special_engine_haulage: {
        optmass: .1
      },
      special_engine_overloaded: {
        optmul: .04,
        thermload: .1
      },
      special_engine_toughened: {
        integrity: .15
      },
      special_engine_lightweight: {
        mass: -.1
      },
      special_fsd_fuelcapacity: {
        power: .05,
        maxfuel: .1
      },
      special_fsd_heavy: {
        integrity: -.08,
        optmass: .04
      },
      special_fsd_toughened: {
        integrity: .15
      },
      special_fsd_lightweight: {
        mass: -.1
      },
      special_fsd_cooled: {
        thermload: -.1
      },
      special_powerplant_highcharge: {
        mass: .1,
        pgen: .05
      },
      special_powerplant_cooled: {
        eff: -.1
      },
      special_powerplant_toughened: {
        integrity: .15
      },
      special_powerplant_lightweight: {
        mass: -.1
      },
      special_powerdistributor_capacity: {
        wepcap: .08,
        syscap: .08,
        engcap: .08,
        weprate: -.02,
        sysrate: -.02,
        engrate: -.02
      },
      special_powerdistributor_fast: {
        wepcap: -.04,
        syscap: -.04,
        engcap: -.04,
        weprate: .04,
        sysrate: .04,
        engrate: .04
      },
      special_powerdistributor_efficient: {
        power: -.1
      },
      special_powerdistributor_toughened: {
        integrity: .15
      },
      special_powerdistributor_lightweight: {
        mass: -.1
      },
      special_shieldcell_gradual: {
        duration: .1,
        shieldreinforcement: -.05
      },
      special_shieldcell_oversized: {
        spinup: .2,
        shieldreinforcement: .05
      },
      special_shieldcell_efficient: {
        power: -.1
      },
      special_shieldcell_toughened: {
        integrity: .15
      },
      special_shieldcell_lightweight: {
        mass: -.1
      },
      special_weapon_damage: {
        power: .05,
        damage: .03
      },
      special_weapon_rateoffire: {
        power: .05,
        rof: .03
      },
      special_weapon_efficient: {
        power: -.1
      },
      special_weapon_toughened: {
        integrity: .15
      },
      special_weapon_lightweight: {
        mass: -.1
      },
      special_armour_thermic: {
        hullboost: -.03,
        thermres: 8
      },
      special_armour_kinetic: {
        hullboost: -.03,
        kinres: 8
      },
      special_armour_explosive: {
        hullboost: -.03,
        explres: 8
      },
      special_armour_chunky: {
        hullboost: .08,
        thermres: -3,
        explres: -3,
        kinres: -3
      },
      special_hullreinforcement_thermic: {
        hullreinforcement: -.05,
        thermres: 2
      },
      special_hullreinforcement_kinetic: {
        hullreinforcement: -.05,
        kinres: 2
      },
      special_hullreinforcement_explosive: {
        hullreinforcement: -.05,
        explres: 2
      },
      special_hullreinforcement_chunky: {
        hullreinforcement: .1,
        explres: -2,
        thermres: -2,
        kinres: -2
      },
      special_shieldbooster_thermic: {
        shieldboost: -.01,
        thermres: 2
      },
      special_shieldbooster_kinetic: {
        shieldboost: -.01,
        kinres: 2
      },
      special_shieldbooster_explosive: {
        shieldboost: -.01,
        explres: 2
      },
      special_shieldbooster_efficient: {
        power: -.1
      },
      special_shieldbooster_toughened: {
        integrity: .15
      },
      special_shieldbooster_chunky: {
        shieldboost: .05,
        thermres: -2,
        kinres: -2,
        explres: -2
      },
      trade_cell_heat_cell_units: {
        shieldreinforcement: -1,
        thermload: -1
      },
      trade_defence_health_add_defence_global_mult: {
        explres: .4,
        hullreinforcement: 1,
        kinres: .4,
        thermres: .4
      },
      trade_distributor_engine_charge_system_charge: {
        engcap: 1,
        syscap: -1
      },
      trade_distributor_global_charge_mass: {
        engcap: .75,
        mass: 1,
        syscap: .75,
        wepcap: .75
      },
      trade_engine_curve_mult_engine_heat: {
        optmul: .4,
        thermload: 1
      },
      trade_fsd_fuel_per_jump_fsd_heat: {
        maxfuel: .5,
        thermload: 1
      },
      trade_interdictor_range_facing_limit: {},
      trade_mass_defence_health_add: {
        hullreinforcement: -.75,
        mass: -1
      },
      trade_mass_health: {
        integrity: 1,
        mass: .4
      },
      trade_passive_power_booster_global_mult: {
        explres: .4,
        kinres: .4,
        power: -1,
        thermres: .4
      },
      trade_passive_power_boot_time: {
        boot: 1,
        power: -.5
      },
      trade_passive_power_cell_spin_up: {},
      trade_passive_power_distributor_global_rate: {
        engrate: -1,
        power: -1,
        sysrate: -1,
        weprate: -1
      },
      trade_passive_power_engine_curve: {
        optmass: -.66,
        power: -1
      },
      trade_passive_power_shield_global_mult: {
        explres: .5,
        kinres: .5,
        power: -1,
        thermres: .5
      },
      trade_passive_power_weapon_active: {
        distdraw: -.6,
        power: 1
      },
      trade_shield_curve_shield_curve_mult: {
        optmass: -1,
        optmul: -.8
      },
      trade_shield_global_mult_shield_broken_regen: {
        brokenregen: -1,
        explres: -.5,
        kinres: -.5,
        thermres: -.5
      },
      trade_shield_kinetic_shield_thermic: {
        kinres: 1,
        thermres: -1
      },
      trade_weapon_active_passive_power: {
        distdraw: -.67,
        power: 1
      },
      trade_weapon_damage_weapon_active_power: {
        damage: .5,
        distdraw: 1
      },
      trade_weapon_hardness_weapon_heat: {
        piercing: .4,
        thermload: 1
      }
    },
    modules: {
      am: {
        blueprints: {
          AFM_Shielded: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Lori Jameson" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Lori Jameson" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Lori Jameson" ]
              },
              "4": {
                engineers: [ "Lori Jameson" ]
              }
            }
          }
        },
        modifications: [ "integrity", "power" ]
      },
      bh: {
        blueprints: {
          Armour_Advanced: {
            grades: {
              "1": {
                engineers: [ "Liz Ryder", "Selene Jean" ]
              },
              "2": {
                engineers: [ "Selene Jean" ]
              },
              "3": {
                engineers: [ "Selene Jean" ]
              },
              "4": {
                engineers: [ "Selene Jean" ]
              },
              "5": {
                engineers: [ "Selene Jean" ]
              }
            }
          },
          Armour_Explosive: {
            grades: {
              "1": {
                engineers: [ "Liz Ryder", "Selene Jean" ]
              },
              "2": {
                engineers: [ "Selene Jean" ]
              },
              "3": {
                engineers: [ "Selene Jean" ]
              },
              "4": {
                engineers: [ "Selene Jean" ]
              },
              "5": {
                engineers: [ "Selene Jean" ]
              }
            }
          },
          Armour_HeavyDuty: {
            grades: {
              "1": {
                engineers: [ "Liz Ryder", "Selene Jean" ]
              },
              "2": {
                engineers: [ "Selene Jean" ]
              },
              "3": {
                engineers: [ "Selene Jean" ]
              },
              "4": {
                engineers: [ "Selene Jean" ]
              },
              "5": {
                engineers: [ "Selene Jean" ]
              }
            }
          },
          Armour_Kinetic: {
            grades: {
              "1": {
                engineers: [ "Liz Ryder", "Selene Jean" ]
              },
              "2": {
                engineers: [ "Selene Jean" ]
              },
              "3": {
                engineers: [ "Selene Jean" ]
              },
              "4": {
                engineers: [ "Selene Jean" ]
              },
              "5": {
                engineers: [ "Selene Jean" ]
              }
            }
          },
          Armour_Thermic: {
            grades: {
              "1": {
                engineers: [ "Liz Ryder", "Selene Jean" ]
              },
              "2": {
                engineers: [ "Selene Jean" ]
              },
              "3": {
                engineers: [ "Selene Jean" ]
              },
              "4": {
                engineers: [ "Selene Jean" ]
              },
              "5": {
                engineers: [ "Selene Jean" ]
              }
            }
          }
        },
        modifications: [ "causres", "explres", "hullboost", "kinres", "mass", "thermres" ],
        specials: [ "special_armour_kinetic", "special_armour_explosive", "special_armour_chunky", "special_armour_thermic" ]
      },
      bl: {
        blueprints: {
          Weapon_Efficient: {
            grades: {
              "1": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "2": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "3": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "4": {
                engineers: [ "Broo Tarquin" ]
              },
              "5": {
                engineers: [ "Broo Tarquin" ]
              }
            }
          },
          Weapon_LightWeight: {
            grades: {
              "1": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "2": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "3": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "4": {
                engineers: [ "Broo Tarquin" ]
              },
              "5": {
                engineers: [ "Broo Tarquin" ]
              }
            }
          },
          Weapon_LongRange: {
            grades: {
              "1": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "2": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "3": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "4": {
                engineers: [ "Broo Tarquin" ]
              },
              "5": {
                engineers: [ "Broo Tarquin" ]
              }
            }
          },
          Weapon_Overcharged: {
            grades: {
              "1": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "2": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "3": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "4": {
                engineers: [ "Broo Tarquin" ]
              },
              "5": {
                engineers: [ "Broo Tarquin" ]
              }
            }
          },
          Weapon_ShortRange: {
            grades: {
              "1": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "2": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "3": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "4": {
                engineers: [ "Broo Tarquin" ]
              },
              "5": {
                engineers: [ "Broo Tarquin" ]
              }
            }
          },
          Weapon_Sturdy: {
            grades: {
              "1": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "2": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "3": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "4": {
                engineers: [ "Broo Tarquin" ]
              },
              "5": {
                engineers: [ "Broo Tarquin" ]
              }
            }
          }
        },
        modifications: [ "damage", "damagedist", "distdraw", "fallofffromrange", "integrity", "jitter", "mass", "piercing", "power", "range", "thermload" ],
        specials: [ "special_concordant_sequence", "special_regeneration_sequence", "special_thermal_conduit", "special_thermalshock", "special_thermal_vent", "special_weapon_damage", "special_weapon_efficient", "special_weapon_rateoffire", "special_weapon_toughened", "special_weapon_lightweight" ]
      },
      bsg: {
        blueprints: {
          ShieldGenerator_Kinetic: {
            grades: {
              "1": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "2": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "3": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "4": {
                engineers: [ "Lei Cheung" ]
              },
              "5": {
                engineers: [ "Lei Cheung" ]
              }
            }
          },
          ShieldGenerator_Optimised: {
            grades: {
              "1": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "2": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "3": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "4": {
                engineers: [ "Lei Cheung" ]
              },
              "5": {
                engineers: [ "Lei Cheung" ]
              }
            }
          },
          ShieldGenerator_Reinforced: {
            grades: {
              "1": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "2": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "3": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "4": {
                engineers: [ "Lei Cheung" ]
              },
              "5": {
                engineers: [ "Lei Cheung" ]
              }
            }
          },
          ShieldGenerator_Thermic: {
            grades: {
              "1": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "2": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "3": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "4": {
                engineers: [ "Lei Cheung" ]
              },
              "5": {
                engineers: [ "Lei Cheung" ]
              }
            }
          }
        },
        modifications: [ "brokenregen", "distdraw", "explres", "integrity", "kinres", "mass", "optmass", "optmul", "power", "regen", "thermres" ],
        specials: [ "special_shield_regenerative", "special_shield_resistive", "special_shield_health", "special_shield_efficient", "special_shield_thermic", "special_shield_kinetic", "special_shield_toughened", "special_shield_lightweight" ]
      },
      c: {
        blueprints: {
          Weapon_Efficient: {
            grades: {
              "1": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "2": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "3": {
                engineers: [ "The Sarge" ]
              },
              "4": {
                engineers: [ "The Sarge" ]
              },
              "5": {
                engineers: [ "The Sarge" ]
              }
            }
          },
          Weapon_HighCapacity: {
            grades: {
              "1": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "2": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "3": {
                engineers: [ "The Sarge" ]
              },
              "4": {
                engineers: [ "The Sarge" ]
              },
              "5": {
                engineers: [ "The Sarge" ]
              }
            }
          },
          Weapon_LightWeight: {
            grades: {
              "1": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "2": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "3": {
                engineers: [ "The Sarge" ]
              },
              "4": {
                engineers: [ "The Sarge" ]
              },
              "5": {
                engineers: [ "The Sarge" ]
              }
            }
          },
          Weapon_LongRange: {
            grades: {
              "1": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "2": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "3": {
                engineers: [ "The Sarge" ]
              },
              "4": {
                engineers: [ "The Sarge" ]
              },
              "5": {
                engineers: [ "The Sarge" ]
              }
            }
          },
          Weapon_Overcharged: {
            grades: {
              "1": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "2": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "3": {
                engineers: [ "The Sarge" ]
              },
              "4": {
                engineers: [ "The Sarge" ]
              },
              "5": {
                engineers: [ "The Sarge" ]
              }
            }
          },
          Weapon_ShortRange: {
            grades: {
              "1": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "2": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "3": {
                engineers: [ "The Sarge" ]
              },
              "4": {
                engineers: [ "The Sarge" ]
              },
              "5": {
                engineers: [ "The Sarge" ]
              }
            }
          },
          Weapon_Sturdy: {
            grades: {
              "1": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "2": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "3": {
                engineers: [ "The Sarge" ]
              },
              "4": {
                engineers: [ "The Sarge" ]
              },
              "5": {
                engineers: [ "The Sarge" ]
              }
            }
          }
        },
        modifications: [ "ammo", "clip", "damage", "damagedist", "distdraw", "fallofffromrange", "integrity", "jitter", "mass", "piercing", "power", "range", "reload", "rof", "shotspeed", "thermload" ],
        specials: [ "special_auto_loader", "special_dispersal_field", "special_smart_rounds", "special_force_shell", "special_high_yield_shell", "special_thermal_cascade", "special_weapon_damage", "special_weapon_efficient", "special_weapon_rateoffire", "special_weapon_toughened", "special_weapon_lightweight" ]
      },
      cc: {
        blueprints: {
          CollectionLimpet_LightWeight: {
            grades: {
              "1": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "The Sarge", "Tiana Fortune" ]
              }
            }
          },
          CollectionLimpet_Reinforced: {
            grades: {
              "1": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "The Sarge", "Tiana Fortune" ]
              }
            }
          },
          CollectionLimpet_Shielded: {
            grades: {
              "1": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "The Sarge", "Tiana Fortune" ]
              }
            }
          }
        },
        modifications: [ "integrity", "mass", "power" ]
      },
      ch: {
        blueprints: {
          ChaffLauncher_ChaffCapacity: {
            grades: {
              "3": {
                engineers: [ "Ram Tah" ]
              }
            }
          },
          ChaffLauncher_LightWeight: {
            grades: {
              "1": {
                engineers: [ "Ram Tah" ]
              },
              "2": {
                engineers: [ "Ram Tah" ]
              },
              "3": {
                engineers: [ "Ram Tah" ]
              },
              "4": {
                engineers: [ "Ram Tah" ]
              },
              "5": {
                engineers: [ "Ram Tah" ]
              }
            }
          },
          ChaffLauncher_Reinforced: {
            grades: {
              "1": {
                engineers: [ "Ram Tah" ]
              },
              "2": {
                engineers: [ "Ram Tah" ]
              },
              "3": {
                engineers: [ "Ram Tah" ]
              },
              "4": {
                engineers: [ "Ram Tah" ]
              },
              "5": {
                engineers: [ "Ram Tah" ]
              }
            }
          },
          ChaffLauncher_Shielded: {
            grades: {
              "1": {
                engineers: [ "Ram Tah" ]
              },
              "2": {
                engineers: [ "Ram Tah" ]
              },
              "3": {
                engineers: [ "Ram Tah" ]
              },
              "4": {
                engineers: [ "Ram Tah" ]
              },
              "5": {
                engineers: [ "Ram Tah" ]
              }
            }
          }
        },
        modifications: [ "ammo", "integrity", "mass", "power", "reload" ]
      },
      cr: {
        blueprints: {},
        modifications: []
      },
      rpl: {
        blueprints: {},
        modifications: []
      },
      cs: {
        blueprints: {
          Sensor_CargoScanner_FastScan: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "Tiana Fortune" ]
              }
            }
          },
          CargoScanner_LightWeight: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "Tiana Fortune" ]
              }
            }
          },
          Sensor_CargoScanner_LongRange: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "Tiana Fortune" ]
              }
            }
          },
          CargoScanner_Reinforced: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "Tiana Fortune" ]
              }
            }
          },
          CargoScanner_Shielded: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "Tiana Fortune" ]
              }
            }
          },
          Sensor_CargoScanner_WideAngle: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "Tiana Fortune" ]
              }
            }
          }
        },
        modifications: [ "integrity", "mass", "power", "angle", "range", "scantime" ]
      },
      dc: {
        blueprints: {},
        modifications: []
      },
      ec: {
        blueprints: {
          ECM_LightWeight: {
            grades: {
              "1": {
                engineers: [ "Ram Tah" ]
              },
              "2": {
                engineers: [ "Ram Tah" ]
              },
              "3": {
                engineers: [ "Ram Tah" ]
              },
              "4": {
                engineers: [ "Ram Tah" ]
              },
              "5": {
                engineers: [ "Ram Tah" ]
              }
            }
          },
          ECM_Reinforced: {
            grades: {
              "1": {
                engineers: [ "Ram Tah" ]
              },
              "2": {
                engineers: [ "Ram Tah" ]
              },
              "3": {
                engineers: [ "Ram Tah" ]
              },
              "4": {
                engineers: [ "Ram Tah" ]
              },
              "5": {
                engineers: [ "Ram Tah" ]
              }
            }
          },
          ECM_Shielded: {
            grades: {
              "1": {
                engineers: [ "Ram Tah" ]
              },
              "2": {
                engineers: [ "Ram Tah" ]
              },
              "3": {
                engineers: [ "Ram Tah" ]
              },
              "4": {
                engineers: [ "Ram Tah" ]
              },
              "5": {
                engineers: [ "Ram Tah" ]
              }
            }
          }
        },
        modifications: [ "integrity", "mass", "power" ]
      },
      fc: {
        blueprints: {
          Weapon_DoubleShot: {
            grades: {
              "1": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "4": {
                engineers: [ "Zacariah Nemo" ]
              },
              "5": {
                engineers: [ "Zacariah Nemo" ]
              }
            }
          },
          Weapon_Efficient: {
            grades: {
              "1": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "4": {
                engineers: [ "Zacariah Nemo" ]
              },
              "5": {
                engineers: [ "Zacariah Nemo" ]
              }
            }
          },
          Weapon_HighCapacity: {
            grades: {
              "1": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "4": {
                engineers: [ "Zacariah Nemo" ]
              },
              "5": {
                engineers: [ "Zacariah Nemo" ]
              }
            }
          },
          Weapon_LightWeight: {
            grades: {
              "1": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "4": {
                engineers: [ "Zacariah Nemo" ]
              },
              "5": {
                engineers: [ "Zacariah Nemo" ]
              }
            }
          },
          Weapon_Overcharged: {
            grades: {
              "1": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "4": {
                engineers: [ "Zacariah Nemo" ]
              },
              "5": {
                engineers: [ "Zacariah Nemo" ]
              }
            }
          },
          Weapon_RapidFire: {
            grades: {
              "1": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "4": {
                engineers: [ "Zacariah Nemo" ]
              },
              "5": {
                engineers: [ "Zacariah Nemo" ]
              }
            }
          },
          Weapon_Sturdy: {
            grades: {
              "1": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "4": {
                engineers: [ "Zacariah Nemo" ]
              },
              "5": {
                engineers: [ "Zacariah Nemo" ]
              }
            }
          }
        },
        modifications: [ "ammo", "burst", "burstrof", "clip", "damage", "damagedist", "fallofffromrange", "distdraw", "integrity", "jitter", "mass", "piercing", "power", "range", "reload", "rof", "shotspeed", "thermload" ],
        specials: [ "special_corrosive_shell", "special_blinding_shell", "special_incendiary_rounds", "special_drag_munitions", "special_screening_shell", "special_weapon_damage", "special_weapon_efficient", "special_weapon_rateoffire", "special_weapon_toughened", "special_weapon_lightweight" ]
      },
      rfl: {
        blueprints: {},
        modifications: []
      },
      fh: {
        blueprints: {},
        modifications: []
      },
      fi: {
        blueprints: {
          FSDinterdictor_Expanded: {
            grades: {
              "1": {
                engineers: [ "Colonel Bris Dekker", "Felicity Farseer", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Colonel Bris Dekker", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Colonel Bris Dekker", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Colonel Bris Dekker" ]
              }
            }
          },
          FSDinterdictor_LongRange: {
            grades: {
              "1": {
                engineers: [ "Colonel Bris Dekker", "Felicity Farseer", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Colonel Bris Dekker", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Colonel Bris Dekker", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Colonel Bris Dekker" ]
              }
            }
          }
        },
        modifications: [ "boot", "facinglimit", "integrity", "mass", "power", "ranget" ]
      },
      fs: {
        blueprints: {
          FuelScoop_Shielded: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Lori Jameson" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Lori Jameson" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Lori Jameson" ]
              },
              "4": {
                engineers: [ "Lori Jameson" ]
              }
            }
          }
        },
        modifications: [ "integrity", "power" ]
      },
      fsd: {
        blueprints: {
          FSD_FastBoot: {
            grades: {
              "1": {
                engineers: [ "Colonel Bris Dekker", "Elvira Martuuk", "Felicity Farseer", "Professor Palin" ]
              },
              "2": {
                engineers: [ "Colonel Bris Dekker", "Elvira Martuuk", "Felicity Farseer", "Professor Palin" ]
              },
              "3": {
                engineers: [ "Colonel Bris Dekker", "Elvira Martuuk", "Felicity Farseer", "Professor Palin" ]
              },
              "4": {
                engineers: [ "Elvira Martuuk", "Felicity Farseer" ]
              },
              "5": {
                engineers: [ "Elvira Martuuk", "Felicity Farseer" ]
              }
            }
          },
          FSD_LongRange: {
            grades: {
              "1": {
                engineers: [ "Colonel Bris Dekker", "Elvira Martuuk", "Felicity Farseer", "Professor Palin" ]
              },
              "2": {
                engineers: [ "Colonel Bris Dekker", "Elvira Martuuk", "Felicity Farseer", "Professor Palin" ]
              },
              "3": {
                engineers: [ "Colonel Bris Dekker", "Elvira Martuuk", "Felicity Farseer", "Professor Palin" ]
              },
              "4": {
                engineers: [ "Elvira Martuuk", "Felicity Farseer" ]
              },
              "5": {
                engineers: [ "Elvira Martuuk", "Felicity Farseer" ]
              }
            }
          },
          FSD_Shielded: {
            grades: {
              "1": {
                engineers: [ "Colonel Bris Dekker", "Elvira Martuuk", "Felicity Farseer", "Professor Palin" ]
              },
              "2": {
                engineers: [ "Colonel Bris Dekker", "Elvira Martuuk", "Felicity Farseer", "Professor Palin" ]
              },
              "3": {
                engineers: [ "Colonel Bris Dekker", "Elvira Martuuk", "Felicity Farseer", "Professor Palin" ]
              },
              "4": {
                engineers: [ "Elvira Martuuk", "Felicity Farseer" ]
              },
              "5": {
                engineers: [ "Elvira Martuuk", "Felicity Farseer" ]
              }
            }
          }
        },
        modifications: [ "boot", "integrity", "mass", "maxfuel", "optmass", "power", "thermload" ],
        specials: [ "special_fsd_fuelcapacity", "special_fsd_heavy", "special_fsd_toughened", "special_fsd_lightweight", "special_fsd_cooled" ]
      },
      ft: {
        blueprints: {},
        modifications: []
      },
      fx: {
        blueprints: {
          FuelTransferLimpet_LightWeight: {
            grades: {
              "1": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "The Sarge", "Tiana Fortune" ]
              }
            }
          },
          FuelTransferLimpet_Reinforced: {
            grades: {
              "1": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "The Sarge", "Tiana Fortune" ]
              }
            }
          },
          FuelTransferLimpet_Shielded: {
            grades: {
              "1": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "The Sarge", "Tiana Fortune" ]
              }
            }
          }
        },
        modifications: [ "integrity", "mass", "power" ]
      },
      hb: {
        blueprints: {
          HatchBreakerLimpet_LightWeight: {
            grades: {
              "1": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "The Sarge", "Tiana Fortune" ]
              }
            }
          },
          HatchBreakerLimpet_Reinforced: {
            grades: {
              "1": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "The Sarge", "Tiana Fortune" ]
              }
            }
          },
          HatchBreakerLimpet_Shielded: {
            grades: {
              "1": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "The Sarge", "Tiana Fortune" ]
              }
            }
          }
        },
        modifications: [ "integrity", "mass", "power" ]
      },
      hr: {
        blueprints: {
          HullReinforcement_Advanced: {
            grades: {
              "1": {
                engineers: [ "Liz Ryder", "Selene Jean" ]
              },
              "2": {
                engineers: [ "Selene Jean" ]
              },
              "3": {
                engineers: [ "Selene Jean" ]
              },
              "4": {
                engineers: [ "Selene Jean" ]
              },
              "5": {
                engineers: [ "Selene Jean" ]
              }
            }
          },
          HullReinforcement_Explosive: {
            grades: {
              "1": {
                engineers: [ "Liz Ryder", "Selene Jean" ]
              },
              "2": {
                engineers: [ "Selene Jean" ]
              },
              "3": {
                engineers: [ "Selene Jean" ]
              },
              "4": {
                engineers: [ "Selene Jean" ]
              },
              "5": {
                engineers: [ "Selene Jean" ]
              }
            }
          },
          HullReinforcement_HeavyDuty: {
            grades: {
              "1": {
                engineers: [ "Liz Ryder", "Selene Jean" ]
              },
              "2": {
                engineers: [ "Selene Jean" ]
              },
              "3": {
                engineers: [ "Selene Jean" ]
              },
              "4": {
                engineers: [ "Selene Jean" ]
              },
              "5": {
                engineers: [ "Selene Jean" ]
              }
            }
          },
          HullReinforcement_Kinetic: {
            grades: {
              "1": {
                engineers: [ "Liz Ryder", "Selene Jean" ]
              },
              "2": {
                engineers: [ "Selene Jean" ]
              },
              "3": {
                engineers: [ "Selene Jean" ]
              },
              "4": {
                engineers: [ "Selene Jean" ]
              },
              "5": {
                engineers: [ "Selene Jean" ]
              }
            }
          },
          HullReinforcement_Thermic: {
            grades: {
              "1": {
                engineers: [ "Liz Ryder", "Selene Jean" ]
              },
              "2": {
                engineers: [ "Selene Jean" ]
              },
              "3": {
                engineers: [ "Selene Jean" ]
              },
              "4": {
                engineers: [ "Selene Jean" ]
              },
              "5": {
                engineers: [ "Selene Jean" ]
              }
            }
          }
        },
        modifications: [ "hullreinforcement", "causres", "explres", "kinres", "mass", "thermres" ],
        specials: [ "special_hullreinforcement_thermic", "special_hullreinforcement_kinetic", "special_hullreinforcement_explosive", "special_hullreinforcement_chunky" ]
      },
      hs: {
        blueprints: {
          HeatSinkLauncher_HeatSinkCapacity: {
            grades: {
              "3": {
                engineers: [ "Ram Tah" ]
              }
            }
          },
          HeatSinkLauncher_LightWeight: {
            grades: {
              "1": {
                engineers: [ "Ram Tah" ]
              },
              "2": {
                engineers: [ "Ram Tah" ]
              },
              "3": {
                engineers: [ "Ram Tah" ]
              },
              "4": {
                engineers: [ "Ram Tah" ]
              },
              "5": {
                engineers: [ "Ram Tah" ]
              }
            }
          },
          HeatSinkLauncher_Reinforced: {
            grades: {
              "1": {
                engineers: [ "Ram Tah" ]
              },
              "2": {
                engineers: [ "Ram Tah" ]
              },
              "3": {
                engineers: [ "Ram Tah" ]
              },
              "4": {
                engineers: [ "Ram Tah" ]
              },
              "5": {
                engineers: [ "Ram Tah" ]
              }
            }
          },
          HeatSinkLauncher_Shielded: {
            grades: {
              "1": {
                engineers: [ "Ram Tah" ]
              },
              "2": {
                engineers: [ "Ram Tah" ]
              },
              "3": {
                engineers: [ "Ram Tah" ]
              },
              "4": {
                engineers: [ "Ram Tah" ]
              },
              "5": {
                engineers: [ "Ram Tah" ]
              }
            }
          }
        },
        modifications: [ "ammo", "integrity", "mass", "power", "reload" ]
      },
      kw: {
        blueprints: {
          Sensor_KillWarrantScanner_FastScan: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "Tiana Fortune" ]
              }
            }
          },
          KillWarrantScanner_LightWeight: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "Tiana Fortune" ]
              }
            }
          },
          KillWarrantScanner_LongRange: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "Tiana Fortune" ]
              }
            }
          },
          KillWarrantScanner_Reinforced: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "Tiana Fortune" ]
              }
            }
          },
          KillWarrantScanner_Shielded: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "Tiana Fortune" ]
              }
            }
          },
          Sensor_KillWarrantScanner_WideAngle: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "Tiana Fortune" ]
              }
            }
          }
        },
        modifications: [ "integrity", "mass", "power", "angle", "range", "scantime" ]
      },
      ls: {
        blueprints: {
          LifeSupport_LightWeight: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Lori Jameson" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Lori Jameson" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Lori Jameson" ]
              },
              "4": {
                engineers: [ "Lori Jameson" ]
              }
            }
          },
          LifeSupport_Reinforced: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Lori Jameson" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Lori Jameson" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Lori Jameson" ]
              },
              "4": {
                engineers: [ "Lori Jameson" ]
              }
            }
          },
          LifeSupport_Shielded: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Lori Jameson" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Lori Jameson" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Lori Jameson" ]
              },
              "4": {
                engineers: [ "Lori Jameson" ]
              }
            }
          }
        },
        modifications: [ "boot", "integrity", "mass", "power" ]
      },
      mc: {
        blueprints: {
          Weapon_Efficient: {
            grades: {
              "1": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "4": {
                engineers: [ "Tod McQuinn" ]
              },
              "5": {
                engineers: [ "Tod McQuinn" ]
              }
            }
          },
          Weapon_HighCapacity: {
            grades: {
              "1": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "4": {
                engineers: [ "Tod McQuinn" ]
              },
              "5": {
                engineers: [ "Tod McQuinn" ]
              }
            }
          },
          Weapon_LightWeight: {
            grades: {
              "1": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "4": {
                engineers: [ "Tod McQuinn" ]
              },
              "5": {
                engineers: [ "Tod McQuinn" ]
              }
            }
          },
          Weapon_LongRange: {
            grades: {
              "1": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "4": {
                engineers: [ "Tod McQuinn" ]
              },
              "5": {
                engineers: [ "Tod McQuinn" ]
              }
            }
          },
          Weapon_Overcharged: {
            grades: {
              "1": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "4": {
                engineers: [ "Tod McQuinn" ]
              },
              "5": {
                engineers: [ "Tod McQuinn" ]
              }
            }
          },
          Weapon_RapidFire: {
            grades: {
              "1": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "4": {
                engineers: [ "Tod McQuinn" ]
              },
              "5": {
                engineers: [ "Tod McQuinn" ]
              }
            }
          },
          Weapon_ShortRange: {
            grades: {
              "1": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "4": {
                engineers: [ "Tod McQuinn" ]
              },
              "5": {
                engineers: [ "Tod McQuinn" ]
              }
            }
          },
          Weapon_Sturdy: {
            grades: {
              "1": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Tod McQuinn", "Zacariah Nemo" ]
              },
              "4": {
                engineers: [ "Tod McQuinn" ]
              },
              "5": {
                engineers: [ "Tod McQuinn" ]
              }
            }
          }
        },
        modifications: [ "ammo", "clip", "damage", "damagedist", "fallofffromrange", "distdraw", "integrity", "jitter", "mass", "piercing", "power", "range", "reload", "rof", "shotspeed", "thermload" ],
        specials: [ "special_auto_loader", "special_corrosive_shell", "special_emissive_munitions", "special_incendiary_rounds", "special_smart_rounds", "special_thermalshock", "special_weapon_damage", "special_weapon_efficient", "special_weapon_rateoffire", "special_weapon_toughened", "special_weapon_lightweight" ]
      },
      axmc: {
        blueprints: {},
        modifications: []
      },
      ml: {
        blueprints: {},
        modifications: []
      },
      mr: {
        blueprints: {
          Weapon_HighCapacity: {
            grades: {
              "1": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "2": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "3": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "4": {
                engineers: [ "Liz Ryder" ]
              },
              "5": {
                engineers: [ "Liz Ryder" ]
              }
            }
          },
          Weapon_LightWeight: {
            grades: {
              "1": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "2": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "3": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "4": {
                engineers: [ "Liz Ryder" ]
              },
              "5": {
                engineers: [ "Liz Ryder" ]
              }
            }
          },
          Weapon_RapidFire: {
            grades: {
              "1": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "2": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "3": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "4": {
                engineers: [ "Liz Ryder" ]
              },
              "5": {
                engineers: [ "Liz Ryder" ]
              }
            }
          },
          Weapon_Sturdy: {
            grades: {
              "1": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "2": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "3": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "4": {
                engineers: [ "Liz Ryder" ]
              },
              "5": {
                engineers: [ "Liz Ryder" ]
              }
            }
          }
        },
        modifications: [ "ammo", "clip", "damage", "damagedist", "fallofffromrange", "distdraw", "integrity", "jitter", "mass", "piercing", "power", "reload", "rof", "thermload" ],
        specials_S: [ "special_drag_munitions", "special_emissive_munitions", "special_overload_munitions", "special_penetrator_payload", "special_thermal_cascade", "special_weapon_damage", "special_weapon_efficient", "special_weapon_rateoffire", "special_weapon_toughened", "special_weapon_lightweight" ],
        specials_D: [ "special_drag_munitions", "special_emissive_munitions", "special_fsd_interrupt", "special_overload_munitions", "special_penetrator_payload", "special_thermal_cascade", "special_weapon_damage", "special_weapon_efficient", "special_weapon_rateoffire", "special_weapon_toughened", "special_weapon_lightweight", "special_penetrator_munitions" ]
      },
      axmr: {
        blueprints: {},
        modifications: []
      },
      mrp: {
        blueprints: {},
        modifications: []
      },
      nl: {
        blueprints: {
          Weapon_HighCapacity: {
            grades: {
              "1": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "2": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "3": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "4": {
                engineers: [ "Juri Ishmaak" ]
              },
              "5": {
                engineers: [ "Juri Ishmaak" ]
              }
            }
          },
          Weapon_LightWeight: {
            grades: {
              "1": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "2": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "3": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "4": {
                engineers: [ "Juri Ishmaak" ]
              },
              "5": {
                engineers: [ "Juri Ishmaak" ]
              }
            }
          },
          Weapon_RapidFire: {
            grades: {
              "1": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "2": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "3": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "4": {
                engineers: [ "Juri Ishmaak" ]
              },
              "5": {
                engineers: [ "Juri Ishmaak" ]
              }
            }
          },
          Weapon_Sturdy: {
            grades: {
              "1": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "2": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "3": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "4": {
                engineers: [ "Juri Ishmaak" ]
              },
              "5": {
                engineers: [ "Juri Ishmaak" ]
              }
            }
          }
        },
        modifications: [ "ammo", "boot", "clip", "damage", "damagedist", "fallofffromrange", "integrity", "jitter", "mass", "piercing", "power", "reload", "rof", "thermload" ],
        specials: [ "special_ion_disruptor", "special_overload_munitions", "special_radiant_canister", "special_reverberating_cascade", "special_shiftlock_canister", "special_emissive_munitions", "special_weapon_damage", "special_weapon_efficient", "special_weapon_rateoffire", "special_weapon_toughened", "special_weapon_lightweight" ]
      },
      gpc: {
        blueprints: {},
        modifications: []
      },
      gpl: {
        blueprints: {},
        modifications: []
      },
      gsrp: {
        blueprints: {},
        modifications: []
      },
      gfsb: {
        blueprints: {},
        modifications: []
      },
      ghrp: {
        blueprints: {},
        modifications: []
      },
      gmrp: {
        blueprints: {},
        modifications: []
      },
      tbsc: {
        blueprints: {},
        modifications: []
      },
      gsc: {
        blueprints: {},
        modifications: []
      },
      gpp: {
        blueprints: {},
        modifications: []
      },
      ggc: {
        blueprints: {},
        modifications: []
      },
      pa: {
        blueprints: {
          Weapon_Efficient: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Bill Turner" ]
              },
              "4": {
                engineers: [ "Bill Turner" ]
              },
              "5": {
                engineers: [ "Bill Turner" ]
              }
            }
          },
          Weapon_Focused: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Bill Turner" ]
              },
              "4": {
                engineers: [ "Bill Turner" ]
              },
              "5": {
                engineers: [ "Bill Turner" ]
              }
            }
          },
          Weapon_LightWeight: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Bill Turner" ]
              },
              "4": {
                engineers: [ "Bill Turner" ]
              },
              "5": {
                engineers: [ "Bill Turner" ]
              }
            }
          },
          Weapon_LongRange: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Bill Turner" ]
              },
              "4": {
                engineers: [ "Bill Turner" ]
              },
              "5": {
                engineers: [ "Bill Turner" ]
              }
            }
          },
          PA_Overcharged: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Bill Turner" ]
              },
              "4": {
                engineers: [ "Bill Turner" ]
              },
              "5": {
                engineers: [ "Bill Turner" ]
              }
            }
          },
          Weapon_RapidFire: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Bill Turner" ]
              },
              "4": {
                engineers: [ "Bill Turner" ]
              },
              "5": {
                engineers: [ "Bill Turner" ]
              }
            }
          },
          Weapon_ShortRange: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Bill Turner" ]
              },
              "4": {
                engineers: [ "Bill Turner" ]
              },
              "5": {
                engineers: [ "Bill Turner" ]
              }
            }
          },
          Weapon_Sturdy: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Zacariah Nemo" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Zacariah Nemo" ]
              },
              "3": {
                engineers: [ "Bill Turner" ]
              },
              "4": {
                engineers: [ "Bill Turner" ]
              },
              "5": {
                engineers: [ "Bill Turner" ]
              }
            }
          }
        },
        modifications: [ "ammo", "clip", "damage", "damagedist", "fallofffromrange", "distdraw", "integrity", "jitter", "mass", "piercing", "power", "range", "reload", "shotspeed", "rof", "thermload" ],
        specials: [ "special_blinding_shell", "special_dispersal_field", "special_phasing_sequence", "special_plasma_slug", "special_plasma_slug_cooled", "special_lock_breaker", "special_thermal_conduit", "special_weapon_damage", "special_weapon_efficient", "special_weapon_rateoffire", "special_weapon_toughened", "special_weapon_lightweight" ]
      },
      pas: {
        blueprints: {},
        modifications: []
      },
      pc: {
        blueprints: {
          ProspectingLimpet_LightWeight: {
            grades: {
              "1": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "The Sarge", "Tiana Fortune" ]
              }
            }
          },
          ProspectingLimpet_Reinforced: {
            grades: {
              "1": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "The Sarge", "Tiana Fortune" ]
              }
            }
          },
          ProspectingLimpet_Shielded: {
            grades: {
              "1": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Ram Tah", "The Sarge", "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "The Sarge", "Tiana Fortune" ]
              }
            }
          }
        },
        modifications: [ "integrity", "mass", "power" ]
      },
      pce: {
        blueprints: {},
        modifications: []
      },
      pci: {
        blueprints: {},
        modifications: []
      },
      pcm: {
        blueprints: {},
        modifications: []
      },
      pcq: {
        blueprints: {},
        modifications: []
      },
      pd: {
        blueprints: {
          PowerDistributor_HighFrequency: {
            grades: {
              "1": {
                engineers: [ "Hera Tani", "Marco Qwent", "The Dweller" ]
              },
              "2": {
                engineers: [ "Hera Tani", "Marco Qwent", "The Dweller" ]
              },
              "3": {
                engineers: [ "Hera Tani", "Marco Qwent", "The Dweller" ]
              },
              "4": {
                engineers: [ "The Dweller" ]
              },
              "5": {
                engineers: [ "The Dweller" ]
              }
            }
          },
          PowerDistributor_PriorityEngines: {
            grades: {
              "1": {
                engineers: [ "Hera Tani", "Marco Qwent", "The Dweller" ]
              },
              "2": {
                engineers: [ "Hera Tani", "Marco Qwent", "The Dweller" ]
              },
              "3": {
                engineers: [ "Hera Tani", "Marco Qwent", "The Dweller" ]
              },
              "4": {
                engineers: [ "The Dweller" ]
              },
              "5": {
                engineers: [ "The Dweller" ]
              }
            }
          },
          PowerDistributor_HighCapacity: {
            grades: {
              "1": {
                engineers: [ "Hera Tani", "Marco Qwent", "The Dweller" ]
              },
              "2": {
                engineers: [ "Hera Tani", "Marco Qwent", "The Dweller" ]
              },
              "3": {
                engineers: [ "Hera Tani", "Marco Qwent", "The Dweller" ]
              },
              "4": {
                engineers: [ "The Dweller" ]
              },
              "5": {
                engineers: [ "The Dweller" ]
              }
            }
          },
          PowerDistributor_Shielded: {
            grades: {
              "1": {
                engineers: [ "Hera Tani", "Marco Qwent", "The Dweller" ]
              },
              "2": {
                engineers: [ "Hera Tani", "Marco Qwent", "The Dweller" ]
              },
              "3": {
                engineers: [ "Hera Tani", "Marco Qwent", "The Dweller" ]
              },
              "4": {
                engineers: [ "The Dweller" ]
              },
              "5": {
                engineers: [ "The Dweller" ]
              }
            }
          },
          PowerDistributor_PrioritySystems: {
            grades: {
              "1": {
                engineers: [ "Hera Tani", "Marco Qwent", "The Dweller" ]
              },
              "2": {
                engineers: [ "Hera Tani", "Marco Qwent", "The Dweller" ]
              },
              "3": {
                engineers: [ "Hera Tani", "Marco Qwent", "The Dweller" ]
              },
              "4": {
                engineers: [ "The Dweller" ]
              },
              "5": {
                engineers: [ "The Dweller" ]
              }
            }
          },
          PowerDistributor_PriorityWeapons: {
            grades: {
              "1": {
                engineers: [ "Hera Tani", "Marco Qwent", "The Dweller" ]
              },
              "2": {
                engineers: [ "Hera Tani", "Marco Qwent", "The Dweller" ]
              },
              "3": {
                engineers: [ "Hera Tani", "Marco Qwent", "The Dweller" ]
              },
              "4": {
                engineers: [ "The Dweller" ]
              },
              "5": {
                engineers: [ "The Dweller" ]
              }
            }
          }
        },
        modifications: [ "boot", "engcap", "engrate", "integrity", "mass", "power", "syscap", "sysrate", "wepcap", "weprate" ],
        specials: [ "special_powerdistributor_capacity", "special_powerdistributor_fast", "special_powerdistributor_efficient", "special_powerdistributor_toughened", "special_powerdistributor_lightweight" ]
      },
      pl: {
        blueprints: {
          Weapon_Efficient: {
            grades: {
              "1": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "2": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "3": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "4": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "5": {
                engineers: [ "Broo Tarquin" ]
              }
            }
          },
          Weapon_Focused: {
            grades: {
              "1": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "2": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "3": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "4": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "5": {
                engineers: [ "Broo Tarquin" ]
              }
            }
          },
          Weapon_LightWeight: {
            grades: {
              "1": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "2": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "3": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "4": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "5": {
                engineers: [ "Broo Tarquin" ]
              }
            }
          },
          Weapon_LongRange: {
            grades: {
              "1": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "2": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "3": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "4": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "5": {
                engineers: [ "Broo Tarquin" ]
              }
            }
          },
          Weapon_Overcharged: {
            grades: {
              "1": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "2": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "3": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "4": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "5": {
                engineers: [ "Broo Tarquin" ]
              }
            }
          },
          Weapon_RapidFire: {
            grades: {
              "1": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "2": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "3": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "4": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "5": {
                engineers: [ "Broo Tarquin" ]
              }
            }
          },
          Weapon_ShortRange: {
            grades: {
              "1": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "2": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "3": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "4": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "5": {
                engineers: [ "Broo Tarquin" ]
              }
            }
          },
          Weapon_Sturdy: {
            grades: {
              "1": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "2": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "3": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "4": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "5": {
                engineers: [ "Broo Tarquin" ]
              }
            }
          }
        },
        modifications: [ "damage", "damagedist", "fallofffromrange", "distdraw", "integrity", "jitter", "mass", "piercing", "power", "range", "rof", "thermload" ],
        specials: [ "special_concordant_sequence", "special_emissive_munitions", "special_phasing_sequence", "special_scramble_spectrum", "special_thermalshock", "special_weapon_damage", "special_weapon_efficient", "special_weapon_rateoffire", "special_weapon_toughened", "special_weapon_lightweight" ]
      },
      po: {
        blueprints: {
          PointDefence_PointDefenseCapacity: {
            grades: {
              "3": {
                engineers: [ "Ram Tah" ]
              }
            }
          },
          PointDefence_LightWeight: {
            grades: {
              "1": {
                engineers: [ "Ram Tah" ]
              },
              "2": {
                engineers: [ "Ram Tah" ]
              },
              "3": {
                engineers: [ "Ram Tah" ]
              },
              "4": {
                engineers: [ "Ram Tah" ]
              },
              "5": {
                engineers: [ "Ram Tah" ]
              }
            }
          },
          PointDefence_Reinforced: {
            grades: {
              "1": {
                engineers: [ "Ram Tah" ]
              },
              "2": {
                engineers: [ "Ram Tah" ]
              },
              "3": {
                engineers: [ "Ram Tah" ]
              },
              "4": {
                engineers: [ "Ram Tah" ]
              },
              "5": {
                engineers: [ "Ram Tah" ]
              }
            }
          },
          PointDefence_Shielded: {
            grades: {
              "1": {
                engineers: [ "Ram Tah" ]
              },
              "2": {
                engineers: [ "Ram Tah" ]
              },
              "3": {
                engineers: [ "Ram Tah" ]
              },
              "4": {
                engineers: [ "Ram Tah" ]
              },
              "5": {
                engineers: [ "Ram Tah" ]
              }
            }
          }
        },
        modifications: [ "ammo", "integrity", "mass", "power", "reload" ]
      },
      pp: {
        blueprints: {
          PowerPlant_Armoured: {
            grades: {
              "1": {
                engineers: [ "Felicity Farseer", "Hera Tani", "Marco Qwent" ]
              },
              "2": {
                engineers: [ "Hera Tani", "Marco Qwent" ]
              },
              "3": {
                engineers: [ "Hera Tani", "Marco Qwent" ]
              },
              "4": {
                engineers: [ "Hera Tani", "Marco Qwent" ]
              },
              "5": {
                engineers: [ "Hera Tani" ]
              }
            }
          },
          PowerPlant_Stealth: {
            grades: {
              "1": {
                engineers: [ "Felicity Farseer", "Hera Tani", "Marco Qwent" ]
              },
              "2": {
                engineers: [ "Hera Tani", "Marco Qwent" ]
              },
              "3": {
                engineers: [ "Hera Tani", "Marco Qwent" ]
              },
              "4": {
                engineers: [ "Hera Tani", "Marco Qwent" ]
              },
              "5": {
                engineers: [ "Hera Tani" ]
              }
            }
          },
          PowerPlant_Boosted: {
            grades: {
              "1": {
                engineers: [ "Felicity Farseer", "Hera Tani", "Marco Qwent" ]
              },
              "2": {
                engineers: [ "Hera Tani", "Marco Qwent" ]
              },
              "3": {
                engineers: [ "Hera Tani", "Marco Qwent" ]
              },
              "4": {
                engineers: [ "Hera Tani", "Marco Qwent" ]
              },
              "5": {
                engineers: [ "Hera Tani" ]
              }
            }
          }
        },
        modifications: [ "eff", "integrity", "mass", "pgen" ],
        specials: [ "special_powerplant_highcharge", "special_powerplant_cooled", "special_powerplant_toughened", "special_powerplant_lightweight" ]
      },
      psg: {
        blueprints: {
          ShieldGenerator_Kinetic: {
            grades: {
              "1": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "2": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "3": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "4": {
                engineers: [ "Lei Cheung" ]
              },
              "5": {
                engineers: [ "Lei Cheung" ]
              }
            }
          },
          ShieldGenerator_Optimised: {
            grades: {
              "1": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "2": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "3": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "4": {
                engineers: [ "Lei Cheung" ]
              },
              "5": {
                engineers: [ "Lei Cheung" ]
              }
            }
          },
          ShieldGenerator_Reinforced: {
            grades: {
              "1": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "2": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "3": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "4": {
                engineers: [ "Lei Cheung" ]
              },
              "5": {
                engineers: [ "Lei Cheung" ]
              }
            }
          },
          ShieldGenerator_Thermic: {
            grades: {
              "1": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "2": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "3": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "4": {
                engineers: [ "Lei Cheung" ]
              },
              "5": {
                engineers: [ "Lei Cheung" ]
              }
            }
          }
        },
        modifications: [ "brokenregen", "distdraw", "explres", "integrity", "kinres", "mass", "optmass", "optmul", "power", "regen", "thermres" ],
        specials: [ "special_shield_regenerative", "special_shield_resistive", "special_shield_health", "special_shield_efficient", "special_shield_thermic", "special_shield_kinetic", "special_shield_toughened", "special_shield_lightweight" ]
      },
      pv: {
        blueprints: {},
        modifications: []
      },
      rf: {
        blueprints: {
          Refineries_Shielded: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Lori Jameson" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Lori Jameson" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Lori Jameson" ]
              },
              "4": {
                engineers: [ "Lori Jameson" ]
              }
            }
          }
        },
        modifications: [ "integrity", "power" ]
      },
      rg: {
        blueprints: {
          Weapon_HighCapacity: {
            grades: {
              "1": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "2": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "3": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "4": {
                engineers: [ "Tod McQuinn" ]
              },
              "5": {
                engineers: [ "Tod McQuinn" ]
              }
            }
          },
          Weapon_LightWeight: {
            grades: {
              "1": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "2": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "3": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "4": {
                engineers: [ "Tod McQuinn" ]
              },
              "5": {
                engineers: [ "Tod McQuinn" ]
              }
            }
          },
          Weapon_LongRange: {
            grades: {
              "1": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "2": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "3": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "4": {
                engineers: [ "Tod McQuinn" ]
              },
              "5": {
                engineers: [ "Tod McQuinn" ]
              }
            }
          },
          Weapon_ShortRange: {
            grades: {
              "1": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "2": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "3": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "4": {
                engineers: [ "Tod McQuinn" ]
              },
              "5": {
                engineers: [ "Tod McQuinn" ]
              }
            }
          },
          Weapon_Sturdy: {
            grades: {
              "1": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "2": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "3": {
                engineers: [ "The Sarge", "Tod McQuinn" ]
              },
              "4": {
                engineers: [ "Tod McQuinn" ]
              },
              "5": {
                engineers: [ "Tod McQuinn" ]
              }
            }
          }
        },
        modifications: [ "ammo", "clip", "damage", "damagedist", "fallofffromrange", "distdraw", "integrity", "jitter", "mass", "piercing", "power", "range", "reload", "rof", "thermload" ],
        specials: [ "special_feedback_cascade", "special_feedback_cascade_cooled", "special_plasma_slug", "special_plasma_slug_cooled", "special_super_penetrator", "special_super_penetrator_cooled", "special_weapon_damage", "special_weapon_efficient", "special_weapon_rateoffire", "special_weapon_toughened", "special_weapon_lightweight" ]
      },
      s: {
        blueprints: {
          Sensor_Sensor_LightWeight: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lei Cheung", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lei Cheung", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lei Cheung", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lei Cheung", "Lori Jameson", "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lei Cheung", "Lori Jameson", "Tiana Fortune" ]
              }
            }
          },
          Sensor_Sensor_LongRange: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Felicity Farseer", "Juri Ishmaak", "Lei Cheung", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Felicity Farseer", "Juri Ishmaak", "Lei Cheung", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Felicity Farseer", "Juri Ishmaak", "Lei Cheung", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lei Cheung", "Lori Jameson", "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "Bill Turner", "Lei Cheung", "Lori Jameson", "Tiana Fortune" ]
              }
            }
          },
          Sensor_Sensor_WideAngle: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Felicity Farseer", "Juri Ishmaak", "Lei Cheung", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Felicity Farseer", "Juri Ishmaak", "Lei Cheung", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Felicity Farseer", "Juri Ishmaak", "Lei Cheung", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lei Cheung", "Lori Jameson", "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "Bill Turner", "Lei Cheung", "Lori Jameson", "Tiana Fortune" ]
              }
            }
          }
        },
        modifications: [ "integrity", "mass", "power", "range", "angle" ]
      },
      sb: {
        blueprints: {
          ShieldBooster_Explosive: {
            grades: {
              "1": {
                engineers: [ "Didi Vatermann", "Felicity Farseer", "Lei Cheung" ]
              },
              "2": {
                engineers: [ "Didi Vatermann", "Lei Cheung" ]
              },
              "3": {
                engineers: [ "Didi Vatermann", "Lei Cheung" ]
              },
              "4": {
                engineers: [ "Didi Vatermann" ]
              },
              "5": {
                engineers: [ "Didi Vatermann" ]
              }
            }
          },
          ShieldBooster_HeavyDuty: {
            grades: {
              "1": {
                engineers: [ "Didi Vatermann", "Felicity Farseer", "Lei Cheung" ]
              },
              "2": {
                engineers: [ "Didi Vatermann", "Lei Cheung" ]
              },
              "3": {
                engineers: [ "Didi Vatermann", "Lei Cheung" ]
              },
              "4": {
                engineers: [ "Didi Vatermann" ]
              },
              "5": {
                engineers: [ "Didi Vatermann" ]
              }
            }
          },
          ShieldBooster_Kinetic: {
            grades: {
              "1": {
                engineers: [ "Didi Vatermann", "Felicity Farseer", "Lei Cheung" ]
              },
              "2": {
                engineers: [ "Didi Vatermann", "Lei Cheung" ]
              },
              "3": {
                engineers: [ "Didi Vatermann", "Lei Cheung" ]
              },
              "4": {
                engineers: [ "Didi Vatermann" ]
              },
              "5": {
                engineers: [ "Didi Vatermann" ]
              }
            }
          },
          ShieldBooster_Resistive: {
            grades: {
              "1": {
                engineers: [ "Didi Vatermann", "Felicity Farseer", "Lei Cheung" ]
              },
              "2": {
                engineers: [ "Didi Vatermann", "Lei Cheung" ]
              },
              "3": {
                engineers: [ "Didi Vatermann", "Lei Cheung" ]
              },
              "4": {
                engineers: [ "Didi Vatermann" ]
              },
              "5": {
                engineers: [ "Didi Vatermann" ]
              }
            }
          },
          ShieldBooster_Thermic: {
            grades: {
              "1": {
                engineers: [ "Didi Vatermann", "Felicity Farseer", "Lei Cheung" ]
              },
              "2": {
                engineers: [ "Didi Vatermann", "Lei Cheung" ]
              },
              "3": {
                engineers: [ "Didi Vatermann", "Lei Cheung" ]
              },
              "4": {
                engineers: [ "Didi Vatermann" ]
              },
              "5": {
                engineers: [ "Didi Vatermann" ]
              }
            }
          }
        },
        modifications: [ "explres", "integrity", "kinres", "mass", "power", "shieldboost", "thermres" ],
        specials: [ "special_shieldbooster_thermic", "special_shieldbooster_kinetic", "special_shieldbooster_explosive", "special_shieldbooster_efficient", "special_shieldbooster_toughened", "special_shieldbooster_chunky" ]
      },
      sfn: {
        blueprints: {},
        modifications: []
      },
      sc: {
        blueprints: {},
        modifications: []
      },
      scb: {
        blueprints: {
          ShieldCellBank_Rapid: {
            grades: {
              "1": {
                engineers: [ "Elvira Martuuk", "Lori Jameson" ]
              },
              "2": {
                engineers: [ "Lori Jameson" ]
              },
              "3": {
                engineers: [ "Lori Jameson" ]
              }
            }
          },
          ShieldCellBank_Specialised: {
            grades: {
              "1": {
                engineers: [ "Elvira Martuuk", "Lori Jameson" ]
              },
              "2": {
                engineers: [ "Lori Jameson" ]
              },
              "3": {
                engineers: [ "Lori Jameson" ]
              }
            }
          }
        },
        modifications: [ "boot", "clip", "duration", "integrity", "mass", "power", "shieldreinforcement", "spinup", "thermload" ],
        specials: [ "special_shieldcell_gradual", "special_shieldcell_oversized", "special_shieldcell_efficient", "special_shieldcell_toughened", "special_shieldcell_lightweight" ]
      },
      sg: {
        blueprints: {
          ShieldGenerator_Kinetic: {
            grades: {
              "1": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "2": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "3": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "4": {
                engineers: [ "Lei Cheung" ]
              },
              "5": {
                engineers: [ "Lei Cheung" ]
              }
            }
          },
          ShieldGenerator_Optimised: {
            grades: {
              "1": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "2": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "3": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "4": {
                engineers: [ "Lei Cheung" ]
              },
              "5": {
                engineers: [ "Lei Cheung" ]
              }
            }
          },
          ShieldGenerator_Reinforced: {
            grades: {
              "1": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "2": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "3": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "4": {
                engineers: [ "Lei Cheung" ]
              },
              "5": {
                engineers: [ "Lei Cheung" ]
              }
            }
          },
          ShieldGenerator_Thermic: {
            grades: {
              "1": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "2": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "3": {
                engineers: [ "Didi Vatermann", "Elvira Martuuk", "Lei Cheung" ]
              },
              "4": {
                engineers: [ "Lei Cheung" ]
              },
              "5": {
                engineers: [ "Lei Cheung" ]
              }
            }
          }
        },
        modifications: [ "brokenregen", "distdraw", "explres", "integrity", "kinres", "mass", "optmass", "optmul", "power", "regen", "thermres" ],
        specials: [ "special_shield_regenerative", "special_shield_resistive", "special_shield_health", "special_shield_efficient", "special_shield_thermic", "special_shield_kinetic", "special_shield_toughened", "special_shield_lightweight" ]
      },
      ss: {
        blueprints: {
          Sensor_SurfaceScanner_FastScan: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Felicity Farseer", "Juri Ishmaak", "Lei Cheung", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Felicity Farseer", "Juri Ishmaak", "Lei Cheung", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Felicity Farseer", "Juri Ishmaak", "Lei Cheung", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lei Cheung", "Lori Jameson" ]
              },
              "5": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lei Cheung", "Lori Jameson" ]
              }
            }
          },
          Sensor_SurfaceScanner_LongRange: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Felicity Farseer", "Juri Ishmaak", "Lei Cheung", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Felicity Farseer", "Juri Ishmaak", "Lei Cheung", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Felicity Farseer", "Juri Ishmaak", "Lei Cheung", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lei Cheung", "Lori Jameson" ]
              },
              "5": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lei Cheung", "Lori Jameson" ]
              }
            }
          },
          Sensor_SurfaceScanner_WideAngle: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Felicity Farseer", "Juri Ishmaak", "Lei Cheung", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Felicity Farseer", "Juri Ishmaak", "Lei Cheung", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Felicity Farseer", "Juri Ishmaak", "Lei Cheung", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lei Cheung", "Lori Jameson" ]
              },
              "5": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lei Cheung", "Lori Jameson" ]
              }
            }
          }
        },
        modifications: [ "mass", "angle", "range", "scanrate" ]
      },
      xs: {
        blueprints: {},
        modifications: []
      },
      t: {
        blueprints: {
          Engine_Dirty: {
            grades: {
              "1": {
                engineers: [ "Elvira Martuuk", "Felicty Farseer", "Professor Palin" ]
              },
              "2": {
                engineers: [ "Elvira Martuuk", "Felicty Farseer", "Professor Palin" ]
              },
              "3": {
                engineers: [ "Felicty Farseer", "Professor Palin" ]
              },
              "4": {
                engineers: [ "Professor Palin" ]
              },
              "5": {
                engineers: [ "Professor Palin" ]
              }
            }
          },
          Engine_Reinforced: {
            grades: {
              "1": {
                engineers: [ "Elvira Martuuk", "Felicty Farseer", "Professor Palin" ]
              },
              "2": {
                engineers: [ "Elvira Martuuk", "Felicty Farseer", "Professor Palin" ]
              },
              "3": {
                engineers: [ "Felicty Farseer", "Professor Palin" ]
              },
              "4": {
                engineers: [ "Professor Palin" ]
              },
              "5": {
                engineers: [ "Professor Palin" ]
              }
            }
          },
          Engine_Tuned: {
            grades: {
              "1": {
                engineers: [ "Elvira Martuuk", "Felicty Farseer", "Professor Palin" ]
              },
              "2": {
                engineers: [ "Elvira Martuuk", "Felicty Farseer", "Professor Palin" ]
              },
              "3": {
                engineers: [ "Felicty Farseer", "Professor Palin" ]
              },
              "4": {
                engineers: [ "Professor Palin" ]
              },
              "5": {
                engineers: [ "Professor Palin" ]
              }
            }
          }
        },
        modifications: [ "integrity", "mass", "optmass", "optmul", "power", "thermload" ],
        specials: [ "special_engine_cooled", "special_engine_haulage", "special_engine_overloaded", "special_engine_toughened", "special_engine_lightweight" ]
      },
      tp: {
        blueprints: {
          Weapon_LightWeight: {
            grades: {
              "1": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "2": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "3": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "4": {
                engineers: [ "Liz Ryder" ]
              },
              "5": {
                engineers: [ "Liz Ryder" ]
              }
            }
          },
          Weapon_Sturdy: {
            grades: {
              "1": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "2": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "3": {
                engineers: [ "Juri Ishmaak", "Liz Ryder" ]
              },
              "4": {
                engineers: [ "Liz Ryder" ]
              },
              "5": {
                engineers: [ "Liz Ryder" ]
              }
            }
          }
        },
        modifications: [ "damage", "damagedist", "fallofffromrange", "distdraw", "integrity", "jitter", "mass", "piercing", "power", "range", "rof", "thermload" ],
        specials: [ "special_mass_lock_munition", "special_penetrator_payload", "special_reverberating_cascade", "special_weapon_damage", "special_weapon_efficient", "special_weapon_rateoffire", "special_weapon_toughened", "special_weapon_lightweight", "special_deep_cut_payload", "special_mass_lock" ]
      },
      ul: {
        blueprints: {
          Weapon_Efficient: {
            grades: {
              "1": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "2": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "3": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "4": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "5": {
                engineers: [ "Broo Tarquin" ]
              }
            }
          },
          Weapon_Focused: {
            grades: {
              "1": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "2": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "3": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "4": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "5": {
                engineers: [ "Broo Tarquin" ]
              }
            }
          },
          Weapon_LightWeight: {
            grades: {
              "1": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "2": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "3": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "4": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "5": {
                engineers: [ "Broo Tarquin" ]
              }
            }
          },
          Weapon_LongRange: {
            grades: {
              "1": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "2": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "3": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "4": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "5": {
                engineers: [ "Broo Tarquin" ]
              }
            }
          },
          Weapon_Overcharged: {
            grades: {
              "1": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "2": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "3": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "4": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "5": {
                engineers: [ "Broo Tarquin" ]
              }
            }
          },
          Weapon_RapidFire: {
            grades: {
              "1": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "2": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "3": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "4": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "5": {
                engineers: [ "Broo Tarquin" ]
              }
            }
          },
          Weapon_ShortRange: {
            grades: {
              "1": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "2": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "3": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "4": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "5": {
                engineers: [ "Broo Tarquin" ]
              }
            }
          },
          Weapon_Sturdy: {
            grades: {
              "1": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "2": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "3": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "4": {
                engineers: [ "Broo Tarquin", "The Dweller" ]
              },
              "5": {
                engineers: [ "Broo Tarquin" ]
              }
            }
          }
        },
        modifications: [ "burst", "burstrof", "damage", "damagedist", "fallofffromrange", "distdraw", "integrity", "jitter", "mass", "piercing", "power", "range", "rof", "thermload" ],
        specials: [ "special_concordant_sequence", "special_inertial_impact", "special_phasing_sequence", "special_scramble_spectrum", "special_thermalshock", "special_weapon_damage", "special_weapon_efficient", "special_weapon_rateoffire", "special_weapon_toughened", "special_weapon_lightweight" ]
      },
      ws: {
        blueprints: {
          Sensor_WakeScanner_FastScan: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "Tiana Fortune" ]
              }
            }
          },
          WakeScanner_LightWeight: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "Tiana Fortune" ]
              }
            }
          },
          Sensor_WakeScanner_LongRange: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "Tiana Fortune" ]
              }
            }
          },
          WakeScanner_Reinforced: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "Tiana Fortune" ]
              }
            }
          },
          WakeScanner_Shielded: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "Tiana Fortune" ]
              }
            }
          },
          Sensor_WakeScanner_WideAngle: {
            grades: {
              "1": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "2": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "3": {
                engineers: [ "Bill Turner", "Juri Ishmaak", "Lori Jameson", "Tiana Fortune" ]
              },
              "4": {
                engineers: [ "Tiana Fortune" ]
              },
              "5": {
                engineers: [ "Tiana Fortune" ]
              }
            }
          }
        },
        modifications: [ "integrity", "mass", "power", "angle", "range", "scantime" ]
      },
      tbem: {
        blueprints: {},
        modifications: []
      },
      tbrfl: {
        blueprints: {},
        modifications: []
      },
      dtl: {
        blueprints: {},
        modifications: []
      },
      mahr: {
        blueprints: {},
        modifications: []
      }
    },
    specials: {
      special_auto_loader: {
        id: 0,
        edname: "special_auto_loader",
        name: "Auto loader",
        uuid: "640d6dde-f497-42cd-8bc9-73ab3fa1b43a"
      },
      special_choke_canister: {
        id: 1,
        edname: "special_choke_canister",
        name: "Choke canister",
        uuid: "770007e7-398c-40ce-be02-22b227728aef"
      },
      special_concordant_sequence: {
        id: 2,
        edname: "special_concordant_sequence",
        name: "Concordant sequence",
        uuid: "b556c19a-e756-45b1-846f-9ddc61af18a9"
      },
      special_corrosive_shell: {
        id: 3,
        edname: "special_corrosive_shell",
        name: "Corrosive shell",
        uuid: "a6faa870-ff89-4e48-b607-424e065cbd43"
      },
      special_blinding_shell: {
        id: 4,
        edname: "special_blinding_shell",
        name: "Dazzle shell",
        uuid: "0a1e29ee-2fc7-4cbd-bbda-e8803c3e03ac"
      },
      special_dispersal_field: {
        id: 5,
        edname: "special_dispersal_field",
        name: "Dispersal field",
        uuid: "0e2dbd63-335d-4dca-8050-c7ca8ddc56b0"
      },
      special_distortion_field: {
        id: 6,
        edname: "special_distortion_field",
        name: "Distortion field",
        uuid: "4da956d5-df5b-4d4f-8651-22fd5e343454"
      },
      special_drag_munitions: {
        id: 7,
        edname: "special_drag_munitions",
        name: "Drag munitions",
        uuid: "ca4cd540-660a-4fba-b38d-179f72125819"
      },
      special_emissive_munitions: {
        id: 8,
        edname: "special_emissive_munitions",
        name: "Emissive munitions",
        uuid: "16c9ed0f-63c0-4ff2-b2e0-59bbb294632d"
      },
      special_feedback_cascade: {
        id: 9,
        edname: "special_feedback_cascade",
        name: "Feedback cascade (Legacy)",
        uuid: "fe22ebee-802a-4905-b390-f59a65c1394c"
      },
      special_force_shell: {
        id: 10,
        edname: "special_force_shell",
        name: "Force shell",
        uuid: "62056851-d2f2-474d-ba77-66c030c900e9"
      },
      special_fsd_interrupt: {
        id: 33,
        edname: "special_fsd_interrupt",
        name: "FSD interrupt",
        uuid: "c1400054-1c2b-487c-8854-7a22d96d4cd2"
      },
      special_high_yield_shell: {
        id: 11,
        edname: "special_high_yield_shell",
        name: "High yield shell",
        uuid: "a950b42c-204f-4775-a0c5-21bfcec1fd14"
      },
      special_incendiary_rounds: {
        id: 12,
        edname: "special_incendiary_rounds",
        name: "Incendiary rounds",
        uuid: "3526773e-a814-4bec-afbf-30db79a3e239"
      },
      special_inertial_impact: {
        id: 32,
        edname: "special_inertial_impact",
        name: "Inertial impact",
        uuid: "6eda22d3-8049-4bab-a125-762b12fa576a"
      },
      special_ion_disruptor: {
        id: 13,
        edname: "special_ion_disruptor",
        name: "Ion disruptor",
        uuid: "d84e40ca-afc1-4b01-9940-034152d288e7"
      },
      special_mass_lock_munition: {
        id: 14,
        edname: "special_mass_lock_munition",
        name: "Mass lock munition",
        uuid: "8565714f-912d-488b-82fb-43911504a300"
      },
      special_overload_munitions: {
        id: 15,
        edname: "special_overload_munitions",
        name: "Overload munitions",
        uuid: "c157bbd1-a14d-4aa2-9081-94cbfbdee558"
      },
      special_penetrator_payload: {
        id: 16,
        edname: "special_penetrator_payload",
        name: "Penetrator payload",
        uuid: "39e3bb85-e349-434b-b9fe-7fd02ee57f3d"
      },
      special_phasing_sequence: {
        id: 17,
        edname: "special_phasing_sequence",
        name: "Phasing sequence",
        uuid: "47254ea9-c88f-43e0-9166-d1796649917b"
      },
      special_plasma_slug: {
        id: 18,
        edname: "special_plasma_slug",
        name: "Plasma slug (Legacy)",
        uuid: "8794e18a-ecd5-4ebc-afd7-0b7d0d0cdd91"
      },
      special_radiant_canister: {
        id: 19,
        edname: "special_radiant_canister",
        name: "Radiant Canister",
        uuid: "51f84837-e9a5-432c-a125-d4322099266c"
      },
      special_regeneration_sequence: {
        id: 20,
        edname: "special_regeneration_sequence",
        name: "Regeneration sequence",
        uuid: "3bece1bb-7c31-4735-8c18-54dc4a0057bc"
      },
      special_reverberating_cascade: {
        id: 21,
        edname: "special_reverberating_cascade",
        name: "Reverberating cascade",
        uuid: "c03e2f4f-9520-44bb-9a1f-7a917e8e3a48"
      },
      special_scramble_spectrum: {
        id: 22,
        edname: "special_scramble_spectrum",
        name: "Scramble spectrum",
        uuid: "4f42cb92-4440-4295-ada9-fcca788a65b8"
      },
      special_screening_shell: {
        id: 23,
        edname: "special_screening_shell",
        name: "Screening shell",
        uuid: "9cf533fc-ccb1-4c92-8b6b-dd700af2988a"
      },
      special_shiftlock_canister: {
        id: 24,
        edname: "special_shiftlock_canister",
        name: "Shift-lock canister",
        uuid: "1f7b0deb-e023-43e5-96f6-ebf60d683e8b"
      },
      special_smart_rounds: {
        id: 25,
        edname: "special_smart_rounds",
        name: "Smart rounds",
        uuid: "2a3d8519-27af-44f2-a50b-33095964d1cc"
      },
      special_super_penetrator: {
        id: 26,
        edname: "special_super_penetrator",
        name: "Super penetrator (Legacy)",
        uuid: "2423e8f7-2384-4d32-8b9d-0e06a42a301d"
      },
      special_lock_breaker: {
        id: 27,
        edname: "special_lock_breaker",
        name: "Target lock breaker",
        uuid: "4cf42ed8-574f-4bb8-a1f2-ee154475b463"
      },
      special_thermal_cascade: {
        id: 28,
        edname: "special_thermal_cascade",
        name: "Thermal cascade",
        uuid: "e5c8cab4-7a2f-450d-a937-2d0d8b9e3714"
      },
      special_thermal_conduit: {
        id: 29,
        edname: "special_thermal_conduit",
        name: "Thermal conduit",
        uuid: "4e4e1f59-6762-47ff-b1fa-40ca43304698"
      },
      special_thermal_vent: {
        id: 30,
        edname: "special_thermal_vent",
        name: "Thermal vent",
        uuid: "70f11414-7904-405c-92db-806178ee9df4"
      },
      special_thermalshock: {
        id: 31,
        edname: "special_thermalshock",
        name: "Thermal shock",
        uuid: "fe8b4daa-e65d-464c-811d-400d3632a3d6"
      },
      special_feedback_cascade_cooled: {
        name: "Feedback Cascade",
        id: 100,
        edname: "special_feedback_cascade_cooled",
        uuid: "3c153755-3d2c-4832-bb73-d6b3d0e99a71"
      },
      special_super_penetrator_cooled: {
        name: "Super Penetrator",
        id: 101,
        edname: "special_super_penetrator_cooled",
        uuid: "4bb4ec50-40fb-473d-abaf-4fc386aa889c"
      },
      special_plasma_slug_cooled: {
        name: "Plasma Slug",
        id: 102,
        edname: "special_plasma_slug_cooled",
        uuid: "58a7b1b6-57b9-40f2-9a5a-712a5388a5eb"
      },
      special_penetrator_munitions: {
        name: "Penetrator Munitions",
        id: 103,
        edname: "special_penetrator_munitions",
        uuid: "35578402-1bc7-4d19-828b-af31ebd79866"
      },
      special_deep_cut_payload: {
        name: "Penetrator Payload",
        id: 104,
        edname: "special_deep_cut_payload",
        uuid: "5d25c5bc-4b45-4119-bd87-71bfd0f85957"
      },
      special_mass_lock: {
        name: "Mass Lock Munition",
        id: 105,
        edname: "special_mass_lock",
        uuid: "9e8635af-4077-4d7a-98dd-5220c8722688"
      },
      special_shield_regenerative: {
        name: "Fast Charge",
        id: 106,
        edname: "special_shield_regenerative",
        uuid: "42c5e92d-ccab-435a-b2c6-fd268d39d6f5"
      },
      special_shield_resistive: {
        name: "Multi-weave",
        id: 107,
        edname: "special_shield_resistive",
        uuid: "dd46c8be-730c-4671-87fe-f98b181b66cf"
      },
      special_shield_health: {
        name: "Hi-Cap",
        id: 108,
        edname: "special_shield_health",
        uuid: "603c1ba6-45e6-4401-af56-639c3e7c9b79"
      },
      special_shield_efficient: {
        name: "Lo-draw",
        id: 109,
        edname: "special_shield_efficient",
        uuid: "66a39288-59d7-4cfb-914d-354a200c0210"
      },
      special_shield_thermic: {
        name: "Thermo Block",
        id: 110,
        edname: "special_shield_thermic",
        uuid: "c7636c6b-5849-4cad-bd8e-d99968d4014e"
      },
      special_shield_kinetic: {
        name: "Force Block",
        id: 111,
        edname: "special_shield_kinetic",
        uuid: "3f9e7ca8-7e07-46c4-ad06-cf3787352201"
      },
      special_shield_toughened: {
        name: "Double Braced",
        id: 112,
        edname: "special_shield_toughened",
        uuid: "d7d8433c-445c-4d8e-b4a4-3bd78cba9d15"
      },
      special_shield_lightweight: {
        name: "Stripped Down",
        id: 113,
        edname: "special_shield_lightweight",
        uuid: "91ff72db-51cf-428d-80a8-be96d6418c4b"
      },
      special_engine_cooled: {
        name: "Thermal Spread",
        id: 114,
        edname: "special_engine_cooled",
        uuid: "42ff1374-3ecb-4872-abfa-b39b495fb203"
      },
      special_engine_haulage: {
        name: "Drive Distributors",
        id: 115,
        edname: "special_engine_haulage",
        uuid: "bd3c1991-370e-4b9d-b8cd-d5dec3260647"
      },
      special_engine_overloaded: {
        name: "Drag Drives",
        id: 116,
        edname: "special_engine_overloaded",
        uuid: "68998b16-7b65-4f58-8bc0-6e0f2686c367"
      },
      special_engine_toughened: {
        name: "Double Braced",
        id: 117,
        edname: "special_engine_toughened",
        uuid: "41b04d96-0817-479b-92e5-2114de444170"
      },
      special_engine_lightweight: {
        name: "Stripped Down",
        id: 118,
        edname: "special_engine_lightweight",
        uuid: "dd77b197-412e-4ca1-88ed-0939c5c31a01"
      },
      special_fsd_fuelcapacity: {
        name: "Deep Charge",
        id: 119,
        edname: "special_fsd_fuelcapacity",
        uuid: "56f1e58d-2044-4a31-8b54-ad0f99dfd64e"
      },
      special_fsd_heavy: {
        name: "Mass Manager",
        id: 120,
        edname: "special_fsd_heavy",
        uuid: "4d7d30c3-970b-4c6e-a507-89ac7e6441bd"
      },
      special_fsd_toughened: {
        name: "Double Braced",
        id: 121,
        edname: "special_fsd_toughened",
        uuid: "14c7f016-5c32-4599-8a27-caa1733f92e3"
      },
      special_fsd_lightweight: {
        name: "Stripped Down",
        id: 122,
        edname: "special_fsd_lightweight",
        uuid: "6ab9d9d4-d488-4de8-9c1b-089a31f290a0"
      },
      special_fsd_cooled: {
        name: "Thermal Spread",
        id: 123,
        edname: "special_fsd_cooled",
        uuid: "60ab0728-c8cd-47c9-a357-8c8bfeeb7023"
      },
      special_powerplant_highcharge: {
        name: "Monstered",
        id: 124,
        edname: "special_powerplant_highcharge",
        uuid: "12a57a09-0e05-41a9-9824-14a3618e7a0f"
      },
      special_powerplant_cooled: {
        name: "Thermal Spread",
        id: 125,
        edname: "special_powerplant_cooled",
        uuid: "6cda2960-a05b-4dd1-978c-202d746e47bc"
      },
      special_powerplant_toughened: {
        name: "Double Braced",
        id: 126,
        edname: "special_powerplant_toughened",
        uuid: "1fddaba5-bc0b-492c-9caa-4a72a149532b"
      },
      special_powerplant_lightweight: {
        name: "Stripped Down",
        id: 127,
        edname: "special_powerplant_lightweight",
        uuid: "11b258eb-36d1-4cbc-be04-7fc426ef3121"
      },
      special_powerdistributor_capacity: {
        name: "Cluster Capacitors",
        id: 128,
        edname: "special_powerdistributor_capacity",
        uuid: "c4231886-f988-4a31-a749-2a58550f9e44"
      },
      special_powerdistributor_fast: {
        name: "Super Conduits",
        id: 129,
        edname: "special_powerdistributor_fast",
        uuid: "b5bb35a1-e851-4d37-8f26-8fe828f84c95"
      },
      special_powerdistributor_efficient: {
        name: "Flow Control",
        id: 130,
        edname: "special_powerdistributor_efficient",
        uuid: "c226afaf-ee7f-4809-a4e4-0797d4822a69"
      },
      special_powerdistributor_toughened: {
        name: "Double Braced",
        id: 131,
        edname: "special_powerdistributor_toughened",
        uuid: "14d36c9b-efd5-450b-8175-80287daecd78"
      },
      special_powerdistributor_lightweight: {
        name: "Stripped Down",
        id: 132,
        edname: "special_powerdistributor_lightweight",
        uuid: "ec53deaf-ece6-443f-9503-dd3dc5329e14"
      },
      special_shieldcell_gradual: {
        name: "Recycling Cell",
        id: 133,
        edname: "special_shieldcell_gradual",
        uuid: "c8aa2134-3153-47b8-a367-9c5dbb9c557d"
      },
      special_shieldcell_oversized: {
        name: "Boss Cells",
        id: 134,
        edname: "special_shieldcell_oversized",
        uuid: "87ed0cec-9624-4ecb-8ffb-cc941464e8d2"
      },
      special_shieldcell_efficient: {
        name: "Flow Control",
        id: 135,
        edname: "special_shieldcell_efficient",
        uuid: "1d2316b8-3ddb-4db4-b36f-2d3e0e8581b5"
      },
      special_shieldcell_toughened: {
        name: "Double Braced",
        id: 136,
        edname: "special_shieldcell_toughened",
        uuid: "beecd33b-b171-4a08-9d5a-459266bcb275"
      },
      special_shieldcell_lightweight: {
        name: "Stripped Down",
        id: 137,
        edname: "special_shieldcell_lightweight",
        uuid: "b92c2e2e-baa5-4ce9-bf60-05771d7dcbc1"
      },
      special_weapon_damage: {
        name: "Oversized",
        id: 138,
        edname: "special_weapon_damage",
        uuid: "ceb5c729-4565-4869-ade8-5ee897e8b410"
      },
      special_weapon_rateoffire: {
        name: "Multi-servos",
        id: 139,
        edname: "special_weapon_rateoffire",
        uuid: "fd62292f-f5ed-4728-bc8a-3ae215ced386"
      },
      special_weapon_efficient: {
        name: "Flow Control",
        id: 140,
        edname: "special_weapon_efficient",
        uuid: "d7ae7537-52ce-402a-b997-1cc463d8c7d0"
      },
      special_weapon_toughened: {
        name: "Double Braced",
        id: 141,
        edname: "special_weapon_toughened",
        uuid: "167892c7-c4bd-411e-af8a-5bb464beec29"
      },
      special_weapon_lightweight: {
        name: "Stripped Down",
        id: 142,
        edname: "special_weapon_lightweight",
        uuid: "dfc22aad-48b8-4f8d-af16-ec3b978fc8b6"
      },
      special_armour_thermic: {
        name: "Reflective Plating",
        id: 143,
        edname: "special_armour_thermic",
        uuid: "dfe731fd-b709-4bbb-989b-5190bba4aa0e"
      },
      special_armour_kinetic: {
        name: "Angled Plating",
        id: 144,
        edname: "special_armour_kinetic",
        uuid: "4803f4b3-f8ac-44a6-a6da-8d4c94aee048"
      },
      special_armour_explosive: {
        name: "Layered Plating",
        id: 145,
        edname: "special_armour_explosive",
        uuid: "2af2d71c-b511-49a0-a605-22cfce862a63"
      },
      special_armour_chunky: {
        name: "Deep Plating",
        id: 146,
        edname: "special_armour_chunky",
        uuid: "c4318e14-d50c-49ff-984f-bacae4aaa334"
      },
      special_hullreinforcement_thermic: {
        name: "Reflective Plating",
        id: 147,
        edname: "special_hullreinforcement_thermic",
        uuid: "6c88aa33-01db-4eda-928e-6ca8b9b1bc3d"
      },
      special_hullreinforcement_kinetic: {
        name: "Angled Plating",
        id: 148,
        edname: "special_hullreinforcement_kinetic",
        uuid: "e8631809-2915-4373-905c-8dcf3bda6921"
      },
      special_hullreinforcement_explosive: {
        name: "Layered Plating",
        id: 149,
        edname: "special_hullreinforcement_explosive",
        uuid: "cdd19fcc-74b4-463a-a8f1-2e9909da664f"
      },
      special_hullreinforcement_chunky: {
        name: "Deep Plating",
        id: 150,
        edname: "special_hullreinforcement_chunky",
        uuid: "b51706cc-d412-4559-8654-f812d2eb44b9"
      },
      special_shieldbooster_thermic: {
        name: "Thermo Block",
        id: 151,
        edname: "special_shieldbooster_thermic",
        uuid: "c3340df8-c6da-49c9-b236-8f1cc4209088"
      },
      special_shieldbooster_kinetic: {
        name: "Force Block",
        id: 152,
        edname: "special_shieldbooster_kinetic",
        uuid: "cb95d9b4-a945-491d-95ad-e230c0454cd9"
      },
      special_shieldbooster_explosive: {
        name: "Blast Block",
        id: 153,
        edname: "special_shieldbooster_explosive",
        uuid: "eb1c4a92-03ef-4263-8051-9ac91b2d43b2"
      },
      special_shieldbooster_efficient: {
        name: "Flow Control",
        id: 154,
        edname: "special_shieldbooster_efficient",
        uuid: "441e1d85-5174-4172-85ea-caee8d3c632d"
      },
      special_shieldbooster_toughened: {
        name: "Double Braced",
        id: 155,
        edname: "special_shieldbooster_toughened",
        uuid: "32cb80c0-bb11-49ea-ae21-4c94eb5f9195"
      },
      special_shieldbooster_chunky: {
        name: "Super Capacitors",
        id: 156,
        edname: "special_shieldbooster_chunky",
        uuid: "4197c308-a3df-442a-91c2-db856b4f57cf"
      }
    }
  }
};