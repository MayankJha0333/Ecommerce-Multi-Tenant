import { Truck } from "lucide-react";
import React from "react";
import HighlightInfoCard from "../ui/HighlightInfoCard";
import Security from "@/assets/security.svg";
import Return from "@/assets/return.svg";
import Shipping from "@/assets/shipping.svg";
import Support from "@/assets/support.svg";
import Image from "next/image";

const StoreHighlights = () => {
  return (
    <div className="flex items-center gap-4 justify-evenly pt-8 pb-4 shadow-xs">
      <HighlightInfoCard
        title="Free Shipping"
        description="When you spend $100+"
        icon={<Image src={Shipping} alt="Shipping" width={40} height={40} />}
      />
      <HighlightInfoCard
        title="FREE RETURNS"
        description="Within 14 days"
        icon={<Image src={Return} alt="Return" width={40} height={40} />}
      />
      <HighlightInfoCard
        title="SECURED PAYMENTS"
        description="We are officially registered"
        icon={<Image src={Security} alt="Security" width={40} height={40} />}
      />
      <HighlightInfoCard
        title="SUPPORT 24/7"
        description="Ready to help our clients"
        icon={<Image src={Support} alt="Support" width={40} height={40} />}
      />
    </div>
  );
};

export default StoreHighlights;
