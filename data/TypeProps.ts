//TypeProps.ts
export interface CarouselItem {
  id: string | number;
  image: string;
  title: string;
  description: string | Date;
  serviceName?: {
    serviceLink: string;
    serviceName: string;
  };
}
