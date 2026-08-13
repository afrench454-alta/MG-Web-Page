import re

html_path = r"c:\Users\frenc\OneDrive\Documents\Program - Development - Files\webpage\mow-glow-v1.2-raw-html\index.html"
archive_path = r"c:\Users\frenc\OneDrive\Documents\Program - Development - Files\webpage\mow-glow-v1.2-raw-html\docs\archive\www-mowglowpropertyservices-com-au-.html"

def analyze_file(filepath):
    print("=== Analyzing", filepath, "===")
    with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
        text = f.read()

    hex_colors = set(re.findall(r'#[0-9a-fA-F]{3,6}', text))
    rgb_colors = set(re.findall(r'rgba?\([^\)]+\)', text))
    style_tags = re.findall(r'<style[^>]*>(.*?)</style>', text, re.DOTALL)
    inline_styles = re.findall(r'style=["\']([^"\']+)["\']', text)

    print("HEX COLORS:", sorted(list(hex_colors)))
    print("RGB COLORS:", sorted(list(rgb_colors)))
    print("STYLE TAGS COUNT:", len(style_tags))
    for i, st in enumerate(style_tags):
        print(f"--- Style Tag {i+1} ---")
        print(st.strip())
    print("\nUNIQUE INLINE STYLES:")
    for style in sorted(set(inline_styles)):
        print("  -", style)

analyze_file(html_path)
analyze_file(archive_path)
