export interface FortniteImageSet {
  smallIcon?: string;
  icon?: string;
  featured?: string;
  bean: Array<{
    large: string;
    small: string;
  }>;
  other?: Record<string, string>;
}

export interface FortniteValue {
  value: string;
  displayValue: string;
  backendValue: string;
}

export interface BrItem {
  id: string;
  name: string;
  description: string;
  type: FortniteValue;
  rarity: FortniteValue;
  series?: {
    value: string;
    image: string;
  };
  set?: {
    text: string;
  };
  introduction?: {
    chapter: string;
    season: string;
    text: string;
  };
  images: FortniteImageSet;
  variants?: unknown[]; 
}

export interface ShopBundle {
  name: string;
  info: string;
  image: string;
}

export interface ShopEntry {
  offerId: string;
  devName: string;
  
  regularPrice: number;
  finalPrice: number;

  inDate: string;
  outDate?: string;

  bundle?: ShopBundle; 
  
  brItems?: BrItem[]; 

  tracks?: unknown[];
  instruments?: unknown[];
  cars?: unknown[];
  legoKits?: unknown[];

  banner?: {
    value: string;
    intensity: string;
  };
  giftable: boolean;
  refundable: boolean;
  sortPriority: number;
  layoutId?: string;
  
  newDisplayAsset?: {
    id: string;
    renderImages?:Array<{
      image: string;
      fileName: string;
    }>
  };
}

export interface FortniteShopResponse {
  status: number;
  data: {
    hash: string;
    date: string;
    vbuckIcon: string;
    entries: ShopEntry[];
  };
}