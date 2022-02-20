import React from "react";
import './Peers.scss';
import PeerItem from "../components/Peers/PeerItem";

const Peers = () => {

  const people = [{name: "Neo", description: "Level 3 Buddy"}, {name: "Raj", description: "Level 2 Buddy"}, {name: "Max", description: "Level 1 Buddy"}, {name: "Leo", description: "Level 3 Buddy"}, {name: "Bob", description: "Level 2 Buddy"}, {name: "Laurie", description: "Level 1 Buddy"}, {name: "Leon", description: "Level 1 Buddy"}]

  return (
    <div className="page-content peers">
      <h2 className="page-header text-a-c">My Wadle</h2>
      <div className="page-body peers-listing">
        {
          people.map((e, i) => {
            return (
              <PeerItem key={i} name={e.name} description={e.description} />
            )
          })
        }
      </div>
    </div>
  );
};

export default Peers;
