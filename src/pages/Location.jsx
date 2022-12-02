import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import Map from "../components/Map";

export function Location() {
  const [sewerList, setSewerList] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/sewer/sewerList");
      setSewerList(data);
      // console.log(data[0]["lat"]);
    })();
  }, []);

  return (
    <div>
      <Header />
      <Map data={sewerList} />
    </div>
  );
}
