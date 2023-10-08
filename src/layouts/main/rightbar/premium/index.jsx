import Button from "~/components/button";

export default function Premium() {
    return (
        <section className="bg-[#16181c] border border-[#16181c] rounded-2xl px-4 py-4 mb-4 flex flex-col text-[#e7e9ea] gap-2.5">
            <h6 className="text-xl font-extrabold leading-6">Premiuma Üye Ol</h6>
            <p className="text-[15px] font-bold">
                Yeni özellikleri açmak için abone ol ve uygun olman durumunda reklam geliri payı kazan.
            </p>
            <div className="self-start">
                <Button>Abone Ol</Button>
            </div>
        </section>
    )
}