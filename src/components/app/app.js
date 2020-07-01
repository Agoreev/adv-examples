import React, { Component } from "react";
import CompaniesList from "../companies-list";

class App extends Component {
  state = {
    companies: {
      starbucks: {
        id: "starbucks",
        title: "Starbucks",
        image: "image path",
        questions: {
          question1: {
            text: "Interested in some help?",
            track: "mp3 path",
            answers: {
              interest: {
                btnText: "interest",
                track: "mp3 path",
                text: "",
              },
              noInterest: {
                btnText: "No interest",
                track: "mp3 path",
                text: "",
              },
              silence: {
                btnText: "Silence",
                track: "mp3 path",
                text: "",
              },
              unclear: {
                btnText: "Unclear",
                track: "mp3 path",
                text: "",
              },
            },
          },
        },
      },
      kfc: {
        id: "kfc",
        title: "KFC",
        image: "",
      },
    },
    selectedCompanyId: null,
    loading: false,
  };

  onCompanySelected = (companyId) => {
    this.setState({
      selectedCompanyId: companyId,
    });
  };
  render() {
    let track,
      answers = null;
    if (this.state.selectedCompanyId) {
      track = "track component here";
      answers = "answers component here";
    }
    return (
      <div className="App">
        <CompaniesList
          companies={this.state.companies}
          onCompanySelected={this.onCompanySelected}
        />
        {track}
        {answers}
      </div>
    );
  }
}

export default App;
