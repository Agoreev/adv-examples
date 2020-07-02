import React, { Component } from "react";
import CompaniesList from "../companies-list";
import Question from "../question";

class App extends Component {
    state = {
        companies: {
            starbucks: {
                id: "starbucks",
                title: "Starbucks",
                image: "image path",
                question: {
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
        this.setState(({ companies }) => {
            return {
                selectedCompanyId: companyId,
            };
        });
    };

    render() {
        const { companies, selectedCompanyId } = this.state;
        let layot = (
            <CompaniesList
                companies={companies}
                onCompanySelected={this.onCompanySelected}
            />
        );

        if (this.state.selectedCompanyId) {
            layout = (
                <Question question={companies[selectedCompanyId].question} />
            );
        }
        return (
            <div className="App">
                <CompaniesList
                    companies={this.state.companies}
                    onCompanySelected={this.onCompanySelected}
                />
            </div>
        );
    }
}

export default App;
