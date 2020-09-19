import { Injectable } from '@nestjs/common';
import { PredictionServiceClient } from '@google-cloud/automl';
import * as fs from 'fs';

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

  async getPrediction(filePath: string): Promise<PredictionResult[]> {
    const imageBytes = fs.readFileSync(filePath);

    const request = {
      name: this.client.modelPath(PredictionService.PROJECT_ID, PredictionService.REGION, PredictionService.MODEL_ID),
      payload: {
        image: {
          imageBytes,
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