import React, { useState } from "react";

export default function FormBlock() {
  const [userData, setUserData] = useState({
    ddm: "",
    uName: "",
    contact: "",
  });

  const validate = () => {
    if (userData.ddm === "0") {
      alert("Choose activity type");
      return false;
    }
    if (userData.uName.length < 1) {
      alert("Fill out your name");
      return false;
    }
    if (userData.contact.length < 10 || !userData.contact) {
      alert("Provide valid contact details");
      return false;
    }
    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();
    if (!errors) return;

    doSubmit();
  };
  const doSubmit = () => {
    // Call the server
    alert("Submitted");
    setUserData({ddm: "0",
    uName: "",
    contact: "",})
    console.log("Submitted");
  };

  return (
    <div className="block fb-block">
      <div className="form__block-wrap">
        <div className="fb-item">
          <h4 className="fb-head">let's get the ball rolling</h4>
        </div>
        <div className="fb-item">
          <p className="fb-para">
            Picking the right program for your organization can be tough - so
            we’re here to help you narrow down the options. Just pick the size
            of your team, the type and duration of activity you’d like to
            organize. We’ll recommend the most effective, engaging and
            results-based activity for your team.
          </p>
        </div>
        <div className="fb-item ">
          <form onSubmit={handleSubmit} className="form">
            <div className="formClass">
              <div className="input select-input">
                <select
                  name="Activity Type"
                  id="actype"
                  onChange={(e) =>
                    setUserData({ ...userData, ddm: e.target.value })
                  }
                >
                  <option value="0">Select Activity Type</option>
                  <option value="1">Experiential Learning</option>
                  <option value="2">Physical Programs</option>
                  <option value="3">Virtual Programs</option>
                </select>
              </div>
              <div className="input form-input">
                <input
                  type="text"
                  name="Name"
                  id="name"
                  autoCapitalize="off"
                  value={userData.uName}
                  onChange={(e) =>
                    setUserData({ ...userData, uName: e.target.value })
                  }
                />

                <label htmlFor="name" className="label-name">
                  <span className="content-name">Name</span>
                </label>
              </div>
              <div className="input form-input">
                <input
                  type="number"
                  name="Contact"
                  id="contact"
                  autoCapitalize="off"
                  value={userData.contact}
                  onChange={(e) =>
                    setUserData({ ...userData, contact: e.target.value })
                  }
                />

                <label htmlFor="contact" className="label-name">
                  <span className="content-name">Contact</span>
                </label>
              </div>
            </div>
            <input className="submit-btn" type="submit"value="Inquire now" />
          </form>
        </div>
      </div>
    </div>
  );
}
