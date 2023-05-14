import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import * as satellite from 'satellite.js';
import { Viewer, Globe, Clock, Entity, CzmlDataSource } from 'resium';
import { Cartesian3 } from 'cesium';
import Header from "@/components/header";
// Sample TLE
var tleLine1 = '1 25544U 98067A   19156.50900463  .00003075  00000-0  59442-4 0  9992',
  tleLine2 = '2 25544  51.6433  59.2583 0008217  16.4489 347.6017 15.51174618173442';

// Initialize a satellite record
var satrec = satellite.twoline2satrec(tleLine1, tleLine2);

// 現在時刻の衛星の位置を計算
const now = new Date();
const { position: positionEci } = satellite.propagate(satrec, now);

// 衛星位置の座標系を変換(ECI -> geodetic location)
const gstime = satellite.gstime(now); // GMST(グリニッジ恒星時)に変換
if (positionEci !== true && positionEci !== false) {
  const positionGd = satellite.eciToGeodetic(positionEci, gstime);
  // 計算結果
  console.log(positionGd.longitude); // 経度[rad]
  console.log(positionGd.latitude); // 緯度[rad]
  console.log(positionGd.height); // 高度[km]
}

/* // deleted logo credit with global css
.cesium-widget-credits{
  display:none !important;
} */

type Props = {}

const Cesium = dynamic(
  () => import('../components/Cesium'),
  { ssr: false }
)

const czml = [
  {
    "id": "Headquarters",
    "position": {
      "epoch": '2020-01-19T12:00:00Z',
      "cartographicDegrees": [
        // 経過時間, 経度, 緯度, 高度
        0.0, 1.0, 2.0, 3.0,
        60.0, 4.0, 5.0, 6.0,
        120.0, 7.0, 8.0, 9.0
      ]
    },
    "billboard": {
      "color": {
        "rgba": [
          0, 255, 255, 255
        ]
      },
    },
    "path": {
      "resolution": 120,
      "material": {
        "solidColor": {
          "color": {
            "rgba": [
              247,
              115,
              0,
              255
            ]
          }
        }

      }
    }
  }
]


function cesium_example({ }: Props) {
  // Viewer: バーチャル地球儀や背景の宇宙を表示するCesiumのベースのコンポーネント
  // Entity: 点をプロットするコンポーネント

  const aaaa = [{ "id": "document", "name": "CZML Points", "version": "1.0" }, {
    "id": "point1", "name": "Red point", "position": {
      "cartographicDegrees": [-75.59777, 40.03883, 1000]
    },
    "point": {
      "color": {
        "rgba": [255, 0, 0, 255]
      }
    }
  },
  {
    "id": "point2",
    "name": "Blue point",
    "position": {
      "cartographicDegrees": [-75.59777, 40.13883, 1000]
    },
    "point": {
      "color": {
        "rgba": [0, 0, 255, 255]
      }
    }
  }
  ]



  return (
    <>
      <Head>
        <style>{`
          @import url('/cesium/Widgets/widgets.css');
        `}</style>
      </Head>
      <Header />
      {/*    <Cesium /> */}
      <Viewer >
        <Globe enableLighting />
        {/* <Clock shouldAnimate /> */}
        {/*       <SateliteOrbital /> */}
        {/*      <Entity
          description="test"
          name="tokyo"
          point={{ pixelSize: 10 }}
          position={Cartesian3.fromDegrees(139.767052, 35.681167, 100)}
        /> */}
        <CzmlDataSource /* data={aaaa} */ />
      </Viewer>
    </>
  )
}

export default cesium_example