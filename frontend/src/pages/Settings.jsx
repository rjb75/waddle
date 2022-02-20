import React from "react";
import "./Settings.scss";
import AccountIcon from "../images/icons/account.svg";
import EyeIcon from "../images/icons/eye.svg";
import LockIcon from "../images/icons/lock.svg";
import PrivacyIcon from "../images/icons/privacy.svg";
import SettingsItem from "../components/Settings/SettingsItem";


const Settings = () => {
  const settings = [{
    name: "Account preferences",
    description: "The basics of your profile and experience on Wadle",
    icon: AccountIcon
  }, {
    name: "Sign in & Security",
    description: "The basics of your profile and experience on Wadle",
    icon: LockIcon
  }, {
    name: "Sign in & Security",
    description: "Making your account safe",
    icon: EyeIcon
  }, {
    name: "Data privacy",
    description: "Control how your information is seen from others",
    icon: PrivacyIcon
  }, {
    name: "Logout",
    description: "Take a break from Wadle",
  }]

  return (
    <div className="page-content settings">
      <h2 className="text-a-c page-header" >Settings</h2>
      <div className="page-body settings-listing">
        {
          settings.map((e) => {
            return (
              <SettingsItem {...e} />
            )
          })
        }
      </div>
    </div>
  );
};

export default Settings;
