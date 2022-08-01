import React from "react";

import AcountDetails from "./AcountDetails";
import History from "./History";

export default function MyAcount() {
  return (
    <div className='text-center'>
      <History />
      <AcountDetails />
    </div>
  );
}
