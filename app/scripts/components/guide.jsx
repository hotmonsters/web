import React from 'react';


class Guide extends React.Component {
    render() {
        var glyphs = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', '1', '2', '3', '4', '5', '6', '7', '8', '0', '!', '#', '$', '%', '&'];

        var items = glyphs.map( (item, index) =>
                <div className="guide-glyph">
                    <div className="monster-typeface">
                        {item}
                    </div>
                    <div className="plaintext">
                        {item}
                    </div>
                </div>
        );

        return (
                <div className="guide">
                    {items}
                </div>
        );
    }
}

export default Guide;
