import axios from 'axios';
import * as Constantes from "../utils/constants"


const MontarAxiosAPI = () => {
    const instance = axios.create({baseURL: Constantes.URL_BASE});
    return instance
}
export default MontarAxiosAPI