import { workflowItems } from "@/lib/content";

export function AiWorkflowSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
      <div className="surface-card p-5 sm:p-6">
        <p className="eyebrow">AI-Assisted Development Workflow</p>
        <h3 className="mt-4 text-3xl leading-tight text-ink">
          Using AI as a structured engineering partner
        </h3>
        <p className="mt-4 text-base leading-8 text-muted">
          AI is used to accelerate implementation, but every output is reviewed against architecture,
          correctness, maintainability, and production readiness.
        </p>
      </div>

      <div className="grid gap-4">
        {workflowItems.map((item, index) => (
          <div key={item} className="surface-card surface-card-hover p-5">
            <p className="eyebrow">Step 0{index + 1}</p>
            <p className="mt-3 text-base leading-7 text-muted">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
