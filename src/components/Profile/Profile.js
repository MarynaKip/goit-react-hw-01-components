import "./Profile.css";
import Person from "./Person.js";

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

export default Profile;
