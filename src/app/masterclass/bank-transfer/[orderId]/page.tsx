import { redirect } from 'next/navigation';

export default async function MasterclassBankTransferRedirect({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) {
  const { orderId } = await params;
  redirect(`/bank-transfer/${orderId}`);
}
