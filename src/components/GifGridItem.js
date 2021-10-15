import PropTypes from "prop-types";

const GifGridItem = ({ id, title, url }) => {
  return (
    <>
      <div className="col-sm-6 col-lg-4" key={id}>
        <div className="card mb-4">
          <div className="card-img-wrapper">
            <img src={url} alt={title} className="card-img-top" />
          </div>
          <div className="card-body">
            <p className="card-text">{title}</p>
          </div>
        </div>
      </div>
    </>
  );
};

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default GifGridItem;
