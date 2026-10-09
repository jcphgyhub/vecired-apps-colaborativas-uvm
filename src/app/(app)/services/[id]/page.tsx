import { serviceProviders } from "@/mocks/data";
import ServiceDetailClient from "./service-detail-client";

type ServiceDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return serviceProviders.map((item) => ({
    id: item.id,
  }));
}

export const dynamicParams = false;

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { id } = await params;

  return <ServiceDetailClient id={id} />;
}