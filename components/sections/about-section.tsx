export function AboutSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="surface-card p-6 sm:p-8">
        <p className="eyebrow">Story</p>
        <div className="mt-4 space-y-4 text-base leading-8 text-muted">
          <p>
            I am a backend-focused full stack developer specializing in building scalable API systems
            using Node.js and Spring Boot.
          </p>
          <p>
            I focus on designing clean architectures, implementing secure authentication systems, and
            developing reliable backend logic for real-world applications.
          </p>
          <p>
            I leverage AI-assisted development workflows to accelerate building and refining
            production-ready systems while maintaining code quality.
          </p>
          <p>
            My goal is to build systems that are scalable, maintainable, and aligned with real-world
            engineering practices.
          </p>
        </div>
      </div>

      <div className="grid gap-4">
        <div className="surface-card surface-card-hover p-5">
          <p className="eyebrow">Backend Focus</p>
          <p className="mt-3 text-base leading-7 text-muted">
            API contracts, authentication, database integration, validation, and service structure.
          </p>
        </div>
        <div className="surface-card surface-card-hover p-5">
          <p className="eyebrow">Tech Range</p>
          <p className="mt-3 text-base leading-7 text-muted">
            Building across Node.js, Express, MongoDB, Java, Spring Boot, and MySQL.
          </p>
        </div>
        <div className="surface-card surface-card-hover p-5">
          <p className="eyebrow">Mindset</p>
          <p className="mt-3 text-base leading-7 text-muted">
            Clean architecture, practical system thinking, and a focus on software that can scale with
            clarity.
          </p>
        </div>
      </div>
    </div>
  );
}
