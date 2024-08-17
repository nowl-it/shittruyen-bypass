import re
version = '0.0.1'
with open('CHANGELOG.md', 'r') as file:
	changelog = file.read()
pattern = rf'## \[{version}\](.*)\n## '
match = re.search(pattern, changelog, re.S)
if not match:
	pattern = rf'## \[{version}\](.*)$'
	match = re.search(pattern, changelog, re.S)
if match:
	print('::set-output name=body::' + match.group(1).strip())
else:
	print('::set-output name=body::Không tìm thấy phiên bản trong CHANGELOG.md')
