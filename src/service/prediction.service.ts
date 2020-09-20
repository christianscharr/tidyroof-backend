import { Injectable } from '@nestjs/common';
import { PredictionServiceClient } from '@google-cloud/automl';
import * as fs from 'fs';
import * as sharp from 'sharp';

export interface PredictionResult {
  productId: string,
  score: number
}

@Injectable()
export class PredictionService {
  // constants
  private static PROJECT_ID = '184623698023';
  private static REGION = 'us-central1';
  private static MODEL_ID = 'IOD5266838817930739712';
  private static SCORE_THRESHOLD = '0.7';

  // Instantiates a client
  private client = new PredictionServiceClient();

  protected async loadImageToBuffer(imageFile: fs.PathLike) {
    return new Promise<Buffer>((resolve, reject) => {
      fs.readFile(imageFile, (err, data) => {
        if (err) {
          console.error(`Failed to read uploaded image`, err);
          reject(err);
        }

        resolve(data);
      });
    });
  }

  async getPrediction(imageBuffer: Buffer): Promise<PredictionResult[]> {
    const normalizedImage = await sharp(imageBuffer).rotate().toBuffer(); // auto-orient based on the EXIF orientation

    const request = {
      name: this.client.modelPath(PredictionService.PROJECT_ID, PredictionService.REGION, PredictionService.MODEL_ID),
      payload: {
        image: {
          imageBytes: new Uint8Array(normalizedImage),
        },
      },
      params: {
        score_threshold: PredictionService.SCORE_THRESHOLD,
      },
    };

    const [response] = await this.client.predict(request);
    const resultMap = new Map<string, number>();

    for (const annotationPayload of response.payload) {
      const label = annotationPayload.displayName;
      const score = annotationPayload.imageObjectDetection.score;
      console.log(`Predicted class: ${label}`);
      console.log(`Predicted score: ${score}`);

      if (!resultMap.has(label) || resultMap.get(label) < score) {
        resultMap.set(label, score);
      }
    }

    const resultArray: PredictionResult[] = [];

    resultMap.forEach((rScore, rLabel) => {
      resultArray.push({score: rScore, productId: rLabel.split("_")[0]});
    });

    return resultArray;
  }
}
