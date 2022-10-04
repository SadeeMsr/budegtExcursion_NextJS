
export default function TourPlaceCard({data, logo}) {
   
  return (
    <div className="rounded-4 m-2 p-4 shadow" style={{minHeight:'400px'}}>
      <div className="d-flex align-items-end">
        <div className="bg-success p-2 rounded-circle me-3 shadow">
          {logo}
        </div>
        <h4 className="fw-bold text-shadow">{data.placeName}</h4>
      </div>
      <p className="mt-3">
         {data.desc}
      </p>
      <a href={data.link} className="nav-link text-muted">Learn more &gt;</a>
    </div>
  );
}
