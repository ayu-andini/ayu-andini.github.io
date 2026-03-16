'use client'

export default function TechStack() {
  const techStacks = {
    frontend: [
      { name: 'JavaScript', color: '#F7DF1E' },
      { name: 'PHP', color: '#3178C6' },
      { name: 'Vue.js', color: '#42B883' },
      { name: 'React.js', color: '#61DAFB' },
      { name: 'Next.js', color: '#E34F26' },
      { name: 'Laravel', color: '#42B883' },
      { name: 'TailwindCSS', color: '#38B2AC' },
      { name: 'TypeScript', color: '#F7DF1E' },
      { name: 'HTML5', color: '#E34F26' },
      { name: 'CSS3', color: '#1572B6' },
    ],
    backend: [
      { name: 'Node.js', color: '#5FA04E' },
      { name: 'Express.js', color: '#3178C6' },
      { name: 'Laravel', color: '#FF2D20' },
      { name: 'RESTful API', color: '#009688' },
    ],
    database: [
      { name: 'MySQL', color: '#4479A1' },
      { name: 'PostgreSQL', color: '#336791' },
      { name: 'Supabase', color: '#3ECF8E' },
    ],
    tools: [
      { name: 'Git', color: '#F05032' },
      { name: 'GitHub', color: '#3ECF8E' },
      { name: 'Google Cloud', color: '#4285F4' },
      { name: 'Postman', color: '#FF6C37' },
      { name: 'VS Code', color: '#007ACC' },
    ],
  }

  return (
    <section id="tech" className="py-10 relative bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-700 dark:text-gray-200">
              Tech <span className="gradient-text">Stack</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Tech Categories */}
          <div className="space-y-12">
            {/* Frontend */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-100">Frontend Development</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {techStacks.frontend.map((tech) => (
                  <div
                    key={tech.name}
                    className="tech-badge group cursor-pointer"
                    style={{
                      borderColor: `${tech.color}40`,
                      backgroundColor: `${tech.color}10`,
                    }}
                  >
                    <span className="text-gray-600 dark:text-white group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-100">Backend Development</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {techStacks.backend.map((tech) => (
                  <div
                    key={tech.name}
                    className="tech-badge group cursor-pointer"
                    style={{
                      borderColor: `${tech.color}40`,
                      backgroundColor: `${tech.color}10`,
                    }}
                  >
                    <span className="text-gray-700 dark:text-white group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Database */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-100">Database & Storage</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {techStacks.database.map((tech) => (
                  <div
                    key={tech.name}
                    className="tech-badge group cursor-pointer"
                    style={{
                      borderColor: `${tech.color}40`,
                      backgroundColor: `${tech.color}10`,
                    }}
                  >
                    <span className="text-gray-700 dark:text-white group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-100">Tools & Platforms</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {techStacks.tools.map((tech) => (
                  <div
                    key={tech.name}
                    className="tech-badge group cursor-pointer"
                    style={{
                      borderColor: `${tech.color}40`,
                      backgroundColor: `${tech.color}10`,
                    }}
                  >
                    <span className="text-gray-700 dark:text-white group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-10 p-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl border border-white/10">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🚀</div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-gray-700 dark:text-gray-200">Always Learning</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  I'm constantly exploring new technologies and best practices to stay ahead in the
                  ever-evolving world of web development. Currently diving deeper into cloud-native
                  architectures, microservices, and advanced frontend optimization techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
