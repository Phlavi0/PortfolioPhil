import type {recentlisten} from "../Composables/types";
import { ref, onMounted } from 'vue';

const API_URL = 'http://ws.audioscrobbler.com/2.0/?';
const params = new URLSearchParams({method:'user.getrecenttracks', user:'phlavi0', api_key: '4e94a5a7ca331cdc19c4f269b0abecc0',totalpages:'10', format:'json'});
const tracks = ref<recentlisten[]>([]);
export function useLastfm(){
    onMounted(async () => {
        try {
            const response = await fetch(API_URL + params)
            const data = await response.json();
            tracks.value = data.recenttracks.track;

        } catch (error) {
            console.error(error)
        }
        setInterval(useLastfm, 5000);
    });

    return {tracks}
}
