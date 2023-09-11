import { useState } from "react";


export const useAccordion = () => {
    const [expanded, setExpanded] = useState<boolean | number>(false)

    return {
        expanded,
        setExpanded
    }

}