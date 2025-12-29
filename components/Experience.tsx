'use client'

export default function Experience() {
  const experiences = [
    {
      title: 'Fullstack Development Mentor',
      company: 'PT DumbWays Indonesia Teknologi',
      period: 'September 2025 - Present',
      location: 'Hybrid',
      description: 'Mentoring students in fullstack web development from fundamentals to advanced concepts.',
      achievements: [
        'Mentored 100+ students in online & offline methods',
        'Delivered comprehensive fullstack curriculum using Express.js, React.js, Next.js, PostgreSQL, and Supabase',
        'Facilitated code reviews, live coding sessions, and technical interview simulations',
        'Guided students through real-world project development and deployment',
        'Achieved 95% student satisfaction rate in technical mentorship',
      ],
      tech: ['Express.js', 'React.js', 'PostgreSQL', 'Git', 'Github','Supabase','Next.js'],
      icon: '💼',
      color: 'from-primary to-secondary',
    },
    {
      title: 'Teaching Assistant & Supervisor',
      company: 'Gunadarma University',
      period: 'September 2023 - May 2025',
      location: 'Jakarta, Indonesia',
      description: 'Led practicum sessions and supported students in technical learning environments.',
      achievements: [
        'Led hands-on practicum sessions for programming courses',
        'Supported 100+ students in understanding complex technical concepts',
        'Managed laboratory operations and equipment',
        'Processed and evaluated academic results with accuracy',
        'Collaborated with faculty to improve curriculum delivery',
      ],
      tech: ['Basic Physics', 'Physics Practice','Leader Assistant'],
      icon: '🎓',
      color: 'from-secondary to-accent',
    },
    {
      title: 'Cloud Computing Cohort',
      company: 'Bangkit Academy (by Google, Goto, Traveloka)',
      period: 'August 2023 - January 2024',
      location: 'Remote',
      description: 'Intensive program focused on cloud computing and application development.',
      achievements: [
        'Implemented cloud solutions using Google Cloud Platform (GCP)',
        'Built and deployed cloud-based applications',
        'Managed cloud infrastructure and services',
        'Collaborated on capstone project: CashFlowMate (finance tracking app)',
        'Gained hands-on experience with cloud architecture and DevOps practices',
      ],
      tech: ['Google Cloud', 'Cloud Architecture', 'DevOps', 'Kubernetes'],
      icon: '☁️',
      color: 'from-accent to-primary',
    },
  ]

  return (
    <section id="experience" className="py-10 relative bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-6">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-700 dark:text-gray-200">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              My journey in tech education and development
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 md:pl-12 border-l-2 border-primary/30 hover:border-primary transition-all duration-300"
              >
                {/* Timeline dot */}
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary dark:border-gray-800"></div>

                {/* Content card */}
                <div className="gradient-border hover-lift">
                  <div className="gradient-border-content bg-gray-50 dark:bg-gray-900">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div className="flex items-start gap-4">
                        <div className="text-5xl">{exp.icon}</div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-primary font-semibold mb-1">
                            {exp.company}
                          </p>
                          <div className="flex flex-wrap gap-2 text-sm text-gray-500 dark:text-gray-500">
                            <span className="flex items-center gap-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              {exp.period}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              {exp.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-200 mb-4">{exp.description}</p>

                    {/* Achievements */}
                    <div className="space-y-2 mb-6">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1">▹</span>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 dark:bg-white/5 dark:border-white/10 rounded-full text-xs text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="mt-8 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-medium hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <span>Want to work together?</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
