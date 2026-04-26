export default function Location() {
  const reachData = [
    {
      icon: "🚗",
      title: "From Ulaanbaatar",
      text: "Approx. 1–2 hour drive from Ulaanbaatar city. Smooth road access available year-round.",
    },
    {
      icon: "🛣",
      title: "By Road",
      text: "Direct access via main paved roads. Private transfers and taxis available.",
    },
    {
      icon: "📍",
      title: "Location",
      text: "8WR5+5P2, Üdeligiin Dugan, Töv Province, Mongolia",
    },
  ];

  return (
    <section className="location py-16 px-6 md:px-12" id="location">
      <div className="location-inner grid md:grid-cols-2 gap-10 items-center">

        {/* MAP */}
        <div className="map-container w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d950000!2d106.895!3d48.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f9!3m3!1m2!1s0x5d9645007b6bf2f1%3A0x8df59fabb04e3e39!2sMarush%20hotel%20and%20resort!5e0!3m2!1sen!2sus!4v1775025809511!5m2!1sen!2sus"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Marush Hotel & Resort Location"
          />
        </div>

        {/* INFO */}
        <div className="location-info">
          <span className="text-xs tracking-widest uppercase text-amber-400">
            Getting Here
          </span>

          <h2 className="text-3xl md:text-4xl font-light mt-2">
            Töv Province <br />
            <em className="text-amber-400 not-italic">Mongolia</em>
          </h2>

          <div className="w-12 h-[2px] bg-amber-400 my-4" />

          <p className="text-gray-300 leading-relaxed">
            Marush Hotel & Resort is located in the peaceful landscapes of Töv
            Province, offering a serene escape just outside Ulaanbaatar.
            Surrounded by open steppe and natural beauty, the resort is easily
            accessible year-round.
          </p>

          <ul className="mt-6 space-y-4">
            {reachData.map((item) => (
              <li key={item.title} className="flex gap-3 items-start">
                <span className="text-xl">{item.icon}</span>
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-400">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* BUTTON */}
          <a
            href="https://maps.app.goo.gl/wYLbJJjbLurxQxaQ7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-3 text-xs tracking-widest uppercase
            border border-amber-400 text-amber-400 rounded-md
            hover:bg-amber-400 hover:text-black transition"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}