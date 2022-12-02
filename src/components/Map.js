/* global kakao*/
import "../css/Map.css";
import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";

const { kakao } = window;

let container;
let options;
let map2;
let marker;

function Map({ data }) {
  const [selected, setSelected] = useState(0);
  const [sewerInfo, setSewerInfo] = useState({});

  const make = () => {
    // 지도 생성
    container = document.getElementById("map");
    options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    map2 = new kakao.maps.Map(container, options);
  };

  const center = (center1, center2, con) => {
    //지도의 센터를 바꿔주는
    let position = new kakao.maps.LatLng(center1, center2);
    let moveLatLon = new kakao.maps.LatLng(center1, center2);
    map2.setCenter(moveLatLon);
    marker = new kakao.maps.Marker({
      map: map2,
      position: position,
    });
  };

  useEffect(() => {
    make();
  }, []);

  return (
    <div className="mapcenter">
      <div className="mapspace">
        <div
          id="map"
          className="map"
          style={{
            width: "500px",
            height: "300px",
          }}
        ></div>
        <div className="maplist">
          {data.map((it, idx) => {
            if (idx === selected) {
              center(it.lat, it.lon, it.sewerId);
            }
            return (
              <div className="pcenter">
              <p
                style={{ color: selected === idx ? "red" : "white" }}
                key={idx}
                onClick={() => {
                  setSelected(idx);
                }}
              >
                하수구 {it.sewerId}
              </p>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div>
          {
            <h1 className="div-door">
              {data[selected]?.isOpen ? "문 열림" : "문 닫힘"}
            </h1>
          }
        </div>
        <div>
          {
            <h1 className="div-percent">
              쓰레기통 {data[selected]?.garbage?.garbageAmount}% 참
            </h1>
          }
        </div>
      </div>
    </div>
  );
}

export default Map;
