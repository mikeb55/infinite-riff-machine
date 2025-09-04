# Shared Riff Schema (v0.1.0)

**Purpose:** one riff format used by all apps (RiffGen, IRM, RiffBank, Fretboard Visualizer, TriadGen).  
Keeps your ecosystem consistent and portable.

## Files
- `schema/riff.schema.json` — JSON Schema for validators and runtime checks
- `types/riff.d.ts` — TypeScript types for editors/TS projects

## Minimal Riff Example
```json
{
  "version": "0.1.0",
  "id": "riff-001",
  "source_app": "riffgen",
  "theory": {
    "key": "C",
    "scale": "blues",
    "tempo_bpm": 96,
    "meter": "4/4"
  },
  "tuning": ["E2","A2","D3","G3","B3","E4"],
  "notes": [
    {"start_beat": 0, "duration_beats": 0.5, "pitch": "C4"},
    {"start_beat": 0.5, "duration_beats": 0.5, "pitch": "Eb4"}
  ],
  "tags": ["blues","bb_king"]
}
```

## Versioning
- Start at v0.1.0. Bump **minor** for backward-compatible additions, **major** for breaking changes.
- Keep the canonical copy in **mikes-generative-core** and sync into other repos.

## Consumers (apps)
- **RiffGen**: emits `Riff`
- **RiffBank**: stores arrays of `Riff`
- **IRM**: consumes arrays of `Riff` and groups them into sections
- **Fretboard Visualizer**: maps `Riff.notes` to strings/frets
- **TriadGen**: can emit compatible `Riff` chord runs

