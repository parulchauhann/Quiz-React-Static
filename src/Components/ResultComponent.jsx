import React, { Component } from 'react'

export default class ResultComponent extends Component {
    render() {
        return (
            <div className='result_page'>
                <h2 className="header text">Result</h2>

                <div className="result_section">

                    <div className="result_status">
                        <h3 className="desc text">You need more practice!</h3>
                        <h2 className="score text">Your score is 20%</h2>

                        <table id='score_table'>
                            <tr>
                                <td>Total number of questions</td>
                                <td className='numbers'>15</td>
                            </tr>
                            <tr>
                                <td>Number of attempted questions</td>
                                <td className='numbers'>9</td>
                            </tr>
                            <tr>
                                <td>Number of corrected questions</td>
                                <td className='numbers'>3</td>
                            </tr>
                            <tr>
                                <td>Number of wrong questions</td>
                                <td className='numbers'>6</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div className="result_button text">
                    <button className="play_again">Play Again</button>
                    <button className="back">Back to home</button>
                </div>
            </div>
        )
    }
}