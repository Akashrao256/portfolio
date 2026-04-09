export function AboutSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="surface-card p-6 sm:p-8">
        <p className="eyebrow">Story</p>
        <div className="mt-4 space-y-4 text-base leading-8 text-muted">
          <p>
            I am a backend-focused developer who enjoys building systems that do real work: APIs,
            authentication flows, data processing pipelines, and application logic that has to be
            reliable under real-world usage.
          </p>
          <p>
            My work spans Node.js in the MERN ecosystem and Java with Spring Boot, which lets me move
            comfortably between modern JavaScript backends and strongly structured Java services.
          </p>
          <p>
            I care about clean architecture, maintainable backend logic, and designing systems that are
            understandable as they grow. That mindset shapes how I approach every project, from civic
            platforms to analytics tools to fraud detection systems.
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
