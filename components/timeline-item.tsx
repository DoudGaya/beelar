interface TimelineItemProps {
  year: string
  title: string
  organization: string
  description: string
}

export function TimelineItem({ year, title, organization, description }: TimelineItemProps) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 text-white shadow-lg">
        <div className="h-2 w-2 rounded-full bg-white"></div>
      </div>
      <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-950 dark:border dark:border-gray-800">
        <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-teal-500 to-emerald-500"></div>
        <div className="flex flex-col gap-2">
          <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-2.5 py-0.5 text-xs font-semibold text-teal-700 w-fit dark:border-teal-500/30 dark:bg-teal-900/20 dark:text-teal-400">
            {year}
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-teal-600 dark:text-teal-400">{organization}</p>
          <p className="text-gray-500 dark:text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  )
}
