import { useState } from "react";
import "./Quiz.css";

const questions = [
    {
        id: 1,
        question: 'A classmate posts an embarrassing photo of you online without your permission. Is this cyberbullying?',
        options: ["Yes", "No", "Not sure"],
        correct: "Yes",
        explanation: "Correct! Posting embarrassing content about someone without consent is a form of cyberbullying called harassment."
    },
    {
        id: 2,
        question: 'Someone creates a fake account pretending to be you and sends mean messages to your friends. Is this cyberbullying?',
        options: ["Yes", "No", "Not sure"],
        correct: "Yes",
        explanation: "Correct! This is called impersonation — one of the most common forms of cyberbullying."
    },
    {
        id: 3,
        question: 'A group of friends create a group chat and intentionally leave one person out. Is this cyberbullying?',
        options: ["Yes", "No", "Not sure"],
        correct: "Yes",
        explanation: "Correct! Deliberately excluding someone from online groups is called exclusion and is a form of cyberbullying."
    },
    {
        id: 4,
        question: 'Someone argues with you in the comments of a YouTube video once. Is this cyberbullying?',
        options: ["Yes", "No", "Not sure"],
        correct: "No",
        explanation: "Correct! A single disagreement is not cyberbullying. Cyberbullying involves repeated and deliberate harmful behavior."
    },
    {
        id: 5,
        question: "Someone shares your home address and phone number publicly online without your permission. Is this cyberbullying?",
        options: ["Yes", "No", "Not sure"],
        correct: "Yes",
        explanation: "Correct! This is called doxxing — sharing someone's private information without consent to intimidate or harm them."
    },
];

export default function Quiz() {
    const [current, setCurrent] = useState(0);
    const [selected, setSelected] = useState(null);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);

    const handleAnswer = (option) => {

        if (selected !== null) return;
        setSelected(option);
        if (option === questions[current].correct) {
            setScore(score + 1);
        }
    };

    const handleNext = () => {
        if (current + 1 < questions.length) {
            setCurrent(current + 1);
            setSelected(null);
        } else {
            setFinished(true);
        }
    };

    const handleRestart = () => {
        setCurrent(0);
        setSelected(null);
        setScore(0);
        setFinished(false);
    };

    const getButtonClass = (option) => {
        if (selected === null) return "quiz-btn";
        if (option === questions[current].correct) return "quiz-btn correct";
        if (option === selected) return "quiz-btn incorrect";
        return "quiz-btn";
    };

    if (finished) {
        return (
            <section id="quiz" className="quiz-section">
                <h2>Is this cyberbullying? — Quiz</h2>
                <div className="quiz-results">
                    <p className="quiz-score">{score} / {questions.length}</p>
                    <p className="quiz-results-msg">
                        {score === questions.length
                            ? "Perfect score! You really know your stuff."
                            : score >= 3
                            ? "Good job! Review the ones you missed."
                            : "Keep learning — check out the sections above for help."}
                    </p>
                    <button className="quiz-next-btn" onClick={handleRestart}>
                        Try again
                    </button>
                </div>
            </section>
        );
    }

    return (
        <section id="quiz" className="quiz-section">
            <h2>Is this cyberbullying? — Quiz</h2>

            <div className="quiz-progress-track">
                <div
                    className="quiz-progress-fill"
                    style={{ width: `${((current) / questions.length) * 100}%` }}
                ></div>
            </div>
            <p className="quiz-counter">Question {current + 1} of {questions.length}</p>

            <p className="quiz-question">{questions[current].question}</p>

            <div className="quiz-options">
                {questions[current].options.map((option) => (
                    <button
                        key={option}
                        className={getButtonClass(option)}
                        onClick={() => handleAnswer(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>

            {selected !== null && (
                <p className="quiz-explanation">{questions[current].explanation}</p>
            )}

            {selected !== null && (
                <button className="quiz-next-btn" onClick={handleNext}>
                    {current + 1 === questions.length ? "See results" : "Next question"}
                </button>
            )}
        </section>
    );
}