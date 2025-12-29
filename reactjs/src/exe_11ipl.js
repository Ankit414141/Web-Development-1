




import React from "react";
import ReactDOM from "react-dom/client";

class IPLTeamCard extends React.Component {
  constructor(props) {
    super(props);
    this.team = props.team;
    this.trophies = props.trophies;
    this.captain = props.captain;
    this.homeGround = props.homeGround;
    this.logo = props.logo;
    this.index = props.index;
  }

  render() {
    return (
      <div className="col-md-6 col-lg-4 col-xl-3 mb-4" key={this.index}>
        <div className="card shadow h-100 text-center">
          <img
            src={this.logo}
            className="card-img-top p-3"
            alt={this.team}
            style={{ height: "160px", objectFit: "contain" }}
          />
          <div className="card-body">
            <h5 className="card-title fw-bold">{this.team}</h5>
            <ul className="list-group list-group-flush text-start">
              <li className="list-group-item">
                <strong>Captain:</strong> {this.captain}
              </li>
              <li className="list-group-item">
                <strong>Trophies:</strong> {this.trophies}
              </li>
              <li className="list-group-item">
                <strong>Home Ground:</strong> {this.homeGround}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

function IPL() {
  const iplTeams = [
    {"team":"Chennai Super Kings","trophies":5,"captain":"MS Dhoni","homeGround":"MA Chidambaram Stadium, Chennai","logo":"https://upload.wikimedia.org/wikipedia/en/2/2b/Chennai_Super_Kings_Logo.svg"},
    {"team":"Mumbai Indians","trophies":5,"captain":"Hardik Pandya","homeGround":"Wankhede Stadium, Mumbai","logo":"https://upload.wikimedia.org/wikipedia/en/c/cd/Mumbai_Indians_Logo.svg"},
    {"team":"Kolkata Knight Riders","trophies":2,"captain":"Shreyas Iyer","homeGround":"Eden Gardens, Kolkata","logo":"https://upload.wikimedia.org/wikipedia/en/4/4c/Kolkata_Knight_Riders_Logo.svg"},
    {"team":"Royal Challengers Bengaluru","trophies":0,"captain":"Faf du Plessis","homeGround":"M Chinnaswamy Stadium, Bengaluru","logo":"https://upload.wikimedia.org/wikipedia/en/d/d4/Royal_Challengers_Bangalore_Logo.svg"},
    {"team":"Rajasthan Royals","trophies":1,"captain":"Sanju Samson","homeGround":"Sawai Mansingh Stadium, Jaipur","logo":"https://upload.wikimedia.org/wikipedia/en/6/60/Rajasthan_Royals_Logo.svg"},
    {"team":"Sunrisers Hyderabad","trophies":1,"captain":"Pat Cummins","homeGround":"Rajiv Gandhi International Stadium, Hyderabad","logo":"https://upload.wikimedia.org/wikipedia/en/8/81/Sunrisers_Hyderabad.svg"},
    {"team":"Delhi Capitals","trophies":0,"captain":"Rishabh Pant","homeGround":"Arun Jaitley Stadium, Delhi","logo":"https://upload.wikimedia.org/wikipedia/en/2/2f/Delhi_Capitals.svg"},
    {"team":"Punjab Kings","trophies":0,"captain":"Shikhar Dhawan","homeGround":"IS Bindra Stadium, Mohali","logo":"https://upload.wikimedia.org/wikipedia/en/d/d4/Punjab_Kings_Logo.svg"},
    {"team":"Lucknow Super Giants","trophies":0,"captain":"KL Rahul","homeGround":"Ekana Stadium, Lucknow","logo":"https://upload.wikimedia.org/wikipedia/en/5/5d/Lucknow_Super_Giants_logo.svg"},
    {"team":"Gujarat Titans","trophies":1,"captain":"Shubman Gill","homeGround":"Narendra Modi Stadium, Ahmedabad","logo":"https://upload.wikimedia.org/wikipedia/en/0/09/Gujarat_Titans_Logo.svg"}
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">IPL Teams</h2>
      <div className="row">
        {iplTeams.map((item, index) => (
          <IPLTeamCard
            key={index}
            team={item.team}
            trophies={item.trophies}
            captain={item.captain}
            homeGround={item.homeGround}
            logo={item.logo}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<IPL />);





