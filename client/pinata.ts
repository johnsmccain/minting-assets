import pinataSDK from "@pinata/sdk";

const {PINATA_API_KEY, PINATA_API_SECRETE_KEY} = process.env

const pinata = new pinataSDK(PINATA_API_KEY, PINATA_API_SECRETE_KEY)