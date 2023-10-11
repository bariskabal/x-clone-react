import { Link } from "react-router-dom"
import PropTypes from "prop-types"

export default function SidebarSection({ title, children, more } ) {
    return (
        <section className="bg-[color:var(--background-secondary)] border border-[color:var(--background-secondary)] rounded-2xl mb-4">
            <h5 className="py-3 text-xl leading-6 font-extrabold px-4 flex items-center">{title}</h5>
            <div className="grid">
                {children}
            </div>
            {more && (
                <Link to={more} className="h-[52px] flex rounded-b-2xl items-center text-[15px] px-4 py-4 text-[color:var(--color-primary)] transition-colors hover:bg-white/[0.03]">
                    Daha fazla göster
                </Link>
            )}
        </section>
    )
}


SidebarSection.prototype = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    more: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
} 

SidebarSection.defaultProps = {
    more: false
}