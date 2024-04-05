def render_defs():
    latex = r"""
    \documentclass[a4paper]{article}
    \usepackage{fullpage}
    \usepackage{amsmath}
    \usepackage{amssymb}
    \usepackage{textcomp}
    \usepackage[utf8]{inputenc}
    \usepackage[T1]{fontenc}
    \textheight=10in
    \pagestyle{empty}
    \raggedright
    \usepackage[left=0.8in,right=0.8in,bottom=0.8in,top=0.8in]{geometry}

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
    latex = rf"""
%==== Profile ====%
\vspace*{{-10pt}}
\begin{{center}}
    {{\Huge \scshape {profile_data['name']}}}\\
    {profile_data['location']} $\cdot$ {profile_data['email']} $\cdot$ {profile_data['phone']} $\cdot$ {profile_data['site']}\\
\end{{center}}
\vspace{{2mm}}
    """
    return latex

def render_education(education_data):
    pass