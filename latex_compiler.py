import subprocess
import os
import sys
import platform
from pathlib import Path
from datetime import datetime

def open_pdf_file(pdf_path):
    """
    Open a PDF file with the default system application.
    
    Args:
        pdf_path (str): Path to the PDF file to open
    """
    try:
        system = platform.system()
        
        if system == "Windows":
            os.startfile(pdf_path)
        elif system == "Darwin":  # macOS
            subprocess.run(["open", pdf_path])
        elif system == "Linux":
            subprocess.run(["xdg-open", pdf_path])
        else:
            print(f"Unsupported operating system: {system}")
            print(f"Please manually open: {pdf_path}")
            
    except Exception as e:
        print(f"Could not open PDF automatically: {e}")
        print(f"Please manually open: {pdf_path}")

def compile_latex_to_pdf(tex_file_path, output_dir=None, auto_open=True):
    """
    Compile a LaTeX file to PDF using pdflatex.
    
    Args:
        tex_file_path (str): Path to the .tex file
        output_dir (str, optional): Directory to save the PDF. If None, uses same directory as tex file.
        auto_open (bool): Whether to automatically open the PDF after compilation. Default is True.
    
    Returns:
        str: Path to the generated PDF file, or None if compilation failed
    """
    
    # Convert to Path object for easier handling
    tex_path = Path(tex_file_path)
    
    # Check if the tex file exists
    if not tex_path.exists():
        print(f"Error: LaTeX file '{tex_file_path}' not found.")
        return None
    
    # Check if it's a .tex file
    if tex_path.suffix.lower() != '.tex':
        print(f"Error: '{tex_file_path}' is not a .tex file.")
        return None
    
    # Set output directory
    if output_dir is None:
        output_dir = tex_path.parent
    else:
        output_dir = Path(output_dir)
        output_dir.mkdir(parents=True, exist_ok=True)
    
    # Generate timestamp for filename
    timestamp = datetime.now().strftime("%y-%m-%d_%H-%M-%S")
    final_pdf_name = f"{tex_path.stem}_{timestamp}.pdf"
    
    # Change to the directory containing the tex file
    original_dir = os.getcwd()
    os.chdir(tex_path.parent)
    
    try:
        # Run pdflatex command
        cmd = [
            'pdflatex',
            '-interaction=nonstopmode',  # Don't stop for errors
            '-output-directory', str(output_dir),
            str(tex_path.name)
        ]
        
        print(f"Compiling {tex_path.name} to PDF...")
        
        # Run the command
        result = subprocess.run(cmd, capture_output=True, text=True)
        
        if result.returncode == 0:
            # Success - find the generated PDF and rename it with timestamp
            original_pdf_path = output_dir / f"{tex_path.stem}.pdf"
            final_pdf_path = output_dir / final_pdf_name
            
            if original_pdf_path.exists():
                # Rename the PDF with timestamp
                original_pdf_path.rename(final_pdf_path)
                print(f"Success! PDF generated: {final_pdf_path}")
                
                # Automatically open the PDF if requested
                if auto_open:
                    print("Opening PDF...")
                    open_pdf_file(str(final_pdf_path))
                
                return str(final_pdf_path)
            else:
                print("Error: PDF file not found after compilation.")
                return None
        else:
            print("LaTeX compilation failed!")
            print("Error output:")
            print(result.stderr)
            return None
            
    except FileNotFoundError:
        print("Error: pdflatex not found. Please install a LaTeX distribution (e.g., TeX Live, MiKTeX).")
        return None
    except Exception as e:
        print(f"Unexpected error: {e}")
        return None
    finally:
        # Change back to original directory
        os.chdir(original_dir)

def main():
    """Main function to handle command line usage"""
    if len(sys.argv) != 2:
        print("Usage: python latex_compiler.py <path_to_main1.tex>")
        sys.exit(1)
    
    tex_file = sys.argv[1]
    pdf_path = compile_latex_to_pdf(tex_file)
    
    if pdf_path:
        print(f"PDF successfully created: {pdf_path}")
    else:
        print("Failed to create PDF.")
        sys.exit(1)

# Example usage
if __name__ == "__main__":
    # If run from command line
    if len(sys.argv) > 1:
        main()
    else:
        # Example usage in script
        tex_file_path = "main1.tex"  # Replace with your actual file path
        pdf_output = compile_latex_to_pdf(tex_file_path)  # auto_open=True by default
        
        if pdf_output:
            print(f"PDF created successfully: {pdf_output}")
        else:
            print("Failed to compile LaTeX to PDF")
