import classes from "./ProfileIcon.module.css";
import React from "react";

const ProfileIcon = (props) => {
  return (
    <div className={classes["profile-box"]}>
      {!props.hide && (
        <img className={classes.profile} src="img/profile_default.png" />
      )}
    </div>
  );
};

ProfileIcon.defaultProps = {
  hide: false,
};

export default ProfileIcon;
