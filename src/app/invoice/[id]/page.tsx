import { Typography } from "../../../components/component-library";

export default function Page() {
  const { patientFirstName, totalAmountDueCents, numberOfItems } = invoice;
  return (
    <section className="flex flex-col items-center pt-24">
      <div className="md:w-120 flex flex-col justify-center gap-12 px-6">
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
        <span className="flex flex-row items-center justify-between">
          <Typography color="tertiary" className="font-bold">
            Total due
          </Typography>
          <Typography size="xl" color="secondary" className="font-bold">
            ${formatCentsToDollarString(totalAmountDueCents)}
          </Typography>
        </span>
      </div>
    </section>
  );
}

const formatCentsToDollarString = (cents: number) =>
  (Math.round(cents) / 100).toFixed(2);

type Invoice = {
  id: number;
  patientFirstName: string;
  numberOfItems: number;
  totalAmountDueCents: number;
};

const invoice: Invoice = {
  id: 1,
  patientFirstName: "Taylor",
  numberOfItems: 6,
  totalAmountDueCents: 60000,
};
