import { useAccounts, useAccount } from "~/store/auth/hooks"
import classNames from "classnames";
import { setCurrentAccount } from "~/store/auth/action";

export default function More({ close }) {

    const currentAccount = useAccount()
    const accounts = useAccounts()

    return (
        <div>
            {(Object.keys(accounts).length > 1) && ( 
                <>
                {accounts.map((account,index) => (
                    <button type="button" onClick={() => {setCurrentAccount(account), close()}} disabled={currentAccount.id == account.id}  key={index} className={classNames("py-3 px-4 flex text-left items-center w-full transition-colors outline-none",{
                        "hover:bg-[#eff3f41a]": currentAccount.id !== account.id
                    })}>
                        <img src={account.avatar} className="w-10 h-10 rounded-full" /> 
                        <div className='mx-3 text-[15px] flex-1'>
                            <h6 className='font-bold'>{account.fullName}</h6>
                            <div className='text-[#71767b]'>
                            @{account.username}
                            </div>
                        </div>
                        {currentAccount.id == account.id && (
                            <svg viewBox="0 0 24 24" className="mr-2 ml-3" width={18.75} height={18.75} fill="#00ba7c">
                            <path
                                d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18-5.21 7.15z"
                            />
                        </svg>
                        )}
                    </button>
                ))}
                <div className="h-px bg-[#2f3336] my-3" />
                </>
            )}
            <button className="py-3 px-4 text-left  hover:bg-[#eff3f41a] transition-colors w-full text-[#e7e9ea] text-[15px] font-bold leading-[20px]">
                    Var olan bir hesap ekle
            </button>
            {(Object.keys(accounts).length >1) && (
                <button className="py-3 px-4 text-left  hover:bg-[#eff3f41a] transition-colors w-full text-[#e7e9ea] text-[15px] font-bold leading-[20px]">
                Hesapları yönet
                </button>
            )}
            <button className="py-3 px-4 text-left  hover:bg-[#eff3f41a] transition-colors w-full text-[#e7e9ea] text-[15px] font-bold leading-[20px]">
                <div className="max-w-[228px]">
                    @{currentAccount.username} hesabından çıkış yap
                </div>
            </button>
        </div>
    )
}