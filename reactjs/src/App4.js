import React, { Component } from "react";

// Match header as class component
class MatchHeader extends Component {
  render() {
    const { title, venue, dayInfo } = this.props;
    return (
      <div className="match-header">
        <h1>{title}</h1>
        <p>{venue}</p>
        <p>{dayInfo}</p>
      </div>
    );
  }
}

// Score summary as class component
class ScoreSummary extends Component {
  render() {
    const { teamScore, lead, crr, partnership } = this.props;

    return (
      <div className="score-summary">
        <div><strong>Australia</strong> {teamScore}</div>
        <div><strong>Lead</strong>: {lead}</div>
        <div><strong>CRR</strong>: {crr}</div>
        <div><strong>Partnership</strong>: {partnership}</div>
      </div>
    );
  }
}

// Table row for one batsman
class BatsmanRow extends Component {
  render() {
    const { name, runs, balls, fours, sixes, sr } = this.props.data;
    return (
      <tr>
        <td className="batsman-name">{name}</td>
        <td>{runs}</td>
        <td>{balls}</td>
        <td>{fours}</td>
        <td>{sixes}</td>
        <td>{sr}</td>
      </tr>
    );
  }
}

// Complete batting table
class BattingTable extends Component {
  render() {
    const { batsmen } = this.props;
    return (
      <>
        <h3>Batting Card - Australia 1st Innings</h3>
        <table>
          <thead>
            <tr>
              <th>Batter</th>
              <th>R</th>
              <th>B</th>
              <th>4s</th>
              <th>6s</th>
              <th>SR</th>
            </tr>
          </thead>
          <tbody>
            {batsmen.map((batsman, index) => (
              <BatsmanRow key={index} data={batsman} />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

// Main App class component
class App extends Component {
  render() {
    const batsmen = [
      { name: "Jake Weatherald", runs: 78, balls: 95, fours: 10, sixes: 1, sr: "82.10" },
      { name: "Travis Head", runs: 64, balls: 70, fours: 9, sixes: 2, sr: "91.42" },
      { name: "Marnus Labuschagne", runs: 92, balls: 110, fours: 11, sixes: 1, sr: "83.63" },
      { name: "Steve Smith", runs: 61, balls: 75, fours: 7, sixes: 1, sr: "81.33" },
      { name: "Cameron Green", runs: 22, balls: 33, fours: 3, sixes: 0, sr: "66.67" },
      { name: "Josh Inglis", runs: 23, balls: 25, fours: 3, sixes: 0, sr: "92.00" },
      { name: "Alex Carey *", runs: 46, balls: 45, fours: 5, sixes: 0, sr: "102.22" },
      { name: "Michael Neser", runs: 15, balls: 30, fours: 1, sixes: 0, sr: "50.00" }
    ];

    return (
      <div className="scoreboard-container">
        <MatchHeader
          title="Australia vs England - 2nd Test (The Ashes 2025-26)"
          venue="Venue: The Gabba, Brisbane"
          dayInfo="Day 2: Stumps"
        />

        <ScoreSummary
          teamScore="378/6 (73 ov)"
          lead="44 runs"
          crr="5.18"
          partnership="49 (55)"
        />

        <BattingTable batsmen={batsmen} />

        <div className="footer-note">
          * Scoreboard layout inspired by live score of AUS vs ENG (The Gabba).
        </div>
      </div>
    );
  }
}

export default App;
