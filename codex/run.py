#!/usr/bin/env python3
"""
RPB Painting Website — Codex Task Orchestrator

This script runs Codex sessions sequentially, one task at a time.
Each session starts clean and focused on a clearly defined task.

Usage:
    python3 codex/run.py                  # Run the next pending task
    python3 codex/run.py --task 5         # Run a specific task number
    python3 codex/run.py --status         # Show task status overview
    python3 codex/run.py --reset 5        # Reset a task to pending
    python3 codex/run.py --dry-run        # Preview the prompt without running
    python3 codex/run.py --all            # Run all pending tasks sequentially

Requirements:
    - Codex CLI must be installed and authenticated
    - Run from the project root directory: /Users/vectransolutions/Documents/Development/Businesses/RPBPainting
"""

import subprocess
import sys
import re
import os
import argparse
from pathlib import Path
from datetime import datetime


# ─── Configuration ────────────────────────────────────────────────────────────

PROJECT_ROOT = Path(__file__).resolve().parent.parent
TASKS_FILE = PROJECT_ROOT / "codex" / "TASKS.md"
WORKLOG_FILE = PROJECT_ROOT / "codex" / "WORKLOG.md"
VISION_FILE = PROJECT_ROOT / "codex" / "VISION.md"
BUSINESS_INFO_FILE = PROJECT_ROOT / "codex" / "BUSINESS_INFO.md"
DESIGN_SYSTEM_FILE = PROJECT_ROOT / "DesignSystemV2.html"

# Codex CLI command — adjust if your installation differs
CODEX_CMD = "codex"


# ─── Task Parsing ─────────────────────────────────────────────────────────────

def parse_tasks() -> list[dict]:
    """Parse TASKS.md and extract task metadata."""
    content = TASKS_FILE.read_text()
    tasks = []

    # Split by task headers (## Task N: Title)
    task_pattern = re.compile(
        r'^## Task (\d+): (.+?)$\n\n'
        r'\*\*Status\*\*: (\w+)\n'
        r'\*\*Estimated scope\*\*: (.+?)$',
        re.MULTILINE
    )

    # Also capture the full task content between headers
    task_sections = re.split(r'^---$', content, flags=re.MULTILINE)

    for section in task_sections:
        match = task_pattern.search(section)
        if match:
            task_num = int(match.group(1))
            title = match.group(2).strip()
            status = match.group(3).strip()
            scope = match.group(4).strip()

            # Extract the instructions and acceptance criteria
            instructions_match = re.search(
                r'### Instructions\n\n(.*?)(?=### Acceptance Criteria)',
                section,
                re.DOTALL
            )
            criteria_match = re.search(
                r'### Acceptance Criteria\n\n(.*?)$',
                section,
                re.DOTALL
            )

            tasks.append({
                "number": task_num,
                "title": title,
                "status": status,
                "scope": scope,
                "instructions": instructions_match.group(1).strip() if instructions_match else "",
                "criteria": criteria_match.group(1).strip() if criteria_match else "",
                "full_section": section.strip()
            })

    return sorted(tasks, key=lambda t: t["number"])


def update_task_status(task_num: int, new_status: str):
    """Update a task's status in TASKS.md."""
    content = TASKS_FILE.read_text()
    # Find the status line for this task
    pattern = rf'(## Task {task_num}: .+?\n\n\*\*Status\*\*: )\w+'
    updated = re.sub(pattern, rf'\g<1>{new_status}', content, flags=re.DOTALL)
    TASKS_FILE.write_text(updated)


def get_next_pending_task(tasks: list[dict]) -> dict | None:
    """Find the next task with 'pending' status."""
    for task in tasks:
        if task["status"] == "pending":
            return task
    return None


# ─── Prompt Construction ──────────────────────────────────────────────────────

def build_prompt(task: dict) -> str:
    """Build the full prompt for a Codex session."""
    prompt = f"""You are working on the RPB Painting LLC website redesign project.

BEFORE DOING ANYTHING, read these files in order to understand the project context:

1. codex/VISION.md — project vision, design philosophy, and goals
2. codex/WORKLOG.md — what has been completed so far, decisions made, and constraints
3. codex/BUSINESS_INFO.md — factual business details (phone, address, services, etc.)
4. DesignSystemV2.html — the design system with all tokens, components, and patterns

These files are your source of truth. Follow them strictly.

─── YOUR TASK ───

Task {task['number']}: {task['title']}

{task['instructions']}

─── ACCEPTANCE CRITERIA ───

{task['criteria']}

─── RULES ───

- ALL visual styling must follow DesignSystemV2.html tokens exactly
- ALL business information must come from codex/BUSINESS_INFO.md — do NOT invent details
- Use TypeScript with strict typing
- Follow the existing code patterns and component structure
- Keep code clean and maintainable
- Verify changes with `npm run build` inside `website/` — never run `npm run dev` (it never exits)

─── AFTER COMPLETING THE TASK ───

Append a new session entry to codex/WORKLOG.md with:
- Session number (Task {task['number']})
- Date
- What was done
- Any decisions made
- Any issues encountered
- What the next task should focus on
"""
    return prompt


# ─── Execution ────────────────────────────────────────────────────────────────

def run_codex_session(task: dict, dry_run: bool = False):
    """Execute a Codex session for the given task."""
    prompt = build_prompt(task)

    print(f"\n{'='*60}")
    print(f"  Task {task['number']}: {task['title']}")
    print(f"  Scope: {task['scope']}")
    print(f"{'='*60}\n")

    if dry_run:
        print("─── DRY RUN — Prompt Preview ───\n")
        print(prompt)
        print("\n─── End of Prompt ───")
        return True

    # Update status to in_progress
    update_task_status(task["number"], "in_progress")
    print(f"  Status: in_progress")
    print(f"  Starting Codex session...\n")

    try:
        result = subprocess.run(
            [
                CODEX_CMD,
                "exec",
                "--full-auto",
                "-"         # Read prompt from stdin (avoids large CLI arg issues)
            ],
            input=prompt,
            cwd=str(PROJECT_ROOT),
            capture_output=False,  # Let output stream to terminal
            text=True,
            timeout=1800  # 30 minute timeout per task
        )

        if result.returncode == 0:
            update_task_status(task["number"], "completed")
            print(f"\n  ✓ Task {task['number']} completed successfully")
            return True
        else:
            update_task_status(task["number"], "failed")
            print(f"\n  ✗ Task {task['number']} failed (exit code {result.returncode})")
            return False

    except subprocess.TimeoutExpired:
        update_task_status(task["number"], "timeout")
        print(f"\n  ⏱ Task {task['number']} timed out after 30 minutes")
        return False
    except FileNotFoundError:
        print(f"\n  Error: '{CODEX_CMD}' command not found.")
        print(f"  Make sure the Codex CLI is installed and in your PATH.")
        print(f"  You may need to adjust CODEX_CMD in this script.")
        update_task_status(task["number"], "pending")  # Reset
        return False
    except KeyboardInterrupt:
        update_task_status(task["number"], "interrupted")
        print(f"\n  ⚠ Task {task['number']} interrupted by user")
        return False


def show_status(tasks: list[dict]):
    """Display task status overview."""
    print(f"\n{'='*60}")
    print(f"  RPB Painting — Task Status")
    print(f"{'='*60}\n")

    status_icons = {
        "pending": "○",
        "in_progress": "◉",
        "completed": "✓",
        "failed": "✗",
        "timeout": "⏱",
        "interrupted": "⚠",
    }

    completed = 0
    total = len(tasks)

    for task in tasks:
        icon = status_icons.get(task["status"], "?")
        scope_pad = f"[{task['scope']}]".ljust(10)
        print(f"  {icon} Task {task['number']:2d}  {scope_pad}  {task['title']}")
        if task["status"] == "completed":
            completed += 1

    print(f"\n  Progress: {completed}/{total} tasks completed")
    print(f"  {'='*60}\n")


# ─── Main ─────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(
        description="RPB Painting Website — Codex Task Orchestrator"
    )
    parser.add_argument(
        "--task", type=int,
        help="Run a specific task number"
    )
    parser.add_argument(
        "--status", action="store_true",
        help="Show task status overview"
    )
    parser.add_argument(
        "--reset", type=int,
        help="Reset a task to pending status"
    )
    parser.add_argument(
        "--dry-run", action="store_true",
        help="Preview the prompt without running Codex"
    )
    parser.add_argument(
        "--all", action="store_true",
        help="Run all pending tasks sequentially"
    )

    args = parser.parse_args()

    # Verify we're in the right directory
    if not TASKS_FILE.exists():
        print(f"Error: {TASKS_FILE} not found.")
        print(f"Run this script from the project root directory.")
        sys.exit(1)

    tasks = parse_tasks()

    if not tasks:
        print("Error: No tasks found in TASKS.md")
        sys.exit(1)

    # ── Status ──
    if args.status:
        show_status(tasks)
        return

    # ── Reset ──
    if args.reset:
        task_nums = [t["number"] for t in tasks]
        if args.reset not in task_nums:
            print(f"Error: Task {args.reset} not found. Available: {task_nums}")
            sys.exit(1)
        update_task_status(args.reset, "pending")
        print(f"  Task {args.reset} reset to pending")
        return

    # ── Run specific task ──
    if args.task:
        task = next((t for t in tasks if t["number"] == args.task), None)
        if not task:
            print(f"Error: Task {args.task} not found.")
            sys.exit(1)
        run_codex_session(task, dry_run=args.dry_run)
        return

    # ── Run all pending ──
    if args.all:
        pending = [t for t in tasks if t["status"] == "pending"]
        if not pending:
            print("  All tasks are completed!")
            show_status(tasks)
            return

        print(f"  Running {len(pending)} pending tasks sequentially...\n")
        for task in pending:
            success = run_codex_session(task)
            if not success:
                print(f"\n  Stopping: Task {task['number']} did not complete successfully.")
                print(f"  Fix the issue and run again to continue.")
                break
        show_status(parse_tasks())  # Re-parse to get updated statuses
        return

    # ── Run next pending (default) ──
    task = get_next_pending_task(tasks)
    if not task:
        print("  All tasks are completed!")
        show_status(tasks)
        return

    run_codex_session(task, dry_run=args.dry_run)


if __name__ == "__main__":
    main()
