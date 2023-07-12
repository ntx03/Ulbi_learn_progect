import {useEffect} from "react";


/**
 * функция проверяет переменную __PROJECT__ на неравенство 'storybook', если неравенство true, то выполняется переданный в нее callback
 * @param callback
 */
export function useInitialEffect(callback: ()=> void){
    useEffect(()=>{
        if (__PROJECT__ !== 'storybook') {
            callback()
        }
        // eslint-disable-next-line
    }, [])
}
