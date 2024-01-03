import React from 'react'

function TimeFunction() {

    function checkTimeClicked() {
        const words = document.getElementById('wordsButton');
        const quote = document.getElementById('quoteButton');
        const zen = document.getElementById('zenButton');
        const time = document.getElementById('timeButton');
        const puncAndNum = document.getElementById('puncAndNum');
        const left = document.getElementById('leftBorder');
        const right = document.getElementById('rightBorder');

        const quoteConfig = document.getElementById('quoteLength');
        const timeConfig = document.getElementById('timeNum');
        const wordsNum = document.getElementById('wordsNum');
        const config = document.getElementById('config');

        console.log('Click Time');
        // remove class hidden
        puncAndNum.classList.remove('hidden');
        left.classList.remove('hidden');
        right.classList.remove('hidden');
        config.classList.remove('hidden');

        quote.classList.remove('text-chaosPink');
        zen.classList.remove('text-chaosPink');
        words.classList.remove('text-chaosPink');
        time.classList.add('text-chaosPink');

        // config
        wordsNum.classList.add('hidden');
        quoteConfig.classList.add('hidden');
        timeConfig.classList.remove('hidden');
        
    }

    return (
        <button onClick={ checkTimeClicked }>
            <div className='Ani duration-400' id='timeButton'>
                <i className='fa-solid fa-clock mr-2'></i>
                time
            </div>
        </button>
    )
}

export default TimeFunction
