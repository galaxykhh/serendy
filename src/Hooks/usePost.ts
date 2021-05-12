
import { useRef, useState } from 'react'

export const usePost = () => {
    const [isSent, setIsSent] = useState<boolean>(false);
    const textArea = useRef<HTMLTextAreaElement>(null);

    const handlePost = (): void => {
        setIsSent(!isSent);
        console.log(isSent);
    }

    return {
        isSent,
        textArea,
        handlePost
    }
}