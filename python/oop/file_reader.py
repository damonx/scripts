from pathlib import Path

path = Path('pi_digits.txt')
contents = path.read_text()

lines = contents.splitlines()
[print(line.strip()) for line in lines if line.strip()]