var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "entrance",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9999883526631024,
          "pitch": 0.14043107621669293,
          "rotation": 0,
          "target": "1-living"
        },
        {
          "yaw": -2.2380985554872392,
          "pitch": 0.19546614173530585,
          "rotation": 1.5707963267948966,
          "target": "6-walkaway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living",
      "name": "living",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7641807520322388,
          "pitch": 0.08935181409274762,
          "rotation": 0,
          "target": "3-dinning"
        },
        {
          "yaw": 0.8986991760593899,
          "pitch": 0.0558358233541405,
          "rotation": 1.5707963267948966,
          "target": "4-kitchen"
        },
        {
          "yaw": 1.2277456451706268,
          "pitch": 0.1461593943278814,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": -1.4667097971294183,
          "pitch": 0.23781177059994008,
          "rotation": 0,
          "target": "2-balcony"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-balcony",
      "name": "balcony",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5338942893919878,
          "pitch": 0.20734468340394407,
          "rotation": 0,
          "target": "1-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dinning",
      "name": "dinning",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.537673815296019,
          "pitch": 0.20640540820547315,
          "rotation": 0,
          "target": "4-kitchen"
        },
        {
          "yaw": -2.6050400246201466,
          "pitch": 0.14810440519605983,
          "rotation": 0,
          "target": "1-living"
        },
        {
          "yaw": -0.8929863734235184,
          "pitch": 0.2846862770601213,
          "rotation": 1.5707963267948966,
          "target": "6-walkaway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen",
      "name": "kitchen",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.010560895689149419,
          "pitch": 0.05275449844191549,
          "rotation": 0,
          "target": "5-pentry"
        },
        {
          "yaw": -1.5766088038010526,
          "pitch": 0.373915762285165,
          "rotation": 0,
          "target": "3-dinning"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-pentry",
      "name": "pentry",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5949419681448127,
          "pitch": 0.18650654582591386,
          "rotation": 0,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-walkaway",
      "name": "walkaway",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.00819184760340086,
          "pitch": 0.25275598158563817,
          "rotation": 0,
          "target": "9-mr-bed-room"
        },
        {
          "yaw": 0.9197246498208713,
          "pitch": 0.2912374227641905,
          "rotation": 1.5707963267948966,
          "target": "10-common-toilet"
        },
        {
          "yaw": -0.891326172305499,
          "pitch": 0.17833086292949574,
          "rotation": 0,
          "target": "8-common-2"
        },
        {
          "yaw": -2.3337166473647724,
          "pitch": 0.21772335819654387,
          "rotation": 0,
          "target": "7-common-1"
        },
        {
          "yaw": -3.0889177475750014,
          "pitch": 0.13411007611607317,
          "rotation": 1.5707963267948966,
          "target": "1-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-common-1",
      "name": "common 1",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8901773751381512,
          "pitch": 0.19598621178515963,
          "rotation": 0,
          "target": "6-walkaway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-common-2",
      "name": "common 2",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.878766616696506,
          "pitch": 0.1750917970394852,
          "rotation": 4.71238898038469,
          "target": "6-walkaway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-mr-bed-room",
      "name": "mr bed room",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4751699722284197,
          "pitch": 0.13783825379455195,
          "rotation": 0,
          "target": "11-mb-toilet-1"
        },
        {
          "yaw": 0.6344009429267974,
          "pitch": 0.11450664602235427,
          "rotation": 1.5707963267948966,
          "target": "6-walkaway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-common-toilet",
      "name": "common toilet",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7443509668316795,
          "pitch": 0.2839808200057181,
          "rotation": 0,
          "target": "6-walkaway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-mb-toilet-1",
      "name": "mb toilet (1)",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.705310313687411,
          "pitch": 0.0734673098028722,
          "rotation": 1.5707963267948966,
          "target": "9-mr-bed-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
