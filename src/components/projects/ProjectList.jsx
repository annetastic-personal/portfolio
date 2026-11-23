export default function ProjectList({ items, compact = false }) {
  return (
    <ul
      className={`mb-4 list-disc pl-5 ${compact ? "space-y-0.5" : "space-y-2"}`}
    >
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
