def render_defs():
    latex = r"""
    \documentclass[a4paper]{article}
    \usepackage{fullpage}
    \usepackage{amsmath}
    \usepackage{amssymb}
    \usepackage{textcomp}
    \usepackage[utf8]{inputenc}
    \usepackage[T1]{fontenc}
    \usepackage[normalem]{ulem}
    \usepackage{hyperref}
    \textheight=10in
    \pagestyle{empty}
    \raggedright
    \usepackage[left=0.8in,right=0.8in,bottom=0.8in,top=0.8in]{geometry}
    \hypersetup{
    colorlinks=true,
    linkcolor=blue,
    urlcolor=blue,
	}

    %\renewcommand{\encodingdefault}{cg}
%\renewcommand{\rmdefault}{lgrcmr}

\def\bull{\vrule height 0.8ex width .7ex depth -.1ex }

% DEFINITIONS FOR RESUME %%%%%%%%%%%%%%%%%%%%%%%

\newcommand{\area}[2]{
    \vspace*{-9pt}
    \begin{verse}
        \textbf{#1} #2
    \end{verse}
}

\newcommand{\lineunder}{
    \vspace*{-8pt} \\
    \hspace*{-18pt} \hrulefill \\
}

\newcommand{\header}[1]{
    {\hspace*{-18pt}\vspace*{6pt} \textsc{#1}}
    \vspace*{-6pt} \lineunder
}

\newcommand{\employer}[3]{
    { \textbf{#1} (#2)\\ \underline{\textbf{\emph{#3}}}\\  }
}

\newcommand{\contact}[3]{
    \vspace*{-10pt}
    \begin{center}
        {\Huge \scshape {#1}}\\
        #2 \\ #3
    \end{center}
    \vspace*{-8pt}
}

\newenvironment{achievements}{
    \begin{list}
        {$\bullet$}{\topsep 0pt \itemsep -2pt}}{\vspace*{4pt}
    \end{list}
}

\newcommand{\schoolwithcourses}[4]{
    \textbf{#1} #2 $\bullet$ #3\\
    #4 \\
    \vspace*{5pt}
}

\newcommand{\school}[4]{
    \textbf{#1} #2 $\bullet$ #3\\
    #4 \\
}
% END RESUME DEFINITIONS %%%%%%%%%%%%%%%%%%%%%%%
    """
    return latex

def render_begin():
    latex = r"""
    \begin{document}
\vspace*{-40pt}
    """
    return latex

def render_end():
    latex = r"""
    \end{document}
    """
    return latex

def render_profile(profile_data):
    name = profile_data['name']
    location = profile_data['location']
    email = profile_data['email']
    phone = profile_data['phone']
    site = profile_data['site']
    
    latex = rf"""
%==== Profile ====%
\vspace*{{-10pt}}
\begin{{center}}
    {{\Huge \scshape {name}}}\\
    {location} $\cdot$ {email} $\cdot$ {phone} $\cdot$ {site}\\
\end{{center}}
\vspace{{2mm}}

    """
    return latex

def render_education(education_data, counter):
    latex = rf"""
%==== {education_data['heading']} ====%
\header{{{education_data['heading']}}}
\vspace{{1mm}}
    
    """
    for i in range(1, counter + 1):
        name = education_data[f'name-{i}']
        location = education_data[f'location-{i}']
        degree = education_data[f'degree-{i}']
        field = education_data[f'field-{i}']
        start_date = education_data[f'start-date-{i}']
        end_date = education_data[f'end-date-{i}']
        
        latex += rf"""
\textbf{{{name}}}\hfill {location}\\
{degree} {field} \hfill {start_date} - {end_date}\\
\vspace{{2mm}}
    """
        
    return latex

def render_experience(experience_data, counter):
    latex = rf"""
%==== {experience_data['heading']} ====%
\header{{{experience_data['heading']}}}
\vspace{{1mm}}

    """
    for i in range(1, counter + 1):
        count = 1;
        name = experience_data[f'name-{i}']
        title = experience_data[f'title-{i}']
        location = experience_data[f'location-{i}']
        start_date = experience_data[f'start-date-{i}']
        end_date = experience_data[f'end-date-{i}']
        
        latex += rf"""
\textbf{{{name}}}\hfill {location}\\
\textit{{{title}}}\hfill {start_date} - {end_date}\\
\vspace{{-2mm}}
        """
        latex += r"""
\begin{itemize} \itemsep 1pt
        """
        while True:
            if f'responsibilities-{i}-{count}' not in experience_data:
                break
            latex += rf"""
    \item {experience_data[f'responsibilities-{i}-{count}']}
            """
            count += 1
        
        latex += r"""
\end{itemize}
        """
    
    latex += r"""
\vspace{2mm}
    """
    
    return latex

def render_skills(skills_data, counter):
    latex = rf"""
%==== {skills_data['heading']} ====%
\header{{{skills_data['heading']}}}
\vspace{{1mm}}
    """
    latex += r"""
\begin{tabular}{ l l }"""
    
    for i in range(1, counter + 1):
        count = 1;
        name = skills_data[f'name-{i}']
        
        latex += rf"""
    {name}: & """

        while True:
            if f'details-{i}-{count}' not in skills_data:
                break
            latex += rf"""{skills_data[f'details-{i}-{count}']}, """
            count += 1
        latex = latex[:-2]
        latex += " \\\\ "
        
    latex += r"""
\end{tabular}
\vspace{2mm}
    """
    
    return latex

def render_projects(projects_data, counter):
    latex = rf"""
%==== {projects_data['heading']} ====%
\header{{{projects_data['heading']}}}
\vspace{{1mm}}
"""
    for i in range(1, counter + 1):
        count = 1;
        name = projects_data[f'name-{i}']
        tech = projects_data[f'tech-{i}']
        link = projects_data[f'link-{i}']
        
        latex += rf"""
\textbf{{{name}}} \hfill \\
\textbf{{Link:}} \url{{{link}}} \hfill \\
\textit{{{tech}}}
\vspace{{-2mm}}
\begin{{itemize}} \itemsep 1pt"""
        while True:
            if f'description-{i}-{count}' not in projects_data:
                break
            latex += rf"""
    \item {projects_data[f'description-{i}-{count}']}"""
            count += 1
        
        latex += rf"""
\end{{itemize}}
\vspace{{2mm}}
"""

    return latex

def render_awards(awards_data, counter):
    latex = rf"""
%==== {awards_data['heading']} ====%
\header{{{awards_data['heading']}}}
\vspace{{1mm}}
"""
    for i in range(1, counter + 1):
        name = awards_data[f'name-{i}']
        date = awards_data[f'date-{i}']
        awarder = awards_data[f'awarder-{i}']
        summary = awards_data[f'summary-{i}']
        
        latex += rf"""
\textbf{{{name}}}\hfill {awarder}\\
{summary} \hfill {date}\\
\vspace{{2mm}}"""

    return latex