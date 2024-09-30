import { Typography } from "../../../../components/component-library";

export default function Page() {
  return (
    <section className="flex flex-col items-center pt-24">
      <div className="flex flex-col px-6 text-center">
        <Typography size="xl" color="secondary" className="font-bold">
          Thank you for your payment!
        </Typography>
      </div>
    </section>
  );
}
