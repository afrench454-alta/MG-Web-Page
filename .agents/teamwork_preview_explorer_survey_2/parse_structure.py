import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

html_path = r"c:\Users\frenc\OneDrive\Documents\Program - Development - Files\webpage\mow-glow-v1.2-raw-html\index.html"

with open(html_path, "r", encoding="utf-8") as f:
    content = f.read()

print("=== BODY ===")
body_match = re.search(r'<body[^>]*class=["\']([^"\']+)["\']', content)
if body_match:
    print("Body classes:", body_match.group(1))

print("\n=== HEADINGS & PARAGRAPHS ===")
headings = re.findall(r'<(h[1-6]|p)[^>]*>(.*?)</\1>', content, re.DOTALL)
for tag, inner in headings:
    clean = re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', ' ', inner)).strip()
    if clean and len(clean) > 2:
        print(f"<{tag}> {clean}")
