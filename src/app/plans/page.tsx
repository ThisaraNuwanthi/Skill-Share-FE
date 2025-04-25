import { PlansTabs } from "@/src/components/plans/plans-tabs"
import { FrontendMasteryPlan } from "@/src/components/plans/frontend-mastery-plan"
import { CreatePlanForm } from "@/src/components/plans/create-plan-form"
import { Header } from "@/src/components/header"

export default function PlansPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 pb-20">
        <div className="flex items-center justify-between py-4">
          <PlansTabs />
          <button className="rounded-lg bg-[#6c5ce7] px-4 py-2 text-white">New Plan</button>
        </div>

        <div className="mt-4 rounded-lg border p-6">
          <FrontendMasteryPlan />
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold">Create a new Learning Plan</h2>
          <CreatePlanForm />
        </div>
      </main>
    </div>
  )
}
