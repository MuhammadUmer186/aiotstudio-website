export default function SectionHeading(props: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: "left" | "center";
}) {
  const centered = props.align === "center";

  return (
    <div className={`mb-8 ${centered ? "text-center" : ""}`}>
      {props.eyebrow ? <div className="eyebrow">{props.eyebrow}</div> : null}
      <h2 className="section-title">{props.title}</h2>
      {props.subtitle ? (
        <p className={`section-copy ${centered ? "mx-auto" : ""}`}>{props.subtitle}</p>
      ) : null}
    </div>
  );
}
