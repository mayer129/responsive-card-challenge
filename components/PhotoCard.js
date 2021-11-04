export default function PhotoCard({ url, title }) {
  return (
    <div className="card">
      <div className="img-wrapper">
        <img src={url} alt={title} />
      </div>
      <h1 className="card-title">{title}</h1>
    </div>
  );
}
