/* eslint react/jsx-pascal-case: 0 */

import React from "react";
import "./ସଜବାଜ.css";
import ରିଆକ୍ଟଡ଼ମ from "react-dom";
import ନମସ୍କାର from "./ପୃଷ୍ଠାଖଣ୍ଡ/ନମସ୍କାର";
import ଗଣତିଜାଗା from "./ପୃଷ୍ଠାଖଣ୍ଡ/ଗଣତିଜାଗା";
import TransformerInterface from "./TransformerInterface";

const ପୃଷ୍ଠା = document;
const ରିଆକ୍ଟଡ଼ମ_ଦ୍ଵାରା_ଦେଖାଅ = ରିଆକ୍ଟଡ଼ମ.render;

function ଆପ() {
  return (
    <div className="App">
      <ନମସ୍କାର ନାମ="ଓଡ଼ିଶା" />
      <ଗଣତିଜାଗା />
      <TransformerInterface />
    </div>
  );
}

const ମୂଳ = ପୃଷ୍ଠା.getElementById("root");
ରିଆକ୍ଟଡ଼ମ_ଦ୍ଵାରା_ଦେଖାଅ(<ଆପ />, ମୂଳ);
