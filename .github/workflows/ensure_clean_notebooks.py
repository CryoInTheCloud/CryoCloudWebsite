import yaml
import nb_clean as nbc
from pathlib import Path
import nbformat
import sys

with open('./book/_config.yml') as f:
  data = yaml.safe_load(f)

# Sometimes we use rendered notebooks instead of executing them
exclude_paths = []
for pattern in data['execute']['exclude_patterns']:
    exclude_paths += list(Path('book/tutorials').glob(pattern))
    exclude_notebooks = [path.as_posix() for path in exclude_paths]
print('Excluded from execution:\n', '\n'.join(exclude_notebooks))

# Scrub outputs for spellcheck and linkcheck
for notebook in exclude_notebooks:
    print(f'Scrubbing outputs: {notebook}...')
    nb = nbformat.read(notebook, as_version=nbformat.NO_CONVERT)
    cleaned = nbc.clean_notebook(nb, 
                                 remove_empty_cells=True, 
                                 preserve_cell_metadata=True)
    nbformat.write(cleaned, notebook)


all_ipynbs = [path.as_posix() for path in Path('book/tutorials').rglob('*.ipynb')]
ipynbs = [p for p in all_ipynbs if not '.ipynb_checkpoints' in p]

results = []
for notebook in ipynbs:
    #if not notebook in exclude_notebooks:
    print(f'Checking {notebook}...')
    nb = nbformat.read(notebook, as_version=nbformat.NO_CONVERT)
    result = nbc.check_notebook(nb, 
                                remove_empty_cells=True, 
                                preserve_cell_metadata=True)
    results.append(result)

if False in results:
    sys.exit(1)
