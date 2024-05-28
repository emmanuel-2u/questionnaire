"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

import "./page.css";
import logo from '@/../public/logo.png';
import TopBar from "@/component/top-bar/TopBar";

import questions from "@/data";
import Question from "@/component/question/Question";
import Result from "@/component/result/Result";

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [checkedIndexes, setCheckedIndexes] = useState(new Array(questions.length).fill(-1));

  const question = questions[currentQuestion];

  return (
    <div className="box p-6">
      {!showResult && <>
        <TopBar length={questions.length} selected={currentQuestion + 1} />
        <div className="mt-6">
          <div className="is-flex is-flex-direction-row is-justify-content-space-between m-0 p-0">
            <button className="button is-white" onClick={() => {
              if (currentQuestion > 0) setCurrentQuestion(index => index - 1);
            }}>
              <span class="icon">
                <i class="fas fa-arrow-left"></i>
              </span>
              <span className="is-size-7">PREVIOUS</span>
            </button>
            <div>
              <Image src={logo} />
            </div>
          </div>
        </div>
        <Question
          currentQuestion={currentQuestion}
          question={question}
          selectOption={(currentQuestion, checkedIndex) => {
            checkedIndexes[currentQuestion] = checkedIndex;
            setCheckedIndexes([...checkedIndexes]);
          }}
          totalQuestions={questions.length}
          checkedIndex={checkedIndexes[currentQuestion]}
        />
        <div className="has-text-centered mt-6 mb-6">
          <button className="button is-link is-rounded" onClick={() => {
            if (currentQuestion < (questions.length - 1)) {
              setCurrentQuestion(value => value + 1);
            } else {
              setShowResult(true);
            }
          }}>
            <span className="is-size-7">{currentQuestion + 1 === questions.length ? 'Submit' : 'Next Question'}</span>
            <span class="icon">
              <i class="fas fa-arrow-right"></i>
            </span>
          </button>
        </div>
      </>}
      {showResult && <Result checkedIndexes={checkedIndexes} setShowResult={setShowResult} />}
    </div>
  );
}
