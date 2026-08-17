"use client";

import { useEffect, useState } from "react";
import { EnrollForm } from "@/app/masterclass/enroll-form";
import {
  EARLY_PRICE,
  isEarlyPriceAt,
  REGULAR_PRICE,
} from "./campaign";

function useCurrentOffer() {
  const [isEarly, setIsEarly] = useState(true);

  useEffect(() => {
    const updatePrice = () => setIsEarly(isEarlyPriceAt(Date.now()));
    updatePrice();
    const interval = window.setInterval(updatePrice, 30_000);

    return () => window.clearInterval(interval);
  }, []);

  return isEarly ? EARLY_PRICE : REGULAR_PRICE;
}

export function ZhivaVol2PriceText() {
  const offer = useCurrentOffer();
  return <>{offer.display}</>;
}

export function ZhivaVol2PriceNote() {
  const offer = useCurrentOffer();

  return (
    <>
      {offer.product === EARLY_PRICE.product
        ? "Ранна цена до 21 август включително · след това 97 €"
        : "Редовна цена след 21 август"}
    </>
  );
}

export function ZhivaVol2EnrollForm() {
  const offer = useCurrentOffer();

  return (
    <EnrollForm
      product={offer.product}
      cardOnly
      variant="light-gold"
      submitLabel={`Искам да се включа · ${offer.display}`}
    />
  );
}
