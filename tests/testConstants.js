import {Address} from "../src/models/address";
import {ErgoBox} from "../src/models/ergoBox";

export const feeErgoTree = '1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304';
export const feeMainnetAddress = '2iHkR7CWvD1R4j1yZg5bkeDRQavjAaVPeTDFGGLZduHyfWMuYpmhHocX8GJoaieTx78FntzJbCBVL6rf96ocJoZdmWBL2fci7NqWgAirppPQmZ7fN9V6z13Ay6brPriBKYqLp1bT2Fk4FkFLCfdPpe';
export const feeTestnetAddress = 'Bf1X9JgQTUtgntaer91B24n6kP8L2kqEiQqNf1z97BKo9UbnW3WRP9VXu8BXd1LsYCiYbHJEdWKxkF5YNx5n7m31wsDjbEuB3B13ZMDVBWkepGmWfGa71otpFViHDCuvbw1uNicAQnfuWfnj8fbCa4';

export const spendAddress = new Address("9fMPy1XY3GW4T6t3LjYofqmzER6x9cV21n5UVJTWmma4Y9mAW6c");
export const newAddress = new Address("9fRusAarL1KkrWQVsxSRVYnvWxaAT2A96cKtNn9tvPh5XUyCisr");
export const boxesToSpendJson = [
  {
    "id": "55014068a416ec69b989c42e51ecad88a21e6fba8975a6fd3995f5c712a5f85a",
    "value": 91000000,
    "creationHeight": 96592,
    "ergoTree": "0008cd026dc059d64a50d0dbf07755c2c4a4e557e3df8afa7141868b3ab200643d437ee7",
    "address": "9fMPy1XY3GW4T6t3LjYofqmzER6x9cV21n5UVJTWmma4Y9mAW6c",
    "assets": [{
      "tokenId": "6ea991394565dfe30e604acb1bdac423dfda2d46009f75b37a375cacb6e907d2",
      "amount": 20000000000
    }, {"tokenId": "fcc5a122f478918737b7b9dbc3e8fdd76cc9776b260f83168eaff0ad8e793b94", "amount": 1000000000000}],
    "additionalRegisters": {},
    "spentTransactionId": null,
    "mainChain": true
  },
  {
    "id": "bc2e78c16e19126d27f20c662afed6f354f1c2d5947d9994a0d668d5ee137bff",
    "value": 1000000,
    "creationHeight": 96592,
    "ergoTree": "0008cd026dc059d64a50d0dbf07755c2c4a4e557e3df8afa7141868b3ab200643d437ee7",
    "address": "9fMPy1XY3GW4T6t3LjYofqmzER6x9cV21n5UVJTWmma4Y9mAW6c",
    "assets": [{
      "tokenId": "830299bdedf6fa0d5d6f574e19007abbbefd00860d275eed85a84bb524cc1cf4",
      "amount": 1000000000000
    }],
    "additionalRegisters": {},
    "spentTransactionId": null,
    "mainChain": true
  }];
export const boxesToSpend = boxesToSpendJson.map((js) => ErgoBox.formObject(js));
