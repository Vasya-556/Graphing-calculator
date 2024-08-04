import React, { useState } from 'react'

function Keyboard({ isLayout1 }) {
    const [isShift, setIsShift] = useState(false);

    const keyboard_button_click_single_symbol = (symbol) => {
        if (isShift){
            console.log(symbol.toLowerCase());
        }
        else{
            console.log(symbol.toUpperCase());
        }
    };

    const toggleShift = () => {
        setIsShift(!isShift);
    };

  return (
    <div>
      {isLayout1 ? (
        <>
          <div className='keyboard-top-row'>
            <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('q')}>q</button>
            <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('w')}>w</button>
            <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('e')}>e</button>
            <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('r')}>r</button>
            <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('t')}>t</button>
            <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('y')}>y</button>
            <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('u')}>u</button>
            <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('i')}>i</button>
            <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('o')}>o</button>
            <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('p')}>p</button>
          </div>
          <div className='keyboard-middle-row'>
            <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('a')}>a</button>
            <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('s')}>s</button>
            <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('d')}>d</button>
            <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('f')}>f</button>
            <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('g')}>g</button>
            <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('h')}>h</button>
            <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('j')}>j</button>
            <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('k')}>k</button>
            <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('l')}>l</button>
          </div>
          <div className='keyboard-bottom-row'>
            <button className='keyboard-special-button' onClick={toggleShift}>{isShift? '/\\': '\\/'}</button>
            <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('z')}>z</button>
            <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('x')}>x</button>
            <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('c')}>c</button>
            <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('v')}>v</button>
            <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('b')}>b</button>
            <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('n')}>n</button>
            <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('m')}>m</button>
          </div>
        </>
      ) : (
        <div>
            <div className='keyboard-top-row'>
                <button className='keyboard-button'>x^2</button>
                <button className='keyboard-button'>sin</button>
                <button className='keyboard-button'>cos</button>
                <button className='keyboard-button'>tan</button>
                <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('7')}>7</button>
                <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('8')}>8</button>
                <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('9')}>9</button>
                <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('(')}>(</button>
                <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol(')')}>)</button>
                <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('*')}>*</button>
                <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('/')}>/</button>
            </div>
            <div className='keyboard-middle-row'>
                <button className='keyboard-button'>x^3</button>
                <button className='keyboard-button'>ln</button>
                <button className='keyboard-button'>log10</button>
                <button className='keyboard-button'>logx</button>
                <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('4')}>4</button>
                <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('5')}>5</button>
                <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('6')}>6</button>
                <button className='keyboard-button'>srt()</button>
                <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('%')}>%</button>
                <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('+')}>+</button>
                <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('-')}>-</button>
            </div>
            <div className='keyboard-bottom-row'>
                <button className='keyboard-button'>x^n</button>
                <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('2.7182')}>e</button>
                <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('3.1415')}>Pi</button>
                <button className='keyboard-button'>| x |</button>
                <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('1')}>1</button>
                <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('2')}>2</button>
                <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('3')}>3</button>
                <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('0')}>0</button>
                <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('.')}>.</button>
                <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('!')}>!</button>
                <button className='keyboard-button' onClick={() => keyboard_button_click_single_symbol('=')}>=</button>
            </div>
        </div>
      )}
            <button className='keyboard-special-button'>&lt;</button>
            <button className='keyboard-special-button'>&gt;</button>
            <button className='keyboard-special-button'>ENTER</button>
            <button className='keyboard-special-button'>&lt;---</button>
    </div>
  );
}

export default Keyboard