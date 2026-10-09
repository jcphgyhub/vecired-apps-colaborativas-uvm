import { exchangeProducts } from "@/mocks/data";
import ExchangeDetailClient from "./exchange-detail-client";

type ExchangeDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return exchangeProducts.map((item) => ({
    id: item.id,
  }));
}

export const dynamicParams = false;

export default async function ExchangeDetailPage({
  params,
}: ExchangeDetailPageProps) {
  const { id } = await params;

  return <ExchangeDetailClient id={id} />;
}