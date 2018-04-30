SystemJS.config({
    paths: {},
    browserConfig: {
        "paths": {
            "npm:": "/jspm_packages/npm/",
            "voya-github:": "/jspm_packages/voya-github/",
            "github:": "/jspm_packages/github/"
        }
    },
    nodeConfig: {
        "paths": {
            "github:": "jspm_packages/github/",
            "npm:": "jspm_packages/npm/",
            "voya-github:": "jspm_packages/voya-github/"
        }
    },
    transpiler: "plugin-babel",
    meta: {
        "*.js": {
            "babelOptions": {
                "stage2": true,
                "plugins": [
                    "babel-plugin-transform-decorators-legacy"
                ]
            }
        }
    },
    defaultExtension: "js",
    packages: {
        "hax-body": {
            "main": "main.js",
            "format": "esm",
            "configured": true,
            "defaultExtension": "js"
        }
    }
});

SystemJS.config({
    packageConfigPaths: [
        "npm:@*/*.json",
        "npm:*.json",
        "voya-github:*/*.json",
        "github:*/*.json"
    ],
    map: {
        "assert": "npm:jspm-nodelibs-assert@0.2.1",
        "babel-plugin-transform-decorators-legacy": "npm:babel-plugin-transform-decorators-legacy@1.3.4",
        "branding": "voya-github:Voya/deep-ui-branding@1.9.1",
        "buffer": "npm:jspm-nodelibs-buffer@0.2.3",
        "constants": "npm:jspm-nodelibs-constants@0.2.1",
        "crypto": "npm:jspm-nodelibs-crypto@0.2.1",
        "debounce": "npm:debounce@1.1.0",
        "dlv": "npm:dlv@1.1.1",
        "dom-delegate": "npm:dom-delegate@2.0.3",
        "events": "npm:jspm-nodelibs-events@0.2.2",
        "fs": "npm:jspm-nodelibs-fs@0.2.1",
        "os": "npm:jspm-nodelibs-os@0.2.2",
        "path": "npm:jspm-nodelibs-path@0.2.3",
        "plugin-babel": "npm:systemjs-plugin-babel@0.0.25",
        "process": "npm:jspm-nodelibs-process@0.2.1",
        "stream": "npm:jspm-nodelibs-stream@0.2.1",
        "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.2",
        "util": "npm:jspm-nodelibs-util@0.2.2",
        "vm": "npm:jspm-nodelibs-vm@0.2.1",
        "voya-base-styles": "voya-github:Voya/deep-ui-voya-base-styles@2.7.2",
        "voya-button": "voya-github:Voya/deep-ui-voya-button@5.4.3",
        "voya-component-utils": "voya-github:Voya/deep-ui-voya-component-utils@3.5.4",
        "voya-content": "voya-github:i702118/deep-ui-voya-content@hax",
        "voya-expand-collapse": "voya-github:Voya/deep-ui-voya-expand-collapse@2.4.0",
        "voya-notification": "voya-github:Voya/deep-ui-voya-notification@3.1.0",
        "whatwg-fetch": "npm:whatwg-fetch@1.1.1"
    },
    packages: {
        "npm:babel-plugin-transform-decorators-legacy@1.3.4": {
            "map": {
                "babel-template": "npm:babel-template@6.26.0",
                "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.13.0",
                "babel-runtime": "npm:babel-runtime@6.26.0"
            }
        },
        "npm:babel-template@6.26.0": {
            "map": {
                "babel-runtime": "npm:babel-runtime@6.26.0",
                "babel-traverse": "npm:babel-traverse@6.26.0",
                "babel-types": "npm:babel-types@6.26.0",
                "babylon": "npm:babylon@6.18.0",
                "lodash": "npm:lodash@4.17.10"
            }
        },
        "npm:babel-runtime@6.26.0": {
            "map": {
                "core-js": "npm:core-js@2.5.5",
                "regenerator-runtime": "npm:regenerator-runtime@0.11.1"
            }
        },
        "voya-github:Voya/deep-ui-voya-base-styles@2.7.2": {
            "map": {
                "font-awesome": "npm:font-awesome@4.6.3",
                "compass-mixins": "github:Igosuki/compass-mixins@1.0.2"
            }
        },
        "npm:babel-traverse@6.26.0": {
            "map": {
                "babel-runtime": "npm:babel-runtime@6.26.0",
                "babel-types": "npm:babel-types@6.26.0",
                "babylon": "npm:babylon@6.18.0",
                "lodash": "npm:lodash@4.17.10",
                "babel-code-frame": "npm:babel-code-frame@6.26.0",
                "babel-messages": "npm:babel-messages@6.23.0",
                "invariant": "npm:invariant@2.2.4",
                "globals": "npm:globals@9.18.0",
                "debug": "npm:debug@2.6.9"
            }
        },
        "npm:babel-types@6.26.0": {
            "map": {
                "babel-runtime": "npm:babel-runtime@6.26.0",
                "lodash": "npm:lodash@4.17.10",
                "esutils": "npm:esutils@2.0.2",
                "to-fast-properties": "npm:to-fast-properties@1.0.3"
            }
        },
        "voya-github:Voya/deep-ui-voya-expand-collapse@2.4.0": {
            "map": {
                "dom-delegate": "npm:dom-delegate@2.0.3",
                "voya-base-styles": "voya-github:Voya/deep-ui-voya-base-styles@2.7.2",
                "debounce": "npm:debounce@1.1.0",
                "voya-component-utils": "voya-github:Voya/deep-ui-voya-component-utils@3.5.4",
                "store2": "npm:store2@2.7.0",
                "js-cookie": "npm:js-cookie@2.2.0"
            }
        },
        "voya-github:Voya/deep-ui-branding@1.9.1": {
            "map": {
                "extend": "npm:extend@2.0.1",
                "stylesheet": "voya-github:Voya/deep-ui-stylesheet@2.0.0",
                "http-client": "voya-github:Voya/deep-ui-http-client@0.2.0"
            }
        },
        "npm:babel-messages@6.23.0": {
            "map": {
                "babel-runtime": "npm:babel-runtime@6.26.0"
            }
        },
        "npm:babel-code-frame@6.26.0": {
            "map": {
                "esutils": "npm:esutils@2.0.2",
                "js-tokens": "npm:js-tokens@3.0.2",
                "chalk": "npm:chalk@1.1.3"
            }
        },
        "voya-github:Voya/deep-ui-voya-button@5.4.3": {
            "map": {
                "dom-delegate": "npm:dom-delegate@2.0.3",
                "voya-base-styles": "voya-github:Voya/deep-ui-voya-base-styles@2.7.2",
                "voya-component-utils": "voya-github:Voya/deep-ui-voya-component-utils@3.5.4"
            }
        },
        "npm:invariant@2.2.4": {
            "map": {
                "loose-envify": "npm:loose-envify@1.3.1"
            }
        },
        "npm:font-awesome@4.6.3": {
            "map": {
                "css": "github:systemjs/plugin-css@0.1.37"
            }
        },
        "npm:loose-envify@1.3.1": {
            "map": {
                "js-tokens": "npm:js-tokens@3.0.2"
            }
        },
        "voya-github:i702118/deep-ui-voya-content@hax": {
            "map": {
                "dom-delegate": "npm:dom-delegate@2.0.3",
                "voya-base-styles": "voya-github:Voya/deep-ui-voya-base-styles@2.7.2",
                "voya-button": "voya-github:Voya/deep-ui-voya-button@5.4.3",
                "voya-component-utils": "voya-github:Voya/deep-ui-voya-component-utils@3.5.4",
                "http-client": "voya-github:Voya/deep-ui-http-client@0.4.1",
                "voya-modal": "voya-github:Voya/deep-ui-voya-modal@2.1.0",
                "voya-indicator": "voya-github:Voya/deep-ui-voya-indicator@3.2.1",
                "logger": "voya-github:i702118/deep-ui-logger@1.0.0"
            }
        },
        "voya-github:Voya/deep-ui-voya-component-utils@3.5.4": {
            "map": {
                "camelcase": "npm:camelcase@2.1.1",
                "decamelize": "npm:decamelize@1.2.0",
                "custom-event-polyfill": "npm:custom-event-polyfill@0.2.2",
                "focusin": "npm:focusin@2.0.0"
            }
        },
        "npm:debug@2.6.9": {
            "map": {
                "ms": "npm:ms@2.0.0"
            }
        },
        "voya-github:Voya/deep-ui-voya-notification@3.1.0": {
            "map": {
                "dom-delegate": "npm:dom-delegate@2.0.3",
                "voya-base-styles": "voya-github:Voya/deep-ui-voya-base-styles@2.7.2",
                "voya-component-utils": "voya-github:Voya/deep-ui-voya-component-utils@3.5.4"
            }
        },
        "npm:chalk@1.1.3": {
            "map": {
                "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
                "has-ansi": "npm:has-ansi@2.0.0",
                "ansi-styles": "npm:ansi-styles@2.2.1",
                "strip-ansi": "npm:strip-ansi@3.0.1",
                "supports-color": "npm:supports-color@2.0.0"
            }
        },
        "voya-github:Voya/deep-ui-http-client@0.2.0": {
            "map": {
                "whatwg-fetch": "npm:whatwg-fetch@1.1.1",
                "store2": "npm:store2@2.7.0",
                "voya-component-utils": "voya-github:Voya/deep-ui-voya-component-utils@3.5.4"
            }
        },
        "npm:jspm-nodelibs-stream@0.2.1": {
            "map": {
                "stream-browserify": "npm:stream-browserify@2.0.1"
            }
        },
        "npm:has-ansi@2.0.0": {
            "map": {
                "ansi-regex": "npm:ansi-regex@2.1.1"
            }
        },
        "npm:strip-ansi@3.0.1": {
            "map": {
                "ansi-regex": "npm:ansi-regex@2.1.1"
            }
        },
        "npm:stream-browserify@2.0.1": {
            "map": {
                "inherits": "npm:inherits@2.0.3",
                "readable-stream": "npm:readable-stream@2.3.6"
            }
        },
        "npm:readable-stream@2.3.6": {
            "map": {
                "inherits": "npm:inherits@2.0.3",
                "process-nextick-args": "npm:process-nextick-args@2.0.0",
                "util-deprecate": "npm:util-deprecate@1.0.2",
                "core-util-is": "npm:core-util-is@1.0.2",
                "safe-buffer": "npm:safe-buffer@5.1.2",
                "isarray": "npm:isarray@1.0.0",
                "string_decoder": "npm:string_decoder@1.1.1"
            }
        },
        "voya-github:Voya/deep-ui-voya-modal@2.1.0": {
            "map": {
                "dom-delegate": "npm:dom-delegate@2.0.3",
                "voya-base-styles": "voya-github:Voya/deep-ui-voya-base-styles@2.7.2",
                "voya-component-utils": "voya-github:Voya/deep-ui-voya-component-utils@3.5.4",
                "tabbable": "npm:tabbable@1.0.3"
            }
        },
        "npm:jspm-nodelibs-buffer@0.2.3": {
            "map": {
                "buffer": "npm:buffer@5.1.0"
            }
        },
        "voya-github:Voya/deep-ui-http-client@0.4.1": {
            "map": {
                "whatwg-fetch": "npm:whatwg-fetch@1.1.1",
                "store2": "npm:store2@2.7.0",
                "voya-component-utils": "voya-github:Voya/deep-ui-voya-component-utils@3.5.4"
            }
        },
        "npm:string_decoder@1.1.1": {
            "map": {
                "safe-buffer": "npm:safe-buffer@5.1.2"
            }
        },
        "voya-github:Voya/deep-ui-voya-indicator@3.2.1": {
            "map": {
                "dom-delegate": "npm:dom-delegate@2.0.3",
                "voya-base-styles": "voya-github:Voya/deep-ui-voya-base-styles@2.7.2",
                "voya-component-utils": "voya-github:Voya/deep-ui-voya-component-utils@3.5.4"
            }
        },
        "voya-github:i702118/deep-ui-logger@1.0.0": {
            "map": {
                "js-cookie": "npm:js-cookie@2.2.0",
                "http-client": "voya-github:Voya/deep-ui-http-client@0.4.1",
                "voya-component-utils": "voya-github:Voya/deep-ui-voya-component-utils@3.5.4"
            }
        },
        "npm:buffer@5.1.0": {
            "map": {
                "ieee754": "npm:ieee754@1.1.11",
                "base64-js": "npm:base64-js@1.3.0"
            }
        },
        "npm:jspm-nodelibs-os@0.2.2": {
            "map": {
                "os-browserify": "npm:os-browserify@0.3.0"
            }
        },
        "npm:jspm-nodelibs-crypto@0.2.1": {
            "map": {
                "crypto-browserify": "npm:crypto-browserify@3.12.0"
            }
        },
        "npm:crypto-browserify@3.12.0": {
            "map": {
                "inherits": "npm:inherits@2.0.3",
                "randombytes": "npm:randombytes@2.0.6",
                "browserify-sign": "npm:browserify-sign@4.0.4",
                "diffie-hellman": "npm:diffie-hellman@5.0.3",
                "public-encrypt": "npm:public-encrypt@4.0.2",
                "create-ecdh": "npm:create-ecdh@4.0.1",
                "pbkdf2": "npm:pbkdf2@3.0.16",
                "randomfill": "npm:randomfill@1.0.4",
                "create-hmac": "npm:create-hmac@1.1.7",
                "browserify-cipher": "npm:browserify-cipher@1.0.1",
                "create-hash": "npm:create-hash@1.2.0"
            }
        },
        "npm:create-hmac@1.1.7": {
            "map": {
                "inherits": "npm:inherits@2.0.3",
                "safe-buffer": "npm:safe-buffer@5.1.2",
                "create-hash": "npm:create-hash@1.2.0",
                "cipher-base": "npm:cipher-base@1.0.4",
                "ripemd160": "npm:ripemd160@2.0.2",
                "sha.js": "npm:sha.js@2.4.11"
            }
        },
        "npm:public-encrypt@4.0.2": {
            "map": {
                "create-hash": "npm:create-hash@1.2.0",
                "randombytes": "npm:randombytes@2.0.6",
                "parse-asn1": "npm:parse-asn1@5.1.1",
                "bn.js": "npm:bn.js@4.11.8",
                "browserify-rsa": "npm:browserify-rsa@4.0.1"
            }
        },
        "npm:diffie-hellman@5.0.3": {
            "map": {
                "randombytes": "npm:randombytes@2.0.6",
                "miller-rabin": "npm:miller-rabin@4.0.1",
                "bn.js": "npm:bn.js@4.11.8"
            }
        },
        "npm:create-hash@1.2.0": {
            "map": {
                "inherits": "npm:inherits@2.0.3",
                "cipher-base": "npm:cipher-base@1.0.4",
                "ripemd160": "npm:ripemd160@2.0.2",
                "md5.js": "npm:md5.js@1.3.4",
                "sha.js": "npm:sha.js@2.4.11"
            }
        },
        "npm:pbkdf2@3.0.16": {
            "map": {
                "safe-buffer": "npm:safe-buffer@5.1.2",
                "create-hash": "npm:create-hash@1.2.0",
                "create-hmac": "npm:create-hmac@1.1.7",
                "ripemd160": "npm:ripemd160@2.0.2",
                "sha.js": "npm:sha.js@2.4.11"
            }
        },
        "npm:randombytes@2.0.6": {
            "map": {
                "safe-buffer": "npm:safe-buffer@5.1.2"
            }
        },
        "npm:browserify-sign@4.0.4": {
            "map": {
                "inherits": "npm:inherits@2.0.3",
                "create-hash": "npm:create-hash@1.2.0",
                "create-hmac": "npm:create-hmac@1.1.7",
                "parse-asn1": "npm:parse-asn1@5.1.1",
                "bn.js": "npm:bn.js@4.11.8",
                "elliptic": "npm:elliptic@6.4.0",
                "browserify-rsa": "npm:browserify-rsa@4.0.1"
            }
        },
        "npm:randomfill@1.0.4": {
            "map": {
                "safe-buffer": "npm:safe-buffer@5.1.2",
                "randombytes": "npm:randombytes@2.0.6"
            }
        },
        "npm:browserify-cipher@1.0.1": {
            "map": {
                "browserify-aes": "npm:browserify-aes@1.2.0",
                "browserify-des": "npm:browserify-des@1.0.1",
                "evp_bytestokey": "npm:evp_bytestokey@1.0.3"
            }
        },
        "npm:create-ecdh@4.0.1": {
            "map": {
                "bn.js": "npm:bn.js@4.11.8",
                "elliptic": "npm:elliptic@6.4.0"
            }
        },
        "npm:parse-asn1@5.1.1": {
            "map": {
                "browserify-aes": "npm:browserify-aes@1.2.0",
                "create-hash": "npm:create-hash@1.2.0",
                "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
                "pbkdf2": "npm:pbkdf2@3.0.16",
                "asn1.js": "npm:asn1.js@4.10.1"
            }
        },
        "npm:browserify-aes@1.2.0": {
            "map": {
                "inherits": "npm:inherits@2.0.3",
                "safe-buffer": "npm:safe-buffer@5.1.2",
                "cipher-base": "npm:cipher-base@1.0.4",
                "create-hash": "npm:create-hash@1.2.0",
                "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
                "buffer-xor": "npm:buffer-xor@1.0.3"
            }
        },
        "npm:ripemd160@2.0.2": {
            "map": {
                "inherits": "npm:inherits@2.0.3",
                "hash-base": "npm:hash-base@3.0.4"
            }
        },
        "npm:browserify-des@1.0.1": {
            "map": {
                "inherits": "npm:inherits@2.0.3",
                "cipher-base": "npm:cipher-base@1.0.4",
                "des.js": "npm:des.js@1.0.0"
            }
        },
        "npm:cipher-base@1.0.4": {
            "map": {
                "inherits": "npm:inherits@2.0.3",
                "safe-buffer": "npm:safe-buffer@5.1.2"
            }
        },
        "npm:md5.js@1.3.4": {
            "map": {
                "inherits": "npm:inherits@2.0.3",
                "hash-base": "npm:hash-base@3.0.4"
            }
        },
        "npm:evp_bytestokey@1.0.3": {
            "map": {
                "md5.js": "npm:md5.js@1.3.4",
                "safe-buffer": "npm:safe-buffer@5.1.2"
            }
        },
        "npm:miller-rabin@4.0.1": {
            "map": {
                "bn.js": "npm:bn.js@4.11.8",
                "brorand": "npm:brorand@1.1.0"
            }
        },
        "npm:elliptic@6.4.0": {
            "map": {
                "bn.js": "npm:bn.js@4.11.8",
                "inherits": "npm:inherits@2.0.3",
                "brorand": "npm:brorand@1.1.0",
                "hash.js": "npm:hash.js@1.1.3",
                "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
                "hmac-drbg": "npm:hmac-drbg@1.0.1",
                "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
            }
        },
        "npm:sha.js@2.4.11": {
            "map": {
                "inherits": "npm:inherits@2.0.3",
                "safe-buffer": "npm:safe-buffer@5.1.2"
            }
        },
        "npm:browserify-rsa@4.0.1": {
            "map": {
                "bn.js": "npm:bn.js@4.11.8",
                "randombytes": "npm:randombytes@2.0.6"
            }
        },
        "npm:des.js@1.0.0": {
            "map": {
                "inherits": "npm:inherits@2.0.3",
                "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
            }
        },
        "npm:hash-base@3.0.4": {
            "map": {
                "inherits": "npm:inherits@2.0.3",
                "safe-buffer": "npm:safe-buffer@5.1.2"
            }
        },
        "npm:asn1.js@4.10.1": {
            "map": {
                "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
                "bn.js": "npm:bn.js@4.11.8",
                "inherits": "npm:inherits@2.0.3"
            }
        },
        "npm:jspm-nodelibs-string_decoder@0.2.2": {
            "map": {
                "string_decoder": "npm:string_decoder@0.10.31"
            }
        },
        "npm:hmac-drbg@1.0.1": {
            "map": {
                "hash.js": "npm:hash.js@1.1.3",
                "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
                "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
            }
        },
        "npm:hash.js@1.1.3": {
            "map": {
                "inherits": "npm:inherits@2.0.3",
                "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
            }
        }
    }
});
