 

const Newsitem = ({ title, description, Url, newzUrl, author, date, source }) => {
  return (
    <div className="my-3">
      <div className="card h-100 news-card position-relative">

        {/* 🔴 Badge */}
        <span className="badge bg-danger news-badge">
          {source}
        </span>

        <img
          src={Url}
          className="card-img-top"
          alt="news"
        />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-truncate">
            {title}
          </h5>

          <p className="card-text card-desc">
            {description}
          </p>

          <p className="card-text">
            <small className="text-muted">
              By {author} on {date}
            </small>
          </p>

          <a
            href={newzUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-primary mt-auto"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
