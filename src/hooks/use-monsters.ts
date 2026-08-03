import { useEffect, useState } from "react";

export interface Contributor {
  name: string;
  age: string;
}

export interface MonsterData {
  contributor: Contributor;
  lines: string[];
}

interface MonstersState {
  monsters: MonsterData[];
  loading: boolean;
  error?: Error;
}

export function useMonsters(): MonstersState {
  const [state, setState] = useState<MonstersState>({
    monsters: [],
    loading: true
  });

  useEffect(() => {
    let cancelled = false;

    fetch("/monsters.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        return response.json();
      })
      .then((monsters: MonsterData[]) => {
        if (!cancelled) {
          setState({ monsters, loading: false });
        }
      })
      .catch((error: Error) => {
        if (!cancelled) {
          setState({ monsters: [], loading: false, error });
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
