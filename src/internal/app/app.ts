import dotenv from 'dotenv';
import readConfig from '../../config/config';
import StartREST from '../delivery/rest/rest';

function newNewsApp() {
  const cfg = readConfig(dotenv);
  StartREST(cfg);
}

export { newNewsApp };
