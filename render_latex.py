#!/usr/bin/env python3
"""
LaTeX Renderer for DBG Gurukulam Assessment Report
This script compiles the LaTeX document to generate a PDF output.
"""

import subprocess
import os
import sys
import shutil
from pathlib import Path

def check_latex_installation():
    """Check if LaTeX is installed on the system."""
    try:
        # Check if pdflatex is available
        result = subprocess.run(['pdflatex', '--version'], 
                              capture_output=True, text=True, check=True)
        print("✓ LaTeX (pdflatex) is installed")
        return True
    except (subprocess.CalledProcessError, FileNotFoundError):
        print("✗ LaTeX (pdflatex) is not installed or not in PATH")
        print("Please install a LaTeX distribution like:")
        print("  - MiKTeX (Windows): https://miktex.org/")
        print("  - TeX Live (Linux/Mac): https://www.tug.org/texlive/")
        print("  - Overleaf (Online): https://www.overleaf.com/")
        return False

def render_latex_document(tex_file_path, output_dir="output"):
    """
    Render LaTeX document to PDF.
    
    Args:
        tex_file_path (str): Path to the LaTeX file
        output_dir (str): Directory to store output files
    """
    # Create output directory if it doesn't exist
    Path(output_dir).mkdir(exist_ok=True)
    
    # Get the base name without extension
    base_name = Path(tex_file_path).stem
    
    # Copy LaTeX file to output directory
    output_tex_path = os.path.join(output_dir, f"{base_name}.tex")
    shutil.copy2(tex_file_path, output_tex_path)
    
    print(f"Rendering {tex_file_path}...")
    
    try:
        # Change to output directory
        original_dir = os.getcwd()
        os.chdir(output_dir)
        
        # Run pdflatex twice to resolve references
        for run in range(2):
            print(f"  Compilation run {run + 1}/2...")
            
            result = subprocess.run([
                'pdflatex',
                '-interaction=nonstopmode',
                '-output-directory=.',
                f"{base_name}.tex"
            ], capture_output=True, text=True)
            
            if result.returncode != 0:
                print("✗ LaTeX compilation failed!")
                print("Error output:")
                print(result.stderr)
                return False
        
        # Check if PDF was created
        pdf_path = os.path.join(output_dir, f"{base_name}.pdf")
        if os.path.exists(pdf_path):
            print(f"✓ PDF successfully generated: {pdf_path}")
            
            # Get file size
            file_size = os.path.getsize(pdf_path)
            print(f"  File size: {file_size:,} bytes ({file_size/1024:.1f} KB)")
            
            return True
        else:
            print("✗ PDF file was not created")
            return False
            
    except Exception as e:
        print(f"✗ Error during compilation: {e}")
        return False
    finally:
        # Return to original directory
        os.chdir(original_dir)

def cleanup_auxiliary_files(output_dir):
    """Remove auxiliary LaTeX files, keeping only the PDF."""
    extensions_to_remove = ['.aux', '.log', '.out', '.toc', '.fdb_latexmk', '.fls', '.synctex.gz']
    
    for ext in extensions_to_remove:
        for file_path in Path(output_dir).glob(f"*{ext}"):
            try:
                file_path.unlink()
                print(f"  Removed: {file_path.name}")
            except Exception as e:
                print(f"  Warning: Could not remove {file_path.name}: {e}")

def main():
    """Main function to render the LaTeX document."""
    print("=" * 60)
    print("DBG Gurukulam - LaTeX Document Renderer")
    print("=" * 60)
    
    # Check if LaTeX is installed
    if not check_latex_installation():
        sys.exit(1)
    
    # Define input file
    tex_file = "main1.tex"
    
    # Check if input file exists
    if not os.path.exists(tex_file):
        print(f"✗ Input file '{tex_file}' not found!")
        print("Please make sure the LaTeX file is in the current directory.")
        sys.exit(1)
    
    print(f"✓ Found input file: {tex_file}")
    
    # Render the document
    output_directory = "output"
    success = render_latex_document(tex_file, output_directory)
    
    if success:
        print("\n" + "=" * 60)
        print("✓ RENDERING COMPLETED SUCCESSFULLY!")
        print("=" * 60)
        
        # Clean up auxiliary files
        print("\nCleaning up auxiliary files...")
        cleanup_auxiliary_files(output_directory)
        
        # Show final result
        pdf_path = os.path.join(output_directory, "main1.pdf")
        print(f"\n📄 Your PDF is ready: {pdf_path}")
        print("\nYou can now open the PDF file to view the assessment report.")
        
    else:
        print("\n" + "=" * 60)
        print("✗ RENDERING FAILED!")
        print("=" * 60)
        print("Please check the error messages above and fix any issues in the LaTeX file.")
        sys.exit(1)

if __name__ == "__main__":
    main() 