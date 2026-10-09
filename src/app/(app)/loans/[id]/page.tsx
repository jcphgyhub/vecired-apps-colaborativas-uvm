import { loanItems } from "@/mocks/data";
import LoanDetailClient from "./loan-detail-client";

type LoanDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return loanItems.map((item) => ({
    id: item.id,
  }));
}

export const dynamicParams = false;

export default async function LoanDetailPage({
  params,
}: LoanDetailPageProps) {
  const { id } = await params;

  return <LoanDetailClient id={id} />;
}