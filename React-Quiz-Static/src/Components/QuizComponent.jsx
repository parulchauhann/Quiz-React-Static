import React, { Component } from 'react'

export default class QuizComponent extends Component {
    render() {
        return (
            <div className='quiz_section'>
                <div className="ques_desc">
                    <h2 className="question_header text">Question</h2>
                    <h3 className="question_no">1 of 15</h3>
                    <h2 className='the_ques text'>Which is the only mammal that can jump?</h2>

                    <div className="option_section">
                        <div className=" option text">Dog</div>
                        <div className=" option text">Elephant</div>
                        <div className=" option text">Goat</div>
                        <div className=" option text">Lion</div>
                    </div>

                    <div className="buttons_section text">
                        <button id="prev_button">Previous</button>
                        <button id="next_button">Next</button>
                        <button id="quit_button">Quit</button>
                    </div>
                </div>
            </div>
        )
    }
}
