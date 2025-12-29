'use client'

export default function About() {
  return (
    <section id="about" className="py-10 relative bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-5">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-700 dark:text-gray-200">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Passionate about building impactful applications and teaching technology
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="gradient-border hover-lift">
              <div className="gradient-border-content bg-white  dark:bg-gray-900">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🎓</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-700 dark:text-gray-300">Education</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="text-accent font-semibold">Information Systems graduate</span> with a strong foundation in software development,
                      database management, and system design. My academic journey equipped me with
                      both theoretical knowledge and practical skills in modern web technologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="gradient-border hover-lift">
              <div className="gradient-border-content bg-white dark:bg-gray-900">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">💼</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-700 dark:text-gray-300">Current Role</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      Currently working as a <span className="text-primary font-semibold">Fullstack Development Mentor</span> at{' '}
                      <span className="text-accent font-semibold">PT DumbWays Indonesia Teknologi</span>,
                      where I guide students through modern engineering practices.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      I deliver comprehensive fullstack content, facilitate code reviews, conduct live coding sessions,
                      and prepare students for technical interviews. It's incredibly rewarding to see students
                      transform from beginners to confident developers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="gradient-border hover-lift">
              <div className="gradient-border-content bg-white dark:bg-gray-900">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🚀</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-700 dark:text-gray-300">What I Do</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      I specialize in building fullstack web applications using modern JavaScript frameworks
                      and cloud technologies. My expertise spans from crafting beautiful, responsive frontends
                      to designing robust, scalable backend systems.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <span className="text-primary">✓</span>
                        <span>Frontend Development (React, Vue, Next.js)</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <span className="text-primary">✓</span>
                        <span>Backend Development (Node.js, Express)</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <span className="text-primary">✓</span>
                        <span>Database Design (MySQL, PostgreSQL)</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <span className="text-primary">✓</span>
                        <span>Technical Mentoring & Teaching</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <span className="text-primary">✓</span>
                        <span>Code Reviews & Best Practices</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="gradient-border hover-lift">
              <div className="gradient-border-content bg-white dark:bg-gray-900">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">💡</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-700 dark:text-gray-300">Philosophy</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      I believe in writing clean, maintainable code and building applications that solve real problems.
                      As a mentor, I'm committed to making technology education accessible and helping others discover
                      their passion for coding. I constantly stay updated with the latest technologies and best practices
                      to provide the best learning experience for my students.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {[
            { value: '2+', label: 'Years Experience' },
            { value: '100+', label: 'Students Mentored' },
            { value: '5+', label: 'Projects Completed' },
            { value: '3+', label: 'Tech Stacks Mastered' },
          ].map((item, idx) => (
            <div key={idx}
              className="text-center p-6 rounded-xl bg-gray-100 dark:bg-white/10
              transition-all duration-300"
            >
              <div className="text-3xl font-bold gradient-text mb-2">
                {item.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">
                {item.label}
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}
