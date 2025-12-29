'use client'

export default function Projects() {
  const projects = [
    {
      title: 'Pre-Order Online Shop System - Rosezzty',
      description: 'A comprehensive online shop platform for pre-order management with real-time inventory tracking, secure payment, and customer management system.',
      image: '🛒',
      features: [
        'Real-time inventory management',
        'Secure payment',
        'Customer order tracking',
        'Admin dashboard with analytics',
      ],
      tech: ['Vue.js', 'Express.js', 'MySQL', 'TailwindCSS'],
      github: 'https://github.com/Ayuu13',
      demo: null,
      color: 'from-primary to-secondary',
    },
    {
      title: 'Wedding Organizer Platform - Siera',
      description: 'Full-featured wedding organizer website with booking system, vendor management, and customizable package options for couples planning their special day.',
      image: '💍',
      features: [
        'Package customization system',
        'Vendor portfolio showcase',
        'Booking and reservation management',
        'Payment tracking',
      ],
      tech: ['Laravel', 'TailwindCSS', 'MySQL', 'Bootstrap', 'JavaScript'],
      github: 'https://github.com/Ayuu13',
      demo: null,
      color: 'from-secondary to-accent',
    },
    {
      title: 'Finance Tracking App - CashFlowMate',
      description: 'Cloud-based personal finance tracking application built as Bangkit Capstone Project. Helps users manage expenses, track budgets, and visualize spending patterns.',
      image: '💰',
      features: [
        'Expense tracking and categorization',
        'Budget planning and monitoring',
        'Visual spending analytics',
        'Cloud synchronization',
      ],
      tech: ['Google Cloud', 'Node.js', 'Express.js'],
      // github: 'https://github.com/Ayuu13',
      demo: null,
      color: 'from-accent to-primary',
    },
    // {
    //   title: 'Portfolio & Blog Platform',
    //   description: 'Modern, responsive portfolio and blog platform with content management system, allowing users to showcase projects and share technical articles.',
    //   image: '📝',
    //   features: [
    //     'Content management system',
    //     'Markdown support for articles',
    //     'Project showcase gallery',
    //     'SEO optimized',
    //   ],
    //   tech: ['Next.js', 'Supabase', 'TailwindCSS', 'TypeScript'],
    //   github: 'https://github.com/Ayuu13',
    //   demo: null,
    //   color: 'from-primary via-secondary to-accent',
    // },
  ]

  return (
    <section id="projects" className="py-10 relative bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-7">
            <h2 className="text-4xl lg:text-5xl font-bold mb-3 text-gray-700 dark:text-gray-300">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Some of my recent work and contributions
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden dark:border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Project Image/Icon */}
                <div className={`relative h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <div className="text-8xl group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {project.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Key Features:</p>
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-primary text-xs mt-0.5">▹</span>
                        <span className="text-gray-600 dark:text-gray-400 text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs text-primary font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-0">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 rounded-lg text-sm text-white transition-all duration-300"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More Projects Link */}
          <div className="text-center mt-5">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Want to see more of my work?
            </p>
            <a
              href="https://github.com/Ayuu13"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary rounded-full text-primary font-medium hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
