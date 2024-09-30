"use client";
import { useRouter } from "next/navigation";
import { Button, Typography } from "../../../components/component-library";
import { MOCK_INVOICE } from "../../../store";
import { formatCentsToDollarString } from "../../../utils";

export default function Page({ params: { id } }: { params: { id: string } }) {
  const router = useRouter();

  const { patientFirstName, totalAmountDueCents, numberOfItems } = MOCK_INVOICE;
  return (
    <section className="flex flex-col items-center pt-24">
      <div className="flex flex-col justify-center gap-12 px-6 md:max-w-120">
        <div className="flex flex-col gap-4 text-center">
          <Typography
            size="xl"
            color="secondary"
            component="h2"
            className="font-bold"
          >
            Hi, {patientFirstName}
          </Typography>
          <Typography>
            You have {numberOfItems} medical bills ready from ABC Health System.
            You can pay your bills here or verify your identity to view full
            bill details.
          </Typography>
        </div>
        <div className="flex flex-col gap-6">
          <span className="flex flex-row items-center justify-between">
            <Typography color="tertiary" className="font-bold">
              Total due
            </Typography>
            <Typography size="xl" color="secondary" className="font-bold">
              ${formatCentsToDollarString(totalAmountDueCents)}
            </Typography>
          </span>
          <Button
            fullWidth
            onClick={() => router.push(`/invoice/${id}/payment`)}
          >
            Pay total
          </Button>
        </div>
      </div>
    </section>
  );
}
