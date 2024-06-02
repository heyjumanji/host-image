import {onMounted, ref} from "vue";
import {getWallpaper} from "../api";
export function useWallpapers() {
    const wallpapers = ref<{url:string}[]>([])
    onMounted(async () => {
        const response = await getWallpaper()
        if(response.data.status){
            wallpapers.value = response.data.data.map(item => {
                return {
                    ...item,
                    url: `https://host-image.pages.dev/file/bce9ccfe1c389d753cc1c.jpg`
                }
            })
        }
    })
    return {
        wallpapers
    }
}
