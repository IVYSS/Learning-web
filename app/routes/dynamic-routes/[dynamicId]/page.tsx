export default async function DynamicRoutePage({
  params,
}: {
  params: Promise<{ dynamicId: string }>;
}) {
  // Await the params before using them
  const { dynamicId } = await params;

  return (
    <div>
      <h1>This is DynamicRoutePage</h1>
      <p>Dynamic route id: {dynamicId}</p>
    </div>
  );
}
