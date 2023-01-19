import '../sass/page/auto-complete/style.css';
import React, { useState } from 'react'

const Test = () => {
    const [items, setItems] = useState([
        "David",
        "Damien",
        "Sara",
        "James",
        "Jane",
        "Sapiens"
    ]);
    const [suggestions, setSuggestions] = useState([]);
    const [text, setText] = useState('');

    function onTextChanged  (e) {
        let value = e.target.value;
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = items.sort().filter(v => regex.test(v));
        }
        setSuggestions(suggestions);
        setText(value);
    }

    function suggestionSelected (value) {
        setSuggestions(suggestions);
        setText(value);
    }

    function renderSuggestions() {
        // const  suggestions = suggestions;
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <div className="srchList">
                <ul>
                    {suggestions.map((item) => <li onClick={() => suggestionSelected(item)}>{item}</li>)}
                </ul>
            </div>
        );
    }

  
    return (
    //    { const text = text}
        <div className='style-search'>
        {/* //     <div className="row justify-content-md-center"> */}
        {/* //         <div className="col-md-12 input"> */}
                    {/* <input type="text"  /> */}
                    <input value={text} onChange={onTextChanged} type="text" className='search' placeHolder="Search" />
                {/* // </div> */}
                {/* // <div className="col-md-12 justify-content-md-center"> */}
                    {renderSuggestions()}
                {/* // </div> */}
            {/* </div> */}
        </div>
    );
}

export default Test
