import { Header } from "@/src/components/header"
import { PlansTabs } from "@/src/components/plans/plans-tabs"
import { ProgressBars } from "@/src/components/progress/progress-bars"
import { CreatePlanForm } from "@/src/components/plans/create-plan-form"
import { Button } from "@/src/components/ui/button"

export default function ProgressPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 pb-20">
        <div className="flex items-center justify-between py-4">
          <PlansTabs activeTab="progress" />
          <Button className="rounded-lg bg-[#6c5ce7] px-4 py-2 text-white">New Plan</Button>
        </div>

        <div className="mt-4 rounded-lg border p-6">
          <ProgressBars />
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold">Create a new Learning Plan</h2>
          <CreatePlanForm />
        </div>
      </main>
    </div>
  )
}
