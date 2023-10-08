import { topics } from "~/utils/consts";
import Topic from "./topic";

export default function Topics() {
    return (
        <section className="bg-[#16181c] border border-[#16181c] rounded-2xl mb-4">
            <h5 className="py-3 text-xl text-[#e7e9ea] leading-6 font-extrabold px-4 flex items-center">İlgini çekebilecek gündemler</h5>
            <div className="grid">
            {topics.map((topic, index) => (
                <Topic item={topic} key={index} />  
            ))} 
            </div>
        </section>
    )
}