import "./Profile.css";
import Person from "./Person.js";
import PropTypes from "prop-types";

function Profile({ item }) {
  return (
    <Person
      avatar={item.avatar}
      name={item.name}
      tag={item.tag}
      location={item.location}
      followers={item.stats.followers}
      views={item.stats.views}
      likes={item.stats.likes}
    />
  );
}

Profile.propTypes = {
  item: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
