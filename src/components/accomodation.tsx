import BookingButton from "./bookingBtn";

export default function Accommodation() {
    const GOLD = "text-amber-400";
    const BORDER = "border-amber-400/20";
    const BG = "bg-amber-400/5";

    const rooms = [
        {
            type: "Standard Ger",
            name: "Classic Room",
            size: 20,
            guests: "1–2 persons",
            maxGuests: 2,
            count: 8,
            price: "₮700,000",
            priceNum: 700000,
            usd: "≈ USD 195",
            featured: false,
            badge: null,
            amenities: [
                { icon: "📶", label: "Free WiFi" },
                { icon: "🍳", label: "Breakfast" },
                { icon: "🚭", label: "No Smoking" },
                { icon: "🚿", label: "Private Bathroom" },
                { icon: "🔥", label: "Heating" },
                { icon: "📺", label: "TV" },
            ],
        },
        {
            type: "Deluxe Ger",
            name: "Family Room",
            size: 45,
            guests: "3–4 persons",
            maxGuests: 4,
            count: 6,
            price: "₮900,000",
            priceNum: 900000,
            usd: "≈ USD 250",
            featured: false,
            badge: null,
            amenities: [
                { icon: "📶", label: "Free WiFi" },
                { icon: "🍳", label: "Breakfast" },
                { icon: "🚭", label: "No Smoking" },
                { icon: "🚿", label: "Private Bathroom" },
                { icon: "🔥", label: "Heating" },
                { icon: "📺", label: "TV" },
                { icon: "🛋️", label: "Seating Area" },
            ],
        },
        {
            type: "Superior Ger",
            name: "Group Room",
            size: 57,
            guests: "4–6 persons",
            maxGuests: 6,
            count: 3,
            price: "₮1,200,000",
            priceNum: 1200000,
            usd: "≈ USD 335",
            featured: false,
            badge: null,
            amenities: [
                { icon: "📶", label: "Free WiFi" },
                { icon: "🍳", label: "Breakfast" },
                { icon: "🚭", label: "No Smoking" },
                { icon: "🚿", label: "Private Bathroom" },
                { icon: "🔥", label: "Heating" },
                { icon: "📺", label: "TV" },
                { icon: "🛋️", label: "Seating Area" },
                { icon: "🏔️", label: "Mountain View" },
            ],
        },
        {
            type: "Presidential",
            name: "The Khan Suite",
            size: 57,
            guests: "Up to 2 persons",
            maxGuests: 2,
            count: 1,
            price: "₮1,500,000",
            priceNum: 1500000,
            usd: "≈ USD 420",
            featured: true,
            badge: "Suite",
            amenities: [
                { icon: "📶", label: "Free WiFi" },
                { icon: "🍳", label: "Breakfast" },
                { icon: "🚭", label: "No Smoking" },
                { icon: "🛁", label: "Luxury Bathroom" },
                { icon: "🔥", label: "Heating" },
                { icon: "📺", label: "TV" },
                { icon: "🛋️", label: "Lounge Area" },
                { icon: "🏔️", label: "Panoramic View" },
                { icon: "🧖", label: "Spa Access" },
            ],
        },
    ];

    return (
        <section id="accommodations" className="w-full flex flex-col gap-3 py-28 px-6 md:px-16 text-white">

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5">
                <div>
                    <span className={`block text-xs tracking-[0.35em] uppercase mb-4 ${GOLD}`}>
                        Where You Stay
                    </span>
                    <h2 className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] leading-tight">
                        Curated <br />
                        <em className={`not-italic ${GOLD}`}>Rooms</em>
                    </h2>
                </div>
                <p className="max-w-md text-sm leading-relaxed text-white/60">
                    Each room has been thoughtfully designed to offer comfort and warmth
                    in the heart of the Mongolian wilderness.
                </p>
            </div>

            {/* Breakfast note */}
            <div className={`flex items-center gap-3 text-sm mb-14 ${GOLD}`}>
                <span className={`flex items-center justify-center w-5 h-5 border rounded-full text-[10px] ${BORDER}`}>✓</span>
                All rooms include breakfast
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-[-30]">
                {rooms.map((room) => (
                    <div
                        key={room.name}
                        className={`flex flex-col h-full p-7 rounded-2xl transition-all duration-300 border ${BORDER} ${room.featured ? BG : "hover:bg-white/5"}`}
                    >
                        {/* Badge */}
                        {room.badge && (
                            <span className={`absolute top-5 right-5 text-[10px] tracking-[0.2em] uppercase px-2 py-1 border ${BORDER} ${GOLD}`}>
                                {room.badge}
                            </span>
                        )}

                        {/* Type + Name */}
                        <div className="space-y-2">
                            <span className={`block text-[10px] tracking-[0.3em] uppercase opacity-60 ${GOLD}`}>{room.type}</span>
                            <span className={`block text-lg tracking-[0.1em] uppercase ${GOLD}`}>{room.name}</span>
                        </div>

                        {/* Size */}
                        <div className="font-serif text-4xl mt-3">
                            {room.size}
                            <span className="text-base opacity-50 ml-1">m²</span>
                        </div>

                        {/* Divider */}
                        <div className={`h-px my-4 ${BORDER}`} />

                        {/* Amenities */}
                        <div className="flex flex-wrap gap-x-3 gap-y-2 mb-4">
                            {room.amenities.map(a => (
                                <span key={a.label} className="flex items-center gap-1 text-[10px] text-white/50">
                                    <span>{a.icon}</span>
                                    <span>{a.label}</span>
                                </span>
                            ))}
                        </div>

                        {/* Meta */}
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span className="text-white/60">Guests</span>
                                <span>{room.guests}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-white/60">Available</span>
                                <span className={`px-3 py-1 text-xs border ${BORDER} ${BG} ${GOLD}`}>
                                    {room.count} {room.count === 1 ? "room" : "rooms"}
                                </span>
                            </div>
                        </div>

                        {/* Price */}
                        <div className={`mt-auto pt-6 border-t ${BORDER} space-y-3 flex flex-col gap-2`}>
                            <div className="font-serif text-2xl">{room.price}</div>
                            <div className="text-xs text-white/50">per night · {room.usd}</div>
                            <div className={`flex items-center gap-2 text-xs ${GOLD}`}>
                                <span className={`flex items-center justify-center w-5 h-5 border rounded-full text-[10px] ${BORDER}`}>✓</span>
                                Breakfast included
                            </div>
                            <BookingButton
                                roomName={room.name}
                                roomType={room.type}
                                size={room.size}
                                price={room.price}
                                priceNum={room.priceNum}
                                usd={room.usd}
                                amenities={room.amenities}
                                maxGuests={room.maxGuests}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
