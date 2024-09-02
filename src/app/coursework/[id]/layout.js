export default function CourseEvaluationLayout({ children }) {
  return (
    <div className="relative flex-1 rounded-t-3xl md:rounded-tr-none">
      <main className="relative mx-auto size-full fixed space-y-2.5 px-3 py-6 font-mont sm:gap-6 sm:pt-16 lg:flex lg:space-y-0 3xl:justify-center">
        {children}
      </main>
    </div>
  );
}
