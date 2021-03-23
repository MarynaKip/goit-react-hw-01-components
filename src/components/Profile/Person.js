// import PropTypes from "prop-types";

const Person = ({
  name,
  tag,
  location,
  avatar,
  stats,
  followers,
  likes,
  views,
}) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="Аватар пользователя" className="avatar" />
        <p className="name">{name}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">
            {followers}>{stats}
          </span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">
            {views}>{stats}
          </span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">
            {likes}>{stats}
          </span>
        </li>
      </ul>
    </div>
  );
};

// Person.PropTypes = {
//   avatar: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   followers: PropTypes.number.isRequired,
//   views: PropTypes.number.isRequired,
//   likes: PropTypes.number.isRequired,
// };

export default Person;
