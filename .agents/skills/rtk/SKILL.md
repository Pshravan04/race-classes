---
name: rtk
description: >-
  Rust Token Killer (RTK) - Token-optimized CLI proxy for shell commands. Intercepts and compresses
  terminal outputs (git, npm, cargo, ls, find, grep, etc.) by 60% to 90% before returning to the LLM context.
  Use whenever running CLI commands to optimize token consumption and maintain context window efficiency.
---

# RTK - Rust Token Killer (CLI Output Token Optimizer)

RTK is an ultra-fast, zero-overhead Rust CLI proxy designed to filter and summarize system outputs before they enter your context window.

## Usage Guidelines

Always prefix shell commands with `rtk` where supported:

### 1. Git Operations
```bash
rtk git status
rtk git diff
rtk git log -n 5
rtk git branch
```

### 2. Filesystem & Search
```bash
rtk ls <dir>
rtk tree <dir>
rtk find "<pattern>" <dir>
rtk grep "<pattern>" <dir>
rtk rg "<pattern>" <dir>
```

### 3. Build & Package Managers
```bash
rtk npm run <script>
rtk npm test
rtk npx <cmd>
rtk cargo build
rtk cargo test
```

### 4. Diagnostics & Analytics
```bash
rtk gain              # Display session and historical token savings summary
rtk gain --history    # View past command savings
rtk discover          # Check for missed compression opportunities
rtk proxy <cmd>       # Run raw command without filtering if exact raw output is required
```
