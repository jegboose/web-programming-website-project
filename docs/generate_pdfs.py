from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    HRFlowable, KeepTogether
)
from reportlab.lib.enums import TA_LEFT, TA_CENTER

# ── Colour palette ──────────────────────────────────────────────────
NAVY     = colors.HexColor("#1e3a5f")
BLUE     = colors.HexColor("#2563eb")
LIGHT    = colors.HexColor("#eff6ff")
GREY     = colors.HexColor("#f1f5f9")
GREEN    = colors.HexColor("#166534")
GREEN_BG = colors.HexColor("#dcfce7")
ORANGE   = colors.HexColor("#9a3412")
ORANGE_BG= colors.HexColor("#ffedd5")
WHITE    = colors.white
BLACK    = colors.black
MID      = colors.HexColor("#64748b")

# ── Style helpers ────────────────────────────────────────────────────
# NOTE: always set `leading` explicitly — inheriting from Normal gives
# leading=12 regardless of fontSize, which causes text to overlap.

def S(name, **kw):
    base = getSampleStyleSheet()["Normal"]
    return ParagraphStyle(name, parent=base, **kw)

H1   = S("H1",   fontSize=22, leading=28, textColor=NAVY,
         spaceAfter=6, spaceBefore=18, fontName="Helvetica-Bold")
H2   = S("H2",   fontSize=14, leading=18, textColor=BLUE,
         spaceAfter=4, spaceBefore=14, fontName="Helvetica-Bold")
H3   = S("H3",   fontSize=11, leading=15, textColor=NAVY,
         spaceAfter=3, spaceBefore=10, fontName="Helvetica-Bold")
BODY = S("BODY", fontSize=10, leading=15, textColor=BLACK, spaceAfter=5)
SMALL= S("SMALL",fontSize=9,  leading=13, textColor=MID,   spaceAfter=3)
CODE = S("CODE", fontSize=9,  leading=14, textColor=colors.HexColor("#1e293b"),
         fontName="Courier", backColor=GREY, spaceAfter=6,
         leftIndent=12, rightIndent=12, spaceBefore=4, borderPad=6)
TIP  = S("TIP",  fontSize=9,  leading=13, textColor=GREEN,  spaceAfter=3,
         backColor=GREEN_BG, leftIndent=10, rightIndent=10, borderPad=5)
WARN = S("WARN", fontSize=9,  leading=13, textColor=ORANGE, spaceAfter=3,
         backColor=ORANGE_BG, leftIndent=10, rightIndent=10, borderPad=5)
CTR  = S("CTR",  fontSize=10, leading=14, textColor=WHITE,
         alignment=TA_CENTER, fontName="Helvetica-Bold")

def div(story):
    story.append(HRFlowable(width="100%", thickness=1,
                             color=colors.HexColor("#cbd5e1"),
                             spaceAfter=8, spaceBefore=4))

def section_box(story, title, content_paragraphs, bg=LIGHT):
    title_style = S("bh", fontSize=11, leading=15, textColor=WHITE,
                    fontName="Helvetica-Bold")
    data = [[Paragraph(title, title_style)]]
    for p in content_paragraphs:
        data.append([p])
    t = Table(data, colWidths=[6.5*inch])
    t.setStyle(TableStyle([
        ("BACKGROUND",    (0,0), (0,0),  NAVY),
        ("BACKGROUND",    (0,1), (0,-1), bg),
        ("BOX",           (0,0), (-1,-1), 1, colors.HexColor("#cbd5e1")),
        ("TOPPADDING",    (0,0), (-1,-1), 8),
        ("BOTTOMPADDING", (0,0), (-1,-1), 8),
        ("LEFTPADDING",   (0,0), (-1,-1), 10),
        ("RIGHTPADDING",  (0,0), (-1,-1), 10),
    ]))
    story.append(KeepTogether([t, Spacer(1, 10)]))

def cover_block(label, title):
    label_style = S("cov_label", fontSize=11, leading=16, textColor=WHITE,
                    alignment=TA_CENTER, fontName="Helvetica-Bold")
    title_style = S("cov_title", fontSize=20, leading=26, textColor=WHITE,
                    alignment=TA_CENTER, fontName="Helvetica-Bold")
    t = Table([
        [Paragraph(label, label_style)],
        [Paragraph(title, title_style)],
    ], colWidths=[6.5*inch])
    t.setStyle(TableStyle([
        ("BACKGROUND",    (0,0), (-1,-1), NAVY),
        ("ALIGN",         (0,0), (-1,-1), "CENTER"),
        ("TOPPADDING",    (0,0), (-1,-1), 16),
        ("BOTTOMPADDING", (0,0), (-1,-1), 16),
    ]))
    return t

def step_row(idx, title, body):
    num_style   = S(f"num{idx}", fontSize=13, leading=18, textColor=WHITE,
                    alignment=TA_CENTER, fontName="Helvetica-Bold")
    inner_style = S(f"inn{idx}", fontSize=9,  leading=14, textColor=BLACK)
    t = Table([[
        Paragraph(str(idx), num_style),
        Paragraph(f"<b>{title}</b><br/>{body}", inner_style),
    ]], colWidths=[0.4*inch, 6.1*inch])
    t.setStyle(TableStyle([
        ("BACKGROUND",    (0,0), (0,0), BLUE),
        ("BACKGROUND",    (1,0), (1,0), LIGHT),
        ("ALIGN",         (0,0), (0,0), "CENTER"),
        ("VALIGN",        (0,0), (-1,-1), "TOP"),
        ("TOPPADDING",    (0,0), (-1,-1), 9),
        ("BOTTOMPADDING", (0,0), (-1,-1), 9),
        ("LEFTPADDING",   (1,0), (1,0), 10),
        ("LEFTPADDING",   (0,0), (0,0), 4),
        ("BOX",           (0,0), (-1,-1), 0.5, colors.HexColor("#cbd5e1")),
    ]))
    return t

# ════════════════════════════════════════════════════════════════════
# PDF 1 — Project Structure & Vite Guide
# ════════════════════════════════════════════════════════════════════
def pdf1():
    doc = SimpleDocTemplate(
        "vite-project-structure.pdf",
        pagesize=letter,
        leftMargin=0.9*inch, rightMargin=0.9*inch,
        topMargin=0.9*inch,  bottomMargin=0.9*inch,
    )
    s = []

    s.append(cover_block("Team Guide — Part 1", "Vite + Project Structure"))
    s.append(Spacer(1, 14))
    s.append(Paragraph(
        "This guide explains how the project is organised, what every file and folder does, "
        "and how to run the development server. Share this with your whole team before writing any code.",
        BODY))
    div(s)

    # ── 1. What is Vite? ─────────────────────────────────────────
    s.append(Paragraph("1. What is Vite?", H1))
    s.append(Paragraph("Vite is the <b>build tool</b> that powers your project. It does two things:", BODY))
    rows = [
        ["When you code",   "Runs a lightning-fast local server so you can see changes instantly in the browser — no manual refresh needed (Hot Module Replacement, HMR)."],
        ["When you deploy", "Bundles all your code into optimised HTML, CSS, and JS files inside a dist/ folder that you upload to the server."],
    ]
    t = Table(rows, colWidths=[1.5*inch, 5*inch])
    t.setStyle(TableStyle([
        ("BACKGROUND",    (0,0), (0,-1), NAVY),
        ("TEXTCOLOR",     (0,0), (0,-1), WHITE),
        ("FONTNAME",      (0,0), (0,-1), "Helvetica-Bold"),
        ("BACKGROUND",    (1,0), (1,-1), LIGHT),
        ("FONTSIZE",      (0,0), (-1,-1), 9),
        ("LEADING",       (0,0), (-1,-1), 13),
        ("TOPPADDING",    (0,0), (-1,-1), 8),
        ("BOTTOMPADDING", (0,0), (-1,-1), 8),
        ("LEFTPADDING",   (0,0), (-1,-1), 10),
        ("VALIGN",        (0,0), (-1,-1), "TOP"),
        ("GRID",          (0,0), (-1,-1), 0.5, colors.HexColor("#cbd5e1")),
    ]))
    s.append(t)
    s.append(Spacer(1, 10))
    div(s)

    # ── 2. Commands ──────────────────────────────────────────────
    s.append(Paragraph("2. Essential Commands", H1))
    s.append(Paragraph(
        "Run these in your terminal from the project root folder. "
        "All team members need <b>Node.js</b> installed first (nodejs.org).", BODY))
    cmd_rows = [
        ["Command",        "What it does",                                         "When to use it"],
        ["npm install",    "Downloads all dependencies into node_modules/",         "Once, after cloning the repo"],
        ["npm run dev",    "Starts the local dev server at localhost:5173",         "Every time you sit down to code"],
        ["npm run build",  "Creates the production dist/ folder",                   "Before uploading to the server"],
        ["npm run preview","Serves dist/ locally to test before uploading",         "After building, before uploading"],
        ["npm run lint",   "Checks your code for errors",                           "Anytime; good before committing"],
    ]
    t = Table(cmd_rows, colWidths=[1.5*inch, 3.1*inch, 1.9*inch])
    t.setStyle(TableStyle([
        ("BACKGROUND",    (0,0), (-1,0), NAVY),
        ("TEXTCOLOR",     (0,0), (-1,0), WHITE),
        ("FONTNAME",      (0,0), (-1,0), "Helvetica-Bold"),
        ("FONTNAME",      (0,1), (0,-1), "Courier"),
        ("ROWBACKGROUNDS",(0,1), (-1,-1), [WHITE, GREY]),
        ("FONTSIZE",      (0,0), (-1,-1), 9),
        ("LEADING",       (0,0), (-1,-1), 13),
        ("TOPPADDING",    (0,0), (-1,-1), 7),
        ("BOTTOMPADDING", (0,0), (-1,-1), 7),
        ("LEFTPADDING",   (0,0), (-1,-1), 8),
        ("GRID",          (0,0), (-1,-1), 0.5, colors.HexColor("#cbd5e1")),
        ("VALIGN",        (0,0), (-1,-1), "MIDDLE"),
    ]))
    s.append(t)
    s.append(Spacer(1, 8))
    s.append(Paragraph(
        "TIP: After running npm run dev you will see a URL like http://localhost:5173 — "
        "open that in your browser. Every file you save updates the page automatically.", TIP))
    div(s)

    # ── 3. Folder structure ──────────────────────────────────────
    s.append(Paragraph("3. Project Folder Structure", H1))
    s.append(Paragraph("Here is every file and folder and exactly what it is for:", BODY))
    tree_rows = [
        ["Path",                   "Purpose",                                                                 "Edit it?"],
        ["index.html",             "The single HTML page. Vite injects your JS here. Only change the title.", "Rarely"],
        ["vite.config.js",         "Vite settings — plugins, port, aliases. Currently minimal.",              "Only if adding plugins"],
        ["package.json",           "Lists all dependencies and the npm scripts.",                              "Only when adding packages"],
        ["eslint.config.js",       "Linting rules — catches common code mistakes.",                           "Rarely"],
        ["public/",                "Static files served as-is without any processing.",                       "Add icons/favicons here"],
        ["public/favicon.svg",     "The small icon shown in the browser tab.",                                "Replace with your own"],
        ["src/",                   "ALL your actual code lives here.",                                        "Yes — your workspace"],
        ["src/main.jsx",           "Entry point — mounts App into the HTML. Do not change.",                  "No"],
        ["src/App.jsx",            "Root React component. Replace the Vite starter with your layout.",        "Yes — change this first"],
        ["src/index.css",          "Global base styles applied to the whole site.",                           "Yes — global styles"],
        ["src/assets/",            "Images and SVGs imported directly inside components.",                    "YES — add images here"],
        ["src/components/",        "Reusable UI pieces used on multiple pages (Navbar, Footer).",             "YES — shared UI here"],
        ["src/pages/",             "One file per page of the website (Home, About, Contact).",                "YES — your pages here"],
        ["src/styles/",            "CSS files scoped to specific components or pages.",                       "YES — component CSS"],
        ["docs/",                  "Team documentation. Not part of the website itself.",                     "Add team notes here"],
        ["node_modules/",          "Auto-generated. All installed packages. Never edit or commit.",           "NEVER"],
        ["dist/",                  "Auto-generated by npm run build. Upload this to the server.",             "NEVER"],
    ]
    t = Table(tree_rows, colWidths=[1.9*inch, 3.4*inch, 1.2*inch])
    t.setStyle(TableStyle([
        ("BACKGROUND",    (0,0),  (-1,0),  NAVY),
        ("TEXTCOLOR",     (0,0),  (-1,0),  WHITE),
        ("FONTNAME",      (0,0),  (-1,0),  "Helvetica-Bold"),
        ("FONTNAME",      (0,1),  (0,-1),  "Courier"),
        ("FONTSIZE",      (0,0),  (-1,-1), 8),
        ("LEADING",       (0,0),  (-1,-1), 12),
        ("ROWBACKGROUNDS",(0,1),  (-1,-1), [WHITE, GREY]),
        ("GRID",          (0,0),  (-1,-1), 0.5, colors.HexColor("#cbd5e1")),
        ("TOPPADDING",    (0,0),  (-1,-1), 6),
        ("BOTTOMPADDING", (0,0),  (-1,-1), 6),
        ("LEFTPADDING",   (0,0),  (-1,-1), 7),
        ("VALIGN",        (0,0),  (-1,-1), "TOP"),
    ]))
    s.append(t)
    s.append(Spacer(1, 10))
    div(s)

    # ── 4. Where things go ───────────────────────────────────────
    s.append(Paragraph("4. Where Does Everything Go?", H1))

    section_box(s, "Creating a new page",
        [Paragraph("Create a new .jsx file inside <b>src/pages/</b>. Example — an About page:", BODY),
         Paragraph(
            "// File: src/pages/About.jsx\n"
            "import '../styles/About.css'\n\n"
            "function About() {\n"
            "  return (\n"
            "    <main>\n"
            "      <h1>About Us</h1>\n"
            "      <p>Our team is ...</p>\n"
            "    </main>\n"
            "  )\n"
            "}\n\n"
            "export default About", CODE),
         Paragraph("Then create matching CSS at <b>src/styles/About.css</b> and import your page in App.jsx.", BODY)])

    section_box(s, "Adding images / pictures",
        [Paragraph("Save your image inside <b>src/assets/</b>, then import it at the top of your component:", BODY),
         Paragraph(
            "import teamPhoto from '../assets/team-photo.jpg'\n\n"
            "// use it in JSX:\n"
            "&lt;img src={teamPhoto} alt='Our team' /&gt;", CODE),
         Paragraph(
            "For files that never change (like a favicon), drop them in <b>public/</b> "
            "and reference as /filename.png — no import needed.", BODY)])

    section_box(s, "Creating a reusable component",
        [Paragraph("Put it in <b>src/components/</b>. Example — a Navbar used on every page:", BODY),
         Paragraph(
            "// File: src/components/Navbar.jsx\n"
            "function Navbar() {\n"
            "  return (\n"
            "    <nav>\n"
            "      <a href=\"/\">Home</a>\n"
            "      <a href=\"/about\">About</a>\n"
            "    </nav>\n"
            "  )\n"
            "}\n\n"
            "export default Navbar", CODE),
         Paragraph("Import it anywhere: <b>import Navbar from '../components/Navbar'</b>", BODY)])

    div(s)

    # ── 5. Team split ────────────────────────────────────────────
    s.append(Paragraph("5. Recommended Team Split", H1))
    s.append(Paragraph("Each person should own a clear area to avoid Git merge conflicts:", BODY))
    split_rows = [
        ["Role / Area",        "Folder",                                         "Notes"],
        ["Page owner (Home)",  "src/pages/Home.jsx\nsrc/styles/Home.css",        "Only this person edits these files"],
        ["Page owner (About)", "src/pages/About.jsx\nsrc/styles/About.css",      "Only this person edits these files"],
        ["Shared components",  "src/components/",                                "Agree on Navbar/Footer API together first"],
        ["Global styles",      "src/index.css",                                  "One person — announce changes to team"],
        ["Routing / App.jsx",  "src/App.jsx",                                    "One person wires pages with react-router"],
        ["Assets",             "src/assets/",                                    "Anyone can add files; avoid renaming existing"],
    ]
    t = Table(split_rows, colWidths=[1.7*inch, 2.5*inch, 2.3*inch])
    t.setStyle(TableStyle([
        ("BACKGROUND",    (0,0), (-1,0), NAVY),
        ("TEXTCOLOR",     (0,0), (-1,0), WHITE),
        ("FONTNAME",      (0,0), (-1,0), "Helvetica-Bold"),
        ("FONTNAME",      (0,1), (1,-1), "Courier"),
        ("FONTSIZE",      (0,0), (-1,-1), 8.5),
        ("LEADING",       (0,0), (-1,-1), 13),
        ("ROWBACKGROUNDS",(0,1), (-1,-1), [WHITE, GREY]),
        ("GRID",          (0,0), (-1,-1), 0.5, colors.HexColor("#cbd5e1")),
        ("TOPPADDING",    (0,0), (-1,-1), 7),
        ("BOTTOMPADDING", (0,0), (-1,-1), 7),
        ("LEFTPADDING",   (0,0), (-1,-1), 8),
        ("VALIGN",        (0,0), (-1,-1), "TOP"),
    ]))
    s.append(t)
    s.append(Spacer(1, 8))
    s.append(Paragraph(
        "FIRST STEP FOR EVERYONE: Clone the repo, run npm install, then npm run dev "
        "and confirm you see the site at localhost:5173 before writing any code.", TIP))

    doc.build(s)
    print("PDF 1 created.")


# ════════════════════════════════════════════════════════════════════
# PDF 2 — GitHub Workflow + Deploying to Professor's Server
# ════════════════════════════════════════════════════════════════════
def pdf2():
    doc = SimpleDocTemplate(
        "github-and-deployment.pdf",
        pagesize=letter,
        leftMargin=0.9*inch, rightMargin=0.9*inch,
        topMargin=0.9*inch,  bottomMargin=0.9*inch,
    )
    s = []

    s.append(cover_block("Team Guide — Part 2", "GitHub Workflow + Server Deployment"))
    s.append(Spacer(1, 14))
    s.append(Paragraph(
        "This guide covers how your team uses GitHub together day-to-day, and how to build "
        "and upload the finished website to your professor's server via FTP/SFTP.",
        BODY))
    div(s)

    # ── 1. One-time setup ────────────────────────────────────────
    s.append(Paragraph("1. One-Time Setup (Every Team Member)", H1))
    s.append(Paragraph("Every person on the team does this once on their own computer:", BODY))

    steps = [
        ("Install Git",
         "Download from git-scm.com and run the installer. On Mac, open Terminal and type: "
         "git --version (it may prompt you to install automatically)."),
        ("Install Node.js",
         "Download the LTS version from nodejs.org. This also installs npm, which you need to run Vite commands."),
        ("Clone the repository",
         "Open Terminal (Mac) or Command Prompt (Windows), navigate to where you want the project, then run:\n"
         "    git clone https://github.com/jegboose/web-programming-website-project.git\n"
         "    cd web-programming-website-project"),
        ("Install dependencies",
         "Inside the project folder run:\n"
         "    npm install\n"
         "This downloads all packages into node_modules/ (this folder is gitignored — never commit it)."),
        ("Verify it works",
         "Run:\n"
         "    npm run dev\n"
         "Open http://localhost:5173 in your browser. You should see the website."),
    ]
    for i, (title, body) in enumerate(steps, 1):
        s.append(step_row(i, title, body))
        s.append(Spacer(1, 4))

    div(s)

    # ── 2. Daily workflow ────────────────────────────────────────
    s.append(Paragraph("2. Daily GitHub Workflow", H1))
    s.append(Paragraph(
        "Follow this every time you sit down to code. "
        "The golden rule: <b>always pull before you start, always commit small, always push when done.</b>", BODY))
    flow_rows = [
        ["Step",              "Command",                                         "What it does"],
        ["1. Pull latest",    "git pull origin main",                            "Grab any changes your teammates pushed"],
        ["2. Check status",   "git status",                                      "See which files you have changed"],
        ["3. Stage changes",  "git add src/pages/Home.jsx",                      "Mark specific files ready to commit"],
        ["3b. Stage all",     "git add .",                                       "Stage every changed file (use carefully)"],
        ["4. Commit",         'git commit -m "Add hero section to Home page"',   "Save a snapshot with a description"],
        ["5. Push",           "git push origin main",                            "Upload your commit to GitHub"],
    ]
    t = Table(flow_rows, colWidths=[1.2*inch, 2.7*inch, 2.6*inch])
    t.setStyle(TableStyle([
        ("BACKGROUND",    (0,0), (-1,0), NAVY),
        ("TEXTCOLOR",     (0,0), (-1,0), WHITE),
        ("FONTNAME",      (0,0), (-1,0), "Helvetica-Bold"),
        ("FONTNAME",      (0,1), (1,-1), "Courier"),
        ("FONTSIZE",      (0,0), (-1,-1), 8.5),
        ("LEADING",       (0,0), (-1,-1), 13),
        ("ROWBACKGROUNDS",(0,1), (-1,-1), [WHITE, GREY]),
        ("GRID",          (0,0), (-1,-1), 0.5, colors.HexColor("#cbd5e1")),
        ("TOPPADDING",    (0,0), (-1,-1), 7),
        ("BOTTOMPADDING", (0,0), (-1,-1), 7),
        ("LEFTPADDING",   (0,0), (-1,-1), 8),
        ("VALIGN",        (0,0), (-1,-1), "MIDDLE"),
    ]))
    s.append(t)
    s.append(Spacer(1, 8))
    s.append(Paragraph(
        "Write commit messages that describe what changed, e.g. \"Add contact form to Contact page\" "
        "not \"updated stuff\". This helps teammates understand the history.", TIP))
    s.append(Spacer(1, 4))
    s.append(Paragraph(
        "MERGE CONFLICTS: If git pull says there is a conflict, open the affected file, "
        "look for the <<<<<<< markers, decide which code to keep, delete the markers, "
        "then git add the file and git commit.", WARN))
    div(s)

    # ── 3. Branches ──────────────────────────────────────────────
    s.append(Paragraph("3. Using Branches (Recommended for Teams)", H1))
    s.append(Paragraph(
        "Instead of everyone pushing directly to main, each person works on their own branch "
        "and opens a Pull Request on GitHub when done. This prevents overwriting each other's work.", BODY))
    s.append(Paragraph(
        "git checkout -b feature/about-page      # create and switch to your branch\n"
        "# ... write your code ...\n"
        "git add .\n"
        'git commit -m "Build out About page"\n'
        "git push origin feature/about-page\n"
        "# Then open GitHub.com and click Compare & pull request", CODE))
    s.append(Paragraph(
        "One person (team lead) reviews and merges the Pull Request into main. "
        "Everyone then runs git pull origin main to get the merged code.", BODY))
    div(s)

    # ── 4. Build ─────────────────────────────────────────────────
    s.append(Paragraph("4. Build the Website for the Server", H1))
    s.append(Paragraph(
        "When you are ready to upload to the professor's server, first create a production build:", BODY))
    s.append(Paragraph("npm run build", CODE))
    s.append(Paragraph(
        "This creates a <b>dist/</b> folder. That folder is your complete website — optimised "
        "HTML, CSS, and JavaScript. <b>Upload the contents of dist/, not your src/ folder.</b>", BODY))
    build_rows = [
        ["What gets created", "What it is"],
        ["dist/index.html",   "The main HTML page"],
        ["dist/assets/",      "All your JS, CSS, and images — bundled and minified"],
    ]
    t = Table(build_rows, colWidths=[2*inch, 4.5*inch])
    t.setStyle(TableStyle([
        ("BACKGROUND",    (0,0), (-1,0), NAVY),
        ("TEXTCOLOR",     (0,0), (-1,0), WHITE),
        ("FONTNAME",      (0,0), (-1,0), "Helvetica-Bold"),
        ("FONTNAME",      (0,1), (0,-1), "Courier"),
        ("BACKGROUND",    (0,1), (-1,-1), LIGHT),
        ("FONTSIZE",      (0,0), (-1,-1), 9),
        ("LEADING",       (0,0), (-1,-1), 13),
        ("GRID",          (0,0), (-1,-1), 0.5, colors.HexColor("#cbd5e1")),
        ("TOPPADDING",    (0,0), (-1,-1), 7),
        ("BOTTOMPADDING", (0,0), (-1,-1), 7),
        ("LEFTPADDING",   (0,0), (-1,-1), 10),
    ]))
    s.append(t)
    s.append(Spacer(1, 8))
    div(s)

    # ── 5. FTP upload ────────────────────────────────────────────
    s.append(Paragraph("5. Upload to the Professor's Server via FTP/SFTP", H1))
    s.append(Paragraph(
        "You will need an FTP client. We recommend <b>FileZilla</b> — free, works on Mac and Windows.", BODY))

    ftp_steps = [
        ("Download FileZilla",
         "Go to filezilla-project.org and download FileZilla Client (not Server). Install it normally."),
        ("Get your credentials",
         "Ask your professor for:\n"
         "  - Host (e.g. sftp://cs.university.edu or an IP address)\n"
         "  - Username and Password\n"
         "  - Port (22 for SFTP, 21 for plain FTP — prefer SFTP)"),
        ("Connect",
         "Open FileZilla. At the very top enter the Host, Username, Password, and Port. Click Quickconnect."),
        ("Navigate on the server",
         "The right panel is the server. Navigate to your designated folder — "
         "often named public_html, www, or htdocs."),
        ("Navigate locally",
         "The left panel is your computer. Navigate inside your project's dist/ folder."),
        ("Upload",
         "Select everything inside dist/ and drag it to the right panel. "
         "If asked about overwriting, choose Overwrite."),
        ("Verify",
         "Open your professor's server URL in a browser and confirm the site loads correctly."),
    ]
    for i, (title, body) in enumerate(ftp_steps, 1):
        s.append(step_row(i, title, body))
        s.append(Spacer(1, 4))

    s.append(Spacer(1, 4))
    s.append(Paragraph(
        "Every time you make changes: run npm run build again, then re-upload "
        "the contents of dist/ using the same steps. Overwrite the existing files.", TIP))
    div(s)

    # ── 6. Checklist ─────────────────────────────────────────────
    s.append(Paragraph("6. Quick-Reference Checklist", H1))
    checks = [
        "git pull origin main  —  before starting any work",
        "Code your changes in src/",
        "npm run dev  —  to preview locally at localhost:5173",
        "git add [files]  then  git commit -m 'message'",
        "git push origin main  —  when finished for the day",
        "npm run build  —  when ready to deploy to the server",
        "FileZilla: upload contents of dist/ to server folder",
        "Check the live URL to confirm everything looks correct",
    ]
    chk_style = S("cl", fontSize=9, leading=13, fontName="Courier", textColor=BLACK)
    for c in checks:
        row = Table([[
            Paragraph(" ", S("chkd", fontSize=8, leading=12, textColor=WHITE, alignment=TA_CENTER)),
            Paragraph(c, chk_style),
        ]], colWidths=[0.25*inch, 6.25*inch])
        row.setStyle(TableStyle([
            ("BACKGROUND",    (0,0), (0,0), GREEN),
            ("BACKGROUND",    (1,0), (1,0), GREEN_BG),
            ("TOPPADDING",    (0,0), (-1,-1), 6),
            ("BOTTOMPADDING", (0,0), (-1,-1), 6),
            ("LEFTPADDING",   (1,0), (1,0), 10),
            ("BOX",           (0,0), (-1,-1), 0.5, colors.HexColor("#86efac")),
        ]))
        s.append(row)
        s.append(Spacer(1, 3))

    doc.build(s)
    print("PDF 2 created.")


if __name__ == "__main__":
    import os
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    pdf1()
    pdf2()
    print("Done. Both PDFs saved in docs/")
