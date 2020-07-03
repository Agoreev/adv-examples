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

    onCompanySelected = (companyId) => {
        this.setState({
            selectedCompanyId: companyId,
        });
    };

    render() {
        const { companies, selectedCompanyId } = this.state;
        let layout = (
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
        return <div className="App">{layout}</div>;
    }
}

export default App;
