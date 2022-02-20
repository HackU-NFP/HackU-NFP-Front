import CryptoJs from 'crypto-js';
import _ from 'lodash';
import RequestBodyFlattener from './request-body-flattener';

export default class SignatureGenerator {
  /*
   * path has to include only path such as /v1/service-tokens/{contractId}/holders, without any query-string
   * parameters is query-parameters
   * body is request body of POST, PUT method
   */
  static signature(
    apiSecret,
    method,
    path,
    timestamp,
    nonce,
    parameters = {},
    body = {}
  ) {
    let obj = _.assignIn(parameters, body);
    function createSignTarget() {
      let signTarget = `${nonce}${timestamp}${method}${path}`;
      if (parameters && _.size(parameters) > 0) {
        if (signTarget.indexOf('?') < 0) {
          signTarget += '?';
        } else {
          signTarget += '&';
        }
      }
      return signTarget;
    }

    let signTarget = createSignTarget();
    if (obj && _.size(obj) > 0) {
      signTarget += RequestBodyFlattener.flatten(obj);
    }
    let hash = CryptoJs.HmacSHA512(signTarget, apiSecret);
    return CryptoJs.enc.Base64.stringify(hash);
  }
}
