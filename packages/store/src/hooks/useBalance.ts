import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { balanceAtom } from "../atoms/balance"

export const useBalance = () => {
    return useRecoilValue(balanceAtom);
}

export const useBalanceUpdate = () => {
    return useSetRecoilState(balanceAtom);
}

