export function MainCard({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen pt-28 items-center justify-center px-4 pb-12">
      <section className="w-full max-w-7xl rounded-3xl bg-white p-8 shadow-2xl sm:p-14">
        {children}
      </section>
    </main>
  );
}
