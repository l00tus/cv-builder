import os
import time

def generate_pdf():
    tex_path = 'generated/cv.tex'
    pdf_path = 'generated/cv.pdf'
    
    try:
        command = 'pdflatex -output-directory=' + os.path.dirname(pdf_path) + ' ' + tex_path
        os.system(command)
        time.sleep(1)
        os.remove(tex_path[:-3] + 'aux')
        os.remove(tex_path[:-3] + 'log')
        os.remove(tex_path[:-3] + 'out')
    except Exception as e:
        print(e)
    