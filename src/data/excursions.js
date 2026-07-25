export default [
  {
    id: 0,
    title: 'Корпус А',
    image: '/images.jpg',
  },
  {
    id: 1,
    title: 'Корпус Б',
    image: '/images.jpg',
    "scenes": [
      {
        "id": "0--",
        "name": "Лаборатория полиолефинов",
        "levels": [
          {
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
          },
          {
            "tileSize": 512,
            "size": 512
          },
          {
            "tileSize": 512,
            "size": 1024
          },
          {
            "tileSize": 512,
            "size": 2048
          }
        ],
        "faceSize": 2048,
        "initialViewParameters": {
          "yaw": 0, // Рыскание
          "pitch": 0, // Тангаж
          "fov": 1.410493209072389 // Гор.ПЗ
        },
        "linkHotspots": [
          {
            "yaw": 0.030253988991731262,
            "pitch": 0.41900431473314725,
            "rotation": 5.497787143782138,
            "target": "4--"
          }
        ],
        "infoHotspots": [],
        viewLimits: {
          yaw: {
            min: -90,
            max: 90
          },

          pitch: {
            min: -35,
            max: 35
          }
        }
      },
      {
        "id": "1--",
        "name": "Лаборатория полиолефинов",
        "levels": [
          {
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
          },
          {
            "tileSize": 512,
            "size": 512
          },
          {
            "tileSize": 512,
            "size": 1024
          },
          {
            "tileSize": 512,
            "size": 2048
          }
        ],
        "faceSize": 2000,
        "initialViewParameters": {
          "pitch": 0,
          "yaw": 0,
          "fov": 1.5707963267948966
        },
        "linkHotspots": [
          {
            "yaw": -0.2518170051156474,
            "pitch": 0.10272461091286189,
            "rotation": 10.995574287564278,
            "target": "4--"
          },
          {
            "yaw": -0.04121575847779013,
            "pitch": -0.29972259868335094,
            "rotation": 6.283185307179586,
            "target": "2--"
          },
          {
            "yaw": 0.248107705071547,
            "pitch": 0.025693533227403975,
            "rotation": 0.7853981633974483,
            "target": "6--224"
          }
        ],
        "infoHotspots": [
          {
            "yaw": -3.138336567801188,
            "pitch": -0.026735006972653963,
            "title": "Title",
            "text": "Text"
          },
          {
            "yaw": 2.9155719751524813,
            "pitch": -0.04123747096612007,
            "title": "Title",
            "text": "Text"
          },
          {
            "yaw": 1.7845587381797934,
            "pitch": 0.004079313853477373,
            "title": "Title",
            "text": "Text"
          }
        ]
      },
      {
        "id": "2--",
        "name": "Актовый зал",
        "levels": [
          {
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
          },
          {
            "tileSize": 512,
            "size": 512
          },
          {
            "tileSize": 512,
            "size": 1024
          },
          {
            "tileSize": 512,
            "size": 2048
          }
        ],
        "faceSize": 2000,
        "initialViewParameters": {
          "pitch": 0,
          "yaw": 0,
          "fov": 1.5707963267948966
        },
        "linkHotspots": [
          {
            "yaw": -1.8379218776118922,
            "pitch": 0.008827042443341426,
            "rotation": 8.63937979737193,
            "target": "7-"
          },
          {
            "yaw": -1.996849578341454,
            "pitch": 0.23265038296285567,
            "rotation": 3.141592653589793,
            "target": "1--"
          }
        ],
        "infoHotspots": [
          {
            "yaw": -0.3977458751227907,
            "pitch": 0.31614177201226923,
            "title": "Вечер \"Короли и дамы\" Профбюро ИУАИТ, 2026",
            "text": "<img data-cke-saved-src=\"https://sun9-78.vkuserphoto.ru/s/v1/ig2/1QR3n6Ch1q0PzGEizq-2PxeWnp8wnLaDJc927fFszP3IW68PhL8Nb9-xXUp1ISwXvhdTUV3JLRXtt-UW0nmJP-OE.jpg?quality=95&amp;as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1080x810,1280x960,1440x1080,2560x1920&amp;from=bu&amp;cs=2560x0\" src=\"https://sun9-78.vkuserphoto.ru/s/v1/ig2/1QR3n6Ch1q0PzGEizq-2PxeWnp8wnLaDJc927fFszP3IW68PhL8Nb9-xXUp1ISwXvhdTUV3JLRXtt-UW0nmJP-OE.jpg?quality=95&amp;as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1080x810,1280x960,1440x1080,2560x1920&amp;from=bu&amp;cs=2560x0\" style=\"cursor: default; color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; height: 135px; width: 180px;\"><div>Фото:&nbsp;Диана Кайбышева&nbsp;</div>"
          },
          {
            "yaw": 0.6763241794244674,
            "pitch": 0.18249380919360192,
            "title": "Квест \"Точка невозврата\" ИУАИТ, 2026",
            "text": "<div><img data-cke-saved-src=\"https://sun9-78.vkuserphoto.ru/s/v1/ig2/0jAja3tKCB0zGljfNL7pBG6U7uLnaUJQHt7kuDJLyUrFyBdjp_tAxhzJTiIId3N1vACuL2hLWVo9mm3gAYreBxDP.jpg?quality=95&amp;as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1080x810,1280x960,1440x1080,2560x1920&amp;from=bu&amp;cs=2560x0\" src=\"https://sun9-78.vkuserphoto.ru/s/v1/ig2/0jAja3tKCB0zGljfNL7pBG6U7uLnaUJQHt7kuDJLyUrFyBdjp_tAxhzJTiIId3N1vACuL2hLWVo9mm3gAYreBxDP.jpg?quality=95&amp;as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1080x810,1280x960,1440x1080,2560x1920&amp;from=bu&amp;cs=2560x0\" style=\"cursor: default; color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; height: 135px; width: 180px;\"></div>Фото:&nbsp;Кристина Никитина"
          }
        ]
      },
      {
        "id": "3--103",
        "name": "О-103",
        "levels": [
          {
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
          },
          {
            "tileSize": 512,
            "size": 512
          },
          {
            "tileSize": 512,
            "size": 1024
          },
          {
            "tileSize": 512,
            "size": 2048
          }
        ],
        "faceSize": 2000,
        "initialViewParameters": {
          "pitch": 0,
          "yaw": 0,
          "fov": 1.5707963267948966
        },
        "linkHotspots": [
          {
            "yaw": -1.992613900581837,
            "pitch": -0.05700443362652585,
            "rotation": 7.0685834705770345,
            "target": "9---"
          },
          {
            "yaw": -1.9923748984768892,
            "pitch": 0.148408504976409,
            "rotation": 1.5707963267948966,
            "target": "5--111"
          }
        ],
        "infoHotspots": []
      },
      {
        "id": "4--",
        "name": "Лаборатория полиолефинов",
        "levels": [
          {
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
          },
          {
            "tileSize": 512,
            "size": 512
          },
          {
            "tileSize": 512,
            "size": 1024
          },
          {
            "tileSize": 512,
            "size": 2048
          }
        ],
        "faceSize": 2048,
        "initialViewParameters": {
          "pitch": 0,
          "yaw": 0,
          "fov": 1.5707963267948966
        },
        "linkHotspots": [
          {
            "yaw": 3.0868505694555504,
            "pitch": 0.3164229225683002,
            "rotation": 0.7853981633974483,
            "target": "0--"
          },
          {
            "yaw": -0.22583321966497572,
            "pitch": -0.4120419481041928,
            "rotation": 0.7853981633974483,
            "target": "2--"
          },
          {
            "yaw": -0.19857167482266824,
            "pitch": 0.0031724926898153427,
            "rotation": 7.853981633974483,
            "target": "1--"
          },
          {
            "yaw": -0.8229435109954721,
            "pitch": 0.05184116934493055,
            "rotation": 5.497787143782138,
            "target": "9---"
          }
        ],
        "infoHotspots": []
      },
      {
        "id": "5--111",
        "name": "О-111",
        "levels": [
          {
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
          },
          {
            "tileSize": 512,
            "size": 512
          },
          {
            "tileSize": 512,
            "size": 1024
          },
          {
            "tileSize": 512,
            "size": 2048
          }
        ],
        "faceSize": 2048,
        "initialViewParameters": {
          "pitch": 0,
          "yaw": 0,
          "fov": 1.5707963267948966
        },
        "linkHotspots": [
          {
            "yaw": -2.2833807145387333,
            "pitch": 0.22939058969298998,
            "rotation": 7.853981633974483,
            "target": "3--103"
          },
          {
            "yaw": -2.3447874873296097,
            "pitch": -0.1669510407184518,
            "rotation": 0.7853981633974483,
            "target": "9---"
          }
        ],
        "infoHotspots": []
      },
      {
        "id": "6--224",
        "name": "О-224",
        "levels": [
          {
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
          },
          {
            "tileSize": 512,
            "size": 512
          },
          {
            "tileSize": 512,
            "size": 1024
          },
          {
            "tileSize": 512,
            "size": 2048
          }
        ],
        "faceSize": 2000,
        "initialViewParameters": {
          "pitch": 0,
          "yaw": 0,
          "fov": 1.5707963267948966
        },
        "linkHotspots": [
          {
            "yaw": 1.8531190841108272,
            "pitch": 0.09392245159025592,
            "rotation": 0.7853981633974483,
            "target": "7-"
          },
          {
            "yaw": 1.717149213483773,
            "pitch": 0.05744385036277322,
            "rotation": 0,
            "target": "2--"
          },
          {
            "yaw": 1.861568440509604,
            "pitch": 0.27523915427870804,
            "rotation": 2.356194490192345,
            "target": "1--"
          }
        ],
        "infoHotspots": []
      },
      {
        "id": "7-",
        "name": "Библиотека",
        "levels": [
          {
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
          },
          {
            "tileSize": 512,
            "size": 512
          },
          {
            "tileSize": 512,
            "size": 1024
          },
          {
            "tileSize": 512,
            "size": 2048
          }
        ],
        "faceSize": 1750,
        "initialViewParameters": {
          "pitch": 0,
          "yaw": 0,
          "fov": 1.5707963267948966
        },
        "linkHotspots": [
          {
            "yaw": -1.834717133990564,
            "pitch": 0.49735291151308125,
            "rotation": 11.780972450961727,
            "target": "1--"
          },
          {
            "yaw": 0.44848413922947117,
            "pitch": 0.22855010720478752,
            "rotation": 2.356194490192345,
            "target": "8---"
          }
        ],
        "infoHotspots": []
      },
      {
        "id": "8---",
        "name": "Б читальный зал",
        "levels": [
          {
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
          },
          {
            "tileSize": 512,
            "size": 512
          },
          {
            "tileSize": 512,
            "size": 1024
          },
          {
            "tileSize": 512,
            "size": 2048
          }
        ],
        "faceSize": 1500,
        "initialViewParameters": {
          "pitch": 0,
          "yaw": 0,
          "fov": 1.5707963267948966
        },
        "linkHotspots": [
          {
            "yaw": -2.13088747829711,
            "pitch": 0.27998400568901616,
            "rotation": 0,
            "target": "7-"
          },
          {
            "yaw": 1.4998154151475056,
            "pitch": -0.1412641922165747,
            "rotation": 0,
            "target": "2--"
          },
          {
            "yaw": 1.3899571208541701,
            "pitch": -0.02219700372251765,
            "rotation": 4.71238898038469,
            "target": "6--224"
          },
          {
            "yaw": 1.551728975590767,
            "pitch": 0.11435772981173642,
            "rotation": 8.63937979737193,
            "target": "4--"
          }
        ],
        "infoHotspots": []
      },
      {
        "id": "9---",
        "name": "Лаборатория АБАК ПЛК",
        "levels": [
          {
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
          },
          {
            "tileSize": 512,
            "size": 512
          },
          {
            "tileSize": 512,
            "size": 1024
          },
          {
            "tileSize": 512,
            "size": 2048
          }
        ],
        "faceSize": 1917.5,
        "initialViewParameters": {
          "pitch": 0,
          "yaw": 0,
          "fov": 1.5707963267948966
        },
        "linkHotspots": [
          {
            "yaw": 1.9742970635897716,
            "pitch": 0.00604968850043619,
            "rotation": 1.5707963267948966,
            "target": "7-"
          },
          {
            "yaw": 1.9819468118648764,
            "pitch": 0.5004936187589912,
            "rotation": 2.356194490192345,
            "target": "5--111"
          },
          {
            "yaw": 1.9664099849205403,
            "pitch": 0.18651215153687062,
            "rotation": 8.63937979737193,
            "target": "1--"
          }
        ],
        "infoHotspots": []
      }
    ],
  },
  {
    id: 2,
    title: 'Корпус Д',
    image: '/images.jpg',
  },
  {
    id: 3,
    title: 'Мирас',
    image: '/images.jpg',
  },
  {
    id: 4,
    title: 'ДАС 2',
    image: '/images.jpg',
  },
  {
    id: 5,
    title: 'ДАС 1',
    image: '/images.jpg',
  }
]