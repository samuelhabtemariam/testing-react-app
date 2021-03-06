import React from 'react';
import ReactDOM from 'react-dom';

import App from '../App';

it('shows a commnet box', () => {
    const div = document.createElement('div');

    ReactDOM.render(<App />, div);

    // console.log(div.innerHTML);
    expect(div.innerHTML).toContain('Comment Box');

    ReactDOM.unmountComponentAtNode(div);
});