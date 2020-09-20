import {Injectable} from '@nestjs/common';
import {TextToSpeechClient} from '@google-cloud/text-to-speech';
import * as fs from 'fs';
import * as util from 'util';
import {google} from "@google-cloud/text-to-speech/build/protos/protos";
import ISynthesizeSpeechRequest = google.cloud.texttospeech.v1.ISynthesizeSpeechRequest;
import {Product} from "../types/migros-product.type";

@Injectable()
export class TextToSpeechService {
    // Instantiates a client
    private client = new TextToSpeechClient();

    constructor() {}

    async getAudio(product: Product) {
        // The text to synthesize
        const text = `
            Produkt: ${product.name},
            Beschreibung: ${product.description},
            Allergen: ${product.allergenText},
        `;

        // Construct the request
        const request = {
            input: {text: text},
            // Select the language and SSML voice gender (optional)
            // TODO: Sprache Deutsch!
            voice: {languageCode: 'de-ch', ssmlGender: 'NEUTRAL'},
            // select the type of audio encoding
            audioConfig: {audioEncoding: 'MP3'},
        } as ISynthesizeSpeechRequest;

        // Performs the text-to-speech request
        const [response] = await this.client.synthesizeSpeech(request);
        return response.audioContent;

        // Write the binary audio content to a local file
        // const writeFile = util.promisify(fs.writeFile);
        // await writeFile('output.mp3', response.audioContent, 'binary');
    }

}
