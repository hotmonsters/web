const glyphs = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y",
  "1", "2", "3", "4", "5", "6", "7", "8", "0",
  "!", "#", "$", "%", "&"
];

const Guide = () => (
  <div className="guide">
    {glyphs.map((glyph, index) => (
      <div key={index} className="guide-glyph">
        <div className="monster-typeface">
          {glyph}
        </div>
        <div className="plaintext">
          {glyph}
        </div>
      </div>
    ))}
  </div>
);

export default Guide;
