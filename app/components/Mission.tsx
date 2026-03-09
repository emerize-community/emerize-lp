export default function Mission() {
  return (
    <section className="relative bg-transparent py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600">
            Mission & Vision
          </p>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              キャリアの「きっかけ」を
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
              循環させる
            </span>
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:gap-12">
          {/* Mission */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-soft transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-200/80">
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-emerald-500 to-emerald-400" />
            <div className="p-8 pl-10 sm:p-10 sm:pl-12">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-xl font-bold text-white shadow-lg shadow-emerald-600/30">
                M
              </span>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
                Mission
              </p>
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                新たなキャリア文化の循環の構築
              </h3>
              <p className="mt-6 text-base leading-relaxed text-slate-600">
                マレーシアで学ぶ学生と、日本企業の間に生まれる出会いや経験を、
                一度きりでは終わらない「循環」としてデザインし、
                次の世代へとつないでいきます。
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-soft transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-200/80">
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-emerald-400 to-emerald-300" />
            <div className="p-8 pl-10 sm:p-10 sm:pl-12">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-xl font-bold text-white shadow-lg shadow-emerald-600/30">
                V
              </span>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
                Vision
              </p>
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                ここから始まる「きっかけ」をすべての学生へ
              </h3>
              <p className="mt-6 text-base leading-relaxed text-slate-600">
                出身国や在籍大学にかかわらず、
                「挑戦したい」と思った瞬間に手を伸ばせるきっかけを届ける。
                そんな場をマレーシアから日本に向けて広げていきます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
