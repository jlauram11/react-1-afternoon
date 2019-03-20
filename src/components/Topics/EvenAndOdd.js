import React, {Component} from 'react';

class EvenAndOdd extends Component {
    constructor () {
        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: '',
        }
    }

    //methods
    updateUserInput = (event, value) => {
        this.setState({userInput: event.target.value})
    }

    solveProblem = () => {
        let arr = this.state.userInput.split(',');
        let evens = [];
        let odds = [];

        let i

        for (i = 0; i < arr.length; i++) {
            if ( arr[i] %2 === 0 ) {
                evens.push(parseInt(arr[i], 10))
            }
            else {
                odds.push(parseInt(arr[i], 10))
            }
        }

        this.setState({
            evenArray: evens,
            oddArray: odds,
            userInput: ''
        })
        
    }

    render () {
        return (
            <div className='puzzleBoxevenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input className='inputLine' onChange={this.updateUserInput}/>
                <button 
                    className='confirmationButton'
                    onClick={this.solveProblem}
                >Sort</button>
                <span className='resultsBox'>{this.state.evenArray}</span>
                <span className='resultsBox'>{this.state.oddArray}</span>
            </div>
        )
    }
}

export default EvenAndOdd;