interface MonsterEditorProps {
  lines: string[];
  onMonsterUpdate: (lines: string[]) => void;
  plaintext?: boolean;
}

const MonsterEditor = ({
  lines,
  onMonsterUpdate,
  plaintext
}: MonsterEditorProps) => {
  const inputSize = Math.max(...lines.map((line) => line.length), 0);

  const handleChange = (index: number, value: string) => {
    const newLines = [...lines];
    newLines[index] = value;
    onMonsterUpdate(newLines);
  };

  return (
    <div className="monster-editor">
      <button onClick={() => onMonsterUpdate(lines.slice(0, -1))}>
        -
      </button>
      <button onClick={() => onMonsterUpdate([...lines, ""])}>
        +
      </button>
      {lines.map((line, index) => (
        <input
          key={index}
          className={plaintext ? "plaintext" : ""}
          size={inputSize}
          value={line}
          onChange={(event) =>
            handleChange(index, event.target.value)
          }
        />
      ))}
    </div>
  );
};

export default MonsterEditor;
