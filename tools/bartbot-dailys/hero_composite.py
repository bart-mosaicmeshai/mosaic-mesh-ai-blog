#!/usr/bin/env python3
"""Build a Running My Day hero image from two real screenshots.

The series' heroes are never AI-generated. They're the part's own evidence images
composited locally: a wide base image with a smaller card overlapping it, both as
rounded cards with shadows, on a muted plum ground.

Part 1 used the Google Calendar day column as the base and the Dailys list as the
card. Later parts use their own two images, same treatment.

Requires Pillow. The nano-banana venv has it:
    ~/Projects/nano-banana-experiments/venv/bin/python

Usage:
    python hero_composite.py BASE.png CARD.png OUT.png [options]

Options (all optional, defaults are Part 1's published settings):
    --bg RRGGBB     background hex, default 4a4166 (muted plum)
    --pad N         border around everything, default 20
    --overlap N     how far the card sits over the base, default 220
    --card-y N      card's top edge, default 290 (omit to centre vertically)
    --crop L,T,R,B  crop the base first; Part 1 used 252,0,1203,706 to drop
                    Google Calendar's left sidebar
    --scale F       scale the card, default 1.0 (keep it small: in Part 1 the
                    list's smallness is part of the argument)

Part 1's exact command:
    python hero_composite.py calendar-sept-13.png list-13-sept.png hero.png \
        --crop 252,0,1203,706 --pad 20 --overlap 220 --card-y 290
    -> 1423x746, about 1.9:1, which survives Squarespace's featured-image crop.
"""
import argparse
from PIL import Image, ImageDraw, ImageFilter

RADIUS = 18


def rounded(img, radius=RADIUS):
    mask = Image.new("L", img.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, img.width - 1, img.height - 1),
                                           radius=radius, fill=255)
    out = Image.new("RGBA", img.size, (0, 0, 0, 0))
    out.paste(img, (0, 0), mask)
    border = Image.new("RGBA", img.size, (0, 0, 0, 0))
    ImageDraw.Draw(border).rounded_rectangle((0, 0, img.width - 1, img.height - 1),
                                             radius=radius, outline=(255, 255, 255, 26), width=1)
    return Image.alpha_composite(out, border)


def drop_shadow(canvas, box, alpha, blur, dy, size):
    x, y, w, h = box
    layer = Image.new("RGBA", size, (0, 0, 0, 0))
    ImageDraw.Draw(layer).rounded_rectangle((x + 2, y + dy, x + w + 2, y + h + dy),
                                            radius=RADIUS, fill=(0, 0, 0, alpha))
    return Image.alpha_composite(canvas, layer.filter(ImageFilter.GaussianBlur(blur)))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("base"); ap.add_argument("card"); ap.add_argument("out")
    ap.add_argument("--bg", default="4a4166")
    ap.add_argument("--pad", type=int, default=20)
    ap.add_argument("--overlap", type=int, default=220)
    ap.add_argument("--card-y", type=int, default=None)
    ap.add_argument("--crop", default=None)
    ap.add_argument("--scale", type=float, default=1.0)
    a = ap.parse_args()

    bg = tuple(int(a.bg.lstrip("#")[i:i + 2], 16) for i in (0, 2, 4))
    light = sum(bg) / 3 > 128

    base = Image.open(a.base).convert("RGB")
    if a.crop:
        base = base.crop(tuple(int(v) for v in a.crop.split(",")))
    card = Image.open(a.card).convert("RGB")
    if a.scale != 1.0:
        card = card.resize((round(card.width * a.scale), round(card.height * a.scale)),
                           Image.LANCZOS)

    W = a.pad + base.width - a.overlap + card.width + a.pad
    H = a.pad + base.height + a.pad
    canvas = Image.new("RGBA", (W, H), bg + (255,))

    # lighter shadows on a light ground, heavier on a dark one
    a1, a2 = (70, 110) if light else (120, 160)

    bx, by = a.pad, a.pad
    canvas = drop_shadow(canvas, (bx, by, base.width, base.height), a1, 22, 10, (W, H))
    canvas.alpha_composite(rounded(base), (bx, by))

    cx = a.pad + base.width - a.overlap
    cy = a.pad + a.card_y if a.card_y is not None else (H - card.height) // 2
    canvas = drop_shadow(canvas, (cx, cy, card.width, card.height), a2, 26, 16, (W, H))
    canvas.alpha_composite(rounded(card), (cx, cy))

    canvas.convert("RGB").save(a.out, "PNG", optimize=True)
    print(f"{a.out}: {W}x{H}  ratio {W / H:.2f}:1  bg #{a.bg}")


if __name__ == "__main__":
    main()
