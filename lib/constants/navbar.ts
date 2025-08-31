import { NavbarItem } from "@/lib/interface";

export const FASHION_NAVBAR: NavbarItem[] = [
  {
    key: "home",
    label: "Home",
    path: "/",
    hasArrow: false,
  },
  {
    key: "women",
    label: "Women",
    path: "/women",
    hasArrow: true,
    children: [
      {
        key: "women-clothing",
        label: "Clothing",
        hasArrow: true,
        path: "/women/clothing",
        children: [
          {
            key: "women-clothing-tops",
            label: "Tops",
            path: "/women/clothing/tops",
          },
          {
            key: "women-clothing-bottoms",
            label: "Bottoms",
            path: "/women/clothing/bottoms",
          },
          {
            key: "women-clothing-dresses",
            label: "Dresses",
            path: "/women/clothing/dresses",
          },
          {
            key: "women-clothing-accessories",
            label: "Accessories",
            path: "/women/clothing/accessories",
          },
        ],
      },
      {
        key: "women-footwear",
        label: "Footwear",
        path: "/women/footwear",
      },
      {
        key: "women-accessories",
        label: "Accessories",
        path: "/women/accessories",
      },
      {
        key: "women-beauty",
        label: "Beauty",
        path: "/women/beauty",
      },
      {
        key: "women-jewellery",
        label: "Jewellery",
        path: "/women/jewellery",
      },
    ],
  },
  {
    key: "men",
    label: "Men",
    path: "/men",
    hasArrow: true,
    isMegaMenu: true,
    megaMenuData: {
      dealOfTheDay: {
        title: "TODAY ONLY",
        titleColor: "text-white",
        subtitle: "Deal Of The Day",
        subtitleColor: "text-white",
        buttonText: "VIEW ALL PRODUCTS",
        imageUrl:
          "https://seiko-4.myshopify.com/cdn/shop/files/category-04.png?v=1669380333&width=420",
      },
    },
    children: [
      {
        key: "popular",
        label: "POPULAR",
        path: "/men/popular",
        children: [
          {
            key: "arm-warmers",
            label: "Arm Warmers & Sleeves",
            path: "/men/arm-warmers",
          },
          {
            key: "balaclavas",
            label: "Balaclavas",
            path: "/men/balaclavas",
          },
          {
            key: "bandanas",
            label: "Bandanas & Headties",
            path: "/men/bandanas",
          },
          {
            key: "bridal-accessories",
            label: "Bridal Accessories",
            path: "/men/bridal-accessories",
          },
          {
            key: "earmuffs",
            label: "Earmuffs",
            path: "/men/earmuffs",
          },
        ],
      },
      {
        key: "on-sale",
        label: "ON SALE",
        path: "/men/on-sale",
        children: [
          {
            key: "hand-muffs",
            label: "Hand Muffs",
            path: "/men/hand-muffs",
          },
          {
            key: "hats",
            label: "Hats",
            path: "/men/hats",
          },
          {
            key: "sunglasses",
            label: "Sunglasses",
            path: "/men/sunglasses",
          },
          {
            key: "suspenders",
            label: "Suspenders",
            path: "/men/suspenders",
          },
          {
            key: "scarves-shawls",
            label: "Scarves & Shawls",
            path: "/men/scarves-shawls",
          },
        ],
      },
      {
        key: "explore",
        label: "EXPLORE",
        path: "/men/explore",
        children: [
          {
            key: "latest-arrivals",
            label: "Latest Arrivals",
            path: "/men/latest-arrivals",
          },
          {
            key: "our-sales",
            label: "Our sales",
            path: "/men/our-sales",
          },
          {
            key: "bestsellers",
            label: "Bestsellers",
            path: "/men/bestsellers",
          },
          {
            key: "not-expensive",
            label: "Not expensive",
            path: "/men/not-expensive",
          },
          {
            key: "expensive",
            label: "Expensive",
            path: "/men/expensive",
          },
        ],
      },
    ],
  },
  {
    key: "sale",
    label: "Sale",
    path: "/sale",
    hasArrow: false,
  },
  {
    key: "footwear",
    label: "Footwear",
    path: "/footwear",
    hasArrow: false,
  },
  {
    key: "buy-lumia",
    label: "Buy Lumia",
    path: "/buy-lumia",
    hasArrow: false,
  },
];

// 2. Beauty Ecommerce Navbar
export const BEAUTY_NAVBAR: NavbarItem[] = [
  {
    key: "home",
    label: "Home",
    path: "/",
    hasArrow: false,
  },
  {
    key: "makeup",
    label: "Makeup",
    path: "/makeup",
    hasArrow: true,
    children: [
      {
        key: "makeup-face",
        label: "Face",
        path: "/makeup/face",
      },
      {
        key: "makeup-eyes",
        label: "Eyes",
        path: "/makeup/eyes",
      },
      {
        key: "makeup-lips",
        label: "Lips",
        path: "/makeup/lips",
      },
      {
        key: "makeup-nails",
        label: "Nails",
        path: "/makeup/nails",
      },
    ],
  },
  {
    key: "skincare",
    label: "Skincare",
    path: "/skincare",
    hasArrow: true,
    children: [
      {
        key: "skincare-cleansers",
        label: "Cleansers",
        path: "/skincare/cleansers",
      },
      {
        key: "skincare-moisturizers",
        label: "Moisturizers",
        path: "/skincare/moisturizers",
      },
      {
        key: "skincare-serums",
        label: "Serums",
        path: "/skincare/serums",
      },
      {
        key: "skincare-masks",
        label: "Masks",
        path: "/skincare/masks",
      },
    ],
  },
  {
    key: "haircare",
    label: "Hair Care",
    path: "/haircare",
    hasArrow: true,
  },
  {
    key: "fragrance",
    label: "Fragrance",
    path: "/fragrance",
    hasArrow: true,
  },
  {
    key: "tools",
    label: "Tools & Brushes",
    path: "/tools",
    hasArrow: true,
  },
  {
    key: "wellness",
    label: "Wellness",
    path: "/wellness",
    hasArrow: true,
  },
  {
    key: "brands",
    label: "Brands",
    path: "/brands",
    hasArrow: true,
  },
  {
    key: "offers",
    label: "Special Offers",
    path: "/offers",
    hasArrow: false,
  },
];

// 3. Electronics Ecommerce Navbar
export const ELECTRONICS_NAVBAR: NavbarItem[] = [
  {
    key: "home",
    label: "Home",
    path: "/",
    hasArrow: false,
  },
  {
    key: "smartphones",
    label: "Smartphones",
    path: "/smartphones",
    hasArrow: true,
  },
  {
    key: "laptops",
    label: "Laptops & Computers",
    path: "/laptops",
    hasArrow: true,
  },
  {
    key: "tablets",
    label: "Tablets",
    path: "/tablets",
    hasArrow: true,
  },
  {
    key: "audio",
    label: "Audio & Headphones",
    path: "/audio",
    hasArrow: true,
  },
  {
    key: "gaming",
    label: "Gaming",
    path: "/gaming",
    hasArrow: true,
  },
  {
    key: "smart-home",
    label: "Smart Home",
    path: "/smart-home",
    hasArrow: true,
  },
  {
    key: "accessories",
    label: "Accessories",
    path: "/accessories",
    hasArrow: true,
  },
  {
    key: "deals",
    label: "Deals",
    path: "/deals",
    hasArrow: false,
  },
];

// 4. Furniture Ecommerce Navbar
export const FURNITURE_NAVBAR: NavbarItem[] = [
  {
    key: "home",
    label: "Home",
    path: "/",
    hasArrow: false,
  },
  {
    key: "living-room",
    label: "Living Room",
    path: "/living-room",
    hasArrow: true,
  },
  {
    key: "bedroom",
    label: "Bedroom",
    path: "/bedroom",
    hasArrow: true,
  },
  {
    key: "dining",
    label: "Dining Room",
    path: "/dining",
    hasArrow: true,
  },
  {
    key: "office",
    label: "Office",
    path: "/office",
    hasArrow: true,
  },
  {
    key: "outdoor",
    label: "Outdoor",
    path: "/outdoor",
    hasArrow: true,
  },
  {
    key: "storage",
    label: "Storage",
    path: "/storage",
    hasArrow: true,
  },
  {
    key: "decor",
    label: "Home Decor",
    path: "/decor",
    hasArrow: true,
  },
  {
    key: "mattresses",
    label: "Mattresses",
    path: "/mattresses",
    hasArrow: true,
  },
  {
    key: "clearance",
    label: "Clearance",
    path: "/clearance",
    hasArrow: false,
  },
];
