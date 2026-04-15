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
NAVY   = colors.HexColor("#1e3a5f")
BLUE   = colors.HexColor("#2563eb")
LIGHT  = colors.HexColor("#eff6ff")
GREY   = colors.HexColor("#f1f5f9")
GREEN  = colors.HexColor("#166534")
GREEN_BG = colors.HexColor("#dcfce7")
ORANGE = colors.HexColor("#9a3412")
ORANGE_BG = colors.HexColor("#ffedd5")
WHITE  = colors.white
BLACK  = colors.black
MID    = colors.HexColor("#64748b")

# ── Style helpers ────────────────────────────────────────────────────
base_styles = getSampleStyleSheet()

def S(name, **kw):
    """Create a ParagraphStyle inheriting from Normal."""
    return ParagraphStyle(name, parent=base_styles["Normal"], **kw)

H1   = S("H1",   fontSize=22, textColor=NAVY,  spaceAfter=6,  spaceBefore=18, fontName="Helvetica-Bold")
H2   = S("H2",   fontSize=14, textColor=BLUE,  spaceAfter=4,  spaceBefore=14, fontName="Helvetica-Bold")
H3   = S("H3",   fontSize=11, textColor=NAVY,  spaceAfter=3,  spaceBefore=10, fontName="Helvetica-Bold")
BODY = S("BODY", fontSize=10, textColor=BLACK, spaceAfter=5,  leading=15)
SMALL= S("SMALL",fontSize=9,  textColor=MID,   spaceAfter=3,  leading=13)
CODE = S("CODE", fontSize=9,  textColor=colors.HexColor("#1e293b"),
         fontName="Courier", backColor=GREY, spaceAfter=6,
         leftIndent=12, rightIndent=12, spaceBefore=4,
         borderPad=6, leading=14)
TIP  = S("TIP",  fontSize=9,  textColor=GREEN, spaceAfter=3,  leading=13,
         backColor=GREEN_BG, leftIndent=10, rightIndent=10, borderPad=5)
WARN = S("WARN", fontSize=9,  textColor=ORANGE,spaceAfter=3,  leading=13,
         backColor=ORANGE_BG,leftIndent=10, rightIndent=10, borderPad=5)
CTR  = S("CTR",  fontSize=10, textColor=WHITE, alignment=TA_CENTER,
         fontName="Helvetica-Bold", leading=14)

def div(story):
    story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor("#cbd5e1"),
                             spaceAfter=8, spaceBefore=4))

def badge_table(items, bg=BLUE):
    """Horizontal list of badge-style chips."""
    cells = [[Paragraph(f'<font color="white"><b>{i}</b></font>', CTR)] for i in items]
    t = Table([cells[0::1]], colWidths=[1.4*inch]*len(items))
    t.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,-1), bg),
        ("ROUNDEDCORNERS", [4]),
        ("ALIGN", (0,0), (-1,-1), "CENTER"),
        ("VALIGN", (0,0), (-1,-1), "MIDDLE"),
        ("ROWBACKGROUNDS", (0,0), (-1,-1), [bg]),
        ("TOPPADDING", (0,0), (-1,-1), 5),
        ("BOTTOMPADDING", (0,0), (-1,-1), 5),
    ]))
    return t

def section_box(story, title, content_paragraphs, bg=LIGHT):
    data = [[Paragraph(f'<b>{title}</b>', S("bh", fontSize=11, textColor=NAVY,
                                             fontName="Helvetica-Bold"))]]
    for p in content_paragraphs:
        data.append([p])
    t = Table(data, colWidths=[6.5*inch])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (0,0), NAVY),
        ("TEXTCOLOR",  (0,0), (0,0), WHITE),
        ("BACKGROUND", (0,1), (0,-1), bg),
        ("BOX",        (0,0), (-1,-1), 1, colors.HexColor("#cbd5e1")),
        ("TOPPADDING",    (0,0), (-1,-1), 7),
        ("BOTTOMPADDING", (0,0), (-1,-1), 7),
        ("LEFTPADDING",   (0,0), (-1,-1), 10),
        ("RIGHTPADDING",  (0,0), (-1,-1), 10),
    ]))
    story.append(KeepTogether([t, Spacer(1, 10)]))

# ════════════════════════════════════════════════════════════════════
# PDF 1 — Project Structure & Vite Guide
# ════════════════════════════════════════════════════════════════════
def pdf1():
    doc = SimpleDocTemplate(
        "Team_Guide_1_Vite_and_Project_Structure.pdf",
        pagesize=letter,
        leftMargin=0.9*inch, rightMargin=0.9*inch,
        topMargin=0.9*inch,  bottomMargin=0.9*inch,
    )
    s = []

    # ── Cover block ──────────────────────────────────────────────
    cover = Table([[Paragraph(
        '<font color="white"><b>Team Guide — Part 1</b><br/>'
        '<font size="20">Vite + Project Structure</font></font>',
        S("cov", fontSize=13, textColor=WHITE, alignment=TA_CENTER, leading=26)
    )]], colWidths=[6.5*inch])
    cover.setStyle(TableStyle([
        ("BACKGROUND",    (0,0), (-1,-1), NAVY),
        ("ALIGN",         (0,0), (-1,-1), "CENTER"),
        ("TOPPADDING",    (0,0), (-1,-1), 22),
        ("BOTTOMPADDING", (0,0), (-1,-1), 22),
        ("ROUNDEDCORNERS",[6]),
    ]))
    s.append(cover)
    s.append(Spacer(1, 16))
    s.append(Paragraph(
        "This guide explains how the project is organised, what every file and folder does, "
        "and how to run the development server. Share this with your whole team before writing any code.",
        BODY))
    div(s)

    # ── 1. What is Vite? ─────────────────────────────────────────
    s.append(Paragraph("1. What is Vite?", H1))
    s.append(Paragraph(
        "Vite is the <b>build tool</b> that powers your project. It does two things:", BODY))
    rows = [
        ["When you code", "Runs a lightning-fast local server so you can see changes instantly in the browser — no manual refresh needed (this is called Hot Module Replacement, HMR)."],
        ["When you deploy", "Bundles all your code into a small, optimised set of files (HTML, CSS, JS) inside a <b>dist/</b> folder that you upload to the server."],
    ]
    t = Table(rows, colWidths=[1.5*inch, 5*inch])
    t.setStyle(TableStyle([
        ("BACKGROUND",    (0,0), (0,-1), NAVY),
        ("TEXTCOLOR",     (0,0), (0,-1), WHITE),
        ("FONTNAME",      (0,0), (0,-1), "Helvetica-Bold"),
        ("BACKGROUND",    (1,0), (1,-1), LIGHT),
        ("FONTSIZE",      (0,0), (-1,-1), 9),
        ("TOPPADDING",    (0,0), (-1,-1), 8),
        ("BOTTOMPADDING", (0,0), (-1,-1), 8),
        ("LEFTPADDING",   (0,0), (-1,-1), 10),
        ("VALIGN",        (0,0), (-1,-1), "TOP"),
        ("GRID",          (0,0), (-1,-1), 0.5, colors.HexColor("#cbd5e1")),
    ]))
    s.append(t)
    s.append(Spacer(1, 10))
    div(s)

    # ── 2. NPM commands ──────────────────────────────────────────
    s.append(Paragraph("2. Essential Commands", H1))
    s.append(Paragraph(
        "Run these in your terminal from the project root folder. "
        "All team members need <b>Node.js</b> installed first (nodejs.org).", BODY))
    cmd_rows = [
        ["Command", "What it does", "When to use it"],
        ["npm install",    "Downloads all dependencies into node_modules/",     "Once, after cloning the repo"],
        ["npm run dev",    "Starts the local dev server at localhost:5173",     "Every time you sit down to code"],
        ["npm run build",  "Creates the production dist/ folder",               "Before uploading to the server"],
        ["npm run preview","Serves the dist/ folder locally to test it",        "After building, before uploading"],
        ["npm run lint",   "Checks your code for errors",                       "Anytime; good before committing"],
    ]
    t = Table(cmd_rows, colWidths=[1.5*inch, 3.1*inch, 1.9*inch])
    t.setStyle(TableStyle([
        ("BACKGROUND",    (0,0), (-1,0), NAVY),
        ("TEXTCOLOR",     (0,0), (-1,0), WHITE),
        ("FONTNAME",      (0,0), (-1,0), "Helvetica-Bold"),
        ("FONTNAME",      (0,1), (0,-1), "Courier"),
        ("BACKGROUND",    (0,1), (-1,-1), WHITE),
        ("ROWBACKGROUNDS",(0,1), (-1,-1), [WHITE, GREY]),
        ("FONTSIZE",      (0,0), (-1,-1), 9),
        ("TOPPADDING",    (0,0), (-1,-1), 7),
        ("BOTTOMPADDING", (0,0), (-1,-1), 7),
        ("LEFTPADDING",   (0,0), (-1,-1), 8),
        ("GRID",          (0,0), (-1,-1), 0.5, colors.HexColor("#cbd5e1")),
        ("VALIGN",        (0,0), (-1,-1), "MIDDLE"),
    ]))
    s.append(t)
    s.append(Spacer(1, 8))
    s.append(Paragraph(
        "TIP: After running <b>npm run dev</b> you will see a URL like http://localhost:5173 — "
        "open that in your browser. Every file you save updates the browser automatically.", TIP))
    div(s)

    # ── 3. Folder structure ──────────────────────────────────────
    s.append(Paragraph("3. Project Folder Structure", H1))
    s.append(Paragraph(
        "Here is every file and folder in the project and exactly what it is for:", BODY))

    tree_rows = [
        ["Path", "Purpose", "Do you edit it?"],
        ["index.html",         "The single HTML page. Vite injects your JS here. Only change the &lt;title&gt;.", "Rarely"],
        ["vite.config.js",     "Vite settings — plugins, port, aliases. Currently minimal.", "Only if adding plugins"],
        ["package.json",       "Lists all dependencies and the npm scripts.", "Only when adding packages"],
        ["eslint.config.js",   "Linting rules — catches common code mistakes.", "Rarely"],
        ["public/",            "Static files served as-is without any processing.", "Add icons/favicons here"],
        ["public/favicon.svg", "The small icon shown in the browser tab.", "Replace with your own icon"],
        ["public/icons.svg",   "SVG sprite used in App.jsx for icons.", "Add your own SVG icons here"],
        ["src/",               "ALL your actual code lives here.", "Yes — this is your workspace"],
        ["src/main.jsx",       "Entry point — mounts the root App component into the HTML. Do not change.", "No"],
        ["src/App.jsx",        "Root React component. Currently shows Vite starter page. Replace with your layout.", "Yes — first thing to change"],
        ["src/index.css",      "Global base styles applied to the whole site (body, fonts, reset).", "Yes — global styles"],
        ["src/assets/",        "Images and SVGs imported directly inside components.", "YES — add images here"],
        ["src/components/",    "Reusable UI pieces used on multiple pages (Navbar, Footer, Button).", "YES — shared UI here"],
        ["src/pages/",         "One file per page of the website (Home, About, Contact, etc.).", "YES — your pages here"],
        ["src/styles/",        "CSS files scoped to specific components or pages.", "YES — component CSS here"],
        ["docs/",              "Project documentation. Not part of the website itself.", "Add team notes here"],
        ["node_modules/",      "Auto-generated. All installed packages. Never edit or commit this.", "NEVER"],
        ["dist/",              "Auto-generated by npm run build. The files you upload to the server.", "NEVER — auto-generated"],
    ]
    t = Table(tree_rows, colWidths=[1.9*inch, 3.5*inch, 1.1*inch])
    t.setStyle(TableStyle([
        ("BACKGROUND",    (0,0),  (-1,0),  NAVY),
        ("TEXTCOLOR",     (0,0),  (-1,0),  WHITE),
        ("FONTNAME",      (0,0),  (-1,0),  "Helvetica-Bold"),
        ("FONTNAME",      (0,1),  (0,-1),  "Courier"),
        ("FONTSIZE",      (0,0),  (-1,-1), 8),
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

    # ── 4. Where to put things ───────────────────────────────────
    s.append(Paragraph("4. Where Does Everything Go?", H1))

    section_box(s, "Creating a new page",
        [Paragraph("Create a new <b>.jsx</b> file inside <b>src/pages/</b>.", BODY),
         Paragraph("Example — to make an About page:", BODY),
         Paragraph("File: src/pages/About.jsx", CODE),
         Paragraph(
            "import '../styles/About.css'\n\n"
            "function About() {\n"
            "  return (\n"
            "    &lt;main&gt;\n"
            "      &lt;h1&gt;About Us&lt;/h1&gt;\n"
            "      &lt;p&gt;Our team is ...&lt;/p&gt;\n"
            "    &lt;/main&gt;\n"
            "  )\n"
            "}\n\n"
            "export default About", CODE),
         Paragraph("Then create matching CSS at <b>src/styles/About.css</b> and import your page in App.jsx.", BODY)])

    section_box(s, "Adding images / pictures",
        [Paragraph("Save your image file inside <b>src/assets/</b>, then import it at the top of your component:", BODY),
         Paragraph(
            "import teamPhoto from '../assets/team-photo.jpg'\n\n"
            "// then use it in JSX:\n"
            "&lt;img src={teamPhoto} alt=\"Our team\" /&gt;", CODE),
         Paragraph(
            "For images that never change (like a favicon), you can also drop them in <b>public/</b> "
            "and reference them as /filename.png without any import.", BODY)])

    section_box(s, "Creating a reusable component",
        [Paragraph("Put it in <b>src/components/</b>. Example — a Navbar used on every page:", BODY),
         Paragraph(
            "File: src/components/Navbar.jsx\n\n"
            "function Navbar() {\n"
            "  return (\n"
            "    &lt;nav&gt;\n"
            "      &lt;a href=\"/\"&gt;Home&lt;/a&gt;\n"
            "      &lt;a href=\"/about\"&gt;About&lt;/a&gt;\n"
            "    &lt;/nav&gt;\n"
            "  )\n"
            "}\n\n"
            "export default Navbar", CODE),
         Paragraph("Import it in any page: <b>import Navbar from '../components/Navbar'</b>", BODY)])

    div(s)

    # ── 5. Recommended team split ────────────────────────────────
    s.append(Paragraph("5. Recommended Team Split", H1))
    s.append(Paragraph(
        "Each person should own a clear area to avoid Git merge conflicts:", BODY))

    split_rows = [
        ["Role / Area",         "Folder",              "Notes"],
        ["Page owner (Home)",   "src/pages/Home.jsx\nsrc/styles/Home.css",   "Only this person edits these files"],
        ["Page owner (About)",  "src/pages/About.jsx\nsrc/styles/About.css", "Only this person edits these files"],
        ["Shared components",   "src/components/",     "Agree on Navbar/Footer API together first"],
        ["Global styles",       "src/index.css",       "One person — announce changes to team"],
        ["Routing / App.jsx",   "src/App.jsx",         "One person wires pages together with react-router"],
        ["Assets",              "src/assets/",         "Anyone can add files; avoid renaming existing ones"],
    ]
    t = Table(split_rows, colWidths=[1.7*inch, 2.5*inch, 2.3*inch])
    t.setStyle(TableStyle([
        ("BACKGROUND",    (0,0), (-1,0), NAVY),
        ("TEXTCOLOR",     (0,0), (-1,0), WHITE),
        ("FONTNAME",      (0,0), (-1,0), "Helvetica-Bold"),
        ("FONTNAME",      (0,1), (1,-1), "Courier"),
        ("FONTSIZE",      (0,0), (-1,-1), 8.5),
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
        "Team_Guide_2_GitHub_and_Server_Deployment.pdf",
        pagesize=letter,
        leftMargin=0.9*inch, rightMargin=0.9*inch,
        topMargin=0.9*inch,  bottomMargin=0.9*inch,
    )
    s = []

    # ── Cover block ──────────────────────────────────────────────
    cover = Table([[Paragraph(
        '<font color="white"><b>Team Guide — Part 2</b><br/>'
        '<font size="20">GitHub Workflow + Server Deployment</font></font>',
        S("cov2", fontSize=13, textColor=WHITE, alignment=TA_CENTER, leading=26)
    )]], colWidths=[6.5*inch])
    cover.setStyle(TableStyle([
        ("BACKGROUND",    (0,0), (-1,-1), NAVY),
        ("ALIGN",         (0,0), (-1,-1), "CENTER"),
        ("TOPPADDING",    (0,0), (-1,-1), 22),
        ("BOTTOMPADDING", (0,0), (-1,-1), 22),
    ]))
    s.append(cover)
    s.append(Spacer(1, 16))
    s.append(Paragraph(
        "This guide covers how your team uses GitHub together day-to-day, and how to build "
        "and upload the finished website to your professor's server via FTP/SFTP.",
        BODY))
    div(s)

    # ── 1. One-time setup ────────────────────────────────────────
    s.append(Paragraph("1. One-Time Setup (Every Team Member)", H1))
    s.append(Paragraph(
        "Every person on the team does this once on their own computer:", BODY))

    steps = [
        ("Install Git", "Download from git-scm.com and run the installer. On Mac, open Terminal and type: git --version (it may prompt you to install automatically)."),
        ("Install Node.js", "Download the LTS version from nodejs.org. This also installs npm, which you need to run Vite commands."),
        ("Clone the repository", "Open Terminal (Mac) or Command Prompt (Windows), navigate to where you want the project, then run:\n    git clone https://github.com/YOUR-ORG/YOUR-REPO.git\n    cd YOUR-REPO"),
        ("Install dependencies", "Inside the project folder run:\n    npm install\nThis downloads all packages into node_modules/ (this folder is gitignored — never commit it)."),
        ("Verify it works", "Run:\n    npm run dev\nOpen http://localhost:5173 in your browser. You should see the website."),
    ]
    for i, (title, body) in enumerate(steps, 1):
        num_table = Table([[
            Paragraph(f'<font color="white"><b>{i}</b></font>',
                      S("num", fontSize=13, textColor=WHITE, alignment=TA_CENTER)),
            Paragraph(f'<b>{title}</b><br/>{body}',
                      S("step", fontSize=9, textColor=BLACK, leading=14))
        ]], colWidths=[0.35*inch, 6.15*inch])
        num_table.setStyle(TableStyle([
            ("BACKGROUND",    (0,0), (0,0), BLUE),
            ("BACKGROUND",    (1,0), (1,0), LIGHT),
            ("ALIGN",         (0,0), (0,0), "CENTER"),
            ("VALIGN",        (0,0), (-1,-1), "TOP"),
            ("TOPPADDING",    (0,0), (-1,-1), 8),
            ("BOTTOMPADDING", (0,0), (-1,-1), 8),
            ("LEFTPADDING",   (0,0), (0,0), 0),
            ("LEFTPADDING",   (1,0), (1,0), 10),
            ("BOX",           (0,0), (-1,-1), 0.5, colors.HexColor("#cbd5e1")),
        ]))
        s.append(num_table)
        s.append(Spacer(1, 4))

    div(s)

    # ── 2. Daily GitHub workflow ─────────────────────────────────
    s.append(Paragraph("2. Daily GitHub Workflow", H1))
    s.append(Paragraph(
        "Follow this flow every time you sit down to code. "
        "The golden rule: <b>always pull before you start, always commit small, always push when done.</b>", BODY))

    flow_rows = [
        ["Step", "Command", "What it does"],
        ["1. Pull latest", "git pull origin main",              "Grab any changes your teammates pushed"],
        ["2. Check status", "git status",                        "See which files you have changed"],
        ["3. Stage changes", "git add src/pages/Home.jsx",       "Mark specific files ready to commit"],
        ["3b. Stage all",   "git add .",                         "Stage every changed file at once (use carefully)"],
        ["4. Commit",       'git commit -m "Add hero section to Home page"', "Save a snapshot with a description"],
        ["5. Push",         "git push origin main",              "Upload your commit to GitHub"],
    ]
    t = Table(flow_rows, colWidths=[1.2*inch, 2.7*inch, 2.6*inch])
    t.setStyle(TableStyle([
        ("BACKGROUND",    (0,0), (-1,0), NAVY),
        ("TEXTCOLOR",     (0,0), (-1,0), WHITE),
        ("FONTNAME",      (0,0), (-1,0), "Helvetica-Bold"),
        ("FONTNAME",      (0,1), (1,-1), "Courier"),
        ("FONTSIZE",      (0,0), (-1,-1), 8.5),
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
        "Write commit messages that describe WHAT changed, e.g. \"Add contact form to Contact page\" "
        "not \"updated stuff\". This helps teammates understand your history.", TIP))
    s.append(Spacer(1, 4))
    s.append(Paragraph(
        "MERGE CONFLICTS: If git pull says there is a conflict, open the affected file, "
        "look for the &lt;&lt;&lt;&lt;&lt;&lt;&lt; markers, decide which code to keep, delete the markers, "
        "then git add the file and git commit.", WARN))

    div(s)

    # ── 3. Branches (optional but recommended) ───────────────────
    s.append(Paragraph("3. Using Branches (Recommended for Teams)", H1))
    s.append(Paragraph(
        "Instead of everyone pushing directly to main, each person works on their own branch "
        "and opens a Pull Request on GitHub when done. This prevents overwriting each other's work.", BODY))
    s.append(Paragraph(
        "git checkout -b feature/about-page      # create & switch to your branch\n"
        "# ... write your code ...\n"
        "git add .\n"
        'git commit -m "Build out About page"\n'
        "git push origin feature/about-page      # push your branch\n"
        "# Then open GitHub.com and click Compare & pull request", CODE))
    s.append(Paragraph(
        "One person (team lead) reviews and merges the Pull Request into main. "
        "Everyone then runs git pull origin main to get the merged code.", BODY))
    div(s)

    # ── 4. Build for production ──────────────────────────────────
    s.append(Paragraph("4. Build the Website for the Server", H1))
    s.append(Paragraph(
        "When you are ready to upload to the professor's server, first create a production build:", BODY))
    s.append(Paragraph("npm run build", CODE))
    s.append(Paragraph(
        "This creates a <b>dist/</b> folder in your project. "
        "That folder contains your complete website — optimised HTML, CSS, and JavaScript. "
        "<b>This is what you upload — not src/, not node_modules/, just the contents of dist/.</b>", BODY))

    build_rows = [
        ["What gets created",  "What it is"],
        ["dist/index.html",    "The main HTML page"],
        ["dist/assets/",       "All your JS, CSS, and images — bundled and minified"],
    ]
    t = Table(build_rows, colWidths=[2*inch, 4.5*inch])
    t.setStyle(TableStyle([
        ("BACKGROUND",    (0,0), (-1,0), NAVY),
        ("TEXTCOLOR",     (0,0), (-1,0), WHITE),
        ("FONTNAME",      (0,0), (-1,0), "Helvetica-Bold"),
        ("FONTNAME",      (0,1), (0,-1), "Courier"),
        ("BACKGROUND",    (0,1), (-1,-1), LIGHT),
        ("FONTSIZE",      (0,0), (-1,-1), 9),
        ("GRID",          (0,0), (-1,-1), 0.5, colors.HexColor("#cbd5e1")),
        ("TOPPADDING",    (0,0), (-1,-1), 7),
        ("BOTTOMPADDING", (0,0), (-1,-1), 7),
        ("LEFTPADDING",   (0,0), (-1,-1), 10),
    ]))
    s.append(t)
    s.append(Spacer(1, 8))
    div(s)

    # ── 5. Upload via FTP ────────────────────────────────────────
    s.append(Paragraph("5. Upload to the Professor's Server via FTP/SFTP", H1))
    s.append(Paragraph(
        "You will need an FTP client. We recommend <b>FileZilla</b> — it is free and works on Mac and Windows.", BODY))

    ftp_steps = [
        ("Download FileZilla", "Go to filezilla-project.org and download FileZilla Client (not Server). Install it normally."),
        ("Get your credentials", "Ask your professor for:\n  - Host (e.g. sftp://cs.university.edu or an IP address)\n  - Username\n  - Password\n  - Port (22 for SFTP, 21 for plain FTP — prefer SFTP)"),
        ("Connect", "Open FileZilla. At the very top fill in:\n  Host | Username | Password | Port\nThen click Quickconnect."),
        ("Navigate on the server", "The right panel is the server. Navigate to the folder your professor told you to use — often named public_html, www, or htdocs."),
        ("Navigate locally", "The left panel is your computer. Navigate to your project's dist/ folder."),
        ("Upload", "Select all files and folders inside dist/ (not the dist/ folder itself — go inside it first). Drag them to the right panel.\n\nIf asked about overwriting, choose Overwrite."),
        ("Verify", "Open your professor's server URL in a browser and confirm the site loads correctly."),
    ]
    for i, (title, body) in enumerate(ftp_steps, 1):
        num_table = Table([[
            Paragraph(f'<font color="white"><b>{i}</b></font>',
                      S(f"n{i}", fontSize=13, textColor=WHITE, alignment=TA_CENTER)),
            Paragraph(f'<b>{title}</b><br/>{body}',
                      S(f"s{i}", fontSize=9, textColor=BLACK, leading=14))
        ]], colWidths=[0.35*inch, 6.15*inch])
        num_table.setStyle(TableStyle([
            ("BACKGROUND",    (0,0), (0,0), BLUE),
            ("BACKGROUND",    (1,0), (1,0), LIGHT),
            ("ALIGN",         (0,0), (0,0), "CENTER"),
            ("VALIGN",        (0,0), (-1,-1), "TOP"),
            ("TOPPADDING",    (0,0), (-1,-1), 8),
            ("BOTTOMPADDING", (0,0), (-1,-1), 8),
            ("LEFTPADDING",   (0,0), (0,0), 0),
            ("LEFTPADDING",   (1,0), (1,0), 10),
            ("BOX",           (0,0), (-1,-1), 0.5, colors.HexColor("#cbd5e1")),
        ]))
        s.append(num_table)
        s.append(Spacer(1, 4))

    s.append(Spacer(1, 4))
    s.append(Paragraph(
        "Every time you make changes: run npm run build again, then re-upload the contents of dist/ "
        "using the same steps above. Overwrite the existing files.", TIP))
    div(s)

    # ── 6. Quick reference ───────────────────────────────────────
    s.append(Paragraph("6. Quick-Reference Checklist", H1))
    checks = [
        "git pull origin main  —  before starting any work",
        "Code your changes in src/",
        "npm run dev  —  to preview locally at localhost:5173",
        "git add [files]  then  git commit -m 'message'",
        "git push origin main  —  when finished for the day",
        "npm run build  —  when ready to deploy to server",
        "FileZilla: upload contents of dist/ to server folder",
        "Check the live URL to confirm everything looks correct",
    ]
    for c in checks:
        row = Table([[
            Paragraph('<font color="white"> </font>',
                      S("chk", fontSize=8, textColor=WHITE, alignment=TA_CENTER)),
            Paragraph(c, S("cl", fontSize=9, fontName="Courier", leading=13, textColor=BLACK))
        ]], colWidths=[0.25*inch, 6.25*inch])
        row.setStyle(TableStyle([
            ("BACKGROUND",    (0,0), (0,0), GREEN),
            ("BACKGROUND",    (1,0), (1,0), GREEN_BG),
            ("TOPPADDING",    (0,0), (-1,-1), 6),
            ("BOTTOMPADDING", (0,0), (-1,-1), 6),
            ("LEFTPADDING",   (0,0), (0,0), 2),
            ("LEFTPADDING",   (1,0), (1,0), 10),
            ("BOX",           (0,0), (-1,-1), 0.5, colors.HexColor("#86efac")),
        ]))
        s.append(row)
        s.append(Spacer(1, 3))

    doc.build(s)
    print("PDF 2 created.")


if __name__ == "__main__":
    pdf1()
    pdf2()
    print("Done. Both PDFs saved in the project root.")
