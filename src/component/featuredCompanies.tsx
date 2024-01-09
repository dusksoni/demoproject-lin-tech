import Image from "next/image";
import React, { useEffect, useState } from "react";

interface FeaturedProps {
  toggle: boolean;
}

interface CompanyData {
  image: string;
}

const schoolData = [
  {
    image:
      "https://framerusercontent.com/images/lYfizHQxxgYcMH94CWcOKvhNMc.png",
  },
  {
    image:
      "https://framerusercontent.com/images/NbvrRM2jG2vn7FR67ySu891UrE.png",
  },
  {
    image: "https://framerusercontent.com/images/W6s1vtdWj0kveRUmvonltDF30.png",
  },
  {
    image: "https://framerusercontent.com/images/uuOUGASTZkPeotrtLmI2EAdY8.png",
  },
  {
    image:
      "https://framerusercontent.com/images/weLIIGExpyepXyVPPhqUlPTo0o.png",
  },
  {
    image:
      "https://framerusercontent.com/images/93ROemqkpoJhldILscZYKPx5hFU.png",
  },
  {
    image:
      "https://framerusercontent.com/images/aDyiO2pyDYsh0Hm8lJuOVh6qB5M.png",
  },
  {
    image:
      "https://framerusercontent.com/images/qrly5F4UBJ4CG0RwlZYUiMJFzm8.png",
  },
  {
    image:
      "https://framerusercontent.com/images/fbcT5X4vGvAd8GdcPOTXGxu5tg.png",
  },
  {
    image:
      "https://framerusercontent.com/images/4PRMlXnxK0iXgCxfPZ1EHMpJGG0.png",
  },
  {
    image: "https://framerusercontent.com/images/l3QJ12zCVk3rdyr1NUGz5mCNM.png",
  },
  {
    image:
      "https://framerusercontent.com/images/Y61euZr6Fbcr3HyngWrkca1ZNs.png",
  },
  {
    image:
      "https://framerusercontent.com/images/BpFQtyOBkR7jlvPItWqElsLceJI.png",
  },
];
const companyData = [
  {
    image: "https://framerusercontent.com/images/WlbkaVKS7GAbfCMnBM6ZrtM0w.png",
  },
  {
    image:
      "https://framerusercontent.com/images/DhH0mxbMcSV1TJUkTeCvSRhGlZo.png?scale-down-to=512",
  },
  {
    image:
      "https://framerusercontent.com/images/bsSoYe2i52l0Oi3oBUPcpapA.png?scale-down-to=512",
  },
  {
    image: "https://framerusercontent.com/images/uuOUGASTZkPeotrtLmI2EAdY8.png",
  },
  {
    image:
      "https://framerusercontent.com/images/rWi41M4DFo97RfiOMAl069bbnQ.png?scale-down-to=512",
  },
  {
    image:
      "https://framerusercontent.com/images/6H48wR4xi4R6U9GKb6pQi2BCRkc.png?scale-down-to=512",
  },
  {
    image:
      "https://framerusercontent.com/images/q72bmNJ3UKVEL2I7IyPJkaNodzo.png?scale-down-to=512",
  },
  {
    image:
      "https://framerusercontent.com/images/9bWUomC69CddTCc197jiuz6VnCs.png?scale-down-to=512",
  },
  {
    image:
      "https://framerusercontent.com/images/r9GWeEI4TthkaWiMWK1O78dv1yA.png?scale-down-to=512",
  },
  {
    image:
      "https://framerusercontent.com/images/itBjtU5vcTZ5BavfEddn0b8VYU.png?scale-down-to=512",
  },
];

const FeaturedCompanies: React.FC<FeaturedProps> = ({ toggle }) => {
  const [data, setData] = useState<CompanyData[]>([]);

  useEffect(() => {
    if (toggle) {
      // Handle the case when toggle is true
      setData(schoolData);
    } else {
      // Handle the case when toggle is false
      setData(companyData);
    }
  }, [toggle]);

  return (
    <div className="sky relative">
      <div className="stars"></div>
      <div className="">
        <div className="lg:py-28 lg:p-20 p-4">
          <div className="lg:text-7xl text-2xl mb-20 text-center">
            {toggle ? "Featured Schools" : "Featured Companies"}
          </div>
          <div className="grid grid-cols-6 gap-10 w-[80%] m-auto">
            {data.map((item, index) => (
              <div key={index} className=" col-span-3 lg:col-span-1">
                <Image
                  src={item.image}
                  alt=""
                  height={100}
                  width={170}
                  sizes="167px"
                  loading="lazy"
                />
              </div>
            ))}
            <div className="text-[#ffffff80] m-auto col-span-3 lg:col-span-1">+ many more</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCompanies;
