"use client";

import { useEffect, useState } from "react";
import { EnrollForm } from "../masterclass/enroll-form";
import {
  EARLY_PRICE,
  isEarlyPriceAt,
  REGULAR_PRICE,
} from "./campaign";

function useCurrentPrice() {
  const [isEarly, setIsEarly] = useState(true);

  useEffect(() => {
    const updatePrice = () => setIsEarly(isEarlyPriceAt(Date.now()));
    updatePrice();
    const interval = window.setInterval(updatePrice, 30_000);

    return () => window.clearInterval(interval);
  }, []);

  return isEarly ? EARLY_PRICE : REGULAR_PRICE;
}

export function HristinaPriceText({ format = "display" }: { format?: "display" | "amount" }) {
  const price = useCurrentPrice();
  return <>{format === "display" ? price.display : price.amount}</>;
}

export function HristinaEnrollmentOffer() {
  const price = useCurrentPrice();

  return (
    <>
      <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", maxWidth: "440px", margin: "0 auto 32px", lineHeight: 1.6 }}>
        4-седмичен курс на живо · старт 24 юли · {price.display} еднократно
      </p>
      <div className="flex justify-center">
        <EnrollForm
          product={price.product}
          cardOnly
          variant="dark-bordeaux"
          submitLabel={`Запиши се за ${price.amount} EUR →`}
        />
      </div>
    </>
  );
}
