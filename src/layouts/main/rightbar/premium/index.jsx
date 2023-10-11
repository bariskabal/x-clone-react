import Button from "~/components/button";

export default function Premium() {
    return (
        <section className="bg-[color:var(--background-secondary)] border border-[color:var(--background-secondary)] rounded-2xl px-4 py-4 mb-4 flex flex-col gap-2.5">
            <h6 className="text-xl font-extrabold leading-6">Premiuma Üye Ol</h6>
            <p className="leading-5 font-bold">
                Yeni özellikleri açmak için abone ol ve uygun olman durumunda reklam geliri payı kazan.
            </p>
            <div className="self-start">
                <Button>Abone Ol</Button>
            </div>
        </section>
    )
}