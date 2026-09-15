export default function MaterialCard({ material }) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.03] p-6">
      <p className="text-xl font-semibold text-white">{material.name}</p>
      <p className="mt-1 text-sm text-mist/60">{material.type}</p>
    </div>
  )
}
