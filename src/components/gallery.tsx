export default function Gallery() {
    return (
        <section className="gallery">
            <div className="gallery-header">
                <span className="section-tag">Visual Journey</span>
                <h2 className="section-title" style={{ maxWidth: '500px' }}>
                    A Glimpse of <em>Altan Nuur</em>
                </h2>
            </div>
            <div className="gallery-strip">
                {[
                    { cls: 'g1', label: 'Lakeside at Dusk' },
                    { cls: 'g2', label: 'Ger Interior' },
                    { cls: 'g3', label: 'Steppe Horizon' },
                    { cls: 'g4', label: 'Dining Experience' },
                    { cls: 'g5', label: 'Night Sky' },
                ].map((item) => (
                    <div className={`gallery-item ${item.cls}`} key={item.cls}>
                        <div className="gallery-caption">{item.label}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}   