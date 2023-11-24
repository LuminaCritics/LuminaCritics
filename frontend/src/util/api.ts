import axios from 'axios';
import type { AxiosInstance } from 'axios';
import * as Constantes from "../util/Constant";

const MontarAxiosAPI = (): AxiosInstance => {
    const instance = axios.create({ baseURL: Constantes.URL_BASE });
    // instance.defaults.headers.common['Bypass-Tunnel-Reminder'] = true;

    // const token = localStorage.getItem('enc_jwt');
    // if (token !== null) {
    //     instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    // }

    return instance;
}

export default MontarAxiosAPI;
