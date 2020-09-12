/* eslint react/jsx-pascal-case: 0 */
import React, { useState as ସ୍ଥିତି_ବ୍ୟବହାରକର } from "react";
import "./ସଜବାଜ.css";
import transformer from "./transformer";

export default function TransformInterface() {
  const [En, setEN] = ସ୍ଥିତି_ବ୍ୟବହାରକର("ଆମଦାନୀକର React ରୁ ");
  const [Or, setOr] = ସ୍ଥିତି_ବ୍ୟବହାରକର("");

  function handleEnChange(event) {
    setEN(event.target.value);
  }
  function handleOrChange(event) {
    setOr(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("An essay was submitted for transformation: " + En);
    setOr(transformer(En));
  }

  return (
    <form onSubmit={handleSubmit} className="transformForm">
      <label>
        ଓଡ଼ିଆ ରିଆକ୍ଟ କୋଡ଼:
        <textarea value={En} onChange={handleEnChange} />
      </label>
      <input type="submit" value="ଇଂରାଜୀରେ ତିଆରି କରନ୍ତୁ" />
      <label>
        ଇଂରାଜୀରେ ରିଆକ୍ଟ କୋଡ଼ :
        <textarea value={Or} onChange={handleOrChange} />
      </label>
    </form>
  );
}
