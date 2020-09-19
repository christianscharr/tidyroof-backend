import { Injectable } from '@nestjs/common';
import { PredictionServiceClient } from '@google-cloud/automl';
import * as fs from 'fs';
import * as sharp from 'sharp';

export interface PredictionResult {
  productId: string,
  score: number,
  boundingBox: {
    x1: number,
    y1: number,
    x2: number,
    y2: number
  }
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

    for (const annotationPayload of response.payload) {
      console.log(annotationPayload);
      console.log(`Predicted class name: ${annotationPayload.displayName}`);
      console.log(`Predicted class score: ${annotationPayload.imageObjectDetection.score}`);
      console.log('Normalized vertices:');

      for (const vertex of annotationPayload.imageObjectDetection.boundingBox.normalizedVertices) {
        console.log(`\tX: ${vertex.x}, Y: ${vertex.y}`);
      }
    }

    return [];
  }
}
