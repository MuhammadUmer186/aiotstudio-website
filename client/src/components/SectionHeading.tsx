export default function SectionHeading(props: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-6">
      <h1 className="text-3xl md:text-4xl font-semibold">{props.title}</h1>
      {props.subtitle ? (
        <p className="mt-2 text-slate-600 max-w-2xl">{props.subtitle}</p>
      ) : null}
    </div>
  );
}
