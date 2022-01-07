import {Serializer} from '../src/serializer';
import {Transaction} from '../src/models/transaction';


test('serialization test vector', () => {

  const testVectors = [
    {
      bytesToSign: '02c95c2ccf55e03cac6659f71ca4df832d28e2375569cec178dcb17f3e2e5f77420000ca796a4fc9c0d746a69702a77bd78b1a80a5ef5bf5713bbd95d93a4f23b27ead00000000028094ebdc030008cd0326df75ea615c18acc6bb4b517ac82795872f388d5d180aac90eaa84de750b942e8070000c0843d1005040004000e36100204cf0f08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304e8070000',
      bytesStr: '02c95c2ccf55e03cac6659f71ca4df832d28e2375569cec178dcb17f3e2e5f774238b4a04b4201da0578be3dac11067b567a73831f35b024a2e623c1f8da230407f63bab62c62ed9b93808b106b5a7e8b1751fa656f4c5de467400ca796a4fc9c0d746a69702a77bd78b1a80a5ef5bf5713bbd95d93a4f23b27ead385aea4d78a234c35accacdf8996b0af5b51e26fee29ea5c05468f23707d31c0df39400127391cd57a70eb856710db48bb9833606e0bf90340000000028094ebdc030008cd0326df75ea615c18acc6bb4b517ac82795872f388d5d180aac90eaa84de750b942e8070000c0843d1005040004000e36100204cf0f08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304e8070000',
      jsonStr: '{"id":"b59ca51f7470f291acc32e84870d00c4fda8b773f38f757f3d65d45265c13da5","inputs":[{"boxId":"c95c2ccf55e03cac6659f71ca4df832d28e2375569cec178dcb17f3e2e5f7742","spendingProof":{"proofBytes":"b4a04b4201da0578be3dac11067b567a73831f35b024a2e623c1f8da230407f63bab62c62ed9b93808b106b5a7e8b1751fa656f4c5de4674","extension":{}}},{"boxId":"ca796a4fc9c0d746a69702a77bd78b1a80a5ef5bf5713bbd95d93a4f23b27ead","spendingProof":{"proofBytes":"5aea4d78a234c35accacdf8996b0af5b51e26fee29ea5c05468f23707d31c0df39400127391cd57a70eb856710db48bb9833606e0bf90340","extension":{}}}],"dataInputs":[],"outputs":[{"boxId":"da288ce9e9a9d39f69634488a8d82c1bf4fb6ddce2f0930d2536016d8167eeb2","value":1000000000,"address":"9gkveVpgG1w23bNA7dghjbXEQ8Ak5cdAEBor41bwiM6atFkoV8R","ergoTree":"0008cd0326df75ea615c18acc6bb4b517ac82795872f388d5d180aac90eaa84de750b942","assets":[],"creationHeight":1000,"additionalRegisters":{},"transactionId":"b59ca51f7470f291acc32e84870d00c4fda8b773f38f757f3d65d45265c13da5","index":0},{"boxId":"be609af4436111d5592dbd52bc64f6a46a1c0605fd30cd61c74850b7f9875762","value":1000000,"address":"2iHkR7CWvD1R4j1yf7bdE3vEDowjo1xVxZpp2LAUkjcLrCPURrPnnuFgi8PmQ3C3TVDjrMXsss6htbrkzXm7rB8J4CVeCbmSpEAjFQaTtfxkyuFfHaVWfQShHjhbNTzziAXct8ozu4od6xbvAyv5wJ","ergoTree":"1005040004000e36100204cf0f08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304","assets":[],"creationHeight":1000,"additionalRegisters":{},"transactionId":"b59ca51f7470f291acc32e84870d00c4fda8b773f38f757f3d65d45265c13da5","index":1}],"size":341}'
    },
    {
      bytesStr: '02c95c2ccf55e03cac6659f71ca4df832d28e2375569cec178dcb17f3e2e5f774238b4a04b4201da0578be3dac11067b567a73831f35b024a2e623c1f8da230407f63bab62c62ed9b93808b106b5a7e8b1751fa656f4c5de467400ca796a4fc9c0d746a69702a77bd78b1a80a5ef5bf5713bbd95d93a4f23b27ead385aea4d78a234c35accacdf8996b0af5b51e26fee29ea5c05468f23707d31c0df39400127391cd57a70eb856710db48bb9833606e0bf90340000000028094ebdc030008cd0326df75ea615c18acc6bb4b517ac82795872f388d5d180aac90eaa84de750b942e8070005020108cd0326df75ea615c18acc6bb4b517ac82795872f388d5d180aac90eaa84de750b94204141103020496d396010e211234561234561234561234561234561234561234561234561234561234561234568094ebdc030008cd0326df75ea615c18acc6bb4b517ac82795872f388d5d180aac90eaa84de750b942e8070000',
      bytesToSign: '02c95c2ccf55e03cac6659f71ca4df832d28e2375569cec178dcb17f3e2e5f77420000ca796a4fc9c0d746a69702a77bd78b1a80a5ef5bf5713bbd95d93a4f23b27ead00000000028094ebdc030008cd0326df75ea615c18acc6bb4b517ac82795872f388d5d180aac90eaa84de750b942e8070005020108cd0326df75ea615c18acc6bb4b517ac82795872f388d5d180aac90eaa84de750b94204141103020496d396010e211234561234561234561234561234561234561234561234561234561234561234568094ebdc030008cd0326df75ea615c18acc6bb4b517ac82795872f388d5d180aac90eaa84de750b942e8070000',
      jsonStr: '{"id":"bd04a93f67fda77d89afc38cd8237f142ad5a349405929fd1f7b7f24c4ea2e80","inputs":[{"boxId":"c95c2ccf55e03cac6659f71ca4df832d28e2375569cec178dcb17f3e2e5f7742","spendingProof":{"proofBytes":"b4a04b4201da0578be3dac11067b567a73831f35b024a2e623c1f8da230407f63bab62c62ed9b93808b106b5a7e8b1751fa656f4c5de4674","extension":{}}},{"boxId":"ca796a4fc9c0d746a69702a77bd78b1a80a5ef5bf5713bbd95d93a4f23b27ead","spendingProof":{"proofBytes":"5aea4d78a234c35accacdf8996b0af5b51e26fee29ea5c05468f23707d31c0df39400127391cd57a70eb856710db48bb9833606e0bf90340","extension":{}}}],"dataInputs":[],"outputs":[{"boxId":"1baffa8e5ffce634a8e70530023c16a5c177d2b5ab756ae89a8dce2a23ba433c","value":1000000000,"address":"9gkveVpgG1w23bNA7dghjbXEQ8Ak5cdAEBor41bwiM6atFkoV8R","ergoTree":"0008cd0326df75ea615c18acc6bb4b517ac82795872f388d5d180aac90eaa84de750b942","assets":[],"creationHeight":1000,"additionalRegisters":{"R4":"0201","R5":"08cd0326df75ea615c18acc6bb4b517ac82795872f388d5d180aac90eaa84de750b942","R6":"0414","R7":"1103020496d39601","R8":"0e21123456123456123456123456123456123456123456123456123456123456123456"},"transactionId":"bd04a93f67fda77d89afc38cd8237f142ad5a349405929fd1f7b7f24c4ea2e80","index":0},{"boxId":"33eff46f94067b32073d5f81984607be559108f58bc3f53906a1e8db7cf0f708","value":1000000000,"address":"9gkveVpgG1w23bNA7dghjbXEQ8Ak5cdAEBor41bwiM6atFkoV8R","ergoTree":"0008cd0326df75ea615c18acc6bb4b517ac82795872f388d5d180aac90eaa84de750b942","assets":[],"creationHeight":1000,"additionalRegisters":{},"transactionId":"bd04a93f67fda77d89afc38cd8237f142ad5a349405929fd1f7b7f24c4ea2e80","index":1}],"size":356}'
    },
    {
      bytesStr: '02e76bf387ab2e63ba8f4e23267bc88265b5fee4950030199e2e2c214334251c6400002e9798d7eb0cd867f6dc29872f80de64c04cef10a99a58d007ef7855f0acbdb9000001f97d1dc4626de22db836270fe1aa004b99970791e4557de8f486f6d433b81195026df03fffc9042bf0edb0d0d36d7a675239b83a9080d39716b9aa0a64cccb9963e76bf387ab2e63ba8f4e23267bc88265b5fee4950030199e2e2c214334251c6403da92a8b8e3ad770008cd02db0ce4d301d6dc0b7a5fbe749588ef4ef68f2c94435020a3c31764ffd36a2176000200daa4eb6b01aec8d1ff0100da92a8b8e3ad770008cd02db0ce4d301d6dc0b7a5fbe749588ef4ef68f2c94435020a3c31764ffd36a2176000200daa4eb6b01aec8d1ff0100fa979af8988ce7010008cd02db0ce4d301d6dc0b7a5fbe749588ef4ef68f2c94435020a3c31764ffd36a2176000000',
      bytesToSign: '02e76bf387ab2e63ba8f4e23267bc88265b5fee4950030199e2e2c214334251c6400002e9798d7eb0cd867f6dc29872f80de64c04cef10a99a58d007ef7855f0acbdb9000001f97d1dc4626de22db836270fe1aa004b99970791e4557de8f486f6d433b81195026df03fffc9042bf0edb0d0d36d7a675239b83a9080d39716b9aa0a64cccb9963e76bf387ab2e63ba8f4e23267bc88265b5fee4950030199e2e2c214334251c6403da92a8b8e3ad770008cd02db0ce4d301d6dc0b7a5fbe749588ef4ef68f2c94435020a3c31764ffd36a2176000200daa4eb6b01aec8d1ff0100da92a8b8e3ad770008cd02db0ce4d301d6dc0b7a5fbe749588ef4ef68f2c94435020a3c31764ffd36a2176000200daa4eb6b01aec8d1ff0100fa979af8988ce7010008cd02db0ce4d301d6dc0b7a5fbe749588ef4ef68f2c94435020a3c31764ffd36a2176000000',
      jsonStr: '{"id":"663ae91ab7145a4f42b5509e1a2fb0469b7cb46ea87fdfd90e0b4c8ef29c2493","inputs":[{"boxId":"e76bf387ab2e63ba8f4e23267bc88265b5fee4950030199e2e2c214334251c64","spendingProof":{"proofBytes":"","extension":{}}},{"boxId":"2e9798d7eb0cd867f6dc29872f80de64c04cef10a99a58d007ef7855f0acbdb9","spendingProof":{"proofBytes":"","extension":{}}}],"dataInputs":[{"boxId":"f97d1dc4626de22db836270fe1aa004b99970791e4557de8f486f6d433b81195"}],"outputs":[{"boxId":"69e05b68715caaa4ca58ba59a8c8c7e031d42ad890b05f87021a28617c1e70d5","value":524940416256346,"address":"9gBXrzBcJRV7WsqAdduLbcinVQnKwfRtvpyQ1MBbYT6qdzNjYX4","ergoTree":"0008cd02db0ce4d301d6dc0b7a5fbe749588ef4ef68f2c94435020a3c31764ffd36a2176","assets":[{"tokenId":"6df03fffc9042bf0edb0d0d36d7a675239b83a9080d39716b9aa0a64cccb9963","amount":226153050},{"tokenId":"e76bf387ab2e63ba8f4e23267bc88265b5fee4950030199e2e2c214334251c64","amount":536110126}],"creationHeight":0,"additionalRegisters":{},"transactionId":"663ae91ab7145a4f42b5509e1a2fb0469b7cb46ea87fdfd90e0b4c8ef29c2493","index":0},{"boxId":"556a9a3ec7880d468e56d44e75898cf8a32f6a07344895fa6b5cf34edf101a59","value":524940416256346,"address":"9gBXrzBcJRV7WsqAdduLbcinVQnKwfRtvpyQ1MBbYT6qdzNjYX4","ergoTree":"0008cd02db0ce4d301d6dc0b7a5fbe749588ef4ef68f2c94435020a3c31764ffd36a2176","assets":[{"tokenId":"6df03fffc9042bf0edb0d0d36d7a675239b83a9080d39716b9aa0a64cccb9963","amount":226153050},{"tokenId":"e76bf387ab2e63ba8f4e23267bc88265b5fee4950030199e2e2c214334251c64","amount":536110126}],"creationHeight":0,"additionalRegisters":{},"transactionId":"663ae91ab7145a4f42b5509e1a2fb0469b7cb46ea87fdfd90e0b4c8ef29c2493","index":1},{"boxId":"16385b5b83992629909c7e004ed0421229ed3587162ce6f29b2df129472e3909","value":1016367755463674,"address":"9gBXrzBcJRV7WsqAdduLbcinVQnKwfRtvpyQ1MBbYT6qdzNjYX4","ergoTree":"0008cd02db0ce4d301d6dc0b7a5fbe749588ef4ef68f2c94435020a3c31764ffd36a2176","assets":[],"creationHeight":0,"additionalRegisters":{},"transactionId":"663ae91ab7145a4f42b5509e1a2fb0469b7cb46ea87fdfd90e0b4c8ef29c2493","index":2}],"size":329}'
    }
  ];

  testVectors.forEach((tv) => {
    const tx = Transaction.formObject(JSON.parse(tv.jsonStr));
    const bytes = Serializer.transactionToBytes(tx);

    expect(bytes.toString('hex'))
      .toBe(tv.bytesStr);
  });
});


test('stringFromHex and back', () => {
  const pairs = [
    ['test', '74657374'],
    ['ERG', '455247'],
    ['Token name', '546f6b656e206e616d65'],
    ['--Token--', '2d2d546f6b656e2d2d'],
    ['1234', '31323334'],
    ['32123', '3332313233'],
    ['-1-4_!@', '2d312d345f2140'],
  ];
  pairs.forEach((str) => {
    const encoded = Serializer.stringToHex(str[0]);
    expect(encoded).toBe(str[1]);
    const decoded = Serializer.stringFromHex(encoded);
    expect(decoded).toBe(str[0]);
  });

});


test('intToVlq test vectors', () => {

  const pairs = [
    [1, '01'],
    [127, '7f'],
    [14882, 'a274'],
    [41256202580718336, '80e6eb9cc3c9a449'],
  ];

  pairs.forEach((pair) => {
    expect(Serializer.intToVlq(pair[0])
      .toString('hex'))
      .toBe(pair[1]);
  });


});
