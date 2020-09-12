import React, { useState as ସ୍ଥିତି_ବ୍ୟବହାରକର } from "react";

export default function ଗଣତିଜାଗା(ଗୁଣାବଳି) {
  const [ଗଣତି, ଗଣତି_ସ୍ଥିରକର] = ସ୍ଥିତି_ବ୍ୟବହାରକର(1);

  function ଯୁକ୍ତ_ବଟନ_କ୍ଲିକହେଲା() {
    ଗଣତି_ସ୍ଥିରକର((ଗଣତି) => ଗଣତି + 1);
  }
  function ବିଯୁକ୍ତ_ବଟନ_କ୍ଲିକହେଲା() {
    ଗଣତି_ସ୍ଥିରକର((ଗଣତି) => ଗଣତି - 1);
  }
  return (
    <div>
      <h2>ଗଣତି ଉପଖଣ୍ଡ </h2>
      <input type="button" onClick={ବିଯୁକ୍ତ_ବଟନ_କ୍ଲିକହେଲା} value="-" />
      ଗଣତି : {ଗଣତି}
      <input type="button" onClick={ଯୁକ୍ତ_ବଟନ_କ୍ଲିକହେଲା} value="+" />
    </div>
  );
}
