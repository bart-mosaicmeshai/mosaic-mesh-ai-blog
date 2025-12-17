# Nano-Banana Usage Notes

## How to Generate Images

**Command Template:**
```bash
cd ~/Projects/nano-banana-experiments && \
source venv/bin/activate && \
nano-banana generate "YOUR_PROMPT_HERE" \
  --output ~/Projects/mosaic-mesh-ai-blog/assets/SERIES-NAME/filename.jpg \
  --model 3 \
  --resolution 1K
```

**Key Points:**
- Must activate venv from nano-banana-experiments directory
- Shell cwd gets reset after command, which is fine
- Model 3 = Nano Banana 3 Pro
- Resolution 1K is standard for blog images
- JPEG output is automatic (saves ~15 min per image vs manual conversion)

**Example:**
```bash
cd ~/Projects/nano-banana-experiments && \
source venv/bin/activate && \
nano-banana generate "A technical diagram showing..." \
  --output ~/Projects/mosaic-mesh-ai-blog/assets/gemma-finetune-bluey/part-1-example.jpg \
  --model 3 \
  --resolution 1K
```

**Output:**
- Generates JPEG at specified path
- Shows cost breakdown
- Typical cost: ~$0.13 per 1K image

**Asset Directory Structure:**
```
assets/
├── gemma-finetune-bluey/     # Current series
├── agentic-personal-trainer/
├── embeddinggemma/
└── nano-banana-experiments/
```
