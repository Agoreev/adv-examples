import React, { Component } from "react";
import CompaniesList from "../companies-list";
import Question from "../question";
import CompanyLogo from "../company-logo";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./app.css";

class App extends Component {
  state = {
    companies: {
      starbucks: {
        id: "starbucks",
        title: "Starbucks",
        image: "image path",
        question: {
          text: "Interested in some help?",
          track: "/example.wav",
          answers: {
            interest: {
              btnText: "interest",
              track: "/example2.wav",
              text: "interest",
              question: {
                text: "Why?",
                track: "/example.wav",
                answers: {
                  because: {
                    btnText: "Because",
                    track: "/example2.wav",
                    text: "Because",
                    finalAnswer: {
                      text: "123456",
                      track: "/example.wav",
                    },
                  },
                  one: {
                    btnText: "One",
                    track: "/example.wav",
                    text: "One",
                  },
                },
              },
            },
            noInterest: {
              btnText: "No interest",
              track: "/example.wav",
              text: "No interest",
            },
            silence: {
              btnText: "Silence",
              track: "/example.wav",
              text: "Silence",
            },
            unclear: {
              btnText: "Unclear",
              track: "/example.wav",
              text: "Unclear",
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

  componentDidMount() {}

  onCompanySelected = (companyId) => {
    this.setState({
      selectedCompanyId: companyId,
    });
  };

  onExitFromQuestion = () => {
    this.setState({
      selectedCompanyId: null,
    });
  };

  render() {
    const { companies, selectedCompanyId } = this.state;

    if (!companies) {
      return <h2>Sorry, no companies found</h2>;
    }

    let layout = (
      <CompaniesList
        companies={companies}
        onCompanySelected={this.onCompanySelected}
      />
    );

    if (this.state.selectedCompanyId) {
      layout = (
        <div>
          <CompanyLogo
            image={companies[selectedCompanyId].image}
            title={companies[selectedCompanyId].title}
          />
          <Question
            question={companies[selectedCompanyId].question}
            onExitFromQuestion={this.onExitFromQuestion}
          />
        </div>
      );
    }
    return (
      <div className="App">
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={this.state.selectedCompanyId}
            classNames="fade-slide-up"
            timeout={400}
          >
            {layout}
          </CSSTransition>
        </SwitchTransition>
      </div>
    );
  }
}

export default App;
