import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { mainMenu } from "~/utils/consts";
import More from "./more";
import New from "./new";
import { useAccount } from "~/store/auth/hooks";

export default function Menu() {

    const account = useAccount()

    return(
        <nav className="mt-0.5 mb-1" key={account}>
            {mainMenu.map((menu, index) => (
                <NavLink to={typeof menu.path == 'function' ? menu.path() : menu.path} key={index} className="py-[3px] block group">
                {({isActive}) => (
                    <div className={classNames("inline-flex items-center gap-5 p-3 rounded-full group-hover:bg-[color:var(--background-third)] transition-colors", {
                        "font-bold": isActive
                    })}>
                    <div className="w-[26.25px] h-[26.25px] relative">
                        {menu.notification && (
                            <span className="w-[18px] h-[18px] rounded-full bg-[color:var(--color-primary)] border border-color-[color:var(--background-primary)] text-white absolute -top-1.5 -right-1 text-[11px] flex items-center justify-center">
                                {menu.notification}
                            </span>
                        )}
                        {!isActive && menu.icon.passive}
                        {isActive && menu.icon.active} 
                    </div>
                    <div className="text-xl pr-4">
                        {menu.title}
                    </div>
                </div>
                )}
            </NavLink>
            ))}

            <More />
            <New />
            
        </nav>
    )
}