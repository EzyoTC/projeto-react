export default function ServicosPage() {
    return (
        <section className="page-shell">
            <div className="content-card">
                <div>
                    <span className="eyebrow">O que fazemos</span>
                    <h1>Nossos serviços</h1>
                    <p>Soluções contábeis completas, claras e feitas para acompanhar cada etapa da sua empresa.</p>
                </div>
                <div className="service-grid">
                    <article className="service-card">
                        <strong>Fiscal</strong>
                        <p>Controle de impostos e obrigações com segurança.</p>
                    </article>
                    <article className="service-card">
                        <strong>Contábil</strong>
                        <p>Relatórios precisos para decisões melhores.</p>
                    </article>
                    <article className="service-card">
                        <strong>Folha</strong>
                        <p>Gestão prática de funcionários e benefícios.</p>
                    </article>
                </div>
            </div>
        </section>
    )
}