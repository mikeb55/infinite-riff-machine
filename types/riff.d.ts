// types/riff.d.ts
// v0.1.0 — Type definitions for the shared riff schema

export type Technique =
  | "slide" | "bend" | "vibrato" | "hammer-on" | "pull-off"
  | "mute" | "harmonic" | "palm-mute" | "staccato";

export interface RiffNote {
  string?: number; // 1 = high E
  fret?: number;
  midi?: number;
  pitch?: string; // e.g., "C4"
  velocity?: number; // 0-127
  start_beat: number;
  duration_beats: number;
  accent?: boolean;
  techniques?: Technique[];
}

export interface RiffSection {
  name: string;
  start_beat: number;
  end_beat: number;
}

export interface RiffTheory {
  key?: string; // "C", "D#", "Fm"
  scale?: string; // "blues", "dorian", etc.
  mode?: string;
  tempo_bpm: number;
  meter: string; // "4/4", "7/8"
  swing?: number; // 0..1
}

export interface RiffProfile {
  name?: string;
  instrument?: string;
  tags?: string[];
  // allow extension
  [key: string]: any;
}

export interface Riff {
  version: string; // schema version
  id: string;
  title?: string;
  created_at?: string; // ISO date
  author?: string;
  source_app: string; // "riffgen", "irm", etc.
  profile?: RiffProfile;
  theory: RiffTheory;
  tuning: string[]; // e.g., ["E2","A2","D3","G3","B3","E4"]
  notes: RiffNote[];
  sections?: RiffSection[];
  tags?: string[];
  links?: {
    midi?: string;
    audio_preview?: string;
  };
}
