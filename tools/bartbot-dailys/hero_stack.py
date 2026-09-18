#!/usr/bin/env python3
"""Build a Running My Day hero from two WIDE screenshots, stacked and offset.

hero_composite.py lays a small card beside a wide base. When both evidence images are
full-width list captures (Part 3: the Thanksgiving day and the gym day, 760px each), side by
side comes out far too wide. This lays the BACK card top-right and the FRONT card bottom-left,
with the front card covering the back card's last rows, in the same rounded-card-and-shadow
treatment on the same plum ground.

Requires Pillow. The nano-banana venv has it:
    ~/Projects/nano-banana-experiments/venv/bin/python

Usage:
    python hero_stack.py FRONT.png BACK.png OUT.png [options]

Options (defaults are Part 3's published settings):
    --back-crop L,T,R,B  crop the back image first, default 0,0,600,265
    --dx N               back card's left edge relative to the front card's, default 250
    --cover N            how many px of the back card's bottom the front card covers, default 48
                         (use a multiple of the 24px row height so no row is cut in half)
    --pad N              left/right border, default 20
    --pady N             top/bottom border, default 42 (tune this to land near 1.9:1)
    --bg RRGGBB          background hex, default 4a4166 (muted plum)

Part 3's exact command:
    python hero_stack.py thanksgiving.png gym.png hero.png
    -> 890x466, 1.91:1
"""
import argparse
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from hero_composite import rounded, drop_shadow  # noqa: E402
from PIL import Image  # noqa: E402


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("front"); ap.add_argument("back"); ap.add_argument("out")
    ap.add_argument("--back-crop", default="0,0,600,265")
    ap.add_argument("--dx", type=int, default=250)
    ap.add_argument("--cover", type=int, default=48)
    ap.add_argument("--pad", type=int, default=20)
    ap.add_argument("--pady", type=int, default=42)
    ap.add_argument("--bg", default="4a4166")
    a = ap.parse_args()

    bg = tuple(int(a.bg.lstrip("#")[i:i + 2], 16) for i in (0, 2, 4))
    front = Image.open(a.front).convert("RGB")
    back = Image.open(a.back).convert("RGB").crop(tuple(int(v) for v in a.back_crop.split(",")))

    front_y = a.pady + back.height - a.cover
    W = a.pad + max(front.width, a.dx + back.width) + a.pad
    H = front_y + front.height + a.pady
    canvas = Image.new("RGBA", (W, H), bg + (255,))

    canvas = drop_shadow(canvas, (a.pad + a.dx, a.pady, back.width, back.height), 120, 22, 10, (W, H))
    canvas.alpha_composite(rounded(back), (a.pad + a.dx, a.pady))
    canvas = drop_shadow(canvas, (a.pad, front_y, front.width, front.height), 160, 26, 16, (W, H))
    canvas.alpha_composite(rounded(front), (a.pad, front_y))

    canvas.convert("RGB").save(a.out, "PNG", optimize=True)
    print(f"{a.out}: {W}x{H}  ratio {W / H:.2f}:1  bg #{a.bg}")


if __name__ == "__main__":
    main()
