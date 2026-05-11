import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code2, Brain, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container py-4 flex justify-between items-center">
          <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className=" text-2xl font-bold text-primary">GB</div>
          <div className="flex gap-8">
            <a href="#experience" className="text-sm font-medium hover:text-accent transition-all duration-300">Experience</a>
            <a href="#projects" className="text-sm font-medium hover:text-accent transition-all duration-300">Projects</a>
            <a href="#skills" className="text-sm font-medium hover:text-accent transition-all duration-300">Skills</a>
            <a href="#contact" className="text-sm font-medium hover:text-accent transition-all duration-300">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663196049327/2feACoVRBtZxvmdPdW5c6X/hero-background-8A5vjrrQ2sPjLiAYFbDvco.webp"
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className=" text-5xl md:text-6xl font-bold mb-6 text-white">
                Galla Bharghav Ram
              </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-4 font-light">
              GenAI & Python Fullstack Developer
            </p>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl leading-relaxed">
              Aspiring AI & Python Developer with hands-on experience in developing machine learning models, LLM-based applications, and full-stack web systems using modern frameworks. Passionate about solving real-world problems through intelligent automation and scalable software solutions.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="mailto:bharghavramgalla@gmail.com">
                <Button className="bg-accent text-primary hover:bg-accent/90">
                  <Mail className="mr-2 h-4 w-4" /> Get in Touch
                </Button>
              </a>
              <a href="https://github.com/bharghavram" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </Button>
              </a>
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 6305303653</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Vijayawada, India</span>
              </div>
              <a href="https://linkedin.com/in/galla-bharghav-ram-b12a2a332" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-all duration-300">
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                src="/profile.jpeg"
                alt="Galla Bharghav Ram"
                className="w-64 h-64 md:w-80 md:h-80 rounded-lg shadow-lg object-cover border-4 border-accent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section id="experience" className="py-20 md:py-32 bg-background">
        <div className="container">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className=" text-4xl font-bold mb-16 text-primary">Professional Experience</h2>
          <div className="space-y-8">
            {/* Freelance Role */}
            <Card className="card-elevated border-l-4 border-l-accent">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl">Freelance Python & AI Developer</CardTitle>
                    <CardDescription className="text-base mt-2">Self-Employed | Remote</CardDescription>
                  </div>
                  <Badge className="bg-accent text-primary">Jun 2025 - Present</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-foreground/90">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Delivered AI-based solutions to 5+ clients, developing Machine Learning and Deep Learning models for prediction, classification, and anomaly detection using Python.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Built Generative AI applications using Large Language Models (LLMs), including document Q&A systems, conversational assistants, and vector-database retrieval pipelines.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Automated a daily stock-market data segregation system for a trading client, reducing manual processing and enabling structured analysis workflows.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Conducted Generative AI training sessions for 2 batches of learners, covering prompt engineering, LLM applications, and real-world project implementation.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Internship */}
            <Card className="card-elevated border-l-4 border-l-accent">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl">Software Development Engineer (SDE) Intern</CardTitle>
                    <CardDescription className="text-base mt-2">SHNOOR International LLC</CardDescription>
                  </div>
                  <Badge className="bg-accent text-primary">Jan 2026 - Mar 2026</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-foreground/90">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Developed and maintained full-stack web modules using ReactJS, JavaScript, and backend APIs.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Worked on admin dashboards, authentication systems, and role-based access control features.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Integrated frontend interfaces with backend services, handling API communication and error management.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Debugged production issues, resolved application errors, and improved system stability through collaborative development.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className=" text-4xl font-bold mb-16 text-primary">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <Card className="card-elevated overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <Brain className="h-8 w-8 text-accent" />
                  <Badge variant="outline">Python, LLMs, RAG</Badge>
                </div>
                <CardTitle className="text-2xl">AI Question Generator (SaaS)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/80">
                  Educational institutions and students spend significant time manually preparing practice and exam questions from textbooks. This SaaS platform automatically generates exam-quality questions from uploaded study materials.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-primary">Key Achievements:</p>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li>• Implemented document parsing using PyMuPDF & LlamaIndex</li>
                    <li>• Created RAG pipeline with ChromaDB embeddings</li>
                    <li>• Supports multiple question types (MCQ, True/False, Fill-in-the-Blanks, Short Answer)</li>
                    <li>• Generates structured question papers within seconds</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 pt-4">
                  <Badge>Python</Badge>
                  <Badge>Flask</Badge>
                  <Badge>LLMs</Badge>
                  <Badge>ChromaDB</Badge>
                  <Badge>React</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="card-elevated overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <Zap className="h-8 w-8 text-accent" />
                  <Badge variant="outline">Python, GenAI, PDF</Badge>
                </div>
                <CardTitle className="text-2xl">Financial Auditing Intelligence System</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/80">
                  Financial auditors manually review extensive PDF documents to extract insights and identify risks. This AI-powered system automates the entire auditing workflow using advanced document processing and generative AI.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-primary">Key Achievements:</p>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li>• Automated PDF extraction using PyPDF2 & Hugging Face embeddings</li>
                    <li>• Integrated Gemini 2.5 Flash for context-driven analysis</li>
                    <li>• Generates comprehensive audit reports with risk assessment</li>
                    <li>• Reduces manual analysis time significantly</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 pt-4">
                  <Badge>Python</Badge>
                  <Badge>GenAI</Badge>
                  <Badge>PDF Processing</Badge>
                  <Badge>Gemini API</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="card-elevated overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <Code2 className="h-8 w-8 text-accent" />
                  <Badge variant="outline">Python, Automation, Data</Badge>
                </div>
                <CardTitle className="text-2xl">Stock Market Data Segregation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/80">
                  Automated daily stock-market data segregation system for a trading client. This solution reduces manual processing overhead and enables structured analysis workflows for financial decision-making.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-primary">Key Achievements:</p>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li>• Automated daily data collection and segregation pipeline</li>
                    <li>• Eliminated manual processing, saving significant time daily</li>
                    <li>• Structured data format enabling easy analysis and reporting</li>
                    <li>• Improved data accuracy and consistency for trading decisions</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 pt-4">
                  <Badge>Python</Badge>
                  <Badge>Automation</Badge>
                  <Badge>Data Processing</Badge>
                  <Badge>Trading</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project 4 */}
            <Card className="card-elevated overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <Brain className="h-8 w-8 text-accent" />
                  <Badge variant="outline">Python, React, RAG</Badge>
                </div>
                <CardTitle className="text-2xl">RAG Chunk Studio — Human-in-the-Loop Chunking Platform for RAG Systems</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/80">
                  Retrieval-Augmented Generation (RAG) systems rely on effective document chunking for accurate information retrieval. Traditional chunking methods such as fixed-size, recursive, and token-based splitting often disrupt semantic meaning and contextual continuity. These limitations can reduce retrieval accuracy by combining unrelated information or separating important context. As a result, real-world AI applications like document assistants, support bots, and knowledge retrieval systems may generate irrelevant responses or hallucinations.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-primary">Key Achievements:</p>
                  <ul className="space-y-2 text-sm text-foreground/80">
      
                    <li>• Implemented 10+ chunking strategies with support for manual refinement and drag-based text selection</li>
                    <li>• Developed interactive chunk visualization, editing, deletion, and metadata management features</li>
                    <li>• Improved understanding of how chunk quality impacts embeddings, retrieval accuracy, and final LLM responses</li>
                    <li>• Enabled efficient preprocessing and optimization of documents for enterprise RAG applications and AI-powered knowledge systems</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 pt-4">
                  <Badge>React</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Python</Badge>
                  <Badge>RAG</Badge>
                  <Badge>ChromaDB</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-32 bg-background">
        <div className="container">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className=" text-4xl font-bold mb-16 text-primary">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* ML & AI */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Brain className="h-6 w-6 text-accent" />
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className=" text-2xl font-bold text-primary">Machine Learning & AI</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-foreground mb-2">Deep Learning & NLP</p>
                  <p className="text-foreground/80">Neural Networks, Ensemble Methods, Computer Vision, Time Series Analysis, Multimodal Language Models, NLP, Regression & Classification</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">Libraries & Frameworks</p>
                  <div className="flex flex-wrap gap-2">
                    {['TensorFlow', 'PyTorch', 'Keras', 'Streamlit', 'OpenCV', 'Scikit-learn', 'Pandas', 'NumPy', 'Seaborn', 'Matplotlib', 'Hugging Face', 'LangChain', 'LangFlow', 'multi-agent system', 'mcp server', 'fine-tuning'].map((skill) => (
                      <Badge key={skill} variant="outline" className="bg-secondary/50">{skill}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Fullstack Development */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="h-6 w-6 text-accent" />
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className=" text-2xl font-bold text-primary">Fullstack Development</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-foreground mb-2">Frontend</p>
                  <div className="flex flex-wrap gap-2">
                    {['HTML', 'CSS', 'JavaScript', 'React.js', 'AJAX', 'DOM', 'Figma'].map((skill) => (
                      <Badge key={skill} variant="outline" className="bg-secondary/50">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">Backend & Databases</p>
                  <div className="flex flex-wrap gap-2">
                    {['Flask', 'FastAPI', 'API Routing', 'SQL', 'MongoDB', 'MySQL', 'SQLite', 'CRUD'].map((skill) => (
                      <Badge key={skill} variant="outline" className="bg-secondary/50">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">AI Tools & Platforms</p>
                  <div className="flex flex-wrap gap-2">
                    {['Claude', 'GPT', 'Gemini', 'BoltAI', 'Lovable AI'].map((skill) => (
                      <Badge key={skill} variant="outline" className="bg-secondary/50">{skill}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="md:col-span-2">
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className=" text-2xl font-bold text-primary mb-6">Soft Skills</h3>
              <div className="grid md:grid-cols-4 gap-4">
                {['Team Leadership', 'Mentoring', 'Technical Documentation', 'Client Communication', 'Agile Methodologies', 'Public Speaking'].map((skill) => (
                  <div key={skill} className="bg-secondary/50 rounded-lg p-4 text-center">
                    <p className="font-semibold text-foreground">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                src="/profile.jpeg"
                alt="Galla Bharghav Ram"
                className="w-64 h-64 md:w-80 md:h-80 rounded-lg shadow-lg object-cover border-4 border-accent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className=" text-4xl font-bold mb-16 text-primary">Education</h2>
          <div className="space-y-6">
            <Card className="card-elevated border-l-4 border-l-accent">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl">B.Tech in Artificial Intelligence & Machine Learning</CardTitle>
                    <CardDescription className="text-base mt-2">Bapatla Engineering College</CardDescription>
                  </div>
                  <Badge className="bg-accent text-primary">2022 - 2026</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">CGPA: 8.9</p>
              </CardContent>
            </Card>

            <Card className="card-elevated border-l-4 border-l-accent">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl">Class XII</CardTitle>
                    <CardDescription className="text-base mt-2">DKNP Junior College, Vissannapet</CardDescription>
                  </div>
                  <Badge className="bg-accent text-primary">94%</Badge>
                </div>
              </CardHeader>
            </Card>

            <Card className="card-elevated border-l-4 border-l-accent">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl">Class X</CardTitle>
                    <CardDescription className="text-base mt-2">Sri Siddhartha High School, Vissannapet</CardDescription>
                  </div>
                  <Badge className="bg-accent text-primary">97%</Badge>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-primary text-white">
        <div className="container text-center">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className=" text-4xl font-bold mb-8 text-white">Let's Connect</h2>
          <p className="text-lg text-blue-100 mb-12 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:bharghavramgalla@gmail.com">
              <Button className="bg-accent text-primary hover:bg-accent/90 text-base px-8 py-6">
                <Mail className="mr-2 h-5 w-5" /> Email Me
              </Button>
            </a>
            <a href="https://github.com/bharghavram" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-base px-8 py-6">
                <Github className="mr-2 h-5 w-5" /> GitHub
              </Button>
            </a>
            <a href="https://linkedin.com/in/galla-bharghav-ram-b12a2a332" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-base px-8 py-6">
                <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/95 text-white py-8 border-t border-primary/50">
        <div className="container text-center">
          <p className="text-blue-100">
            © 2026 Galla Bharghav Ram.
          </p>
        </div>
      </footer>
    </div>
  );
}
