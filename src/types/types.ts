export type TContainer = {
  children: React.ReactNode;
  maxWidth?: "1440" | "1200" | "1600";
  padding?: "16" | "32" | "64" | "128";
  className?: string;
  style?: React.CSSProperties;
};

export type TNavigationItemProps= {
  id: number | string;
  path: string;
  name: string;
}

export type TSocials={
  id:string | number;
  icon:string;
  path:string;
}

export type TSocialList={
  socialList:TSocials[];
}

export type TNavigationProps ={
  navList: TNavigationItemProps[];
}

export type ListItem= {
  id: number | string;
  title: string;
  text: string;
}

export type FeaturesProps= {
  list: ListItem[];
}

export type TSystemRequirmentItem={
  id:number;
  name:string;
  value:string;
}

export type TSystemRequirments={
  system:TSystemRequirmentItem[];
}


export type TGalleryImage ={
  id: string | number;
  img: string;
  alt: string;
}

export type TGallerySwiperProps ={
  images: TGalleryImage[];
  onSlideChange?: (index: number) => void;
  initialSlide?: number;
}