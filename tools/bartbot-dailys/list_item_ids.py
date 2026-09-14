#!/usr/bin/env python3
"""Print item IDs from a public BartBot list, for building deep links in a post.

Every node a post names should link to that part's frozen public list:
    https://bartbot.mosaicmeshai.com/lists/shared/<token>?item=<id>

Two things to know, both learned the hard way on Part 1:

1. A deep link expands the target's ANCESTORS, not the target itself. Linking a
   day node lands the reader on that day collapsed. To land on an open node,
   link its first child. This script prints the parent path so you can pick.

2. IDs are per-list. A duplicated list gets new IDs, so always pull them from
   THAT part's list, never from a previous part's.

Usage:
    python list_item_ids.py <share-token> [substring ...]

    # everything, with paths
    python list_item_ids.py 6Ji6745t3Qod5nHCDi3o

    # just the nodes you're about to link
    python list_item_ids.py 6Ji6745t3Qod5nHCDi3o "Coaching Prep" "8am Pack"
"""
import json
import sys
import urllib.request

API = "https://bartbot-api.mosaicmeshai.com/nestedlist/shared/{}"


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)
    token, needles = sys.argv[1], [n.lower() for n in sys.argv[2:]]

    with urllib.request.urlopen(API.format(token)) as r:
        data = json.load(r)
    lst = data["list"]
    items = lst["items"]
    by_id = {i["id"]: i for i in items}

    def parent(i):
        return i.get("parent_id") if "parent_id" in i else i.get("parent")

    def path(i):
        out, p = [], parent(i)
        while p and p in by_id:
            out.append(by_id[p]["content"])
            p = parent(by_id[p])
        return " > ".join(reversed(out)) or "(top level)"

    def kids(i):
        return [c for c in items if parent(c) == i["id"]]

    print(f'list: {lst.get("title")}')
    print(f"items: {len(items)}\n")
    for i in items:
        if needles and not any(n in i["content"].lower() for n in needles):
            continue
        flag = "  [complete]" if i.get("is_complete") else ""
        kid = kids(i)
        hint = f'  (has {len(kid)} children; link id {kid[0]["id"]} to open it)' if kid else ""
        print(f'{i["id"]:>6}  {i["content"][:80]}{flag}')
        print(f'        under: {path(i)}{hint}')


if __name__ == "__main__":
    main()
