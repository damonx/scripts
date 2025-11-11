# Creating a Python Virtual Environment and Installing Matplotlib on macOS

## What is a Virtual Environment?

A **virtual environment (venv)** is an isolated Python environment that allows you to install Python packages independently of the system-wide Python. Each project can have its own virtual environment with its own packages and versions, which avoids conflicts between projects and system packages.

### Why use a Virtual Environment?

1. **Isolation from system Python**: Protects the system Python installation from changes.
2. **Project-specific dependencies**: Each project can have its own versions of libraries like matplotlib without interfering with other projects.
3. **Safe upgrades and experiments**: Upgrade or test packages safely without affecting other projects.
4. **Easy cleanup**: Delete the virtual environment to remove all project-specific packages.

## Step-by-Step Guide on macOS

### 1. Open Terminal

### 2. Create a Virtual Environment

```bash
python3 -m venv myenv
```
- \`myenv\` is the name of the virtual environment folder.
- This folder will contain a separate Python interpreter, \`pip\`, and a site-packages directory.

### 3. Activate the Virtual Environment

```bash
source myenv/bin/activate
```
- After activation, your terminal prompt will usually show \`(myenv)\`.

### 4. Upgrade pip inside the venv

```bash
pip install --upgrade pip
```

### 5. Install Matplotlib

```bash
pip install matplotlib
```

### 6. Verify Installation

```bash
python -c "import matplotlib; print(matplotlib.__version__)"
```
- This should print the installed version of matplotlib.

### 7. Run a Sample Script

Create a file \`mpl_squares.py\` with the following content:

```python
import matplotlib.pyplot as plt

squares = [1, 4, 9, 16, 25]

fig, ax = plt.subplots()
ax.plot(squares)
plt.show()
```

Run the script inside the virtual environment:

```bash
python mpl_squares.py
```
- A window should pop up displaying a line plot of the squares.

### 8. Deactivate the Virtual Environment (Optional)

```bash
deactivate
```
- This returns your shell to the system Python environment.

---

**Notes:**
- Always activate your virtual environment before installing packages or running scripts.
- You can create separate virtual environments for different projects to manage dependencies cleanly.
