# DBG Gurukulam LaTeX Renderer

This Python script renders the DBG Gurukulam assessment report LaTeX document (`main1.tex`) into a PDF file.

## Prerequisites

### 1. Python
- Python 3.6 or higher (uses standard library only)

### 2. LaTeX Distribution
You need a LaTeX distribution installed on your system:

**Windows:**
- [MiKTeX](https://miktex.org/) (Recommended)
- [TeX Live](https://www.tug.org/texlive/)

**Linux:**
- [TeX Live](https://www.tug.org/texlive/)
- `sudo apt-get install texlive-full` (Ubuntu/Debian)

**macOS:**
- [TeX Live](https://www.tug.org/texlive/)
- [MacTeX](https://www.tug.org/mactex/)

**Online Alternative:**
- [Overleaf](https://www.overleaf.com/) - Upload your `main1.tex` file

## Usage

### 1. Run the Script
```bash
python render_latex.py
```

### 2. What the Script Does
- Checks if LaTeX is installed
- Compiles `main1.tex` to PDF
- Creates an `output` directory
- Generates `main1.pdf` in the output directory
- Cleans up auxiliary files

### 3. Output
The script will create:
```
output/
├── main1.pdf          # Your rendered PDF
└── main1.tex          # Copy of source file
```

## Troubleshooting

### LaTeX Not Found
If you get "LaTeX (pdflatex) is not installed" error:

1. **Install a LaTeX distribution** (see Prerequisites above)
2. **Add to PATH** (Windows): Make sure MiKTeX/TeX Live is in your system PATH
3. **Restart terminal** after installation

### Compilation Errors
If the PDF generation fails:

1. Check the error messages in the terminal
2. Verify that `main1.tex` is in the same directory as the script
3. Ensure all required LaTeX packages are installed
4. Try compiling manually: `pdflatex main1.tex`

### Missing Packages
If you get package errors, install them:

**MiKTeX (Windows):**
- MiKTeX Console → Packages → Install missing packages

**TeX Live (Linux/macOS):**
```bash
sudo tlmgr install <package-name>
```

## File Structure
```
.
├── main1.tex          # LaTeX source file
├── render_latex.py    # Python renderer script
├── requirements.txt   # Dependencies (none required)
├── README.md         # This file
└── output/           # Generated after running script
    ├── main1.pdf
    └── main1.tex
```

## Features

- ✅ Automatic LaTeX installation check
- ✅ Two-pass compilation for proper references
- ✅ Clean output directory management
- ✅ Automatic cleanup of auxiliary files
- ✅ Detailed progress reporting
- ✅ Error handling and troubleshooting

## Customization

To render a different LaTeX file, modify the `tex_file` variable in `main_latex.py`:

```python
tex_file = "your_file.tex"  # Change this line
```

## Support

If you encounter issues:
1. Check that LaTeX is properly installed
2. Verify all required packages are available
3. Try compiling manually with `pdflatex main1.tex`
4. Check the LaTeX log file for detailed error messages 