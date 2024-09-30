import { Button, LayoutCard } from "../../../../components/component-library";
import { TextField } from "../../../../components/component-library/TextField";

export default function Page() {
  return (
    <section className="flex flex-col items-center md:pt-8">
      <LayoutCard>
        <form className="flex flex-col gap-4">
          <TextField label="Card number" fullWidth />
          <div className="flex flex-row gap-4">
            <TextField label="Expires (MM/YY)" fullWidth className="flex-1" />
            <TextField
              label="Security code (CVV)"
              fullWidth
              className="flex-1"
            />
          </div>
          <TextField label="Name on card" fullWidth />
          <TextField label="ZIP code" fullWidth />
          <Button className="mb-8 mt-6">Continue</Button>
        </form>
      </LayoutCard>
    </section>
  );
}
