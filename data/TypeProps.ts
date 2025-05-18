//TypeProps.ts
export interface CarouselItem {
  id: string | number;
  image: string;
  title: string;
  description: string | Date;
  workedDate?: string | Date | null | undefined;
  serviceName?: {
    serviceLink: string;
    serviceName: string;
  };
}
