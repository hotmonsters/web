import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import BorderBox from "../components/border-box";
import Contributor from "../components/contributor";
import Guide from "../components/guide";
import Icon from "../components/icon";
import Monster from "../components/monster";
import MonsterEditor from "../components/monster-editor";

const DRAFT_KEY = "hotmonsters:draft";

interface Draft {
  user: { name: string; age: string };
  lines: string[];
}

const emptyDraft: Draft = {
  user: { name: "", age: "" },
  lines: ["", "", "", ""]
};

const isDraft = (value: unknown): value is Draft => {
  if (typeof value !== "object" || value === null) return false;
  const candidate = value as Record<string, unknown>;
  const { lines, user } = candidate;
  if (!Array.isArray(lines)) return false;
  if (!lines.every((line) => typeof line === "string")) return false;
  if (typeof user !== "object" || user === null) return false;
  const { name, age } = user as Record<string, unknown>;
  return typeof name === "string" && typeof age === "string";
};

const loadDraft = (): Draft => {
  try {
    const stored = localStorage.getItem(DRAFT_KEY);
    if (!stored) return emptyDraft;
    const parsed: unknown = JSON.parse(stored);
    return isDraft(parsed) ? parsed : emptyDraft;
  } catch {
    return emptyDraft;
  }
};

const Editor = () => {
  const [draft, setDraft] = useState<Draft>(loadDraft);
  const [savePending, setSavePending] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
    } catch {
      // draft persistence is best-effort; ignore storage failures
    }
  }, [draft]);

  const handleMonsterUpdate = (lines: string[]) =>
    setDraft((current) => ({ ...current, lines }));

  const handleContributorChange = (
    partial: { name?: string; age?: string }
  ) =>
    setDraft((current) => ({
      ...current,
      user: { ...current.user, ...partial }
    }));

  return (
    <BorderBox className="costume-editor">
      <header className="ribbon-header">
        <div className="ribbon-wrapper">
          <div className="ribbon-front">
            <div className="text">
              back to safety
              <Link className="add-button" to="/monsteragerie">
                <Icon name="arrow-left" />
              </Link>
            </div>
          </div>
          <div className="ribbon-edge-topleft"></div>
          <div className="ribbon-edge-topright"></div>
          <div className="ribbon-edge-bottomleft"></div>
          <div className="ribbon-edge-bottomright"></div>
          <div className="ribbon-back-left"></div>
          <div className="ribbon-back-right"></div>
        </div>
      </header>
      <article>
        <div className="device-warning">
          ***we recommend using a computer for adding
          new monsters***
        </div>
        <div className="top-part">
          <div className="preview">
            <Monster lines={draft.lines} />
          </div>
          <span style={{ width: "20px" }} />
          <div className="editor">
            <MonsterEditor
              onMonsterUpdate={handleMonsterUpdate}
              lines={draft.lines}
              plaintext
            />
          </div>
          <span style={{ width: "20px" }} />
        </div>
        <div className="contributor">
          <Contributor
            user={draft.user}
            onChange={handleContributorChange}
          />
          <button
            className="save btn"
            onClick={() => setSavePending(true)}
          >
            save
          </button>
          {savePending && (
            <p className="save-pending">
              ***submissions are waking back up — your monster is
              safe in this browser for now***
            </p>
          )}
        </div>
        <Guide />
      </article>
    </BorderBox>
  );
};

export default Editor;
