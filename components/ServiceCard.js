export default function ServiceCard({ s, onOrder }){
  return (<article className="card">
    <h3 className="font-semibold">{s.title}</h3>
    <p className="subtle">{s.category} · Delivery: {s.delivery}</p>
    <p className="mt-2 text-stone-300">{s.description}</p>
    <div className="mt-3 flex gap-2">
      <button className="btn" onClick={()=>onOrder?.(s.title)}>Order</button>
      <a className="btn-outline" href="/contact">Ask first</a>
    </div>
  </article>);
}