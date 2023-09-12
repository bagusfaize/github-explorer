import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


export const useAccordion = () => {
    const searchParams = useSearchParams();
    const username = searchParams.get("username") || '';
    const [expanded, setExpanded] = useState<boolean | number>(false);

    useEffect(() => {
        setExpanded(false);
    }, [username])

    return {
        expanded,
        setExpanded
    }

}